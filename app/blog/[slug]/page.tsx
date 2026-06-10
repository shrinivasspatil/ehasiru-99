import { blogPosts } from '@/lib/data';
import Link from 'next/link';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = async (props: BlogDetailPageProps) => {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title || 'Article'} | E-Hasiru Blog`,
    description: post?.excerpt,
  };
};

export default async function BlogDetail(props: BlogDetailPageProps) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Article not found</div>;
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-primary hover:underline mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.content}
            </p>
            
            <div className="bg-card rounded-lg border border-border/40 p-8 my-8">
              <h3 className="font-bold text-lg mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Professional e-waste management ensures compliance with Indian regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Data security is paramount during IT asset disposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>CPCB authorized recyclers follow strict environmental standards</span>
                </li>
              </ul>
            </div>

            <h3 className="font-bold text-2xl mt-12 mb-4">Next Steps</h3>
            <p>
              If you&apos;re looking to properly manage your e-waste, E-Hasiru is here to help. Contact us today for a consultation or request a pickup.
            </p>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost) => (
              <Link
                key={relPost.id}
                href={`/blog/${relPost.slug}`}
                className="group p-6 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {relPost.category}
                  </span>
                </div>
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">{relPost.title}</h3>
                <p className="text-sm text-muted-foreground">{relPost.excerpt}</p>
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
            Request Pickup Now
          </Link>
        </div>
      </section>
    </div>
  );
}
