import { describe, it, expect } from 'vitest'
import { detectCloze, clozeRevealOrder, maskClozeText, revealClozeText, mathizeClozeAnswer } from '@/lib/cloze-utils'

describe('detectCloze', () => {
  it('parses a basic deletion', () => {
    const d = detectCloze('The powerhouse is {{c1::the mitochondrion}}.')
    expect(d.isCloze).toBe(true)
    expect(d.parts).toEqual([
      { text: 'The powerhouse is ', isCloze: false },
      { text: 'the mitochondrion', isCloze: true, clozeIndex: 1 },
      { text: '.', isCloze: false },
    ])
  })

  it('parses multiple deletions and the bare {{answer}} form', () => {
    const d = detectCloze('{{c1::A}} binds {{c2::B}} and {{C}}')
    expect(d.parts?.filter(p => p.isCloze).map(p => p.text)).toEqual(['A', 'B', 'C'])
  })

  it('records each deletion index; a bare deletion takes its position', () => {
    const d = detectCloze('{{c1::A}} binds {{c2::B}} and {{C}}')
    expect(d.parts?.filter(p => p.isCloze).map(p => p.clozeIndex)).toEqual([1, 2, 3])
    expect(d.parts?.filter(p => !p.isCloze).every(p => p.clozeIndex === undefined)).toBe(true)
  })

  it('keeps a repeated index on every deletion that shares it', () => {
    const d = detectCloze('{{c1::aldehydes}} but not {{c1::ketones}}')
    expect(d.parts?.filter(p => p.isCloze).map(p => p.clozeIndex)).toEqual([1, 1])
  })

  it('allows one level of LaTeX braces inside a deletion', () => {
    expect(detectCloze('{{c1::10^{-19}}} C').parts?.[0]).toEqual({ text: '10^{-19}', isCloze: true, clozeIndex: 1 })
    expect(detectCloze('E = {{c1::\\frac{1}{2}CV^2}}').parts?.[1]).toEqual({ text: '\\frac{1}{2}CV^2', isCloze: true, clozeIndex: 1 })
  })

  it('returns isCloze: false for plain text', () => {
    expect(detectCloze('What is the Bohr effect?').isCloze).toBe(false)
  })

  it('is stateless across calls (module regex carries no lastIndex)', () => {
    const text = 'A {{c1::x}} B'
    expect(detectCloze(text).parts).toEqual(detectCloze(text).parts)
    expect(detectCloze('{{c1::y}}').isCloze).toBe(true)
  })
})

describe('clozeRevealOrder', () => {
  it('lists distinct indexes ascending regardless of document order', () => {
    expect(clozeRevealOrder(detectCloze('{{c2::second}} before {{c1::first}}').parts)).toEqual([1, 2])
  })

  it('collapses a shared index into one step', () => {
    expect(clozeRevealOrder(detectCloze('{{c1::a}} {{c1::b}} {{c2::c}}').parts)).toEqual([1, 2])
  })

  it('is empty for non-cloze text and the underscore form', () => {
    expect(clozeRevealOrder(detectCloze('plain').parts)).toEqual([])
    expect(clozeRevealOrder(detectCloze('Fill in the blank: light travels in _______').parts)).toEqual([])
    expect(clozeRevealOrder(undefined)).toEqual([])
  })
})

describe('maskClozeText', () => {
  it('replaces deletions with a constant-width blank', () => {
    expect(maskClozeText('Rate-limiter of glycolysis: {{c1::PFK-1}}')).toBe('Rate-limiter of glycolysis: ______')
  })

  it('masks every deletion and never leaks answer text', () => {
    const masked = maskClozeText('{{c1::A}} then {{c2::a much longer answer}}')
    expect(masked).toBe('______ then ______')
  })

  it('is a no-op on non-cloze text', () => {
    expect(maskClozeText('plain $x^2$ text')).toBe('plain $x^2$ text')
  })
})

describe('revealClozeText', () => {
  it('strips markers leaving the completed sentence', () => {
    expect(revealClozeText('The answer is {{c1::42}}.')).toBe('The answer is 42.')
  })

  it('wraps answers in <strong> for HTML pipelines when asked', () => {
    expect(revealClozeText('The answer is {{c1::42}}.', true)).toBe('The answer is <strong>42</strong>.')
  })

  it('wraps bare LaTeX answers in math delimiters', () => {
    expect(revealClozeText('R equals {{c1::\\rho L/A}}')).toBe('R equals $\\rho L/A$')
  })

  it('reveals the bare {{answer}} form too', () => {
    expect(revealClozeText('{{c1::A}} and {{B}}', true)).toBe('<strong>A</strong> and <strong>B</strong>')
  })
})

describe('mathizeClozeAnswer', () => {
  it('leaves $-delimited and plain answers alone', () => {
    expect(mathizeClozeAnswer('$10^{7}$')).toBe('$10^{7}$')
    expect(mathizeClozeAnswer('determined')).toBe('determined')
  })

  it('wraps bare LaTeX commands and sub/superscript groups', () => {
    expect(mathizeClozeAnswer('V_{peak}/\\sqrt{2}')).toBe('$V_{peak}/\\sqrt{2}$')
    expect(mathizeClozeAnswer('pE\\sin\\theta')).toBe('$pE\\sin\\theta$')
  })
})
