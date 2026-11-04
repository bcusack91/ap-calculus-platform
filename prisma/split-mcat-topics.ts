/**
 * MCAT: bring the split topic families to their final layout (Nov 2026, owner
 * rulings — one topic per 90-minute live class; see src/lib/mcat-topic-split.ts).
 *
 * Each family is a retired slug plus its successors in course order. The
 * script makes the database match that list, whatever state it starts from
 * (the original combined row, or an earlier split that has since been split
 * again):
 *   1. creates missing successor rows (same category and parent) and orders
 *      the family consecutively from where it starts, later siblings after it;
 *   2. keeps every successor's title, description and topic-page summary in
 *      step with MCAT_SPLIT_TITLES / split-mcat-topics.meta.ts;
 *   3. moves every flashcard of the family to the topic named for its
 *      fingerprint in prisma/split-mcat-topics.cards.json (an unknown card on
 *      the retired row goes to the first successor; elsewhere it stays put,
 *      reported). FlashcardProgress rides along by card id; cards are never
 *      deleted;
 *   4. retired row: MASTERED / COMPLETED progress is copied to EVERY successor
 *      (owner: a student who mastered the old topic gets credit for all of
 *      it); IN_PROGRESS / NOT_STARTED rows move to the first successor with
 *      masteryLevel reset; bookmarks move to the first successor, part 1;
 *      then its TopicSlideDeck and the row itself are deleted (example
 *      problems and prerequisite links cascade; all in the backup);
 *   5. a live successor that gave lesson parts to a NEW successor (PART_MOVES)
 *      passes its MASTERED / COMPLETED progress to it — only rows completed
 *      before the new topic existed, so later work on the shorter lesson is
 *      never double-counted;
 *   6. creates the NEW cards in prisma/split-mcat-cards/<slug>.json (with
 *      exam-yield label and lesson part) whose fingerprint the family does not
 *      already hold.
 * ExitQuizAttempt rows stay on their slug: old loaders stay registered, and
 * mcatCreditSlugs() counts a retired slug's attempts for every successor.
 * After the transaction the flashcard unlock re-runs for credited students.
 *
 * Safety (same rails as prisma/restructure-precalc.ts):
 *   - Dry run unless APPLY=1 (every query before the backup is a SELECT).
 *   - SEED_DB=prod loads .env (dotenv override), anything else .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses one.
 *   - JSON backup of every touched row to scripts/_split-mcat-topics-backup-<ts>.json.
 *   - One transaction. Idempotent: a second run plans nothing.
 *
 * Run (repo root):
 *   npx tsx prisma/split-mcat-topics.ts                        # dry run, local
 *   SEED_DB=prod npx tsx prisma/split-mcat-topics.ts           # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx prisma/split-mcat-topics.ts   # prod, writes
 *
 * Production order: CREATE_ONLY=1 first (rows + order only: the successors
 * must exist before the deploy, or the 308 and the diagnostic map point at
 * missing topics and mcat-plan's safety valve marks them satisfied), then
 * deploy, then the full run, then
 *   PROD=1 npx tsx scripts/generate-topic-slide-decks.ts mcat-prep --topic=<slug>
 * for every topic of the family. prisma/seed-all.ts runs it last (APPLY).
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient, type ExamYield, type ProgressStatus } from '@prisma/client'
import { MCAT_SPLIT_TITLES, MCAT_SPLIT_TOPICS } from '../src/lib/mcat-topic-split'
import { fingerprint } from '../src/lib/flashcard-yield-artifact'
import { SUCCESSOR_META } from './split-mcat-topics.meta'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
/** Create and order the successor rows only (the pre-deploy step). */
const CREATE_ONLY = process.env.CREATE_ONLY === '1'
const BACKUP_PREFIX = '_split-mcat-topics-backup-'

/** fingerprint → final topic slug, per family (keyed by the retired slug). */
const CARD_MAP: Record<string, Record<string, string>> = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'split-mcat-topics.cards.json'), 'utf8'),
)

/** Live topics whose later lesson parts became a topic of their own (round 2, Nov 2026). */
const PART_MOVES: { from: string; to: string }[] = [
  { from: 'mcat-physics-electricity-dc-circuits-mcat', to: 'mcat-physics-electricity-kirchhoff-power-mcat' },
  { from: 'mcat-physics-electricity-emf-capacitors-mcat', to: 'mcat-physics-electricity-rc-circuits-mcat' },
  { from: 'mcat-physics-mechanics-fluids-mcat', to: 'mcat-physics-mechanics-fluid-dynamics-mcat' },
  { from: 'mcat-physics-waves-sound-mcat', to: 'mcat-physics-waves-interference-mcat' },
]

type NewCard = { front: string; back: string; hint?: string; yield: ExamYield; part?: number }
/** Cards written for a successor lesson (prisma/split-mcat-cards/<slug>.json). */
function newCardsFor(slug: string): NewCard[] {
  const file = path.join(__dirname, 'split-mcat-cards', `${slug}.json`)
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
}

const prisma = new PrismaClient()

type Row = { id: string; slug: string; order: number; categoryId: string; parentTopicId: string | null; title: string; description: string | null; textContent: string | null; createdAt: Date }
type ProgressCopy = { userId: string; status: ProgressStatus; masteryLevel: number; completedAt: Date | null; timeSpent: number; masteredParts: unknown; to: string }
type Plan = {
  oldSlug: string
  successors: readonly string[]
  old: Row | null
  create: { slug: string; order: number }[]
  reorder: { id: string; slug: string; from: number; to: number }[]
  meta: { id: string; slug: string; fields: string[] }[]
  cardMoves: { id: string; to: string }[]
  unknownCards: number
  progressCopy: ProgressCopy[]
  progressMove: { id: string; to: string }[]
  progressDelete: string[]
  bookmarkMove: string[]
  bookmarkDelete: string[]
  deckId: string | null
  newCards: Map<string, NewCard[]>
  credited: Set<string>
}

const TOPIC_SELECT = { id: true, slug: true, order: true, categoryId: true, parentTopicId: true, title: true, description: true, textContent: true, createdAt: true } as const

async function planFamily(oldSlug: string, successors: readonly string[]): Promise<Plan> {
  const plan: Plan = {
    oldSlug, successors, old: null, create: [], reorder: [], meta: [], cardMoves: [], unknownCards: 0,
    progressCopy: [], progressMove: [], progressDelete: [], bookmarkMove: [], bookmarkDelete: [], deckId: null,
    newCards: new Map(), credited: new Set(),
  }
  const old = await prisma.topic.findUnique({ where: { slug: oldSlug }, select: TOPIC_SELECT })
  plan.old = old
  const existing = await prisma.topic.findMany({ where: { slug: { in: [...successors] } }, select: TOPIC_SELECT })
  const bySlug = new Map(existing.map((t) => [t.slug, t]))
  const anchor = old ?? successors.map((s) => bySlug.get(s)).find(Boolean)
  if (!anchor) {
    console.log(`  ! ${oldSlug}: neither the retired row nor any successor exists — nothing to anchor the family to`)
    return plan
  }

  // 1. rows + order: the family runs consecutively from where it starts.
  const base = old ? old.order : Math.min(...existing.map((t) => t.order))
  const siblings = (await prisma.topic.findMany({
    where: { categoryId: anchor.categoryId, parentTopicId: anchor.parentTopicId },
    select: { id: true, slug: true, order: true },
    orderBy: { order: 'asc' },
  })).filter((t) => t.slug !== oldSlug && !successors.includes(t.slug))
  successors.forEach((slug, i) => {
    const row = bySlug.get(slug)
    if (!row) plan.create.push({ slug, order: base + i })
    else if (row.order !== base + i) plan.reorder.push({ id: row.id, slug, from: row.order, to: base + i })
  })
  siblings.filter((t) => t.order >= base).forEach((t, j) => {
    const to = base + successors.length + j
    if (t.order !== to) plan.reorder.push({ id: t.id, slug: t.slug, from: t.order, to })
  })
  if (CREATE_ONLY) return plan

  // 2. titles and topic-page text of existing successors.
  for (const row of existing) {
    const want = { title: MCAT_SPLIT_TITLES[row.slug], description: SUCCESSOR_META[row.slug]?.description, textContent: SUCCESSOR_META[row.slug]?.textContent }
    const fields = (Object.keys(want) as (keyof typeof want)[]).filter((k) => want[k] !== undefined && row[k] !== want[k])
    if (fields.length) plan.meta.push({ id: row.id, slug: row.slug, fields })
  }

  // 3. every card of the family to its topic.
  const map = CARD_MAP[oldSlug] ?? {}
  const holders = [...(old ? [old] : []), ...existing]
  const slugOf = new Map(holders.map((t) => [t.id, t.slug]))
  const cards = await prisma.flashcard.findMany({ where: { topicId: { in: holders.map((t) => t.id) } }, select: { id: true, topicId: true, front: true, back: true } })
  const familyFps = new Set<string>()
  for (const c of cards) {
    const fp = fingerprint(c.front, c.back)
    familyFps.add(fp)
    const here = slugOf.get(c.topicId)!
    const to = map[fp] ?? (here === oldSlug ? successors[0] : here)
    if (!map[fp]) plan.unknownCards++
    if (to !== here) plan.cardMoves.push({ id: c.id, to })
  }

  // 4. the retired row's progress, bookmarks and deck.
  const successorRows = existing.length
    ? await prisma.topicProgress.findMany({ where: { topicId: { in: existing.map((t) => t.id) } }, select: { userId: true, topicId: true } })
    : []
  const has = new Set(successorRows.map((r) => `${r.userId}|${slugOf.get(r.topicId)}`))
  if (old) {
    for (const r of await prisma.topicProgress.findMany({ where: { topicId: old.id } })) {
      if (r.status === 'MASTERED' || r.status === 'COMPLETED') {
        for (const to of successors) {
          if (has.has(`${r.userId}|${to}`)) continue
          has.add(`${r.userId}|${to}`)
          plan.progressCopy.push({
            userId: r.userId, status: r.status, masteryLevel: r.masteryLevel, completedAt: r.completedAt,
            timeSpent: to === successors[0] ? r.timeSpent : 0, masteredParts: r.status === 'MASTERED' ? r.masteredParts : null, to,
          })
          plan.credited.add(r.userId)
        }
        plan.progressDelete.push(r.id)
      } else if (has.has(`${r.userId}|${successors[0]}`)) {
        plan.progressDelete.push(r.id)
      } else {
        plan.progressMove.push({ id: r.id, to: successors[0] })
        has.add(`${r.userId}|${successors[0]}`)
      }
    }
    const bookmarks = await prisma.bookmark.findMany({ where: { topicSlug: oldSlug }, select: { id: true, userId: true } })
    const taken = new Set((await prisma.bookmark.findMany({ where: { topicSlug: successors[0], part: 1 }, select: { userId: true } })).map((b) => b.userId))
    for (const b of bookmarks) {
      if (taken.has(b.userId)) plan.bookmarkDelete.push(b.id)
      else { plan.bookmarkMove.push(b.id); taken.add(b.userId) }
    }
    plan.deckId = (await prisma.topicSlideDeck.findUnique({ where: { topicSlug: oldSlug }, select: { id: true } }))?.id ?? null
  }

  // 5. a live successor's credit passes to the topic that took its later parts.
  for (const move of PART_MOVES.filter((m) => successors.includes(m.to))) {
    const from = bySlug.get(move.from)
    if (!from) continue
    const cutoff = bySlug.get(move.to)?.createdAt ?? new Date()
    const rows = await prisma.topicProgress.findMany({
      where: { topicId: from.id, status: { in: ['MASTERED', 'COMPLETED'] }, completedAt: { lt: cutoff } },
    })
    for (const r of rows) {
      if (has.has(`${r.userId}|${move.to}`)) continue
      has.add(`${r.userId}|${move.to}`)
      plan.progressCopy.push({ userId: r.userId, status: r.status, masteryLevel: r.masteryLevel, completedAt: r.completedAt, timeSpent: 0, masteredParts: null, to: move.to })
      plan.credited.add(r.userId)
    }
  }

  // 6. new cards the family does not hold yet.
  for (const slug of successors) {
    const add = newCardsFor(slug).filter((c) => !familyFps.has(fingerprint(c.front, c.back)))
    if (add.length) plan.newCards.set(slug, add)
  }
  return plan
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY' : 'dry run', CREATE_ONLY ? '(create and order successors only)' : '')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)
  for (const slug of Object.values(MCAT_SPLIT_TOPICS).flat()) {
    if (!SUCCESSOR_META[slug] || !MCAT_SPLIT_TITLES[slug]) throw new Error(`${slug}: no title or topic-page text`)
  }

  const plans: Plan[] = []
  for (const [oldSlug, successors] of Object.entries(MCAT_SPLIT_TOPICS)) {
    const p = await planFamily(oldSlug, successors)
    plans.push(p)
    console.log(`\n${oldSlug}${p.old ? '' : ' (retired row already gone)'}`)
    for (const c of p.create) console.log(`  + create ${c.slug} (order ${c.order})`)
    for (const r of p.reorder) console.log(`  ~ ${r.slug}: order ${r.from} -> ${r.to}`)
    for (const m of p.meta) console.log(`  ~ ${m.slug}: ${m.fields.join(', ')}`)
    const moves = new Map<string, number>()
    for (const m of p.cardMoves) moves.set(m.to, (moves.get(m.to) ?? 0) + 1)
    for (const [to, n] of moves) console.log(`  > ${n} cards -> ${to}`)
    if (p.unknownCards) console.log(`  ! ${p.unknownCards} cards not in split-mcat-topics.cards.json`)
    if (p.progressCopy.length) console.log(`  > ${p.progressCopy.length} progress copies (completed/mastered credit) for ${p.credited.size} students`)
    if (p.progressMove.length) console.log(`  > ${p.progressMove.length} in-progress rows -> ${successors[0]}`)
    if (p.progressDelete.length) console.log(`  - ${p.progressDelete.length} retired progress rows removed after copying`)
    if (p.bookmarkMove.length + p.bookmarkDelete.length) console.log(`  > bookmarks: ${p.bookmarkMove.length} moved, ${p.bookmarkDelete.length} dropped (conflict)`)
    if (p.deckId) console.log('  - retired TopicSlideDeck deleted')
    if (p.old && !CREATE_ONLY) console.log('  - retired Topic row deleted')
    for (const [slug, cards] of p.newCards) console.log(`  + ${cards.length} new cards -> ${slug}`)
  }

  const work = plans.filter((p) =>
    p.create.length || p.reorder.length || p.meta.length || p.cardMoves.length || p.progressCopy.length || p.progressMove.length ||
    p.progressDelete.length || p.bookmarkMove.length || p.bookmarkDelete.length || p.deckId || p.newCards.size || (p.old && !CREATE_ONLY))
  if (!work.length) { console.log('\nNothing to do.'); return }
  if (!APPLY) { console.log('\nDRY RUN: nothing written. Re-run with APPLY=1 to apply.'); return }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `${BACKUP_PREFIX}${stamp}.json`)
  const oldIds = work.flatMap((p) => (p.old ? [p.old.id] : []))
  const touchedTopicIds = [...oldIds, ...work.flatMap((p) => [...p.reorder.map((r) => r.id), ...p.meta.map((m) => m.id)])]
  const [bTopics, bCards, bProgress, bBookmarks, bDecks, bExamples] = await Promise.all([
    prisma.topic.findMany({ where: { id: { in: touchedTopicIds } } }),
    prisma.flashcard.findMany({ where: { id: { in: work.flatMap((p) => p.cardMoves.map((m) => m.id)) } } }),
    prisma.topicProgress.findMany({ where: { topicId: { in: oldIds } } }),
    prisma.bookmark.findMany({ where: { topicSlug: { in: work.filter((p) => p.old).map((p) => p.oldSlug) } } }),
    prisma.topicSlideDeck.findMany({ where: { topicSlug: { in: work.filter((p) => p.old).map((p) => p.oldSlug) } } }),
    prisma.exampleProblem.findMany({ where: { topicId: { in: oldIds } } }),
  ])
  fs.writeFileSync(backupPath, JSON.stringify({ createdAt: new Date().toISOString(), host, topics: bTopics, flashcards: bCards, topicProgress: bProgress, bookmarks: bBookmarks, topicSlideDecks: bDecks, exampleProblems: bExamples }, null, 1))
  console.log(`\nBackup: ${backupPath}`)

  await prisma.$transaction(async (tx) => {
    for (const p of work) {
      const anchor = p.old ?? (await tx.topic.findFirst({ where: { slug: { in: [...p.successors] } }, select: TOPIC_SELECT }))
      if (!anchor) throw new Error(`${p.oldSlug}: family has no anchor row; aborting (nothing written)`)
      // Orders first (to free the numbers), then the new rows.
      for (const r of p.reorder) await tx.topic.update({ where: { id: r.id }, data: { order: r.to } })
      for (const c of p.create) {
        const meta = SUCCESSOR_META[c.slug]
        await tx.topic.create({
          data: {
            slug: c.slug, title: MCAT_SPLIT_TITLES[c.slug], description: meta.description, textContent: meta.textContent,
            order: c.order, categoryId: anchor.categoryId, parentTopicId: anchor.parentTopicId, isPremium: false,
          },
        })
      }
      if (CREATE_ONLY) continue
      for (const m of p.meta) {
        await tx.topic.update({ where: { id: m.id }, data: { title: MCAT_SPLIT_TITLES[m.slug], description: SUCCESSOR_META[m.slug].description, textContent: SUCCESSOR_META[m.slug].textContent } })
      }
      const ids = new Map((await tx.topic.findMany({ where: { slug: { in: [...p.successors] } }, select: { id: true, slug: true } })).map((t) => [t.slug, t.id]))
      const idOf = (slug: string) => { const id = ids.get(slug); if (!id) throw new Error(`${slug} has no row; aborting (nothing written)`); return id }
      const byDest = new Map<string, string[]>()
      for (const m of p.cardMoves) byDest.set(m.to, [...(byDest.get(m.to) ?? []), m.id])
      for (const [to, cardIds] of byDest) await tx.flashcard.updateMany({ where: { id: { in: cardIds } }, data: { topicId: idOf(to) } })
      for (const c of p.progressCopy) {
        await tx.topicProgress.create({
          data: { userId: c.userId, topicId: idOf(c.to), status: c.status, masteryLevel: c.masteryLevel, completedAt: c.completedAt, timeSpent: c.timeSpent, masteredParts: c.masteredParts ?? undefined },
        })
      }
      for (const m of p.progressMove) {
        await tx.topicProgress.update({ where: { id: m.id }, data: { topicId: idOf(m.to), masteryLevel: 0, failedExitParts: undefined, masteredParts: undefined } })
      }
      if (p.old) {
        if (p.progressDelete.length) await tx.topicProgress.deleteMany({ where: { id: { in: p.progressDelete }, topicId: p.old.id } })
        if (p.bookmarkDelete.length) await tx.bookmark.deleteMany({ where: { id: { in: p.bookmarkDelete } } })
        for (const id of p.bookmarkMove) await tx.bookmark.update({ where: { id }, data: { topicSlug: p.successors[0], part: 1 } })
        if (p.deckId) await tx.topicSlideDeck.delete({ where: { id: p.deckId } })
        const [cardsLeft, progressLeft] = await Promise.all([
          tx.flashcard.count({ where: { topicId: p.old.id } }),
          tx.topicProgress.count({ where: { topicId: p.old.id } }),
        ])
        if (cardsLeft || progressLeft) throw new Error(`${p.oldSlug} still has ${cardsLeft} cards / ${progressLeft} progress rows; aborting (nothing written)`)
        await tx.topic.delete({ where: { id: p.old.id } })
      }
      for (const [slug, cards] of p.newCards) {
        await tx.flashcard.createMany({
          data: cards.map((c) => ({ topicId: idOf(slug), front: c.front, back: c.back, hint: c.hint ?? null, examYield: c.yield, lessonPart: c.part ?? null, isPremium: false })),
        })
      }
    }
  }, { timeout: 120_000, maxWait: 20_000 })
  console.log('\nAPPLIED.')

  if (CREATE_ONLY) return
  // Unlock any cards that are new in the successor decks for credited students.
  // Imported here, after dotenv has pointed DATABASE_URL at the right database.
  const credited = work.flatMap((p) => [...p.credited].map((userId) => ({ userId, slugs: p.successors })))
  if (credited.length) {
    const { maybeUnlockFlashcards } = await import('../src/lib/flashcard-unlock')
    for (const { userId, slugs } of credited) {
      for (const slug of slugs) {
        const r = await maybeUnlockFlashcards(userId, slug)
        console.log(`  unlock ${slug} for ${userId}: ${r.unlocked ? 'unlocked' : 'still locked (no exit attempt or lesson)'}`)
      }
    }
  }
  console.log('Next: revalidate the MCAT topic pages, then regenerate every family deck:')
  for (const p of work) for (const s of p.successors) console.log(`  PROD=1 npx tsx scripts/generate-topic-slide-decks.ts mcat-prep --topic=${s}`)
}

main()
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
