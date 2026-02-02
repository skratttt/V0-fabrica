import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Geist, Geist_Mono, Lora } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabrica Chile',
  description: 'Think Tank for Quality of Life & Decentralization',
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${lora.className} antialiased`}>
        {/* IMPORTANTE: Aquí NO ponemos Header ni Footer. 
            Dejamos que cada página decida. */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}