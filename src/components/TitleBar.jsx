import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data/content'

export default function TitleBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="titlebar">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="prompt">~</span>/{profile.host}
        </a>
        <nav aria-label="primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="cta-mini" href="#contact">Let’s talk</a>
        <button
          type="button"
          className={`burger${open ? ' open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <i /><i /><i />
        </button>
        <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span className="prompt">{String(i + 1).padStart(2, '0')} $</span> cd {l.label}
            </a>
          ))}
        </div>
      </header>
      {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}
