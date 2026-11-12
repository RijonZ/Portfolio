import { useEffect, useState } from 'react';
import { useSettings } from './settings.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const { t } = useSettings();
  const [data, setData] = useState(null);
  const [github, setGithub] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => setError(true));

    // GitHub stats are a nice extra — the page works without them.
    fetch('/api/github')
      .then((r) => (r.ok ? r.json() : null))
      .then(setGithub)
      .catch(() => {});
  }, []);

  // Fade sections in as they scroll into view.
  useEffect(() => {
    if (!data) return;
    const els = document.querySelectorAll('.reveal:not(.visible)');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [data]);

  if (error) return <div className="center-msg">{t('error')}</div>;
  if (!data) return <div className="center-msg"><span className="spinner" /> {t('loading')}</div>;

  const { profile } = data;

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero profile={profile} />
        <About profile={profile} github={github} />
        <Experience items={data.experience} />
        <Projects projects={data.projects} more={data.moreProjects} github={github} profile={profile} />
        <Skills groups={data.skills} />
        <Education items={data.education} />
        <Contact profile={profile} />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name} · {t('footer')}
        </div>
      </footer>
    </>
  );
}
