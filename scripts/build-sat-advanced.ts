/**
 * Assemble the SAT 700-800 advanced track from agent-authored artifacts:
 *  1. Verify the 26 x 3 lesson files (import each, check topicSlug, section
 *     shapes, quiz validity, >=8 quiz questions per bundle).
 *  2. Generate src/data/interactive-lessons/registry-sat-advanced.ts.
 *  3. Assemble prisma/sat-advanced-track-data.json (topic titles + summaries
 *     for the DB seed) and prisma/card-seeds/cards-sat-advanced.json (the
 *     trap-pattern flashcards) from the per-topic scratchpad JSONs.
 * Any verification error aborts before writing outputs.
 *   npx tsx scripts/build-sat-advanced.ts <scratchpad-satadv-dir>
 */
import fs from 'fs'
import path from 'path'
import { inspect } from './check-lesson-math'

/** Flag prose swallowed by `$...$` pairs (bare currency is the usual cause). */
function mathErrors(label: string, value: string): string[] {
  const { garbled, dangling } = inspect(value)
  const out = garbled.map((g) => `${label}: prose inside math span "${g.slice(0, 60)}"`)
  if (dangling) out.push(`${label}: unpaired $ (write currency as $\\$5$)`)
  return out
}

const BASE_SLUGS = [
  'sat-vocabulary-context', 'sat-central-ideas-details', 'sat-command-evidence', 'sat-reading-comprehension',
  'sat-punctuation', 'sat-sentence-structure', 'sat-transitions-organization', 'sat-effective-language-use',
  'sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-linear-inequalities-graphs',
  'sat-ratios-proportions-percents', 'sat-functions', 'sat-nonlinear-equations-functions', 'sat-quadratic-equations',
  'sat-exponential-functions', 'sat-polynomials-factoring', 'sat-polynomial-rational-expressions',
  'sat-exponents-radicals', 'sat-geometry-basics', 'sat-geometry-trigonometry', 'sat-circles',
  'sat-statistics-data-interpretation', 'sat-data-statistics', 'sat-scatterplots-line-fit', 'sat-probability-two-way-tables',
]
const PART_TITLES = ['The 700-800 Patterns', 'Traps & Speed', 'Timed Drill']

type Section = { id?: string; type?: string; content?: string; question?: string; options?: string[]; correctAnswer?: number; explanation?: string }

async function main() {
  const jsonDir = process.argv[2]
  if (!jsonDir) { console.error('usage: npx tsx scripts/build-sat-advanced.ts <satadv-json-dir>'); process.exit(1) }
  const lessonsDir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons')
  const errors: string[] = []
  const trackData: { slug: string; title: string; summary: string }[] = []
  const cards: { topicSlug: string; front: string; back: string }[] = []

  for (const base of BASE_SLUGS) {
    const short = base.replace(/^sat-/, '')
    const advSlug = `${base}-advanced`

    // 1. lesson files
    let quizCount = 0
    for (let part = 1; part <= 3; part++) {
      const file = `sat-adv-${short}-part${part}`
      const full = path.join(lessonsDir, `${file}.ts`)
      if (!fs.existsSync(full)) { errors.push(`${advSlug}: missing ${file}.ts`); continue }
      let mod: { lessonData?: { topicSlug?: string; sections?: Section[] } }
      try { mod = await import(full) } catch (e) { errors.push(`${file}: import failed — ${(e as Error).message.slice(0, 80)}`); continue }
      const data = mod.lessonData
      if (!data) { errors.push(`${file}: no lessonData export`); continue }
      if (data.topicSlug !== advSlug) errors.push(`${file}: topicSlug ${data.topicSlug} !== ${advSlug}`)
      if (!Array.isArray(data.sections) || data.sections.length === 0) { errors.push(`${file}: empty sections`); continue }
      const ids = new Set<string>()
      for (const s of data.sections) {
        if (s.id) { if (ids.has(s.id)) errors.push(`${file}: duplicate section id ${s.id}`); ids.add(s.id) }
        if (s.type === 'quiz') {
          quizCount++
          if (!s.question?.trim()) errors.push(`${file}: quiz missing question`)
          if (!Array.isArray(s.options) || s.options.length !== 4) errors.push(`${file}: quiz needs 4 options (${s.id})`)
          if (typeof s.correctAnswer !== 'number' || s.correctAnswer < 0 || s.correctAnswer > 3) errors.push(`${file}: bad correctAnswer (${s.id})`)
          if (!s.explanation?.trim()) errors.push(`${file}: quiz missing explanation (${s.id})`)
        } else if (s.type === 'text') {
          if (!s.content?.trim()) errors.push(`${file}: empty text section (${s.id})`)
        } else {
          errors.push(`${file}: unexpected section type ${s.type} (${s.id})`)
        }
        for (const [fieldName, v] of [['content', s.content], ['question', s.question], ['explanation', s.explanation]] as [string, string | undefined][]) {
          if (typeof v === 'string') errors.push(...mathErrors(`${file} ${s.id} ${fieldName}`, v))
        }
        s.options?.forEach((o, oi) => errors.push(...mathErrors(`${file} ${s.id} option[${oi}]`, o)))
      }
    }
    if (quizCount < 8) errors.push(`${advSlug}: only ${quizCount} quiz questions (need >=8)`)

    // 2. per-topic JSON (summary + cards)
    const jsonPath = path.join(jsonDir, `${short}.json`)
    if (!fs.existsSync(jsonPath)) { errors.push(`${advSlug}: missing ${short}.json`); continue }
    try {
      const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
      if (meta.topicSlug !== advSlug) errors.push(`${short}.json: topicSlug ${meta.topicSlug} !== ${advSlug}`)
      if (typeof meta.title !== 'string' || !meta.title) errors.push(`${short}.json: missing title`)
      const words = String(meta.summary ?? '').split(/\s+/).length
      if (words < 80) errors.push(`${short}.json: summary too short (${words} words)`)
      errors.push(...mathErrors(`${short}.json summary`, String(meta.summary ?? '')))
      if (!Array.isArray(meta.flashcards) || meta.flashcards.length < 8) errors.push(`${short}.json: needs >=8 flashcards (${meta.flashcards?.length ?? 0})`)
      for (const [i, c] of (meta.flashcards ?? []).entries()) {
        const front = String(c.front ?? '').trim(), back = String(c.back ?? '').trim()
        if (front.length < 8 || front.length > 400) errors.push(`${short}.json card ${i + 1}: front length ${front.length}`)
        if (back.length < 3 || back.length > 700) errors.push(`${short}.json card ${i + 1}: back length ${back.length}`)
        errors.push(...mathErrors(`${short}.json card ${i + 1} front`, front))
        errors.push(...mathErrors(`${short}.json card ${i + 1} back`, back))
        cards.push({ topicSlug: advSlug, front, back })
      }
      trackData.push({ slug: advSlug, title: meta.title, summary: meta.summary })
    } catch (e) {
      errors.push(`${short}.json: parse failed — ${(e as Error).message.slice(0, 80)}`)
    }
  }

  if (errors.length) {
    console.error(`FAILED (${errors.length} errors):\n` + errors.map((e) => '  ' + e).join('\n'))
    process.exit(1)
  }

  // 3. outputs
  const registryEntries = BASE_SLUGS.map((base) => {
    const short = base.replace(/^sat-/, '')
    const parts = PART_TITLES.map((title, i) =>
      `      { title: '${title}', loader: () => import('./sat-adv-${short}-part${i + 1}').then(m => m.lessonData) },`,
    ).join('\n')
    return `  '${base}-advanced': {\n    completionDestination: 'competitive',\n    parts: [\n${parts}\n    ],\n  },`
  }).join('\n')
  const registrySrc = `// AUTO-GENERATED by scripts/build-sat-advanced.ts — the SAT 700-800 advanced
// track lesson registry. Regenerate after editing the sat-adv-* lesson files.
import type { InteractiveTopicConfig } from './registry'

export const registrySatAdvanced: Record<string, InteractiveTopicConfig> = {
${registryEntries}
}
`
  fs.writeFileSync(path.join(lessonsDir, 'registry-sat-advanced.ts'), registrySrc)
  fs.writeFileSync(path.join(__dirname, '..', 'prisma', 'sat-advanced-track-data.json'), JSON.stringify(trackData, null, 2))
  fs.writeFileSync(path.join(__dirname, '..', 'prisma', 'card-seeds', 'cards-sat-advanced.json'), JSON.stringify(cards, null, 1))
  console.log(`✓ verified ${BASE_SLUGS.length} bundles — wrote registry-sat-advanced.ts, sat-advanced-track-data.json (${trackData.length} topics), cards-sat-advanced.json (${cards.length} cards)`)
}

main().catch((e) => { console.error(e); process.exit(1) })
