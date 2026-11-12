import { useState } from 'react';
import { useSettings } from '../settings.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons.jsx';

const EMPTY = { name: '', email: '', message: '', website: '' };

export default function Contact({ profile }) {
  const { t } = useSettings();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: 'idle' }); // idle | sending | ok | error
  const [fieldErrors, setFieldErrors] = useState({});

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus({ state: 'sending' });
    setFieldErrors({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setForm(EMPTY);
        setStatus({ state: 'ok', msg: t('contact.ok') });
      } else if (res.status === 400) {
        setFieldErrors(body.errors || {});
        setStatus({ state: 'error', msg: t('contact.invalid') });
      } else if (res.status === 429) {
        setStatus({ state: 'error', msg: t('contact.rate') });
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ state: 'error', msg: t('contact.err') });
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <h2>{t('contact.title')}</h2>
          <p className="muted">{t('contact.text')}</p>
          <div className="contact__list">
            <a href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
            <span><PinIcon /> {profile.location}</span>
          </div>
        </div>

        <form className="contact__form reveal" onSubmit={submit} noValidate>
          <label>
            <span>{t('contact.name')}</span>
            <input name="name" value={form.name} onChange={update} required minLength={2} maxLength={100}
              className={fieldErrors.name ? 'invalid' : ''} autoComplete="name" />
          </label>
          <label>
            <span>{t('contact.email')}</span>
            <input name="email" type="email" value={form.email} onChange={update} required maxLength={200}
              className={fieldErrors.email ? 'invalid' : ''} autoComplete="email" />
          </label>
          <label>
            <span>{t('contact.message')}</span>
            <textarea name="message" rows="5" value={form.message} onChange={update} required minLength={10} maxLength={5000}
              className={fieldErrors.message ? 'invalid' : ''} />
          </label>
          {/* Honeypot — hidden from humans */}
          <input name="website" value={form.website} onChange={update} className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <button className="btn btn--primary" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>
          {status.msg && <p className={`form-msg form-msg--${status.state}`} role="status">{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}
