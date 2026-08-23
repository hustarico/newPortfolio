import TermWindow from './TermWindow'
import { profile, projects } from '../data/content'

export default function Projects() {
  return (
    <TermWindow id="projects" path={`${profile.user}@${profile.host}: ~/projects`}>
      <p className="cmd">
        <span className="prompt">➜ ~/projects</span> ls -la
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="project-card">
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
              <span className="perm dim">drwxr-xr-x</span>
              <a href={p.repo} target="_blank" rel="noreferrer" className="project-name">
                {p.name}/
              </a>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            {(p.repo || p.demo) && (
              <div className="project-links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">[ git_repo ]</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">[ live_demo ]</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </TermWindow>
  )
}
