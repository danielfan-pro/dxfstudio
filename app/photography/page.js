import Script from 'next/script'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PhotographyPage from '../../components/PhotographyPage'

export const metadata = {
  title: {
    absolute: 'DanXFoto | Family & Portrait Photography',
  },
  description:
    'Family and portrait photography by DanXFoto in Melrose, Boston, and the Greater Boston Area, with relaxed sessions and timeless finished images.',
  openGraph: {
    title: 'DanXFoto | Family & Portrait Photography',
    description:
      'Family and portrait photography with relaxed sessions, refined direction, and timeless images across Melrose and Greater Boston.',
    url: '/photography',
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
    title: 'DanXFoto | Family & Portrait Photography',
    description:
      'Family and portrait photography with relaxed sessions, refined direction, and timeless images across Melrose and Greater Boston.',
    images: ['/danxfoto-og.png'],
  },
}

export default function PhotographyRoute() {
  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <Navbar />
      <PhotographyPage />
      <Footer />
    </>
  )
}
