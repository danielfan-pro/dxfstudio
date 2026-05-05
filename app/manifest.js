export default function manifest() {
  return {
    name: 'DanXFoto Studio',
    short_name: 'DanXFoto Studio',
    description: 'Custom websites and premium in-house photography for businesses that need a fast, credible digital presence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#b07d62',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
