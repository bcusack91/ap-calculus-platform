/**
 * AP question tools (Phase 2 Wave C2): every AP course gets the mistake log
 * and the question bank. The bank draws from the course's EXIT-QUIZ pool only
 * (never the competitive banks or the authored unit-test supplements), files
 * it under the CED units exactly as the unit tests do, and every topic slug is
 * a production topic. The per-unit tests can be graded, logged and rebuilt
 * from (course, unit, variant) alone.
 */
import { describe, it, expect, beforeAll } from 'vitest'
import slugsByCourse from '../fixtures/ap-lesson-topic-slugs.json'
import { buildApPool, eligibleUnits, type QbankPool, type QbankStudentState } from '@/lib/qbank-pools'
import { QBANK_SECTIONS, isQbankCourse, secondsPerQuestion } from '@/lib/qbank-types'
import {
  AP_TOOL_COURSES,
  isApToolCourse,
  mistakesHref,
  qbankHref,
  toolCourseFor,
  toolCourseHubHref,
  toolCourseLabel,
  toolCourseSlug,
} from '@/lib/question-tool-courses'
import { MISTAKE_COURSES, isMistakeCourse } from '@/lib/mistakes-server'
import { unitsForCourse } from '@/lib/unit-tests/course-units'
import { loadApUnitTestCourse } from '@/lib/unit-tests/ap-unit-test-registry'
import { apUnitTestReviewItems, gradeApUnitTest, redrawUnitTest } from '@/lib/question-sources/ap-unit-test'
import { diagnosticItemKey } from '@/lib/ap-topic-canonical'
import { questionKey } from '@/lib/question-key'
import { apChemQuestionPool } from '@/data/exit-quizzes/ap-chemistry'
import { apBioQuestionPool } from '@/data/exit-quizzes/ap-biology'
import { apPhysics1QuestionPool } from '@/data/exit-quizzes/ap-physics-1'
import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import { AP_CHEMISTRY_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-chemistry-supplement'
import { AP_PHYSICS1_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-1-supplement'

const FIXTURE = slugsByCourse as Record<string, string[]>
const NOBODY: QbankStudentState = { includeLowYield: false, seenKeys: new Set(), incorrectKeys: new Set(), flaggedKeys: new Set() }

/** Production topics a course's items may be filed under (BC's course page renders the AB units too). */
const allowedTopics = (course: string) => new Set([...(FIXTURE[course] ?? []), ...(course === 'ap-calculus-bc' ? FIXTURE['ap-calculus-ab'] : [])])

const FLAGSHIPS = {
  'ap-chemistry': { exit: apChemQuestionPool, supplement: AP_CHEMISTRY_UNIT_SUPPLEMENT },
  'ap-biology': { exit: apBioQuestionPool, supplement: [] },
  'ap-physics-1': { exit: apPhysics1QuestionPool, supplement: AP_PHYSICS1_UNIT_SUPPLEMENT },
  'ap-calculus-ab': { exit: calcABQuestionPool, supplement: [] },
} as const

const pools = new Map<string, QbankPool>()
beforeAll(async () => {
  for (const c of AP_TOOL_COURSES) pools.set(c, await buildApPool(c))
}, 180_000)

describe('AP tool courses', () => {
  it('are qbank and mistake-log courses keyed by their DB slug', () => {
    for (const c of Object.keys(FLAGSHIPS)) {
      expect(isQbankCourse(c)).toBe(true)
      expect(isMistakeCourse(c)).toBe(true)
      expect(MISTAKE_COURSES[c as keyof typeof MISTAKE_COURSES]).toBe(c)
      expect(toolCourseSlug(c as 'ap-chemistry')).toBe(c)
    }
    expect(AP_TOOL_COURSES).toHaveLength(23)
    // Test prep keeps its keys and slugs.
    expect(MISTAKE_COURSES.mcat).toBe('mcat-prep')
    expect(MISTAKE_COURSES.act).toBe('act-prep')
    expect(isQbankCourse('ap')).toBe(false)
    expect(isMistakeCourse('ap-chem')).toBe(false)
  })

  it('names, links and hub resolution', () => {
    expect(toolCourseLabel('ap-chemistry')).toBe('AP Chemistry')
    expect(toolCourseLabel('sat')).toBe('SAT')
    expect(mistakesHref('ap-biology')).toBe('/ap-biology/mistakes')
    expect(qbankHref('ap-physics-1')).toBe('/ap-physics-1/qbank')
    expect(toolCourseHubHref('ap-computer-science-principles')).toBe('/ap-cs-principles')
    // CourseStudyPlan passes the class-plan key and the DB slug.
    expect(toolCourseFor('ap-chem', 'ap-chemistry')).toBe('ap-chemistry')
    expect(toolCourseFor('calcab')).toBe('ap-calculus-ab')
    expect(toolCourseFor('ap-physics1')).toBe('ap-physics-1')
    expect(toolCourseFor('mcat')).toBe('mcat')
    expect(toolCourseFor('algebra1', 'algebra-1')).toBeNull()
  })

  it('sections are the CED units, at May 2027 exam pace', () => {
    for (const c of AP_TOOL_COURSES) {
      expect(QBANK_SECTIONS[c].map((s) => s.id)).toEqual(unitsForCourse(c).map((u) => u.id))
    }
    expect(QBANK_SECTIONS['ap-chemistry']).toHaveLength(9)
    expect(QBANK_SECTIONS['ap-biology'][0].label).toBe('Unit 1: Chemistry of Life')
    expect(secondsPerQuestion('ap-chemistry', 'kinetics')).toBe(90)
    expect(secondsPerQuestion('ap-physics-1', 'kinematics')).toBe(121)
    expect(secondsPerQuestion('ap-calculus-ab', 'limits')).toBe(143)
  })
})

describe('AP question bank pools', () => {
  it('every AP course: unique keys, production topics, CED-unit sections, difficulty tags', () => {
    for (const c of AP_TOOL_COURSES) {
      const items = pools.get(c)!.units.flatMap((u) => u.items)
      expect(items.length, c).toBeGreaterThan(150)
      expect(new Set(items.map((i) => i.questionKey)).size, c).toBe(items.length)
      const topics = allowedTopics(c)
      const units = new Set(unitsForCourse(c).map((u) => u.id))
      for (const i of items) {
        expect(topics.has(i.topicSlug), `${c}: ${i.topicSlug}`).toBe(true)
        expect(units.has(i.section), `${c}: ${i.section}`).toBe(true)
        expect(i.difficulty, `${c}: ${i.question.slice(0, 40)}`).not.toBeNull()
        expect(i.correctIndex >= 0 && i.correctIndex < i.options.length).toBe(true)
      }
      // Every unit has questions to practice.
      for (const u of units) expect(items.some((i) => i.section === u), `${c} ${u}`).toBe(true)
      expect(eligibleUnits(pools.get(c)!, {}, 'all', NOBODY).length).toBe(items.length)
    }
  })

  it('the flagships draw from the exit-quiz pool only, keyed as the exit quiz keys them', () => {
    for (const [c, { exit, supplement }] of Object.entries(FLAGSHIPS)) {
      const items = pools.get(c)!.units.flatMap((u) => u.items)
      const exitKeys = new Set(exit.map((q) => questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer })))
      for (const i of items) expect(exitKeys.has(i.questionKey), `${c}: ${i.question.slice(0, 50)}`).toBe(true)
      const supplementStems = new Set<string>(supplement.map((q) => q.question))
      expect(items.some((i) => supplementStems.has(i.question)), c).toBe(false)
      // Nearly the whole exit pool is in the bank (bar items about the exam itself and duplicates).
      expect(items.length / exitKeys.size, c).toBeGreaterThan(0.9)
    }
  })
})

describe('AP per-unit tests: grade, log and rebuild from (course, unit, variant)', () => {
  it('rebuilds exactly the questions, option order and key the page showed', async () => {
    for (const c of Object.keys(FLAGSHIPS)) {
      const ap = (await loadApUnitTestCourse(c))!
      const unit = ap.config.units[1]
      const shown = redrawUnitTest(ap.config, unit.id, 3)!
      const answers = shown.questions.map((q, i) => (i % 3 === 0 ? q.correctAnswer : (q.correctAnswer + 1) % q.options.length))
      const graded = gradeApUnitTest(ap, { unitId: unit.id, variant: 3, answers, stems: shown.questions.map((q) => diagnosticItemKey(q.question)) })
      expect(graded.complete, c).toBe(true)
      expect(graded.positions.filter((p) => p.correct).length).toBe(answers.filter((_, i) => i % 3 === 0).length)
      const review = apUnitTestReviewItems(ap, { unitId: unit.id, variant: 3 }, graded.positions.map((p) => ({ itemIndex: p.index, questionKey: p.item.key, chosenIndex: p.chosenIndex })))
      expect(review.map((r) => r.question)).toEqual(shown.questions.map((q) => q.question))
      expect(review.map((r) => r.options)).toEqual(shown.questions.map((q) => q.options))
      expect(review.map((r) => r.correctIndex)).toEqual(shown.questions.map((q) => q.correctAnswer))
      expect(review.map((r) => r.chosenIndex)).toEqual(answers)
      for (const r of review) {
        expect(allowedTopics(c).has(r.topicSlug!), `${c}: ${r.topicSlug}`).toBe(true)
        expect(r.discipline).toBe(unit.name)
      }
    }
  })

  it('grades what the page showed when its draw differs from the server (stale page), and skips unknown stems', async () => {
    const ap = (await loadApUnitTestCourse('ap-chemistry'))!
    const unit = ap.config.units[0]
    const other = redrawUnitTest(ap.config, unit.id, 2)!
    const answers = other.questions.map((q) => q.correctAnswer)
    const stems = other.questions.map((q) => diagnosticItemKey(q.question))
    stems[0] = 'ffffffff'
    // Claimed variant 1, but the page showed variant 2's questions.
    const graded = gradeApUnitTest(ap, { unitId: unit.id, variant: 1, answers, stems })
    expect(graded.complete).toBe(false)
    expect(graded.positions.map((p) => p.index)).toEqual(other.questions.slice(1).map((_, i) => i + 1))
    expect(graded.positions.map((p) => p.item.q.question)).toEqual(other.questions.slice(1).map((q) => q.question))
  })

  it('a non-AP course has no AP unit-test material', () => {
    expect(loadApUnitTestCourse('sat-prep')).toBeNull()
    expect(isApToolCourse('mcat-prep')).toBe(false)
  })
})
