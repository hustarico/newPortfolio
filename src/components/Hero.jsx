import TermWindow from './TermWindow'
import { profile, projects } from '../data/content'

export default function Hero() {
  const projectLabel = projects.length === 1 ? 'project' : 'projects'

  return (
    <div className="hero" id="top">
      <TermWindow path={`${profile.user}@${profile.host}: ~ — zsh`}>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="prompt">$</span> whoami</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">View résumé</a>
            </div>
            <p className="availability"><span className="availability-dot" aria-hidden="true" />{profile.availability}</p>
          </div>
          <aside className="hero-proof" aria-label="At a glance">
            <p className="proof-label">currently.txt</p>
            <div className="proof-item">
              <strong>Spring Boot</strong>
              <span>backend focus</span>
            </div>
            <div className="proof-item">
              <strong>{projects.length} {projectLabel}</strong>
              <span>listed below</span>
            </div>
            <div className="proof-location"><span className="dim">based in</span><br />{profile.location}</div>
          </aside>
        </div>
      </TermWindow>
    </div>
  )
}
