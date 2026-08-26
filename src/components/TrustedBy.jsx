import { trustedBy } from '../data/content'

function LogoGroup({ duplicate = false }) {
  return (
    <div className="trust-group" aria-hidden={duplicate || undefined}>
      {trustedBy.map((organization) => (
        <div className="trust-item" key={organization.name}>
          <img
            src={organization.logo}
            alt=""
            width="220"
            height="72"
            loading="eager"
          />
          <span>{organization.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="trust-shell" aria-labelledby="trust-title">
      <div className="trust-header">
        <div>
          <p className="eyebrow"><span className="prompt">$</span> tail -f collaborators.log</p>
          <h2 id="trust-title">Trusted by teams at</h2>
        </div>
        <span className="trust-status"><i aria-hidden="true" /> verified experience</span>
      </div>
      <div className="trust-marquee">
        <div className="trust-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
      <p className="trust-note">Internship · technical community leadership · client delivery</p>
    </section>
  )
}
