import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems to AP Precalculus - Batch 3: Function Fundamentals (4 topics)...');

  // Find the topics
  const functionTransformations = await prisma.topic.findFirst({
    where: { slug: 'function-transformations' }
  });

  const piecewiseFunctions = await prisma.topic.findFirst({
    where: { slug: 'piecewise-functions' }
  });

  const ratesOfChange = await prisma.topic.findFirst({
    where: { slug: 'rates-of-change' }
  });

  const systemsOfEquations = await prisma.topic.findFirst({
    where: { slug: 'systems-of-equations' }
  });

  if (!functionTransformations || !piecewiseFunctions || !ratesOfChange || !systemsOfEquations) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Function Transformations (needs 2 more problems to reach 5)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: functionTransformations.id,
        question: 'Describe the transformations from f(x) = x² to g(x) = -2(x + 3)² - 5.',
        solution: `Step 1: Identify each transformation in order:
g(x) = -2(x + 3)² - 5

Step 2: Horizontal shift:
(x + 3) means shift LEFT 3 units

Step 3: Vertical stretch/reflection:
Coefficient of -2:
• Factor of 2: vertical stretch by factor of 2
• Negative sign: reflection over x-axis

Step 4: Vertical shift:
-5 means shift DOWN 5 units

Step 5: Order of transformations:
1. Start with f(x) = x²
2. Shift left 3 units: (x + 3)²
3. Stretch vertically by 2: 2(x + 3)²
4. Reflect over x-axis: -2(x + 3)²
5. Shift down 5 units: -2(x + 3)² - 5

Answer: Shift left 3, stretch vertically by 2, reflect over x-axis, shift down 5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: functionTransformations.id,
        question: 'If f(x) = √x, write the equation for the function that results from compressing f horizontally by a factor of 4, then shifting right 2 units and up 1 unit.',
        solution: `Step 1: Start with f(x) = √x

Step 2: Horizontal compression by factor of 4:
Replace x with 4x: f(4x) = √(4x)

Step 3: Shift right 2 units:
Replace x with (x - 2): √(4(x - 2))

Step 4: Shift up 1 unit:
Add 1: √(4(x - 2)) + 1

Step 5: Simplify if desired:
g(x) = √(4(x - 2)) + 1
     = 2√(x - 2) + 1

Step 6: Verify:
• √(4x) compresses horizontally by 4
• √(4(x-2)) shifts right 2
• Adding 1 shifts up 1 ✓

Answer: g(x) = 2√(x - 2) + 1 or √(4(x - 2)) + 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: function-transformations (now has 5 total)');

  // TOPIC 2: Piecewise Functions (needs 2 more problems to reach 5)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: piecewiseFunctions.id,
        question: 'A function is defined as f(x) = { x² + 1,  if x < 0; 2x + 1,  if x ≥ 0 }. Evaluate f(-2), f(0), and f(3).',
        solution: `Step 1: Evaluate f(-2):
Is -2 < 0? Yes
Use f(x) = x² + 1
f(-2) = (-2)² + 1 = 4 + 1 = 5

Step 2: Evaluate f(0):
Is 0 < 0? No
Is 0 ≥ 0? Yes
Use f(x) = 2x + 1
f(0) = 2(0) + 1 = 1

Step 3: Evaluate f(3):
Is 3 < 0? No
Is 3 ≥ 0? Yes
Use f(x) = 2x + 1
f(3) = 2(3) + 1 = 7

Answer: f(-2) = 5, f(0) = 1, f(3) = 7`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: piecewiseFunctions.id,
        question: 'For f(x) = { -x + 2,  if x ≤ 1; x² - 2,  if x > 1 }, determine if f is continuous at x = 1.',
        solution: `Step 1: Find f(1) using the appropriate piece:
Since 1 ≤ 1, use f(x) = -x + 2
f(1) = -1 + 2 = 1

Step 2: Find the left-hand limit as x approaches 1:
lim(x→1⁻) f(x) = lim(x→1⁻) (-x + 2)
                = -1 + 2 = 1

Step 3: Find the right-hand limit as x approaches 1:
lim(x→1⁺) f(x) = lim(x→1⁺) (x² - 2)
                = 1² - 2 = -1

Step 4: Check continuity conditions:
For continuity at x = 1:
• lim(x→1⁻) f(x) = 1
• lim(x→1⁺) f(x) = -1
• f(1) = 1

Step 5: Conclusion:
Since lim(x→1⁻) f(x) ≠ lim(x→1⁺) f(x), the function is NOT continuous at x = 1.
There is a jump discontinuity at x = 1.

Answer: Not continuous (jump discontinuity at x = 1)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: piecewise-functions (now has 5 total)');

  // TOPIC 3: Average and Instantaneous Rates of Change (needs 2 more problems to reach 5)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: ratesOfChange.id,
        question: 'Find the average rate of change of f(x) = x² + 3x on the interval [1, 4].',
        solution: `Step 1: Use the average rate of change formula:
Average rate = [f(b) - f(a)] / (b - a)

Step 2: Identify a and b:
a = 1, b = 4

Step 3: Calculate f(1):
f(1) = 1² + 3(1) = 1 + 3 = 4

Step 4: Calculate f(4):
f(4) = 4² + 3(4) = 16 + 12 = 28

Step 5: Find the average rate of change:
Average rate = (28 - 4) / (4 - 1)
             = 24 / 3
             = 8

Answer: 8`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: ratesOfChange.id,
        question: 'A particle moves along a line with position function s(t) = t³ - 6t² + 9t. Find the instantaneous velocity at t = 2.',
        solution: `Step 1: Recall that instantaneous velocity is the derivative:
v(t) = s'(t)

Step 2: Find the derivative of s(t) = t³ - 6t² + 9t:
s'(t) = 3t² - 12t + 9

Step 3: Evaluate at t = 2:
v(2) = 3(2)² - 12(2) + 9
     = 3(4) - 24 + 9
     = 12 - 24 + 9
     = -3

Step 4: Interpret:
The instantaneous velocity at t = 2 is -3 units/time
The negative value indicates the particle is moving in the negative direction.

Answer: -3 units/time`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: rates-of-change (now has 5 total)');

  // TOPIC 4: Systems of Equations (needs 2 more problems to reach 5)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: systemsOfEquations.id,
        question: 'Solve the system: 2x + 3y = 12 and x - y = 1',
        solution: `Step 1: Use substitution method - solve second equation for x:
x - y = 1
x = y + 1

Step 2: Substitute into first equation:
2(y + 1) + 3y = 12
2y + 2 + 3y = 12
5y + 2 = 12
5y = 10
y = 2

Step 3: Find x using x = y + 1:
x = 2 + 1 = 3

Step 4: Verify in both equations:
2(3) + 3(2) = 6 + 6 = 12 ✓
3 - 2 = 1 ✓

Answer: x = 3, y = 2 or (3, 2)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: systemsOfEquations.id,
        question: 'Solve the system: x² + y² = 25 and y = x + 1',
        solution: `Step 1: This is a nonlinear system (circle and line)
Circle: x² + y² = 25 (radius 5, centered at origin)
Line: y = x + 1

Step 2: Substitute y = x + 1 into the circle equation:
x² + (x + 1)² = 25

Step 3: Expand and simplify:
x² + x² + 2x + 1 = 25
2x² + 2x + 1 = 25
2x² + 2x - 24 = 0
x² + x - 12 = 0

Step 4: Factor:
(x + 4)(x - 3) = 0
x = -4 or x = 3

Step 5: Find corresponding y values:
If x = -4: y = -4 + 1 = -3
If x = 3: y = 3 + 1 = 4

Step 6: Verify both solutions:
(-4, -3): (-4)² + (-3)² = 16 + 9 = 25 ✓
(3, 4): 3² + 4² = 9 + 16 = 25 ✓

Answer: (-4, -3) and (3, 4)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: systems-of-equations (now has 5 total)');

  console.log('\n✨ Successfully completed batch 3! Added problems to 4 Function Fundamentals topics.');
  
  await prisma.$disconnect();
}

main();
