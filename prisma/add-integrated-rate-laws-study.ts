import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const slug = 'integrated-rate-laws';
  const topic = await prisma.topic.findUnique({ where: { slug } });
  if (!topic) {
    throw new Error(`Topic not found: ${slug}`);
  }

  // Prepare flashcards (new set; avoid duplicating existing by matching 'front')
  const newFlashcards = [
    {
      front: 'Derive the first-order integrated rate law from the differential form.',
      back: 'Start with d[A]/dt = -k[A]. Separate variables: d[A]/[A] = -k dt. Integrate: ln[A]_t - ln[A]_0 = -kt. Rearranged: ln[A]_t = ln[A]_0 - kt, or [A]_t = [A]_0 e^{-kt}.'
    },
    {
      front: 'When do you use [A] vs t, ln[A] vs t, or 1/[A] vs t plots?',
      back: '[A] vs t linear → zero order; ln[A] vs t linear → first order; 1/[A] vs t linear → second order. Choose the plot that straightens the data to a line.'
    },
    {
      front: 'How do half-lives change with reaction order?',
      back: 'Zero order: t₁/₂ decreases as [A]_0 decreases (t₁/₂ = [A]_0/2k). First order: constant (t₁/₂ = 0.693/k). Second order: increases as [A]_0 decreases (t₁/₂ = 1/(k[A]_0)).'
    },
    {
      front: 'A first-order process has k = 0.080 min⁻¹. What fraction remains after 30 min?',
      back: 'Use [A]_t/[A]_0 = e^{-kt} = e^{-0.080×30} = e^{-2.4} ≈ 0.090. About 9% remains (91% consumed).'
    },
    {
      front: 'Units check: If rate has units M·s⁻¹ and [A] has M, what are units of k for (a) zero, (b) first, (c) second order?',
      back: '(a) Zero: k has M·s⁻¹. (b) First: s⁻¹. (c) Second: M⁻¹·s⁻¹. In general, units of k = M^{1−n}·time⁻¹ for order n.'
    },
    {
      front: 'Given two times and concentrations for a first-order reaction, how can you compute k without [A]_0?',
      back: 'Use ln([A]_1/[A]_2) = k(t_2 − t_1). Rearranged from ln[A]_t = ln[A]_0 − kt by subtracting two times to eliminate [A]_0.'
    },
    {
      front: 'Zero-order decay: time to drop from 0.40 M to 0.10 M with k = 1.0×10⁻³ M·s⁻¹?',
      back: 'Use [A]_t = [A]_0 − kt. t = ([A]_0 − [A]_t)/k = (0.40 − 0.10)/(1.0×10⁻³) = 300 s.'
    },
    {
      front: 'Second-order: doubling the initial concentration has what effect on the first half-life?',
      back: 'For second order, t₁/₂ = 1/(k[A]_0). Doubling [A]_0 halves the first half-life.'
    },
    {
      front: 'Diagnostic: ln[A] vs t is nearly linear but 1/[A] vs t is slightly curved. What is the likely order and why?',
      back: 'Likely first order. The most linear transformation indicates order. Small curvature in 1/[A] vs t signals it is not second order.'
    },
    {
      front: 'How to compute time for a first-order reaction to reach 10% of its initial concentration?',
      back: 'Set [A]_t/[A]_0 = 0.10, so t = (1/k)ln(1/0.10) = (1/k)ln(10).'
    }
  ];

  // Fetch existing flashcards for duplicate filtering
  const existingFlashcards = await prisma.flashcard.findMany({
    where: { topicId: topic.id },
    select: { id: true, front: true }
  });
  const existingFronts = new Set(existingFlashcards.map(f => f.front.trim()));
  const toCreateFlashcards = newFlashcards
    .filter(fc => !existingFronts.has(fc.front.trim()))
    .map(fc => ({ topicId: topic.id, ...fc }));

  if (toCreateFlashcards.length > 0) {
    await prisma.flashcard.createMany({ data: toCreateFlashcards });
  }

  // Prepare new example problems (avoid duplicating existing by matching 'question')
  const newProblems = [
    {
      question: 'Zero-order decay: A → products with k = 2.5×10⁻³ M·s⁻¹. If [A]_0 = 0.300 M, (a) write [A]_t, (b) time to 0.120 M, (c) half-life, (d) how much remains after 4.0 minutes?',
      solution: `Zero order: [A]_t = [A]_0 − kt.
(a) [A]_t = 0.300 − (2.5×10⁻³)t (M).
(b) t = (0.300 − 0.120)/(2.5×10⁻³) = 0.180/0.0025 = 72 s.
(c) t₁/₂ = [A]_0/(2k) = 0.300/(2×2.5×10⁻³) = 60 s.
(d) t = 4.0 min = 240 s ⇒ [A] = 0.300 − (2.5×10⁻³)(240) = 0.300 − 0.600 = negative → zero-order model predicts exhaustion at t = [A]_0/k = 120 s, so after 240 s, [A] ≈ 0 (reaction complete).`,
      difficulty: 'MEDIUM' as Difficulty,
    },
    {
      question: 'First-order: A first-order reaction has k = 0.035 s⁻¹. (a) Time to reach 25% of [A]_0? (b) Fraction remaining after 1.0 minute?',
      solution: `First order: [A]_t = [A]_0 e^{−kt}.
(a) Set [A]_t/[A]_0 = 0.25 = e^{−kt} ⇒ t = (1/k)ln(1/0.25) = (1/0.035)ln(4) ≈ 28.6×1.386 ≈ 39.7 s.
(b) t = 60 s ⇒ fraction = e^{−0.035×60} = e^{−2.10} ≈ 0.122 = 12.2% remains.`,
      difficulty: 'EASY' as Difficulty,
    },
    {
      question: 'Order identification from data: t (s) = 0, 50, 100, 150; [A] (M) = 0.80, 0.57, 0.41, 0.30. Determine order and k.',
      solution: `Compute ln[A]: 0.80→−0.223; 0.57→−0.562; 0.41→−0.894; 0.30→−1.204.
Δ(ln[A]) per 50 s ≈ −0.339, −0.332, −0.310 (nearly constant) ⇒ ln[A] vs t is ~linear ⇒ first-order.
Slope ≈ (−1.204 − (−0.223))/(150 − 0) = (−0.981)/150 = −0.00654 s⁻¹ ⇒ k ≈ 6.5×10⁻³ s⁻¹.
Check 1/[A] vs t curvature to rule out second order.`,
      difficulty: 'MEDIUM' as Difficulty,
    },
    {
      question: 'Second-order: For 2A → products with k = 0.22 M⁻¹·s⁻¹ and [A]_0 = 0.50 M, how long to reach 0.20 M? What are the first and second half-lives?',
      solution: `Second order: 1/[A]_t = 1/[A]_0 + kt.
Solve for t to [A]_t = 0.20: t = (1/[A]_t − 1/[A]_0)/k = (1/0.20 − 1/0.50)/0.22 = (5.00 − 2.00)/0.22 = 3.00/0.22 ≈ 13.6 s.
Half-lives: t₁/₂ = 1/(k[A]_0) = 1/(0.22×0.50) = 1/0.11 ≈ 9.09 s; second half-life = 1/(k×0.25) = 1/0.055 ≈ 18.2 s (double).`,
      difficulty: 'HARD' as Difficulty,
    },
  ];

  // Fetch existing problems to avoid duplicates by question text
  const existingProblems = await prisma.exampleProblem.findMany({
    where: { topicId: topic.id },
    select: { id: true, question: true, order: true }
  });
  const existingQuestions = new Set(existingProblems.map(p => p.question.trim()));
  const maxOrder = existingProblems.reduce((m, p) => Math.max(m, p.order ?? 0), 0);

  const toCreateProblems = newProblems
    .filter(p => !existingQuestions.has(p.question.trim()))
    .map((p, i) => ({ topicId: topic.id, order: maxOrder + i + 1, ...p }));

  if (toCreateProblems.length > 0) {
    await prisma.exampleProblem.createMany({ data: toCreateProblems });
  }

  // report
  const flashcardCount = await prisma.flashcard.count({ where: { topicId: topic.id } });
  const exampleCount = await prisma.exampleProblem.count({ where: { topicId: topic.id } });

  console.log('✓ Topic:', topic.title);
  console.log('   New flashcards added:', toCreateFlashcards.length);
  console.log('   Total flashcards:', flashcardCount);
  console.log('   New example problems added:', toCreateProblems.length);
  console.log('   Total example problems:', exampleCount);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
