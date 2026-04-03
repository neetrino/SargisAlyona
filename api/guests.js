import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const guests = (await redis.get('guests')) || []
    return res.json(guests)
  }

  if (req.method === 'POST') {
    const { firstName, lastName, attending } = req.body
    if (!firstName || !lastName || attending === undefined) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const guests = (await redis.get('guests')) || []

    const exists = guests.find(
      g =>
        g.firstName.trim().toLowerCase() === firstName.trim().toLowerCase() &&
        g.lastName.trim().toLowerCase() === lastName.trim().toLowerCase()
    )
    if (exists) {
      return res.status(409).json({ error: 'already_registered' })
    }

    const guest = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      attending,
      registeredAt: new Date().toISOString(),
    }

    guests.push(guest)
    await redis.set('guests', guests)
    return res.status(201).json(guest)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
