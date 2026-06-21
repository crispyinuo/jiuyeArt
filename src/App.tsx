import './styles/global.scss'
import { Navigation } from './components/Navigation/Navigation'
import { Hero } from './components/Hero/Hero'
import { ArtistIntro } from './components/ArtistIntro/ArtistIntro'
import { Gallery } from './components/Gallery/Gallery'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { InkCursor } from './components/InkCursor/InkCursor'
import { useEffect } from 'react'

function App() {
  // Apply scroll-reveal to all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <InkCursor />
      <Navigation />
      <main>
        <Hero />
        <ArtistIntro />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
