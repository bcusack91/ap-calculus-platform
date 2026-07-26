/**
 * Repair the 5 remaining auto-generated fragment cards (all AP Statistics).
 *
 * Each had a "What is <heading>?" front paired with whatever markdown block
 * followed that heading in the lesson — a sub-heading, a lone bullet, or a
 * sentence ending in a colon. The generator gate now rejects this shape at
 * creation time; these five predate it.
 *
 * Run:      npx tsx scripts/fix-stats-fragment-cards.ts            (dry run)
 * Execute:  npx tsx scripts/fix-stats-fragment-cards.ts --execute
 */
import dotenv from 'dotenv'
dotenv.config({ path: '.env', override: true })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const EXECUTE = process.argv.includes('--execute')

const FIXES: { id: string; front: string; back: string }[] = [
  {
    id: 'cmo6bn1dd001dl804nj2xtgyg',
    front: 'What is the difference between a population and a sample?',
    back: 'A **population** is every individual you want to draw a conclusion about. A **sample** is the subset you actually collect data from. A number describing a population is a **parameter**; a number describing a sample is a **statistic**.',
  },
  {
    id: 'cmoaba61h000xjs05mhz0ie8f',
    front: 'What are the main types of observational study?',
    back: 'A **sample survey** collects data at one point in time. A **retrospective** study looks backward at records already collected. A **prospective** study follows subjects forward in time. None of them assign treatments, so none can establish causation.',
  },
  {
    id: 'cmoc5h9xi000xlb04gzhev27j',
    front: 'What is the geometric probability formula?',
    back: '$P(X = k) = (1-p)^{k-1}p$ — the probability that the first success occurs on the $k$th trial, where $p$ is the probability of success on any single trial.',
  },
  {
    id: 'cmoc5h9xn000zlb04gbpzm2cy',
    front: 'What do geometpdf and geometcdf compute?',
    back: '$\\text{geometpdf}(p, k)$ gives the probability the first success occurs exactly on trial $k$. $\\text{geometcdf}(p, k)$ gives the probability it occurs on or before trial $k$.',
  },
  {
    id: 'cmokkr296004zlg047jx4f71s',
    front: 'What is a z-score and how do you calculate it?',
    back: 'A **z-score** tells how many standard deviations a value lies from the mean: $z = \\frac{x - \\mu}{\\sigma}$. A z-score of $+2$ means the value sits two standard deviations above the mean.',
  },
]

async function main() {
  console.log('DB host:', (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0])
  console.log(EXECUTE ? 'MODE: EXECUTE' : 'MODE: dry run', '\n')
  for (const f of FIXES) {
    const cur = await prisma.flashcard.findUnique({ where: { id: f.id }, select: { front: true, back: true, topic: { select: { slug: true } } } })
    if (!cur) { console.log(`  ⚠ ${f.id.slice(-8)} not found — skipped`); continue }
    console.log(`  [${cur.topic.slug}]`)
    console.log(`    OLD Q: ${cur.front}`)
    console.log(`    OLD A: ${JSON.stringify(cur.back.slice(0, 90))}`)
    console.log(`    NEW Q: ${f.front}`)
    console.log(`    NEW A: ${JSON.stringify(f.back.slice(0, 110))}\n`)
    if (EXECUTE) await prisma.flashcard.update({ where: { id: f.id }, data: { front: f.front, back: f.back } })
  }
  console.log(EXECUTE ? 'applied.' : 'Re-run with --execute to apply.')
}

main().catch(e => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
