/**
 * Verify the MCAT competitive bank.
 *
 * Applies the same rigor as the flashcard audit: KaTeX-compiles every math
 * segment in every question/option/explanation, and checks structural
 * integrity (option counts, correctAnswer in range, slugs that exist in the
 * hierarchy, duplicate stems, per-subtopic depth).
 *
 * Run: npx tsx scripts/verify-mcat-questions.ts
 */
import katex from 'katex'
import { MCAT_SECTIONS, getMcatQuestions, mcatQuestionCount, MCAT_ALL_SLUG } from '../src/data/competitive-questions/mcat-bank'

let errors = 0
let checked = 0
const MATCH_SIZE = 40  // target depth per subtopic (4 full matches, no repeats)

function checkMath(text: string, where: string) {
  // Inline `$…$` segments, mirroring how the match page renders prompts.
  const segments = text.match(/\$([^$]+)\$/g) ?? []
  for (const seg of segments) {
    const inner = seg.slice(1, -1)
    checked++
    try {
      katex.renderToString(inner, { throwOnError: true })
    } catch (e) {
      errors++
      console.error(`  ✗ KaTeX [${where}]: ${(e as Error).message.split('\n')[0].slice(0, 110)}`)
      console.error(`    segment: ${inner.slice(0, 90)}`)
    }
  }
  // An odd number of unescaped $ means a delimiter is dangling.
  const dollars = (text.replace(/\\\$/g, '').match(/\$/g) ?? []).length
  if (dollars % 2 === 1) {
    errors++
    console.error(`  ✗ Unbalanced $ [${where}]: ${text.slice(0, 90)}`)
  }
}

console.log('Verifying MCAT competitive bank…\n')

const allSlugs = new Set<string>()
const stems = new Map<string, number>()
const thin: string[] = []

for (const section of MCAT_SECTIONS) {
  console.log(`${section.emoji} ${section.short} — ${mcatQuestionCount(section.slug)} questions`)
  for (const area of section.areas) {
    console.log(`   ${area.title}: ${mcatQuestionCount(area.slug)}`)
    for (const t of area.subtopics) {
      allSlugs.add(t.slug)
      const n = mcatQuestionCount(t.slug)
      if (n < MATCH_SIZE) thin.push(`${t.title} (${n})`)
      // Pull the full pool for this subtopic and validate every question.
      const qs = getMcatQuestions(500, t.slug)
      for (const q of qs) {
        const where = `${t.slug}`
        checkMath(q.question, `${where}/stem`)
        q.options.forEach((o, i) => checkMath(o, `${where}/opt${i}`))
        if (q.explanation) checkMath(q.explanation, `${where}/expl`)
        if (!Array.isArray(q.options) || q.options.length < 2) {
          errors++
          console.error(`  ✗ Bad options [${where}]: ${q.question.slice(0, 60)}`)
        }
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
          errors++
          console.error(`  ✗ correctAnswer out of range [${where}]: ${q.question.slice(0, 60)}`)
        }
        const key = q.question.trim().toLowerCase()
        stems.set(key, (stems.get(key) ?? 0) + 1)
      }
    }
  }
}

const dupes = [...stems.entries()].filter(([, n]) => n > 1)
if (dupes.length > 0) {
  console.log(`\n⚠ ${dupes.length} duplicate stems:`)
  for (const [s] of dupes.slice(0, 10)) console.log(`   "${s.slice(0, 80)}"`)
}

console.log(`\nTotal questions: ${mcatQuestionCount(MCAT_ALL_SLUG)}`)
console.log(`Subtopics: ${allSlugs.size}`)
console.log(`Math segments KaTeX-compiled: ${checked}`)
if (thin.length > 0) {
  console.log(`\n⚠ Subtopics with fewer than ${MATCH_SIZE} questions (${thin.length}):`)
  for (const t of thin) console.log(`   ${t}`)
} else {
  console.log(`\n✓ Every subtopic has at least ${MATCH_SIZE} questions (a full match).`)
}

if (errors > 0) {
  console.error(`\n✗ ${errors} error(s) found.`)
  process.exit(1)
}
console.log('\n✓ All questions valid.')
