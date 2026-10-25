import { describe, it, expect } from 'vitest'
import { classCourseCount, orderLauncherCourses, type LauncherCourse } from '@/lib/deck-launcher-courses'

const library: LauncherCourse[] = [
  { slug: 'mcat-prep', name: 'MCAT', deckCount: 102 },
  { slug: 'sat-prep', name: 'SAT', deckCount: 87 },
  { slug: 'ap-calculus-bc', name: 'AP Calculus BC', deckCount: 58 },
  { slug: 'ap-precalculus', name: 'AP Precalculus', deckCount: 21 },
  { slug: 'empty-course', name: 'Empty', deckCount: 0 },
]
const slugs = (cs: LauncherCourse[]) => cs.map((c) => c.slug)

/**
 * The launcher used to offer only the roster's most-diagnosed course, so an
 * SAT or AP class whose students had not taken a diagnostic got no launcher
 * (owner, 2026-10-25). These pin the new order.
 */
describe('live-session slide launcher courses', () => {
  it('offers every course with slides to a class with no diagnostics and no assigned course', () => {
    expect(slugs(orderLauncherCourses(library, [], []))).toEqual(['ap-calculus-bc', 'ap-precalculus', 'mcat-prep', 'sat-prep'])
  })

  it('puts the class\'s assigned courses first, then diagnosed courses, then the rest', () => {
    const ordered = orderLauncherCourses(library, ['sat-prep'], ['ap-precalculus', 'sat-prep'])
    expect(slugs(ordered)).toEqual(['sat-prep', 'ap-precalculus', 'ap-calculus-bc', 'mcat-prep'])
    expect(classCourseCount(ordered, ['sat-prep'], ['ap-precalculus', 'sat-prep'])).toBe(2)
  })

  it('keeps an MCAT class working exactly as before (its diagnosed course first)', () => {
    expect(orderLauncherCourses(library, [], ['mcat-prep'])[0].slug).toBe('mcat-prep')
  })

  it('skips courses without decks, pseudo-courses and missing slugs', () => {
    const ordered = orderLauncherCourses(library, ['mcat-competitive', 'empty-course'], [null, undefined])
    expect(slugs(ordered)).not.toContain('empty-course')
    expect(slugs(ordered)).not.toContain('mcat-competitive')
    expect(classCourseCount(ordered, ['mcat-competitive', 'empty-course'], [null])).toBe(0)
  })
})
