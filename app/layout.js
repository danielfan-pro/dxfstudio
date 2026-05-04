import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'DanXFoto Studio - Web Design & Photography',
  description: 'DanXFoto Studio combines professional web development and photography to help small businesses launch with a complete, credible online presence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
