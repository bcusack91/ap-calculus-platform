import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Calculus AB course, categories, and topics...')

  // Ensure the course exists
  const course = await prisma.course.upsert({
    where: { slug: 'ap-calculus-ab' },
    update: {},
    create: {
      slug: 'ap-calculus-ab',
      name: 'AP Calculus AB',
      icon: '∫',
      description: 'Master limits, derivatives, integrals, and their applications for the AP Calculus AB exam.',
      order: 4,
      color: 'purple',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Limits & Continuity ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'calcab-limits-continuity' },
    update: {},
    create: {
      slug: 'calcab-limits-continuity',
      name: 'Limits & Continuity',
      description: 'Evaluating limits, squeeze theorem, continuity, and the Intermediate Value Theorem',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Limits & Continuity')

  await prisma.topic.upsert({
    where: { slug: 'limits-continuity-calcab' },
    update: {},
    create: {
      slug: 'limits-continuity-calcab',
      title: 'Limits & Continuity',
      description: 'Limit definition, evaluation, one-sided limits, squeeze theorem, and IVT',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# ∫ Limits & Continuity\n\nMaster limit evaluation techniques, the squeeze theorem, continuity, and the Intermediate Value Theorem.`,
    },
  })

  // ─── Unit 2: Differentiation Fundamentals ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'calcab-differentiation-fundamentals' },
    update: {},
    create: {
      slug: 'calcab-differentiation-fundamentals',
      name: 'Differentiation Fundamentals',
      description: 'Definition of the derivative, basic rules, chain rule, and implicit differentiation',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Differentiation Fundamentals')

  await prisma.topic.upsert({
    where: { slug: 'definition-of-derivative-calcab' },
    update: {},
    create: {
      slug: 'definition-of-derivative-calcab',
      title: 'Definition of the Derivative',
      description: 'Derivative as a limit, differentiability, graphical interpretation, and tangent lines',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∫ Definition of the Derivative\n\nUnderstand the derivative as a limit, differentiability, and the connection between graphs and derivatives.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'basic-differentiation-rules-calcab' },
    update: {},
    create: {
      slug: 'basic-differentiation-rules-calcab',
      title: 'Basic Differentiation Rules',
      description: 'Power rule, product rule, quotient rule, trig derivatives, and higher-order derivatives',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∫ Basic Differentiation Rules\n\nMaster the power, product, and quotient rules along with derivatives of trigonometric functions.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'chain-rule-calcab' },
    update: {},
    create: {
      slug: 'chain-rule-calcab',
      title: 'Chain Rule',
      description: 'Chain rule, implicit differentiation, and related rates',
      order: 3,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∫ Chain Rule\n\nApply the chain rule to composite functions, use implicit differentiation, and solve related rates problems.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'inverse-functions-derivatives-calcab' },
    update: {},
    create: {
      slug: 'inverse-functions-derivatives-calcab',
      title: 'Inverse Functions & Derivatives',
      description: 'Derivatives of inverse functions, inverse trig derivatives, and logarithmic differentiation',
      order: 4,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# ∫ Inverse Functions & Derivatives\n\nFind derivatives of inverse functions, inverse trig functions, and use logarithmic differentiation.`,
    },
  })

  // ─── Unit 3: Applications of Derivatives ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'calcab-applications-derivatives' },
    update: {},
    create: {
      slug: 'calcab-applications-derivatives',
      name: 'Applications of Derivatives',
      description: 'Critical points, curve sketching, optimization, and linearization',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Applications of Derivatives')

  await prisma.topic.upsert({
    where: { slug: 'applications-of-derivatives-calcab' },
    update: {},
    create: {
      slug: 'applications-of-derivatives-calcab',
      title: 'Applications of Derivatives',
      description: 'Critical points, first/second derivative tests, concavity, and curve sketching',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∫ Applications of Derivatives\n\nAnalyze functions using critical points, derivative tests, concavity, inflection points, and curve sketching.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'optimization-calcab' },
    update: {},
    create: {
      slug: 'optimization-calcab',
      title: 'Optimization',
      description: 'Setting up and solving optimization problems in business and geometry',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∫ Optimization\n\nLearn to set up constraint equations and solve optimization problems in business, geometry, and science.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'linearization-differentials-calcab' },
    update: {},
    create: {
      slug: 'linearization-differentials-calcab',
      title: 'Linearization & Differentials',
      description: 'Linear approximation, differentials, error estimation, and tangent line approximation',
      order: 3,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∫ Linearization & Differentials\n\nUse linear approximation and differentials for error estimation and tangent line approximations.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'theorem-applications-calcab' },
    update: {},
    create: {
      slug: 'theorem-applications-calcab',
      title: 'Theorem Applications',
      description: 'Mean Value Theorem, Rolle\'s Theorem, Extreme Value Theorem, and IVT applications',
      order: 4,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∫ Theorem Applications\n\nApply the Mean Value Theorem, Extreme Value Theorem, and IVT to analyze function behavior.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'particle-motion-calcab' },
    update: {},
    create: {
      slug: 'particle-motion-calcab',
      title: 'Particle Motion',
      description: 'Position, velocity, acceleration, speed, displacement, and distance',
      order: 5,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# ∫ Particle Motion\n\nAnalyze motion using position, velocity, acceleration, speed vs. velocity, and displacement vs. distance.`,
    },
  })

  // ─── Unit 4: Integration ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'calcab-integration' },
    update: {},
    create: {
      slug: 'calcab-integration',
      name: 'Integration',
      description: 'Riemann sums, definite integrals, FTC, antiderivatives, and u-substitution',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Integration')

  await prisma.topic.upsert({
    where: { slug: 'definite-integrals-calcab' },
    update: {},
    create: {
      slug: 'definite-integrals-calcab',
      title: 'Definite Integrals',
      description: 'Riemann sums, definite integral definition, properties, and the Fundamental Theorem of Calculus',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∫ Definite Integrals\n\nMaster Riemann sums, the definite integral, properties, and both parts of the Fundamental Theorem of Calculus.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'antiderivatives-indefinite-integrals-calcab' },
    update: {},
    create: {
      slug: 'antiderivatives-indefinite-integrals-calcab',
      title: 'Antiderivatives & Indefinite Integrals',
      description: 'Antiderivative basics, power rule for integration, trig antiderivatives, and initial value problems',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∫ Antiderivatives & Indefinite Integrals\n\nFind antiderivatives using the power rule, trig rules, and solve initial value problems.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'u-substitution-calcab' },
    update: {},
    create: {
      slug: 'u-substitution-calcab',
      title: 'u-Substitution',
      description: 'Basic u-substitution, definite integrals with u-sub, and complex substitutions',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∫ u-Substitution\n\nMaster u-substitution for both indefinite and definite integrals including complex substitution techniques.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'accumulation-functions-calcab' },
    update: {},
    create: {
      slug: 'accumulation-functions-calcab',
      title: 'Accumulation Functions',
      description: 'Accumulation concept, interpreting integrals, FTC connections, and rate in vs rate out',
      order: 4,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# ∫ Accumulation Functions\n\nUnderstand accumulation functions, interpret integrals in context, and connect to the FTC.`,
    },
  })

  // ─── Unit 5: Applications of Integration ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'calcab-integration-applications' },
    update: {},
    create: {
      slug: 'calcab-integration-applications',
      name: 'Applications of Integration',
      description: 'Area, volumes, average value, and real-world integration applications',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Applications of Integration')

  await prisma.topic.upsert({
    where: { slug: 'area-between-curves-calcab' },
    update: {},
    create: {
      slug: 'area-between-curves-calcab',
      title: 'Area Between Curves',
      description: 'Area under curves, between curves, horizontal slicing, and multiple regions',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# ∫ Area Between Curves\n\nCalculate areas under curves, between curves, and using horizontal slicing for complex regions.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'volumes-of-revolution-calcab' },
    update: {},
    create: {
      slug: 'volumes-of-revolution-calcab',
      title: 'Volumes of Revolution',
      description: 'Disk method, washer method, shell method, and cross-section volumes',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# ∫ Volumes of Revolution\n\nCompute volumes using disk, washer, and shell methods, plus volumes with known cross-sections.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'integration-applications-calcab' },
    update: {},
    create: {
      slug: 'integration-applications-calcab',
      title: 'Integration Applications',
      description: 'Average value, MVT for integrals, net change theorem, and real-world applications',
      order: 3,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# ∫ Integration Applications\n\nApply average value, the Mean Value Theorem for integrals, net change theorem, and solve real-world problems.`,
    },
  })

  // ─── Unit 6: Differential Equations & Modeling ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'calcab-differential-equations' },
    update: {},
    create: {
      slug: 'calcab-differential-equations',
      name: 'Differential Equations & Modeling',
      description: 'Slope fields, separation of variables, and exponential models',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Differential Equations & Modeling')

  await prisma.topic.upsert({
    where: { slug: 'differential-equations-calcab' },
    update: {},
    create: {
      slug: 'differential-equations-calcab',
      title: 'Differential Equations',
      description: 'Intro to DEs, slope fields, separation of variables, and exponential growth/decay',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ∫ Differential Equations\n\nSolve differential equations using slope fields, separation of variables, and model exponential growth and decay.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'exponential-models-calcab' },
    update: {},
    create: {
      slug: 'exponential-models-calcab',
      title: 'Exponential Models',
      description: 'Exponential growth/decay, Newton cooling, population models, and continuous compounding',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# ∫ Exponential Models\n\nModel real-world phenomena with exponential growth and decay, including population and cooling models.`,
    },
  })

  // ─── Unit 7: AP Exam Preparation ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'calcab-exam-prep' },
    update: {},
    create: {
      slug: 'calcab-exam-prep',
      name: 'AP Exam Preparation',
      description: 'FRQ strategies, tables/data analysis, and full exam review',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: AP Exam Preparation')

  await prisma.topic.upsert({
    where: { slug: 'tables-data-calcab' },
    update: {},
    create: {
      slug: 'tables-data-calcab',
      title: 'Tables & Data',
      description: 'Reading tables, approximating derivatives, trapezoidal rule, and Riemann sums from data',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# ∫ Tables & Data\n\nInterpret data tables to approximate derivatives, apply the trapezoidal rule, and compute Riemann sums.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'free-response-strategies-calcab' },
    update: {},
    create: {
      slug: 'free-response-strategies-calcab',
      title: 'Free Response Strategies',
      description: 'FRQ format, calculator tips, justification techniques, and common mistakes',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# ∫ Free Response Strategies\n\nMaster FRQ format, calculator and no-calculator strategies, proper justifications, and avoid common mistakes.`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'ap-exam-review-calcab' },
    update: {},
    create: {
      slug: 'ap-exam-review-calcab',
      title: 'AP Exam Review',
      description: 'Comprehensive review of all units and full practice exam tips',
      order: 3,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# ∫ AP Exam Review\n\nReview all AB topics by unit with focused practice and full exam preparation strategies.`,
    },
  })

  console.log('\n🎉 AP Calculus AB seeding complete!')
  console.log(`  📚 7 categories, 22 topics created`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
