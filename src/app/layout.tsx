import type { Metadata } from 'next';
import { Inter, Rampart_One } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';

const inter = Inter({ subsets: ['latin'] });
const rampartOne = Rampart_One({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rampart-one'
});

export const metadata: Metadata = {
  title: 'Magic Braiding - Professional Hair Braiding Services in Richmond, Texas',
  description: 'Transform your look with expert hair braiding services at Magic Braiding. Located in Richmond, Texas. Book your appointment today for stunning braids that last.',
  keywords: 'hair braiding, braids, Richmond Texas, hair salon, professional braiding, protective styles, box braids, cornrows, faux locs',
  authors: [{ name: 'Magic Braiding' }],
  creator: 'Magic Braiding',
  publisher: 'Magic Braiding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.magicbraiding.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Magic Braiding - Professional Hair Braiding Services',
    description: 'Transform your look with expert hair braiding services at Magic Braiding. Located in Richmond, Texas.',
    url: 'https://www.magicbraiding.com',
    siteName: 'Magic Braiding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magic Braiding - Professional Hair Braiding Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic Braiding - Professional Hair Braiding Services',
    description: 'Transform your look with expert hair braiding services at Magic Braiding. Located in Richmond, Texas.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${rampartOne.variable}`}>
        <BookingProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
