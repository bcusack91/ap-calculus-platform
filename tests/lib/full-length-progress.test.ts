import { describe, it, expect } from 'vitest'
import {
  FULL_LENGTH_COURSES,
  LEVEL_CURVE,
  READINESS_LEVELS,
  XP_PER_CYCLE,
  cycleComplete,
  cycleFraction,
  describeReadiness,
  levelThresholds,
  readinessBar,
  type FullLengthReadiness,
} from '@/lib/full-length-progress'

describe('level curve', () => {
  it('has 10 levels, from 0% to 100% of the work, each later level needing more', () => {
    const t = levelThresholds()
    expect(t).toHaveLength(READINESS_LEVELS)
    expect(t[0]).toBe(0)
    expect(t[9]).toBe(1)
    const gaps = t.slice(1).map((v, i) => v - t[i])
    for (let i = 1; i < gaps.length; i++) expect(gaps[i]).toBeGreaterThan(gaps[i - 1])
  })

  it('front-loads: level 2 after ~5% of the work, level 9 at ~84%', () => {
    const t = levelThresholds()
    expect(t[1]).toBeCloseTo(0.046, 2)
    expect(t[8]).toBeCloseTo(0.848, 2)
    expect(LEVEL_CURVE).toBeGreaterThan(1)
  })
})

describe('cycleFraction / cycleComplete', () => {
  const mcat = (topicsCleared: number, unitTestPassed = false, topicsTotal = 5) => ({ topicsCleared, topicsTotal, unitTestPassed, unitTestRequired: true })
  const sat = (topicsCleared: number, topicsTotal = 5) => ({ topicsCleared, topicsTotal, unitTestPassed: false, unitTestRequired: false })

  it('MCAT: diagnostic 10%, lessons 70%, unit test 20%', () => {
    expect(cycleFraction(mcat(0))).toBeCloseTo(0.1)
    expect(cycleFraction(mcat(5))).toBeCloseTo(0.8)
    expect(cycleFraction(mcat(5, true))).toBe(1)
    expect(cycleComplete(mcat(5))).toBe(false)
    expect(cycleComplete(mcat(5, true))).toBe(true)
  })

  it('SAT: no unit test needed — diagnostic 10%, lessons 90%', () => {
    expect(cycleFraction(sat(0))).toBeCloseTo(0.1)
    expect(cycleFraction(sat(5))).toBe(1)
    expect(cycleComplete(sat(5))).toBe(true)
  })

  it('a diagnostic that recommended nothing is a complete cycle for the SAT and needs only the unit test for the MCAT', () => {
    expect(cycleComplete(sat(0, 0))).toBe(true)
    expect(cycleComplete(mcat(0, false, 0))).toBe(false)
    expect(cycleComplete(mcat(0, true, 0))).toBe(true)
  })
})

describe('readinessBar', () => {
  it('MCAT needs 4 cycles, SAT 2', () => {
    expect(FULL_LENGTH_COURSES.mcat.cyclesRequired).toBe(4)
    expect(FULL_LENGTH_COURSES.sat.cyclesRequired).toBe(2)
    expect(readinessBar([], 4)).toMatchObject({ xp: 0, xpTotal: 4000, level: 1, ready: false })
    expect(readinessBar([1, 1, 1, 1], 4)).toMatchObject({ xp: 4000, level: 10, ready: true, levelFraction: 1 })
    expect(readinessBar([1, 1], 2)).toMatchObject({ level: 10, ready: true })
  })

  it('in-progress cycles count partially; levels climb fastest early', () => {
    const afterDiagnostic = readinessBar([0.1], 4)
    expect(afterDiagnostic.xp).toBe(100)
    expect(afterDiagnostic.level).toBe(1)
    expect(afterDiagnostic.levelFraction).toBeGreaterThan(0.5)
    const oneCycle = readinessBar([1], 4)
    expect(oneCycle.level).toBe(4) // 25% of the work is already level 4 of 10
    const threeCycles = readinessBar([1, 1, 1], 4)
    expect(threeCycles.level).toBe(8) // the last cycle carries levels 8 → 10
    expect(readinessBar([1, 1, 1, 0.9], 4).level).toBe(9)
  })

  it('never exceeds the total, even with extra cycles', () => {
    const bar = readinessBar([1, 1, 1, 1, 1, 0.5], 4)
    expect(bar.xp).toBe(bar.xpTotal)
    expect(bar.level).toBe(10)
    expect(XP_PER_CYCLE).toBe(1000)
  })
})

describe('describeReadiness', () => {
  const base = (over: Partial<FullLengthReadiness>): FullLengthReadiness => ({
    ...readinessBar([], 4),
    course: 'mcat',
    label: 'MCAT',
    cyclesRequired: 4,
    cyclesComplete: 0,
    cycles: [],
    currentCycle: null,
    fullLengthHref: '/mcat-full-length',
    fullLengthLabel: 'MCAT full-length',
    externalLabel: 'AAMC full-length',
    lastFullLength: null,
    fullLengthsTaken: 0,
    ...over,
  })
  const cycle = (topicsCleared: number, unitTestPassed = false) => ({
    diagnosticId: 'd', startedAt: '2026-10-01T00:00:00Z', topicsCleared, topicsTotal: 5, unitTestPassed, unitTestRequired: true, complete: false, fraction: 0.5,
  })

  it('says exactly where the student is', () => {
    expect(describeReadiness(base({}))).toBe('Take the MCAT diagnostic to start cycle 1 of 4.')
    expect(describeReadiness(base({ cyclesComplete: 1, currentCycle: cycle(3) }))).toBe('Cycle 2 of 4 · 3 of 5 lessons cleared.')
    expect(describeReadiness(base({ cyclesComplete: 1, currentCycle: cycle(5) }))).toBe('Cycle 2 of 4 · 5 of 5 lessons cleared · unit test next.')
    expect(describeReadiness(base({ cyclesComplete: 2 }))).toBe('2 of 4 cycles complete — take the next diagnostic to start cycle 3.')
    expect(describeReadiness(base({ ...readinessBar([1, 1, 1, 1], 4), cyclesComplete: 4 }))).toBe('4 cycles complete — time for your next MCAT full-length.')
  })
})
