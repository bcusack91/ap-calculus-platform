import { describe, expect, it } from 'vitest'
import {
  CARD_CHECK_DEFAULT_AFTER_REVIEWS,
  CARD_CHECK_MAX,
  checkKey,
  effectiveAfterReviews,
  gradeChoice,
  nextStudyDayStart,
  pickCheckCards,
  ratedConfident,
  shuffledOrder,
  type CheckCandidate,
} from '@/lib/flashcard-check-core'

const seeded = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296
  return seed / 4294967296
}
const cand = (id: string, rating: CheckCandidate['rating'], wasNew = false): CheckCandidate => ({ flashcardId: id, context: 'personal', front: id, topicSlug: 't', rating, wasNew })

describe('daily card check rules', () => {
  it('asks at most 15 questions and prefers cards rated Good or Easy, new ones first', () => {
    const cands = [
      ...Array.from({ length: 10 }, (_, i) => cand(`again${i}`, 'AGAIN')),
      ...Array.from({ length: 6 }, (_, i) => cand(`goodNew${i}`, 'GOOD', true)),
      ...Array.from({ length: 7 }, (_, i) => cand(`goodOld${i}`, 'EASY')),
      ...Array.from({ length: 5 }, (_, i) => cand(`hard${i}`, 'HARD')),
    ]
    const picked = pickCheckCards(cands, seeded(7))
    expect(picked).toHaveLength(CARD_CHECK_MAX)
    const ids = picked.map((p) => p.flashcardId)
    expect(ids.filter((i) => i.startsWith('goodNew'))).toHaveLength(6)
    expect(ids.filter((i) => i.startsWith('goodOld'))).toHaveLength(7)
    expect(ids.filter((i) => i.startsWith('hard'))).toHaveLength(2)
    expect(ids.filter((i) => i.startsWith('again'))).toHaveLength(0)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('asks about every card when there are fewer than 15', () => {
    expect(pickCheckCards([cand('a', 'GOOD'), cand('b', 'AGAIN')], seeded(1))).toHaveLength(2)
    expect(pickCheckCards([], seeded(1))).toEqual([])
  })

  it('grades the option in the position the student picked, through the shown order', () => {
    const order = [2, 0, 3, 1] // position 0 shows authored option 2, …
    expect(gradeChoice(order, 2, 0)).toBe(true)
    expect(gradeChoice(order, 2, 1)).toBe(false)
    expect(gradeChoice(order, 1, 3)).toBe(true)
    expect(gradeChoice(order, 1, null)).toBe(false)
    expect([...shuffledOrder(seeded(3))].sort()).toEqual([0, 1, 2, 3])
  })

  it('treats only Good and Easy as a confident rating', () => {
    expect(ratedConfident('GOOD')).toBe(true)
    expect(ratedConfident('EASY')).toBe(true)
    expect(ratedConfident('HARD')).toBe(false)
    expect(ratedConfident('AGAIN')).toBe(false)
  })

  it('pulls a missed card back to the next 4 am local rollover', () => {
    // 9 pm Eastern (UTC-5: getTimezoneOffset() = 300) on Nov 16 → 4 am Eastern Nov 17 = 09:00Z
    expect(nextStudyDayStart(new Date('2026-11-17T02:00:00Z'), 300).toISOString()).toBe('2026-11-17T09:00:00.000Z')
    // 1 am Eastern Nov 17 → the same morning's rollover, 4 am Eastern
    expect(nextStudyDayStart(new Date('2026-11-17T06:00:00Z'), 300).toISOString()).toBe('2026-11-17T09:00:00.000Z')
    // no timezone known → 18 hours on
    expect(nextStudyDayStart(new Date('2026-11-17T02:00:00Z')).toISOString()).toBe('2026-11-17T20:00:00.000Z')
  })

  it('uses 150 reviews unless a class sets a number, and the lowest when classes differ', () => {
    expect(effectiveAfterReviews([])).toBe(CARD_CHECK_DEFAULT_AFTER_REVIEWS)
    expect(effectiveAfterReviews([null, undefined])).toBe(150)
    expect(effectiveAfterReviews([200, null, 80])).toBe(80)
    expect(effectiveAfterReviews([2])).toBe(10)
    expect(effectiveAfterReviews([99999])).toBe(1000)
  })

  it('matches a card to its question by front text with whitespace collapsed', () => {
    expect(checkKey('  What is\n  $e$? ')).toBe('What is $e$?')
  })
})
