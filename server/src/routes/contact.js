import { Router } from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Delivery:
//  - RESEND_API_KEY set → every message is emailed to CONTACT_TO (used on Vercel).
//  - otherwise          → messages are appended to storage/messages.json (local / Docker).
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || 'rijonz29@gmail.com';
const CONTACT_FROM = process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORAGE_DIR = process.env.STORAGE_DIR || path.resolve(__dirname, '../../storage');
const FILE = path.join(STORAGE_DIR, 'messages.json');

const router = Router();

// Simple in-memory rate limit: max 5 messages per IP per 15 minutes.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

async function sendEmail({ name, email, message }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email, // hitting "Reply" in Gmail answers the visitor directly
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 12px">New message from your portfolio</h2>
          <p style="margin:0"><b>Name:</b> ${escapeHtml(name)}</p>
          <p style="margin:0 0 16px"><b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <div style="padding:16px;background:#f1f5f9;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function saveToFile(entry) {
  await fs.mkdir(STORAGE_DIR, { recursive: true });
  let messages = [];
  try {
    messages = JSON.parse(await fs.readFile(FILE, 'utf8'));
  } catch {
    /* first message */
  }
  messages.push({ ...entry, receivedAt: new Date().toISOString() });
  await fs.writeFile(FILE, JSON.stringify(messages, null, 2));
}

router.post('/', async (req, res) => {
  const { name = '', email = '', message = '', website = '' } = req.body || {};

  // Honeypot field: real users never fill it, bots usually do.
  if (website) return res.json({ ok: true });

  const errors = {};
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100) errors.name = 'invalid';
  if (typeof email !== 'string' || !EMAIL_RE.test(email) || email.length > 200) errors.email = 'invalid';
  if (typeof message !== 'string' || message.trim().length < 10 || message.length > 5000) errors.message = 'invalid';
  if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });

  if (rateLimited(req.ip)) return res.status(429).json({ ok: false, error: 'rate_limited' });

  const entry = { name: name.trim(), email: email.trim(), message: message.trim() };
  try {
    if (RESEND_API_KEY) await sendEmail(entry);
    else await saveToFile(entry);
    console.log(`New contact message from ${entry.name} <${entry.email}>`);
    res.json({ ok: true });
  } catch (err) {
    console.error('Delivering message failed:', err.message);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
});

export default router;
