import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPost, formatDate } from '@/lib/blog';
import { SITE, physicianSchema } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { '@id': `${SITE.url}/#physician` },
        publisher: { '@id': `${SITE.url}/#organization` },
        mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
      },
      physicianSchema,
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="hero-kicker" style={{ justifyContent: 'center' }}>{post.category}</div>
        <h1>{post.title}</h1>
        <p>{formatDate(post.date)}{post.readTime ? ` · ${post.readTime}` : ''}</p>
      </section>
      <article className="post">
        <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <section className="pt-review-wrap" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="pt-review">
            <div className="pt-review-badge">BM</div>
            <div>
              <div className="pt-review-title">Written and medically reviewed by {SITE.doctor.withCreds}</div>
              <p>Double board certified in General Surgery and Cosmetic Surgery. Fellow, American College of Surgeons.</p>
              <p className="pt-disclaimer">This article is for educational purposes only and is not medical advice. Individual results vary. All surgical procedures carry risks; a consultation is required before any procedure.</p>
              <div className="pt-related"><a href="/contact">Schedule a consultation with Dr. Moein &rarr;</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
