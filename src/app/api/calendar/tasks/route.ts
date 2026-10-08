import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { dayAtNoonUTC } from '@/lib/cycle-scheduler'

export const dynamic = 'force-dynamic'

const OWN_PLAN_TITLE = 'My tasks'

const bodySchema = z.object({
  title: z.string().trim().min(1).max(120),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
})

/**
 * POST /api/calendar/tasks {title, date} — a task the student adds from the
 * calendar. Lives in their own "My tasks" plan (created on demand) so it sits
 * beside the scheduled cycle without touching it. Editing, ticking and
 * deleting go through /api/study-plans/tasks like any task.
 */
export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Give the task a title and a date.' }, { status: 400 })
  const { title, date } = parsed.data
  try {
    const plan =
      (await prisma.studyPlan.findFirst({ where: { userId, goalType: 'CUSTOM', title: OWN_PLAN_TITLE }, select: { id: true } })) ??
      (await prisma.studyPlan.create({ data: { userId, title: OWN_PLAN_TITLE, goalType: 'CUSTOM', isActive: true }, select: { id: true } }))
    const task = await prisma.studyTask.create({
      data: { planId: plan.id, title, type: 'CUSTOM', dueDate: dayAtNoonUTC(new Date(`${date}T12:00:00Z`)) },
    })
    return NextResponse.json({ task })
  } catch (err) {
    console.error('[POST /api/calendar/tasks]', err)
    return NextResponse.json({ error: 'Could not add the task' }, { status: 500 })
  }
}
