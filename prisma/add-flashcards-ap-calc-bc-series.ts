import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Calculus BC series flashcards...\n');

  const topicSlugs = [
    'infinite-sequences-calcbc',
    'infinite-series-calcbc',
    'convergence-tests-summary-calcbc',
    'alternating-series-calcbc',
    'power-series-calcbc',
    'taylor-maclaurin-series-calcbc',
    'lagrange-error-bound-calcbc',
    'parametric-curves-calculus-calcbc',
    'polar-calculus-calcbc',
    'integration-by-parts-calcbc',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  // Infinite Sequences
  const t1 = await prisma.topic.findFirst({ where: { slug: 'infinite-sequences-calcbc' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'When does a sequence $\\{a_n\\}$ converge?', back: 'When $\\lim_{n \\to \\infty} a_n = L$ for some finite $L$.', hint: 'The terms approach a single value.' },
        { topicId: t1.id, front: 'If $\\lim_{n \\to \\infty} a_n \\neq 0$, what can you say about $\\sum a_n$?', back: 'The series $\\sum a_n$ diverges (Divergence Test / $n$th Term Test).', hint: 'Terms must go to zero for any chance of convergence.' },
      ],
    });
    console.log('✅ Infinite Sequences flashcards');
  }

  // Infinite Series
  const t2 = await prisma.topic.findFirst({ where: { slug: 'infinite-series-calcbc' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'Geometric series formula: $\\sum_{n=0}^{\\infty} ar^n = ?$', back: '$\\frac{a}{1-r}$, converges when $|r| < 1$.', hint: 'First term over (1 minus ratio).' },
        { topicId: t2.id, front: 'Does the $p$-series $\\sum \\frac{1}{n^p}$ converge?', back: 'Converges if $p > 1$, diverges if $p \\le 1$.', hint: 'The harmonic series ($p=1$) diverges.' },
        { topicId: t2.id, front: 'Telescoping series: $\\sum_{n=1}^{\\infty}(b_n - b_{n+1}) = ?$', back: '$b_1 - \\lim_{n\\to\\infty} b_n$ (if the limit exists).', hint: 'Most terms cancel in partial sums.' },
      ],
    });
    console.log('✅ Infinite Series flashcards');
  }

  // Convergence Tests
  const t3 = await prisma.topic.findFirst({ where: { slug: 'convergence-tests-summary-calcbc' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'State the Ratio Test.', back: 'If $L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$, then: $L < 1 \\Rightarrow$ converges, $L > 1 \\Rightarrow$ diverges, $L = 1 \\Rightarrow$ inconclusive.', hint: 'Great for factorials and exponentials.' },
        { topicId: t3.id, front: 'State the Integral Test.', back: 'If $f$ is positive, continuous, and decreasing for $x \\ge N$, and $a_n = f(n)$, then $\\sum a_n$ and $\\int_N^{\\infty} f(x)\\,dx$ both converge or both diverge.', hint: 'Compare a series to an improper integral.' },
        { topicId: t3.id, front: 'State the Direct Comparison Test.', back: 'If $0 \\le a_n \\le b_n$: (1) $\\sum b_n$ converges $\\Rightarrow \\sum a_n$ converges. (2) $\\sum a_n$ diverges $\\Rightarrow \\sum b_n$ diverges.', hint: 'Smaller than convergent = convergent.' },
        { topicId: t3.id, front: 'State the Limit Comparison Test.', back: 'If $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = c$ where $0 < c < \\infty$, then $\\sum a_n$ and $\\sum b_n$ both converge or both diverge.', hint: 'If the ratio is finite and positive, they behave the same.' },
      ],
    });
    console.log('✅ Convergence Tests flashcards');
  }

  // Alternating Series
  const t4 = await prisma.topic.findFirst({ where: { slug: 'alternating-series-calcbc' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'State the Alternating Series Test.', back: '$\\sum (-1)^n b_n$ converges if (1) $b_{n+1} \\le b_n$ (decreasing) and (2) $\\lim_{n\\to\\infty} b_n = 0$.', hint: 'Terms must decrease and approach zero.' },
        { topicId: t4.id, front: 'Alternating Series Error Bound?', back: 'The error $|S - S_N| \\le b_{N+1}$ (the first omitted term).', hint: 'Error is bounded by the next term.' },
      ],
    });
    console.log('✅ Alternating Series flashcards');
  }

  // Power Series
  const t5 = await prisma.topic.findFirst({ where: { slug: 'power-series-calcbc' } });
  if (t5) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t5.id, front: 'What is the radius of convergence $R$?', back: 'The value such that $\\sum c_n(x-a)^n$ converges for $|x-a| < R$ and diverges for $|x-a| > R$. Found via Ratio Test.', hint: 'Distance from center where convergence holds.' },
        { topicId: t5.id, front: 'Can you differentiate and integrate power series term by term?', back: 'Yes, within the interval of convergence. $\\frac{d}{dx}\\sum c_n x^n = \\sum n c_n x^{n-1}$ and $\\int \\sum c_n x^n\\,dx = \\sum \\frac{c_n x^{n+1}}{n+1} + C$.', hint: 'Radius of convergence stays the same.' },
      ],
    });
    console.log('✅ Power Series flashcards');
  }

  // Taylor/Maclaurin Series
  const t6 = await prisma.topic.findFirst({ where: { slug: 'taylor-maclaurin-series-calcbc' } });
  if (t6) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t6.id, front: 'Taylor series formula for $f(x)$ centered at $a$?', back: "$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$", hint: 'Each term uses the nth derivative at a.' },
        { topicId: t6.id, front: 'Maclaurin series for $e^x$?', back: '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$', hint: 'All derivatives of $e^x$ are $e^x$, which equals 1 at $x=0$.' },
        { topicId: t6.id, front: 'Maclaurin series for $\\sin x$?', back: '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$', hint: 'Odd powers only, alternating signs.' },
        { topicId: t6.id, front: 'Maclaurin series for $\\cos x$?', back: '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$', hint: 'Even powers only, alternating signs.' },
        { topicId: t6.id, front: 'Maclaurin series for $\\frac{1}{1-x}$?', back: '$\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots$, for $|x| < 1$.', hint: 'This is the geometric series.' },
      ],
    });
    console.log('✅ Taylor/Maclaurin Series flashcards');
  }

  // Lagrange Error Bound
  const t7 = await prisma.topic.findFirst({ where: { slug: 'lagrange-error-bound-calcbc' } });
  if (t7) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t7.id, front: 'State the Lagrange Error Bound.', back: '$|R_n(x)| \\le \\frac{M|x-a|^{n+1}}{(n+1)!}$, where $M = \\max|f^{(n+1)}(c)|$ for $c$ between $a$ and $x$.', hint: 'Bounds the remainder of a Taylor polynomial.' },
      ],
    });
    console.log('✅ Lagrange Error Bound flashcards');
  }

  // Integration by Parts
  const t8 = await prisma.topic.findFirst({ where: { slug: 'integration-by-parts-calcbc' } });
  if (t8) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t8.id, front: 'Integration by parts formula?', back: '$\\int u\\,dv = uv - \\int v\\,du$', hint: 'Choose $u$ using LIATE: Logs, Inverse trig, Algebraic, Trig, Exponential.' },
        { topicId: t8.id, front: 'Partial fractions: how do you decompose $\\frac{1}{(x-a)(x-b)}$?', back: '$\\frac{A}{x-a} + \\frac{B}{x-b}$ where $A = \\frac{1}{a-b}$ and $B = \\frac{1}{b-a}$.', hint: 'Split into simpler fractions, then integrate each.' },
      ],
    });
    console.log('✅ Integration by Parts flashcards');
  }

  // Parametric & Polar
  const t9 = await prisma.topic.findFirst({ where: { slug: 'parametric-curves-calculus-calcbc' } });
  if (t9) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t9.id, front: 'Derivative of parametric curve $\\frac{dy}{dx}$ given $x(t), y(t)$?', back: "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y'(t)}{x'(t)}$", hint: 'Chain rule: dy/dx = (dy/dt)/(dx/dt).' },
        { topicId: t9.id, front: 'Arc length of parametric curve?', back: "$L = \\int_a^b \\sqrt{[x'(t)]^2 + [y'(t)]^2}\\,dt$", hint: 'Speed integrated over time.' },
      ],
    });
    console.log('✅ Parametric flashcards');
  }

  const t10 = await prisma.topic.findFirst({ where: { slug: 'polar-calculus-calcbc' } });
  if (t10) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t10.id, front: 'Area enclosed by polar curve $r = f(\\theta)$?', back: '$A = \\frac{1}{2}\\int_\\alpha^\\beta [f(\\theta)]^2\\,d\\theta$', hint: 'Half times integral of r squared.' },
      ],
    });
    console.log('✅ Polar flashcards');
  }

  console.log('\n✅ All AP Calculus BC series flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
