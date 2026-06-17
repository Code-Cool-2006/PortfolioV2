import { useState, useEffect } from 'react'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'w-[92%] md:w-[65%] max-w-4xl py-3.5 bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 rounded-full shadow-2xl shadow-indigo-950/40'
          : 'w-full max-w-7xl py-6 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10">
        <a 
          href="#" 
          className="text-lg md:text-xl font-extrabold font-display bg-gradient-to-r from-indigo-200 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight hover:scale-[1.02] transition-transform duration-300"
        >
          Rishab.dev
        </a>
        <div className="flex gap-4 md:gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs md:text-sm font-semibold font-sans text-slate-400 hover:text-indigo-300 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
