/**
 * Idempotent data fix: create Topic rows for the 20 ACT lesson topics
 * (`act-<name>-act`).
 *
 * The ACT diagnostic recommends these slugs, and their interactive lessons
 * and lesson-built exit quizzes are keyed to them, but no Topic rows existed
 * — so /topics/<slug>/interactive 404'd and a student could never clear a
 * recommended topic (or reach the ACT cycle unit test). Each is created as a
 * subtopic of the matching legacy ACT topic (same 2-level pattern the MCAT
 * uses), in that topic's category. Existing rows are left untouched except
 * for missing parent links. Safe to rerun.
 *
 *   npx tsx scripts/create-act-subtopics.ts            # local (.env.local)
 *   PROD=1 npx tsx scripts/create-act-subtopics.ts     # production (.env)
 *   SKIP_MISSING_PARENTS=1 …                            # dev DBs lacking some legacy ACT topics
 *   REFRESH_TEXT=1 …                                    # also rewrite textContent on existing rows
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readdirSync } from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import { PrismaClient } from '@prisma/client'

/** slug → [parent legacy topic, title, description] */
export const ACT_SUBTOPICS: Record<string, [string, string, string]> = {
  'act-english-grammar-act': ['act-usage-mechanics', 'Grammar & Usage', 'Agreement, pronouns, verb tense, sentence structure, modifiers and commonly confused words.'],
  'act-english-punctuation-act': ['act-usage-mechanics', 'Punctuation', 'Commas, semicolons, colons, apostrophes, dashes and end punctuation.'],
  'act-english-rhetorical-act': ['act-rhetorical-skills', 'Rhetorical Skills', 'Adding and deleting, transitions, organization, purpose and concise style.'],
  'act-english-strategy-act': ['act-rhetorical-skills', 'English Section Strategy', 'NO CHANGE, reading for context, question types and pacing on ACT English.'],
  'act-pre-algebra-basics-act': ['act-pre-algebra-elementary', 'Pre-Algebra Basics', 'Number properties, fractions, percents, ratios, exponents and basic statistics.'],
  'act-algebra-equations-act': ['act-algebra-functions', 'Equations & Inequalities', 'Linear equations, systems, inequalities, absolute value and word problems.'],
  'act-intermediate-algebra-act': ['act-intermediate-algebra', 'Intermediate Algebra', 'Quadratics, functions, polynomials, rational expressions, logs and sequences.'],
  'act-coordinate-geometry-act': ['act-intermediate-algebra', 'Coordinate Geometry', 'Distance, midpoint, slope, lines, circles, conics and transformations.'],
  'act-plane-geometry-act': ['act-plane-geometry-trig', 'Plane Geometry', 'Angles, triangles, quadrilaterals, circles, area, similar triangles and 3-D solids.'],
  'act-trigonometry-act': ['act-geometry-trigonometry', 'Trigonometry', 'Right-triangle trig, laws of sines and cosines, the unit circle, identities and graphs.'],
  'act-statistics-probability-act': ['act-statistics-probability', 'Statistics & Probability', 'Averages, data displays, counting, probability, two-way tables and expected value.'],
  'act-math-strategy-act': ['act-timing-test-strategies', 'Math Section Strategy', 'Backsolving, picking numbers, estimation, calculator use, traps and pacing on ACT Math.'],
  'act-reading-main-ideas-act': ['act-main-ideas-details', 'Main Ideas & Inferences', 'Main idea, details, inference, purpose and tone, vocabulary in context and relationships.'],
  'act-reading-passage-types-act': ['act-reading-strategies', 'Reading Passage Types', 'Literary narrative, social science, humanities, natural science and paired passages.'],
  'act-reading-strategy-act': ['act-reading-strategies', 'Reading Section Strategy', 'Passage mapping, main idea vs detail, evidence, tone, inference, pacing and paired passages.'],
  'act-reading-science-tips-act': ['act-reading-strategies', 'Science Passages: Reading & Science Tips', 'Natural-science reading passages plus ACT Science strategy for data and experiments.'],
  'act-science-data-act': ['act-data-representation', 'Data Representation', 'Tables, graphs, trends, interpolation, combined data sets, variables and claims.'],
  'act-science-experiments-act': ['act-research-summaries', 'Research Summaries', 'Experimental design, variables and controls, comparing experiments and evaluating conclusions.'],
  'act-science-reasoning-act': ['act-conflicting-viewpoints', 'Scientific Reasoning & Conflicting Viewpoints', 'Hypotheses, conclusions, applying results and comparing scientists’ viewpoints.'],
  'act-test-day-strategy-act': ['act-timing-test-strategies', 'Test-Day Strategy', 'Format and registration, timing by section, guessing, mental preparation and retakes.'],
}

/** The lesson's Key Takeaways, part by part (or each part's intro when it has none), as the topic page's text. */
async function textContentFor(slug: string, title: string, description: string): Promise<string> {
  const dir = path.resolve('src/data/interactive-lessons')
  const re = new RegExp(`^act-${slug}-part(\\d+)\\.ts$`)
  const files = readdirSync(dir).filter((f) => re.test(f)).sort((a, b) => Number(a.match(re)![1]) - Number(b.match(re)![1]))
  const chunks = [`# ${title}\n\n${description}`]
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(dir, f)).href)
    const data = Object.values(mod).find((v: any) => v && Array.isArray(v.sections)) as { sections: { id: string; type: string; content?: string }[] }
    const summary =
      data.sections.find((s) => s.type === 'text' && /summary|takeaway/i.test(s.id + ' ' + (s.content ?? '').slice(0, 80))) ??
      data.sections.find((s) => s.type === 'text' && s.content)
    if (summary?.content) chunks.push(summary.content.trim())
  }
  return chunks.join('\n\n')
}

async function main() {
  const prisma = new PrismaClient()
  const host = new URL(process.env.DATABASE_URL ?? '').hostname
  console.log(`target: ${process.env.PROD ? 'PROD' : 'local'} (${host})`)
  let created = 0, linked = 0, kept = 0, refreshed = 0
  const parents = await prisma.topic.findMany({
    where: { slug: { in: [...new Set(Object.values(ACT_SUBTOPICS).map((v) => v[0]))] } },
    select: { id: true, slug: true, categoryId: true },
  })
  const parentBySlug = new Map(parents.map((p) => [p.slug, p]))
  const missingParents = [...new Set(Object.values(ACT_SUBTOPICS).map((v) => v[0]))].filter((s) => !parentBySlug.has(s))
  if (missingParents.length && !process.env.SKIP_MISSING_PARENTS) throw new Error(`missing parent topics: ${missingParents.join(', ')}`)
  if (missingParents.length) console.warn(`skipping subtopics of missing parents: ${missingParents.join(', ')}`)

  let order = 0
  for (const [slug, [parentSlug, title, description]] of Object.entries(ACT_SUBTOPICS)) {
    order++
    const parent = parentBySlug.get(parentSlug)
    if (!parent) continue
    const existing = await prisma.topic.findUnique({ where: { slug }, select: { id: true, parentTopicId: true } })
    if (existing) {
      if (process.env.REFRESH_TEXT) {
        await prisma.topic.update({ where: { slug }, data: { textContent: await textContentFor(slug, title, description) } })
        refreshed++
      }
      if (!existing.parentTopicId) {
        await prisma.topic.update({ where: { slug }, data: { parentTopicId: parent.id } })
        linked++
      } else kept++
      continue
    }
    await prisma.topic.create({
      data: {
        slug,
        title,
        description,
        order,
        categoryId: parent.categoryId,
        parentTopicId: parent.id,
        textContent: await textContentFor(slug, title, description),
      },
    })
    created++
  }
  console.log(`created ${created}, linked ${linked}, already present ${kept}, text refreshed ${refreshed}`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
