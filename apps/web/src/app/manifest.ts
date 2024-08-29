import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Best Chat App',
    short_name: 'Chat',
    description: 'The best Chat App',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        "src": "/favicon.ico",
        "sizes": "192x192",
        "type": "image/png"
      },
    ],
  }
}