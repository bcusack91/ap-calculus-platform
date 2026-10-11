/**
 * SAT form versions. Version 1 must keep rebuilding byte-for-byte (past
 * attempts are graded and reviewed by replaying the draw); version 2 skips
 * SAT_FORM_V2_EXCLUDED and must still fill every module to the blueprint.
 *
 * tests/fixtures/sat-form-v1-fingerprints.json holds a sha256 of every v1 form
 * (5 SAT forms x 9 route pairs, 5 mini tests, 3 PSAT forms x 9 route pairs)
 * as built by the pre-versioning builder (HEAD 259dc7e3). If SAT pool or
 * passage CONTENT is deliberately edited, v1 forms change and past attempts no
 * longer replay exactly; only then regenerate it with
 *   SAT_V1_FINGERPRINT_WRITE=1 npx vitest run tests/lib/sat-form-v2.test.ts
 */
import { describe, it, expect } from 'vitest'
import { createHash } from 'crypto'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import {
  buildPsatForm,
  buildSatForm,
  CURRENT_SAT_FORM_VERSION,
  generateFullTest,
  generateMiniTest,
  generatePsatFullTest,
  routedModule2,
  satFormCandidateIds,
  satFormVersion,
  PRACTICE_FORM_COUNT,
  PSAT_FORM_COUNT,
  type SATFullTest,
  type SatFormVersion,
  type SatRoute,
} from '@/data/sat-practice/test-generator'
import { SAT_FORM_V2_EXCLUDED } from '@/data/sat-practice/form-v2-exclusions'
import { SAT_PASSAGES } from '@/data/sat-passages'

const FIXTURE = path.resolve(__dirname, '../fixtures/sat-form-v1-fingerprints.json')
const ROUTES: (SatRoute | null)[] = [null, 'harder', 'easier']
const sha = (x: unknown) => createHash('sha256').update(JSON.stringify(x)).digest('hex')
const ids = (f: SATFullTest) => f.sections.map((s) => s.questions.map((q) => q.id))
const stem = (q: { question: string; passage?: { id: string } }) =>
  (q.passage ? `${q.passage.id}|` : '') + q.question.replace(/\s+/g, ' ').trim().toLowerCase()

/** Every form a student can be served, keyed as in the fixture. */
async function allForms(version: SatFormVersion): Promise<[string, SATFullTest][]> {
  const out: [string, SATFullTest][] = []
  for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
    for (const rw of ROUTES) for (const m of ROUTES) out.push([`sat:full:${n}:${rw}:${m}`, await buildSatForm(n, 'full', rw, m, version)])
    out.push([`sat:mini:${n}`, await buildSatForm(n, 'mini', null, null, version)])
  }
  for (let n = 1; n <= PSAT_FORM_COUNT; n++) {
    for (const rw of ROUTES) for (const m of ROUTES) out.push([`psat:full:${n}:${rw}:${m}`, await buildPsatForm(n, rw, m, version)])
  }
  return out
}

const RW_QUOTA = { 'craft-structure': 8, 'information-ideas': 7, conventions: 7, expression: 5 }
const MATH_QUOTA = { algebra: 8, advanced: 8, 'problem-solving': 3, geometry: 3 }

/** Ids of every question on a passage that has any excluded question. */
const excludedPassageIds = new Set(
  SAT_PASSAGES.filter((p) => p.questions.some((_, i) => SAT_FORM_V2_EXCLUDED.has(`sat-passage-${p.id}-q${i}`))).map((p) => p.id),
)

describe('SAT form versions', { timeout: 300_000 }, () => {
  it('v1 forms are byte-identical to the pre-versioning builder', async () => {
    const forms = await allForms(1)
    const now = Object.fromEntries(forms.map(([k, f]) => [k, sha(f)]))
    if (process.env.SAT_V1_FINGERPRINT_WRITE) writeFileSync(FIXTURE, JSON.stringify(now, null, 2) + '\n')
    const frozen = JSON.parse(readFileSync(FIXTURE, 'utf8')) as Record<string, string>
    expect(Object.keys(frozen)).toHaveLength(5 * 9 + 5 + 3 * 9)
    expect(now).toEqual(frozen)
    for (const [, f] of forms) expect('formVersion' in f).toBe(false)
  })

  it('new tests default to the current version (2)', async () => {
    expect(CURRENT_SAT_FORM_VERSION).toBe(2)
    expect((await buildSatForm(1, 'full')).formVersion).toBe(2)
    expect((await buildSatForm(1, 'mini')).formVersion).toBe(2)
    expect((await buildPsatForm(1)).formVersion).toBe(2)
    expect((await generateFullTest(1)).formVersion).toBe(2)
    expect((await generateMiniTest(1)).formVersion).toBe(2)
    expect((await generatePsatFullTest(1)).formVersion).toBe(2)
    expect(await buildSatForm(1, 'full')).toBe(await buildSatForm(1, 'full', null, null, 2))
    expect(await buildSatForm(1, 'full')).not.toBe(await buildSatForm(1, 'full', null, null, 1))
  })

  it('coerces stored versions: anything but 2 is v1', () => {
    expect(satFormVersion(2)).toBe(2)
    for (const v of [1, undefined, null, 3, '2']) expect(satFormVersion(v)).toBe(1)
  })

  it('routedModule2 keeps the version the test was started on', async () => {
    for (const v of [1, 2] as SatFormVersion[]) {
      const base = await buildSatForm(2, 'full', null, null, v)
      const routed = await buildSatForm(2, 'full', 'harder', 'easier', v)
      expect((await routedModule2(base, 1, 'harder')).questions.map((q) => q.id)).toEqual(routed.sections[1].questions.map((q) => q.id))
      expect((await routedModule2(base, 3, 'easier')).questions.map((q) => q.id)).toEqual(routed.sections[3].questions.map((q) => q.id))
      const psatBase = await buildPsatForm(3, null, null, v)
      const psatRouted = await buildPsatForm(3, 'easier', 'harder', v)
      expect((await routedModule2(psatBase, 3, 'harder')).questions.map((q) => q.id)).toEqual(psatRouted.sections[3].questions.map((q) => q.id))
    }
    // A plain { testNumber, format } (no formVersion) is a v1 test.
    const legacy = await routedModule2({ testNumber: 2, format: 'full' }, 1, 'harder')
    expect(legacy.questions.map((q) => q.id)).toEqual((await buildSatForm(2, 'full', 'harder', null, 1)).sections[1].questions.map((q) => q.id))
  })

  it('every excluded id is a real pool item or passage question', async () => {
    const candidates = await satFormCandidateIds()
    const stale = [...SAT_FORM_V2_EXCLUDED].filter((id) => !candidates.has(id))
    expect(stale).toEqual([])
  })

  it('v2 forms differ from v1 and never carry an excluded item or passage', async () => {
    const v1 = new Map(await allForms(1))
    let differing = 0
    for (const [key, f] of await allForms(2)) {
      expect(f.formVersion, key).toBe(2)
      if (JSON.stringify(ids(f)) !== JSON.stringify(ids(v1.get(key)!))) differing++
      for (const q of f.sections.flatMap((s) => s.questions)) {
        expect(SAT_FORM_V2_EXCLUDED.has(q.id), `${key}: ${q.id}`).toBe(false)
        if (q.passage) expect(excludedPassageIds.has(q.passage.id), `${key}: passage ${q.passage.id}`).toBe(false)
      }
    }
    expect(differing).toBeGreaterThan(0)
  })

  it('v2 fills every module to the blueprint with no repeated stem', async () => {
    const bases = new Map<string, SATFullTest>()
    for (const [key, f] of await allForms(2)) {
      const baseKey = key.replace(/:(null|harder|easier):(null|harder|easier)$/, ':null:null')
      if (key === baseKey) bases.set(key, f)
      expect(f.totalQuestions, key).toBe(f.format === 'mini' ? 49 : 98)
      f.sections.forEach((s, i) => {
        expect(s.questions, `${key} ${s.id}`).toHaveLength(s.questionCount)
        const counts: Record<string, number> = {}
        for (const q of s.questions) counts[q.domain ?? '?'] = (counts[q.domain ?? '?'] ?? 0) + 1
        expect(counts, `${key} ${s.id}`).toEqual(s.section === 'math' ? MATH_QUOTA : RW_QUOTA)
        if (s.section === 'math') expect(s.questions.filter((q) => q.gridIn), `${key} ${s.id}`).toHaveLength(6)
        else expect(s.questions.some((q) => q.passage), `${key} ${s.id}`).toBe(true)
        // A routed Module 2 must be a real routed build, not the pre-built
        // module kept because its tier was too thin to fill.
        if (s.moduleNum === 2 && s.tier) {
          const base = bases.get(baseKey)!
          expect(s.questions.map((q) => q.id), `${key} ${s.id}`).not.toEqual(base.sections[i].questions.map((q) => q.id))
        }
      })
      const stems = f.sections.flatMap((s) => s.questions.map(stem))
      expect(new Set(stems).size, key).toBe(stems.length)
    }
  })
})
