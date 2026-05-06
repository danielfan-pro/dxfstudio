import GetStartedClient from './GetStartedClient'

export const metadata = {
  title: 'Get Started - DanXFoto Studio',
  description: 'Start your DanXFoto Studio project by sharing your business goals, website needs, and photography priorities through our streamlined project questionnaire.',
  openGraph: {
    title: 'Get Started - DanXFoto Studio',
    description: 'Share your business goals, website needs, and photography priorities so we can prepare a focused first conversation.',
    url: '/get-started',
    images: [
      {
        url: '/danxfoto-logo-gold-google.png',
        width: 1200,
        height: 1200,
        alt: 'DanXFoto Studio logo',
      },
    ],
  },
  twitter: {
    title: 'Get Started - DanXFoto Studio',
    description: 'Share your business goals, website needs, and photography priorities so we can prepare a focused first conversation.',
    images: ['/danxfoto-logo-gold-google.png'],
  },
}

export default function GetStartedPage() {
  return <GetStartedClient />
}
