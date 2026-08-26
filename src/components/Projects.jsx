import TermWindow from './TermWindow'
import { profile, projects } from '../data/content'

export default function Projects() {
  return (
    <TermWindow id="projects" path={`${profile.user}@${profile.host}: ~/projects`}>
      <div className="section-heading">
        <span className="section-index">01</span>
        <div><p className="eyebrow">Selected work</p><h2>Systems I’ve built and shipped</h2></div>
      </div>
      <p className="cmd">
        <span className="prompt">➜ ~/projects</span> find . --type product --sort impact
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className={`project-card${p.featured ? ' featured' : ''}`}>
            <figure className="project-shot">
              <span className="shot-bar">
                <span className="dots" aria-hidden="true">
                  <i className="d-white" />
                  <i className="d-blue" />
                  <i className="d-green" />
                </span>
                <span className="shot-name">{p.image ? p.image.split('/').pop() : `${p.name}.png`}</span>
              </span>
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.name} preview screenshot`}
                  loading="lazy"
                  width="800"
                  height="500"
                />
              ) : (
                <div className="shot-fallback">
                  <span className="dim">$ open {p.name}</span>
                  <span className="cursor" aria-hidden="true" />
                </div>
              )}
            </figure>
            <div className="project-head">
              <div>
                <span className="project-label">{p.label}</span>
                <h3 className="project-name">{p.name}</h3>
              </div>
              {p.featured && <span className="featured-mark">featured</span>}
            </div>
            <p className="project-desc">{p.desc}</p>
            <p className="project-impact"><span aria-hidden="true">↳</span> {p.impact}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            {(p.repo || p.demo) && (
              <div className="project-links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">View repository ↗</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live product ↗</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </TermWindow>
  )
}
