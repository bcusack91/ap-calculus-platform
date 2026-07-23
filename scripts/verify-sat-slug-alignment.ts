/**
 * Verifies the SAT curriculum ↔ competitive skill map in src/lib/sat-topic-map.ts:
 *   1. every mapped skill slug exists in the SAT hierarchy
 *   2. every DB sat- curriculum topic is mapped or explicitly excluded
 *   3. every competitive skill is reachable from some curriculum topic
 *      (an unreachable skill pool can never satisfy any assignment)
 *
 * `ALIGN_DB=prod` checks production; default is local.
 *   npx tsx scripts/verify-sat-slug-alignment.ts
 */
import { config } from 'dotenv'
config({ path: process.env.ALIGN_DB === 'prod' ? '.env' : '.env.local', override: true })

import { PrismaClient } from '@prisma/client'
import { SAT_SKILLS } from '../src/data/competitive-questions/sat-bank'
import { skillSlugsForCourseTopic } from '../src/lib/sat-topic-map'

/** Strategy/logistics topics with no question pool, by design. */
const INTENTIONALLY_UNMAPPED = new Set(['sat-time-management'])

async function main() {
  const prisma = new PrismaClient()
  const skillSlugs = new Set(SAT_SKILLS.map(s => s.slug))
  const topics = await prisma.topic.findMany({
    where: { slug: { startsWith: 'sat-' } },
    select: { slug: true, title: true },
    orderBy: { slug: 'asc' },
  })
  await prisma.$disconnect()

  console.log(`DB curriculum topics: ${topics.length}`)
  console.log(`Competitive skills:   ${skillSlugs.size}\n`)

  const problems: string[] = []
  const reached = new Set<string>()
  let unmapped = 0

  for (const t of topics) {
    const targets = skillSlugsForCourseTopic(t.slug)
    if (targets.length === 0) {
      if (INTENTIONALLY_UNMAPPED.has(t.slug)) unmapped++
      else problems.push(`unmapped curriculum topic: ${t.slug}  (${t.title})`)
      continue
    }
    for (const target of targets) {
      if (!skillSlugs.has(target)) problems.push(`${t.slug} → nonexistent skill slug "${target}"`)
      else reached.add(target)
    }
  }

  for (const s of skillSlugs) {
    if (!reached.has(s)) problems.push(`skill unreachable from any curriculum topic: ${s}`)
  }

  console.log(`Intentionally unmapped (strategy-only): ${unmapped}`)
  console.log(`Skills reachable: ${reached.size}/${skillSlugs.size}\n`)

  if (problems.length > 0) {
    console.log(`✗ ${problems.length} alignment problem(s):`)
    for (const p of problems) console.log(`   ${p}`)
    process.exit(1)
  }
  console.log('✓ SAT curriculum ↔ competitive skills fully aligned.')
}

main()
