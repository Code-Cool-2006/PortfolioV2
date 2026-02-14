import { motion } from 'framer-motion'

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full overflow-hidden opacity-[0.03]"
    >
      <div className="relative -top-[100%] left-[0%] h-[300%] w-[300%] animate-noise bg-[url('/noise.png')] opacity-20" />
      {/* Fallback to CSS generated noise if image missing, or use SVG filter */}
      <svg className="hidden">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div 
        className="absolute inset-0 h-full w-full"
        style={{ filter: 'url(#noise)', opacity: 0.05 }}
      ></div>
    </motion.div>
  )
}

export default FuzzyOverlay
