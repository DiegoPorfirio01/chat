export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
     <div className="space-y-4 py-4">
        <div className="space-y-4 py-4">
          <div className="mx-auto w-full max-w-[1200px]">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
