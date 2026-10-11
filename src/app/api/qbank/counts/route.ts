import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { isQbankCourse } from '@/lib/qbank-types'
import { filtersFromParams } from '@/lib/qbank-request'
import { qbankCounts } from '@/lib/qbank-server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/qbank/counts?course=&sections=&disciplines=&topics=&difficulties=
 * (comma-separated) — the builder's live numbers: questions available per
 * pool (all / unused / incorrect / flagged) under the filters, and per
 * section, discipline, topic and difficulty with the other filters applied.
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const course = req.nextUrl.searchParams.get('course')
  if (!isQbankCourse(course)) return NextResponse.json({ error: 'Invalid course' }, { status: 400 })
  try {
    const counts = await qbankCounts(userId, course, filtersFromParams(req.nextUrl.searchParams))
    return NextResponse.json(counts, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/qbank/counts]', err)
    return NextResponse.json({ error: 'Could not count questions' }, { status: 500 })
  }
}
