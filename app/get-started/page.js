import GetStartedClient from './GetStartedClient'

export const metadata = {
  title: 'Get Started - DanXFoto',
  alternates: {
    canonical: '/get-started',
  },
  description: 'Start your DanXFoto project by sharing your business goals, website needs, and photography priorities through our streamlined project questionnaire.',
  openGraph: {
    title: 'Get Started - DanXFoto',
    description: 'Share your business goals, website needs, and photography priorities so we can prepare a focused first conversation.',
    url: '/get-started',
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
    title: 'Get Started - DanXFoto',
    description: 'Share your business goals, website needs, and photography priorities so we can prepare a focused first conversation.',
    images: ['/danxfoto-og.png'],
  },
}

export default function GetStartedPage() {
  return <GetStartedClient />
}
