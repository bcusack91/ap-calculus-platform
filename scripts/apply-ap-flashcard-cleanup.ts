/**
 * Remove off-exam AP flashcards from the PRODUCTION Flashcard table and rewrite
 * the cards that teach a non-AP convention (Physics 2 first law, Stats LSRL /
 * normal probability plot, and the other TRIM.md "rewrite" cards).
 *
 * Input: plan.json built from ap-phase1-pipeline/trim/<course>/TRIM.md and a
 * read-only prod snapshot (2026-10-16). Human-readable version: plan.md next to it.
 *
 *   delete           applied with --apply
 *   update           applied with --apply (front, back and hint)
 *   suggestedDelete  applied ONLY with --apply --include-suggested
 *   suggestedUpdate  applied ONLY with --apply --include-suggested
 *   unmatched, held  never applied (report only)
 *
 * Cards on the 36 topics in src/data/retired-ap-topics.ts are NOT in the plan:
 * prisma/retire-ap-topics.ts deletes those topics and their cards cascade.
 *
 * Safety:
 *   - Dry run unless --apply is passed.
 *   - Loads .env explicitly (dotenv override), prints the DB host, and refuses
 *     to write unless the host is the Neon production host or NODE_ENV=production
 *     (override with --allow-any-host for a local rehearsal).
 *   - Every row is re-read inside the transaction; a row is skipped unless its
 *     CURRENT front still equals the plan's front (delete) / oldFront (update).
 *     An update whose row already shows the new text is reported as already applied.
 *   - Backs up every affected Flashcard row (and the FlashcardProgress rows of
 *     deleted cards) to scripts/_ap-flashcard-cleanup-backup-<timestamp>.json first.
 *   - All writes run in one transaction.
 *
 * Run (repo root):
 *   npx tsx scripts/apply-ap-flashcard-cleanup.ts                         (dry run)
 *   npx tsx scripts/apply-ap-flashcard-cleanup.ts --apply                 (write)
 *   npx tsx scripts/apply-ap-flashcard-cleanup.ts --apply --include-suggested
 *   --plan=/path/to/plan.json   to use a plan somewhere else
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import os from 'os'
import path from 'path'

const APPLY = process.argv.includes('--apply')
const INCLUDE_SUGGESTED = process.argv.includes('--include-suggested')
const ALLOW_ANY_HOST = process.argv.includes('--allow-any-host')
const PLAN_PATH =
  process.argv.find((a) => a.startsWith('--plan='))?.slice('--plan='.length) ||
  path.join(
    os.homedir(),
    '.claude/projects/-Users-brendancusack-Projects-AP-Calculus-Website---Ad-Revenue-Based/ap-phase1-pipeline/flashcard-cleanup/plan.json',
  )

interface PlanDelete { id: string; topicSlug: string; front: string; progressRows: number; source: string }
interface PlanUpdate {
  id: string; topicSlug: string
  oldFront: string; oldBack: string; newFront: string; newBack: string
  oldHint?: string | null; newHint?: string | null
  progressRows: number; source: string
}
interface Plan {
  delete: PlanDelete[]; update: PlanUpdate[]
  suggestedDelete?: PlanDelete[]; suggestedUpdate?: PlanUpdate[]
  unmatched?: unknown[]; held?: unknown[]
}

const prisma = new PrismaClient()

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  console.log('DB host:', host || '(DATABASE_URL not set)')
  console.log('Plan:   ', PLAN_PATH)
  console.log('Mode:   ', APPLY ? 'APPLY (writes)' : 'dry run', INCLUDE_SUGGESTED ? '+ suggested' : '')
  const isProdHost = host.endsWith('neon.tech')
  if (!host) throw new Error('DATABASE_URL is empty after loading .env')
  if (APPLY && !isProdHost && process.env.NODE_ENV !== 'production' && !ALLOW_ANY_HOST) {
    throw new Error(`Refusing to write: host ${host} is not the Neon production host and NODE_ENV is not "production" (pass --allow-any-host for a local rehearsal).`)
  }

  const plan: Plan = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf8'))
  const deletes = [...plan.delete, ...(INCLUDE_SUGGESTED ? plan.suggestedDelete ?? [] : [])]
  const updates = [...plan.update, ...(INCLUDE_SUGGESTED ? plan.suggestedUpdate ?? [] : [])]
  console.log(`Plan rows: delete ${plan.delete.length}, update ${plan.update.length}, suggestedDelete ${plan.suggestedDelete?.length ?? 0}, suggestedUpdate ${plan.suggestedUpdate?.length ?? 0}, unmatched ${plan.unmatched?.length ?? 0} (never applied), held ${plan.held?.length ?? 0} (never applied)`)

  const ids = [...new Set([...deletes.map((d) => d.id), ...updates.map((u) => u.id)])]
  if (ids.length !== deletes.length + updates.length) throw new Error('An id appears twice in the plan (delete and update, or duplicated).')

  // ---- Pre-check (read-only) and backup
  const current = await prisma.flashcard.findMany({
    where: { id: { in: ids } },
    include: { topic: { select: { slug: true } }, _count: { select: { progress: true } } },
  })
  const byId = new Map(current.map((c) => [c.id, c]))

  type Verdict = 'ok' | 'missing' | 'front-changed' | 'topic-changed' | 'already-applied'
  const checkDelete = (d: PlanDelete): Verdict => {
    const c = byId.get(d.id)
    if (!c) return 'missing'
    if (c.front !== d.front) return 'front-changed'
    if (c.topic.slug !== d.topicSlug) return 'topic-changed'
    return 'ok'
  }
  const checkUpdate = (u: PlanUpdate): Verdict => {
    const c = byId.get(u.id)
    if (!c) return 'missing'
    if (c.front === u.newFront && c.back === u.newBack) return 'already-applied'
    if (c.front !== u.oldFront) return 'front-changed'
    if (c.topic.slug !== u.topicSlug) return 'topic-changed'
    return 'ok'
  }

  const tally = (vs: Verdict[]) => vs.reduce<Record<string, number>>((m, v) => ((m[v] = (m[v] ?? 0) + 1), m), {})
  const delVerdicts = deletes.map((d) => [d, checkDelete(d)] as const)
  const updVerdicts = updates.map((u) => [u, checkUpdate(u)] as const)

  for (const [d, v] of delVerdicts) if (v !== 'ok') console.log(`  SKIP delete ${d.id} [${v}] ${d.topicSlug} | ${d.front.slice(0, 70)}`)
  for (const [u, v] of updVerdicts) if (v !== 'ok') console.log(`  SKIP update ${u.id} [${v}] ${u.topicSlug} | ${u.oldFront.slice(0, 70)}`)

  const okDeletes = delVerdicts.filter(([, v]) => v === 'ok').map(([d]) => d)
  const okUpdates = updVerdicts.filter(([, v]) => v === 'ok').map(([u]) => u)
  const progressToDrop = okDeletes.reduce((s, d) => s + (byId.get(d.id)?._count.progress ?? 0), 0)

  console.log('\nDelete checks:', tally(delVerdicts.map(([, v]) => v)))
  console.log('Update checks:', tally(updVerdicts.map(([, v]) => v)))
  console.log(`Would delete ${okDeletes.length} flashcards (${progressToDrop} FlashcardProgress rows cascade) and update ${okUpdates.length}.`)

  if (!APPLY) {
    console.log('\nDry run only. Re-run with --apply to write.')
    return
  }

  const progressRows = await prisma.flashcardProgress.findMany({ where: { flashcardId: { in: okDeletes.map((d) => d.id) } } })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `_ap-flashcard-cleanup-backup-${stamp}.json`)
  fs.writeFileSync(backupPath, JSON.stringify({
    host, createdAt: new Date().toISOString(),
    flashcards: current.filter((c) => okDeletes.some((d) => d.id === c.id) || okUpdates.some((u) => u.id === c.id))
      .map(({ _count, topic, ...row }) => ({ ...row, topicSlug: topic.slug })),
    flashcardProgress: progressRows,
  }, null, 2))
  console.log('Backup written:', backupPath)

  // ---- Writes, one transaction; each row re-verified inside it
  const result = await prisma.$transaction(async (tx) => {
    let deleted = 0, progressDeleted = 0, updated = 0, skipped = 0
    for (const d of okDeletes) {
      const row = await tx.flashcard.findUnique({ where: { id: d.id }, select: { front: true } })
      if (!row || row.front !== d.front) { skipped++; console.log(`  SKIP delete ${d.id} (changed during run)`); continue }
      progressDeleted += (await tx.flashcardProgress.deleteMany({ where: { flashcardId: d.id } })).count
      await tx.flashcard.delete({ where: { id: d.id } })
      deleted++
    }
    for (const u of okUpdates) {
      const row = await tx.flashcard.findUnique({ where: { id: u.id }, select: { front: true } })
      if (!row || row.front !== u.oldFront) { skipped++; console.log(`  SKIP update ${u.id} (changed during run)`); continue }
      await tx.flashcard.update({
        where: { id: u.id },
        data: { front: u.newFront, back: u.newBack, ...(u.newHint !== undefined ? { hint: u.newHint } : {}) },
      })
      updated++
    }
    return { deleted, progressDeleted, updated, skipped }
  }, { timeout: 120_000, maxWait: 15_000 })

  console.log(`\nDONE: deleted ${result.deleted} flashcards (${result.progressDeleted} FlashcardProgress rows), updated ${result.updated}, skipped inside transaction ${result.skipped}.`)
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1 })
  .finally(() => prisma.$disconnect())
