import { useState } from 'react'
import TermWindow from './TermWindow'
import { profile, socials } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(null)
  const socialsJson = JSON.stringify(
    Object.fromEntries([
      ['email', profile.email],
      ...socials.map((s) => [s.label, s.handle]),
    ]),
    null,
    2,
  )

  const update = (k) => (e) => {
    setSent(null)
    setForm((f) => ({ ...f, [k]: e.target.value }))
  }

  const submit = (e) => {
    e.preventDefault()
    setSent(form)
    const subject = encodeURIComponent(`[portfolio] message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <TermWindow id="contact" path={`${profile.user}@${profile.host}: ~/contact`}>
      <div className="section-heading">
        <span className="section-index">05</span>
        <div><p className="eyebrow">Let’s talk</p><h2>Have a role or project in mind?</h2></div>
      </div>
      <p className="contact-lead">I’m looking for a team where I can contribute, learn from experienced engineers, and ship software that matters.</p>
      <p className="cmd">
        <span className="prompt">➜ ~/contact</span> ./contact.sh --interactive
      </p>
      <div className="contact-grid">
        <form className="cform" onSubmit={submit}>
          <label>
            <span className="dim">--name</span>
            <input type="text" required value={form.name} onChange={update('name')} placeholder="Ada Lovelace" />
          </label>
          <label>
            <span className="dim">--email</span>
            <input type="email" required value={form.email} onChange={update('email')} placeholder="ada@analytical.engine" />
          </label>
          <label>
            <span className="dim">--message</span>
            <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Let's build something..." />
          </label>
          <button type="submit" className="btn">Open email draft ↗</button>
        </form>
        <div className="cside">
          <p className="cmd"><span className="prompt">➜</span> cat socials.json</p>
          <pre className="json">{socialsJson}</pre>
          {sent && (
            <>
              <p className="cmd ok">✓ payload delivered to mail client:</p>
              <pre className="json dim">{JSON.stringify(sent, null, 2)}</pre>
            </>
          )}
        </div>
      </div>
    </TermWindow>
  )
}
