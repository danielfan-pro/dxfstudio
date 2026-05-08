import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DanXFoto',
  url: 'https://danxfoto.com',
  image: 'https://danxfoto.com/danxfoto-og.png',
  description:
    'DanXFoto builds custom websites with premium brand and lifestyle photography for Greater Boston and the North Shore. Fast, polished digital experiences.',
  areaServed: [
    {
      '@type': 'City',
      name: 'Melrose',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Greater Boston',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'North Shore',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melrose',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  email: 'studio@danxfoto.com',
  serviceType: ['Web design', 'Brand photography', 'iOS app development'],
}

export const metadata = {
  metadataBase: new URL('https://danxfoto.com'),
  title: {
    default: 'DanXFoto | Web Design & Photography',
    template: '%s | DanXFoto',
  },
  description:
    'DanXFoto builds custom websites with premium brand and lifestyle photography for Greater Boston and the North Shore. Fast, polished digital experiences.',
  openGraph: {
    title: 'DanXFoto | Web Design & Photography',
    description:
      'DanXFoto builds custom websites with premium brand and lifestyle photography for Greater Boston and the North Shore. Fast, polished digital experiences.',
    url: '/',
    siteName: 'DanXFoto',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/danxfoto-og.png',
        width: 1200,
        height: 630,
        alt: 'DanXFoto logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DanXFoto | Web Design & Photography',
    description:
      'DanXFoto builds custom websites with premium brand and lifestyle photography for Greater Boston and the North Shore. Fast, polished digital experiences.',
    images: ['/danxfoto-og.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
