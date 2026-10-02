/**
 * Exit quiz for the MCAT Transcription & RNA Processing lesson
 * (mcat-molecular-biology-transcription-mcat).
 *
 * Owner request 2026-10-02: the exit quiz must cover exactly what the lesson
 * teaches. This topic used to draw from the keyword-picked biology area pool,
 * which served off-topic items (Golgi, macrolide antibiotics, the G1
 * restriction point, p53). The pool here is written from the lesson itself,
 * each item tagged with the lesson's exam-yield tier (src/lib/lesson-yield.ts):
 *
 *   - default: ultra-high, high and medium items, all answerable from what the
 *     lesson shows every student;
 *   - with { includeLowYield: true } (the student turned on "Include low-yield
 *     details"): LOW items too, each testing material inside the lesson's
 *     low-yield boxes.
 *
 * Randomness goes through Math.random only, so the shared generator's seeded
 * override reproduces a draw exactly for server-side regrading.
 */
import { TRANSCRIPTION_EXIT_POOL } from './mcat-transcription-pool'

export const TRANSCRIPTION_TOPIC_SLUG = 'mcat-molecular-biology-transcription-mcat'

export interface ExitQuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category: string
}

function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** The items a student may be asked, given their low-yield setting. */
export function transcriptionExitPool(includeLowYield: boolean) {
  return TRANSCRIPTION_EXIT_POOL.filter((q) => includeLowYield || q.yield !== 'LOW')
}

export function generateExitQuiz(
  count: number = 10,
  _topicSlug?: string,
  _difficulty?: 'easy' | 'medium' | 'hard',
  opts?: { includeLowYield?: boolean },
): ExitQuizQuestion[] {
  const pool = shuffle(transcriptionExitPool(!!opts?.includeLowYield))
  return pool.slice(0, Math.min(count, pool.length)).map((q, i) => ({
    id: `transcription-${i}`,
    question: q.question,
    options: [...q.options],
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: TRANSCRIPTION_TOPIC_SLUG,
  }))
}
