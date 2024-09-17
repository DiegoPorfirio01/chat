import { getMessages } from 'next-intl/server'

import type { Messages } from '@/@types'
import { Services } from '@/components/marketing/services'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = (await getMessages({ locale })) as Messages

  const title = messages.marketing.menu.services || 'Services'

  return {
    title,
  }
}

export default function PricesPage() {
  return <Services />
}
