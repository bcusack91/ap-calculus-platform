import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * Needs Attention acknowledgements.
 *
 *   POST   { studentId, reasons: string[] } — mark these reasons as seen
 *   DELETE { studentId, reasons: string[] } — undo
 *
 * Dismissals are per teacher: a co-teacher's list is unaffected. The student
 * must be an active member of a class this teacher owns or co-teaches.
 */

type Parsed = { studentId: string; reasons: string[] } | { error: string }

async function parse(request: Request): Promise<Parsed> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return { error: 'Invalid request body' }
  }
  const { studentId, reasons } = (body ?? {}) as { studentId?: unknown; reasons?: unknown }
  if (typeof studentId !== 'string' || !studentId) return { error: 'studentId is required' }
  if (
    !Array.isArray(reasons) ||
    reasons.length === 0 ||
    reasons.length > 20 ||
    !reasons.every((r) => typeof r === 'string' && r.length > 0 && r.length <= 300)
  ) {
    return { error: 'reasons must be a non-empty list of strings' }
  }
  return { studentId, reasons: [...new Set(reasons as string[])] }
}

async function teachesStudent(teacherId: string, studentId: string): Promise<boolean> {
  const membership = await prisma.classroomMember.findFirst({
    where: {
      userId: studentId,
      isActive: true,
      classroom: {
        isActive: true,
        OR: [{ teacherId }, { coTeachers: { some: { userId: teacherId } } }],
      },
    },
    select: { id: true },
  })
  return membership !== null
}

async function handle(request: Request, mode: 'dismiss' | 'restore') {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error
  const teacherId = result.user!.id

  const parsed = await parse(request)
  if ('error' in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 })
  if (!(await teachesStudent(teacherId, parsed.studentId))) {
    return NextResponse.json({ error: 'Student not found in your classes' }, { status: 404 })
  }

  if (mode === 'dismiss') {
    const now = new Date()
    // Re-dismissing refreshes the time, which restarts an inactivity spell.
    await prisma.$transaction(
      parsed.reasons.map((reason) =>
        prisma.attentionDismissal.upsert({
          where: { teacherId_studentId_reason: { teacherId, studentId: parsed.studentId, reason } },
          create: { teacherId, studentId: parsed.studentId, reason, dismissedAt: now },
          update: { dismissedAt: now },
        }),
      ),
    )
  } else {
    await prisma.attentionDismissal.deleteMany({
      where: { teacherId, studentId: parsed.studentId, reason: { in: parsed.reasons } },
    })
  }
  return NextResponse.json({ ok: true })
}

export async function POST(request: Request) {
  return handle(request, 'dismiss')
}

export async function DELETE(request: Request) {
  return handle(request, 'restore')
}
