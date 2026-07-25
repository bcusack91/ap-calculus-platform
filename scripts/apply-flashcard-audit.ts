/**
 * Apply the mechanically-verified findings of the full flashcard audit
 * (workflow wf_50f0ede3-ee1) to the production Flashcard table.
 *
 * Input is recheck.json, NOT the raw agent findings. The audit's own verify
 * pass confirmed 203/203 findings — a reviewer that never rejects is not
 * reviewing — so every claim was instead re-checked against the live rows:
 *   fragment-back  → regex (heading / lone bullet / table row / colon lead-in / <15 chars)
 *   katex-broken   → unbalanced $ delimiters
 *   cloze-artifact → literal {{c1::…}} present
 *   duplicate      → the named sibling exists AND word-overlap ≥ 0.60
 * That re-check rejected 20 "duplicate" claims whose pairs shared as little as
 * 0.00 similarity; applying them unchecked would have deleted good cards.
 *
 * Claims that need real subject-matter judgment (wrong-answer, mislabeled,
 * vacuous, and fragments no regex can confirm) are NOT applied here.
 *
 * Run:      npx tsx scripts/apply-flashcard-audit.ts            (dry run)
 * Execute:  npx tsx scripts/apply-flashcard-audit.ts --execute
 *
 * Backs up every affected row to scripts/_flashcard-audit-backup.json first.
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()
const EXECUTE = process.argv.includes('--execute')
const AUDIT = process.env.AUDIT_DIR
  || '/private/tmp/claude-501/-Users-brendancusack-Desktop-AP-Calculus-Website---Ad-Revenue-Based/4be8135c-1de7-4df1-99d2-0a1e85fd5c91/scratchpad/flashcard-audit'

interface Item {
  id: string; issue: string; severity: string; detail: string
  action: 'rewrite' | 'delete' | 'relabel'
  proposedFront?: string; proposedBack?: string; targetTopicSlug?: string
  why: string; keep?: string
}

/** A replacement must itself be a real answer, or we are trading one defect for another. */
function replacementIsSane(text: string | undefined): boolean {
  if (!text) return false
  const t = text.trim()
  if (t.length < 15) return false
  if (/^#{1,6}\s/.test(t)) return false
  if (/^[-*+]\s/.test(t)) return false
  if (/[:;,]$/.test(t)) return false
  if ((t.match(/\$/g) || []).length % 2 === 1) return false   // unbalanced math
  return true
}

async function main() {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0])
  console.log(EXECUTE ? 'MODE: EXECUTE' : 'MODE: dry run', '\n')

  const rc = JSON.parse(fs.readFileSync(`${AUDIT}/recheck.json`, 'utf8'))
  const verified: Item[] = rc.verifiedTrue

  // One action per card; delete outranks rewrite when both were proposed.
  const rank = { delete: 3, relabel: 2, rewrite: 1 } as const
  const byCard = new Map<string, Item>()
  for (const f of verified) {
    const prev = byCard.get(f.id)
    if (!prev || rank[f.action] > rank[prev.action]) byCard.set(f.id, f)
  }

  const plan: Item[] = []
  const skipped: { id: string; reason: string }[] = []
  const deleting = new Set<string>()
  // Pass 1 rejections must not be resurrected by pass 2's generic delete branch.
  const rejected = new Set<string>()
  const reject = (id: string, reason: string) => { rejected.add(id); skipped.push({ id, reason }) }

  // Pass 1: duplicate deletions, with survivor guards.
  //
  // Word-overlap alone is not enough to authorize a delete: a pair can share a
  // question but differ in the answer, and the terser card is sometimes the one
  // the auditor kept. Two extra conditions, both checked against the live rows:
  //   (a) the survivor is not itself flagged defective by this audit, and
  //   (b) the survivor's answer is at least as long as the one being deleted
  //       (a crude but effective completeness proxy — the observed low
  //       back-similarities are LaTeX-vs-unicode formatting noise, not
  //       divergent content, and in every sampled pair the survivor was the
  //       fuller card).
  // Pairs that fail either condition go to judgment rather than the bin.
  const flaggedIds = new Set(verified.map(v => v.id))
  const dupIds = [...byCard.values()].filter(f => f.issue === 'duplicate' && f.action === 'delete')
  const survivorIds = dupIds.map(f => f.keep).filter(Boolean) as string[]
  const survivors = new Map(
    (await prisma.flashcard.findMany({ where: { id: { in: survivorIds } }, select: { id: true, back: true } }))
      .map(r => [r.id, r])
  )
  const victims = new Map(
    (await prisma.flashcard.findMany({ where: { id: { in: dupIds.map(f => f.id) } }, select: { id: true, back: true } }))
      .map(r => [r.id, r])
  )

  for (const f of dupIds) {
    const keep = f.keep
    if (!keep) { reject(f.id, 'duplicate without a named survivor'); continue }
    if (deleting.has(keep)) { reject(f.id, 'its designated survivor is itself being deleted'); continue }
    if (flaggedIds.has(keep)) { reject(f.id, 'survivor is itself flagged defective'); continue }
    const sv = survivors.get(keep), vi = victims.get(f.id)
    if (!sv || !vi) { reject(f.id, 'pair no longer resolves'); continue }
    if (sv.back.trim().length < vi.back.trim().length) {
      reject(f.id, 'survivor answer is shorter than the one being deleted'); continue
    }
    if (byCard.get(keep)?.action === 'delete') byCard.delete(keep)   // never delete both halves
    deleting.add(f.id)
    plan.push(f)
  }

  // Pass 2: everything else.
  for (const f of byCard.values()) {
    if (deleting.has(f.id) || rejected.has(f.id)) continue
    if (f.action === 'delete') { deleting.add(f.id); plan.push(f); continue }
    if (f.action === 'rewrite') {
      if (!replacementIsSane(f.proposedBack)) { skipped.push({ id: f.id, reason: 'proposed replacement is not a sane answer' }); continue }
      plan.push(f)
      continue
    }
    if (f.action === 'relabel') {
      if (!f.targetTopicSlug) { skipped.push({ id: f.id, reason: 'relabel without target' }); continue }
      const topic = await prisma.topic.findUnique({ where: { slug: f.targetTopicSlug }, select: { id: true } })
      if (!topic) { skipped.push({ id: f.id, reason: `target topic ${f.targetTopicSlug} not found` }); continue }
      plan.push(f)
    }
  }

  const counts = { rewrite: 0, delete: 0, relabel: 0 }
  plan.forEach(p => counts[p.action]++)
  console.log(`mechanically verified findings: ${verified.length} on ${byCard.size} cards`)
  console.log(`actionable: ${plan.length}  (rewrite ${counts.rewrite} · delete ${counts.delete} · relabel ${counts.relabel})`)
  console.log(`skipped:    ${skipped.length}`)
  const reasons = new Map<string, number>()
  skipped.forEach(s => reasons.set(s.reason, (reasons.get(s.reason) ?? 0) + 1))
  ;[...reasons].forEach(([r, n]) => console.log(`   ${String(n).padStart(4)}  ${r}`))
  console.log(`\ndeferred to human/LLM judgment: ${rc.needsJudgment.length}`)
  console.log(`rejected by the re-check:       ${rc.verifiedFalse.length}`)

  if (!EXECUTE) {
    console.log('\nSample of planned changes:')
    plan.slice(0, 12).forEach(p => console.log(`   ${p.action.padEnd(7)} [${p.issue}] ${p.id.slice(-8)}  ${p.why}`))
    console.log('\nRe-run with --execute to apply.')
    return
  }

  const ids = plan.map(p => p.id)
  const backup = await prisma.flashcard.findMany({ where: { id: { in: ids } } })
  fs.writeFileSync('scripts/_flashcard-audit-backup.json', JSON.stringify(backup, null, 1))
  console.log(`\nbacked up ${backup.length} rows to scripts/_flashcard-audit-backup.json`)
  const present = new Set(backup.map(b => b.id))

  let applied = 0, missing = 0
  for (const p of plan) {
    if (!present.has(p.id)) { missing++; continue }
    if (p.action === 'rewrite') {
      await prisma.flashcard.update({
        where: { id: p.id },
        data: { ...(p.proposedFront ? { front: p.proposedFront } : {}), back: p.proposedBack! },
      })
    } else if (p.action === 'delete') {
      await prisma.flashcard.delete({ where: { id: p.id } })
    } else {
      const topic = await prisma.topic.findUnique({ where: { slug: p.targetTopicSlug! }, select: { id: true } })
      await prisma.flashcard.update({ where: { id: p.id }, data: { topicId: topic!.id } })
    }
    applied++
  }
  console.log(`applied ${applied} changes (${missing} rows already gone)`)
  console.log(`flashcards now: ${await prisma.flashcard.count()}`)
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
