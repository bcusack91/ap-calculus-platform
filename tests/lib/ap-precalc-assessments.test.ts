/**
 * AP Precalculus assessment surfaces (precalc-final Wave 1, F4).
 *
 * The exam assesses three CED units; Unit 4 is not on it and the owner rule is
 * "not on the exam = not in the program". Every surface here must (a) be
 * blueprinted to those three units, (b) tag items with the canonical lesson
 * slugs in src/lib/course-includes.ts PRECALC_CATEGORIES so a miss sends the
 * student to the live lesson, and (c) carry none of the trimmed content.
 * It also pins the study-plan diagnostic prefixes, which drifted from the
 * category the diagnostic page stores and silently disabled personalization.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

import {
  AP_PRECALCULUS_DOMAINS,
  AP_PRECALCULUS_PENDING_TOPIC_FALLBACK,
  AP_PRECALC_OFF_EXAM_PATTERNS,
  TOTAL_FORMS,
  apPrecalcDiagnosticQuestionPool,
  apPrecalcRecommendationSlug,
  generateAPPrecalculusDiagnosticTest,
  isApPrecalcOffExam,
  scoreAPPrecalculusDiagnostic,
  type DiagnosticFormNumber,
} from '@/data/ap-precalculus-diagnostic'
import { PRECALC_DOMAINS, generatePreCalcDiagnosticTest } from '@/data/precalculus-diagnostic'
import { PRECALC_CATEGORIES, PRECALC_TOPIC_TITLES } from '@/lib/course-includes'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { AP_PRECALC_PLANS, config as apPlanConfig } from '@/data/ap-precalc-study-plans'
import { PRECALCULUS_PLANS, config as nonApPlanConfig } from '@/data/precalculus-study-plans'
import { TOPIC_SLUGS as DAILY_SLUGS } from '@/data/ap-precalculus-daily-question'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { AP_PRECALCULUS_UNITS, AP_PRECALCULUS_UNIT_ASSIGNMENT, AP_PRECALCULUS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-precalculus'
import { PRECALCULUS_UNITS, PRECALCULUS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/precalculus'
import { config as practiceConfig } from '@/data/ap-precalc-practice/config'
import { getPrecalcFRQs } from '@/data/ap-precalc-frq/questions'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'

const ROOT = process.cwd()
const FIXTURE = new Set((slugsByCourse as Record<string, string[]>)['ap-precalculus'])

/** Canonical lesson slugs per CED unit (PLAN.md); the exam-prep section has no lessons yet. */
const UNIT_OF: Record<string, string> = {}
const CANONICAL = new Set<string>()
const CATEGORY_TO_DOMAIN: Record<string, string> = {
  'precalc-polynomial-rational': 'polynomial-rational',
  'precalc-exponential-logarithmic': 'exponential-logarithmic',
  'precalc-trig-functions': 'trigonometric',
}
for (const cat of PRECALC_CATEGORIES) {
  for (const slug of cat.topics) {
    CANONICAL.add(slug)
    if (CATEGORY_TO_DOMAIN[cat.slug]) UNIT_OF[slug] = CATEGORY_TO_DOMAIN[cat.slug]
  }
}

const UNIT4 = /\bvector|\bmatri(x|ces)\b|parametric|law of (sines|cosines)|\bconic|ellipse|hyperbola/i
/** Whitespace/markup-insensitive stem key that keeps symbols ("cos(π) = ?" and "cos(−θ) = ?" differ). */
const norm = (s: string) => s.toLowerCase().replace(/[\s$]+/g, '').replace(/[{}]/g, '')
const forms = Array.from({ length: TOTAL_FORMS }, (_, i) => (i + 1) as DiagnosticFormNumber)

describe('AP Precalculus v1 diagnostic', () => {
  it('is blueprinted to the three assessed CED units, 10/10/10', () => {
    expect(AP_PRECALCULUS_DOMAINS.map((d) => d.id)).toEqual(['polynomial-rational', 'exponential-logarithmic', 'trigonometric'])
    expect(AP_PRECALCULUS_DOMAINS.map((d) => d.questionTarget)).toEqual([10, 10, 10])
    for (const form of forms) {
      const test = generateAPPrecalculusDiagnosticTest(form)
      expect(test.totalQuestions).toBe(30)
      for (const d of AP_PRECALCULUS_DOMAINS) expect(test.questions.filter((q) => q.domain === d.id).length, `form ${form} ${d.id}`).toBe(10)
    }
  })

  it('domain fallback slugs are the canonical topics of that unit (as live production slugs), in course order', () => {
    for (const d of AP_PRECALCULUS_DOMAINS) {
      const cat = PRECALC_CATEGORIES.find((c) => CATEGORY_TO_DOMAIN[c.slug] === d.id)!
      expect(d.topicSlugs).toEqual([...new Set(cat.topics.map(apPrecalcRecommendationSlug))])
      for (const s of d.topicSlugs) expect(FIXTURE.has(s), s).toBe(true)
    }
  })

  it('every pool item is a sound 4-option item tagged with a canonical slug in its own unit', () => {
    const problems: string[] = []
    const stems = new Map<string, string>()
    for (const q of apPrecalcDiagnosticQuestionPool) {
      const id = q.question.slice(0, 60)
      if (q.options.length !== 4) problems.push(`${id}: ${q.options.length} options`)
      if (new Set(q.options.map((o) => o.trim())).size !== q.options.length) problems.push(`${id}: duplicate options`)
      if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) problems.push(`${id}: key ${q.correctAnswer}`)
      if (q.explanation.trim().length < 20) problems.push(`${id}: thin explanation`)
      if (/let me|hmm|actually|better question|recheck/i.test(q.explanation)) problems.push(`${id}: explanation thinks aloud`)
      if (/all of the above|none of the above|both [a-d] and/i.test(q.options.join('|'))) problems.push(`${id}: combination option breaks under shuffle`)
      if (!CANONICAL.has(q.topicSlug)) problems.push(`${id}: slug ${q.topicSlug} is not canonical`)
      else if (UNIT_OF[q.topicSlug] !== q.domain) problems.push(`${id}: ${q.topicSlug} is ${UNIT_OF[q.topicSlug]} but filed under ${q.domain}`)
      const k = norm(q.question)
      if (stems.has(k)) problems.push(`${id}: duplicate stem of "${stems.get(k)}"`)
      stems.set(k, id)
    }
    expect(problems).toEqual([])
  })

  it('carries nothing the owner rule removed (series, calculus, Descartes, half-angle, lemniscate, Unit 4, finance)', () => {
    // Stems: the generator's filter. Options: Unit 4 objects never appear even as distractors.
    const offExam = apPrecalcDiagnosticQuestionPool.filter((q) => isApPrecalcOffExam(q.question) || UNIT4.test(q.options.join(' '))).map((q) => q.question.slice(0, 70))
    expect(offExam).toEqual([])
    expect(AP_PRECALC_OFF_EXAM_PATTERNS.some((re) => re.test('The sum of the geometric series 1 + 1/2 + ...'))).toBe(true)
    expect(isApPrecalcOffExam('The lemniscate r^2 = 4cos(2θ) exists only when')).toBe(true)
    expect(isApPrecalcOffExam('Find all vertical asymptotes of f(x) = (x+1)/(x^2-4).')).toBe(false)
  })

  it('serves and recommends only production topics (pending Wave 2 rows fall back to a live lesson)', () => {
    for (const [pending, live] of Object.entries(AP_PRECALCULUS_PENDING_TOPIC_FALLBACK)) {
      expect(CANONICAL.has(pending), pending).toBe(true)
      expect(FIXTURE.has(live), live).toBe(true)
      expect(UNIT_OF[pending]).toBe(UNIT_OF[live])
    }
    for (const form of forms) {
      for (const q of generateAPPrecalculusDiagnosticTest(form).questions) expect(FIXTURE.has(q.topicSlug), `form ${form}: ${q.topicSlug}`).toBe(true)
    }
    for (const slug of CANONICAL) expect(FIXTURE.has(apPrecalcRecommendationSlug(slug)), slug).toBe(true)
  })

  it('the 10 forms reach a healthy share of the pool and every unit has real depth', () => {
    const served = new Set<string>()
    for (const form of forms) for (const q of generateAPPrecalculusDiagnosticTest(form).questions) served.add(q.question)
    expect(served.size).toBeGreaterThanOrEqual(150)
    for (const d of AP_PRECALCULUS_DOMAINS) {
      expect(apPrecalcDiagnosticQuestionPool.filter((q) => q.domain === d.id).length, d.id).toBeGreaterThanOrEqual(40)
    }
    // The skills the Oct 2026 audit found absent are now in the pool.
    const bySlug = new Map<string, number>()
    for (const q of apPrecalcDiagnosticQuestionPool) bySlug.set(q.topicSlug, (bySlug.get(q.topicSlug) ?? 0) + 1)
    for (const slug of ['inverse-trig-functions-precalc', 'solving-trig-equations', 'transformations-precalc', 'rates-of-change-precalc', 'exponential-logarithmic-modeling-precalc']) {
      expect(bySlug.get(slug) ?? 0, slug).toBeGreaterThanOrEqual(3)
    }
  })

  it('recommends the topics the student missed, named after the lesson, capped at 5', () => {
    const test = generateAPPrecalculusDiagnosticTest(1)
    const allWrong: Record<number, number> = {}
    test.questions.forEach((q, i) => { allWrong[i] = (q.correctAnswer + 1) % 4 })
    const r = scoreAPPrecalculusDiagnostic(1, test.questions, allWrong)
    expect(r.recommendedTopics.length).toBeLessThanOrEqual(5)
    expect(r.recommendedTopics.length).toBeGreaterThan(0)
    expect(r.domains.map((d) => d.domainName)).toEqual(AP_PRECALCULUS_DOMAINS.map((d) => d.name))
    const missed = new Set(test.questions.map((q) => q.topicSlug))
    for (const t of r.recommendedTopics) {
      expect(missed.has(t.slug), t.slug).toBe(true)
      expect(t.name).toBe(PRECALC_TOPIC_TITLES[t.slug])
      expect(t.priority).toBe('high')
    }
    // A weak Unit 3 only: its missed topics lead and every recommendation is a Unit 3 lesson.
    const trigWrong: Record<number, number> = {}
    test.questions.forEach((q, i) => { trigWrong[i] = q.domain === 'trigonometric' ? (q.correctAnswer + 1) % 4 : q.correctAnswer })
    const r3 = scoreAPPrecalculusDiagnostic(1, test.questions, trigWrong)
    expect(r3.recommendedTopics.every((t) => t.domainId === 'trigonometric' && UNIT_OF[t.slug] === 'trigonometric')).toBe(true)
  })
})

describe('Precalculus (non-AP) diagnostic points at the canonical lessons', () => {
  it('every domain fallback and item slug is canonical, and no option depends on letter order', () => {
    for (const d of PRECALC_DOMAINS) for (const s of d.topicSlugs) expect(CANONICAL.has(s), `${d.id}: ${s}`).toBe(true)
    for (const form of [1, 2, 3] as const) {
      for (const q of generatePreCalcDiagnosticTest(form).questions) {
        expect(CANONICAL.has(q.topicSlug), q.topicSlug).toBe(true)
        expect(/both [a-d] and|all of the above/i.test(q.options.join('|')), q.question.slice(0, 50)).toBe(false)
      }
    }
  })
})

describe('study plans personalize from the diagnostic the page actually stores', () => {
  const classPlan = (key: string) => CLASS_PLAN_COURSES.find((c) => c.key === key)!
  const routePrefix = (route: string) => {
    const src = fs.readFileSync(path.join(ROOT, 'src/app/api', route, 'route.ts'), 'utf8')
    return /diagnosticPrefix:\s*'([^']+)'/.exec(src)?.[1]
  }

  it('AP route and selector use the ap-precalculus-diagnostic prefix', () => {
    expect(routePrefix('ap-precalc-study-plans')).toBe(classPlan('ap-precalculus').categoryPrefix)
    expect(apPlanConfig.diagnosticPrefix).toBe(classPlan('ap-precalculus').categoryPrefix)
    expect(classPlan('ap-precalculus').categoryPrefix).toBe('ap-precalculus-diagnostic')
  })

  it('non-AP route and selector use the precalc-diagnostic prefix', () => {
    expect(routePrefix('precalculus-study-plans')).toBe(classPlan('precalc').categoryPrefix)
    expect(nonApPlanConfig.diagnosticPrefix).toBe(classPlan('precalc').categoryPrefix)
    expect(classPlan('precalc').categoryPrefix).toBe('precalc-diagnostic')
  })

  it('every study-plan route for a class-plan course uses that course\'s diagnostic prefix', () => {
    const apiDir = path.join(ROOT, 'src/app/api')
    const bad: string[] = []
    for (const dir of fs.readdirSync(apiDir).filter((d) => d.endsWith('-study-plans'))) {
      const file = path.join(apiDir, dir, 'route.ts')
      if (!fs.existsSync(file)) continue
      const src = fs.readFileSync(file, 'utf8')
      const prefix = /diagnosticPrefix:\s*'([^']+)'/.exec(src)?.[1]
      const courseSlug = /courseSlug:\s*'([^']+)'/.exec(src)?.[1]
      if (!prefix || !courseSlug) continue
      const course = CLASS_PLAN_COURSES.find((c) => c.courseSlug === courseSlug)
      if (course && course.categoryPrefix !== prefix) bad.push(`${dir}: ${prefix} (diagnostic stores ${course.categoryPrefix})`)
    }
    expect(bad).toEqual([])
  })

  it('AP templates schedule every canonical lesson and link each task to the lesson that teaches it', () => {
    const scheduled = new Set<string>()
    for (const plan of AP_PRECALC_PLANS) {
      for (const t of plan.tasks) {
        if (t.type === 'LESSON') expect(t.topicSlug, `${plan.id}: "${t.title}" has no lesson`).toBeTruthy()
        if (t.topicSlug) {
          expect(CANONICAL.has(t.topicSlug), `${plan.id}: ${t.topicSlug}`).toBe(true)
          scheduled.add(t.topicSlug)
        }
        expect(UNIT4.test(t.title), `${plan.id}: ${t.title}`).toBe(false)
      }
      expect(UNIT4.test(plan.description)).toBe(false)
    }
    const lessons = PRECALC_CATEGORIES.filter((c) => c.topics.length).flatMap((c) => c.topics)
    expect(lessons.filter((s) => !scheduled.has(s))).toEqual([])
    // The 8- and 12-week plans cover every lesson on their own.
    for (const id of ['8-week-precalc-standard', '12-week-precalc-comprehensive']) {
      const plan = AP_PRECALC_PLANS.find((p) => p.id === id)!
      const own = new Set(plan.tasks.filter((t) => t.type === 'LESSON').map((t) => t.topicSlug))
      expect(lessons.filter((s) => !own.has(s)), id).toEqual([])
    }
  })

  it('non-AP templates only point at canonical lessons', () => {
    for (const plan of PRECALCULUS_PLANS) for (const t of plan.tasks) if (t.topicSlug) expect(CANONICAL.has(t.topicSlug), `${plan.id}: ${t.topicSlug}`).toBe(true)
  })
})

describe('AP Precalculus daily question', () => {
  it('rotates canonical topics that have an exit-quiz pool, with no Unit 4', () => {
    expect(DAILY_SLUGS.length).toBeGreaterThanOrEqual(15)
    expect(new Set(DAILY_SLUGS).size).toBe(DAILY_SLUGS.length)
    for (const slug of DAILY_SLUGS) {
      expect(CANONICAL.has(slug), slug).toBe(true)
      expect(hasExitQuiz(slug), `${slug} has no exit-quiz pool`).toBe(true)
      expect(UNIT4.test(slug)).toBe(false)
    }
  })
})

describe('AP Precalculus unit tests', () => {
  it('are the three CED units on canonical topics; every canonical topic is assigned to its unit', () => {
    expect(AP_PRECALCULUS_UNITS.map((u) => u.id)).toEqual(['polynomial-rational', 'exp-log', 'trig-polar'])
    expect(AP_PRECALCULUS_UNITS.map((u) => u.name)).toEqual(PRECALC_CATEGORIES.slice(0, 3).map((c) => c.name))
    const unitForDomain: Record<string, string> = { 'polynomial-rational': 'polynomial-rational', 'exponential-logarithmic': 'exp-log', trigonometric: 'trig-polar' }
    for (const u of AP_PRECALCULUS_UNITS) for (const s of u.topicSlugs) {
      expect(CANONICAL.has(s), s).toBe(true)
      expect(unitForDomain[UNIT_OF[s]], s).toBe(u.id)
      expect(AP_PRECALCULUS_UNIT_ASSIGNMENT.topics?.[s], `${s} unassigned`).toBe(u.id)
    }
    // Stems only: a conic named as a distractor is not Unit 4 content.
    for (const q of AP_PRECALCULUS_UNIT_TESTS_CONFIG.pool) expect(UNIT4.test(q.question), q.question.slice(0, 60)).toBe(false)
  })

  it('non-AP unit tests are the same three units and serve no Unit 4 bank topics', () => {
    expect(PRECALCULUS_UNITS.map((u) => u.id)).toEqual(['polynomial-rational', 'exp-log', 'trig-polar'])
    for (const u of PRECALCULUS_UNITS) for (const s of u.topicSlugs) expect(CANONICAL.has(s), s).toBe(true)
    const slugs = new Set(PRECALCULUS_UNIT_TESTS_CONFIG.pool.map((q) => q.topicSlug))
    for (const s of ['vectors-in-two-dimensions', 'matrices-and-determinants', 'systems-of-equations-matrices', 'parametric-equations-motion', 'law-of-sines-and-cosines']) expect(slugs.has(s), s).toBe(false)
    for (const u of PRECALCULUS_UNITS) expect(PRECALCULUS_UNIT_TESTS_CONFIG.pool.filter((q) => q.domain === u.id).length, u.id).toBeGreaterThanOrEqual(24)
  })
})

describe('AP Precalculus practice exam and FRQ bank copy', () => {
  it('practice About box describes the 2027 exam and names no Unit 4', () => {
    const about = JSON.stringify(practiceConfig.aboutInfo ?? practiceConfig)
    expect(about).toContain('62.5')
    expect(about).toContain('37.5')
    expect(/Unit 4/.test(about)).toBe(false)
    expect(UNIT4.test(about)).toBe(false)
  })

  it('both periodic-modeling FRQs render the graph their Part A reads from', () => {
    const q3 = getPrecalcFRQs().filter((f) => f.type === 'periodic-modeling')
    expect(q3.length).toBeGreaterThanOrEqual(2)
    for (const f of q3) {
      expect(f.dataTableHtml, f.id).toMatch(/^<svg[\s\S]*<\/svg>$/)
      expect(f.dataTableHtml).toContain('stroke-dasharray')
      for (const p of ['F', 'G', 'J', 'K', 'P']) expect(f.dataTableHtml).toContain(`>${p}</text>`)
      expect(f.parts[0].prompt).toContain('figure')
    }
  })

  it('no FRQ rubric line is earned by a short bare number or the word "average"', () => {
    // '25' scored on any "25" in the response and 'average' on part (i)'s "average rate of change"
    // (Oct 2026 audit). Specific values such as 18000 or 0.866 are fine.
    for (const f of getPrecalcFRQs()) for (const p of f.parts) for (const r of p.rubric) {
      for (const kw of r.keywords) {
        expect(/^\d{1,2}$/.test(kw.trim()), `${f.id} ${p.label}: keyword "${kw}"`).toBe(false)
        expect(kw.trim().toLowerCase(), `${f.id} ${p.label}`).not.toBe('average')
      }
    }
  })
})
