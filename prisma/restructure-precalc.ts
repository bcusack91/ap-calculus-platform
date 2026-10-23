/**
 * AP Precalculus: restructure the Course -> Category -> Topic rows to the
 * 2026-27 CED (precalc-final audit, Oct 2026; PLAN.md "Canonical layout").
 * Parametrized clone of prisma/restructure-calc.ts (same rails, same shape).
 *
 * The target shape is PRECALC_CATEGORIES (+ PRECALC_TOPIC_TITLES) in
 * src/lib/course-includes.ts, the same data the course hub, /categories, the
 * competitive topics route and the teacher lobby read. This script:
 *   1. renames the three CED unit Categories (name + order) and creates the
 *      exam-prep Category (empty until its Wave-3 lessons land);
 *   2. re-parents every live topic into its CED unit, in CED order
 *      (Topic.order = position in the unit), applies the canonical titles, and
 *      CREATES the Topic rows of the two new CED-gap lessons
 *      (function-modeling-precalc 1.13-1.14, exponential-logarithmic-modeling-precalc
 *      2.6/2.14-2.15) when they do not exist;
 *   3. retires the 27 legacy rows (every row of the course whose slug 308s in
 *      LEGACY_TOPIC_REDIRECTS): their flashcards are moved to the canonical
 *      topic the row redirects to (FlashcardProgress rides along by card id;
 *      cards are NEVER deleted here), their TopicProgress rows are moved to the
 *      target when the student has no row there (else the legacy row is
 *      deleted, reported), then their TopicSlideDeck rows and the rows
 *      themselves are deleted (example problems cascade; all in the backup);
 *   4. deletes the six legacy Categories in RETIRED_PRECALC_CATEGORIES once
 *      nothing is left in them.
 * A legacy row whose target has no row (and is not being created), or that has
 * subtopics, is reported and left alone. Topic rows the plan does not know are
 * reported, never touched. Off-exam rows in RETIRED_AP_TOPICS are left for
 * prisma/retire-ap-topics.ts.
 *
 * Safety:
 *   - Dry run unless APPLY=1. The dry run prints the full plan and WRITES
 *     NOTHING (it returns before the backup and the transaction; every query
 *     before that point is a SELECT).
 *   - SEED_DB=prod loads .env (dotenv override), anything else .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses
 *     a Neon host.
 *   - Writes a JSON backup of every row it touches (before values) to
 *     scripts/_restructure-precalc-backup-<timestamp>.json (gitignored) before
 *     writing.
 *   - All writes run in one transaction.
 *   - Idempotent: a second run plans nothing.
 *
 * Run (repo root):
 *   npx tsx prisma/restructure-precalc.ts                        # dry run, local
 *   SEED_DB=prod npx tsx prisma/restructure-precalc.ts           # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx prisma/restructure-precalc.ts   # prod, writes
 *
 * Order in production (PLAN.md Wave 2, same as calc): this script FIRST (the
 * exam-prep Category and the two new Topic rows must exist for the layout and
 * the 308 targets), then deploy (308s + layout ship in code), then revalidate
 * the hub/category/topic ISR pages, then regenerate the course's slide decks.
 * prisma/seed-all.ts runs it last (APPLY) because older seeds recreate the
 * legacy rows and Categories.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient } from '@prisma/client'
import { PRECALC_CATEGORIES, PRECALC_TOPIC_TITLES, RETIRED_PRECALC_CATEGORIES } from '../src/lib/course-includes'
import { LEGACY_TOPIC_REDIRECTS } from '../src/lib/legacy-topic-redirects'
import { RETIRED_AP_TOPICS, RETIRED_AP_UNITS } from '../src/data/retired-ap-topics'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'

// ---- Course parameters (the only block that differs from restructure-calc.ts)
const COURSES = ['ap-precalculus'] as const
const CATEGORIES = PRECALC_CATEGORIES
const RETIRED_CATEGORIES = RETIRED_PRECALC_CATEGORIES
/** Canonical titles (slug kept); every planned topic is set to its PLAN.md title. */
const TITLE_FIXES: Record<string, string> = PRECALC_TOPIC_TITLES
const BACKUP_PREFIX = '_restructure-precalc-backup-'

/** Description + icon for Categories this script creates. */
const NEW_CATEGORY_META: Record<string, { description: string; icon: string }> = {
  'precalc-exam-prep': {
    description: 'Free-response strategies for the four 2027 FRQ types and a full-course review for the AP Precalculus exam.',
    icon: '📝',
  },
}

/** Topic rows this script creates when missing (the two CED-gap lessons authored Oct 2026). */
const NEW_TOPIC_META: Record<string, { description: string; textContent: string }> = {
  'function-modeling-precalc': {
    description: 'Choosing and building function models from data and context: polynomial, piecewise, and rational models, assumptions, and model validation (CED 1.13–1.14).',
    textContent:
      '# 📈 Function Model Selection and Construction\n\nSelect a function type from the behavior of a data set or a described context, construct the model from given values or constraints, and use it to answer questions in context (AP Precalculus Topics 1.13–1.14; free-response Question 2, "Modeling a Non-Periodic Context").',
  },
  'exponential-logarithmic-modeling-precalc': {
    description: 'Exponential and logarithmic regression, residual plots, competing function models, and semi-log plots (CED 2.6, 2.14–2.15).',
    textContent:
      '# 📈 Exponential and Logarithmic Data Modeling and Semi-log Plots\n\nFit exponential and logarithmic models to data, judge them with residuals and competing models, and read semi-log plots, where exponential data appears linear (AP Precalculus Topics 2.6, 2.14–2.15).',
  },
}

/** Follow LEGACY_TOPIC_REDIRECTS to a slug that is not itself redirected. */
function canonicalTarget(slug: string): string | null {
  let s = slug
  for (let i = 0; i < 5; i++) {
    const next = LEGACY_TOPIC_REDIRECTS[s]
    if (!next) return s === slug ? null : s
    s = next
  }
  throw new Error(`redirect loop from ${slug}`)
}

const prisma = new PrismaClient()

type TopicRow = {
  id: string
  slug: string
  title: string
  order: number
  categoryId: string
  parentTopicId: string | null
  _count: { flashcards: number; topicProgress: number; exampleProblems: number; subtopics: number }
}
const topicSelect = {
  id: true, slug: true, title: true, order: true, categoryId: true, parentTopicId: true,
  _count: { select: { flashcards: true, topicProgress: true, exampleProblems: true, subtopics: true } },
} as const

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY (writes, one transaction)' : 'DRY RUN (no writes)')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  // ---- Plan integrity (pure)
  const planned = new Map<string, { category: string; order: number; course: string }>()
  for (const c of CATEGORIES) {
    c.topics.forEach((t, i) => {
      if (planned.has(t)) throw new Error(`${t} is planned twice`)
      if (LEGACY_TOPIC_REDIRECTS[t]) throw new Error(`${t} is planned live but 308s in LEGACY_TOPIC_REDIRECTS`)
      if (RETIRED_AP_TOPICS[t]) throw new Error(`${t} is planned live but is in RETIRED_AP_TOPICS`)
      planned.set(t, { category: c.slug, order: i + 1, course: c.course })
    })
  }
  for (const [slug, { redirect }] of Object.entries(RETIRED_CATEGORIES)) {
    if (!CATEGORIES.some((c) => c.slug === redirect)) throw new Error(`retired Category ${slug} 308s to ${redirect}, which is not a live Category`)
  }

  // ---- Read state
  const courses = await prisma.course.findMany({ where: { slug: { in: [...COURSES] } }, select: { id: true, slug: true } })
  const courseId = new Map(courses.map((c) => [c.slug, c.id]))
  for (const c of COURSES) if (!courseId.has(c)) throw new Error(`course ${c} not found`)
  const courseSlugById = new Map(courses.map((c) => [c.id, c.slug]))

  const categories = await prisma.category.findMany({
    where: { OR: [{ courseId: { in: courses.map((c) => c.id) } }, { slug: { in: CATEGORIES.map((c) => c.slug) } }] },
  })
  const catBySlug = new Map(categories.map((c) => [c.slug, c]))
  const topics: TopicRow[] = await prisma.topic.findMany({ where: { categoryId: { in: categories.map((c) => c.id) } }, select: topicSelect })
  // Planned topics that sit outside these Categories (should not happen) are found by slug.
  const missingPlanned = [...planned.keys()].filter((s) => !topics.some((t) => t.slug === s))
  const strays: TopicRow[] = missingPlanned.length
    ? await prisma.topic.findMany({ where: { slug: { in: missingPlanned } }, select: topicSelect })
    : []
  const allTopics = [...topics, ...strays]
  const topicBySlug = new Map(allTopics.map((t) => [t.slug, t]))
  const catSlugById = new Map(categories.map((c) => [c.id, c.slug]))

  // ---- 1. Categories
  console.log('\n== 1. Categories (CED names and orders)')
  const createCats: { slug: string; course: string; name: string; order: number; description: string; icon: string }[] = []
  const updateCats: { id: string; slug: string; from: { name: string; order: number }; to: { name: string; order: number } }[] = []
  for (const c of CATEGORIES) {
    const row = catBySlug.get(c.slug)
    if (!row) {
      const meta = NEW_CATEGORY_META[c.slug]
      if (!meta) throw new Error(`Category ${c.slug} is missing and has no NEW_CATEGORY_META`)
      createCats.push({ slug: c.slug, course: c.course, name: c.name, order: c.order, ...meta })
      console.log(`  CREATE ${c.slug} [${c.course}] order ${c.order} "${c.name}"`)
      continue
    }
    if (courseSlugById.get(row.courseId) !== c.course) {
      throw new Error(`Category ${c.slug} belongs to ${courseSlugById.get(row.courseId) ?? row.courseId}, expected ${c.course}`)
    }
    if (row.name !== c.name || row.order !== c.order) {
      updateCats.push({ id: row.id, slug: c.slug, from: { name: row.name, order: row.order }, to: { name: c.name, order: c.order } })
      console.log(`  UPDATE ${c.slug}: "${row.name}" (${row.order}) -> "${c.name}" (${c.order})`)
    } else {
      console.log(`  ok     ${c.slug} "${c.name}" (${c.order})`)
    }
  }

  // ---- 2. Live topics: re-parent, re-order, titles; create the new CED-gap rows
  console.log('\n== 2. Live topics (CED unit + order + canonical title)')
  const moves: { id: string; slug: string; fromCat: string; toCat: string; fromOrder: number; toOrder: number; fromTitle: string; toTitle: string }[] = []
  const createTopics: { slug: string; category: string; order: number; title: string; description: string; textContent: string }[] = []
  const missing: string[] = []
  for (const [slug, p] of planned) {
    const t = topicBySlug.get(slug)
    if (!t) {
      const meta = NEW_TOPIC_META[slug]
      if (meta) {
        const title = TITLE_FIXES[slug]
        if (!title) throw new Error(`new topic ${slug} has no title in PRECALC_TOPIC_TITLES`)
        createTopics.push({ slug, category: p.category, order: p.order, title, ...meta })
        console.log(`  CREATE ${slug} in ${p.category} order ${p.order} "${title}"`)
      } else {
        missing.push(slug)
        console.log(`  MISSING ${slug} (planned for ${p.category}; no Topic row, nothing to do)`)
      }
      continue
    }
    const fromCat = catSlugById.get(t.categoryId) ?? `(category ${t.categoryId})`
    const toTitle = TITLE_FIXES[slug] ?? t.title
    if (fromCat !== p.category || t.order !== p.order || toTitle !== t.title) {
      moves.push({ id: t.id, slug, fromCat, toCat: p.category, fromOrder: t.order, toOrder: p.order, fromTitle: t.title, toTitle })
      const parts = [
        fromCat !== p.category ? `${fromCat} -> ${p.category}` : `in ${p.category}`,
        t.order !== p.order ? `order ${t.order} -> ${p.order}` : null,
        toTitle !== t.title ? `title "${t.title}" -> "${toTitle}"` : null,
      ].filter(Boolean)
      console.log(`  MOVE   ${slug}: ${parts.join(', ')}`)
    }
  }
  if (moves.length === 0 && createTopics.length === 0) console.log('  (all live topics already in place)')
  const creatingTopic = new Set(createTopics.map((t) => t.slug))

  // ---- 3. Legacy topics
  console.log('\n== 3. Legacy topic rows (308 in LEGACY_TOPIC_REDIRECTS)')
  // Off-exam rows (RETIRED_AP_TOPICS) are prisma/retire-ap-topics.ts's job:
  // it deletes them with their cards, which must not be moved to a live topic.
  const offExam = allTopics.filter((t) => RETIRED_AP_TOPICS[t.slug])
  for (const t of offExam) console.log(`  SKIP   ${t.slug}: off-exam, left for prisma/retire-ap-topics.ts`)
  const legacy = allTopics.filter((t) => LEGACY_TOPIC_REDIRECTS[t.slug] && !planned.has(t.slug) && !RETIRED_AP_TOPICS[t.slug])
  const legacyIds = legacy.map((t) => t.id)
  const [cardRows, decks, prereqRows, progressRows, exitAttempts] = await Promise.all([
    legacyIds.length
      ? prisma.flashcard.findMany({ where: { topicId: { in: legacyIds } }, select: { id: true, topicId: true, _count: { select: { progress: true } } } })
      : Promise.resolve([]),
    prisma.topicSlideDeck.findMany({ where: { topicSlug: { in: legacy.map((t) => t.slug) } }, select: { id: true, topicSlug: true } }),
    legacyIds.length
      ? prisma.$queryRawUnsafe<{ A: string; B: string }[]>(
          `SELECT "A", "B" FROM "_TopicPrerequisites" WHERE "A" = ANY($1::text[]) OR "B" = ANY($1::text[])`,
          legacyIds,
        ).catch(() => [] as { A: string; B: string }[])
      : Promise.resolve([] as { A: string; B: string }[]),
    legacyIds.length
      ? prisma.topicProgress.findMany({ where: { topicId: { in: legacyIds } }, select: { id: true, userId: true, topicId: true, status: true, lastAccessed: true } })
      : Promise.resolve([]),
    legacy.length
      ? prisma.exitQuizAttempt.groupBy({ by: ['topicSlug'], where: { topicSlug: { in: legacy.map((t) => t.slug) } }, _count: { _all: true } })
      : Promise.resolve([]),
  ])
  const cardsOf = new Map<string, { id: string; progress: number }[]>()
  for (const f of cardRows) {
    const list = cardsOf.get(f.topicId) ?? []
    list.push({ id: f.id, progress: f._count.progress })
    cardsOf.set(f.topicId, list)
  }
  const deckOf = new Map(decks.map((d) => [d.topicSlug, d]))
  const progressOf = new Map<string, typeof progressRows>()
  for (const p of progressRows) {
    const list = progressOf.get(p.topicId) ?? []
    list.push(p)
    progressOf.set(p.topicId, list)
  }
  const exitAttemptsOf = new Map(exitAttempts.map((e) => [e.topicSlug, e._count._all]))

  // Existing progress on the targets, so a (userId, topicId) move never collides.
  const targetOf = new Map(legacy.map((t) => [t.id, canonicalTarget(t.slug)!]))
  const targetSlugs = [...new Set(targetOf.values())]
  const targetRows = new Map<string, { id: string; slug: string }>()
  for (const s of targetSlugs) {
    const known = topicBySlug.get(s)
    if (known) targetRows.set(s, { id: known.id, slug: s })
    else if (!creatingTopic.has(s)) {
      const row = await prisma.topic.findUnique({ where: { slug: s }, select: { id: true, slug: true } })
      if (row) targetRows.set(s, row)
    }
  }
  const progressUsers = [...new Set(progressRows.map((p) => p.userId))]
  const existingTargetProgress =
    progressUsers.length && targetRows.size
      ? await prisma.topicProgress.findMany({
          where: { userId: { in: progressUsers }, topicId: { in: [...targetRows.values()].map((r) => r.id) } },
          select: { userId: true, topicId: true },
        })
      : []
  const hasTargetProgress = new Set(existingTargetProgress.map((p) => `${p.userId}|${p.topicId}`))

  type Retire = {
    id: string
    slug: string
    target: string
    /** Target Topic id, or null when the target is created in this run. */
    targetId: string | null
    cards: string[]
    deckId: string | null
    progressMove: string[]
    progressDelete: string[]
  }
  const retire: Retire[] = []
  const kept: string[] = []
  for (const t of legacy.sort((a, b) => a.slug.localeCompare(b.slug))) {
    const target = targetOf.get(t.id)!
    const targetRow = targetRows.get(target) ?? null
    const targetIsNew = !targetRow && creatingTopic.has(target)
    const cards = cardsOf.get(t.id) ?? []
    const cardProgress = cards.reduce((n, c) => n + c.progress, 0)
    const deck = deckOf.get(t.slug)
    const progress = progressOf.get(t.id) ?? []
    const progressMove = progress.filter((p) => !targetRow || !hasTargetProgress.has(`${p.userId}|${targetRow.id}`)).map((p) => p.id)
    const progressDelete = progress.filter((p) => !progressMove.includes(p.id)).map((p) => p.id)
    const exitN = exitAttemptsOf.get(t.slug) ?? 0
    const why: string[] = []
    if (!targetRow && !targetIsNew) why.push(`target ${target} has no Topic row`)
    if (t._count.subtopics > 0) why.push(`${t._count.subtopics} subtopics`)
    const bits = [
      `${cards.length} cards re-parented (${cardProgress} card-progress rows ride along)`,
      progress.length ? `${progressMove.length} TopicProgress moved${progressDelete.length ? `, ${progressDelete.length} deleted (student already has the target)` : ''}` : null,
      exitN ? `${exitN} exit attempts keyed by slug (left in place)` : null,
      `${t._count.exampleProblems} examples (cascade)`,
      `deck ${deck ? 'deleted' : 'none'}`,
    ].filter(Boolean)
    const line = `${t.slug} [${catSlugById.get(t.categoryId)}] -> ${target}${targetIsNew ? ' (created above)' : ''}: ${bits.join(', ')}`
    if (why.length) {
      kept.push(t.slug)
      console.log(`  KEEP   ${t.slug}: ${why.join('; ')} (left for review)`)
      continue
    }
    retire.push({ id: t.id, slug: t.slug, target, targetId: targetRow?.id ?? null, cards: cards.map((c) => c.id), deckId: deck?.id ?? null, progressMove, progressDelete })
    console.log(`  RETIRE ${line}`)
  }
  if (legacy.length === 0) console.log('  (none)')
  const prereqTouched = prereqRows.length
  if (prereqTouched) console.log(`  note: ${prereqTouched} _TopicPrerequisites rows reference retiring topics (cascade; in the backup)`)

  // Unknown rows: in this course's Categories, neither planned nor legacy.
  const unknown = topics.filter((t) => !planned.has(t.slug) && !LEGACY_TOPIC_REDIRECTS[t.slug] && !RETIRED_AP_TOPICS[t.slug])
  if (unknown.length) {
    console.log('\n  Topic rows the plan does not know (left untouched):')
    for (const t of unknown) console.log(`    ${t.slug} [${catSlugById.get(t.categoryId)}] "${t.title}"`)
  }

  // ---- 4. Retired Categories
  console.log('\n== 4. Retired Categories (RETIRED_PRECALC_CATEGORIES)')
  const retiringIds = new Set(retire.map((r) => r.id))
  const movedOut = new Set(moves.filter((m) => m.fromCat !== m.toCat).map((m) => m.id))
  const deleteCats: { id: string; slug: string }[] = []
  for (const [slug, { course, redirect }] of Object.entries(RETIRED_CATEGORIES)) {
    const row = catBySlug.get(slug)
    if (!row) {
      console.log(`  gone   ${slug}`)
      continue
    }
    if (courseSlugById.get(row.courseId) !== course) throw new Error(`Category ${slug} belongs to ${courseSlugById.get(row.courseId)}, expected ${course}`)
    const left = topics.filter((t) => t.categoryId === row.id && !retiringIds.has(t.id) && !movedOut.has(t.id))
    if (left.length) {
      console.log(`  KEEP   ${slug}: still holds ${left.map((t) => t.slug).join(', ')}`)
      continue
    }
    deleteCats.push({ id: row.id, slug })
    console.log(`  DELETE ${slug} ("${row.name}") -> /categories/${redirect} (308 in next.config.ts)`)
  }

  const knownCats = new Set([...CATEGORIES.map((c) => c.slug), ...Object.keys(RETIRED_CATEGORIES), ...Object.keys(RETIRED_AP_UNITS)])
  const unknownCats = categories.filter((c) => !knownCats.has(c.slug))
  for (const c of unknownCats) {
    const n = topics.filter((t) => t.categoryId === c.id && !retiringIds.has(t.id) && !movedOut.has(t.id)).length
    console.log(`  UNKNOWN ${c.slug} ("${c.name}") [${courseSlugById.get(c.courseId)}]: not in the plan, left untouched (${n} topics left after this run)`)
  }

  // ---- Summary
  const cardMoves = retire.reduce((n, r) => n + r.cards.length, 0)
  const cardProgressMoves = retire.reduce((n, r) => n + r.cards.reduce((m, id) => m + (cardRows.find((c) => c.id === id)?._count.progress ?? 0), 0), 0)
  const progressMoved = retire.reduce((n, r) => n + r.progressMove.length, 0)
  const progressDeleted = retire.reduce((n, r) => n + r.progressDelete.length, 0)
  const retitled = moves.filter((m) => m.fromTitle !== m.toTitle).length
  const reparented = moves.filter((m) => m.fromCat !== m.toCat).length
  console.log('\n== Summary')
  console.log(`  Categories:    ${createCats.length} create, ${updateCats.length} rename/re-order, ${deleteCats.length} delete`)
  console.log(`  Topics:        ${createTopics.length} create, ${moves.length} move/re-order/retitle (${reparented} change unit, ${retitled} retitled), ${retire.length} retire, ${kept.length} legacy kept, ${missing.length} planned-but-missing, ${unknown.length} unknown`)
  console.log(`  Flashcards:    ${cardMoves} re-parented to canonical topics (${cardProgressMoves} FlashcardProgress rows ride along; 0 deleted)`)
  console.log(`  TopicProgress: ${progressMoved} moved to the target, ${progressDeleted} deleted (student already had the target)`)
  console.log(`  Decks:         ${retire.filter((r) => r.deckId).length} TopicSlideDeck rows deleted`)
  const nothing = !createCats.length && !updateCats.length && !createTopics.length && !moves.length && !retire.length && !deleteCats.length
  if (nothing) {
    console.log('\nNothing to do (already restructured).')
    return
  }
  if (!APPLY) {
    console.log('\nDRY RUN: nothing written. Re-run with APPLY=1 to apply.')
    return
  }

  // ---- Backup (before values of every row touched)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `${BACKUP_PREFIX}${stamp}.json`)
  const retireIds = retire.map((r) => r.id)
  const [bCats, bTopics, bCards, bExamples, bDecks, bProgress] = await Promise.all([
    prisma.category.findMany({ where: { id: { in: [...updateCats.map((c) => c.id), ...deleteCats.map((c) => c.id)] } } }),
    prisma.topic.findMany({ where: { id: { in: [...moves.map((m) => m.id), ...retireIds] } } }),
    prisma.flashcard.findMany({ where: { id: { in: retire.flatMap((r) => r.cards) } } }),
    prisma.exampleProblem.findMany({ where: { topicId: { in: retireIds } } }),
    prisma.topicSlideDeck.findMany({ where: { id: { in: retire.flatMap((r) => (r.deckId ? [r.deckId] : [])) } } }),
    prisma.topicProgress.findMany({ where: { topicId: { in: retireIds } } }),
  ])
  fs.writeFileSync(
    backupPath,
    JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        host,
        categories: bCats,
        topics: bTopics,
        flashcards: bCards,
        exampleProblems: bExamples,
        topicSlideDecks: bDecks,
        topicProgress: bProgress,
        topicPrerequisites: prereqRows,
      },
      null,
      1,
    ),
  )
  console.log(`\nBackup: ${backupPath}`)

  // ---- Apply (one transaction)
  await prisma.$transaction(
    async (tx) => {
      const newCatId = new Map<string, string>()
      for (const c of createCats) {
        const row = await tx.category.create({
          data: { slug: c.slug, name: c.name, order: c.order, description: c.description, icon: c.icon, courseId: courseId.get(c.course)! },
        })
        newCatId.set(c.slug, row.id)
      }
      for (const c of updateCats) await tx.category.update({ where: { id: c.id }, data: { name: c.to.name, order: c.to.order } })
      const catId = (slug: string) => newCatId.get(slug) ?? catBySlug.get(slug)!.id
      const newTopicId = new Map<string, string>()
      for (const t of createTopics) {
        const row = await tx.topic.create({
          data: { slug: t.slug, title: t.title, description: t.description, textContent: t.textContent, order: t.order, categoryId: catId(t.category), isPremium: false },
        })
        newTopicId.set(t.slug, row.id)
      }
      for (const m of moves) {
        await tx.topic.update({ where: { id: m.id }, data: { categoryId: catId(m.toCat), order: m.toOrder, title: m.toTitle } })
      }
      for (const r of retire) {
        const targetId = r.targetId ?? newTopicId.get(r.target)
        if (!targetId) throw new Error(`${r.slug}: target ${r.target} has no id; aborting (nothing written)`)
        if (r.cards.length) await tx.flashcard.updateMany({ where: { id: { in: r.cards }, topicId: r.id }, data: { topicId: targetId } })
        if (r.progressDelete.length) await tx.topicProgress.deleteMany({ where: { id: { in: r.progressDelete }, topicId: r.id } })
        if (r.progressMove.length) await tx.topicProgress.updateMany({ where: { id: { in: r.progressMove }, topicId: r.id }, data: { topicId: targetId } })
        if (r.deckId) await tx.topicSlideDeck.delete({ where: { id: r.deckId } })
        const [cardsLeft, progressLeft] = await Promise.all([
          tx.flashcard.count({ where: { topicId: r.id } }),
          tx.topicProgress.count({ where: { topicId: r.id } }),
        ])
        if (cardsLeft > 0) throw new Error(`${r.slug} still has ${cardsLeft} cards after re-parenting; aborting (nothing written)`)
        if (progressLeft > 0) throw new Error(`${r.slug} still has ${progressLeft} TopicProgress rows after migrating; aborting (nothing written)`)
        await tx.topic.delete({ where: { id: r.id } })
      }
      for (const c of deleteCats) {
        const left = await tx.topic.count({ where: { categoryId: c.id } })
        if (left > 0) throw new Error(`Category ${c.slug} still holds ${left} topics; aborting (nothing written)`)
        await tx.category.delete({ where: { id: c.id } })
      }
    },
    { timeout: 120_000, maxWait: 20_000 },
  )
  console.log('\nAPPLIED. Next: deploy, revalidate /courses/ap-precalculus, /categories and /topics pages, then')
  console.log('  PROD=1 npx tsx scripts/generate-topic-slide-decks.ts ap-precalculus')
}

main()
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
