export default function TermWindow({ path, children, id }) {
  return (
    <section className="term-window" id={id}>
      <div className="term-bar">
        <span className="dots" aria-hidden="true">
          <i className="d-white" />
          <i className="d-blue" />
          <i className="d-green" />
        </span>
        <span className="term-path">{path}</span>
      </div>
      <div className="term-body">{children}</div>
    </section>
  )
}
