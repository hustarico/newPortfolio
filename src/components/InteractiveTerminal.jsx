import { useEffect, useRef, useState } from 'react'
import TermWindow from './TermWindow'
import { profile, skills, projects, socials } from '../data/content'

const PROMPT = `${profile.user}@${profile.host}:~$`

const ASCII = `     .--.
    |o_o |
    |:_/ |
   //   \\ \\
  (|     | )
 /'\\_   _/\`\\
 \\___)=(___/`

function neofetchLines() {
  const info = [
    ['user', `${profile.user}@${profile.host}`],
    ['os', 'Linux x86_64 (daily driver)'],
    ['shell', 'zsh 5.9'],
    ['uptime', 'shipping code since 2023'],
    ['stack', 'Spring Boot · React · MySQL · PostgreSQL · Linux'],
    ['theme', 'navy / white / terminal-green'],
    ['status', 'open to opportunities'],
  ]
  return (
    <div className="neofetch">
      <pre className="ascii">{ASCII}</pre>
      <div className="nf-info">
        <p className="green nf-title">
          {profile.user}@{profile.host}
        </p>
        <p className="dim">-----------------</p>
        {info.map(([k, v]) => (
          <p key={k}>
            <span className="green">{k.padEnd(8)}</span>: {v}
          </p>
        ))}
      </div>
    </div>
  )
}

function runCommand(raw) {
  const input = raw.trim()
  if (!input) return []
  const [cmd, ...args] = input.split(/\s+/)
  const arg = args.join(' ')

  switch (cmd.toLowerCase()) {
    case 'help':
      return [
        'available commands:',
        '  whoami        who is this developer',
        '  skills        tech stack with proficiency',
        '  projects      list of shipped work',
        '  contact       how to reach me',
        '  socials       find me online',
        '  neofetch      system info, terminal style',
        '  echo <text>   say something back',
        '  date          current date & time',
        '  clear         wipe the screen',
      ]
    case 'whoami':
      return [
        `${profile.name} - ${profile.role}`,
        profile.tagline,
      ]
    case 'skills':
      return skills.flatMap((g) => [
        <span key={`${g.group}-h`} className="dir">{g.group}</span>,
        ...g.items.map((s) => (
          <span key={s.name}>{'  '}{s.name}</span>
        )),
      ])
    case 'ls':
      return ['about.md  career.log  education.txt  projects/  skills/  contact.sh']
    case 'projects':
      return projects.flatMap((p) => [
        <span key={p.name} className="dir">{p.name}/</span>,
        <span key={`${p.name}-d`} className="dim">{'  '}{p.desc}</span>,
        <span key={`${p.name}-t`} className="tag-inline">{'  '}[{p.tech.join(', ')}]</span>,
      ])
    case 'contact':
      return [`email: ${profile.email}`, "or use the form below in ./contact"]
    case 'socials':
      return socials.map((s) => (
        <span key={s.label}>
          {s.label.padEnd(10)}{' '}
          <a href={s.url} target="_blank" rel="noreferrer">{s.handle}</a>
        </span>
      ))
    case 'echo':
      return [arg || '']
    case 'date':
      return [new Date().toString()]
    case 'sudo':
      return [`[sudo] permission denied: you are not root here.`]
    case 'rm':
      return ['-rf blocked by /dev/null firewall. nice try.']
    case 'clear':
      return { clear: true }
    case 'neofetch':
      return [<span key="nf">{neofetchLines()}</span>]
    default:
      return [`zsh: command not found: ${cmd}  (try 'help')`]
  }
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { kind: 'out', content: [<span key="w1" className="dim">welcome to the interactive shell.</span>] },
    { kind: 'out', content: [<span key="w2" className="dim">type `help` to list available commands.</span>] },
  ])
  const [value, setValue] = useState('')
  const [histIdx, setHistIdx] = useState(-1)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const cmdHistory = useRef([])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [history])

  const submit = (e) => {
    e.preventDefault()
    const entry = value
    setValue('')
    setHistIdx(-1)
    if (!entry.trim()) {
      setHistory((h) => [...h, { kind: 'in', text: '' }])
      return
    }
    cmdHistory.current.unshift(entry)
    const result = runCommand(entry)
    if (result && result.clear) {
      setHistory([])
      return
    }
    setHistory((h) => [...h, { kind: 'in', text: entry }, ...(result || []).map((c) => ({ kind: 'out', content: c }))])
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.current.length - 1)
      if (cmdHistory.current[next] !== undefined) {
        setHistIdx(next)
        setValue(cmdHistory.current[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) {
        setHistIdx(-1)
        setValue('')
      } else {
        setHistIdx(next)
        setValue(cmdHistory.current[next])
      }
    }
  }

  return (
    <TermWindow id="terminal" path={`${PROMPT} - interactive`}>
      <div
        className="ishell"
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
        role="log"
        aria-label="interactive terminal"
      >
        {history.map((h, i) =>
          h.kind === 'in' ? (
            <p key={i} className="iline">
              <span className="prompt">{PROMPT}</span> {h.text}
            </p>
          ) : (
            <div key={i} className="oline">{h.content}</div>
          ),
        )}
        <form className="iline iinput" onSubmit={submit}>
          <label htmlFor="ishell-input">
            <span className="prompt">{PROMPT}</span>
          </label>
          <input
            id="ishell-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck="false"
            aria-label="terminal command input"
          />
        </form>
      </div>
    </TermWindow>
  )
}
