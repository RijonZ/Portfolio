import { Router } from 'express';
import portfolio from '../data/portfolio.js';

const router = Router();

router.get('/', (_req, res) => {
  // Let the CDN cache it briefly; content only changes on a new deploy.
  res.set('Cache-Control', 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400');
  res.json(portfolio);
});

export default router;
