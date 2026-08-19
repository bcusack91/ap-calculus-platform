/**
 * Backfill recommendedTopics (+ weakAreas/moderateAreas/strengths) into stored
 * MCAT diagnostic results. Older submits persisted only scores/domains, so
 * plan-status, the /mcat recommended-modules panel, and study-plan priority
 * silently no-op for those attempts. Each row stores the full question set and
 * answer array under results.review, so the scorer's output is reproduced
 * exactly.
 *   PROD=1 [DRY_RUN=1] npx tsx scripts/backfill-mcat-diagnostic-recs.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient, Prisma } from '@prisma/client'
import { scoreMCATDiagnostic, type MCATDiagnosticQuestion } from '../src/data/mcat-practice/diagnostic-generator'

const DRY = !!process.env.DRY_RUN

async function main() {
  const prisma = new PrismaClient()
  const rows = await prisma.diagnosticTest.findMany({
    where: { category: 'mcat-full-diagnostic' },
    select: { id: true, userId: true, createdAt: true, results: true },
  })
  console.log(`mcat-full-diagnostic rows: ${rows.length}`)

  let updated = 0, alreadyHad = 0, unrecoverable = 0
  for (const row of rows) {
    const results = row.results as Record<string, unknown> | null
    if (!results || typeof results !== 'object') { unrecoverable++; console.log(`UNRECOVERABLE (no results object): ${row.id}`); continue }
    if (Array.isArray(results.recommendedTopics)) { alreadyHad++; continue }

    const review = results.review as { questions?: unknown; answers?: unknown } | undefined
    const questions = review?.questions
    const answers = review?.answers
    if (!Array.isArray(questions) || !Array.isArray(answers) || questions.length === 0) {
      unrecoverable++
      console.log(`UNRECOVERABLE (no review data): ${row.id} user=${row.userId} ${row.createdAt.toISOString()}`)
      continue
    }

    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (typeof a === 'number') answersRecord[i] = a })
    const scored = scoreMCATDiagnostic(questions as MCATDiagnosticQuestion[], answersRecord)

    if (scored.totalCorrect !== results.totalCorrect) {
      console.log(`WARN score drift on ${row.id}: stored totalCorrect=${results.totalCorrect}, recomputed=${scored.totalCorrect} (backfilling anyway — attribution rules may have evolved)`)
    }

    if (!DRY) {
      await prisma.diagnosticTest.update({
        where: { id: row.id },
        data: {
          results: {
            ...results,
            weakAreas: scored.weakAreas,
            moderateAreas: scored.moderateAreas,
            strengths: scored.strengths,
            recommendedTopics: scored.recommendedTopics,
          } as Prisma.InputJsonValue,
        },
      })
    }
    updated++
    console.log(`${DRY ? '[DRY] ' : ''}backfilled ${row.id}: ${scored.recommendedTopics.map(t => t.slug).join(', ') || '(none — strong across the board)'}`)
  }

  console.log(`${DRY ? '[DRY RUN] ' : ''}updated: ${updated}, already had recs: ${alreadyHad}, unrecoverable: ${unrecoverable}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
