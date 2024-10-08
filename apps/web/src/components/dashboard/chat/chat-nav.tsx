import React from 'react'

import type {
  GroupChatType,
  GroupChatUserType,
  GroupsChatUserType,
} from '@/@types'

import MobileChatSidebar from './mobile-chat-sidebar'

export default function ChatNav({
  chatGroup,
  groupsUser,
  user,
}: {
  chatGroup: GroupChatType
  groupsUser: GroupsChatUserType
  user?: GroupChatUserType
}) {
  return (
    <nav className="flex w-full items-center justify-between  border-b px-6 py-2">
      <div className="flex items-center space-x-4 md:space-x-0">
        <div className="md:hidden">
          <MobileChatSidebar groupsUser={groupsUser.groupsUser} />
        </div>

        <h1 className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
          {chatGroup.title}
        </h1>
        {/* <p>{new Date(chatGroup.createdAt).toDateString()}</p> */}
      </div>
      <p>{user?.name}</p>
    </nav>
  )
}
