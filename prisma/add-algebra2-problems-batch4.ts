import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 4 (4 topics)...');

  // Find the topics
  const exponentialFunctions = await prisma.topic.findFirst({
    where: { slug: 'exponential-functions-algebra2' }
  });

  const logarithmicFunctions = await prisma.topic.findFirst({
    where: { slug: 'logarithmic-functions-algebra2' }
  });

  const exponentialEquations = await prisma.topic.findFirst({
    where: { slug: 'exponential-equations-algebra2' }
  });

  const logarithmicEquations = await prisma.topic.findFirst({
    where: { slug: 'logarithmic-equations-algebra2' }
  });

  if (!exponentialFunctions || !logarithmicFunctions || !exponentialEquations || !logarithmicEquations) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Exponential Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: exponentialFunctions.id,
        question: 'Evaluate: 2⁵',
        solution: `Step 1: Calculate the power:
2⁵ = 2 × 2 × 2 × 2 × 2

Step 2: Multiply step by step:
2 × 2 = 4
4 × 2 = 8
8 × 2 = 16
16 × 2 = 32

Answer: 32`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        question: 'Simplify: (3²)(3⁴)',
        solution: `Step 1: Use the product rule for exponents:
aᵐ · aⁿ = aᵐ⁺ⁿ

Step 2: Add the exponents:
(3²)(3⁴) = 3²⁺⁴ = 3⁶

Step 3: Evaluate (optional):
3⁶ = 729

Answer: 3⁶ or 729`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        question: 'If f(x) = 2ˣ, find f(3), f(-2), and f(0).',
        solution: `Step 1: Find f(3):
f(3) = 2³ = 8

Step 2: Find f(-2):
f(-2) = 2⁻² = 1/(2²) = 1/4

Step 3: Find f(0):
f(0) = 2⁰ = 1

Step 4: Note the pattern:
- Positive exponent: regular multiplication
- Negative exponent: reciprocal
- Zero exponent: always equals 1

Answer: f(3) = 8, f(-2) = 1/4, f(0) = 1`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        question: 'A bacteria population doubles every 3 hours. If there are initially 500 bacteria, write an exponential function P(t) for the population after t hours.',
        solution: `Step 1: Identify the exponential growth formula:
P(t) = P₀ · aᵗ/ᵏ

Where:
- P₀ = initial population
- a = growth factor
- k = time period for one growth cycle

Step 2: Identify the values:
P₀ = 500 (initial population)
a = 2 (doubles)
k = 3 (every 3 hours)

Step 3: Write the function:
P(t) = 500 · 2ᵗ/³

Step 4: Verify:
At t = 0: P(0) = 500 · 2⁰ = 500 ✓
At t = 3: P(3) = 500 · 2³/³ = 500 · 2 = 1000 ✓
At t = 6: P(6) = 500 · 2⁶/³ = 500 · 4 = 2000 ✓

Answer: P(t) = 500 · 2ᵗ/³`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        question: 'A car purchased for $25,000 depreciates at a rate of 15% per year. Write an exponential decay function V(t) for the car\'s value after t years, and find its value after 5 years.',
        solution: `Step 1: Identify the exponential decay formula:
V(t) = V₀(1 - r)ᵗ

Where:
- V₀ = initial value
- r = decay rate (as decimal)
- t = time in years

Step 2: Identify the values:
V₀ = 25,000
r = 0.15 (15% as decimal)
1 - r = 0.85

Step 3: Write the function:
V(t) = 25,000(0.85)ᵗ

Step 4: Find value after 5 years:
V(5) = 25,000(0.85)⁵

Step 5: Calculate (0.85)⁵:
0.85⁵ ≈ 0.4437

Step 6: Find the value:
V(5) = 25,000 × 0.4437
V(5) ≈ $11,092.50

Step 7: Interpret:
After 5 years, the car has lost about 56% of its value
Original: $25,000
After 5 years: $11,092.50
Lost: $13,907.50

Answer: V(t) = 25,000(0.85)ᵗ; After 5 years: approximately $11,092.50`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: exponentialFunctions.id,
        front: 'What is an exponential function?',
        back: 'A function of the form f(x) = abˣ where b > 0, b ≠ 1, and a ≠ 0. The variable is in the exponent.',
        hint: 'Variable in exponent',
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        front: 'What is the difference between exponential growth and decay?',
        back: 'Growth: base b > 1 (e.g., 2ˣ). Decay: 0 < b < 1 (e.g., (1/2)ˣ or 0.5ˣ).',
        hint: 'Growth: b > 1, Decay: 0 < b < 1',
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        front: 'What is the value of any non-zero number raised to the power of 0?',
        back: 'Always equals 1. For example, 5⁰ = 1, (-3)⁰ = 1, (1000)⁰ = 1.',
        hint: 'a⁰ = 1',
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        front: 'What does a negative exponent mean?',
        back: 'Take the reciprocal: a⁻ⁿ = 1/aⁿ. For example, 2⁻³ = 1/2³ = 1/8.',
        hint: 'Reciprocal: a⁻ⁿ = 1/aⁿ',
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        front: 'What is the product rule for exponents?',
        back: 'aᵐ · aⁿ = aᵐ⁺ⁿ. When multiplying same bases, add the exponents.',
        hint: 'Multiply: add exponents',
        isPremium: false
      },
      {
        topicId: exponentialFunctions.id,
        front: 'What is the exponential growth formula?',
        back: 'A(t) = A₀(1 + r)ᵗ, where A₀ is initial amount, r is growth rate, and t is time.',
        hint: 'A = A₀(1 + r)ᵗ',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: exponential-functions-algebra2');

  // TOPIC 2: Logarithmic Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: logarithmicFunctions.id,
        question: 'Evaluate: log₂ 8',
        solution: `Step 1: Understand the question:
log₂ 8 means "2 to what power equals 8?"

Step 2: Find the power:
2¹ = 2
2² = 4
2³ = 8

Step 3: Answer:
Since 2³ = 8, we have log₂ 8 = 3

Answer: 3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        question: 'Evaluate: log₁₀ 1000',
        solution: `Step 1: Rewrite as an exponential equation:
log₁₀ 1000 = x means 10ˣ = 1000

Step 2: Express 1000 as a power of 10:
1000 = 10³

Step 3: Therefore:
log₁₀ 1000 = 3

Step 4: Note:
log₁₀ is called the "common logarithm"
Often written as just "log" without the base

Answer: 3`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        question: 'Convert to logarithmic form: 5³ = 125',
        solution: `Step 1: Recall the relationship:
bˣ = y is equivalent to logᵦ y = x

Step 2: Identify the parts:
Base (b) = 5
Exponent (x) = 3
Result (y) = 125

Step 3: Write in logarithmic form:
log₅ 125 = 3

Step 4: Verify:
"5 to what power equals 125?"
5³ = 125 ✓

Answer: log₅ 125 = 3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        question: 'Simplify using logarithm properties: log₃ 27 + log₃ 9',
        solution: `Step 1: Use the product rule:
logᵦ m + logᵦ n = logᵦ(mn)

Step 2: Apply the rule:
log₃ 27 + log₃ 9 = log₃(27 · 9)
                   = log₃ 243

Step 3: Evaluate log₃ 243:
What power of 3 equals 243?
3¹ = 3
3² = 9
3³ = 27
3⁴ = 81
3⁵ = 243

Step 4: Therefore:
log₃ 243 = 5

Alternative - evaluate first:
log₃ 27 = 3 (since 3³ = 27)
log₃ 9 = 2 (since 3² = 9)
3 + 2 = 5 ✓

Answer: 5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        question: 'Expand using logarithm properties: log₂(8x³/y²)',
        solution: `Step 1: Apply the quotient rule:
logᵦ(m/n) = logᵦ m - logᵦ n

log₂(8x³/y²) = log₂(8x³) - log₂(y²)

Step 2: Apply the product rule to first term:
logᵦ(mn) = logᵦ m + logᵦ n

log₂(8x³) = log₂ 8 + log₂ x³

Step 3: Apply the power rule:
logᵦ(mⁿ) = n logᵦ m

log₂ x³ = 3 log₂ x
log₂ y² = 2 log₂ y

Step 4: Combine all parts:
log₂(8x³/y²) = log₂ 8 + 3 log₂ x - 2 log₂ y

Step 5: Simplify log₂ 8:
log₂ 8 = 3 (since 2³ = 8)

Step 6: Final answer:
3 + 3 log₂ x - 2 log₂ y

Answer: 3 + 3 log₂ x - 2 log₂ y`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: logarithmicFunctions.id,
        front: 'What is a logarithm?',
        back: 'The logarithm logᵦ y = x is the exponent x to which base b must be raised to get y. It\'s the inverse of exponentiation.',
        hint: 'Inverse of exponentiation',
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        front: 'How do you convert between exponential and logarithmic form?',
        back: 'bˣ = y is equivalent to logᵦ y = x. The exponent becomes the answer to the logarithm.',
        hint: 'bˣ = y ↔ logᵦ y = x',
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        front: 'What is the product rule for logarithms?',
        back: 'logᵦ(mn) = logᵦ m + logᵦ n. The log of a product equals the sum of the logs.',
        hint: 'log(mn) = log m + log n',
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        front: 'What is the quotient rule for logarithms?',
        back: 'logᵦ(m/n) = logᵦ m - logᵦ n. The log of a quotient equals the difference of the logs.',
        hint: 'log(m/n) = log m - log n',
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        front: 'What is the power rule for logarithms?',
        back: 'logᵦ(mⁿ) = n logᵦ m. The log of a power brings the exponent in front.',
        hint: 'log(mⁿ) = n log m',
        isPremium: false
      },
      {
        topicId: logarithmicFunctions.id,
        front: 'What is the value of logᵦ b and logᵦ 1?',
        back: 'logᵦ b = 1 (the base to power 1 is itself) and logᵦ 1 = 0 (any base to power 0 is 1).',
        hint: 'logᵦ b = 1, logᵦ 1 = 0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: logarithmic-functions-algebra2');

  // TOPIC 3: Solving Exponential Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: exponentialEquations.id,
        question: 'Solve: 2ˣ = 32',
        solution: `Step 1: Express both sides with the same base:
32 = 2⁵

Step 2: Rewrite the equation:
2ˣ = 2⁵

Step 3: Since bases are equal, exponents must be equal:
x = 5

Step 4: Check:
2⁵ = 32 ✓

Answer: x = 5`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        question: 'Solve: 3ˣ⁺¹ = 81',
        solution: `Step 1: Express 81 as a power of 3:
81 = 3⁴

Step 2: Rewrite the equation:
3ˣ⁺¹ = 3⁴

Step 3: Set exponents equal:
x + 1 = 4

Step 4: Solve for x:
x = 3

Step 5: Check:
3³⁺¹ = 3⁴ = 81 ✓

Answer: x = 3`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        question: 'Solve: 5²ˣ = 125ˣ⁻¹',
        solution: `Step 1: Express 125 as a power of 5:
125 = 5³

Step 2: Rewrite the equation:
5²ˣ = (5³)ˣ⁻¹

Step 3: Apply power rule (bᵐ)ⁿ = bᵐⁿ:
5²ˣ = 5³⁽ˣ⁻¹⁾
5²ˣ = 5³ˣ⁻³

Step 4: Set exponents equal:
2x = 3x - 3

Step 5: Solve for x:
2x - 3x = -3
-x = -3
x = 3

Step 6: Check:
Left: 5²⁽³⁾ = 5⁶
Right: 125³⁻¹ = 125² = (5³)² = 5⁶ ✓

Answer: x = 3`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        question: 'Solve using logarithms: 2ˣ = 15',
        solution: `Step 1: Take logarithm of both sides:
We can use any base, but log₁₀ or ln are common
log(2ˣ) = log(15)

Step 2: Apply power rule:
x log(2) = log(15)

Step 3: Solve for x:
x = log(15)/log(2)

Step 4: Calculate (using calculator):
log(15) ≈ 1.1761
log(2) ≈ 0.3010
x ≈ 1.1761/0.3010
x ≈ 3.907

Step 5: Check:
2³·⁹⁰⁷ ≈ 15.00 ✓

Answer: x = log(15)/log(2) ≈ 3.907`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        question: 'Solve: 4ˣ - 2ˣ⁺¹ - 8 = 0',
        solution: `Step 1: Express 4ˣ in terms of 2ˣ:
4ˣ = (2²)ˣ = 2²ˣ = (2ˣ)²

Step 2: Express 2ˣ⁺¹:
2ˣ⁺¹ = 2ˣ · 2¹ = 2 · 2ˣ

Step 3: Let u = 2ˣ, then substitute:
(2ˣ)² - 2 · 2ˣ - 8 = 0
u² - 2u - 8 = 0

Step 4: Factor the quadratic:
(u - 4)(u + 2) = 0

Step 5: Solve for u:
u = 4 or u = -2

Step 6: Substitute back 2ˣ for u:
2ˣ = 4  or  2ˣ = -2

Step 7: Solve each equation:
2ˣ = 4 → 2ˣ = 2² → x = 2 ✓
2ˣ = -2 → No solution (2ˣ is always positive)

Step 8: Check x = 2:
4² - 2²⁺¹ - 8 = 16 - 8 - 8 = 0 ✓

Answer: x = 2`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: exponentialEquations.id,
        front: 'What is the key strategy for solving exponential equations?',
        back: 'Try to express both sides with the same base, then set the exponents equal.',
        hint: 'Same base, equal exponents',
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        front: 'When should you use logarithms to solve exponential equations?',
        back: 'When you can\'t easily express both sides with the same base. Take the log of both sides and use the power rule.',
        hint: 'When bases don\'t match',
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        front: 'What is the change of base formula?',
        back: 'logᵦ a = (log a)/(log b) or (ln a)/(ln b). Used to evaluate logs with any base using common or natural logs.',
        hint: 'logᵦ a = log a / log b',
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        front: 'If bˣ = bʸ, what can you conclude?',
        back: 'x = y (if b > 0 and b ≠ 1). Equal bases mean equal exponents.',
        hint: 'Equal bases → equal exponents',
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        front: 'Can bˣ ever be negative?',
        back: 'No, if b > 0. Exponential functions with positive bases are always positive.',
        hint: 'bˣ > 0 always (when b > 0)',
        isPremium: false
      },
      {
        topicId: exponentialEquations.id,
        front: 'How do you solve an equation with different bases like 2ˣ = 3ˣ⁻¹?',
        back: 'Take logarithm of both sides: log(2ˣ) = log(3ˣ⁻¹), then use power rule: x log 2 = (x-1) log 3, and solve for x.',
        hint: 'Take log of both sides',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: exponential-equations-algebra2');

  // TOPIC 4: Solving Logarithmic Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: logarithmicEquations.id,
        question: 'Solve: log₃ x = 4',
        solution: `Step 1: Convert to exponential form:
logᵦ y = x means bˣ = y

Step 2: Apply to our equation:
log₃ x = 4 means 3⁴ = x

Step 3: Calculate:
x = 3⁴ = 81

Step 4: Check:
log₃ 81 = 4 (since 3⁴ = 81) ✓

Answer: x = 81`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        question: 'Solve: log₂(x + 3) = 5',
        solution: `Step 1: Convert to exponential form:
2⁵ = x + 3

Step 2: Calculate 2⁵:
32 = x + 3

Step 3: Solve for x:
x = 32 - 3
x = 29

Step 4: Check:
log₂(29 + 3) = log₂ 32 = log₂ 2⁵ = 5 ✓

Step 5: Check domain:
x + 3 must be positive: 29 + 3 = 32 > 0 ✓

Answer: x = 29`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        question: 'Solve: log x + log(x - 3) = 1 (assume base 10)',
        solution: `Step 1: Use product rule to combine:
log[x(x - 3)] = 1

Step 2: Simplify inside the log:
log(x² - 3x) = 1

Step 3: Convert to exponential form (base 10):
10¹ = x² - 3x
10 = x² - 3x

Step 4: Rearrange to standard form:
x² - 3x - 10 = 0

Step 5: Factor:
(x - 5)(x + 2) = 0

Step 6: Solve:
x = 5 or x = -2

Step 7: Check domain restrictions:
For log x: x must be positive
For log(x - 3): x - 3 must be positive, so x > 3

x = 5: both 5 > 0 and 5 - 3 = 2 > 0 ✓
x = -2: fails because -2 is not positive ✗

Step 8: Verify x = 5:
log 5 + log(5 - 3) = log 5 + log 2 = log(5 · 2) = log 10 = 1 ✓

Answer: x = 5`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        question: 'Solve: log₂(x + 1) - log₂(x - 1) = 3',
        solution: `Step 1: Use quotient rule to combine:
log₂[(x + 1)/(x - 1)] = 3

Step 2: Convert to exponential form:
2³ = (x + 1)/(x - 1)
8 = (x + 1)/(x - 1)

Step 3: Cross-multiply:
8(x - 1) = x + 1
8x - 8 = x + 1

Step 4: Solve for x:
8x - x = 1 + 8
7x = 9
x = 9/7

Step 5: Check domain:
x + 1 > 0: 9/7 + 1 = 16/7 > 0 ✓
x - 1 > 0: 9/7 - 1 = 2/7 > 0 ✓

Step 6: Verify:
log₂(9/7 + 1) - log₂(9/7 - 1)
= log₂(16/7) - log₂(2/7)
= log₂[(16/7)/(2/7)]
= log₂(16/2)
= log₂ 8
= 3 ✓

Answer: x = 9/7`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        question: 'Solve: log₃(x + 2) + log₃(x - 4) = 2',
        solution: `Step 1: Use product rule:
log₃[(x + 2)(x - 4)] = 2

Step 2: Expand the product:
log₃(x² - 4x + 2x - 8) = 2
log₃(x² - 2x - 8) = 2

Step 3: Convert to exponential form:
3² = x² - 2x - 8
9 = x² - 2x - 8

Step 4: Rearrange:
x² - 2x - 17 = 0

Step 5: Use quadratic formula:
x = [2 ± √(4 + 68)]/2
x = [2 ± √72]/2
x = [2 ± 6√2]/2
x = 1 ± 3√2

Step 6: Calculate approximate values:
x = 1 + 3√2 ≈ 1 + 4.243 ≈ 5.243
x = 1 - 3√2 ≈ 1 - 4.243 ≈ -3.243

Step 7: Check domain:
For x = 1 + 3√2 ≈ 5.243:
x + 2 ≈ 7.243 > 0 ✓
x - 4 ≈ 1.243 > 0 ✓

For x = 1 - 3√2 ≈ -3.243:
x + 2 ≈ -1.243 < 0 ✗ (fails)

Step 8: Verify x = 1 + 3√2:
x² - 2x - 8 = (1 + 3√2)² - 2(1 + 3√2) - 8
= 1 + 6√2 + 18 - 2 - 6√2 - 8
= 9 ✓

Answer: x = 1 + 3√2`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: logarithmicEquations.id,
        front: 'What is the first step to solve a logarithmic equation?',
        back: 'Use logarithm properties to combine into a single log, then convert to exponential form.',
        hint: 'Combine logs, then convert',
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        front: 'Why must you check solutions to logarithmic equations?',
        back: 'To ensure the argument of each logarithm is positive. Solutions that make any argument ≤ 0 are extraneous.',
        hint: 'Check domain (argument > 0)',
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        front: 'How do you solve an equation with multiple logs of the same base?',
        back: 'Use log properties (product, quotient, power) to combine into one logarithm, then convert to exponential form.',
        hint: 'Combine using properties',
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        front: 'What is the one-to-one property of logarithms?',
        back: 'If logᵦ m = logᵦ n, then m = n. Equal logs with same base mean equal arguments.',
        hint: 'Equal logs → equal arguments',
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        front: 'What domain restriction exists for logarithms?',
        back: 'The argument must be positive: logᵦ x requires x > 0.',
        hint: 'Argument must be positive',
        isPremium: false
      },
      {
        topicId: logarithmicEquations.id,
        front: 'How do you solve log₅ x = log₅(2x - 3)?',
        back: 'Use one-to-one property: if the logs are equal, the arguments are equal. So x = 2x - 3, then solve for x.',
        hint: 'Set arguments equal',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: logarithmic-equations-algebra2');

  console.log('\n✨ Successfully added problems and flashcards for 4 topics!');
  
  await prisma.$disconnect();
}

main();
