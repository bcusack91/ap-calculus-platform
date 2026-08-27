/**
 * Site-wide rendering audit for authored content.
 *
 * Imports every data module under the given roots (evaluating template
 * literals exactly as the app does), walks every exported value, and validates
 * every string the way the renderers will treat it:
 *
 *  KATEX   a $...$ / $$...$$ segment that fails to compile (throwOnError) —
 *          renders as red error text or falls back to raw source
 *  GARBLE  prose swallowed between two bare `$` (usually unescaped currency:
 *          "costs $5 and $10" loses "and")
 *  DANGLE  an odd number of unescaped `$` — usually bare currency that will
 *          garble the moment a second amount lands in the same string
 *  RAWTEX  a LaTeX command outside any math segment — shows literally
 *  CTRL    a control character from a single-quote escape bug: '\frac' in a
 *          non-template string is formfeed+"rac", '\beta' is backspace+"eta",
 *          '\times' is tab+"imes". Invisible in source, garbage on screen.
 *
 * Exit-quiz modules are additionally EXECUTED (generateExitQuiz) under a
 * seeded Math.random, so template-generated questions are audited too and the
 * run is reproducible.
 *
 *   npx tsx scripts/audit-rendering.ts <out.ndjson> <root...>
 */
import fs from 'fs'
import path from 'path'
import katex from 'katex'
import { escapeCurrencyMath } from '../src/lib/escape-currency-math'

const PROSE = /[a-zA-Z]{3,}\s+[a-zA-Z]{3,}\s+[a-zA-Z]{3,}/
const RAWTEX_CMD = /\\(dfrac|tfrac|frac|sqrt|times|cdot|div|pm|mp|pi|theta|alpha|gamma|Delta|delta|lambda|mu|sigma|omega|Omega|leq|geq|neq|approx|infty|sum|int|lim|log|ln|sin|cos|tan|vec|hat|overline|mathrm|mathbf|text\{|left|right|begin\{|end\{)/

// control chars produced by missing-double-backslash escapes ('\f','\b','\v','\r')
const CTRL = new RegExp('[\\f\\b\\v\\r]')
// tab is legitimate in some prose; flag only when it decapitates a known command
const TABTEX = new RegExp('\\t(imes|heta|frac|ext\\{|an\\b|o\\b)')

interface Finding { file: string; path: string; kind: string; detail: string; excerpt: string; value?: string }

/** DUMP_VALUES=1 includes the full flagged string so a fixer can consume it. */
const DUMP_VALUES = process.env.DUMP_VALUES === '1'

function mathSegments(s: string): { segs: { inner: string; display: boolean }[]; outside: string; dangling: boolean } {
  const segs: { inner: string; display: boolean }[] = []
  let rest = ''
  let i = 0
  while (i < s.length) {
    if (s[i] === '\\' && i + 1 < s.length) { rest += s[i] + s[i + 1]; i += 2; continue }
    if (s[i] === '$' && s[i + 1] === '$') {
      const close = s.indexOf('$$', i + 2)
      if (close === -1) { rest += s.slice(i); break }
      segs.push({ inner: s.slice(i + 2, close), display: true })
      rest += '  '
      i = close + 2
      continue
    }
    rest += s[i]; i++
  }
  // inline pairs on the display-stripped remainder
  const idx: number[] = []
  for (let j = 0; j < rest.length; j++) {
    if (rest[j] === '\\') { j++; continue }
    if (rest[j] === '$') idx.push(j)
  }
  let outside = ''
  let last = 0
  for (let k = 0; k + 1 < idx.length; k += 2) {
    segs.push({ inner: rest.slice(idx[k] + 1, idx[k + 1]), display: false })
    outside += rest.slice(last, idx[k])
    last = idx[k + 1] + 1
  }
  outside += rest.slice(last)
  return { segs, outside, dangling: idx.length % 2 === 1 }
}

function stripTex(s: string): string {
  // Strip ALL command-with-braced-argument forms (\text, \textbf, \mathrm, …)
  // including their contents: `$$\textbf{The measure of a minor arc}$$` is
  // valid KaTeX whose braces hold prose BY DESIGN — leaving that prose behind
  // made the GARBLE check fire on correct display math.
  let prev = ''
  let cur = s
  while (prev !== cur) {
    prev = cur
    cur = cur.replace(/\\[a-zA-Z]+\s*\{[^{}]*\}/g, ' ')
  }
  return cur.replace(/\\[a-zA-Z]+/g, ' ')
}

function validate(value: string): { kind: string; detail: string }[] {
  const out: { kind: string; detail: string }[] = []
  if (CTRL.test(value)) out.push({ kind: 'CTRL', detail: 'control char from single-quote escape bug' })
  else if (TABTEX.test(value)) out.push({ kind: 'CTRL', detail: 'tab decapitating a LaTeX command' })
  if (!value.includes('$') && !value.includes('\\')) return out
  const { segs, outside, dangling } = mathSegments(value)
  for (const seg of segs) {
    if (PROSE.test(stripTex(seg.inner))) {
      out.push({ kind: 'GARBLE', detail: `prose in math span: "${seg.inner.slice(0, 60)}"` })
      continue // don't also KATEX-flag a segment that is really swallowed prose
    }
    try {
      katex.renderToString(seg.inner, { throwOnError: true, displayMode: seg.display })
    } catch (e) {
      out.push({ kind: 'KATEX', detail: (e as Error).message.replace(/^KaTeX parse error:\s*/, '').slice(0, 90) })
    }
  }
  if (dangling) out.push({ kind: 'DANGLE', detail: 'odd number of unescaped $' })
  const m = outside.match(RAWTEX_CMD)
  if (m) out.push({ kind: 'RAWTEX', detail: `LaTeX outside math: \\${m[1]}` })
  // Two bare currency amounts pairing WITHOUT prose between them: "$5 + $10"
  // compiles as the math span "5 + " so GARBLE never fires, but it renders as
  // italic math with both dollar signs gone. The $digit...$digit shape is a
  // strong currency signal — authored math almost never puts a digit
  // immediately after a closing delimiter.
  const cur = value.match(/(?<!\\)\$\d[^$\n]*(?<!\\)\$\d/)
  if (cur && !out.some((o) => o.kind === 'GARBLE')) {
    out.push({ kind: 'CURPAIR', detail: `currency amounts pairing as math: "${cur[0].slice(0, 50)}"` })
  }
  return out
}

/**
 * Markdown `content` fields render through FadeInText, which (a) applies
 * escapeCurrencyMath before remark-math sees the text, and (b) cannot pair a
 * `$` across a paragraph break. Everything else (question / options /
 * explanation / label / hint) renders through InlineLatex, which does NEITHER
 * — it pairs bare dollars across any distance with no currency rescue.
 * Auditing both the same way produces false positives on content and false
 * negatives nowhere, so model each path with its own rules.
 */
function validateForField(value: string, jsonPath: string, file: string): { kind: string; detail: string }[] {
  // Practice exams and FRQ pages render through renderRichText, which has its
  // own currency-prose guard and leaves uncompilable segments as literal text.
  // Dollar-pairing findings there are false positives (verified empirically by
  // running flagged strings through the real renderer); control characters
  // are still real.
  if (/-practice\/|-frq\//.test(file)) {
    return validate(value).filter((v) => v.kind === 'CTRL' || v.kind === 'KATEX')
  }
  if (!/\.content$/.test(jsonPath)) return validate(value)
  const rescued = escapeCurrencyMath(value)
  const out: { kind: string; detail: string }[] = []
  for (const para of rescued.split(/\n[ \t]*\n/)) out.push(...validate(para))
  return out
}

const seenObjects = new WeakSet<object>()
function walk(value: unknown, file: string, jsonPath: string, findings: Finding[]) {
  if (typeof value === 'string') {
    for (const v of validateForField(value, jsonPath, file)) {
      findings.push({
        file, path: jsonPath, kind: v.kind, detail: v.detail,
        excerpt: value.replace(/\n/g, ' ').slice(0, 140),
        ...(DUMP_VALUES ? { value } : {}),
      })
    }
    return
  }
  if (!value || typeof value !== 'object') return
  if (seenObjects.has(value)) return
  seenObjects.add(value)
  if (Array.isArray(value)) {
    value.forEach((v, i) => walk(v, file, `${jsonPath}[${i}]`, findings))
    return
  }
  for (const [k, v] of Object.entries(value)) {
    // Matcher fields, never rendered: rubric `keywords` are substring-matched
    // against the student's response, and `acceptableAnswers` are input-box
    // answer variants. "Fixing" them would break grading, not rendering.
    if (k === 'keywords' || k === 'acceptableAnswers') continue
    walk(v, file, `${jsonPath}.${k}`, findings)
  }
}

/** tsx CJS interop puts named exports under `default`. */
function unwrap(raw: Record<string, unknown>): Record<string, unknown> {
  const hasNamed = Object.keys(raw).some((k) => k !== 'default')
  return hasNamed ? raw : ((raw.default as Record<string, unknown>) ?? raw)
}

function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

async function main() {
  const [outFile, ...roots] = process.argv.slice(2)
  if (!outFile || roots.length === 0) {
    console.error('usage: npx tsx scripts/audit-rendering.ts <out.ndjson> <root...>')
    process.exit(1)
  }
  // Seeded randomness: template-generated pools produce the same questions on
  // every audit run, so before/after comparisons are meaningful.
  Math.random = mulberry32(42)

  const files: string[] = []
  const collect = (p: string) => {
    const st = fs.statSync(p)
    if (st.isDirectory()) {
      for (const e of fs.readdirSync(p)) collect(path.join(p, e))
    } else if (p.endsWith('.ts') && !p.endsWith('.d.ts')) files.push(p)
  }
  roots.forEach((r) => collect(path.resolve(r)))
  files.sort()

  const findings: Finding[] = []
  let loaded = 0, failed = 0, executed = 0
  for (const f of files) {
    const rel = path.relative(process.cwd(), f)
    let mod: Record<string, unknown>
    try {
      mod = unwrap((await import(f)) as Record<string, unknown>)
      loaded++
    } catch (e) {
      findings.push({ file: rel, path: '(import)', kind: 'IMPORT', detail: (e as Error).message.slice(0, 120), excerpt: '' })
      failed++
      continue
    }
    for (const [name, v] of Object.entries(mod)) {
      if (typeof v === 'function') continue
      walk(v, rel, name, findings)
    }
    // Execute exit-quiz generators so template-built questions are audited too.
    // index.ts is the orchestrator with the REVERSED signature (topicSlug,
    // count) — its content is the leaf pools, so skip executing it.
    if (rel.includes('exit-quizzes') && !rel.endsWith('index.ts') && typeof mod.generateExitQuiz === 'function') {
      const slug = path.basename(f, '.ts')
      try {
        Math.random = mulberry32(42)
        const qs = (mod.generateExitQuiz as (n: number, s?: string) => unknown[])(80, slug)
        walk(qs, rel, `generateExitQuiz('${slug}')`, findings)
        executed++
      } catch (e) {
        findings.push({ file: rel, path: `generateExitQuiz('${slug}')`, kind: 'GENFAIL', detail: (e as Error).message.slice(0, 120), excerpt: '' })
      }
    }
  }

  fs.writeFileSync(outFile, findings.map((f) => JSON.stringify(f)).join('\n') + (findings.length ? '\n' : ''))
  const byKind: Record<string, number> = {}
  findings.forEach((f) => { byKind[f.kind] = (byKind[f.kind] ?? 0) + 1 })
  console.log(`${files.length} files (${loaded} loaded, ${failed} failed, ${executed} generators executed)`)
  console.log('findings:', findings.length, JSON.stringify(byKind))
}

main().catch((e) => { console.error(e); process.exit(1) })
