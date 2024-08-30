import CreateChat from '@/components/dashboard/chatGroup/create-chat'
import GroupChatCard from '@/components/dashboard/chatGroup/group-chat-card'
import TransitionFadeIn from '@/components/transition-fade-in'
import { getChatGroups } from '@/http/get-groups'

export default async function Chats() {
  const { groups } = await getChatGroups()

  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-4">
      <div className="mt-6 text-end">
        <CreateChat />
      </div>
      <TransitionFadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.length > 0
            ? groups.map((item, index) => (
                <GroupChatCard group={item} key={index} />
              ))
            : 'No chats found, create one!'}
        </div>
      </TransitionFadeIn>
    </main>
  )
}
