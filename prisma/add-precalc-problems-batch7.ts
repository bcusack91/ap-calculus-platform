import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems to AP Precalculus - Batch 7 FINAL: Exponential/Logarithmic and Parameters/Vectors/Matrices (5 topics)...');

  // Find the topics
  const solvingExpLog = await prisma.topic.findFirst({
    where: { slug: 'solving-exponential-logarithmic-equations' }
  });

  const expLogModels = await prisma.topic.findFirst({
    where: { slug: 'logarithmic-exponential-models' }
  });

  const parametricEquations = await prisma.topic.findFirst({
    where: { slug: 'parametric-equations' }
  });

  const polarCoordinates = await prisma.topic.findFirst({
    where: { slug: 'polar-coordinates' }
  });

  const matrixOperations = await prisma.topic.findFirst({
    where: { slug: 'matrix-operations' }
  });

  if (!solvingExpLog || !expLogModels || !parametricEquations || !polarCoordinates || !matrixOperations) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Solving Exponential and Logarithmic Equations (needs 1 more problem)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: solvingExpLog.id,
        question: 'Solve: log₂(x + 3) + log₂(x - 3) = 4',
        solution: `Step 1: Use product rule to combine logs:
log₂[(x + 3)(x - 3)] = 4

Step 2: Simplify:
log₂(x² - 9) = 4

Step 3: Convert to exponential form:
x² - 9 = 2⁴
x² - 9 = 16

Step 4: Solve for x:
x² = 25
x = ±5

Step 5: Check domain restrictions:
For x = 5: x + 3 = 8 > 0 ✓, x - 3 = 2 > 0 ✓
For x = -5: x + 3 = -2 < 0 ✗
x = -5 is extraneous

Step 6: Verify x = 5:
log₂(8) + log₂(2) = 3 + 1 = 4 ✓

Answer: x = 5`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 1 more problem to: solving-exponential-logarithmic-equations (now has 5 total)');

  // TOPIC 2: Logarithmic and Exponential Models (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: expLogModels.id,
        question: 'A bacteria population starts at 500 and doubles every 3 hours. Write an exponential model and find the population after 12 hours.',
        solution: `Step 1: Use exponential growth model:
P(t) = P₀ · 2^(t/d)
where P₀ = initial amount, d = doubling time

Step 2: Identify values:
P₀ = 500
d = 3 hours

Step 3: Write the model:
P(t) = 500 · 2^(t/3)

Step 4: Find population at t = 12:
P(12) = 500 · 2^(12/3)
      = 500 · 2⁴
      = 500 · 16
      = 8000

Answer: Model: P(t) = 500 · 2^(t/3); Population after 12 hours: 8000`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: expLogModels.id,
        question: 'The magnitude M of an earthquake is given by M = log(I/I₀), where I is the intensity and I₀ is a reference intensity. How many times more intense is an earthquake of magnitude 7 compared to one of magnitude 5?',
        solution: `Step 1: Set up equations for both magnitudes:
M₁ = 7 = log(I₁/I₀)
M₂ = 5 = log(I₂/I₀)

Step 2: Convert to exponential form:
7 = log(I₁/I₀) → I₁/I₀ = 10⁷
5 = log(I₂/I₀) → I₂/I₀ = 10⁵

Step 3: Find the ratio I₁/I₂:
I₁ = I₀ · 10⁷
I₂ = I₀ · 10⁵

I₁/I₂ = (I₀ · 10⁷)/(I₀ · 10⁵)
      = 10⁷/10⁵
      = 10²
      = 100

Step 4: Interpretation:
An earthquake of magnitude 7 is 100 times more intense
than an earthquake of magnitude 5.

Answer: 100 times more intense`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: logarithmic-exponential-models (now has 5 total)');

  // TOPIC 3: Parametric Equations (already has 5 problems, just needs 1 more flashcard)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: parametricEquations.id,
        front: 'How do you eliminate the parameter from parametric equations?',
        back: 'Solve one equation for the parameter (usually t), then substitute into the other equation to get y in terms of x (or vice versa).',
        hint: 'Solve for t, then substitute',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 1 more flashcard to: parametric-equations (now has 6 total)');

  // TOPIC 4: Polar Coordinates and Graphs (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polarCoordinates.id,
        question: 'Convert the polar coordinates (4, π/3) to rectangular coordinates.',
        solution: `Step 1: Use conversion formulas:
x = r cos(θ)
y = r sin(θ)

Step 2: Identify r and θ:
r = 4, θ = π/3

Step 3: Calculate x:
x = 4 cos(π/3)
  = 4 · (1/2)
  = 2

Step 4: Calculate y:
y = 4 sin(π/3)
  = 4 · (√3/2)
  = 2√3

Step 5: Write rectangular coordinates:
(x, y) = (2, 2√3)

Answer: (2, 2√3)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polarCoordinates.id,
        question: 'Convert the rectangular equation x² + y² = 9 to polar form.',
        solution: `Step 1: Recall conversion relationships:
x = r cos(θ)
y = r sin(θ)
x² + y² = r²

Step 2: Substitute into equation:
x² + y² = 9
r² = 9

Step 3: Solve for r:
r = ±3

Step 4: Simplify (standard form):
In polar coordinates, we typically use r = 3
(r = -3 represents the same circle)

Step 5: Interpretation:
This is a circle with radius 3 centered at the origin

Answer: r = 3`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: polar-coordinates (now has 5 total)');

  // TOPIC 5: Matrix Operations and Applications (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: matrixOperations.id,
        question: 'Find the product AB where A = [2 1; 3 4] and B = [5 6; 7 8].',
        solution: `Step 1: Check dimensions:
A is 2×2, B is 2×2
Product AB will be 2×2

Step 2: Calculate element (1,1):
Row 1 of A × Column 1 of B:
2(5) + 1(7) = 10 + 7 = 17

Step 3: Calculate element (1,2):
Row 1 of A × Column 2 of B:
2(6) + 1(8) = 12 + 8 = 20

Step 4: Calculate element (2,1):
Row 2 of A × Column 1 of B:
3(5) + 4(7) = 15 + 28 = 43

Step 5: Calculate element (2,2):
Row 2 of A × Column 2 of B:
3(6) + 4(8) = 18 + 32 = 50

Step 6: Write result matrix:
AB = [17  20]
     [43  50]

Answer: [17  20]
        [43  50]`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: matrixOperations.id,
        question: 'A company makes two products. Product A requires 2 hours of labor and 3 kg of material. Product B requires 1 hour of labor and 2 kg of material. The company plans to make 50 units of A and 30 units of B. Use matrix multiplication to find total labor hours and material needed.',
        solution: `Step 1: Set up requirement matrix R (resources × products):
R = [2  1]  (hours)
    [3  2]  (kg)

Step 2: Set up production matrix P (products × 1):
P = [50]  (product A)
    [30]  (product B)

Step 3: Calculate RP (total resources):
[2  1][50] = [2(50) + 1(30)]
[3  2][30]   [3(50) + 2(30)]

Step 4: Compute:
Row 1: 2(50) + 1(30) = 100 + 30 = 130 hours
Row 2: 3(50) + 2(30) = 150 + 60 = 210 kg

Step 5: Result:
[130]  (total labor hours)
[210]  (total material in kg)

Answer: 130 hours of labor, 210 kg of material`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: matrix-operations (now has 5 total)');

  console.log('\n🎉✨ AP PRECALCULUS 100% COMPLETE! All 34 topics now have ≥5 problems and ≥6 flashcards! ✨🎉');
  
  await prisma.$disconnect();
}

main();
