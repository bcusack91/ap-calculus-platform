import { describe, it, expect } from 'vitest'
import { arrangeInPassageBlocks, authoredQuestionIndex, toOrderingUnits } from '@/lib/mcat-diagnostic-order'

type Q = { id: string; passage?: { id: string } }
const standalone = (id: string): Q => ({ id })
const passageQ = (passageId: string, n: number): Q => ({
  id: `cars-authored-${passageId}-q${n}`,
  passage: { id: `authored-${passageId}` },
})
const ids = (qs: Q[]) => qs.map((q) => q.id)

/** Positions (1-based) of each passage's questions. */
function passagePositions(qs: Q[]): Map<string, number[]> {
  const pos = new Map<string, number[]>()
  qs.forEach((q, i) => {
    if (!q.passage) return
    const p = pos.get(q.passage.id) ?? []
    p.push(i + 1)
    pos.set(q.passage.id, p)
  })
  return pos
}
const isContiguous = (p: number[]) => p[p.length - 1] - p[0] === p.length - 1

describe('authoredQuestionIndex', () => {
  it('parses the authored question number from the id', () => {
    expect(authoredQuestionIndex('cars-authored-cars-art-02-q3')).toBe(3)
    expect(authoredQuestionIndex('psych-soc-authored-ps2-10-q12')).toBe(12)
  })
  it('sorts ids without one last', () => {
    expect(authoredQuestionIndex('gen-chem-mcat-general-chemistry-abc')).toBe(Number.POSITIVE_INFINITY)
  })
})

describe('arrangeInPassageBlocks', () => {
  // The reported bug: one passage's questions scattered through the test.
  const scattered: Q[] = [
    standalone('s1'),
    standalone('s2'),
    passageQ('cars-art-02', 2),
    standalone('s3'),
    passageQ('ps-soc-01', 5),
    passageQ('cars-art-02', 0),
    standalone('s4'),
    passageQ('ps-soc-01', 4),
    passageQ('cars-art-02', 3),
    passageQ('cars-art-02', 1),
  ]

  it('puts every passage in one consecutive block, in authored order', () => {
    const out = arrangeInPassageBlocks(scattered)
    for (const p of passagePositions(out).values()) expect(isContiguous(p)).toBe(true)
    expect(ids(out)).toEqual([
      's1',
      's2',
      'cars-authored-cars-art-02-q0',
      'cars-authored-cars-art-02-q1',
      'cars-authored-cars-art-02-q2',
      'cars-authored-cars-art-02-q3',
      's3',
      'cars-authored-ps-soc-01-q4',
      'cars-authored-ps-soc-01-q5',
      's4',
    ])
  })

  it('never adds or drops a question', () => {
    const out = arrangeInPassageBlocks(scattered)
    expect(out).toHaveLength(scattered.length)
    expect(new Set(ids(out))).toEqual(new Set(ids(scattered)))
  })

  it('is idempotent', () => {
    const once = arrangeInPassageBlocks(scattered)
    expect(arrangeInPassageBlocks(once)).toEqual(once)
  })

  it('leaves an all-standalone test unchanged', () => {
    const qs = [standalone('a'), standalone('b'), standalone('c')]
    expect(arrangeInPassageBlocks(qs)).toEqual(qs)
  })

  it('shuffles whole units without ever splitting a passage block', () => {
    // Deterministic "shuffle": reverse the unit order.
    const out = arrangeInPassageBlocks(scattered, (units) => [...units].reverse())
    for (const p of passagePositions(out).values()) expect(isContiguous(p)).toBe(true)
    expect(ids(out)[0]).toBe('s4')
    expect(out).toHaveLength(scattered.length)
  })
})

describe('toOrderingUnits', () => {
  it('makes one unit per passage and per standalone question', () => {
    const units = toOrderingUnits([
      standalone('a'),
      passageQ('p1', 1),
      passageQ('p1', 0),
      standalone('b'),
    ])
    expect(units.map((u) => u.map((q) => q.id))).toEqual([
      ['a'],
      ['cars-authored-p1-q0', 'cars-authored-p1-q1'],
      ['b'],
    ])
  })
})
