
import type { GroupChatType, GroupChatUserType, MessageType } from "@/@types";
import ChatBase from "@/components/dashboard/chat/chat-base";
import { getChats } from "@/http/get-chats";
import { getChatGroup, getChatGroupUsers } from "@/http/get-groups";
import { notFound } from "next/navigation";
import React from "react";

export default async function chat({ params }: { params: { id: string } }) {
  if (params.id.length !== 36) {
    return notFound();
  }
  const chatGroup: GroupChatType | null = await getChatGroup(params.id);
  if (chatGroup === null) {
    return notFound();
  }

  const chatGroupUsers: Array<GroupChatUserType> | [] =
    await getChatGroupUsers(params?.id);

  const chats: Array<MessageType> | [] = await getChats(params.id);

  return (
    <div>
      <ChatBase group={chatGroup} users={chatGroupUsers} oldMessages={chats} />
    </div>
  );
}
