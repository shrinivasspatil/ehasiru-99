'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, ShieldCheck, Truck, FileCheck, Quote, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is data securely destroyed?',
      a: 'We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued.',
    },
    {
      q: 'Do you provide Form 6 documentation?',
      a: 'Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes.',
    },
    {
      q: 'Do you offer pan-India pickup?',
      a: 'Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR.',
    },
    {
      q: 'What types of IT assets do you accept?',
      a: 'Laptops, desktops, servers, workstations, networking equipment, printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics.',
    },
    {
      q: 'How long does certification take?',
      a: 'Certificates are typically issued within 7 working days of asset reception. For expedited requests, contact our team.',
    },
    {
      q: 'Are you CPCB authorised?',
      a: 'Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified.',
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link className="flex items-center" href="/">
              <Image
                alt="E-Hasiru"
                src="/images/logo.svg"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/services/">
                Services
              </Link>
              <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/about/">
                About
              </Link>
              <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/sustainability/">
                Sustainability
              </Link>
              <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/certifications/">
                Certifications
              </Link>
              <Link className="text-sm font-medium text-foreground hover:text-primary transition-colors" href="/contact/">
                Contact
              </Link>
            </nav>
            <div className="hidden md:block">
              <Link className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors" href="/pickup-request/">
                Request Pickup
              </Link>
            </div>
            <button className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              alt="E-Hasiru facility"
              src="/images/facility/dismantling-area.jpeg"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '177.78vh',
                height: '56.25vw',
                minWidth: '100%',
                minHeight: '100%',
              }}
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
              <p className="text-sm font-black text-white/60 uppercase tracking-widest mb-4">
                Zero Risk. 100% Compliance. Maximum Value Recovery.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight">
                Responsible IT Asset Disposal & E-Waste Recycling Across India
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-light">
                Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors" href="/pickup-request/">
                  Request Pickup
                </Link>
                <Link className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors" href="/services/">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Compliant Section */}
        <section className="bg-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-3">Why Enterprises Choose E-Hasiru</p>
              <h2 className="text-2xl md:text-3xl font-black text-foreground max-w-2xl mx-auto leading-snug">
                Compliant. Secure. Documented. Every Disposal, Every Time.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'CPCB Authorised',
                  desc: 'Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Pan-India Pickup',
                  desc: '245+ cities and towns covered. We come to your premises — no drop-off required. Scheduled, documented, hassle-free.',
                  icon: Truck,
                },
                {
                  title: 'Certified Data Destruction',
                  desc: 'NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.',
                  icon: FileCheck,
                },
              ].map((item, i) => (
                <div key={i} className="relative overflow-hidden bg-white border border-gray-100 rounded-xl p-7 flex flex-col justify-between min-h-[180px] shadow-sm">
                  <div className="relative z-10">
                    <h3 className="font-black text-foreground text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 z-0 translate-x-6 translate-y-6">
                    <item.icon className="w-28 h-28 text-primary opacity-20" strokeWidth={1} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Solve */}
        <section style={{ backgroundColor: '#0f1f17' }} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-black uppercase tracking-widest text-primary-light mb-3">The Problem</p>
              <h2 className="text-2xl md:text-3xl font-black text-white max-w-2xl leading-snug">What We Solve</h2>
              <p className="mt-3 text-gray-400 font-light max-w-xl">
                E-Hasiru Fix: A fully managed, compliant & transparent lifecycle — from pickup to certification.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Risk of Data Leakage', desc: 'Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.' },
                { title: 'Lack of Transparency', desc: 'Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.' },
                { title: 'Non-compliance with E-Waste Regulations', desc: 'The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.' },
                { title: 'No Audit-ready Documentation', desc: 'Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.' },
              ].map((item, i) => (
                <div key={i} className="relative overflow-hidden border border-white/10 p-6 flex flex-col gap-4" style={{ borderRadius: 0 }}>
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center shrink-0" style={{ borderRadius: 0 }} />
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
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">What We Do</h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto font-light">End-to-end IT asset and e-waste management for enterprises</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'IT Asset Disposal', href: '/services/it-asset-disposal' },
                { title: 'Secure Data Destruction', href: '/services/data-destruction' },
                { title: 'E-Waste Recycling', href: '/services/ewaste-recycling' },
                { title: 'IT Asset Refurbishment', href: '/services/refurbishment' },
                { title: 'EPR Compliance', href: '/services/epr-compliance' },
                { title: 'Sustainability Reporting', href: '/sustainability' },
              ].map((item, i) => (
                <Link key={i} className="group bg-white border border-gray-100 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all" href={item.href}>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors" />
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">Service description goes here</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    Learn more
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* OUR IMPACT */}
        <section style={{ backgroundColor: '#0f1f17' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">Our Impact</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { num: '245', label: 'Cities & Towns Covered' },
                { num: '124', label: 'Corporate Clients Served' },
                { num: '12,000', label: 'MT of E-Waste Recycled' },
                { num: '1,250', label: 'MT of Assets Refurbished' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-4xl md:text-5xl text-white">{stat.num}+</div>
                  <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ backgroundColor: '#f3f4f6' }} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">How It Works</h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">From pickup to certification in a transparent, documented process</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { num: '01', title: 'Collection', desc: 'Schedule a pickup or drop off at our facility. We cover 245+ cities across India.' },
                { num: '02', title: 'Sorting & Segregation', desc: 'Assets are categorised by type, condition, and disposal pathway.' },
                { num: '03', title: 'Data Destruction', desc: 'All storage media is wiped or physically destroyed to NIST standards. Certificate issued.' },
                { num: '04', title: 'Recycling', desc: 'Non-reusable components are processed under CPCB-authorised recycling protocols.' },
                { num: '05', title: 'Refurbishment', desc: 'Viable assets are tested, repaired, and prepared for responsible remarketing.' },
                { num: '06', title: 'Reporting', desc: 'You receive Form 6, certificate of destruction, and CO2 savings report.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Clients Say */}
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">What Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'E-Hasiru handled our 400-laptop disposal end-to-end. Certificate of destruction delivered on time, zero data risk. Exactly what our security team needed.',
                  author: 'Riyazat',
                  company: 'Voltvave Innovations, Bangalore',
                },
                {
                  quote: 'We needed Form 6 documentation for our annual audit. E-Hasiru processed everything within the week and the paperwork was spotless.',
                  author: 'Nikhil (Procurement Head)',
                  company: 'Manufacturing Firm, Peenya Bangalore',
                },
                {
                  quote: 'Pan-India coverage made the difference. We had assets across three cities and they coordinated the entire pickup without us lifting a finger.',
                  author: 'Srinivas Rao (CFO)',
                  company: 'Financial Services Firm, Hyderabad',
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6 border border-primary/10">
                  <Quote className="w-6 h-6 text-primary/30 mb-4" />
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 font-light">{testimonial.quote}</p>
                  <div>
                    <p className="text-sm font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#f3f4f6' }} className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Frequently Asked Questions</h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left"
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  >
                    <span className="text-sm font-bold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFAQ === i && (
                    <div className="pb-5 text-sm text-gray-600 leading-relaxed font-light">{faq.a}</div>
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
            <p className="mt-4 text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Schedule a free assessment. Our team will evaluate your assets, provide a disposal plan, and handle everything from pickup to certification.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link className="inline-flex items-center px-6 py-3 bg-white text-primary text-sm font-semibold rounded hover:bg-gray-100 transition-colors" href="/pickup-request/">
                Request Pickup Now
              </Link>
              <Link className="inline-flex items-center px-6 py-3 border border-white/50 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors" href="/contact/">
                Talk to Us First
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Link className="flex items-center" href="/">
                <Image alt="E-Hasiru" src="/images/logo.svg" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">CPCB-authorised e-waste recycling and IT asset disposal. Pan-India pickup. Secure data destruction.</p>
              <Link href="https://wa.me/919845937366" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline">
                <span>WhatsApp Us</span>
              </Link>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h3>
              <ul className="space-y-3">
                {['IT Asset Disposal', 'Data Destruction', 'E-Waste Recycling', 'Refurbishment', 'EPR Compliance'].map((service, i) => (
                  <li key={i}>
                    <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
              <ul className="space-y-3">
                {['About', 'Sustainability', 'Certifications', 'Blog', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="tel:+919845937366" className="hover:text-white transition-colors">
                    +91 98459 37366
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@ehasiru.com" className="hover:text-white transition-colors">
                    info@ehasiru.com
                  </Link>
                </li>
                <li className="leading-relaxed">No. 168/B, 7th Main Road,3rd Phase, Peenya Industrial Area, Bengaluru 560058</li>
                <li>
                  <Link href="https://www.linkedin.com/company/e-hasiru/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">Certifications & Authorisations</p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {['epr.png', 'cpcb.png', 'pollution-board-ka.png', 'r2v3.png', 'iso-9001-2015.png', 'iso-14001-2015.png', 'iso-27001-2022.png', 'iso-45001-2018.png'].map((img, i) => (
                <div key={i} className="bg-white border border-white/80 p-1.5 w-16 h-16 flex items-center justify-center" style={{ borderRadius: 0 }}>
                  <Image src={`/images/certifications/${img}`} alt="cert" width={52} height={52} className="object-contain w-full h-full" />
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500 text-center">© 2026 E-Hasiru Green IT Solutions. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <Link href="https://wa.me/919845937366" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-colors" aria-label="Chat on WhatsApp">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </>
  );
}
