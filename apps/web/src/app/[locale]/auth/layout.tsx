import { redirect } from 'next/navigation'
import { useLocale } from 'next-intl'

import { isAuthenticated } from '@/auth/auth'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = useLocale()

  if (isAuthenticated()) {
    return redirect(`/${locale}/dashboard`)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xs">{children}</div>
    </div>
  )
}
