/**
 * The dashboard's ONE "Your next step" — which single action a student should
 * take right now, and the "Continue where you left off" topic beside it.
 *
 * Priority (owner rule, UX plan Phase 2):
 *   1. a pending teacher assignment
 *   2. a pending class diagnostic
 *   3. flashcards due today
 *   4. the next uncleared topic in the student's diagnostic study plan
 *      (or, once every plan topic is cleared, the diagnostic retake)
 *   5. no diagnostic yet: the free diagnostic for their course
 *      (a course without one: keep going in that course / the onboarding
 *      topic; nothing known: choose a course)
 *
 * Pure so it can be unit-tested; the dashboard page feeds it what it fetched.
 */

import { pickNextPendingTopic, planTopicHref, type PlanTopic } from '@/components/StudyPlanNextUp'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

/** The rated review session — the one flashcard destination on the dashboard. */
export const FLASHCARD_REVIEW_HREF = '/flashcards/review'

export interface NextStepPlan {
  courseKey: string
  label: string
  diagnosticRoute: string
  gated?: boolean
  canRetakeDiagnostic?: boolean
  topics: PlanTopic[]
}

export interface NextStepClassDiagnostic {
  title: string
  href: string
  classroomName?: string
  dueDate?: string | null
}

export interface NextStepCourse {
  /** CLASS_PLAN_COURSES key, or null for a course with no diagnostic. */
  key: string | null
  label: string
  /** The course's diagnostic, when it has one. */
  diagnosticHref: string | null
  /** The course's page (hub), for a course with no diagnostic. */
  courseHref: string
}

export interface NextStepInput {
  pendingAssignments: number
  classDiagnostics: NextStepClassDiagnostic[]
  dueFlashcards: number
  /** Diagnostic study plans (plan-status); null while still loading. */
  plans: NextStepPlan[] | null
  /** The student's chosen / most-studied course, if known. */
  preferredCourse: NextStepCourse | null
  /** Onboarding's first topic, for a student with no course activity yet. */
  firstTopicSlug?: string | null
}

export type NextStep =
  | { kind: 'loading' }
  | { kind: 'assignments'; count: number }
  | { kind: 'class-diagnostic'; diagnostic: NextStepClassDiagnostic; count: number }
  | { kind: 'flashcards'; count: number }
  | { kind: 'plan-topic'; topic: PlanTopic; courseKey: string; planLabel: string; done: number; total: number }
  | { kind: 'retake-diagnostic'; planLabel: string; href: string }
  | { kind: 'take-diagnostic'; courseLabel: string; href: string }
  | { kind: 'open-course'; courseLabel: string; href: string }
  | { kind: 'first-topic'; href: string }
  | { kind: 'choose-course' }

export function resolveNextStep(input: NextStepInput): NextStep {
  if (input.pendingAssignments > 0) return { kind: 'assignments', count: input.pendingAssignments }
  if (input.classDiagnostics.length > 0) {
    return { kind: 'class-diagnostic', diagnostic: input.classDiagnostics[0], count: input.classDiagnostics.length }
  }
  if (input.dueFlashcards > 0) return { kind: 'flashcards', count: input.dueFlashcards }

  // Never guess "take a diagnostic" before we know whether they have a plan.
  if (input.plans === null) return { kind: 'loading' }

  const plans = input.plans.filter((p) => Array.isArray(p.topics) && p.topics.length > 0)
  if (plans.length > 0) {
    const preferredKey = input.preferredCourse?.key ?? null
    // The preferred course's plan first, then plan-status's order (most
    // pending work first).
    const ordered = [
      ...plans.filter((p) => p.courseKey === preferredKey),
      ...plans.filter((p) => p.courseKey !== preferredKey),
    ]
    for (const plan of ordered) {
      const next = pickNextPendingTopic(plan.topics)
      if (next) {
        const done = plan.topics.filter((t) => t.isSatisfied).length
        return { kind: 'plan-topic', topic: next, courseKey: plan.courseKey, planLabel: plan.label, done, total: plan.topics.length }
      }
    }
    // Every recommended topic is cleared: measure the growth.
    const plan = ordered[0]
    return { kind: 'retake-diagnostic', planLabel: plan.label, href: plan.diagnosticRoute }
  }

  const course = input.preferredCourse
  if (course?.diagnosticHref) {
    return { kind: 'take-diagnostic', courseLabel: course.label, href: course.diagnosticHref }
  }
  if (course) return { kind: 'open-course', courseLabel: course.label, href: course.courseHref }
  if (input.firstTopicSlug) return { kind: 'first-topic', href: `/topics/${input.firstTopicSlug}/interactive` }
  return { kind: 'choose-course' }
}

/**
 * Where a plan topic starts. The interactive lesson is where the loop runs
 * (entrance quiz, lesson parts, exit quiz), so a bare topic page link goes
 * there — except for the MCAT, whose subtopic pages often have no written
 * lesson (its enriched plan carries real lesson/quiz paths instead).
 */
export function studyPlanTopicHref(topic: PlanTopic, courseKey: string): string {
  const href = planTopicHref(topic)
  if (courseKey !== 'mcat' && href === `/topics/${topic.slug}`) return `${href}/interactive`
  return href
}

export interface NextStepCopy {
  title: string
  /** One sentence of why. */
  reason: string
  cta: string
  href: string
}

/** The card's text and its one button, for every step but 'loading'. */
export function describeNextStep(step: Exclude<NextStep, { kind: 'loading' }>): NextStepCopy {
  switch (step.kind) {
    case 'assignments':
      return {
        title: `${step.count} assignment${step.count === 1 ? '' : 's'} from your teacher`,
        reason: 'Class work comes first. Your teacher sees it when you finish.',
        cta: 'See your assignments',
        href: '/assignments',
      }
    case 'class-diagnostic': {
      const d = step.diagnostic
      return {
        title: d.classroomName ? `${d.classroomName}: ${d.title}` : d.title,
        reason: 'Your teacher assigned this diagnostic. It shows them what the class needs and builds your study plan.',
        cta: 'Take the diagnostic',
        href: d.href,
      }
    }
    case 'flashcards':
      return {
        title: `${step.count} flashcard${step.count === 1 ? '' : 's'} due today`,
        reason: 'Reviewing cards on the day they are due is what makes them stick. It takes a few minutes.',
        cta: 'Review your flashcards',
        href: FLASHCARD_REVIEW_HREF,
      }
    case 'plan-topic':
      return {
        title: step.topic.name,
        reason: `Next in your ${step.planLabel} study plan (${step.done} of ${step.total} cleared). Score ${TOPIC_CLEAR_PERCENT}% on the exit quiz to clear it.`,
        cta: 'Start this topic',
        href: studyPlanTopicHref(step.topic, step.courseKey),
      }
    case 'retake-diagnostic':
      return {
        title: `Retake the ${step.planLabel} diagnostic`,
        reason: 'You cleared every topic in your study plan. A fresh diagnostic shows your growth and builds a new plan.',
        cta: 'Retake the diagnostic',
        href: step.href,
      }
    case 'take-diagnostic':
      return {
        title: `Take your free ${step.courseLabel} diagnostic`,
        reason: 'It finds what you already know and turns the rest into your study plan.',
        cta: 'Start the diagnostic',
        href: step.href,
      }
    case 'open-course':
      return {
        title: `Keep going in ${step.courseLabel}`,
        reason: 'Pick the next topic in your course: a short lesson, then an exit quiz.',
        cta: 'Open your course',
        href: step.href,
      }
    case 'first-topic':
      return {
        title: 'Start your first topic',
        reason: 'Each topic is a short lesson followed by an exit quiz.',
        cta: 'Start the topic',
        href: step.href,
      }
    case 'choose-course':
      return {
        title: 'Choose a course',
        reason: 'Pick what you are studying and take its free diagnostic to get a study plan.',
        cta: 'Choose a course',
        href: '/topics',
      }
  }
}

export interface ContinueActivity {
  topicTitle: string
  topicSlug: string
  courseName: string
  status: string
  masteryLevel: number
}

/**
 * "Continue where you left off": the most recent topic that is NOT already
 * cleared (MASTERED, or satisfied in a study plan) and is not the topic the
 * next-step card already points at. Always opens the interactive lesson.
 */
export function pickContinueTopic(
  recentActivity: ContinueActivity[],
  clearedSlugs: ReadonlySet<string>,
  excludeSlug?: string | null,
): (ContinueActivity & { href: string }) | null {
  const topic = recentActivity.find(
    (a) => a.status !== 'MASTERED' && !clearedSlugs.has(a.topicSlug) && a.topicSlug !== excludeSlug,
  )
  return topic ? { ...topic, href: `/topics/${topic.topicSlug}/interactive` } : null
}

/**
 * "Welcome" (not "Welcome back") for a student who has never done anything:
 * no topics, no flashcards, no streak day, no diagnostic plan.
 */
export function isFirstVisit(input: {
  topicsStarted: number
  totalFlashcards: number
  longestStreak: number
  hasPlans: boolean
}): boolean {
  return input.topicsStarted === 0 && input.totalFlashcards === 0 && input.longestStreak === 0 && !input.hasPlans
}
