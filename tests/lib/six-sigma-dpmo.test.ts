import { describe, it, expect } from 'vitest'
import { calculateDPMO } from '@/utils/six-sigma-analytics'

describe('calculateDPMO', () => {
  it('returns an Insufficient Data shape when there are zero attempts (no divide-by-zero)', () => {
    const m = calculateDPMO(0, 0)
    expect(m.totalAttempts).toBe(0)
    expect(m.totalErrors).toBe(0)
    expect(m.dpmo).toBe(0)
    expect(m.sigmaLevel).toBe(0)
    expect(m.qualityGrade).toBe('Insufficient Data')
  })

  it('computes 0 DPMO for a perfect run (no errors)', () => {
    const m = calculateDPMO(100, 0)
    expect(m.dpmo).toBe(0)
    // 0 DPMO is beyond the table's best entry -> capped at 6 sigma (world class).
    expect(m.sigmaLevel).toBe(6.0)
    expect(m.qualityGrade).toContain('World Class')
  })

  it('computes 1,000,000 DPMO for an all-wrong run', () => {
    const m = calculateDPMO(50, 50)
    expect(m.dpmo).toBe(1_000_000)
    // Worst possible: above the 691462 threshold -> 1 sigma.
    expect(m.sigmaLevel).toBe(1.0)
    expect(m.qualityGrade).toContain('Needs Improvement')
  })

  it('maps a mid-range DPMO (10% error rate) to the best band it qualifies for', () => {
    const m = calculateDPMO(100, 10)
    expect(m.dpmo).toBe(100_000) // (10/100)*1e6
    // 100000 DPMO is worse than the 66807 (3σ) boundary but within the 308538
    // (2σ) boundary -> 2σ, the best band it actually qualifies for.
    expect(m.sigmaLevel).toBe(2.0)
  })

  it('maps a low error rate (50 DPMO) to 5σ', () => {
    // 5 errors / 100000 attempts = 50 DPMO.
    const m = calculateDPMO(100_000, 5)
    expect(m.dpmo).toBe(50)
    // 50 DPMO qualifies for the 233 (5σ) band and is worse than the 3.4 (6σ)
    // boundary -> 5σ.
    expect(m.sigmaLevel).toBe(5.0)
    expect(m.qualityGrade).toContain('Excellent')
  })

  it('the 233->5σ band is reachable (best-band lookup)', () => {
    expect(calculateDPMO(1_000_000, 100).dpmo).toBe(100) // 100 DPMO
    expect(calculateDPMO(1_000_000, 100).sigmaLevel).toBe(5.0)
    expect(calculateDPMO(1_000_000, 200).dpmo).toBe(200) // 200 DPMO
    expect(calculateDPMO(1_000_000, 200).sigmaLevel).toBe(5.0)
    expect(calculateDPMO(1_000_000, 233).sigmaLevel).toBe(5.0)
    // 6σ requires DPMO <= 3.4; just inside the 5σ band stays 5σ, and a near-zero
    // DPMO reaches 6σ.
    expect(calculateDPMO(1_000_000, 1).sigmaLevel).toBe(6.0) // 1 DPMO <= 3.4
  })

  it('echoes the raw attempt/error counts back in the result', () => {
    const m = calculateDPMO(250, 17)
    expect(m.totalAttempts).toBe(250)
    expect(m.totalErrors).toBe(17)
    expect(m.dpmo).toBeCloseTo((17 / 250) * 1_000_000, 5)
  })
})
