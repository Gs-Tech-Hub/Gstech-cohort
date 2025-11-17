// src/components/Footer.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] dark:bg-[#0b1220] border-t border-[var(--primary)]/20 dark:border-[var(--primary)]/30">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* COMPANY INFO */}
          <div>
            <h4 className="text-xl font-bold mb-3 text-[var(--text-primary)]">GSTECH HUB</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Empowering startups and young tech talent across Africa. Join our accelerator, incubator, or skill programs.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h5 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Quick Links</h5>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li><Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">About</Link></li>
              <li><Link href="/programs/accelerator" className="hover:text-[var(--primary)] transition-colors">Programs</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link></li>
              <li><Link href="/apply" className="hover:text-[var(--primary)] transition-colors">Apply</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h5 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Contact</h5>
            <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
              <li>Email: <a href="mailto:info@gstechhub.com" className="hover:text-[var(--primary)] transition-colors">info@gstechhub.com</a></li>
              <li>Phone: <a href="tel:+2348000000000" className="hover:text-[var(--primary)] transition-colors">+234 800 000 0000</a></li>
              <li>Address: XXX, XXX, Nigeria</li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h5 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">Follow Us</h5>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/80 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/80 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/80 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/80 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-[var(--primary)]/20 dark:border-[var(--primary)]/30 pt-6 text-center text-sm text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} GSTech Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
