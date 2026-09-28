/**
 * Apply reviewed SAT flashcard fixes (proposals JSON) to a database.
 *
 *   SEED_DB=prod npx tsx scripts/apply-sat-card-fixes.ts <proposals.json>            # dry run
 *   SEED_DB=prod APPLY=1 npx tsx scripts/apply-sat-card-fixes.ts <proposals.json>    # write
 *   ... ALLOW_DELETE=1                                                                # also delete
 *
 * Proposal shape: { action: UPDATE|MOVE|CREATE|DELETE, id?, topicSlug, toTopicSlug?,
 * front?, back?, hint?, reason, category }. UPDATE carries only the changed fields.
 *
 * Safety:
 *  - Refuses to run if any UPDATE/MOVE/DELETE id is missing or sits on a
 *    different topic than the proposal says (the proposals were drafted from a
 *    dump; drift means re-review, not blind overwrite).
 *  - Writes a backup of every touched row (before-image) next to the proposals
 *    file before writing anything.
 *  - DELETE is skipped unless ALLOW_DELETE=1: deleting a card cascades its
 *    FlashcardProgress, i.e. students' review history for it.
 *  - Idempotent: an UPDATE already applied is a no-op; a CREATE whose
 *    (topic, front) already exists is skipped.
 *  - Also patches prisma/card-seeds/cards-sat-{advanced,core-skills}.json so a
 *    re-seed of the track decks carries the fixed text instead of the old one.
 */
import fs from 'node:fs'
import path from 'node:path'
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

type Proposal = {
  action: 'UPDATE' | 'MOVE' | 'CREATE' | 'DELETE'
  id?: string
  topicSlug: string
  toTopicSlug?: string
  front?: string
  back?: string
  hint?: string | null
  reason: string
  category: string
}

const APPLY = process.env.APPLY === '1'
const ALLOW_DELETE = process.env.ALLOW_DELETE === '1'
const SEED_FILES = ['prisma/card-seeds/cards-sat-advanced.json', 'prisma/card-seeds/cards-sat-core-skills.json']

async function main() {
  const file = process.argv[2]
  if (!file) throw new Error('usage: apply-sat-card-fixes.ts <proposals.json>')
  const proposals: Proposal[] = JSON.parse(fs.readFileSync(file, 'utf8'))
  const prisma = new PrismaClient()

  const slugs = Array.from(new Set(proposals.flatMap((p) => [p.topicSlug, p.toTopicSlug].filter(Boolean) as string[])))
  const topics = await prisma.topic.findMany({ where: { slug: { in: slugs } }, select: { id: true, slug: true } })
  const topicId = new Map(topics.map((t) => [t.slug, t.id]))
  const missingTopics = slugs.filter((s) => !topicId.has(s))

  const ids = proposals.filter((p) => p.id).map((p) => p.id!)
  const rows = await prisma.flashcard.findMany({
    where: { id: { in: ids } },
    select: { id: true, topicId: true, front: true, back: true, hint: true, topic: { select: { slug: true } } },
  })
  const byId = new Map(rows.map((r) => [r.id, r]))

  const problems: string[] = missingTopics.map((s) => `unknown topic ${s}`)
  for (const p of proposals) {
    if (!p.id) continue
    const r = byId.get(p.id)
    if (!r) {
      problems.push(`${p.action} ${p.id}: card not found`)
      continue
    }
    // A MOVE already applied sits on its destination topic.
    const onExpected = r.topic.slug === p.topicSlug || (p.action === 'MOVE' && r.topic.slug === p.toTopicSlug)
    if (!onExpected) problems.push(`${p.action} ${p.id}: on ${r.topic.slug}, proposal says ${p.topicSlug}`)
  }
  if (problems.length) {
    console.error('Refusing to run:\n  ' + problems.join('\n  '))
    process.exit(1)
  }

  const counts = { update: 0, updateNoop: 0, move: 0, moveNoop: 0, create: 0, createSkip: 0, delete: 0, deleteSkipped: 0 }
  const backup = rows.map((r) => ({ id: r.id, topicSlug: r.topic.slug, front: r.front, back: r.back, hint: r.hint }))
  const seedPatches: { topicSlug: string; oldFront: string; front?: string; back?: string; hint?: string | null }[] = []

  if (APPLY) {
    const out = path.join(path.dirname(file), `backup-before-apply-${new Date().toISOString().replace(/[:.]/g, '-')}.json`)
    fs.writeFileSync(out, JSON.stringify(backup, null, 1))
    console.log(`backup of ${backup.length} rows → ${out}`)
  }

  for (const p of proposals) {
    const r = p.id ? byId.get(p.id)! : null
    if (p.action === 'UPDATE' && r) {
      const data: { front?: string; back?: string; hint?: string | null } = {}
      if (p.front !== undefined && p.front !== r.front) data.front = p.front
      if (p.back !== undefined && p.back !== r.back) data.back = p.back
      if (p.hint !== undefined && p.hint !== r.hint) data.hint = p.hint
      if (Object.keys(data).length === 0) { counts.updateNoop++; continue }
      counts.update++
      seedPatches.push({ topicSlug: r.topic.slug, oldFront: r.front, ...data })
      if (APPLY) await prisma.flashcard.update({ where: { id: r.id }, data })
    } else if (p.action === 'MOVE' && r) {
      if (r.topic.slug === p.toTopicSlug) { counts.moveNoop++; continue }
      counts.move++
      if (APPLY) await prisma.flashcard.update({ where: { id: r.id }, data: { topicId: topicId.get(p.toTopicSlug!)! } })
    } else if (p.action === 'CREATE') {
      const tid = topicId.get(p.topicSlug)!
      const exists = await prisma.flashcard.findFirst({ where: { topicId: tid, front: p.front! }, select: { id: true } })
      if (exists) { counts.createSkip++; continue }
      counts.create++
      if (APPLY) await prisma.flashcard.create({ data: { topicId: tid, front: p.front!, back: p.back!, hint: p.hint ?? null } })
    } else if (p.action === 'DELETE' && r) {
      if (!ALLOW_DELETE) { counts.deleteSkipped++; continue }
      counts.delete++
      if (APPLY) await prisma.flashcard.delete({ where: { id: r.id } })
    }
  }

  // Keep the track seed files in step with the fixed text.
  let seedEdits = 0
  for (const seedFile of SEED_FILES) {
    const seeds: { topicSlug: string; front: string; back: string; hint?: string | null }[] = JSON.parse(fs.readFileSync(seedFile, 'utf8'))
    let changed = false
    for (const patch of seedPatches) {
      const s = seeds.find((x) => x.topicSlug === patch.topicSlug && x.front === patch.oldFront)
      if (!s) continue
      if (patch.front !== undefined) s.front = patch.front
      if (patch.back !== undefined) s.back = patch.back
      if (patch.hint !== undefined) {
        if (patch.hint === null) delete s.hint
        else s.hint = patch.hint
      }
      changed = true
      seedEdits++
    }
    if (changed && APPLY) fs.writeFileSync(seedFile, JSON.stringify(seeds, null, 1) + '\n')
  }

  console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'} (${process.env.SEED_DB === 'prod' ? 'prod' : 'local'}):`, counts, `seed-file entries patched: ${seedEdits}`)
  if (!ALLOW_DELETE && counts.deleteSkipped) console.log(`${counts.deleteSkipped} DELETE proposals skipped (set ALLOW_DELETE=1 after owner approval).`)
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
