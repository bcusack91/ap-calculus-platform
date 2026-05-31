import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Official College Board SAT Reading & Writing domains.
// Maps each R&W topic slug to its domain category slug.
const TOPIC_TO_DOMAIN: Record<string, string> = {
  // Information and Ideas
  'sat-reading-comprehension': 'sat-reading-info-ideas',
  'sat-finding-textual-evidence': 'sat-reading-info-ideas',
  'sat-command-evidence': 'sat-reading-info-ideas',
  'sat-central-ideas-details': 'sat-reading-info-ideas',
  // Craft and Structure
  'sat-vocabulary-context': 'sat-craft-structure',
  // Expression of Ideas
  'sat-effective-language-use': 'sat-expression-ideas',
  'sat-transitions-organization': 'sat-expression-ideas',
  'sat-conciseness-redundancy': 'sat-expression-ideas',
  // Standard English Conventions
  'sat-grammar-conventions': 'sat-english-conventions',
  'sat-subject-verb-agreement': 'sat-english-conventions',
  'sat-grammar-usage': 'sat-english-conventions',
  'sat-punctuation': 'sat-english-conventions',
  'sat-punctuation-commas-semicolons': 'sat-english-conventions',
  'sat-sentence-structure': 'sat-english-conventions',
  'sat-pronoun-agreement': 'sat-english-conventions',
}

// Desired category name/order. Keyed by final slug.
const CATEGORY_CONFIG: { slug: string; name: string; order: number; description: string }[] = [
  { slug: 'sat-heart-of-algebra', name: 'Heart of Algebra', order: 1, description: 'Linear equations, inequalities, systems, and functions.' },
  { slug: 'sat-problem-solving-data', name: 'Problem Solving and Data Analysis', order: 2, description: 'Ratios, percentages, statistics, probability, and data interpretation.' },
  { slug: 'sat-passport-advanced-math', name: 'Passport to Advanced Math', order: 3, description: 'Quadratics, polynomials, exponents, radicals, and nonlinear functions.' },
  { slug: 'sat-additional-topics', name: 'Additional Topics in Math', order: 4, description: 'Geometry, trigonometry, circles, and complex numbers.' },
  { slug: 'sat-reading-info-ideas', name: 'Information and Ideas', order: 5, description: 'Central ideas, details, command of textual and quantitative evidence, and inferences.' },
  { slug: 'sat-craft-structure', name: 'Craft and Structure', order: 6, description: 'Words in context, text structure and purpose, and cross-text connections.' },
  { slug: 'sat-expression-ideas', name: 'Expression of Ideas', order: 7, description: 'Rhetorical synthesis, transitions, organization, and effective language use.' },
  { slug: 'sat-english-conventions', name: 'Standard English Conventions', order: 8, description: 'Sentence structure, punctuation, grammar, usage, and conventions.' },
  { slug: 'sat-test-strategies', name: 'Test-Taking Strategies', order: 9, description: 'Pacing, calculator use, and process of elimination.' },
]

async function main() {
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' } })
  if (!course) throw new Error('sat-prep course not found')

  console.log('Reorganizing SAT Reading & Writing into official College Board domains...\n')

  // 1) Repurpose the empty "Reading: Command of Evidence" category into "Craft and Structure".
  const commandEvidenceCat = await prisma.category.findUnique({ where: { slug: 'sat-command-evidence' } })
  if (commandEvidenceCat) {
    await prisma.category.update({
      where: { id: commandEvidenceCat.id },
      data: { slug: 'sat-craft-structure', name: 'Craft and Structure' },
    })
    console.log('Repurposed category sat-command-evidence -> sat-craft-structure (Craft and Structure)')
  }

  // 2) Apply canonical names/orders/descriptions to all SAT categories.
  for (const cfg of CATEGORY_CONFIG) {
    const cat = await prisma.category.findUnique({ where: { slug: cfg.slug } })
    if (!cat || cat.courseId !== course.id) {
      console.log(`  (skip) category not found: ${cfg.slug}`)
      continue
    }
    await prisma.category.update({
      where: { id: cat.id },
      data: { name: cfg.name, order: cfg.order, description: cfg.description },
    })
    console.log(`  order ${cfg.order}: ${cfg.name} [${cfg.slug}]`)
  }

  // 3) Move each R&W topic into its proper domain, ordered within the domain.
  console.log('\nReassigning R&W topics:')
  const domainCounters: Record<string, number> = {}
  for (const [topicSlug, domainSlug] of Object.entries(TOPIC_TO_DOMAIN)) {
    const domain = await prisma.category.findUnique({ where: { slug: domainSlug } })
    if (!domain) {
      console.log(`  (skip) domain not found: ${domainSlug}`)
      continue
    }
    const order = (domainCounters[domainSlug] = (domainCounters[domainSlug] ?? 0) + 1)
    const res = await prisma.topic.updateMany({
      where: { slug: topicSlug },
      data: { categoryId: domain.id, order },
    })
    if (res.count > 0) console.log(`  ${topicSlug} -> ${domainSlug} (order ${order})`)
    else console.log(`  (skip) topic not found: ${topicSlug}`)
  }

  // 4) Delete the now-empty generic "SAT Reading and Writing" bucket.
  const generic = await prisma.category.findUnique({
    where: { slug: 'sat-reading-writing' },
    include: { _count: { select: { topics: true } } },
  })
  if (generic) {
    if (generic._count.topics === 0) {
      await prisma.category.delete({ where: { id: generic.id } })
      console.log('\nDeleted empty generic category: sat-reading-writing')
    } else {
      console.log(`\n(WARN) sat-reading-writing still has ${generic._count.topics} topics; not deleting`)
    }
  }

  // 5) Delete the thin duplicate "Systems of Linear Equations" topic.
  const dup = await prisma.topic.findUnique({ where: { slug: 'sat-systems-equations' } })
  if (dup) {
    await prisma.topic.delete({ where: { id: dup.id } })
    console.log('Deleted duplicate topic: sat-systems-equations')
  }

  console.log('\nDone.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
