/**
 * The Desmos calculator link must appear on exactly the SAT Math surfaces.
 *
 * The Digital SAT gives every student a built-in Desmos graphing calculator on
 * the Math section and nothing on Reading & Writing, so practice has to match:
 * offering it on an R&W question would train the wrong habit, and withholding
 * it on a Math question withholds a tool the real exam provides.
 *
 * src/lib/sat-math-topics.ts duplicates the generator's math slug list so that
 * client components don't pull the exit-quiz and passage banks into their
 * bundles. This test is what keeps the copy honest.
 */
import { describe, it, expect } from 'vitest'
import { SAT_MATH_TOPIC_SLUGS, isSatMathTopic, isSatMathDomain } from '@/lib/sat-math-topics'
import fs from 'fs'

describe('SAT math topic list', () => {
  it('matches MATH_DOMAIN_SLUGS in the practice-test generator', () => {
    const src = fs.readFileSync('src/data/sat-practice/test-generator.ts', 'utf8')
    const block = src.slice(src.indexOf('const MATH_DOMAIN_SLUGS'))
    const generatorSlugs = new Set(
      [...block.slice(0, block.indexOf('\n}')).matchAll(/'(sat-[a-z0-9-]+)'/g)].map((m) => m[1]),
    )
    expect(generatorSlugs.size).toBeGreaterThan(10)
    // Every slug the generator treats as Math must offer the calculator.
    for (const slug of generatorSlugs) {
      expect(isSatMathTopic(slug), `generator math slug missing from sat-math-topics: ${slug}`).toBe(true)
    }
    // And nothing extra: our list must not claim a slug the generator doesn't.
    for (const slug of SAT_MATH_TOPIC_SLUGS) {
      expect(generatorSlugs.has(slug), `${slug} is not a generator math slug`).toBe(true)
    }
  })

  it('covers the Core Skills and 700-800 tracks of the same topics', () => {
    expect(isSatMathTopic('sat-probability-two-way-tables')).toBe(true)
    expect(isSatMathTopic('sat-probability-two-way-tables-core-skills')).toBe(true)
    expect(isSatMathTopic('sat-quadratic-equations-advanced')).toBe(true)
  })

  it('never offers a calculator on Reading & Writing', () => {
    for (const slug of [
      'sat-vocabulary-context',
      'sat-central-ideas-details',
      'sat-punctuation',
      'sat-transitions-organization',
      'sat-command-evidence',
      'sat-sentence-structure-advanced',
    ]) {
      expect(isSatMathTopic(slug), slug).toBe(false)
    }
  })

  it('ignores other courses and junk input', () => {
    for (const slug of ['mcat-physics-mechanics-mcat', 'limits-continuity-calcab', 'algebra1-linear-equations', '', null, undefined]) {
      expect(isSatMathTopic(slug as string | null | undefined)).toBe(false)
    }
  })

  it('recognises Math unit-test domains, not Reading & Writing ones', () => {
    expect(isSatMathDomain('sat-math-algebra')).toBe(true)
    expect(isSatMathDomain('sat-math-problem-solving')).toBe(true)
    expect(isSatMathDomain('sat-reading-information')).toBe(false)
    expect(isSatMathDomain('sat-writing-conventions')).toBe(false)
    expect(isSatMathDomain(undefined)).toBe(false)
  })
})
