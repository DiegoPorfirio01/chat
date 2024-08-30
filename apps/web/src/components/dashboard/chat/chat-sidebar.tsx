import type { GroupChatUserType } from "@/@types";
import React from "react";

export default function ChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {

  return (
    <div className="hidden md:block h-screen overflow-y-scroll w-1/5 bg-muted px-2">
      <h1 className="text-2xl font-extrabold py-4 ">Members</h1>
      {users.groupsUser.length > 0 &&
        users.groupsUser.map((item, index) => (
          <div key={index} className="bg-foreground text-muted-foreground rounded-md p-2 mt-2">
            <p className="font-bold"> {item.name}</p>
            <p>
              Joined : <span>{new Date(item.createdAt).toDateString()}</span>
            </p>
          </div>
        ))}
    </div>
  );
}
