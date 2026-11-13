# Rijon Zeneli — Portfolio

Personal portfolio built with **React (Vite)** + **Node.js / Express**, packaged with **Docker**.

## Structure

```
client/   React app (UI, EN/SQ language switch, dark/light theme)
server/   Express API
  src/data/portfolio.js   ← all site content (edit this to update the site)
  src/routes/portfolio.js GET  /api/portfolio  – portfolio content
  src/routes/github.js    GET  /api/github     – live GitHub stats (cached 1h)
  src/routes/contact.js   POST /api/contact    – contact form (validation, rate limit, honeypot)
```

## Run with Docker (recommended)

```bash
docker compose up --build -d
```
Open http://localhost:8080

Read contact-form messages:
```bash
docker exec rijon-portfolio cat /app/storage/messages.json
```

## Run for development

```bash
npm run install:all
npm run dev
```
Frontend: http://localhost:5173 (hot reload) · API: http://localhost:5000

## Deploy (Vercel, free)

`vercel.json` builds the React app as static files and runs the Express API
(`api/index.js` → `server/src/app.js`) as a serverless function.

1. Push this repo to GitHub.
2. On vercel.com → **Add New → Project** → import the repo (no settings to change).
3. **Settings → Environment Variables**: add `RESEND_API_KEY` (and optionally `CONTACT_TO`, `GITHUB_TOKEN`).
4. Deploy. Every `git push` redeploys automatically.

Contact form: with `RESEND_API_KEY` set, messages are emailed to `CONTACT_TO`;
without it (local/Docker), they are saved to `server/storage/messages.json`.
Secrets live in `server/.env` (git-ignored) — see `server/.env.example`.

## Update content
- Text, projects, skills → `server/src/data/portfolio.js`
- Photo → `client/public/profile.jpg`
- CV → `client/public/Rijon-Zeneli-CV.pdf`
