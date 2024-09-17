import type { ReactNode } from 'react'

import Header from '@/components/header'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="min-h-screen animate-appear opacity-100">{children}</div>
    </div>
  )
}
