import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { isFullLengthCourse } from '@/lib/full-length-progress'
import { dayAtNoonUTC } from '@/lib/cycle-scheduler'
import { classDueDateFor, syncCycleSchedule } from '@/lib/cycle-scheduler-server'

export const dynamic = 'force-dynamic'

const bodySchema = z.object({
  course: z.string(),
  /** YYYY-MM-DD, or null to clear the student's own target. */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),
})

/**
 * PUT /api/calendar/target {course, date|null} — the student's own target
 * date for their next diagnostic; the cycle's lessons are spaced up to it. A
 * teacher's class diagnostic due date takes precedence and can't be changed
 * here.
 */
export async function PUT(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Pick a date.' }, { status: 400 })
  const { course, date } = parsed.data
  if (!isFullLengthCourse(course)) return NextResponse.json({ error: 'Only MCAT and SAT cycles can be scheduled.' }, { status: 400 })
  if (await classDueDateFor(userId, course)) {
    return NextResponse.json({ error: 'Your teacher set this due date. Ask them to change it.' }, { status: 409 })
  }
  const dueDate = date ? dayAtNoonUTC(new Date(`${date}T12:00:00Z`)) : null
  if (dueDate && dueDate.getTime() < dayAtNoonUTC(new Date()).getTime()) {
    return NextResponse.json({ error: 'Pick today or a later date.' }, { status: 400 })
  }
  try {
    const result = await syncCycleSchedule(userId, course, { dueDate })
    if (!result) return NextResponse.json({ error: `Take the ${course.toUpperCase()} diagnostic first — it builds the lessons to schedule.` }, { status: 409 })
    return NextResponse.json({ ok: true, dueDate: result.dueDate?.toISOString() ?? null, scheduled: result.created + result.updated })
  } catch (err) {
    console.error('[PUT /api/calendar/target]', err)
    return NextResponse.json({ error: 'Could not save the target date' }, { status: 500 })
  }
}
