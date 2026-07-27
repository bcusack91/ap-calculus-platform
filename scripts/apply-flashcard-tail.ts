/**
 * Final tail of the flashcard quality pass: the 10 proposals whose judge chunk
 * repeatedly died on session limits, plus one ("WTO") falsely rejected by the
 * applier's 5-character front minimum — a term-style front is legitimate.
 *
 * These were judged by hand instead of by agent: each answer's math, chemistry
 * and history was checked directly (4+9=13; x=6 cups; (√3/2, ½) at π/6;
 * sin(A−B) expansion; CaF₂/HF acid solubility; apartheid 1948/1990/1994).
 *
 * Run:      npx tsx scripts/apply-flashcard-tail.ts            (dry run)
 * Execute:  npx tsx scripts/apply-flashcard-tail.ts --execute
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()
const EXECUTE = process.argv.includes('--execute')
const AUDIT = '/private/tmp/claude-501/-Users-brendancusack-Desktop-AP-Calculus-Website---Ad-Revenue-Based/4be8135c-1de7-4df1-99d2-0a1e85fd5c91/scratchpad/fc-quality'

// Hand-approved suffixes. 86ftz0js is EXCLUDED: its card no longer exists.
const APPROVED = ['q712luky','ugjsn0m5','e06p76jn','71jzj37e','ppzvw37k','l5qwbbij','br1s06lj','5abuqxj0','ck03q8dz','9y26v4r3','1qtvxxwr']

async function main() {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0])
  console.log(EXECUTE ? 'MODE: EXECUTE' : 'MODE: dry run', '\n')
  const cons = JSON.parse(fs.readFileSync(`${AUDIT}/consolidated.json`, 'utf8'))
  const picks = cons.changes.filter((c: any) => APPROVED.some(s => c.id.endsWith(s)))
  console.log(`hand-approved: ${picks.length} of ${APPROVED.length} expected`)

  const rows = await prisma.flashcard.findMany({ where: { id: { in: picks.map((c: any) => c.id) } } })
  const byId = new Map(rows.map(r => [r.id, r]))
  if (EXECUTE) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    fs.writeFileSync(`scripts/_flashcard-tail-backup-${stamp}.json`, JSON.stringify(rows, null, 1))
    console.log(`backed up ${rows.length} rows`)
  }
  let n = 0
  for (const c of picks) {
    const cur = byId.get(c.id)
    if (!cur) { console.log(`  ⚠ ${c.id.slice(-8)} missing — skipped`); continue }
    console.log(`  [${c.category}] ${c.id.slice(-8)}: ${cur.front.slice(0, 50)} -> ${c.newFront.slice(0, 50)}`)
    if (EXECUTE) {
      await prisma.flashcard.update({ where: { id: c.id }, data: { front: c.newFront, back: c.newBack } })
      n++
    }
  }
  console.log(EXECUTE ? `\napplied ${n}` : '\nRe-run with --execute to apply.')
}
main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
