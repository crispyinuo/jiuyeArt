import { useEffect, useRef } from 'react'
import './InkCursor.scss'

export function InkCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const animate = () => {
      // Lag the ring for trailing effect
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onEnterLink = () => {
      dotRef.current?.classList.add('ink-cursor__dot--hover')
      ringRef.current?.classList.add('ink-cursor__ring--hover')
    }
    const onLeaveLink = () => {
      dotRef.current?.classList.remove('ink-cursor__dot--hover')
      ringRef.current?.classList.remove('ink-cursor__ring--hover')
    }

    const links = document.querySelectorAll('a, button, .gallery__card')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      links.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div className="ink-cursor__dot" ref={dotRef} />
      <div className="ink-cursor__ring" ref={ringRef} />
    </>
  )
}
