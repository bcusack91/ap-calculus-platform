/**
 * An entrance quiz credits lesson part N when the student masters quiz part N,
 * so a topic's entrance quiz must come from the SAME lesson bundle the topic
 * renders. Two SAT topics pointed at another bundle's quiz
 * (nonlinear-equations-functions used the passport quiz against the
 * functions-graphs lesson; scatterplots-line-fit used data-statistics against
 * problem-solving-data), so passing quiz part 2 skipped an unrelated lesson
 * part 2. Source-level check over both alias tables.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

describe('SAT entrance quizzes follow the lesson a topic renders', () => {
  const reg = read('src/data/interactive-lessons/registry.ts')
  const idx = read('src/data/entrance-quizzes/index.ts')
  const lessonFor = new Map([...reg.matchAll(/'(sat-[a-z0-9-]+)':\s*'([a-z0-9-]+)'/g)].map((m) => [m[1], m[2]]))
  const quizFor = new Map(
    [...idx.matchAll(/'(sat-[a-z0-9-]+)':\s*\(\)\s*=>\s*import\('\.\/([a-z0-9-]+)'\)/g)].map((m) => [m[1], m[2]]),
  )

  it('found both tables', () => {
    expect(lessonFor.size).toBeGreaterThan(20)
    expect(quizFor.size).toBeGreaterThan(20)
  })

  it('every aliased SAT topic uses its own lesson bundle’s quiz', () => {
    const mismatched = [...quizFor.entries()]
      .filter(([topic]) => lessonFor.has(topic))
      .filter(([topic, quiz]) => lessonFor.get(topic) !== quiz)
      .map(([topic, quiz]) => `${topic}: lesson ${lessonFor.get(topic)} vs quiz ${quiz}`)
    expect(mismatched).toEqual([])
  })
})
