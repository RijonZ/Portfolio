import { useSettings } from '../settings.jsx';
import Section from './Section.jsx';

export default function About({ profile, github }) {
  const { t, tr } = useSettings();

  // Use the live GitHub repo count when it is available.
  const stats = profile.stats.map((s, i) =>
    i === 1 && github?.publicRepos ? { ...s, value: String(github.publicRepos) } : s,
  );

  return (
    <Section id="about" number="01" title={t('about.title')}>
      <div className="about reveal">
        <div className="about__text">
          {profile.about.map((p, i) => <p key={i}>{tr(p)}</p>)}
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <b>{s.value}</b>
              <span>{i === 1 && github?.publicRepos ? tr({ en: 'public repositories on GitHub', sq: 'repository publike në GitHub' }) : tr(s.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
