/**
 * StartStudyPlanButton (diagnostic results → dated study schedule), UX Phase 3
 * friction #3.
 *
 * Regressions guarded here:
 *   - After a successful POST it pushed /study-plan, a route that does not
 *     exist: a 404 off the second-most prominent block on the results page.
 *     Every path literal in the component must resolve to a real app route.
 *   - The adopted template's first task was "Take AP Chemistry Diagnostic" —
 *     the diagnostic the student had just finished. A fresh diagnostic ticks
 *     that task at adopt time (markDiagnosticTaskDone).
 */
import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { courseStudyPlanMap } from '@/data/course-feature-config'
import { STUDY_SCHEDULE_HREF } from '@/components/StartStudyPlanButton'
import { DIAGNOSTIC_TASK_FRESH_DAYS, isDiagnosticTask, markDiagnosticTaskDone, type ResolvedTask } from '@/lib/adaptive-study-plan'

const COMPONENT = 'src/components/StartStudyPlanButton.tsx'

/** The app route a link literal lands on: query and template parts dropped. */
function routeOf(literal: string): string {
  return literal.split('?')[0].split('${')[0].replace(/\/$/, '') || '/'
}

function pageExists(route: string): boolean {
  return existsSync(path.join(process.cwd(), 'src/app', route, 'page.tsx'))
}

describe('StartStudyPlanButton links only real routes', () => {
  const src = readFileSync(path.join(process.cwd(), COMPONENT), 'utf8')

  it('every path literal (router.push, href, constants) resolves to a src/app page', () => {
    // Every quoted or template string that starts with '/' — API endpoints
    // (/api…) are fetch targets, not navigations.
    const literals = [...src.matchAll(/(['"`])(\/[^'"`\n]*)\1/g)].map((m) => m[2]).filter((l) => !l.startsWith('/api'))
    expect(literals.length).toBeGreaterThan(0)
    for (const literal of literals) {
      const route = routeOf(literal)
      expect(pageExists(route), `${literal} → src/app${route}/page.tsx must exist`).toBe(true)
    }
    expect(src).not.toContain("'/study-plan'")
  })

  it('lands on the dashboard tab that lists study schedules', () => {
    expect(STUDY_SCHEDULE_HREF).toBe('/dashboard?tab=practice')
    expect(src).toContain('router.push(STUDY_SCHEDULE_HREF)')
    const dashboard = readFileSync(path.join(process.cwd(), 'src/app/dashboard/page.tsx'), 'utf8')
    expect(dashboard).toContain("['practice', 'Practice']")
    expect(dashboard).toMatch(/tab === 'practice' && \([\s\S]*<StudyPlanner \/>/)
  })

  it('the fallback "Choose a study schedule" page exists for every course', () => {
    for (const [course, cfg] of Object.entries(courseStudyPlanMap)) {
      expect(pageExists(cfg.href), `${course}: ${cfg.href}`).toBe(true)
    }
  })
})

describe('markDiagnosticTaskDone — the plan does not open with the diagnostic just taken', () => {
  const start = new Date('2026-10-20T15:00:00Z')
  const task = (title: string, type = 'QUIZ', topicSlug?: string, sortOrder = 0): ResolvedTask => ({
    title,
    type,
    topicSlug,
    dueDate: start,
    sortOrder,
  })
  const template = [
    task('Take AP Chemistry Diagnostic'),
    task('Atomic Structure & Periodicity Review', 'LESSON', 'electron-configuration', 1),
    task('Stoichiometry Quiz', 'QUIZ', 'stoichiometry-limiting-reactants', 2),
    task('Review Diagnostic Results & Set Goals', 'CUSTOM', undefined, 3),
  ]

  it('recognises every template spelling of the diagnostic task, and nothing else', () => {
    for (const title of ['Take Diagnostic', 'Take the Diagnostic', 'Take AP Chemistry Diagnostic', 'Take SAT Diagnostic Test', 'Take MCAT Diagnostic Test', 'Take the Organic Chemistry 1 Diagnostic']) {
      expect(isDiagnosticTask({ title }), title).toBe(true)
    }
    expect(isDiagnosticTask({ title: 'Review Diagnostic Results & Set Goals' })).toBe(false)
    expect(isDiagnosticTask({ title: 'Stoichiometry Quiz', topicSlug: 'stoichiometry-limiting-reactants' })).toBe(false)
    // A topic-linked task is never the course diagnostic.
    expect(isDiagnosticTask({ title: 'Take Diagnostic', topicSlug: 'limits' })).toBe(false)
  })

  it('ticks the diagnostic task, dated when it was taken, so the first open task is the first lesson', () => {
    const takenAt = new Date('2026-10-20T14:30:00Z')
    const out = markDiagnosticTaskDone(template, takenAt, start)
    expect(out[0]).toMatchObject({ title: 'Take AP Chemistry Diagnostic', completed: true, completedAt: takenAt })
    expect(out.slice(1).every((t) => !t.completed)).toBe(true)
    expect(out.find((t) => !t.completed)?.title).toBe('Atomic Structure & Periodicity Review')
    // Order and dates untouched.
    expect(out.map((t) => t.sortOrder)).toEqual([0, 1, 2, 3])
    expect(template[0].completed).toBeUndefined()
  })

  it('leaves the task open when the diagnostic is older than the freshness window', () => {
    const stale = new Date(start.getTime() - (DIAGNOSTIC_TASK_FRESH_DAYS + 1) * 86_400_000)
    expect(markDiagnosticTaskDone(template, stale, start)).toEqual(template)
    const fresh = new Date(start.getTime() - (DIAGNOSTIC_TASK_FRESH_DAYS - 1) * 86_400_000)
    expect(markDiagnosticTaskDone(template, fresh, start)[0].completed).toBe(true)
  })
})
