import { Button } from '../ui/button'
import { NavLink } from '../nav-link'
import { dashboardMenu } from '@/app/config/menus'

const Tabs = () => {

return (
    <div className='border-b py-4' >
        <nav className='mx-auto flex max-w-[1200px] items-center gap-2'>
            {
                dashboardMenu.map((item) => (
                    <Button 
                        asChild 
                        variant='ghost' 
                        size='sm' 
                        className='border border-transparent text-muted-foreground data-[current=true]:text-foreground data-[current=true]:border-border' 
                        key={item.href} 
                    >
                        <NavLink href={item.href}>
                            {item.title}
                        </NavLink>   
                    </Button>   
                ))
            }
        </nav>
    </div>
  )
}

export default Tabs