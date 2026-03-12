import { NextRequest, NextResponse } from 'next/server'
import { requireClassroomOwner } from '@/lib/teacher-auth'
import { prisma } from '@/lib/prisma'

// GET /api/teacher/classrooms/[id]/announcements
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    // Allow both teacher and members to read
    const announcements = await prisma.announcement.findMany({
      where: { classroomId },
      include: {
        author: { select: { name: true } },
      },
      orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
      take: 50,
    })

    return NextResponse.json({ announcements })
  } catch (error) {
    console.error('Announcements GET error:', error)
    return NextResponse.json({ error: 'Failed to load announcements' }, { status: 500 })
  }
}

// POST /api/teacher/classrooms/[id]/announcements
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const teacher = await requireClassroomOwner(classroomId)
    if ('error' in teacher && teacher.error) {
      return teacher.error
    }

    const { title, content, isPinned } = await req.json()
    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    const announcement = await prisma.announcement.create({
      data: {
        classroomId,
        authorId: teacher.user!.id,
        title: title.trim(),
        content: content.trim(),
        isPinned: isPinned ?? false,
      },
      include: {
        author: { select: { name: true } },
      },
    })

    return NextResponse.json({ announcement })
  } catch (error) {
    console.error('Announcements POST error:', error)
    return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 })
  }
}

// DELETE /api/teacher/classrooms/[id]/announcements
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const teacher = await requireClassroomOwner(classroomId)
    if ('error' in teacher && teacher.error) {
      return teacher.error
    }

    const { announcementId } = await req.json()
    if (!announcementId) {
      return NextResponse.json({ error: 'Missing announcementId' }, { status: 400 })
    }

    await prisma.announcement.delete({
      where: { id: announcementId, classroomId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Announcements DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete announcement' }, { status: 500 })
  }
}
