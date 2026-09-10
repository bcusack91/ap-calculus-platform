import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

function parseMaybeJsonArray(value: unknown): string | number | boolean | object | undefined {
  if (value == null) return undefined

  if (Array.isArray(value) || typeof value === 'object') {
    return value
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return undefined

    if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
      try {
        return JSON.parse(trimmed)
      } catch {
        return trimmed.split(',').map((item) => item.trim()).filter(Boolean)
      }
    }

    return trimmed.split(',').map((item) => item.trim()).filter(Boolean)
  }

  return value
}

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
    try {
      parsedResults = typeof results === 'string' ? JSON.parse(results) : results
    } catch {
      return NextResponse.json({ error: 'Invalid results format' }, { status: 400 })
    }

    // Link to an assigned class diagnostic when one is claimed — but only
    // after verifying the assignment exists and this student belongs to its
    // classroom (a spoofed id must not attach to another class's results).
    // Mirrors the SAT submit route; without this the teacher class-diagnostics
    // panel never sees MCAT attempts.
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
        classDiagnosticId: assignedId,
        results: parsedResults,
        weakAreas: parseMaybeJsonArray(weakAreas),
        strengths: (() => {
          const parsedStrengths = parseMaybeJsonArray(strengths)
          if (parsedStrengths == null) return null
          return typeof parsedStrengths === 'string' ? parsedStrengths : JSON.stringify(parsedStrengths)
        })(),
      },
    })

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('MCAT Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
