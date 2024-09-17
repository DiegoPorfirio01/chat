import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getProfile } from '@/http/get-profile'

export function isAuthenticated() {
  return !!cookies().get('token')?.value
}

export async function getCurrentToken() {
  try {
    const token = cookies().get('token')?.value

    return token
  } catch (error) {}
}

export async function auth({ locale }: { locale: string }) {
  const token = cookies().get('token')?.value

  if (!token) {
    redirect(`${locale}/auth/sign-in`)
  }

  try {
    const { user } = await getProfile()

    return user
  } catch (error) {}

  redirect('api/auth/sign-out')
}
