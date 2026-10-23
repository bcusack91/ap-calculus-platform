/**
 * AP Calculus BC competitive: every section serves what its name promises, and
 * the BC page offers the full 10-unit BC layout (owner: BC includes AB).
 *
 * Oct 2026 audit (ap-phase1-pipeline/calc-final/comp-align/REPORT-BC.md): 265
 * bank items sat under 7 retired legacy slugs no section could draw, 21 AB
 * items lived in the BC exam-prep buckets, and the BC page listed only the six
 * BC-only groups as "Unit 1: Unit 6 (BC): …". These guards keep that fixed.
 */
import { describe, it, expect, vi } from 'vitest'
import { readFileSync } from 'fs'
import path from 'path'
import { getApCalculusBCQuestions } from '@/data/competitive-questions/ap-calculus-bc-bank'
import { getApCalculusQuestions } from '@/data/competitive-questions/ap-calculus-bank'
import { generateMatchQuestions, AP_LESSON_BANK_TOPICS } from '@/lib/competitive-utils'
import { CALC_CATEGORIES, courseCategoryLayout, courseLayoutTopics } from '@/lib/course-includes'
import { groupTopicsByLayout, unitHeading } from '@/lib/competitive-course-units'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'
import { getCourseTopics, buildQuestionPool } from '@/lib/teacher-lobby-courses'

// The first match draw loads every AP bank (the generic AP slug map).
vi.setConfig({ testTimeout: 60_000 })

/** Legacy BC slugs whose Topic rows were retired on 2026-10-22 (legacy-topic-redirects.ts). */
const RETIRED_BC_SLUGS = [
  'parametric-calculus', 'polar-calculus', 'integral-test', 'comparison-tests',
  'ratio-root-tests', 'radius-interval-convergence', 'common-taylor-series',
]
/**
 * Mixed-review buckets: the only sections allowed to draw beyond their own tag.
 * The BC pair is tagged (its items are exam-strategy / connections content);
 * the AB FRQ-strategies lesson is a COURSE_GROUPING_LESSONS bucket that draws
 * the whole AB bank by design.
 */
const MIXED_REVIEW = new Set(['bc-exam-strategies-calcbc', 'review-connections-calcbc', 'free-response-strategies-calcab'])

const bcBank = getApCalculusBCQuestions(1_000_000)
const abBank = getApCalculusQuestions(1_000_000)
const bcLayout = courseCategoryLayout('ap-calculus-bc')!
const bcLayoutSlugs = courseLayoutTopics('ap-calculus-bc')!
const bcOwnSlugs = new Set(CALC_CATEGORIES.filter((c) => c.course === 'ap-calculus-bc').flatMap((c) => c.topics))
const abLayoutSlugs = new Set(bcLayoutSlugs.filter((s) => !bcOwnSlugs.has(s)))
const stemsOf = (qs: Array<{ question?: unknown }>) => qs.map((q) => String(q.question))
/** AB bank items a BC-layout AB topic draws (its own tag, or its mapped bank topics). */
const abStemsFor = (slug: string) => {
  const topics = new Set([slug, ...(AP_LESSON_BANK_TOPICS[slug]?.topics ?? [])])
  return new Set(abBank.filter((q) => topics.has(q.topicSlug)).map((q) => q.question))
}

describe('BC bank tags', () => {
  it('the 7 retired legacy slugs have 0 items', () => {
    for (const slug of RETIRED_BC_SLUGS) {
      expect(bcBank.filter((q) => q.topicSlug === slug), slug).toHaveLength(0)
    }
  })

  it('every item carries a live BC-only topic slug, and ids are unique', () => {
    const slugs = new Set(bcBank.map((q) => q.topicSlug))
    for (const s of slugs) expect(bcOwnSlugs.has(s), s).toBe(true)
    expect(new Set(bcBank.map((q) => q.id)).size).toBe(bcBank.length)
  })

  it('every BC-only topic has at least 15 tagged items', () => {
    for (const slug of bcOwnSlugs) {
      expect(bcBank.filter((q) => q.topicSlug === slug).length, slug).toBeGreaterThanOrEqual(15)
    }
  })

  // Round-2 tag-blind audit (2026-10-23, comp-align/round2-bc/): blind raters
  // re-labelled 398 difficulties (most "hard" items were one or two steps), and
  // hard items were authored where a topic fell under 3. Bot pacing and the
  // hard-tier draw read these labels.
  it('every difficulty is easy, medium or hard', () => {
    for (const q of bcBank) expect(['easy', 'medium', 'hard'], `#${q.id}`).toContain(q.difficulty)
  })

  it('every BC-only topic has at least 3 hard items', () => {
    for (const slug of bcOwnSlugs) {
      expect(bcBank.filter((q) => q.topicSlug === slug && q.difficulty === 'hard').length, slug).toBeGreaterThanOrEqual(3)
    }
  })

  it('every item has four distinct options and an in-range key', () => {
    for (const q of bcBank) {
      expect(q.options, `#${q.id}`).toHaveLength(4)
      expect(new Set(q.options).size, `#${q.id}`).toBe(4)
      expect(q.correctAnswer >= 0 && q.correctAnswer < 4, `#${q.id}`).toBe(true)
    }
  })

  it('no BC item is tagged with an AB slug (an AB-tagged item in this file would be unreachable)', () => {
    const abSlugs = new Set(abBank.map((q) => q.topicSlug))
    for (const q of bcBank) expect(abSlugs.has(q.topicSlug), `#${q.id} ${q.topicSlug}`).toBe(false)
  })
})

describe('every BC-layout topic resolves through the competitive draw', () => {
  it('the layout is 10 units plus exam prep, AB units included', () => {
    expect(bcLayout.map((s) => s.unitNumber)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null])
    expect(abLayoutSlugs.size).toBeGreaterThan(20)
    expect(bcOwnSlugs.size).toBe(20)
  })

  it.each(bcLayoutSlugs)('%s', async (slug) => {
    const qs = await generateMatchQuestions(1000, slug, [])
    expect(qs.length, `${slug} draws fewer than 13 items`).toBeGreaterThanOrEqual(13)
    const wanted = bcOwnSlugs.has(slug)
      ? new Set(bcBank.filter((q) => MIXED_REVIEW.has(slug) || q.topicSlug === slug).map((q) => q.question))
      : MIXED_REVIEW.has(slug)
        ? new Set(abBank.map((q) => q.question))
        : abStemsFor(slug)
    expect(wanted.size).toBeGreaterThanOrEqual(13)
    for (const s of stemsOf(qs)) expect(wanted.has(s), `${slug} served an item outside its section: ${s}`).toBe(true)
  })

  it('every retired legacy BC slug draws its 308 target, never other subjects', async () => {
    const { LEGACY_TOPIC_REDIRECTS: redirects } = await import('@/lib/legacy-topic-redirects')
    const retired = Object.keys(redirects).filter((s) => bcOwnSlugs.has(redirects[s]))
    expect(retired.length).toBeGreaterThanOrEqual(17)
    for (const slug of retired) {
      const target = redirects[slug]
      const own = new Set(bcBank.filter((q) => q.topicSlug === target).map((q) => q.question))
      const qs = await generateMatchQuestions(20, slug, [])
      expect(qs.length, slug).toBe(20)
      for (const s of stemsOf(qs)) expect(own.has(s), `${slug} -> ${target} served: ${s}`).toBe(true)
    }
  })

  it('a BC-only section never draws from the whole bank', async () => {
    for (const slug of bcOwnSlugs) {
      if (MIXED_REVIEW.has(slug)) continue
      const qs = await generateMatchQuestions(1000, slug, [])
      const own = new Set(bcBank.filter((q) => q.topicSlug === slug).map((q) => q.question))
      expect(qs.length, slug).toBe(own.size)
    }
  })
})

describe('the BC competitive page', () => {
  it('lists 10 units plus exam prep with CED unit numbers', () => {
    const rows = bcLayoutSlugs.map((slug) => ({ id: `id-${slug}`, slug, title: slug }))
    const units = groupTopicsByLayout(bcLayout, rows)
    expect(units).toHaveLength(11)
    expect(units.map((u) => u.unitNumber)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null])
    expect(units.flatMap((u) => u.topics.map((t) => t.slug))).toEqual(bcLayoutSlugs)
    // Unit 6 = AB integration topics followed by the BC-only ones.
    const unit6 = units.find((u) => u.unitNumber === 6)!
    expect(unit6.topics[0].slug).toBe('definite-integrals-calcab')
    expect(unit6.topics.map((t) => t.slug)).toContain('integration-by-parts-calcbc')
    expect(units[10].name).toBe('BC Exam Preparation')
  })

  it('never doubles the unit label', () => {
    expect(unitHeading({ unitNumber: 6, name: 'Unit 6: Integration and Accumulation of Change' })).toBe('Unit 6: Integration and Accumulation of Change')
    expect(unitHeading({ unitNumber: 1, name: 'Unit 6 (BC): Integration by Parts' })).toBe('Unit 6 (BC): Integration by Parts')
    expect(unitHeading({ unitNumber: null, name: 'BC Exam Preparation' })).toBe('BC Exam Preparation')
    expect(unitHeading({ unitNumber: 3, name: 'Kinematics' })).toBe('Unit 3: Kinematics')
  })

  it('has one unit emoji per layout section for BC', () => {
    expect(COURSE_PAGE_CONFIGS['ap-calculus-bc'].unitEmojis).toHaveLength(bcLayout.length)
  })

  it('drops rows that are missing and sections left empty', () => {
    const units = groupTopicsByLayout(bcLayout, [{ slug: 'polar-calculus-calcbc' }])
    expect(units).toHaveLength(1)
    expect(units[0].unitNumber).toBe(9)
  })

  it('both calculus topic routes build their units from the course-includes layout', () => {
    for (const course of ['ab', 'bc']) {
      const src = readFileSync(path.join(process.cwd(), `src/app/api/competitive/calculus-${course}-topics/route.ts`), 'utf8')
      expect(src).toContain('calcCompetitiveTopics')
      expect(src).toContain(`slug: 'ap-calculus-${course}'`)
      expect(src).not.toContain('idx + 1')
    }
    const generic = readFileSync(path.join(process.cwd(), 'src/app/api/competitive/course-topics/route.ts'), 'utf8')
    expect(generic).toContain('layoutTopicRows')
  })

  it('BC competitive unlocks on progress in any BC-layout topic', () => {
    const src = readFileSync(path.join(process.cwd(), 'src/app/api/competitive/unlock-check/route.ts'), 'utf8')
    expect(src).toContain("courseLayoutTopics('ap-calculus-bc')")
    expect(src).toMatch(/'ap-calculus-bc':[^\n]*\n[^\n]*BC_LAYOUT_TOPICS\.has\(s\)/)
  })
})

describe('the teacher lobby picker for BC', () => {
  it('lists live BC-layout slugs only, in syllabus order, with no retired-slug duplicates', async () => {
    const topics = await getCourseTopics('ap-calculus-bc')
    const slugs = topics.map((t) => t.slug)
    expect(slugs).toEqual(bcLayoutSlugs.filter((s) => slugs.includes(s)))
    for (const s of slugs) expect(bcLayoutSlugs, s).toContain(s)
    for (const s of RETIRED_BC_SLUGS) expect(slugs).not.toContain(s)
    expect(new Set(topics.map((t) => t.title)).size).toBe(topics.length)
    for (const s of bcOwnSlugs) expect(slugs, s).toContain(s)
    for (const t of topics) expect(t.count, t.slug).toBeGreaterThanOrEqual(13)
  })

  it('builds an AB-unit pool from the AB bank and a BC-only pool from the BC bank', async () => {
    const ab = await buildQuestionPool('ap-calculus-bc', ['chain-rule-calcab'], 15)
    expect(ab).toHaveLength(15)
    const abStems = abStemsFor('chain-rule-calcab')
    for (const q of ab) expect(abStems.has(q.question), q.question).toBe(true)
    const bc = await buildQuestionPool('ap-calculus-bc', ['polar-calculus-calcbc'], 15)
    const bcStems = new Set(bcBank.filter((q) => q.topicSlug === 'polar-calculus-calcbc').map((q) => q.question))
    for (const q of bc) expect(bcStems.has(q.question), q.question).toBe(true)
  })
})
