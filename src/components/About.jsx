import TermWindow from './TermWindow'
import { profile } from '../data/content'

export default function About() {
  return (
    <TermWindow id="about" path={`${profile.user}@${profile.host}: ~/about`}>
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
        <span className="chip">ProgressSoft intern</span>
        <span className="chip">IEEE RAS UJ webmaster</span>
        <span className="chip">spring boot + react</span>
        <span className="chip">linux daily driver</span>
        <span className="chip">open to internships</span>
      </div>
      <a className="btn" href={profile.resumeUrl} download>
        [ download_resume.pdf ]
      </a>
    </TermWindow>
  )
}
