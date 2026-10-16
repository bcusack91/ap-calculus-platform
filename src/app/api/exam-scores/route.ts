import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { actSourceLabel, isExternalScoreCourse, validateExternalScore } from '@/lib/external-score-courses'
import { actPredictionAt } from '@/lib/act-full-length-server'

export const dynamic = 'force-dynamic'

/**
 * Full-length scores earned outside StudyMondo — an AAMC MCAT full-length, a
 * College Board / Bluebook SAT practice test, a released AP exam or the real
 * AP score (1–5, course = the AP class-plan key, e.g. 'ap-chem'). An entry
 * counts as a full-length taken: it resets the readiness bar and joins the
 * student's score history.
 *
 * ACT entries (an official ACT or an ACT practice test, composite 1-36 plus
 * optional English/Math/Reading/Science) are calibration data and feed the ACT
 * score goal. The server stores, inside sectionScores, `predicted` — what
 * StudyMondo predicted as of the test date (latest ACT full-length composite,
 * else the latest ACT diagnostic estimate) — and `predictedFromFullLength`
 * (1 = from a full-length, 0 = from a diagnostic). The official source gets
 * its month appended ('Official ACT (Apr 2026)').
 *
 *   GET    /api/exam-scores?course=mcat|sat|act|<AP key>   → { scores }
 *   POST   /api/exam-scores                    { course, source, totalScore, sectionScores?, takenAt, note? }
 *   DELETE /api/exam-scores?id=…               (own entries only)
 */

const bodySchema = z.object({
  course: z.string(),
  source: z.string().trim().min(1).max(80),
  totalScore: z.number().int(),
  sectionScores: z.record(z.string(), z.number().int()).optional(),
  takenAt: z.string().datetime({ offset: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)),
  note: z.string().trim().max(500).optional(),
})

export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const course = req.nextUrl.searchParams.get('course')
  const scores = await prisma.externalExamScore.findMany({
    where: { userId, ...(isExternalScoreCourse(course) ? { course } : {}) },
    orderBy: { takenAt: 'desc' },
  })
  return NextResponse.json({ scores }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Check the score fields and try again.' }, { status: 400 })
  const { course, source, totalScore, sectionScores, takenAt, note } = parsed.data
  if (!isExternalScoreCourse(course)) return NextResponse.json({ error: 'Unknown course.' }, { status: 400 })
  const checked = validateExternalScore(course, totalScore, sectionScores)
  if (!checked.ok) return NextResponse.json({ error: checked.error }, { status: 400 })
  const sections = checked.sections
  // A date-only value is the student's local day; noon keeps it on that day in any zone.
  const taken = /^\d{4}-\d{2}-\d{2}$/.test(takenAt) ? new Date(`${takenAt}T12:00:00`) : new Date(takenAt)
  if (Number.isNaN(taken.getTime()) || taken.getTime() > Date.now() + 24 * 60 * 60 * 1000) {
    return NextResponse.json({ error: 'The test date must be today or earlier.' }, { status: 400 })
  }
  if (course === 'act') {
    // Calibration: what we predicted before the real test (end of its day).
    const prediction = await actPredictionAt(userId, new Date(taken.getTime() + 12 * 60 * 60 * 1000)).catch(() => null)
    if (prediction) {
      sections.predicted = prediction.predicted
      sections.predictedFromFullLength = prediction.fromFullLength ? 1 : 0
    }
  }
  const score = await prisma.externalExamScore.create({
    data: {
      userId,
      course,
      source: course === 'act' ? actSourceLabel(source, taken) : source,
      totalScore,
      sectionScores: Object.keys(sections).length ? sections : undefined,
      takenAt: taken,
      note: note || null,
    },
  })
  return NextResponse.json({ score })
}

export async function DELETE(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  const { count } = await prisma.externalExamScore.deleteMany({ where: { id, userId } })
  if (count === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
