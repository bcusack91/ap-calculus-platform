import { describe, it, expect } from 'vitest'
import { queuePositionOf } from '@/components/competitive/QueueSearchPanel'

describe('queuePositionOf', () => {
  it('reads the POST field (queuePosition) and the GET field (position)', () => {
    expect(queuePositionOf({ queuePosition: 3 })).toBe(3)
    expect(queuePositionOf({ position: 2 })).toBe(2)
    expect(queuePositionOf({ queuePosition: 1, position: 5 })).toBe(1)
  })
  it('is undefined when absent', () => {
    expect(queuePositionOf(null)).toBeUndefined()
    expect(queuePositionOf({})).toBeUndefined()
  })
})
