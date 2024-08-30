import '../globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: '404',
    template: 'Y87943Y 5RHB78FGHR78',
  },
}

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html>
        <body>{children}</body>
      </html>
    </>
  )
}
