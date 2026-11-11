// The Express app with all API routes. It does not listen on a port, so the same
// app runs locally (src/index.js), in Docker, and as a Vercel serverless function (api/index.js).
import express from 'express';
import cors from 'cors';

import portfolioRouter from './routes/portfolio.js';
import githubRouter from './routes/github.js';
import contactRouter from './routes/contact.js';

const app = express();

app.disable('x-powered-by');
app.set('trust proxy', 1); // correct client IPs (rate limiting) behind a hosting proxy

// Basic security headers
app.use((_req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  });
  next();
});

if (process.env.NODE_ENV !== 'production') app.use(cors());
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/portfolio', portfolioRouter);
app.use('/api/github', githubRouter);
app.use('/api/contact', contactRouter);

app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

export default app;
