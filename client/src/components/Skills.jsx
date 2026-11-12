import { useSettings } from '../settings.jsx';
import Section from './Section.jsx';
import Tags from './Tags.jsx';

export default function Skills({ groups }) {
  const { t, tr } = useSettings();

  return (
    <Section id="skills" number="04" title={t('skills.title')}>
      <div className="skills">
        {groups.map((g) => (
          <div className="skill-group reveal" key={g.title.en}>
            <h3>{tr(g.title)}</h3>
            <Tags items={g.items} large />
          </div>
        ))}
      </div>
    </Section>
  );
}
