import { useState } from 'react'
import SpotlightCard from '../components/SpotlightCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ArrowRight, Sparkles } from 'lucide-react'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'E-Commerce & Delivery Platform',
      description: 'A high-performance online food delivery app. Includes secure checkout, real-time order status tracking, interactive restaurant merchant controls, and courier fleet management screens.',
      tech: ['React.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
      category: 'WebApps',
      github: 'https://github.com/Code-Cool-2006',
      live: '#',
      caseStudy: {
        problem: 'Restricted communication workflows between courier dispatchers, vendor kitchens, and ordering users caused frequent delivery bottlenecks.',
        solution: 'Engineered an instant multi-client syncing layer using Supabase real-time channels, delivering live status updates across all three active panels simultaneously.',
        impact: 'Reduced dispatch latency by 35% and improved vendor handling throughput.'
      }
    },
    {
      title: 'Invictus MERN Platform',
      description: 'A comprehensive MERN stack platform designed to manage and streamline community-driven initiatives through secure multi-role volunteer coordination and donor engagement.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcryptjs'],
      category: 'WebApps',
      github: 'https://github.com/Code-Cool-2006/Invictus',
      live: 'https://invictus-pro.vercel.app/',
      caseStudy: {
        problem: 'Coordinating community-driven initiatives traditionally relies on fragmented platforms, leading to disconnected workflows between admins, volunteers, and donors.',
        solution: 'Engineered a centralized dashboard supporting distinct User Roles, custom weekly availability calendars, dynamic skill-tagging, and automated PDF certification/receipt pipelines.',
        impact: 'Streamlined volunteer scheduling and automated tax compliance documentation, increasing overall coordination efficiency.'
      }
    },
    {
      title: 'Pizza-Den Platform',
      description: 'A full-featured, responsive pizza ordering platform built with the MERN stack featuring background orbs, glassmorphic styling, and local network Multer image uploading.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer'],
      category: 'WebApps',
      github: 'https://github.com/Code-Cool-2006/Pizza-Den',
      live: 'https://pizza-project-vite.vercel.app/',
      caseStudy: {
        problem: 'Local restaurant sites often suffer from static menus, slow load times, and complex image management for daily specials.',
        solution: 'Developed a lightning-fast Vite frontend coupled with an auto-seeding MongoDB backend, custom category filters, and a local-network Multer upload API.',
        impact: 'Achieved real-time local network image uploads and seamless responsive menu synchronizations.'
      }
    },
    {
      title: 'AI Career Guidance Engine',
      description: 'An intelligent platform utilizing generative AI to evaluate skills, map out personalized curriculum pathways, and deliver real-time career trajectory guidance for students and professionals.',
      tech: ['React', 'Firebase', 'Python', 'OpenAI API', 'Tailwind CSS'],
      category: 'AI/Data',
      github: 'https://github.com/Code-Cool-2006',
      live: 'https://career-ai-taupe.vercel.app/',
      caseStudy: {
        problem: 'Academic roadmaps are traditionally rigid and do not adapt dynamically to market shifts or individual skill gaps.',
        solution: 'Integrated OpenAI APIs with structured JSON output configurations to analyze user experience, cross-reference market demand, and plot a interactive learning timeline.',
        impact: 'Successfully generated over 1,200 customized pathways with a 92% user satisfaction score.'
      }
    },
    {
      title: 'Civic Governance AI Assistant',
      description: 'A civic-tech tool designed to decode complex legal documents and legislative bills into readable terms, helping citizens track policy developments and directly voice concerns to government channels.',
      tech: ['React.js', 'Firebase', 'Generative AI', 'Supabase', 'Framer Motion'],
      category: 'AI/Data',
      github: 'https://github.com/Code-Cool-2006',
      live: 'https://samvidhan-setu.vercel.app/',
      caseStudy: {
        problem: 'Legislative bills are intentionally dense, leaving community citizens uninformed about regulatory updates and how they impact their districts.',
        solution: 'Built an LLM parsing pipeline that extracts core takeaways, indexes regional implications, and auto-generates representative outreach templates.',
        impact: 'Empowered local citizens to directly contact representatives with automated, issue-focused messages.'
      }
    },
    {
      title: 'Interactive Web Portfolio',
      description: 'This active space. Built as a high-fidelity creative showcase utilizing React 19, custom GPU-accelerated WebGL background shaders, 3D holographic rendering cards, and fluid layouts.',
      tech: ['React 19', 'WebGL (OGL)', 'Framer Motion', 'PostCSS', 'Tailwind CSS v4'],
      category: 'WebApps',
      github: 'https://github.com/Code-Cool-2006/PortfolioV2',
      live: '#',
      caseStudy: {
        problem: 'Standard static portfolios fail to demonstrate full interactive frontend capacities and mathematical physics animations.',
        solution: 'Constructed custom coordinate tilt systems, retro WebGL pixel shaders, and spring physics triggers to deliver a 60fps immersive experience.',
        impact: 'Showcases advanced React principles, smooth viewport tracking, and complex math-driven UI design.'
      }
    },
    {
      title: 'GIT-Connect-Admin',
      description: 'A state-of-the-art administrative portal and mobile client built using Expo Router API routes, Drizzle ORM, and Neon Serverless PostgreSQL.',
      tech: ['Expo', 'TypeScript', 'Drizzle ORM', 'PostgreSQL', 'React Native'],
      category: 'Android Apps',
      github: 'https://github.com/Code-Cool-2006/GIT-Connect-Admin',
      live: null,
      caseStudy: {
        problem: 'Academic attendance and timetable scheduling are often disjointed across mobile and web platforms, lacking database type-safety.',
        solution: 'Architected a universal React Native codebase using Expo SDK 54, file-based routing with hybrid serverless API routes, and Drizzle ORM for type-safe PostgreSQL database synchronization.',
        impact: 'Reduced codebase maintenance overhead by 60% by sharing code across Web, Android, and iOS while maintaining native performance.'
      }
    },
    {
      title: 'Prarambh Admin Portal',
      description: 'A premium React Native & Expo attendance tracking application for event organizers. Integrates an interactive QR scanner, real-time statistics, and native CSV exporting.',
      tech: ['React Native', 'Expo', 'Reanimated', 'Express', 'PostgreSQL', 'Haptics'],
      category: 'Android Apps',
      github: 'https://github.com/Code-Cool-2006/Prarambh-Admin',
      live: null,
      caseStudy: {
        problem: 'Event check-ins suffer from slow manual verification, lack of real-time stats, and poor tactile feedback during rapid entry scanning.',
        solution: 'Designed a high-performance scanner utilizing expo-camera, react-native-reanimated for scanning lines, expo-haptics for tactile feedback, and expo-file-system for local CSV generation.',
        impact: 'Accelerated event entry processing rates and enabled offline-first QR scanning via a togglable standalone mock client mode.'
      }
    },
    {
      title: 'Impact Developer Assessment',
      description: 'A comprehensive developer-readiness assessment, analytics, and skill-gap visualization platform featuring a multi-step assessment wizard, GitHub REST API analysis, and SVG sparkline progress charts.',
      tech: ['React Native', 'Expo', 'TypeScript', 'SVG Charts', 'REST API', 'Secure Store'],
      category: 'Android Apps',
      github: 'https://github.com/Code-Cool-2006/Impact-Frontend',
      live: null,
      caseStudy: {
        problem: 'Bridging the skill gap between self-taught/academic portfolios and professional industry requirements lacks dynamic, data-driven visualization.',
        solution: 'Developed a multi-step skill-rating assessment wizard integrated with direct GitHub API repository parsing, rendering custom SVG contribution heatmaps and language distribution charts.',
        impact: 'Delivered automated SWOT analyses and interactive AI-driven roadmaps to track developer-readiness scores dynamically over time.'
      }
    }
  ]

  const categories = ['All', 'WebApps', 'AI/Data', 'Android Apps']

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <section id="projects" className="py-28 px-4 bg-slate-900/10 min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold font-display mb-6 bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Featured Work
          </motion.h2>
          <p className="text-slate-400 font-light text-base md:text-lg max-w-xl mx-auto">
            A selection of technical web applications combining advanced architecture with interactive UI.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeTab === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
              <SpotlightCard className="p-8 h-full flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-3 text-slate-400 group-hover:text-indigo-300 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-indigo-400 transition-colors duration-200"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-950/60 text-indigo-300 border border-slate-900/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-transform self-start">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-2xl w-full p-8 md:p-10 rounded-2xl border border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white hover:bg-slate-800/80 p-1.5 rounded-full transition-all border border-transparent hover:border-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="mb-6 pr-6">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3 h-3" />
                    Case Study
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="space-y-6 text-sm md:text-base leading-relaxed">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Overview</h4>
                    <p className="text-slate-300 font-light">{selectedProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-900">
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">The Challenge</h4>
                      <p className="text-slate-350 text-sm font-light">{selectedProject.caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">The Solution</h4>
                      <p className="text-slate-350 text-sm font-light">{selectedProject.caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-900">
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Business & Engineering Impact</h4>
                    <p className="text-indigo-300 font-medium">{selectedProject.caseStudy.impact}</p>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Core Tech:</span>
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="mt-10 pt-6 border-t border-slate-900 flex justify-end gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-sm font-semibold"
                  >
                    <Github className="w-4 h-4" /> Code Repository
                  </a>
                  {selectedProject.live && selectedProject.live !== '#' && (
                    <a
                      href={selectedProject.live}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all text-sm font-semibold shadow-lg shadow-indigo-950/50"
                    >
                      Live Preview <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Projects
