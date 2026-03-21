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

            <p className="about__bio about__bio--zh chinese">
              九野，取"九野苍茫"之意——画布即旷野，笔触即行旅。他以油彩游走于东西之间：江南水乡的白墙黛瓦，欧陆山村的炊烟晨光，冰川湖畔的静谧无言，皆可入画。笔下不问出处，只问感受。流体画是他的另一种语言——颜料在此不再被驱使，而是被释放，流淌、碰撞、沉积，如熔岩涌动，如星河漫溢，自行寻找归宿。
            </p>

            <p className="about__bio about__bio--zh chinese">
              画室之外，高尔夫球场是九野另一块无形的画布。每一杆挥出，皆是一次与当下的对话——屏息、蓄力、顺势而为。球道上的那份专注与克制，与他面对空白画布时并无二致：皆是对"此刻"的全然交付。无论执笔还是执杆，他始终遵循同一信念。
            </p>

            <div className="about__bio-divider" />

            <p className="about__bio">
              Nine fields, nine worlds. 九野 paints at the intersection of discipline
              and abandon — conjuring the quiet lanes of a Jiangnan water town and the
              mist-softened hills of a European village with the same devoted hand that
              dissolves into rivers of fluid colour, where pigment moves by gravity and
              feeling alone. A glacial lake, a golden valley at dusk, a knowing frog in
              a red velvet suit — each work an act of honest looking, unbounded by
              geography or genre.
            </p>

            <p className="about__bio">
              Away from the studio, the golf course offers a different kind of clarity —
              the same long patience, the same surrender to a single irreversible moment.
              Whether standing over a canvas or a fairway, 九野 asks nothing of east
              or west, only that the feeling be true.
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
