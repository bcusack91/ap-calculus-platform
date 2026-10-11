import { buildSatForm, routedModule2 } from '@/data/sat-practice/test-generator'
import { satRouteFor, type SatRoute } from '@/lib/sat-scoring'
import { SAT_SCORING_VERSION } from '@/lib/sat-attempt-format'

/**
 * Pieces of scripts/rescore-sat-attempts.ts that tests can import (the script
 * itself loads .env files and opens a database connection on import).
 *
 * The rescore touches ONLY legacy (scoringVersion 1) attempts. Those were all
 * taken on form v1, so their Module 2s are matched against v1 builds; v2
 * attempts (scoringVersion 3) and server-graded v1 attempts (2) are never
 * selected.
 */
export const SAT_RESCORE_WHERE = { scoringVersion: SAT_SCORING_VERSION.LEGACY } as const

export interface SectionTally {
  sectionId: string
  correct: number
  total: number
  questionIds: string[]
}

/** The route a legacy section was scored on, or null when Module 2 was unrouted / unknown. */
export async function legacySectionRoute(
  testNumber: number,
  m1: SectionTally,
  m2: SectionTally,
  m2Index: number,
): Promise<{ tier: SatRoute | null; note: string }> {
  const tier = satRouteFor(m1.correct, m1.total)
  if (!m2.questionIds.length) return { tier, note: 'no ids' }
  const ids = new Set(m2.questionIds)
  const same = (qs: { id: string }[]) => qs.length === ids.size && qs.every((q) => ids.has(q.id))
  // Legacy attempts predate form v2: always rebuild v1.
  const base = await buildSatForm(testNumber, 'full', null, null, 1)
  if (same((await routedModule2(base, m2Index, tier)).questions)) return { tier, note: '' }
  if (same(base.sections[m2Index].questions)) return { tier: null, note: 'unrouted (race)' }
  const other: SatRoute = tier === 'harder' ? 'easier' : 'harder'
  if (same((await routedModule2(base, m2Index, other)).questions)) return { tier: other, note: 'other route' }
  return { tier, note: 'ids unmatched' }
}
