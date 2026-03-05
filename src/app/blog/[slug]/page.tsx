import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, getFeaturedImage, getAuthorName, formatDate } from '@/lib/wordpress';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found | XYSculptMD' };
  return {
    title: `${post.title.rendered} | XYSculptMD Blog`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);

  return (
    <main>
      <section className="page-hero">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p>{date} · {author}</p>
      </section>

      <article className="post">
        {image && (
          <img
            src={image}
            alt={post.title.rendered}
            className="post__featured-image"
          />
        )}
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}
