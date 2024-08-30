'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import type { GroupChatType } from '@/@types'
import { clearCache } from '@/actions/common'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { api } from '@/http/api-client'
import {
  createChatSchema,
  createChatSchemaType,
} from '@/validations/chatSchema'

export default function EditGroupChat({
  group,
  open,
  setOpen,
}: {
  group: GroupChatType
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  })

  useEffect(() => {
    setValue('title', group.title)
    setValue('passcode', group.passcode)
  }, [group])

  const onSubmit = async ({ title, passcode }: createChatSchemaType) => {
    try {
      setLoading(true)
      await api.put(`chat-groups/${group.id}`, {
        json: {
          title,
          passcode,
        },
      })
      setOpen(false)
      clearCache('dashboardChatGroups')
      toast.success('Chat Group updated successfully')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error('Something went wrong.please try again!')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Update group chat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input placeholder="Enter chat title" {...register('title')} />
            <span className="text-red-400">{errors.title?.message}</span>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter passcode" {...register('passcode')} />
            <span className="text-red-400">{errors.passcode?.message}</span>
          </div>
          <div className="mt-4">
            <Button className="w-full" disabled={loading}>
              {loading ? 'Processing..' : 'Submit'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
