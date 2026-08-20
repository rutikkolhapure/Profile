'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-slate-200/60' : 'shadow-sm shadow-slate-200/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
          <a href="#" className="text-lg md:text-xl font-bold gradient-text whitespace-nowrap">
            Rutik Kolhapure
          </a>

          <div className="hidden md:flex items-center justify-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary/10 rounded-lg text-sm font-medium transition-all duration-300"
            >
              <FiDownload size={16} />
              Download
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg text-sm font-medium transition-all duration-300 hover-glow"
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md shadow-slate-200/60">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary/50 text-primary hover:bg-primary/10 rounded-lg text-sm font-medium transition-all duration-300"
              >
                <FiDownload size={16} />
                Download
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg text-sm font-medium transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
