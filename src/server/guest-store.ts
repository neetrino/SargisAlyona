import { promises as fs } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { Redis } from '@upstash/redis'

export type Guest = {
  id: number
  firstName: string
  lastName: string
  attending: boolean
  registeredAt: string
}

export type GuestInput = Pick<Guest, 'firstName' | 'lastName' | 'attending'>

type AddGuestResult =
  | { guest: Guest; error?: never }
  | { guest?: never; error: 'already_registered' }

export class GuestStoreConfigError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'GuestStoreConfigError'
  }
}

const GUESTS_KEY = 'guests'
const projectGuestsFile = path.join(process.cwd(), 'guests.json')
const tempGuestsFile = path.join(os.tmpdir(), 'ed-guests.json')

let redis: Redis | null = null

function getRedisClient() {
  if (redis !== null) return redis

  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    redis = Redis.fromEnv()
    return redis
  }

  return null
}

function isVercelProduction() {
  return process.env.VERCEL === '1' && process.env.NODE_ENV === 'production'
}

function getGuestsFilePath() {
  if (isVercelProduction()) {
    return tempGuestsFile
  }

  return projectGuestsFile
}

async function readGuestsFromFile() {
  try {
    const raw = await fs.readFile(getGuestsFilePath(), 'utf8')
    return JSON.parse(raw) as Guest[]
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException
    if (nodeError.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

async function writeGuestsToFile(guests: Guest[]) {
  await fs.writeFile(getGuestsFilePath(), JSON.stringify(guests, null, 2))
}

export async function getGuests() {
  const redisClient = getRedisClient()

  if (redisClient) {
    return ((await redisClient.get(GUESTS_KEY)) as Guest[] | null) ?? []
  }

  return readGuestsFromFile()
}

export async function addGuest(input: GuestInput): Promise<AddGuestResult> {
  const guests = await getGuests()

  const exists = guests.find(
    guest =>
      guest.firstName.trim().toLowerCase() === input.firstName.trim().toLowerCase() &&
      guest.lastName.trim().toLowerCase() === input.lastName.trim().toLowerCase(),
  )

  if (exists) {
    return { error: 'already_registered' }
  }

  const guest: Guest = {
    id: Date.now(),
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    attending: input.attending,
    registeredAt: new Date().toISOString(),
  }

  const nextGuests = [...guests, guest]
  const redisClient = getRedisClient()

  if (redisClient) {
    await redisClient.set(GUESTS_KEY, nextGuests)
  } else {
    await writeGuestsToFile(nextGuests)
  }

  return { guest }
}
