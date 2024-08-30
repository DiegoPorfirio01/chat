import { getMessages } from 'next-intl/server'
import HeroSection from '@/components/marketing/hero'
import UserReviews from '@/components/marketing/users-review'
import TransitionFadeIn from '@/components/transition-fade-in'
import PricingTable from '@/components/marketing/pricing-table'
import { Sponsors } from '@/components/marketing/sponsors'
import { About } from '@/components/marketing/about'
import { Services } from '@/components/marketing/services'
import { Cta } from '@/components/marketing/cts'
import { ScrollToTop } from '@/components/scroll-to-up'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const { marketing }: any = await getMessages({ locale })
  const title = marketing.menu.home

  return {
    title,
  }
}

export default function Home() {
return (
    <TransitionFadeIn>
      <div className='mx-auto max-w-[1200px] p-4'>
        <HeroSection />
        <Sponsors />
        <About />
        <Services />
      </div>
      <Cta />
      <div className='mx-auto max-w-[1200px] p-4'>
        <PricingTable />
        <UserReviews />
      </div>  
      <ScrollToTop />
    </TransitionFadeIn>
  )
}
