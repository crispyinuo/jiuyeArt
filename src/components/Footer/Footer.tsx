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

      {/* About add-on: golf left | name + content right */}
      <div className="footer__about">
        <div className="container">
          <div className="footer__about-inner">

            <div className="footer__left">
              <svg className="footer__golf-svg" viewBox="0 0 240 100" fill="none">
                <ellipse cx="120" cy="85" rx="110" ry="22" fill="rgba(45,90,39,0.12)" />
                <line x1="160" y1="20" x2="160" y2="80" stroke="rgba(196,163,90,0.5)" strokeWidth="1.5" />
                <polygon points="160,20 185,32 160,44" fill="rgba(196,163,90,0.35)" />
                <ellipse cx="160" cy="80" rx="8" ry="3" fill="rgba(28,28,28,0.2)" />
                <circle className="footer__golf-ball" cx="60" cy="77" r="8" fill="rgba(250,250,248,0.95)" />
                <circle cx="57" cy="75" r="1.2" fill="rgba(0,0,0,0.15)" />
                <circle cx="62" cy="73" r="1" fill="rgba(0,0,0,0.12)" />
                <circle cx="64" cy="78" r="1.2" fill="rgba(0,0,0,0.15)" />
                <text x="120" y="54" fontFamily="Cormorant Garamond, serif" fontSize="10" fill="rgba(139,133,128,0.7)" textAnchor="middle" letterSpacing="2">· JIUYE.ART ·</text>
              </svg>
              <div className="footer__about-name">
                <span className="footer__name-zh chinese">九野</span>
                <span className="footer__name-en">Jiuye</span>
              </div>
            </div>

            <div className="footer__about-right">
              <div className="footer__about-content">
                <span className="section-label">About · 关于</span>

                <blockquote className="footer__quote">
                  <span className="footer__quote-text chinese">任由画感 无问西东</span>
                  <cite className="footer__quote-cite">
                    Let brushwork follow feeling · Ask not of east or west
                  </cite>
                </blockquote>

                <div className="footer__about-divider" />

                <p className="footer__about-bio chinese">
                  画室之外，高尔夫球场是九野另一块无形的画布。无论是在荒漠中的绿洲，还是在陡峭的悬崖顶上。每一杆挥出，皆是一次与当下的对话——屏息、蓄力、顺势而为。球道上的那份专注与克制，与他面对空白画布时并无二致：皆是对"此刻"的全然交付。无论执笔还是执杆，他始终遵循同一信念。
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Bottom bar */}
      <div className="container">
        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} 九野 Jiuye Art · jiuye.art
          </span>
          <span className="footer__tagline chinese">任由画感 无问西东</span>
          <span className="footer__made">
            Crafted with ink &amp; intention
          </span>
        </div>
      </div>
    </footer>
  )
}
