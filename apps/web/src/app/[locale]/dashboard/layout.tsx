import { isAuthenticated } from '@/auth/auth'
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
    return redirect(`/${locale}/dashboard`)
  }

  return (
    <>
      <div className="space-y-4 p-4">
        <div className="mx-auto w-full max-w-[1200px] h-screen">
          <Tabs />
          {children}
          {sheet}
        </div>
      </div>
    </>
  )
}
