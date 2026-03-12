import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 10 (3 topics)...');

  // Find the topics
  const graphingQuadratics = await prisma.topic.findFirst({
    where: { slug: 'graphing-quadratics-algebra1' }
  });

  const multiplyingPolynomials = await prisma.topic.findFirst({
    where: { slug: 'multiplying-polynomials-algebra1' }
  });

  const outliers = await prisma.topic.findFirst({
    where: { slug: 'outliers-in-data' }
  });

  if (!graphingQuadratics || !multiplyingPolynomials || !outliers) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Graphing Quadratic Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: graphingQuadratics.id,
        question: 'Find the vertex of y = (x - 2)² + 3',
        solution: `Step 1: Recognize the vertex form:
y = a(x - h)² + k
where the vertex is (h, k)

Step 2: Identify h and k:
Comparing y = (x - 2)² + 3 to y = a(x - h)² + k:
h = 2 (note: it's x minus 2, so h is positive 2)
k = 3

Step 3: State the vertex:
Vertex = (h, k) = (2, 3)

Step 4: Determine if it's a maximum or minimum:
a = 1 (positive), so the parabola opens upward
The vertex is a minimum point.

Answer: Vertex is (2, 3), a minimum`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        question: 'Find the axis of symmetry and vertex of y = x² - 4x + 1',
        solution: `Step 1: Use the axis of symmetry formula:
For y = ax² + bx + c
Axis of symmetry: x = -b/(2a)

Step 2: Identify a and b:
a = 1, b = -4

Step 3: Calculate the axis of symmetry:
x = -(-4)/(2·1)
x = 4/2
x = 2

Step 4: Find the y-coordinate of the vertex:
Substitute x = 2 into the equation:
y = (2)² - 4(2) + 1
y = 4 - 8 + 1
y = -3

Step 5: State the vertex:
Vertex = (2, -3)

Answer: Axis of symmetry: x = 2, Vertex: (2, -3)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        question: 'Graph y = -x² + 2x + 3. Find the vertex, axis of symmetry, and y-intercept.',
        solution: `Step 1: Find the axis of symmetry:
x = -b/(2a) = -2/(2·-1) = -2/-2 = 1

Step 2: Find the vertex:
x-coordinate = 1
y-coordinate: y = -(1)² + 2(1) + 3 = -1 + 2 + 3 = 4
Vertex: (1, 4)

Step 3: Determine direction:
a = -1 (negative), so parabola opens downward
Vertex (1, 4) is a maximum

Step 4: Find the y-intercept (set x = 0):
y = -(0)² + 2(0) + 3 = 3
y-intercept: (0, 3)

Step 5: Find the x-intercepts (set y = 0):
0 = -x² + 2x + 3
0 = -(x² - 2x - 3)
0 = -(x - 3)(x + 1)
x = 3 or x = -1
x-intercepts: (3, 0) and (-1, 0)

Step 6: Key points for graphing:
Vertex: (1, 4) - maximum
Axis of symmetry: x = 1
y-intercept: (0, 3)
x-intercepts: (-1, 0) and (3, 0)

Answer: Vertex (1, 4), axis x = 1, y-intercept (0, 3)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        question: 'Convert y = x² + 6x + 5 to vertex form.',
        solution: `Step 1: Complete the square:
y = x² + 6x + 5

Step 2: Find (b/2)²:
b = 6, so (6/2)² = 9

Step 3: Add and subtract 9:
y = (x² + 6x + 9 - 9) + 5
y = (x² + 6x + 9) - 9 + 5

Step 4: Factor and simplify:
y = (x + 3)² - 4

Step 5: Identify the vertex:
Vertex form: y = a(x - h)² + k
This is: y = (x - (-3))² + (-4)
Vertex: (-3, -4)

Step 6: Verify by expanding:
(x + 3)² - 4 = x² + 6x + 9 - 4 = x² + 6x + 5 ✓

Answer: y = (x + 3)² - 4; Vertex: (-3, -4)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        question: 'A ball is thrown from a 6-foot platform with an initial velocity of 48 ft/s. Its height is h(t) = -16t² + 48t + 6. Find the maximum height and when the ball hits the ground.',
        solution: `Step 1: Find when maximum height occurs (vertex):
Using t = -b/(2a):
t = -48/(2·-16) = -48/-32 = 1.5 seconds

Step 2: Find the maximum height:
h(1.5) = -16(1.5)² + 48(1.5) + 6
h(1.5) = -16(2.25) + 72 + 6
h(1.5) = -36 + 72 + 6
h(1.5) = 42 feet

Step 3: Find when the ball hits the ground (h = 0):
0 = -16t² + 48t + 6

Step 4: Use the quadratic formula:
a = -16, b = 48, c = 6
t = [-48 ± √(48² - 4(-16)(6))] / (2·-16)
t = [-48 ± √(2304 + 384)] / (-32)
t = [-48 ± √2688] / (-32)
t = [-48 ± 51.85] / (-32)

Step 5: Calculate both values:
t = (-48 + 51.85)/(-32) ≈ -0.12 (reject - negative time)
t = (-48 - 51.85)/(-32) ≈ 3.12 seconds

Answer: Maximum height is 42 feet at 1.5 seconds. Ball hits ground at about 3.12 seconds.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: graphingQuadratics.id,
        front: 'What is vertex form of a quadratic?',
        back: 'y = a(x - h)² + k, where (h, k) is the vertex.',
        hint: 'Shows the vertex directly',
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        front: 'How do you find the axis of symmetry from standard form?',
        back: 'Use x = -b/(2a) for y = ax² + bx + c',
        hint: 'Negative b over 2a',
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        front: 'How do you know if a parabola opens upward or downward?',
        back: 'If a > 0, it opens upward (U-shape). If a < 0, it opens downward (∩-shape).',
        hint: 'Check the sign of a',
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        front: 'What is the y-intercept of a quadratic?',
        back: 'The point where x = 0. In y = ax² + bx + c, the y-intercept is (0, c).',
        hint: 'Plug in x = 0',
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        front: 'What are the x-intercepts also called?',
        back: 'Roots, zeros, or solutions of the quadratic equation (where y = 0).',
        hint: 'Where the parabola crosses the x-axis',
        isPremium: false
      },
      {
        topicId: graphingQuadratics.id,
        front: 'If a parabola opens upward, is the vertex a maximum or minimum?',
        back: 'Minimum. The vertex is the lowest point on the graph.',
        hint: 'Upward = minimum at the bottom',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: graphing-quadratics-algebra1');

  // TOPIC 2: Multiplying Polynomials
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: multiplyingPolynomials.id,
        question: 'Multiply: 3x(2x + 5)',
        solution: `Step 1: Use the distributive property:
Multiply 3x by each term inside the parentheses

Step 2: Multiply 3x · 2x:
3x · 2x = 6x²

Step 3: Multiply 3x · 5:
3x · 5 = 15x

Step 4: Combine the results:
6x² + 15x

Answer: 6x² + 15x`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        question: 'Multiply: (x + 4)(x + 3)',
        solution: `Step 1: Use FOIL (First, Outer, Inner, Last):

First: x · x = x²
Outer: x · 3 = 3x
Inner: 4 · x = 4x
Last: 4 · 3 = 12

Step 2: Write all terms:
x² + 3x + 4x + 12

Step 3: Combine like terms:
x² + 7x + 12

Answer: x² + 7x + 12`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        question: 'Multiply: (2x - 3)(x + 5)',
        solution: `Step 1: Use FOIL:

First: 2x · x = 2x²
Outer: 2x · 5 = 10x
Inner: -3 · x = -3x
Last: -3 · 5 = -15

Step 2: Write all terms:
2x² + 10x - 3x - 15

Step 3: Combine like terms:
2x² + 7x - 15

Answer: 2x² + 7x - 15`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        question: 'Multiply: (x + 2)(x² - 3x + 4)',
        solution: `Step 1: Distribute x to each term in the trinomial:
x(x² - 3x + 4) = x³ - 3x² + 4x

Step 2: Distribute 2 to each term in the trinomial:
2(x² - 3x + 4) = 2x² - 6x + 8

Step 3: Combine the results:
x³ - 3x² + 4x + 2x² - 6x + 8

Step 4: Group like terms:
x³ + (-3x² + 2x²) + (4x - 6x) + 8

Step 5: Combine like terms:
x³ - x² - 2x + 8

Answer: x³ - x² - 2x + 8`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        question: 'Expand and simplify: (2x - 1)³',
        solution: `Step 1: Rewrite as multiplication:
(2x - 1)³ = (2x - 1)(2x - 1)(2x - 1)

Step 2: Multiply the first two factors using FOIL:
(2x - 1)(2x - 1) = 4x² - 2x - 2x + 1 = 4x² - 4x + 1

Step 3: Multiply the result by the third factor:
(4x² - 4x + 1)(2x - 1)

Step 4: Distribute 2x:
2x(4x² - 4x + 1) = 8x³ - 8x² + 2x

Step 5: Distribute -1:
-1(4x² - 4x + 1) = -4x² + 4x - 1

Step 6: Combine:
8x³ - 8x² + 2x - 4x² + 4x - 1

Step 7: Group and combine like terms:
8x³ + (-8x² - 4x²) + (2x + 4x) - 1
8x³ - 12x² + 6x - 1

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
        topicId: multiplyingPolynomials.id,
        front: 'What does FOIL stand for?',
        back: 'First, Outer, Inner, Last - a method for multiplying two binomials.',
        hint: 'First, Outer, Inner, Last',
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        front: 'What is the distributive property?',
        back: 'a(b + c) = ab + ac. Multiply the outside term by each term inside the parentheses.',
        hint: 'Distribute the multiplication',
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        front: 'How do you multiply (x + 3)(x + 5)?',
        back: 'Use FOIL: x² (First) + 5x (Outer) + 3x (Inner) + 15 (Last) = x² + 8x + 15',
        hint: 'Multiply each term in the first by each in the second',
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        front: 'What is a binomial?',
        back: 'A polynomial with exactly two terms. Examples: x + 3, 2x - 5, x² + 1',
        hint: 'Bi means two',
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        front: 'When multiplying polynomials, what must you remember to do?',
        back: 'Combine like terms at the end after multiplying all terms together.',
        hint: 'Simplify by combining like terms',
        isPremium: false
      },
      {
        topicId: multiplyingPolynomials.id,
        front: 'How do you multiply a monomial by a polynomial?',
        back: 'Use the distributive property: multiply the monomial by each term in the polynomial.',
        hint: 'Distribute to each term',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: multiplying-polynomials-algebra1');

  // TOPIC 3: Outliers in Data
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: outliers.id,
        question: 'Is 2 an outlier in the data set: 12, 15, 18, 20, 22, 25, 2?',
        solution: `Step 1: Arrange data in order:
2, 12, 15, 18, 20, 22, 25

Step 2: Visual inspection:
2 is much smaller than all other values (which range from 12-25).
It appears to be an outlier.

Step 3: Use the IQR method to confirm:
Find Q1 and Q3:
Q1 = 12 (median of lower half: 2, 12, 15)
Q2 = 18 (median overall)
Q3 = 22 (median of upper half: 20, 22, 25)

Step 4: Calculate IQR and boundaries:
IQR = 22 - 12 = 10
Lower boundary: Q1 - 1.5(IQR) = 12 - 15 = -3
Upper boundary: Q3 + 1.5(IQR) = 22 + 15 = 37

Step 5: Check if 2 is outside the boundaries:
2 > -3 and 2 < 37
2 is NOT outside the boundaries by the 1.5 × IQR rule.

Answer: By the IQR method, 2 is technically NOT an outlier, though it appears unusual visually.`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: outliers.id,
        question: 'For the data set 5, 8, 10, 12, 15, 40, identify any outliers using the 1.5 × IQR rule.',
        solution: `Step 1: Data is already in order. Find quartiles:
Q1 = 8 (median of 5, 8, 10)
Q2 = 11 (median of all: between 10 and 12)
Q3 = 15 (median of 12, 15, 40)

Step 2: Calculate IQR:
IQR = Q3 - Q1 = 15 - 8 = 7

Step 3: Calculate boundaries:
Lower: Q1 - 1.5(IQR) = 8 - 1.5(7) = 8 - 10.5 = -2.5
Upper: Q3 + 1.5(IQR) = 15 + 1.5(7) = 15 + 10.5 = 25.5

Step 4: Check each value:
5 > -2.5 ✓
8, 10, 12, 15 all within boundaries ✓
40 > 25.5 ✗ (exceeds upper boundary)

Step 5: Identify outliers:
40 is an outlier

Answer: 40 is an outlier`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: outliers.id,
        question: 'A data set has Q1 = 30, Q3 = 50. What values would be considered outliers?',
        solution: `Step 1: Calculate IQR:
IQR = Q3 - Q1 = 50 - 30 = 20

Step 2: Calculate lower boundary:
Lower boundary = Q1 - 1.5(IQR)
= 30 - 1.5(20)
= 30 - 30
= 0

Step 3: Calculate upper boundary:
Upper boundary = Q3 + 1.5(IQR)
= 50 + 1.5(20)
= 50 + 30
= 80

Step 4: Determine outlier ranges:
Any value less than 0 is a low outlier
Any value greater than 80 is a high outlier

Answer: Values below 0 or above 80 are outliers`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: outliers.id,
        question: 'Explain how outliers affect the mean and median differently.',
        solution: `Step 1: Effect on the mean (average):
The mean is calculated by adding all values and dividing by the count.
Outliers significantly affect the mean because they are included in the sum.

Example: Data set: 10, 12, 13, 15, 100
Without 100: mean = (10 + 12 + 13 + 15)/4 = 12.5
With 100: mean = (10 + 12 + 13 + 15 + 100)/5 = 30

The outlier (100) dramatically increases the mean from 12.5 to 30.

Step 2: Effect on the median (middle value):
The median is the middle value when data is ordered.
Outliers have little to no effect on the median.

Same data: 10, 12, 13, 15, 100
Median = 13 (middle value)

If we remove 100: 10, 12, 13, 15
Median = (12 + 13)/2 = 12.5

The median changed only slightly (13 to 12.5).

Step 3: Conclusion:
- Mean is sensitive to outliers (not resistant)
- Median is resistant to outliers
- When outliers exist, median often better represents "typical" value

Answer: Outliers significantly affect the mean but have minimal effect on the median. The median is resistant to outliers.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: outliers.id,
        question: 'Test scores: 72, 75, 78, 80, 82, 85, 88, 90, 45. Is 45 an outlier? Should it be removed from the data?',
        solution: `Step 1: Order the data and find quartiles:
45, 72, 75, 78, 80, 82, 85, 88, 90

Q1 = 75 (median of 45, 72, 75, 78)
Q2 = 80
Q3 = 85 (median of 82, 85, 88, 90)

Step 2: Calculate IQR and boundaries:
IQR = 85 - 75 = 10
Lower: 75 - 1.5(10) = 75 - 15 = 60
Upper: 85 + 1.5(10) = 85 + 15 = 100

Step 3: Check if 45 is an outlier:
45 < 60, so YES, 45 is an outlier

Step 4: Investigate the cause:
Ask: Why is this score so different?
Possible reasons:
- Student was absent and made up test later
- Student had an emergency during test
- Data entry error (typed 45 instead of 85?)
- Student genuinely struggled

Step 5: Decide whether to remove it:
- If it's a data error: Remove or correct it
- If it's a legitimate score: Keep it, but note it
- Report statistics with and without the outlier
- Use median instead of mean to reduce its impact

Step 6: Calculate both scenarios:
With 45: mean ≈ 76.1, median = 80
Without 45: mean ≈ 81.25, median = 81

Answer: Yes, 45 is an outlier. Whether to remove it depends on why it occurred. If legitimate, keep it but use resistant measures like median. If it's an error, investigate and correct.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: outliers.id,
        front: 'What is an outlier?',
        back: 'A data value that is significantly different from other values in the data set - unusually high or low.',
        hint: 'An extreme value that stands out',
        isPremium: false
      },
      {
        topicId: outliers.id,
        front: 'What is the 1.5 × IQR rule?',
        back: 'Outliers are values below Q1 - 1.5(IQR) or above Q3 + 1.5(IQR).',
        hint: '1.5 times IQR from the quartiles',
        isPremium: false
      },
      {
        topicId: outliers.id,
        front: 'Which measure of center is most affected by outliers?',
        back: 'The mean. It is sensitive to extreme values. The median is resistant to outliers.',
        hint: 'Mean is sensitive, median is resistant',
        isPremium: false
      },
      {
        topicId: outliers.id,
        front: 'Should you always remove outliers from data?',
        back: 'No! Investigate why they occurred. Remove only if they are errors. If legitimate, keep them but note their presence.',
        hint: 'Investigate first, do not automatically delete',
        isPremium: false
      },
      {
        topicId: outliers.id,
        front: 'What might cause an outlier?',
        back: 'Data entry errors, measurement errors, natural variation, or a different population.',
        hint: 'Errors or genuine extreme values',
        isPremium: false
      },
      {
        topicId: outliers.id,
        front: 'How do outliers appear on a box plot?',
        back: 'As individual points beyond the whiskers, separate from the main box and whisker structure.',
        hint: 'Dots beyond the whiskers',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: outliers-in-data');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
