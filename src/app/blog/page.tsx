import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'The Male Aesthetics Journal | Blog',
  description: 'Abdominal etching, gynecomastia, male tummy tuck, and male body sculpting guides from board certified general surgeon Dr. Babak Moein.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main>
      <section className="page-hero">
        <h1>The Male Aesthetics <em>Journal</em></h1>
        <p>Procedure guides, costs, and recovery insights from Dr. Moein.</p>
      </section>
      <div className="blog-grid">
        {posts.map(post => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card__body">
              <div className="blog-card__meta">{post.category} · {formatDate(post.date)}{post.readTime ? ` · ${post.readTime}` : ''}</div>
              <h2 className="blog-card__title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p className="blog-card__excerpt">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="blog-card__link">Read More →</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
