import GetStartedClient from './GetStartedClient'

export const metadata = {
  title: 'Get Started - DanXFoto Studio',
  description: 'Start your DanXFoto Studio project by sharing your business goals, website needs, and photography priorities through our streamlined project questionnaire.',
  openGraph: {
    title: 'Get Started - DanXFoto Studio',
    description: 'Share your business goals, website needs, and photography priorities so we can prepare a focused first conversation.',
    url: '/get-started',
  },
  twitter: {
    title: 'Get Started - DanXFoto Studio',
    description: 'Share your business goals, website needs, and photography priorities so we can prepare a focused first conversation.',
  },
}

export default function GetStartedPage() {
  return <GetStartedClient />
}
