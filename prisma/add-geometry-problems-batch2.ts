import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Geometry topics - Batch 2 (3 topics)...');

  // Find the topics
  const similarTriangles = await prisma.topic.findFirst({
    where: { slug: 'similar-triangles-geometry' }
  });

  const triangleAngleSum = await prisma.topic.findFirst({
    where: { slug: 'triangle-angle-sum' }
  });

  const congruentTriangles = await prisma.topic.findFirst({
    where: { slug: 'congruent-triangles' }
  });

  if (!similarTriangles || !triangleAngleSum || !congruentTriangles) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Similar Triangles
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: similarTriangles.id,
        question: 'Two triangles are similar. The sides of the first triangle are 3, 4, and 5 cm. The shortest side of the second triangle is 6 cm. Find the other two sides of the second triangle.',
        solution: `Step 1: Identify corresponding sides:
Shortest side of first triangle: 3 cm
Shortest side of second triangle: 6 cm

Step 2: Find the scale factor:
Scale factor = 6/3 = 2
The second triangle is 2 times larger

Step 3: Apply scale factor to other sides:
Second side: 4 × 2 = 8 cm
Third side: 5 × 2 = 10 cm

Step 4: Verify the similarity ratio:
All ratios should be equal:
6/3 = 2 ✓
8/4 = 2 ✓
10/5 = 2 ✓

Answer: The other two sides are 8 cm and 10 cm`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        question: 'Triangle ABC is similar to triangle DEF. If AB = 12, BC = 15, and DE = 8, find EF.',
        solution: `Step 1: Identify corresponding sides:
Since △ABC ~ △DEF:
AB corresponds to DE
BC corresponds to EF

Step 2: Find the scale factor:
Scale factor = DE/AB = 8/12 = 2/3

Step 3: Set up proportion for unknown side:
BC/EF = AB/DE
15/EF = 12/8

Step 4: Solve for EF:
15/EF = 3/2
3 × EF = 15 × 2
3 × EF = 30
EF = 10

Step 5: Verify with scale factor:
EF = BC × (2/3) = 15 × (2/3) = 10 ✓

Answer: EF = 10`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        question: 'In similar triangles, the ratio of corresponding sides is 3:5. If the perimeter of the smaller triangle is 24 cm, what is the perimeter of the larger triangle?',
        solution: `Step 1: Understand the property:
In similar triangles, the ratio of perimeters equals
the ratio of corresponding sides

Step 2: Set up the proportion:
Perimeter ratio = Side ratio
P_small/P_large = 3/5

Step 3: Substitute known value:
24/P_large = 3/5

Step 4: Cross multiply:
3 × P_large = 24 × 5
3 × P_large = 120
P_large = 40

Step 5: Verify:
Ratio: 24/40 = 3/5 ✓

Answer: The perimeter of the larger triangle is 40 cm`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        question: 'Triangle ABC has sides 6, 8, and 10. Triangle DEF has sides 9, 12, and 15. Are these triangles similar? If so, what is the scale factor?',
        solution: `Step 1: Order the sides from smallest to largest:
Triangle ABC: 6, 8, 10
Triangle DEF: 9, 12, 15

Step 2: Check ratios of corresponding sides:
Shortest sides: 9/6 = 3/2 = 1.5
Middle sides: 12/8 = 3/2 = 1.5
Longest sides: 15/10 = 3/2 = 1.5

Step 3: Analyze the ratios:
All three ratios are equal to 3/2

Step 4: Conclusion:
Since all corresponding side ratios are equal,
the triangles ARE similar by SSS Similarity

Step 5: Identify scale factor:
Scale factor = 3/2 or 1.5
Triangle DEF is 1.5 times larger than triangle ABC

Answer: Yes, the triangles are similar with scale factor 3/2 (or 1.5)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        question: 'A tree casts a shadow 24 feet long at the same time a 6-foot person casts a shadow 4 feet long. How tall is the tree?',
        solution: `Step 1: Identify the similar triangles:
The tree and its shadow form a right triangle
The person and their shadow form a right triangle
Since the sun angle is the same, these triangles are similar

Step 2: Set up the proportion:
Tree height/Tree shadow = Person height/Person shadow
h/24 = 6/4

Step 3: Simplify the right side:
h/24 = 3/2

Step 4: Cross multiply:
2h = 24 × 3
2h = 72
h = 36

Step 5: Alternative method - find scale factor:
Scale factor = 24/4 = 6
Tree height = 6 × 6 = 36 feet

Step 6: Verify:
36/24 = 3/2 ✓
6/4 = 3/2 ✓
The ratios are equal

Answer: The tree is 36 feet tall`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: similarTriangles.id,
        front: 'What does it mean for two triangles to be similar?',
        back: 'Their corresponding angles are equal and their corresponding sides are proportional (in the same ratio).',
        hint: 'Same shape, different size',
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        front: 'What is the symbol for similarity?',
        back: '~ (tilde). Example: △ABC ~ △DEF means "triangle ABC is similar to triangle DEF".',
        hint: 'Wavy equals sign',
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        front: 'What are the three ways to prove triangles are similar?',
        back: 'AA (two angles equal), SSS (all sides proportional), SAS (two sides proportional and included angle equal).',
        hint: 'AA, SSS, or SAS similarity',
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        front: 'If two triangles are similar with a scale factor of k, what is the ratio of their perimeters?',
        back: 'The ratio of perimeters is also k (the same as the side ratio).',
        hint: 'Perimeter ratio = side ratio',
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        front: 'If two triangles are similar with a scale factor of k, what is the ratio of their areas?',
        back: 'The ratio of areas is k² (the square of the side ratio).',
        hint: 'Area ratio = (side ratio)²',
        isPremium: false
      },
      {
        topicId: similarTriangles.id,
        front: 'What is AA Similarity?',
        back: 'If two angles of one triangle are congruent to two angles of another triangle, the triangles are similar. (The third angle must also be equal since angles sum to 180°.)',
        hint: 'Two angles are enough',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: similar-triangles-geometry');

  // TOPIC 2: Triangle Angle Sum Theorem
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: triangleAngleSum.id,
        question: 'In a triangle, two angles measure 45° and 70°. Find the measure of the third angle.',
        solution: `Step 1: Recall Triangle Angle Sum Theorem:
The sum of the three interior angles of any triangle is 180°

Step 2: Set up the equation:
45° + 70° + x = 180°

Step 3: Simplify:
115° + x = 180°

Step 4: Solve for x:
x = 180° - 115°
x = 65°

Step 5: Verify:
45° + 70° + 65° = 180° ✓

Answer: The third angle measures 65°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        question: 'In triangle ABC, angle A = 3x, angle B = 2x, and angle C = x. Find the value of x and the measure of each angle.',
        solution: `Step 1: Use Triangle Angle Sum:
The sum of angles = 180°
A + B + C = 180°

Step 2: Substitute the expressions:
3x + 2x + x = 180°

Step 3: Combine like terms:
6x = 180°

Step 4: Solve for x:
x = 180°/6
x = 30°

Step 5: Find each angle:
Angle A = 3x = 3(30°) = 90°
Angle B = 2x = 2(30°) = 60°
Angle C = x = 30°

Step 6: Verify:
90° + 60° + 30° = 180° ✓

Answer: x = 30°, angles are 90°, 60°, and 30°`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        question: 'An exterior angle of a triangle measures 125°. One of the non-adjacent interior angles is 55°. Find the other non-adjacent interior angle.',
        solution: `Step 1: Recall Exterior Angle Theorem:
An exterior angle of a triangle equals the sum of the
two non-adjacent (remote) interior angles

Step 2: Set up the equation:
Exterior angle = Sum of two remote interior angles
125° = 55° + x

Step 3: Solve for x:
x = 125° - 55°
x = 70°

Step 4: Verify using Triangle Angle Sum:
Adjacent interior angle = 180° - 125° = 55°
All three interior angles: 55° + 55° + 70° = 180° ✓

Answer: The other non-adjacent interior angle is 70°`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        question: 'In triangle XYZ, angle X = (2a + 10)°, angle Y = (3a - 5)°, and angle Z = (a + 25)°. Find the value of a and all three angle measures.',
        solution: `Step 1: Use Triangle Angle Sum Theorem:
X + Y + Z = 180°

Step 2: Substitute the expressions:
(2a + 10) + (3a - 5) + (a + 25) = 180

Step 3: Combine like terms:
2a + 3a + a + 10 - 5 + 25 = 180
6a + 30 = 180

Step 4: Solve for a:
6a = 180 - 30
6a = 150
a = 25

Step 5: Find each angle:
Angle X = 2a + 10 = 2(25) + 10 = 50 + 10 = 60°
Angle Y = 3a - 5 = 3(25) - 5 = 75 - 5 = 70°
Angle Z = a + 25 = 25 + 25 = 50°

Step 6: Verify:
60° + 70° + 50° = 180° ✓

Answer: a = 25, angles are 60°, 70°, and 50°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        question: 'In an isosceles triangle, the vertex angle is twice the measure of each base angle. Find all three angles.',
        solution: `Step 1: Define variables:
Let x = measure of each base angle
In an isosceles triangle, the two base angles are equal
Vertex angle = 2x (given as twice a base angle)

Step 2: Apply Triangle Angle Sum:
Base angle + Base angle + Vertex angle = 180°
x + x + 2x = 180°

Step 3: Solve:
4x = 180°
x = 45°

Step 4: Find all angles:
Each base angle = x = 45°
Vertex angle = 2x = 2(45°) = 90°

Step 5: Verify:
45° + 45° + 90° = 180° ✓
This is a 45-45-90 triangle (an isosceles right triangle)

Step 6: Check the relationship:
Vertex angle = 90° = 2(45°) ✓
The vertex angle is indeed twice each base angle

Answer: The base angles are 45° each, and the vertex angle is 90°`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: triangleAngleSum.id,
        front: 'What is the Triangle Angle Sum Theorem?',
        back: 'The sum of the three interior angles of any triangle is always 180°.',
        hint: 'All triangle angles add to 180°',
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        front: 'What is an exterior angle of a triangle?',
        back: 'An angle formed when one side of the triangle is extended. It is supplementary to its adjacent interior angle.',
        hint: 'Outside angle, formed by extending a side',
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        front: 'What is the Exterior Angle Theorem?',
        back: 'An exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles.',
        hint: 'Exterior = sum of two remote interior',
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        front: 'Can a triangle have two right angles?',
        back: 'No! If two angles are 90° each, their sum is already 180°, leaving 0° for the third angle, which is impossible.',
        hint: 'Two 90° angles = 180° already',
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        front: 'Can a triangle have two obtuse angles?',
        back: 'No! Two obtuse angles (each > 90°) would sum to more than 180°, which is impossible for a triangle.',
        hint: 'Two obtuse > 180°',
        isPremium: false
      },
      {
        topicId: triangleAngleSum.id,
        front: 'What are remote interior angles?',
        back: 'The two interior angles that are NOT adjacent to a given exterior angle. They sum to equal the exterior angle.',
        hint: 'The two inside angles far from the exterior',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: triangle-angle-sum');

  // TOPIC 3: Congruent Triangles
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: congruentTriangles.id,
        question: 'Two triangles have all three pairs of corresponding sides equal: AB = DE = 5, BC = EF = 7, and AC = DF = 8. Are the triangles congruent? Which postulate proves it?',
        solution: `Step 1: Identify what is given:
All three pairs of corresponding sides are equal:
AB = DE = 5
BC = EF = 7
AC = DF = 8

Step 2: Recall SSS (Side-Side-Side) Congruence:
If three sides of one triangle are congruent to three
sides of another triangle, the triangles are congruent

Step 3: Apply SSS:
Since all three pairs of sides are equal,
△ABC ≅ △DEF by SSS

Step 4: What this means:
The triangles are exactly the same size and shape
All corresponding angles are also equal

Answer: Yes, the triangles are congruent by SSS (Side-Side-Side)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        question: 'In triangles ABC and XYZ: AB = XY = 10, AC = XZ = 12, and angle A = angle X = 60°. Are the triangles congruent? Which postulate?',
        solution: `Step 1: Identify what is given:
Two sides and the included angle are equal:
AB = XY = 10 (one side)
Angle A = Angle X = 60° (included angle)
AC = XZ = 12 (other side)

Step 2: Recall SAS (Side-Angle-Side) Congruence:
If two sides and the included angle of one triangle
are congruent to two sides and the included angle of
another triangle, the triangles are congruent

Step 3: Check that the angle is included:
Angle A is between sides AB and AC ✓
Angle X is between sides XY and XZ ✓
The angle is included (between the two sides)

Step 4: Apply SAS:
△ABC ≅ △XYZ by SAS

Answer: Yes, the triangles are congruent by SAS (Side-Angle-Side)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        question: 'Triangles PQR and STU have: angle P = angle S = 45°, angle Q = angle T = 75°, and PQ = ST = 6. Prove the triangles are congruent.',
        solution: `Step 1: Identify what is given:
Two angles and the included side:
Angle P = Angle S = 45°
Side PQ = Side ST = 6 (between angles P and Q)
Angle Q = Angle T = 75°

Step 2: Recall ASA (Angle-Side-Angle) Congruence:
If two angles and the included side of one triangle
are congruent to two angles and the included side of
another triangle, the triangles are congruent

Step 3: Verify the side is included:
PQ is the side between angles P and Q ✓
ST is the side between angles S and T ✓

Step 4: Apply ASA:
△PQR ≅ △STU by ASA

Step 5: Additional note:
We could also find the third angles:
Angle R = 180° - 45° - 75° = 60°
Angle U = 180° - 45° - 75° = 60°

Answer: The triangles are congruent by ASA (Angle-Side-Angle)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        question: 'In the figure, line segment AC bisects angle BAD and angle BCD. If AB = AD and CB = CD, prove that triangles ABC and ADC are congruent.',
        solution: `Step 1: List what we know:
Given:
- AC bisects angle BAD (so angle BAC = angle DAC)
- AC bisects angle BCD (so angle BCA = angle DCA)
- AB = AD
- CB = CD
- AC = AC (reflexive - shared side)

Step 2: Identify congruent parts:
Sides:
- AB = AD (given)
- CB = CD (given)
- AC = AC (reflexive property)

All three sides are congruent!

Step 3: Apply SSS Congruence:
△ABC ≅ △ADC by SSS

Step 4: Alternative approach using SAS:
- AB = AD (given)
- Angle BAC = Angle DAC (AC bisects angle BAD)
- AC = AC (reflexive)
Therefore △ABC ≅ △ADC by SAS

Step 5: What this proves:
BC = DC and all corresponding parts are congruent (CPCTC)

Answer: △ABC ≅ △ADC by SSS (or by SAS)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        question: 'Given: In quadrilateral ABCD, AB ∥ CD and AB = CD. The diagonals AC and BD intersect at point E. Prove that △ABE ≅ △CDE.',
        solution: `Step 1: Analyze the given information:
- AB ∥ CD (parallel sides)
- AB = CD (equal sides)
- Need to prove △ABE ≅ △CDE

Step 2: Use properties of parallel lines:
Since AB ∥ CD and AC is a transversal:
- Angle BAE = Angle DCE (alternate interior angles)

Since AB ∥ CD and BD is a transversal:
- Angle ABE = Angle CDE (alternate interior angles)

Step 3: Identify congruent parts:
Angles:
- Angle BAE = Angle DCE (alternate interior)
- Angle ABE = Angle CDE (alternate interior)
Side:
- AB = CD (given)

Step 4: Apply ASA Congruence:
We have:
- Angle BAE = Angle DCE (angle)
- AB = CD (side)
- Angle ABE = Angle CDE (angle)

This is ASA: Angle-Side-Angle

Step 5: State the conclusion:
△ABE ≅ △CDE by ASA

Step 6: Implications (CPCTC):
Since the triangles are congruent:
- AE = CE
- BE = DE
- The diagonals bisect each other

Answer: △ABE ≅ △CDE by ASA using alternate interior angles from parallel lines`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: congruentTriangles.id,
        front: 'What does it mean for triangles to be congruent?',
        back: 'They are identical in size and shape. All corresponding sides and angles are equal. Symbol: ≅',
        hint: 'Exactly the same',
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        front: 'What is SSS Congruence?',
        back: 'Side-Side-Side: If three sides of one triangle equal three sides of another triangle, the triangles are congruent.',
        hint: 'All three sides equal',
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        front: 'What is SAS Congruence?',
        back: 'Side-Angle-Side: If two sides and the included angle of one triangle equal two sides and the included angle of another, the triangles are congruent.',
        hint: 'Two sides with angle between',
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        front: 'What is ASA Congruence?',
        back: 'Angle-Side-Angle: If two angles and the included side of one triangle equal two angles and the included side of another, the triangles are congruent.',
        hint: 'Two angles with side between',
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        front: 'What is AAS Congruence?',
        back: 'Angle-Angle-Side: If two angles and a non-included side of one triangle equal two angles and the corresponding non-included side of another, the triangles are congruent.',
        hint: 'Two angles and a non-included side',
        isPremium: false
      },
      {
        topicId: congruentTriangles.id,
        front: 'What does CPCTC mean?',
        back: 'Corresponding Parts of Congruent Triangles are Congruent. Once you prove triangles congruent, you can conclude all their corresponding parts are equal.',
        hint: 'Used after proving congruence',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: congruent-triangles');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
