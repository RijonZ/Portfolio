import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import ui from './i18n.js';

const SettingsContext = createContext(null);

function load(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage may be blocked — ignore */
  }
}

export function SettingsProvider({ children }) {
  const [lang, setLang] = useState(() => load('lang', 'en'));
  const [theme, setTheme] = useState(() =>
    load('theme', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    save('lang', lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    save('theme', theme);
  }, [theme]);

  // t('key') → UI string; tr({en, sq}) → translated content field
  const t = useCallback((key) => ui[lang][key] ?? ui.en[key] ?? key, [lang]);
  const tr = useCallback((field) => (typeof field === 'string' ? field : field?.[lang] ?? field?.en ?? ''), [lang]);

  const value = {
    lang,
    theme,
    t,
    tr,
    toggleLang: () => setLang((l) => (l === 'en' ? 'sq' : 'en')),
    toggleTheme: () => setTheme((th) => (th === 'dark' ? 'light' : 'dark')),
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export const useSettings = () => useContext(SettingsContext);
