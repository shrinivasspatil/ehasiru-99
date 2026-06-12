'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ShieldCheck, Truck, FileCheck, ShieldAlert, Eye, FileX, ClipboardX, Monitor, Settings, FileText, RefreshCw, Quote, ChevronRight, ChartNoAxesColumn } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How is data securely destroyed?',
      a: 'We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued.'
    },
    {
      q: 'Do you provide Form 6 documentation?',
      a: 'Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes.'
    },
    {
      q: 'Do you offer pan-India pickup?',
      a: 'Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR.'
    },
    {
      q: 'What types of IT assets do you accept?',
      a: 'Laptops, desktops, servers, workstations, networking equipment, printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics.'
    },
    {
      q: 'How long does certification take?',
      a: 'Most certifications are issued within 7 working days of processing completion. Complex audits may take longer depending on quantity and documentation requirements.'
    },
    {
      q: 'Are you CPCB authorised?',
      a: 'Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified.'
    }
  ];

  return (
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
            style={{ width: '177.78vh', height: '56.25vw', minWidth: '100%', minHeight: '100%' }}
            src="https://www.youtube.com/embed/wdyrzhwGNgc?autoplay=1&mute=1&loop=1&playlist=wdyrzhwGNgc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            title="E-Hasiru facility"
          />
        </div>
        <div className="absolute inset-0 bg-[#0F1F17]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full" />
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
              <Link href="/pickup-request" className="inline-flex items-center px-6 py-3 bg-[#10b981] text-white text-sm font-bold rounded-lg hover:bg-[#059669] transition-colors">
                Request Pickup
              </Link>
              <Link href="/services" className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliant Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-[#10b981] mb-3">Why Enterprises Choose E-Hasiru</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0f1f17] max-w-2xl mx-auto leading-snug">
              Compliant. Secure. Documented. Every Disposal, Every Time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'CPCB Authorised',
                desc: 'Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.',
                icon: ShieldCheck
              },
              {
                title: 'Pan-India Pickup',
                desc: '245+ cities and towns covered. We come to your premises — no drop-off required. Scheduled, documented, hassle-free.',
                icon: Truck
              },
              {
                title: 'Certified Data Destruction',
                desc: 'NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.',
                icon: FileCheck
              }
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden bg-white border border-gray-100 rounded-xl p-7 flex flex-col justify-between min-h-[180px] shadow-sm">
                <div className="relative z-10">
                  <h3 className="font-black text-[#0f1f17] text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 right-0 z-0 translate-x-6 translate-y-6">
                  <item.icon className="w-28 h-28 text-[#10b981] opacity-20" strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="bg-[#0f1f17] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-[#6ee7b7] mb-3">The Problem</p>
            <h2 className="text-2xl md:text-3xl font-black text-white max-w-2xl leading-snug">What We Solve</h2>
            <p className="mt-3 text-gray-400 font-light max-w-xl">
              E-Hasiru Fix: A fully managed, compliant &amp; transparent lifecycle — from pickup to certification.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Risk of Data Leakage', desc: 'Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.', icon: ShieldAlert },
              { title: 'Lack of Transparency', desc: 'Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.', icon: Eye },
              { title: 'Non-compliance with E-Waste Regulations', desc: 'The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.', icon: FileX },
              { title: 'No Audit-ready Documentation', desc: 'Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.', icon: ClipboardX }
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: 0 }}>
                <div className="w-10 h-10 bg-[#10b981]/20 flex items-center justify-center shrink-0" style={{ borderRadius: 0 }}>
                  <item.icon className="w-5 h-5 text-[#6ee7b7]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1f17]">What We Do</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto font-light">End-to-end IT asset and e-waste management for enterprises</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'IT Asset Disposal', desc: 'Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.', icon: Monitor, href: '/services/it-asset-disposal' },
              { title: 'Secure Data Destruction', desc: 'NIST-compliant data wiping and physical destruction with certificate of destruction issued.', icon: ShieldCheck, href: '/services/data-destruction' },
              { title: 'E-Waste Recycling', desc: 'CPCB-authorised recycling of all electronic waste categories with sustainability reporting.', icon: RefreshCw, href: '/services/ewaste-recycling' },
              { title: 'IT Asset Refurbishment', desc: 'Extend asset lifecycle through certified refurbishment and responsible remarketing.', icon: Settings, href: '/services/refurbishment' },
              { title: 'EPR Compliance', desc: 'Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.', icon: FileText, href: '/services/epr-compliance' },
              { title: 'Sustainability Reporting', desc: 'CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.', icon: ChartNoAxesColumn, href: '/sustainability' }
            ].map((service, i) => (
              <Link key={i} href={service.href} className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-[#10b981]/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#10b981]/10 transition-colors">
                  <service.icon className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-[#0f1f17] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{service.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#10b981]">
                  Learn more
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-[#0f1f17] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">Our Impact</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { num: '245+', label: 'Cities & Towns Covered' },
              { num: '124+', label: 'Corporate Clients Served' },
              { num: '12,000+', label: 'MT of E-Waste Recycled' },
              { num: '1,250+', label: 'MT of Assets Refurbished' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-white">{stat.num}</div>
                <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0f1f17]">How It Works</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">From pickup to certification in a transparent, documented process</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Collection', desc: 'Schedule a pickup or drop off at our facility. We cover 245+ cities across India.' },
              { num: '02', title: 'Sorting & Segregation', desc: 'Assets are categorised by type, condition, and disposal pathway.' },
              { num: '03', title: 'Data Destruction', desc: 'All storage media is wiped or physically destroyed to NIST standards. Certificate issued.' },
              { num: '04', title: 'Recycling', desc: 'Non-reusable components are processed under CPCB-authorised recycling protocols.' },
              { num: '05', title: 'Refurbishment', desc: 'Viable assets are tested, repaired, and prepared for responsible remarketing.' },
              { num: '06', title: 'Reporting', desc: 'You receive Form 6, certificate of destruction, and CO2 savings report.' }
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#10b981]">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1f17]">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Say */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1f17]">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'E-Hasiru handled our 400-laptop disposal end-to-end. Certificate of destruction delivered on time, zero data risk. Exactly what our security team needed.', name: 'Riyazat', company: 'Voltvave Innovations, Bangalore' },
              { quote: 'We needed Form 6 documentation for our annual audit. E-Hasiru processed everything within the week and the paperwork was spotless.', name: 'Nikhil (Procurement Head)', company: 'Manufacturing Firm, Peenya Bangalore' },
              { quote: 'Pan-India coverage made the difference. We had assets across three cities and they coordinated the entire pickup without us lifting a finger.', name: 'Srinivas Rao (CFO)', company: 'Financial Services Firm, Hyderabad' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 border border-[#10b981]/10">
                <Quote className="w-6 h-6 text-[#10b981]/30 mb-4" />
                <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">{testimonial.quote}</p>
                <div>
                  <p className="text-sm font-bold text-[#0f1f17]">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1f17]">Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={expandedFaq === i}
                >
                  <span className="text-sm font-bold text-[#0f1f17] pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#10b981] shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="pb-5 text-sm text-gray-700 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#10b981] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Ready to Dispose Your IT Assets Responsibly?</h2>
          <p className="mt-4 text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Schedule a free assessment. Our team will evaluate your assets, provide a disposal plan, and handle everything from pickup to certification.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/pickup-request" className="inline-flex items-center px-6 py-3 bg-white text-[#10b981] text-sm font-semibold rounded hover:bg-gray-100 transition-colors">
              Request Pickup Now
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors">
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
