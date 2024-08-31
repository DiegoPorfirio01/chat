import { ChevronDown, LogOut } from 'lucide-react'
import Link from 'next/link'

import { auth } from '@/auth/auth'

import { Avatar, AvatarFallback } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export async function ProfileButton() {
  const { user } = await auth()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
          <Avatar>
            <AvatarFallback>
              {user.name && user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <ChevronDown className="size-4 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>{user.name}</DropdownMenuItem>
          <DropdownMenuItem>{user.email}</DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={'/api/auth/sign-out'}>
              <LogOut className="mr-2" />
              Sign Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
