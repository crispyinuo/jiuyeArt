import { useScrollReveal } from '../../hooks/useScrollReveal'
import './About.scss'

export function About() {
  const textRef = useScrollReveal<HTMLDivElement>(0.1)
  const visualRef = useScrollReveal<HTMLDivElement>(0.1)

  return (
    <section className="about" id="about">
      <div className="about__bg-stripe" />

      <div className="container">
        <div className="about__inner">
          <div className="about__text reveal" ref={textRef}>
            <span className="section-label">About · 关于</span>

            <p className="about__bio about__bio--zh chinese">
              画室之外，高尔夫球场是九野另一块无形的画布。每一杆挥出，皆是一次与当下的对话——屏息、蓄力、顺势而为。球道上的那份专注与克制，与他面对空白画布时并无二致：皆是对"此刻"的全然交付。无论执笔还是执杆，他始终遵循同一信念。
            </p>
          </div>

          <div className="about__visual reveal" ref={visualRef}>
            <div className="about__golf">
              <svg className="about__golf-scene" viewBox="0 0 240 100" fill="none">
                <ellipse cx="120" cy="85" rx="110" ry="22" fill="rgba(45,90,39,0.12)" />
                <line x1="160" y1="20" x2="160" y2="80" stroke="rgba(196,163,90,0.5)" strokeWidth="1.5" />
                <polygon points="160,20 185,32 160,44" fill="rgba(196,163,90,0.35)" />
                <ellipse cx="160" cy="80" rx="8" ry="3" fill="rgba(28,28,28,0.2)" />
                <circle className="about__golf-ball-anim" cx="60" cy="77" r="8" fill="rgba(250,250,248,0.95)" />
                <circle cx="57" cy="75" r="1.2" fill="rgba(0,0,0,0.15)" />
                <circle cx="62" cy="73" r="1" fill="rgba(0,0,0,0.12)" />
                <circle cx="64" cy="78" r="1.2" fill="rgba(0,0,0,0.15)" />
                <text x="120" y="54" fontFamily="Cormorant Garamond, serif" fontSize="10" fill="rgba(139,133,128,0.7)" textAnchor="middle" letterSpacing="2">· JIUYE.ART ·</text>
              </svg>
            </div>

            <blockquote className="about__quote">
              <span className="about__quote-text chinese">任由画感 无问西东</span>
              <cite className="about__quote-cite">
                Let brushwork follow feeling · Ask not of east or west
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
