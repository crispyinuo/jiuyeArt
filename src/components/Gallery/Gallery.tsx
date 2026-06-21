import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Gallery.scss'

interface Artwork {
  id: number
  src: string
  title: string
  titleZh: string
  year: string
  medium: '油画' | '流体画'
}

const oilPaintings: Artwork[] = [
  {
    id: 1,
    src: '/images/artworks/alpine-village-morning.webp',
    title: 'Alpine Village Morning',
    titleZh: '山村晨光',
    year: '2020',
    medium: '油画',
  },
  {
    id: 2,
    src: '/images/artworks/the-gentleman-frog.webp',
    title: 'The Gentleman Frog',
    titleZh: '绅士蛙',
    year: '2019',
    medium: '油画',
  },
  {
    id: 3,
    src: '/images/artworks/sunday-village.webp',
    title: 'Sunday Village',
    titleZh: '礼拜日',
    year: '2020',
    medium: '油画',
  },
  {
    id: 4,
    src: '/images/artworks/rain-road-village.jpg',
    title: 'Rain Road Village',
    titleZh: '雨中村径',
    year: '2021',
    medium: '油画',
  },
  {
    id: 5,
    src: '/images/artworks/golf-course-in-bloom.webp',
    title: 'Golf Course in Bloom',
    titleZh: '球场芳菲',
    year: '2020',
    medium: '油画',
  },
  {
    id: 6,
    src: '/images/artworks/sea-pier-in-wind.webp',
    title: 'Sea Pier in Wind',
    titleZh: '海风栈桥',
    year: '2019',
    medium: '油画',
  },
  {
    id: 7,
    src: '/images/artworks/jiangnan-watertown.webp',
    title: 'Jiangnan Watertown',
    titleZh: '江南水乡',
    year: '2019',
    medium: '油画',
  },
  {
    id: 8,
    src: '/images/artworks/mountain-chapel-pastoral.webp',
    title: 'Mountain Chapel Pastoral',
    titleZh: '山间牧歌',
    year: '2019',
    medium: '油画',
  },
  {
    id: 9,
    src: '/images/artworks/the-fairway.webp',
    title: 'The Fairway',
    titleZh: '球道',
    year: '2019',
    medium: '油画',
  },
  {
    id: 10,
    src: '/images/artworks/golden-valley-at-dusk.webp',
    title: 'Golden Valley at Dusk',
    titleZh: '暮色山谷',
    year: '2020',
    medium: '油画',
  },
  {
    id: 11,
    src: '/images/artworks/glacial-lake.webp',
    title: 'Glacial Lake',
    titleZh: '冰湖',
    year: '2020',
    medium: '油画',
  },
]

const fluidArt: Artwork[] = [
  {
    id: 12,
    src: '/images/artworks/royal-tide.jpg',
    title: 'Royal Tide',
    titleZh: '金紫潮',
    year: '2021',
    medium: '流体画',
  },
  {
    id: 13,
    src: '/images/artworks/scarlet-reverie.jpg',
    title: 'Scarlet Reverie',
    titleZh: '朱砂梦',
    year: '2022',
    medium: '流体画',
  },
  {
    id: 14,
    src: '/images/artworks/jade-lagoon.jpg',
    title: 'Jade Lagoon',
    titleZh: '碧玉潟湖',
    year: '2022',
    medium: '流体画',
  },
  {
    id: 15,
    src: '/images/artworks/arctic-fire.jpg',
    title: 'Arctic Fire',
    titleZh: '冰火交融',
    year: '2022',
    medium: '流体画',
  },
  {
    id: 16,
    src: '/images/artworks/dune-song.jpg',
    title: 'Dune Song',
    titleZh: '沙丘之歌',
    year: '2021',
    medium: '流体画',
  },
  {
    id: 17,
    src: '/images/artworks/obsidian-flow.jpg',
    title: 'Obsidian Flow',
    titleZh: '玄流',
    year: '2021',
    medium: '流体画',
  },
  {
    id: 18,
    src: '/images/artworks/red-earth.jpg',
    title: 'Red Earth',
    titleZh: '赤土',
    year: '2021',
    medium: '流体画',
  },
  {
    id: 19,
    src: '/images/artworks/ember-dusk.webp',
    title: 'Ember Dusk',
    titleZh: '暮色流金',
    year: '2019',
    medium: '流体画',
  },
  {
    id: 20,
    src: '/images/artworks/storm-breaking.webp',
    title: 'Storm Breaking',
    titleZh: '破晓',
    year: '2019',
    medium: '流体画',
  },
  {
    id: 21,
    src: '/images/artworks/rising-forms.webp',
    title: 'Rising Forms',
    titleZh: '潮生',
    year: '2020',
    medium: '流体画',
  },
  {
    id: 22,
    src: '/images/artworks/cosmic-current.webp',
    title: 'Cosmic Current',
    titleZh: '宇宙流彩',
    year: '2020',
    medium: '流体画',
  },
  {
    id: 23,
    src: '/images/artworks/molten-earth.webp',
    title: 'Molten Earth',
    titleZh: '地火',
    year: '2019',
    medium: '流体画',
  },
  {
    id: 24,
    src: '/images/artworks/wildfire.jpg',
    title: 'Wildfire',
    titleZh: '野火',
    year: '2022',
    medium: '流体画',
  },
  {
    id: 25,
    src: '/images/artworks/ink-tide.webp',
    title: 'Ink Tide',
    titleZh: '墨潮',
    year: '2020',
    medium: '流体画',
  },
  {
    id: 26,
    src: '/images/artworks/white-ascent.webp',
    title: 'White Ascent',
    titleZh: '白线腾升',
    year: '2020',
    medium: '流体画',
  },
  {
    id: 27,
    src: '/images/artworks/midnight-slash.jpg',
    title: 'Midnight Slash',
    titleZh: '午夜飞白',
    year: '2021',
    medium: '流体画',
  },
  {
    id: 28,
    src: '/images/artworks/gold-and-blue.webp',
    title: 'Gold and Blue',
    titleZh: '金蓝交汇',
    year: '2020',
    medium: '流体画',
  },
  {
    id: 29,
    src: '/images/artworks/starfield-in-teal.webp',
    title: 'Starfield in Teal',
    titleZh: '青色星迹',
    year: '2019',
    medium: '流体画',
  },
]

const MEDIUM_EN: Record<string, string> = {
  '油画': 'Oil on Canvas',
  '流体画': 'Fluid Art',
}

function ArtworkCard({ art }: { art: Artwork }) {
  return (
    <div className="gcard reveal">
      <div className="gcard__image-wrap">
        <img
          src={art.src}
          alt={art.titleZh}
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className="gcard__caption">
        <div className="gcard__caption-titles">
          <span className="gcard__title-zh chinese">{art.titleZh}</span>
          <span className="gcard__title-en">{art.title}</span>
        </div>
        <span className="gcard__meta">
          {MEDIUM_EN[art.medium]}
          <span className="chinese"> · {art.medium}</span>
          {' · '}{art.year}
        </span>
      </div>
    </div>
  )
}

interface SectionProps {
  id?: string
  label: string
  titleZh: string
  titleEn: string
  artworks: Artwork[]
  columns?: 2 | 3
}

function GallerySection({ id, label, titleZh, titleEn, artworks, columns = 3 }: SectionProps) {
  const headingRef = useScrollReveal<HTMLDivElement>()

  return (
    <div className="gallery__section" id={id}>
      <div className="gallery__section-header reveal" ref={headingRef}>
        <span className="section-label">{label}</span>
        <h3 className="gallery__section-title">
          <span className="chinese">{titleZh}</span>
          <span className="gallery__section-title-en">{titleEn}</span>
        </h3>
      </div>

      <div className={`gallery__columns gallery__columns--${columns}`}>
        {artworks.map(art => (
          <ArtworkCard key={art.id} art={art} />
        ))}
      </div>
    </div>
  )
}

export function Gallery() {
  const [activeTab, setActiveTab] = useState<'oil' | 'fluid'>('oil')
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    panel.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [activeTab])

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__intro">
          <span className="section-label">Gallery · 画廊</span>
          <h2 className="gallery__main-title">
            <span className="chinese">作品集</span>
            <span className="gallery__main-title-sub">Selected Works</span>
          </h2>
          <p className="gallery__main-subtitle">
            A collection of works that follow feeling beyond direction.
          </p>
        </div>
      </div>

      <div className="gallery__tabs-wrap">
        <div className="container">
          <div className="gallery__tabs">
            <button
              className={`gallery__tab${activeTab === 'oil' ? ' gallery__tab--active' : ''}`}
              onClick={() => setActiveTab('oil')}
            >
              <span className="gallery__tab-zh chinese">油画</span>
              <span className="gallery__tab-en">Oil on Canvas</span>
            </button>
            <button
              className={`gallery__tab${activeTab === 'fluid' ? ' gallery__tab--active' : ''}`}
              onClick={() => setActiveTab('fluid')}
            >
              <span className="gallery__tab-zh chinese">流体画</span>
              <span className="gallery__tab-en">Fluid Art</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="gallery__panel" ref={panelRef}>
          {activeTab === 'oil' && (
            <GallerySection
              key="oil"
              id="gallery-oil"
              label="Oil on Canvas · 油画"
              titleZh="油画"
              titleEn="Oil Paintings"
              artworks={oilPaintings}
              columns={2}
            />
          )}
          {activeTab === 'fluid' && (
            <GallerySection
              key="fluid"
              id="gallery-fluid"
              label="Fluid Art · 流体画"
              titleZh="流体画"
              titleEn="Fluid Art"
              artworks={fluidArt}
              columns={3}
            />
          )}
        </div>
      </div>
    </section>
  )
}
