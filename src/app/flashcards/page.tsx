import Link from 'next/link'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'
import StudyModeSwitcher from '@/components/StudyModeSwitcher'
import { ArrowRight, ChevronRight, Layers, PencilLine, Play } from 'lucide-react'
import { FLASHCARD_UNLOCK_RULE, topicFlashcardBrowseHref, topicFlashcardReviewHref } from '@/lib/flashcard-links'
import { courseCategoryLayout, coursesIn, excludedTopicsOf, INCLUDE_COURSE_NAMES } from '@/lib/course-includes'
import { groupByLayout, visibleTopics } from '@/lib/course-hub-sections'
import { areaOfCourse, flashcardCatalogHref, groupCoursesByArea, groupIntoUnits, subjectLayoutOf, subjectOfTopic, type DeckSubject } from '@/lib/flashcard-catalog'

/**
 * The flashcard catalog, one level per page (src/lib/flashcard-catalog.ts):
 *
 *   /flashcards                         content areas → courses
 *   /flashcards?course=<slug>           a course's units → card sets
 *   /flashcards?course=mcat-prep        MCAT sections → subjects
 *   /flashcards?course=…&subject=<key>  a subject's units → card sets
 *
 * A "set" is one topic's cards. Sets with no cards are not listed. Static
 * copy only (this page is ISR, so no per-student reads): "Study" opens the
 * rated session for a set's unlocked cards, "Browse" the flip-through viewer.
 */

export const revalidate = 3600 // ISR: revalidate every hour

export const metadata: Metadata = {
  title: 'Flashcards | Study Mondo',
  description: `Review flashcards across ${COURSE_COUNT} courses and ${TOPIC_COUNT_LABEL} topics. Powered by spaced repetition for optimal learning.`,
  alternates: {
    canonical: 'https://www.studymondo.com/flashcards',
  },
}

type SetRow = { id: string; slug: string; title: string; order: number; cards: number }
type Unit = { key: string; name: string; sets: SetRow[] }

const cardCount = (n: number) => `${n.toLocaleString('en-US')} ${n === 1 ? 'card' : 'cards'}`
const setCount = (n: number) => `${n} ${n === 1 ? 'set' : 'sets'}`
const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const sum = (rows: readonly { cards: number }[]) => rows.reduce((n, r) => n + r.cards, 0)

function Crumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {trail.map((c, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />}
          {c.href ? (
            <Link href={c.href} className="text-accent hover:underline">
              {c.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

/** One unit: its name, then its card sets as rows. */
function UnitSection({ unit }: { unit: Unit }) {
  return (
    <section id={anchor(unit.key)} className="scroll-mt-24 rounded-xl border border-card-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-card-border px-5 py-3">
        <h2 className="text-lg font-bold">{unit.name}</h2>
        <p className="text-sm text-muted-foreground">
          {setCount(unit.sets.length)} · {cardCount(sum(unit.sets))}
        </p>
      </div>
      <ul className="divide-y divide-card-border">
        {unit.sets.map((set) => (
          <li key={set.id} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3">
            <div className="min-w-0 flex-1 basis-56">
              <Link href={topicFlashcardReviewHref(set.slug)} className="font-semibold hover:text-accent">
                {set.title}
              </Link>
              <p className="text-sm text-muted-foreground">{cardCount(set.cards)}</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href={topicFlashcardBrowseHref(set.slug)} className="text-muted-foreground hover:underline">
                Browse
              </Link>
              <Link href={topicFlashcardReviewHref(set.slug)} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 font-semibold text-white hover:bg-accent-hover">
                <Play className="h-3.5 w-3.5" aria-hidden /> Study
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** "Jump to a unit" chips above a long list of units. */
function UnitJump({ units }: { units: Unit[] }) {
  if (units.length < 3) return null
  return (
    <nav aria-label="Units" className="mb-5 flex flex-wrap gap-2">
      {units.map((u) => (
        <a key={u.key} href={`#${anchor(u.key)}`} className="rounded-full border border-card-border bg-card px-3 py-1 text-sm hover:border-accent-muted hover:text-accent">
          {u.name}
        </a>
      ))}
    </nav>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-card-border bg-card p-10 text-center">
      <Layers className="mx-auto mb-4 h-10 w-10 text-accent dark:text-accent-muted" aria-hidden />
      <h2 className="mb-2 text-xl font-semibold text-foreground">No flashcards here yet</h2>
      <p className="mb-6 text-muted-foreground">{message}</p>
      <Link href="/flashcards" className="inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-accent-hover">
        All flashcards
      </Link>
    </div>
  )
}

export default async function FlashcardsPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string; subject?: string }>
}) {
  const { course, subject: subjectKey } = await searchParams

  // A course's deck includes the courses it contains (AP Calculus BC lists every
  // AB topic, by CED unit: src/lib/course-includes.ts).
  const dbCategories = await prisma.category.findMany({
    where: course ? { course: { slug: { in: coursesIn(course) } } } : undefined,
    select: {
      id: true,
      slug: true,
      name: true,
      order: true,
      course: { select: { name: true, slug: true, icon: true, order: true } },
      topics: {
        select: { id: true, slug: true, title: true, order: true, _count: { select: { flashcards: true } } },
        orderBy: { order: 'asc' },
      },
    },
    orderBy: { order: 'asc' },
  }).catch((error) => {
    console.warn('Flashcard categories unavailable at build time; rendering empty list.', error)
    return []
  })

  // Legacy (308) and retired rows never show; nor do an included course's
  // excluded topics (BC leaves out the AB exam review); nor a set with no cards.
  const excluded = course ? excludedTopicsOf(course) : []
  const shown = dbCategories.map((c) => ({
    ...c,
    sets: visibleTopics(c.topics)
      .filter((t) => !excluded.includes(t.slug) && t._count.flashcards > 0)
      .map((t): SetRow => ({ id: t.id, slug: t.slug, title: t.title, order: t.order, cards: t._count.flashcards })),
  }))

  const courseName = course ? dbCategories.find((c) => c.course.slug === course)?.course.name ?? INCLUDE_COURSE_NAMES[course] ?? null : null
  const subjects = subjectLayoutOf(course)
  const subject: DeckSubject | null = (subjects && subjectKey && subjects.find((s) => s.key === subjectKey)) || null

  // ── What this page lists ──
  let body: React.ReactNode
  let heading = 'Flashcards'
  let lede = 'Pick a content area, then a course, then the set of cards you want.'
  const trail: { label: string; href?: string }[] = []

  if (!course) {
    // Level 1: content areas → courses.
    const byCourse = new Map<string, { slug: string; name: string; icon: string | null; units: number; sets: number; cards: number }>()
    for (const c of shown) {
      if (c.sets.length === 0) continue
      const row = byCourse.get(c.course.slug) ?? { slug: c.course.slug, name: c.course.name, icon: c.course.icon, units: 0, sets: 0, cards: 0 }
      row.units++
      row.sets += c.sets.length
      row.cards += sum(c.sets)
      byCourse.set(c.course.slug, row)
    }
    const areas = groupCoursesByArea([...byCourse.values()])
    body =
      areas.length === 0 ? (
        <EmptyState message="Flashcards are on the way. Browse our courses to start studying now." />
      ) : (
        <div className="space-y-8">
          {areas.map(({ area, courses }) => (
            <section key={area.key} id={area.key} className="scroll-mt-24">
              <div className="mb-3 flex flex-wrap items-baseline gap-x-3">
                <h2 className="text-xl font-bold">{area.name}</h2>
                <p className="text-sm text-muted-foreground">{area.blurb}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {courses.map((c) => (
                  <Link key={c.slug} href={flashcardCatalogHref(c.slug)} className="group flex items-center gap-3 rounded-xl border border-card-border bg-card p-4 transition-all hover:border-accent-muted hover:shadow-md">
                    {c.icon && (
                      <span className="text-2xl" aria-hidden>
                        {c.icon}
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold group-hover:text-accent">{c.name}</span>
                      <span className="block text-sm text-muted-foreground">
                        {setCount(c.sets)} · {cardCount(c.cards)}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent" aria-hidden />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )
  } else {
    const area = areaOfCourse(course)
    heading = `${courseName ?? 'Course'} Flashcards`
    trail.push({ label: 'Flashcards', href: '/flashcards' }, { label: area.name, href: `/flashcards#${area.key}` })
    const allSets = shown.flatMap((c) => c.sets.map((s) => ({ ...s, categorySlug: c.slug })))

    if (subjects && !subject) {
      // Level 2 (large course): exam sections → subjects.
      lede = 'Pick a subject to see its units and card sets.'
      trail.push({ label: courseName ?? course })
      const bySubject = new Map<string, SetRow[]>()
      const unfiled: typeof allSets = []
      for (const s of allSets) {
        const sub = subjectOfTopic(subjects, s.slug)
        if (sub) bySubject.set(sub.key, [...(bySubject.get(sub.key) ?? []), s])
        else unfiled.push(s)
      }
      const sections = shown
        .map((c) => ({ c, subjects: subjects.filter((s) => s.section === c.slug && (bySubject.get(s.key)?.length ?? 0) > 0) }))
        .filter((g) => g.subjects.length > 0)
      body =
        sections.length === 0 && unfiled.length === 0 ? (
          <EmptyState message="We haven't published flashcards for this course yet." />
        ) : (
          <div className="space-y-8">
            {sections.map(({ c, subjects: subs }) => (
              <section key={c.id}>
                <h2 className="mb-3 text-xl font-bold">{c.name}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {subs.map((s) => {
                    const sets = bySubject.get(s.key) ?? []
                    const units = groupIntoUnits(s, sets)
                    return (
                      <Link key={s.key} href={flashcardCatalogHref(course, s.key)} className="group flex items-center gap-3 rounded-xl border border-card-border bg-card p-4 transition-all hover:border-accent-muted hover:shadow-md">
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold group-hover:text-accent">{s.name}</span>
                          <span className="block text-sm text-muted-foreground">
                            {units.length > 1 ? `${units.length} units · ` : ''}
                            {setCount(sets.length)} · {cardCount(sum(sets))}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent" aria-hidden />
                      </Link>
                    )
                  })}
                </div>
              </section>
            ))}
            {unfiled.length > 0 && <UnitSection unit={{ key: 'more', name: 'More sets', sets: unfiled }} />}
          </div>
        )
    } else {
      // Level 3: units → card sets (a whole course, or one subject of a large course).
      lede = 'Pick a set. Study rates the cards you have unlocked; Browse flips through every card in the set.'
      let units: Unit[]
      if (subjects && subject) {
        heading = `${subject.name} Flashcards`
        trail.push({ label: courseName ?? course, href: flashcardCatalogHref(course) }, { label: subject.name })
        const mine = allSets.filter((s) => subjectOfTopic(subjects, s.slug)?.key === subject.key)
        units = groupIntoUnits(subject, mine).map((u) => ({ key: u.name, name: u.name, sets: u.topics }))
      } else {
        trail.push({ label: courseName ?? course })
        const layout = courseCategoryLayout(course)
        units = layout
          ? groupByLayout(layout, allSets, (t) => t.categorySlug, (t) => t.order)
              .filter((g) => g.rows.length > 0)
              .map(({ section, rows }) => ({ key: section.key, name: section.name, sets: rows }))
          : shown.filter((c) => c.sets.length > 0).map((c) => ({ key: c.slug, name: c.name, sets: c.sets }))
      }
      body =
        units.length === 0 ? (
          <EmptyState message="We haven't published flashcards here yet. Browse other courses in the meantime." />
        ) : (
          <>
            <UnitJump units={units} />
            <div className="space-y-4">
              {units.map((u) => (
                <UnitSection key={u.key} unit={u} />
              ))}
            </div>
          </>
        )
    }
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl">
        {trail.length > 0 && <Crumbs trail={trail} />}
        <h1 className="mb-2 text-4xl font-bold tracking-tight">{heading}</h1>
        <p className="mb-5 text-lg text-muted-foreground">{lede}</p>

        {/* Your own deck: the same on every level of the catalog. */}
        <div className="mb-8 rounded-xl border border-card-border bg-card p-5">
          <StudyModeSwitcher />
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/flashcards/review" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-white shadow transition-all hover:bg-accent-hover">
              <Play className="h-4 w-4" aria-hidden /> Review today&apos;s cards
            </Link>
            <Link href="/flashcards/mine" className="inline-flex items-center gap-2 rounded-lg border border-card-border px-4 py-2.5 font-semibold hover:border-accent-muted hover:text-accent">
              <PencilLine className="h-4 w-4" aria-hidden /> My own cards
            </Link>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">How cards get into your deck:</span> {FLASHCARD_UNLOCK_RULE}
          </p>
        </div>

        {body}

        {/* Ad placement after flashcard list */}
        <InArticleAd />
      </div>
    </div>
  )
}
