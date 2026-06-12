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
              {title: 'IT Asset Disposal', desc: 'Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.', icon: 'monitor'},
              {title: 'Secure Data Destruction', desc: 'NIST-compliant data wiping and physical destruction with certificate of destruction issued.', icon: 'shield'},
              {title: 'E-Waste Recycling', desc: 'CPCB-authorised recycling of all electronic waste categories with sustainability reporting.', icon: 'refresh'},
              {title: 'IT Asset Refurbishment', desc: 'Extend asset lifecycle through certified refurbishment and responsible remarketing.', icon: 'settings'},
              {title: 'EPR Compliance', desc: 'Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.', icon: 'file'},
              {title: 'Sustainability Reporting', desc: 'CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.', icon: 'chart'}
            ].map((item, i) => (
              <Link key={i} href="#" className="group bg-white border border-gray-100 rounded p-6 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mb-4 group-hover:bg-[#e8f5ec]">
                  {item.icon === 'monitor' && <svg className="w-5 h-5 text-[#1a6b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
                  {item.icon === 'shield' && <svg className="w-5 h-5 text-[#1a6b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>}
                  {item.icon === 'refresh' && <svg className="w-5 h-5 text-[#1a6b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/></svg>}
                  {item.icon === 'settings' && <svg className="w-5 h-5 text-[#1a6b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>}
                  {item.icon === 'file' && <svg className="w-5 h-5 text-[#1a6b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8M16 13H8M16 17H8"/></svg>}
                  {item.icon === 'chart' && <svg className="w-5 h-5 text-[#1a6b3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 21v-6M12 21V3M19 21V9"/></svg>}
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
      <section className="bg-[#e8f5ec] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0f1f17]">How It Works</h2>
            <p className="mt-3 text-sm text-[#4b5563] max-w-xl mx-auto font-light">From pickup to certification in a transparent, documented process</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {num: '01', title: 'Collection', desc: 'Schedule a pickup or drop off at our facility. We cover 245+ cities across India.'},
              {num: '02', title: 'Sorting & Segregation', desc: 'Assets are categorised by type, condition, and disposal pathway.'},
              {num: '03', title: 'Data Destruction', desc: 'All storage media is wiped or physically destroyed to NIST standards. Certificate issued.'},
              {num: '04', title: 'Recycling', desc: 'Non-reusable components are processed under CPCB-authorised recycling protocols.'},
              {num: '05', title: 'Refurbishment', desc: 'Viable assets are tested, repaired, and prepared for responsible remarketing.'},
              {num: '06', title: 'Reporting', desc: 'You receive Form 6, certificate of destruction, and CO2 savings report.'}
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1a6b3c]/10 border border-[#1a6b3c]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#1a6b3c]">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1f17]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#4b5563] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f8f9f6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1f17]">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {quote: 'E-Hasiru handled our 400-laptop disposal end-to-end. Certificate of destruction delivered on time, zero data risk. Exactly what our security team needed.', name: 'Riyazat', company: 'Voltvave Innovations, Bangalore'},
              {quote: 'We needed Form 6 documentation for our annual audit. E-Hasiru processed everything within the week and the paperwork was spotless.', name: 'Nikhil (Procurement Head)', company: 'Manufacturing Firm, Peenya Bangalore'},
              {quote: 'Pan-India coverage made the difference. We had assets across three cities and they coordinated the entire pickup without us lifting a finger.', name: 'Srinivas Rao (CFO)', company: 'Financial Services Firm, Hyderabad'}
            ].map((t, i) => (
              <div key={i} className="bg-[#e8f5ec] rounded-lg p-6 border border-[#1a6b3c]/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#1a6b3c]/30 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                </svg>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">{t.quote}</p>
                <div>
                  <p className="text-sm font-bold text-[#0f1f17]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#e8f5ec] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1f17]">Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left" aria-expanded={openFaq === i}>
                  <span className="text-sm font-bold text-[#0f1f17] pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#1a6b3c] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="pb-5 text-sm text-[#4b5563] font-light leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a6b3c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Dispose of Your IT Assets Responsibly?</h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-8 font-light">Join 124+ enterprises who trust E-Hasiru for compliant, documented, and transparent e-waste management.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pickup-request/" className="inline-flex items-center px-6 py-3 bg-white text-[#1a6b3c] text-sm font-semibold rounded hover:bg-[#e8f5ec] transition-colors">Request Pickup Now</Link>
            <Link href="/contact/" className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors">Talk to Us First</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="flex items-center">
                <Image src="/images/logo.svg" alt="E-Hasiru" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">CPCB-authorised e-waste recycling and IT asset disposal. Pan-India pickup. Secure data destruction.</p>
              <a href="https://wa.me/919845937366" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services/it-asset-disposal/" className="text-sm text-gray-400 hover:text-white transition-colors">IT Asset Disposal</Link></li>
                <li><Link href="/services/data-destruction/" className="text-sm text-gray-400 hover:text-white transition-colors">Data Destruction</Link></li>
                <li><Link href="/services/ewaste-recycling/" className="text-sm text-gray-400 hover:text-white transition-colors">E-Waste Recycling</Link></li>
                <li><Link href="/services/refurbishment/" className="text-sm text-gray-400 hover:text-white transition-colors">Refurbishment</Link></li>
                <li><Link href="/services/epr-compliance/" className="text-sm text-gray-400 hover:text-white transition-colors">EPR Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about/" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/sustainability/" className="text-sm text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
                <li><Link href="/certifications/" className="text-sm text-gray-400 hover:text-white transition-colors">Certifications</Link></li>
                <li><Link href="/blog/" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact/" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="tel:+919845937366" className="hover:text-white transition-colors">+91 98459 37366</a></li>
                <li><a href="mailto:info@ehasiru.com" className="hover:text-white transition-colors">info@ehasiru.com</a></li>
                <li className="leading-relaxed">No. 168/B, 7th Main Road, 3rd Phase,<br/>Peenya Industrial Area,<br/>Bengaluru 560058</li>
                <li><a href="https://www.linkedin.com/company/e-hasiru/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">Certifications &amp; Authorisations</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                {src: '/images/certifications/epr.png', alt: 'EPR Registration'},
                {src: '/images/certifications/cpcb.png', alt: 'CPCB Authorised'},
                {src: '/images/certifications/pollution-board-ka.png', alt: 'KSPCB Authorised'},
                {src: '/images/certifications/r2v3.png', alt: 'R2v3 Certified'},
                {src: '/images/certifications/iso-9001-2015.png', alt: 'ISO 9001:2015'},
                {src: '/images/certifications/iso-14001-2015.png', alt: 'ISO 14001:2015'},
                {src: '/images/certifications/iso-27001-2022.png', alt: 'ISO 27001:2022'},
                {src: '/images/certifications/iso-45001-2018.png', alt: 'ISO 45001:2018'}
              ].map((cert, i) => (
                <div key={i} className="bg-white border border-white/80 p-1.5 w-16 h-16 flex items-center justify-center rounded-none">
                  <Image src={cert.src} alt={cert.alt} width={52} height={52} className="object-contain w-full h-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© 2026 E-Hasiru Green IT Solutions. All rights reserved.</p>
          </div>
        </div>
        <a href="https://wa.me/919845937366" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-colors" aria-label="Chat on WhatsApp">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </footer>
    </main>
    </>
  )
}
