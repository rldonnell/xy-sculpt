import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/procedures', '/procedures/abdominal-etching', '/procedures/gynecomastia', '/procedures/male-tummy-tuck', '/procedures/male-butt-lift', '/procedures/male-facial-rejuvenation', '/about', '/gallery', '/for-men', '/contact', '/blog'];
  return [
    ...pages.map(p => ({ url: `${SITE.url}${p}`, priority: p === '' || p === '/procedures/abdominal-etching' ? 1 : 0.7 })),
    ...getPosts().map(post => ({ url: `${SITE.url}/blog/${post.slug}`, lastModified: post.date, priority: 0.6 })),
  ];
}
