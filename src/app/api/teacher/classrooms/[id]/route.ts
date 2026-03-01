import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomOwner } from '@/lib/teacher-auth'

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
    const result = await requireClassroomOwner(id)
    if ('error' in result && result.error) return result.error

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
          orderBy: { createdAt: 'desc' },
          include: {
            _count: { select: { submissions: true } },
          },
        },
        competitions: {
          orderBy: { scheduledAt: 'desc' },
          include: {
            _count: { select: { participants: true } },
          },
        },
        _count: { select: { members: true } },
      },
    })

    return NextResponse.json(classroom)
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

    const { name, description, subject, grade, isActive } = await req.json()

    const classroom = await prisma.classroom.update({
      where: { id },
      data: {
        ...(name !== undefined && { name: name.trim() }),
        ...(description !== undefined && { description: description?.trim() || null }),
        ...(subject !== undefined && { subject: subject?.trim() || null }),
        ...(grade !== undefined && { grade: grade?.trim() || null }),
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
