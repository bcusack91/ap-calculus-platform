/**
 * AP Calculus AB + BC: restructure the Course -> Category -> Topic rows to the
 * 2026-27 CED (calc-final audit, Oct 2026; owner decisions D1-D5).
 *
 * The target shape is CALC_CATEGORIES in src/lib/course-includes.ts (the same
 * data the course hubs, unit tests and qbank read). This script:
 *   1. creates the missing unit Categories (AB Unit 3, AB Unit 4, BC arc length)
 *      and sets every calculus Category's name and order to the CED;
 *   2. re-parents every live topic into its CED unit, in CED order
 *      (Topic.order = position in the unit), and fixes the titles in TITLE_FIXES;
 *   3. retires the legacy duplicate topic rows (every row of either course whose
 *      slug 308s in LEGACY_TOPIC_REDIRECTS): their flashcards are first moved to
 *      the canonical topic the row redirects to (cards are NEVER deleted here;
 *      the separate card script screens them), then their TopicSlideDeck rows
 *      and the rows themselves are deleted (example problems cascade; they are
 *      in the backup);
 *   4. deletes the legacy Categories in RETIRED_CALC_CATEGORIES once nothing is
 *      left in them.
 * A legacy row with any TopicProgress or FlashcardProgress, or a retiring
 * Category that would still hold a non-legacy topic, is reported and left
 * alone (the run still applies everything else). Topic rows the plan does not
 * know are reported, never touched.
 *
 * Safety:
 *   - Dry run unless APPLY=1. The dry run prints the full plan.
 *   - SEED_DB=prod loads .env (dotenv override), anything else .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses
 *     a Neon host.
 *   - Writes a JSON backup of every row it touches (before values) to
 *     scripts/_restructure-calc-backup-<timestamp>.json (gitignored) before
 *     writing.
 *   - All writes run in one transaction.
 *   - Idempotent: a second run plans nothing.
 *
 * Run (repo root):
 *   npx tsx prisma/restructure-calc.ts                        # dry run, local
 *   SEED_DB=prod npx tsx prisma/restructure-calc.ts           # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx prisma/restructure-calc.ts   # prod, writes
 *
 * Order in production (STRUCTURE.md §8): this script, then deploy (the
 * /categories 308s for the retired units ship in next.config.ts), then
 * revalidate the hub/category/topic ISR pages, then regenerate the AB and BC
 * slide decks. prisma/seed-all.ts runs it last (APPLY) because older seeds
 * recreate the legacy rows.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient } from '@prisma/client'
import { CALC_CATEGORIES, RETIRED_CALC_CATEGORIES } from '../src/lib/course-includes'
import { LEGACY_TOPIC_REDIRECTS } from '../src/lib/legacy-topic-redirects'
import { RETIRED_AP_TOPICS, RETIRED_AP_UNITS } from '../src/data/retired-ap-topics'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
const COURSES = ['ap-calculus-ab', 'ap-calculus-bc'] as const

/** Titles the CED pass corrects (slug kept). */
const TITLE_FIXES: Record<string, string> = {
  // Surface area is not in the BC CED (8.13 is arc length only).
  'arc-length-surface-area-calcbc': 'Arc Length',
  // The Unit 1 hub now closes Unit 1 as its review (the 11 granular topics
  // teach it) and is also listed on the BC hub, so drop the "AB Unit 1" tag.
  'limits-continuity-calcab': 'Limits & Continuity: Unit 1 Review',
}

/** Description + icon for Categories this script creates. */
const NEW_CATEGORY_META: Record<string, { description: string; icon: string }> = {
  'calcab-differentiation-composite': {
    description: 'The chain rule, implicit differentiation, and derivatives of inverse and inverse trigonometric functions.',
    icon: '🔗',
  },
  'calcab-contextual-applications': {
    description: "Derivatives in context, straight-line motion, related rates, local linearity, and L'Hospital's Rule.",
    icon: '🚗',
  },
  'calcbc-arc-length': {
    description: 'Arc length of a smooth planar curve and distance traveled (BC Topic 8.13).',
    icon: '📏',
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
  for (const c of CALC_CATEGORIES) {
    c.topics.forEach((t, i) => {
      if (planned.has(t)) throw new Error(`${t} is planned twice`)
      if (LEGACY_TOPIC_REDIRECTS[t]) throw new Error(`${t} is planned live but 308s in LEGACY_TOPIC_REDIRECTS`)
      planned.set(t, { category: c.slug, order: i + 1, course: c.course })
    })
  }

  // ---- Read state
  const courses = await prisma.course.findMany({ where: { slug: { in: [...COURSES] } }, select: { id: true, slug: true } })
  const courseId = new Map(courses.map((c) => [c.slug, c.id]))
  for (const c of COURSES) if (!courseId.has(c)) throw new Error(`course ${c} not found`)
  const courseSlugById = new Map(courses.map((c) => [c.id, c.slug]))

  const categories = await prisma.category.findMany({
    where: { OR: [{ courseId: { in: courses.map((c) => c.id) } }, { slug: { in: CALC_CATEGORIES.map((c) => c.slug) } }] },
  })
  const catBySlug = new Map(categories.map((c) => [c.slug, c]))
  const topics = await prisma.topic.findMany({
    where: { categoryId: { in: categories.map((c) => c.id) } },
    select: {
      id: true, slug: true, title: true, order: true, categoryId: true, parentTopicId: true,
      _count: { select: { flashcards: true, topicProgress: true, exampleProblems: true, subtopics: true } },
    },
  })
  // Planned topics that sit outside these Categories (should not happen) are found by slug.
  const missingPlanned = [...planned.keys()].filter((s) => !topics.some((t) => t.slug === s))
  const strays = missingPlanned.length
    ? await prisma.topic.findMany({
        where: { slug: { in: missingPlanned } },
        select: {
          id: true, slug: true, title: true, order: true, categoryId: true, parentTopicId: true,
          _count: { select: { flashcards: true, topicProgress: true, exampleProblems: true, subtopics: true } },
        },
      })
    : []
  const allTopics = [...topics, ...strays]
  const topicBySlug = new Map(allTopics.map((t) => [t.slug, t]))
  const catSlugById = new Map(categories.map((c) => [c.id, c.slug]))

  // ---- 1. Categories
  console.log('\n== 1. Categories (CED names and orders)')
  const createCats: { slug: string; course: string; name: string; order: number; description: string; icon: string }[] = []
  const updateCats: { id: string; slug: string; from: { name: string; order: number }; to: { name: string; order: number } }[] = []
  for (const c of CALC_CATEGORIES) {
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

  // ---- 2. Live topics: re-parent, re-order, titles
  console.log('\n== 2. Live topics (CED unit + order)')
  const moves: { id: string; slug: string; fromCat: string; toCat: string; fromOrder: number; toOrder: number; fromTitle: string; toTitle: string }[] = []
  const missing: string[] = []
  for (const [slug, p] of planned) {
    const t = topicBySlug.get(slug)
    if (!t) {
      missing.push(slug)
      console.log(`  MISSING ${slug} (planned for ${p.category}; no Topic row, nothing to do)`)
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
  if (moves.length === 0) console.log('  (all live topics already in place)')

  // ---- 3. Legacy topics
  console.log('\n== 3. Legacy topic rows (308 in LEGACY_TOPIC_REDIRECTS)')
  // Off-exam rows (RETIRED_AP_TOPICS) are prisma/retire-ap-topics.ts's job:
  // it deletes them with their cards, which must not be moved to a live topic.
  const offExam = allTopics.filter((t) => RETIRED_AP_TOPICS[t.slug])
  for (const t of offExam) console.log(`  SKIP   ${t.slug}: off-exam, left for prisma/retire-ap-topics.ts`)
  const legacy = allTopics.filter((t) => LEGACY_TOPIC_REDIRECTS[t.slug] && !planned.has(t.slug) && !RETIRED_AP_TOPICS[t.slug])
  const legacyIds = legacy.map((t) => t.id)
  const [cardProgressByTopic, decks, prereqRows] = await Promise.all([
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
  ])
  const cardsOf = new Map<string, { id: string; progress: number }[]>()
  for (const f of cardProgressByTopic) {
    const list = cardsOf.get(f.topicId) ?? []
    list.push({ id: f.id, progress: f._count.progress })
    cardsOf.set(f.topicId, list)
  }
  const deckOf = new Map(decks.map((d) => [d.topicSlug, d]))

  const retire: { id: string; slug: string; target: string; targetId: string; cards: string[]; deckId: string | null }[] = []
  const kept: string[] = []
  for (const t of legacy.sort((a, b) => a.slug.localeCompare(b.slug))) {
    const target = canonicalTarget(t.slug)!
    const targetRow = topicBySlug.get(target) ?? (await prisma.topic.findUnique({ where: { slug: target }, select: { id: true, slug: true } }))
    const cards = cardsOf.get(t.id) ?? []
    const cardProgress = cards.reduce((n, c) => n + c.progress, 0)
    const deck = deckOf.get(t.slug)
    const why: string[] = []
    if (!targetRow) why.push(`target ${target} has no Topic row`)
    if (t._count.topicProgress > 0) why.push(`${t._count.topicProgress} TopicProgress rows`)
    if (cardProgress > 0) why.push(`${cardProgress} FlashcardProgress rows`)
    if (t._count.subtopics > 0) why.push(`${t._count.subtopics} subtopics`)
    const line = `${t.slug} [${catSlugById.get(t.categoryId)}] -> ${target}: ${cards.length} cards re-parented, ${t._count.exampleProblems} examples (cascade), deck ${deck ? 'deleted' : 'none'}`
    if (why.length) {
      kept.push(t.slug)
      console.log(`  KEEP   ${t.slug}: ${why.join('; ')} (left for review)`)
      continue
    }
    retire.push({ id: t.id, slug: t.slug, target, targetId: targetRow!.id, cards: cards.map((c) => c.id), deckId: deck?.id ?? null })
    console.log(`  RETIRE ${line}`)
  }
  if (legacy.length === 0) console.log('  (none)')
  const prereqTouched = prereqRows.length
  if (prereqTouched) console.log(`  note: ${prereqTouched} _TopicPrerequisites rows reference retiring topics (cascade; in the backup)`)

  // Unknown rows: in these courses' Categories, neither planned nor legacy.
  const unknown = topics.filter((t) => !planned.has(t.slug) && !LEGACY_TOPIC_REDIRECTS[t.slug] && !RETIRED_AP_TOPICS[t.slug])
  if (unknown.length) {
    console.log('\n  Topic rows the plan does not know (left untouched):')
    for (const t of unknown) console.log(`    ${t.slug} [${catSlugById.get(t.categoryId)}] "${t.title}"`)
  }

  // ---- 4. Retired Categories
  console.log('\n== 4. Retired Categories (RETIRED_CALC_CATEGORIES)')
  const retiringIds = new Set(retire.map((r) => r.id))
  const movedOut = new Set(moves.filter((m) => m.fromCat !== m.toCat).map((m) => m.id))
  const deleteCats: { id: string; slug: string }[] = []
  for (const [slug, { course, redirect }] of Object.entries(RETIRED_CALC_CATEGORIES)) {
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

  const knownCats = new Set([...CALC_CATEGORIES.map((c) => c.slug), ...Object.keys(RETIRED_CALC_CATEGORIES), ...Object.keys(RETIRED_AP_UNITS)])
  const unknownCats = categories.filter((c) => !knownCats.has(c.slug))
  for (const c of unknownCats) {
    const n = topics.filter((t) => t.categoryId === c.id && !retiringIds.has(t.id) && !movedOut.has(t.id)).length
    console.log(`  UNKNOWN ${c.slug} ("${c.name}") [${courseSlugById.get(c.courseId)}]: not in the plan, left untouched (${n} topics left after this run)`)
  }

  // ---- Summary
  const cardMoves = retire.reduce((n, r) => n + r.cards.length, 0)
  console.log('\n== Summary')
  console.log(`  Categories: ${createCats.length} create, ${updateCats.length} rename/re-order, ${deleteCats.length} delete`)
  console.log(`  Topics:     ${moves.length} move/re-order/retitle, ${retire.length} retire, ${kept.length} legacy kept, ${missing.length} planned-but-missing, ${unknown.length} unknown`)
  console.log(`  Flashcards: ${cardMoves} re-parented to canonical topics (0 deleted)`)
  console.log(`  Decks:      ${retire.filter((r) => r.deckId).length} TopicSlideDeck rows deleted`)
  const nothing = !createCats.length && !updateCats.length && !moves.length && !retire.length && !deleteCats.length
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
  const backupPath = path.join('scripts', `_restructure-calc-backup-${stamp}.json`)
  const [bCats, bTopics, bCards, bExamples, bDecks] = await Promise.all([
    prisma.category.findMany({ where: { id: { in: [...updateCats.map((c) => c.id), ...deleteCats.map((c) => c.id)] } } }),
    prisma.topic.findMany({ where: { id: { in: [...moves.map((m) => m.id), ...retire.map((r) => r.id)] } } }),
    prisma.flashcard.findMany({ where: { id: { in: retire.flatMap((r) => r.cards) } } }),
    prisma.exampleProblem.findMany({ where: { topicId: { in: retire.map((r) => r.id) } } }),
    prisma.topicSlideDeck.findMany({ where: { id: { in: retire.flatMap((r) => (r.deckId ? [r.deckId] : [])) } } }),
  ])
  fs.writeFileSync(
    backupPath,
    JSON.stringify(
      { createdAt: new Date().toISOString(), host, categories: bCats, topics: bTopics, flashcards: bCards, exampleProblems: bExamples, topicSlideDecks: bDecks, topicPrerequisites: prereqRows },
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
      for (const m of moves) {
        await tx.topic.update({ where: { id: m.id }, data: { categoryId: catId(m.toCat), order: m.toOrder, title: m.toTitle } })
      }
      for (const r of retire) {
        if (r.cards.length) await tx.flashcard.updateMany({ where: { id: { in: r.cards }, topicId: r.id }, data: { topicId: r.targetId } })
        if (r.deckId) await tx.topicSlideDeck.delete({ where: { id: r.deckId } })
        const left = await tx.flashcard.count({ where: { topicId: r.id } })
        if (left > 0) throw new Error(`${r.slug} still has ${left} cards after re-parenting; aborting (nothing written)`)
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
  console.log('\nAPPLIED. Next: deploy, revalidate the AB/BC hub, /categories and /topics pages, regenerate the AB and BC slide decks.')
}

main()
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
