import Link from 'next/link';
import { faqs } from '@/lib/data';
import { FAQAccordion } from '@/components/faq-accordion';

export const metadata = {
  title: 'Pickup Request | E-Hasiru',
  description: 'Request e-waste pickup from E-Hasiru. We handle secure collection and recycling of your electronic equipment.',
};

export default function PickupRequest() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request Pickup</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Schedule secure collection of your e-waste. Our team will handle everything from pickup to disposal.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-8">
            {/* Personal Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Pickup Location</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Address *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Postal Code *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* E-Waste Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6">E-Waste Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Type of Equipment *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="">Select equipment type</option>
                    <option value="computers">Computers & Laptops</option>
                    <option value="servers">Servers</option>
                    <option value="printers">Printers & Copiers</option>
                    <option value="monitors">Monitors</option>
                    <option value="phones">Phones & Tablets</option>
                    <option value="mixed">Mixed Electronics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Quantity *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Estimated Weight (kg)</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Services</label>
                  <div className="space-y-3">
                    {['Data Destruction', 'Refurbishment', 'Recycling', 'E-Waste Disposal', 'IT Asset Management'].map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-foreground">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Any special requirements or additional information..."
                    className="w-full px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submission */}
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" required className="w-4 h-4" />
                <span className="text-sm text-muted-foreground">
                  I agree to E-Hasiru&apos;s terms and conditions
                </span>
              </label>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                Submit Pickup Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pickup FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
