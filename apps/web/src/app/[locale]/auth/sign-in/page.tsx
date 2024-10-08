import { getMessages } from 'next-intl/server'

import type { Messages } from '@/@types'

import { SignInForm } from './sign-in-form'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = (await getMessages({ locale })) as Messages

  const title = messages.marketing.menu.login || 'Login'

  return {
    title,
  }
}

export default function SignInPage() {
  return (
    <div className="mx-auto mt-7 h-[calc(60vh)] p-4">
      <SignInForm />
    </div>
  )
}
