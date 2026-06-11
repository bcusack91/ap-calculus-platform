import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 1 (3 topics)...');

  // Find the topics
  const polynomialOperations = await prisma.topic.findFirst({
    where: { slug: 'polynomial-operations-algebra2' }
  });

  const factoringPolynomials = await prisma.topic.findFirst({
    where: { slug: 'factoring-polynomials-algebra2' }
  });

  const polynomialTheorems = await prisma.topic.findFirst({
    where: { slug: 'polynomial-theorems-algebra2' }
  });

  if (!polynomialOperations || !factoringPolynomials || !polynomialTheorems) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Advanced Polynomial Operations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialOperations.id,
        question: 'Add the polynomials: (3x² + 5x - 2) + (2x² - 3x + 7)',
        solution: `Step 1: Group like terms:
(3x² + 2x²) + (5x - 3x) + (-2 + 7)

Step 2: Combine coefficients:
5x² + 2x + 5

Answer: 5x² + 2x + 5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Multiply: (2x + 3)(x² - 4x + 5)',
        solution: `Step 1: Distribute 2x to each term in the second polynomial:
2x(x²) + 2x(-4x) + 2x(5)
= 2x³ - 8x² + 10x

Step 2: Distribute 3 to each term:
3(x²) + 3(-4x) + 3(5)
= 3x² - 12x + 15

Step 3: Combine all terms:
2x³ - 8x² + 10x + 3x² - 12x + 15

Step 4: Combine like terms:
2x³ + (-8x² + 3x²) + (10x - 12x) + 15
2x³ - 5x² - 2x + 15

Answer: 2x³ - 5x² - 2x + 15`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Subtract: (4x³ + 2x² - 7x + 1) - (2x³ - 3x² + 5x - 4)',
        solution: `Step 1: Distribute the negative sign:
4x³ + 2x² - 7x + 1 - 2x³ + 3x² - 5x + 4

Step 2: Group like terms:
(4x³ - 2x³) + (2x² + 3x²) + (-7x - 5x) + (1 + 4)

Step 3: Combine:
2x³ + 5x² - 12x + 5

Step 4: Verify by plugging in x = 1:
Original: (4 + 2 - 7 + 1) - (2 - 3 + 5 - 4) = 0 - 0 = 0
Result: 2 + 5 - 12 + 5 = 0 ✓

Answer: 2x³ + 5x² - 12x + 5`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Find the product: (x + 2)(x - 3)(x + 4)',
        solution: `Step 1: Multiply the first two factors:
(x + 2)(x - 3)
= x² - 3x + 2x - 6
= x² - x - 6

Step 2: Multiply the result by the third factor:
(x² - x - 6)(x + 4)

Step 3: Distribute x:
x(x²) + x(-x) + x(-6)
= x³ - x² - 6x

Step 4: Distribute 4:
4(x²) + 4(-x) + 4(-6)
= 4x² - 4x - 24

Step 5: Combine all terms:
x³ - x² - 6x + 4x² - 4x - 24
= x³ + 3x² - 10x - 24

Step 6: Verify by checking the constant term:
Product of constants: 2 × (-3) × 4 = -24 ✓

Answer: x³ + 3x² - 10x - 24`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        question: 'Expand and simplify: (2x - 1)³',
        solution: `Step 1: Use the binomial expansion formula:
(a + b)³ = a³ + 3a²b + 3ab² + b³

Step 2: Identify a = 2x and b = -1:
(2x)³ + 3(2x)²(-1) + 3(2x)(-1)² + (-1)³

Step 3: Calculate each term:
(2x)³ = 8x³
3(2x)²(-1) = 3(4x²)(-1) = -12x²
3(2x)(-1)² = 3(2x)(1) = 6x
(-1)³ = -1

Step 4: Combine:
8x³ - 12x² + 6x - 1

Step 5: Alternative method - multiply step by step:
(2x - 1)² = 4x² - 4x + 1
(4x² - 4x + 1)(2x - 1) = 8x³ - 4x² - 8x² + 4x + 2x - 1
= 8x³ - 12x² + 6x - 1 ✓

Answer: 8x³ - 12x² + 6x - 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialOperations.id,
        front: 'When adding or subtracting polynomials, what must you combine?',
        back: 'Only like terms - terms with the same variable(s) raised to the same power(s).',
        hint: 'Same variables and exponents',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'What is the distributive property for polynomials?',
        back: 'a(b + c) = ab + ac. When multiplying polynomials, distribute each term of one polynomial to every term of the other.',
        hint: 'Multiply each by each',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'What is the degree of a polynomial?',
        back: 'The highest power of the variable in the polynomial. For example, 3x⁴ - 2x² + 1 has degree 4.',
        hint: 'Highest exponent',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'When subtracting polynomials, what is a common mistake?',
        back: 'Forgetting to distribute the negative sign to all terms in the polynomial being subtracted.',
        hint: 'Distribute the minus sign',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'What is the binomial expansion of (a + b)³?',
        back: 'a³ + 3a²b + 3ab² + b³',
        hint: 'Coefficients: 1, 3, 3, 1',
        isPremium: false
      },
      {
        topicId: polynomialOperations.id,
        front: 'When multiplying two polynomials, how do you determine the degree of the result?',
        back: 'Add the degrees of the polynomials being multiplied. For example, degree 2 × degree 3 = degree 5.',
        hint: 'Add the degrees',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polynomial-operations-algebra2');

  // TOPIC 2: Factoring Polynomials
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: factoringPolynomials.id,
        question: 'Factor completely: 3x² + 12x',
        solution: `Step 1: Find the greatest common factor (GCF):
GCF of 3x² and 12x is 3x

Step 2: Factor out the GCF:
3x² + 12x = 3x(x + 4)

Step 3: Verify by expanding:
3x(x + 4) = 3x² + 12x ✓

Answer: 3x(x + 4)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        question: 'Factor: x² - 9',
        solution: `Step 1: Recognize as difference of squares:
x² - 9 = x² - 3²

Step 2: Apply the formula a² - b² = (a + b)(a - b):
x² - 3² = (x + 3)(x - 3)

Step 3: Verify:
(x + 3)(x - 3) = x² - 3x + 3x - 9 = x² - 9 ✓

Answer: (x + 3)(x - 3)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        question: 'Factor: x² + 7x + 12',
        solution: `Step 1: Find two numbers that multiply to 12 and add to 7:
Factors of 12: 1×12, 2×6, 3×4
Sum check: 1+12=13, 2+6=8, 3+4=7 ✓

Step 2: Write the factored form:
x² + 7x + 12 = (x + 3)(x + 4)

Step 3: Verify by expanding:
(x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓

Answer: (x + 3)(x + 4)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        question: 'Factor completely: 2x² + 11x + 12',
        solution: `Step 1: Use AC method (a=2, c=12):
Multiply: 2 × 12 = 24
Find two numbers that multiply to 24 and add to 11:
3 and 8 (3 × 8 = 24, 3 + 8 = 11)

Step 2: Rewrite the middle term:
2x² + 3x + 8x + 12

Step 3: Factor by grouping:
(2x² + 3x) + (8x + 12)
x(2x + 3) + 4(2x + 3)

Step 4: Factor out common binomial:
(2x + 3)(x + 4)

Step 5: Verify:
(2x + 3)(x + 4) = 2x² + 8x + 3x + 12 = 2x² + 11x + 12 ✓

Answer: (2x + 3)(x + 4)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        question: 'Factor completely: x⁴ - 16',
        solution: `Step 1: Recognize as difference of squares:
x⁴ - 16 = (x²)² - 4²

Step 2: Apply difference of squares formula:
(x²)² - 4² = (x² + 4)(x² - 4)

Step 3: Check if x² - 4 can be factored further:
x² - 4 = x² - 2² = (x + 2)(x - 2)

Step 4: Check if x² + 4 can be factored:
x² + 4 cannot be factored over real numbers (sum of squares)

Step 5: Write complete factorization:
x⁴ - 16 = (x² + 4)(x + 2)(x - 2)

Step 6: Verify by multiplying:
(x² + 4)(x² - 4) = x⁴ - 4x² + 4x² - 16 = x⁴ - 16 ✓

Answer: (x² + 4)(x + 2)(x - 2)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: factoringPolynomials.id,
        front: 'What is the difference of squares formula?',
        back: 'a² - b² = (a + b)(a - b)',
        hint: '(a + b)(a - b)',
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        front: 'What is the first step in factoring any polynomial?',
        back: 'Always look for and factor out the Greatest Common Factor (GCF) first.',
        hint: 'Find the GCF',
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        front: 'How do you factor x² + bx + c?',
        back: 'Find two numbers that multiply to c and add to b. The factorization is (x + m)(x + n) where m and n are those numbers.',
        hint: 'Product = c, sum = b',
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        front: 'What is the AC method for factoring?',
        back: 'For ax² + bx + c: multiply a×c, find two numbers that multiply to ac and add to b, rewrite the middle term, then factor by grouping.',
        hint: 'Used when a ≠ 1',
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        front: 'Can a² + b² be factored over real numbers?',
        back: 'No, the sum of squares cannot be factored over real numbers. Only the difference of squares can be factored.',
        hint: 'Sum of squares: NO',
        isPremium: false
      },
      {
        topicId: factoringPolynomials.id,
        front: 'What does "factor completely" mean?',
        back: 'Continue factoring until all factors are prime (cannot be factored further). Don\'t stop after one step.',
        hint: 'Factor until done',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: factoring-polynomials-algebra2');

  // TOPIC 3: Polynomial Theorems and Roots
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialTheorems.id,
        question: 'Use the Remainder Theorem to find the remainder when P(x) = 2x³ - 5x² + 3x - 7 is divided by (x - 2).',
        solution: `Step 1: Recall the Remainder Theorem:
When P(x) is divided by (x - a), the remainder is P(a)

Step 2: Identify a = 2 (from x - 2):
We need to find P(2)

Step 3: Evaluate P(2):
P(2) = 2(2)³ - 5(2)² + 3(2) - 7
P(2) = 2(8) - 5(4) + 6 - 7
P(2) = 16 - 20 + 6 - 7
P(2) = -5

Answer: The remainder is -5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        question: 'Determine if (x + 3) is a factor of P(x) = x³ + 4x² - 3x - 18.',
        solution: `Step 1: Use the Factor Theorem:
(x - a) is a factor if and only if P(a) = 0

Step 2: For (x + 3), we have x - (-3), so a = -3:
Check if P(-3) = 0

Step 3: Evaluate P(-3):
P(-3) = (-3)³ + 4(-3)² - 3(-3) - 18
P(-3) = -27 + 4(9) + 9 - 18
P(-3) = -27 + 36 + 9 - 18
P(-3) = 0

Step 4: Conclusion:
Since P(-3) = 0, (x + 3) IS a factor

Answer: Yes, (x + 3) is a factor of P(x)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        question: 'Find all zeros of P(x) = x³ - 6x² + 11x - 6 given that x = 1 is a zero.',
        solution: `Step 1: Since x = 1 is a zero, (x - 1) is a factor:
Use synthetic or long division to find the other factor

Step 2: Synthetic division by (x - 1):
    1 |  1  -6   11  -6
      |      1   -5    6
      ___________________
         1  -5    6    0

Result: x² - 5x + 6

Step 3: Factor the quadratic:
x² - 5x + 6 = (x - 2)(x - 3)

Step 4: Write complete factorization:
P(x) = (x - 1)(x - 2)(x - 3)

Step 5: Find all zeros:
x - 1 = 0 → x = 1
x - 2 = 0 → x = 2
x - 3 = 0 → x = 3

Answer: The zeros are x = 1, 2, 3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        question: 'Use the Rational Root Theorem to find all possible rational roots of P(x) = 2x³ - 3x² - 11x + 6.',
        solution: `Step 1: Recall the Rational Root Theorem:
Possible rational roots = ±(factors of constant term)/(factors of leading coefficient)

Step 2: Find factors of constant term (6):
±1, ±2, ±3, ±6

Step 3: Find factors of leading coefficient (2):
±1, ±2

Step 4: List all possible rational roots:
±1/1, ±2/1, ±3/1, ±6/1, ±1/2, ±2/2, ±3/2, ±6/2

Step 5: Simplify and remove duplicates:
±1, ±2, ±3, ±6, ±1/2, ±3/2

Step 6: Test to find actual roots (optional):
P(1/2) = 2(1/8) - 3(1/4) - 11(1/2) + 6 = 1/4 - 3/4 - 11/2 + 6 = 0 ✓
So x = 1/2 is a root

Answer: Possible rational roots are ±1, ±2, ±3, ±6, ±1/2, ±3/2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        question: 'Find a polynomial with integer coefficients that has zeros at x = 2, x = -3, and x = 1/2.',
        solution: `Step 1: Write factors for each zero:
x = 2 → factor (x - 2)
x = -3 → factor (x + 3)
x = 1/2 → factor (x - 1/2) or (2x - 1)

Step 2: To avoid fractions, use (2x - 1):
P(x) = (x - 2)(x + 3)(2x - 1)

Step 3: Multiply first two factors:
(x - 2)(x + 3) = x² + 3x - 2x - 6 = x² + x - 6

Step 4: Multiply by the third factor:
(x² + x - 6)(2x - 1)

Step 5: Distribute 2x:
2x(x²) + 2x(x) + 2x(-6) = 2x³ + 2x² - 12x

Step 6: Distribute -1:
-1(x²) - 1(x) - 1(-6) = -x² - x + 6

Step 7: Combine:
2x³ + 2x² - 12x - x² - x + 6
= 2x³ + x² - 13x + 6

Step 8: Verify zeros:
P(2) = 16 + 4 - 26 + 6 = 0 ✓
P(-3) = -54 + 9 + 39 + 6 = 0 ✓
P(1/2) = 2(1/8) + 1/4 - 13/2 + 6 = 1/4 + 1/4 - 13/2 + 6 = 0 ✓

Answer: P(x) = 2x³ + x² - 13x + 6`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialTheorems.id,
        front: 'What is the Remainder Theorem?',
        back: 'When a polynomial P(x) is divided by (x - a), the remainder is P(a).',
        hint: 'Remainder = P(a)',
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        front: 'What is the Factor Theorem?',
        back: '(x - a) is a factor of P(x) if and only if P(a) = 0. In other words, a is a zero of P(x) if and only if (x - a) is a factor.',
        hint: 'Factor ↔ zero',
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        front: 'What is the Rational Root Theorem?',
        back: 'If a polynomial has a rational root p/q (in lowest terms), then p divides the constant term and q divides the leading coefficient.',
        hint: 'p divides constant, q divides leading',
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        front: 'What is a zero (or root) of a polynomial?',
        back: 'A value x = a where P(a) = 0. It\'s also called a solution or x-intercept of the polynomial.',
        hint: 'Makes the polynomial equal zero',
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        front: 'What is the Fundamental Theorem of Algebra?',
        back: 'Every polynomial of degree n has exactly n roots (counting multiplicity) in the complex numbers.',
        hint: 'Degree = number of roots',
        isPremium: false
      },
      {
        topicId: polynomialTheorems.id,
        front: 'If you know one factor of a polynomial, how can you find the others?',
        back: 'Use polynomial division (long division or synthetic division) to divide by the known factor, then factor or solve the quotient.',
        hint: 'Divide by the known factor',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polynomial-theorems-algebra2');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
