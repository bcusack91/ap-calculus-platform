import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { parseBody, createCurriculumSchema } from '@/lib/validations'
import { requireTeacher } from '@/lib/auth-guard'

// GET /api/teacher/curriculum?classroomId=xxx
export async function GET(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const classroomId = req.nextUrl.searchParams.get('classroomId')
  if (!classroomId) {
    return NextResponse.json({ error: 'classroomId required' }, { status: 400 })
  }

  const classroom = await prisma.classroom.findFirst({
    where: { id: classroomId, teacherId: user.id },
  })
  if (!classroom) {
    return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
  }

  const plans = await prisma.curriculumPlan.findMany({
    where: { classroomId },
    include: {
      weeks: {
        orderBy: { weekNum: 'asc' },
        include: {
          items: { orderBy: { sortOrder: 'asc' } },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ plans })
}

// POST /api/teacher/curriculum — create a curriculum plan
export async function POST(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const body = await req.json()
  const parsed = parseBody(createCurriculumSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { classroomId, title, description, startDate, endDate, weeks } = parsed.data

  const classroom = await prisma.classroom.findFirst({
    where: { id: classroomId, teacherId: user.id },
  })
  if (!classroom) {
    return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
  }

  const plan = await prisma.curriculumPlan.create({
    data: {
      classroomId,
      title,
      description: description || null,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
      weeks: weeks?.length
        ? {
            create: weeks.map((w: { weekNum: number; title?: string; notes?: string; items?: { title: string; topicSlug?: string; type?: string }[] }) => ({
              weekNum: w.weekNum,
              title: w.title || `Week ${w.weekNum}`,
              notes: w.notes || null,
              items: w.items?.length
                ? {
                    create: w.items.map((item: { title: string; topicSlug?: string; type?: string }, i: number) => ({
                      title: item.title,
                      topicSlug: item.topicSlug || null,
                      type: item.type || 'LESSON',
                      sortOrder: i,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,
    },
    include: {
      weeks: {
        orderBy: { weekNum: 'asc' },
        include: { items: { orderBy: { sortOrder: 'asc' } } },
      },
    },
  })

  return NextResponse.json({ plan }, { status: 201 })
}

// PUT /api/teacher/curriculum — update plan or add/update weeks
export async function PUT(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const body = await req.json()

  // Update a week item
  if (body.itemId) {
    const item = await prisma.curriculumItem.findFirst({
      where: { id: body.itemId },
      include: { week: { include: { plan: { include: { classroom: true } } } } },
    })
    if (!item || item.week.plan.classroom.teacherId !== user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const updated = await prisma.curriculumItem.update({
      where: { id: body.itemId },
      data: {
        ...(body.title !== undefined && { title: body.title }),
        ...(body.type !== undefined && { type: body.type }),
        ...(body.sortOrder !== undefined && { sortOrder: body.sortOrder }),
        ...(body.notes !== undefined && { notes: body.notes }),
      },
    })
    return NextResponse.json({ item: updated })
  }

  // Add item to week
  if (body.weekId && body.addItem) {
    const week = await prisma.curriculumWeek.findFirst({
      where: { id: body.weekId },
      include: { plan: { include: { classroom: true } } },
    })
    if (!week || week.plan.classroom.teacherId !== user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const maxOrder = await prisma.curriculumItem.aggregate({
      where: { weekId: body.weekId },
      _max: { sortOrder: true },
    })
    const item = await prisma.curriculumItem.create({
      data: {
        weekId: body.weekId,
        title: body.addItem.title || 'New Item',
        topicSlug: body.addItem.topicSlug || null,
        type: body.addItem.type || 'LESSON',
        sortOrder: (maxOrder._max.sortOrder ?? 0) + 1,
      },
    })
    return NextResponse.json({ item })
  }

  // Add week to plan
  if (body.planId && body.addWeek) {
    const plan = await prisma.curriculumPlan.findFirst({
      where: { id: body.planId },
      include: { classroom: true },
    })
    if (!plan || plan.classroom.teacherId !== user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    const maxWeek = await prisma.curriculumWeek.aggregate({
      where: { planId: body.planId },
      _max: { weekNum: true },
    })
    const week = await prisma.curriculumWeek.create({
      data: {
        planId: body.planId,
        weekNum: (maxWeek._max.weekNum ?? 0) + 1,
        title: body.addWeek.title || `Week ${(maxWeek._max.weekNum ?? 0) + 1}`,
      },
      include: { items: true },
    })
    return NextResponse.json({ week })
  }

  return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
}

// DELETE /api/teacher/curriculum?id=xxx&type=plan|week|item
export async function DELETE(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const id = req.nextUrl.searchParams.get('id')
  const type = req.nextUrl.searchParams.get('type') || 'plan'

  if (!id) {
    return NextResponse.json({ error: 'ID required' }, { status: 400 })
  }

  if (type === 'item') {
    const item = await prisma.curriculumItem.findFirst({
      where: { id },
      include: { week: { include: { plan: { include: { classroom: true } } } } },
    })
    if (!item || item.week.plan.classroom.teacherId !== user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    await prisma.curriculumItem.delete({ where: { id } })
  } else if (type === 'week') {
    const week = await prisma.curriculumWeek.findFirst({
      where: { id },
      include: { plan: { include: { classroom: true } } },
    })
    if (!week || week.plan.classroom.teacherId !== user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    await prisma.curriculumWeek.delete({ where: { id } })
  } else {
    const plan = await prisma.curriculumPlan.findFirst({
      where: { id },
      include: { classroom: true },
    })
    if (!plan || plan.classroom.teacherId !== user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    await prisma.curriculumPlan.delete({ where: { id } })
  }

  return NextResponse.json({ success: true })
}
