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
    status: ChallengeStatus.InProgress,
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-800">
      <div className="shadow-xl drop-shadow-xl rounded-xl bg-slate-900 text-white p-8">
        <ul className="flex flex-col">
          {challenges.map((chall, idx) => (
            <li key={chall.slug} className="p-3">
              <Link href={chall.slug} key={chall.slug} className="flex gap-2">
                <p>{idx + 1}.</p>
                <p className="hover:text-green-600 transition-all">
                  {chall.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
