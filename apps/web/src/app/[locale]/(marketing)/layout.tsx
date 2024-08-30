
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Providers } from '@/app/providers'
import Header from '@/components/header';

export default function DadhboardLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Header/>
      <Providers>
        <div className='min-h-screen'>
          {children}
        </div>
      </Providers>
      <Toaster />
    </div>
  )
}
