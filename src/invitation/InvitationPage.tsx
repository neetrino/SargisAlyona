import type { ReactNode } from 'react'
import { INVITATION_IMAGES, MAPS_URL } from './constants'

function TopNav() {
  return (
    <div
      className="absolute left-0 top-0 z-10 flex w-full flex-col items-center backdrop-blur-[6px] bg-[rgba(250,249,246,0.4)]"
      data-name="Top Navigation Shell"
    >
      <div className="flex w-full max-w-[1536px] items-start justify-center px-8 py-8">
        <p
          className="font-serif text-[14px] uppercase leading-5 tracking-[4.2px] text-[rgba(140,122,77,0.8)]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          S & A
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
          Sargis & Alyona
        </h1>
      </div>
      <div className="mx-auto flex w-full max-w-[326px] flex-col gap-8 text-center">
        <p className="font-sans text-[13px] font-light leading-5 tracking-[0.13px] text-[rgba(140,122,77,0.7)]">
          Սերը լուռ եկավ, բայց սրտում դարձավ ամենաբարձր ձայնը…
        </p>
        <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-[#6b6659]">
          Մեր սերը սկսվեց որպես գեղեցիկ զգացում, իսկ այսօր դառնում է խոստում՝ լինելու
          միասին, միշտ ու անվերջ…
        </p>
        <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-[#6b6659]">
          Այս հատուկ ու կախարդական օրը ուզում ենք կիսել հենց Ձեզ հետ, քանի որ Ձեր
          ներկայությունն է մեր երջանկությունը դարձնում ամբողջական
        </p>
        <p className="font-sans text-[13px] leading-5 tracking-[0.13px] text-[#2d2d2b]">
          Սիրով հրավիրում ենք Ձեզ մեր նշանադրության արարողությանը։
        </p>
        <p className="font-sans text-[16px] italic leading-6 tracking-[0.13px] text-[#8c7a4d]">
          Սիրով՝ Սարգիս & Ալյոնա
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
          <p className="text-center font-[family-name:var(--font-label)] text-[9px] font-normal uppercase leading-[13.5px] tracking-[2.7px] text-[#b0a896]">
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
        <DetailBlock icon={INVITATION_IMAGES.iconCalendar} label="Date">
          <p className="text-center font-sans text-[18px] leading-7 text-[#2d2d2b]">
            Շաբաթ, Ապրիլ 26, 2026
          </p>
        </DetailBlock>
        <DetailBlock icon={INVITATION_IMAGES.iconClock} label="Time">
          <p
            className="text-center font-serif text-[18px] leading-7 text-[#2d2d2b]"
            style={{ fontVariationSettings: "’CTGR’ 0, ‘wdth’ 100" }}
          >
            17:30
          </p>
        </DetailBlock>
        <DetailBlock icon={INVITATION_IMAGES.iconLocation} label="Location">
          <p
            className="text-center font-serif text-[18px] leading-7 text-[#2d2d2b]"
            style={{ fontVariationSettings: "’CTGR’ 0, ‘wdth’ 100" }}
          >
            Mkrtchyan’s Hall
          </p>
          <p className="text-center font-sans text-[11px] uppercase leading-[16.5px] tracking-[0.275px] text-[#6b6659]">
            Ք.Մասիս, Էջմիածնի խճուղի 2/10
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
                alt="Sargis and Alyona"
                className="absolute left-[-16.67%] top-0 h-full w-[133.33%] max-w-none"
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
                  alt="Couple detail"
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
      data-name="Section - Call to Action → Button"
    >
      <span className="text-center font-sans text-[10px] font-normal uppercase leading-[15px] tracking-[2.5px] text-[#8c7a4d]">
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
          className="font-serif text-[12px] leading-4 tracking-[1.2px] text-[rgba(140,122,77,0.6)]"
          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
        >
          S & A
        </p>
      </div>
      <div className="pt-4">
        <p className="font-sans text-[8px] uppercase leading-3 tracking-[2.4px] text-[rgba(176,168,150,0.6)]">
          SARGIS & ALYONA — MMXXIV
        </p>
      </div>
    </footer>
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
      <main className="flex w-full shrink-0 flex-col items-center pb-40 pt-32">
        <IntroSection />
        <EventDetailsSection />
        <div className="flex w-full max-w-[326px] flex-col items-center gap-16 px-0">
          <PhotosSection />
          <CtaButton />
        </div>
      </main>
      <FooterBlock />
    </div>
  )
}
