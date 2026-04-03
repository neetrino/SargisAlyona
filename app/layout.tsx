import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Սարգիս և Ալյոնա',
  description: 'Հարսանեկան հրավեր և մասնակցության հաստատում',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="hy">
      <body>{children}</body>
    </html>
  )
}
