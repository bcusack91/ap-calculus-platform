import { describe, it, expect } from 'vitest'
import { rankTierForMMR, rankProgress, rankTierByName } from '@/lib/competitive-ranks'
import { getRankFromMMR } from '@/lib/competitive-utils'

describe('competitive rank ladder', () => {
  it('keeps the historical thresholds', () => {
    const cases: Array<[number, string]> = [
      [0, 'Bronze'], [999, 'Bronze'], [1000, 'Silver'], [1399, 'Silver'], [1400, 'Gold'],
      [1799, 'Gold'], [1800, 'Platinum'], [2199, 'Platinum'], [2200, 'Diamond'], [3000, 'Diamond'],
    ]
    for (const [mmr, name] of cases) {
      expect(rankTierForMMR(mmr).name).toBe(name)
      expect(getRankFromMMR(mmr)).toBe(name)
    }
  })

  it('reports progress toward the next rank', () => {
    const p = rankProgress(1586)
    expect(p.current.name).toBe('Gold')
    expect(p.next?.name).toBe('Platinum')
    expect(p.toNext).toBe(214)
    expect(p.fraction).toBeCloseTo(186 / 400)
  })

  it('caps at the top rank and floors Bronze', () => {
    expect(rankProgress(2500)).toMatchObject({ next: null, toNext: 0, fraction: 1 })
    const b = rankProgress(500)
    expect(b.next?.name).toBe('Silver')
    expect(b.fraction).toBe(0)
    expect(b.toNext).toBe(500)
  })

  it('styles legacy rank names by MMR', () => {
    expect(rankTierByName('Gold', 900).name).toBe('Gold')
    expect(rankTierByName('Grandmaster', 1900).name).toBe('Platinum')
  })
})
