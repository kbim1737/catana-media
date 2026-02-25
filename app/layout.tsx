import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/hooks/use-translation'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'CATANA MEDIA | Creative Multimedia Director',
  description:
    'Christopher Catana – creative multimedia director crafting cinematic experiences for artists. From concept to screen, music videos, creative direction, video production, and more.',
  keywords: 'music video director, creative direction, video production, live performance, audio, photo, editing, social media, events, Christopher Catana, CATANA MEDIA',
  openGraph: {
    title: 'CATANA MEDIA | Creative Multimedia Director',
    description: 'Christopher Catana – creative multimedia director crafting cinematic experiences for artists. From concept to screen.',
    url: 'https://catana.media',
    siteName: 'CATANA MEDIA',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CATANA MEDIA | Creative Multimedia Director',
    description: 'Christopher Catana – creative multimedia director crafting cinematic experiences for artists.',
  },
  alternates: {
    languages: {
      en: 'https://catana.media',
      es: 'https://catana.media?lang=es',
      hu: 'https://catana.media?lang=hu',
      ro: 'https://catana.media?lang=ro',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_spaceGrotesk.variable} ${_inter.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
