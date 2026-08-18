/**
 * Brings flashcard-thin topics (≤3 cards) up to a real deck (target 8) using
 * ALIGNED sources, in quality order:
 *   1. Example problems (front = question, back = solution) — skip huge solutions
 *   2. The topic's exit-quiz pool (front = question, back = answer + explanation)
 *      — the same bank that grades homework, so cards drill what the quiz asks
 *   3. Lesson content mining: "**Term**: definition" lines and section formulas
 * Idempotent (dedup by front). DRY_RUN=1 prints without writing.
 *   PROD=1 npx tsx scripts/supplement-flashcards.ts [DRY_RUN=1] [onlySlug]
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

const TARGET = Number(process.env.TARGET ?? 8)
const THIN = Number(process.env.THIN ?? 3)
const COURSE = process.env.COURSE // limit to one course's topics
const DRY = !!process.env.DRY_RUN

function tokens(s: string): Set<string> {
  return new Set(s.toLowerCase().replace(/\\[a-zA-Z]+/g, ' ').split(/[^a-z0-9]+/).filter(w => w.length >= 3))
}

async function main() {
  const prisma = new PrismaClient()
  const { generateExitQuiz } = await import('../src/data/exit-quizzes')
  const only = process.argv[2]
  const topics = await prisma.topic.findMany({
    where: only ? { slug: only } : COURSE ? { category: { course: { slug: COURSE } } } : {},
    select: {
      id: true, slug: true, title: true, textContent: true,
      flashcards: { select: { front: true } },
      exampleProblems: { select: { question: true, solution: true } },
    },
  })
  const thin = topics.filter(t => t.flashcards.length <= THIN)
  console.log(`${thin.length} thin topics (of ${topics.length})`)

  let topicsFixed = 0, cardsAdded = 0, still = 0
  for (const t of thin) {
    const have = new Set(t.flashcards.map(c => c.front.trim().toLowerCase()))
    const tokenSets: Set<string>[] = t.flashcards.map(c => tokens(c.front))
    const cards: { front: string; back: string }[] = []
    const push = (front: string, back: string) => {
      const f = front.trim(), b = back.trim()
      if (!f || !b || f.length < 8 || b.length < 3 || b.length > 700) return
      if (have.has(f.toLowerCase())) return
      if (t.flashcards.length + cards.length >= TARGET) return
      // Near-duplicate guard: an example problem and a quiz question often
      // cover the same computation with slightly different wording.
      const tk = tokens(f)
      for (const prev of tokenSets) {
        const shared = [...tk].filter(x => prev.has(x)).length
        if (shared >= 0.7 * Math.min(tk.size, prev.size) && Math.min(tk.size, prev.size) >= 4) return
      }
      have.add(f.toLowerCase())
      tokenSets.push(tk)
      cards.push({ front: f, back: b })
    }

    // 1. Example problems
    for (const ex of t.exampleProblems) {
      if (ex.solution.trim().length <= 600) push(ex.question, ex.solution.replace(/^(\*\*Solution:?\*\*|Solution:)\s*/i, ''))
    }

    // 2. Exit-quiz pool (topic-aligned bank)
    try {
      const qs = await generateExitQuiz(t.slug, 24, undefined, 12345)
      let used = 0
      const quizCap = Number(process.env.QUIZ_CAP ?? 5)
      for (const q of qs) {
        if (used >= quizCap) break
        if (typeof q.correctIndex !== 'number' || !q.options?.[q.correctIndex]) continue
        push(q.question, `**${q.options[q.correctIndex]}**\n\n${q.explanation ?? ''}`)
        used++
      }
    } catch { /* topic not in quiz registry */ }

    // 3. Definition lines from lesson content
    for (const line of (t.textContent ?? '').split('\n')) {
      const m = line.trim().match(/^\*\*([^*]{3,60})\*\*[:—-]\s*(.{15,400})$/)
      if (m && !/^(Example|Solution|Step|Note|Tip|Warning|Remember)/i.test(m[1])) {
        push(`What is ${m[1].trim().replace(/:$/, '')}?`, m[2].trim())
      }
    }

    if (cards.length === 0) { still++; continue }
    topicsFixed++
    cardsAdded += cards.length
    if (DRY) {
      console.log(`\n--- ${t.slug} (${t.flashcards.length} -> ${t.flashcards.length + cards.length})`)
      cards.forEach(c => console.log(`  Q: ${c.front.slice(0, 90)}\n  A: ${c.back.slice(0, 90).replace(/\n/g, ' ')}`))
    } else {
      await prisma.flashcard.createMany({
        data: cards.map(c => ({ topicId: t.id, front: c.front, back: c.back, isPremium: false })),
      })
    }
  }
  console.log(`\n${DRY ? '[DRY RUN] ' : ''}topics supplemented: ${topicsFixed}, cards added: ${cardsAdded}, topics with no derivable cards: ${still}`)
  await prisma.$disconnect()
}
main()
