import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, getFeaturedImage, getAuthorName, formatDate, stripHtml } from '@/lib/wordpress';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 155);
  const image = getFeaturedImage(post);
  return {
    title: post.title.rendered,
    description,
    alternates: { canonical: `https://xsculptmd.com/blog/${post.slug}` },
    openGraph: {
      title: post.title.rendered,
      description,
      url: `https://xsculptmd.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

function BlogPostSchema({ post, author, featuredImage }: { post: any; author: string; featuredImage: string | null }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: post.title.rendered,
    description: stripHtml(post.excerpt.rendered).substring(0, 155),
    datePublished: post.date,
    dateModified: post.modified,
    url: `https://xsculptmd.com/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'XY Sculpt',
      url: 'https://xsculptmd.com',
    },
    ...(featuredImage ? { image: featuredImage } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://xsculptmd.com/blog/${post.slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImage(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);

  return (
    <main>
      <BlogPostSchema post={post} author={author} featuredImage={featuredImage} />
      <article className="post">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p className="post__meta">
          By {author} | {date}
        </p>

        {featuredImage && (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="post__featured-image"
          />
        )}

        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
          <Link href="/blog" style={{ color: 'var(--site-link)', fontWeight: 600 }}>
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
