'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="E-Hasiru" width={40} height={40} />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/sustainability" className="text-gray-700 hover:text-gray-900">Sustainability</Link>
            <Link href="/certifications" className="text-gray-700 hover:text-gray-900">Certifications</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </nav>
          <Link href="/request-pickup" className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded text-sm font-semibold">
            Request Pickup
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-foreground text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/facility/dismantling-area.jpeg" alt="Facility" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Image src="/images/logo.svg" alt="CPCB" width={24} height={24} />
          <span className="text-sm font-semibold text-primary">CPCB AUTHORISED</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-3xl">
          Responsible IT Asset Disposal & E-Waste Recycling Across India
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Secure data destruction, pan-India pickup, R2v3 certified. Serving corporates across Bangalore, Hyderabad, Chennai, Pune, Mumbai, Delhi NCR.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/request-pickup" className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary/90 inline-block">
            Request Pickup
          </Link>
          <Link href="/services" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 inline-block">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 245, suffix: '+', label: 'Cities & Towns Covered' },
    { value: 124, suffix: '+', label: 'Corporate Clients Served' },
    { value: 12000, suffix: '+', label: 'MT of E-Waste Recycled' },
    { value: 1250, suffix: '+', label: 'MT of Assets Refurbished' }
  ];

  return (
    <section className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">Our Impact</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-white">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    "Contact Us",
    "Schedule Pickup",
    "Items Collected",
    "Data Destruction",
    "Processing",
    "Certification",
    "Recycling",
    "Reporting"
  ];

  return (
    <section className="bg-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3">
                {i + 1}
              </div>
              <p className="text-sm font-semibold text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Dispose Responsibly?</h2>
        <p className="text-lg mb-8">Join hundreds of companies managing e-waste sustainably with E-Hasiru</p>
        <Link href="/request-pickup" className="bg-foreground text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 inline-block">
          Request Pickup Now
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
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
      answer: "Yes. We operate pickup services across 245+ cities and towns in India, with primary coverage in Bangalore, Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR. Contact us for your city."
    },
    {
      question: "What types of IT assets do you accept?",
      answer: "Laptops, desktops, servers, workstations, networking equipment (routers, switches, hubs), printers, scanners, UPS systems, mobile devices, tablets, and all peripheral electronics."
    },
    {
      question: "How long does certification take?",
      answer: "The Certificate of Destruction and Form 6 documentation are issued within 7 working days of asset processing."
    },
    {
      question: "Are you CPCB authorised?",
      answer: "Yes. E-Hasiru holds CPCB Authorisation under the E-Waste (Management) Rules, 2016. We are also ISO certified and R2v3 certified. All certifications are verifiable and available on our Certifications page."
    }
  ];

  return (
    <section className="bg-section py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">Frequently Asked Questions</h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-bold text-foreground pr-4">{question}</span>
        <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-sm text-gray-600 leading-relaxed font-light">{answer}</div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services">E-Waste Recycling</Link></li>
              <li><Link href="/services">Data Destruction</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/certifications">Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@ehasiru.com</li>
              <li>+91 80 4040 6666</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 E-Hasiru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
