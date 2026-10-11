/**
 * SAT vocabulary deck: unique words, every card has both sides, each sentence
 * bolds the word it teaches, and lengths stay card-sized.
 */
import { describe, it, expect } from 'vitest'
import {
  SAT_VOCABULARY,
  SAT_VOCAB_CARDS,
  SAT_VOCAB_TOPIC_SLUG,
  satVocabCardId,
  vocabHeadword,
} from '@/data/flashcards/sat-vocabulary'
import { hasExitQuiz } from '@/data/exit-quizzes'

describe('SAT vocabulary deck', () => {
  it('has roughly 250+ words, all unique', () => {
    expect(SAT_VOCABULARY.length).toBeGreaterThanOrEqual(240)
    const words = SAT_VOCABULARY.map((v) => v.word.toLowerCase())
    expect(new Set(words).size).toBe(words.length)
    const ids = SAT_VOCABULARY.map((v) => satVocabCardId(v.word))
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every entry has non-empty fields and card-sized lengths', () => {
    for (const v of SAT_VOCABULARY) {
      expect(v.word.trim(), v.word).not.toBe('')
      expect(v.word).toBe(v.word.toLowerCase())
      expect(['n.', 'v.', 'adj.', 'adv.']).toContain(v.pos)
      expect(v.sentence.length, v.word).toBeGreaterThan(20)
      expect(v.sentence.length, v.word).toBeLessThanOrEqual(160)
      expect(v.definition.trim().length, v.word).toBeGreaterThan(3)
      expect(v.definition.length, v.word).toBeLessThanOrEqual(90)
      expect(v.synonym.trim(), v.word).not.toBe('')
      expect(v.synonym.toLowerCase(), v.word).not.toBe(v.word)
      if (v.trap !== undefined) expect(v.trap.length, v.word).toBeLessThanOrEqual(90)
    }
  })

  it('bolds the taught word (or an inflection of it) in its sentence', () => {
    for (const v of SAT_VOCABULARY) {
      const m = v.sentence.match(/\*\*([^*]+)\*\*/)
      expect(m, v.word).not.toBeNull()
      expect(m![1].toLowerCase().startsWith(v.word.slice(0, 3)), `${v.word} → ${m![1]}`).toBe(true)
    }
  })

  it('stays clear of characters the flashcard math formatter would typeset', () => {
    for (const c of SAT_VOCAB_CARDS) {
      expect(c.front + c.back).not.toMatch(/[$=\\]/)
    }
  })

  it('builds two-sided cards with the headword first', () => {
    expect(SAT_VOCAB_CARDS).toHaveLength(SAT_VOCABULARY.length)
    SAT_VOCAB_CARDS.forEach((c, i) => {
      expect(c.front.trim()).not.toBe('')
      expect(c.back.trim()).not.toBe('')
      expect(c.front.length).toBeLessThanOrEqual(220)
      expect(c.back.length).toBeLessThanOrEqual(300)
      expect(vocabHeadword(c.front)).toBe(SAT_VOCABULARY[i].word)
      expect(c.back).toContain('Synonym:')
    })
  })

  it('recognises legacy card fronts by headword', () => {
    expect(vocabHeadword('Bolster')).toBe('bolster')
    expect(vocabHeadword('Advocate (v.)')).toBe('advocate')
    expect(vocabHeadword('**novel** (adj.)\n\nThe team…')).toBe('novel')
  })

  it('targets the SAT words-in-context topic, which has an exit quiz (cards unlock with lesson + quiz)', () => {
    expect(SAT_VOCAB_TOPIC_SLUG).toBe('sat-vocabulary-context')
    expect(hasExitQuiz(SAT_VOCAB_TOPIC_SLUG)).toBe(true)
  })
})
