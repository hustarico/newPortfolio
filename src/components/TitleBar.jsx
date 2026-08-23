import { profile, navLinks } from '../data/content'

export default function TitleBar() {
  return (
    <header className="titlebar">
      <a href="#top" className="brand">
        <span className="prompt">~</span>/{profile.host}
      </a>
      <nav>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <a className="cta-mini" href="#contact">hire_me</a>
    </header>
  )
}
