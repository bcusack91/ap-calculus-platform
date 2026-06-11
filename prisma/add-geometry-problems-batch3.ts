import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Geometry topics - Batch 3 (3 topics)...');

  // Find the topics
  const specialRightTriangles = await prisma.topic.findFirst({
    where: { slug: 'special-right-triangles' }
  });

  const pythagoreanTheorem = await prisma.topic.findFirst({
    where: { slug: 'pythagorean-theorem' }
  });

  const triangleInequalities = await prisma.topic.findFirst({
    where: { slug: 'triangle-inequalities' }
  });

  if (!specialRightTriangles || !pythagoreanTheorem || !triangleInequalities) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Special Right Triangles
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: specialRightTriangles.id,
        question: 'In a 45-45-90 triangle, one leg measures 6. Find the length of the other leg and the hypotenuse.',
        solution: `Step 1: Recall 45-45-90 triangle properties:
This is an isosceles right triangle
If each leg = x, then hypotenuse = x√2

Step 2: Identify the given information:
One leg = 6

Step 3: Find the other leg:
In a 45-45-90 triangle, both legs are equal
Other leg = 6

Step 4: Find the hypotenuse:
Hypotenuse = leg × √2
Hypotenuse = 6√2

Step 5: Verify using Pythagorean Theorem:
6² + 6² = (6√2)²
36 + 36 = 36 × 2
72 = 72 ✓

Answer: Other leg = 6, Hypotenuse = 6√2`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        question: 'In a 30-60-90 triangle, the shorter leg measures 5. Find the longer leg and the hypotenuse.',
        solution: `Step 1: Recall 30-60-90 triangle ratios:
If shorter leg (opposite 30°) = x
Then longer leg (opposite 60°) = x√3
And hypotenuse = 2x

Step 2: Identify given information:
Shorter leg = 5, so x = 5

Step 3: Find the longer leg:
Longer leg = x√3 = 5√3

Step 4: Find the hypotenuse:
Hypotenuse = 2x = 2(5) = 10

Step 5: Verify using Pythagorean Theorem:
5² + (5√3)² = 10²
25 + 25(3) = 100
25 + 75 = 100
100 = 100 ✓

Answer: Longer leg = 5√3, Hypotenuse = 10`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        question: 'In a 30-60-90 triangle, the hypotenuse is 20. Find both legs.',
        solution: `Step 1: Recall the ratio:
Shorter leg : Longer leg : Hypotenuse = x : x√3 : 2x

Step 2: Use the hypotenuse to find x:
Hypotenuse = 2x
20 = 2x
x = 10

Step 3: Find the shorter leg:
Shorter leg = x = 10

Step 4: Find the longer leg:
Longer leg = x√3 = 10√3

Step 5: Verify:
10² + (10√3)² = 20²
100 + 100(3) = 400
100 + 300 = 400
400 = 400 ✓

Answer: Shorter leg = 10, Longer leg = 10√3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        question: 'In a 45-45-90 triangle, the hypotenuse is 8√2. Find the length of each leg.',
        solution: `Step 1: Recall the relationship:
In a 45-45-90 triangle:
If leg = x, then hypotenuse = x√2

Step 2: Set up the equation:
x√2 = 8√2

Step 3: Solve for x:
x = 8√2 / √2
x = 8

Step 4: Both legs equal x:
Each leg = 8

Step 5: Verify:
8² + 8² = (8√2)²
64 + 64 = 64 × 2
128 = 128 ✓

Answer: Each leg = 8`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        question: 'A square has a diagonal of length 10. Find the side length of the square and its perimeter.',
        solution: `Step 1: Recognize the special triangle:
A square's diagonal divides it into two 45-45-90 triangles

Step 2: Set up the relationship:
In a 45-45-90 triangle:
If leg = s (side of square), then hypotenuse = s√2
The diagonal is the hypotenuse

Step 3: Use the given diagonal:
s√2 = 10

Step 4: Solve for s:
s = 10/√2
s = 10/√2 × √2/√2  (rationalize)
s = 10√2/2
s = 5√2

Step 5: Find the perimeter:
Perimeter = 4s = 4(5√2) = 20√2

Step 6: Verify the diagonal:
Using Pythagorean theorem:
s² + s² = diagonal²
(5√2)² + (5√2)² = 10²
25(2) + 25(2) = 100
50 + 50 = 100 ✓

Answer: Side length = 5√2, Perimeter = 20√2`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: specialRightTriangles.id,
        front: 'What are the side ratios in a 45-45-90 triangle?',
        back: 'leg : leg : hypotenuse = x : x : x√2. Both legs are equal, and the hypotenuse is leg times √2.',
        hint: '1 : 1 : √2',
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        front: 'What are the side ratios in a 30-60-90 triangle?',
        back: 'short leg : long leg : hypotenuse = x : x√3 : 2x. The sides are in ratio 1 : √3 : 2.',
        hint: '1 : √3 : 2',
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        front: 'In a 30-60-90 triangle, which leg is longer?',
        back: 'The leg opposite the 60° angle is longer. It equals the short leg times √3.',
        hint: 'Opposite 60° is x√3',
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        front: 'Why is a 45-45-90 triangle called an isosceles right triangle?',
        back: 'It has two 45° angles (making it isosceles) and one 90° angle (making it a right triangle). The two legs are equal.',
        hint: 'Two equal angles and sides',
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        front: 'How do you find the hypotenuse of a 45-45-90 triangle if the leg is x?',
        back: 'Multiply the leg by √2. Hypotenuse = x√2.',
        hint: 'Leg times √2',
        isPremium: false
      },
      {
        topicId: specialRightTriangles.id,
        front: 'In a 30-60-90 triangle, if the hypotenuse is h, what is the short leg?',
        back: 'The short leg is h/2 (half the hypotenuse).',
        hint: 'Half the hypotenuse',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: special-right-triangles');

  // TOPIC 2: Pythagorean Theorem
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: pythagoreanTheorem.id,
        question: 'A right triangle has legs of length 3 and 4. Find the length of the hypotenuse.',
        solution: `Step 1: Recall the Pythagorean Theorem:
a² + b² = c²
where a and b are legs, c is the hypotenuse

Step 2: Identify the given values:
a = 3, b = 4, c = ?

Step 3: Substitute into the formula:
3² + 4² = c²
9 + 16 = c²
25 = c²

Step 4: Solve for c:
c = √25
c = 5

Step 5: Verify:
3² + 4² = 9 + 16 = 25 = 5² ✓
This is a 3-4-5 Pythagorean triple

Answer: The hypotenuse is 5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        question: 'A right triangle has a hypotenuse of 13 and one leg of length 5. Find the other leg.',
        solution: `Step 1: Use the Pythagorean Theorem:
a² + b² = c²

Step 2: Substitute known values:
5² + b² = 13²
25 + b² = 169

Step 3: Solve for b²:
b² = 169 - 25
b² = 144

Step 4: Solve for b:
b = √144
b = 12

Step 5: Verify:
5² + 12² = 25 + 144 = 169 = 13² ✓
This is a 5-12-13 Pythagorean triple

Answer: The other leg is 12`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        question: 'A ladder is leaning against a wall. The ladder is 10 feet long and the base is 6 feet from the wall. How high up the wall does the ladder reach?',
        solution: `Step 1: Visualize the right triangle:
- Ladder = hypotenuse = 10 feet
- Distance from wall = one leg = 6 feet
- Height on wall = other leg = ?

Step 2: Use Pythagorean Theorem:
6² + h² = 10²

Step 3: Substitute and solve:
36 + h² = 100
h² = 100 - 36
h² = 64

Step 4: Find h:
h = √64
h = 8

Step 5: Verify:
6² + 8² = 36 + 64 = 100 = 10² ✓
This is a 6-8-10 triangle (multiple of 3-4-5)

Answer: The ladder reaches 8 feet up the wall`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        question: 'Find the length of the diagonal of a rectangle with length 15 cm and width 8 cm.',
        solution: `Step 1: Recognize the right triangle:
The diagonal of a rectangle creates a right triangle
with the length and width as legs

Step 2: Use Pythagorean Theorem:
a² + b² = c²
where a = 8, b = 15, c = diagonal

Step 3: Substitute:
8² + 15² = c²
64 + 225 = c²
289 = c²

Step 4: Solve for c:
c = √289
c = 17

Step 5: Verify:
8² + 15² = 64 + 225 = 289 = 17² ✓
This is an 8-15-17 Pythagorean triple

Answer: The diagonal is 17 cm`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        question: 'A baseball diamond is a square with sides of 90 feet. What is the distance from home plate to second base (the diagonal of the square)?',
        solution: `Step 1: Visualize the problem:
A square with side = 90 feet
Diagonal connects home plate to second base
Diagonal splits square into two right triangles

Step 2: Use Pythagorean Theorem:
Both legs of the right triangle = 90 feet
90² + 90² = d²

Step 3: Calculate:
8100 + 8100 = d²
16200 = d²

Step 4: Solve for d:
d = √16200

Step 5: Simplify the radical:
16200 = 8100 × 2 = 90² × 2
d = √(90² × 2)
d = 90√2

Step 6: Calculate decimal approximation:
d ≈ 90 × 1.414
d ≈ 127.3 feet

Step 7: Alternative recognition:
This is a 45-45-90 triangle
If leg = 90, then hypotenuse = 90√2 ✓

Answer: The distance is 90√2 feet (approximately 127.3 feet)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: pythagoreanTheorem.id,
        front: 'What is the Pythagorean Theorem?',
        back: 'In a right triangle: a² + b² = c², where a and b are the legs and c is the hypotenuse.',
        hint: 'a² + b² = c²',
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        front: 'Which side of a right triangle is the hypotenuse?',
        back: 'The longest side, opposite the right angle. It\'s always the side by itself in a² + b² = c².',
        hint: 'Opposite the 90° angle, longest side',
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        front: 'What is a Pythagorean triple?',
        back: 'A set of three positive integers a, b, c where a² + b² = c². Examples: 3-4-5, 5-12-13, 8-15-17.',
        hint: 'Whole numbers that satisfy a² + b² = c²',
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        front: 'Name three common Pythagorean triples.',
        back: '3-4-5, 5-12-13, and 8-15-17. Also their multiples like 6-8-10, 9-12-15, etc.',
        hint: '3-4-5 is the most basic',
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        front: 'Can the Pythagorean Theorem be used on non-right triangles?',
        back: 'No! The Pythagorean Theorem only works for right triangles (triangles with a 90° angle).',
        hint: 'Only for right triangles',
        isPremium: false
      },
      {
        topicId: pythagoreanTheorem.id,
        front: 'How do you find a leg if you know the hypotenuse and the other leg?',
        back: 'Rearrange: a² = c² - b². Subtract the known leg squared from the hypotenuse squared, then take the square root.',
        hint: 'Isolate the unknown leg',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: pythagorean-theorem');

  // TOPIC 3: Triangle Inequalities
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: triangleInequalities.id,
        question: 'Can a triangle have sides of length 3, 7, and 12? Explain why or why not.',
        solution: `Step 1: Recall the Triangle Inequality Theorem:
The sum of any two sides of a triangle must be
greater than the third side

Step 2: Check all three combinations:
Test 1: 3 + 7 > 12?
        10 > 12? NO ✗

Test 2: 3 + 12 > 7?
        15 > 7? YES ✓

Test 3: 7 + 12 > 3?
        19 > 3? YES ✓

Step 3: Analyze the results:
Since 3 + 7 is NOT greater than 12,
the Triangle Inequality is violated

Step 4: Conclusion:
These three lengths cannot form a triangle
The two shorter sides (3 and 7) aren't long enough
to reach around the longest side (12)

Answer: No, these cannot form a triangle because 3 + 7 ≯ 12`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        question: 'Two sides of a triangle measure 5 and 8. What are the possible lengths for the third side?',
        solution: `Step 1: Use Triangle Inequality Theorem:
The third side must satisfy:
- 5 + 8 > third side
- 5 + third side > 8
- 8 + third side > 5

Step 2: Simplify each inequality:
From first: third side < 13
From second: third side > 3
From third: third side > -3 (always true for positive lengths)

Step 3: Combine the restrictions:
third side > 3 AND third side < 13
Therefore: 3 < third side < 13

Step 4: Interpret:
The third side must be greater than 3
and less than 13

Step 5: Note the pattern:
The third side must be between:
- The difference of the two known sides: |8 - 5| = 3
- The sum of the two known sides: 8 + 5 = 13

Answer: The third side must be greater than 3 and less than 13 (3 < x < 13)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        question: 'In triangle ABC, AB = 10, BC = 6. What is the range of possible values for AC?',
        solution: `Step 1: Apply Triangle Inequality:
The third side must be between the difference
and the sum of the two known sides

Step 2: Find the minimum (difference):
Minimum = |10 - 6| = 4
AC must be greater than 4

Step 3: Find the maximum (sum):
Maximum = 10 + 6 = 16
AC must be less than 16

Step 4: Express the range:
4 < AC < 16

Step 5: Verify with extreme cases:
If AC = 4: sides would be 10, 6, 4
  Check: 6 + 4 = 10 (not greater than) ✗
If AC = 4.1: 6 + 4.1 = 10.1 > 10 ✓

If AC = 16: sides would be 10, 6, 16
  Check: 10 + 6 = 16 (not greater than) ✗
If AC = 15.9: 10 + 6 = 16 > 15.9 ✓

Answer: 4 < AC < 16`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        question: 'In triangle DEF, side DE = 2x, side EF = x + 5, and side DF = 12. If the triangle exists, what are the possible values of x?',
        solution: `Step 1: Apply all three Triangle Inequalities:
1) DE + EF > DF: (2x) + (x + 5) > 12
2) DE + DF > EF: (2x) + 12 > (x + 5)
3) EF + DF > DE: (x + 5) + 12 > (2x)

Step 2: Solve inequality 1:
2x + x + 5 > 12
3x + 5 > 12
3x > 7
x > 7/3
x > 2.33...

Step 3: Solve inequality 2:
2x + 12 > x + 5
x + 12 > 5
x > -7
(Always true for positive x)

Step 4: Solve inequality 3:
x + 5 + 12 > 2x
x + 17 > 2x
17 > x
x < 17

Step 5: Combine all restrictions:
x > 7/3 AND x < 17
Therefore: 7/3 < x < 17
Or: 2.33... < x < 17

Step 6: Also ensure all sides are positive:
2x > 0 → x > 0
x + 5 > 0 → x > -5
The binding constraint is x > 7/3

Answer: 7/3 < x < 17 (approximately 2.33 < x < 17)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        question: 'Using the Hinge Theorem: In triangles ABC and DEF, AB = DE = 8, AC = DF = 10, and angle A = 60° while angle D = 45°. Which is longer: BC or EF?',
        solution: `Step 1: Understand the Hinge Theorem (SAS Inequality):
If two sides of one triangle are congruent to two sides
of another triangle, but the included angle of the first
is larger, then the third side of the first triangle
is longer than the third side of the second triangle

Step 2: Identify the given information:
Triangle ABC: sides AB = 8, AC = 10, included angle A = 60°
Triangle DEF: sides DE = 8, DF = 10, included angle D = 45°

Step 3: Compare the included angles:
Angle A = 60°
Angle D = 45°
Therefore: Angle A > Angle D

Step 4: Apply the Hinge Theorem:
Since AB = DE, AC = DF, and angle A > angle D,
then BC > EF

Step 5: Conceptual understanding:
The larger included angle (60°) "pushes" the opposite
side (BC) farther apart than the smaller angle (45°)
pushes EF apart

Think of it like opening a door:
- Opening 60° creates a wider gap than opening 45°

Answer: BC > EF (BC is longer than EF)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: triangleInequalities.id,
        front: 'What is the Triangle Inequality Theorem?',
        back: 'The sum of the lengths of any two sides of a triangle must be greater than the length of the third side.',
        hint: 'Sum of two sides > third side',
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        front: 'How do you find the range of possible lengths for the third side of a triangle?',
        back: 'The third side must be greater than the difference of the two known sides and less than their sum: |a - b| < c < a + b',
        hint: 'Between difference and sum',
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        front: 'In a triangle, which side is opposite the largest angle?',
        back: 'The longest side is opposite the largest angle.',
        hint: 'Longest side ↔ largest angle',
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        front: 'In a triangle, which angle is opposite the longest side?',
        back: 'The largest angle is opposite the longest side.',
        hint: 'Largest angle ↔ longest side',
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        front: 'What is the Hinge Theorem (SAS Inequality)?',
        back: 'If two sides of one triangle equal two sides of another, the triangle with the larger included angle has the longer third side.',
        hint: 'Larger angle → longer opposite side',
        isPremium: false
      },
      {
        topicId: triangleInequalities.id,
        front: 'Can you have a triangle with sides 1, 2, and 3?',
        back: 'No! Because 1 + 2 = 3, which is NOT greater than 3. The triangle inequality requires 1 + 2 > 3.',
        hint: 'Check: does 1 + 2 > 3?',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: triangle-inequalities');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
