import { getMessages } from 'next-intl/server'

import { About } from '@/components/marketing/about'
import { Cta } from '@/components/marketing/cts'
import FeatureSection from '@/components/marketing/feature'
import Footer from '@/components/marketing/footer'
import HeroSection from '@/components/marketing/hero'
import PricingTable from '@/components/marketing/pricing-table'
import { Services } from '@/components/marketing/services'
import { Sponsors } from '@/components/marketing/sponsors'
import UserReviews from '@/components/marketing/users-review'
import { UsersReviewCards } from '@/components/marketing/users-review-cards'
import TransitionFadeIn from '@/components/transition-fade-in'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { marketing }: any = await getMessages({ locale })
  const title = marketing.menu.prices

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
