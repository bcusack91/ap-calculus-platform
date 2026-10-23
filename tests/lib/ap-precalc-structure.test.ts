/**
 * AP Precalculus structure (precalc-final PLAN.md, Oct 2026): the CED layout
 * in src/lib/course-includes.ts is the single source for the hub, /categories,
 * the competitive topics route, the teacher lobby and
 * prisma/restructure-precalc.ts. These guards pin the layout to the plan and
 * keep the 27 retired rows, the 6 retired Categories and the Unit-4 copy from
 * coming back.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import {
  PRECALC_CATEGORIES,
  PRECALC_TOPIC_TITLES,
  RETIRED_PRECALC_CATEGORIES,
  RETIRED_COURSE_CATEGORIES,
  RETIRED_CALC_CATEGORIES,
  INCLUDE_COURSE_NAMES,
  courseCategoryLayout,
  courseLayoutTopics,
  courseTopicWhere,
} from '@/lib/course-includes'
import { LEGACY_TOPIC_REDIRECTS, isHiddenTopicSlug, isLegacyTopicSlug } from '@/lib/legacy-topic-redirects'
import { RETIRED_AP_TOPICS, RETIRED_AP_UNITS, REPARENTED_AP_TOPICS } from '@/data/retired-ap-topics'
import { groupTopicsByLayout, unitHeading } from '@/lib/competitive-course-units'
import { groupByLayout } from '@/lib/course-hub-sections'
import { COURSE_PAGE_CONFIGS } from '@/components/competitive/course-page-configs'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'

const COURSE = 'ap-precalculus'
const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

/** The 19 live topics of PLAN.md "Canonical layout", in unit order. */
const LIVE: Record<number, string[]> = {
  1: [
    'rates-of-change-precalc',
    'polynomial-functions-precalc',
    'fundamental-theorem-algebra',
    'polynomial-division-remainder-theorem',
    'rational-functions-precalc',
    'transformations-precalc',
    'function-modeling-precalc',
  ],
  2: [
    'sequences-series-precalc',
    'exponential-functions-precalc',
    'function-composition-inverses-precalc',
    'logarithmic-functions-precalc',
    'exponential-logarithmic-modeling-precalc',
  ],
  3: [
    'the-unit-circle',
    'trigonometric-functions-precalc',
    'graphing-trig-functions',
    'inverse-trig-functions-precalc',
    'solving-trig-equations',
    'trigonometric-identities-precalc',
    'polar-coordinates-precalc',
  ],
}
const LIVE_SLUGS = [1, 2, 3].flatMap((u) => LIVE[u])

/** The 27 retired rows and their 308 targets (PLAN.md "Retired topic -> 308 target"). */
const RETIRED: Record<string, string> = {
  'function-transformations': 'transformations-precalc',
  'transformations-functions-precalc': 'transformations-precalc',
  'composite-inverse-functions': 'function-composition-inverses-precalc',
  'piecewise-functions': 'function-modeling-precalc',
  'rates-of-change': 'rates-of-change-precalc',
  'sequences-arithmetic-geometric': 'sequences-series-precalc',
  'polynomial-functions-end-behavior': 'polynomial-functions-precalc',
  'polynomial-functions-end-behavior-precalc': 'polynomial-functions-precalc',
  'solving-polynomial-inequalities': 'polynomial-functions-precalc',
  'rational-functions-asymptotes': 'rational-functions-precalc',
  'rational-functions-asymptotes-precalc': 'rational-functions-precalc',
  'solving-rational-inequalities': 'rational-functions-precalc',
  'complex-numbers': 'fundamental-theorem-algebra',
  'exponential-functions-modeling-precalc': 'exponential-functions-precalc',
  'exponential-functions-growth-decay': 'exponential-functions-precalc',
  'logarithmic-exponential-models': 'exponential-logarithmic-modeling-precalc',
  'logarithmic-functions': 'logarithmic-functions-precalc',
  'logarithmic-functions-equations-precalc': 'logarithmic-functions-precalc',
  'solving-exponential-logarithmic-equations': 'logarithmic-functions-precalc',
  'degrees-and-radians': 'trigonometric-functions-precalc',
  'negative-and-coterminal-angles': 'trigonometric-functions-precalc',
  'unit-circle-radian-measure': 'the-unit-circle',
  'trigonometric-identities': 'trigonometric-identities-precalc',
  'sum-difference-identities': 'trigonometric-identities-precalc',
  'double-half-angle-identities': 'trigonometric-identities-precalc',
  'inverse-trig-functions': 'inverse-trig-functions-precalc',
  'polar-coordinates': 'polar-coordinates-precalc',
}

/**
 * Lessons authored in the same wave (PLAN.md D3). Accepted as "has a lesson"
 * until the registry has them; remove once registered.
 */
const PENDING_LESSONS = new Set(['function-modeling-precalc', 'exponential-logarithmic-modeling-precalc'])

/** Words that only belong to the unassessed Unit 4 or the old 4-unit layout. */
const UNIT_4_WORDS = /vectors?|matri(x|ces)|parametric|4 units|four units|Unit 4\b|conic/i

describe('AP Precalculus CED layout', () => {
  const layout = courseCategoryLayout(COURSE)!

  it('is registered as a fixed layout: 3 CED units + exam prep', () => {
    expect(layout).toBeTruthy()
    expect(layout.map((s) => s.unitNumber)).toEqual([1, 2, 3, null])
    expect(layout.map((s) => s.key)).toEqual(['unit-1', 'unit-2', 'unit-3', 'exam-prep'])
    expect(layout.map((s) => s.name)).toEqual([
      'Unit 1: Polynomial and Rational Functions',
      'Unit 2: Exponential and Logarithmic Functions',
      'Unit 3: Trigonometric and Polar Functions',
      'AP Exam Preparation',
    ])
    expect(layout.map((s) => s.categories)).toEqual([
      ['precalc-polynomial-rational'],
      ['precalc-exponential-logarithmic'],
      ['precalc-trig-functions'],
      ['precalc-exam-prep'],
    ])
    expect(INCLUDE_COURSE_NAMES[COURSE]).toBe('AP Precalculus')
    expect(courseTopicWhere(COURSE)).toEqual({ category: { course: { slug: COURSE } } })
  })

  it('covers exactly the 19 live slugs of PLAN.md, in unit order', () => {
    for (const u of [1, 2, 3]) expect(layout.find((s) => s.unitNumber === u)!.topics).toEqual(LIVE[u])
    expect(courseLayoutTopics(COURSE)).toEqual(LIVE_SLUGS)
    expect(LIVE_SLUGS).toHaveLength(19)
    expect(new Set(LIVE_SLUGS).size).toBe(19)
    for (const c of PRECALC_CATEGORIES) {
      expect(c.course).toBe(COURSE)
      expect(c.order).toBe(PRECALC_CATEGORIES.indexOf(c) + 1)
    }
  })

  it('every live slug has a canonical title, a lesson (or is pending), and is neither legacy nor retired', () => {
    for (const t of LIVE_SLUGS) {
      expect(PRECALC_TOPIC_TITLES[t], `${t} has no title`).toBeTruthy()
      expect(isHiddenTopicSlug(t), `${t} is legacy/retired`).toBe(false)
      expect(hasInteractiveLesson(t) || PENDING_LESSONS.has(t), `${t} has no lesson`).toBe(true)
    }
    expect(Object.keys(PRECALC_TOPIC_TITLES).sort()).toEqual([...LIVE_SLUGS].sort())
  })

  it('retired Categories 308 to a live unit, are not live, and are not also AP-retired units', () => {
    const live = new Set(PRECALC_CATEGORIES.map((c) => c.slug))
    expect(Object.keys(RETIRED_PRECALC_CATEGORIES).sort()).toEqual([
      'exponential-logarithmic-functions',
      'function-fundamentals',
      'polynomial-rational-functions',
      'precalc-function-analysis',
      'precalc-sequences-conics',
      'trigonometric-functions',
    ])
    for (const [from, { course, redirect }] of Object.entries(RETIRED_PRECALC_CATEGORIES)) {
      expect(course).toBe(COURSE)
      expect(live.has(from), from).toBe(false)
      expect(live.has(redirect), `${from} -> ${redirect}`).toBe(true)
      expect(RETIRED_AP_UNITS[from], `${from} also in RETIRED_AP_UNITS`).toBeUndefined()
    }
    // next.config.ts and the sitemap read the merged map.
    expect(Object.keys(RETIRED_COURSE_CATEGORIES).sort()).toEqual(
      [...Object.keys(RETIRED_CALC_CATEGORIES), ...Object.keys(RETIRED_PRECALC_CATEGORIES)].sort(),
    )
  })

  it('the retired precalc AP units (Unit 4) 308 to live Categories, not to a retiring one', () => {
    const live = new Set(PRECALC_CATEGORIES.map((c) => c.slug))
    for (const [unit, { course, redirect }] of Object.entries(RETIRED_AP_UNITS)) {
      if (course !== COURSE) continue
      expect(live.has(redirect), `${unit} -> ${redirect}`).toBe(true)
      expect(RETIRED_PRECALC_CATEGORIES[redirect], `${unit} -> ${redirect} is retiring`).toBeUndefined()
    }
    // The layout places polar and rates of change; nothing is parked by retire-ap-topics.ts any more.
    expect(Object.keys(REPARENTED_AP_TOPICS)).toEqual([])
  })
})

describe('the 27 retired AP Precalculus rows', () => {
  it('each 308s to its PLAN.md target, a live slug, with no chain', () => {
    expect(Object.keys(RETIRED)).toHaveLength(27)
    for (const [from, to] of Object.entries(RETIRED)) {
      expect(LEGACY_TOPIC_REDIRECTS[from], `${from} needs a redirect`).toBe(to)
      expect(LIVE_SLUGS, `${from} -> ${to} is not live`).toContain(to)
      expect(isLegacyTopicSlug(to), `${from} -> ${to} is itself redirected`).toBe(false)
      expect(isHiddenTopicSlug(from), from).toBe(true)
      expect(RETIRED_AP_TOPICS[from], `${from} is a duplicate, not an off-exam topic`).toBeUndefined()
    }
  })

  it('no live slug is retired or redirected', () => {
    for (const t of LIVE_SLUGS) {
      expect(RETIRED[t], t).toBeUndefined()
      expect(LEGACY_TOPIC_REDIRECTS[t], t).toBeUndefined()
      expect(RETIRED_AP_TOPICS[t], t).toBeUndefined()
    }
  })

  it('every precalc redirect (incl. the 17 old Unit-4 / off-exam ones) lands on a live AP Precalculus row', () => {
    // The AP Precalculus block of RETIRED_AP_TOPICS (src/data/retired-ap-topics.ts).
    const OFF_EXAM = [
      'circles-parabolas', 'ellipses-hyperbolas', 'conic-sections-precalc',
      'parametric-equations', 'parametric-equations-precalc',
      'vectors-in-plane', 'vectors-two-dimensions-precalc',
      'matrix-operations', 'matrices-precalc',
      'law-of-sines-cosines', 'law-of-sines-cosines-precalc',
      'partial-fraction-decomposition', 'systems-of-equations', 'systems-of-equations-precalc',
      'limits-introduction-precalc', 'continuity-precalc', 'arc-length-and-sector-area',
    ]
    expect(OFF_EXAM).toHaveLength(17)
    for (const from of [...OFF_EXAM, ...Object.keys(RETIRED)]) {
      const to = LEGACY_TOPIC_REDIRECTS[from]
      expect(to, `${from} needs a redirect`).toBeTruthy()
      expect(LIVE_SLUGS, `${from} -> ${to}`).toContain(to)
    }
    for (const from of OFF_EXAM) expect(RETIRED_AP_TOPICS[from], `${from} should be in RETIRED_AP_TOPICS`).toBeTruthy()
  })

  it('next.config.ts re-points function-notation-transformations to the canonical row and 308s the retired Categories', () => {
    const config = read('next.config.ts')
    expect(config).toMatch(/'function-notation-transformations':\s*'transformations-precalc'/)
    expect(config).toMatch(/Object\.entries\(RETIRED_COURSE_CATEGORIES\)[\s\S]{0,200}source:\s*`\/categories\/\$\{from\}`/)
    expect(read('src/app/sitemap.ts')).toContain('RETIRED_COURSE_CATEGORIES')
  })

  it('the hub and /categories hide retired rows even before the prod restructure runs', () => {
    const layout = courseCategoryLayout(COURSE)!
    const rows = [
      { slug: 'polynomial-functions-end-behavior', cat: 'polynomial-rational-functions' }, // legacy 308, old Category
      { slug: 'polynomial-functions-precalc', cat: 'precalc-polynomial-rational' },
      { slug: 'the-unit-circle', cat: 'trigonometric-functions' }, // live row still in a retiring Category
      { slug: 'some-new-topic', cat: 'precalc-exam-prep' },
    ]
    const groups = groupByLayout(layout, rows, (r) => r.cat)
    const all = groups.flatMap((g) => g.rows.map((r) => r.slug))
    expect(all).not.toContain('polynomial-functions-end-behavior')
    expect(groups.find((g) => g.section.unitNumber === 3)!.rows.map((r) => r.slug)).toEqual(['the-unit-circle'])
    expect(groups.find((g) => g.section.unitNumber === null)!.rows.map((r) => r.slug)).toEqual(['some-new-topic'])
  })
})

describe('the AP Precalculus competitive page', () => {
  const layout = courseCategoryLayout(COURSE)!

  it('groups the live rows into the 3 CED units (exam prep hidden while it has no rows)', () => {
    const rows = LIVE_SLUGS.map((slug) => ({ id: `id-${slug}`, slug, title: slug }))
    const units = groupTopicsByLayout(layout, rows)
    expect(units.map((u) => u.unitNumber)).toEqual([1, 2, 3])
    expect(units.map((u) => unitHeading(u))).toEqual([
      'Unit 1: Polynomial and Rational Functions',
      'Unit 2: Exponential and Logarithmic Functions',
      'Unit 3: Trigonometric and Polar Functions',
    ])
    expect(units.flatMap((u) => u.topics.map((t) => t.slug))).toEqual(LIVE_SLUGS)
    // A legacy row that still exists in prod is never placed.
    const withLegacy = groupTopicsByLayout(layout, [...rows, { id: 'x', slug: 'complex-numbers', title: 'Complex Numbers' }])
    expect(withLegacy.flatMap((u) => u.topics.map((t) => t.slug))).not.toContain('complex-numbers')
  })

  it('has one unit emoji per layout section and the AP bank fallback', () => {
    expect(COURSE_PAGE_CONFIGS[COURSE].unitEmojis).toHaveLength(layout.length)
    expect(COURSE_PAGE_CONFIGS[COURSE].topicsEndpoint).toBe('/api/competitive/precalculus-topics')
  })

  it('the topics route builds its units from the layout, not from the DB Categories', () => {
    const src = read('src/app/api/competitive/precalculus-topics/route.ts')
    expect(src).toContain('layoutCompetitiveTopics')
    expect(src).toContain(`slug: 'ap-precalculus'`)
    expect(src).not.toContain('idx + 1')
    expect(src).not.toMatch(/categories\s*:/)
  })

  it('the teacher lobby lists the layout for AP Precalculus', () => {
    const src = read('src/lib/teacher-lobby-courses.ts')
    expect(src).toMatch(/slug === 'ap-precalculus'[\s\S]{0,200}courseCategoryLayout\('ap-precalculus'\)/)
  })
})

describe('AP Precalculus copy says 3 assessed units and never Unit 4', () => {
  it('hub page', () => {
    const src = read('src/app/ap-precalculus/page.tsx')
    expect(src).not.toMatch(UNIT_4_WORDS)
    expect(src).toContain('Unit 1: Polynomial and Rational Functions')
    expect(src).toContain('Unit 2: Exponential and Logarithmic Functions')
    expect(src).toContain('Unit 3: Trigonometric and Polar Functions')
    expect(src).not.toMatch(/Unit 4/)
    // 2027 format: 42 MCQ (29 no-calc + 13 calc), 4 FRQ.
    expect(src).toMatch(/42 MCQs?/)
    expect(src).toMatch(/29 no-calculator/)
    expect(src).toMatch(/13 graphing-calculator/)
    expect(src).toMatch(/4 FRQs/)
  })

  it('onboarding and course metadata one-liners', () => {
    const line = (file: string) => read(file).split('\n').find((l) => l.includes("'ap-precalculus'") && l.includes('description')) ?? ''
    for (const file of ['src/app/onboarding/page.tsx', 'src/data/course-metadata.ts']) {
      const l = line(file)
      expect(l, `${file} has no ap-precalculus entry`).not.toBe('')
      expect(l, `${file}: ${l.trim()}`).not.toMatch(UNIT_4_WORDS)
    }
  })
})

describe('prisma/restructure-precalc.ts', () => {
  it('reads the layout from course-includes, dry-runs by default, guards prod, backs up, and runs last in seed-all', () => {
    const src = read('prisma/restructure-precalc.ts')
    expect(src).toContain('PRECALC_CATEGORIES')
    expect(src).toContain('PRECALC_TOPIC_TITLES')
    expect(src).toContain('RETIRED_PRECALC_CATEGORIES')
    expect(src).toMatch(/const APPLY = process\.env\.APPLY === '1'/)
    expect(src).toMatch(/SEED_DB === 'prod' \? '\.env' : '\.env\.local'/)
    expect(src).toContain("host.endsWith('neon.tech')")
    expect(src).toContain('_restructure-precalc-backup-')
    expect(src).toContain('prisma.$transaction(')
    // Cards are re-parented, never deleted; progress is migrated.
    expect(src).toContain('tx.flashcard.updateMany(')
    expect(src).not.toContain('tx.flashcard.delete')
    expect(src).toContain('tx.topicProgress.updateMany(')
    for (const slug of ['function-modeling-precalc', 'exponential-logarithmic-modeling-precalc']) expect(src).toContain(`'${slug}'`)

    const seed = read('prisma/seed-all.ts')
    const calc = seed.indexOf("'restructure-calc.ts'")
    const precalc = seed.indexOf("'restructure-precalc.ts'")
    expect(calc).toBeGreaterThan(-1)
    expect(precalc).toBeGreaterThan(calc)
    expect(seed).toMatch(/'restructure-precalc\.ts':\s*\{\s*APPLY:\s*'1'\s*\}/)
    for (const older of ["'seed-ap-precalculus.ts'", "'seed-precalculus-categories.ts'", "'retire-ap-topics.ts'"]) {
      const at = seed.lastIndexOf(older)
      if (at > -1) expect(precalc, older).toBeGreaterThan(at)
    }
  })
})
