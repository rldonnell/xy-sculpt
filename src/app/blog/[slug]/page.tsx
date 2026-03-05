import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs, getFeaturedImage, getAuthorName, formatDate } from '@/lib/wordpress';

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
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 155),
  };
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
