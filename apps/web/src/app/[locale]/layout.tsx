import '../globals.css'
import "../index.css"

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Head from 'next/head'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

import Header from '@/components/header'
import TopLoader from '@/components/top-loader'
import { siteConfig } from '@/config/app'
import { cn } from '@/lib/utils'

import { Providers } from '../providers'
import Footer from '@/components/marketing/footer'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ['Chat', 'Realtime', 'Freemium'],
}

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          sansFont.variable,
        )}
      >
        <TopLoader />
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <div className='min-h-screen'>
              {children}
            </div>
          </NextIntlClientProvider>
        </Providers>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
