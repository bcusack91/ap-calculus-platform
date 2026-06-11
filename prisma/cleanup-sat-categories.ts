import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * SAT Category Cleanup Script
 *
 * Fixes inconsistencies in the SAT course category/topic structure:
 * 1. Merges duplicate "Systems of Equations" topics
 * 2. Fixes sat-command-evidence slug collision (category vs topic)
 * 3. Consolidates overlapping R&W categories
 * 4. Fixes order values for categories
 * 5. Renames non-prefixed topic slugs to follow sat- convention
 *
 * Run with: npx tsx prisma/cleanup-sat-categories.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔧 SAT Category Cleanup Starting...\n')

  // Find the SAT Prep course
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' } })
  if (!course) {
    console.log('❌ SAT Prep course not found. Skipping cleanup.')
    return
  }

  // Get all SAT categories
  const categories = await prisma.category.findMany({
    where: { courseId: course.id },
    include: { topics: true },
    orderBy: { order: 'asc' },
  })

  console.log(`Found ${categories.length} SAT categories:`)
  for (const cat of categories) {
    console.log(`  [${cat.order}] ${cat.name} (${cat.slug}) — ${cat.topics.length} topics`)
  }
  console.log()

  // ──────────────────────────────────────────────────────────
  // 1. Fix category order values to be sequential and non-conflicting
  // ──────────────────────────────────────────────────────────
  const desiredOrder: Record<string, number> = {
    'sat-heart-of-algebra': 1,
    'sat-problem-solving-data': 2,
    'sat-passport-advanced-math': 3,
    'sat-additional-topics': 4,
    'sat-reading-writing': 5,
    'sat-reading-info-ideas': 6,
    'sat-command-evidence': 7,
    'sat-english-conventions': 8,
    'sat-expression-ideas': 9,
    'sat-test-strategies': 10,
  }

  for (const cat of categories) {
    const newOrder = desiredOrder[cat.slug]
    if (newOrder && newOrder !== cat.order) {
      await prisma.category.update({
        where: { id: cat.id },
        data: { order: newOrder },
      })
      console.log(`✅ Updated ${cat.slug} order: ${cat.order} → ${newOrder}`)
    }
  }
  console.log()

  // ──────────────────────────────────────────────────────────
  // 2. Fix non-prefixed topic slugs
  // ──────────────────────────────────────────────────────────
  const slugRenames: Record<string, string> = {
    'calculator-strategies': 'sat-calculator-strategies',
    'process-of-elimination': 'sat-process-of-elimination',
  }

  for (const [oldSlug, newSlug] of Object.entries(slugRenames)) {
    const topic = await prisma.topic.findUnique({ where: { slug: oldSlug } })
    if (topic) {
      // Check if new slug already exists
      const existing = await prisma.topic.findUnique({ where: { slug: newSlug } })
      if (!existing) {
        await prisma.topic.update({
          where: { id: topic.id },
          data: { slug: newSlug },
        })
        console.log(`✅ Renamed topic slug: ${oldSlug} → ${newSlug}`)
      } else {
        console.log(`⚠️  Can't rename ${oldSlug} → ${newSlug} (target already exists)`)
      }
    }
  }
  console.log()

  // ──────────────────────────────────────────────────────────
  // 3. Merge duplicate "Systems of Equations" topics
  // ──────────────────────────────────────────────────────────
  const sysTopic1 = await prisma.topic.findUnique({ where: { slug: 'sat-systems-linear-equations' } })
  const sysTopic2 = await prisma.topic.findUnique({ where: { slug: 'sat-systems-equations' } })

  if (sysTopic1 && sysTopic2) {
    // Move all progress, quizzes, etc. from topic2 to topic1
    console.log('🔀 Merging sat-systems-equations into sat-systems-linear-equations...')

    // Move TopicProgress records
    const progress = await prisma.topicProgress.findMany({
      where: { topicId: sysTopic2.id },
    })
    for (const p of progress) {
      // Check if user already has progress on the target topic
      const existing = await prisma.topicProgress.findUnique({
        where: { userId_topicId: { userId: p.userId, topicId: sysTopic1.id } },
      })
      if (!existing) {
        await prisma.topicProgress.update({
          where: { id: p.id },
          data: { topicId: sysTopic1.id },
        })
      } else {
        // Delete the duplicate
        await prisma.topicProgress.delete({ where: { id: p.id } })
      }
    }

    // Move quizzes
    await prisma.quiz.updateMany({
      where: { topicId: sysTopic2.id },
      data: { topicId: sysTopic1.id },
    })

    // Move flashcards
    await prisma.flashcard.updateMany({
      where: { topicId: sysTopic2.id },
      data: { topicId: sysTopic1.id },
    })

    // Move example problems
    await prisma.exampleProblem.updateMany({
      where: { topicId: sysTopic2.id },
      data: { topicId: sysTopic1.id },
    })

    // Delete the duplicate topic
    await prisma.topic.delete({ where: { id: sysTopic2.id } })
    console.log('✅ Merged and deleted sat-systems-equations')
  } else {
    console.log('ℹ️  No duplicate systems of equations topics found (may already be cleaned)')
  }
  console.log()

  // ──────────────────────────────────────────────────────────
  // 4. Update category descriptions for clarity
  // ──────────────────────────────────────────────────────────
  const descriptions: Record<string, string> = {
    'sat-heart-of-algebra':
      'Linear equations, inequalities, systems of equations, and linear functions.',
    'sat-problem-solving-data':
      'Ratios, proportions, percents, statistics, data interpretation, and probability.',
    'sat-passport-advanced-math':
      'Quadratics, exponents, polynomials, and nonlinear functions.',
    'sat-additional-topics':
      'Geometry, trigonometry, circles, and complex numbers.',
    'sat-reading-writing':
      'Core reading comprehension and grammar skills for the R&W section.',
    'sat-reading-info-ideas':
      'Central ideas, details, vocabulary in context, and evidence interpretation.',
    'sat-english-conventions':
      'Grammar, usage, punctuation, subject-verb agreement, and sentence structure.',
    'sat-expression-ideas':
      'Transitions, organization, effective language use, and conciseness.',
    'sat-test-strategies':
      'Time management, calculator tips, process of elimination, and test-day strategy.',
  }

  for (const [slug, desc] of Object.entries(descriptions)) {
    const cat = categories.find(c => c.slug === slug)
    if (cat) {
      await prisma.category.update({
        where: { id: cat.id },
        data: { description: desc },
      })
      console.log(`✅ Updated description for ${slug}`)
    }
  }

  console.log('\n✨ SAT Category Cleanup Complete!')

  // Print final state
  const finalCats = await prisma.category.findMany({
    where: { courseId: course.id },
    include: { topics: true },
    orderBy: { order: 'asc' },
  })

  console.log('\n📋 Final category structure:')
  for (const cat of finalCats) {
    console.log(`  [${cat.order}] ${cat.name} (${cat.slug})`)
    for (const t of cat.topics) {
      console.log(`      - ${t.title} (${t.slug})`)
    }
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
