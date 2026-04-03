import { NextResponse } from 'next/server'
import {
  getAdminSessionCookie,
  hasValidAdminCredentials,
} from '@/src/server/admin-auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<{
    username: string
    password: string
  }>

  if (!payload.username || !payload.password) {
    return NextResponse.json(
      { error: 'missing_credentials' },
      { status: 400 },
    )
  }

  if (!hasValidAdminCredentials(payload.username, payload.password)) {
    return NextResponse.json(
      { error: 'invalid_credentials' },
      { status: 401 },
    )
  }

  const response = NextResponse.json({ success: true })
  const sessionCookie = getAdminSessionCookie()

  response.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.options,
  )

  return response
}
