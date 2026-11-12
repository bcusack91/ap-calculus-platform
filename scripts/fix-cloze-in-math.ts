/**
 * Repair cloze flashcards whose deletion opens INSIDE a `$…$` span, e.g.
 *
 *   Wire resistance is $R = {{c1::\rho L/A}}$, so doubling the radius …
 *
 * The cloze renderer splits the text at the deletion BEFORE the math is
 * parsed, so the prose part `$R = ` keeps a dangling delimiter and students
 * see literal dollar signs around a half-rendered formula (owner report,
 * 2026-11-12). The fix lifts the deletion out of the math:
 *
 *   Wire resistance is $R =$ {{c1::$\rho L/A$}}, so doubling the radius …
 *
 * Every rewritten side is replayed through the real render pipeline part by
 * part (formatFlashcardContent → escapeCurrencyMath → KaTeX) before anything
 * is written; a card whose rewrite would not render cleanly is reported and
 * skipped.
 *
 * Mirrors kept in sync when applying:
 *   - prisma/flashcard-exports/<course>/*.json   (the committed prod export)
 *   - prisma/flashcard-yield/*.json              (front + fp, since the
 *     exam-yield fingerprint is sha256(front + '\0' + back)[:12])
 *
 *   npx tsx scripts/fix-cloze-in-math.ts                      # dry run, local
 *   SEED_DB=prod npx tsx scripts/fix-cloze-in-math.ts         # dry run, prod
 *   SEED_DB=prod APPLY=1 npx tsx scripts/fix-cloze-in-math.ts # apply to prod + mirrors
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'fs'
import path from 'path'
import katex from 'katex'
import { PrismaClient } from '@prisma/client'
import { clozeInsideMath, liftClozeOutOfMath, detectCloze, mathizeClozeAnswer } from '../src/lib/cloze-utils'
import { formatFlashcardContent } from '../src/lib/format-flashcard-content'
import { escapeCurrencyMath } from '../src/lib/escape-currency-math'
import { fingerprint, ARTIFACT_DIR, EXPORT_ROOT, type ArtifactEntry } from '../src/lib/flashcard-yield-artifact'

const IS_PROD = process.env.SEED_DB === 'prod'
const APPLY = process.env.APPLY === '1'

/** Replay the cloze render path: each prose part and each revealed answer must be balanced, compilable math. */
function renderProblems(text: string): string[] {
  const problems: string[] = []
  const compile = (piece: string, label: string) => {
    const processed = escapeCurrencyMath(formatFlashcardContent(piece))
    const dollars = (processed.replace(/\\\$/g, '').match(/\$/g) ?? []).length
    if (dollars % 2 === 1) problems.push(`${label}: unbalanced $ in "${processed}"`)
    for (const m of processed.matchAll(/(?<!\\)\$((?:\\.|[^$\n])+?)(?<!\\)\$/g)) {
      try {
        katex.renderToString(m[1], { throwOnError: true, strict: (_c: string, msg: string) => { problems.push(`${label}: ${msg}`); return 'ignore' } } as never)
      } catch (e) {
        problems.push(`${label}: ${(e as Error).message.split('\n')[0]}`)
      }
    }
  }
  const data = detectCloze(text)
  if (!data.isCloze || !data.parts) { compile(text, 'text'); return problems }
  for (const part of data.parts) compile(part.isCloze ? mathizeClozeAnswer(part.text) : part.text, part.isCloze ? 'answer' : 'prose')
  return problems
}

type Change = { id: string; topicSlug: string; side: 'front' | 'back'; oldFront: string; oldBack: string; newFront: string; newBack: string }

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY' : 'dry run')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  const prisma = new PrismaClient()
  const cards = await prisma.flashcard.findMany({
    where: { OR: [{ front: { contains: '{{' } }, { back: { contains: '{{' } }] },
    select: { id: true, front: true, back: true, topic: { select: { slug: true } } },
  })
  const changes: Change[] = []
  const skipped: { id: string; why: string[] }[] = []
  for (const c of cards) {
    if (!clozeInsideMath(c.front) && !clozeInsideMath(c.back)) continue
    const newFront = liftClozeOutOfMath(c.front)
    const newBack = liftClozeOutOfMath(c.back)
    const problems = [...renderProblems(newFront), ...renderProblems(newBack)]
    if (problems.length > 0) { skipped.push({ id: c.id, why: problems }); continue }
    if (newFront === c.front && newBack === c.back) { skipped.push({ id: c.id, why: ['lift produced no change'] }); continue }
    changes.push({ id: c.id, topicSlug: c.topic.slug, side: newFront !== c.front ? 'front' : 'back', oldFront: c.front, oldBack: c.back, newFront, newBack })
  }
  console.log(`${cards.length} cloze cards scanned, ${changes.length} to fix, ${skipped.length} skipped\n`)
  for (const ch of changes) {
    console.log(`${ch.topicSlug} | ${ch.id}`)
    console.log(`  - ${ch.side === 'front' ? ch.oldFront : ch.oldBack}`)
    console.log(`  + ${ch.side === 'front' ? ch.newFront : ch.newBack}`)
  }
  for (const s of skipped) console.log(`SKIPPED ${s.id}: ${s.why.join('; ')}`)
  if (!APPLY) {
    console.log('\nDry run: nothing written. Set APPLY=1 to write.')
    await prisma.$disconnect()
    return
  }

  // 1. Database rows.
  await prisma.$transaction(changes.map((ch) => prisma.flashcard.update({ where: { id: ch.id }, data: { front: ch.newFront, back: ch.newBack } })))
  console.log(`\n${changes.length} cards updated in ${IS_PROD ? 'PROD' : 'local'}`)

  // 2. Committed export mirror: match by topic slug + exact old text.
  let mirrorHits = 0
  for (const file of walk(EXPORT_ROOT)) {
    const cardsInFile = JSON.parse(fs.readFileSync(file, 'utf8')) as { topicSlug: string; front: string; back: string }[]
    let touched = false
    for (const row of cardsInFile) {
      const ch = changes.find((x) => x.topicSlug === row.topicSlug && x.oldFront === row.front && x.oldBack === row.back)
      if (!ch) continue
      row.front = ch.newFront
      row.back = ch.newBack
      touched = true
      mirrorHits++
    }
    if (touched) fs.writeFileSync(file, JSON.stringify(cardsInFile, null, 1) + '\n')
  }
  console.log(`${mirrorHits} rows updated in prisma/flashcard-exports`)

  // 3. Exam-yield artifact: entries are keyed by fingerprint(front, back).
  let yieldHits = 0
  for (const file of fs.readdirSync(ARTIFACT_DIR).filter((f) => f.endsWith('.json') && !f.startsWith('_'))) {
    const full = path.join(ARTIFACT_DIR, file)
    const entries = JSON.parse(fs.readFileSync(full, 'utf8')) as ArtifactEntry[]
    let touched = false
    for (const e of entries) {
      const ch = changes.find((x) => fingerprint(x.oldFront, x.oldBack) === e.fp)
      if (!ch) continue
      e.front = ch.newFront
      e.fp = fingerprint(ch.newFront, ch.newBack)
      touched = true
      yieldHits++
    }
    if (touched) fs.writeFileSync(full, JSON.stringify(entries, null, 1) + '\n')
  }
  console.log(`${yieldHits} entries updated in prisma/flashcard-yield`)
  await prisma.$disconnect()
}

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : d.name.endsWith('.json') ? [path.join(dir, d.name)] : []))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
