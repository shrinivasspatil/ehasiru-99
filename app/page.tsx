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
            <Image src="/images/logo.svg" alt="E-Hasiru" width={120} height={40} className="h-10 w-auto" priority />
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link href="/services" className="text-gray-700 hover:text-emerald-600">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600">About</Link>
            <Link href="/sustainability" className="text-gray-700 hover:text-emerald-600">Sustainability</Link>
            <Link href="/certifications" className="text-gray-700 hover:text-emerald-600">Certifications</Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600">Contact</Link>
          </nav>
          <Link href="/request-pickup" className="bg-emerald-600 text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-emerald-700">
            Request Pickup
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/wdyrzhwGNgc?autoplay=1&mute=1&loop=1&playlist=wdyrzhwGNgc&controls=0&rel=0"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            allow="autoplay"
            allowFullScreen
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15, 31, 23, 0.7)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
          <div className="mb-6">
            <div className="border border-emerald-400 text-emerald-400 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide">
              <span>●</span>
              <span>CPCB AUTHORISED RECYCLER</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm font-bold mb-4 tracking-widest">ZERO RISK. 100% COMPLIANCE. MAXIMUM VALUE RECOVERY.</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl text-white">Responsible IT Asset Disposal & E-Waste Recycling Across India</h1>
          <p className="text-gray-300 mb-8 max-w-2xl text-base leading-relaxed font-light">Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/request-pickup" className="bg-emerald-600 text-white px-8 py-3 rounded font-bold hover:bg-emerald-700 transition-colors">
              Request Pickup
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-gray-900 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black text-gray-600 tracking-widest mb-3 text-center">WHY ENTERPRISES CHOOSE E-HASIRU</p>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-16 leading-tight">Compliant. Secure. Documented. Every Disposal, Every Time.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CPCB Authorised',
                desc: 'Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.'
              },
              {
                title: 'Pan-India Pickup',
                desc: '245+ cities and towns covered. We come to your premises — no drop-off required. Scheduled, documented, hassle-free.'
              },
              {
                title: 'Certified Data Destruction',
                desc: 'NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 rounded hover:shadow-lg transition-all hover:border-emerald-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 text-emerald-600 font-black text-xl">
                  ✓
                </div>
                <h3 className="font-black text-lg text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section style={{ backgroundColor: '#0f1f17' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">The Problem</p>
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">What We Solve</h2>
          <p className="text-gray-400 max-w-2xl mb-12 text-base font-light">E-Hasiru Fix: A fully managed, compliant & transparent lifecycle — from pickup to certification.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Risk of Data Leakage',
                desc: 'Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.'
              },
              {
                title: 'Lack of Transparency',
                desc: 'Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.'
              },
              {
                title: 'Non-compliance with E-Waste Regulations',
                desc: 'The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.'
              },
              {
                title: 'No Audit-ready Documentation',
                desc: 'Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.'
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 p-8 flex flex-col" style={{ borderRadius: '0px' }}>
                <div className="w-12 h-12 rounded mb-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }} />
                <h3 className="font-black text-white text-base mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-4">What We Do</h2>
          <p className="text-center text-gray-600 mb-16 text-base font-light">End-to-end IT asset and e-waste management for enterprises</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IT Asset Disposal',
                desc: 'Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.',
                link: '/services/it-asset-disposal'
              },
              {
                title: 'Secure Data Destruction',
                desc: 'NIST-compliant data wiping and physical destruction with certificate of destruction issued.',
                link: '/services/data-destruction'
              },
              {
                title: 'E-Waste Recycling',
                desc: 'CPCB-authorised recycling of all electronic waste categories with sustainability reporting.',
                link: '/services/ewaste'
              },
              {
                title: 'IT Asset Refurbishment',
                desc: 'Extend asset lifecycle through certified refurbishment and responsible remarketing.',
                link: '/services/refurbishment'
              },
              {
                title: 'EPR Compliance',
                desc: 'Extended Producer Responsibility documentation, Form 6 issuance, and CPCB compliance support.',
                link: '/services/epr'
              },
              {
                title: 'Sustainability Reporting',
                desc: 'CO2 savings calculation, environmental impact reports, and ESG documentation for your organisation.',
                link: '/sustainability'
              }
            ].map((service, i) => (
              <Link key={i} href={service.link} className="group bg-white border border-gray-200 p-8 rounded hover:shadow-md hover:border-emerald-200 transition-all">
                <h3 className="font-black text-lg text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: '#0f1f17' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black text-gray-400 tracking-widest mb-12 text-center uppercase">OUR IMPACT</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '245+', label: 'Cities & Towns Covered' },
              { num: '124+', label: 'Corporate Clients Served' },
              { num: '12,000+', label: 'MT of E-Waste Recycled' },
              { num: '1,250+', label: 'MT of Assets Refurbished' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-black text-white mb-3">{stat.num}</div>
                <p className="text-xs md:text-sm font-bold text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#ecfdf5' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-16 text-base font-light">From pickup to certification in a transparent, documented process</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Collection', desc: 'Schedule a pickup or drop off at our facility. We cover 245+ cities across India.' },
              { num: '02', title: 'Sorting & Segregation', desc: 'Assets are categorised by type, condition, and disposal pathway.' },
              { num: '03', title: 'Data Destruction', desc: 'All storage media is wiped or physically destroyed to NIST standards. Certificate issued.' },
              { num: '04', title: 'Recycling', desc: 'Non-reusable components are processed under CPCB-authorised recycling protocols.' },
              { num: '05', title: 'Refurbishment', desc: 'Viable assets are tested, repaired, and prepared for responsible remarketing.' },
              { num: '06', title: 'Reporting', desc: 'You receive Form 6, certificate of destruction, and CO2 savings report.' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-black text-2xl">{step.num}</div>
                <h3 className="font-black text-lg text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: '#ecfdf5' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-16">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'E-Hasiru handled our 400-laptop disposal end-to-end. Certificate of destruction delivered on time, zero data risk. Exactly what our security team needed.',
                name: 'Rahul Sharma',
                company: 'Tech Startup'
              },
              {
                quote: 'Their compliance documentation is impeccable. Form 6 every time, no exceptions. This is how IT asset disposal should work.',
                name: 'Priya Desai',
                company: 'Finance Corp'
              },
              {
                quote: 'Pan-India pickup saved us weeks of coordination. Professional team, transparent process, certified results. Highly recommended.',
                name: 'Vikram Singh',
                company: 'Manufacturing Group'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white border border-emerald-200 p-8 rounded-lg">
                <p className="text-gray-700 mb-6 font-light leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: '#ecfdf5' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What makes E-Hasiru different from other e-waste recyclers?',
                a: 'We combine CPCB authorisation, R2v3 certification, transparent documentation, and pan-India logistics. Every consignment comes with Form 6 and Certificate of Destruction within 7 working days.'
              },
              {
                q: 'How do you ensure my data is destroyed securely?',
                a: 'We use NIST 800-88 compliant methods: encrypted data wiping for reusable devices and physical shredding for non-reusable media. Each device receives an individual Certificate of Destruction.'
              },
              {
                q: 'Can you handle large-scale disposals?',
                a: 'Yes. We handle everything from 10 devices to 10,000+ units. Our facilities process 12,000+ MT annually. We coordinate logistics and documentation for enterprises of any size.'
              },
              {
                q: 'What documentation do I receive?',
                a: 'Form 6 (proof of authorised disposal), Certificate of Destruction, asset inventory, CO2 savings report, and a complete chain-of-custody log. All ESG and compliance audit-ready.'
              },
              {
                q: 'Do you service all of India?',
                a: 'We cover 245+ cities and towns with our own logistics network. If your location is not listed, contact us—we often arrange special pickups for enterprise clients.'
              },
              {
                q: 'What happens to my old IT assets after disposal?',
                a: 'Reusable devices are refurbished and resold responsibly. Non-reusable materials are segregated and recycled as per e-waste regulations. We report environmental impact and CO2 savings to you.'
              }
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-emerald-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-left">{faq.q}</h3>
                  <div className="text-emerald-600 font-bold text-xl flex-shrink-0 ml-4">
                    {openFAQ === i ? '−' : '+'}
                  </div>
                </button>
                {openFAQ === i && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed font-light">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#10b981' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Dispose Your IT Assets Responsibly?</h2>
          <p className="text-white text-lg mb-10 font-light">Get a free quote. No hidden costs. Transparent pricing. Certified disposal.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/request-pickup" className="bg-white text-emerald-600 px-10 py-4 rounded font-bold hover:bg-gray-100 transition-colors">
              Request Pickup
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded font-bold hover:bg-white hover:text-emerald-600 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937' }} className="text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Image src="/images/logo.svg" alt="E-Hasiru" width={120} height={40} className="h-10 w-auto mb-4" priority />
              <p className="text-sm leading-relaxed font-light">CPCB-authorised e-waste recycling and IT asset disposal. Pan-India pickup. Secure data destruction. Certified results.</p>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 text-sm">SERVICES</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/services/it-asset-disposal" className="hover:text-emerald-400 transition">IT Asset Disposal</Link></li>
                <li><Link href="/services/data-destruction" className="hover:text-emerald-400 transition">Data Destruction</Link></li>
                <li><Link href="/services/ewaste" className="hover:text-emerald-400 transition">E-Waste Recycling</Link></li>
                <li><Link href="/services/refurbishment" className="hover:text-emerald-400 transition">Refurbishment</Link></li>
                <li><Link href="/services/epr" className="hover:text-emerald-400 transition">EPR Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 text-sm">COMPANY</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link href="/about" className="hover:text-emerald-400 transition">About</Link></li>
                <li><Link href="/sustainability" className="hover:text-emerald-400 transition">Sustainability</Link></li>
                <li><Link href="/certifications" className="hover:text-emerald-400 transition">Certifications</Link></li>
                <li><Link href="/blog" className="hover:text-emerald-400 transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 text-sm">CONTACT</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="tel:+919845937366" className="hover:text-emerald-400 transition">+91 98459 37366</a></li>
                <li><a href="mailto:info@ehasiru.com" className="hover:text-emerald-400 transition">info@ehasiru.com</a></li>
                <li>No. 168/B, 7th Main<br/>3rd Phase, Peenya<br/>Bengaluru 560058</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-12">
            <p className="text-xs font-black text-gray-500 tracking-widest mb-8 text-center uppercase">Certifications & Authorisations</p>
            <div className="flex justify-center gap-6 flex-wrap mb-8">
              {[
                '/images/certifications/epr.png',
                '/images/certifications/cpcb.png',
                '/images/certifications/kspcb.png',
                '/images/certifications/r2v3.png',
                '/images/certifications/iso-9001.png',
                '/images/certifications/iso-14001.png',
                '/images/certifications/iso-27001.png',
                '/images/certifications/iso-45001.png'
              ].map((cert, i) => (
                <div key={i} className="h-16 flex items-center">
                  <Image src={cert} alt="cert" width={80} height={64} className="h-14 w-auto object-contain" onError={(e) => {e.currentTarget.style.display = 'none'}} priority />
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-gray-500 font-light">© 2024 E-Hasiru Green IT Solutions Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
