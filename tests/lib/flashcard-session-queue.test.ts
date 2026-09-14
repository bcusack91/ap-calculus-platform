import { describe, it, expect } from 'vitest'
import { releaseDue, returnsThisSession, scheduleReturn, type PendingCard } from '@/lib/flashcard-session-queue'

type Card = { id: string }
const idOf = (c: Card) => c.id
const cards = (...ids: string[]) => ids.map((id) => ({ id }))
const ids = (q: Card[]) => q.map((c) => c.id)

const T0 = 1_000_000

describe('returnsThisSession', () => {
  it('returns minute-scale learning steps', () => {
    expect(returnsThisSession(true, 1)).toBe(true)
    expect(returnsThisSession(true, 10)).toBe(true)
  })

  it('does not return day-scale intervals or missing data', () => {
    expect(returnsThisSession(false, 1)).toBe(false)
    expect(returnsThisSession(undefined, 1)).toBe(false)
    expect(returnsThisSession(true, undefined)).toBe(false)
    expect(returnsThisSession(true, Number.NaN)).toBe(false)
  })
})

describe('scheduleReturn', () => {
  it('schedules by interval on the client clock', () => {
    const pending = scheduleReturn([], { id: 'a' }, 1, idOf, T0)
    expect(pending).toEqual([{ card: { id: 'a' }, dueAt: T0 + 60_000 }])
  })

  it('replaces an existing entry for the same card and keeps earliest first', () => {
    let pending: PendingCard<Card>[] = scheduleReturn([], { id: 'a' }, 10, idOf, T0)
    pending = scheduleReturn(pending, { id: 'b' }, 5, idOf, T0)
    pending = scheduleReturn(pending, { id: 'a' }, 1, idOf, T0)
    expect(pending.map((p) => [p.card.id, p.dueAt])).toEqual([
      ['a', T0 + 60_000],
      ['b', T0 + 300_000],
    ])
  })
})

describe('releaseDue', () => {
  it('leaves the queue alone when nothing is due yet', () => {
    const queue = cards('c1', 'c2', 'c3')
    const pending = scheduleReturn([], { id: 'x' }, 1, idOf, T0)
    const out = releaseDue(queue, 0, pending, idOf, T0 + 30_000)
    expect(out.queue).toBe(queue)
    expect(out.pending).toBe(pending)
  })

  it('shows an "Again" card right after the current card once its minute is up, not after the whole batch', () => {
    // 50-card batch; student rated card 1 "Again", then kept going.
    const queue = cards(...Array.from({ length: 50 }, (_, i) => `c${i + 1}`))
    const pending = scheduleReturn([], { id: 'c1' }, 1, idOf, T0)

    // Finishing card 3 (index 2) 70 seconds later releases c1 as the next card.
    const out = releaseDue(queue, 2, pending, idOf, T0 + 70_000)
    expect(ids(out.queue).slice(0, 5)).toEqual(['c1', 'c2', 'c3', 'c1', 'c4'])
    expect(out.queue).toHaveLength(51)
    expect(out.pending).toEqual([])
  })

  it('releases several due cards earliest-first and keeps not-yet-due ones pending', () => {
    const queue = cards('c1', 'c2', 'c3', 'c4')
    let pending: PendingCard<Card>[] = []
    pending = scheduleReturn(pending, { id: 'late' }, 10, idOf, T0)
    pending = scheduleReturn(pending, { id: 'second' }, 2, idOf, T0)
    pending = scheduleReturn(pending, { id: 'first' }, 1, idOf, T0)

    const out = releaseDue(queue, 1, pending, idOf, T0 + 3 * 60_000)
    expect(ids(out.queue)).toEqual(['c1', 'c2', 'first', 'second', 'c3', 'c4'])
    expect(out.pending.map((p) => p.card.id)).toEqual(['late'])
  })

  it('drops a later duplicate of a released card so it is not shown twice', () => {
    const queue = cards('c1', 'c2', 'dup', 'c4')
    const pending = scheduleReturn([], { id: 'dup' }, 1, idOf, T0)
    const out = releaseDue(queue, 0, pending, idOf, T0 + 60_000)
    expect(ids(out.queue)).toEqual(['c1', 'dup', 'c2', 'c4'])
  })

  it('appends at the end of the batch when the last card was just rated', () => {
    const queue = cards('c1', 'c2')
    const pending = scheduleReturn([], { id: 'c1' }, 1, idOf, T0)
    const out = releaseDue(queue, 1, pending, idOf, T0 + 60_000)
    expect(ids(out.queue)).toEqual(['c1', 'c2', 'c1'])
  })
})
