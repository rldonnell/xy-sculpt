import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * ISR Revalidation Webhook
 * WordPress calls this endpoint when a post is published/updated.
 * Triggers Next.js to rebuild the blog pages with fresh content.
 *
 * POST /api/revalidate
 * Body: { secret: "your-secret", slug?: "post-slug" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate secret
    if (body.secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate the blog listing
    revalidatePath('/blog');

    // If a specific slug was provided, revalidate that post too
    if (body.slug) {
      revalidatePath(`/blog/${body.slug}`);
    }

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (error) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
