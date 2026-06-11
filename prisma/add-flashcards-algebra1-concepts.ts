import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Algebra 1 key concepts flashcards...\n');

  const topicSlugs = [
    'solving-linear-equations-algebra1',
    'graphing-linear-equations-algebra1',
    'solving-systems-algebra1',
    'factoring-algebra1',
    'solving-quadratics-algebra1',
    'exponent-rules-algebra1',
    'functions-basics-algebra1',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'solving-linear-equations-algebra1' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is the golden rule for solving equations?', back: 'Whatever you do to one side, you must do to the other side to keep the equation balanced.', hint: 'Keep both sides equal.' },
        { topicId: t1.id, front: 'How do you solve $3x + 7 = 22$?', back: 'Subtract 7 from both sides: $3x = 15$\nDivide both sides by 3: $x = 5$', hint: 'Undo operations in reverse order (PEMDAS backwards).' },
        { topicId: t1.id, front: 'What does "no solution" mean for a linear equation?', back: 'The equation simplifies to a false statement like $5 = 8$. The variable cancels out and the constants don\'t match. Example: $2x + 3 = 2x + 7$ → $3 = 7$ (impossible).', hint: 'The lines are parallel — they never intersect.' },
      ],
    });
    console.log('✅ Solving Linear Equations flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'graphing-linear-equations-algebra1' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is slope?', back: '$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$\n\nPositive slope: line goes up left to right.\nNegative slope: line goes down left to right.\nZero slope: horizontal line.\nUndefined slope: vertical line.', hint: 'Rise over run.' },
        { topicId: t2.id, front: 'What does the y-intercept represent?', back: 'The point where the line crosses the y-axis. In $y = mx + b$, the y-intercept is $b$. The coordinates are $(0, b)$.', hint: 'Where x = 0.' },
      ],
    });
    console.log('✅ Graphing Linear Equations flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'solving-systems-algebra1' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'What are the 3 methods for solving systems of equations?', back: '1. **Graphing**: Find the intersection point\n2. **Substitution**: Solve one equation for a variable, plug into the other\n3. **Elimination**: Add/subtract equations to eliminate a variable', hint: 'Choose the method that seems most efficient for the given system.' },
        { topicId: t3.id, front: 'What are the 3 possible outcomes for a system of two linear equations?', back: '**One solution**: Lines intersect at one point (different slopes).\n**No solution**: Lines are parallel (same slope, different intercepts).\n**Infinitely many solutions**: Lines are the same (identical equations).', hint: 'Think about how two lines can relate to each other.' },
      ],
    });
    console.log('✅ Systems of Equations flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'factoring-algebra1' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'How do you factor $x^2 + bx + c$?', back: 'Find two numbers that **multiply to $c$** and **add to $b$**.\n\nExample: $x^2 + 7x + 12 = (x + 3)(x + 4)$ because $3 \\times 4 = 12$ and $3 + 4 = 7$.', hint: 'Product = c, Sum = b.' },
        { topicId: t4.id, front: 'Difference of squares formula?', back: '$a^2 - b^2 = (a + b)(a - b)$\n\nExample: $x^2 - 9 = (x + 3)(x - 3)$', hint: 'Two perfect squares separated by a minus sign.' },
        { topicId: t4.id, front: 'What should you always check for first when factoring?', back: '**Greatest Common Factor (GCF)**.\n\nAlways factor out the GCF before trying other methods.\nExample: $6x^2 + 12x = 6x(x + 2)$', hint: 'GCF first, always.' },
      ],
    });
    console.log('✅ Factoring flashcards');
  }

  const t5 = await prisma.topic.findFirst({ where: { slug: 'solving-quadratics-algebra1' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: '3 methods to solve quadratic equations?', back: '1. **Factoring**: Set equal to zero, factor, use zero product property\n2. **Quadratic formula**: $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$\n3. **Completing the square**: Rewrite as $(x-h)^2 = k$', hint: 'Try factoring first; quadratic formula always works.' },
        { topicId: t5.id, front: 'What is the zero product property?', back: 'If $ab = 0$, then $a = 0$ or $b = 0$ (or both).\n\nUsed after factoring: if $(x-3)(x+5) = 0$, then $x = 3$ or $x = -5$.', hint: 'The only way a product is zero is if at least one factor is zero.' },
      ],
    });
    console.log('✅ Solving Quadratics flashcards');
  }

  const t6 = await prisma.topic.findFirst({ where: { slug: 'exponent-rules-algebra1' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'Product of powers rule?', back: '$x^a \\cdot x^b = x^{a+b}$\n\nSame base: add the exponents.', hint: 'Multiply → add exponents.' },
        { topicId: t6.id, front: 'Power of a power rule?', back: '$(x^a)^b = x^{ab}$\n\nMultiply the exponents.', hint: 'Power of a power → multiply.' },
        { topicId: t6.id, front: 'Negative exponent rule?', back: '$x^{-n} = \\frac{1}{x^n}$\n\nA negative exponent means "take the reciprocal."', hint: 'Flip it to the other side of the fraction.' },
        { topicId: t6.id, front: 'Zero exponent rule?', back: '$x^0 = 1$ (for $x \\neq 0$)\n\nAnything to the zero power is 1.', hint: 'Always equals 1 (except 0⁰ which is debated).' },
      ],
    });
    console.log('✅ Exponent Rules flashcards');
  }

  const t7 = await prisma.topic.findFirst({ where: { slug: 'functions-basics-algebra1' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'What is a function?', back: 'A relation where every input (x-value) has exactly **one** output (y-value).\n\nVertical line test: If any vertical line crosses the graph more than once, it\'s NOT a function.', hint: 'One input → one output.' },
        { topicId: t7.id, front: 'What are domain and range?', back: '**Domain**: Set of all possible **input** (x) values.\n**Range**: Set of all possible **output** (y) values.\n\nExample: $f(x) = \\sqrt{x}$ → Domain: $x \\ge 0$, Range: $y \\ge 0$.', hint: 'Domain = x; Range = y.' },
      ],
    });
    console.log('✅ Functions Basics flashcards');
  }

  console.log('\n✅ All Algebra 1 key concepts flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
