/**
 * Deck figures: every authored drawing passes the SVG allowlist, and
 * applyDeckFigures puts a figure where its mode says without ever letting a
 * poll fall between a picture and the section it leads.
 */
import { describe, it, expect } from 'vitest'
import { applyDeckFigures, deckLimits, pollsInsideUnits, segmentContent, slideUnitKey, type Slide, type SlideFigure } from '@/lib/slide-deck'
import { figureProblems } from '@/lib/lesson-figure'
import { DECK_FIGURES, withSlideLoops } from '@/data/deck-figures'
import { slideVideoProblems } from '@/lib/slide-video'
import { existsSync } from 'fs'
import { join } from 'path'

const fig: SlideFigure = { svg: '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="2" fill="currentColor"/></svg>', alt: 'a dot' }
const c = (title: string, blocks: string[] = ['x']): Extract<Slide, { kind: 'content' }> => ({ kind: 'content', title, blocks })
const table = '| a | b |\n|---|---|\n| 1 | 2 |'

describe('authored deck figures', () => {
  it('every registered topic has figures and each one passes the SVG rules', () => {
    const topics = Object.keys(DECK_FIGURES)
    expect(topics.length).toBeGreaterThan(0)
    for (const topic of topics) {
      const placements = DECK_FIGURES[topic]
      expect(placements.length, topic).toBeGreaterThan(0)
      for (const p of placements) {
        if (p.figure.video) {
          // A looping animation: same-site files that exist, plus real alt text.
          expect(slideVideoProblems(p.figure.video), `${topic}: ${p.at}`).toEqual([])
          for (const f of [p.figure.video.src, p.figure.video.poster]) expect(existsSync(join(process.cwd(), 'public', f)), `${topic}: ${f} missing`).toBe(true)
          expect(p.figure.alt.trim().length, `${topic}: ${p.at} alt`).toBeGreaterThanOrEqual(10)
          if (p.figure.svg) expect(figureProblems(p.figure), `${topic}: ${p.at}`).toEqual([])
        } else {
          expect(figureProblems(p.figure), `${topic}: ${p.at}`).toEqual([])
        }
        expect(p.at.trim().length).toBeGreaterThan(3)
        for (const b of p.blocks ?? []) expect(b.length, `${p.at} block`).toBeLessThan(200)
      }
    }
  })
})

describe('applyDeckFigures', () => {
  it('lead: a full-width figure slide goes in front of the section and the pair is one unit', () => {
    const out = applyDeckFigures([c('Intro'), c('Timing & Contingency', ['long bullets']), c('Timing & Contingency (cont.)'), c('Next')], [
      { at: 'timing & contingency', figure: fig, blocks: ['- short line'] },
    ])
    expect(out.map((s) => s.title)).toEqual(['Intro', 'Timing & Contingency', 'Timing & Contingency (cont.)', 'Timing & Contingency (cont.)', 'Next'])
    expect(out[1].figure).toBe(fig)
    expect(out[1].layout).toBe('full')
    expect(out[1].blocks).toEqual(['- short line'])
    expect(out[2].blocks).toEqual(['long bullets'])
    expect(slideUnitKey(out[1].title)).toBe(slideUnitKey(out[2].title))
    // The beat cutter keeps the whole unit together, so a poll after a beat
    // is never between the figure and its words.
    const segs = segmentContent(out, 3)
    const deck: Slide[] = segs.flatMap((seg) => [...seg, { kind: 'poll', question: 'q', options: ['a', 'b'], correctIndex: 0, explanation: '' } as Slide])
    expect(pollsInsideUnits(deck)).toEqual([])
  })

  it('after: the figure slide follows the whole matched section as a continuation', () => {
    const out = applyDeckFigures([c('Worked Example — Reading a Graph', ['passage']), c('Worked Example — Reading a Graph (cont.)', ['step 1'])], [
      { at: 'Worked Example — Reading', mode: 'after', figure: fig },
    ])
    expect(out.map((s) => s.title)).toEqual(['Worked Example — Reading a Graph', 'Worked Example — Reading a Graph (cont.)', 'Worked Example — Reading a Graph (cont.)'])
    expect(out[1].blocks).toEqual(['step 1'])
    expect(out[2].figure).toBe(fig)
  })

  it('replace-table: the pipe table is dropped and the figure sits beside what remains', () => {
    const out = applyDeckFigures([c('The Consequence 2×2', [table, '- add / remove'])], [{ at: 'the consequence 2×2', mode: 'replace-table', figure: fig }])
    expect(out).toHaveLength(1)
    expect(out[0].blocks).toEqual(['- add / remove'])
    expect(out[0].layout).toBe('side')
    const withBlocks = applyDeckFigures([c('Schedules', [table])], [{ at: 'Schedules', mode: 'replace-table', figure: fig, blocks: ['- FR', '- VR'] }])
    expect(withBlocks[0].blocks).toEqual(['- FR', '- VR'])
  })

  it('never matches a continuation page, and fails loudly when a section is missing', () => {
    expect(() => applyDeckFigures([c('Memory (cont.)')], [{ at: 'Memory', figure: fig }])).toThrow(/matches no section/)
    expect(() => applyDeckFigures([c('Memory')], [{ at: 'Forgetting', figure: fig }])).toThrow(/Forgetting/)
    expect(applyDeckFigures([c('A')], undefined)).toEqual([c('A')])
  })
})

describe('deckLimits', () => {
  it('prose lessons chunk tighter (with room for the same text) and long lessons get a block per two parts', () => {
    expect(deckLimits(false, 2)).toEqual({ maxChars: 700, maxBlocks: 5, maxSlides: 28, maxPolls: 8 })
    // 28 slides × 700 chars of text needs ~38 slides at 520 chars.
    expect(deckLimits(true, 2)).toEqual({ maxChars: 520, maxBlocks: 4, maxSlides: 38, maxPolls: 8 })
    expect(deckLimits(true, 4)).toMatchObject({ maxSlides: 76, maxPolls: 16 })
    expect(deckLimits(false, 0)).toMatchObject({ maxSlides: 28, maxPolls: 8 })
  })
  it('a lesson that overflows its pair budget gets more blocks, never more than one per part', () => {
    expect(deckLimits(false, 4, 56)).toMatchObject({ maxSlides: 56, maxPolls: 16 })
    expect(deckLimits(false, 4, 75)).toMatchObject({ maxSlides: 84, maxPolls: 16 }) // capped at MAX_DECK_POLLS
    expect(deckLimits(false, 4, 500)).toMatchObject({ maxSlides: 112, maxPolls: 16 })
    expect(deckLimits(false, 1, 90)).toMatchObject({ maxSlides: 28, maxPolls: 8 })
    expect(deckLimits(true, 7, 100)).toMatchObject({ maxSlides: 152, maxPolls: 16 })
  })
})

describe('slide loop animations', () => {
  it('only same-site /slide-media files pass', () => {
    expect(slideVideoProblems({ src: '/slide-media/circuits-1/a-b.mp4', poster: '/slide-media/circuits-1/a-b.jpg' })).toEqual([])
    expect(slideVideoProblems({ src: 'https://evil.example/x.mp4', poster: '/slide-media/c/x.jpg' })).toHaveLength(1)
    expect(slideVideoProblems({ src: '/slide-media/../x.mp4', poster: '/slide-media/c/x.jpg' })).toHaveLength(1)
    expect(slideVideoProblems({ src: '/slide-media/c/x.jpg', poster: '/slide-media/c/x.mp4' })).toHaveLength(2)
  })

  it('attaches to a drawn figure or adds a lead slide', () => {
    const drawn = [{ at: 'Ohmic vs. Non-Ohmic', mode: 'replace' as const, figure: fig, blocks: ['- line'] }]
    const out = withSlideLoops(drawn, 'circuits-1', [
      { at: 'ohmic vs. non-ohmic', name: 'iv', alt: 'a dot traces the curve' },
      { at: 'Short Circuits', name: 'short', alt: 'a wire shorts bulb one', caption: 'cap' },
    ])
    expect(out).toHaveLength(2)
    expect(out[0].mode).toBe('replace')
    expect(out[0].blocks).toEqual(['- line'])
    expect(out[0].figure.svg).toBe(fig.svg)
    expect(out[0].figure.video).toEqual({ src: '/slide-media/circuits-1/iv.mp4', poster: '/slide-media/circuits-1/iv.jpg' })
    expect(out[1]).toMatchObject({ at: 'Short Circuits', mode: 'lead', blocks: [], figure: { svg: '', caption: 'cap' } })
    expect(drawn[0].figure.video).toBeUndefined() // input not mutated
    const added = withSlideLoops(drawn, 'circuits-1', [{ at: 'Ohmic vs. Non-Ohmic', name: 'heat', alt: 'a second animation here', mode: 'after', add: true }])
    expect(added).toHaveLength(2)
    expect(added[0].figure.video).toBeUndefined()
    expect(added[1]).toMatchObject({ at: 'Ohmic vs. Non-Ohmic', mode: 'after', figure: { video: { src: '/slide-media/circuits-1/heat.mp4' } } })
  })
})
