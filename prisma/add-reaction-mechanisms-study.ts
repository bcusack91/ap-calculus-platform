import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const slug = 'reaction-mechanisms';
  const topic = await prisma.topic.findUnique({ where: { slug } });
  if (!topic) {
    throw new Error(`Topic not found: ${slug}`);
  }

  // New flashcards to enrich Reaction Mechanisms (avoid duplicates by matching 'front')
  const newFlashcards = [
    {
      front: 'Difference between transition state and intermediate?',
      back: 'Transition state: high-energy maximum, not isolable, exists at the peak of the energy profile. Intermediate: local minimum between steps, can sometimes be detected/isolated; appears as a valley in energy diagram.'
    },
    {
      front: 'Order vs molecularity—what\'s the difference?',
      back: 'Order is an empirical exponent in the rate law (determined experimentally). Molecularity refers to the number of species in a single elementary step (uni-, bi-, termolecular). For elementary steps only, orders equal stoichiometric coefficients.'
    },
    {
      front: 'When is termolecular elementary step plausible?',
      back: 'Very rarely; simultaneous three-body collisions are improbable. Mechanisms typically decompose such steps into sequences of uni-/bimolecular steps.'
    },
    {
      front: 'How do you eliminate intermediates from the rate law when RDS is not the first step?',
      back: 'Use pre-equilibrium (K = [intermediate]/[reactants]) or steady-state approximation (d[intermediate]/dt ≈ 0) to express intermediates in terms of reactants, then substitute into the RDS rate expression.'
    },
    {
      front: 'Catalyst in a mechanism: how does it show up in the rate law?',
      back: 'A catalyst often appears in the rate law (especially for homogeneous catalysis) because it participates in the RDS. It lowers Ea and changes the mechanism; it is regenerated overall and does not affect ΔH or equilibrium.'
    },
    {
      front: 'Validity checks for a proposed mechanism',
      back: '1) Steps sum to overall equation, 2) Derived rate law matches experiment, 3) Steps are reasonable (mostly uni-/bimolecular), 4) Energy diagram consistent (intermediates = minima, TS = maxima).'
    },
    {
      front: 'Pre-equilibrium vs steady-state: when to use each?',
      back: 'Pre-equilibrium: first step(s) are fast and reversible—use equilibrium expressions. Steady-state: intermediate is formed and consumed at similar rates—set d[intermediate]/dt ≈ 0.'
    },
    {
      front: 'How does changing the RDS alter the observed rate law?',
      back: 'If the RDS changes (e.g., with temperature or catalyst), the observed rate law changes accordingly because the slow step and its dependencies change.'
    },
    {
      front: 'Stoichiometry vs rate law—what can and cannot be inferred?',
      back: 'From overall balanced equation you cannot infer the rate law. Only for elementary steps do exponents equal stoichiometric coefficients. Overall rate law must be measured or derived from a mechanism.'
    },
    {
      front: 'Identify intermediates, catalysts, and overall equation from a mechanism: quick steps',
      back: 'Add steps to get the overall equation; cancel species on both sides (intermediates/catalysts). Intermediates: formed then consumed; Catalysts: consumed then regenerated; Products: persist.'
    }
  ];

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

  // Additional example problems (avoid duplication by matching 'question')
  const newProblems = [
    {
      question: 'Pre-equilibrium example: (1) 2A ⇌ A₂ (fast, K₁), (2) A₂ + B → products (slow, k₂). Derive the rate law.',
      solution: `RDS: step 2 ⇒ Rate = k₂[A₂][B]. From step 1: K₁ = [A₂]/[A]^2 ⇒ [A₂] = K₁[A]^2. Substitute: Rate = k₂K₁[A]^2[B] = k[A]^2[B], where k = k₂K₁.`,
      difficulty: 'EASY' as Difficulty,
    },
    {
      question: 'Catalyzed mechanism: (1) X + A ⇌ AX (fast, K₁), (2) AX + B → products + X (slow, k₂). (a) Identify catalyst/intermediate. (b) Overall equation. (c) Rate law.',
      solution: `X is a catalyst (consumed then regenerated). AX is an intermediate (formed then consumed). Overall: add steps and cancel X, AX ⇒ A + B → products. Rate law from RDS: Rate = k₂[AX][B]. From step 1: [AX] = K₁[X][A]. Thus Rate = k₂K₁[X][A][B] = k[X][A][B].`,
      difficulty: 'MEDIUM' as Difficulty,
    },
    {
      question: 'Identify intermediates and overall equation: (1) NO + O₃ → NO₂ + O₂ (fast), (2) NO₂ + O → NO + O₂ (slow), (3) O₃ ⇌ O₂ + O (fast). Determine the overall reaction and the intermediate(s).',
      solution: `Add steps and cancel common species. Species that appear and cancel: NO (consumed in step 1, produced in step 2) cancels; O (from step 3, consumed in step 2) cancels; NO₂ (produced in step 1, consumed in step 2) cancels. Overall: O₃ → O₂. Intermediates: O and NO₂.`,
      difficulty: 'MEDIUM' as Difficulty,
    },
    {
      question: 'RDS first step vs second step: (1) A + B → C (slow), (2) C + B → D (fast). (a) Rate law? Now swap RDS: (1) A + B ⇌ C (fast, K), (2) C + B → D (slow). (b) New rate law?',
      solution: `(a) If step 1 is slow: Rate = k[A][B]. (b) If step 2 is slow, use pre-equilibrium for step 1: [C] = K[A][B]. Rate = k₂[C][B] = k₂K[A][B]^2 = k[A][B]^2. The observed rate law changes when the RDS changes.`,
      difficulty: 'HARD' as Difficulty,
    },
  ];

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

  // Report totals
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
