import { PrismaClient } from '@prisma/client'

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
  console.log(`✓ Course: ${course.name}`)

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
      textContent: `# 📈 Polynomial Functions\n\nStudy polynomial behavior including end behavior, zeros and multiplicity, graphing techniques, and polynomial division.`,
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
      textContent: `# 📈 Rational Functions\n\nAnalyze rational functions including asymptotes, holes, graphing, and solving rational equations.`,
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
      textContent: `# 📈 Exponential Functions\n\nExplore exponential growth and decay, transformations, real-world models, and compound interest.`,
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
      textContent: `# 📈 Logarithmic Functions\n\nMaster logarithm properties, solving equations, change of base formula, and real-world logarithmic models.`,
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
      textContent: `# 📈 Function Composition & Inverses\n\nLearn to compose functions, find inverse functions, and verify inverse relationships.`,
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
      textContent: `# 📈 Transformations\n\nMaster translations, reflections, stretches, compressions, and combined transformations of functions.`,
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
      textContent: `# 📈 Trigonometric Functions\n\nExplore the unit circle, graphing trig functions, amplitude, period, and phase shift transformations.`,
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
      textContent: `# 📈 Trigonometric Identities\n\nMaster Pythagorean identities, sum and difference formulas, double-angle and half-angle formulas.`,
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
      textContent: `# 📈 Inverse Trigonometric Functions\n\nLearn inverse sine, cosine, and tangent, compositions with inverses, and solving trig equations.`,
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
      textContent: `# 📈 Law of Sines & Cosines\n\nApply the Law of Sines (including the ambiguous case), Law of Cosines, and area formulas to solve triangles.`,
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
      textContent: `# 📈 Polar Coordinates\n\nExplore the polar coordinate system, conversions between rectangular and polar, and graphing polar curves.`,
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
      textContent: `# 📈 Vectors in Two Dimensions\n\nMaster vector addition, subtraction, scalar multiplication, dot product, and real-world vector applications.`,
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
      textContent: `# 📈 Matrices\n\nLearn matrix operations, multiplication, determinants, inverse matrices, and solving systems with matrices.`,
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
      textContent: `# 📈 Sequences & Series\n\nStudy arithmetic and geometric sequences, series, partial sums, sigma notation, and infinite geometric series.`,
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
      textContent: `# 📈 Conic Sections\n\nAnalyze circles, parabolas, ellipses, and hyperbolas from standard and general form equations.`,
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
      textContent: `# 📈 Parametric Equations\n\nExplore parametric equations, graphing curves, eliminating the parameter, and motion applications.`,
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
      textContent: `# 📈 Introduction to Limits\n\nDevelop an intuitive understanding of limits, one-sided limits, limits at infinity, and evaluation techniques.`,
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
      textContent: `# 📈 Continuity\n\nExplore continuity, types of discontinuity, the Intermediate Value Theorem, and piecewise function continuity.`,
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
      textContent: `# 📈 Rates of Change\n\nStudy average and instantaneous rates of change, secant and tangent lines, and real-world applications.`,
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
      textContent: `# 📈 Systems of Equations\n\nSolve linear and nonlinear systems using substitution, elimination, and matrix methods.`,
    },
  })

  console.log('\n🎉 AP Precalculus seeding complete!')
  console.log(`  📚 7 categories, 20 topics created`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
