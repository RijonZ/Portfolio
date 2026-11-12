import { useSettings } from '../settings.jsx';
import Section from './Section.jsx';
import Tags from './Tags.jsx';

export default function Experience({ items }) {
  const { t, tr } = useSettings();

  return (
    <Section id="experience" number="02" title={t('exp.title')}>
      <div className="timeline">
        {items.map((job) => (
          <article className="tl-item reveal" key={job.company}>
            <div className="tl-item__date mono">{tr(job.period)}</div>
            <div className="tl-item__body">
              <h3>
                {job.company} <span className="muted">· {tr(job.role)}</span>
              </h3>
              <p className="muted small">{tr(job.type)}</p>
              <ul>
                {job.bullets.map((b, i) => <li key={i}>{tr(b)}</li>)}
              </ul>
              <Tags items={job.tags} />
              {job.url && (
                <div className="card__foot tl-item__foot">
                  <div className="card__links">
                    <a href={job.url} target="_blank" rel="noopener noreferrer">{t('exp.visit')} ↗</a>
                  </div>
                  <span className="repo-meta mono small">{job.url.replace(/^https?:\/\//, '')}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
