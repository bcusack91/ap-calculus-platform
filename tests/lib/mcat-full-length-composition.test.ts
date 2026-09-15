/**
 * Full-length MCAT forms mirror the real exam's passage/discrete balance:
 * each 59-question science section is ~44 passage questions (about 10
 * passages) plus ~15 discretes, CARS is all passages, and the two forms share
 * no passage or discrete question.
 */
import { describe, it, expect } from 'vitest'
import { FULL_LENGTH_FORMS } from '@/data/mcat/full-length'
import { SECTION_DISCRETES } from '@/data/mcat/passages'

const isDiscreteBlock = (id: string) => /-discretes(-\d+)?$/.test(id)

function composition(form: (typeof FULL_LENGTH_FORMS)[number]) {
  const out: Record<string, { passageQs: number; discreteQs: number; passageIds: string[]; discreteIds: string[] }> = {}
  for (const p of form.passages) {
    const s = (out[p.section] ??= { passageQs: 0, discreteQs: 0, passageIds: [], discreteIds: [] })
    if (isDiscreteBlock(p.id)) {
      s.discreteQs += p.questions.length
      s.discreteIds.push(...p.questions.map((q) => (q as { id?: string }).id ?? q.question))
    } else {
      s.passageQs += p.questions.length
      s.passageIds.push(p.id)
    }
  }
  return out
}

describe('full-length MCAT composition', () => {
  const [form1, form2] = FULL_LENGTH_FORMS.map(composition)

  for (const [name, c] of [['Form 1', form1], ['Form 2', form2]] as const) {
    it(`${name}: science sections are ~44 passage + ~15 discrete questions (59 total)`, () => {
      for (const section of ['chem-phys', 'bio-biochem', 'psych-soc']) {
        const s = c[section]
        expect(s.passageQs + s.discreteQs, `${section} total`).toBe(59)
        expect(s.passageQs, `${section} passage questions`).toBeGreaterThanOrEqual(42)
        expect(s.passageQs, `${section} passage questions`).toBeLessThanOrEqual(46)
      }
    })

    it(`${name}: CARS is all passages`, () => {
      expect(c.cars.discreteQs).toBe(0)
      expect(c.cars.passageQs).toBeGreaterThanOrEqual(53)
    })
  }

  it('the two forms share no passage', () => {
    for (const section of ['chem-phys', 'bio-biochem', 'psych-soc', 'cars']) {
      const shared = form1[section].passageIds.filter((id) => form2[section].passageIds.includes(id))
      expect(shared, `${section} shared passages`).toEqual([])
    }
  })

  it('the two forms share no discrete question once each pool can supply two forms', () => {
    for (const section of ['chem-phys', 'bio-biochem', 'psych-soc'] as const) {
      if (SECTION_DISCRETES[section].length < 30) continue
      const shared = form1[section].discreteIds.filter((id) => form2[section].discreteIds.includes(id))
      expect(shared, `${section} shared discretes`).toEqual([])
    }
  })
})
