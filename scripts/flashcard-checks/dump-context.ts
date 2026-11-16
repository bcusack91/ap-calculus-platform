/**
 * Reference material for writing a deck's card-check questions
 * (src/data/flashcard-checks): the cards, and every question the student can
 * already meet on the topic (exit-quiz pool, video checkpoints, recaps), which
 * a check question must NOT repeat.
 *
 *   npx tsx scripts/flashcard-checks/dump-context.ts mcat-circ1 <topicSlug> <outDir>
 */
import { config } from 'dotenv'
config({ path: '.env.local' })
import { mkdirSync, writeFileSync } from 'fs'
import { REVIEW_DECKS } from '../../src/data/video-lesson-flashcards'

async function main() {
  const [key, topicSlug, out] = process.argv.slice(2)
  if (!key || !topicSlug || !out) throw new Error('usage: dump-context.ts <lessonKey> <topicSlug> <outDir>')
  mkdirSync(out, { recursive: true })
  const deck = REVIEW_DECKS[key]
  const cards = Object.entries(deck).flatMap(([video, list]) => list.map((c) => ({ video: Number(video), front: c.front, back: c.back })))
  const fronts = new Set(cards.map((c) => c.front))
  writeFileSync(`${out}/${key}-cards.json`, JSON.stringify(cards, null, 1))

  const { generateExitQuiz } = await import('../../src/data/exit-quizzes')
  const pool = await generateExitQuiz(topicSlug, 5000, undefined, 1, { includeLowYield: true })
  const n = key.replace('mcat-circ', '')
  const { LESSON } = await import(`../video-lessons/circuits${n}-lesson`)
  const { shotList } = await import(`../../src/data/video-shot-lists/mcat-prep/${topicSlug}`)
  type Q = { question: string; options?: string[]; correctAnswer?: number }
  const lesson: Q[] = LESSON.videos.flatMap((v: { sections: { questions?: Q[] }[] }) => v.sections.flatMap((s) => s.questions ?? []))
  const shots: Q[] = shotList.clips.flatMap((c: { checkpoint: Q[] }) => c.checkpoint)
  const existing = [
    ...pool.map((q: Q) => ({ src: 'exit-quiz', question: q.question, options: q.options })),
    ...lesson.map((q) => ({ src: 'video', question: q.question, options: q.options })),
    ...shots.map((q) => ({ src: 'shot-list', question: q.question, options: q.options })),
  ]
  writeFileSync(`${out}/${key}-existing-questions.json`, JSON.stringify(existing, null, 1))
  console.log(key, 'cards', cards.length, 'distinct fronts', fronts.size, '| existing questions', existing.length)
}
main()
