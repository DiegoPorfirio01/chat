import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  cookies().delete('token')

  const redirectURL = request.nextUrl.clone()
  redirectURL.pathname = '/'

  return NextResponse.redirect(redirectURL)
}
