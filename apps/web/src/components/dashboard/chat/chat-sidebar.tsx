import React from 'react'

import type { GroupsChatUserType } from '@/@types'

export default function ChatSidebar({ groupsUser }: GroupsChatUserType) {
  return (
    <div className="hidden h-screen w-1/5 overflow-y-scroll bg-muted px-2 md:block">
      <h1 className="py-4 text-2xl font-extrabold ">Members</h1>
      {groupsUser.length > 0 &&
        groupsUser.map((item, index) => (
          <div
            key={index}
            className="mt-2 rounded-md bg-foreground p-2 text-muted-foreground"
          >
            <p className="font-bold"> {item.name}</p>
            <p>
              Joined : <span>{new Date(item.createdAt).toDateString()}</span>
            </p>
          </div>
        ))}
    </div>
  )
}
