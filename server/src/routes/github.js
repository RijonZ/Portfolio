import { Router } from 'express';

const router = Router();
const USER = process.env.GITHUB_USER || 'RijonZ';
const TTL_MS = 60 * 60 * 1000; // cache for 1 hour (GitHub allows 60 unauthenticated req/hour)

let cache = { at: 0, data: null };

router.get('/', async (_req, res) => {
  // CDN caches for an hour, so GitHub's 60 req/hour limit is never reached on Vercel.
  res.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
  if (cache.data && Date.now() - cache.at < TTL_MS) return res.json(cache.data);

  try {
    const headers = { 'User-Agent': 'portfolio-server', Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USER}`, { headers }),
      fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=updated`, { headers }),
    ]);
    if (!userRes.ok || !reposRes.ok) throw new Error(`GitHub responded ${userRes.status}/${reposRes.status}`);

    const user = await userRes.json();
    const repos = await reposRes.json();

    const data = {
      publicRepos: user.public_repos,
      followers: user.followers,
      repos: Object.fromEntries(
        repos.map((r) => [
          r.name,
          { stars: r.stargazers_count, language: r.language, updatedAt: r.pushed_at },
        ]),
      ),
    };
    cache = { at: Date.now(), data };
    res.json(data);
  } catch (err) {
    console.error('GitHub fetch failed:', err.message);
    if (cache.data) return res.json(cache.data); // serve stale data if available
    res.status(502).json({ error: 'Could not reach GitHub' });
  }
});

export default router;
