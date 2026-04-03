import express from 'express'
import cors from 'cors'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const GUESTS_FILE = join(__dirname, 'guests.json')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/guests', (_req, res) => {
  const guests = JSON.parse(readFileSync(GUESTS_FILE, 'utf-8'))
  res.json(guests)
})

app.post('/api/guests', (req, res) => {
  const { firstName, lastName, attending } = req.body
  if (!firstName || !lastName || attending === undefined) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const guests = JSON.parse(readFileSync(GUESTS_FILE, 'utf-8'))

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
  writeFileSync(GUESTS_FILE, JSON.stringify(guests, null, 2))
  res.status(201).json(guest)
})

app.listen(3001, () => {
  console.log('API server → http://localhost:3001')
})
