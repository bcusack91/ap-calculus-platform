import { describe, it, expect } from 'vitest'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'

describe('escapeCurrencyMath', () => {
  it('returns input unchanged when there is no dollar sign', () => {
    const s = 'No money here, just text and **bold**.'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('escapes two currency amounts that would collide as inline math', () => {
    const input = 'You pay $5 to play and win $10 if you guess right.'
    const out = escapeCurrencyMath(input)
    expect(out).toBe('You pay \\$5 to play and win \\$10 if you guess right.')
  })

  it('escapes currency amounts in a sentence with prose words between', () => {
    const input = 'The shirt costs $20 but the discounted price is $14 today.'
    const out = escapeCurrencyMath(input)
    expect(out).toBe(
      'The shirt costs \\$20 but the discounted price is \\$14 today.',
    )
  })

  it('leaves real inline math untouched (variables / equations)', () => {
    for (const s of [
      'The slope-intercept form is $y = mx + b$ here.',
      'Distance is $d = rt$ where r is rate.',
      'We expand $a^2 + 2ab + b^2 = (a + b)^2$.',
      'The triangle $ABC$ is isosceles.',
    ]) {
      expect(escapeCurrencyMath(s)).toBe(s)
    }
  })

  it('leaves math that starts with a digit untouched', () => {
    for (const s of [
      'Compute $2 \\times 3 = 6$ first.',
      'Note $5 \\cdot 4 = 20$ exactly.',
      'The factor pair $36 = 2^2 \\times 3^2$ is prime factorization.',
    ]) {
      expect(escapeCurrencyMath(s)).toBe(s)
    }
  })

  it('leaves unit spans like $3 cm$ untouched (no money word)', () => {
    const s = 'The length is $3 cm$ and the mass is $5 kg$.'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('leaves display math ($$...$$) untouched', () => {
    const s = 'Here: $$\\int_0^1 x\\,dx = \\frac{1}{2}$$ done.'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('does not touch dollar signs inside inline code', () => {
    const s = 'Run `echo $5` and then `cat $10`.'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('does not touch dollar signs inside fenced code blocks', () => {
    const s = 'Text\n```\nprice = $5 and total $10\n```\nmore text'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('does not double-escape an already escaped currency sign', () => {
    const s = 'You pay \\$5 to play and win \\$10.'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('handles currency inside a markdown table cell', () => {
    const input = '| Item | Price |\n|---|---|\n| Pen and ink | $2 worth and $3 |'
    const out = escapeCurrencyMath(input)
    expect(out).toContain('\\$2 worth and \\$3')
  })

  it('does not alter a lone unpaired currency amount', () => {
    // A single $ has no partner to collide with; remark-math leaves it literal.
    const s = 'The total was $20 yesterday.'
    expect(escapeCurrencyMath(s)).toBe(s)
  })

  it('preserves mixed real math and currency on the same line', () => {
    const input =
      'Since $2 \\times 3 = 6$, the bundle of $5 per box and $7 per case applies.'
    const out = escapeCurrencyMath(input)
    // Real math preserved, both currency amounts escaped.
    expect(out).toBe(
      'Since $2 \\times 3 = 6$, the bundle of \\$5 per box and \\$7 per case applies.',
    )
  })
})
