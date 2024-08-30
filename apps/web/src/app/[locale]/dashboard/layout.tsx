import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { useLocale } from 'next-intl'

import { isAuthenticated } from '@/auth/auth'
import Header from '@/components/dashboard/header'
import Tabs from '@/components/dashboard/tabs'
import { siteConfig } from '@/config/app'

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | ' + siteConfig.name,
  },
}

export default function DashboardLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  const locale = useLocale()

  if (!isAuthenticated()) {
    return redirect(`/${locale}`)
  }

  return (
    <>
      <div className="space-y-4 p-4">
        <div className="mx-auto h-screen w-full max-w-[1200px]">
          <Header />
          <Tabs />
          {children}
          {sheet}
        </div>
      </div>
    </>
  )
}
