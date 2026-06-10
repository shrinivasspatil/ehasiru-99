import Link from 'next/link';
import { Recycle, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Services | E-Hasiru',
  description: 'E-Hasiru services including e-waste recycling, data destruction, IT asset disposal, refurbishment, and EPR compliance.',
};

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive e-waste management and IT asset disposal solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group p-8 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <Recycle className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.slice(0, 3).map((detail, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Request',
                description: 'Submit your e-waste pickup request online or call us'
              },
              {
                step: '2',
                title: 'Collect',
                description: 'Our team schedules and conducts secure collection'
              },
              {
                step: '3',
                title: 'Process',
                description: 'We safely process and recycle your equipment'
              },
              {
                step: '4',
                title: 'Report',
                description: 'Receive compliance certificates and documentation'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-background rounded-lg border border-border/40 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <Link
            href="/pickup-request"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Request Pickup Now
          </Link>
        </div>
      </section>
    </div>
  );
}
