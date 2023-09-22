'use client'

import { Overpass } from 'next/font/google'
import { useState } from 'react'

import IconStar from './_images/icon-star.svg'
import IllustrationThankYou from './_images/illustration-thank-you.svg'
import Image from 'next/image'

const font = Overpass({
  subsets: ['latin'],
  weight: ['200', '300', '700'],
})

export default function Page() {
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main
      className={`min-h-screen flex flex-col items-center bg-[#141518] ${font.className}`}
    >
      <div className="min-h-screen flex">
        <div className="my-auto flex flex-col bg-[#1E242B] w-[21rem] p-5 rounded-3xl shadow-lg drop-shadow-lg gap-4">
          {!submitted ? (
            <Prompt
              score={score}
              setScore={setScore}
              setSubmitted={setSubmitted}
            />
          ) : (
            <ThankYou score={score} />
          )}
        </div>
      </div>
    </main>
  )
}

function Prompt({
  score,
  setScore,
  setSubmitted,
}: {
  score: number
  setScore: (score: number) => void
  setSubmitted: (submitted: boolean) => void
}) {
  return (
    <>
      <div className="flex items-center place-content-center rounded-full w-10 aspect-square bg-[#212930]">
        <Image src={IconStar} alt="Star" width={14} />
      </div>
      <div className="text-white text-2xl">How did we do?</div>
      <div className="text-white/40 text-[15px] font-light">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div className="flex justify-between py-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Rating
            key={i}
            score={i}
            currentScore={score}
            onClick={() => setScore(i)}
          />
        ))}
      </div>
      <button
        className="bg-[#FF6B27] text-lime-100 text-xs tracking-widest hover:bg-white hover:text-[#FF6B27] p-[0.6rem] rounded-full transition-colors"
        onClick={() => setSubmitted(true)}
        disabled={score == 0}
      >
        SUBMIT
      </button>
    </>
  )
}

function Rating({
  score,
  currentScore,
  ...rest
}: {
  score: number
  currentScore: number
} & React.HTMLAttributes<HTMLButtonElement>) {
  const isSelected = score == currentScore

  return (
    <button
      className={`rounded-full pt-1 w-10 aspect-square text-sm font-bold hover:bg-[#FF6B27] hover:text-white transition-colors ${
        isSelected ? 'bg-[#6F7C8C] text-white' : 'bg-[#212930] text-white/30'
      }`}
      {...rest}
    >
      {score}
    </button>
  )
}

function ThankYou({ score }: { score: number }) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Image src={IllustrationThankYou} alt="Thank you" width={150} />
      <div className="my-2 p-2 px-4 pt-3 bg-[#222830] rounded-full text-[#FF6B27]/80 text-sm">
        You selected {score} out of 5
      </div>
      <div className="text-white text-2xl">Thank you!</div>
      <div className="text-white/50 text-sm text-center leading-6">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&#39;t hesitate to get in touch!
      </div>
    </div>
  )
}
