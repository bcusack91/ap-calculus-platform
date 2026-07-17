// Render-validate every $...$ span ADDED between the pre-wave baseline and HEAD.
// Usage: node katex_validate.mjs <repoRoot> <baseline>
import { execSync } from 'node:child_process'
import katex from 'katex'

const repo = process.argv[2]
const base = process.argv[3]
const files = execSync(`git diff --name-only ${base} HEAD -- src/data src/components`, { cwd: repo, maxBuffer: 1 << 26 })
  .toString().trim().split('\n').filter(Boolean)

const SPAN = /\$([^$\n]{1,200}?)\$/g
let total = 0, errors = 0, checkedFiles = 0
const errSamples = []

for (const f of files) {
  let oldText = ''
  try { oldText = execSync(`git show ${base}:"${f}"`, { cwd: repo, maxBuffer: 1 << 26 }).toString() } catch { /* new file */ }
  const newText = execSync(`git show HEAD:"${f}"`, { cwd: repo, maxBuffer: 1 << 26 }).toString()
  const oldSpans = new Set()
  for (const m of oldText.matchAll(SPAN)) oldSpans.add(m[1])
  checkedFiles++
  for (const m of newText.matchAll(SPAN)) {
    const raw = m[1]
    if (oldSpans.has(raw)) continue            // pre-existing span, not ours
    if (raw.includes('${')) continue           // template interpolation — runtime content
    if (/^\s*[\d,.]+\s*$/.test(raw)) continue  // likely currency pair, not math
    // TS source -> runtime string: unescape doubled backslashes and common escapes
    const runtime = raw.replace(/\\\\/g, '\\').replace(/\\'/g, "'").replace(/\\"/g, '"')
    total++
    try {
      katex.renderToString(runtime, { throwOnError: true, strict: false })
    } catch (e) {
      errors++
      if (errSamples.length < 25) errSamples.push({ file: f, span: raw.slice(0, 120), err: String(e.message).slice(0, 160) })
    }
  }
}
console.log(JSON.stringify({ checkedFiles, newSpansChecked: total, renderErrors: errors, errSamples }, null, 2))
