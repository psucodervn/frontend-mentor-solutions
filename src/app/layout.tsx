import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Frontend Mentor',
  description: 'All Frontend Mentor challenges in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
