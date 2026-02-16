import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Content Free | Study Mondo',
  description: 'Study Mondo is committed to keeping all educational content free for every student.',
}

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Hero */}
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
            Everything Is Free!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We believe every student deserves access to quality study materials.
            All 24 courses, 700+ topics, flashcards, interactive lessons, and practice
            problems are completely free — no hidden paywalls.
          </p>

          {/* Features */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              { icon: '📚', title: 'All Courses', desc: '24 courses from Grade 4 through AP and test prep' },
              { icon: '🎯', title: 'Interactive Lessons', desc: 'Step-by-step lessons with built-in exercises' },
              { icon: '🎴', title: 'Spaced Repetition', desc: 'SM-2 powered flashcards for every topic' },
              { icon: '📝', title: 'Practice Problems', desc: 'Hundreds of problems with full solutions' },
              { icon: '🎮', title: 'Competitive Mode', desc: 'Challenge AI opponents or other students' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Dashboard, streaks, and mastery tracking' },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
            >
              Start Learning →
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Funding note */}
          <p className="mt-12 text-sm text-gray-500 max-w-lg mx-auto">
            Study Mondo is supported by non-intrusive advertisements, allowing us to
            keep all educational content free forever.
          </p>
        </div>
      </div>
    </div>
  )
}
