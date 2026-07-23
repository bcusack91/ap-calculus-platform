/**
 * Verifies src/lib/mcat-topic-map.ts stays consistent with BOTH slug
 * vocabularies it bridges:
 *   1. every mapped bank slug actually exists in the competitive bank
 *   2. every DB MCAT curriculum topic is either mapped or explicitly excluded
 *   3. every bank subtopic is reachable from at least one curriculum topic
 *      (otherwise a playable pool can never satisfy any assignment)
 *
 * Run against the local DB by default; `ALIGN_DB=prod` checks production.
 *   npx tsx scripts/verify-mcat-slug-alignment.ts
 */
import { config } from 'dotenv'
config({ path: process.env.ALIGN_DB === 'prod' ? '.env' : '.env.local', override: true })

import { PrismaClient } from '@prisma/client'
import { MCAT_SECTIONS } from '../src/data/competitive-questions/mcat-bank'
import { bankSlugsForCurriculumTopic } from '../src/lib/mcat-topic-map'

/** Curriculum topics with no playable question pool, by design. */
const INTENTIONALLY_UNMAPPED = /^mcat-test-day-strategy-/

async function main() {
  const prisma = new PrismaClient()
  const bankSlugs = new Set<string>()
  for (const s of MCAT_SECTIONS) for (const a of s.areas) for (const t of a.subtopics) bankSlugs.add(t.slug)

  const topics = await prisma.topic.findMany({
    where: { slug: { startsWith: 'mcat-' } },
    select: { slug: true, title: true },
    orderBy: { slug: 'asc' },
  })
  await prisma.$disconnect()

  console.log(`DB curriculum topics: ${topics.length}`)
  console.log(`Bank subtopics:       ${bankSlugs.size}\n`)

  const problems: string[] = []
  const reached = new Set<string>()
  let unmapped = 0

  for (const t of topics) {
    const targets = bankSlugsForCurriculumTopic(t.slug)
    if (targets.length === 0) {
      if (INTENTIONALLY_UNMAPPED.test(t.slug)) unmapped++
      else problems.push(`unmapped curriculum topic: ${t.slug}  (${t.title})`)
      continue
    }
    for (const target of targets) {
      if (!bankSlugs.has(target)) problems.push(`${t.slug} → nonexistent bank slug "${target}"`)
      else reached.add(target)
    }
  }

  for (const b of bankSlugs) {
    if (!reached.has(b)) problems.push(`bank subtopic unreachable from any curriculum topic: ${b}`)
  }

  console.log(`Intentionally unmapped (test-day logistics): ${unmapped}`)
  console.log(`Bank subtopics reachable: ${reached.size}/${bankSlugs.size}\n`)

  if (problems.length > 0) {
    console.log(`✗ ${problems.length} alignment problem(s):`)
    for (const p of problems) console.log(`   ${p}`)
    process.exit(1)
  }
  console.log('✓ Curriculum ↔ competitive bank slugs fully aligned.')
}

main()
