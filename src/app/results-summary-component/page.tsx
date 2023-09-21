import { Hanken_Grotesk } from 'next/font/google'
import './page.css'

const font = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

import data from './data.json'
import Image from 'next/image'

export default function Page() {
  return (
    <main
      className={`min-h-screen flex flex-col items-center ${font.className}`}
    >
      <div className="min-w-full md:min-w-0 md:flex md:my-auto md:shadow-2xl md:drop-shadow-2xl md:rounded-[2rem]">
        <Overview />
        <Summary />
      </div>
    </main>
  )
}

function Overview() {
  return (
    <div
      style={{
        background: 'linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%)',
      }}
      className="rounded-b-[2rem] md:rounded-[2rem] pt-4 md:pt-6 pb-10 px-10 flex flex-col justify-between gap-2 items-center text-white/95 md:w-80"
    >
      <div className="p-2 text-white/70 md:text-xl">Your Result</div>
      <div
        className="rounded-full w-40 h-40 md:w-44 md:h-44 flex flex-col items-center justify-center"
        style={{
          background:
            'linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0)',
        }}
      >
        <div className="text-6xl font-bold mt-4">76</div>
        <div className="mt-2 text-white/40">of 100</div>
      </div>
      <div className="text-2xl md:text-3xl pt-2 md:-mb-2">Great</div>
      <div className="text-white/60 text-center md:px-2">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  )
}

function Summary() {
  return (
    <div className="flex flex-col px-8 py-6 md:py-8 gap-6 justify-between md:w-80">
      <div className="text-lg font-semibold text-[#303b5a] px-1">Summary</div>
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <Score key={item.category} {...item} />
        ))}
      </div>
      <button className="rounded-full p-3 text-white/90 text-lg dark-gray-blue hover:bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9]">
        Continue
      </button>
    </div>
  )
}

function Score({
  category,
  icon,
  score,
}: {
  score: number
  category: string
  color?: string
  icon: string
}) {
  return (
    <div className={`flex items-center p-4 ${category} rounded-xl`}>
      <Image src={icon} width={20} height={20} alt={category} />
      <div className="title mx-3">{category}</div>
      <div className="ml-auto">
        <span>{score}</span>
        <span className="ml-2 text-slate-400">/ 100</span>
      </div>
    </div>
  )
}
