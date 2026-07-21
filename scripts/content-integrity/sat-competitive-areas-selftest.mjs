/**
 * Self-test for the SAT competitive area/domain breakdown.
 *
 * Verifies, headlessly:
 *   1. Each math area and R&W domain has 30 questions (10 easy / 10 medium /
 *      10 hard) with valid, distinct options and an in-range correctAnswer.
 *   2. The area/domain-filtered getters return ONLY questions from that
 *      area/domain (no leakage), and the mixed getters span everything.
 *   3. The full competitive dispatch (generateMatchQuestions) returns a full
 *      10- and 20-question match for every area/domain slug, at every tier,
 *      via the real mcqBanks + pickTieredQuestions path.
 *
 * Run: node scripts/content-integrity/sat-competitive-areas-selftest.mjs
 */
const { getSatMathQuestions } = await import('../../src/data/competitive-questions/sat-math-bank.ts')
const { getSatRwQuestions } = await import('../../src/data/competitive-questions/sat-rw-bank.ts')
const { generateMatchQuestions, pickTieredQuestions } = await import('../../src/lib/competitive-utils.ts')

let failures = 0
const fail = (m) => { failures++; console.error('  ✗ ' + m) }

const MATH_AREAS = ['algebra', 'advanced', 'problem-solving', 'geometry']
const RW_DOMAINS = ['information-ideas', 'craft-structure', 'expression', 'conventions']
const TIERS = ['easy', 'medium', 'hard']

function numVal(opt) {
  const s = String(opt).replace(/\$/g, '').trim()
  return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : null
}

function auditPool(items, tagKey, tagVal, label) {
  if (items.length !== 30) fail(`${label}: expected 30, got ${items.length}`)
  const diff = { easy: 0, medium: 0, hard: 0 }
  for (const [i, q] of items.entries()) {
    const at = `${label}[${q.id ?? i}]`
    if (q[tagKey] !== tagVal) fail(`${at}: ${tagKey}=${q[tagKey]} !== ${tagVal}`)
    if (!Array.isArray(q.options) || q.options.length !== 4) fail(`${at}: options !== 4`)
    else {
      if (new Set(q.options.map(o => String(o).trim())).size !== 4) fail(`${at}: duplicate options`)
      // numeric-equivalence check (e.g. "5" vs "5.0")
      const nums = q.options.map(numVal).filter(v => v !== null)
      if (new Set(nums).size !== nums.length) fail(`${at}: numerically-equivalent options`)
    }
    if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) fail(`${at}: correctAnswer out of range`)
    if (TIERS.includes(q.difficulty)) diff[q.difficulty]++
    else fail(`${at}: bad difficulty ${q.difficulty}`)
  }
  if (diff.easy !== 10 || diff.medium !== 10 || diff.hard !== 10) fail(`${label}: split ${JSON.stringify(diff)} != 10/10/10`)
}

console.log('1. Pool integrity + difficulty split:')
for (const a of MATH_AREAS) auditPool(getSatMathQuestions(1000, a), 'area', a, `math/${a}`)
for (const d of RW_DOMAINS) auditPool(getSatRwQuestions(1000, d), 'domain', d, `rw/${d}`)

console.log('2. Filter isolation (no cross-area/domain leakage):')
for (const a of MATH_AREAS) {
  const pool = getSatMathQuestions(1000, a)
  if (!pool.every(q => q.area === a)) fail(`math/${a}: leaked other areas`)
}
for (const d of RW_DOMAINS) {
  const pool = getSatRwQuestions(1000, d)
  if (!pool.every(q => q.domain === d)) fail(`rw/${d}: leaked other domains`)
}
// Mixed getters span everything
if (new Set(getSatMathQuestions(1000).map(q => q.area)).size !== 4) fail('math mixed: does not span all 4 areas')
if (new Set(getSatRwQuestions(1000).map(q => q.domain)).size !== 4) fail('rw mixed: does not span all 4 domains')

console.log('3. pickTieredQuestions fills full 10Q and 20Q matches per area/domain/tier:')
for (const a of MATH_AREAS) {
  const pool = getSatMathQuestions(1000, a)
  for (const t of TIERS) {
    if (pickTieredQuestions(pool, 10, t).length !== 10) fail(`math/${a}/${t}: 10Q short`)
    if (pickTieredQuestions(pool, 20, t).length !== 20) fail(`math/${a}/${t}: 20Q short`)
  }
}
for (const d of RW_DOMAINS) {
  const pool = getSatRwQuestions(1000, d)
  for (const t of TIERS) {
    if (pickTieredQuestions(pool, 10, t).length !== 10) fail(`rw/${d}/${t}: 10Q short`)
    if (pickTieredQuestions(pool, 20, t).length !== 20) fail(`rw/${d}/${t}: 20Q short`)
  }
}

console.log('4. End-to-end dispatch (generateMatchQuestions) for every slug + tier:')
const SLUGS = [
  'sat-math', 'sat-math-algebra', 'sat-math-advanced', 'sat-math-problem-solving', 'sat-math-geometry',
  'sat-rw', 'sat-rw-information-ideas', 'sat-rw-craft-structure', 'sat-rw-expression', 'sat-rw-conventions',
]
for (const slug of SLUGS) {
  for (const t of TIERS) {
    const q10 = await generateMatchQuestions(10, slug, undefined, t)
    if (!Array.isArray(q10) || q10.length !== 10) fail(`${slug}/${t}: expected 10 match Qs, got ${q10?.length}`)
    if (q10.some(q => !q.question || !Array.isArray(q.options) || q.options.length < 2)) fail(`${slug}/${t}: malformed match question`)
  }
  const q20 = await generateMatchQuestions(20, slug, undefined, 'hard')
  if (q20.length !== 20) fail(`${slug}/hard: expected 20 match Qs, got ${q20.length}`)
}

if (failures === 0) {
  console.log('\n✅ ALL CLEAN — 8 area/domain pools (240 Qs), filters isolated, tier-mix full, dispatch wired.')
  process.exit(0)
} else {
  console.error(`\n❌ ${failures} check(s) failed.`)
  process.exit(1)
}
