import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

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
        if (member?.isActive) assignedId = classDiagnosticId
      }
    }

    const diagnostic = await prisma.diagnosticTest.create({
      data: {
        userId: session.user.id,
        category,
        results: parsedResults,
        weakAreas: parsedWeakAreas,
        strengths: parsedStrengths,
        classDiagnosticId: assignedId,
      },
    })

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
