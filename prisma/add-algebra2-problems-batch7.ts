import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 7 FINAL (5 topics)...');

  // Find the topics
  const determinantsInverses = await prisma.topic.findFirst({
    where: { slug: 'determinants-inverses' }
  });

  const circles = await prisma.topic.findFirst({
    where: { slug: 'circles-algebra2' }
  });

  const parabolas = await prisma.topic.findFirst({
    where: { slug: 'parabolas-conic-algebra2' }
  });

  const piecewiseFunctions = await prisma.topic.findFirst({
    where: { slug: 'piecewise-functions-algebra2' }
  });

  const inverseFunctions = await prisma.topic.findFirst({
    where: { slug: 'inverse-functions-algebra2' }
  });

  if (!determinantsInverses || !circles || !parabolas || !piecewiseFunctions || !inverseFunctions) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Determinants and Inverses
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: determinantsInverses.id,
        question: 'Find the determinant: |2  3|\n                         |1  4|',
        solution: `Step 1: Use the determinant formula for 2×2 matrix:
For |a  b|, det = ad - bc
    |c  d|

Step 2: Identify values:
a = 2, b = 3, c = 1, d = 4

Step 3: Calculate:
det = (2)(4) - (3)(1)
    = 8 - 3
    = 5

Answer: 5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        question: 'Determine if the matrix is invertible: [1  2]\n                                        [2  4]',
        solution: `Step 1: Calculate the determinant:
det = (1)(4) - (2)(2)
    = 4 - 4
    = 0

Step 2: Apply invertibility criterion:
A matrix is invertible if and only if its determinant ≠ 0

Step 3: Conclusion:
Since det = 0, the matrix is NOT invertible (singular)

Answer: Not invertible`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        question: 'Find the inverse: [3  1]\n                    [5  2]',
        solution: `Step 1: Calculate the determinant:
det = (3)(2) - (1)(5)
    = 6 - 5
    = 1

Step 2: Use the inverse formula for 2×2:
A⁻¹ = (1/det)[d   -b]
              [-c   a]

Step 3: Identify values:
a = 3, b = 1, c = 5, d = 2

Step 4: Apply formula:
A⁻¹ = (1/1)[2   -1]
            [-5   3]

A⁻¹ = [2   -1]
      [-5   3]

Step 5: Verify (AA⁻¹ = I):
[3  1][2   -1] = [6-5   -3+3 ] = [1  0]
[5  2][-5   3]   [10-10  -5+6]   [0  1] ✓

Answer: [2   -1]
        [-5   3]`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        question: 'Solve using matrix inverse: 3x + y = 7\n                                5x + 2y = 12',
        solution: `Step 1: Write in matrix form AX = B:
[3  1][x] = [7 ]
[5  2][y]   [12]

Step 2: Find A⁻¹ (from previous problem):
A⁻¹ = [2   -1]
      [-5   3]

Step 3: Solve X = A⁻¹B:
[x] = [2   -1][7 ]
[y]   [-5   3][12]

Step 4: Calculate:
x = 2(7) + (-1)(12) = 14 - 12 = 2
y = -5(7) + 3(12) = -35 + 36 = 1

Step 5: Verify in original equations:
3(2) + 1 = 7 ✓
5(2) + 2(1) = 12 ✓

Answer: x = 2, y = 1`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        question: 'Find the determinant: |1  2  3|\n                         |0  4  5|\n                         |0  0  6|',
        solution: `Step 1: Recognize upper triangular matrix:
A matrix where all entries below the main diagonal are zero

Step 2: Use triangular matrix property:
The determinant of a triangular matrix is the product of diagonal elements

Step 3: Calculate:
det = (1)(4)(6) = 24

Step 4: General expansion verification (if needed):
Expand along first column:
det = 1|4  5| - 0 + 0
       |0  6|
    = 1(24 - 0)
    = 24 ✓

Answer: 24`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: determinantsInverses.id,
        front: 'What is the determinant formula for a 2×2 matrix?',
        back: 'For |a  b|, det = ad - bc\n    |c  d|',
        hint: 'ad - bc',
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        front: 'When is a matrix invertible?',
        back: 'A matrix is invertible if and only if its determinant is not zero (det ≠ 0).',
        hint: 'det ≠ 0',
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        front: 'What is the inverse formula for a 2×2 matrix?',
        back: 'For A = [a  b], A⁻¹ = (1/det)[d   -b]\n        [c  d]              [-c   a]',
        hint: 'Swap a and d, negate b and c, divide by det',
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        front: 'What is the identity matrix?',
        back: 'A square matrix with 1s on the main diagonal and 0s elsewhere. For 2×2: [1  0]\n                                                                     [0  1]',
        hint: '1s on diagonal, 0s elsewhere',
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        front: 'What does AA⁻¹ equal?',
        back: 'The identity matrix I. This is the defining property of a matrix inverse.',
        hint: 'Identity matrix',
        isPremium: false
      },
      {
        topicId: determinantsInverses.id,
        front: 'What is a singular matrix?',
        back: 'A matrix with determinant = 0, which means it has no inverse.',
        hint: 'det = 0, no inverse',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: determinants-inverses');

  // TOPIC 2: Circles (Conic Sections)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: circles.id,
        question: 'Write the equation of a circle with center (0, 0) and radius 5.',
        solution: `Step 1: Use standard form centered at origin:
x² + y² = r²

Step 2: Substitute r = 5:
x² + y² = 5²
x² + y² = 25

Answer: x² + y² = 25`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: circles.id,
        question: 'Identify the center and radius: (x - 2)² + (y + 3)² = 16',
        solution: `Step 1: Recall standard form:
(x - h)² + (y - k)² = r²
where (h, k) is the center and r is the radius

Step 2: Match to given equation:
(x - 2)² + (y - (-3))² = 4²

Step 3: Identify values:
h = 2, k = -3, r = 4

Answer: Center (2, -3), radius 4`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: circles.id,
        question: 'Write the equation in standard form: x² + y² - 6x + 4y - 12 = 0',
        solution: `Step 1: Group x and y terms:
(x² - 6x) + (y² + 4y) = 12

Step 2: Complete the square for x:
x² - 6x → (x - 3)² - 9

Step 3: Complete the square for y:
y² + 4y → (y + 2)² - 4

Step 4: Substitute:
(x - 3)² - 9 + (y + 2)² - 4 = 12

Step 5: Simplify:
(x - 3)² + (y + 2)² = 12 + 9 + 4
(x - 3)² + (y + 2)² = 25

Step 6: Identify:
Center (3, -2), radius 5

Answer: (x - 3)² + (y + 2)² = 25`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: circles.id,
        question: 'Find the equation of the circle with center (1, -2) passing through (4, 2).',
        solution: `Step 1: Find the radius using distance formula:
r = √[(x₂ - x₁)² + (y₂ - y₁)²]
r = √[(4 - 1)² + (2 - (-2))²]
r = √[3² + 4²]
r = √[9 + 16]
r = √25 = 5

Step 2: Write equation in standard form:
(x - h)² + (y - k)² = r²

Step 3: Substitute h = 1, k = -2, r = 5:
(x - 1)² + (y + 2)² = 25

Step 4: Verify point (4, 2) satisfies equation:
(4 - 1)² + (2 + 2)² = 9 + 16 = 25 ✓

Answer: (x - 1)² + (y + 2)² = 25`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: circles.id,
        question: 'Determine if the point (3, 4) is inside, on, or outside the circle x² + y² = 16.',
        solution: `Step 1: Identify circle properties:
Center (0, 0), radius r = 4

Step 2: Calculate distance from center to point:
d = √[(3 - 0)² + (4 - 0)²]
d = √[9 + 16]
d = √25 = 5

Step 3: Compare distance to radius:
d = 5, r = 4
Since d > r, point is OUTSIDE

Alternative method:
Step 4: Substitute point into equation:
3² + 4² = 9 + 16 = 25

Step 5: Compare to r²:
25 > 16, so point is OUTSIDE

Answer: Outside the circle`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: circles.id,
        front: 'What is the standard form of a circle equation?',
        back: '(x - h)² + (y - k)² = r², where (h, k) is the center and r is the radius.',
        hint: '(x - h)² + (y - k)² = r²',
        isPremium: false
      },
      {
        topicId: circles.id,
        front: 'What is the equation of a circle centered at the origin?',
        back: 'x² + y² = r², where r is the radius.',
        hint: 'x² + y² = r²',
        isPremium: false
      },
      {
        topicId: circles.id,
        front: 'How do you find the radius from the standard form?',
        back: 'Take the square root of the right side: r = √(right side)',
        hint: 'Square root of right side',
        isPremium: false
      },
      {
        topicId: circles.id,
        front: 'How do you complete the square for x² + bx?',
        back: 'Take half of b, square it, and add/subtract: (x + b/2)² - (b/2)²',
        hint: 'Half, then square',
        isPremium: false
      },
      {
        topicId: circles.id,
        front: 'How do you determine if a point is inside, on, or outside a circle?',
        back: 'Calculate distance d from center to point. If d < r: inside, d = r: on, d > r: outside.',
        hint: 'Compare distance to radius',
        isPremium: false
      },
      {
        topicId: circles.id,
        front: 'What is the general form of a circle equation?',
        back: 'x² + y² + Dx + Ey + F = 0. Convert to standard form by completing the square.',
        hint: 'Complete the square to convert',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: circles-algebra2');

  // TOPIC 3: Parabolas (Conic Sections)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: parabolas.id,
        question: 'Identify the vertex and axis of symmetry: y = (x - 3)² + 2',
        solution: `Step 1: Recognize vertex form:
y = (x - h)² + k
where (h, k) is the vertex

Step 2: Identify values:
h = 3, k = 2

Step 3: Vertex:
(3, 2)

Step 4: Axis of symmetry:
For vertical parabola: x = h
x = 3

Answer: Vertex (3, 2), axis of symmetry x = 3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: parabolas.id,
        question: 'Find the focus and directrix of y² = 8x.',
        solution: `Step 1: Recognize standard form:
y² = 4px (horizontal parabola opening right)

Step 2: Identify 4p:
4p = 8
p = 2

Step 3: Find focus:
For y² = 4px, focus is at (p, 0)
Focus: (2, 0)

Step 4: Find directrix:
For y² = 4px, directrix is x = -p
Directrix: x = -2

Answer: Focus (2, 0), directrix x = -2`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: parabolas.id,
        question: 'Convert to vertex form: y = x² - 6x + 5',
        solution: `Step 1: Complete the square:
y = x² - 6x + 5

Step 2: Take half of -6 and square it:
(-6/2)² = (-3)² = 9

Step 3: Add and subtract 9:
y = (x² - 6x + 9) - 9 + 5
y = (x - 3)² - 4

Step 4: Identify vertex:
Vertex form: y = (x - 3)² - 4
Vertex: (3, -4)

Answer: y = (x - 3)² - 4`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: parabolas.id,
        question: 'Write the equation of a parabola with vertex (2, 1) and focus (2, 3).',
        solution: `Step 1: Determine orientation:
Vertex (2, 1), Focus (2, 3)
Same x-coordinate → vertical parabola

Step 2: Find p (distance from vertex to focus):
p = 3 - 1 = 2

Step 3: Use vertex form:
(x - h)² = 4p(y - k)
where (h, k) is the vertex

Step 4: Substitute h = 2, k = 1, p = 2:
(x - 2)² = 4(2)(y - 1)
(x - 2)² = 8(y - 1)

Step 5: Find directrix:
y = k - p = 1 - 2 = -1

Answer: (x - 2)² = 8(y - 1)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: parabolas.id,
        question: 'A satellite dish is shaped like a paraboloid. If the dish is 8 feet across and 2 feet deep, where should the receiver be placed?',
        solution: `Step 1: Set up coordinate system:
Place vertex at origin (0, 0)
Parabola opens upward: x² = 4py

Step 2: Identify a point on the parabola:
At the edge: x = 4 (half of 8), y = 2
Point: (4, 2)

Step 3: Substitute to find p:
4² = 4p(2)
16 = 8p
p = 2

Step 4: Find the focus:
Focus is at (0, p) = (0, 2)

Step 5: Interpret:
The receiver should be at the focus, 2 feet above the vertex

Answer: 2 feet from the bottom, at the center`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: parabolas.id,
        front: 'What is the vertex form of a parabola equation?',
        back: 'Vertical: y = a(x - h)² + k or Horizontal: x = a(y - k)² + h, where (h, k) is the vertex.',
        hint: 'y = a(x - h)² + k',
        isPremium: false
      },
      {
        topicId: parabolas.id,
        front: 'What is the focus-directrix definition of a parabola?',
        back: 'A parabola is the set of all points equidistant from a fixed point (focus) and a fixed line (directrix).',
        hint: 'Equidistant from focus and directrix',
        isPremium: false
      },
      {
        topicId: parabolas.id,
        front: 'For y² = 4px, where is the focus and directrix?',
        back: 'Focus: (p, 0), Directrix: x = -p. Opens right if p > 0, left if p < 0.',
        hint: 'Focus (p, 0), directrix x = -p',
        isPremium: false
      },
      {
        topicId: parabolas.id,
        front: 'For x² = 4py, where is the focus and directrix?',
        back: 'Focus: (0, p), Directrix: y = -p. Opens up if p > 0, down if p < 0.',
        hint: 'Focus (0, p), directrix y = -p',
        isPremium: false
      },
      {
        topicId: parabolas.id,
        front: 'What is the axis of symmetry of a parabola?',
        back: 'The line through the vertex and focus. For y = (x - h)² + k, it\'s x = h.',
        hint: 'Line through vertex and focus',
        isPremium: false
      },
      {
        topicId: parabolas.id,
        front: 'How does the value of a in y = a(x - h)² + k affect the parabola?',
        back: 'If |a| > 1: narrower, if 0 < |a| < 1: wider, if a < 0: opens down.',
        hint: 'Controls width and direction',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: parabolas-conic-algebra2');

  // TOPIC 4: Piecewise Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: piecewiseFunctions.id,
        question: 'Evaluate f(3) where f(x) = { x + 2,  if x < 0\n                                       2x - 1, if x ≥ 0',
        solution: `Step 1: Determine which piece to use:
We need to evaluate f(3)
Is 3 < 0? No
Is 3 ≥ 0? Yes

Step 2: Use the appropriate formula:
For x ≥ 0, use f(x) = 2x - 1

Step 3: Substitute x = 3:
f(3) = 2(3) - 1
     = 6 - 1
     = 5

Answer: f(3) = 5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        question: 'Evaluate f(-2) and f(0) where f(x) = { x²,     if x < 0\n                                                x + 1,  if x ≥ 0',
        solution: `Step 1: Evaluate f(-2):
Is -2 < 0? Yes
Use f(x) = x²
f(-2) = (-2)² = 4

Step 2: Evaluate f(0):
Is 0 < 0? No
Is 0 ≥ 0? Yes
Use f(x) = x + 1
f(0) = 0 + 1 = 1

Answer: f(-2) = 4, f(0) = 1`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        question: 'Graph and identify the domain and range: f(x) = { -x,    if x < 1\n                                                         x - 2, if x ≥ 1',
        solution: `Step 1: Graph first piece (x < 1):
f(x) = -x for x < 1
This is a line with slope -1
At x = 0: f(0) = 0
At x = 1: f(1) = -1 (open circle, not included)

Step 2: Graph second piece (x ≥ 1):
f(x) = x - 2 for x ≥ 1
This is a line with slope 1
At x = 1: f(1) = -1 (closed circle, included)
At x = 3: f(3) = 1

Step 3: Identify domain:
All real numbers (both pieces cover all x values)
Domain: (-∞, ∞)

Step 4: Identify range:
First piece goes from 1 down (as x approaches 1 from left)
Second piece goes from -1 up
Range: (-∞, ∞)

Answer: Domain: all real numbers, Range: all real numbers`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        question: 'Write a piecewise function for: y = |x - 2|',
        solution: `Step 1: Recall absolute value definition:
|a| = { a,   if a ≥ 0
      {-a,  if a < 0

Step 2: Determine when (x - 2) ≥ 0:
x - 2 ≥ 0
x ≥ 2

Step 3: Determine when (x - 2) < 0:
x - 2 < 0
x < 2

Step 4: Write piecewise function:
For x ≥ 2: |x - 2| = x - 2
For x < 2: |x - 2| = -(x - 2) = -x + 2

Step 5: Write in standard form:
f(x) = { -x + 2,  if x < 2
       { x - 2,   if x ≥ 2

Answer: f(x) = { -x + 2,  if x < 2
               { x - 2,   if x ≥ 2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        question: 'A parking garage charges $5 for the first hour, $3 for each additional hour up to 5 hours, and $20 flat rate for over 5 hours. Write and use a piecewise function for the cost.',
        solution: `Step 1: Define the function C(t) for time t hours:
For 0 < t ≤ 1: C(t) = 5
For 1 < t ≤ 5: C(t) = 5 + 3(t - 1) = 3t + 2
For t > 5: C(t) = 20

Step 2: Write complete piecewise function:
C(t) = { 5,      if 0 < t ≤ 1
       { 3t + 2, if 1 < t ≤ 5
       { 20,     if t > 5

Step 3: Calculate cost for 3.5 hours:
3.5 is in range 1 < t ≤ 5
C(3.5) = 3(3.5) + 2 = 10.5 + 2 = 12.5

Step 4: Calculate cost for 6 hours:
6 > 5
C(6) = 20

Answer: C(t) = { 5,      if 0 < t ≤ 1
               { 3t + 2, if 1 < t ≤ 5
               { 20,     if t > 5
        C(3.5) = $12.50, C(6) = $20`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: piecewiseFunctions.id,
        front: 'What is a piecewise function?',
        back: 'A function defined by different formulas for different parts of the domain.',
        hint: 'Different formulas for different parts',
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        front: 'How do you evaluate a piecewise function?',
        back: 'Determine which condition the input satisfies, then use the corresponding formula.',
        hint: 'Check conditions, use correct formula',
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        front: 'What does an open circle mean on a piecewise graph?',
        back: 'The point is NOT included in that piece of the function.',
        hint: 'Not included',
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        front: 'What does a closed circle mean on a piecewise graph?',
        back: 'The point IS included in that piece of the function.',
        hint: 'Included',
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        front: 'How do you write |x| as a piecewise function?',
        back: 'f(x) = { x,  if x ≥ 0\n       {-x,  if x < 0',
        hint: 'Positive stays, negative flips',
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        front: 'What is the greatest integer function (floor function)?',
        back: 'f(x) = ⌊x⌋ rounds down to the nearest integer. Example: ⌊3.7⌋ = 3, ⌊-1.2⌋ = -2.',
        hint: 'Round down to nearest integer',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: piecewise-functions-algebra2');

  // TOPIC 5: Inverse Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inverseFunctions.id,
        question: 'Find the inverse: f(x) = 2x + 3',
        solution: `Step 1: Replace f(x) with y:
y = 2x + 3

Step 2: Swap x and y:
x = 2y + 3

Step 3: Solve for y:
x - 3 = 2y
y = (x - 3)/2

Step 4: Replace y with f⁻¹(x):
f⁻¹(x) = (x - 3)/2

Step 5: Verify (check f(f⁻¹(x)) = x):
f(f⁻¹(x)) = 2((x - 3)/2) + 3 = (x - 3) + 3 = x ✓

Answer: f⁻¹(x) = (x - 3)/2`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        question: 'Verify that f(x) = x³ and g(x) = ∛x are inverse functions.',
        solution: `Step 1: Check f(g(x)) = x:
f(g(x)) = f(∛x)
        = (∛x)³
        = x ✓

Step 2: Check g(f(x)) = x:
g(f(x)) = g(x³)
        = ∛(x³)
        = x ✓

Step 3: Conclusion:
Since both compositions equal x, f and g are inverse functions

Answer: Yes, they are inverse functions`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        question: 'Find the inverse: f(x) = (x + 1)/(x - 2)',
        solution: `Step 1: Replace f(x) with y:
y = (x + 1)/(x - 2)

Step 2: Swap x and y:
x = (y + 1)/(y - 2)

Step 3: Solve for y (multiply both sides by (y - 2)):
x(y - 2) = y + 1
xy - 2x = y + 1

Step 4: Collect y terms:
xy - y = 2x + 1
y(x - 1) = 2x + 1

Step 5: Solve for y:
y = (2x + 1)/(x - 1)

Step 6: Write inverse:
f⁻¹(x) = (2x + 1)/(x - 1)

Answer: f⁻¹(x) = (2x + 1)/(x - 1)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        question: 'Find the inverse and state the domain and range: f(x) = √(x - 3)',
        solution: `Step 1: Replace f(x) with y:
y = √(x - 3)

Step 2: Identify domain and range of f:
Domain of f: x ≥ 3
Range of f: y ≥ 0

Step 3: Swap x and y:
x = √(y - 3)

Step 4: Solve for y:
x² = y - 3
y = x² + 3

Step 5: Write inverse:
f⁻¹(x) = x² + 3

Step 6: Domain and range of f⁻¹:
Domain of f⁻¹ = Range of f: x ≥ 0
Range of f⁻¹ = Domain of f: y ≥ 3

Answer: f⁻¹(x) = x² + 3, Domain: x ≥ 0, Range: y ≥ 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        question: 'Determine if f(x) = x² has an inverse function. If not, restrict the domain so it does.',
        solution: `Step 1: Apply horizontal line test:
Does any horizontal line intersect y = x² more than once?
Yes - for example, y = 4 intersects at x = 2 and x = -2

Step 2: Conclusion about inverse:
f(x) = x² does NOT have an inverse (not one-to-one)

Step 3: Restrict domain to make it one-to-one:
Restrict to x ≥ 0 (right half)
OR restrict to x ≤ 0 (left half)

Step 4: Find inverse with restriction x ≥ 0:
y = x², x ≥ 0
x = y², y ≥ 0
y = √x

Step 5: Verify:
f⁻¹(x) = √x, Domain: x ≥ 0

Answer: No inverse without restriction. 
        With x ≥ 0: f⁻¹(x) = √x`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inverseFunctions.id,
        front: 'What is an inverse function?',
        back: 'A function f⁻¹ that "undoes" f. If f(a) = b, then f⁻¹(b) = a.',
        hint: 'Undoes the original function',
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        front: 'How do you find an inverse function algebraically?',
        back: 'Replace f(x) with y, swap x and y, solve for y, replace y with f⁻¹(x).',
        hint: 'Swap x and y, then solve',
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        front: 'What is the relationship between the domain and range of inverse functions?',
        back: 'Domain of f = Range of f⁻¹, and Range of f = Domain of f⁻¹.',
        hint: 'Domain and range swap',
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        front: 'How do you verify two functions are inverses?',
        back: 'Show that f(g(x)) = x AND g(f(x)) = x.',
        hint: 'Both compositions equal x',
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        front: 'What is the horizontal line test?',
        back: 'A function has an inverse if and only if every horizontal line intersects the graph at most once.',
        hint: 'One-to-one test',
        isPremium: false
      },
      {
        topicId: inverseFunctions.id,
        front: 'What is the graphical relationship between f and f⁻¹?',
        back: 'The graphs are reflections of each other across the line y = x.',
        hint: 'Reflect across y = x',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: inverse-functions-algebra2');

  console.log('\n✨🎉 ALGEBRA 2 COMPLETE! Successfully added problems and flashcards for all 5 final topics! 🎉✨');
  
  await prisma.$disconnect();
}

main();
