import Link from 'next/link';
import Image from 'next/image';
import { certifications } from '@/lib/data';

export const metadata = {
  title: 'Certifications | E-Hasiru',
  description: 'E-Hasiru certifications and authorizations including CPCB, ISO 14001, ISO 9001, and E-Stewards.',
};

export default function Certifications() {
  const certImages = [
    { name: 'CPCB', src: '/images/certifications/cpcb.png' },
    { name: 'EPR', src: '/images/certifications/epr.png' },
    { name: 'ISO 14001', src: '/images/certifications/iso-14001-2015.png' },
    { name: 'ISO 9001', src: '/images/certifications/iso-9001-2015.png' },
    { name: 'ISO 27001', src: '/images/certifications/iso-27001-2022.png' },
    { name: 'ISO 45001', src: '/images/certifications/iso-45001-2018.png' },
    { name: 'R2 v3', src: '/images/certifications/r2v3.png' },
    { name: 'Pollution Board KA', src: '/images/certifications/pollution-board-ka.png' }
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Authorizations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            E-Hasiru maintains the highest standards of compliance and quality through multiple certifications and authorizations.
          </p>
        </div>
      </section>

      {/* Certifications Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certImages.map((cert) => (
              <div
                key={cert.name}
                className="p-6 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg flex flex-col items-center justify-center min-h-32"
              >
                <Image
                  src={cert.src}
                  alt={cert.name}
                  width={120}
                  height={120}
                  className="w-full h-24 object-contain mb-3"
                />
                <p className="text-sm font-semibold text-center text-muted-foreground">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Regulatory Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-background rounded-lg border border-border/40">
              <h3 className="text-2xl font-bold mb-6">Indian Regulations</h3>
              <ul className="space-y-4">
                {[
                  'E-Waste Management Rules, 2016',
                  'Hazardous Wastes (Management and Handling) Rules',
                  'CPCB Guidelines for e-waste management',
                  'Ministry of Environment Directives',
                  'State Pollution Control Board regulations',
                  'Data Protection Act compliance'
                ].map((reg) => (
                  <li key={reg} className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span className="text-muted-foreground">{reg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border/40">
              <h3 className="text-2xl font-bold mb-6">International Standards</h3>
              <ul className="space-y-4">
                {[
                  'NIST Data Destruction Standards',
                  'Basel Convention Compliance',
                  'IEEE Standards for e-waste',
                  'IEC Standards for electronics',
                  'RoHS Directive Compliance',
                  'WEEE Directive Guidelines'
                ].map((std) => (
                  <li key={std} className="flex items-start gap-3">
                    <span className="text-secondary text-xl font-bold">✓</span>
                    <span className="text-muted-foreground">{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Certifications Matter</h2>
          <div className="space-y-8">
            <div className="p-6 bg-card rounded-lg border border-border/40">
              <h3 className="text-xl font-bold mb-3">Legal Compliance</h3>
              <p className="text-muted-foreground">
                Our authorizations ensure that all your e-waste is handled according to Indian law and international standards, protecting your business from regulatory penalties.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border/40">
              <h3 className="text-xl font-bold mb-3">Data Security</h3>
              <p className="text-muted-foreground">
                We use certified data destruction methods that permanently and verifiably eliminate all information from your devices, protecting your confidential business data.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border/40">
              <h3 className="text-xl font-bold mb-3">Environmental Protection</h3>
              <p className="text-muted-foreground">
                Our ISO 14001 certification and CPCB authorization ensure that e-waste is processed responsibly, protecting the environment and human health.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border/40">
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                ISO 9001 certification guarantees consistent quality in our services, from pickup to final documentation, meeting your highest expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trust E-Hasiru for Certified Excellence</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
