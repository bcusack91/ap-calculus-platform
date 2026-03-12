import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 2: Limits and Continuity Part 2 (6 topics)...');

  // Find the topics
  const oneSidedLimits = await prisma.topic.findFirst({
    where: { slug: 'one-sided-limits-in-detail' }
  });

  const directSubstitution = await prisma.topic.findFirst({
    where: { slug: 'direct-substitution-method' }
  });

  const factoringMethod = await prisma.topic.findFirst({
    where: { slug: 'factoring-method-limits' }
  });

  const rationalizingTechnique = await prisma.topic.findFirst({
    where: { slug: 'rationalizing-technique-limits' }
  });

  const limitsAtInfinity = await prisma.topic.findFirst({
    where: { slug: 'limits-at-infinity' }
  });

  const infiniteLimits = await prisma.topic.findFirst({
    where: { slug: 'infinite-limits-vertical-asymptotes' }
  });

  if (!oneSidedLimits || !directSubstitution || !factoringMethod || !rationalizingTechnique || !limitsAtInfinity || !infiniteLimits) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: One-Sided Limits in Detail (has 2, needs 3 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: oneSidedLimits.id,
        question: 'Find lim(x→3⁻) f(x) and lim(x→3⁺) f(x) where f(x) = { x + 1, if x < 3; 2x - 3, if x ≥ 3 }',
        solution: `Step 1: Find left-hand limit lim(x→3⁻):
Approaching 3 from left means x < 3
Use f(x) = x + 1
lim(x→3⁻) (x + 1) = 3 + 1 = 4

Step 2: Find right-hand limit lim(x→3⁺):
Approaching 3 from right means x ≥ 3
Use f(x) = 2x - 3
lim(x→3⁺) (2x - 3) = 2(3) - 3 = 3

Step 3: Compare:
lim(x→3⁻) f(x) = 4
lim(x→3⁺) f(x) = 3
Since 4 ≠ 3, lim(x→3) f(x) does not exist

Answer: lim(x→3⁻) f(x) = 4, lim(x→3⁺) f(x) = 3, limit DNE`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: oneSidedLimits.id,
        question: 'Evaluate lim(x→0⁻) (|x|/x)',
        solution: `Step 1: Understand the absolute value for x < 0:
When x < 0, |x| = -x

Step 2: Substitute:
|x|/x = (-x)/x = -1 for all x < 0

Step 3: Evaluate the limit:
As x→0 from the left, f(x) = -1 constantly
lim(x→0⁻) (|x|/x) = -1

Step 4: Verify with values:
x = -0.1: |-0.1|/(-0.1) = 0.1/(-0.1) = -1 ✓
x = -0.01: |-0.01|/(-0.01) = 0.01/(-0.01) = -1 ✓

Answer: -1`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: oneSidedLimits.id,
        question: 'For f(x) = 1/(x - 2), find lim(x→2⁻) f(x) and lim(x→2⁺) f(x).',
        solution: `Step 1: Analyze left-hand limit (x→2⁻):
As x approaches 2 from left (x < 2):
• x - 2 approaches 0 from the negative side
• x - 2 is small and negative
• 1/(negative small number) = large negative
lim(x→2⁻) 1/(x - 2) = -∞

Step 2: Create table from left:
x:      1.9    1.99   1.999
x-2:    -0.1   -0.01  -0.001
1/(x-2): -10   -100   -1000 → -∞

Step 3: Analyze right-hand limit (x→2⁺):
As x approaches 2 from right (x > 2):
• x - 2 approaches 0 from the positive side
• x - 2 is small and positive
• 1/(positive small number) = large positive
lim(x→2⁺) 1/(x - 2) = +∞

Step 4: Create table from right:
x:      2.1    2.01   2.001
x-2:    0.1    0.01   0.001
1/(x-2): 10    100    1000 → +∞

Answer: lim(x→2⁻) f(x) = -∞, lim(x→2⁺) f(x) = +∞`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: oneSidedLimits.id,
        front: 'What is a left-hand limit?',
        back: 'lim(x→a⁻) f(x): the value f(x) approaches as x approaches a from the left (x < a).',
        hint: 'Approach from left',
        isPremium: false
      },
      {
        topicId: oneSidedLimits.id,
        front: 'What is a right-hand limit?',
        back: 'lim(x→a⁺) f(x): the value f(x) approaches as x approaches a from the right (x > a).',
        hint: 'Approach from right',
        isPremium: false
      },
      {
        topicId: oneSidedLimits.id,
        front: 'When does a two-sided limit exist?',
        back: 'When lim(x→a⁻) f(x) = lim(x→a⁺) f(x). Both one-sided limits must exist and be equal.',
        hint: 'Left = right',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: one-sided-limits-in-detail (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Direct Substitution Method (has 4, needs 1 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: directSubstitution.id,
        question: 'Evaluate lim(x→2) (x³ - 2x² + 5x - 1)',
        solution: `Step 1: Check if function is continuous at x = 2:
This is a polynomial, which is continuous everywhere

Step 2: Apply direct substitution:
Simply substitute x = 2 into the function

Step 3: Calculate:
(2)³ - 2(2)² + 5(2) - 1
= 8 - 8 + 10 - 1
= 9

Step 4: Conclusion:
lim(x→2) (x³ - 2x² + 5x - 1) = 9

Answer: 9`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: directSubstitution.id,
        front: 'When can you use direct substitution to find a limit?',
        back: 'When the function is continuous at the point. Just plug in the value of x.',
        hint: 'If continuous, just plug in',
        isPremium: false
      },
      {
        topicId: directSubstitution.id,
        front: 'What types of functions are always continuous?',
        back: 'Polynomials, sin(x), cos(x), eˣ are continuous everywhere. Rational functions are continuous except where denominator = 0.',
        hint: 'Polynomials, trig, exponential',
        isPremium: false
      },
      {
        topicId: directSubstitution.id,
        front: 'What happens if direct substitution gives 0/0?',
        back: 'This is indeterminate. You need to use another method like factoring, rationalizing, or L\'Hôpital\'s Rule.',
        hint: '0/0 = indeterminate, need other method',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: direct-substitution-method (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Factoring Method for Limits (has 2, needs 3 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: factoringMethod.id,
        question: 'Evaluate lim(x→3) (x² - 9)/(x - 3)',
        solution: `Step 1: Try direct substitution:
(3² - 9)/(3 - 3) = 0/0 (indeterminate)

Step 2: Factor the numerator:
x² - 9 = (x - 3)(x + 3)

Step 3: Simplify:
(x² - 9)/(x - 3) = [(x - 3)(x + 3)]/(x - 3)
                  = x + 3 (for x ≠ 3)

Step 4: Evaluate the limit:
lim(x→3) (x + 3) = 3 + 3 = 6

Answer: 6`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: factoringMethod.id,
        question: 'Find lim(x→2) (x² - 5x + 6)/(x² - 4)',
        solution: `Step 1: Check direct substitution:
(4 - 10 + 6)/(4 - 4) = 0/0 (indeterminate)

Step 2: Factor numerator:
x² - 5x + 6 = (x - 2)(x - 3)

Step 3: Factor denominator:
x² - 4 = (x - 2)(x + 2)

Step 4: Simplify:
[(x - 2)(x - 3)]/[(x - 2)(x + 2)] = (x - 3)/(x + 2) for x ≠ 2

Step 5: Evaluate:
lim(x→2) (x - 3)/(x + 2) = (2 - 3)/(2 + 2) = -1/4

Answer: -1/4`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: factoringMethod.id,
        question: 'Evaluate lim(h→0) [(2 + h)² - 4]/h',
        solution: `Step 1: Expand (2 + h)²:
(2 + h)² = 4 + 4h + h²

Step 2: Substitute into expression:
[(4 + 4h + h²) - 4]/h = [4h + h²]/h

Step 3: Factor numerator:
[4h + h²]/h = [h(4 + h)]/h

Step 4: Cancel common factor:
h(4 + h)/h = 4 + h (for h ≠ 0)

Step 5: Evaluate limit:
lim(h→0) (4 + h) = 4 + 0 = 4

Step 6: Note:
This is the form of a derivative!
It's the derivative of x² at x = 2

Answer: 4`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: factoringMethod.id,
        front: 'When do you use the factoring method for limits?',
        back: 'When direct substitution gives 0/0. Factor numerator and denominator, cancel common factors, then substitute.',
        hint: 'Use when 0/0, factor and cancel',
        isPremium: false
      },
      {
        topicId: factoringMethod.id,
        front: 'Why can you cancel common factors in limit problems?',
        back: 'Because we only care about values NEAR the point, not AT it. The canceled factor is never actually zero in the limit process.',
        hint: 'We never actually reach the point',
        isPremium: false
      },
      {
        topicId: factoringMethod.id,
        front: 'What should you do after canceling in a limit problem?',
        back: 'Substitute the value of x to evaluate the simplified expression.',
        hint: 'Simplify, then substitute',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: factoring-method-limits (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Rationalizing to Evaluate Limits (has 2, needs 3 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalizingTechnique.id,
        question: 'Evaluate lim(x→0) (√(x + 1) - 1)/x',
        solution: `Step 1: Check direct substitution:
(√1 - 1)/0 = 0/0 (indeterminate)

Step 2: Multiply by conjugate:
Conjugate of (√(x + 1) - 1) is (√(x + 1) + 1)

Step 3: Multiply numerator and denominator:
[√(x + 1) - 1]/x · [√(x + 1) + 1]/[√(x + 1) + 1]

Step 4: Use difference of squares:
Numerator: (√(x + 1))² - 1² = (x + 1) - 1 = x
Denominator: x(√(x + 1) + 1)

Step 5: Simplify:
x/[x(√(x + 1) + 1)] = 1/(√(x + 1) + 1) for x ≠ 0

Step 6: Evaluate:
lim(x→0) 1/(√(x + 1) + 1) = 1/(√1 + 1) = 1/2

Answer: 1/2`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: rationalizingTechnique.id,
        question: 'Find lim(h→0) (√(4 + h) - 2)/h',
        solution: `Step 1: Direct substitution gives 0/0

Step 2: Multiply by conjugate:
[√(4 + h) - 2]/h · [√(4 + h) + 2]/[√(4 + h) + 2]

Step 3: Apply difference of squares to numerator:
(√(4 + h))² - 2² = (4 + h) - 4 = h

Step 4: Rewrite:
h/[h(√(4 + h) + 2)]

Step 5: Cancel h:
1/(√(4 + h) + 2) for h ≠ 0

Step 6: Evaluate:
lim(h→0) 1/(√(4 + h) + 2) = 1/(2 + 2) = 1/4

Answer: 1/4`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: rationalizingTechnique.id,
        question: 'Evaluate lim(x→9) (x - 9)/(√x - 3)',
        solution: `Step 1: Direct substitution: 0/0

Step 2: Rationalize by multiplying by conjugate:
(x - 9)/(√x - 3) · (√x + 3)/(√x + 3)

Step 3: Expand numerator:
(x - 9)(√x + 3)

Step 4: Expand denominator using difference of squares:
(√x)² - 3² = x - 9

Step 5: Simplify:
[(x - 9)(√x + 3)]/(x - 9) = √x + 3 for x ≠ 9

Step 6: Evaluate:
lim(x→9) (√x + 3) = √9 + 3 = 3 + 3 = 6

Answer: 6`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rationalizingTechnique.id,
        front: 'When do you use the rationalizing technique?',
        back: 'When the limit involves square roots and gives 0/0. Multiply by the conjugate to eliminate the radical.',
        hint: 'Square roots + 0/0 = rationalize',
        isPremium: false
      },
      {
        topicId: rationalizingTechnique.id,
        front: 'What is the conjugate of (√a - b)?',
        back: '(√a + b). When multiplied together: (√a - b)(√a + b) = a - b²',
        hint: 'Change the sign',
        isPremium: false
      },
      {
        topicId: rationalizingTechnique.id,
        front: 'Why does multiplying by the conjugate help?',
        back: 'It uses the difference of squares to eliminate the square root, often revealing a common factor to cancel.',
        hint: 'Difference of squares eliminates radical',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: rationalizing-technique-limits (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Limits at Infinity (has 4, needs 1 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: limitsAtInfinity.id,
        question: 'Find lim(x→∞) (3x² - 5x + 2)/(x² + 4x - 1)',
        solution: `Step 1: Identify highest power in denominator:
Highest power is x²

Step 2: Divide every term by x²:
[(3x²/x²) - (5x/x²) + (2/x²)]/[(x²/x²) + (4x/x²) - (1/x²)]
= [3 - 5/x + 2/x²]/[1 + 4/x - 1/x²]

Step 3: Evaluate as x→∞:
As x→∞: 1/x→0, 1/x²→0

Step 4: Substitute limits:
[3 - 0 + 0]/[1 + 0 - 0] = 3/1 = 3

Step 5: Shortcut rule:
When degrees are equal, limit = ratio of leading coefficients
3x²/x² = 3

Answer: 3`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: limitsAtInfinity.id,
        front: 'How do you find lim(x→∞) of a rational function?',
        back: 'Divide numerator and denominator by the highest power of x in the denominator, then evaluate.',
        hint: 'Divide by highest power',
        isPremium: false
      },
      {
        topicId: limitsAtInfinity.id,
        front: 'What is the shortcut for lim(x→∞) p(x)/q(x) when degrees are equal?',
        back: 'The limit equals the ratio of the leading coefficients.',
        hint: 'Leading coefficient ratio',
        isPremium: false
      },
      {
        topicId: limitsAtInfinity.id,
        front: 'What happens to 1/x as x→∞?',
        back: '1/x → 0. Any term with x in the denominator approaches 0 as x→∞.',
        hint: '1/x → 0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: limits-at-infinity (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Infinite Limits and Vertical Asymptotes (has 2, needs 3 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: infiniteLimits.id,
        question: 'Find lim(x→3⁺) 1/(x - 3)²',
        solution: `Step 1: Analyze what happens as x→3⁺:
x approaches 3 from the right (x > 3)

Step 2: Examine denominator:
x - 3 approaches 0 from the positive side
(x - 3)² is always positive and approaches 0

Step 3: Analyze the fraction:
1/(small positive number) = large positive number
As denominator→0⁺, fraction→+∞

Step 4: Test values:
x = 3.1: 1/(0.1)² = 1/0.01 = 100
x = 3.01: 1/(0.01)² = 10,000
Pattern: approaching +∞

Step 5: Conclusion:
lim(x→3⁺) 1/(x - 3)² = +∞

Answer: +∞`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: infiniteLimits.id,
        question: 'Determine lim(x→-2⁻) (x + 1)/(x + 2)',
        solution: `Step 1: Analyze as x→-2⁻:
Approaching -2 from the left (x < -2)

Step 2: Evaluate numerator:
x + 1 → -2 + 1 = -1 (negative)

Step 3: Evaluate denominator:
x + 2 approaches 0 from the left (negative side)

Step 4: Determine sign:
(negative)/(small negative) = large positive
lim(x→-2⁻) (x + 1)/(x + 2) = +∞

Step 5: Verify with values:
x = -2.1: (-1.1)/(-0.1) = 11 (positive)
x = -2.01: (-1.01)/(-0.01) = 101
Approaching +∞ ✓

Answer: +∞`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: infiniteLimits.id,
        question: 'Find the vertical asymptote(s) of f(x) = (x - 1)/(x² - 4) and determine the behavior near each.',
        solution: `Step 1: Find vertical asymptotes:
Set denominator = 0
x² - 4 = 0
x = ±2

Step 2: Check if numerator ≠ 0 at these points:
At x = 2: numerator = 2 - 1 = 1 ≠ 0 ✓
At x = -2: numerator = -2 - 1 = -3 ≠ 0 ✓
Both are vertical asymptotes

Step 3: Analyze behavior near x = 2:
lim(x→2⁻): (positive)/(small negative) = -∞
lim(x→2⁺): (positive)/(small positive) = +∞

Step 4: Analyze behavior near x = -2:
lim(x→-2⁻): (negative)/(small positive) = -∞
lim(x→-2⁺): (negative)/(small negative) = +∞

Answer: Vertical asymptotes at x = ±2
x = 2: -∞ from left, +∞ from right
x = -2: -∞ from left, +∞ from right`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: infiniteLimits.id,
        front: 'What is an infinite limit?',
        back: 'When f(x) approaches ±∞ as x approaches a. Often indicates a vertical asymptote at x = a.',
        hint: 'Function approaches ±∞',
        isPremium: false
      },
      {
        topicId: infiniteLimits.id,
        front: 'How do you find vertical asymptotes?',
        back: 'Set denominator = 0 and solve. Check that numerator ≠ 0 at those points.',
        hint: 'Denominator = 0, numerator ≠ 0',
        isPremium: false
      },
      {
        topicId: infiniteLimits.id,
        front: 'How do you determine if an infinite limit is +∞ or -∞?',
        back: 'Check the signs of the numerator and denominator as x approaches the asymptote from each side.',
        hint: 'Check signs from each side',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: infinite-limits-vertical-asymptotes (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 2! Added problems and flashcards to 6 more Limits topics.');
  
  await prisma.$disconnect();
}

main();
