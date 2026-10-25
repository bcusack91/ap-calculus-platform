import { describe, it, expect } from 'vitest'
import { isMcatSlug } from '@/data/competitive-questions/mcat-bank'
import { courseLevelCandidates, lessonCompetitiveAlias, MCAT_LESSON_ALIASES, resolvePoolTopic } from '@/lib/class-pool-topic'

/**
 * A class match opens on the lesson topic the teacher just presented. SAT and
 * MCAT lesson slugs differ from their competitive banks, so they go through an
 * alias; topics with no competitive set fall back to the course-level pool;
 * courses with no competitive questions can't open a pool.
 */
describe('class pool topic routing', () => {
  it('every MCAT lesson alias targets a real MCAT bank slug', () => {
    for (const [lesson, target] of Object.entries(MCAT_LESSON_ALIASES)) {
      expect(isMcatSlug(target), `${lesson} → ${target}`).toBe(true)
    }
  })

  it('a lesson slug with its own competitive set is used as-is', async () => {
    expect(await resolvePoolTopic('estimating-limits-graphs', 'ap-calculus-ab')).toEqual({ scope: 'topic', matchTopicSlug: 'estimating-limits-graphs' })
  })

  it('SAT lessons map to their lesson-aligned challenge', async () => {
    expect(lessonCompetitiveAlias('sat-quadratic-equations')).toBe('sat-topic-quadratic-equations')
    expect(await resolvePoolTopic('sat-quadratic-equations', 'sat-prep')).toEqual({ scope: 'topic', matchTopicSlug: 'sat-topic-quadratic-equations' })
  })

  it('MCAT lessons map to their bank subtopic or area', async () => {
    expect(await resolvePoolTopic('mcat-cell-biology-cell-cycle-mcat', 'mcat-prep')).toEqual({ scope: 'topic', matchTopicSlug: 'mcat-biology-cell-cycle-mcat' })
  })

  it('a topic with no competitive set falls back to the whole course', async () => {
    // SAT "Complex Numbers" was retired from the Digital SAT, so it has no challenge.
    expect(await resolvePoolTopic('sat-complex-numbers', 'sat-prep')).toEqual({ scope: 'course', matchTopicSlug: 'sat' })
    expect(await resolvePoolTopic('mcat-test-day-strategy-mcat', 'mcat-prep')).toEqual({ scope: 'course', matchTopicSlug: 'mcat' })
  })

  it('a course with no competitive questions cannot open a pool', async () => {
    expect(await resolvePoolTopic('act-plane-geometry-trig', 'act-prep')).toEqual({ scope: 'none', matchTopicSlug: null })
  })

  it('course-level candidates cover the competitive spellings', () => {
    expect(courseLevelCandidates('ap-physics-1')).toEqual(['ap-physics1', 'ap-physics-1'])
    expect(courseLevelCandidates('sat-prep')).toEqual(['sat', 'sat-prep'])
    expect(courseLevelCandidates(null)).toEqual([])
  })
})
