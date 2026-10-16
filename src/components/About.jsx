import TermWindow from './TermWindow'
import { profile, highlights } from '../data/content'

export default function About() {
  return (
    <TermWindow id="about" path={`${profile.user}@${profile.host}: ~/about`}>
      <div className="section-heading">
        <span className="section-index">02</span>
        <div><p className="eyebrow">A little context</p><h2>How I work</h2></div>
      </div>
      <p className="cmd">
        <span className="prompt">➜ ~/about</span> cat about.md
      </p>
      <div className="prose">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="cmd">
        <span className="prompt">➜ ~/about</span> ls highlights/
      </p>
      <div className="chips">
        {highlights.map((chip) => (
          <span key={chip} className="chip">{chip}</span>
        ))}
      </div>
      <a className="text-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
        Open full résumé <span aria-hidden="true">↗</span>
      </a>
    </TermWindow>
  )
}
