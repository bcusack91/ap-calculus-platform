/**
 * Validate the ASVAB practice test (src/data/asvab-practice/config.ts) against
 * the CAT-ASVAB blueprint (asvab-pipeline/ASVAB-FACTS.md §1a) and the content
 * quality bar. The AP checker (check-ap-practice-form.ts) assumes an MCQ + FRQ
 * exam with CED units, so the ASVAB form has its own spec here.
 *
 *   npx tsx scripts/check-asvab-practice-form.ts [--file <path/to/config.ts>]
 *
 * FAIL (exit 1) / WARN:
 * - Sections: the 10 subtests in administration order (GS AR WK PC MK EI AI SI
 *   MC AO), the official scored item counts and minutes, total 197 minutes.
 * - Items: type mcq, exactly 4 distinct non-empty options, key in range, an
 *   explanation, 4 non-empty optionExplanations, no "option B"-style letter
 *   references (the runner shuffles), a `topic` from the subtest's own Category,
 *   a difficulty, the subtest's difficulty mix (15 items 5/6/4, 10 items 3/4/3)
 *   authored easy → hard.
 * - Figures: every figureHtml and SVG option passes the safe-SVG allowlist and
 *   draws in currentColor; every AO item has a figure box and four SVG options.
 * - Answer-length tell (text options only, raw string length as in
 *   scripts/audit-answer-length-tell.ts): key strictly longest ≤ 25% over the
 *   form and ≤ 27% per subtest (FAIL); strictly shortest > 32% (WARN).
 * - Overlap: no repeated stem inside the form; no stem identical or ≥ 80%
 *   word-trigram similar to an item in the other ASVAB banks (exit pools,
 *   entrance quizzes, competitive banks, diagnostic, daily question, lessons).
 *   AO stems share the official instruction wording, so AO is compared by figure.
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import type { FullLengthExamConfig, MCQItem } from '../src/components/FullLengthPracticeExam'
import { ASVAB_CATEGORIES } from '../src/lib/course-includes'
import { svgProblems } from '../src/lib/safe-svg'

const BLUEPRINT: { id: string; category: string; items: number; minutes: number }[] = [
  { id: 'gs', category: 'asvab-general-science', items: 15, minutes: 12 },
  { id: 'ar', category: 'asvab-arithmetic-reasoning', items: 15, minutes: 55 },
  { id: 'wk', category: 'asvab-word-knowledge', items: 15, minutes: 9 },
  { id: 'pc', category: 'asvab-paragraph-comprehension', items: 10, minutes: 27 },
  { id: 'mk', category: 'asvab-mathematics-knowledge', items: 15, minutes: 31 },
  { id: 'ei', category: 'asvab-electronics-information', items: 15, minutes: 10 },
  { id: 'ai', category: 'asvab-auto-information', items: 10, minutes: 7 },
  { id: 'si', category: 'asvab-shop-information', items: 10, minutes: 6 },
  { id: 'mc', category: 'asvab-mechanical-comprehension', items: 15, minutes: 22 },
  { id: 'ao', category: 'asvab-assembling-objects', items: 15, minutes: 18 },
]
const MIX: Record<number, [number, number, number]> = { 15: [5, 6, 4], 10: [3, 4, 3] }
const DIFF_RANK = { easy: 0, medium: 1, hard: 2 } as const

const OVERLAP_SOURCES = [
  'src/data/exit-quizzes/asvab',
  'src/data/competitive-questions/asvab',
  'src/data/asvab-diagnostic.ts',
  'src/data/asvab-daily-question.ts',
]
const OVERLAP_PREFIXED_DIRS = ['src/data/entrance-quizzes', 'src/data/interactive-lessons']

type Item = MCQItem & { difficulty?: string }

const fails: string[] = []
const warns: string[] = []
const fail = (m: string) => fails.push(m)
const warn = (m: string) => warns.push(m)
const pct = (x: number) => `${Math.round(x * 1000) / 10}%`
const isSvg = (s: string) => s.trim().startsWith('<svg')

const norm = (s: string) => s.toLowerCase().replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
const trigrams = (s: string) => {
  const w = norm(s).split(' ').filter(Boolean)
  const out = new Set<string>()
  for (let i = 0; i + 2 < w.length; i++) out.add(`${w[i]} ${w[i + 1]} ${w[i + 2]}`)
  return out
}
function similarity(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  return inter / Math.min(a.size, b.size)
}

/** Question-like string literals in a file (AST, so module-local pools count). */
function textsInFile(file: string): string[] {
  const src = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const out: string[] = []
  const visit = (node: ts.Node) => {
    if (ts.isPropertyAssignment(node) && (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name)) &&
      ['question', 'prompt', 'stem', 'stimulus', 'passage', 'text'].includes(node.name.text)) {
      const v = node.initializer
      if (ts.isStringLiteral(v) || ts.isNoSubstitutionTemplateLiteral(v)) out.push(v.text)
      else if (ts.isTemplateExpression(v)) out.push(v.head.text + v.templateSpans.map((s) => s.literal.text).join(' '))
    }
    ts.forEachChild(node, visit)
  }
  visit(src)
  return out
}

function overlapFiles(): string[] {
  const files: string[] = []
  for (const p of OVERLAP_SOURCES) {
    if (!fs.existsSync(p)) continue
    if (fs.statSync(p).isFile()) files.push(p)
    else for (const f of fs.readdirSync(p)) if (f.endsWith('.ts') && f !== 'types.ts') files.push(path.join(p, f))
  }
  for (const d of OVERLAP_PREFIXED_DIRS) {
    if (!fs.existsSync(d)) continue
    for (const f of fs.readdirSync(d)) if (f.startsWith('asvab-') && f.endsWith('.ts') && !f.includes(' 2.')) files.push(path.join(d, f))
  }
  return files
}

async function main() {
  const fileArg = process.argv.indexOf('--file')
  const file = fileArg > 0 ? process.argv[fileArg + 1] : 'src/data/asvab-practice/config.ts'
  const config: FullLengthExamConfig = (await import(path.resolve(file))).config
  console.log(`Checking ASVAB practice form — ${file}`)

  /* Sections */
  const ids = config.sections.map((s) => s.id)
  if (ids.join(',') !== BLUEPRINT.map((b) => b.id).join(',')) fail(`sections must be [${BLUEPRINT.map((b) => b.id).join(', ')}] in that order, got [${ids.join(', ')}]`)
  const total = config.sections.reduce((n, s) => n + s.timeLimitMinutes, 0)
  if (total !== 197) fail(`section minutes total ${total}, the CAT-ASVAB has 197`)
  if (config.totalTimeMinutes !== total) fail(`totalTimeMinutes ${config.totalTimeMinutes} ≠ section sum ${total}`)
  if (config.scaledExam !== 'asvab') warn('scaledExam is not "asvab": results will not show the AFQT estimate')

  const all: { sec: string; i: number; item: Item }[] = []
  let longestAll = 0
  let shortestAll = 0
  let textItemsAll = 0
  for (const bp of BLUEPRINT) {
    const sec = config.sections.find((s) => s.id === bp.id)
    if (!sec) continue
    const cat = ASVAB_CATEGORIES.find((c) => c.slug === bp.category)
    const topics = new Set(cat?.topics ?? [])
    if (sec.items.length !== bp.items) fail(`${bp.id}: ${sec.items.length} items, the CAT-ASVAB has ${bp.items}`)
    if (sec.timeLimitMinutes !== bp.minutes) fail(`${bp.id}: ${sec.timeLimitMinutes} min, the CAT-ASVAB has ${bp.minutes}`)
    const diffCount = [0, 0, 0]
    const topicCount = new Map<string, number>()
    let lastRank = 0
    let longest = 0
    let shortest = 0
    let textItems = 0
    sec.items.forEach((raw, i) => {
      const n = `${bp.id.toUpperCase()} ${i + 1}`
      if (raw.type !== 'mcq') {
        fail(`${n}: type ${raw.type}; every ASVAB item is multiple choice`)
        return
      }
      const q = raw as Item
      all.push({ sec: bp.id, i, item: q })
      if (q.options.length !== 4) fail(`${n}: ${q.options.length} options (the exam has 4)`)
      if (q.options.some((o) => !o.trim())) fail(`${n}: an empty option`)
      if (new Set(q.options.map((o) => o.trim().toLowerCase().replace(/\s+/g, ' '))).size !== q.options.length) fail(`${n}: duplicate options`)
      if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) fail(`${n}: key out of range`)
      if (!q.explanation?.trim()) fail(`${n}: no explanation`)
      if (q.optionExplanations?.length !== q.options.length || q.optionExplanations.some((e) => !e.trim())) fail(`${n}: needs one optionExplanation per option`)
      const prose = [q.explanation, ...(q.optionExplanations ?? [])].join(' ')
      if (/\b(option|choice|answer)\s+[A-D]\b|\([A-D]\)/.test(prose)) fail(`${n}: explanation names a choice by letter (options are shuffled)`)
      if (/all of the above|none of the above|both (a|b) and/i.test(q.options.join(' | '))) fail(`${n}: "all/none of the above"-style option`)
      if (!topics.has(q.topic)) fail(`${n}: topic "${q.topic}" is not a ${bp.category} topic`)
      topicCount.set(q.topic, (topicCount.get(q.topic) ?? 0) + 1)
      const d = q.difficulty as keyof typeof DIFF_RANK | undefined
      if (!d || !(d in DIFF_RANK)) fail(`${n}: difficulty missing or invalid`)
      else {
        diffCount[DIFF_RANK[d]]++
        if (DIFF_RANK[d] < lastRank) fail(`${n}: authored out of easy → hard order`)
        lastRank = Math.max(lastRank, DIFF_RANK[d])
      }
      for (const [k, s] of [['figure', q.figureHtml], ...q.options.map((o, oi) => [`option ${oi + 1}`, o])] as [string, string | undefined][]) {
        if (!s || !isSvg(s)) continue
        const probs = svgProblems(s)
        if (probs.length) fail(`${n} ${k}: unsafe SVG (${probs.join('; ')})`)
        if (/fill="(#000|#fff|black|white)"|stroke="(#000|#fff|black|white)"/i.test(s)) fail(`${n} ${k}: hard-coded black/white (use currentColor)`)
        if (/[$*|`\n]/.test(s)) fail(`${n} ${k}: SVG contains a character the rich-text renderer would mangle`)
      }
      if (bp.id === 'ao' && (!q.figureHtml || !q.options.every(isSvg))) fail(`${n}: AO items need a figure box and four SVG answer figures`)
      if (!q.options.some(isSvg)) {
        textItems++
        const lens = q.options.map((o) => o.length)
        const k = lens[q.correctAnswer]
        const others = lens.filter((_, j) => j !== q.correctAnswer)
        if (others.every((l) => k > l)) longest++
        if (others.every((l) => k < l)) shortest++
      }
    })
    const want = MIX[bp.items]
    if (want && diffCount.join('/') !== want.join('/')) fail(`${bp.id}: difficulty mix ${diffCount.join('/')} (easy/medium/hard), want ${want.join('/')}`)
    const topicLine = [...topicCount].map(([t, c]) => `${t.replace(/^asvab-/, '')} ${c}`).join(', ')
    const lenLine = textItems ? `key longest ${longest}/${textItems} (${pct(longest / textItems)}), shortest ${shortest}/${textItems} (${pct(shortest / textItems)})` : 'figure options only'
    console.log(`  ${bp.id.toUpperCase()}: ${sec.items.length} items, ${sec.timeLimitMinutes} min, mix ${diffCount.join('/')}, ${sec.items.filter((x) => x.type === 'mcq' && (x as Item).figureHtml).length} figures · ${topicLine} · ${lenLine}`)
    if (textItems && longest / textItems > 0.27) fail(`${bp.id}: key strictly longest in ${pct(longest / textItems)} of items (max ~25%)`)
    if (textItems && shortest / textItems > 0.32) warn(`${bp.id}: key strictly shortest in ${pct(shortest / textItems)} of items`)
    longestAll += longest
    shortestAll += shortest
    textItemsAll += textItems
  }
  if (textItemsAll) {
    const line = `form: key strictly longest ${pct(longestAll / textItemsAll)}, strictly shortest ${pct(shortestAll / textItemsAll)} of ${textItemsAll} text-option items`
    if (longestAll / textItemsAll > 0.25) fail(line)
    else console.log(`  ${line}`)
  }

  /* Overlap inside the form */
  const key = (q: Item) => norm(`${q.stimulus ?? ''} ${q.question}`) + (q.figureHtml ? `#${q.figureHtml.length}:${q.figureHtml.slice(-200)}` : '')
  const seen = new Map<string, string>()
  for (const { sec, i, item } of all) {
    const k = key(item)
    const id = `${sec.toUpperCase()} ${i + 1}`
    if (seen.has(k)) fail(`${id} repeats ${seen.get(k)} inside the form`)
    seen.set(k, id)
  }
  const figs = new Map<string, string>()
  for (const { sec, i, item } of all) for (const s of [item.figureHtml, ...item.options].filter((x): x is string => !!x && isSvg(x))) {
    const id = `${sec.toUpperCase()} ${i + 1}`
    if (figs.has(s) && figs.get(s) !== id) fail(`${id}: figure identical to one in ${figs.get(s)}`)
    figs.set(s, id)
  }

  /* Overlap against the other ASVAB banks */
  const corpus: { src: string; text: string; key: string; grams: Set<string> }[] = []
  const files = overlapFiles()
  for (const f of files) for (const text of textsInFile(f)) corpus.push({ src: f, text, key: norm(text), grams: trigrams(text) })
  const exact = new Map<string, string>()
  for (const c of corpus) if (c.key.length > 20) exact.set(c.key, c.src)
  let hits = 0
  for (const { sec, i, item } of all) {
    if (sec === 'ao') continue
    const id = `${sec.toUpperCase()} ${i + 1}`
    const k = norm(item.question)
    const e = exact.get(k)
    if (e && k.length > 20) {
      fail(`${id}: stem identical to an item in ${e}`)
      hits++
      continue
    }
    const g = trigrams(item.question)
    if (g.size < 6) continue
    const hit = corpus.find((c) => c.grams.size >= 6 && similarity(g, c.grams) >= 0.8)
    if (hit) {
      fail(`${id}: near-duplicate (≥80% shared word trigrams) of an item in ${hit.src}: "${hit.text.slice(0, 90)}"`)
      hits++
    }
    if (item.stimulus) {
      const sg = trigrams(item.stimulus)
      const sh = corpus.find((c) => c.grams.size >= 12 && similarity(sg, c.grams) >= 0.6)
      if (sh) warn(`${id}: passage shares ≥60% of its word trigrams with a text in ${sh.src}`)
    }
  }
  // Raw-text probes (catches banks built with positional helpers, e.g. the diagnostic's q(...) calls):
  // the WK target word as "<word> most nearly means", a passage's first 12 words, or the whole stem.
  const rawNorm = (t: string) => t.toLowerCase().replace(/\\\\/g, '\\').replace(/[*_`$\\]/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
  const raw = files.map((f) => ({ f, text: rawNorm(fs.readFileSync(f, 'utf8')) }))
  for (const { sec, i, item } of all) {
    if (sec === 'ao') continue
    const id = `${sec.toUpperCase()} ${i + 1}`
    const probes: string[] = []
    const word = sec === 'wk' ? (item.question.match(/\*\*([^*]+)\*\*/) ?? [])[1] : undefined
    if (word) probes.push(`${rawNorm(word)} most nearly means`)
    else if (item.stimulus) probes.push(rawNorm(item.stimulus).split(' ').slice(0, 12).join(' '))
    else probes.push(rawNorm(item.question))
    for (const pr of probes) {
      if (pr.length < 12) continue
      const hit = raw.find((r) => r.text.includes(pr))
      if (hit) {
        fail(`${id}: "${pr}" also appears in ${hit.f}`)
        hits++
      }
    }
  }
  console.log(`  overlap: ${hits} hits against ${corpus.length} texts in ${files.length} ASVAB files (trigram + raw-text probes)`)

  for (const w of warns) console.log(`WARN  ${w}`)
  for (const f of fails) console.log(`FAIL  ${f}`)
  console.log(fails.length ? `\n${fails.length} failure(s), ${warns.length} warning(s)` : `\nOK — 0 failures, ${warns.length} warning(s)`)
  process.exit(fails.length ? 1 : 0)
}

main().catch((e) => {
  console.error(e)
  process.exit(2)
})
