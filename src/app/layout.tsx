import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'XYSculptMD | Male Plastic Surgery Los Angeles | Dr. Babak Moein',
    template: '%s | XYSculptMD',
  },
  description: 'Board-certified cosmetic surgeon Dr. Babak Moein specializes in male plastic surgery, gynecomastia, HD lipo, VASER body sculpting, and facial procedures in Beverly Hills, Los Angeles.',
  metadataBase: new URL('https://xsculptmd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'XYSculptMD',
    title: 'XYSculptMD | Male Plastic Surgery Los Angeles',
    description: 'Precision sculpting for the modern man. Board-certified cosmetic surgeon Dr. Babak Moein — 20+ years experience, Beverly Hills.',
    url: 'https://xsculptmd.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'XYSculptMD - Male Plastic Surgery by Dr. Babak Moein',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XYSculptMD | Male Plastic Surgery Los Angeles',
    description: 'Precision sculpting for the modern man. Board-certified cosmetic surgeon Dr. Babak Moein.',
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-grain" />
        <div className="bg-glow" />
        <div id="app">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
