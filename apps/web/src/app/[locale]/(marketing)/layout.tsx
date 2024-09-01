import type { ReactNode } from 'react'

import Header from '@/components/header'

export default function DadhboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
    </div>
  )
}
