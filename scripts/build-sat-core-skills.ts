/**
 * Assemble the SAT Core Skills track from agent-authored artifacts. Mirrors
 * scripts/build-sat-advanced.ts at the other end of the scale, with two
 * differences that matter: bundles are 2 parts (not 3) because length is the
 * barrier for these students, and the difficulty ceiling is enforced by the
 * exit quiz rather than here (Core Skills exit quizzes are forced to the easy
 * tier in src/data/exit-quizzes/index.ts).
 *
 *  1. Verify the 26 x 2 lesson files (import each, check topicSlug, section
 *     shapes, quiz validity, math delimiters, >=6 quiz questions per bundle,
 *     and the SHORTNESS budget).
 *  2. Generate src/data/interactive-lessons/registry-sat-core-skills.ts.
 *  3. Assemble prisma/sat-core-skills-track-data.json and
 *     prisma/card-seeds/cards-sat-core-skills.json.
 * Any verification error aborts before writing outputs.
 *   npx tsx scripts/build-sat-core-skills.ts <scratchpad-satcore-dir>
 */
import fs from 'fs'
import path from 'path'
import { inspect } from './check-lesson-math'

const BASE_SLUGS = [
  'sat-vocabulary-context', 'sat-central-ideas-details', 'sat-command-evidence', 'sat-reading-comprehension',
  'sat-punctuation', 'sat-sentence-structure', 'sat-transitions-organization', 'sat-effective-language-use',
  'sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-linear-inequalities-graphs',
  'sat-ratios-proportions-percents', 'sat-functions', 'sat-nonlinear-equations-functions', 'sat-quadratic-equations',
  'sat-exponential-functions', 'sat-polynomials-factoring', 'sat-polynomial-rational-expressions',
  'sat-exponents-radicals', 'sat-geometry-basics', 'sat-geometry-trigonometry', 'sat-circles',
  'sat-statistics-data-interpretation', 'sat-data-statistics', 'sat-scatterplots-line-fit', 'sat-probability-two-way-tables',
]
const PART_TITLES = ['The Basics', 'Practice']
const SUFFIX = '-core-skills'
/** Shortness is the feature. A bundle over this is defeating the purpose. */
const MAX_SECTIONS_PER_PART = 6
const MIN_QUIZZES = 6
const MIN_CARDS = 8

type Section = { id?: string; type?: string; content?: string; question?: string; options?: string[]; correctAnswer?: number; explanation?: string }

function mathErrors(label: string, value: string): string[] {
  const { garbled, dangling } = inspect(value)
  const out = garbled.map((g) => `${label}: prose inside math span "${g.slice(0, 60)}"`)
  if (dangling) out.push(`${label}: unpaired $ (write currency as $\\$5$)`)
  return out
}

async function main() {
  const jsonDir = process.argv[2]
  if (!jsonDir) { console.error('usage: npx tsx scripts/build-sat-core-skills.ts <satcore-json-dir>'); process.exit(1) }
  const lessonsDir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons')
  const errors: string[] = []
  const trackData: { slug: string; title: string; summary: string }[] = []
  const cards: { topicSlug: string; front: string; back: string }[] = []

  for (const base of BASE_SLUGS) {
    const short = base.replace(/^sat-/, '')
    const slug = `${base}${SUFFIX}`

    let quizCount = 0
    const ids = new Set<string>()
    for (let part = 1; part <= PART_TITLES.length; part++) {
      const file = `sat-core-${short}-part${part}`
      const full = path.join(lessonsDir, `${file}.ts`)
      if (!fs.existsSync(full)) { errors.push(`${slug}: missing ${file}.ts`); continue }
      let mod: { lessonData?: { topicSlug?: string; sections?: Section[] } }
      try { mod = await import(full) } catch (e) { errors.push(`${file}: import failed — ${(e as Error).message.slice(0, 80)}`); continue }
      const data = mod.lessonData
      if (!data) { errors.push(`${file}: no lessonData export`); continue }
      if (data.topicSlug !== slug) errors.push(`${file}: topicSlug ${data.topicSlug} !== ${slug}`)
      if (!Array.isArray(data.sections) || data.sections.length === 0) { errors.push(`${file}: empty sections`); continue }
      if (data.sections.length > MAX_SECTIONS_PER_PART) {
        errors.push(`${file}: ${data.sections.length} sections (max ${MAX_SECTIONS_PER_PART} — these lessons must stay short)`)
      }
      for (const s of data.sections) {
        if (s.id) { if (ids.has(s.id)) errors.push(`${file}: duplicate section id ${s.id}`); ids.add(s.id) }
        if (s.type === 'quiz') {
          quizCount++
          if (!s.question?.trim()) errors.push(`${file}: quiz missing question (${s.id})`)
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
    if (quizCount < MIN_QUIZZES) errors.push(`${slug}: only ${quizCount} quiz questions (need >=${MIN_QUIZZES})`)

    const jsonPath = path.join(jsonDir, `${short}.json`)
    if (!fs.existsSync(jsonPath)) { errors.push(`${slug}: missing ${short}.json`); continue }
    try {
      const meta = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
      if (meta.topicSlug !== slug) errors.push(`${short}.json: topicSlug ${meta.topicSlug} !== ${slug}`)
      if (typeof meta.title !== 'string' || !meta.title) errors.push(`${short}.json: missing title`)
      const words = String(meta.summary ?? '').split(/\s+/).length
      if (words < 80) errors.push(`${short}.json: summary too short (${words} words)`)
      errors.push(...mathErrors(`${short}.json summary`, String(meta.summary ?? '')))
      if (!Array.isArray(meta.flashcards) || meta.flashcards.length < MIN_CARDS) {
        errors.push(`${short}.json: needs >=${MIN_CARDS} flashcards (${meta.flashcards?.length ?? 0})`)
      }
      for (const [i, c] of (meta.flashcards ?? []).entries()) {
        const front = String(c.front ?? '').trim(), back = String(c.back ?? '').trim()
        if (front.length < 8 || front.length > 400) errors.push(`${short}.json card ${i + 1}: front length ${front.length}`)
        if (back.length < 3 || back.length > 700) errors.push(`${short}.json card ${i + 1}: back length ${back.length}`)
        errors.push(...mathErrors(`${short}.json card ${i + 1} front`, front))
        errors.push(...mathErrors(`${short}.json card ${i + 1} back`, back))
        cards.push({ topicSlug: slug, front, back })
      }
      trackData.push({ slug, title: meta.title, summary: meta.summary })
    } catch (e) {
      errors.push(`${short}.json: parse failed — ${(e as Error).message.slice(0, 80)}`)
    }
  }

  if (errors.length) {
    console.error(`FAILED (${errors.length} errors):\n` + errors.map((e) => '  ' + e).join('\n'))
    process.exit(1)
  }

  const registryEntries = BASE_SLUGS.map((base) => {
    const short = base.replace(/^sat-/, '')
    const parts = PART_TITLES.map((title, i) =>
      `      { title: '${title}', loader: () => import('./sat-core-${short}-part${i + 1}').then(m => m.lessonData) },`,
    ).join('\n')
    return `  '${base}${SUFFIX}': {\n    completionDestination: 'competitive',\n    parts: [\n${parts}\n    ],\n  },`
  }).join('\n')
  const registrySrc = `// AUTO-GENERATED by scripts/build-sat-core-skills.ts — the SAT Core Skills
// track lesson registry. Regenerate after editing the sat-core-* lesson files.
import type { InteractiveTopicConfig } from './registry'

export const registrySatCoreSkills: Record<string, InteractiveTopicConfig> = {
${registryEntries}
}
`
  fs.writeFileSync(path.join(lessonsDir, 'registry-sat-core-skills.ts'), registrySrc)
  fs.writeFileSync(path.join(__dirname, '..', 'prisma', 'sat-core-skills-track-data.json'), JSON.stringify(trackData, null, 2))
  fs.writeFileSync(path.join(__dirname, '..', 'prisma', 'card-seeds', 'cards-sat-core-skills.json'), JSON.stringify(cards, null, 1))
  console.log(`✓ verified ${BASE_SLUGS.length} bundles — wrote registry-sat-core-skills.ts, sat-core-skills-track-data.json (${trackData.length} topics), cards-sat-core-skills.json (${cards.length} cards)`)
}

main().catch((e) => { console.error(e); process.exit(1) })
