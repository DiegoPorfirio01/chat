import TransitionFadeIn from '@/components/transition-fade-in'

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-4">
      <TransitionFadeIn>
        <div className="my-2">Settings</div>
      </TransitionFadeIn>
    </main>
  )
}
