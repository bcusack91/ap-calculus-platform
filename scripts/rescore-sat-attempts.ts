/**
 * Rescore past SAT full-length practice attempts on the routing-aware curve
 * (satSectionScaledRouted), so older attempts read on the same scale as new
 * ones. DRY RUN by default: prints every score change and a summary, writes
 * nothing. `--apply` writes — only after the owner has signed off on the dry
 * run.
 *
 * For each SatTestAttempt with scoringVersion 1 that was a FULL test (98
 * questions; mini tests have no Module 2 and keep the unrouted curve):
 *   - each section's route comes from its stored Module 1 tally (≥70% →
 *     harder), exactly as the runner routed it;
 *   - if the stored Module 2 question ids are the PRE-BUILT module (the
 *     student started before the routed form landed), the section stays
 *     unrouted;
 *   - the stored correct counts are kept; only the scaled scores change.
 *
 *   npx tsx scripts/rescore-sat-attempts.ts             # local DB, dry run
 *   PROD=1 npx tsx scripts/rescore-sat-attempts.ts      # production, dry run
 *   PROD=1 npx tsx scripts/rescore-sat-attempts.ts --apply
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'
import { satSectionScaledRouted, satRouteFor, type SatRoute } from '../src/lib/sat-scoring'
import { buildSatForm, routedModule2 } from '../src/data/sat-practice/test-generator'

const APPLY = process.argv.includes('--apply')

type Rec = Record<string, unknown>
const asRecord = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)
const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null)

interface SectionTally {
  sectionId: string
  correct: number
  total: number
  questionIds: string[]
}

function tallies(answers: unknown): Map<string, SectionTally> {
  const out = new Map<string, SectionTally>()
  const list = typeof answers === 'string' ? (() => { try { return JSON.parse(answers) } catch { return null } })() : answers
  if (!Array.isArray(list)) return out
  for (const raw of list) {
    const s = asRecord(raw)
    const id = typeof s?.sectionId === 'string' ? s.sectionId : ''
    const correct = num(s?.correct)
    const total = num(s?.total)
    if (!id || correct === null || total === null) continue
    const qs = Array.isArray(s?.answers) ? s.answers : []
    out.set(id, {
      sectionId: id,
      correct,
      total,
      questionIds: qs.map((a) => asRecord(a)?.questionId).filter((x): x is string => typeof x === 'string'),
    })
  }
  return out
}

/** The route a section was scored on, or null when Module 2 was unrouted / unknown. */
async function sectionRoute(testNumber: number, m1: SectionTally, m2: SectionTally, m2Index: number): Promise<{ tier: SatRoute | null; note: string }> {
  const tier = satRouteFor(m1.correct, m1.total)
  if (!m2.questionIds.length) return { tier, note: 'no ids' }
  const ids = new Set(m2.questionIds)
  const same = (qs: { id: string }[]) => qs.length === ids.size && qs.every((q) => ids.has(q.id))
  const base = await buildSatForm(testNumber, 'full')
  if (same((await routedModule2(base, m2Index, tier)).questions)) return { tier, note: '' }
  if (same(base.sections[m2Index].questions)) return { tier: null, note: 'unrouted (race)' }
  const other: SatRoute = tier === 'harder' ? 'easier' : 'harder'
  if (same((await routedModule2(base, m2Index, other)).questions)) return { tier: other, note: 'other route' }
  return { tier, note: 'ids unmatched' }
}

async function main() {
  const url = process.env.DATABASE_URL ?? ''
  const host = url.replace(/^[^@]*@/, '').replace(/\/.*$/, '')
  if (!process.env.PROD && !/^(localhost|127\.0\.0\.1)(:|$)/.test(host)) {
    throw new Error(`Refusing to run: DATABASE_URL is not local (${host}) and PROD is not set`)
  }
  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} against ${process.env.PROD ? 'PRODUCTION' : 'local'} (${host})\n`)

  const prisma = new PrismaClient()
  const attempts = await prisma.satTestAttempt.findMany({
    where: { scoringVersion: 1 },
    orderBy: { completedAt: 'asc' },
    select: {
      id: true, userId: true, testNumber: true, completedAt: true, format: true,
      rwScore: true, mathScore: true, totalScore: true,
      rwCorrect: true, rwTotal: true, mathCorrect: true, mathTotal: true, answers: true,
    },
  })

  type Row = { id: string; test: number; date: string; rw: string; math: string; total: string; delta: number; note: string }
  const rows: Row[] = []
  const skipped: { id: string; reason: string }[] = []
  const tierCount: Record<string, number> = {}

  for (const a of attempts) {
    const full = a.format ? a.format === 'full' : a.rwTotal + a.mathTotal === 98
    if (!full) {
      skipped.push({ id: a.id, reason: `mini (${a.rwTotal + a.mathTotal} q) — curve unchanged` })
      continue
    }
    const t = tallies(a.answers)
    const [rw1, rw2, m1, m2] = ['rw-1', 'rw-2', 'math-1', 'math-2'].map((id) => t.get(id))
    if (!rw1 || !rw2 || !m1 || !m2) {
      skipped.push({ id: a.id, reason: 'no per-module tallies in answers' })
      continue
    }
    const rwRoute = await sectionRoute(a.testNumber, rw1, rw2, 1)
    const mathRoute = await sectionRoute(a.testNumber, m1, m2, 3)
    const rwScore = satSectionScaledRouted({ m1Correct: rw1.correct, m1Total: rw1.total, m2Correct: rw2.correct, m2Total: rw2.total, tier: rwRoute.tier })
    const mathScore = satSectionScaledRouted({ m1Correct: m1.correct, m1Total: m1.total, m2Correct: m2.correct, m2Total: m2.total, tier: mathRoute.tier })
    const totalScore = rwScore + mathScore
    tierCount[`R&W ${rwRoute.tier ?? 'unrouted'}`] = (tierCount[`R&W ${rwRoute.tier ?? 'unrouted'}`] ?? 0) + 1
    tierCount[`Math ${mathRoute.tier ?? 'unrouted'}`] = (tierCount[`Math ${mathRoute.tier ?? 'unrouted'}`] ?? 0) + 1
    rows.push({
      id: a.id,
      test: a.testNumber,
      date: a.completedAt.toISOString().slice(0, 10),
      rw: `${rw1.correct + rw2.correct}/${rw1.total + rw2.total} ${a.rwScore}→${rwScore} (${rwRoute.tier ?? '-'})`,
      math: `${m1.correct + m2.correct}/${m1.total + m2.total} ${a.mathScore}→${mathScore} (${mathRoute.tier ?? '-'})`,
      total: `${a.totalScore}→${totalScore}`,
      delta: totalScore - a.totalScore,
      note: [rwRoute.note && `rw: ${rwRoute.note}`, mathRoute.note && `math: ${mathRoute.note}`].filter(Boolean).join('; '),
    })
    if (APPLY) {
      await prisma.satTestAttempt.update({
        where: { id: a.id },
        data: { rwScore, mathScore, totalScore, format: 'full', rwTier: rwRoute.tier, mathTier: mathRoute.tier, scoringVersion: 2 },
      })
    }
  }

  if (rows.length) console.table(rows)
  if (skipped.length) {
    console.log('\nSkipped:')
    for (const s of skipped) console.log(`  ${s.id}  ${s.reason}`)
  }
  const changed = rows.filter((r) => r.delta !== 0)
  const deltas = changed.map((r) => r.delta)
  console.log(`\nSummary: ${attempts.length} v1 attempts, ${rows.length} full tests rescored, ${skipped.length} skipped`)
  console.log(`  total changed on ${changed.length}; ` + (deltas.length
    ? `mean ${(deltas.reduce((x, y) => x + y, 0) / deltas.length).toFixed(1)}, min ${Math.min(...deltas)}, max ${Math.max(...deltas)}`
    : 'no changes'))
  console.log('  routes:', tierCount)
  console.log(APPLY ? '\nWritten.' : '\nDry run — nothing written. Re-run with --apply after sign-off.')
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
