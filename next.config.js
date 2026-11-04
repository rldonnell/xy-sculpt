/**
 * Redirects
 * - xysculpt.com (Dr. Moein's earlier site) folds into xysculptmd.com page by page.
 *   These rules only fire once xysculpt.com is added as a domain on this Vercel
 *   project and its DNS points here. Until then they are inert.
 * - xsculptmd.com (typo domain) and www both go to the canonical host.
 * See REDIRECTS.md for the full map and reasoning.
 */
const CANONICAL = 'https://xysculptmd.com';

const XYSCULPT_MAP = [
  ['/', '/'],
  ['/procedures', '/procedures'],
  ['/about', '/about'],
  ['/gallery', '/gallery'],
  ['/blog', '/blog'],
  ['/reviews', '/#doctor'],
  ['/contact', '/contact'],
  ['/consultation', '/contact'],
  ['/financing', '/#resources'],
  ['/procedures/abdominal-etching', '/procedures/abdominal-etching'],
  ['/procedures/abdominal-enhancement', '/procedures/abdominal-etching'],
  ['/procedures/liposuction', '/procedures/abdominal-etching'],
  ['/procedures/body-contouring', '/procedures'],
  ['/procedures/gynecomastia', '/procedures/gynecomastia'],
  ['/procedures/chest-sculpting', '/procedures/gynecomastia'],
  ['/procedures/tummy-tuck', '/procedures/male-tummy-tuck'],
  ['/procedures/diastasis-recti-repair', '/procedures/male-tummy-tuck'],
  ['/procedures/facial', '/procedures/male-facial-rejuvenation'],
  ['/procedures/facelift', '/procedures/male-facial-rejuvenation'],
  ['/procedures/chin-augmentation', '/procedures/male-facial-rejuvenation'],
  // Vitality is out of scope this phase.
  ['/vitality', '/'],
];

const xyHost = [{ type: 'host', value: '(www\\.)?xysculpt\\.com' }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...XYSCULPT_MAP.map(([source, dest]) => ({
        source,
        has: xyHost,
        destination: `${CANONICAL}${dest}`,
        permanent: true,
      })),
      // Blog slugs are identical on both sites.
      { source: '/blog/:slug', has: xyHost, destination: `${CANONICAL}/blog/:slug`, permanent: true },
      // Anything else on xysculpt.com lands on the homepage.
      { source: '/:path*', has: xyHost, destination: `${CANONICAL}/`, permanent: true },
      // Typo domain and www.
      { source: '/:path*', has: [{ type: 'host', value: '(www\\.)?xsculptmd\\.com' }], destination: `${CANONICAL}/:path*`, permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www\\.xysculptmd\\.com' }], destination: `${CANONICAL}/:path*`, permanent: true },
    ];
  },
};

module.exports = nextConfig;
