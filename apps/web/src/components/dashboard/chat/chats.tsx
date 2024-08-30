import React, { useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import type { GroupChatType, GroupChatUserType, MessageType } from '@/@types'
import { getSocket } from '@/lib/socket.config'
export default function Chats({
  group,
  oldMessages,
  chatUser,
}: {
  group: GroupChatType
  oldMessages: Array<MessageType> | []
  chatUser?: GroupChatUserType
}) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<MessageType>>(oldMessages)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const socket = useMemo(() => {
    const socket = getSocket()
    socket.auth = {
      room: group.id,
    }
    return socket.connect()
  }, [])
  useEffect(() => {
    socket.on('message', (data: MessageType) => {
      console.log('The message is', data)
      setMessages((prevMessages) => [...prevMessages, data])
      scrollToBottom()
    })

    return () => {
      socket.close()
    }
  }, [])
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const payload: MessageType = {
      id: uuidv4(),
      message,
      name: chatUser?.name ?? 'Unknown',
      createdAt: new Date().toISOString(),
      groupId: group.id,
    }
    socket.emit('message', payload)
    setMessage('')
    setMessages([...messages, payload])
  }

  return (
    <div className="flex h-[94vh] flex-col  p-4">
      <div className="flex flex-1 flex-col-reverse overflow-y-auto">
        <div ref={messagesEndRef} />
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-sm rounded-lg p-2 ${
                message.name === chatUser?.name
                  ? 'self-end bg-gradient-to-r from-blue-400  to-blue-600 text-white'
                  : 'self-start bg-gradient-to-r from-gray-200 to-gray-300 text-black'
              }`}
            >
              {message.message}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-2 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          className="flex-1 rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  )
}
