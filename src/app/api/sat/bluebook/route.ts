import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { bluebookSectionScores, validateBluebookEntry } from '@/lib/sat-bluebook'
import { buildBluebookPlan, loadBluebookEntries, predictionSnapshot, type BluebookEntryView } from '@/lib/sat-bluebook-server'

export const dynamic = 'force-dynamic'

/**
 * Bluebook companion (/sat/bluebook).
 *
 *   GET  /api/sat/bluebook → { entries, latest, plan }
 *        entries: the student's SAT outside scores (newest first); latest: the
 *        newest one with both section scores; plan: built from it.
 *   POST /api/sat/bluebook  { source, takenAt, total, rw, math, domains? }
 *        → { entry, plan }. Saves an ExternalExamScore (course 'sat') with
 *        the domain bands and StudyMondo's prediction inside sectionScores —
 *        see src/lib/sat-bluebook.ts for the shape and the calibration query.
 *
 * Deleting goes through DELETE /api/exam-scores?id=… like any outside score.
 */

/** PSAT/NMSQT rows are on the 160–760 scale; they never drive an SAT plan. */
const planEligible = (e: BluebookEntryView) => e.source !== 'PSAT/NMSQT' && e.rw != null && e.math != null

export async function GET() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const entries = await loadBluebookEntries(userId)
  const latest = entries.find(planEligible) ?? null
  const plan = latest
    ? await buildBluebookPlan(userId, { rw: latest.rw!, math: latest.math!, domains: latest.domains, takenAt: new Date(latest.takenAt) })
    : null
  return NextResponse.json({ entries, latest, plan }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = validateBluebookEntry(await req.json().catch(() => null))
  if (!parsed.ok) return NextResponse.json({ error: parsed.error, field: parsed.field }, { status: 400 })
  const entry = parsed.value

  // Snapshot the prediction BEFORE the score is saved (it never reads outside
  // scores, but this keeps the pair honest if that ever changes).
  const predicted = await predictionSnapshot(userId)
  // A date-only value is the student's local day; noon keeps it on that day in any zone.
  const takenAt = new Date(`${entry.takenAt}T12:00:00`)
  const row = await prisma.externalExamScore.create({
    data: {
      userId,
      course: 'sat',
      source: entry.source,
      totalScore: entry.total,
      sectionScores: bluebookSectionScores(entry, predicted),
      takenAt,
    },
    select: { id: true },
  })
  const plan = await buildBluebookPlan(userId, { rw: entry.rw, math: entry.math, domains: entry.domains, takenAt })
  const view: BluebookEntryView = {
    id: row.id,
    source: entry.source,
    takenAt: takenAt.toISOString(),
    total: entry.total,
    rw: entry.rw,
    math: entry.math,
    domains: entry.domains,
    companion: true,
  }
  return NextResponse.json({ entry: view, plan })
}
