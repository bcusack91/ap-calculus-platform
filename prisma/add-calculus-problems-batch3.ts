import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 3: Final Limits + First Derivatives (6 topics)...');

  // Find the topics
  const continuity = await prisma.topic.findFirst({
    where: { slug: 'continuity-introduction' }
  });

  const discontinuity = await prisma.topic.findFirst({
    where: { slug: 'types-of-discontinuity' }
  });

  const whatIsDerivative = await prisma.topic.findFirst({
    where: { slug: 'what-is-a-derivative' }
  });

  const derivativeNotation = await prisma.topic.findFirst({
    where: { slug: 'derivative-notation' }
  });

  const derivativeAsSlope = await prisma.topic.findFirst({
    where: { slug: 'derivative-as-slope' }
  });

  const derivativeAsRate = await prisma.topic.findFirst({
    where: { slug: 'derivative-as-rate-of-change' }
  });

  if (!continuity || !discontinuity || !whatIsDerivative || !derivativeNotation || !derivativeAsSlope || !derivativeAsRate) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: What is Continuity? (has 2, needs 3 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: continuity.id,
        question: 'Is f(x) = x² - 3x + 5 continuous at x = 2?',
        solution: `Step 1: Check the three conditions for continuity at x = a:
1. f(a) is defined
2. lim(x→a) f(x) exists
3. lim(x→a) f(x) = f(a)

Step 2: Check if f(2) is defined:
f(2) = (2)² - 3(2) + 5 = 4 - 6 + 5 = 3
✓ f(2) is defined

Step 3: Find lim(x→2) f(x):
Since this is a polynomial, use direct substitution
lim(x→2) (x² - 3x + 5) = 3
✓ Limit exists

Step 4: Compare:
lim(x→2) f(x) = 3 = f(2) ✓
All three conditions satisfied

Answer: Yes, f(x) is continuous at x = 2`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: continuity.id,
        question: 'Determine if f(x) = { x + 1, if x < 3; 5, if x = 3; 2x - 1, if x > 3 } is continuous at x = 3.',
        solution: `Step 1: Check if f(3) is defined:
f(3) = 5 ✓

Step 2: Find lim(x→3⁻) f(x):
For x < 3, use f(x) = x + 1
lim(x→3⁻) (x + 1) = 3 + 1 = 4

Step 3: Find lim(x→3⁺) f(x):
For x > 3, use f(x) = 2x - 1
lim(x→3⁺) (2x - 1) = 2(3) - 1 = 5

Step 4: Check if two-sided limit exists:
lim(x→3⁻) f(x) = 4
lim(x→3⁺) f(x) = 5
Since 4 ≠ 5, lim(x→3) f(x) does not exist ✗

Step 5: Conclusion:
Since the limit doesn't exist, f is not continuous at x = 3

Answer: No, f(x) is not continuous at x = 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: continuity.id,
        question: 'Find the value of k that makes f(x) = { (x² - 4)/(x - 2), if x ≠ 2; k, if x = 2 } continuous at x = 2.',
        solution: `Step 1: For continuity at x = 2, need:
lim(x→2) f(x) = f(2) = k

Step 2: Find lim(x→2) (x² - 4)/(x - 2):
Direct substitution gives 0/0 (indeterminate)

Step 3: Factor numerator:
x² - 4 = (x - 2)(x + 2)

Step 4: Simplify:
(x² - 4)/(x - 2) = [(x - 2)(x + 2)]/(x - 2)
                  = x + 2 (for x ≠ 2)

Step 5: Evaluate limit:
lim(x→2) (x + 2) = 2 + 2 = 4

Step 6: Set equal to f(2):
k = 4

Step 7: Verify:
With k = 4, lim(x→2) f(x) = 4 = f(2) ✓

Answer: k = 4`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: continuity.id,
        front: 'What are the three conditions for continuity at x = a?',
        back: '1) f(a) is defined, 2) lim(x→a) f(x) exists, 3) lim(x→a) f(x) = f(a)',
        hint: 'Defined, limit exists, limit = value',
        isPremium: false
      },
      {
        topicId: continuity.id,
        front: 'Which types of functions are continuous everywhere?',
        back: 'Polynomials, sin(x), cos(x), eˣ are continuous on their entire domains.',
        hint: 'Polynomials, basic trig, exponentials',
        isPremium: false
      },
      {
        topicId: continuity.id,
        front: 'What does it mean to be continuous on an interval?',
        back: 'A function is continuous on an interval if it\'s continuous at every point in that interval.',
        hint: 'Continuous at every point',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: continuity-introduction (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Types of Discontinuity (has 2, needs 3 more + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: discontinuity.id,
        question: 'Identify the type of discontinuity at x = 3 for f(x) = (x² - 9)/(x - 3).',
        solution: `Step 1: Check if f(3) is defined:
f(3) = (9 - 9)/(3 - 3) = 0/0 (undefined)

Step 2: Find lim(x→3) f(x):
Factor: (x² - 9)/(x - 3) = [(x - 3)(x + 3)]/(x - 3) = x + 3
lim(x→3) (x + 3) = 6

Step 3: Classification:
• f(3) is undefined
• But lim(x→3) f(x) = 6 exists
• This is a hole in the graph

Step 4: Type of discontinuity:
This is a REMOVABLE discontinuity (also called a point discontinuity or hole)
It can be "removed" by redefining f(3) = 6

Answer: Removable discontinuity at x = 3`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: discontinuity.id,
        question: 'Classify the discontinuity at x = 2 for f(x) = { x + 1, if x < 2; 5, if x ≥ 2 }.',
        solution: `Step 1: Find f(2):
f(2) = 5 (defined)

Step 2: Find lim(x→2⁻):
For x < 2, f(x) = x + 1
lim(x→2⁻) (x + 1) = 3

Step 3: Find lim(x→2⁺):
For x ≥ 2, f(x) = 5
lim(x→2⁺) 5 = 5

Step 4: Compare:
lim(x→2⁻) = 3 ≠ 5 = lim(x→2⁺)
Two-sided limit doesn't exist

Step 5: Classification:
• Left and right limits are different
• This creates a "jump" in the graph
• JUMP discontinuity

Answer: Jump discontinuity at x = 2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: discontinuity.id,
        question: 'Determine the type of discontinuity at x = 0 for f(x) = 1/x².',
        solution: `Step 1: Check if f(0) is defined:
f(0) = 1/0² = 1/0 (undefined)

Step 2: Find lim(x→0) f(x):
As x→0, x²→0⁺ (always positive)
1/(small positive) = large positive
lim(x→0) 1/x² = +∞

Step 3: Verify from both sides:
lim(x→0⁻): x² is positive, 1/x² → +∞
lim(x→0⁺): x² is positive, 1/x² → +∞
Both one-sided limits are +∞

Step 4: Classification:
• Function undefined at x = 0
• Limit is infinite (not a finite number)
• Vertical asymptote at x = 0
• INFINITE discontinuity

Step 5: Note:
This cannot be removed by redefining f(0)
because the limit doesn't exist as a finite value

Answer: Infinite discontinuity (vertical asymptote) at x = 0`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: discontinuity.id,
        front: 'What is a removable discontinuity?',
        back: 'A "hole" in the graph. The limit exists, but f(a) is either undefined or not equal to the limit. Can be fixed by redefining f(a).',
        hint: 'Hole - can be removed',
        isPremium: false
      },
      {
        topicId: discontinuity.id,
        front: 'What is a jump discontinuity?',
        back: 'When left and right limits exist but are not equal, causing a "jump" in the graph. Cannot be removed.',
        hint: 'Left ≠ right',
        isPremium: false
      },
      {
        topicId: discontinuity.id,
        front: 'What is an infinite discontinuity?',
        back: 'When the function approaches ±∞ at a point, creating a vertical asymptote. Cannot be removed.',
        hint: 'Vertical asymptote',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: types-of-discontinuity (now has 5 problems, 6 flashcards)');

  // TOPIC 3: What is a Derivative? (has 2, needs 3 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: whatIsDerivative.id,
        question: 'Use the limit definition to find f\'(2) for f(x) = x².',
        solution: `Step 1: Write the limit definition:
f'(a) = lim(h→0) [f(a + h) - f(a)]/h

Step 2: Substitute a = 2:
f'(2) = lim(h→0) [f(2 + h) - f(2)]/h

Step 3: Calculate f(2 + h):
f(2 + h) = (2 + h)² = 4 + 4h + h²

Step 4: Calculate f(2):
f(2) = 4

Step 5: Substitute:
f'(2) = lim(h→0) [(4 + 4h + h²) - 4]/h
      = lim(h→0) [4h + h²]/h

Step 6: Factor and simplify:
= lim(h→0) [h(4 + h)]/h
= lim(h→0) (4 + h)

Step 7: Evaluate:
= 4 + 0 = 4

Answer: f'(2) = 4`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: whatIsDerivative.id,
        question: 'Find the derivative of f(x) = 3x using the limit definition.',
        solution: `Step 1: Write limit definition:
f'(x) = lim(h→0) [f(x + h) - f(x)]/h

Step 2: Find f(x + h):
f(x + h) = 3(x + h) = 3x + 3h

Step 3: Substitute into definition:
f'(x) = lim(h→0) [(3x + 3h) - 3x]/h

Step 4: Simplify numerator:
f'(x) = lim(h→0) [3h]/h

Step 5: Cancel h:
f'(x) = lim(h→0) 3

Step 6: Evaluate:
f'(x) = 3

Answer: f'(x) = 3 (constant derivative)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: whatIsDerivative.id,
        question: 'Use the limit definition to find f\'(x) for f(x) = 1/x.',
        solution: `Step 1: Write limit definition:
f'(x) = lim(h→0) [f(x + h) - f(x)]/h

Step 2: Find f(x + h):
f(x + h) = 1/(x + h)

Step 3: Substitute:
f'(x) = lim(h→0) [1/(x + h) - 1/x]/h

Step 4: Find common denominator:
= lim(h→0) [x - (x + h)]/[x(x + h)·h]
= lim(h→0) [x - x - h]/[x(x + h)·h]
= lim(h→0) [-h]/[x(x + h)·h]

Step 5: Cancel h:
= lim(h→0) -1/[x(x + h)]

Step 6: Evaluate limit:
= -1/[x·x]
= -1/x²

Answer: f'(x) = -1/x²`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: whatIsDerivative.id,
        front: 'What is the limit definition of the derivative?',
        back: 'f\'(x) = lim(h→0) [f(x + h) - f(x)]/h, or f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)',
        hint: 'Two equivalent forms with h or (x-a)',
        isPremium: false
      },
      {
        topicId: whatIsDerivative.id,
        front: 'What does the derivative measure?',
        back: 'The instantaneous rate of change of a function, or the slope of the tangent line at a point.',
        hint: 'Rate of change or slope',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: what-is-a-derivative (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Derivative Notation (has 2, needs 3 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: derivativeNotation.id,
        question: 'If y = x³, write the derivative in four different notations.',
        solution: `Step 1: Find the derivative:
dy/dx = 3x²

Step 2: Leibniz notation:
dy/dx = 3x²

Step 3: Lagrange (prime) notation:
y' = 3x² or f'(x) = 3x²

Step 4: Newton (dot) notation:
ẏ = 3x² (used mainly in physics)

Step 5: Operator notation:
Dx[x³] = 3x² or d/dx[x³] = 3x²

Answer: dy/dx = y' = f'(x) = ẏ = 3x²`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: derivativeNotation.id,
        question: 'If f(x) = 2x² - 5x + 1, find f\'(3) and interpret what it means.',
        solution: `Step 1: Find f'(x):
f'(x) = 4x - 5

Step 2: Evaluate at x = 3:
f'(3) = 4(3) - 5 = 12 - 5 = 7

Step 3: Interpret:
At x = 3, the slope of the tangent line is 7

Step 4: Rate of change interpretation:
At x = 3, f(x) is increasing at a rate of 7 units vertically per 1 unit horizontally

Step 5: Alternative notations:
dy/dx|ₓ₌₃ = 7
or Df(3) = 7

Answer: f'(3) = 7 (slope of tangent at x = 3)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: derivativeNotation.id,
        question: 'If s(t) = 16t² represents position in feet, what does s\'(2) = 64 mean in context?',
        solution: `Step 1: Understand the notation:
s(t) = position function
s'(t) = velocity function (rate of change of position)
t = time

Step 2: Given information:
s'(2) = 64

Step 3: Interpretation:
At t = 2 seconds, the velocity is 64 feet per second

Step 4: Alternative notations meaning the same thing:
ds/dt|ₜ₌₂ = 64
v(2) = 64 (if v represents velocity)

Step 5: Physical meaning:
At exactly 2 seconds, the object is moving at an instantaneous rate of 64 ft/s

Answer: At t = 2 seconds, the velocity is 64 feet per second`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: derivativeNotation.id,
        front: 'What are the common notations for derivatives?',
        back: 'dy/dx (Leibniz), f\'(x) or y\' (Lagrange), ẏ (Newton), Dx[y] (operator notation)',
        hint: 'Four main types',
        isPremium: false
      },
      {
        topicId: derivativeNotation.id,
        front: 'What does dy/dx|ₓ₌ₐ mean?',
        back: 'The derivative of y with respect to x, evaluated at x = a. Same as f\'(a).',
        hint: 'Derivative evaluated at a point',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: derivative-notation (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Derivative as Slope (has 2, needs 3 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: derivativeAsSlope.id,
        question: 'Find the slope of the tangent line to f(x) = x² at x = 3.',
        solution: `Step 1: Find the derivative:
f(x) = x²
f'(x) = 2x

Step 2: Evaluate at x = 3:
f'(3) = 2(3) = 6

Step 3: Interpretation:
The derivative equals the slope of the tangent line
Slope = 6

Step 4: Verify the concept:
At x = 3, the tangent line rises 6 units for every 1 unit horizontal

Answer: Slope = 6`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: derivativeAsSlope.id,
        question: 'Find the equation of the tangent line to y = x³ - 2x at x = 2.',
        solution: `Step 1: Find the derivative:
y' = 3x² - 2

Step 2: Find slope at x = 2:
m = y'(2) = 3(2)² - 2 = 12 - 2 = 10

Step 3: Find the point on the curve:
y(2) = (2)³ - 2(2) = 8 - 4 = 4
Point: (2, 4)

Step 4: Use point-slope form:
y - y₁ = m(x - x₁)
y - 4 = 10(x - 2)

Step 5: Simplify:
y - 4 = 10x - 20
y = 10x - 16

Answer: y = 10x - 16`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: derivativeAsSlope.id,
        question: 'For f(x) = 1/x, find where the tangent line is parallel to y = -4x + 7.',
        solution: `Step 1: Find the slope of the given line:
y = -4x + 7 has slope m = -4

Step 2: Find f'(x):
f(x) = x⁻¹
f'(x) = -x⁻² = -1/x²

Step 3: Set derivative equal to desired slope:
-1/x² = -4

Step 4: Solve for x:
1/x² = 4
x² = 1/4
x = ±1/2

Step 5: Find the points:
f(1/2) = 1/(1/2) = 2 → (1/2, 2)
f(-1/2) = 1/(-1/2) = -2 → (-1/2, -2)

Step 6: Verify:
At both points, f'(x) = -1/(±1/2)² = -4 ✓

Answer: x = 1/2 and x = -1/2 (two points)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: derivativeAsSlope.id,
        front: 'What is the geometric meaning of the derivative?',
        back: 'f\'(a) is the slope of the tangent line to the curve y = f(x) at the point (a, f(a)).',
        hint: 'Slope of tangent line',
        isPremium: false
      },
      {
        topicId: derivativeAsSlope.id,
        front: 'How do you find the equation of a tangent line?',
        back: 'Find the slope m = f\'(a), the point (a, f(a)), then use point-slope form: y - f(a) = m(x - a).',
        hint: 'Slope + point + point-slope form',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: derivative-as-slope (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Derivative as Rate of Change (has 2, needs 3 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: derivativeAsRate.id,
        question: 'If the radius of a circle is r = 5 cm and increasing at dr/dt = 2 cm/s, find how fast the area is changing.',
        solution: `Step 1: Write area formula:
A = πr²

Step 2: Find dA/dr:
dA/dr = 2πr

Step 3: Use chain rule:
dA/dt = (dA/dr)·(dr/dt)

Step 4: Substitute values:
r = 5, dr/dt = 2
dA/dt = 2π(5)·2 = 20π

Step 5: Interpret:
The area is increasing at 20π ≈ 62.83 cm²/s

Answer: 20π cm²/s`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: derivativeAsRate.id,
        question: 'A car\'s position is s(t) = t³ - 6t² + 9t meters at time t seconds. Find the velocity and acceleration at t = 2.',
        solution: `Step 1: Velocity is the derivative of position:
v(t) = s'(t) = 3t² - 12t + 9

Step 2: Find velocity at t = 2:
v(2) = 3(2)² - 12(2) + 9
     = 12 - 24 + 9
     = -3 m/s

Step 3: Acceleration is the derivative of velocity:
a(t) = v'(t) = s''(t) = 6t - 12

Step 4: Find acceleration at t = 2:
a(2) = 6(2) - 12
     = 12 - 12
     = 0 m/s²

Step 5: Interpretation:
At t = 2, the car is moving backward at 3 m/s
but the acceleration is 0 (instantaneously not speeding up or slowing down)

Answer: v(2) = -3 m/s, a(2) = 0 m/s²`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: derivativeAsRate.id,
        question: 'The temperature T (in °F) of a cooling object after t minutes is T(t) = 80 + 120e^(-0.1t). Find the rate of cooling at t = 10 minutes.',
        solution: `Step 1: Find dT/dt:
T(t) = 80 + 120e^(-0.1t)
T'(t) = 120·e^(-0.1t)·(-0.1)
T'(t) = -12e^(-0.1t)

Step 2: Evaluate at t = 10:
T'(10) = -12e^(-0.1·10)
       = -12e^(-1)
       = -12/e

Step 3: Calculate numerical value:
-12/e ≈ -12/2.71828
      ≈ -4.41 °F/min

Step 4: Interpret:
The negative sign means temperature is decreasing
At t = 10 minutes, cooling at about 4.41°F per minute

Answer: -12/e ≈ -4.41 °F/min (cooling rate)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: derivativeAsRate.id,
        front: 'What is the physical meaning of the derivative?',
        back: 'The derivative represents the instantaneous rate of change - how fast one quantity changes with respect to another.',
        hint: 'Rate of change',
        isPremium: false
      },
      {
        topicId: derivativeAsRate.id,
        front: 'If s(t) is position, what are s\'(t) and s\'\'(t)?',
        back: 's\'(t) is velocity (rate of change of position), s\'\'(t) is acceleration (rate of change of velocity).',
        hint: 'First derivative = velocity, second = acceleration',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: derivative-as-rate-of-change (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 3! Finished Limits and Continuity, started Derivatives.');
  
  await prisma.$disconnect();
}

main();
