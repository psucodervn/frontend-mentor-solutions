'use client'

import { Manrope } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Dice from './_images/icon-dice.svg'
import DividerDestkop from './_images/pattern-divider-desktop.svg'
import DividerMobile from './_images/pattern-divider-mobile.svg'
import Loader from './_images/loader.svg'

const font = Manrope({
  subsets: ['latin'],
  weight: ['300', '500', '800'],
})

type Advice = {
  id: number
  advice: string
}

export default function Page() {
  const [advice, setAdvice] = useState<Advice | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  function getRandomAdvice() {
    setIsLoading(true)
    fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    })
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getRandomAdvice()
  }, [])

  return (
    <main
      className={`min-h-screen flex flex-col items-center bg-[#1D232C] ${font.className}`}
    >
      <div className="flex flex-col my-auto items-center w-screen p-4 text-center">
        <div className="flex flex-col items-center bg-[#2A333F] rounded-xl shadow-md drop-shadow-xl px-4 sm:px-8 py-8 pb-16 max-w-fit z-10 gap-6">
          {advice ? (
            <div className="relative">
              <div
                className="flex flex-col gap-4"
                style={{
                  filter: isLoading ? 'blur(4px)' : '',
                }}
              >
                <div className="uppercase tracking-[0.25rem] text-[#00FFA4] text-[10px] pt-2">
                  Advice #{advice.id}
                </div>
                <div className="text-[28px] text-white/80 max-w-[295px] sm:max-w-[444px] tracking-wider">
                  &quot;{advice.advice}&quot;
                </div>
              </div>
              <Image
                src={Loader}
                alt="loading"
                width={48}
                className="mx-auto absolute opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  display: isLoading ? 'block' : 'none',
                }}
              />
            </div>
          ) : (
            <Image
              src={Loader}
              alt="loading"
              width={48}
              className="mx-auto opacity-80"
            />
          )}
          <Image src={DividerMobile} alt="" className="sm:hidden" />
          <Image src={DividerDestkop} alt="" className="hidden sm:block" />
        </div>
        <button
          className="w-16 aspect-square rounded-full -mt-8 z-20 shadow-md drop-shadow-xl bg-[#00FFA4] hover:shadow-[0_0_20px_#00FFA4] transition-shadow ease-in-out"
          onClick={() => getRandomAdvice()}
          disabled={isLoading}
        >
          <Image src={Dice} alt="Dice" width={24} className="mx-auto z-40" />
        </button>
      </div>
    </main>
  )
}
