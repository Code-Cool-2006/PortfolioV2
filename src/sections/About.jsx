import { motion } from 'framer-motion'
import InfiniteScroll from '../components/InfiniteScroll'

const About = () => {
  const skills = [
    "React", "Firebase", "Tailwind CSS", "Node.js", "Javascript", "Generative AI"
  ]

  return (
    <section id="about" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 leading-relaxed"
          >
            <p className="mb-6">
              I'm a passionate developer who loves creating beautiful and functional web applications. 
              With a strong foundation in modern web technologies, I strive to build immersive user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, experimenting with 3D graphics, or contributing to open source projects.
            </p>
          </motion.div>

          <div className="overflow-hidden">
             <h3 className="text-xl font-semibold mb-6 text-white">Tech Stack</h3>
             <InfiniteScroll 
               items={skills.map(skill => (
                 <span className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-colors cursor-default whitespace-nowrap">
                   {skill}
                 </span>
               ))}
               speed={20}
             />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
