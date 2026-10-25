/**
 * ASVAB: create the Course -> Category -> Topic rows of the new ASVAB course
 * (asvab-pipeline PLAN.md, Oct 2026).
 *
 * The target shape is ASVAB_CATEGORIES (+ ASVAB_TOPIC_TITLES) in
 * src/lib/course-includes.ts, the same data the /asvab hub, /categories, the
 * competitive topics route and the teacher lobby read. This script:
 *   1. creates the `asvab` Course row when it does not exist (order = last + 1);
 *   2. creates each of the 11 Category rows (one per CAT-ASVAB subtest, plus
 *      AFQT and test day) when missing, and puts an existing one back to its
 *      layout name/order;
 *   3. creates each of the 35 Topic rows (title, description, short textContent,
 *      Topic.order = position in its Category) when missing, and moves an
 *      existing ASVAB row back to its layout Category/order/title.
 * A Category or Topic slug that already belongs to ANOTHER course aborts the
 * run (nothing written). Rows of the course the layout does not know are
 * reported, never touched.
 *
 * REFRESH_TEXT=1 additionally rewrites each existing ASVAB topic's textContent
 * from its interactive lesson (the first text section of every part), once the
 * content agents' lessons have replaced the stubs; stub lessons are skipped.
 *
 * Safety:
 *   - Dry run unless APPLY=1. The dry run prints the plan and WRITES NOTHING
 *     (it returns before the backup and the transaction; every query before
 *     that point is a SELECT).
 *   - SEED_DB=prod loads .env (dotenv override), anything else .env.local.
 *     APPLY with SEED_DB=prod requires the Neon host; APPLY without it refuses
 *     a Neon host.
 *   - Writes a JSON backup of every existing row it will change (before values)
 *     to scripts/_create-asvab-backup-<timestamp>.json (gitignored) first.
 *   - All writes run in one transaction.
 *   - Idempotent: a second run prints "Nothing to do".
 *
 * Run (repo root):
 *   npx tsx prisma/create-asvab-course.ts                        # dry run, local
 *   APPLY=1 npx tsx prisma/create-asvab-course.ts                # local, writes
 *   SEED_DB=prod npx tsx prisma/create-asvab-course.ts           # dry run, prod (read-only)
 *   SEED_DB=prod APPLY=1 npx tsx prisma/create-asvab-course.ts   # prod, writes
 *
 * Order in production (PLAN.md Phase 4): this script, then deploy, then the
 * flashcard seed (prisma/seed-asvab-flashcards.ts) and the content-store
 * imports, then REFRESH_TEXT=1 once the lessons are live.
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import fs from 'node:fs'
import path from 'node:path'
import { PrismaClient } from '@prisma/client'
import { ASVAB_CATEGORIES, ASVAB_TOPIC_TITLES } from '../src/lib/course-includes'

const APPLY = process.env.APPLY === '1'
const IS_PROD = process.env.SEED_DB === 'prod'
const REFRESH_TEXT = process.env.REFRESH_TEXT === '1'
const BACKUP_PREFIX = '_create-asvab-backup-'

const COURSE = {
  slug: 'asvab',
  name: 'ASVAB',
  description:
    'Prepare for the Armed Services Vocational Aptitude Battery: all ten CAT-ASVAB subtests, with the most depth on the four AFQT subtests (Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning, Mathematics Knowledge), plus AFQT scores, line scores and test-day strategy.',
  icon: '🎖️',
  color: 'green',
}

/** Description + icon of each Category. */
const CATEGORY_META: Record<string, { description: string; icon: string }> = {
  'asvab-word-knowledge': { description: 'Vocabulary in context, word parts and synonym strategy for the Word Knowledge subtest (part of the AFQT).', icon: '📖' },
  'asvab-paragraph-comprehension': { description: 'Main idea, stated details and inference in short passages for the Paragraph Comprehension subtest (part of the AFQT).', icon: '📰' },
  'asvab-arithmetic-reasoning': { description: 'Word problems with whole numbers, fractions, percents, ratios, rates, averages and probability for the Arithmetic Reasoning subtest (part of the AFQT).', icon: '🧮' },
  'asvab-mathematics-knowledge': { description: 'Number properties, algebra and geometry for the Mathematics Knowledge subtest (part of the AFQT).', icon: '📐' },
  'asvab-general-science': { description: 'Life, earth and space, chemistry and physics basics for the General Science subtest.', icon: '🔬' },
  'asvab-electronics-information': { description: "Electricity, Ohm's law, circuits and components for the Electronics Information subtest.", icon: '⚡' },
  'asvab-auto-information': { description: 'Engines, drivetrain, brakes, steering and vehicle systems for the Auto Information subtest.', icon: '🚗' },
  'asvab-shop-information': { description: 'Hand and power tools, materials, fasteners and shop processes for the Shop Information subtest.', icon: '🔧' },
  'asvab-mechanical-comprehension': { description: 'Forces, work, simple machines, gears and fluids for the Mechanical Comprehension subtest.', icon: '⚙️' },
  'asvab-assembling-objects': { description: 'Connecting parts and fitting shapes together for the Assembling Objects subtest.', icon: '🧩' },
  'asvab-test-prep': { description: 'How the AFQT and line scores work, job eligibility, and CAT-ASVAB strategy for test day.', icon: '🎖️' },
}

/** Description + short textContent of each Topic (one-liners; the lessons carry the depth). */
const TOPIC_META: Record<string, { description: string; textContent: string }> = {
  'asvab-wk-vocabulary-in-context': { description: 'Use the surrounding sentence to pin down the meaning of an unfamiliar word.', textContent: 'Work out what a word means from the sentence around it: context clues, definition and contrast signals, and the meaning that fits the sentence exactly.' },
  'asvab-wk-word-parts': { description: 'Break words into roots, prefixes and suffixes to unlock their meaning.', textContent: 'Learn the common Latin and Greek roots, prefixes and suffixes, and use them to decode unfamiliar words.' },
  'asvab-wk-synonym-strategies': { description: 'Choose the closest synonym using connotation, part of speech and elimination.', textContent: 'Pick the word closest in meaning: match part of speech and connotation, eliminate near-misses, and manage time on vocabulary items.' },
  'asvab-pc-main-idea': { description: "Identify a short passage's main idea and the author's purpose.", textContent: "Find the main idea of a short passage, tell it apart from supporting details, and identify why the author wrote it." },
  'asvab-pc-details': { description: 'Locate stated details and the order of events or steps in a passage.', textContent: 'Locate facts stated in a passage, follow the sequence of steps or events, and avoid answers the passage does not say.' },
  'asvab-pc-inference': { description: 'Draw conclusions, read tone and work out word meaning from a passage.', textContent: "Draw conclusions the passage supports, recognize the author's tone, and work out what a word means in the passage." },
  'asvab-ar-whole-number-problems': { description: 'Translate word problems into whole-number arithmetic and solve them.', textContent: 'Turn word problems into arithmetic: pick the operations, set up multi-step problems and check that the answer makes sense.' },
  'asvab-ar-fractions-decimals': { description: 'Solve word problems with fractions, decimals and mixed numbers.', textContent: 'Add, subtract, multiply and divide fractions and decimals inside real-world word problems.' },
  'asvab-ar-percents-interest': { description: 'Percent change, discounts, markups and simple interest in context.', textContent: 'Solve percent problems: percent of a number, percent change, discounts and markups, tax and tips, and simple interest.' },
  'asvab-ar-ratios-rates': { description: 'Ratios, proportions, unit rates and distance-rate-time problems.', textContent: 'Set up ratios and proportions, compute unit rates, and solve distance-rate-time and work-rate problems.' },
  'asvab-ar-averages-probability': { description: 'Averages, counting outcomes and basic probability in word problems.', textContent: 'Find the mean of a set, work backward from an average, count outcomes, and compute simple probabilities.' },
  'asvab-mk-number-properties': { description: 'Number properties, order of operations, exponents and roots.', textContent: 'Primes, factors and multiples, order of operations, exponent rules, square roots and scientific notation.' },
  'asvab-mk-algebra-equations': { description: 'Solve linear equations and inequalities and simple systems.', textContent: 'Solve one-variable linear equations and inequalities, rearrange formulas, and solve simple systems.' },
  'asvab-mk-algebra-expressions': { description: 'Simplify polynomials, factor and solve quadratic equations.', textContent: 'Combine like terms, multiply polynomials, factor expressions and solve quadratic equations.' },
  'asvab-mk-geometry-shapes': { description: 'Angle relationships, triangles and polygons.', textContent: 'Angle relationships, triangle properties and the Pythagorean theorem, and the angles and sides of polygons.' },
  'asvab-mk-geometry-measurement': { description: 'Perimeter, area, volume, circles and the coordinate plane.', textContent: 'Perimeter and area of plane figures, circles, volume and surface area of solids, and points and lines on the coordinate plane.' },
  'asvab-gs-life-science': { description: 'Cells, human body systems, genetics and ecology.', textContent: 'Cell structure, human body systems, basic genetics, classification and ecology.' },
  'asvab-gs-earth-space': { description: 'Geology, weather, the water cycle and astronomy.', textContent: "Earth's layers and rocks, weather and climate, the water cycle, and the solar system." },
  'asvab-gs-chemistry': { description: 'Matter, atoms, the periodic table and chemical reactions.', textContent: 'States of matter, atomic structure, the periodic table, mixtures and compounds, and chemical reactions.' },
  'asvab-gs-physics': { description: 'Motion, forces, energy, heat, waves, sound and light.', textContent: 'Motion and forces, work and energy, heat, and the behavior of waves, sound and light.' },
  'asvab-ei-electricity-basics': { description: "Current, voltage, resistance and Ohm's law.", textContent: "What current, voltage and resistance are, their units, and how Ohm's law ties them together." },
  'asvab-ei-circuits': { description: 'Series and parallel circuits and electrical power.', textContent: 'How current and voltage divide in series and parallel circuits, equivalent resistance, and electrical power.' },
  'asvab-ei-components': { description: 'Circuit components, schematic symbols, and AC versus DC.', textContent: 'Resistors, capacitors, diodes, transistors and other components, their schematic symbols, and alternating versus direct current.' },
  'asvab-ai-engine': { description: 'How four-stroke engines work and the parts of an engine.', textContent: 'The four-stroke cycle, engine parts and what each does, and how combustion turns into motion.' },
  'asvab-ai-drivetrain-chassis': { description: 'Transmission, drivetrain, brakes, steering and suspension.', textContent: 'How power reaches the wheels, and how brakes, steering and suspension work.' },
  'asvab-ai-systems': { description: 'Electrical, fuel, cooling, lubrication and exhaust systems.', textContent: "A vehicle's electrical, fuel, cooling, lubrication and exhaust systems, and common problems." },
  'asvab-si-tools': { description: 'Identifying and using hand and power tools.', textContent: 'Striking, cutting, fastening, measuring and power tools: what each is for and how it is used.' },
  'asvab-si-materials-fasteners': { description: 'Wood and metal materials, fasteners, and shop processes.', textContent: 'Lumber and metals, nails, screws, bolts and adhesives, and shop processes such as cutting, joining and finishing.' },
  'asvab-mc-forces-motion': { description: 'Forces, work, energy and power in mechanical systems.', textContent: 'Forces and motion, work, energy and power, friction, and how they apply to machines.' },
  'asvab-mc-simple-machines': { description: 'Levers, pulleys, inclined planes, wedges and screws.', textContent: 'Mechanical advantage of levers, pulleys, inclined planes, wedges and screws.' },
  'asvab-mc-gears-fluids': { description: 'Gears and belts, fluids and pressure, and structural loads.', textContent: 'Gear ratios and direction, belts and pulleys, fluid pressure and hydraulics, and how structures carry loads.' },
  'asvab-ao-connections': { description: 'Match labeled connection points to the assembled object.', textContent: 'Read a connection diagram and find the drawing that joins the parts at the labeled points correctly.' },
  'asvab-ao-shapes': { description: 'Fit loose pieces together into a whole shape.', textContent: 'Mentally rotate and fit loose pieces to find the drawing that shows the completed shape.' },
  'asvab-afqt-scores': { description: 'How the AFQT and line scores are built and what they mean for enlistment and jobs.', textContent: 'How the AFQT percentile is computed from four subtests, what AFQT categories mean, how line scores qualify you for military jobs, and how retests work.' },
  'asvab-test-strategy': { description: 'How the computer-adaptive test works and how to approach test day.', textContent: 'How the computer-adaptive CAT-ASVAB chooses questions, pacing and guessing strategy, and what to expect at MEPS on test day.' },
}

const prisma = new PrismaClient()

/** textContent from a lesson's parts: the first text section of each part (null while the lesson is a stub). */
async function lessonText(slug: string): Promise<string | null> {
  const file = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons', `${slug}.ts`)
  if (!fs.existsSync(file)) return null
  const mod = (await import(file)) as { parts?: { sections: { type?: unknown; content?: unknown }[] }[]; default?: { parts?: unknown } }
  const parts = (mod.parts ?? (mod.default as { parts?: typeof mod.parts } | undefined)?.parts) ?? []
  const texts = parts
    .map((p) => p.sections.find((s) => s.type === 'text' && typeof s.content === 'string')?.content as string | undefined)
    .filter((t): t is string => !!t)
  if (texts.length === 0 || texts.some((t) => t.includes('This lesson part is being written.'))) return null
  return texts.join('\n\n')
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY (writes, one transaction)' : 'DRY RUN (no writes)', REFRESH_TEXT ? '+ REFRESH_TEXT' : '')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  // ---- Sanity of the layout itself
  const topicSlugs = ASVAB_CATEGORIES.flatMap((c) => c.topics)
  for (const c of ASVAB_CATEGORIES) if (!CATEGORY_META[c.slug]) throw new Error(`no CATEGORY_META for ${c.slug}`)
  for (const t of topicSlugs) {
    if (!TOPIC_META[t]) throw new Error(`no TOPIC_META for ${t}`)
    if (!ASVAB_TOPIC_TITLES[t]) throw new Error(`no ASVAB_TOPIC_TITLES entry for ${t}`)
  }
  console.log(`Layout: ${ASVAB_CATEGORIES.length} categories, ${topicSlugs.length} topics`)

  // ---- Read current state (SELECTs only)
  const course = await prisma.course.findUnique({ where: { slug: COURSE.slug } })
  const maxOrder = await prisma.course.aggregate({ _max: { order: true } })
  const cats = await prisma.category.findMany({
    where: { slug: { in: ASVAB_CATEGORIES.map((c) => c.slug) } },
    include: { course: { select: { slug: true } } },
  })
  const topics = await prisma.topic.findMany({
    where: { slug: { in: topicSlugs } },
    include: { category: { select: { slug: true, course: { select: { slug: true } } } } },
  })
  const unknownRows = course
    ? await prisma.topic.findMany({
        where: { category: { courseId: course.id }, slug: { notIn: topicSlugs } },
        select: { slug: true, category: { select: { slug: true } } },
      })
    : []
  const unknownCats = course
    ? await prisma.category.findMany({ where: { courseId: course.id, slug: { notIn: ASVAB_CATEGORIES.map((c) => c.slug) } }, select: { slug: true } })
    : []

  // ---- Conflicts: a slug owned by another course aborts everything.
  const conflicts = [
    ...cats.filter((c) => c.course.slug !== COURSE.slug).map((c) => `category ${c.slug} belongs to ${c.course.slug}`),
    ...topics.filter((t) => t.category.course.slug !== COURSE.slug).map((t) => `topic ${t.slug} belongs to ${t.category.course.slug}`),
  ]
  if (conflicts.length) {
    console.log('\nCONFLICTS (nothing written):')
    for (const c of conflicts) console.log('  ' + c)
    throw new Error('slug conflicts with another course')
  }

  // ---- Plan
  const plan: string[] = []
  const createCourse = !course
  const courseOrder = course?.order ?? (maxOrder._max.order ?? 0) + 1
  if (createCourse) plan.push(`CREATE course ${COURSE.slug} "${COURSE.name}" order ${courseOrder}`)

  const catBySlug = new Map(cats.map((c) => [c.slug, c]))
  const createCats = ASVAB_CATEGORIES.filter((c) => !catBySlug.has(c.slug))
  const updateCats = ASVAB_CATEGORIES.flatMap((c) => {
    const row = catBySlug.get(c.slug)
    if (!row || (row.name === c.name && row.order === c.order)) return []
    return [{ id: row.id, slug: c.slug, from: { name: row.name, order: row.order }, to: { name: c.name, order: c.order } }]
  })
  for (const c of createCats) plan.push(`CREATE category ${c.slug} "${c.name}" order ${c.order}`)
  for (const c of updateCats) plan.push(`UPDATE category ${c.slug}: "${c.from.name}"/${c.from.order} -> "${c.to.name}"/${c.to.order}`)

  const topicBySlug = new Map(topics.map((t) => [t.slug, t]))
  type TopicCreate = { slug: string; category: string; order: number; title: string; description: string; textContent: string }
  type TopicMove = { id: string; slug: string; fromCat: string; toCat: string; fromOrder: number; toOrder: number; fromTitle: string; toTitle: string }
  const createTopics: TopicCreate[] = []
  const moveTopics: TopicMove[] = []
  for (const c of ASVAB_CATEGORIES) {
    c.topics.forEach((slug, i) => {
      const order = i + 1
      const title = ASVAB_TOPIC_TITLES[slug]
      const row = topicBySlug.get(slug)
      if (!row) {
        createTopics.push({ slug, category: c.slug, order, title, ...TOPIC_META[slug] })
        plan.push(`CREATE topic ${slug} in ${c.slug} order ${order} "${title}"`)
      } else if (row.category.slug !== c.slug || row.order !== order || row.title !== title) {
        moveTopics.push({ id: row.id, slug, fromCat: row.category.slug, toCat: c.slug, fromOrder: row.order, toOrder: order, fromTitle: row.title, toTitle: title })
        plan.push(`UPDATE topic ${slug}: ${row.category.slug}/${row.order} "${row.title}" -> ${c.slug}/${order} "${title}"`)
      }
    })
  }

  const refreshText: { id: string; slug: string; from: string; to: string }[] = []
  if (REFRESH_TEXT) {
    for (const t of topics) {
      const text = await lessonText(t.slug)
      if (text === null) {
        console.log(`  REFRESH_TEXT skip ${t.slug} (lesson is still a stub)`)
        continue
      }
      if (text !== t.textContent) {
        refreshText.push({ id: t.id, slug: t.slug, from: t.textContent, to: text })
        plan.push(`UPDATE topic ${t.slug} textContent (${t.textContent.length} -> ${text.length} chars)`)
      }
    }
  }

  for (const r of unknownCats) console.log(`  NOTE category ${r.slug} is in the course but not in the layout (left alone)`)
  for (const r of unknownRows) console.log(`  NOTE topic ${r.slug} (${r.category.slug}) is in the course but not in the layout (left alone)`)

  console.log('\nPlan:')
  if (plan.length === 0) {
    console.log('  Nothing to do.')
    return
  }
  for (const line of plan) console.log('  ' + line)
  console.log(
    `\nSummary: course ${createCourse ? 'create' : 'exists'}; categories +${createCats.length} ~${updateCats.length}; topics +${createTopics.length} ~${moveTopics.length}${REFRESH_TEXT ? `; text ~${refreshText.length}` : ''}`,
  )

  if (!APPLY) {
    console.log('\nDRY RUN: no writes. Re-run with APPLY=1 to apply.')
    return
  }

  // ---- Backup (before values of every existing row that changes)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupPath = path.join('scripts', `${BACKUP_PREFIX}${stamp}.json`)
  const changedTopicIds = [...new Set([...moveTopics.map((m) => m.id), ...refreshText.map((r) => r.id)])]
  const [bCats, bTopics] = await Promise.all([
    prisma.category.findMany({ where: { id: { in: updateCats.map((c) => c.id) } } }),
    prisma.topic.findMany({ where: { id: { in: changedTopicIds } } }),
  ])
  fs.writeFileSync(
    backupPath,
    JSON.stringify({ createdAt: new Date().toISOString(), host, course: course ?? null, categories: bCats, topics: bTopics, plan }, null, 1),
  )
  console.log(`\nBackup: ${backupPath}`)

  // ---- Apply (one transaction)
  await prisma.$transaction(
    async (tx) => {
      const courseId = course
        ? course.id
        : (await tx.course.create({ data: { slug: COURSE.slug, name: COURSE.name, description: COURSE.description, order: courseOrder, icon: COURSE.icon, color: COURSE.color } })).id
      const catId = new Map(cats.map((c) => [c.slug, c.id]))
      for (const c of createCats) {
        const row = await tx.category.create({
          data: { slug: c.slug, name: c.name, order: c.order, description: CATEGORY_META[c.slug].description, icon: CATEGORY_META[c.slug].icon, courseId },
        })
        catId.set(c.slug, row.id)
      }
      for (const c of updateCats) await tx.category.update({ where: { id: c.id }, data: { name: c.to.name, order: c.to.order } })
      for (const t of createTopics) {
        await tx.topic.create({
          data: { slug: t.slug, title: t.title, description: t.description, textContent: t.textContent, order: t.order, categoryId: catId.get(t.category)!, isPremium: false },
        })
      }
      for (const m of moveTopics) {
        await tx.topic.update({ where: { id: m.id }, data: { categoryId: catId.get(m.toCat)!, order: m.toOrder, title: m.toTitle } })
      }
      for (const r of refreshText) await tx.topic.update({ where: { id: r.id }, data: { textContent: r.to } })
    },
    { timeout: 60_000 },
  )
  console.log('Applied.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => prisma.$disconnect())
