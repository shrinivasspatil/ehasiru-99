'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="E-Hasiru" width={40} height={40} className="w-10 h-10" />
            <span className="hidden sm:inline font-bold text-gray-900">E-Hasiru</span>
          </Link>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-6">
            {[
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Certifications', href: '/certifications' },
              { label: 'Contact', href: '/contact' }
            ].map(item => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/pickup-request" className="hidden md:inline-block bg-gray-900 text-white px-4 py-2 rounded">
            Pickup Request
          </Link>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Certifications', href: '/certifications' },
                { label: 'Contact', href: '/contact' },
                { label: 'Pickup Request', href: '/pickup-request' }
              ].map(item => (
                <Link key={item.href} href={item.href} className="block text-gray-700 hover:text-gray-900">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero */}
        <section className="bg-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Turn Your E-Waste Into <span className="text-accent">Revenue</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              E-Hasiru is India&apos;s leading e-waste recycling and IT asset disposal company. CPCB authorized facility with data security at its core.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pickup-request" className="bg-gray-900 text-white px-8 py-3 rounded font-semibold hover:bg-gray-800">
                Request Pickup
              </Link>
              <Link href="/services" className="border border-gray-900 text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-50">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">Our Impact</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { value: 245, suffix: '+', label: 'Cities & Towns Covered' },
                { value: 124, suffix: '+', label: 'Corporate Clients Served' },
                { value: 12000, suffix: '+', label: 'MT of E-Waste Recycled' },
                { value: 1250, suffix: '+', label: 'MT of Assets Refurbished' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl text-white">{stat.value.toLocaleString()}{stat.suffix}</div>
                  <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'E-Waste Recycling', slug: 'ewaste-recycling', desc: 'Secure and environmentally responsible e-waste disposal following CPCB guidelines' },
                { title: 'IT Asset Disposal', slug: 'it-asset-disposal', desc: 'Complete lifecycle management of IT equipment from deployment to recycling' },
                { title: 'Data Destruction', slug: 'data-destruction', desc: 'Certified data destruction and secure wiping of all digital storage devices' },
                { title: 'Refurbishment', slug: 'refurbishment', desc: 'Professional refurbishment and resale of working IT equipment' },
                { title: 'EPR Compliance', slug: 'epr-compliance', desc: 'Extended Producer Responsibility compliance and management services' }
              ].map(svc => (
                <Link key={svc.slug} href={`/services/${svc.slug}`} className="p-6 bg-white rounded border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-sm">{svc.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Facility */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">Our Facility</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { src: '/images/facility/front-gate.jpeg', alt: 'Front Gate' },
                { src: '/images/facility/machines.jpeg', alt: 'Machinery' },
                { src: '/images/facility/full-team.jpeg', alt: 'Team' },
                { src: '/images/facility/extracted-metals.jpeg', alt: 'Extracted Metals' },
                { src: '/images/facility/dismantling-area.jpeg', alt: 'Dismantling Area' }
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded overflow-hidden">
                  <Image src={img.src} alt={img.alt} width={300} height={300} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-section py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div>
              {[
                {
                  question: "How is data securely destroyed?",
                  answer: "We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued."
                },
                {
                  question: "Do you provide Form 6 documentation?",
                  answer: "Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes."
                },
                {
                  question: "Do you offer pan-India pickup?",
                  answer: "Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR. Contact us for your city."
                },
                {
                  question: "What types of IT assets do you accept?",
                  answer: "Laptops, desktops, servers, workstations, networking equipment (routers, switches, hubs), printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics."
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <details className="py-5">
                    <summary className="font-bold text-foreground cursor-pointer text-sm">{faq.question}</summary>
                    <div className="mt-3 text-gray-600 text-sm leading-relaxed font-light">{faq.answer}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services/ewaste-recycling">E-Waste Recycling</Link></li>
                <li><Link href="/services/data-destruction">Data Destruction</Link></li>
                <li><Link href="/services/it-asset-disposal">IT Asset Disposal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/certifications">Certifications</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@ehasiru.com</li>
                <li>Phone: +91 80 4040 6666</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 E-Hasiru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
