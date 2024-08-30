import { getMessages } from 'next-intl/server'

import FeatureSection from '@/components/marketing/feature'
import Footer from '@/components/marketing/footer'
import HeroSection from '@/components/marketing/hero'
import UserReviews from '@/components/marketing/users-review'
import TransitionFadeIn from '@/components/transition-fade-in'
import PricingTable from '@/components/marketing/pricing-table'
import { Sponsors } from '@/components/marketing/sponsors'
import { About } from '@/components/marketing/about'
import { Services } from '@/components/marketing/services'
import { Cta } from '@/components/marketing/cts'
import { UsersReviewCards } from '@/components/marketing/users-review-cards'

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
      <div className='mx-auto max-w-[1200px] p-4'>
        <UsersReviewCards />
      </div>  
    </TransitionFadeIn>
  )
}
