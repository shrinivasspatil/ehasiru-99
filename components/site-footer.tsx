import Image from 'next/image'
import Link from 'next/link'

const certifications = [
  { src: '/images/certifications/epr.png', alt: 'EPR Registration' },
  { src: '/images/certifications/cpcb.png', alt: 'CPCB Authorised' },
  { src: '/images/certifications/pollution-board-ka.png', alt: 'KSPCB Authorised' },
  { src: '/images/certifications/r2v3.png', alt: 'R2v3 Certified' },
  { src: '/images/certifications/iso-9001-2015.png', alt: 'ISO 9001:2015' },
  { src: '/images/certifications/iso-14001-2015.png', alt: 'ISO 14001:2015' },
  { src: '/images/certifications/iso-27001-2022.png', alt: 'ISO 27001:2022' },
  { src: '/images/certifications/iso-45001-2018.png', alt: 'ISO 45001:2018' },
]

const whatsappIcon = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
)

export function SiteFooter() {
  return (
    <footer className="bg-[#0f1f17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg" alt="E-Hasiru" width={120} height={40} className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">CPCB-authorised e-waste recycling and IT asset disposal. Pan-India pickup. Secure data destruction.</p>
            <a href="https://wa.me/919845937366" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline">
              {whatsappIcon}
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
            {certifications.map((cert, i) => (
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
        {whatsappIcon}
      </a>
    </footer>
  )
}
