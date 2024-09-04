import { getMessages } from 'next-intl/server'

import { Services } from '@/components/marketing/services'
import TransitionFadeIn from '@/components/transition-fade-in'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = await getMessages({ locale })
  const title = messages['marketing.menu.services']

  return {
    title,
  }
}

export default function PricesPage() {
  return (
    <TransitionFadeIn>
      <Services />
    </TransitionFadeIn>
  )
}
