import type { Metadata, Viewport } from 'next';
import { Orbitron, Plus_Jakarta_Sans } from 'next/font/google';
import { SITE } from '@/lib/content';
import { ModalProvider } from '@/components/ModalProvider';
import { AmbientBackground } from '@/components/ui/AmbientBackground';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} | Premium Game Dev Studio`,
  description:
    'From concept to launch, our video game development studio delivers stunning, high-performance games across PC, PlayStation, Xbox, Nintendo Switch, and mobile.',
  keywords: [
    'game development',
    'game development company',
    'game art',
    'game porting',
    'co-development',
    'outsourcing',
  ],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${SITE.name} | Premium Game Dev Studio`,
    description:
      'Full-cycle game development across PC, console, and mobile. Concept to launch and beyond.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#161d28',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={`${orbitron.variable} ${jakarta.variable}`}>
      <body>
        <AmbientBackground />
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
