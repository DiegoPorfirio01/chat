import { getMessages } from 'next-intl/server'

import type { Messages } from '@/@types'
import { About } from '@/components/marketing/about'
import { Sponsors } from '@/components/marketing/sponsors'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = (await getMessages({ locale })) as Messages

  const title = messages.marketing.menu.about || 'About'

  return {
    title,
  }
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] animate-appear p-4 opacity-100">
      <Sponsors />
      <About />
    </div>
  )
}
