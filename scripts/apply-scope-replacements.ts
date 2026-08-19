/**
 * Apply curriculum-scope replacements from the AP Physics C review (2026-08-19).
 * Reads reviewer JSON ({locator, verdict, replacement}), finds each flagged
 * question by its verbatim locator, and replaces the entry's content fields
 * (question/options/correctAnswer/explanation/difficulty) while PRESERVING the
 * entry's identity/passthrough fields (id, domain, topicSlug, formSet) and the
 * file's single-line vs multi-line entry style. Only verdict "out" entries with
 * a replacement are applied; "borderline" is reported and left alone.
 *   [DRY_RUN=1] npx tsx scripts/apply-scope-replacements.ts <findings.json> <target.ts>
 */
import fs from 'fs'

const DRY = !!process.env.DRY_RUN

type Finding = {
  locator: string
  verdict: 'out' | 'borderline'
  reason: string
  replacement?: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    difficulty: string
  }
}

/** Collapse any backslash run to one, then emit TS-single-quoted (backslashes doubled). */
function tsString(s: string): string {
  const semantic = s.replace(/\\+/g, '\\')
  return "'" + semantic.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
}

function findEnclosingObject(src: string, at: number): { start: number; end: number } | null {
  // walk back to the nearest '{' that opens this entry (quote-aware forward
  // scan from it must reach `at` at depth >= 1)
  let start = src.lastIndexOf('\n  {', at)
  if (start === -1) return null
  start = start + 1 // skip newline
  // brace-match forward from start
  let depth = 0
  let quote: string | null = null
  for (let i = src.indexOf('{', start); i < src.length; i++) {
    const c = src[i]
    if (quote) {
      if (c === '\\') i++
      else if (c === quote) quote = null
      continue
    }
    if (c === "'" || c === '"' || c === '`') quote = c
    else if (c === '{') depth++
    else if (c === '}') {
      depth--
      if (depth === 0) return { start, end: i + 1 }
    }
  }
  return null
}

function main() {
  const [findingsPath, targetPath] = process.argv.slice(2)
  if (!findingsPath || !targetPath) {
    console.error('usage: npx tsx scripts/apply-scope-replacements.ts <findings.json> <target.ts>')
    process.exit(1)
  }
  const findings: Finding[] = JSON.parse(fs.readFileSync(findingsPath, 'utf8'))
  let src = fs.readFileSync(targetPath, 'utf8')

  let applied = 0, borderline = 0, missed = 0
  for (const f of findings) {
    if (f.verdict !== 'out' || !f.replacement) { borderline++; continue }
    const idx = src.indexOf(f.locator)
    if (idx === -1) { missed++; console.log('  LOCATOR MISS:', f.locator.slice(0, 60)); continue }
    if (src.indexOf(f.locator, idx + 1) !== -1) { missed++; console.log('  LOCATOR AMBIGUOUS:', f.locator.slice(0, 60)); continue }
    const bounds = findEnclosingObject(src, idx)
    if (!bounds) { missed++; console.log('  NO OBJECT BOUNDS:', f.locator.slice(0, 60)); continue }
    const original = src.slice(bounds.start, bounds.end)

    // passthrough fields preserved verbatim from the original entry
    const pass: string[] = []
    for (const field of ['id', 'domain', 'topicSlug', 'formSet']) {
      const m = original.match(new RegExp(`${field}:\\s*(?:'(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*"|\\d+)`))
      if (m) pass.push(m[0])
    }

    const r = f.replacement
    const multiline = original.includes('\n')
    const fields = [
      `question: ${tsString(r.question)}`,
      `options: [${r.options.map(tsString).join(', ')}]`,
      `correctAnswer: ${r.correctAnswer}`,
      `explanation: ${tsString(r.explanation)}`,
      `difficulty: ${tsString(r.difficulty)}`,
      ...pass,
    ]
    const replacementText = multiline
      ? '  {\n' + fields.map((x) => '    ' + x + ',').join('\n') + '\n  }'
      : '  { ' + fields.join(', ') + ' }'
    src = src.slice(0, bounds.start) + replacementText + src.slice(bounds.end)
    applied++
  }

  if (!DRY) fs.writeFileSync(targetPath, src)
  console.log(`${DRY ? '[DRY RUN] ' : ''}${targetPath.split('/').pop()}: applied ${applied}, borderline (untouched) ${borderline}, missed ${missed}`)
  if (missed > 0) process.exit(1)
}

main()
