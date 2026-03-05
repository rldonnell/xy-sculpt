/**
 * WordPress REST API Client
 * Fetches blog posts from headless WordPress via REST API.
 * ISR revalidation keeps content fresh without full rebuilds.
 */

const WP_API = process.env.WORDPRESS_API_URL || 'https://example.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls?: Record<string, string>;
    }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

/** Fetch all published blog posts */
export async function getPosts(perPage = 20): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?per_page=${perPage}&_embed=true&orderby=date&order=desc`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

/** Fetch a single post by slug */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?slug=${slug}&_embed=true`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

/** Get all post slugs for static generation */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?per_page=100&_fields=slug`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const posts: Array<{ slug: string }> = await res.json();
    return posts.map(p => p.slug);
  } catch {
    return [];
  }
}

/** Fetch categories */
export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(
      `${WP_API}/categories?per_page=50`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

/** Extract featured image URL from embedded data */
export function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

/** Extract author name */
export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || 'Staff Writer';
}

/** Format date for display */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Strip HTML tags from excerpt */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}
