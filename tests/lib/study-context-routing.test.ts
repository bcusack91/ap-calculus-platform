/**
 * Deck routing: a course study mode must hold ONLY that course's cards.
 *
 * The bug this pins: unlocks wrote into whatever mode was ACTIVE, so finishing
 * an SAT unit while "MCAT Prep" was selected filed SAT cards into the MCAT
 * deck (and vice versa). Personal is the "everything" deck and always gets
 * a copy.
 */
import { describe, it, expect } from 'vitest'
import { unlockTargetContexts, courseSlugOfContext } from '@/lib/study-context'

const SAT = 'course:sat-prep'
const MCAT = 'course:mcat-prep'
const CLASS = 'class:abc123'

describe('unlockTargetContexts', () => {
  it('never files a topic into a different course mode', () => {
    const targets = unlockTargetContexts({
      activeContext: MCAT,
      topicCourseSlug: 'sat-prep',
      hasTopicCourseMode: true,
    })
    expect(targets).not.toContain(MCAT)
    expect(targets).toContain(SAT)
  })

  it('files MCAT work into the MCAT deck while SAT mode is active', () => {
    const targets = unlockTargetContexts({
      activeContext: SAT,
      topicCourseSlug: 'mcat-prep',
      hasTopicCourseMode: true,
    })
    expect(targets).not.toContain(SAT)
    expect(targets).toContain(MCAT)
  })

  it('always includes personal, the everything deck', () => {
    for (const activeContext of ['personal', SAT, MCAT, CLASS]) {
      expect(
        unlockTargetContexts({ activeContext, topicCourseSlug: 'sat-prep', hasTopicCourseMode: true }),
      ).toContain('personal')
    }
  })

  it('uses the active course mode even before it holds any cards', () => {
    const targets = unlockTargetContexts({
      activeContext: SAT,
      topicCourseSlug: 'sat-prep',
      hasTopicCourseMode: false,
    })
    expect(targets).toContain(SAT)
  })

  it('skips a course mode the student has not started', () => {
    const targets = unlockTargetContexts({
      activeContext: 'personal',
      topicCourseSlug: 'sat-prep',
      hasTopicCourseMode: false,
    })
    expect(targets).toEqual(['personal'])
  })

  it('keeps class decks, which may legitimately span courses', () => {
    const targets = unlockTargetContexts({
      activeContext: CLASS,
      topicCourseSlug: 'sat-prep',
      hasTopicCourseMode: true,
    })
    expect(targets).toEqual(expect.arrayContaining(['personal', SAT, CLASS]))
  })

  it('sends course-less topics to personal only', () => {
    expect(
      unlockTargetContexts({ activeContext: MCAT, topicCourseSlug: null, hasTopicCourseMode: false }),
    ).toEqual(['personal'])
  })

  it('never returns duplicates', () => {
    const targets = unlockTargetContexts({
      activeContext: SAT,
      topicCourseSlug: 'sat-prep',
      hasTopicCourseMode: true,
    })
    expect(new Set(targets).size).toBe(targets.length)
  })
})

describe('courseSlugOfContext', () => {
  it('reads the slug from a course key only', () => {
    expect(courseSlugOfContext(SAT)).toBe('sat-prep')
    expect(courseSlugOfContext('personal')).toBeNull()
    expect(courseSlugOfContext(CLASS)).toBeNull()
    expect(courseSlugOfContext('course:')).toBeNull()
  })
})
