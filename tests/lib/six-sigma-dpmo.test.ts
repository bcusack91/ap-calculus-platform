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

  it('computes a mid-range DPMO (10% error rate) — documents ACTUAL sigma lookup', () => {
    const m = calculateDPMO(100, 10)
    expect(m.dpmo).toBe(100_000) // (10/100)*1e6
    // ACTUAL behavior: the table scans worst->best and returns the first row
    // whose threshold dpmo is <= the value. 100000 >= 66807 (the 3σ row) so it
    // returns 3σ. NOTE: this is optimistic — 100000 DPMO is worse than the
    // 66807 boundary, so a more conventional reading would call this 2σ.
    // See suspected-bug note below; asserting current behavior to stay green.
    expect(m.sigmaLevel).toBe(3.0)
  })

  it('maps a low error rate (50 DPMO) — documents ACTUAL sigma lookup', () => {
    // 5 errors / 100000 attempts = 50 DPMO.
    const m = calculateDPMO(100_000, 5)
    expect(m.dpmo).toBe(50)
    // ACTUAL behavior: 50 is below every table threshold except the final
    // 3.4 (6σ) row -> 50 >= 3.4 -> 6σ. The 233->5σ row is therefore
    // UNREACHABLE for any dpmo in (3.4, 233); 50 DPMO (a genuine ~5σ process)
    // is reported as "World Class (6σ)". Asserting current behavior.
    expect(m.sigmaLevel).toBe(6.0)
    expect(m.qualityGrade).toContain('World Class')
  })

  it('SUSPECTED BUG (documented): the 233->5σ band is unreachable; values just under it jump to 6σ', () => {
    // Anything strictly between 3.4 and 233 DPMO returns 6σ, skipping 5σ.
    expect(calculateDPMO(1_000_000, 100).dpmo).toBe(100) // 100 DPMO
    expect(calculateDPMO(1_000_000, 100).sigmaLevel).toBe(6.0)
    expect(calculateDPMO(1_000_000, 200).dpmo).toBe(200) // 200 DPMO
    expect(calculateDPMO(1_000_000, 200).sigmaLevel).toBe(6.0)
    // Only at/above 233 does 5σ appear.
    expect(calculateDPMO(1_000_000, 233).sigmaLevel).toBe(5.0)
  })

  it('echoes the raw attempt/error counts back in the result', () => {
    const m = calculateDPMO(250, 17)
    expect(m.totalAttempts).toBe(250)
    expect(m.totalErrors).toBe(17)
    expect(m.dpmo).toBeCloseTo((17 / 250) * 1_000_000, 5)
  })
})
