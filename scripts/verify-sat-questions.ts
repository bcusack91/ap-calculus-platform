/**
 * Validates the SAT competitive bank the same way verify-mcat-questions.ts does:
 *   - every authored question's skillSlug exists in SAT_SECTIONS
 *   - every College Board `skill` tag in sat-math-bank / sat-rw-bank maps to a
 *     skill in the hierarchy (a renamed tag would silently orphan questions)
 *   - option counts, correctAnswer range, duplicate stems
 *   - all math renders under KaTeX
 *   - every skill has >= MATCH_SIZE questions (a full match)
 *
 *   npx tsx scripts/verify-sat-questions.ts
 */
import katex from 'katex'
import { SAT_SECTIONS, SAT_SKILLS, questionsForSkill } from '../src/data/competitive-questions/sat-bank'
import { getSatMathQuestions } from '../src/data/competitive-questions/sat-math-bank'
import { getSatRwQuestions } from '../src/data/competitive-questions/sat-rw-bank'
import { satMathAlgebraQuestions } from '../src/data/competitive-questions/sat-questions-math-algebra'
import { satMathAlgebra2Questions } from '../src/data/competitive-questions/sat-questions-math-algebra-2'
import { satMathAdvancedQuestions } from '../src/data/competitive-questions/sat-questions-math-advanced'
import { satMathAdvanced2Questions } from '../src/data/competitive-questions/sat-questions-math-advanced-2'
import { satMathProblemSolvingQuestions } from '../src/data/competitive-questions/sat-questions-math-problem-solving'
import { satMathGeometryQuestions } from '../src/data/competitive-questions/sat-questions-math-geometry'
import { satRwQuestions } from '../src/data/competitive-questions/sat-questions-rw'

const MATCH_SIZE = 40 // target depth per skill

const problems: string[] = []
let mathSegments = 0

/**
 * Compile every $…$ span so a malformed expression fails here, not in a match.
 *
 * Splits on UNESCAPED `$` only: currency is written `$\$20$` (a literal dollar
 * sign inside math mode, matching the convention in sat-math-bank), so a naive
 * `text.split('$')` would treat the escaped `\$` as a delimiter and report
 * spurious imbalance on every price in the bank.
 */
function checkMath(text: string, where: string) {
  const parts: string[] = []
  let cur = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\\' && i + 1 < text.length) { cur += text[i] + text[i + 1]; i++; continue }
    if (text[i] === '$') { parts.push(cur); cur = ''; continue }
    cur += text[i]
  }
  parts.push(cur)
  if (parts.length % 2 === 0) {
    problems.push(`${where}: unbalanced $ delimiters`)
    return
  }
  for (let i = 1; i < parts.length; i += 2) {
    mathSegments++
    try {
      katex.renderToString(parts[i], { throwOnError: true })
    } catch (e) {
      problems.push(`${where}: KaTeX error in "${parts[i]}" — ${(e as Error).message}`)
    }
  }
}

const validSkillSlugs = new Set(SAT_SKILLS.map(s => s.slug))
const authored = [
  ...satMathAlgebraQuestions,
  ...satMathAlgebra2Questions,
  ...satMathAdvancedQuestions,
  ...satMathAdvanced2Questions,
  ...satMathProblemSolvingQuestions,
  ...satMathGeometryQuestions,
  ...satRwQuestions,
]

console.log('Verifying SAT competitive bank…\n')

for (const [i, q] of authored.entries()) {
  const where = `authored[${i}] "${q.question.slice(0, 50)}"`
  if (!validSkillSlugs.has(q.skillSlug)) problems.push(`${where}: unknown skillSlug "${q.skillSlug}"`)
  if (q.options.length !== 4) problems.push(`${where}: ${q.options.length} options (expected 4)`)
  if (q.correctAnswer < 0 || q.correctAnswer >= q.options.length) problems.push(`${where}: correctAnswer out of range`)
  checkMath(q.question, where)
  for (const o of q.options) checkMath(o, `${where} option`)
  checkMath(q.explanation, `${where} explanation`)
}

// Every College Board tag in the source banks must land somewhere in the tree.
const knownTags = new Set(SAT_SKILLS.flatMap(s => s.tags))
const seenTags = new Map<string, number>()
for (const q of [...getSatMathQuestions(100000), ...getSatRwQuestions(100000)]) {
  const tag = (q as { skill?: string }).skill
  if (!tag) { seenTags.set('(untagged)', (seenTags.get('(untagged)') ?? 0) + 1); continue }
  seenTags.set(tag, (seenTags.get(tag) ?? 0) + 1)
  if (!knownTags.has(tag)) problems.push(`bank tag not in hierarchy: "${tag}" (${seenTags.get(tag)} questions orphaned)`)
}
const untagged = seenTags.get('(untagged)') ?? 0
if (untagged > 0) console.log(`⚠ ${untagged} source-bank questions carry no skill tag and are unreachable by skill.\n`)

// Depth report.
let total = 0
const thin: string[] = []
for (const section of SAT_SECTIONS) {
  const sectionTotal = section.domains.flatMap(d => d.skills).reduce((n, s) => n + questionsForSkill(s.slug).length, 0)
  console.log(`${section.emoji} ${section.title} — ${sectionTotal} questions`)
  for (const domain of section.domains) {
    const domainTotal = domain.skills.reduce((n, s) => n + questionsForSkill(s.slug).length, 0)
    console.log(`   ${domain.title}: ${domainTotal}`)
    for (const s of domain.skills) {
      const n = questionsForSkill(s.slug).length
      total += n
      if (n < MATCH_SIZE) thin.push(`      ${String(n).padStart(3)}  ${s.title} (${s.slug})`)
    }
  }
}

// Duplicate stems (across the whole bank).
const stems = new Map<string, number>()
for (const s of SAT_SKILLS) {
  for (const q of questionsForSkill(s.slug)) {
    const k = q.question.trim().toLowerCase()
    stems.set(k, (stems.get(k) ?? 0) + 1)
  }
}
const dupes = [...stems.entries()].filter(([, n]) => n > 1)
if (dupes.length > 0) {
  // Grammar drills legitimately reuse a generic stem ("Which sentence is
  // punctuated correctly?") across items with different answer options, so a
  // repeated stem is only a defect when the OPTIONS also match.
  const realDupes = dupes.filter(([stem]) => {
    const variants = new Set(
      SAT_SKILLS.flatMap(s => questionsForSkill(s.slug))
        .filter(q => q.question.trim().toLowerCase() === stem)
        .map(q => q.options.join('|')),
    )
    return variants.size === 1
  })
  console.log(`\n${dupes.length} repeated stems (${dupes.length - realDupes.length} are generic grammar-drill prompts with distinct options — expected).`)
  if (realDupes.length > 0) {
    console.log(`⚠ ${realDupes.length} TRUE duplicates (same stem AND same options):`)
    for (const [s] of realDupes.slice(0, 10)) console.log(`   "${s.slice(0, 70)}"`)
  }
}

console.log(`\nTotal questions: ${total}`)
console.log(`Skills: ${SAT_SKILLS.length}`)
console.log(`Math segments KaTeX-compiled: ${mathSegments}`)

if (thin.length > 0) {
  console.log(`\n✗ ${thin.length} skill(s) below ${MATCH_SIZE} questions:`)
  for (const t of thin) console.log(t)
} else {
  console.log(`\n✓ Every skill has at least ${MATCH_SIZE} questions (a full match).`)
}

if (problems.length > 0) {
  console.log(`\n✗ ${problems.length} problem(s):`)
  for (const p of problems.slice(0, 40)) console.log(`   ${p}`)
  process.exit(1)
}
if (thin.length > 0) process.exit(1)
console.log('\n✓ All questions valid.')
