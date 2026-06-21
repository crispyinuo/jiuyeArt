import { useScrollReveal } from '../../hooks/useScrollReveal'
import './About.scss'

const ABOUT_FEATURE_IMAGE = {
  src: '/images/artworks/alpine-village-morning.webp',
  titleZh: '山村晨光',
  titleEn: 'Alpine Village Morning',
  medium: 'Oil on Canvas',
  year: '2020',
}

export function About() {
  const textRef = useScrollReveal<HTMLDivElement>(0.1)
  const paintingRef = useScrollReveal<HTMLDivElement>(0.1)

  return (
    <section className="about" id="about">
      <div className="about__bg-stripe" />

      <div className="container">
        <div className="about__inner">

          <div className="about__painting reveal" ref={paintingRef}>
            <img
              src={ABOUT_FEATURE_IMAGE.src}
              alt={`${ABOUT_FEATURE_IMAGE.titleZh} — ${ABOUT_FEATURE_IMAGE.titleEn}`}
              className="about__painting-img"
              draggable={false}
            />
            <div className="about__painting-caption">
              <span className="about__painting-title chinese">{ABOUT_FEATURE_IMAGE.titleZh}</span>
              <span className="section-label">{ABOUT_FEATURE_IMAGE.medium} · {ABOUT_FEATURE_IMAGE.year}</span>
            </div>
          </div>

          <div className="about__text reveal" ref={textRef}>
            <span className="section-label">About · 关于</span>

            <blockquote className="about__quote">
              <span className="about__quote-text chinese">任由画感 无问西东</span>
              <cite className="about__quote-cite">
                Let brushwork follow feeling · Ask not of east or west
              </cite>
            </blockquote>

            <div className="about__bio-divider" />

            <p className="about__bio about__bio--secondary chinese">
              画室之外，高尔夫球场是九野另一块无形的画布。无论是在荒漠中的绿洲，还是在陡峭的悬崖顶上。每一杆挥出，皆是一次与当下的对话——屏息、蓄力、顺势而为。球道上的那份专注与克制，与他面对空白画布时并无二致：皆是对"此刻"的全然交付。无论执笔还是执杆，他始终遵循同一信念。
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
