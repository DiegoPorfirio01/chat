'use client'
import { useParams } from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { toast } from 'sonner'

import type { GroupChatType } from '@/@types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { api } from '@/http/api-client'

export default function ChatUserDialog({
  open,
  setOpen,
  group,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  group: GroupChatType
}) {
  const { id }: { id: string } = useParams()
  const [state, setState] = useState({
    name: '',
    passcode: '',
  })

  useEffect(() => {
    const data = localStorage.getItem(id)
    if (data) {
      const jsonData = JSON.parse(data)
      if (jsonData?.name && jsonData?.groupId) {
        setOpen(false)
      }
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const localData = localStorage.getItem(id)
    console.log(localData)
    if (!localData) {
      try {
        const user = await api
          .post('chat-group-users', {
            json: {
              name: state.name,
              groupId: id,
            },
          })
          .json()

        localStorage.setItem(id, JSON.stringify(user))

        if (group.passcode !== state.passcode) {
          toast.error('Please enter correct passcode!')
        } else {
          setOpen(false)
        }
      } catch (error) {
        toast.error('Something went wrong.please try again!')
      }
    } else {
      if (group.passcode !== state.passcode) {
        toast.error('Please enter correct passcode!')
      } else {
        setOpen(false)
      }
    }
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Name and Passcode</DialogTitle>
          <DialogDescription>
            Add your name and passcode to join in room
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <Input
              placeholder="Enter your name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
          <div className="mt-2">
            <Input
              placeholder="Enter your passcode"
              value={state.passcode}
              onChange={(e) => setState({ ...state, passcode: e.target.value })}
            />
          </div>
          <div className="mt-2">
            <Button className="w-full">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
