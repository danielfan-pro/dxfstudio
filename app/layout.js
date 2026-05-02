import './globals.css'

export const metadata = {
  title: 'DXF Studio — Web Design & Photography for Small Businesses',
  description: 'DXF Studio combines professional web development and photography to help small businesses launch with a complete, credible online presence.',
  openGraph: {
    title: 'DXF Studio',
    description: 'Web Design + Photography. Under one roof.',
    url: 'https://dxfstudio.com',
    siteName: 'DXF Studio',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
