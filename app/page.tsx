'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
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
      answer: "Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR."
    },
    {
      question: "What types of IT assets do you accept?",
      answer: "Laptops, desktops, servers, workstations, networking equipment, printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics."
    },
    {
      question: "How long does certification take?",
      answer: "The Certificate of Destruction and Form 6 documentation are issued within 7 working days of asset processing."
    },
    {
      question: "Are you CPCB authorised?",
      answer: "Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified."
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg" alt="E-Hasiru" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/sustainability" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Sustainability</Link>
              <Link href="/certifications" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Certifications</Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="hidden md:block">
              <Link href="/pickup-request" className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors">
                Request Pickup
              </Link>
            </div>
            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/facility/dismantling-area.jpeg"
              alt="E-Hasiru facility"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: "177.78vh", height: "56.25vw", minWidth: "100%", minHeight: "100%" }}
              src="https://www.youtube.com/embed/wdyrzhwGNgc?autoplay=1&mute=1&loop=1&playlist=wdyrzhwGNgc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
              allow="autoplay; encrypted-media"
              title="E-Hasiru facility"
              allowFullScreen={false}
            />
          </div>
          <div className="absolute inset-0 bg-[#0F1F17]/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full"></span>
                CPCB Authorised Recycler
              </div>
              <p className="text-sm font-black text-white/60 uppercase tracking-widest mb-4">Zero Risk. 100% Compliance. Maximum Value Recovery.</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight">
                Responsible IT Asset Disposal &amp; E-Waste Recycling Across India
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-light">
                Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/pickup-request" className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors">
                  Request Pickup
                </Link>
                <Link href="/services" className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose E-Hasiru */}
        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-3">Why Enterprises Choose E-Hasiru</p>
              <h2 className="text-2xl md:text-3xl font-black text-foreground max-w-2xl mx-auto leading-snug">Compliant. Secure. Documented. Every Disposal, Every Time.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-white border border-gray-100 rounded-xl p-7 flex flex-col justify-between min-h-[180px] shadow-sm">
                <div className="relative z-10">
                  <h3 className="font-black text-foreground text-lg mb-3">CPCB Authorised</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.</p>
                </div>
              </div>
              <div className="relative overflow-hidden bg-white border border-gray-100 rounded-xl p-7 flex flex-col justify-between min-h-[180px] shadow-sm">
                <div className="relative z-10">
                  <h3 className="font-black text-foreground text-lg mb-3">Pan-India Pickup</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">245+ cities and towns covered. We come to your premises — no drop-off required. Scheduled, documented, hassle-free.</p>
                </div>
              </div>
              <div className="relative overflow-hidden bg-white border border-gray-100 rounded-xl p-7 flex flex-col justify-between min-h-[180px] shadow-sm">
                <div className="relative z-10">
                  <h3 className="font-black text-foreground text-lg mb-3">Certified Data Destruction</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Solve */}
        <section className="bg-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-primary-light mb-3">The Problem</p>
              <h2 className="text-2xl md:text-3xl font-black text-white max-w-2xl leading-snug">What We Solve</h2>
              <p className="mt-3 text-gray-400 font-light max-w-xl">E-Hasiru Fix: A fully managed, compliant &amp; transparent lifecycle — from pickup to certification.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="relative overflow-hidden border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: 0 }}>
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center shrink-0" style={{ borderRadius: 0 }}>
                  <span className="text-primary-light font-bold">⚠</span>
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-2">Risk of Data Leakage</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.</p>
                </div>
              </div>
              <div className="relative overflow-hidden border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: 0 }}>
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center shrink-0" style={{ borderRadius: 0 }}>
                  <span className="text-primary-light font-bold">👁</span>
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-2">Lack of Transparency</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.</p>
                </div>
              </div>
              <div className="relative overflow-hidden border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: 0 }}>
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center shrink-0" style={{ borderRadius: 0 }}>
                  <span className="text-primary-light font-bold">✗</span>
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-2">Non-compliance with E-Waste Regulations</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.</p>
                </div>
              </div>
              <div className="relative overflow-hidden border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: 0 }}>
                <div className="w-10 h-10 bg-primary/20 flex items-center justify-center shrink-0" style={{ borderRadius: 0 }}>
                  <span className="text-primary-light font-bold">📋</span>
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-2">No Audit-ready Documentation</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">What We Do</h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto font-light">End-to-end IT asset and e-waste management for enterprises</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/it-asset-disposal" className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-section rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">💻</div>
                <h3 className="font-bold text-foreground mb-2">IT Asset Disposal</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.</p>
              </Link>
              <Link href="/services/data-destruction" className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-section rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">🔒</div>
                <h3 className="font-bold text-foreground mb-2">Secure Data Destruction</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">NIST-compliant data wiping and physical destruction with certificate of destruction issued.</p>
              </Link>
              <Link href="/services/ewaste-recycling" className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-section rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">♻️</div>
                <h3 className="font-bold text-foreground mb-2">E-Waste Recycling</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">CPCB-authorised recycling of all electronic waste categories with sustainability reporting.</p>
              </Link>
              <Link href="/services/refurbishment" className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-section rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">🔧</div>
                <h3 className="font-bold text-foreground mb-2">IT Asset Refurbishment</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">Extend asset lifecycle through certified refurbishment and responsible remarketing.</p>
              </Link>
              <Link href="/services/epr-compliance" className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-section rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">📄</div>
                <h3 className="font-bold text-foreground mb-2">EPR Compliance</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.</p>
              </Link>
              <Link href="/sustainability" className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-section rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">📊</div>
                <h3 className="font-bold text-foreground mb-2">Sustainability Reporting</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">Our Impact</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-white">245+</div>
                <div className="mt-2 text-sm text-gray-300">Cities &amp; Towns Covered</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-white">124+</div>
                <div className="mt-2 text-sm text-gray-300">Corporate Clients Served</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-white">12,000+</div>
                <div className="mt-2 text-sm text-gray-300">MT of E-Waste Recycled</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-white">1,250+</div>
                <div className="mt-2 text-sm text-gray-300">MT of Assets Refurbished</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">How It Works</h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">From pickup to certification in a transparent, documented process</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Collection', 'Sorting & Segregation', 'Data Destruction', 'Recycling', 'Refurbishment', 'Reporting'].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">Process step {i + 1} description</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">What Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-section rounded-lg p-6 border border-primary/10">
                <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">E-Hasiru handled our 400-laptop disposal end-to-end. Certificate of destruction delivered on time, zero data risk. Exactly what our security team needed.</p>
                <p className="text-sm font-bold text-foreground">Riyazat</p>
                <p className="text-xs text-gray-500">Voltvave Innovations, Bangalore</p>
              </div>
              <div className="bg-section rounded-lg p-6 border border-primary/10">
                <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">We needed Form 6 documentation for our annual audit. E-Hasiru processed everything within the week and the paperwork was spotless.</p>
                <p className="text-sm font-bold text-foreground">Nikhil (Procurement Head)</p>
                <p className="text-xs text-gray-500">Manufacturing Firm, Peenya Bangalore</p>
              </div>
              <div className="bg-section rounded-lg p-6 border border-primary/10">
                <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">Pan-India coverage made the difference. We had assets across three cities and they coordinated the entire pickup without us lifting a finger.</p>
                <p className="text-sm font-bold text-foreground">Srinivas Rao (CFO)</p>
                <p className="text-xs text-gray-500">Financial Services Firm, Hyderabad</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-section py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Frequently Asked Questions</h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-sm font-bold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown size={16} className={`text-primary shrink-0 transition-transform ${expandedFAQ === i ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFAQ === i && (
                    <div className="pb-4 text-sm text-gray-600 font-light">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Ready to Dispose Your IT Assets Responsibly?</h2>
            <p className="mt-4 text-base text-white/80 max-w-xl mx-auto leading-relaxed">Schedule a free assessment. Our team will evaluate your assets, provide a disposal plan, and handle everything from pickup to certification.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/pickup-request" className="inline-flex items-center px-6 py-3 bg-white text-primary text-sm font-semibold rounded hover:bg-section transition-colors">
                Request Pickup Now
              </Link>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors">
                Talk to Us First
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
