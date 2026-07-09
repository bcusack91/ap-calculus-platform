import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomOwner, requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * GET  /api/teacher/classrooms/[id] — get classroom details with members
 * PUT  /api/teacher/classrooms/[id] — update classroom
 * DELETE /api/teacher/classrooms/[id] — deactivate classroom
 */

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    // Owner, admin, or co-teacher may view the classroom.
    const result = await requireClassroomAccess(id)
    if ('error' in result) return result.error

    const classroom = await prisma.classroom.findUnique({
      where: { id },
      include: {
        members: {
          where: { isActive: true },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
                avatarData: true,
              },
            },
          },
          orderBy: { joinedAt: 'asc' },
        },
        assignments: {
          where: { isActive: true },
          orderBy: { createdAt: 'desc' },
          include: {
            // Count only real activity — creation seeds a NOT_STARTED row per
            // student, which made every new assignment show "N submissions".
            _count: { select: { submissions: { where: { status: { not: 'NOT_STARTED' } } } } },
          },
        },
        competitions: {
          orderBy: { scheduledAt: 'desc' },
          include: {
            _count: { select: { participants: true } },
          },
        },
        coTeachers: {
          include: { user: { select: { id: true, name: true, email: true } } },
          orderBy: { addedAt: 'asc' },
        },
        _count: { select: { members: true } },
      },
    })

    // isOwner lets the client gate owner-only controls (settings, archive,
    // managing co-teachers) even though co-teachers can view this payload.
    return NextResponse.json({ ...classroom, isOwner: result.isOwner })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomOwner(id)
    if ('error' in result && result.error) return result.error

    const { name, description, subject, grade, section, isActive } = await req.json()

    const classroom = await prisma.classroom.update({
      where: { id },
      data: {
        ...(name !== undefined && { name: name.trim() }),
        ...(description !== undefined && { description: description?.trim() || null }),
        ...(subject !== undefined && { subject: subject?.trim() || null }),
        ...(grade !== undefined && { grade: grade?.trim() || null }),
        ...(section !== undefined && { section: section?.trim() || null }),
        ...(isActive !== undefined && { isActive }),
      },
    })

    return NextResponse.json(classroom)
  } catch (error) {
    console.error('[PUT /api/teacher/classrooms/[id]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomOwner(id)
    if ('error' in result && result.error) return result.error

    await prisma.classroom.update({
      where: { id },
      data: { isActive: false },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/teacher/classrooms/[id]]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
