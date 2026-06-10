import { services } from '@/lib/data';
import Link from 'next/link';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const generateMetadata = async (props: ServiceDetailPageProps) => {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);
  return {
    title: `${service?.title || 'Service'} | E-Hasiru`,
    description: service?.description,
  };
};

export default async function ServiceDetail(props: ServiceDetailPageProps) {
  const params = await props.params;
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="text-primary hover:underline mb-4 inline-block"
          >
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-4 mb-12">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/40">
                  <span className="text-primary text-xl font-bold mt-0.5">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                'Compliance with all regulations',
                'Data security and privacy protection',
                'Environmental responsibility',
                'Cost-effective solutions',
                'Certified professionals',
                'Transparent reporting'
              ].map((benefit, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border/40">
                  <p className="font-semibold text-primary mb-2">✓ {benefit}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              E-Hasiru combines decades of experience in e-waste management with cutting-edge technology and an unwavering commitment to environmental sustainability. We&apos;re CPCB authorized and follow all Indian e-waste regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relService) => (
              <Link
                key={relService.id}
                href={`/services/${relService.slug}`}
                className="group p-6 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{relService.title}</h3>
                <p className="text-muted-foreground text-sm">{relService.description}</p>
              </Link>
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
            Request {service.title} Now
          </Link>
        </div>
      </section>
    </div>
  );
}
