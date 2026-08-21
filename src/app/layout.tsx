import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'SNUMPR Lab',
  description: 'We study visual perception and machine reasoning.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',  // 변수명 그대로 유지하면 나머지 코드 안 바꿔도 됨
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${figtree.variable} ${inter.variable}`}>
      <body>
        <NuqsAdapter>
          <Navbar />
          {children}
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
