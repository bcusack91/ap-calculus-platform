import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { MCAT_STUDY_PLANS, resolveMCATTemplateTasks, weeksUntil, recommendMCATTemplateId } from '@/data/mcat-study-plans'
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

  const template = MCAT_STUDY_PLANS.find(t => t.id === templateId)
  if (!template) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const start = startDate ? new Date(startDate) : new Date()

  // Exam-date-aware scheduling: when the student gave a real exam date, scale
  // the template's week layout to the weeks actually remaining (compressing or
  // stretching; overflow merges into the final weeks) so no task is ever due
  // after their test. Invalid/past dates fall back to the unscaled template.
  const parsedExam = examDate ? new Date(examDate) : null
  const exam = parsedExam && !Number.isNaN(parsedExam.getTime()) && parsedExam.getTime() > start.getTime()
    ? parsedExam
    : null
  const resolvedTasks = resolveMCATTemplateTasks(template, start, exam)

  // Adaptive (#4): front-load weak areas from the latest MCAT diagnostic AND the
  // latest full-length exam (distinct categories, merged + deduped by slug). No-op if none.
  const { tasks } = await applyAdaptivePriority(session.user.id, ['mcat-full-diagnostic', 'mcat-full-length'], resolvedTasks, start)

  // Compute default exam date if not provided (start + duration weeks)
  const defaultExamDate = new Date(start)
  defaultExamDate.setDate(defaultExamDate.getDate() + template.durationWeeks * 7)

  const plan = await prisma.studyPlan.create({
    data: {
      userId: session.user.id,
      title: template.title,
      goalType: 'CUSTOM',
      courseSlug: 'mcat-prep',
      examDate: exam ?? defaultExamDate,
      isActive: true,
      tasks: {
        create: tasks,
      },
    },
    include: { tasks: { orderBy: { sortOrder: 'asc' } } },
  })

  // Additive fields only — existing consumers read the plan object unchanged.
  return NextResponse.json({
    ...plan,
    scheduling: {
      scaledToExamDate: exam !== null,
      weeksUntilExam: exam ? Math.max(0, weeksUntil(exam, start)) : null,
      templateDurationWeeks: template.durationWeeks,
      recommendedTemplateId: exam ? recommendMCATTemplateId(weeksUntil(exam, start)) : null,
    },
  })
}

export async function GET() {
  // Return available templates (no auth required)
  const templates = MCAT_STUDY_PLANS.map(t => ({
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
