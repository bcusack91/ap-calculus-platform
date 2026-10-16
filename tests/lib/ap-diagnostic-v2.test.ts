/**
 * AP diagnostic v2 engine guards: CED blueprint quotas, difficulty mix,
 * stimulus sets served whole and in authored order, seen tracking, the ±
 * band, versioning and the switch minimum.
 *
 * Generator behaviour is checked on a SYNTHETIC bank stocked exactly to each
 * course's switch minimum (the real banks hold 8 sample items until authors
 * fill them), plus the real sample banks for shape and end-to-end serving.
 */
import { describe, it, expect } from 'vitest'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'
import {
  AP_DIAG_V2_BLUEPRINTS,
  AP_DIAG_V2_COURSES,
  apportion,
  difficultyTargets,
  unitMidpoint,
  unitQuotas,
} from '@/lib/ap-diagnostic-v2/blueprints'
import { AP_DIAG_V2_BANKS, apDiagV2CourseOfCategory, isApDiagV2Live } from '@/lib/ap-diagnostic-v2/banks'
import { AP_DIAG_V2_LIVE, AP_DIAG_V2_SWITCH_RULES, bankReadiness, unitRequirements } from '@/lib/ap-diagnostic-v2/readiness'
import { apDiagnosticVersion } from '@/lib/ap-diagnostic-v2/version'
import { generateApDiagnosticV2, seenKeysForServed } from '@/lib/ap-diagnostic-v2/generator'
import { scoreApDiagnosticV2 } from '@/lib/ap-diagnostic-v2/scoring'
import { validateBank } from '@/lib/ap-diagnostic-v2/validate'
import { AP_DIAG_V2_DIFFICULTIES, type ApDiagV2Bank, type ApDiagV2Course, type ApDiagV2Item } from '@/lib/ap-diagnostic-v2/types'
import { apScoreRange, estimateApScore } from '@/lib/ap-scoring'
import { apSeenKeysForQuestion, reviewQuestionsFromResults } from '@/lib/diagnostic-seen'
import { diagnosticReviewItems } from '@/lib/question-sources/diagnostic'
import { diagnosticPathForCategory, summarizeAttemptScores } from '@/lib/diagnostic-attempt-scores'
import { courseForCategory } from '@/lib/class-plan-config'
import { isSafeSvg } from '@/lib/safe-svg'
import { mulberry32 } from '@/data/_shared/prng'

const FIXTURE = slugsByCourse as Record<string, string[]>

/**
 * A bank stocked to the switch minimum: per unit, three sittings' worth of
 * standalone items at each difficulty target (padded with medium items up to
 * the unit minimum), plus 2-item stimulus sets (medium + hard) — one per unit
 * with a quota of 3+, a second in units of 5+ — until the course has enough.
 */
function syntheticBank(course: ApDiagV2Course): ApDiagV2Bank {
  const bp = AP_DIAG_V2_BLUEPRINTS[course]
  const items: ApDiagV2Item[] = []
  const stimuli: ApDiagV2Bank['stimuli'] = []
  const setsNeeded = bp.setsPerSitting * AP_DIAG_V2_SWITCH_RULES.minSetSittings
  let setsMade = 0
  const explanation = 'Synthetic explanation long enough to pass the explanation length check.'
  for (const r of unitRequirements({ course, stimuli: [], items: [] })) {
    const unit = bp.units.find((u) => u.id === r.unit)!
    const before = items.length
    const maxSets = r.quota >= 5 ? 2 : r.quota >= 3 ? 1 : 0
    for (let k = 0; k < maxSets && setsMade < setsNeeded; k++, setsMade++) {
      const sid = `${course}-u${unit.number}-set${k}`
      stimuli.push({ id: sid, title: `Set ${k}`, kind: 'passage', content: `Synthetic stimulus ${sid} describing an experiment in enough words to pass the checks.` })
      ;(['medium', 'hard'] as const).forEach((difficulty, q) => {
        items.push({
          id: `${sid}-q${q + 1}`, stimulusId: sid, unit: unit.id, topicSlug: unit.topicSlugs[q % unit.topicSlugs.length], difficulty,
          stem: `Set question ${q + 1} for ${sid}?`, options: ['alpha one', 'bravo two', 'charlie three', 'delta four'], correctIndex: q, explanation,
        })
      })
    }
    const t = difficultyTargets(r.quota)
    const plan: ApDiagV2Item['difficulty'][] = []
    for (const d of AP_DIAG_V2_DIFFICULTIES) for (let k = 0; k < t[d] * AP_DIAG_V2_SWITCH_RULES.minSittingsPerUnit; k++) plan.push(d)
    while (items.length - before + plan.length < r.minimum) plan.push('medium')
    plan.forEach((difficulty, n) => {
      items.push({
        id: `${course}-u${unit.number}-${n}`, unit: unit.id, topicSlug: unit.topicSlugs[n % unit.topicSlugs.length], difficulty,
        stem: `Unit ${unit.number} standalone question number ${n}?`, options: ['one', 'two', 'three', 'four'], correctIndex: n % 4, explanation,
      })
    })
  }
  return { course, stimuli, items }
}

/** Pinned per-sitting quotas (CED midpoints, normalized, largest remainder). */
const EXPECTED_QUOTAS: Record<ApDiagV2Course, number[]> = {
  'ap-chemistry': [3, 3, 7, 3, 3, 3, 3, 5, 3],
  'ap-biology': [3, 4, 5, 4, 3, 5, 5, 4],
  'ap-physics-1': [5, 7, 7, 5, 4, 2, 2, 4],
  'ap-calculus-ab': [5, 4, 3, 4, 6, 6, 3, 4],
}

describe('blueprints (CED weightings)', () => {
  it.each(AP_DIAG_V2_COURSES)('%s quotas match the pinned CED apportionment and the sitting length', (course) => {
    const bp = AP_DIAG_V2_BLUEPRINTS[course]
    const q = unitQuotas(bp)
    expect(bp.units.map((u) => q[u.id])).toEqual(EXPECTED_QUOTAS[course])
    expect(Object.values(q).reduce((a, b) => a + b, 0)).toBe(bp.length)
    expect(bp.length).toBeGreaterThanOrEqual(33)
    expect(bp.length).toBeLessThanOrEqual(36)
    expect(bp.timeLimitMinutes).toBeGreaterThanOrEqual(40)
    expect(bp.timeLimitMinutes).toBeLessThanOrEqual(45)
  })

  it.each(AP_DIAG_V2_COURSES)('%s: every unit\'s share is within one question of its normalized CED midpoint', (course) => {
    const bp = AP_DIAG_V2_BLUEPRINTS[course]
    const q = unitQuotas(bp)
    const sum = bp.units.reduce((s, u) => s + unitMidpoint(u), 0)
    for (const u of bp.units) expect(Math.abs(q[u.id] - (unitMidpoint(u) / sum) * bp.length)).toBeLessThan(1)
  })

  it('keeps the CED unit counts and the headline weights', () => {
    expect(AP_DIAG_V2_BLUEPRINTS['ap-chemistry'].units).toHaveLength(9)
    expect(AP_DIAG_V2_BLUEPRINTS['ap-chemistry'].units[2].weight).toEqual([18, 22])
    expect(AP_DIAG_V2_BLUEPRINTS['ap-biology'].units).toHaveLength(8)
    expect(AP_DIAG_V2_BLUEPRINTS['ap-physics-1'].units).toHaveLength(8)
    expect(AP_DIAG_V2_BLUEPRINTS['ap-physics-1'].units[7].name).toBe('Fluids')
    expect(AP_DIAG_V2_BLUEPRINTS['ap-calculus-ab'].units).toHaveLength(8)
  })

  it.each(AP_DIAG_V2_COURSES)('%s: every unit topic is a production topic with a name, and the category prefix is the v1 one', (course) => {
    const bp = AP_DIAG_V2_BLUEPRINTS[course]
    const ok = new Set(FIXTURE[course])
    for (const u of bp.units) for (const s of u.topicSlugs) {
      expect(ok.has(s), `${u.id} ${s}`).toBe(true)
      expect(bp.topicNames[s], s).toBeTruthy()
    }
    expect(courseForCategory(`${bp.categoryPrefix}-v2`)?.courseSlug).toBe(course)
    expect(courseForCategory(`${bp.categoryPrefix}-3`)?.courseSlug).toBe(course)
    expect(apDiagV2CourseOfCategory(`${bp.categoryPrefix}-v2`)).toBe(course)
    expect(apDiagV2CourseOfCategory(`${bp.categoryPrefix}-3`)).toBeNull()
  })

  it('apportions by largest remainder, ties to the heavier then earlier unit', () => {
    expect(apportion([1, 1, 1], 4)).toEqual([2, 1, 1])
    expect(apportion([2, 1, 1], 5)).toEqual([3, 1, 1])
    expect(difficultyTargets(3)).toEqual({ easy: 1, medium: 1, hard: 1 })
    expect(difficultyTargets(5)).toEqual({ easy: 1, medium: 2, hard: 2 })
    expect(difficultyTargets(7)).toEqual({ easy: 2, medium: 3, hard: 2 })
    expect(difficultyTargets(2)).toEqual({ easy: 0, medium: 1, hard: 1 })
  })
})

describe('generator (synthetic bank at the switch minimum)', () => {
  it.each(AP_DIAG_V2_COURSES)('%s: a full sitting meets the blueprint and the difficulty mix', (course) => {
    const bp = AP_DIAG_V2_BLUEPRINTS[course]
    const bank = syntheticBank(course)
    expect(bankReadiness(bank).problems).toEqual([])
    const quotas = unitQuotas(bp)
    for (let seed = 1; seed <= 5; seed++) {
      const t = generateApDiagnosticV2(bank, { rng: mulberry32(seed) })
      expect(t.version).toBe(2)
      expect(t.questions).toHaveLength(bp.length)
      expect(t.timeLimitMinutes).toBe(bp.timeLimitMinutes)
      for (const u of bp.units) {
        const inUnit = t.questions.filter((q) => q.domain === u.id)
        expect(inUnit, `${u.id} seed ${seed}`).toHaveLength(quotas[u.id])
        const want = difficultyTargets(quotas[u.id])
        for (const d of AP_DIAG_V2_DIFFICULTIES) expect(inUnit.filter((q) => q.difficulty === d).length, `${u.id} ${d}`).toBe(want[d])
      }
      expect(new Set(t.questions.map((q) => q.id)).size).toBe(t.questions.length)
      expect(new Set(t.questions.map((q) => q.question)).size).toBe(t.questions.length)
    }
  })

  it.each(AP_DIAG_V2_COURSES)('%s: stimulus sets are served whole, consecutively and in authored order', (course) => {
    const bp = AP_DIAG_V2_BLUEPRINTS[course]
    const bank = syntheticBank(course)
    for (let seed = 1; seed <= 10; seed++) {
      const t = generateApDiagnosticV2(bank, { rng: mulberry32(seed) })
      const setIds = [...new Set(t.questions.filter((q) => q.passage).map((q) => q.passage!.id))]
      expect(setIds.length).toBe(bp.setsPerSitting)
      for (const sid of setIds) {
        const positions = t.questions.map((q, i) => (q.passage?.id === sid ? i : -1)).filter((i) => i >= 0)
        const authored = bank.items.filter((i) => i.stimulusId === sid).map((i) => i.id)
        expect(positions.length).toBe(authored.length)
        expect(positions[positions.length - 1] - positions[0]).toBe(positions.length - 1)
        expect(positions.map((p) => t.questions[p].id)).toEqual(authored)
      }
    }
  })

  it.each(AP_DIAG_V2_COURSES)('%s: unseen items come first — 3 back-to-back sittings repeat nothing, later ones still fill', (course) => {
    const bp = AP_DIAG_V2_BLUEPRINTS[course]
    const bank = syntheticBank(course)
    const seen = new Set<string>()
    const rng = mulberry32(42)
    for (let s = 0; s < 6; s++) {
      const t = generateApDiagnosticV2(bank, { seen, rng })
      const repeats = t.questions.filter((q) => seen.has(q.id))
      if (s < AP_DIAG_V2_SWITCH_RULES.minSittingsPerUnit) expect(repeats.map((q) => q.id), `sitting ${s + 1}`).toEqual([])
      expect(t.questions).toHaveLength(bp.length)
      for (const q of t.questions) for (const k of seenKeysForServed(q)) seen.add(k)
    }
  })

  it('a re-authored item with the same text under a new id still counts as seen (id + text tracking)', () => {
    const bank = syntheticBank('ap-chemistry')
    const first = generateApDiagnosticV2(bank, { rng: mulberry32(1) })
    const seen = new Set(first.questions.filter((q) => !q.passage).flatMap((q) => seenKeysForServed(q)).filter((k) => k.startsWith('stem:')))
    const renamed: ApDiagV2Bank = { ...bank, items: bank.items.map((i) => (i.stimulusId ? i : { ...i, id: `${i.id}-renamed` })) }
    const second = generateApDiagnosticV2(renamed, { seen, rng: mulberry32(2) })
    const firstStems = new Set(first.questions.filter((q) => !q.passage).map((q) => q.question))
    expect(second.questions.filter((q) => !q.passage && firstStems.has(q.question))).toEqual([])
  })
})

describe('sample banks (end to end)', () => {
  it.each(AP_DIAG_V2_COURSES)('%s: passes the bank checks and serves its stimulus set whole', (course) => {
    const bank = AP_DIAG_V2_BANKS[course]
    const report = validateBank(bank, { productionTopics: new Set(FIXTURE[course]) })
    expect(report.errors).toEqual([])
    expect(bank.items.length).toBeGreaterThanOrEqual(8)
    expect(bank.stimuli.length).toBeGreaterThanOrEqual(1)
    const t = generateApDiagnosticV2(bank, { rng: mulberry32(7) })
    expect(t.questions).toHaveLength(bank.items.length)
    const sid = bank.stimuli[0].id
    const pos = t.questions.map((q, i) => (q.passage?.id === sid ? i : -1)).filter((i) => i >= 0)
    expect(pos.map((p) => t.questions[p].id)).toEqual(bank.items.filter((i) => i.stimulusId === sid).map((i) => i.id))
    expect(pos[pos.length - 1] - pos[0]).toBe(pos.length - 1)
  })

  it('the figure stimulus diagram is safe to inject; unsafe markup is refused', () => {
    const fig = AP_DIAG_V2_BANKS['ap-physics-1'].stimuli.find((s) => s.kind === 'figure')
    expect(isSafeSvg(fig?.svg)).toBe(true)
    expect(isSafeSvg('<svg viewBox="0 0 1 1"><script>alert(1)</script></svg>')).toBe(false)
    expect(isSafeSvg('<svg viewBox="0 0 1 1" onload="x()"><rect/></svg>')).toBe(false)
    expect(isSafeSvg('<svg viewBox="0 0 1 1"><foreignObject/></svg>')).toBe(false)
    expect(isSafeSvg('<svg viewBox="0 0 1 1"><a href="javascript:x"><rect/></a></svg>')).toBe(false)
  })
})

describe('switch minimum (versioning guard)', () => {
  it.each(AP_DIAG_V2_COURSES)('%s never switches to v2 below the minimum', (course) => {
    const ready = bankReadiness(AP_DIAG_V2_BANKS[course]).ready
    if (AP_DIAG_V2_LIVE[course]) expect(ready, `${course} is flagged live but its bank is below the switch minimum`).toBe(true)
    expect(isApDiagV2Live(course)).toBe(AP_DIAG_V2_LIVE[course] && ready)
    // The page's flag-only check agrees with the full check.
    expect(apDiagnosticVersion(course, null) === 2).toBe(isApDiagV2Live(course))
  })

  it('a sample bank is below the minimum, a minimum-stocked bank meets it, one item short fails', () => {
    expect(bankReadiness(AP_DIAG_V2_BANKS['ap-chemistry']).ready).toBe(false)
    const bank = syntheticBank('ap-chemistry')
    expect(bankReadiness(bank).ready).toBe(true)
    const short = { ...bank, items: bank.items.filter((i) => i.id !== bank.items.find((x) => x.unit === 'unit-6' && !x.stimulusId)!.id) }
    expect(bankReadiness(short).ready).toBe(false)
    expect(AP_DIAG_V2_SWITCH_RULES.minItems).toBeGreaterThanOrEqual(120)
  })

  it('the QA override never applies in production', () => {
    const env = process.env as Record<string, string | undefined>
    const prev = env.NODE_ENV
    try {
      env.NODE_ENV = 'production'
      expect(apDiagnosticVersion('ap-biology', '1')).toBe(AP_DIAG_V2_LIVE['ap-biology'] ? 2 : 1)
      env.NODE_ENV = 'development'
      expect(apDiagnosticVersion('ap-biology', '1')).toBe(2)
      expect(apDiagnosticVersion('ap-biology', null)).toBe(AP_DIAG_V2_LIVE['ap-biology'] ? 2 : 1)
    } finally {
      env.NODE_ENV = prev
    }
  })
})

describe('score band', () => {
  it('derives the band from the binomial SE at this test length, mapped through the cutoffs', () => {
    const mid = apScoreRange(20, 33) // 61%
    expect(mid.score).toBe(estimateApScore(61))
    expect(mid).toMatchObject({ low: 3, high: 4 })
    expect(mid.standardError).toBeCloseTo(8.5, 0)
    expect(apScoreRange(33, 33)).toMatchObject({ score: 5, low: 5, high: 5 })
    expect(apScoreRange(0, 33)).toMatchObject({ score: 1, low: 1, high: 1 })
    // Longer tests give narrower bands.
    expect(apScoreRange(40, 66).standardError).toBeLessThan(apScoreRange(20, 33).standardError)
  })

  it('the scorer stores version 2, the band and capped production-topic recommendations', () => {
    const bank = syntheticBank('ap-biology')
    const t = generateApDiagnosticV2(bank, { rng: mulberry32(3) })
    const allWrong = t.questions.map((q) => (q.correctAnswer + 1) % 4)
    const r = scoreApDiagnosticV2('ap-biology', t.questions, allWrong)
    expect(r.version).toBe(2)
    expect(r.totalQuestions).toBe(33)
    expect(r.estimatedAPScore).toBe(1)
    expect(r.scoreRange.low).toBeLessThanOrEqual(r.estimatedAPScore)
    expect(r.recommendedTopics.length).toBe(5)
    expect(r.recommendedTopics.every((x) => x.priority === 'high')).toBe(true)
    const allRight = scoreApDiagnosticV2('ap-biology', t.questions, t.questions.map((q) => q.correctAnswer))
    expect(allRight.recommendedTopics).toEqual([])
    expect(allRight.scoreRange).toEqual({ low: 5, high: 5 })
  })
})

describe('stored attempts (history, review, seen route)', () => {
  const bank = AP_DIAG_V2_BANKS['ap-physics-1']
  const t = generateApDiagnosticV2(bank, { rng: mulberry32(9) })
  const answers = t.questions.map((q, i) => (i % 2 ? q.correctAnswer : null))
  const scored = scoreApDiagnosticV2('ap-physics-1', t.questions, answers)
  const stored = { ...scored, review: { questions: t.questions, answers, domainNames: Object.fromEntries(t.domains.map((d) => [d.id, d.name])) } }

  it('the review layer rebuilds every question with its stimulus', () => {
    const items = diagnosticReviewItems(stored)
    expect(items).toHaveLength(t.questions.length)
    const setItems = items.filter((i) => i.passage?.id === 'phys1-s001')
    expect(setItems).toHaveLength(3)
    expect(setItems[0].passage?.body).toContain('Block X')
    expect(items.every((i) => i.topicSlug && FIXTURE['ap-physics-1'].includes(i.topicSlug))).toBe(true)
  })

  it('the seen route recomputes exactly the keys the page records', () => {
    const recorded = new Set(t.questions.flatMap(seenKeysForServed))
    const fromServer = new Set(
      reviewQuestionsFromResults(stored).flatMap((q) => apSeenKeysForQuestion({ id: q.id, question: q.question ?? '', passageBody: q.passageBody })),
    )
    expect(fromServer).toEqual(recorded)
  })

  it('history and the review header show the band; the retake link goes to the course page', () => {
    const cat = 'ap-physics1-diagnostic-v2'
    expect(diagnosticPathForCategory(cat)).toBe('/ap-physics1-diagnostic')
    expect(diagnosticPathForCategory('ap-physics1-diagnostic-4')).toBe('/ap-physics1-diagnostic')
    const s = summarizeAttemptScores(cat, { ...stored, estimatedAPScore: 3, scoreRange: { low: 2, high: 4 } })
    expect(s.overall?.value).toBe('2–4/5')
    // v1 attempts are unchanged.
    expect(summarizeAttemptScores('ap-physics1-diagnostic-4', { estimatedAPScore: 3 }).overall?.value).toBe('3/5')
  })
})
