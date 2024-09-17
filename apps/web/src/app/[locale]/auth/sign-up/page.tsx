import { getMessages } from 'next-intl/server'

import { SignUpForm } from './sign-up-form'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = await getMessages({ locale })
  // @ts-ignore
  const title = messages.marketing.menu.signUp

  return {
    title,
  }
}

export default function SignUpPage() {
  return (
    <div className="mx-auto mt-7 h-[calc(70vh)] p-4">
      <SignUpForm />
    </div>
  )
}
