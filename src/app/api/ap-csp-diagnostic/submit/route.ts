import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { diagnosticQuestionRows } from '@/lib/question-activity-rows'
import { recordQuestions } from '@/lib/study-tracking'
import { touchDailyStreak } from '@/lib/streak'
import { canonicalizeDiagnosticResults, diagnosticCourseSlug } from '@/lib/ap-topic-canonical'
import { Prisma } from '@prisma/client'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { category, results, weakAreas, strengths } = await req.json()

    if (!category || !results) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Guard JSON.parse so malformed client input returns a clean 400 instead of an unhandled 500 that loses the student's results
    let parsedResults: Prisma.InputJsonValue
    let parsedWeakAreas: Prisma.InputJsonValue | typeof Prisma.JsonNull
    try {
      parsedResults = typeof results === 'string' ? JSON.parse(results) : results
      // weakAreas arrives as an ARRAY from most diagnostic pages but as a
      // comma-joined STRING from the SAT/MCAT pages. JSON.parse("Algebra,
      // Geometry") throws — which silently 400'd (and discarded) every
      // submission from a student who actually HAD weak areas, while perfect
      // scorers (empty string) sailed through. A bare string is a valid Json
      // value, so store it as-is when it isn't JSON.
      if (weakAreas) {
        if (typeof weakAreas === 'string') {
          try { parsedWeakAreas = JSON.parse(weakAreas) } catch { parsedWeakAreas = weakAreas }
        } else {
          parsedWeakAreas = weakAreas
        }
      } else {
        parsedWeakAreas = Prisma.JsonNull
      }
    } catch {
      return NextResponse.json({ error: 'Invalid results format' }, { status: 400 })
    }

    // A client built before the Oct 2026 slug fix can still send legacy topic slugs.
    parsedResults = canonicalizeDiagnosticResults(category, parsedResults)

    // A diagnostic is a study day: the attempt and the daily streak commit
    // together (src/lib/streak.ts), as lesson and exit-quiz submits do. Until
    // Oct 2026 nothing here wrote DailyStreak, so the streak reminder could
    // never reach a student whose only activity was a diagnostic.
    const studentId = session.user.id
    const diagnostic = await prisma.$transaction(async (tx) => {
      const created = await tx.diagnosticTest.create({
        data: {
          userId: studentId,
          category,
          results: parsedResults,
          weakAreas: parsedWeakAreas,
          strengths: strengths ? (typeof strengths === 'string' ? strengths : JSON.stringify(strengths)) : null,
        },
      })
      await touchDailyStreak(tx, studentId)
      return created
    })

    // Teacher report + answer log: per-question DIAGNOSTIC rows graded from
    // the stored key, tied to the stored attempt (as the SAT/MCAT routes do).
    await recordQuestions(
      session.user.id,
      diagnosticQuestionRows(parsedResults, {
        category,
        courseSlug: diagnosticCourseSlug(category) ?? undefined,
        attemptKind: 'diagnostic',
        attemptId: diagnostic.id,
      }),
    )

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('AP CS Principles Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
