/**
 * Runtime content-quality audit for every competitive question bank.
 *
 * Imports each bank, pulls ALL questions via its getter, and inspects the
 * actual PARSED strings (so it catches the single-backslash LaTeX escaping
 * bug where `\frac` becomes a form-feed control char at JS parse time).
 *
 * Flags per question:
 *   - control-char       : string contains \b \t \n \v \f \r \0 (broken LaTeX escape)
 *   - unbalanced-dollar  : odd number of unescaped $ (KaTeX won't render)
 *   - options-length     : options array length != 4
 *   - duplicate-option   : two identical option strings
 *   - empty-field        : empty question / explanation / option
 *   - missing-topic      : topicSlug absent (only when the bank uses topicSlug)
 */
import { promises as fs } from 'fs'
import path from 'path'

const banksDir = path.resolve(__dirname, '../src/data/competitive-questions')

const CONTROL = /[\u0000\u0008\u0009\u000A\u000B\u000C\u000D]/
function controlNames(s: string): string[] {
  const map: Record<string, string> = {
    '\u0000': '\\0', '\u0008': '\\b', '\u0009': '\\t', '\u000A': '\\n',
    '\u000B': '\\v', '\u000C': '\\f', '\u000D': '\\r',
  }
  const found = new Set<string>()
  for (const ch of s) if (map[ch]) found.add(map[ch])
  return [...found]
}

function balancedDollars(text: string): boolean {
  let count = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) count++
  }
  return count % 2 === 0
}

interface Q {
  id?: number
  question?: string
  prompt?: string
  options?: string[]
  correctAnswer?: number
  answerIndex?: number
  explanation?: string
  topicSlug?: string
}

interface Issue { bank: string; id: string; kind: string; detail: string }

async function main() {
  const files = (await fs.readdir(banksDir))
    .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts'))
    .sort()

  const allIssues: Issue[] = []
  let totalQuestions = 0
  const perBank: Record<string, number> = {}

  for (const file of files) {
    const mod = await import(path.join(banksDir, file))
    // Find a getter: function whose name starts with `get` and ends with
    // `Questions` or `QuestionSet`.
    const getterName = Object.keys(mod).find(
      k => typeof mod[k] === 'function' && /^get.*(Questions|QuestionSet)$/.test(k),
    )
    if (!getterName) continue

    let qs: Q[]
    try {
      qs = mod[getterName](100000) as Q[]
    } catch (e) {
      allIssues.push({ bank: file, id: '-', kind: 'getter-threw', detail: String(e) })
      continue
    }
    if (!Array.isArray(qs)) continue

    perBank[file] = qs.length
    totalQuestions += qs.length
    const usesTopic = qs.some(q => 'topicSlug' in q)

    const seenIds = new Map<string, number>()
    for (const q of qs) {
      const id = `${file}#${q.id ?? '?'}`
      const push = (kind: string, detail: string) =>
        allIssues.push({ bank: file, id, kind, detail })

      // Collect all human-visible text fields
      const fields: [string, string][] = []
      if (typeof q.question === 'string') fields.push(['question', q.question])
      if (typeof q.prompt === 'string') fields.push(['prompt', q.prompt])
      if (typeof q.explanation === 'string') fields.push(['explanation', q.explanation])
      if (Array.isArray(q.options)) q.options.forEach((o, i) => fields.push([`option[${i}]`, o]))

      for (const [name, text] of fields) {
        if (typeof text !== 'string') continue
        if (CONTROL.test(text)) {
          push('control-char', `${name} has ${controlNames(text).join(',')}: "${text.replace(CONTROL, '·').slice(0, 70)}"`)
        }
        if (!balancedDollars(text)) {
          push('unbalanced-dollar', `${name}: "${text.slice(0, 70)}"`)
        }
        if (text.trim() === '') push('empty-field', name)
      }

      if (Array.isArray(q.options)) {
        if (q.options.length !== 4) push('options-length', `length=${q.options.length}`)
        // Case-SENSITIVE, whitespace-insensitive: an option that renders
        // identically to another after collapsing whitespace is a genuine
        // broken question. Case differences (Aa vs aa, F(x) vs f(x)) are kept
        // distinct because they are meaningful in math/genetics/code.
        const seen = new Map<string, number>()
        q.options.forEach((o, i) => {
          const key = (o ?? '').replace(/\s+/g, '')
          if (seen.has(key)) push('duplicate-option', `option[${i}] == option[${seen.get(key)}]: "${o}"`)
          else seen.set(key, i)
        })
      }

      if (usesTopic && !q.topicSlug) push('missing-topic', `id ${q.id}`)

      if (q.id != null) {
        if (seenIds.has(String(q.id))) push('duplicate-id', `id ${q.id} repeats`)
        seenIds.set(String(q.id), 1)
      }
    }
  }

  console.log('=== COMPETITIVE CONTENT-QUALITY AUDIT ===\n')
  console.log(`Banks scanned: ${Object.keys(perBank).length}`)
  console.log(`Total questions: ${totalQuestions}\n`)

  const byKind: Record<string, number> = {}
  for (const i of allIssues) byKind[i.kind] = (byKind[i.kind] ?? 0) + 1
  console.log('Issues by kind:', byKind, '\n')

  // Group detail output by bank
  const byBank: Record<string, Issue[]> = {}
  for (const i of allIssues) (byBank[i.bank] ??= []).push(i)
  for (const bank of Object.keys(byBank).sort()) {
    console.log(`\n--- ${bank} (${byBank[bank].length} issues) ---`)
    for (const i of byBank[bank].slice(0, 50)) console.log(`  [${i.id}] ${i.kind}: ${i.detail}`)
    if (byBank[bank].length > 50) console.log(`  ...and ${byBank[bank].length - 50} more`)
  }

  console.log(`\nTOTAL ISSUES: ${allIssues.length}`)
}

main().catch(e => { console.error(e); process.exit(1) })
