import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import CodingStats from './sections/CodingStats'
import Contact from './sections/Contact'

import FuzzyOverlay from './components/FuzzyOverlay'
import Balatro from './components/Balatro'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import CmdKMenu from './components/CmdKMenu'
import { Home } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('#hero')
  const [isLaptop, setIsLaptop] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsLaptop(window.innerWidth >= 768)
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const handleSectionChange = (e) => {
      const targetId = e.detail
      setActiveSection(targetId)
      
      if (window.innerWidth < 768) {
        const el = document.querySelector(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('change-section', handleSectionChange)
    return () => window.removeEventListener('change-section', handleSectionChange)
  }, [])

  // Lock HTML body scrolling on laptop views
  useEffect(() => {
    if (isLaptop) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [isLaptop])

  const renderActiveSection = () => {
    switch (activeSection) {
      case '#about':
        return <About key="about" />
      case '#experience':
        return <Experience key="experience" />
      case '#projects':
        return <Projects key="projects" />
      case '#coding-stats':
        return <CodingStats key="coding-stats" />
      case '#contact':
        return <Contact key="contact" />
      case '#hero':
      default:
        return <Hero key="hero" />
    }
  }

  return (
    <>
      {!isLaptop && <ScrollProgress />}
      <CustomCursor />
      <CmdKMenu />
      <FuzzyOverlay />
      
      {isLaptop && activeSection !== '#hero' && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.dispatchEvent(new CustomEvent('change-section', { detail: '#hero' }))}
          className="fixed top-6 left-6 z-[99] flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 cursor-pointer shadow-lg transition-all"
        >
          <Home className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-wider font-display">Start Page</span>
        </motion.button>
      )}
      
      <div className="fixed inset-0 -z-20">
        <Balatro
          isRotate={true}
          mouseInteraction={true}
          pixelFilter={1200}
          color1="#1e1b4b"
          color2="#3b0764"
          color3="#020617"
        />
      </div>

      {!isLaptop && <NavBar />}

      <main className="text-slate-100 selection:bg-indigo-500/30">
        {isLaptop ? (
          <div className="h-screen w-screen overflow-hidden flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full h-full overflow-y-auto"
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <CodingStats />
            <Contact />
          </>
        )}
      </main>
    </>
  )
}

export default App
