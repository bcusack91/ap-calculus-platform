/**
 * AP Calculus BC includes every AP Calculus AB lesson (owner, Oct 2026). The
 * inclusion lives in one place, src/lib/course-includes.ts; these tests pin
 * its data to the CED and keep new code from going around it.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import {
  CALC_BC_UNIT_NAMES,
  CALC_CATEGORIES,
  RETIRED_CALC_CATEGORIES,
  courseCategoryLayout,
  courseContainsTopic,
  courseLayoutTopics,
  courseTopicWhere,
  coursesContaining,
  coursesIn,
  coursesTopicWhere,
} from '@/lib/course-includes'
import { LEGACY_TOPIC_REDIRECTS, isHiddenTopicSlug } from '@/lib/legacy-topic-redirects'
import { RETIRED_AP_UNITS } from '@/data/retired-ap-topics'
import { AP_CALCULUS_BC_UNITS } from '@/data/unit-tests/ap-calculus-bc'
import { AP_CALCULUS_AB_UNITS } from '@/data/unit-tests/ap-calculus-ab'
import { groupByLayout } from '@/lib/course-hub-sections'
import { pickStudyCourse } from '@/lib/study-course-server'
import { resolveStudyCourse } from '@/lib/use-study-course'
import { unlockTargetContexts } from '@/lib/study-context'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { TOPIC_SLUGS as BC_DAILY_SLUGS } from '@/data/ap-calcbc-daily-question'
import { TOPIC_SLUGS as AB_DAILY_SLUGS } from '@/data/ap-calcab-daily-question'

const AB = 'ap-calculus-ab'
const BC = 'ap-calculus-bc'
const FIXTURE: Record<string, string[]> = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'tests/fixtures/ap-lesson-topic-slugs.json'), 'utf8'),
)

/**
 * Topics whose lesson is being authored in the same wave (CED 4.7). Accepted
 * as "has a lesson" until the registry has it; remove once registered.
 */
const PENDING_LESSONS = new Set<string>() // lhopitals-rule landed 2026-10-22

describe('course inclusion', () => {
  it('BC includes AB, never the reverse', () => {
    expect(coursesIn(BC)).toEqual([BC, AB])
    expect(coursesIn(AB)).toEqual([AB])
    expect(coursesContaining(AB)).toEqual([AB, BC])
    expect(coursesContaining(BC)).toEqual([BC])
    expect(coursesIn('ap-chemistry')).toEqual(['ap-chemistry'])
  })

  it('BC leaves out the AB exam review (D2) but contains every other AB topic', () => {
    expect(courseContainsTopic(BC, AB, 'ap-exam-review-calcab')).toBe(false)
    expect(courseContainsTopic(BC, AB, 'tables-data-calcab')).toBe(true)
    expect(courseContainsTopic(BC, AB, 'chain-rule-calcab')).toBe(true)
    expect(courseContainsTopic(AB, BC, 'polar-calculus-calcbc')).toBe(false)
  })

  it('courseTopicWhere is the plain filter for a course with no inclusions', () => {
    expect(courseTopicWhere('ap-chemistry')).toEqual({ category: { course: { slug: 'ap-chemistry' } } })
    expect(courseTopicWhere(BC)).toEqual({
      category: { course: { slug: { in: [BC, AB] } } },
      slug: { notIn: ['ap-exam-review-calcab'] },
    })
    expect(coursesTopicWhere([AB, AB, BC]).OR).toHaveLength(2)
  })
})

describe('calculus CED layout', () => {
  const abLayout = courseCategoryLayout(AB)!
  const bcLayout = courseCategoryLayout(BC)!

  it('AB is 8 CED units + exam prep; BC is 10 CED units + exam prep', () => {
    expect(abLayout.map((s) => s.unitNumber)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, null])
    expect(bcLayout.map((s) => s.unitNumber)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null])
  })

  it('BC lists every AB topic except the AB exam review, each once, and every BC topic', () => {
    const bc = courseLayoutTopics(BC)!
    const ab = courseLayoutTopics(AB)!
    expect(new Set(bc).size).toBe(bc.length)
    expect(new Set(ab).size).toBe(ab.length)
    for (const t of ab) expect(bc.includes(t), t).toBe(t !== 'ap-exam-review-calcab')
    for (const c of CALC_CATEGORIES.filter((x) => x.course === BC)) for (const t of c.topics) expect(bc).toContain(t)
    // AB: 37 live topics + L'Hospital (4.7). BC: all of AB but the AB exam review, + 20 BC-only.
    expect(ab).toHaveLength(38)
    expect(bc).toHaveLength(37 + 20)
  })

  it('BC Units 6-8 put the AB topics first, then the BC-only ones', () => {
    const u6 = bcLayout.find((s) => s.unitNumber === 6)!.topics
    expect(u6.slice(0, 4)).toEqual(CALC_CATEGORIES.find((c) => c.slug === 'calcab-integration')!.topics)
    expect(u6.slice(4)).toEqual(['integration-by-parts-calcbc', 'partial-fractions-calcbc', 'improper-integrals-calcbc', 'advanced-integration-calcbc'])
    expect(bcLayout.find((s) => s.unitNumber === 8)!.topics.at(-1)).toBe('arc-length-surface-area-calcbc')
  })

  it('unit names match the unit tests (the hub, unit tests and qbank agree)', () => {
    for (const u of AP_CALCULUS_BC_UNITS) expect(CALC_BC_UNIT_NAMES[u.unitNumber], `BC unit ${u.unitNumber}`).toBe(u.name)
    for (const u of AP_CALCULUS_AB_UNITS) expect(abLayout.find((s) => s.unitNumber === u.unitNumber)?.name, `AB unit ${u.unitNumber}`).toBe(u.name)
  })

  it('every layout topic is a production lesson topic, never a legacy or retired slug', () => {
    for (const c of CALC_CATEGORIES) {
      for (const t of c.topics) {
        expect(isHiddenTopicSlug(t), `${t} is legacy/retired`).toBe(false)
        expect(FIXTURE[c.course], `${c.course} fixture`).toContain(t)
        expect(hasInteractiveLesson(t) || PENDING_LESSONS.has(t), `${t} has no lesson`).toBe(true)
      }
    }
  })

  it('retired calculus Categories 308 to a live unit and are not live themselves', () => {
    const live = new Set(CALC_CATEGORIES.map((c) => c.slug))
    for (const [from, { redirect }] of Object.entries(RETIRED_CALC_CATEGORIES)) {
      expect(live.has(from), from).toBe(false)
      expect(live.has(redirect), `${from} -> ${redirect}`).toBe(true)
      expect(RETIRED_AP_UNITS[from], `${from} also in RETIRED_AP_UNITS`).toBeUndefined()
    }
  })

  it('groupByLayout drops legacy rows and places unlisted live rows by Category', () => {
    const rows = [
      { slug: 'chain-rule', cat: 'derivatives' }, // legacy 308
      { slug: 'chain-rule-calcab', cat: 'calcab-differentiation-composite' },
      { slug: 'related-rates', cat: 'derivatives' }, // pre-restructure Category
      { slug: 'some-new-topic', cat: 'calcbc-arc-length' },
    ]
    const groups = groupByLayout(bcLayout, rows, (r) => r.cat)
    const all = groups.flatMap((g) => g.rows.map((r) => r.slug))
    expect(all).not.toContain('chain-rule')
    expect(groups.find((g) => g.section.unitNumber === 4)!.rows.map((r) => r.slug)).toEqual(['related-rates'])
    expect(groups.find((g) => g.section.unitNumber === 8)!.rows.map((r) => r.slug)).toEqual(['some-new-topic'])
  })
})

describe('redirects', () => {
  it('power-rule 308s to the basic rules; lhopitals-rule is live (CED 4.7)', () => {
    expect(LEGACY_TOPIC_REDIRECTS['power-rule']).toBe('basic-differentiation-rules-calcab')
    expect(LEGACY_TOPIC_REDIRECTS['lhopitals-rule']).toBeUndefined()
  })
})

describe('study course (BC student on an AB topic)', () => {
  const at = (iso: string) => new Date(iso)
  it('the active study mode decides; else the most recent signal; else the topic course', () => {
    const candidates = [AB, BC]
    expect(pickStudyCourse({ topicCourse: AB, candidates, activeContextCourse: BC, signals: [{ course: AB, at: at('2026-10-01') }] })).toBe(BC)
    expect(pickStudyCourse({ topicCourse: AB, candidates, activeContextCourse: null, signals: [
      { course: AB, at: at('2026-09-01') },
      { course: BC, at: at('2026-10-01') },
    ] })).toBe(BC)
    expect(pickStudyCourse({ topicCourse: AB, candidates, activeContextCourse: null, signals: [
      { course: AB, at: at('2026-10-02') },
      { course: BC, at: at('2026-10-01') },
    ] })).toBe(AB)
    expect(pickStudyCourse({ topicCourse: AB, candidates, activeContextCourse: 'mcat-prep', signals: [] })).toBe(AB)
  })

  it('the client only swaps to a course that contains the topic course', () => {
    const topic = { courseSlug: AB, courseName: 'AP Calculus AB' }
    expect(resolveStudyCourse(topic, BC)).toEqual({ courseSlug: BC, courseName: 'AP Calculus BC' })
    expect(resolveStudyCourse(topic, 'ap-chemistry')).toBe(topic)
    expect(resolveStudyCourse({ courseSlug: BC, courseName: 'AP Calculus BC' }, AB).courseSlug).toBe(BC)
  })

  it('an AB card unlock lands in the BC deck when the student has BC mode', () => {
    const targets = unlockTargetContexts({ activeContext: 'personal', topicCourseSlug: AB, hasTopicCourseMode: false, containingCourseModes: [BC] })
    expect(targets).toEqual(['personal', `course:${BC}`])
    expect(unlockTargetContexts({ activeContext: `course:${BC}`, topicCourseSlug: AB })).toContain(`course:${BC}`)
    // Never the other way: a BC topic does not land in an AB deck.
    expect(unlockTargetContexts({ activeContext: `course:${AB}`, topicCourseSlug: BC })).toEqual(['personal'])
  })
})

describe('BC daily question', () => {
  it('rotates AB and BC-only topics, all with exit pools', () => {
    for (const t of AB_DAILY_SLUGS) expect(BC_DAILY_SLUGS).toContain(t)
    expect(BC_DAILY_SLUGS.filter((t) => t.endsWith('-calcbc')).length).toBe(18)
    for (const t of BC_DAILY_SLUGS) expect(hasExitQuiz(t), t).toBe(true)
  })
})

/**
 * Guard: "the topics of a course" must go through the helper, or a BC view
 * silently misses the AB lessons. A new `course: { slug ... }` query in src/
 * fails here unless it uses coursesIn() on that line or is allowlisted below
 * with the reason it is single-course on purpose.
 */
const ALLOWED_COURSE_QUERIES: Record<string, string> = {
  'src/lib/course-includes.ts': 'the helper itself',
  'src/lib/course-hub-sections.ts': 'type of a selected row; the query uses coursesIn',
  'src/app/api/teacher/slide-library/route.ts': '`courses` is coursesIn(courseSlug)',
  'src/app/api/act-score-predictor/route.ts': 'ACT only',
  'src/lib/sat-prediction-server.ts': 'SAT only',
  'src/lib/static-topic-params.ts': 'build-time SEO prerender list; a topic page belongs to its owning course',
}
/** Files that load a calculus course's own Categories directly, on purpose. */
const ALLOWED_CALC_CATEGORY_READS: Record<string, string> = {
  'src/app/api/competitive/calculus-ab-topics/route.ts': 'competitive units follow the per-course competitive bank',
  'src/app/api/competitive/calculus-bc-topics/route.ts': 'competitive units follow the BC-only competitive bank',
}

function srcFiles(dir: string): string[] {
  const out: string[] = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...srcFiles(p))
    else if (/\.(ts|tsx)$/.test(e.name) && !/ 2\.(ts|tsx)$/.test(e.name)) out.push(p)
  }
  return out
}

describe('guard: course topic queries go through course-includes', () => {
  const files = srcFiles(path.join(process.cwd(), 'src')).map((f) => path.relative(process.cwd(), f).split(path.sep).join('/'))

  it('no new single-course `course: { slug` query outside the allowlist', () => {
    const offenders: string[] = []
    for (const f of files) {
      if (ALLOWED_COURSE_QUERIES[f]) continue
      const lines = fs.readFileSync(f, 'utf8').split('\n')
      lines.forEach((line, i) => {
        if (/course:\s*\{\s*slug\s*:/.test(line) && !/coursesIn\(/.test(line)) offenders.push(`${f}:${i + 1}: ${line.trim()}`)
      })
    }
    expect(offenders).toEqual([])
  })

  it('no file loads AP Calculus AB/BC Categories by course slug outside the allowlist', () => {
    const offenders = files.filter((f) => {
      if (ALLOWED_CALC_CATEGORY_READS[f]) return false
      const src = fs.readFileSync(f, 'utf8')
      return /slug:\s*'ap-calculus-(ab|bc)'/.test(src) && /\bcategories\s*:/.test(src) && /prisma\./.test(src)
    })
    expect(offenders).toEqual([])
  })
})
