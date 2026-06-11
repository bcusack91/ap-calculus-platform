import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'

/**
 * Creates DB Topic records for three MCAT "Scientific Inquiry & Reasoning Skills"
 * lessons that already exist in the interactive-lesson registry but had no Topic
 * row, so they were unreachable via /topics/[slug]. These skills are tested
 * across all three science sections of the MCAT, so they live in the cross-cutting
 * mcat-strategy category alongside science-passage-strategy.
 *
 * Idempotent: upsert by slug. Safe to run against local and (authorized) prod.
 *   npx tsx prisma/seed-mcat-skills-topics.ts                 # local (.env.local)
 *   NODE_ENV=production npx tsx prisma/seed-mcat-skills-topics.ts   # prod
 */
const prisma = new PrismaClient()

const TOPICS = [
  {
    slug: 'mcat-research-methods-mcat',
    title: 'Research Methods & Study Design',
    description:
      'Experimental vs. observational designs, variables and controls, validity and bias, and how to reason about study quality — the backbone of MCAT passage-based science questions.',
    textContent: `# Research Methods & Study Design

About a quarter of every MCAT science section tests **Scientific Inquiry & Reasoning Skills (SIRS)** — your ability to evaluate *how* an experiment was done, not just recall facts. Mastering study design is the highest-leverage skill for passage-based questions.

## Study designs, from weakest to strongest causal evidence
- **Case report / case series** — descriptive; hypothesis-generating only.
- **Cross-sectional** — measures exposure and outcome at one time; shows association, not causation; vulnerable to reverse causation.
- **Case-control** — starts from outcome, looks backward at exposure; efficient for rare diseases; reports **odds ratios**; prone to recall bias.
- **Cohort** — starts from exposure, follows forward to outcome; reports **relative risk**; can establish temporality.
- **Randomized controlled trial (RCT)** — random assignment balances confounders (known and unknown); the gold standard for causation. Blinding (single/double) controls for placebo and observer effects.

## Variables and controls
- **Independent variable** is manipulated; **dependent variable** is measured.
- **Confounding variable** is associated with both exposure and outcome and distorts the relationship — controlled by randomization, restriction, matching, or statistical adjustment.
- A **positive control** confirms the assay can detect an effect; a **negative control** confirms the signal isn't an artifact.

## Validity and bias
- **Internal validity** — does the study correctly measure the relationship within its sample? Threatened by selection bias, measurement bias, and confounding.
- **External validity** — do results generalize to other populations?
- Common biases: **selection bias** (non-representative sampling), **recall bias** (differential memory of exposure), **observer/measurement bias** (corrected by blinding), **attrition bias** (differential dropout).

## How MCAT questions use this
You'll be given a figure or methods paragraph and asked: *what would strengthen the conclusion?*, *which control is missing?*, or *what alternative explanation does the design fail to rule out?* Always identify the design first, then its characteristic weakness.`,
  },
  {
    slug: 'mcat-biostatistics-mcat',
    title: 'Biostatistics for the MCAT',
    description:
      'Descriptive statistics, distributions, hypothesis testing, p-values and confidence intervals, and the risk/odds measures the MCAT expects you to interpret from passages and figures.',
    textContent: `# Biostatistics for the MCAT

The MCAT doesn't ask you to *compute* heavy statistics, but it constantly asks you to **interpret** them from figures and tables. Know what each measure means and when it's being misused.

## Describing data
- **Mean** is pulled toward outliers; **median** is robust. In a right-skewed distribution, mean > median.
- **Standard deviation** measures spread; **standard error of the mean** (SEM = SD/√n) measures precision of the *estimate* and shrinks with sample size.
- A **normal distribution** has ~68% of values within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD.

## Inference
- A **p-value** is the probability of observing data this extreme *if the null hypothesis were true*. p < 0.05 is the conventional threshold; it is **not** the probability the hypothesis is true.
- **Type I error (α)** = false positive (reject a true null); **Type II error (β)** = false negative; **power = 1 − β** rises with larger sample size and effect size.
- A **95% confidence interval** that excludes the null value (0 for a difference, 1 for a ratio) corresponds to p < 0.05. Wide intervals mean imprecise estimates.

## Risk and association measures
- **Relative risk (RR)** = risk in exposed ÷ risk in unexposed (cohorts/RCTs).
- **Odds ratio (OR)** approximates RR for rare outcomes (case-control studies).
- RR/OR = 1 → no effect; > 1 → increased risk; < 1 → protective.
- **Correlation (r)** ranges −1 to +1 and measures linear association only — never assume causation from a correlation, and watch for confounding or non-linear relationships.

## Statistical vs. clinical significance
A result can be statistically significant (p < 0.05) yet trivial in magnitude, especially with huge samples. MCAT answer choices often bait you into conflating the two — always check the effect size, not just the p-value.`,
  },
  {
    slug: 'mcat-quantitative-skills-mcat',
    title: 'Quantitative Skills & Data Analysis',
    description:
      'Unit analysis, scientific notation, ratios and percent change, log scales, and fast estimation — the no-calculator math the MCAT embeds throughout the science sections.',
    textContent: `# Quantitative Skills & Data Analysis

The MCAT is **calculator-free**, so it rewards estimation and unit reasoning over precise arithmetic. These skills appear in every science section.

## Dimensional analysis
Carry units through every calculation; the units of your answer tell you whether the setup is right. If a question asks for a force and your units come out as kg·m/s², you have newtons — you're correct. Mismatched units signal a flipped ratio.

## Scientific notation and estimation
- Multiply by adding exponents, divide by subtracting them: $(3\\times10^4)(2\\times10^{-2}) = 6\\times10^{2}$.
- Round aggressively, then adjust. The right answer choice is usually within a factor of 2 of a clean estimate, and distractors are often off by a power of 10.

## Ratios, proportions, and percent change
- Many MCAT relationships are proportional: if $F = \\frac{kq_1q_2}{r^2}$ and you double $r$, force drops to one-quarter. Reason about how the answer *scales* rather than plugging numbers.
- **Percent change** = $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. A doubling is a +100% change; halving is −50%.

## Logarithms and semi-log plots
- $\\text{pH} = -\\log[\\text{H}^+]$, so each pH unit is a 10× change in concentration. The same log intuition covers pKa, decibels, and the Nernst equation.
- On a **semi-log plot**, exponential processes (radioactive decay, first-order kinetics, bacterial growth) become straight lines — recognizing this lets you read rate constants off a graph.

## Reading graphs under time pressure
Identify the axes and units first, find the trend (linear, saturating, exponential), and locate the specific point the question targets. Most MCAT "calculations" are really careful graph reading plus one proportional step.`,
  },
]

async function main() {
  const category = await prisma.category.findUnique({ where: { slug: 'mcat-strategy' } })
  if (!category) throw new Error('Category mcat-strategy not found — is this an MCAT-seeded DB?')

  const maxOrder = await prisma.topic.aggregate({
    where: { categoryId: category.id },
    _max: { order: true },
  })
  let order = (maxOrder._max.order ?? 0) + 1

  let created = 0
  let updated = 0
  for (const t of TOPICS) {
    const existing = await prisma.topic.findUnique({ where: { slug: t.slug }, select: { id: true } })
    await prisma.topic.upsert({
      where: { slug: t.slug },
      create: { ...t, categoryId: category.id, order: order++ },
      // Don't clobber order/category on re-run; only refresh editable content.
      update: { title: t.title, description: t.description, textContent: t.textContent },
    })
    existing ? updated++ : created++
  }
  console.log(`MCAT skills topics — created: ${created}, updated: ${updated} (category ${category.slug})`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
