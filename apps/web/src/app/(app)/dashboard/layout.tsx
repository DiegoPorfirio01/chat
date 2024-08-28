import Header from "@/components/dashboard/header"
import Tabs from "@/components/dashboard/tabs"
import TransitionFadeIn from "@/components/dashboard/transition-fade-in"

export default async function DashboardLayout({
  children,
  sheet,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  
  return (
    <>
     <div className="space-y-4 p-4">
        <Header />
        <div className="space-y-4 py-4">
          <div className="mx-auto w-full max-w-[1200px]">
            <Tabs />
            {children}
            {sheet}
          </div>
        </div>
      </div>
    </>
  )
}
