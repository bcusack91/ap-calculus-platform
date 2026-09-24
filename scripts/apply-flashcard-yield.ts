/**
 * Writes the committed exam-yield labels (prisma/flashcard-yield/*.json) onto
 * Flashcard.examYield, matching cards by fingerprint of their exact text.
 *
 *   npx tsx scripts/apply-flashcard-yield.ts                    # dry run, local
 *   SEED_DB=prod npx tsx scripts/apply-flashcard-yield.ts       # dry run, prod (the preview)
 *   SEED_DB=prod APPLY=1 npx tsx scripts/apply-flashcard-yield.ts
 *
 * Refuses to run if the artifact fails verification. Only writes rows whose
 * label would change, so a rerun prints zeros. Never touches FlashcardProgress:
 * the whole reversibility story (flip the opt-in, get your cards and their
 * review history back) depends on those rows surviving. After a
 * restore-flashcards.ts run, rerun this — labels live here, not in the export.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { PrismaClient, type ExamYield } from '@prisma/client'
import {
  YIELD_VALUES,
  checkArtifacts,
  fingerprint,
  formatReport,
  loadArtifacts,
  loadScopedExport,
} from '../src/lib/flashcard-yield-artifact'

const APPLY = process.env.APPLY === '1'
const ALLOW_DRIFT = process.env.ALLOW_DRIFT === '1'
const label = process.env.SEED_DB === 'prod' ? 'PROD' : 'local'

async function main() {
  const exportByTopic = loadScopedExport()
  const artifactByTopic = loadArtifacts()
  const check = checkArtifacts(exportByTopic, artifactByTopic)
  if (check.errors.length) {
    console.error(formatReport(check))
    console.error(`\nartifact failed verification (${check.errors.length} errors); nothing written`)
    for (const e of check.errors.slice(0, 20)) console.error('  ' + e)
    process.exit(1)
  }

  const prisma = new PrismaClient()
  console.log(`[${label}] ${APPLY ? 'APPLYING' : 'DRY RUN'}\n`)

  let drift = 0
  let changed = 0
  const zero = () => ({ ULTRA_HIGH: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NULL: 0 })
  const totals = { before: zero(), after: zero() }

  for (const [topic, entries] of [...artifactByTopic.entries()].sort()) {
    const live = await prisma.flashcard.findMany({
      where: { topic: { slug: topic } },
      select: { id: true, front: true, back: true, examYield: true },
    })
    const liveByFp = new Map<string, typeof live>()
    for (const card of live) {
      const fp = fingerprint(card.front, card.back)
      liveByFp.set(fp, [...(liveByFp.get(fp) ?? []), card])
    }
    const wanted = new Map(entries.map((e) => [e.fp, e.yield as ExamYield]))

    const before = zero()
    const after = zero()
    const updates: Record<ExamYield, string[]> = { ULTRA_HIGH: [], HIGH: [], MEDIUM: [], LOW: [] }

    for (const entry of entries) {
      if (!liveByFp.has(entry.fp)) {
        console.warn(`  DRIFT ${topic}: labeled card not live: "${entry.front.slice(0, 60)}"`)
        drift++
      }
    }
    for (const card of live) {
      const current = card.examYield ?? 'NULL'
      before[current]++
      const target = wanted.get(fingerprint(card.front, card.back))
      if (!target) {
        // A card imported since the export: stays as it is (NULL = served).
        console.warn(`  DRIFT ${topic}: live card has no label: "${card.front.slice(0, 60)}"`)
        drift++
        after[current]++
        continue
      }
      after[target]++
      if (card.examYield !== target) updates[target].push(card.id)
    }

    const n = YIELD_VALUES.reduce((s, y) => s + updates[y].length, 0)
    changed += n
    for (const k of ['ULTRA_HIGH', 'HIGH', 'MEDIUM', 'LOW', 'NULL'] as const) {
      totals.before[k] += before[k]
      totals.after[k] += after[k]
    }
    console.log(
      `${topic.padEnd(50)} ${live.length.toString().padStart(3)} cards  ` +
        `before U${before.ULTRA_HIGH}/H${before.HIGH}/M${before.MEDIUM}/L${before.LOW}/∅${before.NULL} -> ` +
        `after U${after.ULTRA_HIGH}/H${after.HIGH}/M${after.MEDIUM}/L${after.LOW}/∅${after.NULL}  (changes ${n})`,
    )

    if (APPLY && n > 0) {
      if (drift && !ALLOW_DRIFT) continue // decided below, before any write
      for (const y of YIELD_VALUES) {
        if (updates[y].length) {
          await prisma.flashcard.updateMany({ where: { id: { in: updates[y] } }, data: { examYield: y } })
        }
      }
    }
  }

  if (drift && !ALLOW_DRIFT) {
    console.error(`\n${drift} drift issue(s) between the export and live cards. Re-run scripts/export-flashcards.ts and re-verify, or set ALLOW_DRIFT=1 to apply the matching cards anyway.`)
    await prisma.$disconnect()
    process.exit(1)
  }

  // Guard: nothing outside scope may carry a label.
  const scoped = [...artifactByTopic.keys()]
  const stray = await prisma.flashcard.count({
    where: { examYield: { not: null }, topic: { slug: { notIn: scoped } } },
  })
  // Informative: how many already-learned cards the LOW label will hide.
  const learnedLow = await prisma.flashcardProgress.count({
    where: { reviewCount: { gt: 0 }, flashcard: { examYield: 'LOW' } },
  })

  console.log(
    `\nTOTAL before U${totals.before.ULTRA_HIGH}/H${totals.before.HIGH}/M${totals.before.MEDIUM}/L${totals.before.LOW}/∅${totals.before.NULL}` +
      ` -> after U${totals.after.ULTRA_HIGH}/H${totals.after.HIGH}/M${totals.after.MEDIUM}/L${totals.after.LOW}/∅${totals.after.NULL}` +
      `  (${APPLY ? 'applied' : 'would change'} ${changed})`,
  )
  console.log(`labeled cards outside scope: ${stray} (must be 0)`)
  console.log(`progress rows on LOW cards that students had already reviewed: ${learnedLow}`)
  if (!APPLY) console.log('\nDry run only. Set APPLY=1 to write.')
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
