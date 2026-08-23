import TermWindow from './TermWindow'
import { profile, skills } from '../data/content'

const bar = (level) => {
  const filled = Math.round(level / 10)
  return '█'.repeat(filled) + '░'.repeat(10 - filled)
}

export default function Skills() {
  return (
    <TermWindow id="skills" path={`${profile.user}@${profile.host}: ~/skills`}>
      <p className="cmd">
        <span className="prompt">➜ ~/skills</span> tree -L 2
      </p>
      <div className="tree scroll-x">
        {skills.map((group, gi) => (
          <div key={group.group}>
            <p className="tree-line">
              {gi === skills.length - 1 ? '└──' : '├──'}
              <span className="dir"> {group.group}</span>
            </p>
            {group.items.map((s, i) => (
              <p key={s.name} className="tree-line indent">
                {i === group.items.length - 1 ? '└──' : '├──'}{' '}
                {s.name.padEnd(18)}
                <span className="bar">{bar(s.level)}</span> {s.level}%
              </p>
            ))}
          </div>
        ))}
      </div>
    </TermWindow>
  )
}
