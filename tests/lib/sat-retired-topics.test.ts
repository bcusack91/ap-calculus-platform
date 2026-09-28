/**
 * Owner decision (2026-09-28): "If the exam doesn't cover it, we shouldn't
 * have it in the program." Conciseness/redundancy and complex numbers are not
 * on the digital SAT, so their topics were retired. Nothing may serve or
 * recommend them again; older stored results resolve to a tested topic.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { DIAGNOSTIC_DOMAINS, canonicalizeSlug } from '@/data/sat-practice/diagnostic-generator'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { hasEntranceQuiz } from '@/data/entrance-quizzes'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { LEGACY_TOPIC_REDIRECTS } from '@/lib/legacy-topic-redirects'

const RETIRED = ['sat-conciseness-redundancy', 'sat-complex-numbers']
const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

describe('retired SAT topics stay retired', () => {
  it('are never sampled or recommended by the diagnostic', () => {
    const slugs = DIAGNOSTIC_DOMAINS.flatMap((d) => d.slugs)
    for (const r of RETIRED) expect(slugs).not.toContain(r)
    expect(read('src/data/sat-practice/test-generator.ts')).not.toContain('sat-conciseness-redundancy')
    expect(read('src/data/sat-daily-question.ts')).not.toMatch(/sat-conciseness-redundancy|sat-complex-numbers/)
  })

  it('have no lesson, entrance quiz or exit quiz', () => {
    for (const r of RETIRED) {
      expect(hasExitQuiz(r)).toBe(false)
      expect(hasEntranceQuiz(r)).toBe(false)
      expect(hasInteractiveLesson(r)).toBe(false)
    }
  })

  it('resolve old stored recommendations and old links to a tested topic', () => {
    for (const r of RETIRED) {
      const target = canonicalizeSlug(r)
      expect(RETIRED).not.toContain(target)
      expect(DIAGNOSTIC_DOMAINS.some((d) => d.slugs.includes(target))).toBe(true)
      expect(LEGACY_TOPIC_REDIRECTS[r]).toBe(target)
    }
  })

  it('are deleted by the last step of the master seed', () => {
    const seed = read('prisma/seed-all.ts')
    const retire = seed.indexOf("'retire-sat-topics.ts'")
    expect(retire).toBeGreaterThan(seed.lastIndexOf("'add-flashcards-sat-grammar.ts'"))
    expect(retire).toBeGreaterThan(seed.lastIndexOf("'expand-sat-prep.ts'"))
  })
})
