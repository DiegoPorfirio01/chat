import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { useLocale } from 'next-intl'

import { isAuthenticated } from '@/auth/auth'
import Header from '@/components/dashboard/header'
import Tabs from '@/components/dashboard/tabs'
import { siteConfig } from '@/config/app'

export const metadata: Metadata = {
  title: {
    default: 'Conversation',
    template: '%s | ' + siteConfig.name,
  },
}

export default function ChatLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  const locale = useLocale()

  return (
    <>
      <div className="space-y-4 p-4">
        <div className="mx-auto h-screen w-full max-w-[1200px]">{children}</div>
      </div>
    </>
  )
}
