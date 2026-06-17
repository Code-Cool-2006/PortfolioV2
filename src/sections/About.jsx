import { motion } from 'framer-motion'

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      items: ['React 19', 'JavaScript (ES6+)', 'Tailwind CSS v4', 'Framer Motion', 'HTML5 & CSS3', 'WebGL (OGL)']
    },
    {
      title: 'Backend & Database',
      items: ['Node.js', 'Express', 'Supabase', 'Firebase', 'PostgreSQL', 'RESTful APIs']
    },
    {
      title: 'Tools & Workflows',
      items: ['Git & GitHub', 'Vite', 'PostCSS', 'ESLint', 'NPM/Yarn', 'Vercel / Netlify']
    }
  ]

  const stats = [
    { value: '5+', label: 'Featured Apps' },
    { value: '2+', label: 'Years Coding' },
    { value: '400+', label: 'Contributions' },
    { value: '100%', label: 'Commitment' }
  ]

  return (
    <section id="about" className="py-28 px-4 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Bio & Stats */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold font-display mb-6 bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-300 leading-relaxed space-y-6 text-base md:text-lg font-light"
              >
                <p>
                  I am a frontend software engineer dedicated to building immersive, interactive web experiences. 
                  My work is centered around pairing performance optimization with premium aesthetics, utilizing React and smooth web animation libraries.
                </p>
                <p>
                  I focus on writing clean, modular code and crafting user interfaces that feel intuitive, responsive, and alive. 
                  I enjoy taking challenging concepts and translating them into robust, production-ready applications.
                </p>
              </motion.div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-4 rounded-xl text-center hover:border-indigo-500/35 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-extrabold font-display text-indigo-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Categorized Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-6">Technical Competency</h3>
            
            <div className="space-y-6">
              {skillCategories.map((cat, cIdx) => (
                <div key={cIdx} className="glass-card p-5 rounded-xl">
                  <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-3">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1.5 rounded-lg bg-slate-900/60 text-slate-300 text-xs md:text-sm border border-slate-800 hover:border-indigo-500/40 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
