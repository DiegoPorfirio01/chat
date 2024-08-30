import { isAuthenticated } from '@/auth/auth'
import Header from '@/components/dashboard/header'
import { ProfileButton } from '@/components/dashboard/profile-button'
import Tabs from '@/components/dashboard/tabs'
import { useLocale } from 'next-intl'
import { redirect } from 'next/navigation'

export default function DashboardLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  const locale = useLocale()
  
  if (! isAuthenticated()) {
    return redirect(`/${locale}`)
  }

  return (
    <>
      <div className="space-y-4 p-4">
        <div className="mx-auto w-full max-w-[1200px] h-screen">
          <Header />
          <Tabs />
          {children}
          {sheet}
        </div>
      </div>
    </>
  )
}
