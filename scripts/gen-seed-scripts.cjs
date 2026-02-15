const fs = require('fs');

// ═══════════════════════════════════════════════════
// AP Precalculus Seed Script Generator
// ═══════════════════════════════════════════════════
function genPrecalcSeed() {
  return `import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus course, categories, and topics...')

  // Ensure the course exists
  const course = await prisma.course.upsert({
    where: { slug: 'ap-precalculus' },
    update: {},
    create: {
      slug: 'ap-precalculus',
      name: 'AP Precalculus',
      icon: '📈',
      description: 'Master polynomial, rational, exponential, logarithmic, and trigonometric functions along with conic sections, vectors, and an introduction to limits.',
      order: 3,
      color: 'blue',
    },
  })
  console.log(\`✓ Course: \${course.name}\`)

  // ─── Unit 1: Polynomial & Rational Functions ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'precalc-polynomial-rational' },
    update: {},
    create: {
      slug: 'precalc-polynomial-rational',
      name: 'Polynomial & Rational Functions',
      description: 'Polynomials, rational functions, end behavior, zeros, and asymptotes',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Polynomial & Rational Functions')

  await prisma.topic.upsert({
    where: { slug: 'polynomial-functions-precalc' },
    update: {},
    create: {
      slug: 'polynomial-functions-precalc',
      title: 'Polynomial Functions',
      description: 'End behavior, zeros, multiplicity, graphing, and polynomial division',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: \`# 📈 Polynomial Functions\\n\\nStudy polynomial behavior including end behavior, zeros and multiplicity, graphing techniques, and polynomial division.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'rational-functions-precalc' },
    update: {},
    create: {
      slug: 'rational-functions-precalc',
      title: 'Rational Functions',
      description: 'Vertical, horizontal, and slant asymptotes, graphing, and solving rational equations',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: \`# 📈 Rational Functions\\n\\nAnalyze rational functions including asymptotes, holes, graphing, and solving rational equations.\`,
    },
  })

  // ─── Unit 2: Exponential & Logarithmic Functions ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'precalc-exponential-logarithmic' },
    update: {},
    create: {
      slug: 'precalc-exponential-logarithmic',
      name: 'Exponential & Logarithmic Functions',
      description: 'Exponential growth/decay, logarithms, properties, and applications',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Exponential & Logarithmic Functions')

  await prisma.topic.upsert({
    where: { slug: 'exponential-functions-precalc' },
    update: {},
    create: {
      slug: 'exponential-functions-precalc',
      title: 'Exponential Functions',
      description: 'Exponential growth, decay, transformations, compound interest, and the number e',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: \`# 📈 Exponential Functions\\n\\nExplore exponential growth and decay, transformations, real-world models, and compound interest.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'logarithmic-functions-precalc' },
    update: {},
    create: {
      slug: 'logarithmic-functions-precalc',
      title: 'Logarithmic Functions',
      description: 'Logarithm properties, solving equations, change of base, and logarithmic models',
      order: 2,
      categoryId: unit2.id,
      isPremium: false,
      textContent: \`# 📈 Logarithmic Functions\\n\\nMaster logarithm properties, solving equations, change of base formula, and real-world logarithmic models.\`,
    },
  })

  // ─── Unit 3: Function Analysis ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'precalc-function-analysis' },
    update: {},
    create: {
      slug: 'precalc-function-analysis',
      name: 'Function Analysis',
      description: 'Composition, inverses, and transformations of functions',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Function Analysis')

  await prisma.topic.upsert({
    where: { slug: 'function-composition-inverses-precalc' },
    update: {},
    create: {
      slug: 'function-composition-inverses-precalc',
      title: 'Function Composition & Inverses',
      description: 'Composing functions, finding and verifying inverse functions',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: \`# 📈 Function Composition & Inverses\\n\\nLearn to compose functions, find inverse functions, and verify inverse relationships.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'transformations-precalc' },
    update: {},
    create: {
      slug: 'transformations-precalc',
      title: 'Transformations',
      description: 'Translations, reflections, stretches, compressions, and piecewise functions',
      order: 2,
      categoryId: unit3.id,
      isPremium: false,
      textContent: \`# 📈 Transformations\\n\\nMaster translations, reflections, stretches, compressions, and combined transformations of functions.\`,
    },
  })

  // ─── Unit 4: Trigonometric Functions ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'precalc-trig-functions' },
    update: {},
    create: {
      slug: 'precalc-trig-functions',
      name: 'Trigonometric Functions',
      description: 'Unit circle, trig graphs, identities, inverse trig, and triangle laws',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Trigonometric Functions')

  await prisma.topic.upsert({
    where: { slug: 'trigonometric-functions-precalc' },
    update: {},
    create: {
      slug: 'trigonometric-functions-precalc',
      title: 'Trigonometric Functions',
      description: 'Unit circle, sine/cosine/tangent graphs, amplitude, period, and phase shifts',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: \`# 📈 Trigonometric Functions\\n\\nExplore the unit circle, graphing trig functions, amplitude, period, and phase shift transformations.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'trigonometric-identities-precalc' },
    update: {},
    create: {
      slug: 'trigonometric-identities-precalc',
      title: 'Trigonometric Identities',
      description: 'Pythagorean, sum/difference, double-angle, and half-angle identities',
      order: 2,
      categoryId: unit4.id,
      isPremium: false,
      textContent: \`# 📈 Trigonometric Identities\\n\\nMaster Pythagorean identities, sum and difference formulas, double-angle and half-angle formulas.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'inverse-trig-functions-precalc' },
    update: {},
    create: {
      slug: 'inverse-trig-functions-precalc',
      title: 'Inverse Trigonometric Functions',
      description: 'Inverse sine, cosine, tangent, compositions, and solving trig equations',
      order: 3,
      categoryId: unit4.id,
      isPremium: false,
      textContent: \`# 📈 Inverse Trigonometric Functions\\n\\nLearn inverse sine, cosine, and tangent, compositions with inverses, and solving trig equations.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'law-of-sines-cosines-precalc' },
    update: {},
    create: {
      slug: 'law-of-sines-cosines-precalc',
      title: 'Law of Sines & Cosines',
      description: 'Law of Sines, ambiguous case, Law of Cosines, and triangle area formulas',
      order: 4,
      categoryId: unit4.id,
      isPremium: false,
      textContent: \`# 📈 Law of Sines & Cosines\\n\\nApply the Law of Sines (including the ambiguous case), Law of Cosines, and area formulas to solve triangles.\`,
    },
  })

  // ─── Unit 5: Polar, Vectors & Matrices ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'precalc-polar-vectors-matrices' },
    update: {},
    create: {
      slug: 'precalc-polar-vectors-matrices',
      name: 'Polar, Vectors & Matrices',
      description: 'Polar coordinates, vector operations, and matrix algebra',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Polar, Vectors & Matrices')

  await prisma.topic.upsert({
    where: { slug: 'polar-coordinates-precalc' },
    update: {},
    create: {
      slug: 'polar-coordinates-precalc',
      title: 'Polar Coordinates',
      description: 'Polar coordinate system, conversions, polar graphs, and equations',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: \`# 📈 Polar Coordinates\\n\\nExplore the polar coordinate system, conversions between rectangular and polar, and graphing polar curves.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'vectors-two-dimensions-precalc' },
    update: {},
    create: {
      slug: 'vectors-two-dimensions-precalc',
      title: 'Vectors in Two Dimensions',
      description: 'Vector operations, dot product, unit vectors, and applications',
      order: 2,
      categoryId: unit5.id,
      isPremium: false,
      textContent: \`# 📈 Vectors in Two Dimensions\\n\\nMaster vector addition, subtraction, scalar multiplication, dot product, and real-world vector applications.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'matrices-precalc' },
    update: {},
    create: {
      slug: 'matrices-precalc',
      title: 'Matrices',
      description: 'Matrix operations, multiplication, determinants, inverses, and systems',
      order: 3,
      categoryId: unit5.id,
      isPremium: false,
      textContent: \`# 📈 Matrices\\n\\nLearn matrix operations, multiplication, determinants, inverse matrices, and solving systems with matrices.\`,
    },
  })

  // ─── Unit 6: Sequences, Series & Conics ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'precalc-sequences-conics' },
    update: {},
    create: {
      slug: 'precalc-sequences-conics',
      name: 'Sequences, Series & Conics',
      description: 'Arithmetic/geometric sequences, series, sigma notation, and conic sections',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Sequences, Series & Conics')

  await prisma.topic.upsert({
    where: { slug: 'sequences-series-precalc' },
    update: {},
    create: {
      slug: 'sequences-series-precalc',
      title: 'Sequences & Series',
      description: 'Arithmetic and geometric sequences, partial sums, sigma notation, and infinite series',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: \`# 📈 Sequences & Series\\n\\nStudy arithmetic and geometric sequences, series, partial sums, sigma notation, and infinite geometric series.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'conic-sections-precalc' },
    update: {},
    create: {
      slug: 'conic-sections-precalc',
      title: 'Conic Sections',
      description: 'Circles, parabolas, ellipses, hyperbolas, and identifying conic sections',
      order: 2,
      categoryId: unit6.id,
      isPremium: false,
      textContent: \`# 📈 Conic Sections\\n\\nAnalyze circles, parabolas, ellipses, and hyperbolas from standard and general form equations.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'parametric-equations-precalc' },
    update: {},
    create: {
      slug: 'parametric-equations-precalc',
      title: 'Parametric Equations',
      description: 'Parametric curves, graphing, eliminating parameters, and motion applications',
      order: 3,
      categoryId: unit6.id,
      isPremium: false,
      textContent: \`# 📈 Parametric Equations\\n\\nExplore parametric equations, graphing curves, eliminating the parameter, and motion applications.\`,
    },
  })

  // ─── Unit 7: Introduction to Calculus Concepts ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'precalc-intro-calculus' },
    update: {},
    create: {
      slug: 'precalc-intro-calculus',
      name: 'Introduction to Calculus Concepts',
      description: 'Limits, continuity, rates of change, and systems of equations',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Introduction to Calculus Concepts')

  await prisma.topic.upsert({
    where: { slug: 'limits-introduction-precalc' },
    update: {},
    create: {
      slug: 'limits-introduction-precalc',
      title: 'Introduction to Limits',
      description: 'Intuitive limits, notation, one-sided limits, limits at infinity, and evaluation',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: \`# 📈 Introduction to Limits\\n\\nDevelop an intuitive understanding of limits, one-sided limits, limits at infinity, and evaluation techniques.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'continuity-precalc' },
    update: {},
    create: {
      slug: 'continuity-precalc',
      title: 'Continuity',
      description: 'Continuity, types of discontinuity, IVT, and piecewise functions',
      order: 2,
      categoryId: unit7.id,
      isPremium: false,
      textContent: \`# 📈 Continuity\\n\\nExplore continuity, types of discontinuity, the Intermediate Value Theorem, and piecewise function continuity.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'rates-of-change-precalc' },
    update: {},
    create: {
      slug: 'rates-of-change-precalc',
      title: 'Rates of Change',
      description: 'Average rate of change, secant lines, instantaneous rate of change, and tangent lines',
      order: 3,
      categoryId: unit7.id,
      isPremium: false,
      textContent: \`# 📈 Rates of Change\\n\\nStudy average and instantaneous rates of change, secant and tangent lines, and real-world applications.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'systems-of-equations-precalc' },
    update: {},
    create: {
      slug: 'systems-of-equations-precalc',
      title: 'Systems of Equations',
      description: 'Linear and nonlinear systems, substitution, elimination, and inequalities',
      order: 4,
      categoryId: unit7.id,
      isPremium: false,
      textContent: \`# 📈 Systems of Equations\\n\\nSolve linear and nonlinear systems using substitution, elimination, and matrix methods.\`,
    },
  })

  console.log('\\n🎉 AP Precalculus seeding complete!')
  console.log(\`  📚 7 categories, 20 topics created\`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
`;
}

// ═══════════════════════════════════════════════════
// AP Calculus AB Seed Script Generator
// ═══════════════════════════════════════════════════
function genCalcABSeed() {
  return `import { PrismaClient } from '@prisma/client'

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
  console.log(\`✓ Course: \${course.name}\`)

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
      textContent: \`# ∫ Limits & Continuity\\n\\nMaster limit evaluation techniques, the squeeze theorem, continuity, and the Intermediate Value Theorem.\`,
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
      textContent: \`# ∫ Definition of the Derivative\\n\\nUnderstand the derivative as a limit, differentiability, and the connection between graphs and derivatives.\`,
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
      textContent: \`# ∫ Basic Differentiation Rules\\n\\nMaster the power, product, and quotient rules along with derivatives of trigonometric functions.\`,
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
      textContent: \`# ∫ Chain Rule\\n\\nApply the chain rule to composite functions, use implicit differentiation, and solve related rates problems.\`,
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
      textContent: \`# ∫ Inverse Functions & Derivatives\\n\\nFind derivatives of inverse functions, inverse trig functions, and use logarithmic differentiation.\`,
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
      textContent: \`# ∫ Applications of Derivatives\\n\\nAnalyze functions using critical points, derivative tests, concavity, inflection points, and curve sketching.\`,
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
      textContent: \`# ∫ Optimization\\n\\nLearn to set up constraint equations and solve optimization problems in business, geometry, and science.\`,
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
      textContent: \`# ∫ Linearization & Differentials\\n\\nUse linear approximation and differentials for error estimation and tangent line approximations.\`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'theorem-applications-calcab' },
    update: {},
    create: {
      slug: 'theorem-applications-calcab',
      title: 'Theorem Applications',
      description: 'Mean Value Theorem, Rolle\\'s Theorem, Extreme Value Theorem, and IVT applications',
      order: 4,
      categoryId: unit3.id,
      isPremium: false,
      textContent: \`# ∫ Theorem Applications\\n\\nApply the Mean Value Theorem, Extreme Value Theorem, and IVT to analyze function behavior.\`,
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
      textContent: \`# ∫ Particle Motion\\n\\nAnalyze motion using position, velocity, acceleration, speed vs. velocity, and displacement vs. distance.\`,
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
      textContent: \`# ∫ Definite Integrals\\n\\nMaster Riemann sums, the definite integral, properties, and both parts of the Fundamental Theorem of Calculus.\`,
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
      textContent: \`# ∫ Antiderivatives & Indefinite Integrals\\n\\nFind antiderivatives using the power rule, trig rules, and solve initial value problems.\`,
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
      textContent: \`# ∫ u-Substitution\\n\\nMaster u-substitution for both indefinite and definite integrals including complex substitution techniques.\`,
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
      textContent: \`# ∫ Accumulation Functions\\n\\nUnderstand accumulation functions, interpret integrals in context, and connect to the FTC.\`,
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
      textContent: \`# ∫ Area Between Curves\\n\\nCalculate areas under curves, between curves, and using horizontal slicing for complex regions.\`,
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
      textContent: \`# ∫ Volumes of Revolution\\n\\nCompute volumes using disk, washer, and shell methods, plus volumes with known cross-sections.\`,
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
      textContent: \`# ∫ Integration Applications\\n\\nApply average value, the Mean Value Theorem for integrals, net change theorem, and solve real-world problems.\`,
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
      textContent: \`# ∫ Differential Equations\\n\\nSolve differential equations using slope fields, separation of variables, and model exponential growth and decay.\`,
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
      textContent: \`# ∫ Exponential Models\\n\\nModel real-world phenomena with exponential growth and decay, including population and cooling models.\`,
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
      textContent: \`# ∫ Tables & Data\\n\\nInterpret data tables to approximate derivatives, apply the trapezoidal rule, and compute Riemann sums.\`,
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
      textContent: \`# ∫ Free Response Strategies\\n\\nMaster FRQ format, calculator and no-calculator strategies, proper justifications, and avoid common mistakes.\`,
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
      textContent: \`# ∫ AP Exam Review\\n\\nReview all AB topics by unit with focused practice and full exam preparation strategies.\`,
    },
  })

  console.log('\\n🎉 AP Calculus AB seeding complete!')
  console.log(\`  📚 7 categories, 22 topics created\`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
`;
}

// ═══════════════════════════════════════════════════
// AP Calculus BC Seed Script Generator
// ═══════════════════════════════════════════════════
function genCalcBCSeed() {
  return `import { PrismaClient } from '@prisma/client'

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
  console.log(\`✓ Course: \${course.name}\`)

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
      textContent: \`# ∬ Integration by Parts\\n\\nMaster the integration by parts formula, LIATE strategy, tabular method, and applications.\`,
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
      textContent: \`# ∬ Partial Fractions\\n\\nDecompose rational expressions and integrate using partial fraction techniques.\`,
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
      textContent: \`# ∬ Improper Integrals\\n\\nEvaluate improper integrals with infinite bounds and discontinuous integrands, and determine convergence.\`,
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
      textContent: \`# ∬ Advanced Integration\\n\\nApply trig substitution, advanced u-substitution, and integration strategy selection for complex integrals.\`,
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
      textContent: \`# ∬ Parametric Curves & Calculus\\n\\nCompute derivatives, arc length, speed, and area for parametric curves.\`,
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
      textContent: \`# ∬ Polar Calculus\\n\\nCalculate derivatives, areas, arc lengths, and find intersections of polar curves.\`,
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
      textContent: \`# ∬ Vector-Valued Functions\\n\\nAnalyze vector functions including derivatives, integrals, velocity, acceleration, and motion in the plane.\`,
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
      textContent: \`# ∬ Arc Length & Surface Area\\n\\nCompute arc length and surface area of revolution in rectangular, parametric, and polar coordinates.\`,
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
      textContent: \`# ∬ Infinite Sequences\\n\\nStudy sequences, convergence and divergence, bounded and monotonic sequences, and their limits.\`,
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
      textContent: \`# ∬ Infinite Series\\n\\nExplore geometric series, telescoping series, the nth term test, and the harmonic series.\`,
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
      textContent: \`# ∬ Convergence Tests Summary\\n\\nMaster all convergence tests and learn strategies for choosing the right test.\`,
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
      textContent: \`# ∬ Alternating Series\\n\\nApply the alternating series test, compute error bounds, and distinguish conditional from absolute convergence.\`,
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
      textContent: \`# ∬ Power Series\\n\\nStudy power series, find radius and interval of convergence, and differentiate/integrate power series.\`,
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
      textContent: \`# ∬ Taylor & Maclaurin Series\\n\\nConstruct Taylor and Maclaurin series, use common series, and build Taylor polynomials.\`,
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
      textContent: \`# ∬ Lagrange Error Bound\\n\\nApply the Lagrange error bound to determine polynomial approximation accuracy.\`,
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
      textContent: \`# ∬ Series Applications\\n\\nApply series to approximate functions, solve differential equations, and analyze physics problems.\`,
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
      textContent: \`# ∬ Euler Method\\n\\nApproximate solutions to differential equations using Euler\\'s method with error analysis.\`,
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
      textContent: \`# ∬ Logistic Models\\n\\nAnalyze logistic growth models including carrying capacity, solving DEs, and finding inflection points.\`,
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
      textContent: \`# ∬ BC Exam Strategies\\n\\nMaster BC-specific exam strategies for series, parametric/polar, and time management.\`,
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
      textContent: \`# ∬ Review & Connections\\n\\nComprehensive review connecting AB foundations with BC-specific topics for full exam readiness.\`,
    },
  })

  console.log('\\n🎉 AP Calculus BC seeding complete!')
  console.log(\`  📚 6 categories, 20 topics created\`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
`;
}

// Write all three seed files
fs.writeFileSync('prisma/seed-ap-precalculus.ts', genPrecalcSeed());
console.log('✓ Created prisma/seed-ap-precalculus.ts');

fs.writeFileSync('prisma/seed-ap-calculus-ab.ts', genCalcABSeed());
console.log('✓ Created prisma/seed-ap-calculus-ab.ts');

fs.writeFileSync('prisma/seed-ap-calculus-bc.ts', genCalcBCSeed());
console.log('✓ Created prisma/seed-ap-calculus-bc.ts');

console.log('\nDone! 3 seed scripts created.');
