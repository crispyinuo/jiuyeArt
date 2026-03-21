import { useRef, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Gallery.scss'

interface Artwork {
  id: number
  title: string
  titleZh: string
  year: string
  medium: string
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall'
  palette: string[]
}

// Placeholder artworks — replace src with actual image paths when available
const artworks: Artwork[] = [
  { id: 1, title: 'Nine Fields at Dawn', titleZh: '九野晨光', year: '2023', medium: 'Ink on paper', size: 'large', palette: ['#2D3A2E', '#6B8F71', '#C4A35A', '#F5F0E8'] },
  { id: 2, title: 'Mountain Mist', titleZh: '山间云雾', year: '2023', medium: 'Watercolor', size: 'medium', palette: ['#8BA7C7', '#C8D8E8', '#E8EDF2', '#2D4A6E'] },
  { id: 3, title: 'Still Waters', titleZh: '静水', year: '2022', medium: 'Oil on canvas', size: 'tall', palette: ['#1C2B3A', '#4A7A8A', '#A8C4C0', '#E8E0D0'] },
  { id: 4, title: 'Autumn Grass', titleZh: '秋草', year: '2022', medium: 'Ink on paper', size: 'wide', palette: ['#8B6914', '#C4943A', '#E8C870', '#F5EDD8'] },
  { id: 5, title: 'The Green', titleZh: '青绿', year: '2024', medium: 'Mixed media', size: 'medium', palette: ['#2D5A27', '#4A7C42', '#8AB87A', '#DAEBD6'] },
  { id: 6, title: 'Wind Brushes', titleZh: '风过留痕', year: '2024', medium: 'Ink on silk', size: 'small', palette: ['#1C1C1C', '#4A4A4A', '#9A9A9A', '#FAFAF8'] },
  { id: 7, title: 'Red Horizon', titleZh: '红色地平线', year: '2021', medium: 'Oil on canvas', size: 'wide', palette: ['#8B2020', '#C45A3A', '#E89060', '#F5D8C0'] },
  { id: 8, title: 'Lone Pine', titleZh: '孤松', year: '2023', medium: 'Ink on paper', size: 'tall', palette: ['#1C2B1C', '#2D5A27', '#6B8B60', '#E8EDE0'] },
  { id: 9, title: 'Fairway Dreams', titleZh: '球道梦', year: '2024', medium: 'Watercolor', size: 'small', palette: ['#2D5A27', '#8AB87A', '#C4A35A', '#F5F0E8'] },
]

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
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Placeholder canvas — replace with <img> when real artwork is ready */}
      <div
        className="gallery__image"
        style={{
          background: `linear-gradient(135deg, ${art.palette[0]} 0%, ${art.palette[1]} 35%, ${art.palette[2]} 70%, ${art.palette[3]} 100%)`,
        }}
      >
        {/* Ink-brush noise overlay */}
        <div className="gallery__image-overlay" />

        {/* Golf ball accent on 'The Green' */}
        {art.id === 5 && (
          <div className="gallery__golf-ball">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="rgba(250,250,248,0.9)" />
              <circle cx="14" cy="16" r="2" fill="rgba(0,0,0,0.12)" />
              <circle cx="22" cy="13" r="1.5" fill="rgba(0,0,0,0.1)" />
              <circle cx="26" cy="20" r="2" fill="rgba(0,0,0,0.12)" />
              <circle cx="18" cy="24" r="1.5" fill="rgba(0,0,0,0.1)" />
              <circle cx="26" cy="28" r="1.8" fill="rgba(0,0,0,0.1)" />
            </svg>
          </div>
        )}
      </div>

      <div className={`gallery__info ${hovered ? 'gallery__info--visible' : ''}`}>
        <p className="gallery__title-zh chinese">{art.titleZh}</p>
        <p className="gallery__title-en">{art.title}</p>
        <p className="gallery__meta">{art.medium} · {art.year}</p>
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
