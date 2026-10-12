/**
 * SAT form version 3 (current): the v2 build minus SAT_FORM_V3_EXCLUDED (v2's
 * list plus the "lesson drill" conventions items and weak-distractor items),
 * plus the SAT-format conventions bank (v3-bank/conventions.ts) and the Craft
 * and Structure lesson pools (sat-text-structure-purpose,
 * sat-cross-text-connections). v1 and v2 stay frozen (sat-form-v2.test.ts).
 *
 * Once v3 content is final (bank + lesson pools), freeze v3 too:
 *   SAT_V3_FINGERPRINT_WRITE=1 npx vitest run tests/lib/sat-form-v3.test.ts
 * writes tests/fixtures/sat-form-v3-fingerprints.json; from then on the
 * fingerprint test fails on any change to a v3 form.
 */
import { describe, it, expect } from 'vitest'
import { createHash } from 'crypto'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import {
  buildPsatForm,
  buildSatForm,
  CURRENT_SAT_FORM_VERSION,
  generateFullTest,
  generateMiniTest,
  generatePsatFullTest,
  RW_DOMAIN_SLUGS,
  rwDomainSlugs,
  satFormCandidateIds,
  satFormExclusions,
  PRACTICE_FORM_COUNT,
  PSAT_FORM_COUNT,
  type RWDomain,
  type SATFullTest,
  type SatRoute,
} from '@/data/sat-practice/test-generator'
import { SAT_FORM_V2_EXCLUDED } from '@/data/sat-practice/form-v2-exclusions'
import { SAT_FORM_V3_ADDED, SAT_FORM_V3_EXCLUDED } from '@/data/sat-practice/form-v3-exclusions'
import { SAT_V3_CONVENTIONS } from '@/data/sat-practice/v3-bank/conventions'
import { SAT_PASSAGES } from '@/data/sat-passages'

const FIXTURE_V3 = path.resolve(__dirname, '../fixtures/sat-form-v3-fingerprints.json')
const ROUTES: (SatRoute | null)[] = [null, 'harder', 'easier']
const sha = (x: unknown) => createHash('sha256').update(JSON.stringify(x)).digest('hex')
const stem = (q: { question: string; passage?: { id: string } }) =>
  (q.passage ? `${q.passage.id}|` : '') + q.question.replace(/\s+/g, ' ').trim().toLowerCase()

async function allForms(): Promise<[string, SATFullTest][]> {
  const out: [string, SATFullTest][] = []
  for (let n = 1; n <= PRACTICE_FORM_COUNT; n++) {
    for (const rw of ROUTES) for (const m of ROUTES) out.push([`sat:full:${n}:${rw}:${m}`, await buildSatForm(n, 'full', rw, m, 3)])
    out.push([`sat:mini:${n}`, await buildSatForm(n, 'mini', null, null, 3)])
  }
  for (let n = 1; n <= PSAT_FORM_COUNT; n++) {
    for (const rw of ROUTES) for (const m of ROUTES) out.push([`psat:full:${n}:${rw}:${m}`, await buildPsatForm(n, rw, m, 3)])
  }
  return out
}

const RW_QUOTA = { 'craft-structure': 8, 'information-ideas': 7, conventions: 7, expression: 5 }
const MATH_QUOTA = { algebra: 8, advanced: 8, 'problem-solving': 3, geometry: 3 }
const CONVENTIONS_SLUGS = new Set(RW_DOMAIN_SLUGS.conventions)

const excludedPassageIds = new Set(
  SAT_PASSAGES.filter((p) => p.questions.some((_, i) => SAT_FORM_V3_EXCLUDED.has(`sat-passage-${p.id}-q${i}`))).map((p) => p.id),
)

describe('SAT form v3', { timeout: 300_000 }, () => {
  it('is the current version: every builder defaults to it', async () => {
    expect(CURRENT_SAT_FORM_VERSION).toBe(3)
    expect((await buildSatForm(1, 'full')).formVersion).toBe(3)
    expect((await buildSatForm(1, 'mini')).formVersion).toBe(3)
    expect((await buildPsatForm(1)).formVersion).toBe(3)
    expect((await generateFullTest(1)).formVersion).toBe(3)
    expect((await generateMiniTest(1)).formVersion).toBe(3)
    expect((await generatePsatFullTest(1)).formVersion).toBe(3)
    expect(await buildSatForm(1, 'full')).toBe(await buildSatForm(1, 'full', null, null, 3))
  })

  it('excludes the whole v2 list plus its own additions, all real candidates', async () => {
    for (const id of SAT_FORM_V2_EXCLUDED) expect(SAT_FORM_V3_EXCLUDED.has(id), id).toBe(true)
    expect(SAT_FORM_V3_ADDED.size).toBeGreaterThan(40)
    for (const id of SAT_FORM_V3_ADDED) expect(SAT_FORM_V2_EXCLUDED.has(id), id).toBe(false)
    expect(SAT_FORM_V3_EXCLUDED.size).toBe(SAT_FORM_V2_EXCLUDED.size + SAT_FORM_V3_ADDED.size)
    expect(satFormExclusions(3)).toBe(SAT_FORM_V3_EXCLUDED)
    expect(satFormExclusions(2)).toBe(SAT_FORM_V2_EXCLUDED)
    expect(satFormExclusions(1)).toBeNull()
    const candidates = await satFormCandidateIds()
    expect([...SAT_FORM_V3_ADDED].filter((id) => !candidates.has(id))).toEqual([])
  })

  it('adds the Craft and Structure lesson pools on v3 only', () => {
    for (const d of Object.keys(RW_DOMAIN_SLUGS) as RWDomain[]) {
      expect(rwDomainSlugs(d, 1)).toBe(RW_DOMAIN_SLUGS[d])
      expect(rwDomainSlugs(d, 2)).toBe(RW_DOMAIN_SLUGS[d])
    }
    expect(RW_DOMAIN_SLUGS['craft-structure']).toEqual(['sat-vocabulary-context'])
    expect(rwDomainSlugs('craft-structure', 3)).toEqual(['sat-vocabulary-context', 'sat-text-structure-purpose', 'sat-cross-text-connections'])
    expect(rwDomainSlugs('conventions', 3)).toEqual(RW_DOMAIN_SLUGS.conventions)
  })

  it('the conventions bank is well formed and files every item under a conventions lesson', () => {
    const ids = new Set<string>()
    for (const b of SAT_V3_CONVENTIONS) {
      expect(ids.has(b.id), b.id).toBe(false)
      ids.add(b.id)
      expect(CONVENTIONS_SLUGS.has(b.topicSlug), `${b.id}: ${b.topicSlug}`).toBe(true)
      expect(b.correctIndex, b.id).toBeGreaterThanOrEqual(0)
      expect(b.correctIndex, b.id).toBeLessThan(b.options.length)
      expect(b.optionExplanations, b.id).toHaveLength(b.options.length)
      expect(['easy', 'medium', 'hard']).toContain(b.difficulty)
    }
  })

  it('v3 forms carry no excluded item or passage, fill every quota, repeat no stem and never fall back', async () => {
    const forms = await allForms()
    const bases = new Map<string, SATFullTest>()
    const bank = new Map(SAT_V3_CONVENTIONS.map((b) => [b.id, b]))
    for (const [key, f] of forms) {
      const baseKey = key.replace(/:(null|harder|easier):(null|harder|easier)$/, ':null:null')
      if (key === baseKey) bases.set(key, f)
      expect(f.formVersion, key).toBe(3)
      expect(f.totalQuestions, key).toBe(f.format === 'mini' ? 49 : 98)
      f.sections.forEach((s, i) => {
        expect(s.questions, `${key} ${s.id}`).toHaveLength(s.questionCount)
        const counts: Record<string, number> = {}
        for (const q of s.questions) counts[q.domain ?? '?'] = (counts[q.domain ?? '?'] ?? 0) + 1
        expect(counts, `${key} ${s.id}`).toEqual(s.section === 'math' ? MATH_QUOTA : RW_QUOTA)
        if (s.section === 'math') expect(s.questions.filter((q) => q.gridIn), `${key} ${s.id}`).toHaveLength(6)
        else expect(s.questions.some((q) => q.passage), `${key} ${s.id}`).toBe(true)
        if (s.moduleNum === 2 && s.tier) {
          const base = bases.get(baseKey)!
          expect(s.questions.map((q) => q.id), `${key} ${s.id}`).not.toEqual(base.sections[i].questions.map((q) => q.id))
        }
        for (const q of s.questions) {
          expect(SAT_FORM_V3_EXCLUDED.has(q.id), `${key}: ${q.id}`).toBe(false)
          if (q.passage) expect(excludedPassageIds.has(q.passage.id), `${key}: passage ${q.passage.id}`).toBe(false)
          const b = bank.get(q.id)
          if (b) {
            // Bank items keep their authored order, topic, tier and explanations.
            expect(q).toMatchObject({
              sourceSlug: b.topicSlug,
              domain: 'conventions',
              difficulty: b.difficulty,
              options: b.options,
              correctIndex: b.correctIndex,
              optionExplanations: b.optionExplanations,
            })
          }
        }
      })
      const stems = f.sections.flatMap((s) => s.questions.map(stem))
      expect(new Set(stems).size, key).toBe(stems.length)
    }
  })

  it('v3 forms differ from v2', async () => {
    const v3 = await buildSatForm(1, 'full', null, null, 3)
    const v2 = await buildSatForm(1, 'full', null, null, 2)
    expect(JSON.stringify(v3.sections.map((s) => s.questions.map((q) => q.id)))).not.toBe(
      JSON.stringify(v2.sections.map((s) => s.questions.map((q) => q.id))),
    )
  })

  it.skipIf(!existsSync(FIXTURE_V3) && !process.env.SAT_V3_FINGERPRINT_WRITE)('v3 forms are byte-identical to the frozen v3 build', async () => {
    const forms = await allForms()
    const now = Object.fromEntries(forms.map(([k, f]) => [k, sha(f)]))
    if (process.env.SAT_V3_FINGERPRINT_WRITE) writeFileSync(FIXTURE_V3, JSON.stringify(now, null, 2) + '\n')
    const frozen = JSON.parse(readFileSync(FIXTURE_V3, 'utf8')) as Record<string, string>
    expect(Object.keys(frozen)).toHaveLength(5 * 9 + 5 + 3 * 9)
    expect(now).toEqual(frozen)
  })
})
