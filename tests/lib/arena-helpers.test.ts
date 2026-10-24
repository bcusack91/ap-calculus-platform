import { describe, it, expect } from 'vitest'
import { answerGridClass, bestStreakOf, clockTone, formatClock } from '@/components/competitive/arena/Arena'

describe('arena helpers', () => {
  it('lays out tiny options two-up on phones, short ones two-up from sm, long or tabular ones stacked', () => {
    expect(answerGridClass(['$3$', '$4$', '$1$', '$\\frac{1}{3}$'])).toBe('grid-cols-2')
    expect(answerGridClass(['Increasing and concave up', 'Decreasing'])).toBe('sm:grid-cols-2')
    expect(answerGridClass(['Average rate of change over a small interval containing a'])).toBe('')
    expect(answerGridClass(['| a | b |', 'x'])).toBe('')
    expect(answerGridClass(undefined)).toBe('')
  })
  it('finds the best correct streak', () => {
    expect(bestStreakOf([{ correct: true }, { correct: true }, { correct: false }, { correct: true }])).toBe(2)
    expect(bestStreakOf([])).toBe(0)
  })
  it('turns the clock amber in the last two minutes and red in the last one', () => {
    expect(clockTone(300)).toBe('normal')
    expect(clockTone(120)).toBe('warn')
    expect(clockTone(60)).toBe('danger')
    expect(formatClock(125)).toBe('2:05')
  })
})
