import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const slug = 'activation-energy-arrhenius';
  const topic = await prisma.topic.findUnique({ where: { slug } });
  if (!topic) {
    throw new Error(`Topic not found: ${slug}`);
  }

  // New flashcards to enrich this topic (avoid duplication by matching 'front')
  const newFlashcards = [
    {
      front: 'What are the units for Ea and R, and why must temperature be in Kelvin in the Arrhenius equation?',
      back: 'Ea is typically in J/mol (or kJ/mol, convert to J/mol when using R = 8.314 J/(mol·K)). Temperature must be absolute (Kelvin) so energy ratios and exponential factors are dimensionally consistent.'
    },
    {
      front: 'Physically, what does the pre-exponential factor A represent?',
      back: 'A captures collision frequency and orientation probability (steric factor). In ln(k) vs 1/T, ln(A) is the y-intercept.'
    },
    {
      front: 'How do you extract Ea from an Arrhenius plot?',
      back: 'Plot ln(k) vs 1/T. Fit a straight line: slope m = −Ea/R. Then Ea = −mR. Intercept b = ln(A) so A = e^b.'
    },
    {
      front: 'Two-point Arrhenius: which form avoids computing A explicitly?',
      back: 'Use ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂). This cancels A and directly relates k at two temperatures.'
    },
    {
      front: 'Why is the “rate doubles for every 10°C” rule only approximate?',
      back: 'The factor depends on Ea and the temperature range. For moderate Ea values near room temperature it may be ~2, but the true factor is e^{(Ea/R)(1/T−1/(T+10))} and varies with Ea and T.'
    },
    {
      front: 'How does a catalyst change an Arrhenius plot?',
      back: 'A catalyst typically lowers Ea (less negative slope magnitude). The lines for catalyzed vs uncatalyzed have different slopes; ln(A) can also change because the mechanism changes.'
    },
    {
      front: 'Given Ea values, how can you estimate which reaction is more temperature-sensitive?',
      back: 'Higher Ea → greater temperature sensitivity. A small increase in T yields a larger increase in k when Ea is larger.'
    },
    {
      front: 'What happens to k if temperature is converted from °C to K incorrectly?',
      back: 'Arrhenius requires T in K. Using °C in place of K will give wildly incorrect exponent values and thus incorrect k.'
    },
    {
      front: 'How do A and Ea compete to determine which reaction is faster at a given temperature?',
      back: 'At low T, lower Ea usually dominates (higher k). At very high T, reactions with larger A (even with larger Ea) can become faster. Compare k = A e^{−Ea/RT} numerically at the temperature of interest.'
    },
    {
      front: 'What are common pitfalls when using the Arrhenius equation in calculations?',
      back: 'Forgetting to convert kJ→J, using °C instead of K, mixing base-10 and natural logs, and rounding too early when exponentiating.'
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
      question: 'From an Arrhenius plot, ln(k) = −9500(1/T) + 18.2. Find (a) Ea and (b) A.',
      solution: `Slope m = −9500 ⇒ Ea = −mR = 9500×8.314 = 7.90×10^4 J/mol = 79.0 kJ/mol. Intercept b = 18.2 ⇒ A = e^{18.2} ≈ 9.91×10^7 (units of s⁻¹ for first-order).`,
      difficulty: 'EASY' as Difficulty,
    },
    {
      question: 'Two reactions: (I) A₁ = 2.0×10^12 s⁻¹, Ea₁ = 85 kJ/mol; (II) A₂ = 4.0×10^10 s⁻¹, Ea₂ = 65 kJ/mol. At 298 K, which is faster and by what factor?',
      solution: `Compute k = A e^{−Ea/RT}. Use R = 8.314 J/(mol·K). Convert Ea to J/mol.
For I: exponent = −85000/(8.314×298) = −34.3 ⇒ k₁ ≈ 2.0×10^12 × e^{−34.3} = 2.0×10^12 × 1.2×10^{−15} ≈ 2.4×10^{−3} s⁻¹.
For II: exponent = −65000/(8.314×298) = −26.2 ⇒ k₂ ≈ 4.0×10^10 × e^{−26.2} = 4.0×10^10 × 4.3×10^{−12} ≈ 0.172 s⁻¹.
Reaction II is faster by factor ≈ k₂/k₁ ≈ 0.172 / 2.4×10^{−3} ≈ 71.`,
      difficulty: 'MEDIUM' as Difficulty,
    },
    {
      question: 'By what temperature increase ΔT (°C) will a reaction with Ea = 95 kJ/mol approximately double its rate near 300 K?',
      solution: `Use two-point form with k₂/k₁ = 2 and T₁ = 300 K, T₂ = 300 + ΔT. ln(2) = (Ea/R)(1/T₁ − 1/T₂).
Solve approximately with T₂ ≈ T₁ + ΔT and small ΔT: 1/T₁ − 1/T₂ ≈ ΔT/T₁^2.
Thus ln(2) ≈ (Ea/R)(ΔT/T₁^2) ⇒ ΔT ≈ ln(2)·R·T₁^2 / Ea.
Plug in: ΔT ≈ 0.693×8.314×(300)^2 / 95000 ≈ (0.693×8.314×90000)/95000 ≈ (5187)/95000 ≈ 0.0546×10^2 ≈ 5.46 °C.
So roughly a 5–6 °C increase doubles the rate (depends on Ea and starting T).`,
      difficulty: 'MEDIUM' as Difficulty,
    },
    {
      question: 'A catalyst lowers Ea from 120 kJ/mol to 80 kJ/mol. At 350 K, by what factor does the rate constant increase (assume A unchanged)?',
      solution: `Factor = k_cat/k_uncat = e^{−Ea_cat/RT} / e^{−Ea_uncat/RT} = e^{(Ea_uncat − Ea_cat)/(RT)}.
ΔEa = 40 kJ/mol = 4.0×10^4 J/mol; RT = 8.314×350 ≈ 2910 J/mol.
Factor ≈ e^{40000/2910} = e^{13.7} ≈ 9.0×10^5. So k increases by ~9×10^5.`,
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
