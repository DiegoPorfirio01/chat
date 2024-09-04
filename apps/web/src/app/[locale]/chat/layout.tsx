import type { Metadata } from 'next'

import { siteConfig } from '@/config/app'

// Definição do metadata
export const metadata: Metadata = {
  title: {
    default: 'Conversation',
    template: '%s | ' + siteConfig.name,
  },
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="space-y-4 p-4">
        <div className="mx-auto h-screen w-full max-w-[1200px]">{children}</div>
      </div>
    </>
  )
}
