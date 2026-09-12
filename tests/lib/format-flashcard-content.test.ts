import { describe, it, expect } from 'vitest'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'

/**
 * The formatter auto-wraps plain-text equations so legacy flashcards render
 * through KaTeX. Inside prose it wraps "arithmetic runs" — which used to treat
 * any digits joined by a slash as arithmetic, so a history card reading
 * "Studies of 9/11" typeset the date as the fraction nine-elevenths.
 */
describe('formatFlashcardContent — slashes in prose', () => {
  it('leaves a date written with a slash alone', () => {
    const prose = 'Studies of 9/11 changed how historians treat oral testimony.'
    expect(formatFlashcardContent(prose)).toBe(prose)
  })

  it('leaves slash idioms and ratios alone', () => {
    for (const prose of [
      'The library stays open 24/7 during finals week for enrolled students.',
      'Congress approved the measure in a 50/50 split decided by the chair.',
    ]) {
      expect(formatFlashcardContent(prose)).toBe(prose)
    }
  })

  it('still formats real arithmetic embedded in prose', () => {
    const out = formatFlashcardContent('Multiply the ones place: 4 × 5 = 20, then carry the 2.')
    expect(out).toContain('$')
    expect(out).toContain('\\times')
    // The trailing comma stays prose, outside the math span.
    expect(out).toContain('$,')
  })

  it('still converts a fraction when the run is genuinely arithmetic', () => {
    const out = formatFlashcardContent('Divide the sample so that 1/2 × 8 = 4 remains in each group.')
    expect(out).toContain('\\frac{1}{2}')
  })

  it('leaves prose with no arithmetic untouched', () => {
    const prose = 'The reaction rate doubled when temperature rose by 10 degrees.'
    expect(formatFlashcardContent(prose)).toBe(prose)
  })
})
