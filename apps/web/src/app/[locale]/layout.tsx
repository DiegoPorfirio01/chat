import '../globals.css'
import '../index.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

import Footer from '@/components/marketing/footer'
import TopLoader from '@/components/top-loader'
import { siteConfig } from '@/config/app'
import { cn } from '@/lib/utils'

import { Providers } from '../providers'

// Definição do metadata
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
  sheet: ReactNode
}

// Definição do componente LocaleLayout
export default async function LocaleLayout({
  children,
  params: { locale },
  sheet,
}: Props) {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          sansFont.variable,
        )}
      >
        <TopLoader />
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen">{children}</div>
          </NextIntlClientProvider>
          <Footer />
          <Toaster richColors duration={5000} />
        </Providers>
        <div>{sheet}</div>
      </body>
    </html>
  )
}
