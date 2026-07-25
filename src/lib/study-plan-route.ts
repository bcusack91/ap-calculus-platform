import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { type StudyPlanTemplate, resolveStudyPlanTasks } from '@/lib/study-plan-utils'
import { applyAdaptivePriority } from '@/lib/adaptive-study-plan'
import { getContentItem, CONTENT_TYPES } from '@/lib/content-store'

/**
 * Factory for the per-course study-plan adoption routes.
 *
 * Every one of these routes was previously copy-pasted per course and differed
 * only in three values. Several courses shipped a selector page pointing at a
 * route that was never written, so "Start this plan" 404'd — one shared
 * implementation makes that failure mode impossible to reintroduce.
 */
export function createStudyPlanRoute(opts: {
  plans: StudyPlanTemplate[]
  courseSlug: string
  diagnosticPrefix: string
}) {
  const { plans, courseSlug, diagnosticPrefix } = opts

  async function POST(request: Request) {
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

    const template = await getContentItem(CONTENT_TYPES.studyPlanTemplate, courseSlug, templateId, plans, t => t.id)
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 })
    }

    const start = startDate ? new Date(startDate) : new Date()
    const resolvedTasks = resolveStudyPlanTasks(template, start)
    // Front-load weak areas from the latest diagnostic; no-op if there isn't one.
    const { tasks: adaptiveTasks } = await applyAdaptivePriority(session.user.id, diagnosticPrefix, resolvedTasks, start)

    const defaultExamDate = new Date(start)
    defaultExamDate.setDate(defaultExamDate.getDate() + template.durationWeeks * 7)

    const plan = await prisma.studyPlan.create({
      data: {
        userId: session.user.id,
        title: template.title,
        goalType: 'CUSTOM',
        courseSlug,
        examDate: examDate ? new Date(examDate) : defaultExamDate,
        isActive: true,
        tasks: { create: adaptiveTasks },
      },
      include: { tasks: { orderBy: { sortOrder: 'asc' } } },
    })

    return NextResponse.json(plan)
  }

  async function GET() {
    const templates = plans.map(t => ({
      id: t.id, title: t.title, description: t.description,
      durationWeeks: t.durationWeeks, targetImprovement: t.targetImprovement,
      weeklyHours: t.weeklyHours, difficulty: t.difficulty, taskCount: t.tasks.length,
    }))
    return NextResponse.json(templates)
  }

  return { POST, GET }
}
