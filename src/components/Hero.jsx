import TermWindow from './TermWindow'
import { profile, heroLines } from '../data/content'
import useTypewriter from '../hooks/useTypewriter'

export default function Hero() {
  const { typed, active, done } = useTypewriter(heroLines)

  return (
    <div className="hero" id="top">
      <TermWindow path={`${profile.user}@${profile.host}: ~ — zsh`}>
        <div className="hero-lines">
          {typed.map((l, i) => (
            <p key={i} className="hero-line">
              <span className="prompt">{l.pre}</span>
              {l.text}
            </p>
          ))}
          {!done && (
            <p className="hero-line">
              {active}
              <span className="cursor" aria-hidden="true" />
            </p>
          )}
          {done && (
            <>
              <h1 className="hero-name">
                {profile.name}
                <span className="cursor" aria-hidden="true" />
              </h1>
              <p className="hero-tagline">
                <span className="prompt">&gt;</span> {profile.tagline}
              </p>
              <p className="hero-loc">
                <span className="dim">location:</span> {profile.location}
              </p>
              <div className="hero-actions">
                <a className="btn" href="#projects">./view-projects.sh</a>
                <a className="btn btn-ghost" href="#contact">cat contact.txt</a>
              </div>
            </>
          )}
        </div>
      </TermWindow>
    </div>
  )
}
