'use client'
/* eslint-disable @next/next/no-img-element */

import { useState, type ReactNode } from 'react'
import { INVITATION_IMAGES, MAPS_URL } from './constants'

function TopNav() {
  return (
    <div
      className="absolute left-0 top-0 z-10 flex w-full flex-col items-center backdrop-blur-[6px] bg-[rgba(250,249,246,0.4)]"
      data-name="Top Navigation Shell"
    >
      <div className="flex w-full max-w-[1536px] items-start justify-center px-8 py-8">
        <p
          className="font-serif text-[14px] uppercase leading-5 tracking-[4.2px] text-[#5c4e30]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Ս & Ա
        </p>
      </div>
    </div>
  )
}

function IntroSection() {
  return (
    <section
      className="flex w-full flex-col items-center px-8 pb-12"
      data-name="Section 1: Intro & Rings"
    >
      <div className="flex flex-col items-start pb-16">
        <div className="relative h-[51px] w-9 shrink-0">
          <img
            alt=""
            className="block size-full max-w-none"
            src={INVITATION_IMAGES.ringIcon}
          />
        </div>
      </div>
      <div className="flex flex-col items-center pb-16">
        <h1
          className="text-center font-serif text-[30px] font-normal leading-9 tracking-[-0.75px] text-[#2d2d2b]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          Սարգիս և Ալյոնա
        </h1>
      </div>
      <div className="mx-auto flex w-full max-w-[326px] flex-col gap-8 text-center">
        <p className="font-sans text-[13px] font-normal leading-5 tracking-[0.13px] text-[#3a2f1b]">
          Սերը լուռ եկավ, բայց սրտում դարձավ ամենաբարձր ձայնը...
        </p>
        <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-[#2d2924]">
          Մեր սերը սկսվեց որպես գեղեցիկ զգացում, իսկ այսօր դառնում է խոստում`
          լինելու միասին, միշտ ու անվերջ...
        </p>
        <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-[#2d2924]">
          Այս հատուկ ու կախարդական օրը ուզում ենք կիսել հենց Ձեզ հետ, քանի որ
          Ձեր ներկայությունն է մեր երջանկությունը դարձնում ամբողջական։
        </p>
        <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-[#2d2d2b]">
          Սիրով հրավիրում ենք Ձեզ մեր նշանադրության արարողությանը։
        </p>
        <p className="font-sans text-[16px] italic leading-6 tracking-[0.13px] text-[#4a3e21]">
          Սիրով` Սարգիս և Ալյոնա
        </p>
      </div>
    </section>
  )
}

function DetailBlock(props: {
  icon: string
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative h-[15px] w-[13px] shrink-0">
        <img alt="" className="block size-full max-w-none object-contain" src={props.icon} />
      </div>
      <div className="flex flex-col items-start pt-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center font-[family-name:var(--font-label)] text-[9px] font-normal uppercase leading-[13.5px] tracking-[2.7px] text-[#5c5347]">
            {props.label}
          </p>
          <div className="flex flex-col items-center gap-1">{props.children}</div>
        </div>
      </div>
    </div>
  )
}

function EventDetailsSection() {
  return (
    <section
      className="w-full bg-[#faf6f8] px-8 pb-[60px]"
      data-name="Section 2: Event Details"
    >
      <div className="mx-auto flex max-w-[384px] flex-col gap-[20px]">
        <DetailBlock icon={INVITATION_IMAGES.iconCalendar} label="Ամսաթիվ">
          <p className="text-center font-sans text-[18px] leading-7 text-[#2d2d2b]">
            Շաբաթ, մայիսի 26, 2026
          </p>
        </DetailBlock>
        <DetailBlock icon={INVITATION_IMAGES.iconClock} label="Ժամ">
          <p
            className="text-center font-serif text-[18px] leading-7 text-[#2d2d2b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            17:30
          </p>
        </DetailBlock>
        <DetailBlock icon={INVITATION_IMAGES.iconLocation} label="Վայր">
          <p
            className="text-center font-serif text-[18px] leading-7 text-[#2d2d2b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Մկրտչյանս Հոլ
          </p>
          <p className="text-center font-sans text-[11px] uppercase leading-[16.5px] tracking-[0.275px] text-[#2d2924]">
            ք. Մասիս, Էջմիածնի խճուղի 2/10
          </p>
        </DetailBlock>
      </div>
    </section>
  )
}

function PhotosSection() {
  return (
    <section
      className="flex w-full max-w-[448px] flex-col gap-16"
      data-name="Section 3: Editorial Photography"
    >
      <div className="w-full">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f7f6f2]">
          <div className="relative h-full w-full opacity-90">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Սարգիս և Ալյոնա"
                className="absolute inset-0 size-full max-w-none object-cover object-center"
                src={INVITATION_IMAGES.couplePortrait}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.3)] mix-blend-saturation" />
          </div>
        </div>
      </div>
      <div className="relative flex w-full justify-end">
        <div className="relative -mt-24 h-[148px] w-[244px] sm:h-[148.5px] sm:w-[244.5px]">
          <div className="absolute left-0 right-0 top-[-96px] aspect-square overflow-hidden bg-[#f7f6f2]">
            <div className="relative h-[244.5px] w-full opacity-90">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt="Զույգի լուսանկար"
                  className="absolute left-0 top-0 size-full max-w-none object-cover"
                  src={INVITATION_IMAGES.coupleDetail}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.2)] mix-blend-saturation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaButton() {
  return (
    <a
      className="flex h-[45px] w-full max-w-[260px] shrink-0 items-center justify-center rounded-[80px] border border-[rgba(140,122,77,0.3)] px-px py-[17px]"
      href={MAPS_URL}
      rel="noreferrer"
      target="_blank"
      data-name="Section - Call to Action -> Button"
    >
      <span className="text-center font-sans text-[10px] font-normal uppercase leading-[15px] tracking-[2.5px] text-[#4a3e21]">
        ՀԱՍՑԵ
      </span>
    </a>
  )
}

function FooterBlock() {
  return (
    <footer
      className="flex w-full flex-col items-center gap-10 px-8 pb-8"
      data-name="Footer Shell"
    >
      <div>
        <p
          className="font-serif text-[12px] leading-4 tracking-[1.2px] text-[#5c4e30]"
          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
        >
          Ս & Ա
        </p>
      </div>
      <div className="pt-4">
        <p className="font-sans text-[8px] uppercase leading-3 tracking-[2.4px] text-[#4a3e21]">
          ՍԱՐԳԻՍ ԵՎ ԱԼՅՈՆԱ
        </p>
      </div>
    </footer>
  )
}

function RsvpSection() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [attending, setAttending] = useState<boolean | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const canSubmit =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    attending !== null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), lastName: lastName.trim(), attending }),
      })
      let data: { error?: string } | null = null

      try {
        data = (await res.json()) as { error?: string }
      } catch {
        data = null
      }

      if (!res.ok) {
        if (data?.error === 'already_registered') {
          setErrorMsg('Դուք արդեն գրանցված եք')
        } else if (data?.error === 'storage_not_configured') {
          setErrorMsg('\u0533\u0580\u0561\u0576\u0581\u0578\u0582\u0574\u0578\u0582\u0576\u0568 \u056a\u0561\u0574\u0561\u0576\u0561\u056f\u0561\u057e\u0578\u0580\u0561\u057a\u0565\u057d \u0570\u0561\u057d\u0561\u0576\u0565\u056c\u056b \u0579\u0567')
        } else if (res.status === 400) {
          setErrorMsg('\u053c\u0580\u0561\u0581\u0580\u0565\u0584 \u0562\u0578\u056c\u0578\u0580 \u0564\u0561\u0577\u057f\u0565\u0580\u0568')
        } else {
          setErrorMsg('Սխալ տեղի ունեցավ')
        }
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Կապի խնդիր կա')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="w-full bg-[#faf6f8] px-8 pb-16 pt-8">
        <div className="mx-auto flex max-w-[326px] flex-col items-center gap-4 text-center">
          <div className="h-px w-16 bg-[rgba(140,122,77,0.3)]" />
          <p
            className="font-serif text-[22px] text-[#2d2d2b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Շնորհակալություն
          </p>
          <p className="font-sans text-[13px] leading-5 text-[#2d2924]">
            {attending
              ? 'Ուրախ ենք, որ կգաք։ Անհամբեր սպասում ենք Ձեզ։'
              : 'Հասկանում ենք։ Ուրախ կլինենք տեսնել Ձեզ հաջորդ անգամ։'}
          </p>
          <div className="h-px w-16 bg-[rgba(140,122,77,0.3)]" />
        </div>
      </section>
    )
  }

  return (
    <section className="w-full bg-[#faf6f8] px-8 pb-16 pt-4">
      <div className="mx-auto flex max-w-[326px] flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="h-px w-16 bg-[rgba(140,122,77,0.3)]" />
          <p
            className="font-serif text-[18px] font-normal tracking-[-0.3px] text-[#2d2d2b]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Հաստատեք մասնակցությունը
          </p>
          <p className="font-sans text-[11px] leading-5 text-[#5c5347]">
            Խնդրում ենք պատասխանել մինչև մայիսի 10-ը
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-3">
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Անուն"
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              className="w-full rounded-2xl border border-[rgba(140,122,77,0.25)] bg-white px-4 py-3.5 font-sans text-[14px] text-[#2d2d2b] placeholder-[#c4bbaa] outline-none focus:border-[rgba(140,122,77,0.6)] focus:ring-0"
            />
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Ազգանուն"
              value={lastName}
              onChange={e => {
                setLastName(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              className="w-full rounded-2xl border border-[rgba(140,122,77,0.25)] bg-white px-4 py-3.5 font-sans text-[14px] text-[#2d2d2b] placeholder-[#c4bbaa] outline-none focus:border-[rgba(140,122,77,0.6)] focus:ring-0"
            />
          </div>

          <div className="flex gap-3">
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => {
                setAttending(true)
                if (status === 'error') setStatus('idle')
              }}
              className={`flex-1 rounded-2xl border py-3.5 font-sans text-[12px] uppercase tracking-[2px] transition-colors ${
                attending === true
                  ? 'border-[#6f5d32] bg-[#6f5d32] text-white'
                  : 'border-[rgba(140,122,77,0.3)] bg-white text-[#4a3e21]'
              }`}
            >
              Կգամ
            </button>
            <button
              suppressHydrationWarning
              type="button"
              onClick={() => {
                setAttending(false)
                if (status === 'error') setStatus('idle')
              }}
              className={`flex-1 rounded-2xl border py-3.5 font-sans text-[12px] uppercase tracking-[2px] transition-colors ${
                attending === false
                  ? 'border-[#6f5d32] bg-[#6f5d32] text-white'
                  : 'border-[rgba(140,122,77,0.3)] bg-white text-[#4a3e21]'
              }`}
            >
              Չեմ գա
            </button>
          </div>

          {status === 'error' && (
            <p className="text-center font-sans text-[12px] text-[#b85c5c]">{errorMsg}</p>
          )}

          <button
            suppressHydrationWarning
            type="submit"
            disabled={!canSubmit || status === 'loading'}
            className="mt-1 flex h-[45px] w-full items-center justify-center rounded-[80px] border border-[rgba(140,122,77,0.3)] font-sans text-[10px] uppercase tracking-[2.5px] text-[#4a3e21] transition-opacity disabled:opacity-40"
          >
            {status === 'loading' ? '...' : 'Հաստատել'}
          </button>
        </form>
      </div>
    </section>
  )
}

export function InvitationPage() {
  return (
    <div
      className="relative mx-auto flex min-h-screen w-full max-w-[390px] flex-col items-center bg-[#faf6f8]"
      data-name="Body"
      data-node-id="1:2"
    >
      <TopNav />
      <main className="flex w-full shrink-0 flex-col items-center pb-12 pt-32">
        <IntroSection />
        <EventDetailsSection />
        <div className="flex w-full max-w-[326px] flex-col items-center gap-16 px-0">
          <PhotosSection />
          <CtaButton />
        </div>
        <RsvpSection />
      </main>
      <FooterBlock />
    </div>
  )
}
