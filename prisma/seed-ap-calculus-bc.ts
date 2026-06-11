import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Calculus BC course, categories, and topics...')

  // Ensure the course exists
  const course = await prisma.course.upsert({
    where: { slug: 'ap-calculus-bc' },
    update: {},
    create: {
      slug: 'ap-calculus-bc',
      name: 'AP Calculus BC',
      icon: '∬',
      description: 'Extend your calculus knowledge with advanced integration, sequences, series, parametric/polar calculus, and vector-valued functions.',
      order: 5,
      color: 'violet',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Advanced Integration Techniques ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'calcbc-advanced-integration' },
    update: {},
    create: {
      slug: 'calcbc-advanced-integration',
      name: 'Advanced Integration Techniques',
      description: 'Integration by parts, partial fractions, improper integrals, and advanced methods',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Advanced Integration Techniques')

  await prisma.topic.upsert({
    where: { slug: 'integration-by-parts-calcbc' },
    update: {},
    create: {
      slug: 'integration-by-parts-calcbc',
      title: 'Integration by Parts',
      description: 'IBP formula, LIATE strategy, repeated IBP, tabular method, and applications',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ∬ Integration by Parts\n\nMaster the integration by parts formula, LIATE strategy, tabular method, and applications.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'partial-fractions-calcbc' },
    update: {},
    create: {
      slug: 'partial-fractions-calcbc',
      title: 'Partial Fractions',
      description: 'Decomposition with distinct, repeated, and irreducible quadratic factors',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ∬ Partial Fractions\n\nDecompose rational expressions and integrate using partial fraction techniques.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'improper-integrals-calcbc' },
    update: {},
    create: {
      slug: 'improper-integrals-calcbc',
      title: 'Improper Integrals',
      description: 'Type I and II improper integrals, convergence tests, and comparison test',
      order: 3,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ∬ Improper Integrals\n\nEvaluate improper integrals with infinite bounds and discontinuous integrands, and determine convergence.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'advanced-integration-calcbc' },
    update: {},
    create: {
      slug: 'advanced-integration-calcbc',
      title: 'Advanced Integration',
      description: 'Trig substitution, advanced u-sub, integration strategies, and reduction formulas',
      order: 4,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ∬ Advanced Integration\n\nApply trig substitution, advanced u-substitution, and integration strategy selection for complex integrals.`,
    },
  })

  // ─── Unit 2: Parametric, Polar & Vector Calculus ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'calcbc-parametric-polar-vector' },
    update: {},
    create: {
      slug: 'calcbc-parametric-polar-vector',
      name: 'Parametric, Polar & Vector Calculus',
      description: 'Calculus with parametric, polar, and vector-valued functions',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Parametric, Polar & Vector Calculus')

  await prisma.topic.upsert({
    where: { slug: 'parametric-curves-calculus-calcbc' },
    update: {},
    create: {
      slug: 'parametric-curves-calculus-calcbc',
      title: 'Parametric Curves & Calculus',
      description: 'Parametric derivatives, second derivatives, arc length, speed, and area',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∬ Parametric Curves & Calculus\n\nCompute derivatives, arc length, speed, and area for parametric curves.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'polar-calculus-calcbc' },
    update: {},
    create: {
      slug: 'polar-calculus-calcbc',
      title: 'Polar Calculus',
      description: 'Polar derivatives, area in polar, arc length, and intersections',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∬ Polar Calculus\n\nCalculate derivatives, areas, arc lengths, and find intersections of polar curves.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'vector-valued-functions-calcbc' },
    update: {},
    create: {
      slug: 'vector-valued-functions-calcbc',
      title: 'Vector-Valued Functions',
      description: 'Vector functions, derivatives, integrals, velocity, acceleration, and planar motion',
      order: 3,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∬ Vector-Valued Functions\n\nAnalyze vector functions including derivatives, integrals, velocity, acceleration, and motion in the plane.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'arc-length-surface-area-calcbc' },
    update: {},
    create: {
      slug: 'arc-length-surface-area-calcbc',
      title: 'Arc Length & Surface Area',
      description: 'Arc length in rectangular, parametric, and polar; surface area of revolution',
      order: 4,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∬ Arc Length & Surface Area\n\nCompute arc length and surface area of revolution in rectangular, parametric, and polar coordinates.`,
    },
  })

  // ─── Unit 3: Sequences & Series ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'calcbc-sequences-series' },
    update: {},
    create: {
      slug: 'calcbc-sequences-series',
      name: 'Sequences & Series',
      description: 'Infinite sequences, series, convergence tests, and error bounds',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Sequences & Series')

  await prisma.topic.upsert({
    where: { slug: 'infinite-sequences-calcbc' },
    update: {},
    create: {
      slug: 'infinite-sequences-calcbc',
      title: 'Infinite Sequences',
      description: 'Sequence basics, convergence, bounded/monotonic sequences, and limits',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∬ Infinite Sequences\n\nStudy sequences, convergence and divergence, bounded and monotonic sequences, and their limits.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'infinite-series-calcbc' },
    update: {},
    create: {
      slug: 'infinite-series-calcbc',
      title: 'Infinite Series',
      description: 'Geometric series, telescoping series, nth term test, and harmonic series',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∬ Infinite Series\n\nExplore geometric series, telescoping series, the nth term test, and the harmonic series.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'convergence-tests-summary-calcbc' },
    update: {},
    create: {
      slug: 'convergence-tests-summary-calcbc',
      title: 'Convergence Tests Summary',
      description: 'Direct comparison, limit comparison, ratio test, root test, and choosing tests',
      order: 3,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∬ Convergence Tests Summary\n\nMaster all convergence tests and learn strategies for choosing the right test.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'alternating-series-calcbc' },
    update: {},
    create: {
      slug: 'alternating-series-calcbc',
      title: 'Alternating Series',
      description: 'Alternating series test, error bound, conditional vs absolute convergence',
      order: 4,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∬ Alternating Series\n\nApply the alternating series test, compute error bounds, and distinguish conditional from absolute convergence.`,
    },
  })

  // ─── Unit 4: Power Series & Taylor/Maclaurin ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'calcbc-power-taylor' },
    update: {},
    create: {
      slug: 'calcbc-power-taylor',
      name: 'Power Series & Taylor/Maclaurin',
      description: 'Power series, Taylor/Maclaurin series, Lagrange error, and applications',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Power Series & Taylor/Maclaurin')

  await prisma.topic.upsert({
    where: { slug: 'power-series-calcbc' },
    update: {},
    create: {
      slug: 'power-series-calcbc',
      title: 'Power Series',
      description: 'Power series basics, radius and interval of convergence, differentiation and integration',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∬ Power Series\n\nStudy power series, find radius and interval of convergence, and differentiate/integrate power series.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'taylor-maclaurin-series-calcbc' },
    update: {},
    create: {
      slug: 'taylor-maclaurin-series-calcbc',
      title: 'Taylor & Maclaurin Series',
      description: 'Taylor series, Maclaurin series, common series, and Taylor polynomials',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∬ Taylor & Maclaurin Series\n\nConstruct Taylor and Maclaurin series, use common series, and build Taylor polynomials.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'lagrange-error-bound-calcbc' },
    update: {},
    create: {
      slug: 'lagrange-error-bound-calcbc',
      title: 'Lagrange Error Bound',
      description: 'Error bound formula, finding maximum error, choosing polynomial degree',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∬ Lagrange Error Bound\n\nApply the Lagrange error bound to determine polynomial approximation accuracy.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'series-applications-calcbc' },
    update: {},
    create: {
      slug: 'series-applications-calcbc',
      title: 'Series Applications',
      description: 'Function approximation, solving DEs with series, physics applications, and error analysis',
      order: 4,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∬ Series Applications\n\nApply series to approximate functions, solve differential equations, and analyze physics problems.`,
    },
  })

  // ─── Unit 5: Advanced Differential Equations ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'calcbc-advanced-de' },
    update: {},
    create: {
      slug: 'calcbc-advanced-de',
      name: 'Advanced Differential Equations',
      description: 'Euler method, logistic models, and advanced DE techniques',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Advanced Differential Equations')

  await prisma.topic.upsert({
    where: { slug: 'euler-method-advanced-calcbc' },
    update: {},
    create: {
      slug: 'euler-method-advanced-calcbc',
      title: 'Euler Method',
      description: 'Euler method basics, step-by-step process, error analysis, and improved methods',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# ∬ Euler Method\n\nApproximate solutions to differential equations using Euler\'s method with error analysis.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'logistic-models-calcbc' },
    update: {},
    create: {
      slug: 'logistic-models-calcbc',
      title: 'Logistic Models',
      description: 'Logistic equation, carrying capacity, solving logistic DEs, and inflection points',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# ∬ Logistic Models\n\nAnalyze logistic growth models including carrying capacity, solving DEs, and finding inflection points.`,
    },
  })

  // ─── Unit 6: BC Exam Preparation ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'calcbc-exam-prep' },
    update: {},
    create: {
      slug: 'calcbc-exam-prep',
      name: 'BC Exam Preparation',
      description: 'BC-specific strategies, exam tips, and comprehensive review',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: BC Exam Preparation')

  await prisma.topic.upsert({
    where: { slug: 'bc-exam-strategies-calcbc' },
    update: {},
    create: {
      slug: 'bc-exam-strategies-calcbc',
      title: 'BC Exam Strategies',
      description: 'BC-specific topics, calculator strategies, series FRQ tips, and time management',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ∬ BC Exam Strategies\n\nMaster BC-specific exam strategies for series, parametric/polar, and time management.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'review-connections-calcbc' },
    update: {},
    create: {
      slug: 'review-connections-calcbc',
      title: 'Review & Connections',
      description: 'AB review, BC unique topics, series mastery, parametric/polar review, and full exam prep',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ∬ Review & Connections\n\nComprehensive review connecting AB foundations with BC-specific topics for full exam readiness.`,
    },
  })

  console.log('\n🎉 AP Calculus BC seeding complete!')
  console.log(`  📚 6 categories, 20 topics created`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
