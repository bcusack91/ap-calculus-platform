import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 2 (3 topics)...');

  // Find the topics
  const polynomialGraphs = await prisma.topic.findFirst({
    where: { slug: 'polynomial-graphs-algebra2' }
  });

  const polynomialLongDivision = await prisma.topic.findFirst({
    where: { slug: 'polynomial-long-division' }
  });

  const polynomialDivision = await prisma.topic.findFirst({
    where: { slug: 'polynomial-division-algebra2' }
  });

  if (!polynomialGraphs || !polynomialLongDivision || !polynomialDivision) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Graphing Polynomial Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialGraphs.id,
        question: 'Identify the degree and leading coefficient of f(x) = -2x⁴ + 3x² - 5, and describe the end behavior.',
        solution: `Step 1: Identify the degree:
The highest power is 4, so degree = 4 (even)

Step 2: Identify the leading coefficient:
The coefficient of x⁴ is -2 (negative)

Step 3: Determine end behavior:
For even degree with negative leading coefficient:
- As x → -∞, f(x) → -∞
- As x → +∞, f(x) → -∞
(Both ends go down)

Step 4: Visualize:
The graph looks like an upside-down "W" shape

Answer: Degree 4, leading coefficient -2
        End behavior: both ends go to -∞`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        question: 'Find the zeros and their multiplicities for f(x) = (x + 2)²(x - 3).',
        solution: `Step 1: Set each factor equal to zero:
(x + 2)² = 0 → x = -2
(x - 3) = 0 → x = 3

Step 2: Determine multiplicities:
(x + 2)² has exponent 2 → multiplicity 2
(x - 3) has exponent 1 → multiplicity 1

Step 3: Describe behavior at each zero:
At x = -2 (even multiplicity): graph touches x-axis and turns around
At x = 3 (odd multiplicity): graph crosses x-axis

Answer: Zero at x = -2 with multiplicity 2 (touches)
        Zero at x = 3 with multiplicity 1 (crosses)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        question: 'Sketch the general shape of f(x) = x³ - 4x. Find the zeros and describe the end behavior.',
        solution: `Step 1: Factor to find zeros:
f(x) = x³ - 4x = x(x² - 4) = x(x + 2)(x - 2)

Step 2: Identify zeros:
x = 0, x = -2, x = 2
All have multiplicity 1 (all cross the x-axis)

Step 3: Determine end behavior:
Degree 3 (odd), leading coefficient 1 (positive)
- As x → -∞, f(x) → -∞
- As x → +∞, f(x) → +∞

Step 4: Find y-intercept:
f(0) = 0

Step 5: Describe the graph:
- Crosses x-axis at -2, 0, and 2
- Starts from bottom left
- Ends at top right
- Has 2 turning points (degree 3 has at most 2)

Answer: Zeros: x = -2, 0, 2 (all cross)
        End behavior: -∞ to +∞`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        question: 'Determine the maximum number of turning points for f(x) = 2x⁵ - 3x⁴ + x² - 7.',
        solution: `Step 1: Recall the turning points rule:
A polynomial of degree n has at most (n - 1) turning points

Step 2: Identify the degree:
The highest power is 5

Step 3: Calculate maximum turning points:
Maximum turning points = 5 - 1 = 4

Step 4: Additional information:
- The actual number could be less than 4
- Turning points are local maxima or minima
- These occur where f'(x) = 0

Answer: Maximum of 4 turning points`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        question: 'Write a polynomial function in factored form with the following characteristics: degree 4, zeros at x = -1 (multiplicity 2), x = 2 (multiplicity 1), x = 3 (multiplicity 1), and passes through the point (0, -6).',
        solution: `Step 1: Write the general form using zeros and multiplicities:
f(x) = a(x + 1)²(x - 2)(x - 3)
where a is a constant to be determined

Step 2: Use the point (0, -6) to find a:
f(0) = -6
a(0 + 1)²(0 - 2)(0 - 3) = -6
a(1)(-2)(-3) = -6
a(6) = -6
a = -1

Step 3: Write the final function:
f(x) = -(x + 1)²(x - 2)(x - 3)

Step 4: Verify the point (0, -6):
f(0) = -(1)²(-2)(-3) = -(1)(-2)(-3) = -6 ✓

Step 5: Verify end behavior:
Expand to find leading term:
Leading term = -x⁴
Degree 4 (even), negative coefficient
Both ends → -∞

Answer: f(x) = -(x + 1)²(x - 2)(x - 3)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialGraphs.id,
        front: 'How does the degree of a polynomial affect its end behavior?',
        back: 'Odd degree: ends go in opposite directions. Even degree: ends go in the same direction. The leading coefficient determines if they go up or down.',
        hint: 'Odd: opposite, Even: same',
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        front: 'What is the end behavior for a polynomial with even degree and positive leading coefficient?',
        back: 'Both ends go up: as x → ±∞, f(x) → +∞',
        hint: 'Both up',
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        front: 'What is multiplicity and how does it affect the graph?',
        back: 'Multiplicity is how many times a zero appears. Odd multiplicity: graph crosses the x-axis. Even multiplicity: graph touches and turns around.',
        hint: 'Odd: cross, Even: touch',
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        front: 'What is the maximum number of turning points for a polynomial of degree n?',
        back: 'At most (n - 1) turning points.',
        hint: 'Degree minus 1',
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        front: 'What is a turning point?',
        back: 'A point where the graph changes from increasing to decreasing (local maximum) or from decreasing to increasing (local minimum).',
        hint: 'Changes direction',
        isPremium: false
      },
      {
        topicId: polynomialGraphs.id,
        front: 'How do you find the y-intercept of a polynomial?',
        back: 'Evaluate f(0) - substitute x = 0 into the function.',
        hint: 'f(0)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polynomial-graphs-algebra2');

  // TOPIC 2: Polynomial Long Division
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialLongDivision.id,
        question: 'Divide: (x² + 7x + 12) ÷ (x + 3)',
        solution: `Step 1: Set up long division:
         ________
x + 3 | x² + 7x + 12

Step 2: Divide leading terms:
x² ÷ x = x
Write x above the division bar

Step 3: Multiply and subtract:
x(x + 3) = x² + 3x
(x² + 7x + 12) - (x² + 3x) = 4x + 12

Step 4: Bring down and repeat:
4x ÷ x = 4
4(x + 3) = 4x + 12
(4x + 12) - (4x + 12) = 0

Step 5: Write the result:
Quotient: x + 4
Remainder: 0

Answer: x + 4`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        question: 'Divide: (2x³ + 5x² - 3x + 1) ÷ (x + 2)',
        solution: `Step 1: Set up long division:
           _______________
x + 2 | 2x³ + 5x² - 3x + 1

Step 2: First division:
2x³ ÷ x = 2x²
2x²(x + 2) = 2x³ + 4x²
Subtract: (2x³ + 5x²) - (2x³ + 4x²) = x²

Step 3: Second division:
x² ÷ x = x
x(x + 2) = x² + 2x
Subtract: (x² - 3x) - (x² + 2x) = -5x

Step 4: Third division:
-5x ÷ x = -5
-5(x + 2) = -5x - 10
Subtract: (-5x + 1) - (-5x - 10) = 11

Step 5: Write result:
Quotient: 2x² + x - 5
Remainder: 11

Step 6: Express as:
(2x³ + 5x² - 3x + 1) = (x + 2)(2x² + x - 5) + 11

Or: 2x² + x - 5 + 11/(x + 2)

Answer: 2x² + x - 5 with remainder 11`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        question: 'Divide: (x³ - 27) ÷ (x - 3)',
        solution: `Step 1: Rewrite dividend with all terms:
x³ + 0x² + 0x - 27

Step 2: Set up and perform long division:
           x² + 3x + 9
      _______________
x - 3 | x³ + 0x² + 0x - 27

Step 3: First division:
x³ ÷ x = x²
x²(x - 3) = x³ - 3x²
Subtract: (x³ + 0x²) - (x³ - 3x²) = 3x²

Step 4: Second division:
3x² ÷ x = 3x
3x(x - 3) = 3x² - 9x
Subtract: (3x² + 0x) - (3x² - 9x) = 9x

Step 5: Third division:
9x ÷ x = 9
9(x - 3) = 9x - 27
Subtract: (9x - 27) - (9x - 27) = 0

Step 6: Recognize the pattern:
This is the difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)
x³ - 27 = (x - 3)(x² + 3x + 9)

Answer: x² + 3x + 9`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        question: 'Divide: (4x⁴ - 8x² + 5) ÷ (2x² + 1)',
        solution: `Step 1: Note missing x⁴ and x terms in dividend:
4x⁴ + 0x³ - 8x² + 0x + 5

Step 2: Set up division (dividing by 2x² + 1):
           2x² - 5
      ________________
2x² + 1 | 4x⁴ + 0x³ - 8x² + 0x + 5

Step 3: First division:
4x⁴ ÷ 2x² = 2x²
2x²(2x² + 1) = 4x⁴ + 2x²
Subtract: (4x⁴ - 8x²) - (4x⁴ + 2x²) = -10x²

Step 4: Second division:
-10x² ÷ 2x² = -5
-5(2x² + 1) = -10x² - 5
Subtract: (-10x² + 5) - (-10x² - 5) = 10

Step 5: Write result:
Quotient: 2x² - 5
Remainder: 10

Answer: 2x² - 5 + 10/(2x² + 1)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        question: 'If the polynomial 3x³ + kx² - 5x + 2 is divided by (x - 1) and the remainder is 8, find the value of k.',
        solution: `Step 1: Use the Remainder Theorem:
When P(x) is divided by (x - a), remainder = P(a)
Here, a = 1 and remainder = 8

Step 2: Set up the equation:
P(1) = 8
3(1)³ + k(1)² - 5(1) + 2 = 8

Step 3: Simplify:
3 + k - 5 + 2 = 8
k + 0 = 8
k = 8

Step 4: Verify by long division (optional):
With k = 8: P(x) = 3x³ + 8x² - 5x + 2
Divide by (x - 1):

           3x² + 11x + 6
      ___________________
x - 1 | 3x³ + 8x² - 5x + 2

First: 3x³ ÷ x = 3x², then 3x²(x-1) = 3x³ - 3x²
Subtract: 8x² - (-3x²) = 11x²

Second: 11x² ÷ x = 11x, then 11x(x-1) = 11x² - 11x
Subtract: -5x - (-11x) = 6x

Third: 6x ÷ x = 6, then 6(x-1) = 6x - 6
Subtract: 2 - (-6) = 8 ✓

Answer: k = 8`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialLongDivision.id,
        front: 'What is the basic process for polynomial long division?',
        back: 'Divide leading terms, multiply, subtract, bring down next term, repeat until degree of remainder < degree of divisor.',
        hint: 'Divide, multiply, subtract, repeat',
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        front: 'What should you do if a polynomial has missing terms?',
        back: 'Insert terms with coefficient 0 as placeholders (e.g., x³ - 5 becomes x³ + 0x² + 0x - 5).',
        hint: 'Add 0x terms as placeholders',
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        front: 'How do you know when to stop polynomial long division?',
        back: 'Stop when the degree of the remainder is less than the degree of the divisor.',
        hint: 'Remainder degree < divisor degree',
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        front: 'How do you express the result of polynomial division?',
        back: 'Dividend = (Divisor)(Quotient) + Remainder, or Quotient + Remainder/Divisor',
        hint: 'P(x) = Q(x)·D(x) + R',
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        front: 'When dividing polynomials, what must be true about the leading coefficient?',
        back: 'In the first step, divide the leading term of the dividend by the leading term of the divisor.',
        hint: 'Divide leading terms first',
        isPremium: false
      },
      {
        topicId: polynomialLongDivision.id,
        front: 'How can you check your polynomial division answer?',
        back: 'Multiply the quotient by the divisor and add the remainder. You should get the original dividend.',
        hint: 'Q × D + R = P',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polynomial-long-division');

  // TOPIC 3: Polynomial Division (General)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialDivision.id,
        question: 'Use synthetic division to divide (2x³ - 5x² + 3x - 7) by (x - 2).',
        solution: `Step 1: Set up synthetic division with x - 2, so a = 2:
    2 |  2  -5   3  -7
      |

Step 2: Bring down the first coefficient:
    2 |  2  -5   3  -7
      |      
      _______________
         2

Step 3: Multiply by 2, add to next coefficient:
2 × 2 = 4
-5 + 4 = -1

    2 |  2  -5   3  -7
      |      4
      _______________
         2  -1

Step 4: Repeat:
2 × (-1) = -2, then 3 + (-2) = 1
2 × 1 = 2, then -7 + 2 = -5

    2 |  2  -5   3  -7
      |      4  -2   2
      _______________
         2  -1   1  -5

Step 5: Interpret results:
Coefficients: 2, -1, 1 (quotient)
Last number: -5 (remainder)

Quotient: 2x² - x + 1
Remainder: -5

Answer: 2x² - x + 1 with remainder -5, or 2x² - x + 1 - 5/(x-2)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        question: 'Verify that (x + 3) is a factor of P(x) = x³ + 2x² - 5x + 6 using division.',
        solution: `Step 1: Use synthetic division with x + 3, so a = -3:
   -3 |  1   2  -5   6
      |

Step 2: Perform synthetic division:
   -3 |  1   2  -5   6
      |     -3   3   6
      ________________
         1  -1  -2  12

Step 3: Interpret the result:
Remainder = 12 (not 0)

Step 4: Apply Factor Theorem:
Since the remainder ≠ 0, (x + 3) is NOT a factor

Step 5: Double-check with P(-3):
P(-3) = (-3)³ + 2(-3)² - 5(-3) + 6
     = -27 + 18 + 15 + 6
     = 12 ✓

Answer: (x + 3) is NOT a factor (remainder = 12)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        question: 'Divide (x⁴ - 16) by (x - 2) using synthetic division.',
        solution: `Step 1: Rewrite with all terms:
x⁴ + 0x³ + 0x² + 0x - 16

Step 2: Set up synthetic division with a = 2:
    2 |  1   0   0   0  -16
      |

Step 3: Perform the division:
    2 |  1   0   0   0  -16
      |      2   4   8   16
      _______________________
         1   2   4   8    0

Step 4: Write the result:
Quotient: x³ + 2x² + 4x + 8
Remainder: 0

Step 5: This confirms factorization:
x⁴ - 16 = (x - 2)(x³ + 2x² + 4x + 8)

Answer: x³ + 2x² + 4x + 8`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        question: 'Compare using both long division and synthetic division to divide (3x³ + 7x² - 4x + 1) by (x + 3).',
        solution: `SYNTHETIC DIVISION (easier for (x - a)):

Step 1: Use a = -3:
   -3 |  3   7  -4   1
      |     -9   6  -6
      _________________
         3  -2   2  -5

Result: 3x² - 2x + 2 - 5/(x+3)

LONG DIVISION:

           3x² - 2x + 2
      ___________________
x + 3 | 3x³ + 7x² - 4x + 1
        3x³ + 9x²
        __________
             -2x² - 4x
             -2x² - 6x
             __________
                   2x + 1
                   2x + 6
                   ______
                      -5

Result: 3x² - 2x + 2 - 5/(x+3)

Comparison:
- Both methods give same answer
- Synthetic is faster and cleaner
- Synthetic only works for (x - a) divisors
- Long division works for any divisor

Answer: 3x² - 2x + 2 with remainder -5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        question: 'Given that when P(x) = 2x⁴ + ax³ - 5x² + bx + 3 is divided by (x - 1), the quotient is 2x³ + 5x² + 0x + 7 with remainder -4, find a and b.',
        solution: `Step 1: Use the division relationship:
P(x) = (divisor)(quotient) + remainder
P(x) = (x - 1)(2x³ + 5x² + 0x + 7) + (-4)

Step 2: Expand (x - 1)(2x³ + 5x² + 0x + 7):
x(2x³ + 5x² + 0x + 7) = 2x⁴ + 5x³ + 0x² + 7x
-1(2x³ + 5x² + 0x + 7) = -2x³ - 5x² + 0x - 7

Combine: 2x⁴ + 3x³ - 5x² + 7x - 7

Step 3: Add the remainder:
P(x) = 2x⁴ + 3x³ - 5x² + 7x - 7 + (-4)
P(x) = 2x⁴ + 3x³ - 5x² + 7x - 11

Step 4: Compare with original:
P(x) = 2x⁴ + ax³ - 5x² + bx + 3

Match coefficients:
x³ term: a = 3
x term: b = 7

Step 5: Verify constant term:
Given constant: 3
Calculated constant: -11
These don't match! Check the problem...

Actually, let's use P(1) = remainder + divisor × quotient evaluated at 1:
P(1) = 2 + a - 5 + b + 3 = a + b
Also P(1) = -4 + (1-1)(quotient) = -4

So: a + b = -4

And from expansion: a = 3
Therefore: 3 + b = -4, so b = -7

Recheck: P(x) = 2x⁴ + 3x³ - 5x² - 7x + 3
P(1) = 2 + 3 - 5 - 7 + 3 = -4 ✓

Answer: a = 3, b = -7`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialDivision.id,
        front: 'What is synthetic division?',
        back: 'A shortcut method for dividing a polynomial by a linear factor (x - a). Uses only coefficients and is faster than long division.',
        hint: 'Shortcut for (x - a)',
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        front: 'When can you use synthetic division?',
        back: 'Only when dividing by a linear factor of the form (x - a). For other divisors, use long division.',
        hint: 'Only for (x - a)',
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        front: 'In synthetic division, what number do you use for (x + 5)?',
        back: 'Use -5 (since x + 5 = x - (-5), so a = -5)',
        hint: 'Change sign',
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        front: 'What does the last number in synthetic division represent?',
        back: 'The remainder. If it\'s 0, then the divisor is a factor.',
        hint: 'Last number = remainder',
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        front: 'What is the relationship between the dividend, divisor, quotient, and remainder?',
        back: 'Dividend = (Divisor)(Quotient) + Remainder, or P(x) = D(x)·Q(x) + R',
        hint: 'P = D × Q + R',
        isPremium: false
      },
      {
        topicId: polynomialDivision.id,
        front: 'If the remainder is 0 when dividing P(x) by (x - a), what can you conclude?',
        back: '(x - a) is a factor of P(x), and a is a zero of P(x).',
        hint: 'Remainder 0 → factor',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polynomial-division-algebra2');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
