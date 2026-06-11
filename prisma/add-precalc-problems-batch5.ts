import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems to AP Precalculus - Batch 5: Polynomial and Rational Functions Part 1 (4 topics)...');

  // Find the topics
  const polynomialDivision = await prisma.topic.findFirst({
    where: { slug: 'polynomial-division-remainder-theorem' }
  });

  const partialFractions = await prisma.topic.findFirst({
    where: { slug: 'partial-fraction-decomposition' }
  });

  const complexNumbers = await prisma.topic.findFirst({
    where: { slug: 'complex-numbers' }
  });

  const fundamentalTheorem = await prisma.topic.findFirst({
    where: { slug: 'fundamental-theorem-algebra' }
  });

  if (!polynomialDivision || !partialFractions || !complexNumbers || !fundamentalTheorem) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Polynomial Division and Remainder Theorem (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialDivision.id,
        question: 'Use synthetic division to divide: (2x³ - 5x² + 3x - 7) ÷ (x - 2)',
        solution: `Step 1: Set up synthetic division with divisor x - 2 (use 2):
   2 |  2  -5   3  -7

Step 2: Bring down the first coefficient:
   2 |  2  -5   3  -7
        ↓
        2

Step 3: Multiply and add:
   2 |  2  -5   3  -7
           4  -2   2
        ―――――――――――――
        2  -1   1  -5

Step 4: Write the result:
Quotient: 2x² - x + 1
Remainder: -5

Step 5: Express as quotient + remainder/divisor:
(2x³ - 5x² + 3x - 7) = (x - 2)(2x² - x + 1) - 5

Answer: Quotient: 2x² - x + 1, Remainder: -5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        question: 'Use the Remainder Theorem to find the remainder when f(x) = x⁴ - 3x³ + 2x - 5 is divided by (x + 1).',
        solution: `Step 1: Recall the Remainder Theorem:
When f(x) is divided by (x - c), the remainder is f(c)

Step 2: Identify c from (x + 1):
x + 1 = x - (-1)
So c = -1

Step 3: Evaluate f(-1):
f(-1) = (-1)⁴ - 3(-1)³ + 2(-1) - 5
      = 1 - 3(-1) - 2 - 5
      = 1 + 3 - 2 - 5
      = -3

Step 4: Conclusion:
By the Remainder Theorem, the remainder is -3

Step 5: Verify with synthetic division if desired:
  -1 |  1  -3   0   2  -5
          -1   4  -4   2
       ――――――――――――――――――
       1  -4   4  -2  -3 ✓

Answer: -3`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: polynomial-division-remainder-theorem (now has 5 total)');

  // TOPIC 2: Partial Fraction Decomposition (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: partialFractions.id,
        question: 'Decompose into partial fractions: (5x + 2)/[(x + 1)(x - 2)]',
        solution: `Step 1: Set up the partial fraction form:
(5x + 2)/[(x + 1)(x - 2)] = A/(x + 1) + B/(x - 2)

Step 2: Multiply both sides by (x + 1)(x - 2):
5x + 2 = A(x - 2) + B(x + 1)

Step 3: Method 1 - Substitution (x = 2):
5(2) + 2 = A(0) + B(3)
12 = 3B
B = 4

Step 4: Method 1 - Substitution (x = -1):
5(-1) + 2 = A(-3) + B(0)
-3 = -3A
A = 1

Step 5: Write the decomposition:
(5x + 2)/[(x + 1)(x - 2)] = 1/(x + 1) + 4/(x - 2)

Step 6: Verify by combining:
1/(x + 1) + 4/(x - 2) = [(x - 2) + 4(x + 1)]/[(x + 1)(x - 2)]
                      = [x - 2 + 4x + 4]/[(x + 1)(x - 2)]
                      = (5x + 2)/[(x + 1)(x - 2)] ✓

Answer: 1/(x + 1) + 4/(x - 2)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: partialFractions.id,
        question: 'Decompose: (3x² + 2x + 1)/[x(x - 1)²]',
        solution: `Step 1: Set up partial fractions (note repeated factor):
(3x² + 2x + 1)/[x(x - 1)²] = A/x + B/(x - 1) + C/(x - 1)²

Step 2: Multiply by x(x - 1)²:
3x² + 2x + 1 = A(x - 1)² + Bx(x - 1) + Cx

Step 3: Substitute x = 0:
1 = A(1) + 0 + 0
A = 1

Step 4: Substitute x = 1:
3 + 2 + 1 = 0 + 0 + C(1)
C = 6

Step 5: Substitute another value, say x = 2:
3(4) + 2(2) + 1 = 1(1) + B(2)(1) + 6(2)
17 = 1 + 2B + 12
4 = 2B
B = 2

Step 6: Write the decomposition:
(3x² + 2x + 1)/[x(x - 1)²] = 1/x + 2/(x - 1) + 6/(x - 1)²

Answer: 1/x + 2/(x - 1) + 6/(x - 1)²`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: partial-fraction-decomposition (now has 5 total)');

  // TOPIC 3: Complex Numbers and Operations (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: complexNumbers.id,
        question: 'Multiply: (3 - 2i)(1 + 4i)',
        solution: `Step 1: Use FOIL method:
(3 - 2i)(1 + 4i)

First: 3 × 1 = 3
Outer: 3 × 4i = 12i
Inner: -2i × 1 = -2i
Last: -2i × 4i = -8i²

Step 2: Combine:
3 + 12i - 2i - 8i²

Step 3: Remember i² = -1:
-8i² = -8(-1) = 8

Step 4: Simplify:
3 + 12i - 2i + 8
= (3 + 8) + (12i - 2i)
= 11 + 10i

Answer: 11 + 10i`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: complexNumbers.id,
        question: 'Divide and express in standard form: (2 + 3i)/(4 - i)',
        solution: `Step 1: Multiply by conjugate of denominator:
Conjugate of (4 - i) is (4 + i)

Step 2: Multiply numerator and denominator:
(2 + 3i)/(4 - i) × (4 + i)/(4 + i)

Step 3: Expand numerator:
(2 + 3i)(4 + i) = 8 + 2i + 12i + 3i²
                 = 8 + 14i + 3(-1)
                 = 8 + 14i - 3
                 = 5 + 14i

Step 4: Expand denominator:
(4 - i)(4 + i) = 16 + 4i - 4i - i²
                = 16 - (-1)
                = 17

Step 5: Divide:
(5 + 14i)/17 = 5/17 + (14/17)i

Answer: (5/17) + (14/17)i`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: complex-numbers (now has 5 total)');

  // TOPIC 4: Fundamental Theorem of Algebra and Factoring (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: fundamentalTheorem.id,
        question: 'A polynomial of degree 5 has zeros at x = 2, x = -1, and x = 3 + i. What other zeros must it have?',
        solution: `Step 1: Apply Fundamental Theorem of Algebra:
A polynomial of degree 5 has exactly 5 zeros (counting multiplicities)

Step 2: List known zeros:
• x = 2
• x = -1
• x = 3 + i

Step 3: Apply Complex Conjugate Root Theorem:
If a polynomial has real coefficients and 3 + i is a zero,
then 3 - i must also be a zero

Step 4: Count zeros so far:
2, -1, 3 + i, 3 - i = 4 zeros

Step 5: Find remaining zero:
5 - 4 = 1 more zero needed
This could be any real number or a repeated root

Step 6: Most complete answer:
Must have: 3 - i
May have: one additional real zero or a repeated root

Answer: Must have 3 - i; needs one more zero (real or repeated)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: fundamentalTheorem.id,
        question: 'Factor completely over the complex numbers: f(x) = x⁴ - 16',
        solution: `Step 1: Recognize difference of squares:
x⁴ - 16 = (x²)² - 4²
        = (x² - 4)(x² + 4)

Step 2: Factor x² - 4 (difference of squares):
x² - 4 = (x - 2)(x + 2)

Step 3: Factor x² + 4 (sum of squares):
Over complex numbers: x² + 4 = x² - (-4)
x² = -4
x = ±2i
So: x² + 4 = (x - 2i)(x + 2i)

Step 4: Write complete factorization:
f(x) = (x - 2)(x + 2)(x - 2i)(x + 2i)

Step 5: Verify (optional):
4 zeros: 2, -2, 2i, -2i
Degree 4 polynomial has 4 zeros ✓

Answer: f(x) = (x - 2)(x + 2)(x - 2i)(x + 2i)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: fundamental-theorem-algebra (now has 5 total)');

  console.log('\n✨ Successfully completed batch 5! Added problems to 4 Polynomial/Rational topics.');
  
  await prisma.$disconnect();
}

main();
