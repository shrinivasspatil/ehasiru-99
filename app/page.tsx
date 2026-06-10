'use client';

import Image from 'next/image';
import { ChevronDown, CheckCircle2, Package, Zap, RotateCcw, FileText, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="E-Hasiru" width={32} height={32} />
            <span className="font-bold">E-Hasiru</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-emerald-200">Services</a>
            <a href="#" className="hover:text-emerald-200">About</a>
            <a href="#" className="hover:text-emerald-200">Sustainability</a>
            <a href="#" className="hover:text-emerald-200">Certifications</a>
            <a href="#" className="hover:text-emerald-200">Contact</a>
          </nav>
          <button className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600">Request Pickup</button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/facility/front-gate.jpeg" alt="Facility" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block bg-emerald-800 text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✓ CPCB AUTHORISED RECYCLER
          </div>
          <h1 className="text-5xl font-bold mb-4">Responsible IT Asset Disposal & E-Waste Recycling Across India</h1>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl">Secure data destruction, pan-India pickup, R2v3 certified. Serving corporates across Bangalore, Hyderabad, Chennai, Pune, Mumbai, Delhi NCR.</p>
          <div className="flex gap-4">
            <button className="bg-emerald-500 text-white px-8 py-3 rounded font-semibold hover:bg-emerald-600">Request Pickup</button>
            <button className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-emerald-900">View Services</button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">Compliant. Secure. Documented. Every Disposal, Every Time.</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded">
              <div className="text-emerald-600 text-3xl mb-4">✓</div>
              <h3 className="font-bold mb-2">CPCB Authorised</h3>
              <p className="text-gray-600 text-sm">Central Pollution Control Board authorized facility following all e-waste management rules</p>
            </div>
            <div className="bg-white p-8 rounded">
              <div className="text-emerald-600 text-3xl mb-4">📍</div>
              <h3 className="font-bold mb-2">Pan-India Pickup</h3>
              <p className="text-gray-600 text-sm">Free pickup services across 245+ cities and towns. No minimum quantity requirement</p>
            </div>
            <div className="bg-white p-8 rounded">
              <div className="text-emerald-600 text-3xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Certified Data Destruction</h3>
              <p className="text-gray-600 text-sm">NIST-compliant data wiping with certificate of destruction for every device</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">What We Solve</h2>
          <p className="text-center text-emerald-200 mb-12">E-Hasiru solves IT & e-waste management challenges in enterprises facing rapid growth — from data breach...</p>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-emerald-800 p-6 rounded">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="font-bold mb-2">Risk of Data Leakage</h3>
              <p className="text-sm text-emerald-100">Drives operational risk through...</p>
            </div>
            <div className="bg-emerald-800 p-6 rounded">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold mb-2">Lack of Transparency</h3>
              <p className="text-sm text-emerald-100">Drives operational risk through...</p>
            </div>
            <div className="bg-emerald-800 p-6 rounded">
              <div className="text-3xl mb-4">⚠️</div>
              <h3 className="font-bold mb-2">Non-compliance with E-Waste Rules</h3>
              <p className="text-sm text-emerald-100">Drives operational risk through...</p>
            </div>
            <div className="bg-emerald-800 p-6 rounded">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-bold mb-2">No Audit Documentation</h3>
              <p className="text-sm text-emerald-100">Drives operational risk through...</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">What We Do</h2>
          <p className="text-center text-gray-600 mb-12">End-to-end IT asset management for enterprises</p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'IT Asset Disposal', desc: 'Complete lifecycle management of IT equipment from deployment to recycling' },
              { title: 'Secure Data Destruction', desc: 'NIST-compliant data destruction and secure wiping of all digital storage devices' },
              { title: 'E-Waste Recycling', desc: 'Environmentally responsible e-waste disposal following CPCB guidelines' },
              { title: 'Asset Refurbishment', desc: 'Professional refurbishment and resale of working IT equipment' },
              { title: 'EPR Compliance', desc: 'Extended Producer Responsibility compliance and management services' },
              { title: 'Sustainability Reporting', desc: 'Complete ESG reporting for IT asset lifecycle management' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded border border-gray-200">
                <div className="text-emerald-600 text-2xl mb-4">✓</div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm uppercase tracking-widest text-emerald-200 mb-12">OUR ENVIRONMENTAL FOOTPRINT & SCALE</p>
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">0+</div>
              <p className="text-emerald-200 text-sm mt-2">Cities & Towns Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold">0+</div>
              <p className="text-emerald-200 text-sm mt-2">Corporate Clients Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold">0+</div>
              <p className="text-emerald-200 text-sm mt-2">MT of E-Waste Recycled</p>
            </div>
            <div>
              <div className="text-5xl font-bold">0+</div>
              <p className="text-emerald-200 text-sm mt-2">MT of Assets Refurbished</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">From pickup to certification in a transparent, predictable process</p>
          <div className="grid grid-cols-4 gap-4">
            {['Collection', 'Sorting & Segregation', 'Data Destruction', 'Refurbishment', 'Recycling', 'Certification', 'Reporting', 'Data Destruction'].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
                <p className="font-semibold text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">What Clients Say</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { quote: "E-Hasiru made our asset lifecycle transparent and compliant. Excellent support throughout the process.", name: "Ramesh", company: "Ramesh" },
              { quote: "We were looking for a documented end-to-end asset recycling service. E-Hasiru delivered with complete transparency.", name: "Aditya Roy", company: "Aditya Roy (CFO)" },
              { quote: "Fair value recovery on used equipment. Their team handled everything professionally and on time.", name: "Srinivas", company: "Srinivas Roy (CTO)" }
            ].map((item, i) => (
              <div key={i} className="bg-emerald-50 p-6 rounded">
                <p className="text-gray-700 mb-4 text-sm">"{item.quote}"</p>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-gray-600 text-xs">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How is data securely destroyed?', a: 'We use NIST 800-88 compliant data wiping for functional storage devices and physical shredding for non-functional or high-security cases. Every destruction event is documented and a Certificate of Destruction is issued.' },
              { q: 'Do you provide Form 6 documentation?', a: 'Yes. Form 6 is issued for all e-waste processed under the E-Waste (Management) Rules, 2016. This is your compliance record for CPCB purposes.' },
              { q: 'Do you offer pan-India pickup?', a: 'Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR. Contact us for your city.' },
              { q: 'What types of IT assets do you accept?', a: 'Laptops, desktops, servers, workstations, networking equipment (routers, switches, hubs), printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics.' },
              { q: 'How long does certification take?', a: 'The Certificate of Destruction and Form 6 documentation are issued within 7 working days of asset processing.' },
              { q: 'Are you CPCB authorised?', a: 'Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified. All certifications are verifiable and available on our Certifications page.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-emerald-200">
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full py-4 text-left flex justify-between items-center hover:text-emerald-600">
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && <div className="pb-4 text-gray-600 text-sm">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dispose Your IT Assets Responsibly?</h2>
          <p className="mb-8">Join 124+ corporates trusting E-Hasiru with their IT lifecycle management.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded font-semibold hover:bg-gray-100">Request Pickup</button>
            <button className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-emerald-700">Talk to Our Team</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="#">About</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SERVICES</h3>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="#">E-Waste Recycling</a></li>
                <li><a href="#">Data Destruction</a></li>
                <li><a href="#">IT Asset Disposal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="#">Certifications</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">CONTACT</h3>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>info@ehasiru.com</li>
                <li>+91 80 4040 6666</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-800 pt-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-emerald-200">© 2024 E-Hasiru. All rights reserved.</p>
              <div className="flex gap-2">
                {Array(8).fill(0).map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-emerald-800 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
