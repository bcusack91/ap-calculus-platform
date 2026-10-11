import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { isQbankCourse } from '@/lib/qbank-types'
import { cleanFilters, qbankCreateSchema } from '@/lib/qbank-request'
import { createQbankSession, recentSessions, sessionView } from '@/lib/qbank-server'

export const dynamic = 'force-dynamic'

const NO_STORE = { 'Cache-Control': 'private, no-store' }

/**
 * GET /api/qbank?course=mcat|sat — the student's recent practice sets and the
 * id of the latest unfinished one (to resume).
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const course = req.nextUrl.searchParams.get('course')
  if (!isQbankCourse(course)) return NextResponse.json({ error: 'Invalid course' }, { status: 400 })
  try {
    return NextResponse.json(await recentSessions(userId, course), { headers: NO_STORE })
  } catch (err) {
    console.error('[GET /api/qbank]', err)
    return NextResponse.json({ error: 'Could not load your practice sets' }, { status: 500 })
  }
}

/**
 * POST /api/qbank {course, sections?, disciplines?, topics?, difficulties?,
 * count 5-60, mode 'timed'|'tutor', pool 'all'|'unused'|'incorrect'|'flagged'}
 * — build a practice set from the student's filters and freeze it. Returns
 * the set without answer keys or explanations.
 */
export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = qbankCreateSchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const { course, count, mode, pool, ...filters } = parsed.data
  try {
    const row = await createQbankSession(userId, { course, count, mode, pool, filters: cleanFilters(filters) })
    if (!row) return NextResponse.json({ error: 'No questions match those filters. Widen them and try again.' }, { status: 422 })
    return NextResponse.json({ session: sessionView(row) }, { status: 201, headers: NO_STORE })
  } catch (err) {
    console.error('[POST /api/qbank]', err)
    return NextResponse.json({ error: 'Could not build that practice set' }, { status: 500 })
  }
}
