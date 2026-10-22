/**
 * Detect math that a markdown table row splits apart.
 *
 * GFM splits a table row into cells at EVERY unescaped `|`, before inline
 * math is parsed, so `$\ln|x|$`, `$\sum |a_n|$`, `$|r| < 1$` or
 * `$\left| x \right|$` inside a table cell fall apart into raw `$\sum` /
 * `a_n` / `$ converges` cells (and cells beyond the header width are
 * dropped). The general rendering audits miss this because they check math
 * outside of table structure.
 *
 * Two pipelines are checked, each the way the app renders it:
 *
 *  - `content` fields (InteractiveLessonRenderer → react-markdown):
 *    escapeCurrencyMath → remark-parse + remark-math + remark-gfm, the same
 *    plugins in the same order. Table rows are taken from the parsed tree.
 *  - every other string field (InlineLatex → renderRichText): an exact copy
 *    of render-rich-text.ts's table detection, whose `parsePipeCells` splits
 *    on EVERY `|` (an escaped `\|` splits there too).
 *
 * Findings:
 *  SPLIT_MATH   a table row has a `|` inside a `$…$` math span, so the row
 *               splits mid-formula (the visible bug).
 *  NO_TABLE     a header row whose math pipes give it a different cell count
 *               than its `|---|` delimiter row: GFM renders no table at all,
 *               only raw pipe text (markdown pipeline).
 *  EXTRA_CELLS  a row with more cells than the header for another reason
 *               (tally marks, `||` in code): the extra cells are dropped.
 *
 * Fix: inside table rows write `\lvert … \rvert` (`\\lvert`/`\\rvert` in a
 * template literal) for absolute values. `\left| … \right|` does NOT work:
 * it still contains a bare `|`. `\|` survives react-markdown but renders as a
 * double bar ‖ (a norm), and it still splits in renderRichText tables.
 *
 *   npx tsx scripts/check-lesson-table-math.ts [file-or-dir ...]
 *   (default root: src/data/interactive-lessons; exit 1 when anything is found)
 *   --json <out>  also write the findings as JSON
 *   --app         report (and fail on) only rows the app still breaks after
 *                 the renderer's own pre-pass, src/lib/table-math-pipes.ts
 *                 (when that module exists). Without it the check is strict:
 *                 source content should not rely on the pre-pass.
 */
import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import { escapeCurrencyMath } from '../src/lib/escape-currency-math'

type Kind = 'SPLIT_MATH' | 'NO_TABLE' | 'EXTRA_CELLS'
interface Hit { kind: Kind; row: string }
interface Finding extends Hit {
  file: string
  line: number | null
  path: string
  pipeline: 'markdown' | 'richtext'
  /** Still broken after the app's renderer pre-pass (src/lib/table-math-pipes.ts), when that module exists. */
  brokenInApp: boolean
}
type Pre = (s: string) => string

function isEscaped(s: string, i: number): boolean {
  let n = 0
  for (let j = i - 1; j >= 0 && s[j] === '\\'; j--) n++
  return n % 2 === 1
}

/** Inner text of the `$…$` / `$$…$$` spans on one line, paired the way remark-math pairs them. */
function mathSpans(line: string): string[] {
  const spans: string[] = []
  let i = 0
  while (i < line.length) {
    if (line[i] !== '$' || isEscaped(line, i)) { i++; continue }
    let j = i
    while (j < line.length && line[j] === '$') j++
    const len = j - i
    let close = -1
    for (let k = j; k < line.length; k++) {
      if (line[k] !== '$' || isEscaped(line, k)) continue
      let e = k
      while (e < line.length && line[e] === '$') e++
      if (e - k === len) { close = k; break }
      k = e - 1
    }
    if (close < 0) { i = j; continue }
    spans.push(line.slice(j, close))
    i = close + len
  }
  return spans
}

const PROSE = /[a-zA-Z]{3,}\s+[a-zA-Z]{3,}\s+[a-zA-Z]{3,}/
/** A span that is really two currency amounts in neighbouring cells (`$24 | $30`) or swallowed prose. */
function looksLikeCurrency(inner: string): boolean {
  if (/^\s*\d[\d,.]*\s*\|/.test(inner)) return true
  const stripped = inner.replace(/\\text\s*\{[^}]*\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ')
  return PROSE.test(stripped)
}

/** Does this table row have a `|` inside math? `countEscaped`: renderRichText also splits on `\|`. */
function rowSplitsMath(row: string, countEscaped: boolean): boolean {
  return mathSpans(row).some((inner) => {
    if (looksLikeCurrency(inner)) return false
    for (let k = 0; k < inner.length; k++) {
      if (inner[k] === '|' && (countEscaped || !isEscaped(inner, k))) return true
    }
    return false
  })
}

/** GFM cell count: split on unescaped pipes, ignoring one leading and one trailing pipe. */
function gfmCellCount(row: string): number {
  let t = row.trim()
  if (t.startsWith('|')) t = t.slice(1)
  if (t.endsWith('|') && !isEscaped(t, t.length - 1)) t = t.slice(0, -1)
  let n = 1
  for (let i = 0; i < t.length; i++) if (t[i] === '|' && !isEscaped(t, i)) n++
  return n
}

const processor = unified().use(remarkParse).use(remarkMath).use(remarkGfm)
interface MdNode { type: string; children?: MdNode[]; position?: { start: { offset?: number }; end: { offset?: number } } }
const GFM_DELIMITER = /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/

/** `content` fields: the react-markdown pipeline. */
function checkMarkdown(raw: string, pre: Pre = (x) => x): Hit[] {
  if (!raw.includes('|')) return []
  const src = pre(escapeCurrencyMath(raw))
  const out: Hit[] = []

  // Tables GFM refuses to build: header cell count ≠ delimiter cell count.
  const lines = src.split('\n')
  for (let i = 0; i + 1 < lines.length; i++) {
    if (!lines[i].includes('|') || !lines[i + 1].includes('-') || !GFM_DELIMITER.test(lines[i + 1])) continue
    if (gfmCellCount(lines[i]) === gfmCellCount(lines[i + 1]) || !rowSplitsMath(lines[i], false)) continue
    out.push({ kind: 'NO_TABLE', row: lines[i] })
    for (let j = i + 2; j < lines.length && lines[j].includes('|') && lines[j].trim(); j++) {
      if (rowSplitsMath(lines[j], false)) out.push({ kind: 'SPLIT_MATH', row: lines[j] })
    }
  }

  // Real tables, from the same parse the app does.
  const tree = processor.parse(src) as MdNode
  const visit = (node: MdNode) => {
    if (node.type === 'table') {
      const rows = node.children ?? []
      const ncol = rows[0]?.children?.length ?? 0
      for (const row of rows) {
        const a = row.position?.start.offset
        const b = row.position?.end.offset
        if (a === undefined || b === undefined) continue
        const rowSrc = src.slice(a, b)
        if (rowSplitsMath(rowSrc, false)) out.push({ kind: 'SPLIT_MATH', row: rowSrc })
        else if ((row.children?.length ?? 0) > ncol) out.push({ kind: 'EXTRA_CELLS', row: rowSrc })
      }
      return
    }
    node.children?.forEach(visit)
  }
  visit(tree)
  return out
}

// ── exact copy of src/lib/render-rich-text.ts table detection ───────────────
const RICH_SEPARATOR = /^\s*\|?\s*[-:]+[-:|  ]+\s*$/
function parsePipeCells(line: string): string[] {
  let trimmed = line.trim()
  if (trimmed.startsWith('|')) trimmed = trimmed.slice(1)
  if (trimmed.endsWith('|')) trimmed = trimmed.slice(0, -1)
  return trimmed.split('|').map((c) => c.trim())
}

/** Non-`content` fields: the renderRichText pipeline. */
function checkRichText(raw: string, pre: Pre = (x) => x): Hit[] {
  if (!raw.includes('|')) return []
  const lines = pre(raw).split('\n')
  const out: Hit[] = []
  let i = 0
  while (i < lines.length) {
    if (lines[i].includes('|') && i + 1 < lines.length && RICH_SEPARATOR.test(lines[i + 1])) {
      const table = [lines[i]]
      i += 2
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') table.push(lines[i++])
      const ncol = parsePipeCells(table[0]).length
      for (const line of table) {
        if (rowSplitsMath(line, true)) out.push({ kind: 'SPLIT_MATH', row: line })
        else if (parsePipeCells(line).length > ncol) out.push({ kind: 'EXTRA_CELLS', row: line })
      }
    } else i++
  }
  return out
}

// ── module walking ───────────────────────────────────────────────────────────
const SKIP_KEYS = new Set(['keywords', 'acceptableAnswers', 'correctAnswers', 'correctAnswer'])

function walk(value: unknown, key: string, jsonPath: string, hit: (p: string, pipeline: Finding['pipeline'], v: string) => void, seen: WeakSet<object>) {
  if (typeof value === 'string') {
    hit(jsonPath, key === 'content' ? 'markdown' : 'richtext', value)
    return
  }
  if (!value || typeof value !== 'object' || seen.has(value)) return
  seen.add(value)
  if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, key, `${jsonPath}[${i}]`, hit, seen))
    return
  }
  for (const [k, v] of Object.entries(value)) {
    if (SKIP_KEYS.has(k)) continue
    walk(v, k, `${jsonPath}.${k}`, hit, seen)
  }
}

/** tsx CJS interop puts named exports under `default`. */
function unwrap(raw: Record<string, unknown>): Record<string, unknown> {
  const hasNamed = Object.keys(raw).some((k) => k !== 'default')
  return hasNamed ? raw : ((raw.default as Record<string, unknown>) ?? raw)
}

/** Best-effort source line: find the row as it is written in the template literal. */
function sourceLine(fileText: string, row: string): number | null {
  for (const p of [row, row.replace(/\\/g, '\\\\')]) {
    const needle = p.trim().slice(0, 60)
    const at = needle ? fileText.indexOf(needle) : -1
    if (at >= 0) return fileText.slice(0, at).split('\n').length
  }
  return null
}

async function main() {
  const args = process.argv.slice(2)
  let jsonOut: string | null = null
  let appMode = false
  const roots: string[] = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--json') jsonOut = args[++i]
    else if (args[i] === '--app') appMode = true
    else roots.push(args[i])
  }
  if (roots.length === 0) roots.push('src/data/interactive-lessons')

  // The renderer may carry its own pre-pass for pipes in table math. When it
  // exists, each finding also records whether the app as built still breaks.
  let appPre: Pre | null = null
  try {
    const m = (await import('../src/lib/table-math-pipes')) as { protectTableMathPipes?: Pre }
    if (typeof m.protectTableMathPipes === 'function') appPre = m.protectTableMathPipes
  } catch { /* no renderer pre-pass: the source and app pipelines are the same */ }

  const files: string[] = []
  const collect = (p: string) => {
    const st = fs.statSync(p)
    if (st.isDirectory()) for (const e of fs.readdirSync(p)) collect(path.join(p, e))
    else if (p.endsWith('.ts') && !p.endsWith('.d.ts') && !/ 2\.ts$/.test(p)) files.push(p)
  }
  roots.forEach((r) => collect(path.resolve(r)))
  files.sort()

  const findings: Finding[] = []
  let failed = 0
  for (const f of files) {
    const rel = path.relative(process.cwd(), f)
    let mod: Record<string, unknown>
    try {
      mod = unwrap((await import(f)) as Record<string, unknown>)
    } catch (e) {
      failed++
      console.error(`IMPORT FAIL ${rel}: ${(e as Error).message.slice(0, 100)}`)
      continue
    }
    const fileText = fs.readFileSync(f, 'utf8')
    const seen = new WeakSet<object>()
    const dedupe = new Set<string>()
    for (const [name, v] of Object.entries(mod)) {
      if (typeof v === 'function') continue
      walk(v, name, name, (p, pipeline, s) => {
        const check = pipeline === 'markdown' ? checkMarkdown : checkRichText
        const hits = check(s)
        if (hits.length === 0) return
        const appRows = new Set((appPre ? check(s, appPre) : hits).map((h) => h.kind + h.row.trim()))
        // A row the pre-pass rewrote but did not fix no longer matches its source
        // text; if any such row is left, treat every hit in the string as broken.
        const matched = hits.filter((h) => appRows.has(h.kind + h.row.trim())).length
        const unmatchedLeft = appRows.size > matched
        for (const h of hits) {
          const k = `${pipeline}|${h.kind}|${h.row}`
          if (dedupe.has(k)) continue
          dedupe.add(k)
          findings.push({
            file: rel, line: sourceLine(fileText, h.row), path: p, pipeline, kind: h.kind, row: h.row.trim(),
            // Without a pre-pass the app renders the source as written.
            brokenInApp: appPre ? unmatchedLeft || appRows.has(h.kind + h.row.trim()) : true,
          })
        }
      }, seen)
    }
  }

  const shown = appMode ? findings.filter((x) => x.brokenInApp) : findings
  for (const x of shown) {
    const tag = appPre && !x.brokenInApp ? '  (renderer pre-pass repairs it)' : ''
    console.log(`${x.file}:${x.line ?? '?'}  ${x.kind}  [${x.pipeline}]  ${x.row.slice(0, 110)}${tag}`)
  }
  const count = (xs: Finding[]) => `${xs.length} rows in ${new Set(xs.map((x) => x.file)).size} files`
  const math = findings.filter((x) => x.kind !== 'EXTRA_CELLS')
  console.log(`\n${files.length} files scanned (${failed} import failures)`)
  console.log(`pipes splitting table math (SPLIT_MATH / NO_TABLE): ${count(math)}`)
  console.log(`other extra-cell rows (EXTRA_CELLS): ${count(findings.filter((x) => x.kind === 'EXTRA_CELLS'))}`)
  const stillBroken = findings.filter((x) => x.brokenInApp)
  if (appPre) console.log(`still broken after the renderer pre-pass (src/lib/table-math-pipes.ts): ${count(stillBroken)}`)
  if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(findings, null, 2))
  process.exit((appMode ? stillBroken.length : findings.length) || failed ? 1 : 0)
}

main().catch((e) => { console.error(e); process.exit(1) })
