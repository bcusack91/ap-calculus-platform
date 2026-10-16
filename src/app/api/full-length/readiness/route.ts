import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { isFullLengthCourse, type FullLengthCourse } from '@/lib/full-length-progress'
import { fullLengthReadiness, type CurrentPlanCounts } from '@/lib/full-length-progress-server'
import { buildMcatPlanStatus } from '@/lib/mcat-plan'
import { buildSatPlan } from '@/lib/sat-plan'
import { buildGenericPlanStatus } from '@/lib/act-plan'

export const dynamic = 'force-dynamic'

/** The student's live cycle, so the bar matches the plan they are shown. */
async function currentPlanCounts(userId: string, course: FullLengthCourse): Promise<CurrentPlanCounts | null> {
  if (course !== 'mcat' && course !== 'sat') {
    // AP: the generic class-plan cycle the hub and dashboard show.
    const p = await buildGenericPlanStatus(userId, course)
    if (!p.hasDiagnostic || !p.diagnosticId) return null
    return { diagnosticId: p.diagnosticId, topicsTotal: p.recommendedTopics.length, topicsCleared: p.recommendedTopics.length - p.pendingTopics.length }
  }
  if (course === 'mcat') {
    const p = await buildMcatPlanStatus(userId)
    if (!p.hasDiagnostic || !p.diagnosticId) return null
    return { diagnosticId: p.diagnosticId, topicsTotal: p.recommendedTopics.length, topicsCleared: p.recommendedTopics.length - p.pendingTopics.length }
  }
  const p = await buildSatPlan(userId)
  if (!p.hasDiagnostic) return null
  return { diagnosticId: p.diagnosticId, topicsTotal: p.recommendedTopics.length, topicsCleared: p.recommendedTopics.length - p.pendingTopics.length }
}

/**
 * GET /api/full-length/readiness?course=mcat|sat|<AP class-plan key> — the student's full-length
 * readiness bar (levels 1–10 over complete study cycles) and their full-length
 * history. Feeds the progress bar on the course page, the dashboard and the
 * calendar.
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const course = req.nextUrl.searchParams.get('course')
  if (!isFullLengthCourse(course)) return NextResponse.json({ error: 'course must be mcat, sat or an AP course' }, { status: 400 })
  try {
    const currentPlan = await currentPlanCounts(userId, course)
    const readiness = await fullLengthReadiness(userId, course, { currentPlan })
    return NextResponse.json({ readiness }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/full-length/readiness]', err)
    return NextResponse.json({ error: 'Could not load readiness' }, { status: 500 })
  }
}
