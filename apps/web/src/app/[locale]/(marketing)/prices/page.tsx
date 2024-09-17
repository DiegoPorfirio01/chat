import { getMessages } from 'next-intl/server'

import type { Messages } from '@/@types'
import { Cta } from '@/components/marketing/cts'
import PricingTable from '@/components/marketing/pricing-table'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = (await getMessages({ locale })) as Messages

  const title = messages.marketing.menu.prices || 'Prices'

  return {
    title,
  }
}

export default function PricesPage() {
  return (
    <>
      <div className="mx-auto max-w-[1200px] animate-appear p-4">
        <PricingTable />
      </div>
      <Cta />
    </>
  )
}
