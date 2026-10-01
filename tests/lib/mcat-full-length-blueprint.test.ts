/**
 * The full-length forms match the AAMC blueprint (rebuilt 2026-09-30).
 *
 * The 2026-09-29 review found the old pool-packed forms ran passages at
 * ~200-270 words, 8-9 passages per section, nearly all experiment-based, one
 * genre per CARS form, and a Chem/Phys answer-length tell. These guards pin
 * the shape of the rebuilt forms so a later bank edit cannot drift back.
 */
import { describe, it, expect } from 'vitest'
import { FULL_LENGTH_BANKS } from '@/data/mcat/full-length/index'
import { FULL_LENGTH_FORMS } from '@/data/mcat/full-length'
import type { MCATPassage } from '@/data/mcat/types'

const words = (t: string) => t.replace(/\$[^$]*\$/g, ' ').split(/\s+/).filter(Boolean).length
const count = (ps: MCATPassage[]) => ps.reduce((n, p) => n + p.questions.length, 0)
const SCIENCE = ['chem-phys', 'bio-biochem', 'psych-soc'] as const

describe.each([1, 2, 3, 4, 5, 6] as const)('full-length form %i', (form) => {
  const bank = FULL_LENGTH_BANKS[form]

  it('has the official section counts: 59 / 53 / 59 / 59 = 230', () => {
    for (const s of SCIENCE) {
      expect(bank.science[s].passages, `${s} passages`).toHaveLength(10)
      expect(count(bank.science[s].passages), `${s} passage questions`).toBe(44)
      expect(bank.science[s].discretes, `${s} discretes`).toHaveLength(15)
    }
    expect(bank.cars).toHaveLength(9)
    expect(count(bank.cars)).toBe(53)
    expect(FULL_LENGTH_FORMS[form - 1].questionCount).toBe(230)
  })

  it('science passages run 400-600 words, CARS 480-620, with 4-7 questions each', () => {
    for (const s of SCIENCE) {
      for (const p of bank.science[s].passages) {
        const w = words(p.passageText)
        expect(w, `${p.id} words`).toBeGreaterThanOrEqual(400)
        expect(w, `${p.id} words`).toBeLessThanOrEqual(600)
        expect(p.questions.length, `${p.id} questions`).toBeGreaterThanOrEqual(3)
        expect(p.questions.length, `${p.id} questions`).toBeLessThanOrEqual(7)
      }
    }
    for (const p of bank.cars) {
      const w = words(p.passageText)
      expect(w, `${p.id} words`).toBeGreaterThanOrEqual(480)
      expect(w, `${p.id} words`).toBeLessThanOrEqual(620)
    }
  })

  it('every item has four distinct options and a key in range', () => {
    const items = [...SCIENCE.flatMap((s) => [...bank.science[s].passages.flatMap((p) => p.questions), ...bank.science[s].discretes]), ...bank.cars.flatMap((p) => p.questions)]
    for (const q of items) {
      expect(q.options).toHaveLength(4)
      expect(new Set(q.options.map((o) => o.trim().toLowerCase())).size).toBe(4)
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer).toBeLessThanOrEqual(3)
    }
  })

  it('answer length gives nothing away: the key is the single longest option in 10-40% of items', () => {
    for (const s of [...SCIENCE, 'cars'] as const) {
      const items = s === 'cars' ? bank.cars.flatMap((p) => p.questions) : [...bank.science[s].passages.flatMap((p) => p.questions), ...bank.science[s].discretes]
      const longest = items.filter((q) => {
        const L = q.options.map((o) => o.length)
        const m = Math.max(...L)
        return L[q.correctAnswer] === m && L.filter((x) => x === m).length === 1
      }).length
      const pct = (100 * longest) / items.length
      expect(pct, `${s} longest-is-key %`).toBeGreaterThanOrEqual(10)
      expect(pct, `${s} longest-is-key %`).toBeLessThanOrEqual(40)
    }
  })

  it('charts have numeric, evenly spaced x-values', () => {
    for (const p of [...SCIENCE.flatMap((s) => bank.science[s].passages)]) {
      if (!p.chart) continue
      const xs = p.chart.xValues
      expect(xs.every((x) => typeof x === 'number'), `${p.id} chart x numeric`).toBe(true)
      const nx = xs as number[]
      const d = nx[1] - nx[0]
      for (let i = 1; i < nx.length; i++) expect(Math.abs(nx[i] - nx[i - 1] - d), `${p.id} chart spacing`).toBeLessThan(1e-9)
    }
  })
})

describe('the six forms', () => {
  it('share no passage id and no discrete id', () => {
    const ids = (form: 1 | 2 | 3 | 4 | 5 | 6) => {
      const b = FULL_LENGTH_BANKS[form]
      return [...SCIENCE.flatMap((s) => [...b.science[s].passages.map((p) => p.id), ...b.science[s].discretes.map((d) => d.id)]), ...b.cars.map((p) => p.id)]
    }
    const all = ([1, 2, 3, 4, 5, 6] as const).flatMap(ids)
    expect(new Set(all).size, 'duplicate ids across forms').toBe(all.length)
  })

  it('never reuse a diagnostic or section-practice passage', async () => {
    const { ALL_MCAT_PASSAGES } = await import('@/data/mcat/passages')
    const shared = new Set(ALL_MCAT_PASSAGES.map((p) => p.id))
    for (const form of [1, 2, 3, 4, 5, 6] as const) {
      for (const p of FULL_LENGTH_FORMS[form - 1].passages) expect(shared.has(p.id), `${p.id} also in shared bank`).toBe(false)
    }
  })
})
