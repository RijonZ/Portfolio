import { useEffect, useState } from 'react';
import { useSettings } from '../settings.jsx';
import { MenuIcon, MoonIcon, SunIcon } from './Icons.jsx';

const LINKS = ['about', 'experience', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const { t, lang, theme, toggleLang, toggleTheme } = useSettings();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = '';
      for (const id of LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Rijon Zeneli">
          {['R', 'Z', '.'].map((ch, i) => (
            <span key={i} className={`nav__letter ${ch === '.' ? 'nav__dot' : ''}`} style={{ '--i': i }} aria-hidden="true">
              {ch}
            </span>
          ))}
        </a>

        <nav className={`nav__links ${open ? 'open' : ''}`}>
          {LINKS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" onClick={toggleLang} aria-label="Switch language" title={lang === 'en' ? 'Shqip' : 'English'}>
            {lang === 'en' ? 'SQ' : 'EN'}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="icon-btn nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
