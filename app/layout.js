import './globals.css'

export const metadata = {
  title: 'DXF Studio — Web Design & Photography for Small Businesses',
  description: 'DXF Studio combines professional web development and photography to help small businesses launch with a complete, credible online presence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
