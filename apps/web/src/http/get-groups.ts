import { env } from '@chat/env'
import { redirect } from 'next/navigation'

import type {
  GroupChatsType,
  GroupChatType,
  GroupsChatUserType,
} from '@/@types'

import { api } from './api-client'

export async function getChatGroups() {
  const res = await api
    .get('chat-groups', {
      next: {
        revalidate: 60 * 60,
        tags: ['dashboardChatGroups'],
      },
    })
    .json<GroupChatsType>()

  return res
}

export async function getChatGroup(id: string) {
  try {
    const res = await api
      .get(`chat-groups/${id}`, {
        cache: 'no-cache',
      })
      .json<GroupChatType>()

    return res
  } catch (error) {
    const url = new URL(env.NEXT_PUBLIC_APP_URL)
    url.pathname = '404'

    return redirect(url.toString(), undefined)
  }
}

export async function getChatGroupUsers(id: string) {
  const res = await api
    .get(`chat-groups-user?group_id=${id}`, {
      cache: 'no-cache',
    })
    .json<GroupsChatUserType>()

  return res
}
