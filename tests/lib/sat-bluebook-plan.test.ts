/**
 * Bluebook plan assembly: each picked domain gets its qbank deep link and the
 * lessons the diagnostic would recommend for it (canonical topic slugs,
 * routed to the student's lane when a twin exists), and the readiness note
 * knows whether this entry is the latest full-length.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const topics = vi.fn()
const satPlan = vi.fn()
const readiness = vi.fn()

vi.mock('@/lib/prisma', () => ({ prisma: { topic: { findMany: (...a: unknown[]) => topics(...a) } } }))
vi.mock('@/lib/sat-plan', async (orig) => ({ ...(await orig<typeof import('@/lib/sat-plan')>()), buildSatPlan: (...a: unknown[]) => satPlan(...a) }))
vi.mock('@/lib/full-length-progress-server', () => ({ fullLengthReadiness: (...a: unknown[]) => readiness(...a) }))
vi.mock('@/lib/sat-prediction-server', () => ({ computeSatPrediction: vi.fn() }))

import { buildBluebookPlan, domainLessonSlugs } from '@/lib/sat-bluebook-server'

const TAKEN = new Date('2026-10-04T12:00:00')
const row = (slug: string) => ({ slug, title: `T ${slug}` })

beforeEach(() => {
  topics.mockReset()
  satPlan.mockReset().mockResolvedValue({ lane: 'regular' })
  readiness.mockReset().mockResolvedValue({ lastFullLength: { at: TAKEN.toISOString(), kind: 'external', score: 1250, source: 'Bluebook Practice 4' } })
})

describe('domainLessonSlugs', () => {
  it('resolves blueprint pools to real lesson topics, deduped', () => {
    // sat-reading-comprehension → sat-central-ideas-details; sat-command-evidence → sat-finding-textual-evidence
    expect(domainLessonSlugs('information-ideas')).toEqual(['sat-central-ideas-details', 'sat-finding-textual-evidence'])
    expect(domainLessonSlugs('algebra')).toEqual(['sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-linear-inequalities-graphs'])
    // sat-geometry-trigonometry has no topic of its own → sat-geometry-basics
    expect(domainLessonSlugs('geometry')).toEqual(['sat-geometry-basics', 'sat-circles'])
  })

  it('links all three Craft and Structure lessons, in the College Board order', () => {
    expect(domainLessonSlugs('craft-structure')).toEqual(['sat-vocabulary-context', 'sat-text-structure-purpose', 'sat-cross-text-connections'])
  })
})

describe('buildBluebookPlan — Craft and Structure', () => {
  it('offers Words in Context, Text Structure and Purpose, and Cross-Text Connections', async () => {
    topics.mockResolvedValue(['sat-vocabulary-context', 'sat-text-structure-purpose', 'sat-cross-text-connections'].map(row))
    const plan = await buildBluebookPlan('u1', { rw: 520, math: 700, domains: { 'craft-structure': 2, 'information-ideas': 5, 'algebra': 6 }, takenAt: TAKEN })
    const cs = plan.domains.find((d) => d.key === 'craft-structure')
    expect(cs?.lessons.map((l) => l.slug)).toEqual(['sat-vocabulary-context', 'sat-text-structure-purpose', 'sat-cross-text-connections'])
  })

  it('routes both new lessons to the 700-800 Reading Comprehension lesson on the advanced lane', async () => {
    satPlan.mockResolvedValue({ lane: 'advanced' })
    topics.mockResolvedValue(['sat-vocabulary-context', 'sat-vocabulary-context-advanced', 'sat-text-structure-purpose', 'sat-cross-text-connections', 'sat-reading-comprehension-advanced'].map(row))
    const plan = await buildBluebookPlan('u1', { rw: 690, math: 700, domains: { 'craft-structure': 4, 'information-ideas': 6, 'algebra': 7 }, takenAt: TAKEN })
    const cs = plan.domains.find((d) => d.key === 'craft-structure')
    expect(cs?.lessons.map((l) => l.slug)).toEqual(['sat-vocabulary-context-advanced', 'sat-reading-comprehension-advanced'])
  })
})

describe('buildBluebookPlan', () => {
  it('links practice and existing lessons for each weak domain', async () => {
    topics.mockResolvedValue(['sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-quadratic-equations', 'sat-functions'].map(row))
    const plan = await buildBluebookPlan('u1', { rw: 700, math: 560, domains: {}, takenAt: TAKEN })
    expect(plan.basis).toBe('sections')
    expect(plan.resetsReadiness).toBe(true)
    expect(plan.domains[0]).toMatchObject({
      key: 'algebra',
      practiceHref: '/sat/qbank?domain=algebra&count=15&mode=tutor',
      lessons: [
        { slug: 'sat-linear-equations-inequalities', title: 'T sat-linear-equations-inequalities', href: '/topics/sat-linear-equations-inequalities' },
        { slug: 'sat-systems-linear-equations', title: 'T sat-systems-linear-equations', href: '/topics/sat-systems-linear-equations' },
      ],
    })
    // Only pools with a real Topic row become links.
    expect(plan.domains[1].key).toBe('advanced')
    expect(plan.domains[1].lessons.map((l) => l.slug)).toEqual(['sat-quadratic-equations', 'sat-functions'])
  })

  it('routes lessons to the student’s lane when the twin exists', async () => {
    satPlan.mockResolvedValue({ lane: 'advanced' })
    topics.mockResolvedValue(['sat-linear-equations-inequalities', 'sat-linear-equations-inequalities-advanced', 'sat-systems-linear-equations'].map(row))
    const plan = await buildBluebookPlan('u1', { rw: 700, math: 600, domains: { algebra: 2, advanced: 5 }, takenAt: TAKEN })
    expect(plan.basis).toBe('bands')
    expect(plan.lane).toBe('advanced')
    expect(plan.domains[0].lessons.map((l) => l.slug)).toEqual(['sat-linear-equations-inequalities-advanced', 'sat-systems-linear-equations'])
  })

  it('says when a newer full-length means the bar did not reset', async () => {
    readiness.mockResolvedValue({ lastFullLength: { at: '2026-10-10T18:00:00.000Z', kind: 'studymondo', score: 1300, source: null } })
    topics.mockResolvedValue([])
    const plan = await buildBluebookPlan('u1', { rw: 600, math: 600, domains: {}, takenAt: TAKEN })
    expect(plan.resetsReadiness).toBe(false)
  })
})
