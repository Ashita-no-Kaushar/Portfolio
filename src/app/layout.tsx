import type { Metadata } from 'next';
import './globals.css';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PreloaderWrapper from '@/components/preloader-wrapper';
import ConditionalNavbar from '@/components/conditional-navbar';

export const metadata: Metadata = {
  title: 'Kaushar Halani Portfolio',
  description: 'A portfolio for data science projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ConditionalNavbar />
        <PreloaderWrapper>
          {children}
        </PreloaderWrapper>
        <ScrollToTopButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
