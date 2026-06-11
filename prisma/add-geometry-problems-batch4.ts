import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Geometry topics - Batch 4 (4 topics)...');

  // Find the topics
  const specialSegments = await prisma.topic.findFirst({
    where: { slug: 'special-segments-triangles' }
  });

  const propertiesQuadrilaterals = await prisma.topic.findFirst({
    where: { slug: 'properties-quadrilaterals' }
  });

  const polygonAngleSums = await prisma.topic.findFirst({
    where: { slug: 'polygon-angle-sums' }
  });

  const circleBasics = await prisma.topic.findFirst({
    where: { slug: 'circle-basics-geometry' }
  });

  if (!specialSegments || !propertiesQuadrilaterals || !polygonAngleSums || !circleBasics) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Special Segments in Triangles
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: specialSegments.id,
        question: 'In triangle ABC, point M is the midpoint of side BC. If BC = 18, find BM.',
        solution: `Step 1: Understand what a midpoint is:
A midpoint divides a segment into two equal parts

Step 2: Since M is the midpoint of BC:
BM = MC
BM + MC = BC

Step 3: Substitute:
BM + BM = 18
2(BM) = 18

Step 4: Solve:
BM = 18/2
BM = 9

Step 5: Verify:
BM = 9 and MC = 9
BM + MC = 9 + 9 = 18 ✓

Answer: BM = 9`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        question: 'A median of a triangle connects a vertex to the midpoint of the opposite side. In triangle DEF, the median from D to side EF has length 12. If the centroid is at point G, find DG.',
        solution: `Step 1: Recall the centroid property:
The centroid divides each median in a 2:1 ratio
The distance from vertex to centroid is 2/3 of the median
The distance from centroid to midpoint is 1/3 of the median

Step 2: Identify given information:
Median from D = 12
Centroid = G

Step 3: Find DG (vertex to centroid):
DG = (2/3) × median
DG = (2/3) × 12
DG = 24/3
DG = 8

Step 4: Find the other part (for verification):
Distance from G to midpoint = (1/3) × 12 = 4

Step 5: Verify:
8 + 4 = 12 ✓
8/4 = 2/1 ✓ (2:1 ratio)

Answer: DG = 8`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        question: 'In triangle ABC, the perpendicular bisector of side AB passes through point P. If PA = 15, find PB.',
        solution: `Step 1: Recall perpendicular bisector property:
A perpendicular bisector of a segment is perpendicular to
the segment and passes through its midpoint

Step 2: Key property of perpendicular bisectors:
Any point on the perpendicular bisector is equidistant
from the endpoints of the segment

Step 3: Apply the property:
Since P is on the perpendicular bisector of AB:
PA = PB

Step 4: Solve:
PA = 15 (given)
Therefore: PB = 15

Step 5: Conceptual understanding:
This makes sense because the perpendicular bisector
is the set of all points equidistant from A and B

Answer: PB = 15`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        question: 'In triangle XYZ, an altitude is drawn from X to side YZ, meeting it at point H. If angle XHY = 90°, XH = 12, and YH = 5, find XY.',
        solution: `Step 1: Understand the altitude:
An altitude is perpendicular to the side it meets
So angle XHY = 90° confirms XH is an altitude

Step 2: Identify the right triangle:
Triangle XHY is a right triangle with:
- Right angle at H
- One leg XH = 12
- Other leg YH = 5
- Hypotenuse XY = ?

Step 3: Use Pythagorean Theorem:
XH² + YH² = XY²
12² + 5² = XY²
144 + 25 = XY²
169 = XY²

Step 4: Solve for XY:
XY = √169
XY = 13

Step 5: Recognize the Pythagorean triple:
This is a 5-12-13 right triangle

Answer: XY = 13`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        question: 'In triangle ABC, the three medians intersect at centroid G. The median from vertex A has length 18, the median from vertex B has length 15, and the median from vertex C has length 21. Find the distance from each vertex to the centroid.',
        solution: `Step 1: Recall centroid property:
The centroid divides each median in a 2:1 ratio
Distance from vertex to centroid = (2/3) × median length

Step 2: Find distance from A to G:
AG = (2/3) × 18
AG = 36/3
AG = 12

Step 3: Find distance from B to G:
BG = (2/3) × 15
BG = 30/3
BG = 10

Step 4: Find distance from C to G:
CG = (2/3) × 21
CG = 42/3
CG = 14

Step 5: Verify the 2:1 ratio for each:
Median from A: vertex to centroid = 12, centroid to midpoint = 6
  12:6 = 2:1 ✓
Median from B: vertex to centroid = 10, centroid to midpoint = 5
  10:5 = 2:1 ✓
Median from C: vertex to centroid = 14, centroid to midpoint = 7
  14:7 = 2:1 ✓

Step 6: Summary:
The centroid is the "balance point" of the triangle
It's located 2/3 of the way from each vertex to the
opposite side's midpoint

Answer: AG = 12, BG = 10, CG = 14`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: specialSegments.id,
        front: 'What is a median of a triangle?',
        back: 'A segment from a vertex to the midpoint of the opposite side. Every triangle has 3 medians.',
        hint: 'Vertex to midpoint of opposite side',
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        front: 'What is the centroid of a triangle?',
        back: 'The point where the three medians intersect. It\'s the "center of mass" or balance point of the triangle.',
        hint: 'Where medians meet',
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        front: 'How does the centroid divide each median?',
        back: 'In a 2:1 ratio. The distance from vertex to centroid is 2/3 of the median; from centroid to midpoint is 1/3.',
        hint: '2:1 ratio, 2/3 from vertex',
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        front: 'What is an altitude of a triangle?',
        back: 'A perpendicular segment from a vertex to the line containing the opposite side. Every triangle has 3 altitudes.',
        hint: 'Perpendicular from vertex to opposite side',
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        front: 'What is a perpendicular bisector of a side?',
        back: 'A line perpendicular to the side that passes through its midpoint. Any point on it is equidistant from the endpoints.',
        hint: 'Perpendicular through midpoint',
        isPremium: false
      },
      {
        topicId: specialSegments.id,
        front: 'What is an angle bisector?',
        back: 'A ray that divides an angle into two equal angles. The angle bisector from a vertex divides the angle at that vertex.',
        hint: 'Splits angle in half',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: special-segments-triangles');

  // TOPIC 2: Properties of Quadrilaterals
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: propertiesQuadrilaterals.id,
        question: 'A parallelogram has one angle measuring 65°. Find the measures of the other three angles.',
        solution: `Step 1: Recall properties of parallelograms:
- Opposite angles are congruent
- Consecutive angles are supplementary (add to 180°)

Step 2: Let's say angle A = 65°

Step 3: Find the opposite angle:
Angle C = Angle A = 65° (opposite angles are equal)

Step 4: Find a consecutive angle:
Consecutive angles are supplementary
Angle B + Angle A = 180°
Angle B + 65° = 180°
Angle B = 115°

Step 5: Find the remaining angle:
Angle D = Angle B = 115° (opposite angles are equal)

Step 6: Verify all angles sum to 360°:
65° + 115° + 65° + 115° = 360° ✓

Answer: The four angles are 65°, 115°, 65°, and 115°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        question: 'A rectangle has a perimeter of 40 cm and a width of 8 cm. Find its length.',
        solution: `Step 1: Recall rectangle properties:
- Opposite sides are equal
- All angles are 90°

Step 2: Use the perimeter formula:
Perimeter = 2(length + width)

Step 3: Substitute known values:
40 = 2(length + 8)

Step 4: Solve for length:
40 = 2·length + 16
24 = 2·length
length = 12

Step 5: Verify:
Perimeter = 2(12 + 8) = 2(20) = 40 ✓

Answer: The length is 12 cm`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        question: 'The diagonals of a rhombus measure 16 cm and 12 cm. Find the length of one side of the rhombus.',
        solution: `Step 1: Recall rhombus diagonal properties:
- Diagonals bisect each other at right angles
- Diagonals create four congruent right triangles

Step 2: Find half of each diagonal:
Half of first diagonal = 16/2 = 8 cm
Half of second diagonal = 12/2 = 6 cm

Step 3: Use Pythagorean Theorem:
Each half-diagonal forms a leg of a right triangle
The side of the rhombus is the hypotenuse

8² + 6² = side²
64 + 36 = side²
100 = side²

Step 4: Solve for the side:
side = √100
side = 10 cm

Step 5: Verify using Pythagorean triple:
This is a 6-8-10 triangle ✓

Answer: Each side of the rhombus is 10 cm`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        question: 'A trapezoid has bases of 10 cm and 18 cm. The two legs are equal in length. If one base angle is 70°, find the other base angles.',
        solution: `Step 1: Identify the trapezoid type:
This is an isosceles trapezoid (equal legs)

Step 2: Recall isosceles trapezoid properties:
- Base angles are congruent
- The angles on each leg are supplementary

Step 3: Identify the given angle:
One base angle = 70°

Step 4: Find the other angle on the same base:
In an isosceles trapezoid, base angles are equal
Other angle on that base = 70°

Step 5: Find angles on the other base:
Angles on a leg are supplementary
70° + angle = 180°
angle = 110°

Both angles on the other base = 110°

Step 6: Verify angle sum:
70° + 70° + 110° + 110° = 360° ✓

Answer: The four angles are 70°, 70°, 110°, and 110°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        question: 'Quadrilateral ABCD has the following properties: AB ∥ CD, AB = CD, AD = BC, and all angles are 90°. Classify this quadrilateral as specifically as possible and justify your answer.',
        solution: `Step 1: List the given properties:
- AB ∥ CD (one pair of opposite sides parallel)
- AB = CD (those parallel sides are equal)
- AD = BC (other pair of opposite sides are equal)
- All angles = 90°

Step 2: Check for parallelogram:
- Opposite sides are parallel (AB ∥ CD, and AD ∥ BC implied)
- Opposite sides are equal
YES, it's a parallelogram ✓

Step 3: Check for rectangle:
- It's a parallelogram with all right angles
YES, it's a rectangle ✓

Step 4: Check for rhombus:
- Need all four sides equal
We have AB = CD and AD = BC
But we don't know if AB = AD
Not necessarily a rhombus

Step 5: Check for square:
- Would need to be both rectangle AND rhombus
- We confirmed rectangle
- Need all sides equal for square
Given info doesn't guarantee AB = AD
Not necessarily a square

Step 6: Most specific classification:
RECTANGLE is the most specific classification we can make

If we were also told AB = AD (or all sides equal),
then it would be a SQUARE

Answer: This quadrilateral is a RECTANGLE. It's a parallelogram with all right angles, but we don't have enough information to prove all sides are equal (which would make it a square).`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: propertiesQuadrilaterals.id,
        front: 'What are the properties of a parallelogram?',
        back: 'Opposite sides parallel and equal, opposite angles equal, consecutive angles supplementary, diagonals bisect each other.',
        hint: 'Opposite sides parallel and equal',
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        front: 'What additional property does a rectangle have beyond being a parallelogram?',
        back: 'All four angles are right angles (90°). Also, diagonals are equal in length.',
        hint: 'All angles are 90°',
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        front: 'What additional property does a rhombus have beyond being a parallelogram?',
        back: 'All four sides are equal in length. Also, diagonals are perpendicular and bisect the angles.',
        hint: 'All sides equal',
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        front: 'What is a square?',
        back: 'A quadrilateral that is both a rectangle and a rhombus. It has all right angles AND all equal sides.',
        hint: 'Rectangle + Rhombus',
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        front: 'What is a trapezoid?',
        back: 'A quadrilateral with exactly one pair of parallel sides (called bases). The parallel sides are the bases.',
        hint: 'One pair of parallel sides',
        isPremium: false
      },
      {
        topicId: propertiesQuadrilaterals.id,
        front: 'What is an isosceles trapezoid?',
        back: 'A trapezoid with equal legs (non-parallel sides). Base angles are congruent, and diagonals are equal.',
        hint: 'Trapezoid with equal legs',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: properties-quadrilaterals');

  // TOPIC 3: Polygon Angle Sums
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polygonAngleSums.id,
        question: 'Find the sum of the interior angles of a hexagon (6-sided polygon).',
        solution: `Step 1: Recall the formula for sum of interior angles:
Sum = (n - 2) × 180°
where n = number of sides

Step 2: Identify n:
Hexagon has 6 sides, so n = 6

Step 3: Substitute into formula:
Sum = (6 - 2) × 180°
Sum = 4 × 180°
Sum = 720°

Step 4: Conceptual understanding:
A hexagon can be divided into 4 triangles
Each triangle has angles summing to 180°
Total: 4 × 180° = 720° ✓

Answer: The sum of interior angles is 720°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        question: 'Each interior angle of a regular pentagon measures the same. Find the measure of one interior angle.',
        solution: `Step 1: Find the sum of all interior angles:
Pentagon has n = 5 sides
Sum = (n - 2) × 180°
Sum = (5 - 2) × 180°
Sum = 3 × 180°
Sum = 540°

Step 2: Recall that a regular polygon has all angles equal

Step 3: Find one angle:
One angle = Total sum / Number of angles
One angle = 540° / 5
One angle = 108°

Step 4: Verify:
5 × 108° = 540° ✓

Answer: Each interior angle is 108°`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        question: 'Find the measure of each exterior angle of a regular octagon.',
        solution: `Step 1: Recall the exterior angle sum theorem:
The sum of exterior angles of ANY polygon is always 360°

Step 2: For a regular polygon:
All exterior angles are equal

Step 3: Find one exterior angle:
Octagon has 8 sides, so 8 exterior angles
One exterior angle = 360° / 8
One exterior angle = 45°

Step 4: Verify using interior angles (optional):
Sum of interior angles = (8 - 2) × 180° = 1080°
One interior angle = 1080° / 8 = 135°
Exterior angle = 180° - 135° = 45° ✓

Answer: Each exterior angle is 45°`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        question: 'A polygon has an interior angle sum of 1800°. How many sides does it have?',
        solution: `Step 1: Use the interior angle sum formula:
Sum = (n - 2) × 180°

Step 2: Substitute the known sum:
1800 = (n - 2) × 180

Step 3: Solve for n:
1800/180 = n - 2
10 = n - 2
n = 12

Step 4: Verify:
(12 - 2) × 180° = 10 × 180° = 1800° ✓

Step 5: Name the polygon:
A 12-sided polygon is called a dodecagon

Answer: The polygon has 12 sides (dodecagon)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        question: 'Each exterior angle of a regular polygon measures 24°. Find: (a) the number of sides, (b) the sum of interior angles, and (c) each interior angle.',
        solution: `Step 1: Find the number of sides using exterior angles:
Sum of exterior angles = 360°
For regular polygon: 360° / n = one exterior angle
360° / n = 24°
n = 360° / 24°
n = 15

The polygon has 15 sides

Step 2: Find sum of interior angles:
Sum = (n - 2) × 180°
Sum = (15 - 2) × 180°
Sum = 13 × 180°
Sum = 2340°

Step 3: Find each interior angle (Method 1):
One interior angle = Sum / n
One interior angle = 2340° / 15
One interior angle = 156°

Step 4: Verify using supplementary property:
Interior + Exterior = 180°
Interior = 180° - 24° = 156° ✓

Step 5: Additional verification:
15 × 156° = 2340° ✓
360° / 15 = 24° ✓

Answer: (a) 15 sides, (b) sum = 2340°, (c) each interior angle = 156°`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polygonAngleSums.id,
        front: 'What is the formula for the sum of interior angles of a polygon?',
        back: 'Sum = (n - 2) × 180°, where n is the number of sides.',
        hint: '(n - 2) × 180°',
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        front: 'What is the sum of the exterior angles of ANY polygon?',
        back: 'Always 360°, regardless of the number of sides.',
        hint: 'Always 360°',
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        front: 'How do you find one interior angle of a REGULAR polygon?',
        back: 'Divide the sum of interior angles by the number of sides: [(n-2) × 180°] / n',
        hint: 'Total sum divided by n',
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        front: 'How do you find one exterior angle of a REGULAR polygon?',
        back: 'Divide 360° by the number of sides: 360° / n',
        hint: '360° / n',
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        front: 'What is the relationship between an interior and exterior angle at the same vertex?',
        back: 'They are supplementary - they add up to 180° (they form a linear pair).',
        hint: 'They add to 180°',
        isPremium: false
      },
      {
        topicId: polygonAngleSums.id,
        front: 'What is a regular polygon?',
        back: 'A polygon with all sides equal in length and all angles equal in measure.',
        hint: 'All sides and angles equal',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: polygon-angle-sums');

  // TOPIC 4: Circle Basics
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: circleBasics.id,
        question: 'A circle has a radius of 7 cm. Find its diameter and circumference.',
        solution: `Step 1: Find the diameter:
Diameter = 2 × radius
Diameter = 2 × 7
Diameter = 14 cm

Step 2: Find the circumference:
Circumference = 2πr (or πd)
C = 2π(7)
C = 14π cm

Step 3: Approximate value (optional):
C ≈ 14 × 3.14159
C ≈ 43.98 cm

Answer: Diameter = 14 cm, Circumference = 14π cm (≈ 43.98 cm)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        question: 'A circle has a circumference of 31.4 cm. Find its radius. (Use π ≈ 3.14)',
        solution: `Step 1: Use the circumference formula:
C = 2πr

Step 2: Substitute known values:
31.4 = 2πr
31.4 = 2(3.14)r
31.4 = 6.28r

Step 3: Solve for r:
r = 31.4 / 6.28
r = 5 cm

Step 4: Verify:
C = 2π(5) = 10π ≈ 10(3.14) = 31.4 ✓

Answer: The radius is 5 cm`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        question: 'A circle has an area of 49π square units. Find its radius and circumference.',
        solution: `Step 1: Use the area formula:
Area = πr²

Step 2: Substitute the known area:
49π = πr²

Step 3: Solve for r²:
49 = r²
r = √49
r = 7

Step 4: Find the circumference:
C = 2πr
C = 2π(7)
C = 14π

Step 5: Verify the area:
A = π(7)² = 49π ✓

Answer: Radius = 7, Circumference = 14π`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        question: 'Two concentric circles (same center) have radii of 5 cm and 8 cm. Find the area of the ring (annulus) between them.',
        solution: `Step 1: Understand the problem:
Need to find the area between two circles
Area of ring = Area of large circle - Area of small circle

Step 2: Find area of large circle:
A_large = πr²
A_large = π(8)²
A_large = 64π cm²

Step 3: Find area of small circle:
A_small = πr²
A_small = π(5)²
A_small = 25π cm²

Step 4: Find area of ring:
Area of ring = 64π - 25π
Area of ring = 39π cm²

Step 5: Approximate (optional):
39π ≈ 39 × 3.14159 ≈ 122.52 cm²

Answer: The area of the ring is 39π cm² (≈ 122.52 cm²)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        question: 'A circular garden has a diameter of 20 meters. A path 2 meters wide surrounds the garden. Find: (a) the area of the garden, (b) the area of the path, and (c) the total area including the path.',
        solution: `Step 1: Find the radius of the garden:
Diameter = 20 m
Radius of garden = 20/2 = 10 m

Step 2: Find area of the garden:
A_garden = πr²
A_garden = π(10)²
A_garden = 100π m²

Step 3: Find the outer radius (garden + path):
Path width = 2 m
Outer radius = 10 + 2 = 12 m

Step 4: Find total area (garden + path):
A_total = π(12)²
A_total = 144π m²

Step 5: Find area of just the path:
A_path = A_total - A_garden
A_path = 144π - 100π
A_path = 44π m²

Step 6: Approximate values:
Garden: 100π ≈ 314.16 m²
Path: 44π ≈ 138.23 m²
Total: 144π ≈ 452.39 m²

Step 7: Verify:
Garden + Path = 100π + 44π = 144π ✓

Answer: (a) Garden area = 100π m² ≈ 314.16 m²
        (b) Path area = 44π m² ≈ 138.23 m²
        (c) Total area = 144π m² ≈ 452.39 m²`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: circleBasics.id,
        front: 'What is the relationship between radius and diameter?',
        back: 'Diameter = 2 × radius. The diameter is twice as long as the radius.',
        hint: 'd = 2r',
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        front: 'What is the formula for the circumference of a circle?',
        back: 'C = 2πr or C = πd, where r is radius and d is diameter.',
        hint: 'C = 2πr or πd',
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        front: 'What is the formula for the area of a circle?',
        back: 'A = πr², where r is the radius.',
        hint: 'A = πr²',
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        front: 'What is a chord of a circle?',
        back: 'A line segment with both endpoints on the circle. The diameter is the longest chord.',
        hint: 'Segment connecting two points on the circle',
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        front: 'What is a tangent to a circle?',
        back: 'A line that touches the circle at exactly one point. It is perpendicular to the radius at that point.',
        hint: 'Touches at one point, perpendicular to radius',
        isPremium: false
      },
      {
        topicId: circleBasics.id,
        front: 'What are concentric circles?',
        back: 'Circles that share the same center but have different radii.',
        hint: 'Same center, different sizes',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: circle-basics-geometry');

  console.log('\n✨ Successfully added problems and flashcards for 4 topics!');
  
  await prisma.$disconnect();
}

main();
