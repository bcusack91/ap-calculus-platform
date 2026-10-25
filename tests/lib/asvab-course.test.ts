/**
 * ASVAB course skeleton (asvab-pipeline PLAN.md, Oct 2026): the layout in
 * src/lib/course-includes.ts is the single source for the /asvab hub,
 * /categories, the competitive topics route, the teacher lobby and
 * prisma/create-asvab-course.ts. These guards pin the layout to the plan and
 * check that every topic is wired into every surface the file contract names
 * (lesson aggregator, exit loader, entrance loader, competitive routing,
 * sitemap). The last block (no stub left) is skipped until integration.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import {
  ASVAB_CATEGORIES,
  ASVAB_TOPIC_TITLES,
  ASVAB_TOPIC_SLUGS,
  INCLUDE_COURSE_NAMES,
  courseCategoryLayout,
  courseLayoutTopics,
} from '@/lib/course-includes'
import { hasInteractiveLesson, getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { hasEntranceQuiz } from '@/data/entrance-quizzes'
import { asvabTopicsForSlug, isAsvabSlug } from '@/data/competitive-questions/asvab-bank'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'
import { COMPETITIVE_COURSES } from '@/lib/competitive-catalog'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { DIAGNOSTIC_ABOUT } from '@/lib/diagnostic-about'
import { courseHubPaths, courseMeta } from '@/data/course-metadata'

const ROOT = process.cwd()
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), 'utf8')
const exists = (p: string) => fs.existsSync(path.join(ROOT, p))

/** PLAN.md "Layout (binding)": Category slug -> topic slugs, in order. */
const PLAN: [string, string, string[]][] = [
  ['asvab-word-knowledge', 'Word Knowledge (WK)', ['asvab-wk-vocabulary-in-context', 'asvab-wk-word-parts', 'asvab-wk-synonym-strategies']],
  ['asvab-paragraph-comprehension', 'Paragraph Comprehension (PC)', ['asvab-pc-main-idea', 'asvab-pc-details', 'asvab-pc-inference']],
  ['asvab-arithmetic-reasoning', 'Arithmetic Reasoning (AR)', [
    'asvab-ar-whole-number-problems', 'asvab-ar-fractions-decimals', 'asvab-ar-percents-interest', 'asvab-ar-ratios-rates', 'asvab-ar-averages-probability',
  ]],
  ['asvab-mathematics-knowledge', 'Mathematics Knowledge (MK)', [
    'asvab-mk-number-properties', 'asvab-mk-algebra-equations', 'asvab-mk-algebra-expressions', 'asvab-mk-geometry-shapes', 'asvab-mk-geometry-measurement',
  ]],
  ['asvab-general-science', 'General Science (GS)', ['asvab-gs-life-science', 'asvab-gs-earth-space', 'asvab-gs-chemistry', 'asvab-gs-physics']],
  ['asvab-electronics-information', 'Electronics Information (EI)', ['asvab-ei-electricity-basics', 'asvab-ei-circuits', 'asvab-ei-components']],
  ['asvab-auto-information', 'Auto Information (AI)', ['asvab-ai-engine', 'asvab-ai-drivetrain-chassis', 'asvab-ai-systems']],
  ['asvab-shop-information', 'Shop Information (SI)', ['asvab-si-tools', 'asvab-si-materials-fasteners']],
  ['asvab-mechanical-comprehension', 'Mechanical Comprehension (MC)', ['asvab-mc-forces-motion', 'asvab-mc-simple-machines', 'asvab-mc-gears-fluids']],
  ['asvab-assembling-objects', 'Assembling Objects (AO)', ['asvab-ao-connections', 'asvab-ao-shapes']],
  ['asvab-test-prep', 'AFQT and Test Day', ['asvab-afqt-scores', 'asvab-test-strategy']],
]
const PLAN_SLUGS = PLAN.flatMap(([, , t]) => t)
const unitOf = (categorySlug: string) => categorySlug.replace(/^asvab-/, '')

describe('ASVAB layout = PLAN.md', () => {
  it('has the 11 categories with the binding slugs, names and order', () => {
    expect(ASVAB_CATEGORIES.map((c) => [c.slug, c.name, c.topics])).toEqual(PLAN)
    ASVAB_CATEGORIES.forEach((c, i) => {
      expect(c.course).toBe('asvab')
      expect(c.order).toBe(i + 1)
    })
  })

  it('lists the 35 topics once each, every one titled', () => {
    expect(PLAN_SLUGS).toHaveLength(35)
    expect(new Set(ASVAB_TOPIC_SLUGS).size).toBe(35)
    expect(ASVAB_TOPIC_SLUGS).toEqual(PLAN_SLUGS)
    expect(Object.keys(ASVAB_TOPIC_TITLES).sort()).toEqual([...PLAN_SLUGS].sort())
  })

  it('is a fixed-layout course: hub sections and topic order come from the layout', () => {
    expect(courseLayoutTopics('asvab')).toEqual(PLAN_SLUGS)
    const layout = courseCategoryLayout('asvab')!
    expect(layout).toHaveLength(11)
    expect(layout.slice(0, 10).map((s) => s.unitNumber)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(layout[10]).toMatchObject({ key: 'exam-prep', unitNumber: null, categories: ['asvab-test-prep'] })
    expect(INCLUDE_COURSE_NAMES.asvab).toBe('ASVAB')
  })
})

describe('every ASVAB topic is wired into the file contract', () => {
  for (const [category, , topics] of PLAN) {
    for (const slug of topics) {
      it(`${slug}`, () => {
        // Lesson: 7 part files + the generated aggregator, registered in the manifest.
        for (let n = 1; n <= 7; n++) expect(exists(`src/data/interactive-lessons/${slug}-part${n}.ts`), `part ${n}`).toBe(true)
        const aggregator = read(`src/data/interactive-lessons/${slug}.ts`)
        expect(aggregator).toContain('export const parts: LessonData[]')
        expect(hasInteractiveLesson(slug)).toBe(true)
        expect(getInteractiveTopicConfig(slug)?.parts).toHaveLength(7)
        // Exit pool (per-unit file) + loader; entrance quiz file + loader.
        expect(exists(`src/data/exit-quizzes/asvab/${unitOf(category)}.ts`)).toBe(true)
        expect(hasExitQuiz(slug)).toBe(true)
        expect(exists(`src/data/entrance-quizzes/${slug}.ts`)).toBe(true)
        expect(hasEntranceQuiz(slug)).toBe(true)
        // Competitive: the unit bank file exists and the slug routes to its own items only.
        expect(exists(`src/data/competitive-questions/asvab/${unitOf(category)}.ts`)).toBe(true)
        expect(isAsvabSlug(slug)).toBe(true)
        expect(asvabTopicsForSlug(slug)).toEqual([slug])
      })
    }
  }

  it('a subtest slug draws its own topics and the course slug draws all 35', () => {
    for (const [category, , topics] of PLAN) expect(asvabTopicsForSlug(category)).toEqual(topics)
    expect(asvabTopicsForSlug('asvab')).toEqual(PLAN_SLUGS)
    expect(isAsvabSlug('asvab-not-a-topic')).toBe(false)
  })

  it('competitive-utils routes asvab slugs to the ASVAB bank before any other bank', () => {
    const src = read('src/lib/competitive-utils.ts')
    const asvab = src.indexOf("import('@/data/competitive-questions/asvab-bank')")
    expect(asvab).toBeGreaterThan(0)
    expect(asvab).toBeLessThan(src.indexOf('const apLesson = topicSlug ? AP_LESSON_BANK_TOPICS[topicSlug]'))
  })
})

describe('ASVAB course registries and routes', () => {
  it('course identity, hub path and class plan', () => {
    expect(courseMeta.asvab).toMatchObject({ icon: '🎖️', section: 'Test Prep' })
    expect(courseHubPaths.asvab).toBe('/asvab')
    expect(CLASS_PLAN_COURSES.find((c) => c.key === 'asvab')).toMatchObject({ categoryPrefix: 'asvab-diagnostic', courseSlug: 'asvab' })
    expect(DIAGNOSTIC_ABOUT['asvab-diagnostic']?.courseSlugs).toEqual(['asvab'])
  })

  it('competitive catalog, page config and page', () => {
    expect(COMPETITIVE_COURSES.some((c) => c.slug === 'asvab')).toBe(true)
    expect(COURSE_PAGE_CONFIGS.asvab).toMatchObject({ topicsEndpoint: '/api/competitive/asvab-topics', fallbackTopicSlug: 'asvab' })
    expect(COURSE_PAGE_CONFIGS.asvab.unitEmojis).toHaveLength(11)
    expect(read('src/app/api/competitive/asvab-topics/route.ts')).toContain("layoutCompetitiveTopics({ slug: 'asvab'")
  })

  it('every ASVAB page and API route exists', () => {
    for (const r of [
      'asvab', 'asvab-diagnostic', 'asvab-practice', 'asvab-score-predictor', 'asvab-afqt-calculator',
      'asvab-study-plans', 'asvab-daily-question', 'asvab-unit-tests', 'asvab-unit-test', 'competitive/asvab',
    ]) expect(exists(`src/app/${r}/page.tsx`), r).toBe(true)
    for (const r of [
      'asvab-diagnostic/submit', 'asvab-diagnostic/history', 'asvab-diagnostic/seen', 'asvab-score-predictor',
      'asvab-study-plans', 'asvab-daily-question', 'asvab-unit-test', 'asvab-unit-test/start', 'asvab-unit-test/submit',
      'competitive/asvab-topics',
    ]) expect(exists(`src/app/api/${r}/route.ts`), r).toBe(true)
  })

  it('the sitemap lists the hub, the AFQT calculator and the tool pages', () => {
    const src = read('src/app/sitemap.ts')
    expect(src).toContain("'/asvab', '/asvab-afqt-calculator'")
    // diagnostic, daily question, score predictor, study plans, practice, unit tests
    expect(src.match(/'asvab'/g)?.length ?? 0).toBeGreaterThanOrEqual(6)
    // Topic interactive pages are emitted for every DB topic with a registered lesson.
    for (const slug of PLAN_SLUGS) expect(hasInteractiveLesson(slug)).toBe(true)
  })
})

describe('no ASVAB stub remains', () => {
  const STUB = /STUB — /
  const files = [
    ...PLAN_SLUGS.flatMap((s) => Array.from({ length: 7 }, (_, i) => `src/data/interactive-lessons/${s}-part${i + 1}.ts`)),
    ...PLAN_SLUGS.map((s) => `src/data/entrance-quizzes/${s}.ts`),
    ...PLAN.map(([c]) => `src/data/exit-quizzes/asvab/${unitOf(c)}.ts`),
    ...PLAN.map(([c]) => `src/data/competitive-questions/asvab/${unitOf(c)}.ts`),
    'src/lib/asvab-scoring.ts',
    'src/data/asvab-diagnostic.ts',
    'src/data/asvab-study-plans.ts',
    'src/data/asvab-daily-question.ts',
    'src/data/asvab-practice/config.ts',
    'src/data/unit-tests/asvab.ts',
    'src/app/asvab-diagnostic/page.tsx',
    'src/app/asvab-practice/page.tsx',
    'src/app/asvab-score-predictor/page.tsx',
    'src/app/api/asvab-score-predictor/route.ts',
    'src/app/asvab-afqt-calculator/page.tsx',
    'src/app/asvab-afqt-calculator/AfqtCalculator.tsx',
  ]
  for (const f of files) {
    it(f, () => {
      expect(STUB.test(read(f)), `${f} is still a stub`).toBe(false)
    })
  }

  it('lesson part titles in the manifest are no longer placeholders', () => {
    const manifest = JSON.parse(read('src/data/interactive-lessons/lessons-manifest.json')) as { slug: string; partTitles: string[] }[]
    for (const e of manifest.filter((m) => m.slug.startsWith('asvab-'))) {
      for (const t of e.partTitles) expect(t, e.slug).not.toMatch(/^Part \d+$/)
    }
  })
})
