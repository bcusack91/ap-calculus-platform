import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AP_STATS_PLANS } from '@/data/ap-stats-study-plans'
import { resolveStudyPlanTasks } from '@/lib/study-plan-utils'
import { applyAdaptivePriority } from '@/lib/adaptive-study-plan'
import { getContentItem, getContentItems, CONTENT_TYPES } from '@/lib/content-store'

const COURSE_SLUG = 'ap-statistics'

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

  // Read the template from the content store (DB), falling back to the static
  // source when it hasn't been imported / DB is unavailable (#10).
  const template = await getContentItem(
    CONTENT_TYPES.studyPlanTemplate,
    COURSE_SLUG,
    templateId,
    AP_STATS_PLANS,
    t => t.id,
  )
  if (!template) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const start = startDate ? new Date(startDate) : new Date()
  const resolvedTasks = resolveStudyPlanTasks(template, start)

  // Adaptive (#4): front-load the student's weak areas from their latest
  // AP Statistics diagnostic. No diagnostic → tasks are unchanged.
  const { tasks } = await applyAdaptivePriority(
    session.user.id,
    'ap-stats-diagnostic',
    resolvedTasks,
    start,
  )

  const defaultExamDate = new Date(start)
  defaultExamDate.setDate(defaultExamDate.getDate() + template.durationWeeks * 7)

  const plan = await prisma.studyPlan.create({
    data: {
      userId: session.user.id,
      title: template.title,
      goalType: 'CUSTOM',
      courseSlug: 'ap-statistics',
      examDate: examDate ? new Date(examDate) : defaultExamDate,
      isActive: true,
      tasks: { create: tasks },
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  return NextResponse.json(plan)
}

export async function GET() {
  const plans = await getContentItems(CONTENT_TYPES.studyPlanTemplate, COURSE_SLUG, AP_STATS_PLANS)
  const templates = plans.map(t => ({
    id: t.id, title: t.title, description: t.description,
    durationWeeks: t.durationWeeks, targetImprovement: t.targetImprovement,
    weeklyHours: t.weeklyHours, difficulty: t.difficulty, taskCount: t.tasks.length,
  }))
  return NextResponse.json(templates)
}
