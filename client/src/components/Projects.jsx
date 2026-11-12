import { useSettings } from '../settings.jsx';
import Section from './Section.jsx';
import Tags from './Tags.jsx';
import { ProjectIcon, StarIcon } from './Icons.jsx';

function RepoMeta({ info }) {
  const { t, lang } = useSettings();
  if (!info) return null;
  const date = new Date(info.updatedAt).toLocaleDateString(lang === 'sq' ? 'sq-AL' : 'en-GB', {
    month: 'short',
    year: 'numeric',
  });
  return (
    <div className="repo-meta mono small">
      {info.stars > 0 && <span><StarIcon /> {info.stars}</span>}
      <span>{t('proj.updated')} {date}</span>
    </div>
  );
}

export default function Projects({ projects, more, github, profile }) {
  const { t, tr } = useSettings();
  const repoUrl = (repo) => `${profile.github}/${repo}`;

  return (
    <Section id="projects" number="03" title={t('proj.title')}>
      <div className="projects">
        {projects.map((p) => (
          <article className="card reveal" key={p.repo}>
            <div className="card__head">
              <span className="card__icon" aria-hidden><ProjectIcon name={p.icon} /></span>
              <span className={`pill ${p.live ? 'pill--live' : ''}`}>{p.label}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{tr(p.description)}</p>
            <Tags items={p.tags} />
            <div className="card__foot">
              <div className="card__links">
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">{t('proj.demo')} ↗</a>}
                <a href={repoUrl(p.repo)} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                {p.extraLink && (
                  <a href={p.extraLink.href} target="_blank" rel="noopener noreferrer">{tr(p.extraLink.label)} ↗</a>
                )}
              </div>
              <RepoMeta info={github?.repos?.[p.repo]} />
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead reveal">{t('proj.more')}</h3>
      <div className="mini-grid">
        {more.map((p) => (
          <a className="mini reveal" key={p.repo} href={repoUrl(p.repo)} target="_blank" rel="noopener noreferrer">
            <h4>{p.title}</h4>
            <p>{tr(p.description)}</p>
            <span className="mono small">{p.stack}</span>
          </a>
        ))}
        <a className="mini mini--all reveal" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
          <h4>{t('proj.all')}</h4>
          <p className="mono small">{profile.github.replace('https://', '')}</p>
        </a>
      </div>
    </Section>
  );
}
