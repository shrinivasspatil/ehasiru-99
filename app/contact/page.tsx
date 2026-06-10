import Link from 'next/link';

export const metadata = {
  title: 'Contact E-Hasiru | E-Waste Recycling & IT Asset Disposal',
  description: 'Get in touch with E-Hasiru for e-waste recycling, data destruction, and IT asset disposal services.',
};

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions? We&apos;re here to help. Reach out to our team anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+919876543210" className="text-primary hover:underline text-lg">
                    +91 9876 543 210
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:info@ehasiru.com" className="text-primary hover:underline text-lg">
                    info@ehasiru.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    E-Hasiru Recycling Facility<br />
                    Industrial Area, Bangalore<br />
                    Karnataka, India 560100
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/pickup-request"
              className="p-6 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-all text-center"
            >
              <h3 className="font-bold text-lg mb-2 hover:text-primary">Request Pickup</h3>
              <p className="text-muted-foreground text-sm">Schedule e-waste collection</p>
            </Link>
            <Link
              href="/services"
              className="p-6 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-all text-center"
            >
              <h3 className="font-bold text-lg mb-2 hover:text-primary">Our Services</h3>
              <p className="text-muted-foreground text-sm">Explore our solutions</p>
            </Link>
            <Link
              href="/blog"
              className="p-6 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-all text-center"
            >
              <h3 className="font-bold text-lg mb-2 hover:text-primary">Latest Articles</h3>
              <p className="text-muted-foreground text-sm">Read our blog</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
