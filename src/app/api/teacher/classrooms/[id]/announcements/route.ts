import { NextRequest, NextResponse } from 'next/server'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET /api/teacher/classrooms/[id]/announcements
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params

    // Require an authenticated session.
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Allow only the classroom's teacher or an active member to read.
    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      select: { teacherId: true },
    })
    if (!classroom) {
      return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
    }

    if (classroom.teacherId !== session.user.id) {
      // Allow an active student member OR a co-teacher to read announcements.
      const [membership, coTeacher] = await Promise.all([
        prisma.classroomMember.findUnique({
          where: { classroomId_userId: { classroomId, userId: session.user.id } },
          select: { isActive: true },
        }),
        prisma.classroomCoTeacher.findUnique({
          where: { classroomId_userId: { classroomId, userId: session.user.id } },
          select: { id: true },
        }),
      ])
      if ((!membership || !membership.isActive) && !coTeacher) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      }
    }

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
    const teacher = await requireClassroomAccess(classroomId)
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
        title: String(title).trim().slice(0, 200),
        content: String(content).trim().slice(0, 5000),
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

// PATCH /api/teacher/classrooms/[id]/announcements — edit an announcement
// (title/content) or toggle its pin. Teacher/co-teacher only.
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const teacher = await requireClassroomAccess(classroomId)
    if ('error' in teacher && teacher.error) {
      return teacher.error
    }

    const { announcementId, title, content, isPinned } = await req.json()
    if (!announcementId) {
      return NextResponse.json({ error: 'Missing announcementId' }, { status: 400 })
    }

    const data: { title?: string; content?: string; isPinned?: boolean } = {}
    if (title !== undefined) {
      if (!title?.trim()) {
        return NextResponse.json({ error: 'Title cannot be empty' }, { status: 400 })
      }
      data.title = String(title).trim().slice(0, 200)
    }
    if (content !== undefined) {
      if (!content?.trim()) {
        return NextResponse.json({ error: 'Content cannot be empty' }, { status: 400 })
      }
      data.content = String(content).trim().slice(0, 5000)
    }
    if (isPinned !== undefined) {
      data.isPinned = Boolean(isPinned)
    }
    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
    }

    // The classroomId in the where clause scopes the update to this classroom,
    // so an id from another class 404s instead of being editable cross-class.
    const announcement = await prisma.announcement.update({
      where: { id: announcementId, classroomId },
      data,
      include: {
        author: { select: { name: true } },
      },
    })

    return NextResponse.json({ announcement })
  } catch (error) {
    console.error('Announcements PATCH error:', error)
    return NextResponse.json({ error: 'Failed to update announcement' }, { status: 500 })
  }
}

// DELETE /api/teacher/classrooms/[id]/announcements
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const teacher = await requireClassroomAccess(classroomId)
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
