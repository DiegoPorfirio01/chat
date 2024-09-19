'use client'
import React, { useEffect, useState } from 'react'

import type {
  GroupChatType,
  GroupChatUserType,
  GroupsChatUserType,
  MessageType,
} from '@/@types'

import ChatNav from './chat-nav'
import ChatSidebar from './chat-sidebar'
import ChatUserDialog from './chat-user-dialog'
import Chats from './chats'

export default function ChatBase({
  group,
  groupsUser,
  oldMessages,
}: {
  group: GroupChatType
  groupsUser: GroupsChatUserType
  oldMessages: Array<MessageType> | []
}) {
  const [open, setOpen] = useState(true)
  const [chatUser, setChatUser] = useState<GroupChatUserType>()
  useEffect(() => {
    const data = localStorage.getItem(group.id)
    if (data) {
      const pData: GroupChatUserType = JSON.parse(data)
      setChatUser(pData)
    }
  }, [open])
  return (
    <div className="flex">
      <ChatSidebar groupsUser={groupsUser.groupsUser} />
      <div className="w-full bg-gradient-to-b from-gray-50 to-white md:w-4/5">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav chatGroup={group} groupsUser={groupsUser} user={chatUser} />
        )}

        {/* Messages */}
        <Chats oldMessages={oldMessages} group={group} chatUser={chatUser} />
      </div>
    </div>
  )
}
