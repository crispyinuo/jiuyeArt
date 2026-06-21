import { useEffect, useRef, useState } from 'react'
import type { Artwork } from '../../types/artwork'
import { MEDIUM_EN } from '../../types/artwork'
import './Lightbox.scss'

interface LightboxProps {
  artworks: Artwork[]
  currentIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ artworks, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const isOpen = currentIndex !== null
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Retain last-seen artwork so content stays visible during close fade
  const [displayArt, setDisplayArt] = useState<Artwork | null>(null)
  useEffect(() => {
    if (currentIndex !== null) setDisplayArt(artworks[currentIndex])
  }, [currentIndex, artworks])

  // Keyboard nav + focus trap
  useEffect(() => {
    if (!isOpen) return
    const dialog = dialogRef.current

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return }
      if (e.key === 'ArrowLeft') { e.preventDefault(); onPrev(); return }
      if (e.key === 'ArrowRight') { e.preventDefault(); onNext(); return }

      if (e.key === 'Tab' && dialog) {
        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>('button:not([disabled])')
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!first || !last) return
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus() }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus() }
        }
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, onPrev, onNext])

  // Focus management + scroll lock
  useEffect(() => {
    if (!isOpen) return
    const previousFocus = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      previousFocus?.focus()
    }
  }, [isOpen])

  const art = displayArt

  return (
    <div
      ref={dialogRef}
      className={`lightbox${isOpen ? ' lightbox--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={art ? `${art.titleZh} — ${art.title}` : 'Artwork viewer'}
      aria-hidden={!isOpen}
    >
      <div className="lightbox__backdrop" onClick={onClose} aria-hidden="true" />

      <button
        ref={closeRef}
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close"
        tabIndex={isOpen ? 0 : -1}
      >
        ×
      </button>

      {art && (
        <div className="lightbox__panel">
          <div className="lightbox__image-wrap">
            <img
              key={art.id}
              src={art.src}
              alt={`${art.titleZh} — ${art.title}`}
              className="lightbox__image"
              draggable={false}
            />
          </div>

          <footer className="lightbox__info">
            <div className="lightbox__titles">
              <span className="lightbox__title-zh chinese">{art.titleZh}</span>
              <span className="lightbox__title-en">{art.title}</span>
            </div>
            <div className="lightbox__meta">
              <span className="lightbox__meta-item">
                <span className="chinese">{art.medium}</span>
                {' · '}{MEDIUM_EN[art.medium]}
              </span>
              <span className="lightbox__meta-sep" aria-hidden="true">·</span>
              <span className="lightbox__meta-item">{art.year}</span>
              {art.dimensions && (
                <>
                  <span className="lightbox__meta-sep" aria-hidden="true">·</span>
                  <span className="lightbox__meta-item">{art.dimensions}</span>
                </>
              )}
            </div>
          </footer>
        </div>
      )}

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={onPrev}
        aria-label="Previous artwork"
        tabIndex={isOpen ? 0 : -1}
      >
        ‹
      </button>
      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={onNext}
        aria-label="Next artwork"
        tabIndex={isOpen ? 0 : -1}
      >
        ›
      </button>
    </div>
  )
}
