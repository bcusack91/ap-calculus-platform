/**
 * Question bank pools: what the MCAT and SAT pools hold (passages whole and
 * keyed like the other surfaces, grid-ins with their key, no strategy topics),
 * the filters and pool kinds, and set assembly (passages never split, keys
 * remapped through the option shuffle).
 */
import { describe, it, expect, beforeAll } from 'vitest'
import {
  buildMcatPool,
  buildSatPool,
  eligibleUnits,
  filterUnit,
  freezeItems,
  mcatTopicInfo,
  pickUnits,
  questionCount,
  type QbankCandidate,
  type QbankPool,
  type QbankStudentState,
  type QbankUnit,
} from '@/lib/qbank-pools'
import { questionKey } from '@/lib/question-key'
import { CARS_PASSAGES, SECTION_PASSAGES } from '@/data/mcat/passages'
import { SAT_PASSAGES } from '@/data/sat-passages'
import { QBANK_SECTIONS } from '@/lib/qbank-types'

const NOBODY: QbankStudentState = { includeLowYield: false, seenKeys: new Set(), incorrectKeys: new Set(), flaggedKeys: new Set() }

let mcat: QbankPool
let sat: QbankPool
beforeAll(async () => {
  ;[mcat, sat] = await Promise.all([buildMcatPool(), buildSatPool()])
}, 120_000)

describe('MCAT pool', () => {
  it('holds thousands of questions across all four sections, each key once', () => {
    const items = mcat.units.flatMap((u) => u.items)
    expect(items.length).toBeGreaterThan(2000)
    expect(new Set(items.map((i) => i.questionKey)).size).toBe(items.length)
    const sections = new Set(QBANK_SECTIONS.mcat.map((s) => s.id))
    expect(new Set(items.map((i) => i.section))).toEqual(sections)
  })

  it('keeps every authored passage whole, in authored order, keyed with its passage id', () => {
    const authored = [...CARS_PASSAGES, ...Object.values(SECTION_PASSAGES).flat()].filter((p) => p.questions.length)
    const passageUnits = mcat.units.filter((u) => u.passageId)
    expect(passageUnits.length).toBe(authored.length)
    for (const p of authored) {
      const unit = passageUnits.find((u) => u.passageId === `authored-${p.id}`)!
      expect(unit, p.id).toBeDefined()
      expect(unit.items.map((i) => i.question)).toEqual(p.questions.map((q) => q.question))
      expect(unit.items.every((i) => i.passageId === unit.passageId && i.passage?.body)).toBe(true)
      expect(unit.items[0].questionKey).toBe(
        questionKey({ question: p.questions[0].question, options: p.questions[0].options, correctIndex: p.questions[0].correctAnswer, passageId: `authored-${p.id}` }),
      )
    }
  })

  it('files bank items under real -mcat topics and leaves out strategy/logistics topics', () => {
    const topics = new Set(mcat.units.filter((u) => !u.passageId).map((u) => u.topicSlug))
    for (const t of topics) {
      expect(t.endsWith('-mcat')).toBe(true)
      expect(mcatTopicInfo(t)).not.toBeNull()
    }
    expect([...topics].some((t) => /test-day-strategy/.test(t))).toBe(false)
  })

  it('carries lesson-built difficulty and low-yield tags; LOW items need the opt-in', () => {
    const items = mcat.units.flatMap((u) => u.items)
    expect(items.some((i) => i.difficulty === 'hard')).toBe(true)
    // Lesson-built pools drop the tag from their generated quiz; it comes from EXIT_POOL.
    const biostats = items.filter((i) => i.topicSlug === 'mcat-biostatistics-mcat')
    expect(biostats.length).toBeGreaterThan(0)
    expect(biostats.every((i) => i.difficulty !== null)).toBe(true)
    const low = mcat.units.filter((u) => u.items.some((i) => i.lowYield))
    expect(low.length).toBeGreaterThan(0)
    expect(filterUnit(low[0], {}, false)).toBeNull()
    expect(filterUnit(low[0], {}, true)).not.toBeNull()
    const all = questionCount(eligibleUnits(mcat, {}, 'all', NOBODY))
    const withLow = questionCount(eligibleUnits(mcat, {}, 'all', { ...NOBODY, includeLowYield: true }))
    expect(withLow).toBeGreaterThan(all)
  })
})

describe('SAT pool', () => {
  it('has Reading and Writing and Math items, grid-ins with a key and no options', () => {
    const items = sat.units.flatMap((u) => u.items)
    expect(new Set(items.map((i) => i.section))).toEqual(new Set(['reading-writing', 'math']))
    const grids = items.filter((i) => i.gridIn)
    expect(grids.length).toBeGreaterThan(30)
    for (const g of grids) {
      expect(g.options).toEqual([])
      expect(g.correctIndex).toBe(-1)
      expect(g.section).toBe('math')
      expect(g.questionKey).toBe(questionKey({ question: g.question, options: [], correctIndex: -1 }))
    }
    expect(new Set(items.map((i) => i.questionKey)).size).toBe(items.length)
  })

  it('keeps each passage whole, keyed by passage id as practice tests key it', () => {
    for (const p of SAT_PASSAGES.filter((x) => x.questions.length).slice(0, 20)) {
      const unit = sat.units.find((u) => u.passageId === p.id)
      if (!unit) continue // a passage sharing a question with an earlier one is skipped whole
      expect(unit.items).toHaveLength(p.questions.length)
      expect(unit.items[0].questionKey).toBe(
        questionKey({ question: p.questions[0].question, options: p.questions[0].options, correctIndex: p.questions[0].correctAnswer, passageId: p.id }),
      )
    }
    expect(sat.units.filter((u) => u.passageId).length).toBeGreaterThan(20)
  })
})

describe('filters and pool kinds', () => {
  it('section, discipline, topic and difficulty filters narrow the pool', () => {
    const cars = eligibleUnits(mcat, { sections: ['cars'] }, 'all', NOBODY)
    expect(cars.length).toBeGreaterThan(0)
    expect(cars.every((u) => u.section === 'cars')).toBe(true)
    const physics = eligibleUnits(mcat, { disciplines: ['Physics'] }, 'all', NOBODY)
    expect(physics.every((u) => u.discipline === 'Physics')).toBe(true)
    const topic = physics[0].topicSlug
    expect(eligibleUnits(mcat, { topics: [topic] }, 'all', NOBODY).every((u) => u.topicSlug === topic)).toBe(true)
    const hard = eligibleUnits(sat, { difficulties: ['hard'] }, 'all', NOBODY)
    expect(hard.length).toBeGreaterThan(0)
    expect(hard.every((u) => u.items.some((i) => i.difficulty === 'hard'))).toBe(true)
  })

  it("'unused' drops any passage with an answered question; 'incorrect'/'flagged' keep the whole passage", () => {
    const passage = sat.units.find((u) => u.passageId && u.items.length > 1)!
    const discrete = sat.units.find((u) => !u.passageId)!
    const seen: QbankStudentState = { ...NOBODY, seenKeys: new Set([passage.items[1].questionKey, discrete.items[0].questionKey]) }
    const unused = eligibleUnits(sat, {}, 'unused', seen)
    expect(unused.find((u) => u.id === passage.id)).toBeUndefined()
    expect(unused.find((u) => u.id === discrete.id)).toBeUndefined()
    expect(questionCount(unused)).toBe(questionCount(sat.units) - passage.items.length - 1)

    const mistakes: QbankStudentState = { ...NOBODY, incorrectKeys: new Set([passage.items[1].questionKey]), flaggedKeys: new Set([discrete.items[0].questionKey]) }
    expect(eligibleUnits(sat, {}, 'incorrect', mistakes).map((u) => u.id)).toEqual([passage.id])
    expect(eligibleUnits(sat, {}, 'flagged', mistakes).map((u) => u.id)).toEqual([discrete.id])
  })
})

describe('set assembly', () => {
  const cand = (key: string, passageId: string | null, correct = 1): QbankCandidate => ({
    questionKey: key, section: 'math', discipline: 'Algebra', topicSlug: 't', difficulty: null, lowYield: false, passageId,
    question: `Q ${key}`, options: ['a', 'b', 'c', 'd'], correctIndex: correct, explanation: 'because', passage: passageId ? { id: passageId, title: 'P', body: 'text' } : null,
  })
  const passageUnit = (id: string, n: number): QbankUnit => ({
    id: `psg:${id}`, passageId: id, section: 'math', discipline: 'Algebra', topicSlug: 't',
    items: Array.from({ length: n }, (_, i) => cand(`${id}-${i}`, id, i % 4)),
  })
  const discreteUnit = (key: string): QbankUnit => ({ id: key, passageId: null, section: 'math', discipline: 'Algebra', topicSlug: 't', items: [cand(key, null)] })

  it('never splits a passage and fills to the count with discretes', () => {
    const units = [passageUnit('p1', 6), passageUnit('p2', 5), ...Array.from({ length: 30 }, (_, i) => discreteUnit(`d${i}`))]
    for (let seed = 0; seed < 25; seed++) {
      let s = seed + 1
      const rng = () => ((s = (s * 16807) % 2147483647) / 2147483647)
      const picked = pickUnits(units, 20, rng)
      expect(questionCount(picked)).toBe(20)
      const items = freezeItems(picked, `salt${seed}`)
      for (const pid of ['p1', 'p2']) {
        const at = items.map((it, i) => (it.passage?.id === pid ? i : -1)).filter((i) => i >= 0)
        if (!at.length) continue
        expect(at.length).toBe(pid === 'p1' ? 6 : 5)
        expect(at[at.length - 1] - at[0]).toBe(at.length - 1) // consecutive
        expect(items.slice(at[0], at[0] + at.length).map((i) => i.questionKey)).toEqual(Array.from({ length: at.length }, (_, k) => `${pid}-${k}`))
      }
    }
  })

  it('serves a whole passage even when it is bigger than a tiny request', () => {
    const picked = pickUnits([passageUnit('big', 7)], 5)
    expect(picked).toHaveLength(1)
    expect(questionCount(picked)).toBe(7)
  })

  it('shuffles options with the key remapped to the same text', () => {
    const units = Array.from({ length: 40 }, (_, i) => discreteUnit(`k${i}`))
    const items = freezeItems(units, 'abc')
    for (const it of items) expect(it.options[it.correctIndex]).toBe('b')
    expect(new Set(items.map((i) => i.correctIndex)).size).toBeGreaterThan(1)
    expect(items.map((i) => i.index)).toEqual(items.map((_, i) => i))
  })
})
