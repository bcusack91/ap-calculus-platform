import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Calculus AB formula flashcards...\n');

  const topicSlugs = [
    'limits-continuity-calcab',
    'definition-of-derivative-calcab',
    'basic-differentiation-rules-calcab',
    'chain-rule-calcab',
    'applications-of-derivatives-calcab',
    'definite-integrals-calcab',
    'u-substitution-calcab',
    'antiderivatives-indefinite-integrals-calcab',
    'volumes-of-revolution-calcab',
    'differential-equations-calcab',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) {
      console.log(`⚠ Topic not found: ${slug}`);
      continue;
    }

    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  // Limits & Continuity
  const t1 = await prisma.topic.findFirst({ where: { slug: 'limits-continuity-calcab' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'What is the limit definition of continuity at $x = a$?', back: '$f$ is continuous at $a$ if $\\lim_{x \\to a} f(x) = f(a)$. This requires: (1) $f(a)$ exists, (2) the limit exists, (3) they are equal.', hint: 'Three conditions must all hold.' },
        { topicId: t1.id, front: 'State the Squeeze Theorem.', back: 'If $g(x) \\le f(x) \\le h(x)$ near $a$ and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$.', hint: 'A function trapped between two others with the same limit.' },
        { topicId: t1.id, front: 'What is the Intermediate Value Theorem?', back: 'If $f$ is continuous on $[a,b]$ and $N$ is between $f(a)$ and $f(b)$, then there exists $c \\in (a,b)$ such that $f(c) = N$.', hint: 'Continuous functions hit every value between endpoints.' },
      ],
    });
    console.log('✅ Limits & Continuity flashcards');
  }

  // Definition of Derivative
  const t2 = await prisma.topic.findFirst({ where: { slug: 'definition-of-derivative-calcab' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'What is the limit definition of the derivative?', back: "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$", hint: 'Slope of the tangent line as a limit.' },
        { topicId: t2.id, front: 'What is the alternative form of the derivative at $x = a$?', back: "$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$", hint: 'Replace h with (x − a).' },
        { topicId: t2.id, front: 'If $f$ is differentiable at $a$, is $f$ continuous at $a$?', back: 'Yes. Differentiability implies continuity, but continuity does NOT imply differentiability.', hint: 'One direction only.' },
      ],
    });
    console.log('✅ Definition of Derivative flashcards');
  }

  // Basic Differentiation Rules
  const t3 = await prisma.topic.findFirst({ where: { slug: 'basic-differentiation-rules-calcab' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'Power Rule: $\\frac{d}{dx}[x^n] = ?$', back: '$nx^{n-1}$', hint: 'Bring down the exponent, subtract one.' },
        { topicId: t3.id, front: 'Product Rule: $\\frac{d}{dx}[f \\cdot g] = ?$', back: "$f'g + fg'$", hint: 'First times derivative of second plus second times derivative of first.' },
        { topicId: t3.id, front: 'Quotient Rule: $\\frac{d}{dx}\\left[\\frac{f}{g}\\right] = ?$', back: "$\\frac{f'g - fg'}{g^2}$", hint: 'Low d-high minus high d-low, over low squared.' },
        { topicId: t3.id, front: '$\\frac{d}{dx}[\\sin x] = ?$', back: '$\\cos x$', hint: 'Cosine is the derivative of sine.' },
        { topicId: t3.id, front: '$\\frac{d}{dx}[\\cos x] = ?$', back: '$-\\sin x$', hint: 'Note the negative sign.' },
        { topicId: t3.id, front: '$\\frac{d}{dx}[\\tan x] = ?$', back: '$\\sec^2 x$', hint: 'Think of tan = sin/cos and apply quotient rule.' },
        { topicId: t3.id, front: '$\\frac{d}{dx}[e^x] = ?$', back: '$e^x$', hint: "The exponential function is its own derivative." },
        { topicId: t3.id, front: '$\\frac{d}{dx}[\\ln x] = ?$', back: '$\\frac{1}{x}$', hint: 'The natural log derivative is reciprocal.' },
      ],
    });
    console.log('✅ Basic Differentiation Rules flashcards');
  }

  // Chain Rule
  const t4 = await prisma.topic.findFirst({ where: { slug: 'chain-rule-calcab' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'State the Chain Rule.', back: "$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$", hint: 'Derivative of outer times derivative of inner.' },
        { topicId: t4.id, front: '$\\frac{d}{dx}[e^{g(x)}] = ?$', back: "$e^{g(x)} \\cdot g'(x)$", hint: 'Exponential times the derivative of the exponent.' },
        { topicId: t4.id, front: '$\\frac{d}{dx}[\\ln(g(x))] = ?$', back: "$\\frac{g'(x)}{g(x)}$", hint: 'Reciprocal of inside times derivative of inside.' },
      ],
    });
    console.log('✅ Chain Rule flashcards');
  }

  // Applications of Derivatives
  const t5 = await prisma.topic.findFirst({ where: { slug: 'applications-of-derivatives-calcab' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'State the Mean Value Theorem.', back: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \\in (a,b)$ such that $f'(c) = \\frac{f(b)-f(a)}{b-a}$.", hint: 'Instantaneous rate equals average rate somewhere.' },
        { topicId: t5.id, front: "How do you find critical points of $f$?", back: "Find where $f'(x) = 0$ or $f'(x)$ is undefined.", hint: 'Set the first derivative equal to zero.' },
        { topicId: t5.id, front: "If $f''(x) > 0$ on an interval, $f$ is…", back: 'Concave up (opens upward like a cup).', hint: 'Second derivative positive = smiling curve.' },
        { topicId: t5.id, front: "What is L'Hôpital's Rule?", back: "If $\\lim \\frac{f(x)}{g(x)}$ gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, then $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$.", hint: 'Take derivatives of top and bottom separately.' },
      ],
    });
    console.log('✅ Applications of Derivatives flashcards');
  }

  // Definite Integrals
  const t6 = await prisma.topic.findFirst({ where: { slug: 'definite-integrals-calcab' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'State the Fundamental Theorem of Calculus, Part 1.', back: "If $F(x) = \\int_a^x f(t)\\,dt$, then $F'(x) = f(x)$.", hint: 'Derivative of an integral undoes the integral.' },
        { topicId: t6.id, front: 'State the Fundamental Theorem of Calculus, Part 2.', back: '$\\int_a^b f(x)\\,dx = F(b) - F(a)$, where $F$ is any antiderivative of $f$.', hint: 'Evaluate the antiderivative at the bounds.' },
        { topicId: t6.id, front: '$\\int x^n\\,dx = ?$ (for $n \\neq -1$)', back: '$\\frac{x^{n+1}}{n+1} + C$', hint: 'Add one to exponent, divide by new exponent.' },
        { topicId: t6.id, front: '$\\int e^x\\,dx = ?$', back: '$e^x + C$', hint: 'The exponential integrates to itself.' },
        { topicId: t6.id, front: '$\\int \\frac{1}{x}\\,dx = ?$', back: '$\\ln|x| + C$', hint: 'Absolute value is important.' },
      ],
    });
    console.log('✅ Definite Integrals flashcards');
  }

  // u-Substitution
  const t7 = await prisma.topic.findFirst({ where: { slug: 'u-substitution-calcab' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'What is the key idea of $u$-substitution?', back: 'Reverse the chain rule: let $u = g(x)$, then $du = g\'(x)\\,dx$, and rewrite the integral in terms of $u$.', hint: 'Look for a function and its derivative inside the integral.' },
        { topicId: t7.id, front: '$\\int \\sin x \\cos x\\,dx$ using $u = \\sin x$?', back: '$\\frac{\\sin^2 x}{2} + C$. Let $u = \\sin x$, $du = \\cos x\\,dx$, so $\\int u\\,du = \\frac{u^2}{2} + C$.', hint: 'Pick the function whose derivative also appears.' },
      ],
    });
    console.log('✅ u-Substitution flashcards');
  }

  // Volumes of Revolution
  const t9 = await prisma.topic.findFirst({ where: { slug: 'volumes-of-revolution-calcab' } });
  if (t9) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t9.id, front: 'Disk method formula (revolving about x-axis)?', back: '$V = \\pi \\int_a^b [f(x)]^2\\,dx$', hint: 'Pi times the integral of radius squared.' },
        { topicId: t9.id, front: 'Washer method formula?', back: '$V = \\pi \\int_a^b \\left([R(x)]^2 - [r(x)]^2\\right)dx$, where $R$ = outer radius and $r$ = inner radius.', hint: 'Subtract the hole from the full disk.' },
      ],
    });
    console.log('✅ Volumes of Revolution flashcards');
  }

  console.log('\n✅ All AP Calculus AB formula flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
