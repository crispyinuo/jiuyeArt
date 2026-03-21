import { useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Gallery.scss'

interface Artwork {
  id: number
  src: string
  title: string
  titleZh: string
  year: string
  medium: string
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall'
  golfAccent?: boolean
}

const artworks: Artwork[] = [
  {
    id: 1,
    src: '/images/artworks/golf-course-in-bloom.webp',
    title: 'Golf Course in Bloom',
    titleZh: '球场芳菲',
    year: '2023',
    medium: 'Oil on canvas',
    size: 'wide',
    golfAccent: true,
  },
  {
    id: 2,
    src: '/images/artworks/glacial-lake.webp',
    title: 'Glacial Lake',
    titleZh: '冰湖',
    year: '2022',
    medium: 'Oil on canvas',
    size: 'wide',
  },
  {
    id: 3,
    src: '/images/artworks/molten-earth.webp',
    title: 'Molten Earth',
    titleZh: '地火',
    year: '2023',
    medium: 'Abstract oil',
    size: 'tall',
  },
  {
    id: 4,
    src: '/images/artworks/cosmic-current.webp',
    title: 'Cosmic Current',
    titleZh: '宇宙流彩',
    year: '2024',
    medium: '流体画',
    size: 'large',
  },
  {
    id: 5,
    src: '/images/artworks/ember-dusk.webp',
    title: 'Ember Dusk',
    titleZh: '暮色流金',
    year: '2024',
    medium: '流体画',
    size: 'large',
  },
  {
    id: 6,
    src: '/images/artworks/the-gentleman-frog.webp',
    title: 'The Gentleman Frog',
    titleZh: '绅士蛙',
    year: '2023',
    medium: 'Oil on canvas',
    size: 'tall',
  },
  {
    id: 7,
    src: '/images/artworks/jiangnan-watertown.webp',
    title: 'Jiangnan Watertown',
    titleZh: '江南水乡',
    year: '2021',
    medium: 'Oil on canvas',
    size: 'wide',
  },
  {
    id: 8,
    src: '/images/artworks/storm-breaking.webp',
    title: 'Storm Breaking',
    titleZh: '破晓',
    year: '2022',
    medium: 'Abstract oil',
    size: 'medium',
  },
  {
    id: 9,
    src: '/images/artworks/ink-tide.webp',
    title: 'Ink Tide',
    titleZh: '墨潮',
    year: '2023',
    medium: '流体画',
    size: 'medium',
  },
  {
    id: 10,
    src: '/images/artworks/starfield-in-teal.webp',
    title: 'Starfield in Teal',
    titleZh: '青色星迹',
    year: '2024',
    medium: '流体画',
    size: 'tall',
  },
  {
    id: 11,
    src: '/images/artworks/golden-valley-at-dusk.webp',
    title: 'Golden Valley at Dusk',
    titleZh: '暮色山谷',
    year: '2022',
    medium: 'Oil on canvas',
    size: 'wide',
  },
  {
    id: 12,
    src: '/images/artworks/the-fairway.webp',
    title: 'The Fairway',
    titleZh: '球道',
    year: '2023',
    medium: 'Oil on canvas',
    size: 'wide',
    golfAccent: true,
  },
  {
    id: 13,
    src: '/images/artworks/white-ascent.webp',
    title: 'White Ascent',
    titleZh: '白线腾升',
    year: '2024',
    medium: '流体画',
    size: 'tall',
  },
  {
    id: 14,
    src: '/images/artworks/gold-and-blue.webp',
    title: 'Gold and Blue',
    titleZh: '金蓝交汇',
    year: '2024',
    medium: '流体画',
    size: 'large',
  },
  {
    id: 15,
    src: '/images/artworks/mountain-chapel-pastoral.webp',
    title: 'Mountain Chapel Pastoral',
    titleZh: '山间牧歌',
    year: '2021',
    medium: 'Oil on canvas',
    size: 'medium',
  },
  {
    id: 16,
    src: '/images/artworks/alpine-village-morning.webp',
    title: 'Alpine Village Morning',
    titleZh: '山村晨光',
    year: '2022',
    medium: 'Oil on canvas',
    size: 'tall',
  },
  {
    id: 17,
    src: '/images/artworks/sunday-village.webp',
    title: 'Sunday Village',
    titleZh: '礼拜日',
    year: '2021',
    medium: 'Oil on canvas',
    size: 'medium',
  },
  {
    id: 18,
    src: '/images/artworks/rising-forms.webp',
    title: 'Rising Forms',
    titleZh: '潮生',
    year: '2024',
    medium: '流体画',
    size: 'medium',
  },
  {
    id: 19,
    src: '/images/artworks/sea-pier-in-wind.webp',
    title: 'Sea Pier in Wind',
    titleZh: '海风栈桥',
    year: '2023',
    medium: 'Oil on canvas',
    size: 'wide',
  },
]

const MEDIUM_LABELS: Record<string, { en: string; zh: string }> = {
  'Oil on canvas': { en: 'Oil on canvas', zh: '油画' },
  'Abstract oil':  { en: 'Abstract oil',  zh: '抽象油画' },
  '流体画':         { en: 'Fluid Art',     zh: '流体画' },
}

const isTouch = () => window.matchMedia('(pointer: coarse)').matches

function ArtworkCard({ art, index }: { art: Artwork; index: number }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouch()) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    if (!isTouch()) cardRef.current.style.transform = ''
    setHovered(false)
  }

  return (
    <div
      className={`gallery__card gallery__card--${art.size} reveal`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="gallery__image">
        <img
          src={art.src}
          alt={art.titleZh}
          loading="lazy"
          draggable={false}
        />
        <div className="gallery__image-overlay" />

        {art.golfAccent && (
          <div className="gallery__golf-badge">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="rgba(250,250,248,0.15)" stroke="rgba(196,163,90,0.5)" strokeWidth="1"/>
              <circle cx="9" cy="10" r="1.2" fill="rgba(250,250,248,0.6)" />
              <circle cx="13" cy="9" r="1" fill="rgba(250,250,248,0.5)" />
              <circle cx="15" cy="12" r="1.2" fill="rgba(250,250,248,0.6)" />
              <circle cx="11" cy="14" r="1" fill="rgba(250,250,248,0.5)" />
            </svg>
          </div>
        )}
      </div>

      <div className={`gallery__info ${hovered ? 'gallery__info--visible' : ''}`}>
        <p className="gallery__title-zh chinese">{art.titleZh}</p>
        <p className="gallery__title-en">{art.title}</p>
        <p className="gallery__meta">
          {MEDIUM_LABELS[art.medium].en}
          <span className="gallery__meta-zh chinese"> · {MEDIUM_LABELS[art.medium].zh}</span>
          {' · '}{art.year}
        </p>
      </div>

      <div className="gallery__border-anim" />
    </div>
  )
}

export function Gallery() {
  const headingRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header reveal" ref={headingRef}>
          <span className="section-label">Gallery · 画廊</span>
          <h2 className="gallery__title">
            <span className="chinese">作品集</span>
            <span className="gallery__title-sub">Selected Works</span>
          </h2>
          <p className="gallery__subtitle">
            A collection of works that follow feeling beyond direction.
          </p>
        </div>

        <div className="gallery__grid">
          {artworks.map((art, i) => (
            <ArtworkCard key={art.id} art={art} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
