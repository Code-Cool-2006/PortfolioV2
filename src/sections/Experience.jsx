import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

const Experience = () => {
  const items = [
    {
      role: 'Frontend Developer',
      company: 'Freelance & Open Source Projects',
      period: '2024 - Present',
      description: [
        'Designed and constructed high-performance interactive web experiences using React 19, Framer Motion, and WebGL.',
        'Engineered responsive dashboards, real-time database interfaces with Supabase/Firebase, and AI-assisted tools.',
        'Refined performance and load speed by utilizing modern bundling, code splitting, and asset compression techniques.'
      ],
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      role: 'Intern',
      company: 'AEQUS Hubli',
      period: 'March 2025 - March 2025',
      description: [
        "I built a Employee Management application that is a web-based tool designed to streamline employee information management efficiently. It allows admins to register, log in, add employee details, view employee lists, and download data in Excel format. Additionally, it incorporates a secure feature to view registered user information, accessible only through valid credentials."
      ],
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600'
    },
    {
      role: 'Webmaster',
      company: 'IEEE Student Branch KLS GIT',
      period: ' Feb 2026 - Present',
      description: [
        "As the Webmaster for IEEE Student Branch KLS GIT, I contribute to the development and maintenance of the Club's Technical Portal and enhance the online presence of the branch by creating Website which will be used for event registration and other activities. "
      ],
      icon: GraduationCap,
      color: 'from-pink-500 to-pink-600'
    },
    {
      role: 'Assistant Webmaster',
      company: 'CodeChef Club KLS GIT',
      period: ' Feb 2026 - Present',
      description: [
        "As the Assistant Webmaster for CodeChef Club KLS GIT, I contribute to the development of Websites for upcoming events and activities. "
      ],
      icon: GraduationCap,
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold font-display mb-16 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        {/* Timeline container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline node icon */}
                <span className={`absolute -left-[49px] md:-left-[65px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-300 shadow-md shadow-slate-950/50 hover:border-indigo-500 transition-colors duration-300`}>
                  <Icon className="h-5 w-5" />
                </span>

                {/* Content Card */}
                <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-slate-600/50 transition-all duration-300">
                  {/* Backdrop subtle gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-slate-400 font-medium text-sm md:text-base">
                        {item.company}
                      </p>
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-xs font-semibold text-indigo-300 border border-indigo-500/20 whitespace-nowrap self-start md:self-center">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
