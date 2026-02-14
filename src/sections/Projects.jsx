import SpotlightCard from '../components/SpotlightCard'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern online food delivery app for a user resturent and delivery partner screen.',
      tech: ['React.js', 'Node.js', ''],
    },
    {
      title: 'AI Career Guidance App',
      description: 'Real-time AI Career Guidance App for students and professionals.',
      tech: ['React', 'Firebase', 'Python','Tailwind CSS'],
    },
    {
      title: 'Social Media App',
      description: 'Connect and share moments with friends globally.',
      tech: ['React Native', 'Firebase', 'Redux'],
    },
    {
      title: 'Portfolio V1',
      description: 'My previous portfolio site showcasing early work.',
      tech: ['HTML', 'SCSS', 'JavaScript'],
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between hover:border-slate-600 transition-colors">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                  <p className="text-slate-400 mb-6">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
