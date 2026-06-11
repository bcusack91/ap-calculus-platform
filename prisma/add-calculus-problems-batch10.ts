import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 10: Final Parametric/Polar + Sequences/Series Start (6 topics)...');

  // Find the topics
  const polarIntro = await prisma.topic.findFirst({
    where: { slug: 'polar-coordinates-intro' }
  });

  const polarCalculus = await prisma.topic.findFirst({
    where: { slug: 'polar-calculus' }
  });

  const sequencesIntro = await prisma.topic.findFirst({
    where: { slug: 'sequences-intro' }
  });

  const integralTest = await prisma.topic.findFirst({
    where: { slug: 'integral-test' }
  });

  const alternatingSeries = await prisma.topic.findFirst({
    where: { slug: 'alternating-series-test' }
  });

  const seriesIntro = await prisma.topic.findFirst({
    where: { slug: 'series-intro' }
  });

  if (!polarIntro || !polarCalculus || !sequencesIntro || !integralTest || !alternatingSeries || !seriesIntro) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Introduction to Polar Coordinates (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polarIntro.id,
        question: 'Convert the polar equation r = 4sin(θ) to rectangular form and identify the curve.',
        solution: `Step 1: Multiply both sides by r:
r² = 4r·sin(θ)

Step 2: Use polar-rectangular relationships:
x² + y² = r²
y = r·sin(θ)

Step 3: Substitute:
x² + y² = 4y

Step 4: Complete the square:
x² + y² - 4y = 0
x² + (y² - 4y + 4) = 4
x² + (y - 2)² = 4

Step 5: Identify the curve:
This is a circle with center (0, 2) and radius 2

Answer: x² + (y - 2)² = 4 (circle centered at (0, 2), radius 2)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polarIntro.id,
        front: 'What are the polar-rectangular conversion formulas?',
        back: 'x = r·cos(θ), y = r·sin(θ), r² = x² + y², tan(θ) = y/x',
        hint: 'x = r cos θ, y = r sin θ',
        isPremium: false
      },
      {
        topicId: polarIntro.id,
        front: 'What does the polar equation r = a represent?',
        back: 'A circle with center at the origin and radius a.',
        hint: 'Circle centered at origin',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polar-coordinates-intro (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Calculus with Polar Coordinates (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polarCalculus.id,
        question: 'Find the area enclosed by one petal of the rose curve r = 3sin(2θ).',
        solution: `Step 1: Identify one petal range:
One petal occurs from θ = 0 to θ = π/2
(when sin(2θ) goes from 0 to 1 back to 0)

Step 2: Use polar area formula:
A = (1/2)∫ₐᵇ r² dθ
A = (1/2)∫₀^(π/2) [3sin(2θ)]² dθ

Step 3: Simplify:
A = (1/2)∫₀^(π/2) 9sin²(2θ) dθ
A = (9/2)∫₀^(π/2) sin²(2θ) dθ

Step 4: Use identity sin²(u) = (1 - cos(2u))/2:
Let u = 2θ, then sin²(2θ) = (1 - cos(4θ))/2

A = (9/2)∫₀^(π/2) (1 - cos(4θ))/2 dθ
A = (9/4)∫₀^(π/2) [1 - cos(4θ)] dθ

Step 5: Integrate:
A = (9/4)[θ - sin(4θ)/4]₀^(π/2)

Step 6: Evaluate:
A = (9/4)[(π/2 - sin(2π)/4) - (0 - 0)]
A = (9/4)[π/2 - 0]
A = (9/4)(π/2)
A = 9π/8

Answer: Area = 9π/8`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polarCalculus.id,
        front: 'What is the formula for area in polar coordinates?',
        back: 'A = (1/2)∫ₐᵇ r² dθ. Integrates the area of infinitesimal sectors.',
        hint: '(1/2)∫r² dθ',
        isPremium: false
      },
      {
        topicId: polarCalculus.id,
        front: 'What is the formula for arc length in polar coordinates?',
        back: 'L = ∫ₐᵇ √(r² + (dr/dθ)²) dθ',
        hint: '∫√(r² + (dr/dθ)²) dθ',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polar-calculus (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Introduction to Sequences (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: sequencesIntro.id,
        question: 'Determine if the sequence aₙ = (n² + 1)/(2n² - 3) converges, and if so, find its limit.',
        solution: `Step 1: Find lim(n→∞) aₙ:
lim(n→∞) (n² + 1)/(2n² - 3)

Step 2: Divide numerator and denominator by n²:
= lim(n→∞) (1 + 1/n²)/(2 - 3/n²)

Step 3: Evaluate limit:
As n→∞: 1/n² → 0
= (1 + 0)/(2 - 0)
= 1/2

Step 4: Conclusion:
The sequence converges to 1/2

Answer: Converges to L = 1/2`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: sequencesIntro.id,
        front: 'What does it mean for a sequence to converge?',
        back: 'A sequence {aₙ} converges to L if lim(n→∞) aₙ = L. The terms get arbitrarily close to L.',
        hint: 'Terms approach a specific value L',
        isPremium: false
      },
      {
        topicId: sequencesIntro.id,
        front: 'What is a bounded sequence?',
        back: 'A sequence is bounded if there exist numbers m and M such that m ≤ aₙ ≤ M for all n.',
        hint: 'Has upper and lower bounds',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: sequences-intro (now has 5 problems, 6 flashcards)');

  // TOPIC 4: The Integral Test (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: integralTest.id,
        question: 'Use the integral test to determine if Σ(1/(n·ln(n))) from n=2 to ∞ converges or diverges.',
        solution: `Step 1: Verify integral test conditions:
Let f(x) = 1/(x·ln(x)) for x ≥ 2
- Continuous for x ≥ 2 ✓
- Positive for x ≥ 2 ✓
- Decreasing (f'(x) < 0) ✓

Step 2: Set up improper integral:
∫₂^∞ 1/(x·ln(x)) dx

Step 3: Use substitution:
Let u = ln(x)
du = (1/x) dx
When x = 2: u = ln(2)
When x → ∞: u → ∞

Step 4: Transform integral:
∫_{ln(2)}^∞ (1/u) du

Step 5: Integrate:
= lim(b→∞) ∫_{ln(2)}^b (1/u) du
= lim(b→∞) [ln|u|]_{ln(2)}^b
= lim(b→∞) [ln(b) - ln(ln(2))]

Step 6: Evaluate:
= ∞ (diverges)

Step 7: Conclusion by integral test:
Since the integral diverges, the series Σ(1/(n·ln(n))) diverges

Answer: Series diverges`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: integralTest.id,
        front: 'What is the integral test?',
        back: 'If f is continuous, positive, and decreasing for x ≥ 1, then Σaₙ and ∫₁^∞ f(x)dx either both converge or both diverge.',
        hint: 'Series and integral behave the same',
        isPremium: false
      },
      {
        topicId: integralTest.id,
        front: 'What are the conditions for using the integral test?',
        back: 'The function f(x) where f(n) = aₙ must be continuous, positive, and decreasing for all x ≥ some N.',
        hint: 'Continuous, positive, decreasing',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: integral-test (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Alternating Series Test (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: alternatingSeries.id,
        question: 'Determine if the alternating series Σ(-1)ⁿ⁺¹·n/(n² + 1) from n=1 to ∞ converges.',
        solution: `Step 1: Identify as alternating series:
Series: Σ(-1)ⁿ⁺¹·n/(n² + 1)
Form: Σ(-1)ⁿ⁺¹·bₙ where bₙ = n/(n² + 1)

Step 2: Check condition 1 - bₙ > 0:
bₙ = n/(n² + 1) > 0 for all n ≥ 1 ✓

Step 3: Check condition 2 - bₙ is decreasing:
Consider f(x) = x/(x² + 1)
f'(x) = [(1)(x² + 1) - x(2x)]/(x² + 1)²
      = (x² + 1 - 2x²)/(x² + 1)²
      = (1 - x²)/(x² + 1)²

For x ≥ 1: 1 - x² < 0, so f'(x) < 0
Therefore bₙ is decreasing for n ≥ 1 ✓

Step 4: Check condition 3 - lim(n→∞) bₙ = 0:
lim(n→∞) n/(n² + 1) = lim(n→∞) (1/n)/(1 + 1/n²) = 0/1 = 0 ✓

Step 5: Apply alternating series test:
All three conditions satisfied
Therefore the series converges

Answer: Converges by alternating series test`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: alternatingSeries.id,
        front: 'What is the alternating series test?',
        back: 'If bₙ > 0, bₙ is decreasing, and lim bₙ = 0, then Σ(-1)ⁿbₙ converges.',
        hint: 'Positive, decreasing, limit = 0',
        isPremium: false
      },
      {
        topicId: alternatingSeries.id,
        front: 'What is the alternating series error bound?',
        back: 'If Σ(-1)ⁿbₙ converges to S, then |S - Sₙ| ≤ bₙ₊₁. The error is at most the first omitted term.',
        hint: 'Error ≤ first omitted term',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: alternating-series-test (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Introduction to Infinite Series (has 5, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: seriesIntro.id,
        front: 'What is an infinite series?',
        back: 'The sum Σaₙ = a₁ + a₂ + a₃ + ... . The series converges if the sequence of partial sums {Sₙ} converges.',
        hint: 'Sum of infinite sequence',
        isPremium: false
      },
      {
        topicId: seriesIntro.id,
        front: 'What is the nth term test for divergence?',
        back: 'If lim(n→∞) aₙ ≠ 0, then Σaₙ diverges. CAUTION: If lim aₙ = 0, the series may converge or diverge.',
        hint: 'If lim aₙ ≠ 0, diverges',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: series-intro (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 10! Parametric & Polar complete (4/4), started Sequences & Series!');
  
  await prisma.$disconnect();
}

main();
