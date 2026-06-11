import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Geometry topics - Batch 6 (FINAL 6 topics)...');

  // Find the topics
  const areaTrianglesQuadrilaterals = await prisma.topic.findFirst({
    where: { slug: 'area-triangles-quadrilaterals' }
  });

  const slopeEquationsLines = await prisma.topic.findFirst({
    where: { slug: 'slope-equations-lines-geometry' }
  });

  const distanceMidpoint = await prisma.topic.findFirst({
    where: { slug: 'distance-midpoint-formulas' }
  });

  const equationsCircles = await prisma.topic.findFirst({
    where: { slug: 'equations-of-circles' }
  });

  const volumeSolids = await prisma.topic.findFirst({
    where: { slug: 'volume-of-solids' }
  });

  const surfaceArea = await prisma.topic.findFirst({
    where: { slug: 'surface-area-geometry' }
  });

  if (!areaTrianglesQuadrilaterals || !slopeEquationsLines || !distanceMidpoint || 
      !equationsCircles || !volumeSolids || !surfaceArea) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Area of Triangles and Quadrilaterals
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: areaTrianglesQuadrilaterals.id,
        question: 'Find the area of a triangle with base 12 cm and height 8 cm.',
        solution: `Step 1: Recall the triangle area formula:
Area = (1/2) × base × height

Step 2: Identify the given values:
Base = 12 cm
Height = 8 cm

Step 3: Substitute into the formula:
Area = (1/2) × 12 × 8
Area = (1/2) × 96
Area = 48 cm²

Answer: The area is 48 cm²`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        question: 'A parallelogram has a base of 15 m and a height of 9 m. Find its area.',
        solution: `Step 1: Recall the parallelogram area formula:
Area = base × height

Step 2: Identify the values:
Base = 15 m
Height = 9 m (perpendicular distance)

Step 3: Calculate:
Area = 15 × 9
Area = 135 m²

Step 4: Note:
The height must be perpendicular to the base
It's NOT the length of the slanted side

Answer: The area is 135 m²`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        question: 'A trapezoid has bases of 10 cm and 16 cm, and a height of 7 cm. Find its area.',
        solution: `Step 1: Recall the trapezoid area formula:
Area = (1/2) × (base₁ + base₂) × height

Step 2: Identify the values:
Base₁ = 10 cm
Base₂ = 16 cm
Height = 7 cm

Step 3: Substitute:
Area = (1/2) × (10 + 16) × 7
Area = (1/2) × 26 × 7
Area = (1/2) × 182
Area = 91 cm²

Step 4: Alternative thinking:
Average of bases = (10 + 16)/2 = 13 cm
Area = average × height = 13 × 7 = 91 cm²

Answer: The area is 91 cm²`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        question: 'Find the area of a rhombus with diagonals of length 14 cm and 10 cm.',
        solution: `Step 1: Recall the rhombus area formula:
Area = (1/2) × d₁ × d₂
where d₁ and d₂ are the diagonals

Step 2: Identify the diagonals:
d₁ = 14 cm
d₂ = 10 cm

Step 3: Calculate:
Area = (1/2) × 14 × 10
Area = (1/2) × 140
Area = 70 cm²

Step 4: Why this formula works:
The diagonals of a rhombus are perpendicular
They divide the rhombus into 4 right triangles
Total area = sum of the 4 triangles

Answer: The area is 70 cm²`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        question: 'A triangle has sides of length 13, 14, and 15. Find its area using Heron\'s formula.',
        solution: `Step 1: Recall Heron's formula:
Area = √[s(s-a)(s-b)(s-c)]
where s is the semi-perimeter: s = (a+b+c)/2

Step 2: Find the semi-perimeter:
a = 13, b = 14, c = 15
s = (13 + 14 + 15)/2
s = 42/2
s = 21

Step 3: Calculate (s - a), (s - b), (s - c):
s - a = 21 - 13 = 8
s - b = 21 - 14 = 7
s - c = 21 - 15 = 6

Step 4: Substitute into Heron's formula:
Area = √[21 × 8 × 7 × 6]
Area = √[21 × 8 × 7 × 6]
Area = √7056

Step 5: Simplify the square root:
7056 = 16 × 441 = 16 × 21²
√7056 = 4 × 21 = 84

Step 6: Verify the calculation:
21 × 8 = 168
168 × 7 = 1176
1176 × 6 = 7056
√7056 = 84 ✓

Answer: The area is 84 square units`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: areaTrianglesQuadrilaterals.id,
        front: 'What is the formula for the area of a triangle?',
        back: 'Area = (1/2) × base × height, where height is perpendicular to the base.',
        hint: '(1/2) × b × h',
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        front: 'What is the formula for the area of a parallelogram?',
        back: 'Area = base × height, where height is the perpendicular distance between parallel sides.',
        hint: 'b × h',
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        front: 'What is the formula for the area of a trapezoid?',
        back: 'Area = (1/2) × (base₁ + base₂) × height, where the bases are parallel sides.',
        hint: '(1/2) × (b₁ + b₂) × h',
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        front: 'What is the formula for the area of a rhombus?',
        back: 'Area = (1/2) × d₁ × d₂, where d₁ and d₂ are the diagonals.',
        hint: '(1/2) × diagonal₁ × diagonal₂',
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        front: 'What is Heron\'s formula?',
        back: 'Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2 is the semi-perimeter. Used when you know all three side lengths.',
        hint: 'For triangles with known sides',
        isPremium: false
      },
      {
        topicId: areaTrianglesQuadrilaterals.id,
        front: 'What is the area of a square with side s?',
        back: 'Area = s² (side squared)',
        hint: 's²',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: area-triangles-quadrilaterals');

  // TOPIC 2: Slope and Equations of Lines
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: slopeEquationsLines.id,
        question: 'Find the slope of the line passing through points (2, 5) and (6, 13).',
        solution: `Step 1: Recall the slope formula:
m = (y₂ - y₁)/(x₂ - x₁)

Step 2: Identify the coordinates:
Point 1: (x₁, y₁) = (2, 5)
Point 2: (x₂, y₂) = (6, 13)

Step 3: Substitute into the formula:
m = (13 - 5)/(6 - 2)
m = 8/4
m = 2

Answer: The slope is 2`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        question: 'Write the equation of a line with slope 3 passing through point (4, 7).',
        solution: `Step 1: Use point-slope form:
y - y₁ = m(x - x₁)

Step 2: Substitute m = 3 and point (4, 7):
y - 7 = 3(x - 4)

Step 3: Convert to slope-intercept form:
y - 7 = 3x - 12
y = 3x - 12 + 7
y = 3x - 5

Step 4: Verify with the given point:
When x = 4: y = 3(4) - 5 = 12 - 5 = 7 ✓

Answer: y = 3x - 5`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        question: 'Find the equation of the line passing through points (-1, 4) and (3, -2).',
        solution: `Step 1: Find the slope:
m = (y₂ - y₁)/(x₂ - x₁)
m = (-2 - 4)/(3 - (-1))
m = -6/4
m = -3/2

Step 2: Use point-slope form with point (-1, 4):
y - 4 = (-3/2)(x - (-1))
y - 4 = (-3/2)(x + 1)

Step 3: Convert to slope-intercept form:
y - 4 = (-3/2)x - 3/2
y = (-3/2)x - 3/2 + 4
y = (-3/2)x - 3/2 + 8/2
y = (-3/2)x + 5/2

Step 4: Verify with both points:
Point (-1, 4): y = (-3/2)(-1) + 5/2 = 3/2 + 5/2 = 8/2 = 4 ✓
Point (3, -2): y = (-3/2)(3) + 5/2 = -9/2 + 5/2 = -4/2 = -2 ✓

Answer: y = (-3/2)x + 5/2 or y = -1.5x + 2.5`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        question: 'Line L is perpendicular to the line y = 2x + 3 and passes through point (4, 1). Find the equation of line L.',
        solution: `Step 1: Find the slope of the given line:
y = 2x + 3 has slope m₁ = 2

Step 2: Find the perpendicular slope:
Perpendicular slopes are negative reciprocals
m₂ = -1/m₁ = -1/2

Step 3: Use point-slope form:
y - 1 = (-1/2)(x - 4)

Step 4: Simplify:
y - 1 = (-1/2)x + 2
y = (-1/2)x + 2 + 1
y = (-1/2)x + 3

Step 5: Verify perpendicularity:
Product of slopes: 2 × (-1/2) = -1 ✓
(Perpendicular lines have slopes whose product is -1)

Answer: y = (-1/2)x + 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        question: 'Three points A(1, 2), B(4, k), and C(7, 14) are collinear (on the same line). Find the value of k.',
        solution: `Step 1: Understand collinearity:
If three points are collinear, they all lie on the same line
Therefore, the slope between any two pairs must be equal

Step 2: Find slope from A to C:
m_AC = (14 - 2)/(7 - 1)
m_AC = 12/6
m_AC = 2

Step 3: Find slope from A to B:
m_AB = (k - 2)/(4 - 1)
m_AB = (k - 2)/3

Step 4: Set the slopes equal:
m_AB = m_AC
(k - 2)/3 = 2

Step 5: Solve for k:
k - 2 = 6
k = 8

Step 6: Verify using slope from B to C:
m_BC = (14 - 8)/(7 - 4) = 6/3 = 2 ✓
All three pairs have slope 2, confirming collinearity

Step 7: Find the equation (optional):
Using A(1, 2) and slope 2:
y - 2 = 2(x - 1)
y = 2x

Check all points:
A(1, 2): 2 = 2(1) ✓
B(4, 8): 8 = 2(4) ✓
C(7, 14): 14 = 2(7) ✓

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
        topicId: slopeEquationsLines.id,
        front: 'What is the slope formula?',
        back: 'm = (y₂ - y₁)/(x₂ - x₁), the change in y divided by the change in x (rise over run).',
        hint: 'Rise over run',
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        front: 'What is point-slope form?',
        back: 'y - y₁ = m(x - x₁), where m is the slope and (x₁, y₁) is a point on the line.',
        hint: 'y - y₁ = m(x - x₁)',
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        front: 'What is slope-intercept form?',
        back: 'y = mx + b, where m is the slope and b is the y-intercept.',
        hint: 'y = mx + b',
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        front: 'What is the relationship between slopes of perpendicular lines?',
        back: 'Their slopes are negative reciprocals. If one slope is m, the other is -1/m. Their product is -1.',
        hint: 'Negative reciprocals, product = -1',
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        front: 'What is the relationship between slopes of parallel lines?',
        back: 'Parallel lines have equal slopes.',
        hint: 'Same slope',
        isPremium: false
      },
      {
        topicId: slopeEquationsLines.id,
        front: 'What is the slope of a horizontal line?',
        back: 'Zero (0). Horizontal lines have the form y = c.',
        hint: 'No rise, slope = 0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: slope-equations-lines-geometry');

  // TOPIC 3: Distance and Midpoint Formulas
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: distanceMidpoint.id,
        question: 'Find the distance between points A(3, 4) and B(7, 1).',
        solution: `Step 1: Recall the distance formula:
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

Step 2: Identify the coordinates:
Point A: (x₁, y₁) = (3, 4)
Point B: (x₂, y₂) = (7, 1)

Step 3: Substitute into the formula:
d = √[(7 - 3)² + (1 - 4)²]
d = √[4² + (-3)²]
d = √[16 + 9]
d = √25
d = 5

Answer: The distance is 5 units`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        question: 'Find the midpoint of the segment connecting (-2, 5) and (6, -3).',
        solution: `Step 1: Recall the midpoint formula:
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

Step 2: Identify the coordinates:
Point 1: (x₁, y₁) = (-2, 5)
Point 2: (x₂, y₂) = (6, -3)

Step 3: Calculate x-coordinate of midpoint:
x_m = (-2 + 6)/2 = 4/2 = 2

Step 4: Calculate y-coordinate of midpoint:
y_m = (5 + (-3))/2 = 2/2 = 1

Step 5: Write the midpoint:
M = (2, 1)

Answer: The midpoint is (2, 1)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        question: 'Point M(4, 7) is the midpoint of segment AB. If A is at (2, 3), find the coordinates of point B.',
        solution: `Step 1: Recall the midpoint formula:
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

Step 2: Set up equations using given information:
M(4, 7) and A(2, 3)
4 = (2 + x_B)/2
7 = (3 + y_B)/2

Step 3: Solve for x-coordinate of B:
4 = (2 + x_B)/2
8 = 2 + x_B
x_B = 6

Step 4: Solve for y-coordinate of B:
7 = (3 + y_B)/2
14 = 3 + y_B
y_B = 11

Step 5: Verify:
Midpoint = ((2 + 6)/2, (3 + 11)/2) = (8/2, 14/2) = (4, 7) ✓

Answer: Point B is at (6, 11)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        question: 'A circle has center C(2, -1) and passes through point P(5, 3). Find the radius of the circle.',
        solution: `Step 1: Understand the problem:
The radius is the distance from center to any point on the circle
So radius = distance from C to P

Step 2: Use the distance formula:
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

Step 3: Substitute C(2, -1) and P(5, 3):
r = √[(5 - 2)² + (3 - (-1))²]
r = √[3² + 4²]
r = √[9 + 16]
r = √25
r = 5

Step 4: Recognize the Pythagorean triple:
This is a 3-4-5 right triangle

Answer: The radius is 5 units`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        question: 'Points A(-3, 2), B(5, 8), and C(x, y) form a right triangle with the right angle at B. If C is on the x-axis, find the coordinates of C.',
        solution: `Step 1: Understand the constraints:
- Right angle at B
- C is on the x-axis, so y-coordinate = 0: C(x, 0)
- Need to find x

Step 2: Use perpendicular slopes:
If angle at B is 90°, then AB ⊥ BC
Slopes must multiply to -1

Step 3: Find slope of AB:
m_AB = (8 - 2)/(5 - (-3))
m_AB = 6/8 = 3/4

Step 4: Find slope of BC:
m_BC = (0 - 8)/(x - 5)
m_BC = -8/(x - 5)

Step 5: Set up perpendicularity condition:
m_AB × m_BC = -1
(3/4) × (-8/(x - 5)) = -1

Step 6: Solve for x:
(3/4) × (-8)/(x - 5) = -1
-24/(4(x - 5)) = -1
-24 = -4(x - 5)
-24 = -4x + 20
-44 = -4x
x = 11

Step 7: Verify the perpendicularity:
m_AB = 3/4
m_BC = -8/(11 - 5) = -8/6 = -4/3
Product: (3/4) × (-4/3) = -12/12 = -1 ✓

Answer: Point C is at (11, 0)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: distanceMidpoint.id,
        front: 'What is the distance formula?',
        back: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²], derived from the Pythagorean theorem.',
        hint: 'Pythagorean theorem in coordinate plane',
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        front: 'What is the midpoint formula?',
        back: 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2), the average of the coordinates.',
        hint: 'Average of x\'s and y\'s',
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        front: 'How do you find an endpoint if you know the midpoint and other endpoint?',
        back: 'Use: x₂ = 2x_m - x₁ and y₂ = 2y_m - y₁, where (x_m, y_m) is the midpoint.',
        hint: 'Double the midpoint, subtract known endpoint',
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        front: 'What is the distance from (0, 0) to (a, b)?',
        back: 'd = √(a² + b²), since x₁ = 0 and y₁ = 0.',
        hint: 'From origin: √(x² + y²)',
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        front: 'If two points have the same x-coordinate, how do you find the distance?',
        back: 'The distance is |y₂ - y₁| (the absolute difference of the y-coordinates). They form a vertical line.',
        hint: 'Vertical line: difference in y',
        isPremium: false
      },
      {
        topicId: distanceMidpoint.id,
        front: 'If two points have the same y-coordinate, how do you find the distance?',
        back: 'The distance is |x₂ - x₁| (the absolute difference of the x-coordinates). They form a horizontal line.',
        hint: 'Horizontal line: difference in x',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: distance-midpoint-formulas');

  // TOPIC 4: Equations of Circles
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: equationsCircles.id,
        question: 'Write the equation of a circle with center (3, -2) and radius 5.',
        solution: `Step 1: Recall the standard form of a circle:
(x - h)² + (y - k)² = r²
where (h, k) is the center and r is the radius

Step 2: Identify the values:
Center: (h, k) = (3, -2)
Radius: r = 5

Step 3: Substitute into the formula:
(x - 3)² + (y - (-2))² = 5²
(x - 3)² + (y + 2)² = 25

Answer: (x - 3)² + (y + 2)² = 25`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        question: 'Find the center and radius of the circle: (x + 4)² + (y - 1)² = 36',
        solution: `Step 1: Recall standard form:
(x - h)² + (y - k)² = r²

Step 2: Rewrite the equation to match standard form:
(x + 4)² + (y - 1)² = 36
(x - (-4))² + (y - 1)² = 6²

Step 3: Identify h, k, and r:
h = -4 (note: x + 4 = x - (-4))
k = 1
r² = 36, so r = 6

Step 4: State the center and radius:
Center: (-4, 1)
Radius: 6

Answer: Center (-4, 1), radius 6`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        question: 'Find the equation of a circle with center (2, 5) that passes through point (6, 8).',
        solution: `Step 1: Find the radius using distance formula:
The radius is the distance from center to the point
r = √[(6 - 2)² + (8 - 5)²]
r = √[4² + 3²]
r = √[16 + 9]
r = √25
r = 5

Step 2: Write the equation:
(x - 2)² + (y - 5)² = 5²
(x - 2)² + (y - 5)² = 25

Step 3: Verify the point is on the circle:
(6 - 2)² + (8 - 5)² = 4² + 3² = 16 + 9 = 25 ✓

Answer: (x - 2)² + (y - 5)² = 25`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        question: 'Convert the equation x² + y² - 6x + 4y - 12 = 0 to standard form and find the center and radius.',
        solution: `Step 1: Group x terms and y terms:
(x² - 6x) + (y² + 4y) = 12

Step 2: Complete the square for x:
x² - 6x → add (6/2)² = 9
(x² - 6x + 9) = (x - 3)²

Step 3: Complete the square for y:
y² + 4y → add (4/2)² = 4
(y² + 4y + 4) = (y + 2)²

Step 4: Add the same values to the right side:
(x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4
(x - 3)² + (y + 2)² = 25

Step 5: Identify center and radius:
Center: (3, -2)
Radius: √25 = 5

Answer: Standard form: (x - 3)² + (y + 2)² = 25
        Center: (3, -2), Radius: 5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        question: 'A circle passes through points A(1, 2), B(5, 4), and C(3, 6). Find the equation of the circle.',
        solution: `Step 1: Use general form:
x² + y² + Dx + Ey + F = 0

Step 2: Substitute point A(1, 2):
1² + 2² + D(1) + E(2) + F = 0
1 + 4 + D + 2E + F = 0
D + 2E + F = -5 ... equation (1)

Step 3: Substitute point B(5, 4):
5² + 4² + D(5) + E(4) + F = 0
25 + 16 + 5D + 4E + F = 0
5D + 4E + F = -41 ... equation (2)

Step 4: Substitute point C(3, 6):
3² + 6² + D(3) + E(6) + F = 0
9 + 36 + 3D + 6E + F = 0
3D + 6E + F = -45 ... equation (3)

Step 5: Solve the system (subtract equations):
From (2) - (1): 4D + 2E = -36 → 2D + E = -18 ... (4)
From (3) - (1): 2D + 4E = -40 → D + 2E = -20 ... (5)

Step 6: Solve equations (4) and (5):
From (4): E = -18 - 2D
Substitute into (5): D + 2(-18 - 2D) = -20
D - 36 - 4D = -20
-3D = 16
D = -16/3

Then: E = -18 - 2(-16/3) = -18 + 32/3 = -54/3 + 32/3 = -22/3

Step 7: Find F from equation (1):
D + 2E + F = -5
-16/3 + 2(-22/3) + F = -5
-16/3 - 44/3 + F = -5
-60/3 + F = -5
-20 + F = -5
F = 15

Step 8: Write the equation:
x² + y² - (16/3)x - (22/3)y + 15 = 0

Multiply by 3:
3x² + 3y² - 16x - 22y + 45 = 0

Step 9: Convert to standard form (complete the square):
3(x² - 16x/3) + 3(y² - 22y/3) = -45
x² - (16/3)x + y² - (22/3)y = -15

Complete squares:
(x - 8/3)² + (y - 11/3)² = (8/3)² + (11/3)² - 15
= 64/9 + 121/9 - 135/9
= 50/9

Center: (8/3, 11/3)
Radius: √(50/9) = 5√2/3

Answer: 3x² + 3y² - 16x - 22y + 45 = 0
        Or: (x - 8/3)² + (y - 11/3)² = 50/9`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: equationsCircles.id,
        front: 'What is the standard form equation of a circle?',
        back: '(x - h)² + (y - k)² = r², where (h, k) is the center and r is the radius.',
        hint: '(x - h)² + (y - k)² = r²',
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        front: 'What is the equation of a circle centered at the origin with radius r?',
        back: 'x² + y² = r² (since h = 0 and k = 0)',
        hint: 'Center at origin: x² + y² = r²',
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        front: 'What is the general form of a circle equation?',
        back: 'x² + y² + Dx + Ey + F = 0',
        hint: 'Expanded form with D, E, F',
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        front: 'How do you convert from general form to standard form?',
        back: 'Complete the square for both x and y terms. Group x terms, group y terms, then add (b/2)² for each.',
        hint: 'Complete the square',
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        front: 'In (x - h)² + (y - k)² = r², what if h or k is negative?',
        back: 'If the equation is (x + 3)², then h = -3 (center x-coordinate is -3). Watch the signs carefully!',
        hint: 'x + a = x - (-a), so h = -a',
        isPremium: false
      },
      {
        topicId: equationsCircles.id,
        front: 'How do you find the radius if you know the center and a point on the circle?',
        back: 'Use the distance formula: r = √[(x - h)² + (y - k)²]',
        hint: 'Distance from center to point',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: equations-of-circles');

  // TOPIC 5: Volume of Solids
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: volumeSolids.id,
        question: 'Find the volume of a rectangular prism with length 8 cm, width 5 cm, and height 3 cm.',
        solution: `Step 1: Recall the volume formula:
Volume = length × width × height

Step 2: Substitute the values:
V = 8 × 5 × 3
V = 40 × 3
V = 120 cm³

Answer: The volume is 120 cm³`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        question: 'A cylinder has a radius of 4 cm and a height of 10 cm. Find its volume.',
        solution: `Step 1: Recall the cylinder volume formula:
V = πr²h

Step 2: Identify the values:
Radius r = 4 cm
Height h = 10 cm

Step 3: Substitute:
V = π(4)²(10)
V = π(16)(10)
V = 160π cm³

Step 4: Approximate (optional):
V ≈ 160 × 3.14159 ≈ 502.65 cm³

Answer: Volume = 160π cm³ (≈ 502.65 cm³)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        question: 'Find the volume of a cone with radius 6 m and height 8 m.',
        solution: `Step 1: Recall the cone volume formula:
V = (1/3)πr²h

Step 2: Identify the values:
Radius r = 6 m
Height h = 8 m

Step 3: Substitute:
V = (1/3)π(6)²(8)
V = (1/3)π(36)(8)
V = (1/3)(288π)
V = 96π m³

Step 4: Approximate:
V ≈ 96 × 3.14159 ≈ 301.59 m³

Step 5: Note:
Cone volume is 1/3 of cylinder volume with same base and height

Answer: Volume = 96π m³ (≈ 301.59 m³)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        question: 'A sphere has a radius of 9 cm. Find its volume.',
        solution: `Step 1: Recall the sphere volume formula:
V = (4/3)πr³

Step 2: Substitute r = 9:
V = (4/3)π(9)³
V = (4/3)π(729)
V = (4 × 729π)/3
V = 2916π/3
V = 972π cm³

Step 3: Approximate:
V ≈ 972 × 3.14159 ≈ 3053.63 cm³

Answer: Volume = 972π cm³ (≈ 3053.63 cm³)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        question: 'A rectangular swimming pool is 25 m long, 10 m wide, and has an average depth of 2 m. If water costs $3 per cubic meter, how much does it cost to fill the pool?',
        solution: `Step 1: Find the volume of the pool:
V = length × width × depth
V = 25 × 10 × 2
V = 500 m³

Step 2: Calculate the cost:
Cost = Volume × Price per m³
Cost = 500 × $3
Cost = $1500

Step 3: Understand the context:
The pool holds 500 cubic meters of water
At $3 per cubic meter, total cost is $1500

Answer: It costs $1500 to fill the pool`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: volumeSolids.id,
        front: 'What is the formula for the volume of a rectangular prism (box)?',
        back: 'V = length × width × height (or V = lwh)',
        hint: 'V = l × w × h',
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        front: 'What is the formula for the volume of a cylinder?',
        back: 'V = πr²h, where r is the radius of the base and h is the height.',
        hint: 'V = πr²h',
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        front: 'What is the formula for the volume of a cone?',
        back: 'V = (1/3)πr²h, one-third of a cylinder with the same base and height.',
        hint: 'V = (1/3)πr²h',
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        front: 'What is the formula for the volume of a sphere?',
        back: 'V = (4/3)πr³, where r is the radius.',
        hint: 'V = (4/3)πr³',
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        front: 'What is the formula for the volume of a pyramid?',
        back: 'V = (1/3)Bh, where B is the area of the base and h is the height.',
        hint: 'V = (1/3) × base area × height',
        isPremium: false
      },
      {
        topicId: volumeSolids.id,
        front: 'What is the formula for the volume of a cube with side s?',
        back: 'V = s³ (side cubed)',
        hint: 'V = s³',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: volume-of-solids');

  // TOPIC 6: Surface Area
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: surfaceArea.id,
        question: 'Find the surface area of a cube with side length 6 cm.',
        solution: `Step 1: Recall cube surface area formula:
SA = 6s² (six congruent square faces)

Step 2: Substitute s = 6:
SA = 6(6)²
SA = 6(36)
SA = 216 cm²

Step 3: Alternative thinking:
Area of one face = 6² = 36 cm²
Total = 6 faces × 36 = 216 cm²

Answer: Surface area = 216 cm²`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        question: 'A cylinder has a radius of 5 cm and height of 12 cm. Find its surface area.',
        solution: `Step 1: Recall cylinder surface area formula:
SA = 2πr² + 2πrh
(two circular bases + lateral surface)

Step 2: Identify values:
r = 5 cm, h = 12 cm

Step 3: Calculate area of two bases:
2πr² = 2π(5)²
= 2π(25)
= 50π cm²

Step 4: Calculate lateral (curved) surface area:
2πrh = 2π(5)(12)
= 120π cm²

Step 5: Total surface area:
SA = 50π + 120π
SA = 170π cm²

Step 6: Approximate:
SA ≈ 170 × 3.14159 ≈ 534.07 cm²

Answer: Surface area = 170π cm² (≈ 534.07 cm²)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        question: 'Find the surface area of a rectangular prism with length 8 m, width 5 m, and height 3 m.',
        solution: `Step 1: Recall the formula:
SA = 2(lw + lh + wh)

Step 2: Identify dimensions:
l = 8 m, w = 5 m, h = 3 m

Step 3: Calculate each face area:
lw = 8 × 5 = 40 m²
lh = 8 × 3 = 24 m²
wh = 5 × 3 = 15 m²

Step 4: Sum and multiply by 2:
SA = 2(40 + 24 + 15)
SA = 2(79)
SA = 158 m²

Step 5: Alternative method (6 faces):
Top/Bottom: 2(8 × 5) = 80 m²
Front/Back: 2(8 × 3) = 48 m²
Left/Right: 2(5 × 3) = 30 m²
Total: 80 + 48 + 30 = 158 m²

Answer: Surface area = 158 m²`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        question: 'A cone has a radius of 6 cm and a slant height of 10 cm. Find its surface area.',
        solution: `Step 1: Recall cone surface area formula:
SA = πr² + πrl
where r is radius and l is slant height

Step 2: Identify values:
r = 6 cm, l = 10 cm

Step 3: Calculate base area:
πr² = π(6)² = 36π cm²

Step 4: Calculate lateral surface area:
πrl = π(6)(10) = 60π cm²

Step 5: Total surface area:
SA = 36π + 60π
SA = 96π cm²

Step 6: Approximate:
SA ≈ 96 × 3.14159 ≈ 301.59 cm²

Step 7: Note:
If given height instead of slant height, use:
l = √(r² + h²)

Answer: Surface area = 96π cm² (≈ 301.59 cm²)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        question: 'A sphere has a radius of 7 cm. Find its surface area.',
        solution: `Step 1: Recall sphere surface area formula:
SA = 4πr²

Step 2: Substitute r = 7:
SA = 4π(7)²
SA = 4π(49)
SA = 196π cm²

Step 3: Approximate:
SA ≈ 196 × 3.14159 ≈ 615.75 cm²

Step 4: Interesting fact:
The surface area of a sphere equals the lateral
surface area of a cylinder with the same radius
and height equal to the diameter (2r)

Cylinder lateral area = 2πr(2r) = 4πr² ✓

Answer: Surface area = 196π cm² (≈ 615.75 cm²)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: surfaceArea.id,
        front: 'What is the formula for the surface area of a cube?',
        back: 'SA = 6s², where s is the side length (6 square faces).',
        hint: 'SA = 6s²',
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        front: 'What is the formula for the surface area of a rectangular prism?',
        back: 'SA = 2(lw + lh + wh), where l, w, h are length, width, height.',
        hint: 'SA = 2(lw + lh + wh)',
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        front: 'What is the formula for the surface area of a cylinder?',
        back: 'SA = 2πr² + 2πrh (two circles + lateral surface).',
        hint: 'SA = 2πr² + 2πrh',
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        front: 'What is the formula for the surface area of a sphere?',
        back: 'SA = 4πr², where r is the radius.',
        hint: 'SA = 4πr²',
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        front: 'What is the formula for the surface area of a cone?',
        back: 'SA = πr² + πrl, where r is radius and l is slant height (base + lateral).',
        hint: 'SA = πr² + πrl',
        isPremium: false
      },
      {
        topicId: surfaceArea.id,
        front: 'What is slant height?',
        back: 'In a cone or pyramid, the slant height is the distance from the apex to the edge of the base along the surface (not through the interior).',
        hint: 'Distance along the slanted surface',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: surface-area-geometry');

  console.log('\n🎉 Successfully added problems and flashcards for all 6 final topics!');
  console.log('🎊 GEOMETRY PROBLEMS & FLASHCARDS NOW 100% COMPLETE! 🎊');
  
  await prisma.$disconnect();
}

main();
