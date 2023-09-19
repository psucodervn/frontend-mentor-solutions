import { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Image from 'next/image'

import qr from './_images/image-qr-code.png'
import './page.css'

const font = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'FM | QR Code Component',
}

export default function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${font.className}`}
    >
      <div className="min-h-screen flex items-center">
        <div className="bg-white p-3 text-center w-72 rounded-2xl gap-5 flex flex-col leading-5">
          <Image src={qr} alt="QR Code" className="rounded-xl" />
          <div className="text-xl font-semibold opacity-80 mt-1">
            Improve your front-end skills by building projects
          </div>
          <div className="text-md opacity-50 mb-6">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </main>
  )
}
