/**
 * The inline lesson renderer splits text on `$` delimiters after swapping the
 * `\$` currency escape for a placeholder. It restored the placeholder in prose
 * but not inside math spans, so "$\$18$" typeset as "DOLLAR18" on every SAT
 * and AP money problem written that way (250+ content files).
 */
import { describe, it, expect } from 'vitest'
import { splitInlineMath } from '@/lib/inline-math-parts'

describe('splitInlineMath', () => {
  it('hands an escaped dollar inside a math span to KaTeX as \\$', () => {
    const parts = splitInlineMath('A worker earns $\\$18$ per hour for $5$ hours.')
    expect(parts).toEqual([
      { type: 'text', content: 'A worker earns ', display: false },
      { type: 'latex', content: '\\$18', display: false },
      { type: 'text', content: ' per hour for ', display: false },
      { type: 'latex', content: '5', display: false },
      { type: 'text', content: ' hours.', display: false },
    ])
    expect(parts.some((p) => p.content.includes('DOLLAR') || p.content.includes('\u0000'))).toBe(false)
  })

  it('turns an escaped dollar in prose into a literal dollar', () => {
    expect(splitInlineMath('Costs \\$40,000 to \\$80,000 when $x > 2$.')).toEqual([
      { type: 'text', content: 'Costs $40,000 to $80,000 when ', display: false },
      { type: 'latex', content: 'x > 2', display: false },
      { type: 'text', content: '.', display: false },
    ])
  })

  it('returns a single restored text part when there is no math', () => {
    expect(splitInlineMath('Just \\$5, no math.')).toEqual([
      { type: 'text', content: 'Just $5, no math.', display: false },
    ])
  })

  it('keeps display math and \\(...\\) delimiters working', () => {
    expect(splitInlineMath('Area: $$\\pi r^2$$ and \\(2\\pi r\\).')).toEqual([
      { type: 'text', content: 'Area: ', display: false },
      { type: 'latex', content: '\\pi r^2', display: true },
      { type: 'text', content: ' and ', display: false },
      { type: 'latex', content: '2\\pi r', display: false },
      { type: 'text', content: '.', display: false },
    ])
  })
})
