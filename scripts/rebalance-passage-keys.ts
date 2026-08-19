/**
 * Rebalance answer-key positions in the MCAT science passage banks. The
 * passage runner does NOT shuffle options, and authoring skew left 58-85% of
 * keys at index 1 (always-pick-the-2nd scored ~85% on bio-biochem). This
 * codemod ROTATES each eligible question's options so keys spread evenly.
 *
 * A question is SKIPPED (its key stays put) when reordering could break it:
 *  - numeric/monotonic option sets (ascending order is an exam convention;
 *    the key's position is dictated by its magnitude), detected as >=3 options
 *    with leading numbers in monotonic order;
 *  - any explanation or option containing a bare capital A-D token that is not
 *    a whitelisted named entity ("Condition A", "vitamin D", ...) — it might
 *    reference an option position.
 *
 * Source edits are content-keyed: each question is located by its exact stem,
 * its options array is re-emitted with elements' RAW source text in the new
 * order (so escaping/formatting survive), and correctAnswer is rewritten.
 * After editing, a runtime re-import asserts every stem still maps to the
 * SAME correct option TEXT — a rotation can move a key but never change it.
 *   [DRY_RUN=1] npx tsx scripts/rebalance-passage-keys.ts
 */
import fs from 'fs'
import path from 'path'

const DRY = !!process.env.DRY_RUN
const FILES = ['chem-phys.ts', 'bio-biochem.ts', 'psych-soc.ts']
const DIR = path.join(__dirname, '..', 'src', 'data', 'mcat', 'passages')

type Q = { question: string; options: string[]; correctAnswer: number; explanation: string }

const SAFE_BEFORE = /(?:condition|conditions|experiment|compound|group|groups|form|strain|subject|type|vitamin|hepatitis|part|phase|site|series|solution|solutions|curve|panel|sample|samples|trial|molecule|protein|helix|appendix|section|table|figure|and|или)\s$/i

/**
 * True if text may reference an option by position. Bare capital "A" is almost
 * always the article, so it only counts when parenthesized ("(A)"); B/C/D
 * count as bare words unless preceded by a whitelisted named-entity noun
 * ("Condition B", "vitamin D") or inside a $math$ segment.
 */
function hasPositionRef(text: string): boolean {
  if (/\(\s*[A-D]\s*[,)]/.test(text)) return true
  const re = /\b([B-D])\b/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    const before = text.slice(Math.max(0, m.index - 14), m.index)
    if (SAFE_BEFORE.test(before)) continue
    const dollarsBefore = (text.slice(0, m.index).match(/\$/g) ?? []).length
    if (dollarsBefore % 2 === 1) continue
    return true
  }
  return false
}

/** >=3 leading numbers in monotonic order ⇒ ordered numeric set, don't rotate. */
function isMonotonicNumeric(options: string[]): boolean {
  const nums = options.map((o) => {
    const m = o.replace(/^[\s$~≈]*/, '').match(/^[+-]?\d+(?:[.,]\d+)?(?:\s*[×x]\s*10\^?\{?-?\d+\}?)?/)
    if (!m) return null
    const base = parseFloat(m[0].replace(',', ''))
    const exp = m[0].match(/10\^?\{?(-?\d+)\}?/)
    return exp ? base * Math.pow(10, parseInt(exp[1], 10)) : base
  })
  const present = nums.filter((n): n is number => n !== null)
  if (present.length < 3 || present.length !== options.length) return false
  const asc = present.every((n, i) => i === 0 || n >= present[i - 1])
  const desc = present.every((n, i) => i === 0 || n <= present[i - 1])
  return asc || desc
}

/** Quote-aware split of the inside of an options array into raw element texts. */
function splitElements(inner: string): string[] {
  const els: string[] = []
  let depth = 0, quote: string | null = null, start = 0
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i]
    if (quote) {
      if (c === '\\') i++
      else if (c === quote) quote = null
    } else if (c === "'" || c === '"' || c === '`') quote = c
    else if (c === '[' || c === '(' || c === '{') depth++
    else if (c === ']' || c === ')' || c === '}') depth--
    else if (c === ',' && depth === 0) {
      els.push(inner.slice(start, i))
      start = i + 1
    }
  }
  const last = inner.slice(start)
  if (last.trim()) els.push(last)
  return els
}

const SNAPSHOT = path.join(__dirname, '_rebalance-key-snapshot.json')

async function loadBanks() {
  const mod = await import('../src/data/mcat/passages')
  const banks: Record<string, Q[]> = {}
  for (const section of ['chem-phys', 'bio-biochem', 'psych-soc'] as const) {
    banks[section] = [
      ...mod.SECTION_PASSAGES[section].flatMap((p) => p.questions),
      ...mod.SECTION_DISCRETES[section],
    ]
  }
  return banks
}

async function postCheck() {
  const before = new Map<string, string>(JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8')))
  const banks = await loadBanks()
  let mismatches = 0, checked = 0
  for (const qs of Object.values(banks)) {
    for (const q of qs) {
      checked++
      const expected = before.get(q.question)
      if (expected === undefined) { console.error(`POST-CHECK: unknown stem ${q.question.slice(0, 50)}`); mismatches++; continue }
      if (q.options[q.correctAnswer] !== expected) {
        console.error(`POST-CHECK MISMATCH: ${q.question.slice(0, 60)}\n  expected key text: ${expected}\n  now: ${q.options[q.correctAnswer]}`)
        mismatches++
      }
    }
  }
  console.log(mismatches === 0 ? `✓ post-check: all ${checked} keys map to the same option text` : `✗ ${mismatches} MISMATCHES — REVERT`)
  if (mismatches > 0) process.exit(1)
}

async function main() {
  if (process.env.CHECK) return postCheck()

  const banks = await loadBanks()
  const before: [string, string][] = []
  for (const qs of Object.values(banks)) for (const q of qs) before.push([q.question, q.options[q.correctAnswer]])
  fs.writeFileSync(SNAPSHOT, JSON.stringify(before))

  for (const [fi, file] of FILES.entries()) {
    const section = (['chem-phys', 'bio-biochem', 'psych-soc'] as const)[fi]
    let src = fs.readFileSync(path.join(DIR, file), 'utf8')
    const qs = banks[section]

    // Fixed contributions from questions we won't touch, then greedy targets.
    const counts = [0, 0, 0, 0]
    const plan = new Map<string, number>() // stem -> target index
    const protectedStems = new Set<string>()
    for (const q of qs) {
      const positionRisk = hasPositionRef(q.explanation) || q.options.some(hasPositionRef)
      if (positionRisk || isMonotonicNumeric(q.options)) {
        counts[q.correctAnswer]++
        protectedStems.add(q.question)
      }
    }
    for (const q of qs) {
      if (plan.has(q.question) || protectedStems.has(q.question)) continue
      const target = counts.indexOf(Math.min(...counts))
      plan.set(q.question, target)
      counts[target]++
    }

    let edited = 0
    for (const q of qs) {
      const target = plan.get(q.question)
      if (target === undefined || target === q.correctAnswer) continue
      // locate this question block by its exact stem (JSON-escape to source form)
      const stemSource = JSON.stringify(q.question).slice(1, -1).replace(/\\"/g, '"')
      let idx = src.indexOf(stemSource)
      if (idx === -1) {
        // authors used single quotes: apostrophes unescaped, single quotes escaped
        const alt = stemSource.replace(/'/g, "\\'")
        idx = src.indexOf(alt)
        if (idx === -1) { console.log(`  MISS (stem not found verbatim): ${q.question.slice(0, 50)}`); continue }
      }
      const optIdx = src.indexOf('options:', idx)
      const open = src.indexOf('[', optIdx)
      // bracket-match to the closing ]
      let depth = 0, close = -1, quote: string | null = null
      for (let i = open; i < src.length; i++) {
        const c = src[i]
        if (quote) { if (c === '\\') i++; else if (c === quote) quote = null; continue }
        if (c === "'" || c === '"' || c === '`') quote = c
        else if (c === '[') depth++
        else if (c === ']') { depth--; if (depth === 0) { close = i; break } }
      }
      if (close === -1) { console.log(`  MISS (no options array): ${q.question.slice(0, 50)}`); continue }
      const inner = src.slice(open + 1, close)
      const els = splitElements(inner)
      if (els.length !== 4) { console.log(`  MISS (${els.length} elements): ${q.question.slice(0, 50)}`); continue }
      // rotate so the correct element lands on `target`, preserving cyclic order
      const shift = (target - q.correctAnswer + 4) % 4
      const rotated = els.map((_, i) => els[(((i - shift) % 4) + 4) % 4])
      // preserve the array's original single/multi-line style via el whitespace
      const newInner = rotated.map((e, i) => (i === 0 ? e.replace(/^\s*\n/, '\n') : e)).join(',')
      const caIdx = src.indexOf('correctAnswer:', close)
      const caMatch = /correctAnswer:\s*\d/.exec(src.slice(caIdx, caIdx + 30))
      if (caIdx === -1 || !caMatch) { console.log(`  MISS (no correctAnswer): ${q.question.slice(0, 50)}`); continue }
      src = src.slice(0, open + 1) + newInner + src.slice(close, caIdx) +
        `correctAnswer: ${target}` + src.slice(caIdx + caMatch[0].length)
      edited++
    }

    console.log(`${file}: rotated ${edited}, kept ${qs.length - edited} (${protectedStems.size} protected: numeric-ordered or letter-ref)`)
    if (!DRY) fs.writeFileSync(path.join(DIR, file), src)
  }

  if (DRY) console.log('[DRY RUN] no files written')
  else console.log('Now run: CHECK=1 npx tsx scripts/rebalance-passage-keys.ts')
}

main().catch((e) => { console.error(e); process.exit(1) })
