/**
 * The lobby topic picker looks up a competitive course's curriculum Course row
 * by slug. Every catalog course must resolve to the same Course its own
 * competitive page queries, or the picker shows "No topics available" (as AP
 * Physics 1 did: catalog 'ap-physics1', curriculum 'ap-physics-1').
 */
import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import path from 'path'
import { COMPETITIVE_COURSES, curriculumCourseSlug } from '@/lib/competitive-catalog'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'

describe('competitive catalog → curriculum course', () => {
  it("resolves every course to the Course its own topics endpoint queries", () => {
    const checked: string[] = []
    for (const c of COMPETITIVE_COURSES) {
      const cfg = COURSE_PAGE_CONFIGS[c.slug]
      if (!cfg) continue // SAT and MCAT have their own banks, no Course row
      const file = path.join(process.cwd(), 'src/app', cfg.topicsEndpoint, 'route.ts')
      expect(existsSync(file), `${c.slug}: ${cfg.topicsEndpoint}`).toBe(true)
      const src = readFileSync(file, 'utf8')
      const queried = /course\.findUnique\(\{\s*where: \{ slug: '([^']+)' \}/.exec(src)?.[1] ?? /slug: '([^']+)'/.exec(src)?.[1]
      expect(queried, `${c.slug}: endpoint has no course slug`).toBeTruthy()
      expect(curriculumCourseSlug(c.slug), c.slug).toBe(queried)
      checked.push(c.slug)
    }
    expect(checked).toContain('ap-physics1')
    expect(checked.length).toBeGreaterThanOrEqual(20)
  })

  it('maps the renamed courses and passes others through', () => {
    expect(curriculumCourseSlug('ap-physics1')).toBe('ap-physics-1')
    expect(curriculumCourseSlug('ap-enviro')).toBe('ap-environmental-science')
    expect(curriculumCourseSlug('ap-chemistry')).toBe('ap-chemistry')
    expect(curriculumCourseSlug('not-a-course')).toBe('not-a-course')
  })
})
