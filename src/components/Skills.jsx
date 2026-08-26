import TermWindow from './TermWindow'
import { profile, skills } from '../data/content'

export default function Skills() {
  return (
    <TermWindow id="skills" path={`${profile.user}@${profile.host}: ~/skills`}>
      <div className="section-heading">
        <span className="section-index">04</span>
        <div><p className="eyebrow">Toolkit</p><h2>Technologies I use to deliver</h2></div>
      </div>
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
                {i === group.items.length - 1 ? '└──' : '├──'} {s.name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </TermWindow>
  )
}
