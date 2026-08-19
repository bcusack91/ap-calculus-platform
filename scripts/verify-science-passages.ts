/**
 * Runtime gate for the MCAT science passage banks (chem-phys, bio-biochem,
 * psych-soc — passages AND discretes). Companion to verify-cars-passages.ts.
 * Checks, per bank:
 *  - structure: exactly 4 options, correctAnswer 0-3, non-empty stems/explanations
 *  - every $...$ / $$...$$ segment KaTeX-compiles (passage, figure, questions,
 *    options, explanations)
 *  - chart integrity: every yValues array (primary + comparisons) matches
 *    xValues length; annotation xIndex in range
 *  - duplicate stems within a section
 *  - explanations never reference options by letter/position (the runner does
 *    NOT shuffle, but authoring must stay reorder-safe)
 *  - passage word counts 120-450
 *  - key-position distribution (fails if any position exceeds 40% of a bank)
 *   npx tsx scripts/verify-science-passages.ts
 */
import katex from 'katex'

type Q = { question: string; options: string[]; correctAnswer: number; explanation: string }

const LETTER_REF = /\b(?:option|choice|answer)\s+[A-D]\b|\(option [A-D]\)/i

function katexErrors(text: string, where: string, errors: string[]) {
  for (const seg of text.match(/\$\$?[^$]+\$\$?/g) ?? []) {
    const inner = seg.replace(/^\$\$?|\$\$?$/g, '')
    try {
      katex.renderToString(inner, { throwOnError: true })
    } catch (e) {
      errors.push(`${where}: KaTeX "${inner.slice(0, 50)}" → ${(e as Error).message.slice(0, 70)}`)
    }
  }
}

async function main() {
  const { SECTION_PASSAGES, SECTION_DISCRETES } = await import('../src/data/mcat/passages')
  let errors: string[] = []
  let warnings: string[] = []
  let totalQ = 0

  for (const section of ['chem-phys', 'bio-biochem', 'psych-soc'] as const) {
    const passages = SECTION_PASSAGES[section]
    const discretes = SECTION_DISCRETES[section]
    const keyDist = [0, 0, 0, 0]
    const stems = new Map<string, string>()
    let sectionQ = 0

    for (const p of passages) {
      const words = p.passageText.split(/\s+/).length
      if (words < 120 || words > 450) warnings.push(`${p.id}: passage ${words} words (want 120-450)`)
      katexErrors(p.passageText, `${p.id} passage`, errors)
      if (p.figure) katexErrors(p.figure, `${p.id} figure`, errors)
      if (p.chart) {
        const n = p.chart.xValues.length
        if (p.chart.yValues.length !== n) errors.push(`${p.id} chart: yValues ${p.chart.yValues.length} vs xValues ${n}`)
        for (const s of p.chart.comparisonSeries ?? []) {
          if (s.yValues.length !== n) errors.push(`${p.id} chart series "${s.label}": ${s.yValues.length} vs ${n}`)
        }
        for (const a of p.chart.annotations ?? []) {
          if (a.xIndex < 0 || a.xIndex >= n) errors.push(`${p.id} chart annotation "${a.label}": xIndex ${a.xIndex} out of range`)
        }
      }
      if (p.questions.length < 4 || p.questions.length > 7) warnings.push(`${p.id}: ${p.questions.length} questions (want 4-7)`)
      checkQuestions(p.questions, p.id)
    }
    checkQuestions(discretes, `${section} discretes`)

    function checkQuestions(qs: Q[], where: string) {
      for (const [i, q] of qs.entries()) {
        const tag = `${where} q${i + 1}`
        if (!q.question?.trim()) errors.push(`${tag}: empty stem`)
        if (q.options.length !== 4) errors.push(`${tag}: ${q.options.length} options`)
        if (!(q.correctAnswer >= 0 && q.correctAnswer <= 3)) errors.push(`${tag}: correctAnswer ${q.correctAnswer}`)
        if (!q.explanation?.trim()) errors.push(`${tag}: empty explanation`)
        if (LETTER_REF.test(q.explanation)) errors.push(`${tag}: explanation references an option letter`)
        katexErrors(q.question, tag, errors)
        for (const o of q.options) katexErrors(o, tag, errors)
        katexErrors(q.explanation, tag, errors)
        const stemKey = q.question.trim().toLowerCase()
        const prev = stems.get(stemKey)
        if (prev) errors.push(`${tag}: duplicate stem (also in ${prev})`)
        else stems.set(stemKey, tag)
        keyDist[q.correctAnswer] = (keyDist[q.correctAnswer] ?? 0) + 1
        sectionQ++
      }
    }

    totalQ += sectionQ
    const worst = Math.max(...keyDist) / sectionQ
    const passageQ = passages.reduce((s, p) => s + p.questions.length, 0)
    console.log(
      `${section}: ${passages.length} passages, ${passageQ} passage-Q + ${discretes.length} discretes | keys ${keyDist.join('/')}` +
      ` (max ${(worst * 100).toFixed(0)}%)`,
    )
    if (worst > 0.4) errors.push(`${section}: key position ${keyDist.indexOf(Math.max(...keyDist))} holds ${(worst * 100).toFixed(0)}% of keys (max 40%)`)
  }

  if (warnings.length) console.log(`\nWARNINGS (${warnings.length}):\n` + warnings.map((w) => '  ' + w).join('\n'))
  if (errors.length) {
    console.error(`\nERRORS (${errors.length}):\n` + errors.map((e) => '  ' + e).join('\n'))
    process.exit(1)
  }
  console.log(`\n✓ ${totalQ} questions verified across 3 science banks.`)
}

main().catch((e) => { console.error(e); process.exit(1) })
