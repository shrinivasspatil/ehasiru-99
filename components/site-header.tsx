'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/sustainability/', label: 'Sustainability' },
  { href: '/certifications/', label: 'Certifications' },
  { href: '/contact/', label: 'Contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9f6] shadow-sm transition-shadow duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <Image alt="E-Hasiru" src="/images/logo.svg" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-[#0f1f17] hover:text-[#1a6b3c] transition-colors">{link.label}</Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link href="/pickup-request/" className="inline-flex items-center px-6 py-2.5 text-white text-sm font-bold rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a6b3c' }}>Request Pickup</Link>
          </div>
          <button className="md:hidden p-2 text-[#0f1f17]" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((v) => !v)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#f8f9f6]">
          <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="py-2 text-sm font-medium text-[#0f1f17] hover:text-[#1a6b3c] transition-colors" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
            ))}
            <Link href="/pickup-request/" className="mt-2 inline-flex items-center justify-center px-6 py-2.5 text-white text-sm font-bold rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a6b3c' }} onClick={() => setMobileMenuOpen(false)}>Request Pickup</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
