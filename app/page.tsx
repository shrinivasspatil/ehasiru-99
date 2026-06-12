'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How is data securely destroyed?",
      a: "We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued."
    },
    {
      q: "Do you provide Form 6 documentation?",
      a: "Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes."
    },
    {
      q: "Do you offer pan-India pickup?",
      a: "Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR. Contact us for your city."
    },
    {
      q: "What types of IT assets do you accept?",
      a: "Laptops, desktops, servers, workstations, networking equipment (routers, switches, hubs), printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics."
    },
    {
      q: "How long does certification take?",
      a: "The Certificate of Destruction and Form 6 documentation are issued within 7 working days of asset processing."
    },
    {
      q: "Are you CPCB authorised?",
      a: "Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified. All certifications are verifiable and available on our Certifications page."
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Banner/Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="E-Hasiru" width={40} height={40} className="w-8 h-8" />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/services" className="text-sm hover:text-emerald-600">Services</Link>
            <Link href="/about" className="text-sm hover:text-emerald-600">About</Link>
            <Link href="/sustainability" className="text-sm hover:text-emerald-600">Sustainability</Link>
            <Link href="/certifications" className="text-sm hover:text-emerald-600">Certifications</Link>
            <Link href="/contact" className="text-sm hover:text-emerald-600">Contact</Link>
          </nav>
          <Link href="/pickup" className="bg-emerald-600 text-white px-4 py-2 rounded text-sm hover:bg-emerald-700">
            Request Pickup
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <iframe
              src="https://www.youtube.com/embed/Y4b9VjJB9sU?autoplay=1&mute=1&loop=1&playlist=Y4b9VjJB9sU"
              title="E-Hasiru facility"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allowFullScreen
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-emerald-400 text-emerald-400 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6">
              ● CPCB AUTHORISED RECYCLER
            </div>
            <p className="text-gray-300 text-sm font-semibold mb-4 tracking-wide">ZERO RISK. 100% COMPLIANCE. MAXIMUM VALUE RECOVERY.</p>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl">Responsible IT Asset Disposal & E-Waste Recycling Across India</h1>
            <p className="text-gray-300 mb-8 max-w-2xl text-base leading-relaxed">Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.</p>
            <div className="flex gap-4">
              <Link href="/pickup" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 font-semibold">Request Pickup</Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 font-semibold transition-all">View Services</Link>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold text-gray-500 mb-2 tracking-widest">WHY ENTERPRISES CHOOSE E-HASIRU</p>
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">Compliant. Secure. Documented. Every Disposal, Every Time.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-emerald-600 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-black mb-3">CPCB Authorised</h3>
                <p className="text-gray-600 leading-relaxed">Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.</p>
              </div>
              <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-emerald-600 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-black mb-3">Pan-India Pickup</h3>
                <p className="text-gray-600 leading-relaxed">245+ cities and towns covered. We come to your premises — no drop-off required. Scheduled, documented, hassle-free.</p>
              </div>
              <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-emerald-600 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-black mb-3">Certified Data Destruction</h3>
                <p className="text-gray-600 leading-relaxed">NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Solve Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold text-gray-400 mb-2">THE PROBLEM</p>
            <h2 className="text-4xl font-bold text-center mb-4">What We Solve</h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">E-Hasiru Fix: A fully managed, compliant & transparent lifecycle — from pickup to certification.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3">Risk of Data Leakage</h3>
                <p className="text-gray-300">Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3">Lack of Transparency</h3>
                <p className="text-gray-300">Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3">Non-compliance with E-Waste Regulations</h3>
                <p className="text-gray-300">The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-3">No Audit-ready Documentation</h3>
                <p className="text-gray-300">Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">What We Do</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">End-to-end IT asset and e-waste management for enterprises</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "IT Asset Disposal", desc: "Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.", icon: "✓" },
                { title: "Secure Data Destruction", desc: "NIST-compliant data wiping and physical destruction with certificate of destruction issued.", icon: "✓" },
                { title: "E-Waste Recycling", desc: "CPCB-authorised recycling of all electronic waste categories with sustainability reporting.", icon: "✓" },
                { title: "IT Asset Refurbishment", desc: "Extend asset lifecycle through certified refurbishment and responsible remarketing.", icon: "✓" },
                { title: "EPR Compliance", desc: "Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.", icon: "✓" },
                { title: "Sustainability Reporting", desc: "CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.", icon: "✓" }
              ].map((service, i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all group">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-black text-center text-sm leading-6">✓</span>
                    </div>
                    <div>
                      <h3 className="text-base font-black mb-2 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-black mb-12 tracking-widest opacity-90">OUR IMPACT</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "245+", label: "Cities & Towns Covered" },
                { num: "124+", label: "Corporate Clients Served" },
                { num: "12,000+", label: "MT of E-Waste Recycled" },
                { num: "1,250+", label: "MT of Assets Refurbished" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl font-black">{stat.num}</div>
                  <p className="text-sm mt-3 font-semibold opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-4">How It Works</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">From pickup to certification in a transparent, documented process</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {[
                { num: "01", title: "Collection", desc: "Schedule a pickup or drop off at our facility. We cover 245+ cities across India." },
                { num: "02", title: "Sorting & Segregation", desc: "Assets are categorised by type, condition, and disposal pathway." },
                { num: "03", title: "Data Destruction", desc: "All storage media is wiped or physically destroyed to NIST standards. Certificate issued." },
                { num: "04", title: "Recycling", desc: "Non-reusable components are processed under CPCB-authorised recycling protocols." },
                { num: "05", title: "Refurbishment", desc: "Viable assets are tested, repaired, and prepared for responsible remarketing." },
                { num: "06", title: "Reporting", desc: "You receive Form 6, certificate of destruction, and CO2 savings report." }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 font-black text-lg">{step.num}</div>
                  <h3 className="font-black mb-3 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "E-Hasiru handled our 400-laptop disposal end-to-end. Certificate of destruction delivered on time, zero data risk. Exactly what our security team needed.", name: "Riyazat", company: "Voltvave Innovations, Bangalore" },
                { quote: "We needed Form 6 documentation for our annual audit. E-Hasiru processed everything within the week and the paperwork was spotless.", name: "Nikhil (Procurement Head)", company: "Manufacturing Firm, Peenya Bangalore" },
                { quote: "Pan-India coverage made the difference. We had assets across three cities and they coordinated the entire pickup without us lifting a finger.", name: "Srinivas Rao (CFO)", company: "Financial Services Firm, Hyderabad" }
              ].map((testimonial, i) => (
                <div key={i} className="bg-emerald-50 p-8 rounded-lg border border-emerald-200">
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left bg-white p-4 rounded border border-gray-200 hover:border-emerald-600"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{faq.q}</h3>
                    <span>{expandedFaq === i ? '−' : '+'}</span>
                  </div>
                  {expandedFaq === i && (
                    <p className="mt-4 text-gray-600 text-sm">{faq.a}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-600 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Dispose Your IT Assets Responsibly?</h2>
            <p className="mb-8 text-emerald-100">Schedule a free assessment. Our team will evaluate your assets, provide a disposal plan, and handle everything from pickup to certification.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/pickup" className="bg-white text-emerald-600 px-6 py-3 rounded font-bold hover:bg-gray-100">Request Pickup Now</Link>
              <Link href="/contact" className="border border-white text-white px-6 py-3 rounded font-bold hover:bg-emerald-700">Talk to Us First</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/images/logo.svg" alt="E-Hasiru" width={40} height={40} className="w-8 h-8 mb-4" />
              <p className="text-sm text-gray-400">CPCB-authorised e-waste recycling and IT asset disposal. Pan-India pickup. Secure data destruction.</p>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 text-sm">SERVICES</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services/it-asset-disposal" className="hover:text-emerald-400 transition">IT Asset Disposal</Link></li>
                <li><Link href="/services/data-destruction" className="hover:text-emerald-400 transition">Data Destruction</Link></li>
                <li><Link href="/services/ewaste" className="hover:text-emerald-400 transition">E-Waste Recycling</Link></li>
                <li><Link href="/services/refurbishment" className="hover:text-emerald-400 transition">Refurbishment</Link></li>
                <li><Link href="/services/epr" className="hover:text-emerald-400 transition">EPR Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 text-sm">COMPANY</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-emerald-400 transition">About</Link></li>
                <li><Link href="/sustainability" className="hover:text-emerald-400 transition">Sustainability</Link></li>
                <li><Link href="/certifications" className="hover:text-emerald-400 transition">Certifications</Link></li>
                <li><Link href="/blog" className="hover:text-emerald-400 transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black mb-6 text-sm">CONTACT</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:+919845937366" className="hover:text-emerald-400 transition">+91 98459 37366</a></li>
                <li><a href="mailto:info@ehasiru.com" className="hover:text-emerald-400 transition">info@ehasiru.com</a></li>
                <li className="text-gray-400">No. 168/B, 7th Main Road, 3rd Phase, Peenya Industrial Area, Bengaluru 560058</li>
                <li><a href="#" className="hover:text-emerald-400 transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-xs text-center text-gray-500 font-semibold mb-6 tracking-wider">CERTIFICATIONS & AUTHORISATIONS</p>
            <div className="flex justify-center gap-6 flex-wrap mb-8">
              {[
                { src: '/images/certifications/epr.png', alt: 'EPR' },
                { src: '/images/certifications/cpcb.png', alt: 'CPCB' },
                { src: '/images/certifications/kspcb.png', alt: 'KSPCB' },
                { src: '/images/certifications/r2v3.png', alt: 'R2v3' },
                { src: '/images/certifications/iso-9001.png', alt: 'ISO 9001' },
                { src: '/images/certifications/iso-14001.png', alt: 'ISO 14001' },
                { src: '/images/certifications/iso-27001.png', alt: 'ISO 27001' },
                { src: '/images/certifications/iso-45001.png', alt: 'ISO 45001' }
              ].map((cert, i) => (
                <div key={i} className="h-16 w-auto flex items-center">
                  <Image 
                    src={cert.src} 
                    alt={cert.alt} 
                    width={80} 
                    height={64} 
                    className="h-14 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-gray-500">© 2026 E-Hasiru Green IT Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
