/**
 * Exam-yield tiers in interactive lessons (owner request 2026-10-02).
 *
 * Low-yield passages and questions are hidden unless the student turns on
 * "Include low-yield details". Pins: the marker format, that untagged lessons
 * are untouched (every lesson but the pilot), that hiding never empties a
 * step or leaks a marker, and that the pilot lesson is fully and validly
 * tagged.
 */
import { describe, it, expect } from 'vitest'
import {
  splitYieldBlocks,
  stripLowYield,
  hasLowYieldBlock,
  filterSectionsForYield,
  lessonHasLowYield,
  LESSON_YIELDS,
} from '@/lib/lesson-yield'
import { mcatTranscriptionPart1Data as p1 } from '@/data/interactive-lessons/mcat-mcat-molecular-biology-transcription-mcat-part1'
import { mcatTranscriptionPart2Data as p2 } from '@/data/interactive-lessons/mcat-mcat-molecular-biology-transcription-mcat-part2'
import { mcatTranscriptionPart3Data as p3 } from '@/data/interactive-lessons/mcat-mcat-molecular-biology-transcription-mcat-part3'
import { mcatTranscriptionPart4Data as p4 } from '@/data/interactive-lessons/mcat-mcat-molecular-biology-transcription-mcat-part4'

const tagged = `Core idea.

<!-- yield:low -->
Trivia line.
<!-- /yield -->

More core.`

describe('splitYieldBlocks / stripLowYield', () => {
  it('splits marked passages out, in order, without the markers', () => {
    expect(splitYieldBlocks(tagged)).toEqual([
      { text: 'Core idea.', low: false },
      { text: 'Trivia line.', low: true },
      { text: 'More core.', low: false },
    ])
  })

  it('removes low-yield passages for the default view and leaves no marker behind', () => {
    const out = stripLowYield(tagged)
    expect(out).toBe('Core idea.\n\nMore core.')
    expect(out).not.toContain('<!--')
  })

  it('leaves untagged content as one ordinary block', () => {
    const plain = '# Title\n\nText with $x^2$ and a | table |.'
    expect(hasLowYieldBlock(plain)).toBe(false)
    expect(splitYieldBlocks(plain)).toEqual([{ text: plain, low: false }])
  })

  it('treats an unclosed marker as running to the end (still visible when opted in)', () => {
    const blocks = splitYieldBlocks('Core.\n<!-- yield:low -->\nTail.')
    expect(blocks).toEqual([{ text: 'Core.', low: false }, { text: 'Tail.', low: true }])
  })
})

describe('filterSectionsForYield', () => {
  const text = { id: 't', type: 'text', content: 'Plain.' }
  const quiz = {
    id: 'q', type: 'multiple-choice', content: 'Quiz',
    exercise: { questions: [{ question: 'a', yield: 'HIGH' }, { question: 'b', yield: 'LOW' }] },
  }

  it('returns untagged sections unchanged, by reference', () => {
    const out = filterSectionsForYield([text], false)
    expect(out).toEqual([text])
    expect(out[0]).toBe(text)
  })

  it('drops LOW questions by default and keeps them when opted in', () => {
    const hidden = filterSectionsForYield([quiz], false)
    expect((hidden[0].exercise as { questions: unknown[] }).questions).toHaveLength(1)
    expect((quiz.exercise.questions)).toHaveLength(2) // input not mutated
    const shown = filterSectionsForYield([quiz], true)
    expect((shown[0].exercise as { questions: unknown[] }).questions).toHaveLength(2)
  })

  it('drops a step that would be empty: an all-LOW quiz, an all-low text, a LOW section', () => {
    const allLowQuiz = { id: 'q2', type: 'multiple-choice', exercise: { questions: [{ question: 'x', yield: 'LOW' }] } }
    const allLowText = { id: 't2', type: 'text', content: '<!-- yield:low -->\nOnly trivia.\n<!-- /yield -->' }
    const lowSection = { id: 's', type: 'text', content: 'Whole thing', yield: 'LOW' }
    expect(filterSectionsForYield([text, allLowQuiz, allLowText, lowSection], false).map((s) => s.id)).toEqual(['t'])
    expect(filterSectionsForYield([text, allLowQuiz, allLowText, lowSection], true)).toHaveLength(4)
  })

  it('reports whether a part has anything to toggle', () => {
    expect(lessonHasLowYield([text])).toBe(false)
    expect(lessonHasLowYield([quiz])).toBe(true)
    expect(lessonHasLowYield([{ id: 'x', content: tagged }])).toBe(true)
  })
})

describe('pilot lesson: Transcription & RNA Processing', () => {
  type Sec = { id: string; content?: string; exercise?: { questions: { yield?: string }[] } }
  const parts = [p1, p2, p3, p4].map((p) => p.sections as unknown as Sec[])

  it('tags every quiz question with a valid tier', () => {
    for (const secs of parts) {
      for (const q of secs.flatMap((s) => s.exercise?.questions ?? [])) {
        expect(LESSON_YIELDS).toContain(q.yield)
      }
    }
  })

  it('has balanced markers and keeps every step non-empty in the default view', () => {
    for (const secs of parts) {
      for (const s of secs) {
        const c = s.content ?? ''
        expect((c.match(/<!-- yield:low -->/g) ?? []).length, s.id).toBe((c.match(/<!-- \/yield -->/g) ?? []).length)
        expect(stripLowYield(c)).not.toContain('<!--')
      }
      expect(filterSectionsForYield(secs, false)).toHaveLength(secs.length)
    }
  })

  it('hides material in Parts 1-3 and none in Part 4', () => {
    expect(parts.map((secs) => lessonHasLowYield(secs))).toEqual([true, true, true, false])
  })
})
