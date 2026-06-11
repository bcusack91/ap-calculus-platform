import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 6 (4 topics)...');

  // Find the topics
  const complexNumbersIntro = await prisma.topic.findFirst({
    where: { slug: 'complex-numbers-intro-algebra2' }
  });

  const radicalEquations = await prisma.topic.findFirst({
    where: { slug: 'radical-equations-algebra2' }
  });

  const rationalExponents = await prisma.topic.findFirst({
    where: { slug: 'rational-exponents-algebra2' }
  });

  const matrixOperations = await prisma.topic.findFirst({
    where: { slug: 'matrix-operations-algebra2' }
  });

  if (!complexNumbersIntro || !radicalEquations || !rationalExponents || !matrixOperations) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Introduction to Complex Numbers
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: complexNumbersIntro.id,
        question: 'Simplify: √(-16)',
        solution: `Step 1: Recall that i = √(-1):
The imaginary unit i is defined as √(-1)

Step 2: Factor out -1:
√(-16) = √(16 × (-1))
       = √16 × √(-1)

Step 3: Simplify:
= 4i

Answer: 4i`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        question: 'Add: (3 + 2i) + (5 - 4i)',
        solution: `Step 1: Group real and imaginary parts:
(3 + 2i) + (5 - 4i) = (3 + 5) + (2i - 4i)

Step 2: Combine like terms:
Real parts: 3 + 5 = 8
Imaginary parts: 2i - 4i = -2i

Step 3: Write in standard form:
8 - 2i

Answer: 8 - 2i`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        question: 'Multiply: (2 + 3i)(4 - i)',
        solution: `Step 1: Use FOIL method:
First: 2 × 4 = 8
Outer: 2 × (-i) = -2i
Inner: 3i × 4 = 12i
Last: 3i × (-i) = -3i²

Step 2: Combine:
8 - 2i + 12i - 3i²

Step 3: Remember that i² = -1:
-3i² = -3(-1) = 3

Step 4: Combine all terms:
8 - 2i + 12i + 3
= (8 + 3) + (-2i + 12i)
= 11 + 10i

Answer: 11 + 10i`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        question: 'Divide: (6 + 8i)/(1 - i)',
        solution: `Step 1: Multiply by conjugate of denominator:
The conjugate of (1 - i) is (1 + i)

Step 2: Multiply numerator and denominator:
(6 + 8i)/(1 - i) × (1 + i)/(1 + i)

Step 3: Expand numerator:
(6 + 8i)(1 + i) = 6 + 6i + 8i + 8i²
                = 6 + 14i + 8(-1)
                = 6 + 14i - 8
                = -2 + 14i

Step 4: Expand denominator:
(1 - i)(1 + i) = 1 + i - i - i²
               = 1 - (-1)
               = 1 + 1
               = 2

Step 5: Divide:
(-2 + 14i)/2 = -2/2 + 14i/2
             = -1 + 7i

Answer: -1 + 7i`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        question: 'Find all solutions to x² + 4 = 0 in the complex number system.',
        solution: `Step 1: Solve for x²:
x² = -4

Step 2: Take square root of both sides:
x = ±√(-4)

Step 3: Simplify √(-4):
√(-4) = √(4 × (-1))
      = √4 × √(-1)
      = 2i

Step 4: Write both solutions:
x = 2i or x = -2i

Step 5: Verify x = 2i:
(2i)² + 4 = 4i² + 4 = 4(-1) + 4 = -4 + 4 = 0 ✓

Step 6: Verify x = -2i:
(-2i)² + 4 = 4i² + 4 = 4(-1) + 4 = -4 + 4 = 0 ✓

Answer: x = ±2i`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: complexNumbersIntro.id,
        front: 'What is the imaginary unit i?',
        back: 'i = √(-1), and i² = -1. It allows us to work with square roots of negative numbers.',
        hint: 'i² = -1',
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        front: 'What is a complex number?',
        back: 'A number in the form a + bi, where a is the real part and b is the imaginary part.',
        hint: 'a + bi',
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        front: 'What is the complex conjugate of a + bi?',
        back: 'a - bi. You change the sign of the imaginary part.',
        hint: 'Change sign of i term',
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        front: 'How do you add or subtract complex numbers?',
        back: 'Combine the real parts separately and the imaginary parts separately.',
        hint: 'Combine like parts',
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        front: 'How do you divide complex numbers?',
        back: 'Multiply numerator and denominator by the conjugate of the denominator to eliminate i from the denominator.',
        hint: 'Multiply by conjugate',
        isPremium: false
      },
      {
        topicId: complexNumbersIntro.id,
        front: 'What is the pattern of powers of i?',
        back: 'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the pattern repeats every 4 powers.',
        hint: 'Repeats every 4',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: complex-numbers-intro-algebra2');

  // TOPIC 2: Solving Radical Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: radicalEquations.id,
        question: 'Solve: √x = 5',
        solution: `Step 1: Square both sides:
(√x)² = 5²
x = 25

Step 2: Check the solution:
√25 = 5 ✓

Answer: x = 25`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        question: 'Solve: √(x + 3) = 4',
        solution: `Step 1: Square both sides:
(√(x + 3))² = 4²
x + 3 = 16

Step 2: Solve for x:
x = 16 - 3
x = 13

Step 3: Check the solution:
√(13 + 3) = √16 = 4 ✓

Answer: x = 13`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        question: 'Solve: √(2x - 1) = x - 2',
        solution: `Step 1: Square both sides:
(√(2x - 1))² = (x - 2)²
2x - 1 = x² - 4x + 4

Step 2: Rearrange to standard form:
0 = x² - 4x - 2x + 4 + 1
0 = x² - 6x + 5

Step 3: Factor:
0 = (x - 5)(x - 1)

Step 4: Solve:
x = 5 or x = 1

Step 5: Check x = 5:
√(2(5) - 1) = √9 = 3
5 - 2 = 3 ✓

Step 6: Check x = 1:
√(2(1) - 1) = √1 = 1
1 - 2 = -1 ✗
x = 1 is EXTRANEOUS

Answer: x = 5`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        question: 'Solve: √(x + 7) - √(x - 5) = 2',
        solution: `Step 1: Isolate one radical:
√(x + 7) = 2 + √(x - 5)

Step 2: Square both sides:
x + 7 = (2 + √(x - 5))²
x + 7 = 4 + 4√(x - 5) + (x - 5)
x + 7 = x - 1 + 4√(x - 5)

Step 3: Simplify:
x + 7 - x + 1 = 4√(x - 5)
8 = 4√(x - 5)
2 = √(x - 5)

Step 4: Square again:
4 = x - 5
x = 9

Step 5: Check x = 9:
√(9 + 7) - √(9 - 5) = √16 - √4 = 4 - 2 = 2 ✓

Answer: x = 9`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        question: 'Solve: ∛(x + 1) = 2',
        solution: `Step 1: Cube both sides:
(∛(x + 1))³ = 2³
x + 1 = 8

Step 2: Solve for x:
x = 7

Step 3: Check:
∛(7 + 1) = ∛8 = 2 ✓

Step 4: Note about odd roots:
Unlike even roots, odd roots can have negative radicands
For example, ∛(-8) = -2

Answer: x = 7`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: radicalEquations.id,
        front: 'What is the first step in solving a radical equation?',
        back: 'Isolate the radical on one side of the equation, then raise both sides to the appropriate power to eliminate the radical.',
        hint: 'Isolate, then raise to power',
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        front: 'Why must you check solutions to radical equations?',
        back: 'Squaring both sides can introduce extraneous solutions that don\'t satisfy the original equation.',
        hint: 'Check for extraneous',
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        front: 'What is an extraneous solution?',
        back: 'A solution that emerges from the algebraic process but doesn\'t satisfy the original equation.',
        hint: 'False solution',
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        front: 'How do you solve an equation with two radicals?',
        back: 'Isolate one radical, square both sides, simplify, then isolate the remaining radical and square again.',
        hint: 'Isolate, square, repeat',
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        front: 'What power do you raise both sides to when solving ∛x = 5?',
        back: 'Cube both sides (raise to the 3rd power) to eliminate the cube root.',
        hint: 'Match the root index',
        isPremium: false
      },
      {
        topicId: radicalEquations.id,
        front: 'What is the domain restriction for √x?',
        back: 'x ≥ 0 (the radicand must be non-negative for even roots).',
        hint: 'Radicand ≥ 0 for even roots',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: radical-equations-algebra2');

  // TOPIC 3: Rational Exponents
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalExponents.id,
        question: 'Evaluate: 16^(1/2)',
        solution: `Step 1: Understand the notation:
a^(1/n) = ⁿ√a

Step 2: Apply to our problem:
16^(1/2) = √16

Step 3: Calculate:
√16 = 4

Answer: 4`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        question: 'Simplify: 8^(2/3)',
        solution: `Step 1: Understand the notation:
a^(m/n) = (ⁿ√a)^m or ⁿ√(a^m)

Step 2: Choose the easier approach:
8^(2/3) = (∛8)²

Step 3: Find the cube root:
∛8 = 2

Step 4: Square the result:
2² = 4

Answer: 4`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        question: 'Simplify: (x^(3/4))(x^(1/4))',
        solution: `Step 1: Use product rule:
x^m · x^n = x^(m+n)

Step 2: Add the exponents:
x^(3/4) · x^(1/4) = x^(3/4 + 1/4)

Step 3: Add fractions:
3/4 + 1/4 = 4/4 = 1

Step 4: Simplify:
x^1 = x

Answer: x`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        question: 'Solve: x^(3/2) = 27',
        solution: `Step 1: Raise both sides to the reciprocal power:
The reciprocal of 3/2 is 2/3
(x^(3/2))^(2/3) = 27^(2/3)

Step 2: Simplify left side using power rule:
x^((3/2)·(2/3)) = 27^(2/3)
x^1 = 27^(2/3)
x = 27^(2/3)

Step 3: Evaluate 27^(2/3):
27^(2/3) = (∛27)²
         = 3²
         = 9

Step 4: Check:
9^(3/2) = (√9)³ = 3³ = 27 ✓

Answer: x = 9`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        question: 'Simplify: (16x^8y^4)^(3/4)',
        solution: `Step 1: Apply power to each factor:
(16x^8y^4)^(3/4) = 16^(3/4) · (x^8)^(3/4) · (y^4)^(3/4)

Step 2: Evaluate 16^(3/4):
16^(3/4) = (⁴√16)³ = 2³ = 8

Step 3: Apply power rule to x:
(x^8)^(3/4) = x^(8·3/4) = x^(24/4) = x^6

Step 4: Apply power rule to y:
(y^4)^(3/4) = y^(4·3/4) = y^(12/4) = y^3

Step 5: Combine:
8x^6y^3

Answer: 8x^6y^3`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rationalExponents.id,
        front: 'What does a^(1/n) mean?',
        back: 'ⁿ√a (the nth root of a). For example, a^(1/2) = √a and a^(1/3) = ∛a.',
        hint: 'nth root',
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        front: 'What does a^(m/n) mean?',
        back: '(ⁿ√a)^m or ⁿ√(a^m). Take the nth root, then raise to the m power (or vice versa).',
        hint: 'Root then power',
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        front: 'What is the product rule for exponents?',
        back: 'x^m · x^n = x^(m+n). When multiplying with the same base, add exponents.',
        hint: 'Add exponents',
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        front: 'What is the quotient rule for exponents?',
        back: 'x^m / x^n = x^(m-n). When dividing with the same base, subtract exponents.',
        hint: 'Subtract exponents',
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        front: 'What is the power rule for exponents?',
        back: '(x^m)^n = x^(mn). When raising a power to a power, multiply exponents.',
        hint: 'Multiply exponents',
        isPremium: false
      },
      {
        topicId: rationalExponents.id,
        front: 'What does a negative exponent mean?',
        back: 'x^(-n) = 1/x^n. A negative exponent means take the reciprocal.',
        hint: 'Reciprocal',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: rational-exponents-algebra2');

  // TOPIC 4: Matrix Operations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: matrixOperations.id,
        question: 'Add the matrices: [2 3] + [1 4]\n                        [5 1]   [2 0]',
        solution: `Step 1: Add corresponding elements:
[2+1  3+4] = [3  7]
[5+2  1+0]   [7  1]

Step 2: Note that matrices must have the same dimensions to be added

Answer: [3  7]
        [7  1]`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        question: 'Multiply the matrix by the scalar: 3[2  -1]\n                                           [4   5]',
        solution: `Step 1: Multiply each element by 3:
3[2  -1] = [3·2   3·(-1)]
 [4   5]   [3·4   3·5]

Step 2: Calculate:
= [6   -3]
  [12  15]

Answer: [6   -3]
        [12  15]`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        question: 'Multiply: [1 2][5]\n              [3 4][6]',
        solution: `Step 1: Check dimensions:
First matrix: 2×2
Second matrix: 2×1
Result will be: 2×1

Step 2: Calculate first element (row 1 × column):
1(5) + 2(6) = 5 + 12 = 17

Step 3: Calculate second element (row 2 × column):
3(5) + 4(6) = 15 + 24 = 39

Step 4: Write result:
[17]
[39]

Answer: [17]
        [39]`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        question: 'Multiply: [1 2][5 6]\n              [3 4][7 8]',
        solution: `Step 1: Check dimensions:
Both are 2×2, result will be 2×2

Step 2: Calculate element (1,1):
Row 1 × Column 1: 1(5) + 2(7) = 5 + 14 = 19

Step 3: Calculate element (1,2):
Row 1 × Column 2: 1(6) + 2(8) = 6 + 16 = 22

Step 4: Calculate element (2,1):
Row 2 × Column 1: 3(5) + 4(7) = 15 + 28 = 43

Step 5: Calculate element (2,2):
Row 2 × Column 2: 3(6) + 4(8) = 18 + 32 = 50

Step 6: Write result:
[19  22]
[43  50]

Answer: [19  22]
        [43  50]`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        question: 'Given A = [1 2] and B = [5 6], find 2A - 3B.\n              [3 4]         [7 8]',
        solution: `Step 1: Calculate 2A:
2A = 2[1 2] = [2  4]
     [3 4]   [6  8]

Step 2: Calculate 3B:
3B = 3[5 6] = [15  18]
     [7 8]   [21  24]

Step 3: Subtract 3B from 2A:
2A - 3B = [2  4]  - [15  18]
          [6  8]    [21  24]

Step 4: Subtract corresponding elements:
= [2-15   4-18]
  [6-21   8-24]

Step 5: Simplify:
= [-13  -14]
  [-15  -16]

Answer: [-13  -14]
        [-15  -16]`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: matrixOperations.id,
        front: 'What is a matrix?',
        back: 'A rectangular array of numbers arranged in rows and columns.',
        hint: 'Array of numbers',
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        front: 'What are the dimensions of a matrix?',
        back: 'rows × columns. A 2×3 matrix has 2 rows and 3 columns.',
        hint: 'rows × columns',
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        front: 'How do you add or subtract matrices?',
        back: 'Add or subtract corresponding elements. Matrices must have the same dimensions.',
        hint: 'Add/subtract elements',
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        front: 'What is scalar multiplication?',
        back: 'Multiplying a matrix by a single number. Multiply each element in the matrix by the scalar.',
        hint: 'Multiply each element',
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        front: 'How do you multiply two matrices?',
        back: 'Multiply each row of the first matrix by each column of the second. The element at position (i,j) is the dot product of row i and column j.',
        hint: 'Row × column',
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        front: 'When can you multiply two matrices A×B?',
        back: 'When the number of columns in A equals the number of rows in B. If A is m×n and B is n×p, then AB is m×p.',
        hint: 'Inner dimensions must match',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: matrix-operations-algebra2');

  console.log('\n✨ Successfully added problems and flashcards for 4 topics!');
  
  await prisma.$disconnect();
}

main();
