/**
 * Remove (and rename) SAT topics the digital SAT does not test (owner decision 2026-09-28:
 * "If the exam doesn't cover it, we shouldn't have it in the program").
 *
 * Runs LAST in prisma/seed-all.ts, because older SAT seed scripts still create
 * these topics and later card seeds attach flashcards to them. Deleting a Topic
 * cascades its flashcards (and their FlashcardProgress), TopicProgress and
 * example problems. Old URLs 308 to a tested topic via
 * src/lib/legacy-topic-redirects.ts, and stored diagnostic results resolve
 * through canonicalizeSlug in the diagnostic generator.
 *
 *   npx tsx prisma/retire-sat-topics.ts                 # local DB (.env.local), applies
 *   DRY_RUN=1 npx tsx prisma/retire-sat-topics.ts        # report only
 *   NODE_ENV=production npx tsx prisma/retire-sat-topics.ts   # prod (.env), applies
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'

export const RETIRED_SAT_TOPICS = ['sat-conciseness-redundancy', 'sat-complex-numbers'] as const

/**
 * Topics that stay but whose old names advertised off-exam skills
 * ("Organization", "Effective Language Use" = the old-SAT concision/style
 * family). Their lessons now teach only what the digital SAT tests.
 */
export const RETITLED_SAT_TOPICS: Record<string, { title: string; description?: string }> = {
  'sat-effective-language-use': {
    title: 'Rhetorical Synthesis',
    description: "Use a writer's notes to build the sentence that accomplishes a stated goal: the digital SAT's Rhetorical Synthesis questions.",
  },
  'sat-transitions-organization': {
    title: 'Transitions',
    description: 'Choose the transition that states the logical relationship between two ideas: contrast, concession, cause and effect, addition, example, or sequence.',
  },
  'sat-effective-language-use-advanced': { title: 'Rhetorical Synthesis — 700-800' },
  'sat-effective-language-use-core-skills': { title: 'Precise Words & Notes — Core Skills' },
  'sat-transitions-organization-core-skills': { title: 'Transitions — Core Skills' },
}

async function main() {
  const prisma = new PrismaClient()
  const dryRun = process.env.DRY_RUN === '1'
  for (const slug of RETIRED_SAT_TOPICS) {
    const topic = await prisma.topic.findUnique({ where: { slug }, select: { id: true, title: true } })
    if (!topic) {
      console.log(`  ${slug}: not present`)
      continue
    }
    const [cards, cardProgress, progress, examples, exitAttempts] = await Promise.all([
      prisma.flashcard.count({ where: { topicId: topic.id } }),
      prisma.flashcardProgress.count({ where: { flashcard: { topicId: topic.id } } }),
      prisma.topicProgress.count({ where: { topicId: topic.id } }),
      prisma.exampleProblem.count({ where: { topicId: topic.id } }),
      prisma.exitQuizAttempt.count({ where: { topicSlug: slug } }),
    ])
    console.log(
      `  ${slug} ("${topic.title}"): ${cards} cards, ${cardProgress} card-progress rows, ${progress} topic-progress rows, ${examples} examples, ${exitAttempts} exit attempts (kept)`,
    )
    if (!dryRun) {
      await prisma.topic.delete({ where: { id: topic.id } })
      console.log(`    deleted`)
    }
  }
  for (const [slug, next] of Object.entries(RETITLED_SAT_TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug }, select: { id: true, title: true, description: true } })
    if (!topic) {
      console.log(`  ${slug}: not present`)
      continue
    }
    const data: { title?: string; description?: string } = {}
    if (topic.title !== next.title) data.title = next.title
    if (next.description && topic.description !== next.description) data.description = next.description
    if (Object.keys(data).length === 0) continue
    console.log(`  ${slug}: "${topic.title}" -> "${next.title}"${data.description ? ' (+ description)' : ''}`)
    if (!dryRun) await prisma.topic.update({ where: { id: topic.id }, data })
  }
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
