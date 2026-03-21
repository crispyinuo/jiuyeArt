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
              <span className="footer__scorecard-title">The 9th Hole</span>
              <span className="footer__scorecard-sub">jiuye.art</span>
            </div>
            <div className="footer__scorecard-body">
              <div className="footer__scorecard-row">
                <span className="chinese">油画</span>
                <span>·</span>
                <span className="footer__scorecard-val">10 works</span>
              </div>
              <div className="footer__scorecard-row">
                <span className="chinese">流体画</span>
                <span>·</span>
                <span className="footer__scorecard-val">9 works</span>
              </div>
              <div className="footer__scorecard-row">
                <span>On the course</span>
                <span>·</span>
                <span className="footer__scorecard-val">Always</span>
              </div>
              <div className="footer__scorecard-row">
                <span>Handicap</span>
                <span>·</span>
                <span className="footer__scorecard-val chinese" style={{ letterSpacing: '0.06em' }}>任由</span>
              </div>
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
