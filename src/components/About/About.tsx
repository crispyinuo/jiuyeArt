import { useScrollReveal } from '../../hooks/useScrollReveal'
import './About.scss'

export function About() {
  const sectionRef = useScrollReveal<HTMLDivElement>()
  const textRef = useScrollReveal<HTMLDivElement>(0.1)
  const golfRef = useScrollReveal<HTMLDivElement>(0.1)

  return (
    <section className="about" id="about">
      <div className="about__bg-stripe" />

      <div className="container">
        <div className="about__inner">
          {/* Left — text */}
          <div className="about__text reveal" ref={textRef}>
            <span className="section-label">About · 关于</span>

            <h2 className="about__heading">
              <span className="chinese about__heading-zh">九野</span>
              <span className="about__heading-en">Jiuye</span>
            </h2>

            <p className="about__bio">
              九野 is an artist whose work traverses the vast fields between tradition and
              sensation — nine fields, nine expressions, each brushstroke an uncharted moment.
              Drawing from classical Chinese ink techniques while embracing the spontaneous
              language of contemporary feeling, Jiuye's paintings invite the viewer to pause
              in the space between knowing and wondering.
            </p>

            <p className="about__bio">
              Beyond the studio, a quiet green fairway offers the same clarity as an
              empty canvas — both demand presence, patience, and the willingness to let
              instinct guide the hand.
            </p>

            <blockquote className="about__quote">
              <span className="about__quote-text chinese">任由画感 无问西东</span>
              <cite className="about__quote-cite">
                Let brushwork follow feeling · Ask not of east or west
              </cite>
            </blockquote>
          </div>

          {/* Right — visual */}
          <div className="about__visual" ref={sectionRef}>
            {/* Abstract ink portrait placeholder */}
            <div className="about__portrait">
              <div className="about__portrait-inner">
                {/* Brushstroke silhouette SVG */}
                <svg className="about__ink-svg" viewBox="0 0 300 400" fill="none">
                  <ellipse cx="150" cy="90" rx="55" ry="62" fill="rgba(28,28,28,0.88)" />
                  <path
                    d="M95,145 C85,200 80,260 90,320 C100,370 140,390 150,390 C160,390 200,370 210,320 C220,260 215,200 205,145"
                    fill="rgba(28,28,28,0.82)"
                  />
                  <path
                    d="M105,165 C88,185 72,210 78,240 C82,260 75,285 80,310"
                    stroke="rgba(28,28,28,0.7)"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  <path
                    d="M195,165 C212,185 228,210 222,240 C218,260 225,285 220,310"
                    stroke="rgba(28,28,28,0.7)"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  {/* Gold accent strokes */}
                  <path
                    d="M70,230 C50,240 30,250 20,260"
                    stroke="rgba(196,163,90,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M230,230 C250,240 270,250 280,260"
                    stroke="rgba(196,163,90,0.5)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Golf green beneath feet */}
                  <ellipse cx="150" cy="390" rx="90" ry="16" fill="rgba(45,90,39,0.15)" />
                </svg>

                <div className="about__portrait-label chinese">画者</div>
              </div>
            </div>

            {/* Golf element */}
            <div className="about__golf reveal" ref={golfRef}>
              <svg className="about__golf-scene" viewBox="0 0 240 100" fill="none">
                {/* Fairway */}
                <ellipse cx="120" cy="85" rx="110" ry="22" fill="rgba(45,90,39,0.12)" />
                {/* Flag pole */}
                <line x1="160" y1="20" x2="160" y2="80" stroke="rgba(196,163,90,0.5)" strokeWidth="1.5" />
                {/* Flag */}
                <polygon points="160,20 185,32 160,44" fill="rgba(196,163,90,0.35)" />
                {/* Hole */}
                <ellipse cx="160" cy="80" rx="8" ry="3" fill="rgba(28,28,28,0.2)" />
                {/* Golf ball */}
                <circle className="about__golf-ball-anim" cx="60" cy="77" r="8" fill="rgba(250,250,248,0.95)" />
                <circle cx="57" cy="75" r="1.2" fill="rgba(0,0,0,0.15)" />
                <circle cx="62" cy="73" r="1" fill="rgba(0,0,0,0.12)" />
                <circle cx="64" cy="78" r="1.2" fill="rgba(0,0,0,0.15)" />
                {/* Distance text */}
                <text x="120" y="54" fontFamily="Cormorant Garamond, serif" fontSize="10" fill="rgba(139,133,128,0.7)" textAnchor="middle" letterSpacing="2">· JIUYE.ART ·</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
