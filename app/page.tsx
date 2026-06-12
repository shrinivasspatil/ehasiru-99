'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="E-Hasiru" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/services" className="hover:text-green-600">Services</Link>
            <Link href="/about" className="hover:text-green-600">About</Link>
            <Link href="/sustainability" className="hover:text-green-600">Sustainability</Link>
            <Link href="/certifications" className="hover:text-green-600">Certifications</Link>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>
          </nav>
          <Link href="/request-pickup" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 text-sm font-semibold">
            Request Pickup
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/wdyrzhwGNgc?autoplay=1&mute=1&loop=1&playlist=wdyrzhwGNgc&controls=0"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            allowFullScreen
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 31, 23, 0.7)' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="border border-emerald-400 text-emerald-400 inline-block px-4 py-2 rounded-full text-xs font-bold mb-6 tracking-wide">
            ● CPCB AUTHORISED RECYCLER
          </div>
          <p className="text-gray-300 text-sm font-semibold mb-4 tracking-widest">ZERO RISK. 100% COMPLIANCE. MAXIMUM VALUE RECOVERY.</p>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl text-white">Responsible IT Asset Disposal & E-Waste Recycling Across India</h1>
          <p className="text-gray-300 mb-8 max-w-2xl text-base leading-relaxed font-light">Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/request-pickup" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 font-bold text-sm">
              Request Pickup
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 font-bold text-sm transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Compliant Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center mb-4">Compliant. Secure. Documented. Every Disposal, Every Time.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              { title: 'CPCB Authorised', desc: 'Legally compliant disposal under E-Waste Rules 2016', icon: '✓' },
              { title: 'Pan-India Pickup', desc: '245+ cities covered. We come to you.', icon: '✓' },
              { title: 'Certified Data Destruction', desc: 'NIST-compliant wiping. Certificate per device.', icon: '✓' }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600 font-bold">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section style={{ backgroundColor: '#0f1f17' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-white text-3xl font-black mb-3">What We Solve</h2>
          <p className="text-gray-400 max-w-2xl mb-12">E-Hasiru Fix: A fully managed, compliant & transparent lifecycle — from pickup to certification.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Risk of Data Leakage', desc: 'Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.' },
              { title: 'Lack of Transparency', desc: 'Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.' },
              { title: 'Non-compliance with E-Waste Regulations', desc: 'E-Waste Rules 2016 mandate authorised disposal. Informal channels leave you non-compliant.' },
              { title: 'No Audit-ready Documentation', desc: 'Without Form 6 and Certificate of Destruction, ESG reports and audits have nothing to show.' }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: '2px' }}>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }} />
                <h3 className="font-black text-white text-sm">{item.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-3">What We Do</h2>
          <p className="text-gray-600 text-center mb-12">End-to-end IT asset and e-waste management for enterprises</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'IT Asset Disposal', desc: 'Compliant disposal with full documentation' },
              { title: 'Secure Data Destruction', desc: 'NIST-compliant wiping. Certificate issued.' },
              { title: 'E-Waste Recycling', desc: 'CPCB-authorised recycling with reporting' },
              { title: 'IT Asset Refurbishment', desc: 'Extend lifecycle through refurbishment' },
              { title: 'EPR Compliance', desc: 'Form 6, documentation, compliance support' },
              { title: 'Sustainability Reporting', desc: 'CO2 savings and ESG documentation' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all" style={{ borderRadius: '2px' }}>
                <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#0f1f17' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-12">OUR IMPACT</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '245+', label: 'Cities & Towns' },
              { num: '124+', label: 'Clients Served' },
              { num: '12,000+', label: 'MT Recycled' },
              { num: '1,250+', label: 'MT Refurbished' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-black text-white">{stat.num}</div>
                <p className="text-gray-300 text-sm mt-3 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#ecfdf5' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-3">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">From pickup to certification in a transparent process</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: '01', title: 'Collection' },
              { num: '02', title: 'Segregation' },
              { num: '03', title: 'Data Destruction' },
              { num: '04', title: 'Recycling' },
              { num: '05', title: 'Refurbishment' },
              { num: '06', title: 'Reporting' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 font-black">{step.num}</div>
                <p className="font-bold text-sm">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#ecfdf5' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'Professional, transparent, and fully compliant. Exactly what we needed.', author: 'CTO, TechCorp India', company: 'Fortune 500' },
              { quote: 'Best-in-class data destruction certification. Highly recommended.', author: 'CISO, Financial Services', company: 'Leading Bank' },
              { quote: 'Turned e-waste into environmental impact reporting. Amazing process.', author: 'CSR Head, Manufacturing', company: 'Large Industrial' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-6 italic">"{item.quote}"</p>
                <p className="font-bold text-sm">{item.author}</p>
                <p className="text-gray-600 text-xs">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#ecfdf5' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How do I schedule a pickup?', a: 'Visit request-pickup or call. We arrange pickup at your convenience across 245+ cities.' },
              { q: 'Is my data safe?', a: 'Yes. NIST 800-88 compliant destruction with per-device certification.' },
              { q: 'What happens to my assets?', a: 'Refurbishable assets are refurbished responsibly. Others are recycled under CPCB norms.' },
              { q: 'Do I get documentation?', a: 'Yes. Form 6, Certificate of Destruction, and CO2 savings report included.' },
              { q: 'How long does it take?', a: 'Pickup within 3 days. Certificates issued within 7 working days.' },
              { q: 'What\'s the cost?', a: 'Pricing depends on volume and asset type. Contact us for a quote.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-300 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  {item.q}
                  <span>{openFAQ === i ? '−' : '+'}</span>
                </button>
                {openFAQ === i && (
                  <div className="px-6 py-4 border-t border-gray-300 bg-gray-50 text-gray-700 text-sm">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0f1f17' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready to Dispose Your IT Assets Responsibly?</h2>
          <p className="text-gray-300 mb-8">Get started with a free quote. CPCB compliant, transparent, documented.</p>
          <Link href="/request-pickup" className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 font-bold inline-block">
            Request Free Pickup
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image src="/images/logo.svg" alt="E-Hasiru" width={80} height={32} className="h-8 w-auto mb-4" />
              <p className="text-xs leading-relaxed">CPCB-authorised e-waste recycling and IT asset disposal across India.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4 text-xs">SERVICES</p>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services">IT Asset Disposal</Link></li>
                <li><Link href="/services">Data Destruction</Link></li>
                <li><Link href="/services">E-Waste Recycling</Link></li>
                <li><Link href="/services">Refurbishment</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4 text-xs">COMPANY</p>
              <ul className="space-y-2 text-xs">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/sustainability">Sustainability</Link></li>
                <li><Link href="/certifications">Certifications</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4 text-xs">CONTACT</p>
              <p className="text-xs mb-2">+91 98459 37366</p>
              <p className="text-xs mb-2">info@ehasiru.com</p>
              <p className="text-xs">Bengaluru, India</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-xs text-gray-500">© 2024 E-Hasiru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
