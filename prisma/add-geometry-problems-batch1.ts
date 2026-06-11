import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Geometry topics - Batch 1 (2 topics)...');

  // Find the topics
  const angleRelationships = await prisma.topic.findFirst({
    where: { slug: 'angle-relationships-geometry' }
  });

  const parallelLines = await prisma.topic.findFirst({
    where: { slug: 'parallel-lines-transversals' }
  });

  if (!angleRelationships || !parallelLines) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Angle Relationships
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: angleRelationships.id,
        question: 'Two angles are complementary. One angle measures 35°. What is the measure of the other angle?',
        solution: `Step 1: Recall the definition of complementary angles:
Complementary angles are two angles whose measures add up to 90°

Step 2: Set up the equation:
Let x = measure of the unknown angle
35° + x = 90°

Step 3: Solve for x:
x = 90° - 35°
x = 55°

Step 4: Verify:
35° + 55° = 90° ✓

Answer: The other angle measures 55°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        question: 'Two angles are supplementary. One angle is 3 times the measure of the other. Find both angles.',
        solution: `Step 1: Recall supplementary angles:
Supplementary angles add up to 180°

Step 2: Define variables:
Let x = measure of the smaller angle
Then 3x = measure of the larger angle

Step 3: Set up the equation:
x + 3x = 180°

Step 4: Solve:
4x = 180°
x = 45°

Step 5: Find both angles:
Smaller angle: x = 45°
Larger angle: 3x = 3(45°) = 135°

Step 6: Verify:
45° + 135° = 180° ✓
135° = 3(45°) ✓

Answer: The angles are 45° and 135°`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        question: 'Two angles are vertical angles. If one angle measures (2x + 10)° and the other measures (3x - 20)°, find the value of x and the measure of each angle.',
        solution: `Step 1: Recall vertical angles:
Vertical angles are congruent (equal in measure)

Step 2: Set up the equation:
2x + 10 = 3x - 20

Step 3: Solve for x:
10 + 20 = 3x - 2x
30 = x
x = 30

Step 4: Find the angle measures:
First angle: 2x + 10 = 2(30) + 10 = 60 + 10 = 70°
Second angle: 3x - 20 = 3(30) - 20 = 90 - 20 = 70°

Step 5: Verify:
Both angles equal 70° ✓ (vertical angles are congruent)

Answer: x = 30, both angles measure 70°`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        question: 'Angles A and B are complementary. Angles B and C are supplementary. If angle A measures 28°, find the measures of angles B and C.',
        solution: `Step 1: Use the complementary relationship:
A + B = 90°
28° + B = 90°
B = 90° - 28°
B = 62°

Step 2: Use the supplementary relationship:
B + C = 180°
62° + C = 180°
C = 180° - 62°
C = 118°

Step 3: Verify both relationships:
A + B = 28° + 62° = 90° ✓ (complementary)
B + C = 62° + 118° = 180° ✓ (supplementary)

Step 4: Visual understanding:
- A and B are complementary (make a right angle together)
- B and C are supplementary (make a straight line together)
- B is shared between both relationships

Answer: Angle B = 62°, Angle C = 118°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        question: 'Four angles are formed when two lines intersect. The angles can be labeled as angles 1, 2, 3, and 4 going clockwise. If angle 1 = (4x + 15)° and angle 3 = (6x - 25)°, find the measures of all four angles.',
        solution: `Step 1: Identify the angle relationships:
When two lines intersect, they form two pairs of vertical angles
Angles 1 and 3 are vertical angles (opposite each other)
Angles 2 and 4 are vertical angles (opposite each other)

Step 2: Use vertical angles property:
Angle 1 = Angle 3
4x + 15 = 6x - 25

Step 3: Solve for x:
15 + 25 = 6x - 4x
40 = 2x
x = 20

Step 4: Find angles 1 and 3:
Angle 1 = 4x + 15 = 4(20) + 15 = 80 + 15 = 95°
Angle 3 = 6x - 25 = 6(20) - 25 = 120 - 25 = 95°

Step 5: Find angles 2 and 4 using supplementary angles:
Adjacent angles at intersection are supplementary
Angle 1 + Angle 2 = 180°
95° + Angle 2 = 180°
Angle 2 = 85°

Angle 4 = Angle 2 = 85° (vertical angles)

Step 6: Verify all relationships:
Angles 1 and 3: 95° = 95° ✓ (vertical)
Angles 2 and 4: 85° = 85° ✓ (vertical)
Angles 1 and 2: 95° + 85° = 180° ✓ (supplementary)
All four angles: 95° + 85° + 95° + 85° = 360° ✓

Answer: Angle 1 = 95°, Angle 2 = 85°, Angle 3 = 95°, Angle 4 = 85°`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: angleRelationships.id,
        front: 'What are complementary angles?',
        back: 'Two angles whose measures add up to 90°. Example: 30° and 60° are complementary.',
        hint: 'Think "right angle" - 90°',
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        front: 'What are supplementary angles?',
        back: 'Two angles whose measures add up to 180°. Example: 120° and 60° are supplementary.',
        hint: 'Think "straight line" - 180°',
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        front: 'What are vertical angles?',
        back: 'Angles opposite each other when two lines intersect. Vertical angles are always congruent (equal).',
        hint: 'Opposite angles at an intersection',
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        front: 'What are adjacent angles?',
        back: 'Angles that share a common vertex and a common side, but do not overlap.',
        hint: 'Side by side, sharing a vertex and ray',
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        front: 'If two angles form a linear pair, what is their sum?',
        back: '180°. Linear pairs are adjacent angles that form a straight line, so they are supplementary.',
        hint: 'Linear pair = supplementary',
        isPremium: false
      },
      {
        topicId: angleRelationships.id,
        front: 'True or False: Complementary angles must be adjacent.',
        back: 'False! Complementary angles just need to add to 90°. They can be anywhere, not necessarily next to each other.',
        hint: 'Only the sum matters, not position',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: angle-relationships-geometry');

  // TOPIC 2: Parallel Lines and Transversals
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: parallelLines.id,
        question: 'Two parallel lines are cut by a transversal. One of the angles measures 65°. Find the measures of all eight angles formed.',
        solution: `Step 1: Understand the angle relationships:
When a transversal crosses parallel lines, it creates:
- Corresponding angles (equal)
- Alternate interior angles (equal)
- Alternate exterior angles (equal)
- Consecutive interior angles (supplementary - add to 180°)

Step 2: Identify the given angle:
Let's say angle 1 = 65°

Step 3: Find angles equal to 65°:
All corresponding angles = 65°
All alternate interior angles = 65°
All alternate exterior angles = 65°
There are 4 angles that measure 65°

Step 4: Find the supplementary angles:
The other 4 angles are supplementary to 65°
180° - 65° = 115°

Step 5: Summary of all eight angles:
Four angles measure 65°
Four angles measure 115°

Step 6: Verify:
65° + 115° = 180° ✓ (linear pairs)

Answer: Four angles are 65° and four angles are 115°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        question: 'Lines l and m are parallel, cut by transversal t. If angle 3 measures 112°, find the measure of its corresponding angle.',
        solution: `Step 1: Recall corresponding angles:
When parallel lines are cut by a transversal,
corresponding angles are congruent (equal)

Step 2: Identify corresponding angles:
Corresponding angles are in the same relative position
at each intersection point

Step 3: Apply the property:
If angle 3 = 112°
Then its corresponding angle = 112°

Step 4: Verify the concept:
Corresponding angles are on the same side of the transversal
and in the same position (both above or both below the parallel lines)

Answer: The corresponding angle measures 112°`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        question: 'Parallel lines are cut by a transversal. One interior angle on the left side measures (3x + 20)°, and the interior angle on the right side measures (5x - 40)°. If these are alternate interior angles, find x and the angle measures.',
        solution: `Step 1: Recall alternate interior angles:
When parallel lines are cut by a transversal,
alternate interior angles are congruent

Step 2: Set up the equation:
3x + 20 = 5x - 40

Step 3: Solve for x:
20 + 40 = 5x - 3x
60 = 2x
x = 30

Step 4: Find the angle measures:
First angle: 3x + 20 = 3(30) + 20 = 90 + 20 = 110°
Second angle: 5x - 40 = 5(30) - 40 = 150 - 40 = 110°

Step 5: Verify:
Both angles equal 110° ✓ (alternate interior angles are equal)

Answer: x = 30, both angles measure 110°`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        question: 'Two lines are cut by a transversal. Consecutive interior angles measure (2x + 15)° and (3x + 25)°. If the lines are parallel, find x and both angle measures.',
        solution: `Step 1: Recall consecutive interior angles:
Also called co-interior or same-side interior angles
When lines are parallel, consecutive interior angles are supplementary (sum to 180°)

Step 2: Set up the equation:
(2x + 15) + (3x + 25) = 180

Step 3: Simplify and solve:
2x + 15 + 3x + 25 = 180
5x + 40 = 180
5x = 140
x = 28

Step 4: Find both angle measures:
First angle: 2x + 15 = 2(28) + 15 = 56 + 15 = 71°
Second angle: 3x + 25 = 3(28) + 25 = 84 + 25 = 109°

Step 5: Verify:
71° + 109° = 180° ✓ (consecutive interior angles are supplementary)

Answer: x = 28, angles are 71° and 109°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        question: 'Lines AB and CD are cut by transversal EF. Angle AEF = (4x - 10)° and angle EFC = (2x + 50)°. Determine if lines AB and CD are parallel. If they are parallel, find x and the angle measures.',
        solution: `Step 1: Identify the angle relationship:
Angles AEF and EFC appear to be corresponding angles
(both on the same side of the transversal)

Step 2: Determine the condition for parallel lines:
If AB ∥ CD, then corresponding angles must be equal
So we need: 4x - 10 = 2x + 50

Step 3: Test if this equation is consistent:
4x - 10 = 2x + 50
4x - 2x = 50 + 10
2x = 60
x = 30

Step 4: Find the angle measures:
Angle AEF = 4x - 10 = 4(30) - 10 = 120 - 10 = 110°
Angle EFC = 2x + 50 = 2(30) + 50 = 60 + 50 = 110°

Step 5: Verify:
Both angles equal 110° ✓
Since corresponding angles are equal, the lines ARE parallel

Alternative check - if these were consecutive interior angles:
110° + 110° = 220° ≠ 180°
So they cannot be consecutive interior angles

Step 6: Conclusion:
Since we can find a consistent value of x that makes
the corresponding angles equal, the lines are parallel

Answer: Yes, the lines are parallel when x = 30. Both angles measure 110°.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: parallelLines.id,
        front: 'What is a transversal?',
        back: 'A line that intersects two or more other lines at different points.',
        hint: 'A line that crosses other lines',
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        front: 'What are corresponding angles?',
        back: 'Angles in the same relative position at each intersection when a transversal crosses two lines. If the lines are parallel, corresponding angles are equal.',
        hint: 'Same position at each intersection',
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        front: 'What are alternate interior angles?',
        back: 'Angles on opposite sides of the transversal, between (interior to) the two lines. If the lines are parallel, alternate interior angles are equal.',
        hint: 'Inside, on opposite sides',
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        front: 'What are consecutive interior angles (co-interior angles)?',
        back: 'Angles on the same side of the transversal, between the two lines. If the lines are parallel, consecutive interior angles are supplementary (sum to 180°).',
        hint: 'Same side interior, add to 180°',
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        front: 'If two parallel lines are cut by a transversal, how many different angle measures exist?',
        back: 'Only 2 different angle measures. Four angles are congruent to each other, and the other four angles are congruent to each other. Each set is supplementary to the other.',
        hint: 'Two values that add to 180°',
        isPremium: false
      },
      {
        topicId: parallelLines.id,
        front: 'What are alternate exterior angles?',
        back: 'Angles on opposite sides of the transversal, outside (exterior to) the two lines. If the lines are parallel, alternate exterior angles are equal.',
        hint: 'Outside, on opposite sides',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: parallel-lines-transversals');

  console.log('\n✨ Successfully added problems and flashcards for 2 topics!');
  
  await prisma.$disconnect();
}

main();
