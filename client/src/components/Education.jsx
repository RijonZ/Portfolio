import { useSettings } from '../settings.jsx';
import Section from './Section.jsx';

export default function Education({ items }) {
  const { t, tr } = useSettings();

  return (
    <Section id="education" number="05" title={t('edu.title')}>
      <div className="edu">
        {items.map((e) => (
          <div className="edu__item reveal" key={e.title}>
            <span className="mono small muted">{tr(e.period)}</span>
            <h3>{e.title}</h3>
            <p>{tr(e.detail)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
