/**
 * ASVAB flashcards: load the content agents' card files into Flashcard rows
 * (asvab-pipeline PLAN.md file contract).
 *
 * Input: every `<unit>.json` in the cards directory (default
 * ~/.claude/projects/<proj>/asvab-pipeline/cards, override with CARDS_DIR),
 * each an array of
 *   { topicSlug, front, back, hint?, examYield: 'ULTRA_HIGH'|'HIGH'|'MEDIUM'|'LOW' }
 * where topicSlug is an ASVAB topic (course-includes ASVAB_CATEGORIES).
 *
 * Per card, keyed by (topic, front) — idempotent:
 *   - no row with that front on that topic -> CREATE (with examYield);
 *   - a row exists and back / hint / examYield differ -> UPDATE those fields;
 *   - otherwise nothing.
 * Cards are never deleted. Invalid cards (unknown topic, empty side, bad
 * yield, duplicate front within a topic) abort the run before any write.
 * Files named "<name> 2.json" (iCloud conflict copies) are refused.
 *
 * Safety (same rails as prisma/create-asvab-course.ts):
 *   - Dry run unless APPLY=1; the dry run only SELECTs.
 *   - SEED_DB=prod loads .env, anything else .env.local; APPLY with
 *     SEED_DB=prod requires the Neon host, APPLY without it refuses one.
 *   - JSON backup of every row it updates: scripts/_seed-asvab-flashcards-backup-<ts>.json.
 *   - One transaction. Topic rows must exist (run create-asvab-course.ts first).
 *
 * Run (repo root):
 *   npx tsx prisma/seed-asvab-flashcards.ts                       # dry run, local
 *   APPLY=1 npx tsx prisma/seed-asvab-flashcards.ts               # local, writes
 *   SEED_DB=prod npx tsx prisma/seed-asvab-flashcards.ts          # dry run, prod
 *   SEED_DB=prod APPLY=1 npx tsx prisma/seed-asvab-flashcards.ts  # prod, writes
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { PrismaClient, type ExamYield } from '@prisma/client'
import { ASVAB_TOPIC_SLUGS } from '../src/lib/course-includes'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
const CARDS_DIR =
  process.env.CARDS_DIR ??
  path.join(os.homedir(), '.claude', 'projects', '-Users-brendancusack-Projects-AP-Calculus-Website---Ad-Revenue-Based', 'asvab-pipeline', 'cards')
const YIELDS: readonly ExamYield[] = ['ULTRA_HIGH', 'HIGH', 'MEDIUM', 'LOW']

interface CardInput {
  topicSlug: string
  front: string
  back: string
  hint?: string
  examYield: ExamYield
}

const prisma = new PrismaClient()

function loadCards(): { cards: (CardInput & { file: string })[]; errors: string[] } {
  const errors: string[] = []
  const cards: (CardInput & { file: string })[] = []
  if (!fs.existsSync(CARDS_DIR)) return { cards, errors: [`cards directory not found: ${CARDS_DIR}`] }
  const files = fs.readdirSync(CARDS_DIR).filter((f) => f.endsWith('.json')).sort()
  const valid = new Set(ASVAB_TOPIC_SLUGS)
  for (const file of files) {
    if (/ 2\.json$/.test(file)) {
      errors.push(`${file}: looks like an iCloud conflict copy; delete it first`)
      continue
    }
    let raw: unknown
    try {
      raw = JSON.parse(fs.readFileSync(path.join(CARDS_DIR, file), 'utf8'))
    } catch (e) {
      errors.push(`${file}: invalid JSON (${(e as Error).message})`)
      continue
    }
    if (!Array.isArray(raw)) {
      errors.push(`${file}: not an array`)
      continue
    }
    raw.forEach((c: Partial<CardInput>, i) => {
      const where = `${file}[${i}]`
      if (!c || typeof c !== 'object') return errors.push(`${where}: not an object`)
      if (typeof c.topicSlug !== 'string' || !valid.has(c.topicSlug)) return errors.push(`${where}: unknown topicSlug ${JSON.stringify(c.topicSlug)}`)
      if (typeof c.front !== 'string' || !c.front.trim()) return errors.push(`${where}: empty front`)
      if (typeof c.back !== 'string' || !c.back.trim()) return errors.push(`${where}: empty back`)
      if (c.hint !== undefined && typeof c.hint !== 'string') return errors.push(`${where}: hint must be a string`)
      if (!YIELDS.includes(c.examYield as ExamYield)) return errors.push(`${where}: examYield must be one of ${YIELDS.join(', ')}`)
      cards.push({ file, topicSlug: c.topicSlug, front: c.front.trim(), back: c.back.trim(), hint: c.hint?.trim() || undefined, examYield: c.examYield as ExamYield })
    })
  }
  const seen = new Set<string>()
  for (const c of cards) {
    const k = `${c.topicSlug}\u0000${c.front}`
    if (seen.has(k)) errors.push(`${c.file}: duplicate front on ${c.topicSlug}: ${JSON.stringify(c.front.slice(0, 60))}`)
    seen.add(k)
  }
  return { cards, errors }
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY (writes, one transaction)' : 'DRY RUN (no writes)')
  console.log('Cards:', CARDS_DIR)
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  const { cards, errors } = loadCards()
  if (errors.length) {
    console.log('\nINVALID INPUT (nothing written):')
    for (const e of errors) console.log('  ' + e)
    throw new Error(`${errors.length} invalid card(s)`)
  }
  console.log(`Loaded ${cards.length} card(s)`)

  const topics = await prisma.topic.findMany({ where: { slug: { in: [...new Set(cards.map((c) => c.topicSlug))] } }, select: { id: true, slug: true } })
  const topicId = new Map(topics.map((t) => [t.slug, t.id]))
  const missingTopics = [...new Set(cards.map((c) => c.topicSlug))].filter((s) => !topicId.has(s))
  if (missingTopics.length) throw new Error(`Topic rows missing (run prisma/create-asvab-course.ts first): ${missingTopics.join(', ')}`)

  const existing = await prisma.flashcard.findMany({
    where: { topicId: { in: topics.map((t) => t.id) } },
    select: { id: true, topicId: true, front: true, back: true, hint: true, examYield: true },
  })
  const byKey = new Map(existing.map((r) => [`${r.topicId}\u0000${r.front.trim()}`, r]))

  const creates: { topicId: string; front: string; back: string; hint: string | null; examYield: ExamYield }[] = []
  const updates: { id: string; data: { back: string; hint: string | null; examYield: ExamYield } }[] = []
  const perTopic = new Map<string, { create: number; update: number; same: number }>()
  for (const c of cards) {
    const tid = topicId.get(c.topicSlug)!
    const stat = perTopic.get(c.topicSlug) ?? { create: 0, update: 0, same: 0 }
    const row = byKey.get(`${tid}\u0000${c.front}`)
    const hint = c.hint ?? null
    if (!row) {
      creates.push({ topicId: tid, front: c.front, back: c.back, hint, examYield: c.examYield })
      stat.create++
    } else if (row.back !== c.back || (row.hint ?? null) !== hint || row.examYield !== c.examYield) {
      updates.push({ id: row.id, data: { back: c.back, hint, examYield: c.examYield } })
      stat.update++
    } else {
      stat.same++
    }
    perTopic.set(c.topicSlug, stat)
  }

  console.log('\nPer topic (create / update / unchanged):')
  for (const slug of ASVAB_TOPIC_SLUGS) {
    const s = perTopic.get(slug)
    if (s) console.log(`  ${slug}: +${s.create} ~${s.update} =${s.same}`)
  }
  const yieldCounts = YIELDS.map((y) => `${y} ${cards.filter((c) => c.examYield === y).length}`).join(' / ')
  console.log(`\nYield mix: ${yieldCounts}`)
  if (creates.length === 0 && updates.length === 0) {
    console.log('\nNothing to do.')
    return
  }
  console.log(`\nSummary: create ${creates.length}, update ${updates.length}`)
  if (!APPLY) {
    console.log('\nDRY RUN: no writes. Re-run with APPLY=1 to apply.')
    return
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `_seed-asvab-flashcards-backup-${stamp}.json`)
  const before = await prisma.flashcard.findMany({ where: { id: { in: updates.map((u) => u.id) } } })
  fs.writeFileSync(backupPath, JSON.stringify({ createdAt: new Date().toISOString(), host, updated: before }, null, 1))
  console.log(`\nBackup: ${backupPath}`)

  await prisma.$transaction(
    async (tx) => {
      if (creates.length) await tx.flashcard.createMany({ data: creates })
      for (const u of updates) await tx.flashcard.update({ where: { id: u.id }, data: u.data })
    },
    { timeout: 120_000 },
  )
  console.log('Applied.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
