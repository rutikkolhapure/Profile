'use client'

import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rutik Kolhapure. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            Built with <FiHeart className="text-red-500 mx-1" />.
          </div>
        </div>
      </div>
    </footer>
  )
}
