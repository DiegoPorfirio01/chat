import { getMessages } from 'next-intl/server'

import type { Messages } from '@/@types'
import { UsersReviewCards } from '@/components/marketing/users-review-cards'
import TransitionFadeIn from '@/components/transition-fade-in'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = (await getMessages({ locale })) as Messages

  const title = messages.marketing.menu.testimonials || 'Testimonials'

  return {
    title,
  }
}

export default function PricesPage() {
  return (
    <TransitionFadeIn>
      <div className="mx-auto max-w-[1200px] p-4">
        <UsersReviewCards />
      </div>
    </TransitionFadeIn>
  )
}
