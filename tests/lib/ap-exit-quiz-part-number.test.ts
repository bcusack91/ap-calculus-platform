/**
 * Every AP exit-quiz pool must pass each item's lesson part through as
 * `partNumber`. Without it a failed quiz can't point the student at the part
 * they missed and sends them back to the whole lesson (AP Chemistry, Physics 2,
 * Psychology and Statistics all dropped it).
 */
import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const DIR = path.resolve(__dirname, '../../src/data/exit-quizzes')
const AP_POOLS = fs.readdirSync(DIR).filter((f) => /^ap-.+\.ts$/.test(f) && !f.includes(' '))

interface PoolItem { question: string; part?: number; correctAnswer?: number }
interface QuizItem { question: string; partNumber?: number }

function poolOf(mod: Record<string, unknown>): PoolItem[] {
  const pools = Object.values(mod).filter(
    (v): v is PoolItem[] => Array.isArray(v) && v.length > 0 && typeof v[0] === 'object' && v[0] !== null && 'question' in v[0] && 'correctAnswer' in v[0],
  )
  return pools.flat()
}

describe('AP exit quizzes emit partNumber', () => {
  it('finds every AP pool', () => {
    expect(AP_POOLS.length).toBeGreaterThanOrEqual(23)
    expect(AP_POOLS).toContain('ap-chemistry.ts')
  })

  for (const file of AP_POOLS) {
    it(file, async () => {
      const mod = (await import(path.join(DIR, file))) as Record<string, unknown> & {
        generateExitQuiz: (count?: number, topicSlug?: string) => QuizItem[]
      }
      const pool = poolOf(mod)
      // A stem can repeat across parts, so keep every part it carries.
      const partsByQuestion = new Map<string, Set<number>>()
      for (const q of pool) {
        if (typeof q.part !== 'number') continue
        const parts = partsByQuestion.get(q.question) ?? new Set<number>()
        parts.add(q.part)
        partsByQuestion.set(q.question, parts)
      }

      const quiz = mod.generateExitQuiz(pool.length + 10)
      if (partsByQuestion.size === 0) {
        // The exported pool drops `part` (AP Biology maps an internal pool):
        // the generator's output must still carry it.
        expect(quiz.some((q) => typeof q.partNumber === 'number'), file).toBe(true)
        return
      }
      const tagged = quiz.filter((q) => partsByQuestion.has(q.question))
      expect(tagged.length).toBeGreaterThan(0)
      for (const q of tagged) expect(partsByQuestion.get(q.question)!.has(q.partNumber as number), q.question.slice(0, 60)).toBe(true)
    })
  }
})
