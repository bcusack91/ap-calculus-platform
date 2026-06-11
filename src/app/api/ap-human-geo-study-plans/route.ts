import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AP_HUMAN_GEO_PLANS } from '@/data/ap-human-geo-study-plans'
import { resolveStudyPlanTasks } from '@/lib/study-plan-utils'
import { applyAdaptivePriority } from '@/lib/adaptive-study-plan'
import { getContentItem, CONTENT_TYPES } from '@/lib/content-store'

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

  const template = await getContentItem(CONTENT_TYPES.studyPlanTemplate, 'ap-human-geography', templateId, AP_HUMAN_GEO_PLANS, t => t.id)
  if (!template) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const start = startDate ? new Date(startDate) : new Date()
  const resolvedTasks = resolveStudyPlanTasks(template, start)
  // Adaptive (#4): front-load weak areas from the latest diagnostic; no-op if none.
  const { tasks: adaptiveTasks } = await applyAdaptivePriority(session.user.id, 'ap-human-geo-diagnostic', resolvedTasks, start)

  const defaultExamDate = new Date(start)
  defaultExamDate.setDate(defaultExamDate.getDate() + template.durationWeeks * 7)

  const plan = await prisma.studyPlan.create({
    data: {
      userId: session.user.id,
      title: template.title,
      goalType: 'CUSTOM',
      courseSlug: 'ap-human-geography',
      examDate: examDate ? new Date(examDate) : defaultExamDate,
      isActive: true,
      tasks: { create: adaptiveTasks },
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  return NextResponse.json(plan)
}

export async function GET() {
  const templates = AP_HUMAN_GEO_PLANS.map(t => ({
    id: t.id, title: t.title, description: t.description,
    durationWeeks: t.durationWeeks, targetImprovement: t.targetImprovement,
    weeklyHours: t.weeklyHours, difficulty: t.difficulty, taskCount: t.tasks.length,
  }))
  return NextResponse.json(templates)
}
