import { motion } from 'framer-motion'

const InfiniteScroll = ({ items, speed = 20, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden w-full mask-gradient">
      <motion.div
        className="flex gap-8 whitespace-nowrap py-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            {item}
          </div>
        ))}
      </motion.div>
      
      {/* Gradient masks for fade effect */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />
    </div>
  )
}

export default InfiniteScroll
