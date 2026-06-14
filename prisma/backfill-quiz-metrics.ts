/**
 * Backfills per-question performance metrics (FactoringPerformanceMetrics — the
 * table the Six Sigma analytics reads) from historical ExitQuizAttempt rows, so
 * the analytics dashboard shows real data immediately instead of waiting for new
 * quiz submissions. Idempotent: per attempt it deletes any rows it previously
 * wrote (matched by sessionId = attempt.id) then re-inserts.
 *
 * Local:  npx tsx prisma/backfill-quiz-metrics.ts
 * Prod:   NODE_ENV=production ALLOW_PROD=1 npx tsx prisma/backfill-quiz-metrics.ts
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Answer { questionId?: string | number; selectedAnswer?: number | string; correct?: boolean }

async function main() {
  const attempts = await prisma.exitQuizAttempt.findMany({
    select: { id: true, userId: true, topicSlug: true, variant: true, timeSpent: true, answers: true },
    orderBy: { completedAt: 'asc' },
  })
  console.log(`Scanning ${attempts.length} exit-quiz attempts…`)

  let rowsWritten = 0
  let attemptsWithData = 0

  // Build all rows in memory, then write in batches. Per-attempt round-trips are
  // far too slow over a remote (Neon) connection at this scale (17k+ attempts).
  type Row = { userId: string; sessionId: string; problemType: string; lessonPart: number; isCorrect: boolean; attemptNumber: number; timeToAnswer: number; hintsUsed: number; problemDifficulty: string; problemComplexity: number }
  const rows: Row[] = []
  for (const a of attempts) {
    const answers: Answer[] = Array.isArray(a.answers) ? (a.answers as unknown as Answer[]) : []
    const scored = answers.filter((x) => x && typeof x.correct === 'boolean')
    if (scored.length === 0) continue
    attemptsWithData++
    const perQuestionMs = a.timeSpent && a.timeSpent > 0 ? Math.round((a.timeSpent * 1000) / scored.length) : 0
    for (const x of scored) {
      rows.push({
        userId: a.userId, sessionId: a.id, problemType: a.topicSlug, lessonPart: a.variant ?? 1,
        isCorrect: x.correct as boolean, attemptNumber: 1, timeToAnswer: perQuestionMs, hintsUsed: 0,
        problemDifficulty: 'MEDIUM', problemComplexity: 1,
      })
    }
  }

  // Idempotent: delete previously-written rows for these attempts (batched by
  // sessionId), then bulk-insert. Chunk sizes keep each round-trip bounded.
  const attemptIds = attempts.map((a) => a.id)
  const idChunk = 500
  for (let i = 0; i < attemptIds.length; i += idChunk) {
    await prisma.factoringPerformanceMetrics.deleteMany({ where: { sessionId: { in: attemptIds.slice(i, i + idChunk) } } })
  }
  const rowChunk = 5000
  for (let i = 0; i < rows.length; i += rowChunk) {
    const res = await prisma.factoringPerformanceMetrics.createMany({ data: rows.slice(i, i + rowChunk) })
    rowsWritten += res.count
    console.log(`  inserted ${rowsWritten}/${rows.length}…`)
  }

  const total = await prisma.factoringPerformanceMetrics.count()
  console.log(`\n✅ Backfilled ${rowsWritten} metric rows from ${attemptsWithData} attempts (with per-question data).`)
  console.log(`   FactoringPerformanceMetrics now holds ${total} rows total.`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
