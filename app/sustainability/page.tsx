import Link from 'next/link';

export const metadata = {
  title: 'Sustainability | E-Hasiru',
  description: 'E-Hasiru commitment to sustainability and environmental responsibility in e-waste recycling.',
};

export default function Sustainability() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainability & Environment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our commitment to protecting the environment while creating value from e-waste recycling.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Our Environmental Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50,000+', label: 'Tons E-Waste Recycled', impact: 'Prevents toxic pollutants' },
              { value: '2,500+', label: 'Tons Materials Recovered', impact: 'Valuable resources saved' },
              { value: '100+', label: 'CO₂ Tons Avoided', impact: 'Through reuse & recycling' },
              { value: '500+', label: 'Clients Served', impact: 'Sustainable practices' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border/40 text-center hover:border-primary/40 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold mb-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Our Sustainability Initiatives</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Zero Landfill Approach',
                description: 'We ensure that 100% of collected e-waste is either refurbished, recycled, or safely disposed of according to environmental regulations. Nothing goes to landfills.',
                icon: '♻️'
              },
              {
                title: 'Material Recovery',
                description: 'We recover valuable materials including precious metals, rare earths, copper, and aluminum from recycled electronics, reducing the need for mining and new production.',
                icon: '⛏️'
              },
              {
                title: 'Energy Efficiency',
                description: 'Our facilities use renewable energy sources and implement energy-efficient processes to minimize our carbon footprint in e-waste processing.',
                icon: '⚡'
              },
              {
                title: 'Water Conservation',
                description: 'We implement water recycling systems and minimize water usage in our processing operations to protect this precious resource.',
                icon: '💧'
              },
              {
                title: 'Community Programs',
                description: 'We conduct awareness campaigns and educational programs in communities about responsible e-waste management and environmental protection.',
                icon: '🤝'
              },
              {
                title: 'Biodiversity Protection',
                description: 'By preventing toxic e-waste from polluting soil and water, we protect local ecosystems and biodiversity from harmful substances.',
                icon: '🌿'
              }
            ].map((initiative, index) => (
              <div key={index} className="p-6 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{initiative.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Recovery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Materials We Recover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { material: 'Copper', value: 'High value', use: 'Electrical wiring, electronics' },
              { material: 'Aluminum', value: 'Medium value', use: 'Building materials, packaging' },
              { material: 'Gold', value: 'Precious', use: 'Jewelry, electronics, investment' },
              { material: 'Silver', value: 'Precious', use: 'Electronics, solar panels' },
              { material: 'Rare Earths', value: 'Strategic', use: 'Magnets, catalysts' },
              { material: 'Plastics', value: 'Reusable', use: 'Manufacturing, building' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border/40">
                <h3 className="text-lg font-bold text-primary mb-2">{item.material}</h3>
                <p className="text-sm text-muted-foreground mb-1"><strong>Value:</strong> {item.value}</p>
                <p className="text-sm text-muted-foreground"><strong>Uses:</strong> {item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Sustainable Recycling</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every piece of e-waste you send us makes a difference. Together, we can protect the environment while creating economic value.
          </p>
          <Link
            href="/pickup-request"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Start Your Sustainability Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
