import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export const metadata = {
  title: 'Blog | E-Hasiru',
  description: 'Read the latest articles about e-waste recycling, data destruction, compliance, and sustainable IT asset management.',
};

export default function Blog() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay informed about e-waste management, compliance regulations, and best practices for IT asset disposal.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 bg-card rounded-lg border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <span className="text-primary font-semibold group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest e-waste management insights and industry updates.
          </p>
          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border/40 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
