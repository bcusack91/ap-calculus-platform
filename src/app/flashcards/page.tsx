import Link from 'next/link'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'
import StudyModeSwitcher from '@/components/StudyModeSwitcher'
import { Layers, ChevronDown } from 'lucide-react'
import { FLASHCARD_UNLOCK_RULE, topicFlashcardBrowseHref, topicFlashcardReviewHref } from '@/lib/flashcard-links'
import { courseCategoryLayout, coursesIn, excludedTopicsOf, INCLUDE_COURSE_NAMES } from '@/lib/course-includes'
import { groupByLayout, visibleTopics } from '@/lib/course-hub-sections'

export const revalidate = 3600 // ISR: revalidate every hour

export const metadata: Metadata = {
  title: 'Flashcards | Study Mondo',
  description: `Review flashcards across ${COURSE_COUNT} courses and ${TOPIC_COUNT_LABEL} topics. Powered by spaced repetition for optimal learning.`,
  alternates: {
    canonical: 'https://www.studymondo.com/flashcards',
  },
}

export default async function FlashcardsPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>
}) {
  const { course } = await searchParams

  // A course's deck includes the courses it contains (AP Calculus BC lists every
  // AB topic, by CED unit: src/lib/course-includes.ts).
  const dbCategories = await prisma.category.findMany({
    where: course ? { course: { slug: { in: coursesIn(course) } } } : undefined,
    include: {
      course: { select: { name: true, slug: true } },
      topics: {
        include: {
          _count: {
            select: { flashcards: true }
          }
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { order: 'asc' }
  }).catch((error) => {
    console.warn('Flashcard categories unavailable at build time; rendering empty list.', error)
    return []
  })

  // Legacy (308) and retired rows never show; nor do an included course's
  // excluded topics (BC leaves out the AB exam review).
  const excluded = course ? excludedTopicsOf(course) : []
  const shown = dbCategories.map((c) => ({
    ...c,
    topics: visibleTopics(c.topics).filter((t) => !excluded.includes(t.slug)),
  }))
  const layout = course ? courseCategoryLayout(course) : null
  const categories = layout
    ? (() => {
        const rows = shown.flatMap((c) => c.topics.map((t) => ({ ...t, categorySlug: c.slug, category: c })))
        return groupByLayout(layout, rows, (t) => t.categorySlug, (t) => t.order)
          .filter((g) => g.rows.length > 0)
          .map(({ section, rows: topics }) => ({
            id: section.key,
            name: section.name,
            icon: topics[0].category.icon,
            course: topics[0].category.course,
            topics,
          }))
      })()
    : shown

  const courseName = course
    ? dbCategories.find((c) => c.course.slug === course)?.course.name ?? INCLUDE_COURSE_NAMES[course] ?? null
    : null

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {courseName ? `${courseName} Flashcards` : 'Flashcards'}
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          {courseName
            ? `Review ${courseName} concepts with our smart spaced-repetition system!`
            : 'Review concepts with our smart spaced-repetition system!'}
        </p>
        {courseName && (
          <Link href="/flashcards" className="text-sm text-accent hover:underline mb-4 inline-block">
            ← View all flashcard categories
          </Link>
        )}

        <StudyModeSwitcher />

        {/* Quick Action Button */}
        <div className="mb-8">
          <Link
            href="/flashcards/review"
            className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            🎯 Start Review Session
          </Link>
          {/* Static copy (this page is ISR — no per-student reads): the unlock
              rule, so a student with an empty deck knows why. */}
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">How cards get into your deck:</span>{' '}
            {FLASHCARD_UNLOCK_RULE} &ldquo;Study&rdquo; rates a topic&apos;s unlocked cards; &ldquo;Browse&rdquo; lets you flip through every card.
          </p>
        </div>

        <div className="space-y-4 mt-8">
          {categories.length === 0 ? (
            <div className="mx-auto max-w-md rounded-xl bg-card border border-card-border p-10 text-center">
              <Layers className="mx-auto mb-4 h-10 w-10 text-accent dark:text-accent-muted" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground mb-2">No flashcards here yet</h2>
              <p className="text-muted-foreground mb-6">
                {course
                  ? "We haven't published flashcards for this course yet — browse other courses in the meantime."
                  : 'Flashcards are on the way. Browse our courses to start studying now.'}
              </p>
              <Link
                href="/topics"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg shadow-lg transition-all"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            categories.map((category) => (
              // Collapsible per-category sections keep the all-course catalog
              // scannable: collapsed by default when browsing everything, open
              // when filtered to a single course.
              <details key={category.id} open={Boolean(course)} className="group rounded-xl bg-card border border-card-border">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
                  {category.icon && <span className="text-3xl" aria-hidden>{category.icon}</span>}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {!course && `${category.course.name} · `}
                      {category.topics.length} {category.topics.length === 1 ? 'topic' : 'topics'}
                    </p>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                </summary>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-5 pb-5">
                  {category.topics.map((topic) => (
                    // "Study" opens the RATED session for this topic's
                    // unlocked cards; "Browse" is the read-only flip viewer.
                    <div
                      key={topic.id}
                      className="block rounded-xl bg-card border border-card-border p-6 hover:shadow-lg transition-all hover:border-accent-muted"
                    >
                      <h3 className="font-semibold mb-2">
                        <Link href={topicFlashcardReviewHref(topic.slug)} className="hover:text-accent transition-colors">
                          {topic.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {topic._count.flashcards} {topic._count.flashcards === 1 ? 'card' : 'cards'}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <Link href={topicFlashcardReviewHref(topic.slug)} className="text-accent hover:underline font-semibold">
                          Study now →
                        </Link>
                        <Link href={topicFlashcardBrowseHref(topic.slug)} className="text-muted-foreground hover:underline">
                          Browse cards
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))
          )}
        </div>

        {/* Ad placement after flashcard list */}
        <InArticleAd />

      </div>
    </div>
  )
}
