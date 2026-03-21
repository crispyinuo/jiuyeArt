import { useEffect, useState } from 'react'
import './Navigation.scss'

const navLinks = [
  { href: '#gallery', label: 'Gallery', zh: '画廊' },
  { href: '#about', label: 'About', zh: '关于' },
  { href: '#contact', label: 'Contact', zh: '联系' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo">
        <a href="#hero">
          <span className="nav__logo-zh">九野</span>
          <span className="nav__logo-en">Jiuye</span>
        </a>
      </div>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {navLinks.map(({ href, label, zh }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav__link-zh">{zh}</span>
              <span className="nav__link-en">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
