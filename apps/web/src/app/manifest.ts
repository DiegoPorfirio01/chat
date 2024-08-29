import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chat Lucy',
    short_name: 'Chat Lucy',
    description: 'The Best Chat App',
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