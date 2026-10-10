import { describe, it, expect } from 'vitest'
import { activeMistakes, computeMistakes, type AnswerLogRow } from '@/lib/mistake-log'

let t = 0
const row = (over: Partial<AnswerLogRow>): AnswerLogRow => ({
  questionKey: 'q:a',
  correct: 0,
  chosenIndex: 1,
  chosenText: null,
  flagged: false,
  answeredAt: new Date(Date.UTC(2026, 9, 1) + 60_000 * t++),
  attemptKind: 'exit',
  attemptId: 'att1',
  itemIndex: 0,
  topicSlug: 'topic-a',
  discipline: 'Bio',
  source: 'EXIT',
  ...over,
})
const right = (over: Partial<AnswerLogRow> = {}) => row({ correct: 1, ...over })

describe('computeMistakes', () => {
  it('a wrong answer opens an item; two later correct answers retire it', () => {
    expect(activeMistakes([row({})])).toHaveLength(1)
    expect(activeMistakes([row({}), right()])).toHaveLength(1)
    const both = computeMistakes([row({}), right(), right({ source: 'MISTAKE_REVIEW', attemptKind: 'mistake-review' })])
    expect(both[0]).toMatchObject({ correctSince: 2, retired: true })
    expect(activeMistakes([row({}), right(), right()])).toHaveLength(0)
  })

  it('a new miss resets the streak and moves the origin', () => {
    const items = computeMistakes([row({}), right(), row({ attemptKind: 'unit-test', attemptId: 'ut9', itemIndex: 4, source: 'UNIT_TEST' }), right()])
    expect(items[0]).toMatchObject({ misses: 2, correctSince: 1, retired: false, origin: { attemptKind: 'unit-test', attemptId: 'ut9', itemIndex: 4 } })
  })

  it('flagged answers count as misses even when correct; skips too', () => {
    expect(computeMistakes([right({ flagged: true })])[0].reason).toBe('flagged')
    expect(computeMistakes([row({ chosenIndex: null })])[0].reason).toBe('skipped')
    expect(computeMistakes([row({ chosenIndex: null, chosenText: '3/4', correct: 0 })])[0].reason).toBe('wrong')
    // a flagged-correct answer does not count toward retiring
    expect(computeMistakes([row({}), right({ flagged: true }), right()])[0]).toMatchObject({ correctSince: 1, retired: false })
  })

  it('correct answers before any miss create nothing; rows without a key are ignored', () => {
    expect(computeMistakes([right(), right()])).toEqual([])
    expect(computeMistakes([row({ questionKey: '' })])).toEqual([])
  })

  it('a miss with no origin never opens an item but does reset one', () => {
    expect(computeMistakes([row({ attemptKind: null, attemptId: null, itemIndex: null })])).toEqual([])
    const items = computeMistakes([row({}), right(), row({ attemptKind: null, attemptId: null, itemIndex: null })])
    expect(items[0]).toMatchObject({ misses: 2, correctSince: 0, origin: { attemptId: 'att1' } })
  })

  it('a wrong re-quiz answer resets the streak but keeps the original origin', () => {
    const items = computeMistakes([row({}), right(), row({ attemptKind: 'mistake-review', attemptId: 'sess1', itemIndex: 0, source: 'MISTAKE_REVIEW' })])
    expect(items[0]).toMatchObject({ misses: 2, correctSince: 0, origin: { attemptKind: 'exit', attemptId: 'att1' } })
  })

  it('groups by question and lists the most recent misses first', () => {
    const items = computeMistakes([row({ questionKey: 'q:old' }), row({ questionKey: 'q:new' })])
    expect(items.map((i) => i.questionKey)).toEqual(['q:new', 'q:old'])
  })
})
