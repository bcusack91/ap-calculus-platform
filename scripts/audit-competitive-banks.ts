// Audit script for Algebra 1 + Geometry competitive banks.
// Flags: duplicate options, numerically equivalent options, malformed arrays,
// correctAnswer != 0, KaTeX delimiter imbalance, missing topicSlug.

/* eslint-disable @typescript-eslint/no-require-imports */
import { getAlgebra1Questions } from '../src/data/competitive-questions/algebra1-bank'
import { getGeometryQuestions } from '../src/data/competitive-questions/geometry-bank'

const algebra1Questions = getAlgebra1Questions(100000).sort((a, b) => a.id - b.id)
const geometryQuestions = getGeometryQuestions(100000).sort((a, b) => a.id - b.id)

interface Q {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topicSlug: string
}

// Strip KaTeX-only formatting and normalize for equivalence comparison
function normalizeOption(raw: string): string {
  let s = raw
  // Strip $ delimiters, \tfrac/dfrac wrappers, spaces
  s = s.replace(/\$/g, '')
  s = s.replace(/\\[td]frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
  s = s.replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, 'sqrt($1)')
  s = s.replace(/\\cdot/g, '*')
  s = s.replace(/\\pm/g, '±')
  s = s.replace(/\\pi/g, 'π')
  s = s.replace(/\\approx/g, '≈')
  s = s.replace(/\\le\b/g, '<=')
  s = s.replace(/\\ge\b/g, '>=')
  s = s.replace(/\\ne\b/g, '!=')
  s = s.replace(/\\Rightarrow/g, '=>')
  s = s.replace(/\\infty/g, 'inf')
  s = s.replace(/\s+/g, '')
  s = s.replace(/[{}]/g, '')
  return s.toLowerCase()
}

// Try to evaluate a simple option to a number (returns null if not parseable)
function evalNumeric(raw: string): number | null {
  let s = raw
  s = s.replace(/\$/g, '').trim()
  // Strip degree symbol, units, pi
  s = s.replace(/°/g, '')
  s = s.replace(/\\pi/g, '*Math.PI')
  s = s.replace(/π/g, '*Math.PI')
  // Convert \tfrac/dfrac
  s = s.replace(/\\[td]frac\{([^{}]+)\}\{([^{}]+)\}/g, '(($1)/($2))')
  // Convert \sqrt
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, 'Math.sqrt($1)')
  // Convert ^ to **
  s = s.replace(/\^/g, '**')
  s = s.replace(/\\cdot/g, '*')
  // Allow simple number-like strings only
  if (!/^[-+0-9.()*/MathsqrtPI ]+$/.test(s)) return null
  try {
    // eslint-disable-next-line no-new-func
    const v = Function(`"use strict"; return (${s});`)() as number
    if (typeof v === 'number' && isFinite(v)) return v
    return null
  } catch {
    return null
  }
}

function balancedDollars(text: string): boolean {
  // Count unescaped $ (KaTeX inline). Should be even.
  let count = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) count++
  }
  return count % 2 === 0
}

interface Issue {
  bank: string
  id: number
  topicSlug: string
  kind: string
  detail: string
}

function audit(bank: string, qs: Q[]): Issue[] {
  const issues: Issue[] = []
  const seenIds = new Set<number>()
  for (const q of qs) {
    const push = (kind: string, detail: string) =>
      issues.push({ bank, id: q.id, topicSlug: q.topicSlug, kind, detail })

    if (seenIds.has(q.id)) push('duplicate-id', `id ${q.id} appears more than once`)
    seenIds.add(q.id)

    if (!q.topicSlug) push('missing-topic', 'topicSlug is empty')
    if (q.correctAnswer !== 0) push('correct-not-zero', `correctAnswer = ${q.correctAnswer}`)
    if (!Array.isArray(q.options) || q.options.length !== 4)
      push('options-length', `length = ${q.options?.length}`)

    // Duplicate string options (after normalization)
    const norms = q.options.map(normalizeOption)
    for (let i = 0; i < norms.length; i++) {
      for (let j = i + 1; j < norms.length; j++) {
        if (norms[i] === norms[j]) {
          push('duplicate-option', `options[${i}] == options[${j}]: "${q.options[i]}" / "${q.options[j]}"`)
        }
      }
    }

    // Numerically equivalent options
    const nums = q.options.map(evalNumeric)
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const a = nums[i], b = nums[j]
        if (a !== null && b !== null && Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(a))) {
          push('numeric-equivalent', `options[${i}] ≈ options[${j}] = ${a}: "${q.options[i]}" / "${q.options[j]}"`)
        }
      }
    }

    // KaTeX delimiter check on question + options + explanation
    for (const [field, text] of [
      ['question', q.question],
      ['explanation', q.explanation],
      ...q.options.map((o, i) => [`options[${i}]`, o]),
    ] as [string, string][]) {
      if (!balancedDollars(text)) push('unbalanced-$', `${field}: ${text.slice(0, 80)}`)
    }
  }
  return issues
}

const a1Issues = audit('algebra1', algebra1Questions as unknown as Q[])
const gIssues = audit('geometry', geometryQuestions as unknown as Q[])
const all = [...a1Issues, ...gIssues]

console.log(`\n=== AUDIT REPORT ===`)
console.log(`Algebra 1: ${algebra1Questions.length} questions, ${a1Issues.length} issues`)
console.log(`Geometry:  ${geometryQuestions.length} questions, ${gIssues.length} issues`)

const byKind: Record<string, number> = {}
for (const i of all) byKind[i.kind] = (byKind[i.kind] ?? 0) + 1
console.log(`\nIssues by kind:`, byKind)

console.log(`\n--- DETAIL ---`)
for (const i of all) {
  console.log(`[${i.bank}#${i.id}] (${i.topicSlug}) ${i.kind}: ${i.detail}`)
}
