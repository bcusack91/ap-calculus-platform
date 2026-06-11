import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * AP Calculus AB — Limits unit consolidation.
 *
 * Deletes 7 duplicate/overlapping topics in the Limits & Continuity category
 * so we can focus per-topic interactive-lesson + entrance-quiz buildout on a
 * canonical set of 12 topics (1 hub + 11 lesson topics) that mirrors the
 * AP Chemistry layout.
 *
 * KEPT (12):
 *   limits-continuity-calcab         (hub — overview)
 *   what-is-a-limit                  (concept + notation)
 *   estimating-limits-tables         (numerical / table)
 *   estimating-limits-graphs         (graphical)
 *   one-sided-limits
 *   direct-substitution-method       (limit = f(a))
 *   factoring-method-limits          (0/0 — factor & cancel)
 *   rationalizing-technique-limits   (0/0 — conjugate)
 *   limits-at-infinity               (end behavior)
 *   infinite-limits-vertical-asymptotes
 *   continuity-introduction
 *   types-of-discontinuity
 *
 * DELETED (7) — duplicates / merged into kept topics:
 *   introduction-to-limits           → folded into what-is-a-limit
 *   limit-notation-terminology       → folded into what-is-a-limit
 *   evaluating-limits-graphically    → folded into estimating-limits-graphs
 *   one-sided-limits-in-detail       → folded into one-sided-limits
 *   evaluating-limits-algebraically  → folded into direct-substitution-method
 *   indeterminate-forms-factoring    → folded into factoring-method-limits
 *   rationalizing-techniques         → folded into rationalizing-technique-limits
 *
 * Cascade behavior: ExampleProblem, Flashcard, FlashcardProgress, and
 * TopicProgress all cascade on Topic delete (per schema.prisma).
 *
 * Run with:
 *   set -a && source .env && set +a && npx tsx prisma/consolidate-calcab-limits-unit.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SLUGS_TO_DELETE = [
  'introduction-to-limits',
  'limit-notation-terminology',
  'evaluating-limits-graphically',
  'one-sided-limits-in-detail',
  'evaluating-limits-algebraically',
  'indeterminate-forms-factoring',
  'rationalizing-techniques',
]

const KEPT_ORDER = [
  'limits-continuity-calcab',
  'what-is-a-limit',
  'estimating-limits-tables',
  'estimating-limits-graphs',
  'one-sided-limits',
  'direct-substitution-method',
  'factoring-method-limits',
  'rationalizing-technique-limits',
  'limits-at-infinity',
  'infinite-limits-vertical-asymptotes',
  'continuity-introduction',
  'types-of-discontinuity',
]

async function main() {
  console.log('🧹 Consolidating AP Calculus AB Limits unit…\n')

  // 1. Delete duplicates.
  for (const slug of SLUGS_TO_DELETE) {
    const t = await prisma.topic.findUnique({ where: { slug } })
    if (!t) {
      console.log(`(skip — not found: ${slug})`)
      continue
    }
    await prisma.topic.delete({ where: { id: t.id } })
    console.log(`🗑️  deleted: ${slug}`)
  }

  // 2. Renumber the kept topics in the desired order (hub first).
  const hub = await prisma.topic.findUnique({ where: { slug: 'limits-continuity-calcab' } })
  if (!hub) throw new Error('Hub topic missing!')
  const targetCategoryId = hub.categoryId

  let order = 1
  for (const slug of KEPT_ORDER) {
    const t = await prisma.topic.findUnique({ where: { slug } })
    if (!t) {
      console.log(`⚠️  expected kept topic missing: ${slug}`)
      continue
    }
    await prisma.topic.update({
      where: { id: t.id },
      data: { order, categoryId: targetCategoryId, parentTopicId: null },
    })
    console.log(`  ${String(order).padStart(2)}. ${slug}`)
    order++
  }

  console.log('\n🎉 Done. Unit 1 now has 12 canonical topics.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
