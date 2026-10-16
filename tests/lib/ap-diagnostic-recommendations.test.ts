/**
 * Every AP diagnostic recommendation must resolve to a production topic.
 *
 * Phase 2 (Oct 2026): 41% of served AP Biology items carried legacy
 * `ap-bio-*` slugs, 13% of Calc AB items carried lesson keys such as
 * `implicit-differentiation-calcab`, and Physics 2 / Physics C items carried
 * pre-2024 sub-slugs. None had a Topic row, so a miss recommended a page that
 * 404'd and plan-status could never clear it. Items now carry the production
 * topic whose lesson teaches them (src/lib/ap-topic-canonical.ts plus the
 * per-item exceptions beside each generator), and stored attempts are mapped
 * the same way when read.
 *
 * The fixture lists every production AP topic that renders a lesson. AP
 * Calculus BC also recommends AB topics: its course page renders the AB units
 * as its foundation.
 */
import { describe, it, expect } from 'vitest'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'
import { AP_DIAGNOSTICS } from './ap-diagnostic-registry'
import {
  AP_CANONICAL_TOPIC_NAMES,
  AP_LEGACY_TOPIC_SLUGS,
  canonicalApTopicSlug,
  canonicalizeDiagnosticResults,
  canonicalizeRecommendedTopics,
  diagnosticItemKey,
} from '@/lib/ap-topic-canonical'
import { BIO_ITEM_TOPIC_EXCEPTIONS } from '@/data/ap-biology-diagnostic'
import { PHYSICS2_ITEM_TOPIC_EXCEPTIONS } from '@/data/ap-physics-2-diagnostic'
import { PCEM_ITEM_TOPIC_EXCEPTIONS } from '@/data/ap-physics-c-em-diagnostic'
import { PCMECH_ITEM_TOPIC_EXCEPTIONS } from '@/data/ap-physics-c-mechanics-diagnostic'
import { apBioQuestionPool } from '@/data/exit-quizzes/ap-biology'
import { apPhysics2QuestionPool } from '@/data/exit-quizzes/ap-physics-2'
import { apPhysicsCEMQuestionPool } from '@/data/exit-quizzes/ap-physics-c-em'
import { apPhysicsCMechQuestionPool } from '@/data/exit-quizzes/ap-physics-c-mechanics'

const FIXTURE = slugsByCourse as Record<string, string[]>
/** Courses whose pages also render another course's units. */
const ALSO_RENDERS: Record<string, string[]> = { 'ap-calculus-bc': ['ap-calculus-ab'] }

function allowed(course: string): Set<string> {
  return new Set([course, ...(ALSO_RENDERS[course] ?? [])].flatMap((c) => FIXTURE[c] ?? []))
}

/** Answer patterns that drive every domain through weak, moderate and strong. */
function answerPatterns(questions: { correctAnswer: number; options: string[]; domain: string }[], domains: string[]): Record<number, number>[] {
  const wrong = (i: number) => (questions[i].correctAnswer + 1) % questions[i].options.length
  const pats: Record<number, number>[] = [{}, {}, {}]
  questions.forEach((q, i) => {
    pats[0][i] = wrong(i)
    pats[1][i] = q.correctAnswer
    pats[2][i] = i % 2 ? q.correctAnswer : wrong(i)
  })
  // One domain wrong at a time, so each domain's missed slugs reach the top 5.
  for (const d of domains) {
    const p: Record<number, number> = {}
    questions.forEach((q, i) => { p[i] = q.domain === d ? wrong(i) : q.correctAnswer })
    pats.push(p)
  }
  return pats
}

describe('AP diagnostic recommendations resolve to production topics', () => {
  it('covers every AP course in the fixture', () => {
    expect(AP_DIAGNOSTICS.map((d) => d.course).sort()).toEqual(Object.keys(FIXTURE).sort())
  })

  describe.each(AP_DIAGNOSTICS.map((d) => [d.course, d] as const))('%s', (course, diag) => {
    const ok = allowed(course)

    it('every item on every form is tagged with a production topic', () => {
      const dead: string[] = []
      for (let form = 1; form <= diag.forms; form++) {
        for (const q of diag.generate(form).questions) {
          if (!ok.has(q.topicSlug)) dead.push(`form ${form}: ${q.topicSlug} (${q.question.slice(0, 50)})`)
        }
      }
      expect(dead).toEqual([])
    })

    it('every domain fallback slug is a production topic', () => {
      const dead = diag.domains.flatMap((d) => d.topicSlugs.filter((s) => !ok.has(s)).map((s) => `${d.id}: ${s}`))
      expect(dead).toEqual([])
    })

    it('every recommendation the scorer produces is a production topic', () => {
      const dead = new Set<string>()
      for (let form = 1; form <= diag.forms; form++) {
        const { questions } = diag.generate(form)
        for (const answers of answerPatterns(questions, diag.domains.map((d) => d.id))) {
          for (const t of diag.score(form, questions, answers).recommendedTopics) {
            if (!ok.has(canonicalApTopicSlug(course, t.slug))) dead.add(t.slug)
            expect(t.slug, 'scorer output is already canonical').toBe(canonicalApTopicSlug(course, t.slug))
          }
        }
      }
      expect([...dead]).toEqual([])
    })
  })

  // The pools these fixes touched: retagging and dropping items must not change form size or blueprint.
  it.each(['ap-biology', 'ap-calculus-ab', 'ap-calculus-bc', 'ap-physics-2', 'ap-physics-c-em', 'ap-physics-c-mechanics'])(
    '%s forms keep every domain at its question target',
    (course) => {
      const diag = AP_DIAGNOSTICS.find((d) => d.course === course)!
      for (let form = 1; form <= diag.forms; form++) {
        const { questions } = diag.generate(form)
        for (const d of diag.domains) expect(questions.filter((q) => q.domain === d.id).length, `form ${form} ${d.id}`).toBe(d.questionTarget)
        expect(questions.length).toBe(diag.domains.reduce((s, d) => s + d.questionTarget, 0))
      }
    },
  )
})

describe('legacy slug map (applied to stored attempts too)', () => {
  it('maps every legacy slug to a production topic of that course, never a real topic away', () => {
    for (const [course, map] of Object.entries(AP_LEGACY_TOPIC_SLUGS)) {
      const ok = allowed(course)
      for (const [legacy, target] of Object.entries(map)) {
        expect(ok.has(target), `${course}: ${legacy} -> ${target}`).toBe(true)
        expect(ok.has(legacy), `${course}: ${legacy} is itself a production topic`).toBe(false)
        expect(AP_CANONICAL_TOPIC_NAMES[target], `name for ${target}`).toBeTruthy()
      }
    }
  })

  it('covers the slugs the Phase 2 gap inventory found', () => {
    const bio = ['ap-bio-population-ecology', 'ap-bio-photosynthesis', 'ap-bio-chemistry-of-life', 'ap-bio-experimental-design', 'ap-bio-meiosis',
      'ap-bio-cell-structure-function', 'ap-bio-biotechnology', 'ap-bio-endocrine-system', 'ap-bio-cell-cycle-mitosis', 'ap-bio-cellular-energetics',
      'ap-bio-membrane-transport', 'ap-bio-gene-regulation', 'ap-bio-natural-selection', 'ap-bio-mendelian-genetics', 'ap-bio-cell-communication',
      'ap-bio-molecular-genetics', 'ap-bio-nervous-system', 'ap-bio-viral-biology', 'ap-bio-ecology-energy-flow', 'ap-bio-biogeochemical-cycles',
      'ap-bio-evolution-evidence', 'ap-bio-biodiversity', 'ap-bio-ecology-interactions', 'ap-bio-immune-system']
    for (const s of bio) expect(FIXTURE['ap-biology']).toContain(canonicalApTopicSlug('ap-biology', s))
    const calc = ['implicit-differentiation-calcab', 'derivatives-exp-log-calcab', 'concavity-inflection-points-calcab', 'related-rates-calcab', 'continuity-ivt-calcab', 'limits-at-infinity-calcab']
    for (const s of calc) {
      expect(FIXTURE['ap-calculus-ab']).toContain(canonicalApTopicSlug('ap-calculus-ab', s))
      expect(FIXTURE['ap-calculus-ab']).toContain(canonicalApTopicSlug('ap-calculus-bc', s))
    }
    // Lesson keys map to the production topic that renders that same suite.
    expect(canonicalApTopicSlug('ap-calculus-ab', 'implicit-differentiation-calcab')).toBe('implicit-differentiation')
    expect(canonicalApTopicSlug('ap-calculus-ab', 'concavity-inflection-points-calcab')).toBe('second-derivative-test')
  })

  it('is scoped by course', () => {
    // Physics 2's old 'atomic-structure' is not remapped for other courses.
    expect(canonicalApTopicSlug('ap-physics-2', 'atomic-structure')).toBe('photons-atomic-nuclear')
    expect(canonicalApTopicSlug('ap-chemistry', 'atomic-structure')).toBe('atomic-structure')
    expect(canonicalApTopicSlug(null, 'ap-bio-meiosis')).toBe('ap-bio-meiosis')
  })

  it('renames remapped recommendations and collapses duplicates (first wins)', () => {
    const out = canonicalizeRecommendedTopics('ap-biology', [
      { slug: 'ap-bio-immune-system', name: 'Immune System', priority: 'high' as const },
      { slug: 'cell-signaling', name: 'Cell Signaling', priority: 'medium' as const },
      { slug: 'meiosis', name: 'Meiosis', priority: 'medium' as const },
    ])
    expect(out).toEqual([
      { slug: 'cell-signaling', name: 'Cell Signaling and Signal Transduction', priority: 'high' },
      { slug: 'meiosis', name: 'Meiosis', priority: 'medium' },
    ])
  })

  it('maps a stored attempt by its category, recommendations and review tags alike', () => {
    const stored = {
      form: 3,
      recommendedTopics: [{ slug: 'implicit-differentiation-calcab', name: 'Implicit Differentiation Calcab', priority: 'high' }],
      review: { questions: [{ question: 'q', options: ['a', 'b'], correctAnswer: 0, topicSlug: 'related-rates-calcab' }], answers: [1] },
    }
    const out = canonicalizeDiagnosticResults('calcab-diagnostic-3', stored)
    expect(out.recommendedTopics).toEqual([{ slug: 'implicit-differentiation', name: 'Implicit Differentiation', priority: 'high' }])
    expect(out.review.questions[0].topicSlug).toBe('related-rates')
    expect(out.review.answers).toEqual([1])
    expect(stored.recommendedTopics[0].slug, 'input untouched').toBe('implicit-differentiation-calcab')
    // AAS stores under its short prefix.
    expect(canonicalizeDiagnosticResults('ap-aas-diagnostic-1', { recommendedTopics: [{ slug: 'aas-african-kingdoms', name: 'x' }] }).recommendedTopics[0].slug).toBe('aas-african-kingdoms')
    // Non-AP courses and odd shapes pass through as the same object.
    const mcat = { recommendedTopics: [{ slug: 'atomic-structure', name: 'Atomic Structure' }] }
    expect(canonicalizeDiagnosticResults('mcat-full-diagnostic', mcat)).toBe(mcat)
    expect(canonicalizeDiagnosticResults('ap-bio-diagnostic-1', null)).toBeNull()
    expect(canonicalizeDiagnosticResults('ap-bio-diagnostic-1', 'text')).toBe('text')
  })
})

describe('per-item exceptions', () => {
  const tables = [
    ['ap-biology', BIO_ITEM_TOPIC_EXCEPTIONS, apBioQuestionPool],
    ['ap-physics-2', PHYSICS2_ITEM_TOPIC_EXCEPTIONS, apPhysics2QuestionPool],
    ['ap-physics-c-em', PCEM_ITEM_TOPIC_EXCEPTIONS, apPhysicsCEMQuestionPool],
    ['ap-physics-c-mechanics', PCMECH_ITEM_TOPIC_EXCEPTIONS, apPhysicsCMechQuestionPool],
  ] as const

  it.each(tables)('%s: every key matches a pool item and every target is a production topic', (course, table, pool) => {
    const keys = new Set(pool.map((q) => diagnosticItemKey(q.question)))
    const ok = allowed(course)
    for (const [key, target] of Object.entries(table)) {
      expect(keys.has(key), `${course} exception ${key} matches no item (stem edited?)`).toBe(true)
      if (target !== null) expect(ok.has(target), `${course} ${key} -> ${target}`).toBe(true)
    }
  })

  it.each(tables)('%s: dropped items are never served', (course, table, pool) => {
    const diag = AP_DIAGNOSTICS.find((d) => d.course === course)!
    const dropped = new Set(Object.entries(table).filter(([, t]) => t === null).map(([k]) => k))
    expect(pool.some((q) => dropped.has(diagnosticItemKey(q.question))) || dropped.size === 0).toBe(true)
    for (let form = 1; form <= diag.forms; form++) {
      for (const q of diag.generate(form).questions) expect(dropped.has(diagnosticItemKey(q.question)), q.question.slice(0, 60)).toBe(false)
    }
  })

  it('the item key ignores case and whitespace', () => {
    expect(diagnosticItemKey('  Which  organelle\nmakes ATP? ')).toBe(diagnosticItemKey('which organelle makes atp?'))
    expect(diagnosticItemKey('a')).not.toBe(diagnosticItemKey('b'))
  })
})
