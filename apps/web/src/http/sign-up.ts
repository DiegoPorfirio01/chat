import { api } from './api-client'

interface SignUpRequest {
  email: string
  password: string
  name: string
}

interface SignUpWithPasswordResponse {
  token: string
}

export async function signUp({
  name,
  email,
  password,
}: SignUpRequest): Promise<SignUpWithPasswordResponse> {
  await api.post('users', {
    json: {
      email,
      password,
      name,
    },
  })

  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<SignUpWithPasswordResponse>()

  return result
}
