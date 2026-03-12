import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody, createStudyPlanSchema, updateStudyPlanSchema } from '@/lib/validations'

// GET /api/study-plans — list user's study plans
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const plans = await prisma.studyPlan.findMany({
    where: { userId: session.user.id },
    include: {
      tasks: { orderBy: { sortOrder: 'asc' } },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ plans })
}

// POST /api/study-plans — create a new study plan
export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = parseBody(createStudyPlanSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { title, examDate, goalType, courseSlug, targetScore, tasks } = parsed.data

  const plan = await prisma.studyPlan.create({
    data: {
      userId: session.user.id,
      title,
      examDate: examDate ? new Date(examDate) : null,
      goalType: goalType || 'CUSTOM',
      courseSlug: courseSlug || null,
      targetScore: targetScore ? parseInt(String(targetScore)) : null,
      tasks: tasks?.length
        ? {
            create: tasks.map((t: { title: string; topicSlug?: string; type?: string; dueDate?: string }, i: number) => ({
              title: t.title,
              topicSlug: t.topicSlug || null,
              type: t.type || 'LESSON',
              dueDate: t.dueDate ? new Date(t.dueDate) : null,
              sortOrder: i,
            })),
          }
        : undefined,
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  return NextResponse.json({ plan }, { status: 201 })
}

// PUT /api/study-plans — update a study plan
export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = parseBody(updateStudyPlanSchema, body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  const { id, title, examDate, goalType, targetScore, isActive } = parsed.data

  const existing = await prisma.studyPlan.findFirst({
    where: { id, userId: session.user.id },
  })
  if (!existing) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const plan = await prisma.studyPlan.update({
    where: { id },
    data: {
      ...(title !== undefined && { title }),
      ...(examDate !== undefined && { examDate: examDate ? new Date(examDate) : null }),
      ...(goalType !== undefined && { goalType }),
      ...(targetScore !== undefined && { targetScore: targetScore ? parseInt(String(targetScore)) : null }),
      ...(isActive !== undefined && { isActive }),
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  return NextResponse.json({ plan })
}

// DELETE /api/study-plans — delete a study plan
export async function DELETE(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Plan ID required' }, { status: 400 })
  }

  const existing = await prisma.studyPlan.findFirst({
    where: { id, userId: session.user.id },
  })
  if (!existing) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  await prisma.studyPlan.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
