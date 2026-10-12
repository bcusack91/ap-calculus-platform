/**
 * Shared generator for the SAT Craft and Structure lesson pools
 * (sat-text-structure-purpose, sat-cross-text-connections).
 *
 * Each pool is written from its 7-part interactive lesson: every item is a
 * digital-SAT-format question (a short text or a Text 1 / Text 2 pair, one
 * question, four options), tagged with a difficulty and the lesson part that
 * teaches it. The generator:
 *
 *   - honours a requested difficulty with the same fill order every other SAT
 *     pool uses (asked tier first, then the nearest), so Core Skills slugs
 *     (forced 'easy' by index.ts), the diagnostic's 'medium' draws and the
 *     adaptive hard module all get the tier they ask for;
 *   - without a difficulty, deals items round-robin across lesson parts, so a
 *     10-question exit quiz covers all seven parts and a failed quiz can send
 *     the student back to the parts they missed (partNumber).
 *
 * Options are NOT shuffled here: every display surface shuffles them, and a
 * fixed authored order keeps each item's content-hash id stable across draws
 * (exit-quiz regrading and form replays depend on that). Randomness goes
 * through Math.random only, so index.ts's seeded override reproduces a draw.
 */
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

type Difficulty = 'easy' | 'medium' | 'hard'

export interface SatCraftExitItem {
  question: string
  options: [string, string, string, string]
  /** Index into `options`. */
  correctAnswer: number
  explanation: string
  difficulty: Difficulty
  /** The lesson part that teaches it (1-7). */
  part: number
}

const FILL_ORDER: Record<Difficulty, Difficulty[]> = {
  easy: ['easy', 'medium', 'hard'],
  medium: ['medium', 'easy', 'hard'],
  hard: ['hard', 'medium', 'easy'],
}

function shuffle<T>(items: readonly T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Round-robin across lesson parts (parts visited in a shuffled order). */
function dealAcrossParts(pool: readonly SatCraftExitItem[], count: number): SatCraftExitItem[] {
  const byPart = new Map<number, SatCraftExitItem[]>()
  for (const item of pool) byPart.set(item.part, [...(byPart.get(item.part) ?? []), item])
  const queues = shuffle([...byPart.keys()]).map((p) => shuffle(byPart.get(p)!))
  const out: SatCraftExitItem[] = []
  while (out.length < count && queues.some((q) => q.length > 0)) {
    for (const q of queues) {
      if (out.length >= count) break
      const next = q.shift()
      if (next) out.push(next)
    }
  }
  return out
}

export function makeSatCraftExitQuiz(pool: readonly SatCraftExitItem[], topicSlug: string, category: string) {
  return function generateExitQuiz(
    count: number = 10,
    _topicSlug?: string,
    difficulty?: Difficulty,
  ): ExitQuizQuestion[] {
    let picked: SatCraftExitItem[]
    if (difficulty) {
      picked = []
      for (const tier of FILL_ORDER[difficulty]) {
        for (const item of shuffle(pool.filter((q) => q.difficulty === tier))) {
          if (picked.length >= count) break
          picked.push(item)
        }
      }
    } else {
      picked = dealAcrossParts(pool, count)
    }
    return shuffle(picked).map((q) => ({
      id: `${topicSlug}-${pool.indexOf(q)}`,
      question: q.question,
      options: [...q.options],
      correctIndex: q.correctAnswer,
      explanation: q.explanation,
      category,
      partNumber: q.part,
      difficulty: q.difficulty,
    }))
  }
}
