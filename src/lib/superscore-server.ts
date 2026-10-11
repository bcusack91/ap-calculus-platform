import { prisma } from '@/lib/prisma'
import { computeSuperscore, type SatSitting, type Superscore } from '@/lib/superscore'

/**
 * Entered sources that are not SAT sittings. A PSAT/NMSQT is on the 160–760
 * scale and colleges never superscore it with the SAT, so it stays out even
 * though the score form files it under course 'sat'.
 */
const NON_SAT_SOURCES = new Set(['PSAT/NMSQT'])

/** Full-length StudyMondo tests: format 'full', or a legacy row (no format) with a full R&W section. */
export function isFullSatAttempt(row: { format: string | null; rwTotal: number }): boolean {
  return row.format === 'full' || (row.format == null && row.rwTotal > 27)
}

function sectionScores(raw: unknown): { rw: number | null; math: number | null } {
  const o = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {}
  return {
    rw: typeof o.rw === 'number' ? o.rw : null,
    math: typeof o.math === 'number' ? o.math : null,
  }
}

/** Every SAT sitting with both section scores: StudyMondo full tests (any scoring version) + entered College Board scores. */
export async function loadSatSittings(userId: string): Promise<SatSitting[]> {
  const [attempts, external] = await Promise.all([
    prisma.satTestAttempt.findMany({
      where: { userId, completed: true },
      select: { id: true, testNumber: true, rwScore: true, mathScore: true, rwTotal: true, format: true, completedAt: true },
    }),
    prisma.externalExamScore.findMany({
      where: { userId, course: 'sat' },
      select: { id: true, source: true, sectionScores: true, takenAt: true },
    }),
  ])
  const out: SatSitting[] = []
  for (const a of attempts) {
    if (!isFullSatAttempt(a)) continue
    out.push({ id: a.id, date: a.completedAt.toISOString(), rw: a.rwScore, math: a.mathScore, source: 'studymondo', label: `StudyMondo Practice Test ${a.testNumber}` })
  }
  for (const e of external) {
    if (NON_SAT_SOURCES.has(e.source)) continue
    const { rw, math } = sectionScores(e.sectionScores)
    if (rw == null || math == null) continue
    out.push({ id: e.id, date: e.takenAt.toISOString(), rw, math, source: 'college-board', label: e.source })
  }
  return out.sort((a, b) => (a.date < b.date ? -1 : 1))
}

export async function loadSatSuperscore(userId: string): Promise<Superscore | null> {
  return computeSuperscore(await loadSatSittings(userId))
}
