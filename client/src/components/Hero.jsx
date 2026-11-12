import { useState } from 'react';
import { useSettings } from '../settings.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx';

export default function Hero({ profile }) {
  const { t, tr } = useSettings();
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text reveal">
          <p className="hero__badge"><span className="dot" /> {tr(profile.badge)}</p>
          <h1>{profile.name}</h1>
          <p className="hero__role mono">{profile.role}</p>
          <p className="hero__lead">{tr(profile.lead)}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">{t('hero.cta1')}</a>
            <a href="#contact" className="btn btn--ghost">{t('hero.cta2')}</a>
            <a href={profile.cv} className="btn btn--ghost" download>{t('hero.cv')}</a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon width="22" height="22" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon width="22" height="22" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon width="22" height="22" /></a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="avatar">
            {photoOk ? (
              <img src={profile.photo} alt={profile.name} width="210" height="210" fetchpriority="high" onError={() => setPhotoOk(false)} />
            ) : (
              <span className="avatar__fallback">RZ</span>
            )}
          </div>
          <div className="terminal">
            <div className="terminal__bar"><i /><i /><i /><span>rag_pipeline.py</span></div>
            <pre className="mono">
              <span className="c"># grounded answers, with sources</span>{'\n'}
              <span className="k">chunks</span> = retrieve(query, k=<span className="n">5</span>){'\n'}
              <span className="k">answer</span> = llm(query, context=chunks,{'\n'}
              {'             '}rule=<span className="s">"docs only"</span>){'\n'}
              <span className="k">return</span> answer, cite(chunks)
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
