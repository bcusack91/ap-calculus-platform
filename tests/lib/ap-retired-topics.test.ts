/**
 * Owner rule (Oct 2026): "If the exam doesn't cover it, we shouldn't have it
 * in the program." AP topics and units the May 2027 exams do not test were
 * retired (src/data/retired-ap-topics.ts; prisma/retire-ap-topics.ts deletes
 * the rows). Nothing may serve, recommend, link to or quiz them again, and old
 * links must land on an on-exam topic that has a lesson.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { RETIRED_AP_TOPICS, RETIRED_AP_UNITS, REPARENTED_AP_TOPICS } from '@/data/retired-ap-topics'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { hasEntranceQuiz } from '@/data/entrance-quizzes'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { LEGACY_TOPIC_REDIRECTS } from '@/lib/legacy-topic-redirects'

const ROOT = process.cwd()
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), 'utf8')
const RETIRED_TOPICS = Object.keys(RETIRED_AP_TOPICS)
const RETIRED_UNITS = Object.keys(RETIRED_AP_UNITS)

/** Recommendation sources: study plans, diagnostics, unit tests, daily questions, competitive mapping. */
function recommendationFiles(): string[] {
  const data = fs.readdirSync(path.join(ROOT, 'src/data'))
  const top = data
    .filter((f) => f.endsWith('.ts') && /study-plans|diagnostic|daily-question/.test(f))
    .map((f) => `src/data/${f}`)
  const unitTests = fs
    .readdirSync(path.join(ROOT, 'src/data/unit-tests'))
    .filter((f) => f.endsWith('.ts'))
    .map((f) => `src/data/unit-tests/${f}`)
  return [...top, ...unitTests, 'src/lib/competitive-utils.ts']
}

/**
 * Quoted slugs that are allowed in a file because they mean something else
 * there. Keep this list short and explain every entry.
 */
const ALLOWED: Record<string, string[]> = {
  // 'advanced-integration' is also the AP Calculus BC diagnostic's DOMAIN id
  // (BC Units 6-8 techniques). Only the AB Category with that slug retired.
  'src/data/ap-calculus-bc-diagnostic.ts': ['advanced-integration'],
  // 'parametric-equations' is a competitive CATEGORY id backed by the BC Unit 9
  // parametric bank (parametric-equations-bank.ts), not the retired precalc topic.
  'src/lib/competitive-utils.ts': ['parametric-equations'],
}

describe('retired AP topics stay retired', () => {
  it('lists the retired topics and units', () => {
    expect(RETIRED_TOPICS.length).toBeGreaterThanOrEqual(36)
    expect(RETIRED_UNITS.length).toBeGreaterThanOrEqual(7)
  })

  it.each(RETIRED_TOPICS)('%s has no lesson, exit quiz or entrance quiz', (slug) => {
    expect(hasInteractiveLesson(slug)).toBe(false)
    expect(hasExitQuiz(slug)).toBe(false)
    expect(hasEntranceQuiz(slug)).toBe(false)
  })

  it.each(RETIRED_TOPICS)('%s 308s to an on-exam topic that has a lesson', (slug) => {
    const target = LEGACY_TOPIC_REDIRECTS[slug]
    expect(target, `${slug} needs a redirect`).toBeTruthy()
    expect(RETIRED_TOPICS).not.toContain(target)
    expect(LEGACY_TOPIC_REDIRECTS[target], `${slug} -> ${target} is itself redirected`).toBeUndefined()
    expect(hasInteractiveLesson(target), `${target} has no lesson`).toBe(true)
  })

  it('are never named by a study plan, diagnostic, unit test, daily question or competitive mapping', () => {
    const offenders: string[] = []
    for (const file of recommendationFiles()) {
      const src = read(file)
      for (const slug of [...RETIRED_TOPICS, ...RETIRED_UNITS]) {
        if (ALLOWED[file]?.includes(slug)) continue
        if (src.includes(`'${slug}'`)) offenders.push(`${file}: '${slug}'`)
      }
    }
    expect(offenders).toEqual([])
  })
})

describe('retired AP units and re-parented topics', () => {
  it.each(RETIRED_UNITS)('unit %s redirects to a unit that is not retired', (unit) => {
    const { redirect } = RETIRED_AP_UNITS[unit]
    expect(redirect).toBeTruthy()
    expect(RETIRED_UNITS).not.toContain(redirect)
  })

  it.each(Object.keys(REPARENTED_AP_TOPICS))('re-parented topic %s moves to a live unit', (slug) => {
    expect(RETIRED_TOPICS).not.toContain(slug)
    expect(RETIRED_UNITS).not.toContain(REPARENTED_AP_TOPICS[slug].category)
  })

  it('next.config.ts 308s every retired unit from /categories', () => {
    // The redirects are generated from RETIRED_AP_UNITS, so check the wiring.
    const config = read('next.config.ts')
    expect(config).toMatch(/import\s*\{[^}]*RETIRED_AP_UNITS[^}]*\}\s*from\s*["']\.\/src\/data\/retired-ap-topics["']/)
    expect(config).toMatch(/Object\.entries\(RETIRED_AP_UNITS\)[\s\S]{0,200}source:\s*`\/categories\/\$\{from\}`/)
  })
})

describe('master seed order', () => {
  it('runs retire-ap-topics.ts after retire-sat-topics.ts, at the end of the seed', () => {
    const seed = read('prisma/seed-all.ts')
    const sat = seed.indexOf("'retire-sat-topics.ts'")
    const ap = seed.indexOf("'retire-ap-topics.ts'")
    expect(sat).toBeGreaterThan(-1)
    expect(ap).toBeGreaterThan(sat)
    // Older seeds that recreate retired rows must all run before it.
    for (const older of ["'seed-ap-precalculus.ts'", "'split-parametric-vectors-polar.ts'", "'seed-ap-computer-science-a.ts'"]) {
      const at = seed.lastIndexOf(older)
      if (at > -1) expect(ap).toBeGreaterThan(at)
    }
  })
})
