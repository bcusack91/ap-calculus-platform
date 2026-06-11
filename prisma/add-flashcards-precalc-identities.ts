import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Pre-Calculus identities flashcards...\n');

  const topicSlugs = [
    'graphing-trig-functions',
    'inverse-trig-functions',
    'law-of-sines-cosines',
    'function-transformations',
    'composite-inverse-functions',
    'exponential-logarithmic-functions',
    'polynomial-functions-end-behavior',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'graphing-trig-functions' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Unit circle values for $\\sin$ and $\\cos$ at $0°, 30°, 45°, 60°, 90°$?', back: '| Angle | $\\sin$ | $\\cos$ |\n|-------|--------|--------|\n| $0°$ | $0$ | $1$ |\n| $30°$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ |\n| $45°$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ |\n| $60°$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ |\n| $90°$ | $1$ | $0$ |', hint: 'Sin goes 0, ½, √2/2, √3/2, 1 as angle increases.' },
        { topicId: t1.id, front: 'Period, amplitude, and phase shift of $y = A\\sin(Bx - C) + D$?', back: '**Amplitude**: $|A|$\n**Period**: $\\frac{2\\pi}{|B|}$\n**Phase shift**: $\\frac{C}{B}$ (right if positive)\n**Vertical shift**: $D$', hint: 'Remember: B affects period, C/B is phase shift.' },
        { topicId: t1.id, front: 'Period of $\\tan(x)$ vs $\\sin(x)$?', back: '$\\sin(x)$ and $\\cos(x)$: period = $2\\pi$\n$\\tan(x)$ and $\\cot(x)$: period = $\\pi$\n$\\sec(x)$ and $\\csc(x)$: period = $2\\pi$', hint: 'Tangent and cotangent repeat every π.' },
      ],
    });
    console.log('✅ Graphing Trig Functions flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'inverse-trig-functions' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Domain and range of $\\arcsin(x)$?', back: '**Domain**: $[-1, 1]$\n**Range**: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$\n\n$\\arcsin$ returns angles in Q1 and Q4 only.', hint: 'Input must be between -1 and 1.' },
        { topicId: t2.id, front: 'Domain and range of $\\arccos(x)$?', back: '**Domain**: $[-1, 1]$\n**Range**: $[0, \\pi]$\n\n$\\arccos$ returns angles in Q1 and Q2 only.', hint: 'Range is 0 to π (top half of unit circle).' },
        { topicId: t2.id, front: 'Domain and range of $\\arctan(x)$?', back: '**Domain**: $(-\\infty, \\infty)$\n**Range**: $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$\n\nHorizontal asymptotes at $y = \\pm\\frac{\\pi}{2}$.', hint: 'Any real number in, but output is between -π/2 and π/2.' },
      ],
    });
    console.log('✅ Inverse Trig Functions flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'law-of-sines-cosines' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Law of Sines?', back: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$\n\nUsed when you know **AAS, ASA, or SSA** (ambiguous case).', hint: 'Pairs: side over sine of its opposite angle.' },
        { topicId: t3.id, front: 'Law of Cosines?', back: '$c^2 = a^2 + b^2 - 2ab\\cos C$\n\nUsed when you know **SAS or SSS**.\nReduces to Pythagorean theorem when $C = 90°$.', hint: 'Like the Pythagorean theorem with a correction term.' },
        { topicId: t3.id, front: 'What is the ambiguous case (SSA)?', back: 'When given two sides and a non-included angle, there may be:\n- **0 triangles** (no solution)\n- **1 triangle** (exactly one solution)\n- **2 triangles** (two possible solutions)\n\nUse Law of Sines and check for the ambiguous case.', hint: 'SSA can give 0, 1, or 2 triangles.' },
      ],
    });
    console.log('✅ Law of Sines & Cosines flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'function-transformations' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'How do transformations affect $f(x)$?', back: '- $f(x) + k$: shift **up** $k$\n- $f(x) - k$: shift **down** $k$\n- $f(x - h)$: shift **right** $h$\n- $f(x + h)$: shift **left** $h$\n- $-f(x)$: reflect over **x-axis**\n- $f(-x)$: reflect over **y-axis**\n- $af(x)$: vertical stretch/compress\n- $f(bx)$: horizontal stretch/compress', hint: 'Inside = horizontal (opposite direction), outside = vertical.' },
      ],
    });
    console.log('✅ Function Transformations flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'composite-inverse-functions' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'How do you find the inverse of a function?', back: '1. Replace $f(x)$ with $y$\n2. Swap $x$ and $y$\n3. Solve for $y$\n4. Replace $y$ with $f^{-1}(x)$\n\nGraphically, reflect over the line $y = x$.', hint: 'Swap x and y, then solve for y.' },
        { topicId: t5.id, front: 'What is $(f \\circ g)(x)$?', back: '$(f \\circ g)(x) = f(g(x))$\n\nEvaluate the **inner** function first, then plug that result into the **outer** function.', hint: 'Read right to left: g first, then f.' },
      ],
    });
    console.log('✅ Composite & Inverse Functions flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'exponential-logarithmic-functions' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'Key logarithm properties?', back: '- $\\log_b(MN) = \\log_b M + \\log_b N$\n- $\\log_b\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N$\n- $\\log_b(M^p) = p\\log_b M$\n- $\\log_b 1 = 0$\n- $\\log_b b = 1$', hint: 'Product → add, Quotient → subtract, Power → multiply.' },
        { topicId: t6.id, front: 'Change of base formula?', back: '$\\log_b a = \\frac{\\ln a}{\\ln b} = \\frac{\\log a}{\\log b}$\n\nConverts any log to natural log or common log for calculator use.', hint: 'log base b of a = ln(a) / ln(b).' },
        { topicId: t6.id, front: 'Relationship between exponential and logarithmic forms?', back: '$b^y = x \\iff \\log_b x = y$\n\nExponential form: $2^3 = 8$\nLogarithmic form: $\\log_2 8 = 3$', hint: 'The base stays the base in both forms.' },
      ],
    });
    console.log('✅ Exponential & Logarithmic Functions flashcards');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'polynomial-functions-end-behavior' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'End behavior of polynomials?', back: 'Determined by the **leading term** $ax^n$:\n\n| Degree | Leading coeff | Left | Right |\n|--------|--------------|------|-------|\n| Even | Positive | ↑ | ↑ |\n| Even | Negative | ↓ | ↓ |\n| Odd | Positive | ↓ | ↑ |\n| Odd | Negative | ↑ | ↓ |', hint: 'Even degree = both ends same direction, Odd = opposite.' },
        { topicId: t7.id, front: 'Multiplicity of zeros and graph behavior?', back: '- **Odd multiplicity** (1, 3, 5...): graph **crosses** the x-axis\n- **Even multiplicity** (2, 4, 6...): graph **touches/bounces** off the x-axis\n\nHigher multiplicity = flatter near the zero.', hint: 'Odd = cross, Even = bounce.' },
      ],
    });
    console.log('✅ Polynomial End Behavior flashcards');
  }

  console.log('\n✅ All Pre-Calculus identities flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
