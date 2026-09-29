import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, LifeBuoy, School } from 'lucide-react'
import { HELP_ARTICLE_LIST, type HelpAudience } from '@/data/help/articles'
import { HELP_ARTICLES, helpHref } from '@/data/help/slugs'
import { breadcrumbJsonLd } from '@/lib/jsonld'
import { HelpContact } from './_components/HelpContact'

// Pure static content: no session, no database, so Next prerenders it.

export const metadata: Metadata = {
  title: 'Help Center | Study Mondo',
  description:
    'How StudyMondo works, in plain language. Getting-started guides for students and teachers, plus short answers about diagnostics, exit quizzes, flashcards and classes.',
  alternates: { canonical: 'https://www.studymondo.com/help' },
}

const PATHS = [
  {
    Icon: GraduationCap,
    title: 'I’m a student',
    body: 'Take a diagnostic, follow your study plan, and build a daily flashcard habit.',
    href: helpHref(HELP_ARTICLES.gettingStartedStudents),
    cta: 'Start here',
  },
  {
    Icon: School,
    title: 'I’m a teacher',
    body: 'Create a class, add students, give a diagnostic and see what your class needs.',
    href: helpHref(HELP_ARTICLES.gettingStartedTeachers),
    cta: 'Set up your class',
  },
] as const

const SECTIONS: { audience: HelpAudience; heading: string }[] = [
  { audience: 'student', heading: 'For students' },
  { audience: 'teacher', heading: 'For teachers' },
  { audience: 'everyone', heading: 'For everyone' },
]

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', url: '/' },
              { name: 'Help Center', url: '/help' },
            ]),
          ),
        }}
      />

      {/* Hero */}
      <section className="border-b border-accent-light bg-gradient-to-b from-accent-subtle to-white py-16 dark:from-accent-subtle dark:to-gray-950 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <LifeBuoy className="mx-auto mb-4 h-10 w-10 text-accent dark:text-accent-muted" aria-hidden />
            <h1 className="gradient-text-accessible bg-gradient-to-r from-accent to-accent-secondary text-4xl font-bold tracking-tight sm:text-5xl">
              Help Center
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
              How StudyMondo works, in plain language. Pick your path to get started.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 dark:bg-gray-950 sm:py-16">
        <div className="container max-w-4xl space-y-12">
          {/* Two paths */}
          <div className="grid gap-6 sm:grid-cols-2">
            {PATHS.map(({ Icon, title, body, href, cta }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="text-xl font-bold text-foreground">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:text-accent-hover dark:text-accent-muted">
                  {cta} <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>

          {/* All articles, grouped */}
          {SECTIONS.map(({ audience, heading }) => {
            const articles = HELP_ARTICLE_LIST.filter((a) => a.audience === audience)
            if (articles.length === 0) return null
            return (
              <div key={audience}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <BookOpen className="-mt-1 mr-1.5 inline h-5 w-5 text-accent" aria-hidden />
                  {heading}
                </h2>
                <ul className="divide-y divide-gray-200 rounded-2xl border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={helpHref(a.slug)}
                        className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-accent-subtle dark:hover:bg-accent-light/10"
                      >
                        <span>
                          <span className="block font-semibold text-gray-900 group-hover:text-accent dark:text-white dark:group-hover:text-accent-muted">
                            {a.title}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground">{a.description}</span>
                        </span>
                        <ArrowRight
                          className="mt-1 h-4 w-4 shrink-0 text-gray-400 group-hover:text-accent"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          <HelpContact />
        </div>
      </section>
    </div>
  )
}
