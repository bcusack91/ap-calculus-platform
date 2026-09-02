import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess, requireClassroomOwner } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/classrooms/[id]/competitive-grants
 * List all competitive grants for students in this classroom
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: classroomId } = await params
  const result = await requireClassroomAccess(classroomId)
  if ('error' in result && result.error) return result.error

  const grants = await prisma.competitiveGrant.findMany({
    where: { classroomId },
    include: {
      student: { select: { id: true, name: true, email: true } },
    },
  })

  return NextResponse.json({ grants })
}

/** Normalize {studentId} | {studentIds: []} into a deduped id list. */
function idsFromBody(body: { studentId?: unknown; studentIds?: unknown }): string[] {
  const ids: string[] = []
  if (typeof body.studentId === 'string' && body.studentId) ids.push(body.studentId)
  if (Array.isArray(body.studentIds)) {
    for (const s of body.studentIds) {
      if (typeof s === 'string' && s) ids.push(s)
    }
  }
  return Array.from(new Set(ids))
}

/**
 * POST /api/teacher/classrooms/[id]/competitive-grants
 * Grant competitive mode access to one or many students.
 * Body: { studentId: string, categories?: string[] }
 *   or  { studentIds: string[], categories?: string[] }  (batch — one request
 *        instead of the old N serial calls from "Grant all")
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: classroomId } = await params
  // Granting competitive-mode access is an unlock/economy lever — owner only.
  const result = await requireClassroomOwner(classroomId)
  if ('error' in result && result.error) return result.error
  const teacher = result.user!

  const body = await req.json()
  const { categories } = body
  const studentIds = idsFromBody(body)

  if (studentIds.length === 0) {
    return NextResponse.json({ error: 'studentId or studentIds is required' }, { status: 400 })
  }

  // Verify every target is an active member of the classroom
  const memberships = await prisma.classroomMember.findMany({
    where: { classroomId, userId: { in: studentIds }, isActive: true },
    select: { userId: true },
  })
  const activeIds = new Set(memberships.map((m) => m.userId))
  const missing = studentIds.filter((s) => !activeIds.has(s))
  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'Student is not an active member of this classroom' },
      { status: 400 }
    )
  }

  // Upsert grant + profile per student (update if already exists for this
  // student+teacher). Runs as one transaction so a batch is all-or-nothing.
  const grants = await prisma.$transaction(
    studentIds.flatMap((studentId) => [
      prisma.competitiveGrant.upsert({
        where: {
          studentId_grantedById: {
            studentId,
            grantedById: teacher.id,
          },
        },
        update: {
          categories: categories || null,
          classroomId,
        },
        create: {
          studentId,
          grantedById: teacher.id,
          classroomId,
          categories: categories || null,
        },
      }),
      // Also ensure the student has a CompetitiveProfile so they can play immediately
      prisma.competitiveProfile.upsert({
        where: { userId: studentId },
        update: { competitiveModeUnlocked: true },
        create: {
          userId: studentId,
          competitiveModeUnlocked: true,
          overallMMR: 1000,
        },
      }),
    ])
  )

  // Preserve the original single-grant response shape.
  return NextResponse.json({ grant: grants[0], granted: studentIds.length }, { status: 201 })
}

/**
 * DELETE /api/teacher/classrooms/[id]/competitive-grants
 * Revoke competitive mode access from one or many students.
 * Body: { studentId: string } or { studentIds: string[] } (batch)
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: classroomId } = await params
  // Revoking competitive-mode access is an unlock/economy lever — owner only.
  const result = await requireClassroomOwner(classroomId)
  if ('error' in result && result.error) return result.error
  const teacher = result.user!

  const body = await req.json()
  const studentIds = idsFromBody(body)

  if (studentIds.length === 0) {
    return NextResponse.json({ error: 'studentId or studentIds is required' }, { status: 400 })
  }

  // Delete the grants this teacher issued for these students.
  const deleted = await prisma.competitiveGrant.deleteMany({
    where: { studentId: { in: studentIds }, grantedById: teacher.id },
  })
  if (deleted.count === 0) {
    return NextResponse.json({ error: 'Grant not found' }, { status: 404 })
  }

  // Per student: if no other grants and no mastery-based unlock remain, revoke
  // competitive mode on the profile.
  for (const studentId of studentIds) {
    const otherGrants = await prisma.competitiveGrant.count({
      where: { studentId },
    })

    const masteryBasedAccess = await prisma.topicProgress.count({
      where: {
        userId: studentId,
        status: { in: ['COMPLETED', 'MASTERED'] },
        masteryLevel: { gte: 0.8 },
      },
    })

    if (otherGrants === 0 && masteryBasedAccess === 0) {
      await prisma.competitiveProfile.updateMany({
        where: { userId: studentId },
        data: { competitiveModeUnlocked: false },
      })
    }
  }

  return NextResponse.json({ success: true, revoked: deleted.count })
}
