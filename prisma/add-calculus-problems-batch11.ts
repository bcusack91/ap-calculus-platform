import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 11 FINAL: Last Sequences/Series + Power/Taylor Series (6 topics)...');

  // Find the topics - some have 5 problems and need flashcards
  const comparisonTests = await prisma.topic.findFirst({
    where: { slug: 'comparison-tests' }
  });

  const ratioRootTests = await prisma.topic.findFirst({
    where: { slug: 'ratio-root-tests' }
  });

  const powerSeriesIntro = await prisma.topic.findFirst({
    where: { slug: 'power-series-intro' }
  });

  const radiusInterval = await prisma.topic.findFirst({
    where: { slug: 'radius-interval-convergence' }
  });

  const taylorMaclaurin = await prisma.topic.findFirst({
    where: { slug: 'taylor-maclaurin-series' }
  });

  const commonTaylor = await prisma.topic.findFirst({
    where: { slug: 'common-taylor-series' }
  });

  if (!comparisonTests || !ratioRootTests || !powerSeriesIntro || !radiusInterval || !taylorMaclaurin || !commonTaylor) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Direct and Limit Comparison Tests (has 5, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: comparisonTests.id,
        front: 'What is the direct comparison test?',
        back: 'If 0 ≤ aₙ ≤ bₙ: (1) If Σbₙ converges, then Σaₙ converges. (2) If Σaₙ diverges, then Σbₙ diverges.',
        hint: 'Smaller than convergent = converges',
        isPremium: false
      },
      {
        topicId: comparisonTests.id,
        front: 'What is the limit comparison test?',
        back: 'If lim(aₙ/bₙ) = L > 0 and finite, then Σaₙ and Σbₙ either both converge or both diverge.',
        hint: 'Same behavior if ratio approaches positive constant',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: comparison-tests (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Ratio and Root Tests (has 5, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ratioRootTests.id,
        front: 'What is the ratio test?',
        back: 'Let L = lim|aₙ₊₁/aₙ|. If L < 1, series converges. If L > 1, series diverges. If L = 1, test inconclusive.',
        hint: 'lim|aₙ₊₁/aₙ| < 1 = converges',
        isPremium: false
      },
      {
        topicId: ratioRootTests.id,
        front: 'What is the root test?',
        back: 'Let L = lim ⁿ√|aₙ|. If L < 1, converges. If L > 1, diverges. If L = 1, inconclusive.',
        hint: 'lim ⁿ√|aₙ| < 1 = converges',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: ratio-root-tests (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Introduction to Power Series (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: powerSeriesIntro.id,
        question: 'Find the values of x for which the power series Σ(xⁿ/n!) converges.',
        solution: `Step 1: Apply ratio test:
Let aₙ = xⁿ/n!

Step 2: Find aₙ₊₁/aₙ:
aₙ₊₁/aₙ = [xⁿ⁺¹/(n+1)!]/[xⁿ/n!]
        = [xⁿ⁺¹/(n+1)!]·[n!/xⁿ]
        = x·n!/[(n+1)!]
        = x/(n+1)

Step 3: Find limit:
L = lim(n→∞) |x/(n+1)|
  = |x|·lim(n→∞) 1/(n+1)
  = |x|·0
  = 0

Step 4: Apply ratio test conclusion:
Since L = 0 < 1 for all x
The series converges for all real numbers

Step 5: Note:
This is the power series for eˣ!
Σ(xⁿ/n!) = eˣ for all x

Answer: Converges for all x ∈ ℝ (radius of convergence R = ∞)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: powerSeriesIntro.id,
        front: 'What is a power series?',
        back: 'A series of the form Σcₙ(x - a)ⁿ, where a is the center and cₙ are coefficients. Represents a function.',
        hint: 'Σcₙ(x - a)ⁿ',
        isPremium: false
      },
      {
        topicId: powerSeriesIntro.id,
        front: 'What are the three possibilities for power series convergence?',
        back: '1) Converges only at x = a, 2) Converges for all x, 3) Converges for |x - a| < R (radius R).',
        hint: 'Point, everywhere, or interval',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: power-series-intro (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Radius and Interval of Convergence (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: radiusInterval.id,
        question: 'Find the radius and interval of convergence for Σ(n·xⁿ)/2ⁿ from n=1 to ∞.',
        solution: `Step 1: Apply ratio test:
Let aₙ = n·xⁿ/2ⁿ

Step 2: Find |aₙ₊₁/aₙ|:
|aₙ₊₁/aₙ| = |(n+1)·xⁿ⁺¹/2ⁿ⁺¹|/|n·xⁿ/2ⁿ|
          = |(n+1)·xⁿ⁺¹/2ⁿ⁺¹|·|2ⁿ/(n·xⁿ)|
          = |(n+1)·x|/(2n)
          = |x|·(n+1)/(2n)

Step 3: Find limit:
L = lim(n→∞) |x|·(n+1)/(2n)
  = |x|·lim(n→∞) (n+1)/(2n)
  = |x|·lim(n→∞) (1 + 1/n)/2
  = |x|/2

Step 4: Apply ratio test:
Converges when L < 1:
|x|/2 < 1
|x| < 2

Radius of convergence: R = 2

Step 5: Test endpoints x = ±2:
At x = 2: Σ(n·2ⁿ)/2ⁿ = Σn (diverges)
At x = -2: Σ(n·(-2)ⁿ)/2ⁿ = Σ(-1)ⁿ·n (diverges, lim ≠ 0)

Step 6: Interval of convergence:
-2 < x < 2 (open interval)

Answer: R = 2, interval: (-2, 2)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: radiusInterval.id,
        front: 'How do you find the radius of convergence?',
        back: 'Use ratio test: R = 1/L where L = lim|aₙ₊₁/aₙ|. If L = 0, R = ∞. If L = ∞, R = 0.',
        hint: 'Ratio test gives R = 1/L',
        isPremium: false
      },
      {
        topicId: radiusInterval.id,
        front: 'How do you find the interval of convergence?',
        back: 'Find radius R using ratio/root test, then test endpoints x = a±R separately to determine if they should be included.',
        hint: 'Find R, then test endpoints',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: radius-interval-convergence (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Taylor and Maclaurin Series (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: taylorMaclaurin.id,
        question: 'Find the first 4 nonzero terms of the Maclaurin series for f(x) = cos(x).',
        solution: `Step 1: Maclaurin series formula:
f(x) = Σ[f⁽ⁿ⁾(0)/n!]·xⁿ

Step 2: Find derivatives at x = 0:
f(x) = cos(x)     → f(0) = 1
f'(x) = -sin(x)   → f'(0) = 0
f''(x) = -cos(x)  → f''(0) = -1
f'''(x) = sin(x)  → f'''(0) = 0
f⁽⁴⁾(x) = cos(x)  → f⁽⁴⁾(0) = 1
f⁽⁵⁾(x) = -sin(x) → f⁽⁵⁾(0) = 0
f⁽⁶⁾(x) = -cos(x) → f⁽⁶⁾(0) = -1
f⁽⁷⁾(x) = sin(x)  → f⁽⁷⁾(0) = 0
f⁽⁸⁾(x) = cos(x)  → f⁽⁸⁾(0) = 1

Step 3: Write first 4 nonzero terms:
cos(x) = f(0) + f''(0)x²/2! + f⁽⁴⁾(0)x⁴/4! + f⁽⁶⁾(0)x⁶/6! + f⁽⁸⁾(0)x⁸/8! + ...
       = 1 + (-1)x²/2 + (1)x⁴/24 + (-1)x⁶/720 + (1)x⁸/40320 + ...
       = 1 - x²/2 + x⁴/24 - x⁶/720 + ...

Step 4: Pattern:
cos(x) = Σ[(-1)ⁿ·x^(2n)]/(2n)! from n=0 to ∞

Answer: 1 - x²/2 + x⁴/24 - x⁶/720 (first 4 nonzero terms)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: taylorMaclaurin.id,
        front: 'What is the Taylor series formula?',
        back: 'f(x) = Σ[f⁽ⁿ⁾(a)/n!]·(x-a)ⁿ. Represents f(x) as a power series centered at x = a.',
        hint: 'Σ[f⁽ⁿ⁾(a)/n!]·(x-a)ⁿ',
        isPremium: false
      },
      {
        topicId: taylorMaclaurin.id,
        front: 'What is a Maclaurin series?',
        back: 'A Taylor series centered at a = 0: f(x) = Σ[f⁽ⁿ⁾(0)/n!]·xⁿ. Special case of Taylor series.',
        hint: 'Taylor series at a = 0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: taylor-maclaurin-series (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Common Taylor Series and Applications (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: commonTaylor.id,
        question: 'Use the Maclaurin series for eˣ to find a series representation for e^(x²).',
        solution: `Step 1: Recall Maclaurin series for eˣ:
eˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...
eˣ = Σ(xⁿ/n!) from n=0 to ∞

Step 2: Substitute x² for x:
e^(x²) = Σ[(x²)ⁿ/n!]
       = Σ(x^(2n)/n!)

Step 3: Write out first few terms:
e^(x²) = 1 + x² + x⁴/2! + x⁶/3! + x⁸/4! + ...
       = 1 + x² + x⁴/2 + x⁶/6 + x⁸/24 + ...

Answer: e^(x²) = Σ(x^(2n)/n!) from n=0 to ∞`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: commonTaylor.id,
        question: 'Use Taylor series to approximate ∫₀^(0.5) sin(x²) dx to 4 decimal places.',
        solution: `Step 1: Recall Maclaurin series for sin(x):
sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...

Step 2: Substitute x² for x:
sin(x²) = x² - x⁶/6 + x¹⁰/120 - x¹⁴/5040 + ...

Step 3: Integrate term by term:
∫sin(x²) dx = x³/3 - x⁷/42 + x¹¹/1320 - x¹⁵/75600 + ... + C

Step 4: Evaluate from 0 to 0.5:
∫₀^(0.5) sin(x²) dx = [x³/3 - x⁷/42 + x¹¹/1320]₀^(0.5)

Step 5: Calculate each term:
(0.5)³/3 = 0.125/3 ≈ 0.04166667
(0.5)⁷/42 = 0.0078125/42 ≈ 0.00018601
(0.5)¹¹/1320 ≈ 0.00000015 (negligible)

Step 6: Sum terms:
≈ 0.04166667 - 0.00018601
≈ 0.04148066
≈ 0.0415 (to 4 decimal places)

Answer: ≈ 0.0415`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: commonTaylor.id,
        front: 'What are the Maclaurin series for eˣ, sin(x), and cos(x)?',
        back: 'eˣ = Σxⁿ/n!, sin(x) = Σ(-1)ⁿx^(2n+1)/(2n+1)!, cos(x) = Σ(-1)ⁿx^(2n)/(2n)!',
        hint: 'All factorials in denominators',
        isPremium: false
      },
      {
        topicId: commonTaylor.id,
        front: 'How can you use Taylor series to approximate integrals?',
        back: 'Replace the integrand with its Taylor series, integrate term by term, then evaluate. Useful when antiderivative is unknown.',
        hint: 'Series → integrate term by term',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: common-taylor-series (now has 5 problems, 6 flashcards)');

  console.log('\n🎉🎉🎉 AP CALCULUS AB/BC COMPLETE! All 64 topics finished! 🎉🎉🎉');
  
  await prisma.$disconnect();
}

main();
