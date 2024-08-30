'use client'
import { MenuIcon } from 'lucide-react'
import React from 'react'

import type { GroupChatUserType } from '@/@types'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function MobileChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | []
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="bg-muted">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Users</SheetTitle>
        </SheetHeader>
        <div>
          {users.length > 0 &&
            users.map((item, index) => (
              <div key={index} className="mt-2 rounded-md bg-white p-2">
                <p className="font-bold"> {item.name}</p>
                <p>
                  Joined :{' '}
                  <span>{new Date(item.createdAt).toDateString()}</span>
                </p>
              </div>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
