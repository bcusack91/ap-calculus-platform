/**
 * Reference material for writing one set of card-check questions
 * (src/data/flashcard-checks; see sets.ts): the cards, and every question the
 * student can already meet on the topic, which a check question must NOT repeat.
 *
 *   npx tsx scripts/flashcard-checks/dump-context.ts mcat-circ1 <topicSlug> <outDir>     # a video deck
 *   SEED_DB=prod npx tsx scripts/flashcard-checks/dump-context.ts <topicSlug> <outDir>   # a topic's own cards, read from the database
 *
 * Writes <outDir>/<set>-cards.json and <outDir>/<set>-existing-questions.json.
 * Read-only on the database.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { PrismaClient } from '@prisma/client'
import { REVIEW_DECKS } from '../../src/data/video-lesson-flashcards'
import type { CardCheck } from '../../src/lib/flashcard-check-core'
import { isVideoSet } from './sets'

type Q = { question: string; options?: string[] }
const VIDEO_LESSON_OF_TOPIC: Record<string, string> = {
  'mcat-physics-electricity-dc-circuits-mcat': 'mcat-circ1',
  'mcat-physics-electricity-kirchhoff-power-mcat': 'mcat-circ2',
  'mcat-physics-electricity-emf-capacitors-mcat': 'mcat-circ3',
  'mcat-physics-electricity-rc-circuits-mcat': 'mcat-circ4',
}

async function videoQuestions(lessonKey: string, topicSlug: string): Promise<{ src: string; question: string; options?: string[] }[]> {
  const n = lessonKey.replace('mcat-circ', '')
  const { LESSON } = await import(`../video-lessons/circuits${n}-lesson`)
  const { shotList } = await import(`../../src/data/video-shot-lists/mcat-prep/${topicSlug}`)
  const lesson: Q[] = LESSON.videos.flatMap((v: { sections: { questions?: Q[] }[] }) => v.sections.flatMap((s) => s.questions ?? []))
  const shots: Q[] = shotList.clips.flatMap((c: { checkpoint: Q[] }) => c.checkpoint)
  return [...lesson.map((q) => ({ src: 'video', question: q.question, options: q.options })), ...shots.map((q) => ({ src: 'shot-list', question: q.question, options: q.options }))]
}

async function main() {
  const args = process.argv.slice(2)
  const video = isVideoSet(args[0])
  const [set, topicSlug, out] = video ? args : [args[0], args[0], args[1]]
  if (!set || !topicSlug || !out) throw new Error('usage: dump-context.ts <lessonKey> <topicSlug> <outDir>  |  dump-context.ts <topicSlug> <outDir>')
  mkdirSync(out, { recursive: true })

  let cards: { video?: number; front: string; back: string }[]
  if (video) {
    cards = Object.entries(REVIEW_DECKS[set]).flatMap(([v, list]) => list.map((c) => ({ video: Number(v), front: c.front, back: c.back })))
  } else {
    const prisma = new PrismaClient()
    const rows = await prisma.flashcard.findMany({ where: { topic: { slug: topicSlug }, videoDeck: null }, orderBy: [{ lessonPart: 'asc' }, { createdAt: 'asc' }], select: { front: true, back: true } })
    await prisma.$disconnect()
    cards = rows
  }
  writeFileSync(`${out}/${set}-cards.json`, JSON.stringify(cards, null, 1))

  const existing: { src: string; question: string; options?: string[] }[] = []
  try {
    const { generateExitQuiz } = await import('../../src/data/exit-quizzes')
    const pool = await generateExitQuiz(topicSlug, 5000, undefined, 1, { includeLowYield: true })
    existing.push(...pool.map((q: Q) => ({ src: 'exit-quiz', question: q.question, options: q.options })))
  } catch (err) {
    console.warn(`no exit-quiz pool for ${topicSlug}:`, (err as Error).message)
  }
  const lessonKey = video ? set : VIDEO_LESSON_OF_TOPIC[topicSlug]
  if (lessonKey) {
    existing.push(...(await videoQuestions(lessonKey, topicSlug)))
    // A topic's own cards must not repeat its video deck's check questions either.
    if (!video && existsSync(`${__dirname}/../../src/data/flashcard-checks/${lessonKey}.ts`)) {
      const { checks } = (await import(`../../src/data/flashcard-checks/${lessonKey}`)) as { checks: Record<string, CardCheck> }
      existing.push(...Object.values(checks).map((c) => ({ src: 'video-card-check', question: c.question, options: [...c.options] })))
    }
  }
  writeFileSync(`${out}/${set}-existing-questions.json`, JSON.stringify(existing, null, 1))
  console.log(set, 'cards', cards.length, 'distinct fronts', new Set(cards.map((c) => c.front)).size, '| existing questions', existing.length)
}
main()
