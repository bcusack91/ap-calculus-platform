/**
 * Course completeness report — the "is the site cohesive?" check.
 *
 * The platform promises every course a standard set of study tools. This script
 * reports, per course:
 *   - which tools are LINKED from the course hub (/courses/[slug]),
 *   - which tool pages EXIST on disk but are NOT linked (invisible to students),
 *   - which are genuinely missing.
 *
 * "Not applicable" cases are declared explicitly below rather than silently
 * skipped, so a gap is always a decision someone made — not an oversight.
 *
 *   npx tsx scripts/course-completeness.ts
 *   npx tsx scripts/course-completeness.ts --strict   # exit 1 if anything is built-but-unlinked
 */
import fs from 'fs'
import {
  courseDiagnosticMap,
  courseScorePredictorMap,
  courseDailyQuestionMap,
  coursePracticeTestMap,
  courseUnitTestsMap,
  courseFRQMap,
  courseStudyPlanMap,
  courseFlashcardMap,
} from '../src/data/course-feature-config'

type Tool = { key: string; label: string; suffix: string | null; map: Record<string, { href: string }> }

const TOOLS: Tool[] = [
  { key: 'diagnostic', label: 'Diagnostic', suffix: '-diagnostic', map: courseDiagnosticMap },
  { key: 'practice', label: 'Practice', suffix: '-practice', map: coursePracticeTestMap },
  { key: 'unitTests', label: 'UnitTests', suffix: '-unit-tests', map: courseUnitTestsMap },
  { key: 'frq', label: 'FRQ', suffix: '-frq', map: courseFRQMap },
  { key: 'studyPlan', label: 'Plans', suffix: '-study-plans', map: courseStudyPlanMap },
  { key: 'predictor', label: 'Predictor', suffix: '-score-predictor', map: courseScorePredictorMap },
  { key: 'daily', label: 'Daily', suffix: '-daily-question', map: courseDailyQuestionMap },
  // Flashcards are a query-param view of /flashcards, not a per-course page.
  { key: 'flashcards', label: 'Cards', suffix: null, map: courseFlashcardMap },
]

/**
 * Declared exemptions — a tool that legitimately does not apply to a course.
 * Anything NOT listed here is treated as a real gap worth filling.
 */
const NOT_APPLICABLE: Record<string, string[]> = {
  // College Board replaced CSP's FRQ with the Create Performance Task.
  'ap-computer-science-principles': ['frq'],
  // Digital SAT/ACT/MCAT are section-based; no AP-style FRQ.
  sat: ['frq'],
  act: ['frq'],
  mcat: ['frq'],
  // Non-AP math courses have no free-response exam component.
  'algebra-1': ['frq'], 'algebra-2': ['frq'], geometry: ['frq'],
  'pre-algebra': ['frq'], 'grade-8-math': ['frq'],
  'organic-chemistry-1': ['frq'], 'organic-chemistry-2': ['frq'],
  // `precalculus` is the non-AP variant, whose flashcards live under
  // ap-precalculus rather than under a course row of its own.
  precalculus: ['frq', 'flashcards'],
}

// Alternate historical prefixes for the same course (naming drift).
const ALIASES: Record<string, string[]> = {
  'ap-precalculus': ['ap-precalc'],
  'ap-african-american-studies': ['ap-aas'],
  // The canonical diagnostic URL is /calcab-diagnostic, so the derived prefix is
  // `calcab` — but every other Calc tool lives under `ap-calcab-*`.
  'ap-calculus-ab': ['ap-calcab', 'ap-calc-ab'],
  'ap-calculus-bc': ['ap-calcbc', 'ap-calc-bc'],
  'organic-chemistry-1': ['ochem1', 'ochem'],
  'organic-chemistry-2': ['ochem2', 'ochem'],
  // Precalculus study plans ship under the `precalc` prefix like its other tools.
  precalculus: ['precalc'],
}

const pageExists = (p: string) => fs.existsSync(`src/app/${p}/page.tsx`)

/** Primary route prefix for a course, derived from its (complete) diagnostic link. */
function prefixFor(course: string): string | null {
  const href = courseDiagnosticMap[course]?.href
  const m = href?.match(/^\/([a-z0-9-]+)-diagnostic$/)
  return m ? m[1] : null
}

function builtOnDisk(course: string, suffix: string | null): boolean {
  if (!suffix) return true // flashcards: always available as a filtered view
  const prefixes = [prefixFor(course), ...(ALIASES[course] ?? [])].filter(Boolean) as string[]
  return prefixes.some((p) => pageExists(p + suffix))
}

const strict = process.argv.includes('--strict')
const courses = Object.keys(courseDiagnosticMap).sort()

const header = 'course'.padEnd(32) + TOOLS.map((t) => t.label.padEnd(10)).join('')
console.log('Course completeness — ✓ linked · ⚠ built but NOT linked · ✗ missing · – n/a\n')
console.log(header)
console.log('-'.repeat(header.length))

let linked = 0, unlinked = 0, missing = 0, na = 0
const problems: string[] = []

for (const course of courses) {
  const cells = TOOLS.map((t) => {
    const isNA = (NOT_APPLICABLE[course] ?? []).includes(t.key)
    const isLinked = Boolean(t.map[course])
    const isBuilt = builtOnDisk(course, t.suffix)

    if (isLinked) { linked++; return '✓'.padEnd(10) }
    if (isNA) { na++; return '–'.padEnd(10) }
    if (isBuilt) {
      unlinked++
      problems.push(`${course} → ${t.label}: page exists but nothing links to it`)
      return '⚠'.padEnd(10)
    }
    missing++
    return '✗'.padEnd(10)
  })
  console.log(course.padEnd(32) + cells.join(''))
}

const total = linked + unlinked + missing + na
console.log(
  `\n${courses.length} courses × ${TOOLS.length} tools = ${total} slots\n` +
  `  ✓ linked                 ${linked}\n` +
  `  ⚠ built but NOT linked   ${unlinked}\n` +
  `  ✗ missing (to build)     ${missing}\n` +
  `  – not applicable         ${na}`
)

if (problems.length) {
  console.log(`\nBuilt-but-unlinked (students cannot reach these):`)
  for (const p of problems) console.log('  ' + p)
}

if (strict && unlinked > 0) {
  console.log('\n✗ --strict: content exists that no student can reach.')
  process.exit(1)
}
