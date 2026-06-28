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

/**
 * POST /api/teacher/classrooms/[id]/competitive-grants
 * Grant competitive mode access to a student
 * Body: { studentId: string, categories?: string[] }
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
  const { studentId, categories } = body

  if (!studentId) {
    return NextResponse.json({ error: 'studentId is required' }, { status: 400 })
  }

  // Verify student is a member of the classroom
  const membership = await prisma.classroomMember.findUnique({
    where: { classroomId_userId: { classroomId, userId: studentId } },
  })

  if (!membership || !membership.isActive) {
    return NextResponse.json(
      { error: 'Student is not an active member of this classroom' },
      { status: 400 }
    )
  }

  // Upsert the grant (update if already exists for this student+teacher)
  const grant = await prisma.competitiveGrant.upsert({
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
  })

  // Also ensure the student has a CompetitiveProfile so they can play immediately
  await prisma.competitiveProfile.upsert({
    where: { userId: studentId },
    update: { competitiveModeUnlocked: true },
    create: {
      userId: studentId,
      competitiveModeUnlocked: true,
      overallMMR: 1000,
    },
  })

  return NextResponse.json({ grant }, { status: 201 })
}

/**
 * DELETE /api/teacher/classrooms/[id]/competitive-grants
 * Revoke competitive mode access from a student
 * Body: { studentId: string }
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
  const { studentId } = body

  if (!studentId) {
    return NextResponse.json({ error: 'studentId is required' }, { status: 400 })
  }

  // Delete the grant
  try {
    await prisma.competitiveGrant.delete({
      where: {
        studentId_grantedById: {
          studentId,
          grantedById: teacher.id,
        },
      },
    })
  } catch {
    return NextResponse.json({ error: 'Grant not found' }, { status: 404 })
  }

  // Check if student still has any other grants or mastery-based unlocks
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

  // If no other grants and no mastery, revoke competitive mode
  if (otherGrants === 0 && masteryBasedAccess === 0) {
    await prisma.competitiveProfile.updateMany({
      where: { userId: studentId },
      data: { competitiveModeUnlocked: false },
    })
  }

  return NextResponse.json({ success: true })
}
