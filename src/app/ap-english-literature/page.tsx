import Link from 'next/link'
import CourseUniqueIntro from '@/components/CourseUniqueIntro'
import { courseJsonLd } from '@/lib/jsonld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Literature | Free Practice & Review',
  description:
    'Master AP English Literature with interactive lessons, analysis practice, FRQ preparation, and study plans — free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/ap-english-literature',
  },
  openGraph: {
    title: 'AP English Literature | Free Practice & Review',
    description:
      'Interactive lessons on prose fiction, poetry, drama, figurative language, and literary analysis techniques.',
    url: 'https://www.studymondo.com/ap-english-literature',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every AP Eng Lit unit with practice problems and exit quizzes.',
    href: '/courses/ap-english-literature',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: '100+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all units to identify your strengths and weak areas.',
    href: '/ap-english-lit-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'Unit Tests',
    description: 'Drill a single AP unit at a time. 6 units · 4 different variations each — perfect for end-of-unit review.',
    href: '/ap-english-lit-unit-tests',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" />
      </svg>
    ),
    color: 'from-violet-500 to-fuchsia-500',
    stats: '6 units · 4 variations',
  },
  {
    title: 'Flashcards',
    description: 'Review key terms and concepts with spaced-repetition flashcards.',
    href: '/flashcards?course=ap-english-literature',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-500',
    stats: 'Key terms · Definitions',
  },
  {
    title: 'Daily Question',
    description: 'A fresh question every day covering different units. Build consistency with daily practice.',
    href: '/ap-english-lit-daily-question',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: 'New daily · All units',
  },
  {
    title: 'Study Plans',
    description: 'Structured 4, 10, or 16-week study schedules tailored to your timeline.',
    href: '/ap-english-lit-study-plans',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-cyan-500 to-blue-500',
    stats: '3 plans · Auto-scheduled',
  },
  {
    title: 'Score Predictor',
    description: 'Estimate your AP score based on your practice performance and study habits.',
    href: '/ap-english-lit-score-predictor',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-500',
    stats: 'AI-powered · Personalized',
  },
  {
    title: 'FRQ Practice',
    description: 'Practice free-response questions with rubrics and timed exam simulation.',
    href: '/ap-english-lit-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: 'FRQs · Auto-graded · Timed',
  },
  {
    title: 'Full-Length Practice Exam',
    description: 'Complete AP English Literature exam simulation: 55 MCQ (60 min) across 5 passages + 3 essays (Poetry Analysis, Prose Fiction Analysis, Literary Argument; 120 min).',
    href: '/ap-english-lit-practice',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    color: 'from-rose-500 to-pink-500',
    stats: '55 MCQ + 3 Essays · 3 hours · Timed',
  },]

const units = [
  {
    title: 'Unit 1: Short Fiction I — Character & Setting',
    topics: ['Character Development', 'Setting & Atmosphere', 'Narrative Distance', 'Conflict & Motivation'],
    color: 'rose',
  },
  {
    title: 'Unit 2: Short Fiction II — Narration',
    topics: ['Point of View', 'Narrative Reliability', 'Stream of Consciousness', 'Frame Narratives'],
    color: 'pink',
  },
  {
    title: 'Unit 3: Short Fiction III — Complexity',
    topics: ['Ambiguity & Interpretation', 'Theme & Meaning', 'Irony & Satire', 'Symbolism in Fiction'],
    color: 'fuchsia',
  },
  {
    title: 'Unit 4: Poetry I — Imagery & Figure',
    topics: ['Imagery & Figurative Language', 'Metaphor & Simile', 'Personification', 'Allusion'],
    color: 'blue',
  },
  {
    title: 'Unit 5: Poetry II — Structure',
    topics: ['Poetic Structure & Form', 'Meter & Rhythm', 'Stanza & Line Breaks', 'Sound Devices'],
    color: 'indigo',
  },
  {
    title: 'Unit 6: Poetry III — Speaker & Tone',
    topics: ['Speaker & Voice', 'Tone & Mood', 'Shifts & Contrasts', 'Poetic Argument'],
    color: 'violet',
  },
  {
    title: 'Unit 7: Longer Fiction & Drama I',
    topics: ['Novel Analysis', 'Dramatic Structure', 'Character Arcs', 'Social Commentary'],
    color: 'green',
  },
  {
    title: 'Unit 8: Longer Fiction & Drama II',
    topics: ['Symbol & Motif', 'Narrative Complexity', 'Tragedy & Comedy', 'Thematic Development'],
    color: 'teal',
  },
  {
    title: 'Unit 9: Exam Skills & Synthesis',
    topics: ['Prose Fiction Analysis Essay', 'Poetry Analysis Essay', 'Literary Argument Essay', 'Timed Writing Strategies'],
    color: 'purple',
  },
]

const unitColors: Record<string, string> = {
  rose: 'text-rose-700 dark:text-rose-400',
  pink: 'text-pink-700 dark:text-pink-400',
  fuchsia: 'text-fuchsia-700 dark:text-fuchsia-400',
  blue: 'text-blue-700 dark:text-blue-400',
  indigo: 'text-indigo-700 dark:text-indigo-400',
  violet: 'text-violet-700 dark:text-violet-400',
  green: 'text-green-700 dark:text-green-400',
  teal: 'text-teal-700 dark:text-teal-400',
  purple: 'text-purple-700 dark:text-purple-400',
}

const checkColors: Record<string, string> = {
  rose: 'text-rose-500',
  pink: 'text-pink-500',
  fuchsia: 'text-fuchsia-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  violet: 'text-violet-500',
  green: 'text-green-500',
  teal: 'text-teal-500',
  purple: 'text-purple-500',
}

export default function ApEnglishLiteratureHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd({
        title: 'AP English Literature',
        description: metadata.description as string,
        slug: 'ap-english-literature',
      })) }}
    />
      {/* Hero */}
      <CourseUniqueIntro slug="ap-english-literature" />
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              AP English Literature
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Interactive lessons on prose fiction, poetry, drama, figurative language, and literary analysis techniques.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ap-english-lit-diagnostic"
              className="rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/courses/ap-english-literature"
              className="rounded-xl border-2 border-rose-300 px-8 py-3.5 text-lg font-semibold text-rose-700 transition hover:bg-rose-50 dark:border-rose-600 dark:text-rose-400 dark:hover:bg-rose-900/20"
            >
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map(f => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${f.color}`}>
                    {f.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-400">{f.stats}</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Units Covered */}
      <section className="container pb-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            What&apos;s Covered
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {units.map(u => (
              <div key={u.title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 className={`mb-4 text-lg font-bold ${unitColors[u.color]}`}>{u.title}</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {u.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <svg className={`h-4 w-4 shrink-0 ${checkColors[u.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Info */}
      <section className="container pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            About the AP English Literature Exam
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 55 MCQs in 60 minutes</li>
                <li>• Section II: 3 FRQs in 120 minutes</li>
                <li>• Prose fiction analysis, poetry analysis, literary argument</li>
                <li>• Total exam time: 3 hours</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Score range: 1–5</li>
                <li>• 5 = Extremely well qualified</li>
                <li>• ~7% of students score a 5</li>
                <li>• No penalty for guessing</li>
                <li>• Most colleges accept 4+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/ap-english-lit-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
            >
              Get Started Free
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
