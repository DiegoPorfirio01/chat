import { isAuthenticated } from '@/auth/auth'
import Header from '@/components/dashboard/header'
import Tabs from '@/components/dashboard/tabs'
import { siteConfig } from '@/config/app'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { redirect } from 'next/navigation'

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
        <div className="mx-auto w-full max-w-[1200px] h-screen">
          {children}
        </div>
      </div>
    </>
  )
}
