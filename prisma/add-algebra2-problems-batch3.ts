import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 3 (4 topics)...');

  // Find the topics
  const syntheticDivision = await prisma.topic.findFirst({
    where: { slug: 'synthetic-division' }
  });

  const simplifyingRationals = await prisma.topic.findFirst({
    where: { slug: 'simplifying-rationals-algebra2' }
  });

  const rationalOperations = await prisma.topic.findFirst({
    where: { slug: 'rational-operations-algebra2' }
  });

  const rationalEquations = await prisma.topic.findFirst({
    where: { slug: 'rational-equations-algebra2' }
  });

  if (!syntheticDivision || !simplifyingRationals || !rationalOperations || !rationalEquations) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Synthetic Division
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: syntheticDivision.id,
        question: 'Use synthetic division to divide (x³ + 4x² - 7x + 2) by (x - 1).',
        solution: `Step 1: Set up synthetic division with a = 1:
    1 |  1   4  -7   2
      |

Step 2: Bring down the first coefficient:
    1 |  1   4  -7   2
      |      
      _______________
         1

Step 3: Multiply and add repeatedly:
1 × 1 = 1, then 4 + 1 = 5
1 × 5 = 5, then -7 + 5 = -2
1 × (-2) = -2, then 2 + (-2) = 0

    1 |  1   4  -7   2
      |      1   5  -2
      _______________
         1   5  -2   0

Step 4: Write the result:
Quotient: x² + 5x - 2
Remainder: 0

Answer: x² + 5x - 2`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        question: 'Use synthetic division to find the remainder when (2x⁴ - 3x² + 5) is divided by (x + 2).',
        solution: `Step 1: Rewrite with all terms:
2x⁴ + 0x³ - 3x² + 0x + 5

Step 2: For (x + 2), use a = -2:
   -2 |  2   0  -3   0   5
      |

Step 3: Perform synthetic division:
   -2 |  2   0  -3   0   5
      |     -4   8 -10  20
      _____________________
         2  -4   5 -10  25

Step 4: The remainder is the last number:
Remainder = 25

Step 5: Verify using Remainder Theorem:
P(-2) = 2(-2)⁴ - 3(-2)² + 5
     = 2(16) - 3(4) + 5
     = 32 - 12 + 5 = 25 ✓

Answer: Remainder = 25`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        question: 'Given that (x - 3) is a factor of P(x) = x³ - 2x² - 9x + k, find the value of k.',
        solution: `Step 1: Use the Factor Theorem:
If (x - 3) is a factor, then P(3) = 0

Step 2: Substitute x = 3:
P(3) = (3)³ - 2(3)² - 9(3) + k = 0
     = 27 - 18 - 27 + k = 0
     = -18 + k = 0
     = k = 18

Step 3: Verify using synthetic division:
    3 |  1  -2  -9  18
      |      3   3 -18
      __________________
         1   1  -6   0 ✓

Remainder is 0, confirming (x - 3) is a factor

Answer: k = 18`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        question: 'Use synthetic division to completely factor P(x) = x³ - 6x² + 11x - 6, given that x = 1 is a zero.',
        solution: `Step 1: Use synthetic division with a = 1:
    1 |  1  -6  11  -6
      |      1  -5   6
      __________________
         1  -5   6   0

Quotient: x² - 5x + 6

Step 2: Factor the quotient:
x² - 5x + 6 = (x - 2)(x - 3)

Step 3: Write complete factorization:
P(x) = (x - 1)(x - 2)(x - 3)

Step 4: Find all zeros:
x = 1, 2, 3

Step 5: Verify by expanding:
(x - 1)(x - 2)(x - 3)
= (x - 1)(x² - 5x + 6)
= x³ - 5x² + 6x - x² + 5x - 6
= x³ - 6x² + 11x - 6 ✓

Answer: P(x) = (x - 1)(x - 2)(x - 3), zeros: 1, 2, 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        question: 'Use synthetic division twice to find all zeros of P(x) = 2x⁴ - x³ - 18x² + 9x, given that x = 3 and x = -3 are zeros.',
        solution: `Step 1: Factor out common x:
P(x) = x(2x³ - x² - 18x + 9)

Step 2: Use synthetic division on 2x³ - x² - 18x + 9 with a = 3:
    3 |  2  -1 -18   9
      |      6  15  -9
      _________________
         2   5  -3   0

Result: 2x² + 5x - 3

Step 3: Use synthetic division on 2x² + 5x - 3 with a = -3:
   -3 |  2   5  -3
      |     -6   3
      _____________
         2  -1   0

Result: 2x - 1

Step 4: Write complete factorization:
P(x) = x(x - 3)(x + 3)(2x - 1)

Step 5: Find all zeros:
x = 0
x = 3
x = -3
x = 1/2

Step 6: Verify the count:
Degree 4 polynomial has 4 zeros ✓

Answer: Zeros are x = 0, 3, -3, 1/2
        Factored form: P(x) = x(x - 3)(x + 3)(2x - 1)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: syntheticDivision.id,
        front: 'What are the steps for synthetic division?',
        back: '1) Write a (from x - a) and coefficients, 2) Bring down first coefficient, 3) Multiply by a, add to next coefficient, 4) Repeat until done.',
        hint: 'Bring down, multiply, add',
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        front: 'What does a remainder of 0 in synthetic division tell you?',
        back: 'The divisor (x - a) is a factor, and a is a zero of the polynomial.',
        hint: 'Remainder 0 = factor',
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        front: 'How do you interpret the bottom row of synthetic division?',
        back: 'All numbers except the last form the coefficients of the quotient (one degree lower). The last number is the remainder.',
        hint: 'Last = remainder, others = quotient',
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        front: 'Can you use synthetic division to divide by x² + 1?',
        back: 'No, synthetic division only works for linear divisors of the form (x - a). Use long division instead.',
        hint: 'Only for linear (x - a)',
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        front: 'What should you do if the polynomial has missing terms before using synthetic division?',
        back: 'Add placeholders with coefficient 0 for all missing terms.',
        hint: 'Add 0 coefficients',
        isPremium: false
      },
      {
        topicId: syntheticDivision.id,
        front: 'How can synthetic division help you find all zeros of a polynomial?',
        back: 'After finding one zero and using synthetic division, factor the quotient to find remaining zeros. Repeat as needed.',
        hint: 'Divide, then factor quotient',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: synthetic-division');

  // TOPIC 2: Simplifying Rational Expressions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: simplifyingRationals.id,
        question: 'Simplify: (6x²)/(9x)',
        solution: `Step 1: Factor out common factors:
Numerator: 6x² = 2 · 3 · x · x
Denominator: 9x = 3 · 3 · x

Step 2: Identify GCF:
GCF = 3x

Step 3: Cancel common factors:
(6x²)/(9x) = (2 · 3 · x · x)/(3 · 3 · x)
           = (2x)/(3)

Step 4: Restriction:
x ≠ 0 (denominator cannot equal zero)

Answer: (2x)/3, where x ≠ 0`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        question: 'Simplify: (x² - 9)/(x² + 6x + 9)',
        solution: `Step 1: Factor the numerator:
x² - 9 = (x + 3)(x - 3)  [difference of squares]

Step 2: Factor the denominator:
x² + 6x + 9 = (x + 3)²  [perfect square trinomial]

Step 3: Write with factors:
[(x + 3)(x - 3)]/[(x + 3)(x + 3)]

Step 4: Cancel common factor (x + 3):
(x - 3)/(x + 3)

Step 5: Find restrictions:
Denominator = 0 when x + 3 = 0, so x ≠ -3

Answer: (x - 3)/(x + 3), where x ≠ -3`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        question: 'Simplify: (2x² + 5x - 3)/(2x² - 7x + 3)',
        solution: `Step 1: Factor the numerator using AC method:
2x² + 5x - 3
Find factors of 2(-3) = -6 that add to 5: 6 and -1
2x² + 6x - x - 3 = 2x(x + 3) - 1(x + 3) = (2x - 1)(x + 3)

Step 2: Factor the denominator:
2x² - 7x + 3
Find factors of 2(3) = 6 that add to -7: -6 and -1
2x² - 6x - x + 3 = 2x(x - 3) - 1(x - 3) = (2x - 1)(x - 3)

Step 3: Write with factors:
[(2x - 1)(x + 3)]/[(2x - 1)(x - 3)]

Step 4: Cancel common factor (2x - 1):
(x + 3)/(x - 3)

Step 5: Find restrictions:
Original denominator = 0 when:
2x - 1 = 0 → x = 1/2
x - 3 = 0 → x = 3
So x ≠ 1/2, 3

Answer: (x + 3)/(x - 3), where x ≠ 1/2, 3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        question: 'Simplify: (x³ - 8)/(x² - 4)',
        solution: `Step 1: Factor numerator (difference of cubes):
x³ - 8 = x³ - 2³ = (x - 2)(x² + 2x + 4)

Step 2: Factor denominator (difference of squares):
x² - 4 = (x + 2)(x - 2)

Step 3: Write with factors:
[(x - 2)(x² + 2x + 4)]/[(x + 2)(x - 2)]

Step 4: Cancel common factor (x - 2):
(x² + 2x + 4)/(x + 2)

Step 5: Check if further simplification is possible:
x² + 2x + 4 cannot be factored (discriminant < 0)

Step 6: Find restrictions:
x - 2 = 0 → x ≠ 2
x + 2 = 0 → x ≠ -2

Answer: (x² + 2x + 4)/(x + 2), where x ≠ -2, 2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        question: 'Simplify: (x⁴ - 16)/(x³ + 2x² - 8x)',
        solution: `Step 1: Factor numerator completely:
x⁴ - 16 = (x²)² - 4²  [difference of squares]
       = (x² + 4)(x² - 4)
       = (x² + 4)(x + 2)(x - 2)

Step 2: Factor denominator:
x³ + 2x² - 8x = x(x² + 2x - 8)
              = x(x + 4)(x - 2)

Step 3: Write with all factors:
[(x² + 4)(x + 2)(x - 2)]/[x(x + 4)(x - 2)]

Step 4: Cancel common factor (x - 2):
[(x² + 4)(x + 2)]/[x(x + 4)]

Step 5: This is fully simplified (no more common factors)

Step 6: Find restrictions from original denominator:
x = 0, x + 4 = 0 → x = -4, x - 2 = 0 → x = 2
So x ≠ 0, -4, 2

Answer: [(x² + 4)(x + 2)]/[x(x + 4)], where x ≠ 0, -4, 2`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: simplifyingRationals.id,
        front: 'What is the first step in simplifying a rational expression?',
        back: 'Factor both the numerator and denominator completely.',
        hint: 'Factor everything first',
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        front: 'What can you cancel in a rational expression?',
        back: 'Only common FACTORS (not terms). You can cancel (x+2)/(x+2), but NOT x+2 from (x+2+5).',
        hint: 'Cancel factors, not terms',
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        front: 'What are the restrictions on a rational expression?',
        back: 'Values that make the denominator equal to zero. These must be excluded from the domain.',
        hint: 'Denominator ≠ 0',
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        front: 'When finding restrictions, should you use the original or simplified denominator?',
        back: 'Use the ORIGINAL denominator before canceling. Canceled factors still create restrictions.',
        hint: 'Original denominator',
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        front: 'Is (x - 3)/(3 - x) equal to 1 or -1?',
        back: 'It equals -1, because 3 - x = -(x - 3), so the expression becomes (x - 3)/[-(x - 3)] = -1.',
        hint: 'Opposite factors = -1',
        isPremium: false
      },
      {
        topicId: simplifyingRationals.id,
        front: 'What does it mean for a rational expression to be in simplified form?',
        back: 'The numerator and denominator have no common factors other than 1.',
        hint: 'No common factors',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: simplifying-rationals-algebra2');

  // TOPIC 3: Operations with Rational Expressions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalOperations.id,
        question: 'Multiply: (3x)/(4) · (8)/(9x²)',
        solution: `Step 1: Multiply numerators and denominators:
(3x · 8)/(4 · 9x²) = (24x)/(36x²)

Step 2: Simplify by canceling common factors:
(24x)/(36x²) = 24/(36x) = 2/(3x)

Step 3: Alternative - cancel before multiplying:
(3x)/(4) · (8)/(9x²) = (3x · 8)/(4 · 9x²)
Cancel 3 and 9: factor of 3
Cancel x and x²: one x
Cancel 8 and 4: factor of 4
= (1 · 2)/(1 · 3x) = 2/(3x)

Step 4: Find restrictions:
x ≠ 0

Answer: 2/(3x), where x ≠ 0`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        question: 'Divide: (x² - 4)/(x + 3) ÷ (x + 2)/(x² + 6x + 9)',
        solution: `Step 1: Change division to multiplication:
(x² - 4)/(x + 3) · (x² + 6x + 9)/(x + 2)

Step 2: Factor all expressions:
x² - 4 = (x + 2)(x - 2)
x² + 6x + 9 = (x + 3)²

Step 3: Rewrite with factors:
[(x + 2)(x - 2)]/(x + 3) · [(x + 3)²]/(x + 2)

Step 4: Cancel common factors:
Cancel (x + 2) and one (x + 3)
= (x - 2) · (x + 3)
= (x - 2)(x + 3)

Step 5: Expand (optional):
= x² + 3x - 2x - 6
= x² + x - 6

Step 6: Find restrictions:
x ≠ -3, -2 (from original denominators)

Answer: x² + x - 6 or (x - 2)(x + 3), where x ≠ -3, -2`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        question: 'Add: (2x)/(x + 1) + (3)/(x + 1)',
        solution: `Step 1: Identify that denominators are the same:
Both have denominator (x + 1)

Step 2: Add numerators:
(2x + 3)/(x + 1)

Step 3: Check if numerator can be factored:
2x + 3 cannot be factored

Step 4: Find restrictions:
x ≠ -1

Answer: (2x + 3)/(x + 1), where x ≠ -1`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        question: 'Subtract: (5)/(2x) - (3)/(4x²)',
        solution: `Step 1: Find the LCD:
Denominators: 2x and 4x²
LCD = 4x²

Step 2: Convert to equivalent fractions:
(5)/(2x) = (5 · 2x)/(2x · 2x) = (10x)/(4x²)
(3)/(4x²) already has the LCD

Step 3: Subtract numerators:
(10x)/(4x²) - (3)/(4x²) = (10x - 3)/(4x²)

Step 4: Check if can be simplified:
10x - 3 cannot be factored with 4x²

Step 5: Find restrictions:
x ≠ 0

Answer: (10x - 3)/(4x²), where x ≠ 0`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        question: 'Simplify: (x)/(x² - 1) + (2)/(x² + 2x + 1) - (1)/(x + 1)',
        solution: `Step 1: Factor all denominators:
x² - 1 = (x + 1)(x - 1)
x² + 2x + 1 = (x + 1)²
x + 1 = (x + 1)

Step 2: Find LCD:
LCD = (x + 1)²(x - 1)

Step 3: Convert each fraction to LCD:
x/[(x + 1)(x - 1)] = [x(x + 1)]/[(x + 1)²(x - 1)]

2/(x + 1)² = [2(x - 1)]/[(x + 1)²(x - 1)]

1/(x + 1) = [(x + 1)(x - 1)]/[(x + 1)²(x - 1)]

Step 4: Combine numerators:
[x(x + 1) + 2(x - 1) - (x + 1)(x - 1)]/[(x + 1)²(x - 1)]

Step 5: Expand numerators:
x² + x + 2x - 2 - (x² - 1)
= x² + 3x - 2 - x² + 1
= 3x - 1

Step 6: Write final answer:
(3x - 1)/[(x + 1)²(x - 1)]

Step 7: Find restrictions:
x ≠ -1, 1

Answer: (3x - 1)/[(x + 1)²(x - 1)], where x ≠ -1, 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rationalOperations.id,
        front: 'How do you multiply rational expressions?',
        back: 'Multiply numerators together and denominators together, then simplify. Better: factor first, cancel common factors, then multiply.',
        hint: 'Factor, cancel, multiply',
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        front: 'How do you divide rational expressions?',
        back: 'Multiply by the reciprocal of the divisor. Change ÷ to × and flip the second fraction.',
        hint: 'Multiply by reciprocal',
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        front: 'How do you add or subtract rational expressions with the same denominator?',
        back: 'Add or subtract the numerators and keep the common denominator.',
        hint: 'Combine numerators',
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        front: 'How do you add or subtract rational expressions with different denominators?',
        back: 'Find the LCD (Least Common Denominator), convert each fraction to equivalent fractions with the LCD, then add/subtract numerators.',
        hint: 'Find LCD first',
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        front: 'What is the LCD of 1/(x-2) and 1/(x²-4)?',
        back: 'x² - 4 = (x+2)(x-2), so the LCD is (x+2)(x-2) or x² - 4.',
        hint: 'Factor denominators',
        isPremium: false
      },
      {
        topicId: rationalOperations.id,
        front: 'Should you always expand the final answer?',
        back: 'Not necessarily. Factored form is often preferred because it makes restrictions clearer and is easier to work with.',
        hint: 'Factored form is fine',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: rational-operations-algebra2');

  // TOPIC 4: Solving Rational Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalEquations.id,
        question: 'Solve: (x)/(3) = (4)/(x)',
        solution: `Step 1: Cross-multiply:
x · x = 3 · 4
x² = 12

Step 2: Solve for x:
x = ±√12 = ±2√3

Step 3: Check both solutions:
x = 2√3: (2√3)/3 = 4/(2√3) = 4√3/6 = 2√3/3 ✓
x = -2√3: (-2√3)/3 = 4/(-2√3) = -4√3/6 = -2√3/3 ✓

Answer: x = ±2√3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        question: 'Solve: (5)/(x - 2) = (3)/(x + 1)',
        solution: `Step 1: Cross-multiply:
5(x + 1) = 3(x - 2)

Step 2: Expand both sides:
5x + 5 = 3x - 6

Step 3: Solve for x:
5x - 3x = -6 - 5
2x = -11
x = -11/2

Step 4: Check for restrictions:
x ≠ 2, -1 (would make denominators zero)
x = -11/2 doesn't violate restrictions ✓

Step 5: Verify solution:
5/(-11/2 - 2) = 5/(-15/2) = -10/15 = -2/3
3/(-11/2 + 1) = 3/(-9/2) = -6/9 = -2/3 ✓

Answer: x = -11/2`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        question: 'Solve: (2)/(x) + (1)/(x - 3) = (1)/(2)',
        solution: `Step 1: Find the LCD:
LCD = 2x(x - 3)

Step 2: Multiply every term by LCD:
2x(x - 3) · (2/x) + 2x(x - 3) · [1/(x - 3)] = 2x(x - 3) · (1/2)

Step 3: Simplify each term:
4(x - 3) + 2x = x(x - 3)
4x - 12 + 2x = x² - 3x
6x - 12 = x² - 3x

Step 4: Rearrange to standard form:
0 = x² - 3x - 6x + 12
0 = x² - 9x + 12

Step 5: Solve using quadratic formula:
x = [9 ± √(81 - 48)]/2
x = [9 ± √33]/2

Step 6: Check restrictions:
x ≠ 0, 3
Both solutions are valid

Answer: x = (9 + √33)/2 or x = (9 - √33)/2`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        question: 'Solve: (x)/(x - 1) - (2)/(x + 1) = (4)/(x² - 1)',
        solution: `Step 1: Factor x² - 1:
x² - 1 = (x + 1)(x - 1)

Step 2: Find LCD:
LCD = (x + 1)(x - 1)

Step 3: Multiply every term by LCD:
(x + 1)(x - 1) · [x/(x - 1)] - (x + 1)(x - 1) · [2/(x + 1)] = (x + 1)(x - 1) · [4/((x + 1)(x - 1))]

Step 4: Simplify:
x(x + 1) - 2(x - 1) = 4

Step 5: Expand:
x² + x - 2x + 2 = 4
x² - x + 2 = 4

Step 6: Solve:
x² - x - 2 = 0
(x - 2)(x + 1) = 0
x = 2 or x = -1

Step 7: Check restrictions:
x ≠ 1, -1
x = -1 is EXTRANEOUS (makes denominator 0)
x = 2 is valid ✓

Answer: x = 2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        question: 'Solve the work problem: Working alone, John can paint a room in 6 hours and Mary can paint the same room in 4 hours. How long will it take them to paint the room working together?',
        solution: `Step 1: Set up rates:
John's rate: 1/6 of room per hour
Mary's rate: 1/4 of room per hour
Combined rate: 1/6 + 1/4

Step 2: Find LCD and add rates:
LCD = 12
1/6 = 2/12
1/4 = 3/12
Combined: 2/12 + 3/12 = 5/12 of room per hour

Step 3: Set up equation:
If t = time to paint together
(5/12)t = 1 room

Step 4: Solve for t:
t = 1 ÷ (5/12)
t = 1 · (12/5)
t = 12/5
t = 2.4 hours

Step 5: Convert to hours and minutes:
2.4 hours = 2 hours + 0.4(60 minutes)
= 2 hours 24 minutes

Step 6: Verify:
In 2.4 hours:
John paints: 2.4/6 = 0.4 or 2/5
Mary paints: 2.4/4 = 0.6 or 3/5
Total: 2/5 + 3/5 = 5/5 = 1 room ✓

Answer: 12/5 hours or 2 hours 24 minutes`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rationalEquations.id,
        front: 'What is the first step to solve a rational equation?',
        back: 'Find the LCD of all denominators and multiply every term by the LCD to clear the fractions.',
        hint: 'Clear fractions with LCD',
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        front: 'What are extraneous solutions?',
        back: 'Solutions that emerge during solving but don\'t satisfy the original equation, usually because they make a denominator zero.',
        hint: 'Make denominator zero',
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        front: 'Why must you always check your solutions in rational equations?',
        back: 'To identify extraneous solutions that would make any denominator in the original equation equal to zero.',
        hint: 'Check for extraneous',
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        front: 'What is cross-multiplication?',
        back: 'For a/b = c/d, multiply both sides to get ad = bc. Only works when you have one fraction on each side.',
        hint: 'a/b = c/d → ad = bc',
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        front: 'In a work problem, what does the rate represent?',
        back: 'The fraction of the job completed per unit of time. If someone finishes in t hours, their rate is 1/t.',
        hint: 'Rate = 1/time',
        isPremium: false
      },
      {
        topicId: rationalEquations.id,
        front: 'How do you combine work rates?',
        back: 'Add the individual rates. If A works at rate 1/a and B at rate 1/b, together they work at rate 1/a + 1/b.',
        hint: 'Add rates together',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: rational-equations-algebra2');

  console.log('\n✨ Successfully added problems and flashcards for 4 topics!');
  
  await prisma.$disconnect();
}

main();
