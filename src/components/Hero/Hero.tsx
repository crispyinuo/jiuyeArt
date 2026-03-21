import { useEffect, useRef, useState } from 'react'
import './Hero.scss'

export function Hero() {
  const [phase, setPhase] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Ink splash canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Ink particles
    interface Particle {
      x: number; y: number
      vx: number; vy: number
      radius: number; alpha: number
      decay: number; color: string
    }

    const particles: Particle[] = []
    const colors = ['rgba(28,28,28,', 'rgba(196,163,90,', 'rgba(45,90,39,']

    const spawnBurst = (cx: number, cy: number) => {
      const count = 60 + Math.random() * 40
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.5 + Math.random() * 3
        const color = colors[Math.floor(Math.random() * colors.length)]
        particles.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1 + Math.random() * 4,
          alpha: 0.6 + Math.random() * 0.4,
          decay: 0.008 + Math.random() * 0.012,
          color,
        })
      }
    }

    // Initial bursts
    const w = window.innerWidth
    const h = window.innerHeight
    spawnBurst(w * 0.5, h * 0.42)
    setTimeout(() => spawnBurst(w * 0.3, h * 0.55), 300)
    setTimeout(() => spawnBurst(w * 0.7, h * 0.35), 600)

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.04
        p.vx *= 0.98
        p.alpha -= p.decay
        if (p.alpha <= 0) { particles.splice(i, 1); continue }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + p.alpha + ')'
        ctx.fill()
      }
      if (particles.length > 0) animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  // Staggered text reveal
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2100),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Background ink texture */}
      <div className="hero__bg-texture" />

      {/* Decorative brush strokes */}
      <svg className="hero__brush-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <path
          className="hero__brush-path hero__brush-path--1"
          d="M-80,600 C200,580 400,520 700,540 C900,555 1100,610 1520,590"
          fill="none"
          stroke="rgba(196,163,90,0.12)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className="hero__brush-path hero__brush-path--2"
          d="M0,720 C300,700 600,680 900,700 C1100,715 1300,740 1440,730"
          fill="none"
          stroke="rgba(28,28,28,0.06)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="hero__brush-path hero__brush-path--3"
          d="M200,100 C300,120 500,80 700,110 C900,135 1100,90 1300,115"
          fill="none"
          stroke="rgba(196,163,90,0.08)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Golf flag decoration */}
      <div className="hero__golf-flag">
        <svg viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="0" x2="30" y2="110" stroke="rgba(196,163,90,0.35)" strokeWidth="1.5"/>
          <polygon points="30,5 55,22 30,39" fill="rgba(196,163,90,0.25)" />
          <ellipse cx="30" cy="112" rx="14" ry="4" fill="rgba(45,90,39,0.2)" />
        </svg>
      </div>

      <div className="hero__content">
        {/* Chinese name — large artistic */}
        <div className={`hero__name-zh ${phase >= 1 ? 'hero__name-zh--visible' : ''}`}>
          <span className="hero__char" style={{ transitionDelay: '0ms' }}>九</span>
          <span className="hero__char" style={{ transitionDelay: '180ms' }}>野</span>
        </div>

        <div className={`hero__divider ${phase >= 2 ? 'hero__divider--visible' : ''}`}>
          <span className="hero__divider-line" />
          <span className="hero__divider-dot" />
          <span className="hero__divider-line" />
        </div>

        <div className={`hero__name-en ${phase >= 2 ? 'hero__name-en--visible' : ''}`}>
          Jiuye
        </div>

        <p className={`hero__quote ${phase >= 3 ? 'hero__quote--visible' : ''}`}>
          <span className="hero__quote-zh chinese">任由画感 无问西东</span>
          <span className="hero__quote-en">Let brushwork follow feeling · Ask not of east or west</span>
        </p>

        <div className={`hero__scroll-hint ${phase >= 4 ? 'hero__scroll-hint--visible' : ''}`}>
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  )
}
