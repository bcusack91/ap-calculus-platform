/**
 * Rescore SAT hard-module attempts saved while hard questions were tagged
 * with topic slugs as their `domain` — the scorer only knows real domain ids,
 * so those attempts stored totalQuestions 0/0 and an estimated 400. The full
 * question set and answers live under results.review, so the attempt can be
 * rescored exactly: retag each stored question's domain via
 * domainIdForTopicSlug(sourceSlug), then re-run the analyzer with the hard
 * band. The review payload itself is preserved.
 *   PROD=1 [DRY_RUN=1] npx tsx scripts/rescore-sat-hard-attempts.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient, Prisma } from '@prisma/client'
import { analyzeDiagnosticResults, domainIdForTopicSlug } from '../src/data/sat-practice/diagnostic-generator'
import type { DiagnosticQuestion } from '../src/data/sat-practice/diagnostic-generator'

const DRY = !!process.env.DRY_RUN

async function main() {
  const prisma = new PrismaClient()
  const rows = await prisma.diagnosticTest.findMany({
    where: { category: { startsWith: 'sat-hard-module' } },
    select: { id: true, userId: true, category: true, createdAt: true, results: true },
  })
  console.log(`sat-hard-module attempts: ${rows.length}`)

  let fixed = 0, healthy = 0, unrecoverable = 0
  for (const row of rows) {
    const results = row.results as Record<string, unknown> | null
    if (!results || typeof results !== 'object') { unrecoverable++; continue }
    if ((results.totalQuestions as number) > 0) { healthy++; continue }

    const review = results.review as { questions?: DiagnosticQuestion[]; answers?: (number | null)[] } | undefined
    if (!Array.isArray(review?.questions) || !Array.isArray(review?.answers)) {
      unrecoverable++
      console.log(`UNRECOVERABLE (no review): ${row.id} ${row.category}`)
      continue
    }

    const retagged = review.questions.map((q) => ({
      ...q,
      domain: domainIdForTopicSlug(q.sourceSlug ?? q.domain) ?? q.domain,
    }))
    const answers = review.answers.map((sel, i) => ({ questionIndex: i, selectedIndex: sel }))
    const scored = analyzeDiagnosticResults(retagged, answers, 'hard')

    if (!DRY) {
      await prisma.diagnosticTest.update({
        where: { id: row.id },
        data: {
          results: {
            ...results,
            totalCorrect: scored.totalCorrect,
            totalQuestions: scored.totalQuestions,
            percentage: scored.percentage,
            estimatedScore: scored.estimatedScore,
            rwScore: scored.rwScore,
            mathScore: scored.mathScore,
            domains: scored.domains,
            weakAreas: scored.weakAreas,
            moderateAreas: scored.moderateAreas,
            strengths: scored.strengths,
            recommendedTopics: scored.recommendedTopics,
          } as unknown as Prisma.InputJsonValue,
          weakAreas: scored.weakAreas.join(', '),
          strengths: scored.strengths.join(', '),
        },
      })
    }
    fixed++
    console.log(`${DRY ? '[DRY] ' : ''}rescored ${row.id} (${row.category}): ${scored.totalCorrect}/${scored.totalQuestions}, est ${scored.estimatedScore}`)
  }
  console.log(`${DRY ? '[DRY RUN] ' : ''}fixed: ${fixed}, already healthy: ${healthy}, unrecoverable: ${unrecoverable}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
