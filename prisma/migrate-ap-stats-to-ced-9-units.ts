/**
 * Migration: AP Statistics → 9-unit CED-aligned structure.
 *
 * Strategy:
 *   • Preserve every existing CATEGORY slug that's already public in URLs.
 *     Only rename name/description/order to match the CED.
 *   • Create 3 new categories (Unit 2 Two-Variable Data, Unit 5 Sampling
 *     Distributions, Unit 8 Chi-Square).
 *   • Reassign existing TOPICS by updating their categoryId. All TOPIC slugs
 *     are preserved → user TopicProgress records and shared URLs survive.
 *
 * Idempotent — every action is an upsert / update on a stable slug.
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Migrating AP Statistics → 9 CED units…\n')

  const course = await prisma.course.findUnique({ where: { slug: 'ap-statistics' } })
  if (!course) throw new Error('AP Statistics course not found')

  // ─────────────────────────────────────────────────────────────────
  // 1. Update existing 6 categories (preserve slugs)
  // ─────────────────────────────────────────────────────────────────
  const existing: Array<{ slug: string; name: string; description: string; order: number }> = [
    {
      slug: 'exploring-data',
      name: 'Unit 1: Exploring One-Variable Data',
      description: 'Variable types, distributions, summary statistics, and the normal model',
      order: 1,
    },
    {
      slug: 'sampling-experimentation',
      name: 'Unit 3: Collecting Data',
      description: 'Sampling methods, observational studies vs. experiments, randomization, and bias',
      order: 3,
    },
    {
      slug: 'probability',
      name: 'Unit 4: Probability, Random Variables, and Probability Distributions',
      description: 'Probability rules, conditional probability, random variables, binomial and geometric distributions',
      order: 4,
    },
    {
      slug: 'confidence-intervals',
      name: 'Unit 6: Inference for Categorical Data — Proportions',
      description: 'Confidence intervals and significance tests for one and two proportions',
      order: 6,
    },
    {
      slug: 'hypothesis-testing',
      name: 'Unit 7: Inference for Quantitative Data — Means',
      description: 'Confidence intervals and significance tests for one mean, paired means, and two means',
      order: 7,
    },
    {
      slug: 'regression-correlation',
      name: 'Unit 9: Inference for Quantitative Data — Slopes',
      description: 'Inference for the slope of a least-squares regression line',
      order: 9,
    },
  ]
  for (const c of existing) {
    await prisma.category.update({
      where: { slug: c.slug },
      data: { name: c.name, description: c.description, order: c.order },
    })
    console.log(`  ✓ Renamed: ${c.slug} → "${c.name}"`)
  }

  // ─────────────────────────────────────────────────────────────────
  // 2. Create 3 new categories
  // ─────────────────────────────────────────────────────────────────
  const newCats: Array<{ slug: string; name: string; description: string; order: number }> = [
    {
      slug: 'two-variable-data',
      name: 'Unit 2: Exploring Two-Variable Data',
      description: 'Scatterplots, correlation, least-squares regression, residuals, and transformations',
      order: 2,
    },
    {
      slug: 'sampling-distributions-unit',
      name: 'Unit 5: Sampling Distributions',
      description: 'Sampling variability, the Central Limit Theorem, and sampling distributions of means and proportions',
      order: 5,
    },
    {
      slug: 'inference-chi-square',
      name: 'Unit 8: Inference for Categorical Data — Chi-Square',
      description: 'Chi-square tests for goodness-of-fit, independence, and homogeneity',
      order: 8,
    },
  ]
  const newCatIds: Record<string, string> = {}
  for (const c of newCats) {
    const cat = await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name, description: c.description, order: c.order },
      create: { ...c, courseId: course.id },
    })
    newCatIds[c.slug] = cat.id
    console.log(`  ✓ Created/updated: ${c.slug} → "${c.name}"`)
  }

  // ─────────────────────────────────────────────────────────────────
  // 3. Reassign topics to new categories
  // ─────────────────────────────────────────────────────────────────
  const reassign: Array<{ topicSlug: string; toCatSlug: string; order: number }> = [
    // Unit 2: Two-Variable Data — pulled out of old "regression-correlation"
    { topicSlug: 'scatterplots-correlation',  toCatSlug: 'two-variable-data', order: 1 },
    { topicSlug: 'least-squares-regression',  toCatSlug: 'two-variable-data', order: 2 },
    { topicSlug: 'residuals-residual-plots',  toCatSlug: 'two-variable-data', order: 3 },
    { topicSlug: 'coefficient-determination', toCatSlug: 'two-variable-data', order: 4 },
    { topicSlug: 'transformations-linearity', toCatSlug: 'two-variable-data', order: 5 },

    // Unit 5: Sampling Distributions — moved from old "confidence-intervals"
    { topicSlug: 'sampling-distributions',    toCatSlug: 'sampling-distributions-unit', order: 1 },
    { topicSlug: 'central-limit-theorem',     toCatSlug: 'sampling-distributions-unit', order: 2 },

    // Unit 6: Proportions — keep ci-proportions, pull tests-proportions in
    { topicSlug: 'ci-proportions',            toCatSlug: 'confidence-intervals', order: 1 },
    { topicSlug: 'tests-proportions',         toCatSlug: 'confidence-intervals', order: 2 },

    // Unit 7: Means — keep framework/type-errors/means/paired, pull ci-means/interpreting-ci in
    { topicSlug: 'hypothesis-testing-framework', toCatSlug: 'hypothesis-testing', order: 1 },
    { topicSlug: 'type-errors',                  toCatSlug: 'hypothesis-testing', order: 2 },
    { topicSlug: 'ci-means',                     toCatSlug: 'hypothesis-testing', order: 3 },
    { topicSlug: 'interpreting-ci',              toCatSlug: 'hypothesis-testing', order: 4 },
    { topicSlug: 'tests-means',                  toCatSlug: 'hypothesis-testing', order: 5 },
    { topicSlug: 'paired-data',                  toCatSlug: 'hypothesis-testing', order: 6 },

    // Unit 8: Chi-Square — pulled out of old "hypothesis-testing"
    { topicSlug: 'chi-square-tests',          toCatSlug: 'inference-chi-square', order: 1 },

    // Unit 9: Slopes — keep only inference-regression in old "regression-correlation"
    { topicSlug: 'inference-regression',      toCatSlug: 'regression-correlation', order: 1 },

    // Unit 1 ordering (no category change)
    { topicSlug: 'types-data-sampling',           toCatSlug: 'exploring-data', order: 1 },
    { topicSlug: 'displaying-distributions-graphs', toCatSlug: 'exploring-data', order: 2 },
    { topicSlug: 'describing-distributions',     toCatSlug: 'exploring-data', order: 3 },
    { topicSlug: 'measures-of-center',           toCatSlug: 'exploring-data', order: 4 },
    { topicSlug: 'measures-of-spread',           toCatSlug: 'exploring-data', order: 5 },
    { topicSlug: 'normal-distributions',         toCatSlug: 'exploring-data', order: 6 },

    // Unit 3 ordering (no category change)
    { topicSlug: 'sampling-methods',          toCatSlug: 'sampling-experimentation', order: 1 },
    { topicSlug: 'observational-vs-experiments', toCatSlug: 'sampling-experimentation', order: 2 },
    { topicSlug: 'experimental-design',       toCatSlug: 'sampling-experimentation', order: 3 },
    { topicSlug: 'bias-sampling-surveys',     toCatSlug: 'sampling-experimentation', order: 4 },

    // Unit 4 ordering (no category change)
    { topicSlug: 'basic-probability-rules',   toCatSlug: 'probability', order: 1 },
    { topicSlug: 'conditional-probability',   toCatSlug: 'probability', order: 2 },
    { topicSlug: 'independence',              toCatSlug: 'probability', order: 3 },
    { topicSlug: 'discrete-random-variables', toCatSlug: 'probability', order: 4 },
    { topicSlug: 'binomial-distribution',     toCatSlug: 'probability', order: 7 },  // leave room for new RV topics
    { topicSlug: 'geometric-distribution',    toCatSlug: 'probability', order: 8 },
    { topicSlug: 'continuous-random-variables', toCatSlug: 'probability', order: 6 },
  ]

  // Resolve target category IDs
  const targetCats = await prisma.category.findMany({
    where: { course: { slug: 'ap-statistics' } },
    select: { id: true, slug: true },
  })
  const catIdBySlug: Record<string, string> = {}
  for (const c of targetCats) catIdBySlug[c.slug] = c.id

  console.log('\nReassigning topics:')
  let moved = 0, reordered = 0
  for (const r of reassign) {
    const target = catIdBySlug[r.toCatSlug]
    if (!target) {
      console.warn(`  ⚠ no category for ${r.toCatSlug}`)
      continue
    }
    const t = await prisma.topic.findUnique({ where: { slug: r.topicSlug }, select: { id: true, categoryId: true, order: true } })
    if (!t) {
      console.warn(`  ⚠ topic missing: ${r.topicSlug}`)
      continue
    }
    if (t.categoryId !== target || t.order !== r.order) {
      await prisma.topic.update({
        where: { id: t.id },
        data: { categoryId: target, order: r.order },
      })
      if (t.categoryId !== target) moved++
      else reordered++
      console.log(`  ✓ ${r.topicSlug} → ${r.toCatSlug} (order ${r.order})`)
    }
  }

  // ─────────────────────────────────────────────────────────────────
  // 4. Final report
  // ─────────────────────────────────────────────────────────────────
  console.log(`\nMoved ${moved} topics, reordered ${reordered}.`)
  const final = await prisma.category.findMany({
    where: { course: { slug: 'ap-statistics' } },
    orderBy: { order: 'asc' },
    include: { _count: { select: { topics: true } } },
  })
  console.log('\nFinal AP Statistics structure:')
  for (const c of final) {
    console.log(`  ${c.order}. ${c.name}  [${c.slug}]  topics=${c._count.topics}`)
  }
}

main().catch((e) => { console.error(e); process.exit(1) }).finally(() => prisma.$disconnect())
