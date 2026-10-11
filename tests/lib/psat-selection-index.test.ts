/**
 * PSAT/NMSQT Selection Index: (2·RW + Math) / 10, compared with the state's
 * latest published Semifinalist cutoff and the national Commended cutoff.
 */
import { describe, it, expect } from 'vitest'
import {
  selectionIndex,
  compareToCutoffs,
  mathNeeded,
  SELECTION_INDEX_MIN,
  SELECTION_INDEX_MAX,
} from '@/lib/psat-selection-index'
import {
  CURRENT_CUTOFFS,
  PREVIOUS_CUTOFFS,
  CUTOFF_REGIONS,
  nationalRange,
  semifinalistCutoff,
} from '@/data/psat-cutoffs'

describe('selectionIndex', () => {
  it('doubles Reading & Writing and adds Math, divided by 10', () => {
    expect(selectionIndex(700, 720)).toBe(212)
    expect(selectionIndex(720, 700)).toBe(214)
    expect(selectionIndex(500, 500)).toBe(150)
  })

  it('spans 48–228', () => {
    expect(selectionIndex(160, 160)).toBe(SELECTION_INDEX_MIN)
    expect(selectionIndex(760, 760)).toBe(SELECTION_INDEX_MAX)
    expect(SELECTION_INDEX_MIN).toBe(48)
    expect(SELECTION_INDEX_MAX).toBe(228)
  })

  it('rejects out-of-range or non-multiple-of-10 scores', () => {
    expect(selectionIndex(150, 700)).toBeNull()
    expect(selectionIndex(700, 770)).toBeNull()
    expect(selectionIndex(705, 700)).toBeNull()
    expect(selectionIndex(Number.NaN, 700)).toBeNull()
  })
})

describe('cutoff data', () => {
  it('covers all 50 states plus DC, territories and study abroad', () => {
    expect(CUTOFF_REGIONS).toHaveLength(53)
    for (const cls of [CURRENT_CUTOFFS, PREVIOUS_CUTOFFS]) {
      for (const r of CUTOFF_REGIONS) {
        const v = cls.semifinalist[r.key]
        if (v === undefined) continue // an unknown state falls back to the national range
        expect(v, `${cls.classOf} ${r.key}`).toBeGreaterThanOrEqual(cls.commended)
        expect(v).toBeLessThanOrEqual(SELECTION_INDEX_MAX)
      }
      for (const key of Object.keys(cls.semifinalist)) {
        expect(CUTOFF_REGIONS.some((r) => r.key === key), key).toBe(true)
      }
    }
  })

  it('pins the most recent published figures (class of 2027) and the previous class', () => {
    expect(CURRENT_CUTOFFS.classOf).toBe(2027)
    expect(CURRENT_CUTOFFS.commended).toBe(208)
    expect(semifinalistCutoff('NJ')).toBe(223)
    expect(semifinalistCutoff('CA')).toBe(220)
    expect(semifinalistCutoff('WY')).toBe(208)
    expect(nationalRange()).toEqual({ low: 208, high: 223 })
    expect(PREVIOUS_CUTOFFS.classOf).toBe(2026)
    expect(PREVIOUS_CUTOFFS.commended).toBe(210)
    expect(semifinalistCutoff('MA', PREVIOUS_CUTOFFS)).toBe(225)
    expect(nationalRange(PREVIOUS_CUTOFFS)).toEqual({ low: 210, high: 225 })
  })

  it('returns null for a region it does not know', () => {
    expect(semifinalistCutoff('ZZ')).toBeNull()
  })
})

describe('compareToCutoffs', () => {
  it('reports Semifinalist standing at or above the state cutoff', () => {
    const c = compareToCutoffs(220, 'CA')
    expect(c.standing).toBe('semifinalist')
    expect(c.stateCutoff).toBe(220)
    expect(c.pointsToSemifinalist).toBe(0)
  })

  it('reports Commended between the Commended and state cutoffs', () => {
    const c = compareToCutoffs(212, 'NJ')
    expect(c.standing).toBe('commended')
    expect(c.pointsToSemifinalist).toBe(11)
    expect(c.pointsToCommended).toBe(0)
  })

  it('reports below Commended with the gap', () => {
    const c = compareToCutoffs(200, 'TX')
    expect(c.standing).toBe('below')
    expect(c.pointsToCommended).toBe(8)
  })

  it('without a known state, uses the national range (Semifinalist only if it clears every state)', () => {
    const none = compareToCutoffs(215, null)
    expect(none.stateCutoff).toBeNull()
    expect(none.pointsToSemifinalist).toBeNull()
    expect(none.standing).toBe('commended')
    expect(none.range).toEqual({ low: 208, high: 223 })
    expect(compareToCutoffs(223, 'ZZ').standing).toBe('semifinalist')
  })
})

describe('mathNeeded', () => {
  it('finds the smallest Math score that reaches a target', () => {
    expect(mathNeeded(700, 212)).toBe(720)
    expect(mathNeeded(700, 211)).toBe(710)
    expect(selectionIndex(700, mathNeeded(700, 215)!)).toBeGreaterThanOrEqual(215)
  })

  it('returns null when no Math score gets there', () => {
    expect(mathNeeded(300, 223)).toBeNull()
  })

  it('floors at 160', () => {
    expect(mathNeeded(760, 100)).toBe(160)
  })
})
