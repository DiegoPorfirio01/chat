import { Button } from '../ui/button';
import { NavLink } from '../nav-link';
import { useTranslations } from 'next-intl';
import { dashboardMenu } from '@/config/menus';

const Tabs = () => {
  const t = useTranslations('dashboard.tabs');

  return (
    <div className='border-b py-4'>
      <nav className='mx-auto flex max-w-[1200px] items-center gap-2'>
        {dashboardMenu.map((item) => (
          <Button
            asChild
            variant='ghost'
            size='sm'
            className='border border-transparent text-muted-foreground data-[current=true]:text-foreground data-[current=true]:border-border'
            key={item.href}
          >
            <NavLink href={item.href}>
              {t(item.title.toLowerCase())}
            </NavLink>
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;