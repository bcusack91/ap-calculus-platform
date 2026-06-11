import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Geometry topics - Batch 5 (4 topics)...');

  // Find the topics
  const sectorArc = await prisma.topic.findFirst({
    where: { slug: 'sector-area-arc-length' }
  });

  const inscribedAnglesGeometry = await prisma.topic.findFirst({
    where: { slug: 'inscribed-angles-geometry' }
  });

  const inscribedAngles = await prisma.topic.findFirst({
    where: { slug: 'inscribed-angles' }
  });

  const tangentLines = await prisma.topic.findFirst({
    where: { slug: 'tangent-lines' }
  });

  if (!sectorArc || !inscribedAnglesGeometry || !inscribedAngles || !tangentLines) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Sector Area and Arc Length
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: sectorArc.id,
        question: 'A circle has a radius of 6 cm. Find the length of an arc that subtends a central angle of 60°.',
        solution: `Step 1: Understand what we're finding:
Arc length is a portion of the circumference

Step 2: Use the arc length formula:
Arc length = (θ/360°) × 2πr
where θ is the central angle in degrees

Step 3: Substitute values:
Arc length = (60°/360°) × 2π(6)
Arc length = (1/6) × 12π
Arc length = 2π cm

Step 4: Approximate (optional):
2π ≈ 2 × 3.14159 ≈ 6.28 cm

Step 5: Verify the logic:
60° is 1/6 of 360° (full circle)
So arc is 1/6 of circumference
C = 2π(6) = 12π
Arc = 12π/6 = 2π ✓

Answer: Arc length = 2π cm (≈ 6.28 cm)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        question: 'Find the area of a sector with a central angle of 90° in a circle with radius 8 cm.',
        solution: `Step 1: Use the sector area formula:
Sector area = (θ/360°) × πr²

Step 2: Substitute values:
Sector area = (90°/360°) × π(8)²
Sector area = (1/4) × 64π
Sector area = 16π cm²

Step 3: Approximate (optional):
16π ≈ 50.27 cm²

Step 4: Verify:
90° is 1/4 of 360°
Total circle area = π(8)² = 64π
Sector = 64π/4 = 16π ✓

Answer: Sector area = 16π cm² (≈ 50.27 cm²)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        question: 'An arc of length 10π cm subtends a central angle of 120° in a circle. Find the radius of the circle.',
        solution: `Step 1: Use arc length formula:
Arc length = (θ/360°) × 2πr

Step 2: Substitute known values:
10π = (120°/360°) × 2πr
10π = (1/3) × 2πr
10π = (2π/3)r

Step 3: Solve for r:
10π = (2π/3)r
10π × (3/2π) = r
30π/2π = r
r = 15 cm

Step 4: Verify:
Arc = (120°/360°) × 2π(15)
Arc = (1/3) × 30π
Arc = 10π ✓

Answer: The radius is 15 cm`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        question: 'A sector has an area of 27π square meters and a central angle of 135°. Find the radius of the circle.',
        solution: `Step 1: Use sector area formula:
Sector area = (θ/360°) × πr²

Step 2: Substitute known values:
27π = (135°/360°) × πr²

Step 3: Simplify the fraction:
135°/360° = 3/8
27π = (3/8) × πr²

Step 4: Solve for r²:
27π = (3π/8)r²
27π × (8/3π) = r²
216π/3π = r²
72 = r²

Step 5: Solve for r:
r = √72
r = √(36 × 2)
r = 6√2 meters

Step 6: Verify:
Sector area = (3/8) × π(6√2)²
= (3/8) × π(72)
= (3/8) × 72π
= 27π ✓

Answer: The radius is 6√2 meters (≈ 8.49 m)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        question: 'A pendulum swings through an arc of 18 inches. The pendulum is 24 inches long. Find: (a) the central angle in degrees, and (b) the area of the sector formed.',
        solution: `Step 1: Understand the setup:
Arc length = 18 inches
Radius (pendulum length) = 24 inches
Need to find the central angle θ

Step 2: Use arc length formula to find θ:
Arc length = (θ/360°) × 2πr
18 = (θ/360°) × 2π(24)
18 = (θ/360°) × 48π

Step 3: Solve for θ:
18 × 360° = θ × 48π
6480° = 48πθ
θ = 6480°/(48π)
θ = 135°/π

Step 4: Calculate θ in degrees:
θ = 135°/π ≈ 135°/3.14159 ≈ 42.97°

Step 5: Find sector area:
Sector area = (θ/360°) × πr²

Using exact value θ = 135°/π:
Sector area = (135°/π / 360°) × π(24)²
Sector area = (135°/(360°π)) × 576π
Sector area = (135° × 576π)/(360°π)
Sector area = (135° × 576)/(360°)
Sector area = 77760°/360°
Sector area = 216 square inches

Step 6: Alternative method for area:
Area = (1/2) × arc length × radius
Area = (1/2) × 18 × 24
Area = 216 square inches ✓

Answer: (a) Central angle ≈ 42.97° (or exactly 135°/π)
        (b) Sector area = 216 square inches`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: sectorArc.id,
        front: 'What is an arc?',
        back: 'A portion of the circumference of a circle, measured between two points on the circle.',
        hint: 'Part of the circle\'s edge',
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        front: 'What is the formula for arc length?',
        back: 'Arc length = (θ/360°) × 2πr, where θ is the central angle in degrees and r is the radius.',
        hint: '(θ/360°) × circumference',
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        front: 'What is a sector?',
        back: 'A region bounded by two radii and an arc. It looks like a "slice of pie."',
        hint: 'Pie slice of a circle',
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        front: 'What is the formula for sector area?',
        back: 'Sector area = (θ/360°) × πr², where θ is the central angle in degrees.',
        hint: '(θ/360°) × circle area',
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        front: 'What is a central angle?',
        back: 'An angle whose vertex is at the center of the circle. It intercepts an arc on the circle.',
        hint: 'Angle at the center',
        isPremium: false
      },
      {
        topicId: sectorArc.id,
        front: 'Alternative formula for sector area using arc length?',
        back: 'Area = (1/2) × arc length × radius, or A = (1/2)sr where s is arc length.',
        hint: '(1/2) × arc × radius',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: sector-area-arc-length');

  // TOPIC 2: Inscribed Angles (inscribed-angles-geometry)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inscribedAnglesGeometry.id,
        question: 'A central angle in a circle measures 80°. Find the measure of an inscribed angle that intercepts the same arc.',
        solution: `Step 1: Recall the Inscribed Angle Theorem:
An inscribed angle is half the measure of the
central angle that subtends the same arc

Step 2: Apply the theorem:
Inscribed angle = (1/2) × Central angle
Inscribed angle = (1/2) × 80°
Inscribed angle = 40°

Step 3: Understand why:
The inscribed angle has its vertex on the circle
The central angle has its vertex at the center
They both intercept the same arc

Answer: The inscribed angle measures 40°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        question: 'An inscribed angle measures 55°. What is the measure of its intercepted arc?',
        solution: `Step 1: Recall the relationship:
Inscribed angle = (1/2) × intercepted arc

Step 2: Set up equation:
55° = (1/2) × arc

Step 3: Solve for the arc:
arc = 2 × 55°
arc = 110°

Step 4: Verify:
Inscribed angle = 110°/2 = 55° ✓

Answer: The intercepted arc measures 110°`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        question: 'Points A, B, C are on a circle. Arc ABC (going the long way around) measures 250°. Find the measure of inscribed angle ABC.',
        solution: `Step 1: Identify the intercepted arc:
Inscribed angle ABC has vertex at B
It intercepts arc AC (the short way)

Step 2: Find the short arc AC:
Total circle = 360°
Arc ABC (long way) = 250°
Arc AC (short way) = 360° - 250° = 110°

Step 3: Apply Inscribed Angle Theorem:
Inscribed angle = (1/2) × intercepted arc
Angle ABC = (1/2) × 110°
Angle ABC = 55°

Step 4: Important note:
The inscribed angle intercepts the arc that
does NOT contain the vertex

Answer: Angle ABC = 55°`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        question: 'A quadrilateral ABCD is inscribed in a circle. Angle A = 110° and angle B = 75°. Find angles C and D.',
        solution: `Step 1: Recall inscribed quadrilateral property:
Opposite angles in an inscribed quadrilateral
(cyclic quadrilateral) are supplementary

Step 2: Find angle C (opposite to angle A):
Angle A + Angle C = 180°
110° + Angle C = 180°
Angle C = 70°

Step 3: Find angle D (opposite to angle B):
Angle B + Angle D = 180°
75° + Angle D = 180°
Angle D = 105°

Step 4: Verify all angles sum to 360°:
110° + 75° + 70° + 105° = 360° ✓

Step 5: Verify opposite pairs:
A + C = 110° + 70° = 180° ✓
B + D = 75° + 105° = 180° ✓

Answer: Angle C = 70°, Angle D = 105°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        question: 'In circle O, chord AB is a diameter. Point C is on the circle. Prove that angle ACB is a right angle.',
        solution: `Step 1: Identify what we know:
AB is a diameter
C is a point on the circle
Need to prove: angle ACB = 90°

Step 2: Understand the intercepted arc:
Since AB is a diameter, it divides the circle into
two semicircles
Arc ACB (going through C) is a semicircle = 180°

Step 3: Apply Inscribed Angle Theorem:
Inscribed angle ACB intercepts arc AB
Since AB is a diameter, arc AB = 180° (semicircle)

Angle ACB = (1/2) × 180°
Angle ACB = 90°

Step 4: State the theorem:
This proves Thales' Theorem:
"An angle inscribed in a semicircle is a right angle"

Step 5: Why this works:
Any triangle inscribed in a semicircle with the
diameter as one side must be a right triangle

Step 6: Conclusion:
Angle ACB = 90° ✓

This theorem is extremely useful:
If you know AB is a diameter and C is any other
point on the circle, triangle ABC is always a
right triangle with the right angle at C

Answer: Angle ACB = 90° (proved by Inscribed Angle Theorem and the fact that a diameter creates a 180° arc)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inscribedAnglesGeometry.id,
        front: 'What is an inscribed angle?',
        back: 'An angle formed by two chords that share an endpoint on the circle. The vertex is ON the circle.',
        hint: 'Vertex on the circle',
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        front: 'What is the Inscribed Angle Theorem?',
        back: 'An inscribed angle is half the measure of the central angle that subtends the same arc. Or: inscribed angle = (1/2) × intercepted arc.',
        hint: 'Half the central angle or arc',
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        front: 'If two inscribed angles intercept the same arc, what is true?',
        back: 'They are congruent (equal in measure). All inscribed angles intercepting the same arc are equal.',
        hint: 'Same arc → equal angles',
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        front: 'What is Thales\' Theorem?',
        back: 'An angle inscribed in a semicircle is always a right angle (90°). If the intercepted arc is a diameter, the inscribed angle is 90°.',
        hint: 'Semicircle → 90° angle',
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        front: 'In a cyclic quadrilateral (inscribed in a circle), what is true about opposite angles?',
        back: 'Opposite angles are supplementary - they add up to 180°.',
        hint: 'Opposite angles sum to 180°',
        isPremium: false
      },
      {
        topicId: inscribedAnglesGeometry.id,
        front: 'What arc does an inscribed angle intercept?',
        back: 'The arc between the two endpoints of the angle that does NOT contain the vertex.',
        hint: 'The arc "across from" the vertex',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: inscribed-angles-geometry');

  // TOPIC 3: Inscribed Angles (inscribed-angles - duplicate topic, adding same content)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inscribedAngles.id,
        question: 'A central angle in a circle measures 80°. Find the measure of an inscribed angle that intercepts the same arc.',
        solution: `Step 1: Recall the Inscribed Angle Theorem:
An inscribed angle is half the measure of the
central angle that subtends the same arc

Step 2: Apply the theorem:
Inscribed angle = (1/2) × Central angle
Inscribed angle = (1/2) × 80°
Inscribed angle = 40°

Step 3: Understand why:
The inscribed angle has its vertex on the circle
The central angle has its vertex at the center
They both intercept the same arc

Answer: The inscribed angle measures 40°`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        question: 'An inscribed angle measures 55°. What is the measure of its intercepted arc?',
        solution: `Step 1: Recall the relationship:
Inscribed angle = (1/2) × intercepted arc

Step 2: Set up equation:
55° = (1/2) × arc

Step 3: Solve for the arc:
arc = 2 × 55°
arc = 110°

Step 4: Verify:
Inscribed angle = 110°/2 = 55° ✓

Answer: The intercepted arc measures 110°`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        question: 'Points A, B, C are on a circle. Arc ABC (going the long way around) measures 250°. Find the measure of inscribed angle ABC.',
        solution: `Step 1: Identify the intercepted arc:
Inscribed angle ABC has vertex at B
It intercepts arc AC (the short way)

Step 2: Find the short arc AC:
Total circle = 360°
Arc ABC (long way) = 250°
Arc AC (short way) = 360° - 250° = 110°

Step 3: Apply Inscribed Angle Theorem:
Inscribed angle = (1/2) × intercepted arc
Angle ABC = (1/2) × 110°
Angle ABC = 55°

Step 4: Important note:
The inscribed angle intercepts the arc that
does NOT contain the vertex

Answer: Angle ABC = 55°`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        question: 'A quadrilateral ABCD is inscribed in a circle. Angle A = 110° and angle B = 75°. Find angles C and D.',
        solution: `Step 1: Recall inscribed quadrilateral property:
Opposite angles in an inscribed quadrilateral
(cyclic quadrilateral) are supplementary

Step 2: Find angle C (opposite to angle A):
Angle A + Angle C = 180°
110° + Angle C = 180°
Angle C = 70°

Step 3: Find angle D (opposite to angle B):
Angle B + Angle D = 180°
75° + Angle D = 180°
Angle D = 105°

Step 4: Verify all angles sum to 360°:
110° + 75° + 70° + 105° = 360° ✓

Step 5: Verify opposite pairs:
A + C = 110° + 70° = 180° ✓
B + D = 75° + 105° = 180° ✓

Answer: Angle C = 70°, Angle D = 105°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        question: 'In circle O, chord AB is a diameter. Point C is on the circle. Prove that angle ACB is a right angle.',
        solution: `Step 1: Identify what we know:
AB is a diameter
C is a point on the circle
Need to prove: angle ACB = 90°

Step 2: Understand the intercepted arc:
Since AB is a diameter, it divides the circle into
two semicircles
Arc ACB (going through C) is a semicircle = 180°

Step 3: Apply Inscribed Angle Theorem:
Inscribed angle ACB intercepts arc AB
Since AB is a diameter, arc AB = 180° (semicircle)

Angle ACB = (1/2) × 180°
Angle ACB = 90°

Step 4: State the theorem:
This proves Thales' Theorem:
"An angle inscribed in a semicircle is a right angle"

Step 5: Why this works:
Any triangle inscribed in a semicircle with the
diameter as one side must be a right triangle

Step 6: Conclusion:
Angle ACB = 90° ✓

This theorem is extremely useful:
If you know AB is a diameter and C is any other
point on the circle, triangle ABC is always a
right triangle with the right angle at C

Answer: Angle ACB = 90° (proved by Inscribed Angle Theorem and the fact that a diameter creates a 180° arc)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inscribedAngles.id,
        front: 'What is an inscribed angle?',
        back: 'An angle formed by two chords that share an endpoint on the circle. The vertex is ON the circle.',
        hint: 'Vertex on the circle',
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        front: 'What is the Inscribed Angle Theorem?',
        back: 'An inscribed angle is half the measure of the central angle that subtends the same arc. Or: inscribed angle = (1/2) × intercepted arc.',
        hint: 'Half the central angle or arc',
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        front: 'If two inscribed angles intercept the same arc, what is true?',
        back: 'They are congruent (equal in measure). All inscribed angles intercepting the same arc are equal.',
        hint: 'Same arc → equal angles',
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        front: 'What is Thales\' Theorem?',
        back: 'An angle inscribed in a semicircle is always a right angle (90°). If the intercepted arc is a diameter, the inscribed angle is 90°.',
        hint: 'Semicircle → 90° angle',
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        front: 'In a cyclic quadrilateral (inscribed in a circle), what is true about opposite angles?',
        back: 'Opposite angles are supplementary - they add up to 180°.',
        hint: 'Opposite angles sum to 180°',
        isPremium: false
      },
      {
        topicId: inscribedAngles.id,
        front: 'What arc does an inscribed angle intercept?',
        back: 'The arc between the two endpoints of the angle that does NOT contain the vertex.',
        hint: 'The arc "across from" the vertex',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: inscribed-angles');

  // TOPIC 4: Tangent Lines
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: tangentLines.id,
        question: 'A line is tangent to a circle with radius 5 cm at point P. If the distance from the center O to a point Q on the tangent line is 13 cm, find the distance PQ.',
        solution: `Step 1: Understand the tangent property:
A tangent line is perpendicular to the radius
at the point of tangency

Step 2: Identify the right triangle:
Triangle OPQ has:
- Right angle at P (tangent ⊥ radius)
- OP = 5 cm (radius)
- OQ = 13 cm (given distance)
- PQ = ? (distance along tangent)

Step 3: Use Pythagorean Theorem:
OP² + PQ² = OQ²
5² + PQ² = 13²
25 + PQ² = 169

Step 4: Solve for PQ:
PQ² = 169 - 25
PQ² = 144
PQ = 12 cm

Step 5: Recognize the triple:
This is a 5-12-13 right triangle

Answer: PQ = 12 cm`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        question: 'Two tangent segments are drawn to a circle from an external point. If one tangent segment is 8 cm long, what is the length of the other tangent segment?',
        solution: `Step 1: Recall the Two-Tangent Theorem:
Tangent segments drawn from an external point
to a circle are congruent (equal in length)

Step 2: Apply the theorem:
If one tangent segment = 8 cm
Then the other tangent segment = 8 cm

Step 3: Understand why:
Both segments are from the same external point
to points of tangency on the circle
By symmetry and congruent triangles, they're equal

Answer: The other tangent segment is 8 cm`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        question: 'From point P outside a circle, two tangents are drawn touching the circle at points A and B. If PA = 15 cm and the radius is 9 cm, find the distance from P to the center O.',
        solution: `Step 1: Draw and understand the figure:
- P is external point
- PA and PB are tangent segments (PA = PB = 15)
- O is the center
- Radius OA = OB = 9

Step 2: Identify the right triangle:
Triangle OAP has:
- Right angle at A (tangent ⊥ radius)
- OA = 9 cm (radius)
- PA = 15 cm (tangent segment)
- OP = ? (distance to center)

Step 3: Use Pythagorean Theorem:
OA² + PA² = OP²
9² + 15² = OP²
81 + 225 = OP²
306 = OP²

Step 4: Solve for OP:
OP = √306
OP = √(9 × 34)
OP = 3√34 cm

Step 5: Approximate:
OP ≈ 3 × 5.831 ≈ 17.49 cm

Answer: OP = 3√34 cm (≈ 17.49 cm)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        question: 'A belt wraps around two circular pulleys with radii 8 cm and 12 cm. The distance between their centers is 25 cm. Find the length of the belt that is NOT touching either pulley (the external tangent length).',
        solution: `Step 1: Understand the setup:
Two circles with radii r₁ = 8 cm and r₂ = 12 cm
Distance between centers = 25 cm
Need length of external tangent segment

Step 2: Use the external tangent formula:
For external tangent between circles:
Create a right triangle by drawing a line parallel
to the tangent from the smaller circle's center

Step 3: Find the height of the right triangle:
Height = |r₂ - r₁| = |12 - 8| = 4 cm

Step 4: The hypotenuse is the distance between centers:
Hypotenuse = 25 cm

Step 5: Use Pythagorean Theorem:
Tangent length² + 4² = 25²
Tangent length² + 16 = 625
Tangent length² = 609
Tangent length = √609 cm

Step 6: Simplify:
√609 = √(21 × 29) (cannot simplify further)
√609 ≈ 24.68 cm

Step 7: Total belt length consideration:
The question asks for ONE external tangent segment
Length = √609 ≈ 24.68 cm

Answer: The external tangent length is √609 cm (≈ 24.68 cm)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        question: 'From external point P, tangents PA and PB are drawn to circle O, touching at points A and B. If angle APB = 60° and PA = 10 cm, find: (a) the radius of the circle, and (b) the distance PO.',
        solution: `Step 1: Understand the configuration:
- PA and PB are equal tangent segments = 10 cm
- Angle APB = 60°
- Need to find radius and PO

Step 2: Use symmetry:
Since PA = PB, triangle PAB is isosceles
PO bisects angle APB
So angle APO = angle BPO = 30°

Step 3: Analyze triangle OAP:
- Angle OAP = 90° (tangent ⊥ radius)
- Angle APO = 30°
- Therefore angle AOP = 60° (angles sum to 180°)

This is a 30-60-90 triangle!

Step 4: Use 30-60-90 triangle ratios:
In a 30-60-90 triangle: sides are in ratio 1 : √3 : 2
- Side opposite 30° (OA = radius) : shortest
- Side opposite 60° (PA = 10) : middle
- Side opposite 90° (PO) : longest

Step 5: Find the radius:
If PA (opposite 60°) = 10 = x√3
Then x = 10/√3 = 10√3/3
Radius OA = x = 10√3/3 cm

Step 6: Find PO:
PO (opposite 90°) = 2x = 2(10√3/3) = 20√3/3 cm

Step 7: Alternative method using right triangle:
In triangle OAP:
tan(30°) = OA/PA
OA = PA × tan(30°) = 10 × (1/√3) = 10/√3 = 10√3/3 ✓

cos(30°) = PA/PO
PO = PA/cos(30°) = 10/(√3/2) = 20/√3 = 20√3/3 ✓

Step 8: Approximate values:
Radius ≈ 10(1.732)/3 ≈ 5.77 cm
PO ≈ 20(1.732)/3 ≈ 11.55 cm

Answer: (a) Radius = 10√3/3 cm (≈ 5.77 cm)
        (b) Distance PO = 20√3/3 cm (≈ 11.55 cm)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: tangentLines.id,
        front: 'What is a tangent line to a circle?',
        back: 'A line that touches the circle at exactly one point. At the point of tangency, it is perpendicular to the radius.',
        hint: 'Touches at one point, perpendicular to radius',
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        front: 'What is the relationship between a tangent and radius?',
        back: 'A tangent line is perpendicular to the radius at the point of tangency (forms a 90° angle).',
        hint: 'Perpendicular at point of contact',
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        front: 'What is the Two-Tangent Theorem?',
        back: 'Tangent segments drawn from the same external point to a circle are congruent (equal in length).',
        hint: 'Same external point → equal tangent segments',
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        front: 'What is the point of tangency?',
        back: 'The single point where a tangent line touches the circle.',
        hint: 'Where tangent touches circle',
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        front: 'If you know the radius and a tangent segment length from an external point, how do you find the distance to the center?',
        back: 'Use the Pythagorean Theorem: radius² + tangent² = distance²',
        hint: 'Forms a right triangle',
        isPremium: false
      },
      {
        topicId: tangentLines.id,
        front: 'Can two tangent lines be drawn from an external point to a circle?',
        back: 'Yes! Exactly two tangent lines can be drawn from any external point, and the tangent segments are equal.',
        hint: 'Two tangents, equal lengths',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: tangent-lines');

  console.log('\n✨ Successfully added problems and flashcards for 4 topics!');
  
  await prisma.$disconnect();
}

main();
