'use client'

import Link from 'next/link'
import React from 'react'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [dropdown, setDropdown] = React.useState(false)

  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  React.useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') document.documentElement.classList.add('dark')
    if (stored === 'light') document.documentElement.classList.remove('dark')
  }, [])

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <div className="backdrop-blur bg-white/30 dark:bg-black/30 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            GSTECH HUB
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center font-medium">

            <Link href="/">Home</Link>

            {/* Programs dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1"
                onClick={() => setDropdown(d => !d)}
              >
                Programs <ChevronDown size={16} />
              </button>

              {dropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#0b1220] shadow-md rounded-lg p-4 w-48">
                  <Link href="/programs/accelerator" className="block py-2 hover:opacity-70">
                    Accelerator
                  </Link>
                  <Link href="/programs/incubator" className="block py-2 hover:opacity-70">
                    Incubator
                  </Link>
                  <Link href="/programs/tech-skills" className="block py-2 hover:opacity-70">
                    Tech Skills
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            <button
              className="px-4 py-2 border rounded-md font-medium hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => (window.location.href = '/apply')}
            >
              Apply
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md border hover:bg-black/5 dark:hover:bg-white/10"
            >
              {/* Auto-switch icon */}
              {typeof window !== 'undefined' &&
              document.documentElement.classList.contains('dark') ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(o => !o)} aria-label="Open menu">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#071025] px-6 py-6 shadow-lg transition-all">

          <Link href="/" className="block py-3 border-b border-black/10 dark:border-white/10">
            Home
          </Link>

          {/* Programs dropdown mobile */}
          <div className="py-3 border-b border-black/10 dark:border-white/10">
            <button
              className="w-full flex items-center justify-between py-2"
              onClick={() => setDropdown(d => !d)}
            >
              <span>Programs</span>
              <ChevronDown size={18} className={dropdown ? 'rotate-180' : ''} />
            </button>

            {dropdown && (
              <div className="pl-4 pt-2">
                <Link href="/programs/accelerator" className="block py-2">Accelerator</Link>
                <Link href="/programs/incubator" className="block py-2">Incubator</Link>
                <Link href="/programs/tech-skills" className="block py-2">Tech Skills</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block py-3 border-b border-black/10 dark:border-white/10">
            About
          </Link>

          <Link href="/contact" className="block py-3 border-b border-black/10 dark:border-white/10">
            Contact
          </Link>

          <button
            className="mt-4 w-full py-3 border rounded-md font-medium dark:border-white/20"
            onClick={() => (window.location.href = '/apply')}
          >
            Apply
          </button>

          <button
            onClick={toggleTheme}
            className="mt-4 w-full py-3 border rounded-md flex justify-center"
          >
            {typeof window !== 'undefined' &&
            document.documentElement.classList.contains('dark') ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </div>
      )}
    </nav>
  )
}
