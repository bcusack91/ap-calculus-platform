/**
 * Headless self-test for SPR/grid-in support in the SAT full-test runner.
 *
 * Verifies the two pieces that don't need a browser:
 *   1. The pure grading layer (parseGridInInput + gradeGridIn) accepts the
 *      right numeric/fraction/decimal forms and rejects the rest.
 *   2. The generator invariants: each Math module ends with the expected number
 *      of grid-in items (empty options, correctIndex -1, a gridIn key that
 *      grades its own correctAnswer as correct); every MCQ item still has
 *      options and an in-range correctIndex.
 *
 * Run: node scripts/content-integrity/grid-in-fulltest-selftest.mjs
 * (uses the TS sources via tsx)
 */
// Dynamic import: tsx's ESM loader doesn't expose TS named exports to Node's
// static linker reliably, but the namespace object from await import() is correct.
const { parseGridInInput, gradeGridIn } = await import('../../src/data/sat-grid-in.ts')
const { generateFullTest, generateMiniTest } = await import('../../src/data/sat-practice/test-generator.ts')

let failures = 0
function check(name, cond) {
  if (!cond) { failures++; console.error(`  ✗ ${name}`) }
}

/* ---- 1. Parsing ---- */
console.log('parseGridInInput:')
check('integer', parseGridInInput('12') === 12)
check('decimal', parseGridInInput('3.5') === 3.5)
check('negative', parseGridInInput('-4') === -4)
check('fraction 3/4', Math.abs(parseGridInInput('3/4') - 0.75) < 1e-9)
check('fraction spaces', Math.abs(parseGridInInput(' 3 / 4 ') - 0.75) < 1e-9)
check('leading dot .5', parseGridInInput('.5') === 0.5)
check('percent tolerated', parseGridInInput('50%') === 50)
check('surrounding spaces', parseGridInInput('  7  ') === 7)
check('empty -> null', parseGridInInput('') === null)
check('whitespace -> null', parseGridInInput('   ') === null)
check('garbage -> null', parseGridInInput('abc') === null)
check('div by zero -> null', parseGridInInput('3/0') === null)
check('trailing junk -> null', parseGridInInput('12x') === null)
check('double slash -> null', parseGridInInput('1/2/3') === null)

/* ---- 2. Grading ---- */
console.log('gradeGridIn:')
const exact = { correctAnswer: 12, acceptableAnswers: [12], tolerance: 0 }
check('exact correct', gradeGridIn(exact, '12') === true)
check('exact wrong', gradeGridIn(exact, '13') === false)
check('exact blank', gradeGridIn(exact, '') === false)
const tol = { correctAnswer: 3.33, acceptableAnswers: [3.33], tolerance: 0.1 }
check('within tolerance', gradeGridIn(tol, '3.3') === true)
check('outside tolerance', gradeGridIn(tol, '3.1') === false)
const frac = { correctAnswer: 0.75, acceptableAnswers: [0.75], tolerance: 0.01 }
check('fraction equals decimal', gradeGridIn(frac, '3/4') === true)
const multi = { correctAnswer: 0.5, acceptableAnswers: [0.5, 1 / 2], tolerance: 0 }
check('acceptable alt form', gradeGridIn(multi, '1/2') === true)

/* ---- 3. Generation invariants ---- */
console.log('generation invariants:')
const EXPECTED_GRID_IN = 6
const EXPECTED_MODULE_TOTAL = 22

function auditTest(test, label) {
  const mathModules = test.sections.filter(s => s.section === 'math')
  check(`${label}: has math modules`, mathModules.length > 0)
  for (const m of mathModules) {
    const gridIns = m.questions.filter(q => q.gridIn)
    const mcqs = m.questions.filter(q => !q.gridIn)
    check(`${label}/${m.id}: total ${m.questions.length}==${EXPECTED_MODULE_TOTAL}`, m.questions.length === EXPECTED_MODULE_TOTAL)
    check(`${label}/${m.id}: ${gridIns.length} grid-ins==${EXPECTED_GRID_IN}`, gridIns.length === EXPECTED_GRID_IN)
    check(`${label}/${m.id}: questionCount matches`, m.questionCount === EXPECTED_MODULE_TOTAL)

    // Grid-ins appear at the END of the module (digital-SAT SPR placement)
    const firstGridInIdx = m.questions.findIndex(q => q.gridIn)
    const lastMcqIdx = m.questions.map(q => !!q.gridIn).lastIndexOf(false)
    check(`${label}/${m.id}: grid-ins are last`, firstGridInIdx > lastMcqIdx)

    for (const q of gridIns) {
      check(`${label}/${m.id}: grid-in empty options`, Array.isArray(q.options) && q.options.length === 0)
      check(`${label}/${m.id}: grid-in correctIndex -1`, q.correctIndex === -1)
      check(`${label}/${m.id}: grid-in key present`, q.gridIn && typeof q.gridIn.correctAnswer === 'number')
      // The runner grades the typed value; the correctAnswer itself must grade true.
      check(`${label}/${m.id}: self-grades correct`, gradeGridIn(q.gridIn, String(q.gridIn.correctAnswer)) === true)
      // A clearly-wrong value must grade false.
      check(`${label}/${m.id}: rejects wrong`, gradeGridIn(q.gridIn, String(q.gridIn.correctAnswer + 1000)) === false)
    }
    for (const q of mcqs) {
      check(`${label}/${m.id}: mcq has options`, Array.isArray(q.options) && q.options.length >= 2)
      check(`${label}/${m.id}: mcq correctIndex in range`, q.correctIndex >= 0 && q.correctIndex < q.options.length)
    }
  }
}

auditTest(await generateFullTest(1), 'full')
auditTest(await generateMiniTest(1), 'mini')

if (failures === 0) {
  console.log('\n✅ ALL CLEAN — grid-in grading + full-test generation invariants hold.')
  process.exit(0)
} else {
  console.error(`\n❌ ${failures} check(s) failed.`)
  process.exit(1)
}
