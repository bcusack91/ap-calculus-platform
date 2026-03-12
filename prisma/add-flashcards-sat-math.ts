import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding SAT math formulas flashcards...\n');

  const topicSlugs = [
    'sat-linear-equations-inequalities',
    'sat-quadratic-equations',
    'sat-geometry-basics',
    'sat-statistics-data-interpretation',
    'sat-exponential-functions',
    'sat-ratios-proportions-percents',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'sat-linear-equations-inequalities' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Slope formula?', back: '$m = \\frac{y_2 - y_1}{x_2 - x_1}$\n\nRise over run.', hint: 'Change in y over change in x.' },
        { topicId: t1.id, front: 'Slope-intercept form?', back: '$y = mx + b$\n\nm = slope, b = y-intercept', hint: 'The most common linear equation form.' },
        { topicId: t1.id, front: 'Point-slope form?', back: '$y - y_1 = m(x - x_1)$\n\nUseful when you have a point and slope.', hint: 'Plug in known point and slope.' },
        { topicId: t1.id, front: 'When does a system of linear equations have no solution?', back: 'When the lines are **parallel** (same slope, different y-intercepts). The equations are inconsistent.', hint: 'Parallel lines never intersect.' },
      ],
    });
    console.log('✅ Linear Equations flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'sat-quadratic-equations' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Quadratic formula?', back: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\n\nSolves $ax^2 + bx + c = 0$.', hint: 'Negative b plus or minus the square root of b² − 4ac, all over 2a.' },
        { topicId: t2.id, front: 'What does the discriminant ($b^2 - 4ac$) tell you?', back: '- **Positive**: Two distinct real solutions\n- **Zero**: One repeated real solution\n- **Negative**: No real solutions (two complex solutions)', hint: 'The part under the square root sign.' },
        { topicId: t2.id, front: 'Vertex form of a quadratic?', back: '$y = a(x - h)^2 + k$\n\nVertex is at $(h, k)$.\n$a > 0$: opens up. $a < 0$: opens down.', hint: 'The vertex is the minimum or maximum point.' },
      ],
    });
    console.log('✅ Quadratics flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'sat-geometry-basics' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Area of a circle?', back: '$A = \\pi r^2$', hint: 'Pi times radius squared.' },
        { topicId: t3.id, front: 'Circumference of a circle?', back: '$C = 2\\pi r = \\pi d$', hint: '2 × pi × radius OR pi × diameter.' },
        { topicId: t3.id, front: 'Pythagorean theorem?', back: '$a^2 + b^2 = c^2$\n\nwhere $c$ is the hypotenuse (longest side).', hint: 'Only works for right triangles.' },
        { topicId: t3.id, front: 'Area of a triangle?', back: '$A = \\frac{1}{2}bh$\n\nb = base, h = height (perpendicular to base)', hint: 'Half of base times height.' },
        { topicId: t3.id, front: 'Special right triangles?', back: '**30-60-90**: sides are $x$, $x\\sqrt{3}$, $2x$\n**45-45-90**: sides are $x$, $x$, $x\\sqrt{2}$', hint: 'These ratios are given on the SAT reference sheet.' },
        { topicId: t3.id, front: 'Volume of a cylinder?', back: '$V = \\pi r^2 h$', hint: 'Area of circular base times height.' },
        { topicId: t3.id, front: 'Distance formula?', back: '$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$', hint: 'Pythagorean theorem applied to coordinates.' },
      ],
    });
    console.log('✅ Geometry flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'sat-statistics-data-interpretation' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'Mean, median, and mode — definitions?', back: '**Mean**: Sum of all values ÷ number of values (average)\n**Median**: Middle value when data is sorted\n**Mode**: Most frequently occurring value', hint: 'Mean can be affected by outliers; median cannot.' },
        { topicId: t4.id, front: 'How do outliers affect mean vs. median?', back: 'Outliers **pull the mean** toward them but have **little effect on the median**. Use median for skewed data.', hint: 'Median is resistant to extreme values.' },
        { topicId: t4.id, front: 'Standard deviation — what does it measure?', back: 'How spread out data points are from the mean. **Small SD** = data clustered near mean. **Large SD** = data widely spread.', hint: 'Measure of variability.' },
      ],
    });
    console.log('✅ Statistics flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'sat-exponential-functions' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'Exponential growth/decay formula?', back: '$y = a \\cdot b^x$ or $y = a(1 \\pm r)^t$\n\nGrowth: $b > 1$ or $(1 + r)$\nDecay: $0 < b < 1$ or $(1 - r)$', hint: 'The base determines growth vs. decay.' },
        { topicId: t5.id, front: 'Compound interest formula?', back: '$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$\n\nP = principal, r = annual rate, n = compounds per year, t = years', hint: 'How money grows when interest earns interest.' },
      ],
    });
    console.log('✅ Exponential Functions flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'sat-ratios-proportions-percents' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'Percent change formula?', back: '$\\text{Percent change} = \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$', hint: 'Change divided by original.' },
        { topicId: t6.id, front: 'How to set up a proportion?', back: '$\\frac{a}{b} = \\frac{c}{d}$, then cross-multiply: $ad = bc$.\n\nMake sure the units match on each side.', hint: 'Same units on top, same units on bottom.' },
      ],
    });
    console.log('✅ Ratios & Percents flashcards');
  }

  console.log('\n✅ All SAT math formulas flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
