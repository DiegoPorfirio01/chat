import '../globals.css';

import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import { Providers } from '../providers';
import { siteConfig } from '../../config/site';
import {NextIntlClientProvider} from 'next-intl';
import type { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import Header from '@/components/header';
import TopLoader from '@/components/top-loader';
import Head from 'next/head';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: [
    "Chat",
    "Realtime",
    "Freemium",
  ],
};

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({children, params: {locale}}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          'bg-background text-foreground min-h-screen font-sans antialiased',
          sansFont.variable
        )}
      >
        <TopLoader />
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale}/>
            <main className='mx-auto p-4 flex max-w-[1200px]'>
              {children}
            </main>
          </NextIntlClientProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}