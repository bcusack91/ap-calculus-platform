/**
 * Apply the judge-accepted rewrites from the flashcard quality pass
 * (workflow wf_d10f200c-0ed) to the production Flashcard table.
 *
 * Pipeline: a subject-matter reviewer saw every card in a topic together and
 * proposed rewrites; a second, independent agent judged each proposal against
 * the original (accept only if factually correct AND clearly better, default
 * false). Nothing is written here without an accepting judgment — the first
 * audit taught that a review phase alone rubber-stamps.
 *
 * On top of the judgment, every final text passes mechanical validation, and
 * topic moves are checked against the destination deck so a "misaligned" card
 * cannot be relocated on top of an identical card that is already there.
 *
 * Run:      npx tsx scripts/apply-flashcard-quality.ts            (dry run)
 * Execute:  npx tsx scripts/apply-flashcard-quality.ts --execute
 *
 * Backs up every affected row to scripts/_flashcard-quality-backup.json first.
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()
const EXECUTE = process.argv.includes('--execute')
const AUDIT = process.env.AUDIT_DIR
  || '/private/tmp/claude-501/-Users-brendancusack-Desktop-AP-Calculus-Website---Ad-Revenue-Based/4be8135c-1de7-4df1-99d2-0a1e85fd5c91/scratchpad/fc-quality'

interface Change {
  id: string; category: string; reason: string
  newFront: string; newBack: string; suggestedTopicSlug?: string
}
interface Judgment {
  id: string; accept: boolean; why: string
  correctedFront?: string; correctedBack?: string
}

/** Count $ that actually act as math delimiters (\$ is literal currency). */
const mathDollars = (s: string) => (s.replace(/\\\$/g, '').match(/\$/g) || []).length

/** Reject a replacement that would itself be a defect. */
function validate(front: string, back: string): string | null {
  const f = front.trim(), b = back.trim()
  if (f.length < 5) return 'front too short'
  if (b.length < 5) return 'back too short'
  if (mathDollars(f) % 2 === 1) return 'unbalanced $ in front'
  if (mathDollars(b) % 2 === 1) return 'unbalanced $ in back'
  if (/^#{1,6}\s/.test(b)) return 'back is a markdown heading'
  const lines = b.split('\n').filter(l => l.trim())
  if (lines.length === 1 && /^[-*+]\s/.test(b)) return 'back is a lone bullet'
  if (/[:;,]$/.test(b)) return 'back ends mid-thought'
  // A whole prose sentence inside one math span renders one letter per line.
  const whole = b.match(/^\$([^$]+)\$$/)
  if (whole && (whole[1].match(/[A-Za-z]{3,}/g) || []).length >= 4) return 'whole prose sentence wrapped in math'
  // Unescaped currency. A bare "$5" is only a problem when it pairs with a
  // later "$" ACROSS prose — "she spent $5 and saved $10" renders " and saved "
  // as italic math and eats both signs. A span that merely starts with a digit
  // ($18$, $25.0$, $2x = 30$) is ordinary math and must not be flagged; an odd
  // number of delimiters is already caught above. So: look at each balanced
  // span and reject only those that read as prose rather than as an expression.
  // This mirrors looksLikeCurrencyProse() in src/lib/render-rich-text.ts.
  const spans = b.replace(/\\\$/g, '').match(/\$[^$]+\$/g) || []
  for (const span of spans) {
    const inner = span.slice(1, -1)
    if (!/^\d/.test(inner)) continue                 // not a currency-shaped opener
    if (/[\\^_{}]/.test(inner)) continue             // contains LaTeX — it is math
    if (/\s[a-z]/.test(inner)) return 'currency-shaped $ pairing across prose (escape as \\$)'
  }
  return null
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const sim = (a: string, b: string) => {
  const A = new Set(norm(a).split(' ')), B = new Set(norm(b).split(' '))
  return [...A].filter(x => B.has(x)).length / Math.max(A.size, B.size, 1)
}

async function main() {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0])
  console.log(EXECUTE ? 'MODE: EXECUTE' : 'MODE: dry run', '\n')

  const cons = JSON.parse(fs.readFileSync(`${AUDIT}/consolidated.json`, 'utf8'))
  const changes: Change[] = cons.changes ?? []
  const judgments: Judgment[] = cons.judgments ?? []
  const judged = new Map<string, Judgment>()
  for (const j of judgments) {
    const prev = judged.get(j.id)
    // A rejection anywhere wins — never apply something a judge turned down.
    if (!prev || (prev.accept && !j.accept)) judged.set(j.id, j)
  }

  console.log(`proposed rewrites: ${changes.length}`)
  console.log(`judgments:         ${judgments.length}  (accepted ${judgments.filter(j => j.accept).length})`)
  if (judgments.length === 0) {
    console.error('\nNo judgments present — the judge phase did not run. Refusing to apply unvalidated rewrites.')
    process.exit(1)
  }

  const plan: { c: Change; front: string; back: string; moveTo?: string }[] = []
  const skipped: { id: string; reason: string }[] = []

  const ids = changes.map(c => c.id)
  const rows = await prisma.flashcard.findMany({
    where: { id: { in: ids } },
    select: { id: true, front: true, back: true, topicId: true, topic: { select: { slug: true } } },
  })
  const byId = new Map(rows.map(r => [r.id, r]))

  for (const c of changes) {
    const cur = byId.get(c.id)
    if (!cur) { skipped.push({ id: c.id, reason: 'card not found in DB' }); continue }
    const j = judged.get(c.id)
    if (!j) { skipped.push({ id: c.id, reason: 'no judgment (judge phase incomplete)' }); continue }
    if (!j.accept) { skipped.push({ id: c.id, reason: 'judge rejected' }); continue }

    const front = (j.correctedFront ?? c.newFront ?? cur.front).trim()
    const back = (j.correctedBack ?? c.newBack ?? '').trim()
    const bad = validate(front, back)
    if (bad) { skipped.push({ id: c.id, reason: `failed validation: ${bad}` }); continue }
    if (front === cur.front.trim() && back === cur.back.trim()) {
      skipped.push({ id: c.id, reason: 'no actual change' }); continue
    }

    let moveTo: string | undefined
    if (c.category === 'misaligned-topic' && c.suggestedTopicSlug && c.suggestedTopicSlug !== cur.topic.slug) {
      const target = await prisma.topic.findUnique({
        where: { slug: c.suggestedTopicSlug },
        select: { id: true, flashcards: { select: { front: true } } },
      })
      if (!target) {
        skipped.push({ id: c.id, reason: `move target ${c.suggestedTopicSlug} not found — text still applied` })
      } else if (target.flashcards.some(f => sim(f.front, front) >= 0.75)) {
        // Relocating onto a near-identical card just moves the redundancy.
        skipped.push({ id: c.id, reason: `destination already has this card — text still applied` })
      } else {
        moveTo = target.id
      }
    }
    plan.push({ c, front, back, moveTo })
  }

  const cats = new Map<string, number>()
  plan.forEach(p => cats.set(p.c.category, (cats.get(p.c.category) ?? 0) + 1))
  console.log(`\napplying: ${plan.length}  (${plan.filter(p => p.moveTo).length} also move topic)`)
  ;[...cats].sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log(`   ${String(n).padStart(4)}  ${k}`))
  console.log(`skipped:  ${skipped.length}`)
  const reasons = new Map<string, number>()
  skipped.forEach(s => reasons.set(s.reason.replace(/ [a-z-]+ not found/, ' target not found'), (reasons.get(s.reason.replace(/ [a-z-]+ not found/, ' target not found')) ?? 0) + 1))
  ;[...reasons].sort((a, b) => b[1] - a[1]).forEach(([r, n]) => console.log(`   ${String(n).padStart(4)}  ${r}`))

  if (!EXECUTE) {
    console.log('\nSample:')
    plan.slice(0, 8).forEach(p => {
      const cur = byId.get(p.c.id)!
      console.log(`   [${p.c.category}] ${cur.topic.slug}`)
      console.log(`      was: ${cur.front.slice(0, 80)}`)
      console.log(`      now: ${p.front.slice(0, 80)}`)
    })
    console.log('\nRe-run with --execute to apply.')
    return
  }

  // Judgments arrive in waves, so this script runs more than once. A fixed
  // backup filename would let the second run clobber the first run's backup and
  // strand those rows with no way back — every run gets its own file.
  const backup = await prisma.flashcard.findMany({ where: { id: { in: plan.map(p => p.c.id) } } })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = `scripts/_flashcard-quality-backup-${stamp}.json`
  fs.writeFileSync(backupPath, JSON.stringify(backup, null, 1))
  console.log(`\nbacked up ${backup.length} rows to ${backupPath}`)

  let n = 0
  for (const p of plan) {
    await prisma.flashcard.update({
      where: { id: p.c.id },
      data: { front: p.front, back: p.back, ...(p.moveTo ? { topicId: p.moveTo } : {}) },
    })
    n++
  }
  console.log(`applied ${n} rewrites`)
  console.log(`flashcards now: ${await prisma.flashcard.count()}`)
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
