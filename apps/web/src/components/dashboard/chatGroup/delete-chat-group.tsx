import React, { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'sonner'

import { clearCache } from '@/actions/common'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { api } from '@/http/api-client'

export default function DeleteChatGroup({
  open,
  setOpen,
  groupId,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  groupId: string
}) {
  const [loading, setLoading] = useState(false)

  const deleteChatGroup = async () => {
    setLoading(true)
    try {
      await api.delete(`chat-group/${groupId}`)
      clearCache('dashboardChatGroups')
      toast.success('Chat group deleted successfully')
    } catch (error) {
      console.error('Error deleting chat group:', error)
      toast.error('Failed to delete chat group. Please try again.')
    } finally {
      setLoading(false)
      setOpen(false) // Close the dialog regardless of success or failure
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your chat
            group and its conversations.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={loading} onClick={deleteChatGroup}>
            {loading ? 'Processing..' : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
