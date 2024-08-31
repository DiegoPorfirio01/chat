import { redirect } from 'next/navigation'
import { useLocale } from 'next-intl'

import { isAuthenticated } from '@/auth/auth'
import Link from 'next/link'
import { ArrowLeftSquare } from 'lucide-react'

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
      {
        <Link href={`/${locale}`} className="flex items-center gap-1">
          <ArrowLeftSquare className="size-6" />
          <span>Back</span>
        </Link>
      }
      <div className="w-full max-w-xs">{children}</div>
    </div>
  )
}
