/**
 * MCAT: split a combined topic into one topic per live-class lesson (Nov 2026,
 * owner ruling — see src/lib/mcat-topic-split.ts for the slug pairs).
 *
 * For each retired slug in MCAT_SPLIT_TOPICS this script:
 *   1. creates the successor Topic rows when missing (same category and
 *      parent, taking the old row's place in the parent's order; later
 *      siblings shift down);
 *   2. moves every flashcard to the successor named for its fingerprint in
 *      prisma/split-mcat-topics.cards.json (unknown cards go to the first
 *      successor, reported). FlashcardProgress rides along by card id, so
 *      review history is kept; cards are never deleted;
 *   3. migrates TopicProgress: MASTERED / COMPLETED rows are copied to EVERY
 *      successor (owner: a student who mastered the old topic gets credit for
 *      both halves); IN_PROGRESS / NOT_STARTED rows move to the first successor
 *      with masteryLevel reset (the old part numbers mean nothing in the new
 *      lessons). A student who already has a row on a successor keeps it;
 *   4. moves bookmarks to the first successor, part 1 (dropped on conflict);
 *   5. deletes the old TopicSlideDeck and the old Topic row (example problems
 *      and prerequisite links cascade; everything is in the backup);
 *   6. creates the successor's NEW cards from prisma/split-mcat-cards/<slug>.json
 *      (with their exam-yield label and lesson part), skipping any whose
 *      fingerprint the successor already holds. This step also runs once the
 *      old row is gone, so cards added later are picked up by a re-run.
 * ExitQuizAttempt rows stay on the old slug: the old exit-quiz loader stays
 * registered, and mcatCreditSlugs() counts those attempts for each successor.
 * After the transaction, re-runs the flashcard unlock for students who were
 * credited, so cards that are new in the successor decks unlock too.
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
 * Production order: CREATE_ONLY=1 run first (the successor rows must exist
 * before the deploy, or the 308 and the diagnostic map point at missing
 * topics and mcat-plan's safety valve marks them satisfied), then deploy, then
 * the full run, then
 *   PROD=1 npx tsx scripts/generate-topic-slide-decks.ts mcat-prep --topic=<successor>
 * for each successor. prisma/seed-all.ts runs it last (APPLY) because
 * prisma/add-mcat-subtopics.ts no longer lists the old rows but older seeds may.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient, type ExamYield, type ProgressStatus } from '@prisma/client'
import { MCAT_SPLIT_TITLES, MCAT_SPLIT_TOPICS } from '../src/lib/mcat-topic-split'
import { fingerprint } from '../src/lib/flashcard-yield-artifact'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
/** Create the successor rows only (the pre-deploy step); retire nothing. */
const CREATE_ONLY = process.env.CREATE_ONLY === '1'
const BACKUP_PREFIX = '_split-mcat-topics-backup-'

const CARD_MAP: Record<string, Record<string, string>> = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'split-mcat-topics.cards.json'), 'utf8'),
)

type NewCard = { front: string; back: string; hint?: string; yield: ExamYield; part?: number }
/** Cards written for a successor lesson, by slug (prisma/split-mcat-cards/<slug>.json). */
function newCardsFor(slug: string): NewCard[] {
  const file = path.join(__dirname, 'split-mcat-cards', `${slug}.json`)
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []
}

/** Description + topic-page summary for each successor. */
const SUCCESSOR_META: Record<string, { description: string; textContent: string }> = {
  'mcat-physics-electricity-dc-circuits-mcat': {
    description: "Current, voltage, Ohm's law, resistivity, series and parallel resistors, Kirchhoff's rules, and power",
    textContent: `# Circuits Part 1: Current & Resistance

## Current and Voltage
Current is charge flow per time, $I = Q/t$; conventional current points the way positive charge moves. Voltage is energy per charge, $V = W/q$: the push that drives current. Metals conduct with electrons; body fluids conduct with ions moving both ways.

## Resistance and Ohm's Law
$$V = IR \\qquad R = \\rho\\frac{L}{A}$$
Longer wires resist more, thicker wires less, and most metals resist more when hot.

## Series, Parallel and Kirchhoff
Series resistors share one current and add: $R_{eq} = R_1 + R_2 + \\cdots$. Parallel resistors share one voltage and combine reciprocally, so the equivalent is below the smallest branch. The junction rule conserves charge; the loop rule conserves energy.

## Power
$$P = IV = I^2R = \\frac{V^2}{R}$$
In series the larger resistor dissipates more ($I^2R$); in parallel the smaller one does ($V^2/R$).

## Key Takeaways
- Series: same current, voltages divide. Parallel: same voltage, currents divide.
- Adding a parallel branch always lowers total resistance and raises total current.
- Collapse networks from the inside out, then walk back out for branch values.
- Pick the power formula that holds the known quantity constant.`,
  },
  'mcat-physics-electricity-emf-capacitors-mcat': {
    description: 'EMF and internal resistance, meters, capacitors and dielectrics, RC circuits, and bioelectricity',
    textContent: `# Circuits Part 2: EMF & Capacitors

## EMF and Real Batteries
A real battery is an ideal EMF in series with an internal resistance: $V_{terminal} = \\varepsilon - Ir$, so terminal voltage sags as more current is drawn. Ammeters go in series with almost no resistance; voltmeters go in parallel with very high resistance.

## Capacitors
$$C = \\frac{Q}{V} \\qquad C = \\kappa\\varepsilon_0\\frac{A}{d} \\qquad U = \\tfrac{1}{2}CV^2$$
A dielectric raises capacitance. With the battery connected, voltage is fixed; disconnected, charge is fixed. Capacitors combine opposite to resistors: directly in parallel, reciprocally in series.

## RC Circuits
An uncharged capacitor acts like a wire the instant a switch closes and like a break once charged. The time constant $\\tau = RC$ sets the pace: about 63% charged after one $\\tau$, essentially full after about $5\\tau$.

## Bioelectricity
The cell membrane is a capacitor (the bilayer) in parallel with resistors (the ion channels). Myelin lowers membrane capacitance and raises membrane resistance, speeding conduction. A defibrillator stores energy in a capacitor and releases it in a brief pulse.

## Key Takeaways
- Terminal voltage is below the EMF whenever current flows out of a battery.
- Decide first whether Q or V is held constant, then choose the energy formula.
- Capacitor combination rules are the reverse of resistor rules.
- Steady state: no current through a capacitor branch.`,
  },
}

const prisma = new PrismaClient()

type Plan = {
  oldSlug: string
  old: { id: string; categoryId: string; parentTopicId: string | null; order: number } | null
  create: { slug: string; order: number }[]
  shift: { id: string; slug: string; from: number; to: number }[]
  cardMoves: Map<string, string[]> // successor slug -> card ids
  unknownCards: string[]
  progressCopy: { userId: string; status: ProgressStatus; masteryLevel: number; completedAt: Date | null; timeSpent: number; masteredParts: unknown; to: string }[]
  progressMove: { id: string; userId: string; to: string }[]
  progressDelete: string[]
  bookmarkMove: string[]
  bookmarkDelete: string[]
  deckId: string | null
  credited: Set<string>
}

async function planFor(oldSlug: string, successors: readonly string[]): Promise<Plan> {
  const plan: Plan = {
    oldSlug, old: null, create: [], shift: [], cardMoves: new Map(), unknownCards: [],
    progressCopy: [], progressMove: [], progressDelete: [], bookmarkMove: [], bookmarkDelete: [], deckId: null, credited: new Set(),
  }
  const old = await prisma.topic.findUnique({
    where: { slug: oldSlug },
    select: { id: true, categoryId: true, parentTopicId: true, order: true },
  })
  const existing = await prisma.topic.findMany({ where: { slug: { in: [...successors] } }, select: { id: true, slug: true } })
  const have = new Set(existing.map((t) => t.slug))
  if (!old) {
    if (have.size !== successors.length) console.log(`  ! ${oldSlug}: no old row and successors missing (${successors.filter((s) => !have.has(s)).join(', ')}) — nothing to anchor them to`)
    return plan
  }
  plan.old = old

  const missing = successors.filter((s) => !have.has(s))
  if (missing.length) {
    // Take the old row's place: successor i gets old.order + i; siblings after shift down.
    const extra = successors.length - 1
    successors.forEach((slug, i) => { if (!have.has(slug)) plan.create.push({ slug, order: old.order + i }) })
    const siblings = await prisma.topic.findMany({
      where: { parentTopicId: old.parentTopicId, categoryId: old.categoryId, order: { gt: old.order }, slug: { notIn: [...successors] } },
      select: { id: true, slug: true, order: true },
    })
    if (have.size === 0) for (const s of siblings) plan.shift.push({ id: s.id, slug: s.slug, from: s.order, to: s.order + extra })
  }
  if (CREATE_ONLY) return plan

  const map = CARD_MAP[oldSlug] ?? {}
  const cards = await prisma.flashcard.findMany({ where: { topicId: old.id }, select: { id: true, front: true, back: true } })
  for (const c of cards) {
    const to = map[fingerprint(c.front, c.back)]
    if (!to) plan.unknownCards.push(c.id)
    const dest = to ?? successors[0]
    plan.cardMoves.set(dest, [...(plan.cardMoves.get(dest) ?? []), c.id])
  }

  const rows = await prisma.topicProgress.findMany({ where: { topicId: old.id } })
  const successorRows = existing.length
    ? await prisma.topicProgress.findMany({ where: { topicId: { in: existing.map((t) => t.id) } }, select: { userId: true, topicId: true } })
    : []
  const idToSlug = new Map(existing.map((t) => [t.id, t.slug]))
  const hasRow = new Set(successorRows.map((r) => `${r.userId}|${idToSlug.get(r.topicId)}`))
  for (const r of rows) {
    if (r.status === 'MASTERED' || r.status === 'COMPLETED') {
      for (const to of successors) {
        if (hasRow.has(`${r.userId}|${to}`)) continue
        plan.progressCopy.push({
          userId: r.userId, status: r.status, masteryLevel: r.masteryLevel, completedAt: r.completedAt,
          timeSpent: to === successors[0] ? r.timeSpent : 0,
          masteredParts: r.status === 'MASTERED' ? r.masteredParts : null, to,
        })
        plan.credited.add(r.userId)
      }
      plan.progressDelete.push(r.id)
    } else if (hasRow.has(`${r.userId}|${successors[0]}`)) {
      plan.progressDelete.push(r.id)
    } else {
      plan.progressMove.push({ id: r.id, userId: r.userId, to: successors[0] })
    }
  }

  const bookmarks = await prisma.bookmark.findMany({ where: { topicSlug: oldSlug }, select: { id: true, userId: true } })
  const taken = new Set(
    (await prisma.bookmark.findMany({ where: { topicSlug: successors[0], part: 1 }, select: { userId: true } })).map((b) => b.userId),
  )
  for (const b of bookmarks) {
    if (taken.has(b.userId)) plan.bookmarkDelete.push(b.id)
    else { plan.bookmarkMove.push(b.id); taken.add(b.userId) }
  }

  plan.deckId = (await prisma.topicSlideDeck.findUnique({ where: { topicSlug: oldSlug }, select: { id: true } }))?.id ?? null
  return plan
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY' : 'dry run', CREATE_ONLY ? '(create successors only)' : '')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  // New cards per successor: those whose fingerprint the successor will not
  // already hold once the old row's cards have moved in.
  const newCards = new Map<string, NewCard[]>()
  if (!CREATE_ONLY) {
    for (const [oldSlug, successors] of Object.entries(MCAT_SPLIT_TOPICS)) {
      const moving = await prisma.flashcard.findMany({ where: { topic: { slug: oldSlug } }, select: { front: true, back: true } })
      const map = CARD_MAP[oldSlug] ?? {}
      for (const slug of successors) {
        const held = await prisma.flashcard.findMany({ where: { topic: { slug } }, select: { front: true, back: true } })
        const have = new Set([
          ...held.map((c) => fingerprint(c.front, c.back)),
          ...moving.map((c) => fingerprint(c.front, c.back)).filter((fp) => (map[fp] ?? successors[0]) === slug),
        ])
        const add = newCardsFor(slug).filter((c) => !have.has(fingerprint(c.front, c.back)))
        if (add.length) newCards.set(slug, add)
      }
    }
  }

  const plans: Plan[] = []
  for (const [oldSlug, successors] of Object.entries(MCAT_SPLIT_TOPICS)) {
    const p = await planFor(oldSlug, successors)
    plans.push(p)
    console.log(`\n${oldSlug}${p.old ? '' : ' (no row — already retired)'}`)
    for (const c of p.create) console.log(`  + create ${c.slug} (order ${c.order})`)
    for (const s of p.shift) console.log(`  ~ ${s.slug}: order ${s.from} -> ${s.to}`)
    for (const [to, ids] of p.cardMoves) console.log(`  > ${ids.length} cards -> ${to}`)
    if (p.unknownCards.length) console.log(`  ! ${p.unknownCards.length} cards not in split-mcat-topics.cards.json (sent to ${successors[0]})`)
    if (p.progressCopy.length) console.log(`  > ${p.progressCopy.length} progress copies (completed/mastered credit) for ${p.credited.size} students`)
    if (p.progressMove.length) console.log(`  > ${p.progressMove.length} in-progress rows -> ${successors[0]}`)
    if (p.progressDelete.length) console.log(`  - ${p.progressDelete.length} old progress rows removed after copying`)
    if (p.bookmarkMove.length + p.bookmarkDelete.length) console.log(`  > bookmarks: ${p.bookmarkMove.length} moved, ${p.bookmarkDelete.length} dropped (conflict)`)
    if (p.deckId) console.log('  - old TopicSlideDeck deleted')
    if (p.old && !CREATE_ONLY) console.log('  - old Topic row deleted')
    for (const slug of successors) if (newCards.get(slug)) console.log(`  + ${newCards.get(slug)!.length} new cards -> ${slug}`)
  }

  const work = plans.filter((p) => p.old && (p.create.length || !CREATE_ONLY))
  if (!work.length && !newCards.size) { console.log('\nNothing to do.'); return }
  if (!APPLY) { console.log('\nDRY RUN: nothing written. Re-run with APPLY=1 to apply.'); return }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `${BACKUP_PREFIX}${stamp}.json`)
  const oldIds = work.map((p) => p.old!.id)
  const [bTopics, bCards, bProgress, bBookmarks, bDecks, bExamples] = await Promise.all([
    prisma.topic.findMany({ where: { id: { in: [...oldIds, ...work.flatMap((p) => p.shift.map((s) => s.id))] } } }),
    prisma.flashcard.findMany({ where: { topicId: { in: oldIds } } }),
    prisma.topicProgress.findMany({ where: { topicId: { in: oldIds } } }),
    prisma.bookmark.findMany({ where: { topicSlug: { in: work.map((p) => p.oldSlug) } } }),
    prisma.topicSlideDeck.findMany({ where: { topicSlug: { in: work.map((p) => p.oldSlug) } } }),
    prisma.exampleProblem.findMany({ where: { topicId: { in: oldIds } } }),
  ])
  fs.writeFileSync(backupPath, JSON.stringify({ createdAt: new Date().toISOString(), host, topics: bTopics, flashcards: bCards, topicProgress: bProgress, bookmarks: bBookmarks, topicSlideDecks: bDecks, exampleProblems: bExamples }, null, 1))
  console.log(`\nBackup: ${backupPath}`)

  await prisma.$transaction(async (tx) => {
    for (const p of work) {
      const old = p.old!
      for (const s of p.shift) await tx.topic.update({ where: { id: s.id }, data: { order: s.to } })
      for (const c of p.create) {
        const meta = SUCCESSOR_META[c.slug]
        if (!meta) throw new Error(`${c.slug}: no SUCCESSOR_META; aborting (nothing written)`)
        await tx.topic.create({
          data: {
            slug: c.slug, title: MCAT_SPLIT_TITLES[c.slug] ?? c.slug, description: meta.description, textContent: meta.textContent,
            order: c.order, categoryId: old.categoryId, parentTopicId: old.parentTopicId, isPremium: false,
          },
        })
      }
      if (CREATE_ONLY) continue
      const ids = new Map((await tx.topic.findMany({ where: { slug: { in: [...MCAT_SPLIT_TOPICS[p.oldSlug]] } }, select: { id: true, slug: true } })).map((t) => [t.slug, t.id]))
      const idOf = (slug: string) => { const id = ids.get(slug); if (!id) throw new Error(`${slug} has no row; aborting (nothing written)`); return id }
      for (const [to, cardIds] of p.cardMoves) await tx.flashcard.updateMany({ where: { id: { in: cardIds }, topicId: old.id }, data: { topicId: idOf(to) } })
      for (const c of p.progressCopy) {
        await tx.topicProgress.create({
          data: {
            userId: c.userId, topicId: idOf(c.to), status: c.status, masteryLevel: c.masteryLevel, completedAt: c.completedAt,
            timeSpent: c.timeSpent, masteredParts: c.masteredParts ?? undefined,
          },
        })
      }
      for (const m of p.progressMove) {
        await tx.topicProgress.update({ where: { id: m.id }, data: { topicId: idOf(m.to), masteryLevel: 0, failedExitParts: undefined, masteredParts: undefined } })
      }
      if (p.progressDelete.length) await tx.topicProgress.deleteMany({ where: { id: { in: p.progressDelete }, topicId: old.id } })
      if (p.bookmarkDelete.length) await tx.bookmark.deleteMany({ where: { id: { in: p.bookmarkDelete } } })
      for (const id of p.bookmarkMove) await tx.bookmark.update({ where: { id }, data: { topicSlug: MCAT_SPLIT_TOPICS[p.oldSlug][0], part: 1 } })
      if (p.deckId) await tx.topicSlideDeck.delete({ where: { id: p.deckId } })
      const [cardsLeft, progressLeft] = await Promise.all([
        tx.flashcard.count({ where: { topicId: old.id } }),
        tx.topicProgress.count({ where: { topicId: old.id } }),
      ])
      if (cardsLeft || progressLeft) throw new Error(`${p.oldSlug} still has ${cardsLeft} cards / ${progressLeft} progress rows; aborting (nothing written)`)
      await tx.topic.delete({ where: { id: old.id } })
    }
    for (const [slug, cards] of newCards) {
      const topic = await tx.topic.findUnique({ where: { slug }, select: { id: true } })
      if (!topic) throw new Error(`${slug} has no row for its new cards; aborting (nothing written)`)
      await tx.flashcard.createMany({
        data: cards.map((c) => ({ topicId: topic.id, front: c.front, back: c.back, hint: c.hint ?? null, examYield: c.yield, lessonPart: c.part ?? null, isPremium: false })),
      })
    }
  }, { timeout: 120_000, maxWait: 20_000 })
  console.log('\nAPPLIED.')

  // Unlock any cards that are new in the successor decks for credited students.
  // Imported here, after dotenv has pointed DATABASE_URL at the right database.
  const credited = work.flatMap((p) => [...p.credited].map((userId) => ({ userId, slugs: MCAT_SPLIT_TOPICS[p.oldSlug] })))
  if (credited.length && !CREATE_ONLY) {
    const { maybeUnlockFlashcards } = await import('../src/lib/flashcard-unlock')
    for (const { userId, slugs } of credited) {
      for (const slug of slugs) {
        const r = await maybeUnlockFlashcards(userId, slug)
        console.log(`  unlock ${slug} for ${userId}: ${r.unlocked ? 'unlocked' : 'still locked (no exit attempt or lesson)'}`)
      }
    }
  }
  if (!CREATE_ONLY) {
    console.log('Next: revalidate the MCAT topic pages, then regenerate the successor decks:')
    for (const p of work) for (const s of MCAT_SPLIT_TOPICS[p.oldSlug]) console.log(`  PROD=1 npx tsx scripts/generate-topic-slide-decks.ts mcat-prep --topic=${s}`)
  }
}

main()
  .catch((err) => {
    console.error(err)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
