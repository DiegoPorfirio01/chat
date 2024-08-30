import type { MessagesType, MessageType } from '@/@types'
import { api } from '@/http/api-client'

export async function getChats(groupId: string) {
  const { chats } = await api
    .get(`chats/${groupId}`, {
      cache: 'no-cache',
    })
    .json<MessagesType>()

  return chats
}
