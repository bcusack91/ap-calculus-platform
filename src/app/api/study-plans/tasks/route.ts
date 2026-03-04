import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody, updateStudyTaskSchema, createStudyTaskSchema } from '@/lib/validations'

// PUT /api/study-plans/tasks — toggle task completion or update task
export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = parseBody(updateStudyTaskSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { id, completed, title, dueDate, sortOrder } = parsed.data

  // Verify ownership
  const task = await prisma.studyTask.findFirst({
    where: { id },
    include: { plan: { select: { userId: true } } },
  })
  if (!task || task.plan.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const updated = await prisma.studyTask.update({
    where: { id },
    data: {
      ...(completed !== undefined && {
        completed,
        completedAt: completed ? new Date() : null,
      }),
      ...(title !== undefined && { title }),
      ...(dueDate !== undefined && { dueDate: dueDate ? new Date(dueDate) : null }),
      ...(sortOrder !== undefined && { sortOrder }),
    },
  })

  return NextResponse.json({ task: updated })
}

// POST /api/study-plans/tasks — add task to a plan
export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = parseBody(createStudyTaskSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { planId, title, topicSlug, type, dueDate } = parsed.data

  const plan = await prisma.studyPlan.findFirst({
    where: { id: planId, userId: session.user.id },
  })
  if (!plan) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 })
  }

  const maxOrder = await prisma.studyTask.aggregate({
    where: { planId },
    _max: { sortOrder: true },
  })

  const task = await prisma.studyTask.create({
    data: {
      planId,
      title,
      topicSlug: topicSlug || null,
      type: type || 'CUSTOM',
      dueDate: dueDate ? new Date(dueDate) : null,
      sortOrder: (maxOrder._max.sortOrder ?? 0) + 1,
    },
  })

  return NextResponse.json({ task }, { status: 201 })
}

// DELETE /api/study-plans/tasks — delete a task
export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Task ID required' }, { status: 400 })
  }

  const task = await prisma.studyTask.findFirst({
    where: { id },
    include: { plan: { select: { userId: true } } },
  })
  if (!task || task.plan.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await prisma.studyTask.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
