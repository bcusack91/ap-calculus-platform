/**
 * scripts/rescore-sat-attempts.ts rescores ONLY legacy (scoringVersion 1)
 * attempts, matching their Module 2s against form v1 builds. Server-graded
 * attempts (2 = form v1, 3 = form v2) are never selected.
 */
import { describe, it, expect } from 'vitest'
import { buildSatForm, routedModule2, type SATTestSection } from '@/data/sat-practice/test-generator'
import { legacySectionRoute, SAT_RESCORE_WHERE, type SectionTally } from '@/lib/sat-rescore'
import { formVersionForScoring, SAT_SCORING_VERSION, scoringVersionForForm } from '@/lib/sat-attempt-format'

const tally = (s: SATTestSection, correct: number): SectionTally => ({
  sectionId: s.id,
  correct,
  total: s.questions.length,
  questionIds: s.questions.map((q) => q.id),
})

describe('scoringVersion <-> form version', () => {
  it('maps 4 to form v3, 3 to form v2 and everything else to v1', () => {
    expect(formVersionForScoring(4)).toBe(3)
    expect(formVersionForScoring(3)).toBe(2)
    for (const v of [1, 2, null, undefined, 0]) expect(formVersionForScoring(v)).toBe(1)
    expect(scoringVersionForForm(3)).toBe(4)
    expect(scoringVersionForForm(2)).toBe(3)
    expect(scoringVersionForForm(1)).toBe(2)
    expect(SAT_SCORING_VERSION).toEqual({ LEGACY: 1, ROUTED: 2, ROUTED_FORM_V2: 3, ROUTED_FORM_V3: 4 })
  })
})

describe('rescore-sat-attempts selection', { timeout: 180_000 }, () => {
  it('selects only scoringVersion 1 rows', () => {
    expect(SAT_RESCORE_WHERE).toEqual({ scoringVersion: 1 })
    const rows = [1, 2, 3, 4].map((scoringVersion) => ({ scoringVersion }))
    const picked = rows.filter((r) => Object.entries(SAT_RESCORE_WHERE).every(([k, v]) => r[k as keyof typeof r] === v))
    expect(picked).toEqual([{ scoringVersion: 1 }])
  })

  it('matches a legacy Module 2 against form v1 only', async () => {
    const v1 = await buildSatForm(1, 'full', null, null, 1)
    const routed = await routedModule2(v1, 1, 'harder')
    expect(await legacySectionRoute(1, tally(v1.sections[0], 27), tally(routed, 10), 1)).toEqual({ tier: 'harder', note: '' })
    expect(await legacySectionRoute(1, tally(v1.sections[0], 27), tally(v1.sections[1], 10), 1)).toEqual({ tier: null, note: 'unrouted (race)' })
    const easier = await routedModule2(v1, 1, 'easier')
    expect(await legacySectionRoute(1, tally(v1.sections[0], 27), tally(easier, 10), 1)).toEqual({ tier: 'easier', note: 'other route' })
    // A v2 module never matches (legacy rows predate v2).
    const v2 = await buildSatForm(1, 'full')
    const v2Routed = await routedModule2(v2, 1, 'harder')
    expect((await legacySectionRoute(1, tally(v2.sections[0], 27), tally(v2Routed, 10), 1)).note).toBe('ids unmatched')
  })
})
