import { describe, it, expect } from 'vitest'
import {
  SAT_CURVE_ANCHORS,
  satSectionScaled,
  satTotal,
  projectionRange,
  satPercentile,
} from '@/lib/sat-scoring'

describe('SAT_CURVE_ANCHORS calibration', () => {
  it('pins the anchor table — changing these changes every reported SAT score', () => {
    expect(SAT_CURVE_ANCHORS).toEqual([
      { pct: 0, scaled: 200 },
      { pct: 0.5, scaled: 480 },
      { pct: 0.6, scaled: 515 },
      { pct: 0.7, scaled: 565 },
      { pct: 0.8, scaled: 625 },
      { pct: 0.88, scaled: 672 },
      { pct: 1, scaled: 800 },
    ])
  })

  it('anchors are strictly increasing in both pct and scaled', () => {
    for (let i = 1; i < SAT_CURVE_ANCHORS.length; i++) {
      expect(SAT_CURVE_ANCHORS[i].pct).toBeGreaterThan(SAT_CURVE_ANCHORS[i - 1].pct)
      expect(SAT_CURVE_ANCHORS[i].scaled).toBeGreaterThan(SAT_CURVE_ANCHORS[i - 1].scaled)
    }
  })
})

describe('satSectionScaled', () => {
  it('maps 0% to the floor of 200', () => {
    expect(satSectionScaled(0)).toBe(200)
  })

  it('maps 100% to the ceiling of 800', () => {
    expect(satSectionScaled(1)).toBe(800)
  })

  it('hits every anchor point exactly', () => {
    for (const { pct, scaled } of SAT_CURVE_ANCHORS) {
      expect(satSectionScaled(pct)).toBe(scaled)
    }
  })

  it('clamps inputs outside 0-1', () => {
    expect(satSectionScaled(-0.5)).toBe(200)
    expect(satSectionScaled(1.5)).toBe(800)
  })

  it('is monotonic non-decreasing across the range', () => {
    let prev = satSectionScaled(0)
    for (let p = 0; p <= 1.0001; p += 0.005) {
      const v = satSectionScaled(p)
      expect(v).toBeGreaterThanOrEqual(prev)
      prev = v
    }
  })

  it('always stays within 200-800', () => {
    for (let p = -1; p <= 2; p += 0.05) {
      const v = satSectionScaled(p)
      expect(v).toBeGreaterThanOrEqual(200)
      expect(v).toBeLessThanOrEqual(800)
    }
  })

  it('sits well below the old linear map through the middle of the scale', () => {
    // The whole point of the calibration: 200 + pct*600 ran ~60-130 total
    // points high (~30-65 per section) through the middle of the scale.
    for (const pct of [0.55, 0.65, 0.75, 0.85]) {
      const linear = 200 + pct * 600
      expect(satSectionScaled(pct)).toBeLessThan(linear - 30)
    }
  })

  it('interpolates linearly between anchors (85% sits midway between 625 and 672)', () => {
    // t = (0.85 - 0.80) / (0.88 - 0.80) = 0.625 → 625 + 0.625*47 ≈ 654.4 → 654
    expect(satSectionScaled(0.85)).toBe(654)
  })
})

describe('ground-truth regression: real students, real College Board scores', () => {
  it('student A: ~60% correct on our item mix scored 1030 on the real SAT (twice)', () => {
    // The old linear map projected 200 + 0.6*600 = 560/section = 1120 total.
    expect(satTotal(0.6, 0.6)).toBe(1030)
  })

  it('student B: ~88% correct on our item mix scored 1330-1370 on the real SAT', () => {
    // The old linear map projected 200 + 0.88*600 = 728/section = 1456 total.
    const total = satTotal(0.88, 0.88)
    expect(total).toBe(1344)
    expect(total).toBeGreaterThanOrEqual(1330)
    expect(total).toBeLessThanOrEqual(1370)
  })
})

describe('satTotal', () => {
  it('sums the two section curves', () => {
    expect(satTotal(0.5, 0.7)).toBe(480 + 565)
  })

  it('spans 400-1600', () => {
    expect(satTotal(0, 0)).toBe(400)
    expect(satTotal(1, 1)).toBe(1600)
  })
})

describe('projectionRange', () => {
  it('defaults to ±40 (medium evidence)', () => {
    expect(projectionRange(1200)).toEqual({ low: 1160, high: 1240 })
    expect(projectionRange(1200, 'medium')).toEqual({ low: 1160, high: 1240 })
  })

  it('tightens to ±30 with high evidence', () => {
    expect(projectionRange(1200, 'high')).toEqual({ low: 1170, high: 1230 })
  })

  it('widens to ±50 with low evidence', () => {
    expect(projectionRange(1200, 'low')).toEqual({ low: 1150, high: 1250 })
  })

  it('clamps to the 400-1600 scale at both ends', () => {
    expect(projectionRange(410, 'low')).toEqual({ low: 400, high: 460 })
    expect(projectionRange(1590, 'low')).toEqual({ low: 1540, high: 1600 })
    expect(projectionRange(1600, 'high')).toEqual({ low: 1570, high: 1600 })
    expect(projectionRange(400, 'high')).toEqual({ low: 400, high: 430 })
  })
})

describe('satPercentile', () => {
  it('puts the national mean (~1060) at ~50th percentile', () => {
    expect(satPercentile(1060)).toBe(50)
  })

  it('is monotonic non-decreasing', () => {
    let prev = satPercentile(400)
    for (let s = 400; s <= 1600; s += 20) {
      const p = satPercentile(s)
      expect(p).toBeGreaterThanOrEqual(prev)
      prev = p
    }
  })

  it('clamps to 1-99', () => {
    expect(satPercentile(400)).toBeGreaterThanOrEqual(1)
    expect(satPercentile(1600)).toBeLessThanOrEqual(99)
  })
})
