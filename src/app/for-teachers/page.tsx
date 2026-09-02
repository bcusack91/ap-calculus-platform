import { Metadata } from 'next'
import Link from 'next/link'
import { TeacherActivateCTA } from '@/components/TeacherActivateCTA'
import { COURSE_COUNT } from '@/lib/site-stats'
import { Users, ClipboardList, Target, Repeat, UserPlus, Gamepad2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Teachers | Study Mondo — Free classroom tools',
  description:
    'Run your class on Study Mondo for free: rosters, a real gradebook, standards-mastery by AP unit / SAT domain, one-click remediation, co-teachers, and live review games. No ads, built for student privacy.',
  alternates: { canonical: 'https://www.studymondo.com/for-teachers' },
}

const FEATURES = [
  { Icon: Users, title: 'Classrooms in seconds', body: 'Share a join code or link, or bulk-import your whole roster by CSV.' },
  { Icon: ClipboardList, title: 'A real gradebook', body: 'Scores from every assignment flow into a live, CSV-exportable gradebook.' },
  { Icon: Target, title: 'Standards mastery', body: 'Class mastery grouped by official AP unit, SAT domain, or MCAT category.' },
  { Icon: Repeat, title: 'One-click remediation', body: 'See exactly which topics failed and assign targeted review in one click.' },
  { Icon: UserPlus, title: 'Co-teachers', body: 'Share a class with another teacher while owner-only settings stay protected.' },
  { Icon: Gamepad2, title: 'Live review games', body: 'Run real-time, team-based review games students join from any device.' },
]

export default function ForTeachersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-gradient-br text-white">
        <div className="container py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-sm font-medium mb-5">
              Free for teachers — no ads, student-privacy first
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Everything you need to run your class
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Rosters, a real gradebook, standards-mastery, and one-click remediation across {COURSE_COUNT} courses
              from Grade 4 through AP, SAT/ACT, and MCAT — all free.
            </p>
            <TeacherActivateCTA />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, body }) => (
              <div key={title} className="bg-card rounded-2xl border border-card-border p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 dark:bg-gray-900/40 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">Get started in three steps</h2>
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              {[
                { n: '1', t: 'Activate your account', b: 'Confirm you’re an educator — teacher features turn on instantly, free.' },
                { n: '2', t: 'Add your class', b: 'Create a classroom and import your roster by code, link, or CSV.' },
                { n: '3', t: 'Assign & track', b: 'Post assignments and watch mastery, gradebook, and remediation update live.' },
              ].map((s) => (
                <div key={s.n}>
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mb-4">{s.n}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.t}</h3>
                  <p className="text-sm text-muted-foreground">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy / bottom CTA */}
      <section className="bg-brand-gradient-br text-white">
        <div className="container py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-3">Built for schools</h2>
            <p className="text-white/90 mb-2">
              No ads, no selling student data. We’re glad to sign a Data Privacy Agreement with your district.
            </p>
            <p className="text-sm text-white/80 mb-8">
              See our <Link href="/security" className="underline hover:text-white">Security &amp; Student Data Privacy</Link> and{' '}
              <Link href="/dpa" className="underline hover:text-white">DPA</Link> pages.
            </p>
            <TeacherActivateCTA />
          </div>
        </div>
      </section>
    </div>
  )
}
