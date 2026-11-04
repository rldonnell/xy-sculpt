/**
 * Markdown blog. Posts live in /content/blog/<slug>.md with a JSON-valued
 * frontmatter block. Add a file, commit, deploy. No CMS.
 */
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}
export interface Post extends PostMeta { html: string }

function parse(slug: string): Post {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`Bad frontmatter in ${slug}.md`);
  const fm: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = JSON.parse(line.slice(i + 1).trim());
  }
  return {
    slug,
    title: fm.title,
    seoTitle: fm.seoTitle || fm.title,
    description: fm.description || '',
    date: fm.date,
    category: fm.category || 'Guide',
    readTime: fm.readTime || '',
    author: fm.author || 'Dr. Babak Moein, MD, FACS',
    html: marked.parse(m[2]) as string,
  };
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(DIR).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}

export function getPosts(): Post[] {
  return getAllSlugs().map(parse).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  return getAllSlugs().includes(slug) ? parse(slug) : null;
}

export function formatDate(d: string): string {
  return new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}
