/**
 * The SAT per-option explanation lookup: re-aligns authored notes to the shown
 * option order, drops notes for edited questions, and every authored entry is
 * well formed.
 */
import { describe, it, expect, vi } from 'vitest'
import { questionKey } from '@/lib/question-key'

const Q = { question: 'Which word fits?', options: ['calm', 'galvanized', 'divided', 'confused'], correctIndex: 1 }
const KEY = questionKey(Q)
const NOTES = ['Calm is the opposite of the reaction described.', 'Galvanized means spurred into action, as the text says.', 'Divided is not supported.', 'Confused is not supported.']

vi.mock('@/data/sat-practice/option-explanations/sat-2-words', async (orig) => {
  const real = (await orig()) as { default: Record<string, unknown> }
  return { default: { ...real.default, [KEY]: { options: Q.options, explanations: NOTES } } }
})

const { satOptionExplanationsFor, SAT_OPTION_EXPLANATIONS } = await import('@/data/sat-practice/option-explanations')

describe('satOptionExplanationsFor', () => {
  it('follows the options into whatever order they were shown', () => {
    const shown = ['divided', 'confused', 'galvanized', 'calm']
    expect(satOptionExplanationsFor(KEY, shown)).toEqual([NOTES[2], NOTES[3], NOTES[1], NOTES[0]])
  })

  it('returns nothing for an unknown key or options that no longer match', () => {
    expect(satOptionExplanationsFor('q:0000000000000000', Q.options)).toBeUndefined()
    expect(satOptionExplanationsFor(KEY, ['calm', 'galvanized', 'divided', 'puzzled'])).toBeUndefined()
  })
})

describe('authored SAT option explanations', () => {
  const LETTER = /\(\s*[A-D]\s*\)|\b(?:option|choice|answer)\s+[A-D]\b/i
  it('every entry has one non-empty note per option and no letter references', () => {
    for (const [key, e] of Object.entries(SAT_OPTION_EXPLANATIONS)) {
      expect(key.startsWith('q:'), key).toBe(true)
      expect(e.explanations.length, key).toBe(e.options.length)
      for (const s of e.explanations) {
        expect(s.trim().length, key).toBeGreaterThan(0)
        expect(LETTER.test(s), `${key}: ${s}`).toBe(false)
      }
    }
  })
})
