import AnimatedBackground from './components/AnimatedBackground'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <AnimatedBackground />
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
