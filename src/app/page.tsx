import Link from 'next/link'

enum ChallengeStatus {
  NotStarted = 'not-started',
  InProgress = 'in-progress',
  Completed = 'completed',
}

const challenges = [
  {
    slug: '/qr-code-component',
    title: 'QR Code Component',
    status: ChallengeStatus.Completed,
  },
  {
    slug: '/results-summary-component',
    title: 'Results Summary Component',
    status: ChallengeStatus.Completed,
  },
  {
    slug: '/interactive-rating-component',
    title: 'Interactive Rating Component',
    status: ChallengeStatus.InProgress,
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-24 bg-slate-800">
      <div className="text-xl text-white p-4 shadow-xl drop-shadow-xl">
        <span className="text-green-600 font-bold text-xl mx-3">√</span>
        Completed Challenges
      </div>
      <div className="shadow-xl border-2 border-green-600 min-w-full sm:min-w-max sm:w-[30rem] drop-shadow-xl rounded-xl bg-slate-900 text-white p-4">
        <ul className="flex flex-col">
          {challenges.map((chall, idx) => (
            <li key={chall.slug} className="p-1 sm:p-2">
              <Link
                href={chall.slug}
                key={chall.slug}
                className="flex gap-3 hover:text-green-600 transition-all group"
              >
                <p className="w-6 text-right">{idx + 1}.</p>
                <p>
                  {chall.title}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-600"></span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
