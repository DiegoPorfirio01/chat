import { getMessages } from 'next-intl/server'

import type { Messages } from '@/@types'
import { About } from '@/components/marketing/about'
import { Cta } from '@/components/marketing/cts'
import HeroSection from '@/components/marketing/hero'
import PricingTable from '@/components/marketing/pricing-table'
import { Services } from '@/components/marketing/services'
import { Sponsors } from '@/components/marketing/sponsors'
import UserReviews from '@/components/marketing/users-review'
import { ScrollToTop } from '@/components/scroll-to-up'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = (await getMessages({ locale })) as Messages

  const title = messages.marketing.menu.home || 'Home'

  return {
    title,
  }
}

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] p-4">
        <HeroSection />
        <Sponsors />
        <About />
        <Services />
      </div>
      <Cta />
      <div className="mx-auto max-w-[1200px] p-4">
        <PricingTable />
        <UserReviews />
      </div>
      <ScrollToTop />
    </>
  )
}
