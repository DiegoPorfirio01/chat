"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dynamic from "next/dynamic";
import EditGroupChat from "./edit-group-chat";
import { toast } from "sonner";
import type { GroupChatType } from "@/@types";
import { env } from "@chat/env";
import { EllipsisVertical } from "lucide-react";
import { useLocale } from "next-intl";

const DeleteChatGroup = dynamic(() => import("./delete-chat-group"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function GroupChatCardMenu({
  group,
}: {
  group: GroupChatType;
}) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const locale = useLocale();  

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${env.NEXT_PUBLIC_APP_URL}/${locale}/chat/${group.id}`);
      toast.success("Link copied successfully!");
    } catch (error) {
      console.error("Failed to copy link:", error);
      toast.error("Failed to copy link. Please try again.");
    }
  };

  return (
    <>
      {deleteDialog && (
        <DeleteChatGroup
          open={deleteDialog}
          setOpen={setDeleteDialog}
          groupId={group.id}
        />
      )}
      {editDialog && (
        <EditGroupChat
          open={editDialog}
          setOpen={setEditDialog}
          group={group}
        />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleCopy}>Copy</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEditDialog(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDeleteDialog(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
