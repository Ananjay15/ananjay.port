import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import FloatingShapes from './components/FloatingShapes'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { theme } from './theme'

export default function App() {
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)
  const currentTheme = isDarkMode ? theme.dark : theme.light
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`${currentTheme.bg} ${currentTheme.text} min-h-screen relative overflow-hidden transition-colors duration-300`}>
      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Dynamic background */}
      <div
        className="fixed inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${isDarkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(99, 102, 241, 0.1)'}, transparent 40%)`,
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />

      {/* Navigation */}
      <Navbar currentTheme={currentTheme} />

      {/* Sections */}
      <Hero mousePosition={mousePosition} currentTheme={currentTheme} />
      <About currentTheme={currentTheme} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
