import { fileURLToPath } from 'node:url'
// Independent verification of every SAT exit-quiz generator: correctness + tiering.
import { readdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const DIR = fileURLToPath(new URL('../../', import.meta.url)) + 'src/data/exit-quizzes'
const files = readdirSync(DIR).filter(f => f.startsWith('sat-') && f.endsWith('.ts'))
const FILLER = /none of the above|none of these/i

// Numeric value ONLY for options we can evaluate unambiguously (number or simple fraction).
// Symbolic options (trig, vars, coords) -> null -> compared by exact string only.
function numericValue(raw) {
  let s = String(raw).replace(/\$/g, '').replace(/\s+/g, '').replace(/\\,/g, '')
  const mfrac = s.match(/^(-?)\\d?frac\{(-?\d+(?:\.\d+)?)\}\{(-?\d+(?:\.\d+)?)\}$/)
  if (mfrac) { const sign = mfrac[1]==='-'?-1:1; const d=parseFloat(mfrac[3]); if(d===0)return null; return sign*parseFloat(mfrac[2])/d }
  const mslash = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/)
  if (mslash) { const d=parseFloat(mslash[2]); if(d===0)return null; return parseFloat(mslash[1])/d }
  if (/^[+-]?\d+(?:\.\d+)?$/.test(s)) return parseFloat(s)
  return null
}

const TIERS = [undefined, 'easy', 'medium', 'hard']
let totalQ = 0
const problems = []
for (const file of files) {
  const slug = file.replace(/\.ts$/, '')
  let mod
  try { mod = await import(pathToFileURL(path.join(DIR, file)).href) }
  catch (e) { problems.push(`${slug}: IMPORT FAILED — ${String(e.message).slice(0,120)}`); continue }
  if (typeof mod.generateExitQuiz !== 'function') { problems.push(`${slug}: no generateExitQuiz export`); continue }
  for (const tier of TIERS) {
    for (let run = 0; run < 60; run++) {
      let qs
      try { qs = mod.generateExitQuiz(10, slug, tier) }
      catch (e) { problems.push(`${slug} [${tier}]: THREW — ${String(e.message).slice(0,140)}`); break }
      if (!Array.isArray(qs) || qs.length === 0) { problems.push(`${slug} [${tier}]: empty quiz`); break }
      for (const q of qs) {
        totalQ++
        const opts = q.options || []
        if (!Array.isArray(opts) || opts.length < 2) { problems.push(`${slug} ${q.id}: <2 options`); continue }
        if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex >= opts.length)
          { problems.push(`${slug} ${q.id}: correctIndex out of range`); continue }
        if (new Set(opts.map(String)).size !== opts.length)
          problems.push(`${slug} ${q.id}: duplicate option string — ${JSON.stringify(opts)}`)
        const seen = new Map()
        for (let i = 0; i < opts.length; i++) {
          const v = numericValue(opts[i]); if (v === null) continue
          for (const [w, os] of seen) if (Math.abs(v - w) < 1e-9) problems.push(`${slug} ${q.id}: same-VALUE — ${os} == ${opts[i]}`)
          seen.set(v, opts[i])
        }
        if (opts.some(o => FILLER.test(String(o)))) problems.push(`${slug} ${q.id}: filler — ${JSON.stringify(opts)}`)
        if (!['easy','medium','hard'].includes(q.difficulty)) problems.push(`${slug} ${q.id}: bad difficulty (${q.difficulty})`)
      }
    }
  }
}
const sig = p => p.replace(/—.*$/, '').replace(/\[[^\]]*\]/,'').trim()
const bySig = new Map()
for (const p of problems) { const k = sig(p); if (!bySig.has(k)) bySig.set(k, p) }
console.log(`Files: ${files.length}  Questions: ${totalQ}  Instances: ${problems.length}  Distinct: ${bySig.size}`)
for (const p of [...bySig.values()]) console.log('  X', p)
console.log(bySig.size === 0 ? 'ALL CLEAN' : 'PROBLEMS')
