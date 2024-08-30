import React from 'react'

import type { GroupChatType } from '@/@types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import GroupChatCardMenu from './group-chat-card-menu'

export default function GroupChatCard({ group }: { group: GroupChatType }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between ">
        <CardTitle className="text-2xl">{group.title}</CardTitle>
        <GroupChatCardMenu group={group} />
      </CardHeader>
      <CardContent>
        <p>
          Passcode : <strong>{group.passcode}</strong>
        </p>
        <p>Created At : {new Date(group.createdAt).toDateString()}</p>
      </CardContent>
    </Card>
  )
}
