import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'XY Sculpt | Male Cosmetic Surgery & Sculpting',
    template: '%s | XY Sculpt',
  },
  description: 'Expert cosmetic sculpting designed exclusively for men. Board-certified surgeons specializing in gynecomastia, liposuction, facial refinement & non-surgical treatments. Discreet, personalized care.',
  metadataBase: new URL('https://xsculptmd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'XY Sculpt',
    title: 'XY Sculpt | Male Cosmetic Surgery & Sculpting',
    description: 'Expert cosmetic sculpting designed exclusively for men. Board-certified surgeons, natural-looking results, discreet care.',
    url: 'https://xsculptmd.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'XY Sculpt - Expert Male Cosmetic Surgery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XY Sculpt | Male Cosmetic Surgery & Sculpting',
    description: 'Expert cosmetic sculpting designed exclusively for men. Board-certified surgeons, natural-looking results.',
    images: ['https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
