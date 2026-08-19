/**
 * Convert agent-authored MCAT science passage JSON seeds into TS leaf files.
 * Reads passages-*.json from a directory, gates EVERY passage (id prefix,
 * 4-option discipline, key range, KaTeX compile of every text field, chart
 * series/annotation integrity, no letter-position references, word counts,
 * duplicate ids/stems vs the seeds AND the live banks), then emits
 *   src/data/mcat/passages/{chem-phys-2,bio-biochem-2,psych-soc-2}.ts
 * Rejecting a passage aborts the emit — fix the seed and re-run.
 *   npx tsx scripts/import-passage-seeds.ts <dir>
 */
import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import katex from 'katex'

type Passage = {
  id: string
  section: string
  discipline: string
  title: string
  passageText: string
  figure?: string
  chart?: {
    title: string; kind?: string; xLabel: string; yLabel: string
    xValues: unknown[]; yValues: number[]; seriesLabel: string
    comparisonSeries?: { label: string; yValues: number[] }[]
    annotations?: { xIndex: number; label: string }[]
  }
  questions: { question: string; options: string[]; correctAnswer: number; explanation: string; skill?: string }[]
  needsReview?: boolean
}

const SECTIONS: Record<string, { file: string; constName: string; idPrefix: string }> = {
  'chem-phys': { file: 'chem-phys-2.ts', constName: 'CHEM_PHYS_PASSAGES_2', idPrefix: 'cp2-' },
  'bio-biochem': { file: 'bio-biochem-2.ts', constName: 'BIO_BIOCHEM_PASSAGES_2', idPrefix: 'bb2-' },
  'psych-soc': { file: 'psych-soc-2.ts', constName: 'PSYCH_SOC_PASSAGES_2', idPrefix: 'ps2-' },
}

const LETTER_REF = /\b(?:option|choice|answer)\s+[A-D]\b|\(\s*[A-D]\s*[,)]|\b[B-D] is (?:wrong|incorrect)\b|\b[B-D] describes\b/

function katexCheck(text: string, where: string, errors: string[]) {
  for (const seg of text.match(/\$\$?[^$]+\$\$?/g) ?? []) {
    const inner = seg.replace(/^\$\$?|\$\$?$/g, '')
    try { katex.renderToString(inner, { throwOnError: true }) }
    catch (e) { errors.push(`${where}: KaTeX "${inner.slice(0, 40)}" → ${(e as Error).message.slice(0, 60)}`) }
  }
}

async function main() {
  const dir = process.argv[2]
  if (!dir) { console.error('usage: npx tsx scripts/import-passage-seeds.ts <dir>'); process.exit(1) }
  const files = globSync(`${dir}/passages-*.json`).sort()
  console.log('files:', files.map((f) => path.basename(f)).join(', ') || 'NONE')

  const live = await import('../src/data/mcat/passages')
  const liveStems = new Set<string>()
  const liveIds = new Set<string>()
  for (const p of live.ALL_MCAT_PASSAGES) {
    liveIds.add(p.id)
    for (const q of p.questions) liveStems.add(q.question.trim().toLowerCase())
  }

  const bySection: Record<string, Passage[]> = { 'chem-phys': [], 'bio-biochem': [], 'psych-soc': [] }
  const errors: string[] = []
  const seenIds = new Set<string>()
  const seenStems = new Set<string>()
  const keyDist: Record<string, number[]> = { 'chem-phys': [0, 0, 0, 0], 'bio-biochem': [0, 0, 0, 0], 'psych-soc': [0, 0, 0, 0] }

  for (const file of files) {
    let passages: Passage[]
    try { passages = JSON.parse(fs.readFileSync(file, 'utf8')) }
    catch (e) { errors.push(`${path.basename(file)}: JSON parse failed — ${(e as Error).message.slice(0, 80)}`); continue }
    for (const p of passages) {
      const spec = SECTIONS[p.section]
      const tag = `${path.basename(file)} ${p.id}`
      if (!spec) { errors.push(`${tag}: unknown section ${p.section}`); continue }
      if (!p.id.startsWith(spec.idPrefix)) errors.push(`${tag}: id must start with ${spec.idPrefix}`)
      if (seenIds.has(p.id) || liveIds.has(p.id)) errors.push(`${tag}: duplicate id`)
      seenIds.add(p.id)
      if (p.needsReview !== true) errors.push(`${tag}: needsReview must be true`)
      const words = p.passageText.split(/\s+/).length
      if (words < 120 || words > 450) errors.push(`${tag}: passage ${words} words (want 120-450)`)
      katexCheck(p.passageText, `${tag} passage`, errors)
      if (p.figure) katexCheck(p.figure, `${tag} figure`, errors)
      if (p.chart) {
        const n = p.chart.xValues?.length ?? 0
        if (!n || p.chart.yValues?.length !== n) errors.push(`${tag} chart: yValues/xValues length mismatch`)
        for (const s of p.chart.comparisonSeries ?? []) if (s.yValues?.length !== n) errors.push(`${tag} chart series "${s.label}": length mismatch`)
        for (const a of p.chart.annotations ?? []) if (a.xIndex < 0 || a.xIndex >= n) errors.push(`${tag} chart annotation: xIndex out of range`)
      }
      if (!p.questions?.length || p.questions.length < 4 || p.questions.length > 7) errors.push(`${tag}: ${p.questions?.length ?? 0} questions (want 4-7)`)
      for (const [i, q] of (p.questions ?? []).entries()) {
        const qt = `${tag} q${i + 1}`
        if (q.options?.length !== 4) errors.push(`${qt}: ${q.options?.length} options`)
        if (!(q.correctAnswer >= 0 && q.correctAnswer <= 3)) errors.push(`${qt}: correctAnswer ${q.correctAnswer}`)
        if (!q.explanation?.trim()) errors.push(`${qt}: empty explanation`)
        if (LETTER_REF.test(q.explanation ?? '')) errors.push(`${qt}: explanation references an option letter/position`)
        katexCheck(q.question ?? '', qt, errors)
        for (const o of q.options ?? []) katexCheck(o, qt, errors)
        katexCheck(q.explanation ?? '', qt, errors)
        const stem = (q.question ?? '').trim().toLowerCase()
        if (seenStems.has(stem) || liveStems.has(stem)) errors.push(`${qt}: duplicate stem`)
        seenStems.add(stem)
        if (q.correctAnswer >= 0 && q.correctAnswer <= 3) keyDist[p.section][q.correctAnswer]++
      }
      bySection[p.section].push(p)
    }
  }

  for (const [section, dist] of Object.entries(keyDist)) {
    const total = dist.reduce((a, b) => a + b, 0)
    if (!total) continue
    const worst = Math.max(...dist) / total
    console.log(`${section}: ${bySection[section].length} passages, ${total} Qs, keys ${dist.join('/')}`)
    if (worst > 0.35) errors.push(`${section}: new-passage key position holds ${(worst * 100).toFixed(0)}% (max 35%)`)
  }

  if (errors.length) {
    console.error(`\nREJECTED (${errors.length} errors):\n` + errors.map((e) => '  ' + e).join('\n'))
    process.exit(1)
  }

  const outDir = path.join(__dirname, '..', 'src', 'data', 'mcat', 'passages')
  for (const [section, spec] of Object.entries(SECTIONS)) {
    const passages = bySection[section].sort((a, b) => a.id.localeCompare(b.id))
    if (!passages.length) { console.log(`${section}: no passages — skipping emit`); continue }
    const body = JSON.stringify(passages, null, 2)
    const src = `/**
 * MCAT ${section} passage bank — expansion wave 2 (agent-authored, every
 * passage carries needsReview: true pending SME review; gated by
 * scripts/import-passage-seeds.ts: KaTeX compile, chart integrity, key
 * balance, no letter-position references, dup checks vs the live banks).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const ${spec.constName}: MCATPassage[] = ${body}
`
    fs.writeFileSync(path.join(outDir, spec.file), src)
    console.log(`wrote ${spec.file} (${passages.length} passages)`)
  }
}

main().catch((e) => { console.error(e); process.exit(1) })
