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

  useEffect(() => {
    fetch('/api/guests')
      .then(r => r.json())
      .then(data => {
        setGuests(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Չհաջողվեց բեռնել տվյալները')
        setLoading(false)
      })
  }, [])

  const coming = guests.filter(g => g.attending).length
  const notComing = guests.filter(g => !g.attending).length

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#faf6f8]">
      <div className="bg-[#faf6f8] px-6 pb-4 pt-10">
        <p
          className="mb-1 text-center font-serif text-[11px] uppercase tracking-[4px] text-[rgba(92,78,48,0.6)]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Ս և Ա
        </p>
        <h1
          className="text-center font-serif text-[22px] font-normal tracking-[-0.5px] text-[#2d2d2b]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Ադմին վահանակ
        </h1>
        <p className="mt-1 text-center font-sans text-[11px] uppercase tracking-[2px] text-[#8e8574]">
          Ռեեստրի ցուցակ
        </p>
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
            Ընդամենը
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
            Կգա
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
            Չի գա
          </span>
        </div>
      </div>

      <div className="mx-6 mb-4 h-px bg-[rgba(140,122,77,0.15)]" />

      <div className="flex flex-col gap-2 px-6 pb-10">
        {loading && (
          <p className="mt-8 text-center font-sans text-[13px] text-[#8e8574]">
            Բեռնվում է...
          </p>
        )}
        {error && (
          <p className="mt-8 text-center font-sans text-[13px] text-[#b85c5c]">
            {error}
          </p>
        )}
        {!loading && !error && guests.length === 0 && (
          <p className="mt-8 text-center font-sans text-[13px] text-[#8e8574]">
            Դեռ գրանցված հյուրեր չկան
          </p>
        )}
        {guests.map((guest, i) => (
          <div
            key={guest.id}
            className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#faf6f8] font-sans text-[11px] text-[#8e8574]">
                {i + 1}
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
              {guest.attending ? 'Կգա' : 'Չի գա'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
