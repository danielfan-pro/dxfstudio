import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DanXFoto Studio',
  url: 'https://studio.danxfoto.com',
  image: 'https://studio.danxfoto.com/danxfoto-logo-gold.png',
  description:
    'DanXFoto Studio builds custom websites and premium in-house photography for businesses that need a fast, credible digital presence.',
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
  metadataBase: new URL('https://studio.danxfoto.com'),
  title: {
    default: 'DanXFoto Studio - Web Design & Photography',
    template: '%s | DanXFoto Studio',
  },
  description: 'DanXFoto Studio builds custom websites and premium in-house photography for businesses that need a fast, credible digital presence.',
  openGraph: {
    title: 'DanXFoto Studio - Web Design & Photography',
    description: 'Custom websites and premium in-house photography for businesses that need a fast, credible digital presence.',
    url: '/',
    siteName: 'DanXFoto Studio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/danxfoto-logo-gold.png',
        width: 1980,
        height: 880,
        alt: 'DanXFoto Studio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DanXFoto Studio - Web Design & Photography',
    description: 'Custom websites and premium in-house photography for businesses that need a fast, credible digital presence.',
    images: ['/danxfoto-logo-gold.png'],
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
