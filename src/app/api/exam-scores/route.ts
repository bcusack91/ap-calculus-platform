import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { FULL_LENGTH_COURSES, isFullLengthCourse } from '@/lib/full-length-progress'

export const dynamic = 'force-dynamic'

/**
 * Full-length scores earned outside StudyMondo — an AAMC MCAT full-length, a
 * College Board / Bluebook SAT practice test. An entry counts as a full-length
 * taken: it resets the readiness bar and joins the student's score history.
 *
 *   GET    /api/exam-scores?course=mcat|sat   → { scores }
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
    where: { userId, ...(isFullLengthCourse(course) ? { course } : {}) },
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
  if (!isFullLengthCourse(course)) return NextResponse.json({ error: 'Unknown course.' }, { status: 400 })
  const cfg = FULL_LENGTH_COURSES[course]
  if (totalScore < cfg.total.min || totalScore > cfg.total.max) {
    return NextResponse.json({ error: `${cfg.label} total scores run ${cfg.total.min}–${cfg.total.max}.` }, { status: 400 })
  }
  const sections: Record<string, number> = {}
  for (const s of cfg.sections) {
    const v = sectionScores?.[s.key]
    if (v === undefined) continue
    if (v < s.min || v > s.max) return NextResponse.json({ error: `${s.label} scores run ${s.min}–${s.max}.` }, { status: 400 })
    sections[s.key] = v
  }
  // A date-only value is the student's local day; noon keeps it on that day in any zone.
  const taken = /^\d{4}-\d{2}-\d{2}$/.test(takenAt) ? new Date(`${takenAt}T12:00:00`) : new Date(takenAt)
  if (Number.isNaN(taken.getTime()) || taken.getTime() > Date.now() + 24 * 60 * 60 * 1000) {
    return NextResponse.json({ error: 'The test date must be today or earlier.' }, { status: 400 })
  }
  const score = await prisma.externalExamScore.create({
    data: {
      userId,
      course,
      source,
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
