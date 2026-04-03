'use client'

import { useEffect, useState } from 'react'

type Guest = {
  id: number
  firstName: string
  lastName: string
  attending: boolean
  registeredAt: string
}

export function AdminPanel() {
  const [guests, setGuests] = useState<Guest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)

  async function loadGuests() {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/guests', { credentials: 'include' })

      if (response.status === 401) {
        setAuthenticated(false)
        setGuests([])
        return
      }

      if (!response.ok) {
        throw new Error('Failed to load guests')
      }

      const data = (await response.json()) as Guest[]
      setGuests(data)
      setAuthenticated(true)
    } catch {
      setError('Failed to load guests')
    } finally {
      setLoading(false)
      setCheckingAuth(false)
    }
  }

  useEffect(() => {
    loadGuests()
  }, [])

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoginLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      })

      if (response.status === 401) {
        setError('Invalid admin username or password')
        return
      }

      if (!response.ok) {
        throw new Error('Login failed')
      }

      setPassword('')
      await loadGuests()
    } catch {
      setError('Login failed')
      setCheckingAuth(false)
    } finally {
      setLoginLoading(false)
    }
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
    })

    setAuthenticated(false)
    setGuests([])
    setUsername('')
    setPassword('')
    setError('')
    setLoading(false)
    setCheckingAuth(false)
  }

  const coming = guests.filter(guest => guest.attending).length
  const notComing = guests.filter(guest => !guest.attending).length

  if (checkingAuth) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] items-center justify-center bg-[#faf6f8] px-6">
        <p className="text-center font-sans text-[13px] text-[#8e8574]">
          Checking admin access...
        </p>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col justify-center bg-[#faf6f8] px-6">
        <div className="rounded-[28px] bg-white px-6 py-8 shadow-sm">
          <p
            className="mb-2 text-center font-serif text-[11px] uppercase tracking-[4px] text-[rgba(92,78,48,0.6)]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            ADMIN
          </p>
          <h1
            className="text-center font-serif text-[24px] font-normal tracking-[-0.5px] text-[#2d2d2b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Admin Login
          </h1>
          <p className="mt-2 text-center font-sans text-[13px] text-[#8e8574]">
            Enter the admin username and password to continue.
          </p>

          <form className="mt-6 flex flex-col gap-3" onSubmit={handleLogin}>
            <input
              className="h-12 rounded-2xl border border-[rgba(140,122,77,0.18)] px-4 font-sans text-[14px] text-[#2d2d2b] outline-none"
              placeholder="Username"
              value={username}
              onChange={event => setUsername(event.target.value)}
              autoComplete="username"
            />
            <input
              className="h-12 rounded-2xl border border-[rgba(140,122,77,0.18)] px-4 font-sans text-[14px] text-[#2d2d2b] outline-none"
              placeholder="Password"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              autoComplete="current-password"
            />
            {error && (
              <p className="text-center font-sans text-[13px] text-[#b85c5c]">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="mt-2 h-12 rounded-2xl bg-[#2d2d2b] font-sans text-[13px] font-medium uppercase tracking-[2px] text-white disabled:opacity-60"
              disabled={loginLoading}
            >
              {loginLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#faf6f8]">
      <div className="bg-[#faf6f8] px-6 pb-4 pt-10">
        <p
          className="mb-1 text-center font-serif text-[11px] uppercase tracking-[4px] text-[rgba(92,78,48,0.6)]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          ADMIN
        </p>
        <h1
          className="text-center font-serif text-[22px] font-normal tracking-[-0.5px] text-[#2d2d2b]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Admin Dashboard
        </h1>
        <p className="mt-1 text-center font-sans text-[11px] uppercase tracking-[2px] text-[#8e8574]">
          Guest List
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="mx-auto mt-4 block rounded-full border border-[rgba(140,122,77,0.18)] px-4 py-2 font-sans text-[10px] uppercase tracking-[1.5px] text-[#8e8574]"
        >
          Log out
        </button>
      </div>

      <div className="mx-6 mb-4 mt-2 flex gap-3">
        <div className="flex flex-1 flex-col items-center rounded-2xl bg-white py-4 shadow-sm">
          <span
            className="font-serif text-[26px] text-[#2d2d2b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {guests.length}
          </span>
          <span className="mt-0.5 font-sans text-[9px] uppercase tracking-[2px] text-[#8e8574]">
            Total
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-2xl bg-white py-4 shadow-sm">
          <span
            className="font-serif text-[26px] text-[#5a7a50]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {coming}
          </span>
          <span className="mt-0.5 font-sans text-[9px] uppercase tracking-[2px] text-[#8e8574]">
            Coming
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center rounded-2xl bg-white py-4 shadow-sm">
          <span
            className="font-serif text-[26px] text-[#b85c5c]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {notComing}
          </span>
          <span className="mt-0.5 font-sans text-[9px] uppercase tracking-[2px] text-[#8e8574]">
            Not Coming
          </span>
        </div>
      </div>

      <div className="mx-6 mb-4 h-px bg-[rgba(140,122,77,0.15)]" />

      <div className="flex flex-col gap-2 px-6 pb-10">
        {loading && (
          <p className="mt-8 text-center font-sans text-[13px] text-[#8e8574]">
            Loading...
          </p>
        )}
        {error && (
          <p className="mt-8 text-center font-sans text-[13px] text-[#b85c5c]">
            {error}
          </p>
        )}
        {!loading && !error && guests.length === 0 && (
          <p className="mt-8 text-center font-sans text-[13px] text-[#8e8574]">
            No guests registered yet.
          </p>
        )}
        {guests.map((guest, index) => (
          <div
            key={guest.id}
            className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#faf6f8] font-sans text-[11px] text-[#8e8574]">
                {index + 1}
              </span>
              <div>
                <p className="font-sans text-[14px] font-medium text-[#2d2d2b]">
                  {guest.firstName} {guest.lastName}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-[1px] text-[#b0a893]">
                  {new Date(guest.registeredAt).toLocaleDateString('hy-AM', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 font-sans text-[10px] uppercase tracking-[1.5px] ${
                guest.attending
                  ? 'bg-[#eef5ec] text-[#5a7a50]'
                  : 'bg-[#fdf0f0] text-[#b85c5c]'
              }`}
            >
              {guest.attending ? 'Coming' : 'Not coming'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
