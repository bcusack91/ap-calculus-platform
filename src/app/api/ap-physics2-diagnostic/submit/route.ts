import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { diagnosticQuestionRows } from '@/lib/question-activity-rows'
import { recordQuestions } from '@/lib/study-tracking'
import { touchDailyStreak } from '@/lib/streak'
import { canonicalizeDiagnosticResults, diagnosticCourseSlug } from '@/lib/ap-topic-canonical'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { category, results, weakAreas, strengths } = body

  if (!category || !results) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // A client built before the Oct 2026 slug fix can still send legacy topic slugs.
  const storedResults = canonicalizeDiagnosticResults(category, results)

  // A diagnostic is a study day: the attempt and the daily streak commit
  // together (src/lib/streak.ts), as lesson and exit-quiz submits do. Until
  // Oct 2026 nothing here wrote DailyStreak, so the streak reminder could
  // never reach a student whose only activity was a diagnostic.
  const studentId = session.user.id
  const test = await prisma.$transaction(async (tx) => {
    const created = await tx.diagnosticTest.create({
      data: {
        userId: studentId,
        category,
        results: storedResults,
        weakAreas: weakAreas ?? [],
        strengths: strengths ?? '',
      },
    })
    await touchDailyStreak(tx, studentId)
    return created
  })

  // Teacher report + answer log: per-question DIAGNOSTIC rows graded from
  // the stored key, tied to the stored attempt (as the SAT/MCAT routes do).
  await recordQuestions(
    session.user.id,
    diagnosticQuestionRows(storedResults, {
      category,
      courseSlug: diagnosticCourseSlug(category) ?? undefined,
      attemptKind: 'diagnostic',
      attemptId: test.id,
    }),
  )

  return NextResponse.json({ test })
}
