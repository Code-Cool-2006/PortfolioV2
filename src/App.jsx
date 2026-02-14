import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

import FuzzyOverlay from './components/FuzzyOverlay'
import Balatro from './components/Balatro'

function App() {
  return (
    <>
      <FuzzyOverlay />
      <div className="fixed inset-0 -z-20">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={1480}
          color1="#DE443B"
          color2="#006BB4"
          color3="#162325"
        />
      </div>
      <NavBar />
      <main className="text-slate-100 selection:bg-indigo-500/30">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
