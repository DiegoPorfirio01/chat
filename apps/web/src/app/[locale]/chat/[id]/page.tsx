import { notFound } from 'next/navigation'
import React from 'react'

import type { GroupChatType, GroupsChatUserType, MessageType } from '@/@types'
import ChatBase from '@/components/dashboard/chat/chat-base'
import { getChats } from '@/http/get-chats'
import { getChatGroup, getChatGroupUsers } from '@/http/get-groups'

export default async function chat({ params }: { params: { id: string } }) {
  if (params.id.length !== 36) {
    return notFound()
  }
  const chatGroup: GroupChatType | null = await getChatGroup(params.id)
  if (chatGroup === null) {
    return notFound()
  }

  const groupsUser: GroupsChatUserType = await getChatGroupUsers(params?.id)

  const chats: Array<MessageType> | [] = await getChats(params.id)

  return (
    <div>
      <ChatBase group={chatGroup} groupsUser={groupsUser} oldMessages={chats} />
    </div>
  )
}
