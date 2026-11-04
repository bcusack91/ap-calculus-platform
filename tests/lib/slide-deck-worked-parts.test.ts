/**
 * Worked examples on slides: a lesson problem written as a setup, lettered
 * questions and one solution per letter becomes an overview slide plus one
 * slide per part (owner, 2026-11-04 — four steps at once was overwhelming in
 * an online class, and a problem must ask its question).
 */
import { describe, it, expect } from 'vitest'
import { applyDeckFigures, contentSlidesFrom, pollsInsideUnits, slideUnitKey, takeawayGridSlides, workedExampleSlides, type Slide } from '@/lib/slide-deck'

const LIMITS = { maxChars: 700, maxBlocks: 5, maxSlides: 100, maxPolls: 8 }
const T = 'Worked Example — Counting Charge'
const setup = '**Problem 1.** A $9\\;\\text{V}$ battery delivers $0.50\\;\\text{A}$ for $1$ minute.'
const blocks = [
  setup,
  '- **(a)** How much charge passes through the pump?',
  '- **(b)** How many electrons is that?',
  '**(a) Charge moved.** $\\Delta Q = I\\Delta t = 30\\;\\text{C}$',
  '**(b) Electrons.** $N = 30/(1.6 \\times 10^{-19}) \\approx 1.9 \\times 10^{20}$',
  'Estimate first: $30/1.6 \\approx 19$.',
]

describe('workedExampleSlides', () => {
  it('builds an overview with every question, then one slide per part that repeats the setup', () => {
    const slides = workedExampleSlides(T, blocks, LIMITS)!
    expect(slides.map((s) => s.title)).toEqual([T, `${T} · Part (a)`, `${T} · Part (b)`])
    expect(slides[0].blocks).toEqual([setup, '**(a)** How much charge passes through the pump?', '**(b)** How many electrons is that?', '→ Try each part before the next slide.'])
    expect(slides[1].blocks).toEqual([setup, '**(a)** How much charge passes through the pump?', blocks[3]])
    // A part's follow-on paragraph stays with that part.
    expect(slides[2].blocks).toEqual([setup, '**(b)** How many electrons is that?', blocks[4], blocks[5]])
  })

  it('labels the problems when a section holds more than one', () => {
    const second = ['**Problem 2.** One channel passes $2\\;\\text{pA}$.', '- **(a)** How many ions cross in $1\\;\\text{ms}$?', '**(a) Ions.** About $12{,}500$.']
    const titles = workedExampleSlides(T, [...blocks, ...second], LIMITS)!.map((s) => s.title)
    expect(titles).toEqual([T, `${T} · Problem 1 (a)`, `${T} · Problem 1 (b)`, `${T} · Problem 2`, `${T} · Problem 2 (a)`])
  })

  it('leaves a section that is not in the lettered shape alone', () => {
    expect(workedExampleSlides(T, ['**Step 1 —** add the resistors.', '**Step 2 —** divide.'], LIMITS)).toBeNull()
    // A solved part with no question asked is not a lettered problem.
    expect(workedExampleSlides(T, [setup, '- **(a)** How much charge?', '**(a)** 30 C', '**(b)** 1.9e20'], LIMITS)).toBeNull()
  })

  it('keeps every part slide in the example unit, so no poll lands between parts', () => {
    const slides = workedExampleSlides(T, blocks, LIMITS)!
    expect(new Set(slides.map((s) => slideUnitKey(s.title)))).toEqual(new Set([T]))
    const poll: Slide = { kind: 'poll', question: 'q', options: ['a', 'b'], correctIndex: 0, explanation: '' }
    expect(pollsInsideUnits([slides[0], slides[1], poll, slides[2]])).toEqual([2])
    expect(slideUnitKey(`${T} · Problem 2 (b) (cont.)`)).toBe(T)
  })

  it("puts an 'after' figure behind the last part, not between the overview and part (a)", () => {
    const slides = workedExampleSlides(T, blocks, LIMITS)!
    const figure = { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"></svg>', alt: 'the solved circuit' }
    const out = applyDeckFigures(slides, [{ at: T, figure, mode: 'after' }])
    expect(out.map((s) => s.title)).toEqual([T, `${T} · Part (a)`, `${T} · Part (b)`, `${T} (cont.)`])
    expect((out[3] as Extract<Slide, { kind: 'content' }>).figure?.alt).toBe('the solved circuit')
  })
})

describe('worked-example sections in lesson markdown', () => {
  it('splits a plural "Worked Examples" heading into parts too', () => {
    const md = [
      '### Worked Examples — Clearance Calculations',
      '',
      '**Problem 1.** Urine inulin is 30 mg/mL, urine flow 2 mL/min and plasma inulin 0.5 mg/mL.',
      '',
      '- **(a)** What is the inulin clearance?',
      '- **(b)** What is the GFR?',
      '',
      '**(a) Clearance.** UV/P = 60/0.5 = 120 mL/min.',
      '',
      '**(b) GFR.** Inulin is filtered only, so GFR = 120 mL/min.',
    ].join('\n')
    const titles = contentSlidesFrom(md, 'Renal').map((s) => s.title)
    expect(titles).toEqual([
      'Worked Examples — Clearance Calculations',
      'Worked Examples — Clearance Calculations · Part (a)',
      'Worked Examples — Clearance Calculations · Part (b)',
    ])
  })
})

describe('takeawayGridSlides', () => {
  const box = (t: string) => `- **${t}.** One short sentence about ${t}.`
  it('turns boxed takeaways and traps into grids of at most four, and keeps other lines', () => {
    const blocks = [box('A'), box('B'), box('C'), box('D'), box('E'), '**Common traps**', box('T1'), box('T2'), '**Next up:** the next lesson.']
    const slides = takeawayGridSlides('Key Takeaways', blocks)!
    expect(slides.map((s) => [s.title, s.blocks.length, s.layout])).toEqual([
      ['Key Takeaways', 3, 'grid'],
      ['Key Takeaways (cont.)', 2, 'grid'],
      ['Common Traps', 2, 'grid'],
      ['Key Takeaways (cont.)', 1, undefined],
    ])
  })
  it('leaves plain bulleted takeaways alone', () => {
    expect(takeawayGridSlides('Key Takeaways', [box('A'), '- a plain bullet'])).toBeNull()
  })
})

describe("applyDeckFigures 'replace'", () => {
  it('swaps a dense section (and its continuation pages) for the figure and short lines', () => {
    const c = (title: string, blocks: string[]) => ({ kind: 'content' as const, title, blocks })
    const figure = { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"></svg>', alt: 'two I–V graphs' }
    const out = applyDeckFigures(
      [c('Resistance', ['r']), c('Ohmic vs. Non-Ohmic Elements', ['a long paragraph']), c('Ohmic vs. Non-Ohmic Elements (cont.)', ['more']), c('Series', ['s'])],
      [{ at: 'Ohmic vs. Non-Ohmic', figure, mode: 'replace', blocks: ['- **Ohmic:** R constant'] }],
    )
    expect(out.map((s) => s.kind === 'content' ? [s.title, s.blocks, (s as Extract<Slide, { kind: 'content' }>).layout] : s.kind)).toEqual([
      ['Resistance', ['r'], undefined],
      ['Ohmic vs. Non-Ohmic Elements', ['- **Ohmic:** R constant'], 'full'],
      ['Series', ['s'], undefined],
    ])
  })
})
