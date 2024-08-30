import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GroupChatCardMenu from "./group-chat-card-menu";
import type { GroupChatType } from "@/@types";

export default function GroupChatCard({
  group,
}: {
  group: GroupChatType;
}) {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center ">
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
  );
}
