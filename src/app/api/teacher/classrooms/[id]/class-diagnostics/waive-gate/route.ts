import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

/**
 * POST /api/teacher/classrooms/[id]/class-diagnostics/waive-gate
 * Body: { studentUserId }
 *
 * Teacher override for the MCAT diagnostic retake gate ("Allow retake now").
 * Sets User.diagnosticGateWaivedAt = now for an active member of this
 * classroom.
 *
 * ONE-SHOT semantics: plan-status opens the gate while the waiver timestamp is
 * NEWER than the student's latest mcat-full-diagnostic attempt. Taking the
 * retake consumes the waiver naturally — the new attempt's createdAt is then
 * newer than the waiver, so the gate closes again with no cleanup step.
 * Re-waiving before the retake just refreshes the timestamp (idempotent).
 */
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const body = await req.json().catch(() => ({}))
  const studentUserId = typeof body?.studentUserId === 'string' ? body.studentUserId : ''
  if (!studentUserId) {
    return NextResponse.json({ error: 'studentUserId is required' }, { status: 400 })
  }

  const member = await prisma.classroomMember.findUnique({
    where: { classroomId_userId: { classroomId: id, userId: studentUserId } },
    select: { isActive: true },
  })
  if (!member?.isActive) {
    return NextResponse.json({ error: 'That student is not an active member of this class.' }, { status: 404 })
  }

  const waivedAt = new Date()
  await prisma.user.update({
    where: { id: studentUserId },
    data: { diagnosticGateWaivedAt: waivedAt },
  })

  return NextResponse.json({ success: true, waivedAt })
}
