import type { NextRequest } from 'next/server'

export const ADMIN_USERNAME = 'admin'
export const ADMIN_PASSWORD = 'admin123'
export const ADMIN_SESSION_COOKIE = 'admin_session'
const ADMIN_SESSION_VALUE = 'authorized'

export function hasValidAdminCredentials(username: string, password: string) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export function isAdminAuthenticated(request: NextRequest) {
  return request.cookies.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_VALUE
}

export function getAdminSessionCookie() {
  return {
    name: ADMIN_SESSION_COOKIE,
    value: ADMIN_SESSION_VALUE,
    options: {
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 12,
    },
  }
}
