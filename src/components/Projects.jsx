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
            <div className="project-links">
              <a href={p.repo} target="_blank" rel="noreferrer">[ git_repo ]</a>
              <a href={p.demo} target="_blank" rel="noreferrer">[ live_demo ]</a>
            </div>
          </article>
        ))}
      </div>
    </TermWindow>
  )
}
