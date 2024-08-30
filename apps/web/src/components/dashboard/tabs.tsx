import { useLocale, useTranslations } from 'next-intl'

import { dashboardMenu } from '@/config/menus'

import { NavLink } from '../nav-link'
import { Button } from '../ui/button'

const Tabs = () => {
  const t = useTranslations('dashboard.tabs')
  const locale = useLocale()

  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-2">
        {dashboardMenu.map((item) => (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
            key={item.href}
          >
            <NavLink href={`/${locale}${item.href}`}>{t(item.title.toLowerCase())}</NavLink>
          </Button>
        ))}
      </nav>
    </div>
  )
}

export default Tabs
