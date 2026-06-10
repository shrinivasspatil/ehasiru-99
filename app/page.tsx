'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="E-Hasiru" width={40} height={40} className="w-10 h-10" />
            <span className="hidden sm:inline font-bold text-gray-900 text-lg">E-Hasiru</span>
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/services" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium">About</Link>
            <Link href="/sustainability" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Sustainability</Link>
            <Link href="/certifications" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Certifications</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Contact</Link>
          </nav>

          <Link href="/pickup-request" className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold text-sm">
            Request Pickup
          </Link>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <Link href="/services" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">Services</Link>
              <Link href="/about" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">About</Link>
              <Link href="/sustainability" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">Sustainability</Link>
              <Link href="/certifications" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">Certifications</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-gray-900 text-sm font-medium">Contact</Link>
              <Link href="/pickup-request" className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold text-sm w-fit">Request Pickup</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/facility/front-gate.jpeg" 
            alt="Facility" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="inline-block mb-6 px-4 py-2 bg-gray-800/50 border border-green-500 rounded-full text-xs font-semibold text-green-400">
                CPCB AUTHORISED RECYCLER
              </div>

              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                ZERO RISK. 100% COMPLIANCE. MAXIMUM VALUE RECOVERY.
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Responsible IT Asset Disposal & E-Waste Recycling Across India
              </h1>

              <p className="text-lg text-gray-300 mb-8">
                Bengaluru-based, R2v3-certified e-waste recycling company established in 2014. End-to-end ITAD, secure data destruction, and compliant recycling across India. Certificates issued within 7 working days.
              </p>

              <div className="flex gap-4">
                <Link href="/pickup-request" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
                  Request Pickup
                </Link>
                <Link href="/services" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white/10">
                  View Services
                </Link>
              </div>
            </div>

            <div className="flex-1 hidden lg:block">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="E-Hasiru facility"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">WHY ENTERPRISES CHOOSE E-HASIRU</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Compliant. Secure. Documented. Every Disposal, Every Time.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-gray-900">CPCB Authorised</h3>
              <p className="text-gray-600 text-sm">Legally compliant disposal under the E-Waste (Management) Rules, 2016. Every consignment backed by Form 6 documentation.</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Pan-India Pickup</h3>
              <p className="text-gray-600 text-sm">245+ cities and towns covered. We come to your premises — no drop-off required. Scheduled, documented, hassle-free.</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Certified Data Destruction</h3>
              <p className="text-gray-600 text-sm">NIST 800-88 compliant wiping and physical shredding. Certificate of Destruction issued per device, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">THE PROBLEM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">What We Solve</h2>
          <p className="text-center text-gray-400 mb-12">E-Hasiru Fix: A fully managed, compliant & transparent lifecycle — from pickup to certification.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Risk of Data Leakage</h3>
              <p className="text-gray-300 text-sm">Old devices retain sensitive data. Without certified destruction, your organisation is exposed to data breach liability.</p>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Lack of Transparency</h3>
              <p className="text-gray-300 text-sm">Most disposal channels offer no chain-of-custody documentation. You have no proof of where your assets went.</p>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Non-compliance with E-Waste Regulations</h3>
              <p className="text-gray-300 text-sm">The E-Waste (Management) Rules, 2016 mandate authorised disposal. Informal channels leave you non-compliant.</p>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-lg font-bold mb-3">No Audit-ready Documentation</h3>
              <p className="text-gray-300 text-sm">Without Form 6 and a Certificate of Destruction, your ESG reports and compliance audits have nothing to show.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">What We Do</h2>
          <p className="text-center text-gray-600 mb-12">End-to-end IT asset and e-waste management for enterprises</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/it-asset-disposal" className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-green-600">
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600">IT Asset Disposal</h3>
              <p className="text-gray-600 text-sm mb-3">Compliant disposal of laptops, desktops, servers, and networking equipment with full documentation.</p>
              <span className="text-green-600 font-semibold text-sm">Learn more →</span>
            </Link>

            <Link href="/services/data-destruction" className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-green-600">
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600">Secure Data Destruction</h3>
              <p className="text-gray-600 text-sm mb-3">NIST-compliant data wiping and physical destruction with certificate of destruction issued.</p>
              <span className="text-green-600 font-semibold text-sm">Learn more →</span>
            </Link>

            <Link href="/services/ewaste-recycling" className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-green-600">
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600">Recycling</h3>
              <p className="text-gray-600 text-sm mb-3">A certificate of destruction, your ESG reports and compliance audits have something to show.</p>
              <span className="text-green-600 font-semibold text-sm">Learn more →</span>
            </Link>

            <Link href="/services/refurbishment" className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-green-600">
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600">Asset Refurbishment</h3>
              <p className="text-gray-600 text-sm mb-3">Test, restore, and redistribute your assets. Maximize value recovery from functional equipment.</p>
              <span className="text-green-600 font-semibold text-sm">Learn more →</span>
            </Link>

            <Link href="/services/epr-compliance" className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-green-600">
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600">EPR Compliance</h3>
              <p className="text-gray-600 text-sm mb-3">Manage Extended Producer Responsibility targets and reporting requirements with documented support.</p>
              <span className="text-green-600 font-semibold text-sm">Learn more →</span>
            </Link>

            <Link href="/services/sustainability" className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-green-600">
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-green-600">Sustainability Reporting</h3>
              <p className="text-gray-600 text-sm mb-3">Generate ESG impact reports. Track material recovery, carbon footprint reduction, and certification metrics.</p>
              <span className="text-green-600 font-semibold text-sm">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">245+</div>
              <p className="text-gray-400 text-sm">Cities & Towns Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">124+</div>
              <p className="text-gray-400 text-sm">Corporate Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12,000+</div>
              <p className="text-gray-400 text-sm">MT of E-Waste Recycled</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1,250+</div>
              <p className="text-gray-400 text-sm">MT of Assets Refurbished</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it Works</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Collection
                </h3>
                <p className="text-gray-600 ml-11">Schedule a pickup or drop-off at our facility. We come to your premises — no hassle required.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Sorting & Segregation
                </h3>
                <p className="text-gray-600 ml-11">Assets are sorted by type. Functional items are isolated for refurbishment and resale programs.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Data Destruction
                </h3>
                <p className="text-gray-600 ml-11">NIST 800-88 certified wiping and physical shredding. Chain-of-custody documented throughout.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Reporting
                </h3>
                <p className="text-gray-600 ml-11">Form 6, Certificate of Destruction, and material recovery reports are issued within 7 working days.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Recycling
                </h3>
                <p className="text-gray-600 ml-11">Non-recoverable materials are shredded and segregated for final processing or smelting.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  Material Recovery
                </h3>
                <p className="text-gray-600 ml-11">Valuable materials like copper, gold, and rare earth elements are recovered and recycled responsibly.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                  Compliance & ESG
                </h3>
                <p className="text-gray-600 ml-11">All recycling is logged and certified. Detailed reports support your ESG commitments and audits.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
                  End-of-Life
                </h3>
                <p className="text-gray-600 ml-11">Process complete. Your e-waste is responsibly recycled, your data is destroyed, and compliance is assured.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-gray-700 mb-4 italic">"{`E-Hasiru made our IT asset disposal process compliant and transparent. The documentation is impeccable.`}"</p>
              <p className="font-bold text-gray-900">Rohan</p>
              <p className="text-sm text-gray-600">IT Director, FinTech Corp</p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-gray-700 mb-4 italic">"{`We were looking for an e-waste partner that understood compliance and could scale across India. E-Hasiru delivered both.`}"</p>
              <p className="font-bold text-gray-900">Nikhil Bhosale</p>
              <p className="text-sm text-gray-600">Chief Sustainability Officer, Fortune 500 Tech</p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-gray-700 mb-4 italic">"{`Form 6 compliance was always a pain point. E-Hasiru made it effortless. Five stars.`}"</p>
              <p className="font-bold text-gray-900">Brinda Rao</p>
              <p className="text-sm text-gray-600">ESG Lead, Insurance Firm</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "How is data securely destroyed?",
                a: "We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional devices. Every destruction event is documented with timestamps and a Certificate of Destruction is issued per device."
              },
              {
                q: "Do you provide Form 6 documentation?",
                a: "Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This serves as your compliance record for CPCB purposes."
              },
              {
                q: "What types of IT assets do you accept?",
                a: "Laptops, desktops, servers, workstations, networking equipment (routers, switches, hubs), printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics."
              },
              {
                q: "How long does certification take?",
                a: "The Certificate of Destruction and Form 6 documentation are issued within 7 working days of asset processing. Expedited processing is available for large consignments."
              },
              {
                q: "Do you offer pan-India pickup?",
                a: "Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR."
              },
              {
                q: "Are you CPCB authorised?",
                a: "Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO 14001, ISO 9001, and R2v3 certified."
              }
            ].map((faq, i) => (
              <details key={i} className="group p-4 bg-white border border-gray-200 rounded-lg cursor-pointer">
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dispose Your IT Assets Responsibly?</h2>
          <p className="text-lg mb-8 opacity-90">Get in touch today for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pickup-request" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded font-semibold">
              Request Pickup
            </Link>
            <Link href="/contact" className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded font-semibold">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/sustainability">Sustainability</Link></li>
                <li><Link href="/certifications">Certifications</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SERVICES</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services/it-asset-disposal">IT Asset Disposal</Link></li>
                <li><Link href="/services/data-destruction">Data Destruction</Link></li>
                <li><Link href="/services/ewaste-recycling">E-Waste Recycling</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">CONTACT</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@ehasiru.com</li>
                <li>Phone: +91 80 4040 6666</li>
                <li>WhatsApp: +91 96866 77988</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 mb-4">
              <p>&copy; 2024 E-Hasiru. All rights reserved.</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
              <Link href="/" className="w-6 h-6 bg-gray-800 rounded hover:bg-gray-700"></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
