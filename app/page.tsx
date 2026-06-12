'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const faqs = [
    { q: 'How is data securely destroyed?', a: 'We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued.' },
    { q: 'Do you provide Form 6 documentation?', a: 'Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes.' },
    { q: 'Do you offer pan-India pickup?', a: 'Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR.' },
    { q: 'What types of IT assets do you accept?', a: 'Laptops, desktops, servers, workstations, networking equipment, printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics.' },
    { q: 'Are you CPCB authorised?', a: 'Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified.' }
  ]

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image alt="E-Hasiru" src="/images/logo.svg" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/services/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/about/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/sustainability/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sustainability</Link>
              <Link href="/certifications/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Certifications</Link>
              <Link href="/contact/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="hidden md:block">
              <Link href="/pickup-request/" className="inline-flex items-center px-6 py-2.5 text-white text-sm font-bold rounded hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1a6b3c' }}>Request Pickup</Link>
            </div>
            <button className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image alt="E-Hasiru facility" src="/images/facility/dismantling-area.jpeg" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{width:'177.78vh', height:'56.25vw', minWidth:'100%', minHeight:'100%'}} src="https://www.youtube.com/embed/wdyrzhwGNgc?autoplay=1&mute=1&loop=1&playlist=wdyrzhwGNgc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3" allow="autoplay; encrypted-media" title="E-Hasiru facility"></iframe>
        </div>
        <div className="absolute inset-0 bg-[#0F1F17]/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full"></span>CPCB Authorised Recycler
            </div>
            <p className="text-sm font-black text-white/60 uppercase tracking-widest mb-4">Zero Risk. 100% Compliance. Maximum Value Recovery.</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight">Responsible IT Asset Disposal & E-Waste Recycling Across India</h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-light">Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pickup-request/" className="inline-flex items-center px-6 py-3 bg-[#1a6b3c] text-white text-sm font-bold rounded-lg hover:bg-[#165030] transition-colors">Request Pickup</Link>
              <Link href="/services/" className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliant Section */}
      <section className="bg-[#f8f9f6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-[#1a6b3c] mb-3">Why Enterprises Choose E-Hasiru</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0f1f17]">Compliant. Secure. Documented. Every Disposal, Every Time.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: 'CPCB Authorised', desc: 'Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.', icon: 'shield-check'},
              {title: 'Pan-India Pickup', desc: '245+ cities and towns covered. We come to your premises—no drop-off required. Scheduled, documented, hassle-free.', icon: 'truck'},
              {title: 'Certified Data Destruction', desc: 'NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.', icon: 'file-check'}
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden bg-white rounded-xl p-7 border border-gray-100 shadow-sm">
                <div className="relative z-10">
                  <h3 className="text-lg font-black text-[#0f1f17] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 right-0 z-0 translate-x-6 translate-y-6">
                  {item.icon === 'shield-check' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 text-[#1a6b3c] opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  )}
                  {item.icon === 'truck' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 text-[#1a6b3c] opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                      <path d="M15 18H9"/>
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                      <circle cx="17" cy="18" r="2"/>
                      <circle cx="7" cy="18" r="2"/>
                    </svg>
                  )}
                  {item.icon === 'file-check' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 text-[#1a6b3c] opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"/>
                      <path d="m9 15 2 2 4-4"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="bg-[#0f1f17] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-[#e8f5ec] mb-3">The Problem</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">What We Solve</h2>
            <p className="text-sm text-gray-400 font-light max-w-xl">E-Hasiru Fix: A fully managed, compliant & transparent lifecycle — from pickup to certification.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {title: 'Risk of Data Leakage', desc: 'Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.', icon: 'shield-alert'},
              {title: 'Lack of Transparency', desc: 'Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.', icon: 'eye'},
              {title: 'Non-compliance with E-Waste Regulations', desc: 'The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.', icon: 'file-x'},
              {title: 'No Audit-ready Documentation', desc: 'Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.', icon: 'clipboard-x'}
            ].map((item, i) => (
              <div key={i} className="border border-white/10 p-6 hover:border-white/20 transition-colors" style={{borderRadius: '2px'}}>
                <div className="w-10 h-10 bg-[#1a6b3c]/20 rounded flex items-center justify-center mb-4">
                  {item.icon === 'shield-alert' && (
                    <svg className="w-5 h-5 text-[#e8f5ec]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4M12 16h.01"/></svg>
                  )}
                  {item.icon === 'eye' && (
                    <svg className="w-5 h-5 text-[#e8f5ec]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                  {item.icon === 'file-x' && (
                    <svg className="w-5 h-5 text-[#e8f5ec]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5M14.5 12.5l-5 5M9.5 12.5l5 5"/></svg>
                  )}
                  {item.icon === 'clipboard-x' && (
                    <svg className="w-5 h-5 text-[#e8f5ec]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M15 11l-6 6M9 11l6 6"/></svg>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#f8f9f6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0f1f17]">What We Do</h2>
            <p className="mt-3 text-sm text-[#4b5563] max-w-xl mx-auto font-light">End-to-end IT asset and e-waste management for enterprises</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: 'IT Asset Disposal', desc: 'Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.'},
              {title: 'Secure Data Destruction', desc: 'NIST-compliant data wiping and physical destruction with certificate of destruction issued.'},
              {title: 'E-Waste Recycling', desc: 'CPCB-authorised recycling of all electronic waste categories with sustainability reporting.'},
              {title: 'IT Asset Refurbishment', desc: 'Extend asset lifecycle through certified refurbishment and responsible remarketing.'},
              {title: 'EPR Compliance', desc: 'Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.'},
              {title: 'Sustainability Reporting', desc: 'CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.'}
            ].map((item, i) => (
              <Link key={i} href="#" className="group bg-white border border-gray-100 rounded p-6 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mb-4 group-hover:bg-[#e8f5ec]">
                  <svg className="w-5 h-5 text-[#1a6b3c]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-[#0f1f17] mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0f1f17] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-black uppercase tracking-widest text-[#e8f5ec] mb-12">Our Impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{num: '245+', label: 'Cities & Towns Covered'}, {num: '124+', label: 'Corporate Clients Served'}, {num: '12,000+', label: 'MT of E-Waste Recycled'}, {num: '1,250+', label: 'MT of Assets Refurbished'}].map((s, i) => (
              <div key={i}><div className="text-4xl md:text-5xl font-black text-white">{s.num}</div><p className="text-xs md:text-sm mt-2 font-semibold text-white/70">{s.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#e8f5ec] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0f1f17]">How It Works</h2>
            <p className="mt-3 text-sm text-[#4b5563] max-w-xl mx-auto font-light">From pickup to certification in a transparent, documented process</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {[{num: '01', t: 'Collection'}, {num: '02', t: 'Sorting & Segregation'}, {num: '03', t: 'Data Destruction'}, {num: '04', t: 'Recycling'}, {num: '05', t: 'Refurbishment'}, {num: '06', t: 'Reporting'}].map((s, i) => (
              <div key={i} className="text-center"><div className="bg-[#1a6b3c] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-black text-sm">{s.num}</div><h3 className="text-xs font-bold text-[#0f1f17]">{s.t}</h3></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#e8f5ec] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0f1f17]">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {quote: 'E-Hasiru made our IT asset disposal so simple. Pickup was on schedule, destruction was documented, and we got Form 6 within a week.', name: 'Rajesh Kumar', company: 'TechCorp India'},
              {quote: 'For our ESG compliance audit, having a certified recycler like E-Hasiru was crucial. They provided all the documentation we needed.', name: 'Priya Singh', company: 'Global Finance Ltd'},
              {quote: 'Zero hassle. They handled 500+ devices from our offices across India. Excellent service, transparent pricing, and reliable follow-up.', name: 'Anil Patel', company: 'Manufacturing Solutions'}
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-all">
                <p className="text-sm text-[#4b5563] font-light leading-relaxed mb-4">"{t.quote}"</p>
                <p className="text-xs font-bold text-[#0f1f17]">{t.name}</p>
                <p className="text-xs text-[#1a6b3c] font-light">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#e8f5ec] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0f1f17]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-[#0f1f17] text-sm flex-1">{faq.q}</h3>
                  <ChevronDown className={`w-5 h-5 text-[#1a6b3c] transition-transform flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === i && <p className="mt-4 text-xs text-[#4b5563] font-light leading-relaxed">{faq.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a6b3c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Dispose of Your IT Assets Responsibly?</h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-8 font-light">Join 124+ enterprises who trust E-Hasiru for compliant, documented, and transparent e-waste management.</p>
          <Link href="/pickup-request/" className="inline-flex items-center px-8 py-3 bg-white text-[#1a6b3c] font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm">Request a Pickup Today</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f17] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div><p className="text-xs text-gray-500 font-light">CPCB-authorised e-waste recycling & IT asset disposal across India.</p></div>
            <div><h3 className="text-white font-black mb-4 text-xs">Services</h3><ul className="space-y-2 text-xs"><li><Link href="#" className="hover:text-white">IT Asset Disposal</Link></li><li><Link href="#" className="hover:text-white">Data Destruction</Link></li></ul></div>
            <div><h3 className="text-white font-black mb-4 text-xs">Company</h3><ul className="space-y-2 text-xs"><li><Link href="#" className="hover:text-white">About</Link></li><li><Link href="#" className="hover:text-white">Contact</Link></li></ul></div>
            <div><h3 className="text-white font-black mb-4 text-xs">Contact</h3><p className="text-xs"><a href="tel:+919845937366" className="hover:text-white">+91 98459 37366</a></p></div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-xs text-gray-600">© 2024 E-Hasiru Green IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}
