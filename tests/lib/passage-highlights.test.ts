import { describe, it, expect } from 'vitest'
import {
  addHighlight,
  removeHighlight,
  normalizeHighlights,
  overlapsHighlight,
  serializeHighlights,
  deserializeHighlights,
} from '@/lib/passage-highlights'

describe('passage highlight ranges', () => {
  it('merges overlapping and adjacent ranges, drops empty ones', () => {
    expect(normalizeHighlights([{ start: 10, end: 20 }, { start: 0, end: 5 }, { start: 18, end: 25 }, { start: 25, end: 30 }, { start: 7, end: 7 }]))
      .toEqual([{ start: 0, end: 5 }, { start: 10, end: 30 }])
  })

  it('adds a range as a union', () => {
    expect(addHighlight([{ start: 0, end: 4 }], { start: 2, end: 9 })).toEqual([{ start: 0, end: 9 }])
  })

  it('removes a range, splitting a highlight it falls inside', () => {
    expect(removeHighlight([{ start: 0, end: 20 }], { start: 5, end: 10 })).toEqual([{ start: 0, end: 5 }, { start: 10, end: 20 }])
    expect(removeHighlight([{ start: 0, end: 5 }, { start: 8, end: 12 }], { start: 0, end: 12 })).toEqual([])
  })

  it('detects overlap', () => {
    expect(overlapsHighlight([{ start: 3, end: 6 }], { start: 5, end: 9 })).toBe(true)
    expect(overlapsHighlight([{ start: 3, end: 6 }], { start: 6, end: 9 })).toBe(false)
  })

  it('round-trips through the persisted tuple form and tolerates junk', () => {
    const map = { '0': [{ start: 1, end: 4 }], '2': [] }
    const ser = serializeHighlights(map)
    expect(ser).toEqual({ '0': [[1, 4]] })
    expect(deserializeHighlights(JSON.parse(JSON.stringify(ser)))).toEqual({ '0': [{ start: 1, end: 4 }] })
    expect(deserializeHighlights({ '1': 'nope', '3': [[5, 2], ['a', 1], [2, 6]] })).toEqual({ '3': [{ start: 2, end: 6 }] })
    expect(deserializeHighlights(null)).toEqual({})
  })
})
