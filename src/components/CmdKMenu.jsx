import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Hash, ExternalLink, Github, Mail, Command } from 'lucide-react'

const CmdKMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    const handleOpenMenu = () => setIsOpen(true)
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-command-menu', handleOpenMenu)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-command-menu', handleOpenMenu)
    }
  }, [])

  const items = [
    { type: 'nav', label: 'Jump to: Start Page', target: '#hero', keywords: 'home start landing hero welcome resume return main' },
    { type: 'nav', label: 'Jump to: About Section', target: '#about', keywords: 'about bio status bio profile' },
    { type: 'nav', label: 'Jump to: Experience Timeline', target: '#experience', keywords: 'experience work job history career education' },
    { type: 'nav', label: 'Jump to: Projects Showcase', target: '#projects', keywords: 'projects work apps portfolio code' },
    { type: 'nav', label: 'Jump to: Coding Activity', target: '#coding-stats', keywords: 'stats activity github graph coding languages progress' },
    { type: 'nav', label: 'Jump to: Contact Form', target: '#contact', keywords: 'contact hire mail email write' },
    { type: 'action', label: 'View GitHub Profile', target: 'https://github.com/Code-Cool-2006', keywords: 'github open source code cool profile' },
    { type: 'action', label: 'Email Rishab directly', target: 'mailto:rchavadar@gmail.com', keywords: 'email gmail send write hire' }
  ]

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.keywords.toLowerCase().includes(search.toLowerCase())
  )

  const handleItemClick = (item) => {
    setIsOpen(false)
    setSearch('')
    if (item.type === 'nav') {
      window.dispatchEvent(new CustomEvent('change-section', { detail: item.target }))
    } else {
      window.open(item.target, '_blank')
    }
  }

  return (
    <>
      {/* Sticky command indicator in bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.6, duration: 0.5 }
        }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99] hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950/90 border border-indigo-500/50 text-slate-200 text-sm font-semibold cursor-pointer hover:border-indigo-400 shadow-xl shadow-indigo-950/30 select-none group"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-md group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
        <Command className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
        <span className="font-light text-slate-350">Press</span>
        <kbd className="px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-xs font-mono font-bold text-indigo-300">Ctrl</kbd>
        <span className="text-slate-500 font-light">+</span>
        <kbd className="px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-xs font-mono font-bold text-indigo-300">K</kbd>
        <span className="text-slate-400 font-normal text-xs border-l border-slate-800 pl-2">to navigate</span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[999999] flex items-start justify-center pt-24 md:pt-36 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-lg w-full rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden"
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-900 bg-slate-950/30">
                <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-white text-base placeholder-slate-500 font-sans"
                  autoFocus
                />
              </div>

              {/* Items List */}
              <div className="p-3 max-h-[300px] overflow-y-auto space-y-1">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleItemClick(item)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-indigo-500/10 border border-transparent hover:border-indigo-500/20 text-slate-300 hover:text-white transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {item.type === 'nav' ? (
                          <Hash className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                        ) : item.label.includes('GitHub') ? (
                          <Github className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                        ) : (
                          <Mail className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                        )}
                        <span className="text-sm font-semibold font-sans">{item.label}</span>
                      </div>

                      <span className="text-[10px] uppercase font-bold text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 group-hover:border-indigo-500/20 group-hover:text-indigo-400 flex items-center gap-1">
                        {item.type === 'nav' ? 'Jump' : 'External'}
                        {item.type !== 'nav' && <ExternalLink className="w-2.5 h-2.5" />}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-500 text-sm font-light">
                    No commands matched your search.
                  </div>
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-5 py-3 border-t border-slate-900 bg-slate-950/20 flex justify-between items-center text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                <span>Navigate ↑↓ / Enter to Select</span>
                <span>ESC to Close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CmdKMenu
