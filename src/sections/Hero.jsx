import DecryptedText from '../components/DecryptedText'
import MagneticButton from '../components/MagneticButton'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="text-xs md:text-sm font-extrabold font-display text-indigo-400 uppercase tracking-widest">
            Creative Developer & React Engineer
          </span>
        </motion.div>

        <div className="mb-6">
          <h1 className="text-5xl md:text-8xl font-black font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400/80 leading-none">
            Rishab Chavadar
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base md:text-xl text-slate-350 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          I design and architect interactive, high-fidelity user interfaces.
          Focused on coupling rich WebGL animations with robust frontend logic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="inline-block"
        >
          <MagneticButton>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('change-section', { detail: '#projects' }))}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-xl shadow-indigo-950/50 hover:shadow-indigo-500/25 block cursor-pointer"
            >
              Explore Work
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          Scroll Disabled
        </span>
        <span className="text-xs text-slate-400 font-medium">
          Press <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-slate-200">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold text-slate-200">K</kbd> to open command menu
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 md:hidden animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-slate-400" />
      </motion.div>
    </section>
  )
}

export default Hero
