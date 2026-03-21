import './Footer.scss'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      {/* Decorative wave divider */}
      <div className="footer__divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path
            d="M0,40 C240,10 480,55 720,30 C960,5 1200,50 1440,25 L1440,60 L0,60 Z"
            fill="rgba(28,28,28,0.03)"
          />
          <path
            d="M0,50 C360,20 720,55 1080,35 C1260,25 1380,40 1440,38"
            stroke="rgba(196,163,90,0.15)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo-zh chinese">九野</span>
            <span className="footer__logo-en">Jiuye · {year}</span>
            <p className="footer__tagline chinese">任由画感 无问西东</p>
          </div>

          {/* Golf scorecard element */}
          <div className="footer__scorecard">
            <div className="footer__scorecard-header">
              <span className="footer__scorecard-title">The 19th Hole</span>
              <span className="footer__scorecard-sub">jiuye.art</span>
            </div>
            <div className="footer__scorecard-body">
              <div className="footer__scorecard-row">
                <span>Gallery</span>
                <span>·</span>
                <span className="footer__scorecard-val">Open</span>
              </div>
              <div className="footer__scorecard-row">
                <span>Commissions</span>
                <span>·</span>
                <span className="footer__scorecard-val">By request</span>
              </div>
              <div className="footer__scorecard-row">
                <span>Handicap</span>
                <span>·</span>
                <span className="footer__scorecard-val">∞</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <span className="section-label" style={{ marginBottom: '20px', display: 'block' }}>
              Contact · 联系
            </span>
            <p className="footer__contact-text">
              For inquiries about works, prints, or commissions, please reach out.
            </p>
            <a href="mailto:hello@jiuye.art" className="footer__email">
              hello@jiuye.art
            </a>

            {/* Golf hole decoration */}
            <div className="footer__golf-hole">
              <svg viewBox="0 0 120 50" fill="none">
                {/* Green */}
                <ellipse cx="60" cy="38" rx="55" ry="12" fill="rgba(45,90,39,0.1)" />
                {/* Hole */}
                <ellipse cx="60" cy="38" rx="8" ry="3" fill="rgba(28,28,28,0.25)" />
                {/* Pin */}
                <line x1="60" y1="5" x2="60" y2="38" stroke="rgba(196,163,90,0.45)" strokeWidth="1" />
                <polygon points="60,5 76,14 60,23" fill="rgba(196,163,90,0.35)" />
              </svg>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} 九野 Jiuye Art · jiuye.art
          </span>
          <span className="footer__made">
            Crafted with ink &amp; intention
          </span>
        </div>
      </div>
    </footer>
  )
}
