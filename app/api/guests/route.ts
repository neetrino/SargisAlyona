import { NextResponse } from 'next/server'
import {
  GuestStoreConfigError,
  addGuest,
  getGuests,
  type GuestInput,
} from '@/src/server/guest-store'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const guests = await getGuests()
    return NextResponse.json(guests)
  } catch (error) {
    if (error instanceof GuestStoreConfigError) {
      return NextResponse.json(
        { error: 'storage_not_configured' },
        { status: 503 },
      )
    }

    throw error
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<GuestInput>

  if (!payload.firstName || !payload.lastName || payload.attending === undefined) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const result = await addGuest({
      firstName: payload.firstName,
      lastName: payload.lastName,
      attending: payload.attending,
    })

    if (result.error === 'already_registered') {
      return NextResponse.json({ error: result.error }, { status: 409 })
    }

    return NextResponse.json(result.guest, { status: 201 })
  } catch (error) {
    if (error instanceof GuestStoreConfigError) {
      return NextResponse.json(
        { error: 'storage_not_configured' },
        { status: 503 },
      )
    }

    throw error
  }
}
