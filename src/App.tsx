import { useState, useEffect } from 'react'
import { InvitationPage } from './invitation/InvitationPage'
import { AdminPanel } from './pages/AdminPanel'

export function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handler = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  if (hash === '#admin') return <AdminPanel />
  return <InvitationPage />
}
