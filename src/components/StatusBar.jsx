import { useLayoutEffect, useRef } from 'react'
import { navLinks, profile } from '../data/content'

const pad = (n) => String(n).padStart(2, '0')
const formatTime = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
const formatDate = (d) =>
  d.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short' })

export default function StatusBar() {
  const timeRef = useRef(null)
  const dateRef = useRef(null)

  useLayoutEffect(() => {
    const tick = () => {
      const now = new Date()
      if (timeRef.current) timeRef.current.textContent = formatTime(now)
      if (dateRef.current) dateRef.current.textContent = formatDate(now)
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <footer className="statusbar">
      <div className="sb-left">
        <span className="sb-session">[{profile.host}]</span>
        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} className="sb-link">
            {i + 1}:{l.label.replace('./', '')}
            {i === 0 ? '*' : ''}
          </a>
        ))}
      </div>
      <div className="sb-right">
        <span ref={dateRef} />
        <span className="green" ref={timeRef} />
      </div>
    </footer>
  )
}
