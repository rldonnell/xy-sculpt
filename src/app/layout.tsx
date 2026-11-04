import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'XYSculptMD | Abdominal Etching & Male Body Sculpting Los Angeles',
    template: '%s | XYSculptMD',
  },
  description: 'Double board certified surgeon Dr. Babak Moein specializes in abdominal etching, gynecomastia, male tummy tuck, and HD VASER body sculpting for men in Century City, Los Angeles.',
  metadataBase: new URL('https://xysculptmd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'XYSculptMD',
    title: 'XYSculptMD | The Architecture of the Male Form',
    description: 'Abdominal etching and male body sculpting in Los Angeles by double board certified surgeon Dr. Babak Moein. 20+ years experience.',
    url: 'https://xysculptmd.com',
    images: [
      {
        url: '/hero-model.jpg',
        width: 800,
        height: 800,
        alt: 'XYSculptMD - Male Plastic Surgery by Dr. Babak Moein',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XYSculptMD | The Architecture of the Male Form',
    description: 'Abdominal etching and male body sculpting by double board certified surgeon Dr. Babak Moein.',
    images: ['/hero-model.jpg'],
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
