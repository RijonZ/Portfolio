// Local / Docker entry point: the API app plus the built React site, on one port.
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import app from './app.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

// In production (Docker) the server also serves the built React app.
const clientDist = path.resolve(__dirname, '../../client/dist');
if (fs.existsSync(clientDist)) {
  // Hashed build files never change → cache for a year. index.html is always revalidated.
  app.use('/assets', express.static(path.join(clientDist, 'assets'), { immutable: true, maxAge: '1y' }));
  app.use(
    express.static(clientDist, {
      maxAge: '1d',
      setHeaders: (res, file) => {
        if (file.endsWith('.html')) res.set('Cache-Control', 'no-cache');
      },
    }),
  );
  app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
