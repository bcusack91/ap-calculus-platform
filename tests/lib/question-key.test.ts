import { describe, it, expect } from 'vitest'
import { isQuestionKey, questionKey } from '@/lib/question-key'

describe('questionKey', () => {
  const base = { question: 'Which enzyme unwinds DNA?', options: ['Ligase', 'Helicase', 'Primase', 'Topoisomerase'], correctIndex: 1 }

  it('is the same however the options are ordered', () => {
    const shuffled = { question: base.question, options: ['Topoisomerase', 'Primase', 'Helicase', 'Ligase'], correctIndex: 2 }
    expect(questionKey(shuffled)).toBe(questionKey(base))
  })

  it('ignores whitespace and case', () => {
    expect(questionKey({ ...base, question: '  which ENZYME unwinds   DNA? ' })).toBe(questionKey(base))
  })

  it('changes when the stem, an option, the key or the passage changes', () => {
    const k = questionKey(base)
    expect(questionKey({ ...base, question: 'Which enzyme seals nicks?' })).not.toBe(k)
    expect(questionKey({ ...base, options: ['Ligase', 'Helicase', 'Primase', 'Gyrase'] })).not.toBe(k)
    expect(questionKey({ ...base, correctIndex: 0 })).not.toBe(k)
    expect(questionKey({ ...base, passageId: 'p1' })).not.toBe(k)
  })

  it('has a recognisable shape', () => {
    expect(isQuestionKey(questionKey(base))).toBe(true)
    expect(isQuestionKey('mcat-full-length:2:C/P')).toBe(false)
    expect(isQuestionKey('')).toBe(false)
  })
})
