import { getMessages } from 'next-intl/server'
import TransitionFadeIn from '@/components/transition-fade-in'
import { Services } from '@/components/marketing/services'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { marketing }: any = await getMessages({ locale })
  const title = marketing.menu.services

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
