import TermWindow from './TermWindow'
import { profile, experience, education } from '../data/content'

export default function Experience() {
  return (
    <TermWindow id="experience" path={`${profile.user}@${profile.host}: ~/experience`}>
      <div className="section-heading">
        <span className="section-index">03</span>
        <div><p className="eyebrow">Experience</p><h2>Learning in real teams</h2></div>
      </div>
      <p className="cmd">
        <span className="prompt">➜ ~/experience</span> cat career.log
      </p>
      <div className="log">
        {experience.map((job, ji) => (
          <div key={ji} className="log-entry">
            <p className="log-title">
              [<span className="green">{job.period}</span>] {job.title}
            </p>
            {job.points.map((pt, pi) => {
              const last = pi === job.points.length - 1
              return (
                <p key={pi} className="tree-line indent">
                  <span className="pip">{last ? '└── ' : '├── '}</span>
                  <span className="pt">{pt}</span>
                </p>
              )
            })}
            {ji < experience.length - 1 && <p className="dim log-gap">*</p>}
          </div>
        ))}
        <p className="cmd">
          <span className="prompt">➜ ~/experience</span> cat education.txt
        </p>
        <div className="log-entry">
          <p className="log-title">
            [<span className="green">{education.period}</span>] {education.degree} — {education.school}
          </p>
          <p className="tree-line indent">
            <span className="pip">└── </span>
            <span className="pt">{education.note}</span>
          </p>
        </div>
        <p className="dim log-end">[eof]</p>
      </div>
    </TermWindow>
  )
}
