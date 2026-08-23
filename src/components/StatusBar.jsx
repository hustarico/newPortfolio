import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'

export default function StatusBar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
  const date = now.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short' })

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
        <span>{date}</span>
        <span className="green">{time}</span>
      </div>
    </footer>
  )
}
