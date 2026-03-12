import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

/**
 * Master seed orchestrator — runs all seed scripts in order.
 *
 * Usage:
 *   npx tsx prisma/seed-all.ts            # Run everything
 *   npx tsx prisma/seed-all.ts --dry-run  # List what would run without executing
 *   npx tsx prisma/seed-all.ts --group 2  # Run only group 2 (Calculus)
 */

const PRISMA_DIR = __dirname

const SEED_GROUPS: { label: string; files: string[] }[] = [
  {
    label: '🏗  Core seed (categories + base topics)',
    files: ['seed.ts'],
  },
  {
    label: '📐 Calculus',
    files: [
      'add-calculus-problems.ts',
      'add-calculus-problems-batch1.ts', 'add-calculus-problems-batch2.ts',
      'add-calculus-problems-batch3.ts', 'add-calculus-problems-batch4.ts',
      'add-calculus-problems-batch5.ts', 'add-calculus-problems-batch6.ts',
      'add-calculus-problems-batch7.ts', 'add-calculus-problems-batch8.ts',
      'add-calculus-problems-batch9.ts', 'add-calculus-problems-batch10.ts',
      'add-calculus-problems-batch11.ts', 'add-calculus-bc-problems.ts',
    ],
  },
  {
    label: '➕ Algebra 1',
    files: [
      'add-algebra1-content.ts', 'add-extended-algebra1-content.ts',
      'add-final-algebra1-topics.ts',
      'add-algebra1-problems-batch1.ts', 'add-algebra1-problems-batch2.ts',
      'add-algebra1-problems-batch3.ts', 'add-algebra1-problems-batch4.ts',
      'add-algebra1-problems-batch5.ts', 'add-algebra1-problems-batch6.ts',
      'add-algebra1-problems-batch7.ts', 'add-algebra1-problems-batch8.ts',
      'add-algebra1-problems-batch9.ts', 'add-algebra1-problems-batch10.ts',
      'add-algebra1-problems-batch11.ts',
    ],
  },
  {
    label: '📊 Algebra 2',
    files: [
      'add-extended-algebra2-topics.ts', 'add-final-algebra2-topics.ts',
      'add-algebra2-problems-batch1.ts', 'add-algebra2-problems-batch2.ts',
      'add-algebra2-problems-batch3.ts', 'add-algebra2-problems-batch4.ts',
      'add-algebra2-problems-batch5.ts', 'add-algebra2-problems-batch6.ts',
      'add-algebra2-problems-batch7.ts',
    ],
  },
  {
    label: '📐 Geometry',
    files: [
      'add-final-geometry-topics.ts',
      'add-geometry-problems-batch1.ts', 'add-geometry-problems-batch2.ts',
      'add-geometry-problems-batch3.ts', 'add-geometry-problems-batch4.ts',
      'add-geometry-problems-batch5.ts', 'add-geometry-problems-batch6.ts',
    ],
  },
  {
    label: '🧮 Pre-Algebra & Middle School',
    files: [
      'seed-prealgebra-initial.ts',
      'add-grade4-problems-flashcards-batch1.ts', 'add-grade4-problems-flashcards-batch2.ts',
      'add-grade4-problems-flashcards-batch3.ts', 'add-grade4-problems-flashcards-batch4.ts',
      'add-grade4-problems-flashcards-batch5.ts', 'add-grade4-problems-flashcards-batch6-final.ts',
      'add-grade5-problems-flashcards-batch1.ts', 'add-grade5-problems-flashcards-batch2.ts',
      'add-grade5-problems-flashcards-batch3.ts', 'add-grade5-problems-flashcards-batch4-final.ts',
      'add-grade6-problems-flashcards-batch1.ts', 'add-grade6-problems-flashcards-batch2.ts',
      'add-grade6-problems-flashcards-batch3-final.ts',
      'add-grade7-problems-flashcards-batch1.ts', 'add-grade7-problems-flashcards-batch2.ts',
      'add-grade7-problems-flashcards-batch3.ts', 'add-grade7-problems-flashcards-batch4-final.ts',
      'add-grade8-problems-batch1.ts', 'add-grade8-problems-batch2.ts',
      'add-grade8-problems-batch3.ts', 'add-grade8-problems-batch4-final.ts',
    ],
  },
  {
    label: '🔬 Science',
    files: [
      'add-chemistry-problems.ts', 'add-activation-energy-study.ts',
      'add-integrated-rate-laws-study.ts',
      'add-biology-problems.ts', 'add-biology-batch1.ts', 'add-biology-batch2.ts',
      'add-biology-batch3.ts', 'add-biology-batch4.ts',
    ],
  },
  {
    label: '📈 Pre-Calculus',
    files: [
      'seed-precalculus-categories.ts',
      'seed-precalc-functions-part1.ts', 'seed-precalc-functions-part2.ts',
      'seed-precalc-polynomial-part1.ts', 'seed-precalc-polynomial-part2.ts',
      'seed-precalc-polynomial-part3.ts', 'seed-precalc-polynomial-part4.ts',
      'seed-precalc-exponential-part1.ts', 'seed-precalc-exponential-part2.ts',
      'seed-precalc-trig-part1.ts', 'seed-precalc-trig-part2.ts',
      'seed-precalc-trig-part3.ts', 'seed-precalc-trig-part4.ts',
      'seed-precalc-conics.ts', 'seed-precalc-systems.ts',
      'seed-precalc-vectors-part1.ts', 'seed-precalc-vectors-part2.ts',
      'seed-sequences-series-part1.ts', 'seed-sequences-series-part2.ts',
      'seed-sequences-series-part3.ts',
      'seed-power-taylor-part1.ts', 'seed-power-taylor-part2.ts',
    ],
  },
  {
    label: '📝 Test Prep (SAT & ACT)',
    files: [
      'seed-sat-math.ts', 'seed-sat-math-advanced.ts', 'seed-sat-additional-math.ts',
      'seed-sat-more-topics.ts', 'seed-sat-final-batch.ts',
      'seed-sat-reading-writing.ts', 'seed-sat-reading-writing-advanced.ts',
      'seed-sat-reading-writing-deeper.ts',
      'add-act-batch1.ts', 'add-act-batch2.ts', 'add-act-batch3.ts',
      'add-act-batch4.ts', 'add-act-batch5.ts',
    ],
  },
  {
    label: '📊 AP Statistics',
    files: ['add-ap-statistics.ts', 'add-ap-stats-content.ts'],
  },
  {
    label: '🔧 Updates & Splits',
    files: [
      'update-bc-to-free.ts', 'update-integrated-rate-laws.ts',
      'update-unit-circle-with-table.ts', 'split-negative-coterminal-angles.ts',
      'split-parametric-vectors-polar.ts', 'split-unit-circle-topic.ts',
      'add-memory-steps-2-3-4.ts',
    ],
  },
]

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const groupArg = process.argv.find(a => a.startsWith('--group'))
  const groupIdx = groupArg ? parseInt(process.argv[process.argv.indexOf(groupArg) + 1]) - 1 : null
  const startTime = Date.now()

  console.log('\n╔════════════════════════════════════════════════╗')
  console.log('║       Study Mondo — Master Seed Runner         ║')
  console.log('╚════════════════════════════════════════════════╝\n')

  if (dryRun) console.log('  🏷  DRY RUN — listing files without executing\n')

  const groups = groupIdx !== null ? [SEED_GROUPS[groupIdx]] : SEED_GROUPS
  let total = 0, success = 0, skipped = 0, failed = 0

  for (const group of groups) {
    if (!group) continue
    console.log(`\n${'─'.repeat(56)}`)
    console.log(`  ${group.label}`)
    console.log('─'.repeat(56))

    for (const file of group.files) {
      const fullPath = path.join(PRISMA_DIR, file)
      total++

      if (!fs.existsSync(fullPath)) {
        console.log(`  ⏭  ${file} (not found — skipped)`)
        skipped++
        continue
      }

      if (dryRun) { console.log(`  📄 ${file}`); continue }

      try {
        console.log(`  ▶ Running ${file}...`)
        execSync(`npx tsx ${fullPath}`, {
          cwd: path.resolve(PRISMA_DIR, '..'),
          stdio: 'inherit',
          timeout: 120_000,
        })
        console.log(`  ✅ ${file}`)
        success++
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        console.error(`  ❌ ${file} — ${msg}`)
        failed++
      }
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log(`\n${'═'.repeat(56)}`)
  console.log(`  Done in ${elapsed}s`)
  console.log(`  Total: ${total}  |  ✅ ${success}  |  ⏭ ${skipped}  |  ❌ ${failed}`)
  console.log('═'.repeat(56) + '\n')

  if (failed > 0) process.exit(1)
}

main().catch((err) => { console.error('Fatal:', err); process.exit(1) })
