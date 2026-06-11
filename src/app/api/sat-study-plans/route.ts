import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { SAT_STUDY_PLANS, resolveTemplateTasks } from '@/data/sat-study-plans'
import { applyAdaptivePriority } from '@/lib/adaptive-study-plan'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { templateId, startDate, examDate } = body as {
    templateId: string
    startDate?: string
    examDate?: string
  }

  const template = SAT_STUDY_PLANS.find(t => t.id === templateId)
  if (!template) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const start = startDate ? new Date(startDate) : new Date()
  const resolvedTasks = resolveTemplateTasks(template, start)

  // Adaptive (#4): front-load weak areas from the latest SAT diagnostic; no-op if none.
  const { tasks } = await applyAdaptivePriority(session.user.id, 'sat-full-diagnostic', resolvedTasks, start)

  // Compute default exam date if not provided (start + duration weeks)
  const defaultExamDate = new Date(start)
  defaultExamDate.setDate(defaultExamDate.getDate() + template.durationWeeks * 7)

  const plan = await prisma.studyPlan.create({
    data: {
      userId: session.user.id,
      title: template.title,
      goalType: 'CUSTOM',
      courseSlug: 'sat-prep',
      examDate: examDate ? new Date(examDate) : defaultExamDate,
      isActive: true,
      tasks: {
        create: tasks,
      },
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  return NextResponse.json(plan)
}

export async function GET() {
  // Return available templates (no auth required)
  const templates = SAT_STUDY_PLANS.map(t => ({
    id: t.id,
    title: t.title,
    description: t.description,
    durationWeeks: t.durationWeeks,
    targetImprovement: t.targetImprovement,
    weeklyHours: t.weeklyHours,
    difficulty: t.difficulty,
    taskCount: t.tasks.length,
  }))
  return NextResponse.json(templates)
}
