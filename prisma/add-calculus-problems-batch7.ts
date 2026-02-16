import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 7: Final Applications + Integration Start (6 topics)...');

  // Find the topics
  const linearApprox = await prisma.topic.findFirst({
    where: { slug: 'linear-approximation' }
  });

  const newtonsMethod = await prisma.topic.findFirst({
    where: { slug: 'newtons-method' }
  });

  const absoluteExtrema = await prisma.topic.findFirst({
    where: { slug: 'absolute-extrema' }
  });

  const criticalPointsExtrema = await prisma.topic.findFirst({
    where: { slug: 'critical-points-and-extrema' }
  });

  const antiderivatives = await prisma.topic.findFirst({
    where: { slug: 'antiderivatives-intro' }
  });

  const riemannSums = await prisma.topic.findFirst({
    where: { slug: 'riemann-sums' }
  });

  if (!linearApprox || !newtonsMethod || !absoluteExtrema || !criticalPointsExtrema || !antiderivatives || !riemannSums) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Linear Approximation (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: linearApprox.id,
        question: 'Use linear approximation to estimate √17.',
        solution: `Step 1: Choose a nearby point where we know the value:
Let f(x) = √x
Use x = 16 (close to 17 and perfect square)

Step 2: Find f(16):
f(16) = √16 = 4

Step 3: Find f'(x):
f'(x) = 1/(2√x)

Step 4: Find f'(16):
f'(16) = 1/(2√16) = 1/8

Step 5: Linear approximation formula:
L(x) = f(a) + f'(a)(x - a)
L(17) = f(16) + f'(16)(17 - 16)
L(17) = 4 + (1/8)(1)
L(17) = 4 + 1/8 = 4.125

Step 6: Check accuracy:
Actual: √17 ≈ 4.123
Error: 0.002 (very close!)

Answer: √17 ≈ 4.125`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: linearApprox.id,
        question: 'The radius of a sphere increases from 10 cm to 10.05 cm. Use differentials to estimate the change in volume.',
        solution: `Step 1: Volume formula:
V = (4/3)πr³

Step 2: Find dV/dr:
dV/dr = 4πr²

Step 3: Use differential approximation:
dV ≈ (dV/dr)·dr

Step 4: Given values:
r = 10 cm
dr = 10.05 - 10 = 0.05 cm

Step 5: Calculate:
dV ≈ 4π(10)²(0.05)
dV ≈ 4π(100)(0.05)
dV ≈ 20π cm³
dV ≈ 62.83 cm³

Step 6: Interpretation:
The volume increases by approximately 20π ≈ 62.83 cm³

Answer: ΔV ≈ 20π ≈ 62.83 cm³`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: linearApprox.id,
        front: 'What is the linear approximation formula?',
        back: 'L(x) = f(a) + f\'(a)(x - a). Approximates f(x) near x = a using the tangent line.',
        hint: 'f(a) + f\'(a)(x - a)',
        isPremium: false
      },
      {
        topicId: linearApprox.id,
        front: 'What is the differential approximation?',
        back: 'dy ≈ f\'(x)·dx or Δy ≈ f\'(x)·Δx. Estimates the change in y for a small change in x.',
        hint: 'dy = f\'(x)dx',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: linear-approximation (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Newton's Method (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: newtonsMethod.id,
        question: 'Use Newton\'s method with x₁ = 2 to find one iteration approximating the root of f(x) = x² - 5.',
        solution: `Step 1: Newton's method formula:
xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)

Step 2: Find f'(x):
f(x) = x² - 5
f'(x) = 2x

Step 3: Calculate x₂:
x₂ = x₁ - f(x₁)/f'(x₁)
x₂ = 2 - f(2)/f'(2)

Step 4: Evaluate f(2) and f'(2):
f(2) = 4 - 5 = -1
f'(2) = 2(2) = 4

Step 5: Calculate:
x₂ = 2 - (-1)/4 = 2 + 1/4 = 2.25

Step 6: Note:
We're approximating √5 ≈ 2.236
Our approximation 2.25 is close!

Answer: x₂ = 2.25`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: newtonsMethod.id,
        question: 'Apply two iterations of Newton\'s method to find a root of f(x) = x³ - 2x - 5, starting with x₁ = 2.',
        solution: `Step 1: Find f'(x):
f(x) = x³ - 2x - 5
f'(x) = 3x² - 2

Step 2: First iteration (find x₂):
f(2) = 8 - 4 - 5 = -1
f'(2) = 3(4) - 2 = 10
x₂ = 2 - (-1)/10 = 2 + 0.1 = 2.1

Step 3: Second iteration (find x₃):
f(2.1) = (2.1)³ - 2(2.1) - 5
       = 9.261 - 4.2 - 5
       = 0.061
f'(2.1) = 3(2.1)² - 2
        = 3(4.41) - 2
        = 13.23 - 2
        = 11.23
x₃ = 2.1 - 0.061/11.23
   = 2.1 - 0.00543
   ≈ 2.0946

Answer: After 2 iterations: x₃ ≈ 2.095`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: newtonsMethod.id,
        front: 'What is Newton\'s method formula?',
        back: 'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). Iteratively approximates roots of f(x) = 0.',
        hint: 'xₙ - f(xₙ)/f\'(xₙ)',
        isPremium: false
      },
      {
        topicId: newtonsMethod.id,
        front: 'When does Newton\'s method fail?',
        back: 'When f\'(xₙ) = 0 (division by zero), or when iterations oscillate or diverge. Need good initial guess.',
        hint: 'f\' = 0, bad initial guess, oscillation',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: newtons-method (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Absolute Extrema on Closed Intervals (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: absoluteExtrema.id,
        question: 'Find the absolute maximum and minimum of f(x) = x³ - 3x² + 1 on [-1, 3].',
        solution: `Step 1: Find f'(x):
f'(x) = 3x² - 6x = 3x(x - 2)

Step 2: Find critical points:
f'(x) = 0 when x = 0 or x = 2
Both are in [-1, 3] ✓

Step 3: Evaluate f at critical points and endpoints:
f(-1) = -1 - 3 + 1 = -3
f(0) = 0 - 0 + 1 = 1
f(2) = 8 - 12 + 1 = -3
f(3) = 27 - 27 + 1 = 1

Step 4: Compare values:
Minimum: f(-1) = f(2) = -3
Maximum: f(0) = f(3) = 1

Answer: Absolute min = -3 (at x = -1, 2), absolute max = 1 (at x = 0, 3)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: absoluteExtrema.id,
        question: 'Find the absolute extrema of g(x) = x/(x² + 1) on [0, 2].',
        solution: `Step 1: Find g'(x) using quotient rule:
g'(x) = [(1)(x² + 1) - x(2x)]/(x² + 1)²
      = (x² + 1 - 2x²)/(x² + 1)²
      = (1 - x²)/(x² + 1)²

Step 2: Find critical points in [0, 2]:
g'(x) = 0 when 1 - x² = 0
x² = 1 → x = ±1
Only x = 1 is in [0, 2]

Step 3: Evaluate at critical point and endpoints:
g(0) = 0/(0 + 1) = 0
g(1) = 1/(1 + 1) = 1/2
g(2) = 2/(4 + 1) = 2/5 = 0.4

Step 4: Compare:
0 < 2/5 < 1/2
Minimum: g(0) = 0
Maximum: g(1) = 1/2

Answer: Absolute min = 0 at x = 0, absolute max = 1/2 at x = 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: absoluteExtrema.id,
        front: 'How do you find absolute extrema on a closed interval [a, b]?',
        back: '1) Find all critical points in (a, b), 2) Evaluate f at critical points and endpoints, 3) Largest value is absolute max, smallest is absolute min.',
        hint: 'Critical points + endpoints, compare values',
        isPremium: false
      },
      {
        topicId: absoluteExtrema.id,
        front: 'Why must you check endpoints for absolute extrema?',
        back: 'The Extreme Value Theorem guarantees absolute extrema exist on closed intervals, and they can occur at critical points OR endpoints.',
        hint: 'EVT guarantees existence, can be at endpoints',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: absolute-extrema (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Critical Points and Extrema (has 7 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: criticalPointsExtrema.id,
        front: 'What is a critical point?',
        back: 'A point c where f\'(c) = 0 or f\'(c) is undefined. Critical points are candidates for local extrema.',
        hint: 'f\' = 0 or undefined',
        isPremium: false
      },
      {
        topicId: criticalPointsExtrema.id,
        front: 'What is the difference between local and absolute extrema?',
        back: 'Local extrema are highest/lowest in a neighborhood. Absolute extrema are highest/lowest on the entire domain.',
        hint: 'Local = neighborhood, absolute = entire domain',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: critical-points-and-extrema (now has 7 problems, 6 flashcards)');

  // TOPIC 5: Introduction to Antiderivatives (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: antiderivatives.id,
        question: 'Find the most general antiderivative of f(x) = 6x² - 4x + 3.',
        solution: `Step 1: Find antiderivative of each term:
∫6x² dx = 6·(x³/3) = 2x³
∫-4x dx = -4·(x²/2) = -2x²
∫3 dx = 3x

Step 2: Combine terms:
F(x) = 2x³ - 2x² + 3x

Step 3: Add constant of integration:
F(x) = 2x³ - 2x² + 3x + C

Step 4: Verify by differentiation:
F'(x) = 6x² - 4x + 3 = f(x) ✓

Answer: F(x) = 2x³ - 2x² + 3x + C`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: antiderivatives.id,
        question: 'Find f(x) if f\'(x) = 4x³ - 6x and f(1) = 2.',
        solution: `Step 1: Find general antiderivative:
f(x) = ∫(4x³ - 6x) dx
f(x) = 4·(x⁴/4) - 6·(x²/2) + C
f(x) = x⁴ - 3x² + C

Step 2: Use initial condition f(1) = 2:
2 = (1)⁴ - 3(1)² + C
2 = 1 - 3 + C
2 = -2 + C
C = 4

Step 3: Write particular solution:
f(x) = x⁴ - 3x² + 4

Step 4: Verify:
f'(x) = 4x³ - 6x ✓
f(1) = 1 - 3 + 4 = 2 ✓

Answer: f(x) = x⁴ - 3x² + 4`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: antiderivatives.id,
        front: 'What is an antiderivative?',
        back: 'F(x) is an antiderivative of f(x) if F\'(x) = f(x). The most general form is F(x) + C.',
        hint: 'Reverse of derivative, add +C',
        isPremium: false
      },
      {
        topicId: antiderivatives.id,
        front: 'Why do we add +C to antiderivatives?',
        back: 'Because the derivative of a constant is 0, infinitely many functions differ by a constant have the same derivative.',
        hint: 'Derivative of constant = 0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: antiderivatives-intro (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Riemann Sums and Area Approximation (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: riemannSums.id,
        question: 'Approximate ∫₀² x² dx using a left Riemann sum with n = 4 rectangles.',
        solution: `Step 1: Find Δx:
Δx = (b - a)/n = (2 - 0)/4 = 0.5

Step 2: Identify left endpoints:
x₀ = 0, x₁ = 0.5, x₂ = 1, x₃ = 1.5

Step 3: Evaluate f(x) = x² at left endpoints:
f(0) = 0
f(0.5) = 0.25
f(1) = 1
f(1.5) = 2.25

Step 4: Calculate left Riemann sum:
L₄ = Δx[f(x₀) + f(x₁) + f(x₂) + f(x₃)]
L₄ = 0.5[0 + 0.25 + 1 + 2.25]
L₄ = 0.5[3.5]
L₄ = 1.75

Step 5: Note:
Actual value: ∫₀² x² dx = [x³/3]₀² = 8/3 ≈ 2.67
Left sum underestimates for increasing functions

Answer: L₄ = 1.75`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: riemannSums.id,
        question: 'Use a midpoint Riemann sum with n = 3 to approximate ∫₁⁴ (1/x) dx.',
        solution: `Step 1: Find Δx:
Δx = (4 - 1)/3 = 1

Step 2: Find subintervals:
[1, 2], [2, 3], [3, 4]

Step 3: Find midpoints:
m₁ = 1.5, m₂ = 2.5, m₃ = 3.5

Step 4: Evaluate f(x) = 1/x at midpoints:
f(1.5) = 1/1.5 = 2/3 ≈ 0.667
f(2.5) = 1/2.5 = 2/5 = 0.4
f(3.5) = 1/3.5 = 2/7 ≈ 0.286

Step 5: Calculate midpoint sum:
M₃ = Δx[f(m₁) + f(m₂) + f(m₃)]
M₃ = 1[2/3 + 2/5 + 2/7]

Step 6: Find common denominator (105):
2/3 = 70/105
2/5 = 42/105
2/7 = 30/105
Sum = 142/105 ≈ 1.352

Step 7: Note:
Actual: ∫₁⁴ (1/x) dx = ln(4) ≈ 1.386
Pretty close!

Answer: M₃ = 142/105 ≈ 1.352`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: riemannSums.id,
        front: 'What is a Riemann sum?',
        back: 'An approximation of the area under a curve using rectangles. Sum = Δx·Σf(xᵢ*), where xᵢ* are sample points.',
        hint: 'Sum of rectangle areas',
        isPremium: false
      },
      {
        topicId: riemannSums.id,
        front: 'What are left, right, and midpoint Riemann sums?',
        back: 'Left: use left endpoint of each subinterval. Right: use right endpoint. Midpoint: use center of each subinterval.',
        hint: 'Where you sample in each rectangle',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: riemann-sums (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 7! Applications of Derivatives complete, started Integration!');
  
  await prisma.$disconnect();
}

main();
