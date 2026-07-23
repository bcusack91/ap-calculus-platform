import Link from 'next/link'
import { topicHubs } from '@/data/topic-hubs'

export default function TopicHubIndexPage() {
  const exams = Array.from(new Set(topicHubs.map((hub) => hub.exam)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 dark:from-gray-950 dark:to-gray-900">
      <div className="container max-w-6xl space-y-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-100">SEO Topic Hubs</p>
          <h1 className="mt-2 text-4xl font-extrabold">Study Mondo Topic Hubs</h1>
          <p className="mt-3 max-w-3xl text-cyan-50">
            Curated unit-level hub pages for AP Calculus, SAT, and AP Biology with fast links to diagnostics, practice, and daily questions.
          </p>
        </div>

        {exams.map((exam) => (
          <section key={exam} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{exam}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topicHubs.filter((hub) => hub.exam === exam).map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/hubs/${hub.slug}`}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-500 dark:hover:bg-cyan-900/20"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">{hub.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{hub.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
