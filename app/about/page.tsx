import Link from 'next/link';
import { faqs } from '@/lib/data';
import { FAQAccordion } from '@/components/faq-accordion';

export const metadata = {
  title: 'About E-Hasiru | E-Waste Recycling & IT Asset Disposal',
  description: 'Learn about E-Hasiru mission, values, and commitment to sustainable e-waste management in India.',
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About E-Hasiru</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Transforming India's approach to e-waste management through innovation, responsibility, and expertise.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To provide comprehensive, secure, and environmentally responsible e-waste management solutions that help businesses comply with Indian regulations while recovering value from their IT assets.
              </p>
              <ul className="space-y-3">
                {['Secure data destruction', 'Environmental protection', 'Regulatory compliance', 'Value recovery'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Sustainability, integrity, and innovation guide every decision we make. We believe businesses should profit from responsible recycling while protecting the environment and data security.
              </p>
              <ul className="space-y-3">
                {['Transparency', 'Excellence', 'Innovation', 'Responsibility'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Clients Served' },
              { number: '50,000+', label: 'Tons Recycled' },
              { number: '100%', label: 'Data Security' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg border border-border/40">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Companies Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CPCB Authorized',
                description: 'We are CPCB authorized and maintain the highest standards of e-waste management.'
              },
              {
                title: 'Secure Operations',
                description: 'Our facilities meet international standards for secure data handling and environmental protection.'
              },
              {
                title: 'Expert Team',
                description: 'Our experienced professionals ensure every project meets compliance requirements.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses managing their e-waste responsibly with E-Hasiru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Get in Touch
            </Link>
            <Link
              href="/pickup-request"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-semibold"
            >
              Request Pickup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
