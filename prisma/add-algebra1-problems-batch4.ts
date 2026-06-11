import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 4 (3 topics)...');

  // Find the topics
  const simplifyingRadicals = await prisma.topic.findFirst({
    where: { slug: 'simplifying-radicals-algebra1' }
  });

  const graphingLinearEq = await prisma.topic.findFirst({
    where: { slug: 'graphing-linear-equations-algebra1' }
  });

  const domainRange = await prisma.topic.findFirst({
    where: { slug: 'domain-range-algebra1' }
  });

  if (!simplifyingRadicals || !graphingLinearEq || !domainRange) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Simplifying Radicals
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: simplifyingRadicals.id,
        question: 'Simplify: √36',
        solution: `Step 1: Ask yourself: what number times itself equals 36?
6 × 6 = 36

Step 2: Write the answer:
√36 = 6

Step 3: Check:
6² = 36 ✓

Answer: 6`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        question: 'Simplify: √50',
        solution: `Step 1: Find the largest perfect square factor of 50:
50 = 25 × 2
(25 is a perfect square: 5² = 25)

Step 2: Rewrite using the product property:
√50 = √(25 × 2) = √25 × √2

Step 3: Simplify the perfect square:
√25 × √2 = 5√2

Step 4: Check that 2 has no perfect square factors:
2 is prime, so 5√2 is fully simplified

Answer: 5√2`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        question: 'Simplify: √72',
        solution: `Step 1: Find the largest perfect square factor of 72:
72 = 36 × 2
(36 is a perfect square: 6² = 36)

Step 2: Rewrite using the product property:
√72 = √(36 × 2) = √36 × √2

Step 3: Simplify:
√36 × √2 = 6√2

Answer: 6√2`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        question: 'Simplify: 3√18 + 2√8',
        solution: `Step 1: Simplify √18:
18 = 9 × 2
√18 = √9 × √2 = 3√2
So: 3√18 = 3(3√2) = 9√2

Step 2: Simplify √8:
8 = 4 × 2
√8 = √4 × √2 = 2√2
So: 2√8 = 2(2√2) = 4√2

Step 3: Add the like radicals:
9√2 + 4√2 = 13√2

(Just like adding 9x + 4x = 13x)

Answer: 13√2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        question: 'Simplify: √(8x³)',
        solution: `Step 1: Break down into perfect square factors:
8x³ = 4 × 2 × x² × x
(4 and x² are perfect squares)

Step 2: Rewrite using the product property:
√(8x³) = √(4 × x² × 2x)

Step 3: Separate the perfect squares:
√(4 × x² × 2x) = √4 × √(x²) × √(2x)

Step 4: Simplify the perfect squares:
2 × x × √(2x) = 2x√(2x)

Note: We assume x ≥ 0 so that √(x²) = x

Answer: 2x√(2x)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: simplifyingRadicals.id,
        front: 'What does √a × √b equal?',
        back: '√(ab). This is the product property of radicals. For example: √2 × √3 = √6',
        hint: 'You can multiply the numbers under the radicals',
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        front: 'What is a perfect square?',
        back: 'A number that is the square of an integer. Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...',
        hint: '1² = 1, 2² = 4, 3² = 9, etc.',
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        front: 'How do you simplify a radical like √50?',
        back: 'Find the largest perfect square factor, split it using √(ab) = √a × √b, then simplify the perfect square part.',
        hint: '50 = 25 × 2, and 25 is a perfect square',
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        front: 'Can you add √2 + √3?',
        back: 'No, these are not like radicals. You can only add radicals with the same radicand (number under the radical).',
        hint: 'Just like you cannot add 2x + 3y',
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        front: 'What are like radicals?',
        back: 'Radicals with the same radicand (number/expression under the radical). Example: 2√5 and 7√5 are like radicals.',
        hint: 'They have the same "root part"',
        isPremium: false
      },
      {
        topicId: simplifyingRadicals.id,
        front: 'When is a radical in simplest form?',
        back: 'When there are no perfect square factors under the radical (other than 1).',
        hint: 'No perfect squares left inside!',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: simplifying-radicals-algebra1');

  // TOPIC 2: Graphing Linear Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: graphingLinearEq.id,
        question: 'What is the slope and y-intercept of y = 4x - 3?',
        solution: `Step 1: Recognize the slope-intercept form:
y = mx + b
where m is the slope and b is the y-intercept

Step 2: Identify m and b in y = 4x - 3:
Comparing to y = mx + b:
m = 4 (the coefficient of x)
b = -3 (the constant term)

Step 3: State the answers:
Slope = 4 (or 4/1, meaning rise 4, run 1)
y-intercept = -3 (the point (0, -3))

Answer: Slope = 4, y-intercept = -3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Graph the equation y = -2x + 1',
        solution: `Step 1: Identify slope and y-intercept:
Slope m = -2 (or -2/1)
y-intercept b = 1 (point (0, 1))

Step 2: Plot the y-intercept:
Start at (0, 1) on the graph

Step 3: Use the slope to find another point:
Slope = -2/1 means: rise -2, run 1
From (0, 1): go down 2, right 1 → (1, -1)

Step 4: Plot the second point at (1, -1)

Step 5: Draw a line through both points

Points on the line: (0, 1), (1, -1), (2, -3), etc.

Answer: A line passing through (0, 1) with slope -2`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Find the slope of the line passing through (2, 5) and (6, 13)',
        solution: `Step 1: Use the slope formula:
m = (y₂ - y₁)/(x₂ - x₁)

Step 2: Identify the coordinates:
Point 1: (x₁, y₁) = (2, 5)
Point 2: (x₂, y₂) = (6, 13)

Step 3: Substitute into the formula:
m = (13 - 5)/(6 - 2)
m = 8/4
m = 2

Step 4: Interpret the slope:
For every 1 unit right, the line goes up 2 units

Answer: The slope is 2`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Write the equation of a line with slope -3 that passes through (2, 1)',
        solution: `Step 1: Use point-slope form:
y - y₁ = m(x - x₁)

Step 2: Substitute m = -3 and point (2, 1):
y - 1 = -3(x - 2)

Step 3: Distribute the -3:
y - 1 = -3x + 6

Step 4: Solve for y (slope-intercept form):
y = -3x + 6 + 1
y = -3x + 7

Step 5: Check: Does (2, 1) satisfy the equation?
1 = -3(2) + 7
1 = -6 + 7
1 = 1 ✓

Answer: y = -3x + 7`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Write the equation of the line passing through (-1, 4) and (3, -2)',
        solution: `Step 1: Find the slope:
m = (y₂ - y₁)/(x₂ - x₁)
m = (-2 - 4)/(3 - (-1))
m = -6/4
m = -3/2

Step 2: Use point-slope form with either point (using (-1, 4)):
y - 4 = (-3/2)(x - (-1))
y - 4 = (-3/2)(x + 1)

Step 3: Distribute:
y - 4 = (-3/2)x - 3/2

Step 4: Solve for y:
y = (-3/2)x - 3/2 + 4
y = (-3/2)x - 3/2 + 8/2
y = (-3/2)x + 5/2

Step 5: Check with both points:
Point (-1, 4): 4 = (-3/2)(-1) + 5/2 = 3/2 + 5/2 = 8/2 = 4 ✓
Point (3, -2): -2 = (-3/2)(3) + 5/2 = -9/2 + 5/2 = -4/2 = -2 ✓

Answer: y = (-3/2)x + 5/2 or y = -1.5x + 2.5`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: graphingLinearEq.id,
        front: 'What is slope-intercept form?',
        back: 'y = mx + b, where m is the slope and b is the y-intercept.',
        hint: 'The most common form for linear equations',
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What does slope measure?',
        back: 'The steepness and direction of a line. Slope = rise/run = (change in y)/(change in x).',
        hint: 'How much the line goes up or down as it goes right',
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What is the y-intercept?',
        back: 'The point where the line crosses the y-axis. Its x-coordinate is always 0.',
        hint: 'Where the line hits the vertical axis',
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What is the slope formula?',
        back: 'm = (y₂ - y₁)/(x₂ - x₁), used to find slope between two points.',
        hint: 'Change in y over change in x',
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What does a positive slope look like?',
        back: 'A line that goes up from left to right (rising).',
        hint: 'Think of going uphill',
        isPremium: false
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What does a negative slope look like?',
        back: 'A line that goes down from left to right (falling).',
        hint: 'Think of going downhill',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: graphing-linear-equations-algebra1');

  // TOPIC 3: Domain and Range
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: domainRange.id,
        question: 'Find the domain and range of: {(1, 3), (2, 5), (4, 7), (6, 9)}',
        solution: `Step 1: Understand the definitions:
Domain = all x-values (inputs)
Range = all y-values (outputs)

Step 2: List all x-values from the ordered pairs:
x-values: 1, 2, 4, 6

Step 3: List all y-values from the ordered pairs:
y-values: 3, 5, 7, 9

Step 4: Write in set notation:
Domain: {1, 2, 4, 6}
Range: {3, 5, 7, 9}

Answer: Domain: {1, 2, 4, 6}, Range: {3, 5, 7, 9}`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: domainRange.id,
        question: 'What is the domain of f(x) = 2x + 5?',
        solution: `Step 1: Check for restrictions:
- Is there division? No
- Is there a square root of a variable? No
- Are there any other restrictions? No

Step 2: Determine the domain:
Since this is a linear function with no restrictions, x can be any real number.

Step 3: Write the answer:
Domain: All real numbers

In interval notation: (-∞, ∞)
In set-builder notation: {x | x ∈ ℝ}

Answer: All real numbers`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: domainRange.id,
        question: 'What is the domain of g(x) = 1/(x - 3)?',
        solution: `Step 1: Identify restrictions:
This is a rational function (has division).
The denominator cannot equal zero.

Step 2: Find when the denominator is zero:
x - 3 = 0
x = 3

Step 3: State the domain:
x can be any real number except 3

Step 4: Write the answer in different notations:

Words: All real numbers except 3

Interval notation: (-∞, 3) ∪ (3, ∞)

Set-builder notation: {x | x ≠ 3}

Answer: All real numbers except 3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: domainRange.id,
        question: 'What is the domain of h(x) = √(x + 4)?',
        solution: `Step 1: Identify the restriction:
For a square root function, the radicand (expression under the root) must be non-negative.
We need: x + 4 ≥ 0

Step 2: Solve the inequality:
x + 4 ≥ 0
x ≥ -4

Step 3: Interpret the result:
x must be greater than or equal to -4

Step 4: Write the answer in different notations:

Words: All real numbers greater than or equal to -4

Interval notation: [-4, ∞)

Set-builder notation: {x | x ≥ -4}

Answer: x ≥ -4 or [-4, ∞)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: domainRange.id,
        question: 'Find the domain and range of f(x) = x² - 4',
        solution: `Step 1: Find the domain:
This is a quadratic function with no restrictions.
Domain: All real numbers or (-∞, ∞)

Step 2: Understand the graph:
f(x) = x² - 4 is a parabola that opens upward (because coefficient of x² is positive).

Step 3: Find the vertex (minimum point):
This is in the form f(x) = (x - 0)² - 4
Vertex is at (0, -4)

Step 4: Determine the range:
Since the parabola opens upward and the minimum y-value is -4, all y-values are ≥ -4.

Step 5: Write the range:
Range: [-4, ∞) or {y | y ≥ -4}

Answer: Domain: (-∞, ∞), Range: [-4, ∞)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: domainRange.id,
        front: 'What is the domain of a function?',
        back: 'All possible input values (x-values) that the function can accept.',
        hint: 'Think "what x-values are allowed?"',
        isPremium: false
      },
      {
        topicId: domainRange.id,
        front: 'What is the range of a function?',
        back: 'All possible output values (y-values) that the function can produce.',
        hint: 'Think "what y-values can we get out?"',
        isPremium: false
      },
      {
        topicId: domainRange.id,
        front: 'What causes a domain restriction in a fraction?',
        back: 'The denominator cannot be zero. Exclude any x-values that make the denominator equal to zero.',
        hint: 'Division by zero is undefined',
        isPremium: false
      },
      {
        topicId: domainRange.id,
        front: 'What causes a domain restriction in a square root?',
        back: 'The radicand (expression under the root) must be non-negative (≥ 0) for real numbers.',
        hint: 'Cannot take the square root of a negative number (in real numbers)',
        isPremium: false
      },
      {
        topicId: domainRange.id,
        front: 'What is interval notation for "all real numbers"?',
        back: '(-∞, ∞), which means from negative infinity to positive infinity.',
        hint: 'From negative infinity to positive infinity',
        isPremium: false
      },
      {
        topicId: domainRange.id,
        front: 'What is the difference between [ ] and ( ) in interval notation?',
        back: '[ ] means inclusive (include the endpoint), ( ) means exclusive (do not include the endpoint).',
        hint: 'Brackets include, parentheses exclude',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: domain-range-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
