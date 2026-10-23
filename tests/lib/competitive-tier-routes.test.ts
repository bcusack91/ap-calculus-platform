import { describe, it, expect } from 'vitest'
import { generateMatchQuestions } from '@/lib/competitive-utils'
import { getApCalculusQuestions } from '@/data/competitive-questions/ap-calculus-bank'

/**
 * A hard match must get the hard mix on every route, not only the mapped-lesson
 * route. Found 2026-10-23: the exact-slug and whole-unit grouping routes drew a
 * plain random sample whatever the tier (estimating-limits-graphs served 18 easy
 * of 20 on "hard").
 */
const count = (qs: { difficulty?: unknown }[], d: string) => qs.filter((q) => q.difficulty === d).length

describe('match tiers apply on every AP route', () => {
  it('exact-slug route: a hard match gets min(10, available) hard items of 20', async () => {
    const slug = 'estimating-limits-graphs'
    const pool = (await getApCalculusQuestions(1_000_000)).filter((q) => q.topicSlug === slug)
    expect(pool.length).toBeGreaterThanOrEqual(15)
    const hardAvailable = count(pool, 'hard')
    const qs = await generateMatchQuestions(20, slug, undefined, 'hard')
    expect(qs).toHaveLength(Math.min(20, pool.length))
    expect(count(qs, 'hard')).toBe(Math.min(10, hardAvailable))
  })

  it('whole-unit grouping route: a hard match is mostly medium/hard, an easy match mostly easy', async () => {
    const hard = await generateMatchQuestions(20, 'ap-exam-review-calcab', undefined, 'hard')
    const easy = await generateMatchQuestions(20, 'ap-exam-review-calcab', undefined, 'easy')
    expect(count(hard, 'hard')).toBe(10)
    expect(count(easy, 'hard')).toBeLessThan(count(hard, 'hard'))
    expect(count(easy, 'easy')).toBeGreaterThan(count(hard, 'easy'))
  })

  it('no tier keeps the plain sample size', async () => {
    const qs = await generateMatchQuestions(20, 'estimating-limits-graphs')
    expect(qs.length).toBeGreaterThan(0)
  })
})
