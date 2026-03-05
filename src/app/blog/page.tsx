import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, getFeaturedImage, getAuthorName, formatDate, stripHtml } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog | XYSculptMD – Male Plastic Surgery',
  description: 'Expert insights on male plastic surgery, recovery tips, procedure guides, and the latest in aesthetic technology from Dr. Babak Moein.',
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <section className="page-hero">
        <h1>The <em>Blog</em></h1>
        <p>Expert insights, recovery guides, and the latest in male aesthetics.</p>
      </section>

      <div className="blog-grid">
        {posts.length > 0 ? (
          posts.map((post) => {
            const image = getFeaturedImage(post);
            const author = getAuthorName(post);
            const date = formatDate(post.date);
            const excerpt = stripHtml(post.excerpt.rendered);

            return (
              <article key={post.id} className="blog-card">
                {image && (
                  <img
                    src={image}
                    alt={post.title.rendered}
                    className="blog-card__image"
                    loading="lazy"
                  />
                )}
                <div className="blog-card__body">
                  <h2 className="blog-card__title">
                    <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
                  </h2>
                  <div className="blog-card__meta">{date} · {author}</div>
                  <p className="blog-card__excerpt">{excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-card__link">
                    Read More →
                  </Link>
                </div>
              </article>
            );
          })
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Blog posts coming soon. Check back for expert insights from Dr. Moein.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
