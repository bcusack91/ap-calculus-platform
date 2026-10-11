/**
 * Slide deck beats: a multi-slide worked example (or any "(cont.)" run) is
 * never split, so polls placed after a beat come after the whole example.
 */
import { describe, it, expect } from 'vitest'
import { pollsInsideUnits, segmentContent, slideUnitKey, type Slide } from '@/lib/slide-deck'

const c = (title: string) => ({ kind: 'content' as const, title, blocks: ['x'] })
const poll: Slide = { kind: 'poll', question: 'q', options: ['a', 'b'], correctIndex: 0, explanation: '' }

describe('slideUnitKey', () => {
  it('groups continuation pages and worked-example reveal steps', () => {
    expect(slideUnitKey('Worked Example — Diagnosing the Reasoning (cont.)')).toBe('Worked Example — Diagnosing the Reasoning')
    expect(slideUnitKey('Worked Example — Solution (2 of 3)')).toBe('Worked Example')
    expect(slideUnitKey('Worked Example — Try It First')).toBe('Worked Example')
    expect(slideUnitKey('Deductive Reasoning')).not.toBe(slideUnitKey('Inductive Reasoning'))
  })
})

describe('segmentContent', () => {
  it('keeps the live CARS Logical Reasoning example together (it used to be split after its first slide)', () => {
    // The deck as generated on 2026-10-09: beats of exactly 3 put polls after
    // "Worked Example — Diagnosing the Reasoning", before its two (cont.) pages.
    const content = [
      'Argument Structure', 'Strengthening & Weakening', 'Assumptions',
      'Common Fallacies', 'Deductive Reasoning', 'Deductive Reasoning (cont.)',
      'Inductive Reasoning', 'Why This Matters for CARS', 'Worked Example — Diagnosing the Reasoning',
      'Worked Example — Diagnosing the Reasoning (cont.)', 'Worked Example — Diagnosing the Reasoning (cont.)',
      'Key Takeaways — Part 1',
    ].map(c)
    const segs = segmentContent(content, 3)
    for (const seg of segs) {
      const last = seg[seg.length - 1].title
      const nextIndex = content.indexOf(seg[seg.length - 1]) + 1
      if (nextIndex < content.length) expect(slideUnitKey(content[nextIndex].title)).not.toBe(slideUnitKey(last))
    }
    expect(segs.flat()).toEqual(content)
  })

  it('still makes beats of about three slides and folds a lonely last slide', () => {
    expect(segmentContent(['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(c), 3).map((s) => s.length)).toEqual([3, 4])
  })
})

describe('pollsInsideUnits', () => {
  it('flags a poll between two slides of one worked example, and allows one after it', () => {
    const bad: Slide[] = [c('Worked Example — Naming the Flaw'), poll, c('Worked Example — Naming the Flaw (cont.)'), c('Key Takeaways')]
    expect(pollsInsideUnits(bad)).toEqual([1])
    const good: Slide[] = [c('Worked Example — Naming the Flaw'), c('Worked Example — Naming the Flaw (cont.)'), poll, poll, c('Key Takeaways')]
    expect(pollsInsideUnits(good)).toEqual([])
  })
})
