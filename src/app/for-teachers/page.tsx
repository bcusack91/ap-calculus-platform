import { Metadata } from 'next'
import Link from 'next/link'
import { TeacherActivateCTA } from '@/components/TeacherActivateCTA'
import { COURSE_COUNT } from '@/lib/site-stats'

export const metadata: Metadata = {
  title: 'For Teachers | Study Mondo — Free classroom tools',
  description:
    'Run your class on Study Mondo for free: rosters, a real gradebook, standards-mastery by AP unit / SAT domain, one-click remediation, co-teachers, and live review games. No ads, built for student privacy.',
  alternates: { canonical: 'https://www.studymondo.com/for-teachers' },
}

const FEATURES = [
  { icon: '👩‍🏫', title: 'Classrooms in seconds', body: 'Create a class and share a join code, QR, or link. Bulk-import your whole roster by CSV or paste — accounts are pre-provisioned so students just sign in.' },
  { icon: '📒', title: 'A real gradebook', body: 'Assign interactive lessons, flashcards, quizzes, and practice. Scores flow into a live gradebook you can export to CSV.' },
  { icon: '🎯', title: 'Standards mastery', body: 'See class mastery grouped by the official AP unit / SAT domain / MCAT category, with exam weightings — not just raw scores.' },
  { icon: '🔁', title: 'One-click remediation', body: 'The Performance view surfaces exactly which topics students failed and assigns a targeted review lesson to the class in one click.' },
  { icon: '👥', title: 'Co-teachers', body: 'Share a class with another teacher — they can view the roster and teach, while owner-only settings stay protected.' },
  { icon: '⚔️', title: 'Live review games', body: 'Run a real-time, team-based review game your students join live from any device.' },
]

export default function ForTeachersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-sm font-medium mb-5">
            Free for teachers — no ads, student-privacy first
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything you need to run your class
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Rosters, a real gradebook, standards-mastery, and one-click remediation across {COURSE_COUNT} courses
            from Grade 4 through AP, SAT/ACT, and MCAT — all free.
          </p>
          <TeacherActivateCTA />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">Get started in three steps</h2>
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {[
              { n: '1', t: 'Activate your account', b: 'Confirm you’re an educator — teacher features turn on instantly, free.' },
              { n: '2', t: 'Add your class', b: 'Create a classroom and import your roster by code, link, or CSV.' },
              { n: '3', t: 'Assign & track', b: 'Post assignments and watch mastery, gradebook, and remediation update live.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-4">{s.n}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.t}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy / bottom CTA */}
      <section className="bg-gradient-to-br from-indigo-700 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Built for schools</h2>
          <p className="text-blue-100 mb-2">
            No ads, no selling student data. We’re glad to sign a Data Privacy Agreement with your district.
          </p>
          <p className="text-sm text-blue-200 mb-8">
            See our <Link href="/security" className="underline hover:text-white">Security &amp; Student Data Privacy</Link> and{' '}
            <Link href="/dpa" className="underline hover:text-white">DPA</Link> pages.
          </p>
          <TeacherActivateCTA />
        </div>
      </section>
    </div>
  )
}
