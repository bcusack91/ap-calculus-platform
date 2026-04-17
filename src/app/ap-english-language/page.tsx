import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AP English Language | Free Practice & Review',
  description:
    'Comprehensive AP English Language preparation with rhetoric lessons, argument practice, and study plans — free for all students.',
  alternates: {
    canonical: 'https://www.studymondo.com/ap-english-language',
  },
  openGraph: {
    title: 'AP English Language | Free Practice & Review',
    description:
      'Interactive lessons on rhetorical analysis, argumentation, synthesis, and persuasive writing techniques.',
    url: 'https://www.studymondo.com/ap-english-language',
  },
}

const features = [
  {
    title: 'Interactive Lessons',
    description: 'Step-by-step lessons covering every AP Eng Lang unit with practice problems and exit quizzes.',
    href: '/courses/ap-english-language',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-cyan-500 to-teal-500',
    stats: '100+ lessons · All units',
  },
  {
    title: 'Diagnostic Test',
    description: 'Quick assessment across all units to identify your strengths and weak areas.',
    href: '/ap-english-lang-diagnostic',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-500',
    stats: '~35 questions · 30 min',
  },
  {
    title: 'Flashcards',
    description: 'Review key terms and concepts with spaced-repetition flashcards.',
    href: '/flashcards?course=ap-english-language',
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
    href: '/ap-english-lang-daily-question',
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
    href: '/ap-english-lang-study-plans',
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
    href: '/ap-english-lang-score-predictor',
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
    href: '/ap-english-lang-frq',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: 'from-indigo-500 to-violet-500',
    stats: 'FRQs · Auto-graded · Timed',
  },]

const units = [
  {
    title: 'Unit 1: Rhetorical Situation (Reading)',
    topics: ['SOAPSTone Analysis', 'Purpose & Audience', 'Exigence & Context', 'Appeals & Rhetorical Choices'],
    color: 'cyan',
  },
  {
    title: 'Unit 2: Rhetorical Situation (Writing)',
    topics: ['Writing for an Audience', 'Establishing Purpose', 'Strategic Choices', 'Genre Conventions'],
    color: 'teal',
  },
  {
    title: 'Unit 3: Claims & Evidence (Reading)',
    topics: ['Identifying Claims', 'Evaluating Evidence', 'Types of Support', 'Source Credibility'],
    color: 'blue',
  },
  {
    title: 'Unit 4: Claims & Evidence (Writing)',
    topics: ['Developing a Thesis', 'Selecting Evidence', 'Commentary & Analysis', 'Integrating Sources'],
    color: 'indigo',
  },
  {
    title: 'Unit 5: Reasoning & Organization (Reading)',
    topics: ['Line of Reasoning', 'Methods of Development', 'Logical Fallacies', 'Counterargument'],
    color: 'green',
  },
  {
    title: 'Unit 6: Reasoning & Organization (Writing)',
    topics: ['Organizing an Argument', 'Transitions', 'Cohesion & Coherence', 'Structuring Paragraphs'],
    color: 'emerald',
  },
  {
    title: 'Unit 7: Style (Reading)',
    topics: ['Diction & Word Choice', 'Syntax & Sentence Structure', 'Tone & Voice', 'Ethos, Pathos, Logos'],
    color: 'violet',
  },
  {
    title: 'Unit 8: Style (Writing)',
    topics: ['Developing Voice', 'Strategic Syntax', 'Rhetorical Devices', 'Audience Awareness'],
    color: 'purple',
  },
  {
    title: 'Unit 9: Developing a Complex Argument',
    topics: ['Synthesis Essay', 'Rhetorical Analysis Essay', 'Argument Essay', 'Timed Writing Strategies'],
    color: 'rose',
  },
]

const unitColors: Record<string, string> = {
  cyan: 'text-cyan-700 dark:text-cyan-400',
  teal: 'text-teal-700 dark:text-teal-400',
  blue: 'text-blue-700 dark:text-blue-400',
  indigo: 'text-indigo-700 dark:text-indigo-400',
  green: 'text-green-700 dark:text-green-400',
  emerald: 'text-emerald-700 dark:text-emerald-400',
  violet: 'text-violet-700 dark:text-violet-400',
  purple: 'text-purple-700 dark:text-purple-400',
  rose: 'text-rose-700 dark:text-rose-400',
}

const checkColors: Record<string, string> = {
  cyan: 'text-cyan-500',
  teal: 'text-teal-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  green: 'text-green-500',
  emerald: 'text-emerald-500',
  violet: 'text-violet-500',
  purple: 'text-purple-500',
  rose: 'text-rose-500',
}

export default function ApEnglishLanguageHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="container py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Free for All Students
          </div>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Master{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              AP English Language
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
            Interactive lessons on rhetorical analysis, argumentation, synthesis, and persuasive writing techniques.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ap-english-lang-diagnostic"
              className="rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Start with Diagnostic
            </Link>
            <Link
              href="/courses/ap-english-language"
              className="rounded-xl border-2 border-cyan-300 px-8 py-3.5 text-lg font-semibold text-cyan-700 transition hover:bg-cyan-50 dark:border-cyan-600 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
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
                <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
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
            About the AP English Language Exam
          </h2>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Format</h4>
              <ul className="space-y-1">
                <li>• Section I: 45 MCQs in 60 minutes</li>
                <li>• Section II: 3 FRQs in 135 minutes</li>
                <li>• Synthesis, rhetorical analysis, and argument essays</li>
                <li>• Total exam time: 3 hours 15 minutes</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Scoring</h4>
              <ul className="space-y-1">
                <li>• Score range: 1–5</li>
                <li>• 5 = Extremely well qualified</li>
                <li>• ~10% of students score a 5</li>
                <li>• No penalty for guessing</li>
                <li>• Most colleges accept 3+</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/ap-english-lang-diagnostic"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 px-8 py-3 font-semibold text-white shadow transition hover:shadow-lg"
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
