import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { dayKey, summarizeActiveTime } from '@/lib/student-metrics'
import { studentLocalDay } from '@/lib/study-tracking'

export const dynamic = 'force-dynamic'

const RANGE_DAYS = { '7d': 7, '30d': 30, all: null } as const
type Range = keyof typeof RANGE_DAYS

/**
 * GET /api/activity/my-time?range=7d|30d|all&tz=<minutes> — the signed-in
 * student's own active study time (the same ActiveTimeDaily rows teachers
 * see): total, active days, seconds per surface and per day. Every course and
 * class. `tz` is Date#getTimezoneOffset(), so "last 7 days" ends on the
 * student's today.
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const raw = req.nextUrl.searchParams.get('range')
  const range: Range = raw === '30d' || raw === 'all' ? raw : '7d'
  const tz = Number(req.nextUrl.searchParams.get('tz'))
  const today = studentLocalDay(new Date(), Number.isFinite(tz) ? tz : null)
  const days = RANGE_DAYS[range]
  const from = days ? new Date(today.getTime() - (days - 1) * 86_400_000) : null

  const rows = await prisma.activeTimeDaily.findMany({
    where: { userId, ...(from ? { day: { gte: from } } : {}) },
    select: { day: true, surface: true, seconds: true },
  })
  return NextResponse.json(
    {
      range,
      from: from ? dayKey(from) : null,
      today: dayKey(today),
      activeTime: summarizeActiveTime(rows),
    },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
