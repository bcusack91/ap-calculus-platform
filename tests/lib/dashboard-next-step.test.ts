/**
 * The dashboard's ONE "Your next step" (UX plan Phase 2) and the "Continue
 * where you left off" card beside it.
 *
 * Regressions guarded here:
 *   - The dashboard showed ~15 calls to action and no single next step.
 *   - "Continue" opened the topic ARTICLE (/topics/<slug>), not the lesson,
 *     and could point at a topic the student had already mastered.
 *   - Three different "Review flashcards" destinations.
 *   - "Welcome back" greeted a brand-new student.
 */
import { describe, it, expect } from 'vitest'
import {
  FLASHCARD_REVIEW_HREF,
  describeNextStep,
  isFirstVisit,
  pickContinueTopic,
  resolveNextStep,
  studyPlanTopicHref,
  type NextStepInput,
  type NextStepPlan,
} from '@/lib/dashboard-next-step'
import { courseDiagnosticForHref, courseDiagnosticForSlug, rankStudentCourses } from '@/lib/student-courses'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

const topic = (slug: string, isSatisfied = false) => ({ slug, name: slug.toUpperCase(), isSatisfied, topicPath: `/topics/${slug}` })

const calcPlan: NextStepPlan = {
  courseKey: 'calcab',
  label: 'AP Calculus AB',
  diagnosticRoute: '/calcab-diagnostic',
  topics: [topic('limits', true), topic('derivatives'), topic('integrals')],
}
const bioPlan: NextStepPlan = {
  courseKey: 'ap-bio',
  label: 'AP Biology',
  diagnosticRoute: '/ap-bio-diagnostic',
  topics: [topic('cells'), topic('genetics')],
}

const base: NextStepInput = {
  pendingAssignments: 0,
  classDiagnostics: [],
  dueFlashcards: 0,
  plans: [],
  preferredCourse: null,
  firstTopicSlug: null,
}

describe('resolveNextStep — priority order', () => {
  const everything: NextStepInput = {
    pendingAssignments: 2,
    classDiagnostics: [{ title: 'Unit 1 diagnostic', href: '/calcab-diagnostic?assigned=x', classroomName: 'Period 3' }],
    dueFlashcards: 14,
    plans: [calcPlan],
    preferredCourse: { key: 'calcab', label: 'AP Calculus AB', diagnosticHref: '/calcab-diagnostic', courseHref: '/ap-calculus-ab' },
  }

  it('1. a pending assignment beats everything', () => {
    expect(resolveNextStep(everything)).toEqual({ kind: 'assignments', count: 2 })
  })

  it('2. then a pending class diagnostic', () => {
    const step = resolveNextStep({ ...everything, pendingAssignments: 0 })
    expect(step.kind).toBe('class-diagnostic')
    if (step.kind === 'class-diagnostic') expect(step.diagnostic.href).toBe('/calcab-diagnostic?assigned=x')
  })

  it('3. then flashcards due today (to the rated review session)', () => {
    const step = resolveNextStep({ ...everything, pendingAssignments: 0, classDiagnostics: [] })
    expect(step).toEqual({ kind: 'flashcards', count: 14 })
    if (step.kind === 'flashcards') expect(describeNextStep(step).href).toBe(FLASHCARD_REVIEW_HREF)
    expect(FLASHCARD_REVIEW_HREF).toBe('/flashcards/review')
  })

  it('4. then the next uncleared study-plan topic', () => {
    const step = resolveNextStep({ ...everything, pendingAssignments: 0, classDiagnostics: [], dueFlashcards: 0 })
    expect(step.kind).toBe('plan-topic')
    if (step.kind !== 'plan-topic') return
    expect(step.topic.slug).toBe('derivatives') // 'limits' is already cleared
    expect(step.done).toBe(1)
    expect(step.total).toBe(3)
    const copy = describeNextStep(step)
    expect(copy.href).toBe('/topics/derivatives/interactive')
    expect(copy.reason).toContain(`${TOPIC_CLEAR_PERCENT}%`)
  })

  it('5. no diagnostic: the free diagnostic for their course', () => {
    const step = resolveNextStep({ ...everything, pendingAssignments: 0, classDiagnostics: [], dueFlashcards: 0, plans: [] })
    expect(step).toEqual({ kind: 'take-diagnostic', courseLabel: 'AP Calculus AB', href: '/calcab-diagnostic' })
    if (step.kind === 'take-diagnostic') expect(describeNextStep(step).title).toBe('Take your free AP Calculus AB diagnostic')
  })

  it('never guesses "take a diagnostic" while plans are still loading', () => {
    expect(resolveNextStep({ ...base, plans: null }).kind).toBe('loading')
    // …but anything higher priority does not wait on the plans
    expect(resolveNextStep({ ...base, plans: null, dueFlashcards: 3 }).kind).toBe('flashcards')
  })
})

describe('resolveNextStep — plans and fallbacks', () => {
  it("prefers the student's own course plan over plan-status order", () => {
    const step = resolveNextStep({
      ...base,
      plans: [bioPlan, calcPlan],
      preferredCourse: { key: 'calcab', label: 'AP Calculus AB', diagnosticHref: '/calcab-diagnostic', courseHref: '/ap-calculus-ab' },
    })
    expect(step.kind === 'plan-topic' && step.topic.slug).toBe('derivatives')
  })

  it('falls through to another plan when the preferred one is all cleared', () => {
    const cleared = { ...calcPlan, topics: calcPlan.topics.map((t) => ({ ...t, isSatisfied: true })) }
    const step = resolveNextStep({
      ...base,
      plans: [cleared, bioPlan],
      preferredCourse: { key: 'calcab', label: 'AP Calculus AB', diagnosticHref: '/calcab-diagnostic', courseHref: '/ap-calculus-ab' },
    })
    expect(step.kind === 'plan-topic' && step.topic.slug).toBe('cells')
  })

  it('every plan topic cleared: retake the diagnostic', () => {
    const cleared = { ...calcPlan, topics: calcPlan.topics.map((t) => ({ ...t, isSatisfied: true })) }
    expect(resolveNextStep({ ...base, plans: [cleared] })).toEqual({
      kind: 'retake-diagnostic',
      planLabel: 'AP Calculus AB',
      href: '/calcab-diagnostic',
    })
  })

  it('MCAT: every topic cleared but the unit test not passed — take the unit test first', () => {
    const mcat = {
      ...calcPlan,
      courseKey: 'mcat',
      label: 'MCAT',
      diagnosticRoute: '/mcat-diagnostic',
      gated: true,
      canRetakeDiagnostic: false,
      topics: calcPlan.topics.map((t) => ({ ...t, isSatisfied: true })),
      unitTest: { available: true, passed: false, attempts: 1, path: '/mcat-unit-test', inProgressId: null },
    }
    const step = resolveNextStep({ ...base, plans: [mcat] })
    expect(step).toEqual({ kind: 'unit-test', planLabel: 'MCAT', href: '/mcat-unit-test', attempts: 1, resume: false, locks: true })
    expect(describeNextStep(step as Exclude<typeof step, { kind: 'loading' }>).cta).toBe('Retake the unit test')
    // Passed (or a teacher waiver opened the gate): the retake is next.
    expect(resolveNextStep({ ...base, plans: [{ ...mcat, unitTest: { ...mcat.unitTest, passed: true }, canRetakeDiagnostic: true }] }).kind).toBe('retake-diagnostic')
    expect(resolveNextStep({ ...base, plans: [{ ...mcat, canRetakeDiagnostic: true }] }).kind).toBe('retake-diagnostic')
  })

  it('SAT: the unit test is recommended next even though the diagnostic is open', () => {
    const sat = {
      ...calcPlan,
      courseKey: 'sat',
      label: 'SAT',
      diagnosticRoute: '/sat-diagnostic',
      canRetakeDiagnostic: true,
      topics: calcPlan.topics.map((t) => ({ ...t, isSatisfied: true })),
      unitTest: { available: true, passed: false, attempts: 0, path: '/sat-unit-test', inProgressId: null, locksDiagnostic: false },
    }
    const step = resolveNextStep({ ...base, plans: [sat] })
    expect(step).toMatchObject({ kind: 'unit-test', href: '/sat-unit-test', locks: false })
    expect(describeNextStep(step as Exclude<typeof step, { kind: 'loading' }>).reason).not.toMatch(/unlock/)
    expect(resolveNextStep({ ...base, plans: [{ ...sat, unitTest: { ...sat.unitTest, passed: true } }] }).kind).toBe('retake-diagnostic')
  })

  it('a course with no diagnostic: keep going in that course', () => {
    const step = resolveNextStep({
      ...base,
      preferredCourse: { key: null, label: 'Grade 6 Math', diagnosticHref: null, courseHref: '/grade-6-math' },
    })
    expect(step).toEqual({ kind: 'open-course', courseLabel: 'Grade 6 Math', href: '/grade-6-math' })
  })

  it('only an onboarding topic: start it in the interactive lesson', () => {
    expect(resolveNextStep({ ...base, firstTopicSlug: 'fractions' })).toEqual({
      kind: 'first-topic',
      href: '/topics/fractions/interactive',
    })
  })

  it('nothing known: choose a course', () => {
    const step = resolveNextStep(base)
    expect(step).toEqual({ kind: 'choose-course' })
    if (step.kind === 'choose-course') expect(describeNextStep(step).href).toBe('/topics')
  })

  it('every step has exactly one button (cta + href) and one reason', () => {
    const steps = [
      resolveNextStep({ ...base, pendingAssignments: 1 }),
      resolveNextStep({ ...base, classDiagnostics: [{ title: 'T', href: '/x' }] }),
      resolveNextStep({ ...base, dueFlashcards: 1 }),
      resolveNextStep({ ...base, plans: [calcPlan] }),
      resolveNextStep(base),
    ]
    for (const step of steps) {
      if (step.kind === 'loading') throw new Error('unexpected loading')
      const copy = describeNextStep(step)
      expect(copy.cta.length).toBeGreaterThan(0)
      expect(copy.href.startsWith('/')).toBe(true)
      expect(copy.reason.length).toBeGreaterThan(0)
    }
  })
})

describe('studyPlanTopicHref', () => {
  it('sends a bare topic link to the interactive lesson', () => {
    expect(studyPlanTopicHref(topic('derivatives'), 'calcab')).toBe('/topics/derivatives/interactive')
  })
  it('keeps MCAT topic pages (many subtopics have no written lesson)', () => {
    expect(studyPlanTopicHref(topic('mcat-enzymes'), 'mcat')).toBe('/topics/mcat-enzymes')
  })
  it('uses an enriched lesson path when the plan provides one', () => {
    const t = { ...topic('mcat-enzymes'), hasLesson: true, lessonPath: '/mcat/lessons/enzymes' }
    expect(studyPlanTopicHref(t, 'mcat')).toBe('/mcat/lessons/enzymes')
  })
})

describe('pickContinueTopic — "Continue where you left off"', () => {
  const activity = [
    { topicTitle: 'Mastered one', topicSlug: 'mastered', courseName: 'C', status: 'MASTERED', masteryLevel: 1 },
    { topicTitle: 'Cleared in plan', topicSlug: 'plan-cleared', courseName: 'C', status: 'COMPLETED', masteryLevel: 1 },
    { topicTitle: 'Next step topic', topicSlug: 'next-up', courseName: 'C', status: 'IN_PROGRESS', masteryLevel: 0.2 },
    { topicTitle: 'Half done', topicSlug: 'half', courseName: 'C', status: 'IN_PROGRESS', masteryLevel: 0.5 },
  ]

  it('skips mastered and plan-cleared topics, and the next-step topic', () => {
    const pick = pickContinueTopic(activity, new Set(['plan-cleared']), 'next-up')
    expect(pick?.topicSlug).toBe('half')
  })

  it('links to the interactive lesson, not the article', () => {
    const pick = pickContinueTopic(activity, new Set(['plan-cleared']), 'next-up')
    expect(pick?.href).toBe('/topics/half/interactive')
  })

  it('shows nothing when every recent topic is cleared', () => {
    expect(pickContinueTopic(activity.slice(0, 2), new Set(['plan-cleared']))).toBeNull()
  })
})

describe('isFirstVisit — "Welcome" vs "Welcome back"', () => {
  it('a brand-new student is welcomed, not welcomed back', () => {
    expect(isFirstVisit({ topicsStarted: 0, totalFlashcards: 0, longestStreak: 0, hasPlans: false })).toBe(true)
  })
  it('any activity at all makes it a return visit', () => {
    expect(isFirstVisit({ topicsStarted: 1, totalFlashcards: 0, longestStreak: 0, hasPlans: false })).toBe(false)
    expect(isFirstVisit({ topicsStarted: 0, totalFlashcards: 0, longestStreak: 1, hasPlans: false })).toBe(false)
    expect(isFirstVisit({ topicsStarted: 0, totalFlashcards: 0, longestStreak: 0, hasPlans: true })).toBe(false)
  })
})

describe('student course helpers', () => {
  it('ranks most-studied first (ties to the most recent), then onboarding, then diagnostic', () => {
    expect(
      rankStudentCourses({
        progressCourseSlugs: ['sat-prep', 'ap-biology', 'ap-biology', 'sat-prep', 'geometry'],
        chosenCourseSlug: 'mcat-prep',
        latestDiagnosticCourseSlug: 'ap-biology',
      }),
    ).toEqual(['sat-prep', 'ap-biology', 'geometry', 'mcat-prep'])
    expect(rankStudentCourses({ progressCourseSlugs: [], chosenCourseSlug: null, latestDiagnosticCourseSlug: 'act-prep' })).toEqual(['act-prep'])
  })

  it('maps DB and hub slugs to their diagnostic', () => {
    expect(courseDiagnosticForSlug('ap-calculus-ab')?.diagnosticHref).toBe('/calcab-diagnostic')
    expect(courseDiagnosticForSlug('organic-chemistry-2')?.key).toBe('ochem')
    expect(courseDiagnosticForSlug('precalculus')?.diagnosticHref).toBe('/precalc-diagnostic')
    expect(courseDiagnosticForSlug('mcat-prep')?.gated).toBe(true)
    expect(courseDiagnosticForSlug('grade-6-math')).toBeNull()
  })

  it('finds a hub\'s course from its diagnostic CTA (the ACT hub included)', () => {
    expect(courseDiagnosticForHref('/act-diagnostic')?.key).toBe('act')
    expect(courseDiagnosticForHref('/ap-african-american-studies-diagnostic')?.key).toBe('ap-aas')
    expect(courseDiagnosticForHref('/courses/grade-4-math')).toBeNull()
  })
})
