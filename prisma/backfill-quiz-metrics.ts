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

  for (const a of attempts) {
    const answers: Answer[] = Array.isArray(a.answers) ? (a.answers as unknown as Answer[]) : []
    const scored = answers.filter((x) => x && typeof x.correct === 'boolean')
    if (scored.length === 0) continue
    attemptsWithData++

    const perQuestionMs = a.timeSpent && a.timeSpent > 0 ? Math.round((a.timeSpent * 1000) / scored.length) : 0

    // Idempotent: clear anything we previously wrote for this attempt, then insert.
    await prisma.factoringPerformanceMetrics.deleteMany({ where: { userId: a.userId, sessionId: a.id } })
    await prisma.factoringPerformanceMetrics.createMany({
      data: scored.map((x) => ({
        userId: a.userId,
        sessionId: a.id,
        problemType: a.topicSlug,
        lessonPart: a.variant ?? 1,
        isCorrect: x.correct as boolean,
        attemptNumber: 1,
        timeToAnswer: perQuestionMs,
        hintsUsed: 0,
        problemDifficulty: 'MEDIUM',
        problemComplexity: 1,
      })),
    })
    rowsWritten += scored.length
  }

  const total = await prisma.factoringPerformanceMetrics.count()
  console.log(`\n✅ Backfilled ${rowsWritten} metric rows from ${attemptsWithData} attempts (with per-question data).`)
  console.log(`   FactoringPerformanceMetrics now holds ${total} rows total.`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
