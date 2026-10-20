import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { diagnosticQuestionRows } from '@/lib/question-activity-rows'
import { recordQuestions } from '@/lib/study-tracking'
import { touchDailyStreak } from '@/lib/streak'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { category, results, weakAreas, strengths, classDiagnosticId } = await req.json()

    if (!category || !results) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Guard JSON.parse so malformed client input returns a clean 400 instead of an unhandled 500 that loses the student's results
    let parsedResults: Prisma.InputJsonValue
    let parsedWeakAreas: Prisma.InputJsonValue | typeof Prisma.JsonNull
    // `strengths` is a String column (not Json) — store it as text.
    let parsedStrengths: string | null
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
      parsedStrengths = strengths ? (typeof strengths === 'string' ? strengths : JSON.stringify(strengths)) : null
    } catch {
      return NextResponse.json({ error: 'Invalid results format' }, { status: 400 })
    }

    // Link to an assigned class diagnostic when one is claimed — but only
    // after verifying the assignment exists and this student belongs to its
    // classroom (a spoofed id must not attach to another class's results).
    let assignedId: string | null = null
    let assignedClassroomId: string | null = null
    if (typeof classDiagnosticId === 'string' && classDiagnosticId) {
      const assigned = await prisma.classDiagnostic.findUnique({
        where: { id: classDiagnosticId },
        select: { classroomId: true },
      })
      if (assigned) {
        const member = await prisma.classroomMember.findUnique({
          where: { classroomId_userId: { classroomId: assigned.classroomId, userId: session.user.id } },
          select: { isActive: true },
        })
        if (member?.isActive) {
          assignedId = classDiagnosticId
          assignedClassroomId = assigned.classroomId
        }
      }
    }

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
          strengths: parsedStrengths,
          classDiagnosticId: assignedId,
        },
      })
      await touchDailyStreak(tx, studentId)
      return created
    })

    // Teacher report + answer log: per-question DIAGNOSTIC rows graded from
    // the stored key, tied to the stored attempt (written after it exists).
    await recordQuestions(
      session.user.id,
      diagnosticQuestionRows(parsedResults, {
        category,
        courseSlug: 'sat-prep',
        attemptKind: 'diagnostic',
        attemptId: diagnostic.id,
      }),
      { classroomId: assignedClassroomId },
    )

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
