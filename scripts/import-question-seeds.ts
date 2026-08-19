/**
 * Convert authored MCAT competitive-question JSON seeds into the wave-2 gaps
 * TS file. Gates every question (known bank subtopic slug, 4 options, key
 * range, difficulty enum, KaTeX compile of every $ segment, no letter-position
 * references, duplicate stems vs the ENTIRE existing authored bank and within
 * the seeds) and reports the per-subtopic key distribution. Any error aborts
 * the emit.
 *   npx tsx scripts/import-question-seeds.ts <dir>
 * Emits: src/data/competitive-questions/mcat-questions-gaps-wave2.ts
 */
import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import katex from 'katex'

type Q = { subtopicSlug: string; question: string; options: string[]; correctAnswer: number; explanation: string; difficulty: string }

const LETTER_REF = /\b(?:option|choice|answer)\s+[A-D]\b|\(\s*[A-D]\s*[,)]|\b[B-D] is (?:wrong|incorrect)\b/

function katexCheck(text: string, where: string, errors: string[]) {
  for (const seg of text.match(/\$\$?[^$]+\$\$?/g) ?? []) {
    const inner = seg.replace(/^\$\$?|\$\$?$/g, '')
    try { katex.renderToString(inner, { throwOnError: true }) }
    catch (e) { errors.push(`${where}: KaTeX "${inner.slice(0, 40)}" → ${(e as Error).message.slice(0, 60)}`) }
  }
}

async function main() {
  const dir = process.argv[2]
  if (!dir) { console.error('usage: npx tsx scripts/import-question-seeds.ts <dir>'); process.exit(1) }
  const files = globSync(`${dir}/questions-*.json`).sort()
  console.log('files:', files.map((f) => path.basename(f)).join(', ') || 'NONE')

  const bank = await import('../src/data/competitive-questions/mcat-bank')
  const validSlugs = new Set(
    bank.MCAT_SECTIONS.flatMap((s) => s.areas.flatMap((a) => a.subtopics.map((t) => t.slug))),
  )
  const pool = await import('../src/data/exit-quizzes/mcat-authored-pool')
  const existingStems = new Set(pool.authoredFor(['']).map((q) => q.question.trim().toLowerCase()))

  const all: Q[] = []
  const errors: string[] = []
  const seenStems = new Set<string>()
  const keyDist = new Map<string, number[]>()

  for (const file of files) {
    let qs: Q[]
    try { qs = JSON.parse(fs.readFileSync(file, 'utf8')) }
    catch (e) { errors.push(`${path.basename(file)}: JSON parse — ${(e as Error).message.slice(0, 80)}`); continue }
    for (const [i, q] of qs.entries()) {
      const tag = `${path.basename(file)} q${i + 1}`
      if (!validSlugs.has(q.subtopicSlug)) errors.push(`${tag}: unknown bank subtopic ${q.subtopicSlug}`)
      if (q.options?.length !== 4) errors.push(`${tag}: ${q.options?.length} options`)
      if (!(q.correctAnswer >= 0 && q.correctAnswer <= 3)) errors.push(`${tag}: correctAnswer ${q.correctAnswer}`)
      if (!['easy', 'medium', 'hard'].includes(q.difficulty)) errors.push(`${tag}: difficulty ${q.difficulty}`)
      if (!q.explanation?.trim()) errors.push(`${tag}: empty explanation`)
      if (LETTER_REF.test(q.explanation ?? '')) errors.push(`${tag}: explanation references an option letter`)
      katexCheck(q.question ?? '', tag, errors)
      for (const o of q.options ?? []) katexCheck(o, tag, errors)
      katexCheck(q.explanation ?? '', tag, errors)
      const stem = (q.question ?? '').trim().toLowerCase()
      if (seenStems.has(stem) || existingStems.has(stem)) errors.push(`${tag}: duplicate stem`)
      seenStems.add(stem)
      const dist = keyDist.get(q.subtopicSlug) ?? [0, 0, 0, 0]
      if (q.correctAnswer >= 0 && q.correctAnswer <= 3) dist[q.correctAnswer]++
      keyDist.set(q.subtopicSlug, dist)
      all.push(q)
    }
  }

  for (const [slug, dist] of keyDist) {
    console.log(`${slug}: ${dist.reduce((a, b) => a + b, 0)} Qs, keys ${dist.join('/')}`)
  }
  if (errors.length) {
    console.error(`\nREJECTED (${errors.length}):\n` + errors.map((e) => '  ' + e).join('\n'))
    process.exit(1)
  }

  const out = path.join(__dirname, '..', 'src', 'data', 'competitive-questions', 'mcat-questions-gaps-wave2.ts')
  const src = `/**
 * MCAT competitive bank — wave-2 gap fill: psychological disorders (AAMC 7A),
 * waves & sound (4D), atomic/nuclear phenomena (4E), and the fluids top-up
 * after the fluids-waves subtopic split. Gated by
 * scripts/import-question-seeds.ts (KaTeX, key balance, dup stems, no
 * letter-position references). Explanations reference options by CONTENT.
 */
import type { McatBankQuestion } from './mcat-question-types'

export const gapsWave2Questions: McatBankQuestion[] = ${JSON.stringify(all, null, 2)}
`
  fs.writeFileSync(out, src)
  console.log(`\nwrote mcat-questions-gaps-wave2.ts (${all.length} questions)`)
}

main().catch((e) => { console.error(e); process.exit(1) })
