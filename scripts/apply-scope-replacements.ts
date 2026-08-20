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
  /** Repo-relative path (wave-2 findings); when present, overrides the target arg. */
  file?: string
  locator: string
  verdict: 'out' | 'borderline'
  reason: string
  replacement?: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    difficulty: string
  } | null
  suggestedFix?: string
}

/** Collapse any backslash run to one, then emit TS-single-quoted (backslashes doubled). */
function tsString(s: unknown): string {
  const semantic = String(s ?? '').replace(/\\+/g, '\\')
  return "'" + semantic.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'"
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
  const [findingsPath, targetArg] = process.argv.slice(2)
  if (!findingsPath) {
    console.error('usage: npx tsx scripts/apply-scope-replacements.ts <findings.json> [target.ts]')
    process.exit(1)
  }
  const findings: Finding[] = JSON.parse(fs.readFileSync(findingsPath, 'utf8'))

  // Group by target file: wave-2 findings carry a repo-relative `file` field;
  // wave-1 findings apply wholly to the target argument.
  const groups = new Map<string, Finding[]>()
  for (const f of findings) {
    const target = f.file ?? targetArg
    if (!target) { console.error('finding has no file and no target arg:', f.locator.slice(0, 50)); process.exit(1) }
    groups.set(target, [...(groups.get(target) ?? []), f])
  }

  let totalMissed = 0
  for (const [targetPath, group] of groups) {
    const res = applyToFile(targetPath, group)
    totalMissed += res
  }
  if (totalMissed > 0) process.exit(1)
}

function applyToFile(targetPath: string, findings: Finding[]): number {
  let src = fs.readFileSync(targetPath, 'utf8')

  let applied = 0, borderline = 0, frqOut = 0, missed = 0
  for (const f of findings) {
    if (f.verdict === 'out' && !f.replacement) { frqOut++; continue } // FRQ/manual items
    if (f.verdict !== 'out' || !f.replacement) { borderline++; continue }
    const idx = src.indexOf(f.locator)
    if (idx === -1) { missed++; console.log('  LOCATOR MISS:', f.locator.slice(0, 60)); continue }
    if (src.indexOf(f.locator, idx + 1) !== -1) { missed++; console.log('  LOCATOR AMBIGUOUS:', f.locator.slice(0, 60)); continue }
    const bounds = findEnclosingObject(src, idx)
    if (!bounds) { missed++; console.log('  NO OBJECT BOUNDS:', f.locator.slice(0, 60)); continue }
    const original = src.slice(bounds.start, bounds.end)

    // passthrough fields preserved verbatim from the original entry
    const pass: string[] = []
    for (const field of ['id', 'type', 'domain', 'topicSlug', 'formSet', 'category', 'topic', 'unit', 'skill', 'calculator']) {
      // \b prevents matching a field name inside a longer word (e.g. `id:` inside "fluid:")
      const m = original.match(new RegExp(`\\b${field}:\\s*(?:'(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*"|\\d+)`))
      if (m) pass.push(m[0])
    }

    const r = f.replacement as Record<string, unknown> & { options: string[] }
    const answerIdx = (r.correctAnswer ?? r.correctIndex) as number | undefined
    if (typeof r.question !== 'string' || !Array.isArray(r.options) || r.options.length !== 4 || typeof answerIdx !== 'number') {
      missed++; console.log('  BAD REPLACEMENT SHAPE:', f.locator.slice(0, 60)); continue
    }
    const multiline = original.includes('\n')
    // Answer-index key mirrors whichever the ORIGINAL entry uses.
    const answerKey = original.includes('correctIndex:') ? 'correctIndex' : 'correctAnswer'
    // Emit only fields the original entry carried — excess properties fail tsc.
    const fields = [
      `question: ${tsString(r.question)}`,
      `options: [${r.options.map(tsString).join(', ')}]`,
      `${answerKey}: ${answerIdx}`,
      ...(original.includes('explanation:') ? [`explanation: ${tsString(r.explanation)}`] : []),
      ...(original.includes('difficulty:') && r.difficulty ? [`difficulty: ${tsString(r.difficulty)}`] : []),
      ...pass,
    ]
    const replacementText = multiline
      ? '  {\n' + fields.map((x) => '    ' + x + ',').join('\n') + '\n  }'
      : '  { ' + fields.join(', ') + ' }'
    src = src.slice(0, bounds.start) + replacementText + src.slice(bounds.end)
    applied++
  }

  if (!DRY) fs.writeFileSync(targetPath, src)
  console.log(`${DRY ? '[DRY RUN] ' : ''}${targetPath.split('/').pop()}: applied ${applied}, borderline ${borderline}, manual/FRQ-out ${frqOut}, missed ${missed}`)
  return missed
}

main()
