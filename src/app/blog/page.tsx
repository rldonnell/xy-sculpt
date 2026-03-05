import Link from 'next/link';
import { getPosts, getFeaturedImage, getAuthorName, formatDate, stripHtml } from '@/lib/wordpress';

export const metadata = {
  title: 'Male Cosmetic Surgery Blog | Tips, Guides & News',
  description: 'Expert articles on male cosmetic surgery: gynecomastia, liposuction, facial procedures, recovery tips, and the latest in men\'s aesthetic treatments.',
  alternates: { canonical: 'https://xsculptmd.com/blog' },
  openGraph: {
    title: 'Male Cosmetic Surgery Blog | XY Sculpt',
    description: 'Expert articles on male cosmetic procedures, recovery tips, and aesthetic treatments.',
    url: 'https://xsculptmd.com/blog',
  },
};

export default async function BlogPage() {
  const posts = await getPosts(20);

  return (
    <main>
      <section className="blog-hero">
        <h1>Blog</h1>
        <p>Latest articles and updates</p>
      </section>

      <section className="blog-grid">
        {posts.length > 0 ? (
          posts.map(post => {
            const image = getFeaturedImage(post);
            const author = getAuthorName(post);
            const date = formatDate(post.date);
            const excerpt = stripHtml(post.excerpt.rendered).substring(0, 180);

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
                    <Link href={`/blog/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </h2>
                  <p className="blog-card__meta">
                    By {author} | {date}
                  </p>
                  <p className="blog-card__excerpt">
                    {excerpt}...
                  </p>
                  <Link href={`/blog/${post.slug}`} className="blog-card__link">
                    Read More
                  </Link>
                </div>
              </article>
            );
          })
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
            <h2>Blog Coming Soon</h2>
            <p style={{ color: '#666', marginTop: '12px' }}>
              Connect your WordPress CMS to start publishing blog posts.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
