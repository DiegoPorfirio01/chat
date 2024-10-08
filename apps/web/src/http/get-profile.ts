import { api } from './api-client'

interface GetProfileResponse {
  user: {
    id: string
    name: string
    email: string
  }
}

export async function getProfile() {
  const user = await api.get('profile').json<GetProfileResponse>()

  return { user }
}
