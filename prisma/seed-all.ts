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
  // ── Group 1: Core ──
  {
    label: '🏗  Core seed (categories + base topics)',
    files: ['seed.ts'],
  },
  // ── Group 2: Courses ──
  {
    label: '🎓 Courses (course records)',
    files: [
      'seed-courses.ts',
      'create-sat-act-courses.ts',
      'create-prealgebra-course.ts',
      'create-grade4-grade5-courses.ts',
      'create-grade6-course.ts',
      'create-grade7-grade8-courses.ts',
    ],
  },
  // ── Group 3: Calculus AB & BC ──
  {
    label: '📐 Calculus (AB & BC)',
    files: [
      'seed-ap-calculus-ab.ts', 'seed-ap-calculus-bc.ts',
      'seed-limits-micro.ts', 'seed-limits-micro-part2.ts', 'seed-limits-micro-part3.ts',
      'seed-limits-expanded.ts',
      'seed-derivatives-part1.ts', 'seed-derivatives-part2.ts',
      'seed-derivatives-part3.ts', 'seed-derivatives-part4.ts', 'seed-derivatives-part5.ts',
      'seed-integration-part1.ts', 'seed-integration-part2.ts',
      'seed-integration-part3.ts', 'seed-integration-part4.ts', 'seed-integration-part5.ts',
      'seed-advanced-integration-part1.ts',
      'seed-applications-part1.ts', 'seed-applications-part2.ts',
      'seed-applications-part3.ts', 'seed-applications-part4.ts', 'seed-applications-part5.ts',
      'seed-parametric-polar-part1.ts', 'seed-parametric-polar-part2.ts',
      'add-calculus-problems.ts',
      'add-calculus-problems-batch1.ts', 'add-calculus-problems-batch2.ts',
      'add-calculus-problems-batch3.ts', 'add-calculus-problems-batch4.ts',
      'add-calculus-problems-batch5.ts', 'add-calculus-problems-batch6.ts',
      'add-calculus-problems-batch7.ts', 'add-calculus-problems-batch8.ts',
      'add-calculus-problems-batch9.ts', 'add-calculus-problems-batch10.ts',
      'add-calculus-problems-batch11.ts', 'add-calculus-bc-problems.ts',
    ],
  },
  // ── Group 4: Pre-Calculus ──
  {
    label: '📈 Pre-Calculus',
    files: [
      'seed-precalculus-categories.ts', 'seed-ap-precalculus.ts',
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
      'fill-ap-precalculus.ts',
      'add-precalculus-problems.ts',
      'add-precalc-problems-batch3.ts', 'add-precalc-problems-batch4.ts',
      'add-precalc-problems-batch5.ts', 'add-precalc-problems-batch6.ts',
      'add-precalc-problems-batch7.ts',
      'add-trig-problems-batch1.ts', 'add-trig-problems-batch2.ts',
    ],
  },
  // ── Group 5: Algebra 1 ──
  {
    label: '➕ Algebra 1',
    files: [
      'seed-algebra1-quick.ts',
      'add-algebra1-content.ts', 'add-extended-algebra1-content.ts',
      'add-final-algebra1-topics.ts', 'add-more-algebra1-topics.ts',
      'expand-algebra1-batch1.ts', 'expand-algebra1-batch2.ts',
      'expand-algebra1-batch3.ts', 'expand-algebra1-batch4.ts',
      'expand-algebra1-ccss.ts',
      'fill-algebra1-batch1.ts', 'fill-algebra1-batch2.ts',
      'fill-algebra1-batch3.ts', 'fill-algebra1-batch4.ts',
      'fill-algebra1-batch5.ts', 'fill-algebra1-batch6.ts',
      'fill-algebra1-batch7.ts', 'fill-algebra1-batch8.ts',
      'fill-algebra1-batch9.ts', 'fill-algebra1-batch10.ts',
      'fill-algebra1-batch11.ts',
      'complete-algebra1-final.ts',
      'add-algebra1-problems-batch1.ts', 'add-algebra1-problems-batch2.ts',
      'add-algebra1-problems-batch3.ts', 'add-algebra1-problems-batch4.ts',
      'add-algebra1-problems-batch5.ts', 'add-algebra1-problems-batch6.ts',
      'add-algebra1-problems-batch7.ts', 'add-algebra1-problems-batch8.ts',
      'add-algebra1-problems-batch9.ts', 'add-algebra1-problems-batch10.ts',
      'add-algebra1-problems-batch11.ts',
    ],
  },
  // ── Group 6: Algebra 2 ──
  {
    label: '📊 Algebra 2',
    files: [
      'seed-algebra2-initial.ts',
      'add-extended-algebra2-topics.ts', 'add-final-algebra2-topics.ts',
      'add-more-algebra2-content.ts',
      'expand-algebra2-ccss.ts',
      'add-algebra2-problems-batch1.ts', 'add-algebra2-problems-batch2.ts',
      'add-algebra2-problems-batch3.ts', 'add-algebra2-problems-batch4.ts',
      'add-algebra2-problems-batch5.ts', 'add-algebra2-problems-batch6.ts',
      'add-algebra2-problems-batch7.ts',
    ],
  },
  // ── Group 7: Geometry ──
  {
    label: '📐 Geometry',
    files: [
      'seed-geometry-initial.ts',
      'add-final-geometry-topics.ts', 'add-more-geometry-topics.ts',
      'expand-geometry-ccss.ts',
      'add-geometry-problems-batch1.ts', 'add-geometry-problems-batch2.ts',
      'add-geometry-problems-batch3.ts', 'add-geometry-problems-batch4.ts',
      'add-geometry-problems-batch5.ts', 'add-geometry-problems-batch6.ts',
    ],
  },
  // ── Group 8: Pre-Algebra ──
  {
    label: '🧮 Pre-Algebra',
    files: [
      'seed-prealgebra-initial.ts',
      'add-more-prealgebra-topics.ts',
      'expand-prealgebra.ts', 'expand-pre-algebra.ts',
      'expand-prealgebra-batch1.ts', 'expand-prealgebra-batch2.ts',
      'expand-prealgebra-batch3.ts',
      'fill-prealgebra-batch1.ts', 'fill-prealgebra-batch2.ts',
      'fill-prealgebra-batch3.ts', 'fill-prealgebra-batch4.ts',
      'fill-prealgebra-batch5.ts', 'fill-prealgebra-batch6.ts',
      'fill-prealgebra-batch7.ts',
      'add-prealgebra-problems-batch1.ts', 'add-prealgebra-problems-batch2.ts',
      'add-prealgebra-problems-batch3.ts', 'add-prealgebra-problems-batch4.ts',
      'add-prealgebra-problems-batch5.ts', 'add-prealgebra-problems-batch6.ts',
      'add-prealgebra-problems-batch7.ts',
    ],
  },
  // ── Group 9: Grades 4–8 Math ──
  {
    label: '🔢 Grades 4–8 Math',
    files: [
      'seed-grade4-math.ts', 'seed-grade5-math.ts',
      'expand-grade4.ts', 'expand-grade4-math.ts',
      'expand-grade5.ts', 'expand-grade5-math.ts',
      'fill-grade4-batch2.ts', 'fill-grade4-batch3.ts', 'fill-grade4-final.ts',
      'fill-grade4-5-thin-topics.ts',
      'fill-grade5-batch1.ts', 'fill-grade5-batch2.ts',
      'fill-grade5-batch3.ts', 'fill-grade5-batch4-final.ts',
      'add-grade4-problems-flashcards-batch1.ts', 'add-grade4-problems-flashcards-batch2.ts',
      'add-grade4-problems-flashcards-batch3.ts', 'add-grade4-problems-flashcards-batch4.ts',
      'add-grade4-problems-flashcards-batch5.ts', 'add-grade4-problems-flashcards-batch6-final.ts',
      'add-grade5-problems-flashcards-batch1.ts', 'add-grade5-problems-flashcards-batch2.ts',
      'add-grade5-problems-flashcards-batch3.ts', 'add-grade5-problems-flashcards-batch4-final.ts',
      'seed-grade6-initial.ts', 'add-more-grade6-topics.ts',
      'expand-grade6.ts', 'seed-negative-numbers-grade6.ts',
      'fill-grade6-batch1.ts', 'fill-grade6-batch2.ts', 'fill-grade6-batch3-final.ts',
      'add-grade6-problems-flashcards-batch1.ts', 'add-grade6-problems-flashcards-batch2.ts',
      'add-grade6-problems-flashcards-batch3-final.ts',
      'seed-grade7-math.ts', 'seed-grade8-math.ts',
      'expand-grade7.ts', 'expand-grade8.ts',
      'expand-grades6-8-math.ts',
      'fill-grade7-batch1.ts', 'fill-grade7-batch2.ts',
      'fill-grade7-batch3.ts', 'fill-grade7-batch4-final.ts',
      'fill-grade8-batch1.ts', 'fill-grade8-batch2.ts',
      'fill-grade8-batch3.ts', 'fill-grade8-batch4-final.ts',
      'add-grade7-problems-flashcards-batch1.ts', 'add-grade7-problems-flashcards-batch2.ts',
      'add-grade7-problems-flashcards-batch3.ts', 'add-grade7-problems-flashcards-batch4-final.ts',
      'add-grade8-problems-batch1.ts', 'add-grade8-problems-batch2.ts',
      'add-grade8-problems-batch3.ts', 'add-grade8-problems-batch4-final.ts',
    ],
  },
  // ── Group 10: AP Chemistry ──
  {
    label: '🧪 AP Chemistry',
    files: [
      'seed-chemistry-categories.ts',
      'seed-chem-atomic-part1.ts', 'seed-chem-atomic-part2.ts',
      'seed-chem-atomic-part3.ts', 'seed-chem-atomic-part4.ts',
      'seed-chem-bonding-part1.ts', 'seed-chem-bonding-part2.ts',
      'seed-chem-bonding-part3.ts', 'seed-chem-bonding-part4.ts',
      'seed-chem-reactions-part1.ts', 'seed-chem-reactions-part2.ts',
      'seed-chem-reactions-part3.ts', 'seed-chem-reactions-part4.ts',
      'seed-chem-kinetics-part1.ts', 'seed-chem-kinetics-part2.ts',
      'seed-chem-kinetics-part3.ts', 'seed-chem-kinetics-part4.ts',
      'seed-chem-equilibrium-part1.ts', 'seed-chem-equilibrium-part2.ts',
      'seed-chem-equilibrium-part3.ts', 'seed-chem-equilibrium-part4.ts',
      'seed-chem-acids-part1.ts', 'seed-chem-acids-part2.ts',
      'seed-chem-acids-part3.ts', 'seed-chem-acids-part4.ts',
      'seed-chem-thermo-part1.ts', 'seed-chem-thermo-part2.ts',
      'seed-chem-thermo-part3.ts',
      'seed-chem-imf-part1.ts', 'seed-chem-imf-part2.ts',
      'seed-chem-imf-part3.ts', 'seed-chem-imf-part4.ts', 'seed-chem-imf-part5.ts',
      'seed-chem-electro-part1.ts', 'seed-chem-electro-part2.ts', 'seed-chem-electro-part3.ts',
      'fill-ap-chemistry.ts', 'fill-chemistry-missing.ts',
      'complete-chemistry.ts',
      'add-chemistry-problems.ts', 'add-activation-energy-study.ts',
      'add-integrated-rate-laws-study.ts', 'add-reaction-mechanisms-study.ts',
    ],
  },
  // ── Group 11: AP Biology ──
  {
    label: '🧬 AP Biology',
    files: [
      'seed-biology-chemistry-life.ts',
      'seed-biology-cell-structure.ts',
      'seed-biology-cell-communication.ts',
      'seed-biology-energetics.ts',
      'seed-biology-heredity.ts',
      'seed-biology-gene-expression.ts',
      'seed-biology-evolution-ecology.ts',
      'complete-biology-final.ts',
      'add-biology-problems.ts', 'add-biology-batch1.ts', 'add-biology-batch2.ts',
      'add-biology-batch3.ts', 'add-biology-batch4.ts',
    ],
  },
  // ── Group 12: AP Psychology ──
  {
    label: '🧠 AP Psychology',
    files: ['seed-ap-psychology.ts'],
  },
  // ── Group 13: AP Statistics ──
  {
    label: '📊 AP Statistics',
    files: [
      'add-ap-statistics.ts', 'add-ap-stats-content.ts',
      'fill-ap-stats-batch1.ts', 'fill-ap-stats-batch2.ts',
      'fill-stats-exploring-data.ts', 'fill-stats-exploring-data-part2.ts',
      'fill-stats-exploring-data-part3.ts',
      'fill-stats-sampling-experimentation.ts',
      'fill-stats-probability.ts',
      'fill-stats-confidence-intervals.ts',
      'fill-stats-hypothesis-testing.ts',
      'fill-stats-regression.ts',
      'add-stats-problems-batch1.ts', 'add-stats-problems-batch2.ts',
      'add-stats-problems-batch3.ts', 'add-stats-problems-batch4.ts',
      'add-stats-problems-batch5.ts', 'add-stats-problems-batch6.ts',
      'add-stats-problems-batch7.ts', 'add-stats-problems-batch8.ts',
      'add-stats-problems-batch9.ts',
    ],
  },
  // ── Group 14: Organic Chemistry ──
  {
    label: '🧫 Organic Chemistry',
    files: ['seed-organic-chemistry.ts'],
  },
  // ── Group 15: SAT Prep ──
  {
    label: '📝 SAT Prep',
    files: [
      'seed-sat-math.ts', 'seed-sat-math-advanced.ts', 'seed-sat-additional-math.ts',
      'seed-sat-more-topics.ts', 'seed-sat-final-batch.ts',
      'seed-sat-reading-writing.ts', 'seed-sat-reading-writing-advanced.ts',
      'seed-sat-reading-writing-deeper.ts',
      'create-missing-sat-topics.ts',
      'expand-sat-prep.ts',
      'expand-sat-heart-algebra-thorough.ts', 'expand-sat-advanced-math-thorough.ts',
      'expand-sat-data-analysis-thorough.ts', 'expand-sat-additional-topics-thorough.ts',
      'expand-sat-reading-thorough.ts', 'expand-sat-writing-thorough.ts',
      'expand-sat-strategy-thorough.ts',
      'fill-sat-placeholders.ts',
      'fill-sat-content-batch1.ts', 'fill-sat-content-batch2.ts', 'fill-sat-content-batch3.ts',
      'complete-sat-final.ts',
      'add-sat-batch1.ts', 'add-sat-batch2.ts', 'add-sat-batch3.ts',
    ],
  },
  // ── Group 16: ACT Prep ──
  {
    label: '📋 ACT Prep',
    files: [
      'seed-act-prep.ts',
      'seed-act-math-advanced.ts', 'seed-act-english-advanced.ts',
      'seed-act-reading-advanced.ts', 'seed-act-reading-science.ts',
      'seed-act-science-conflicting.ts',
      'expand-act-prep.ts',
      'fill-act-content-batch1.ts', 'fill-act-content-batch2.ts',
      'fill-act-content-batch3.ts', 'fill-act-content-batch4-final.ts',
      'fill-act-content-batch5-final.ts', 'fill-act-content-batch6-final.ts',
      'complete-act-final.ts', 'complete-act-absolutely-final.ts',
      'add-act-batch1.ts', 'add-act-batch2.ts', 'add-act-batch3.ts',
      'add-act-batch4.ts', 'add-act-batch5.ts',
    ],
  },
  // ── Group 17: AP Physics 1 ──
  {
    label: '⚛️  AP Physics 1',
    files: [
      'seed-physics1-kinematics-part1.ts', 'seed-physics1-kinematics-part2.ts',
      'seed-physics1-dynamics-part1.ts', 'seed-physics1-dynamics-part2.ts',
      'seed-physics1-energy-part1.ts', 'seed-physics1-energy-part2.ts',
      'seed-physics1-momentum-part1.ts', 'seed-physics1-momentum-part2.ts',
      'seed-physics1-circular-part1.ts', 'seed-physics1-circular-part2.ts',
      'seed-physics1-rotation-part1.ts', 'seed-physics1-rotation-part2.ts',
      'seed-physics1-shm-part1.ts', 'seed-physics1-shm-part2.ts',
      'complete-physics1.ts',
      'add-physics1-problems.ts',
    ],
  },
  // ── Group 18: AP Physics 2 ──
  {
    label: '⚡ AP Physics 2',
    files: [
      'seed-physics2-fluids-part1.ts', 'seed-physics2-fluids-part2.ts',
      'seed-physics2-thermo-part1.ts', 'seed-physics2-thermo-part2.ts',
      'seed-physics2-thermo-part3.ts',
      'seed-physics2-electro-part1.ts', 'seed-physics2-electro-part2.ts',
      'seed-physics2-circuits-part1.ts', 'seed-physics2-circuits-part2.ts',
      'seed-physics2-magnetism-part1.ts', 'seed-physics2-magnetism-part2.ts',
      'seed-physics2-optics-part1.ts', 'seed-physics2-optics-part2.ts',
      'seed-physics2-modern.ts',
      'complete-physics2.ts',
      'add-physics2-problems.ts',
    ],
  },
  // ── Group 19: AP Physics C ──
  {
    label: '🔭 AP Physics C',
    files: [
      'seed-physics-c-mech-kinematics-dynamics.ts',
      'seed-physics-c-mech-energy-momentum.ts',
      'seed-physics-c-mech-rotation-gravity.ts',
      'complete-physics-c-mechanics.ts',
      'add-physics-c-mech-problems.ts',
      'seed-physics-c-em-electrostatics.ts',
      'seed-physics-c-em-circuits-magnetism.ts',
      'seed-physics-c-em-induction-maxwell.ts',
      'complete-physics-c-em.ts',
      'add-physics-c-em-problems.ts',
    ],
  },
  // ── Group 20: MCAT Prep ──
  {
    label: '🏥 MCAT Prep',
    files: [
      'seed-mcat-prep.ts',
      'add-mcat-subtopics.ts',
    ],
  },
  // ── Group 21: AP Social Sciences ──
  {
    label: '🌍 AP Social Sciences',
    files: [
      'seed-ap-human-geography.ts',
      'seed-ap-us-government.ts',
      'seed-ap-world-history.ts',
      'seed-ap-us-history.ts',
      'seed-ap-macroeconomics.ts',
      'seed-ap-microeconomics.ts',
      'seed-ap-african-american-studies.ts',
    ],
  },
  // ── Group 22: AP English ──
  {
    label: '📖 AP English',
    files: [
      'seed-ap-english-literature.ts',
      'seed-ap-english-language.ts',
    ],
  },
  // ── Group 23: AP Environmental Science ──
  {
    label: '🌿 AP Environmental Science',
    files: ['seed-ap-environmental-science.ts'],
  },
  // ── Group 24: AP Computer Science ──
  {
    label: '💻 AP Computer Science',
    files: [
      'seed-ap-computer-science-a.ts',
      'seed-ap-computer-science-principles.ts',
    ],
  },
  // ── Group 25: Flashcard Decks ──
  {
    label: '🃏 Flashcard Decks',
    files: [
      'add-flashcards-ap-calc-ab-formulas.ts', 'add-flashcards-ap-calc-bc-series.ts',
      'add-flashcards-precalc-identities.ts',
      'add-flashcards-algebra1-concepts.ts',
      'add-flashcards-geometry-theorems.ts',
      'add-flashcards-sat-math.ts', 'add-flashcards-sat-grammar.ts', 'add-flashcards-sat-vocab.ts',
      'add-flashcards-act-science-vocab.ts',
      'add-flashcards-ap-chem-formulas.ts', 'add-flashcards-ap-chem-reactions.ts',
      'add-flashcards-ap-bio-terms.ts', 'add-flashcards-ap-bio-processes.ts',
      'add-flashcards-ap-psych-vocab.ts', 'add-flashcards-ap-psych-researchers.ts',
      'add-flashcards-ochem-functional-groups.ts', 'add-flashcards-ochem-reactions.ts',
      'add-flashcards-mcat-amino-acids.ts', 'add-flashcards-mcat-biochem.ts',
      'add-flashcards-mcat-physics.ts',
    ],
  },
  // ── Group 26: Achievements & Extras ──
  {
    label: '🏆 Achievements & Extras',
    files: [
      'seed-achievements.ts',
      'add-memory-trick.ts', 'add-unit-circle-memory-trick.ts',
      'add-multiplication-animation.ts', 'add-two-digit-multiplication-animation.ts',
      'add-memory-steps-2-3-4.ts',
      'final-2-topics.ts', 'final-expansion-to-500.ts',
    ],
  },
  // ── Group 27: Updates & Splits ──
  {
    label: '🔧 Updates & Splits',
    files: [
      'update-bc-to-free.ts', 'update-integrated-rate-laws.ts',
      'update-unit-circle-with-table.ts', 'split-negative-coterminal-angles.ts',
      'split-parametric-vectors-polar.ts', 'split-unit-circle-topic.ts',
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
        execSync(`npx tsx "${fullPath}"`, {
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
