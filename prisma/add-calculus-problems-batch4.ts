import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 4: Derivatives Part 2 (6 topics)...');

  // Find the topics
  const constantMultipleSum = await prisma.topic.findFirst({
    where: { slug: 'constant-multiple-sum-rules' }
  });

  const derivativesTrig = await prisma.topic.findFirst({
    where: { slug: 'derivatives-of-trig-functions' }
  });

  const derivativesExp = await prisma.topic.findFirst({
    where: { slug: 'derivatives-of-exponential-functions' }
  });

  const derivativesLog = await prisma.topic.findFirst({
    where: { slug: 'derivatives-of-logarithmic-functions' }
  });

  const higherOrder = await prisma.topic.findFirst({
    where: { slug: 'higher-order-derivatives' }
  });

  const logDifferentiation = await prisma.topic.findFirst({
    where: { slug: 'logarithmic-differentiation-technique' }
  });

  if (!constantMultipleSum || !derivativesTrig || !derivativesExp || !derivativesLog || !higherOrder || !logDifferentiation) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Constant Multiple and Sum Rules (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: constantMultipleSum.id,
        question: 'Find the derivative of f(x) = 5x³ - 7x² + 2x - 9.',
        solution: `Step 1: Apply sum/difference rule:
d/dx[f + g - h] = f' + g' - h'
Take derivative of each term separately

Step 2: Constant multiple rule on each term:
d/dx[5x³] = 5·d/dx[x³] = 5·3x² = 15x²
d/dx[-7x²] = -7·d/dx[x²] = -7·2x = -14x
d/dx[2x] = 2·d/dx[x] = 2·1 = 2
d/dx[-9] = 0 (derivative of constant is 0)

Step 3: Combine:
f'(x) = 15x² - 14x + 2

Answer: f'(x) = 15x² - 14x + 2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: constantMultipleSum.id,
        question: 'If g(x) = 3sin(x) - 4cos(x) + 2eˣ, find g\'(x).',
        solution: `Step 1: Apply sum/difference rule:
g'(x) = d/dx[3sin(x)] - d/dx[4cos(x)] + d/dx[2eˣ]

Step 2: Apply constant multiple rule:
d/dx[3sin(x)] = 3·d/dx[sin(x)] = 3cos(x)
d/dx[4cos(x)] = 4·d/dx[cos(x)] = 4(-sin(x)) = -4sin(x)
d/dx[2eˣ] = 2·d/dx[eˣ] = 2eˣ

Step 3: Combine:
g'(x) = 3cos(x) - (-4sin(x)) + 2eˣ
g'(x) = 3cos(x) + 4sin(x) + 2eˣ

Answer: g'(x) = 3cos(x) + 4sin(x) + 2eˣ`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: constantMultipleSum.id,
        front: 'What is the constant multiple rule?',
        back: 'd/dx[c·f(x)] = c·f\'(x). You can pull constants out in front of the derivative.',
        hint: 'Pull constant out front',
        isPremium: false
      },
      {
        topicId: constantMultipleSum.id,
        front: 'What is the sum rule for derivatives?',
        back: 'd/dx[f(x) + g(x)] = f\'(x) + g\'(x). The derivative of a sum is the sum of the derivatives.',
        hint: 'Derivative of sum = sum of derivatives',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: constant-multiple-sum-rules (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Derivatives of Trigonometric Functions (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: derivativesTrig.id,
        question: 'Find dy/dx if y = 2sin(x) + 3cos(x).',
        solution: `Step 1: Recall basic trig derivatives:
d/dx[sin(x)] = cos(x)
d/dx[cos(x)] = -sin(x)

Step 2: Apply constant multiple and sum rules:
dy/dx = 2·d/dx[sin(x)] + 3·d/dx[cos(x)]

Step 3: Substitute:
dy/dx = 2cos(x) + 3(-sin(x))
dy/dx = 2cos(x) - 3sin(x)

Answer: dy/dx = 2cos(x) - 3sin(x)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: derivativesTrig.id,
        question: 'Find the derivative of f(x) = tan(x) + sec(x).',
        solution: `Step 1: Recall derivatives of tan and sec:
d/dx[tan(x)] = sec²(x)
d/dx[sec(x)] = sec(x)tan(x)

Step 2: Apply sum rule:
f'(x) = d/dx[tan(x)] + d/dx[sec(x)]

Step 3: Substitute:
f'(x) = sec²(x) + sec(x)tan(x)

Step 4: Optional factoring:
f'(x) = sec(x)[sec(x) + tan(x)]

Answer: f'(x) = sec²(x) + sec(x)tan(x)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: derivativesTrig.id,
        front: 'What are d/dx[sin(x)] and d/dx[cos(x)]?',
        back: 'd/dx[sin(x)] = cos(x) and d/dx[cos(x)] = -sin(x)',
        hint: 'sin→cos, cos→-sin',
        isPremium: false
      },
      {
        topicId: derivativesTrig.id,
        front: 'What are d/dx[tan(x)] and d/dx[sec(x)]?',
        back: 'd/dx[tan(x)] = sec²(x) and d/dx[sec(x)] = sec(x)tan(x)',
        hint: 'tan→sec², sec→sec·tan',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: derivatives-of-trig-functions (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Derivatives of Exponential Functions (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: derivativesExp.id,
        question: 'Find f\'(x) if f(x) = 3eˣ + 2ˣ.',
        solution: `Step 1: Recall exponential derivatives:
d/dx[eˣ] = eˣ
d/dx[aˣ] = aˣ·ln(a)

Step 2: Derivative of 3eˣ:
d/dx[3eˣ] = 3eˣ

Step 3: Derivative of 2ˣ:
d/dx[2ˣ] = 2ˣ·ln(2)

Step 4: Combine:
f'(x) = 3eˣ + 2ˣ·ln(2)

Answer: f'(x) = 3eˣ + 2ˣ·ln(2)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: derivativesExp.id,
        question: 'Find dy/dx if y = 5^(2x).',
        solution: `Step 1: Recognize this needs chain rule:
y = 5^(2x) = 5^u where u = 2x

Step 2: For aᵘ, derivative is:
d/dx[aᵘ] = aᵘ·ln(a)·du/dx

Step 3: Find du/dx:
u = 2x
du/dx = 2

Step 4: Apply formula:
dy/dx = 5^(2x)·ln(5)·2
dy/dx = 2·ln(5)·5^(2x)

Answer: dy/dx = 2ln(5)·5^(2x)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: derivativesExp.id,
        front: 'What is d/dx[eˣ]?',
        back: 'd/dx[eˣ] = eˣ. The exponential function e^x is its own derivative!',
        hint: 'eˣ is special - equals its own derivative',
        isPremium: false
      },
      {
        topicId: derivativesExp.id,
        front: 'What is d/dx[aˣ] for a > 0?',
        back: 'd/dx[aˣ] = aˣ·ln(a). Need to multiply by ln(a).',
        hint: 'aˣ·ln(a)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: derivatives-of-exponential-functions (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Derivatives of Logarithmic Functions (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: derivativesLog.id,
        question: 'Find f\'(x) if f(x) = ln(x) + log₁₀(x).',
        solution: `Step 1: Recall logarithm derivatives:
d/dx[ln(x)] = 1/x
d/dx[logₐ(x)] = 1/(x·ln(a))

Step 2: Derivative of ln(x):
d/dx[ln(x)] = 1/x

Step 3: Derivative of log₁₀(x):
d/dx[log₁₀(x)] = 1/(x·ln(10))

Step 4: Combine:
f'(x) = 1/x + 1/(x·ln(10))

Step 5: Factor (optional):
f'(x) = (1/x)[1 + 1/ln(10)]

Answer: f'(x) = 1/x + 1/(x·ln(10))`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: derivativesLog.id,
        question: 'Find dy/dx if y = ln(5x).',
        solution: `Step 1: Method 1 - Use chain rule:
Let u = 5x, then y = ln(u)
dy/du = 1/u = 1/(5x)
du/dx = 5
dy/dx = (1/(5x))·5 = 5/(5x) = 1/x

Step 2: Method 2 - Use log properties first:
y = ln(5x) = ln(5) + ln(x)
dy/dx = 0 + 1/x = 1/x

Step 3: Verify both methods agree:
Both give dy/dx = 1/x ✓

Step 4: Important insight:
d/dx[ln(cx)] = 1/x for any constant c
The constant disappears in the derivative!

Answer: dy/dx = 1/x`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: derivativesLog.id,
        front: 'What is d/dx[ln(x)]?',
        back: 'd/dx[ln(x)] = 1/x (for x > 0)',
        hint: '1/x',
        isPremium: false
      },
      {
        topicId: derivativesLog.id,
        front: 'What is d/dx[logₐ(x)]?',
        back: 'd/dx[logₐ(x)] = 1/(x·ln(a)). Natural log in denominator!',
        hint: '1/(x·ln(a))',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: derivatives-of-logarithmic-functions (now has 5 problems, 6 flashcards)');

  // TOPIC 5: Higher-Order Derivatives (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: higherOrder.id,
        question: 'Find f\'\'(x) if f(x) = x⁴ - 3x³ + 2x² - 5x + 1.',
        solution: `Step 1: Find first derivative:
f'(x) = 4x³ - 9x² + 4x - 5

Step 2: Find second derivative:
f''(x) = d/dx[4x³ - 9x² + 4x - 5]
f''(x) = 12x² - 18x + 4

Answer: f''(x) = 12x² - 18x + 4`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: higherOrder.id,
        question: 'If y = sin(x), find y⁽⁴⁾ (the fourth derivative).',
        solution: `Step 1: Find first derivative:
y' = cos(x)

Step 2: Find second derivative:
y'' = -sin(x)

Step 3: Find third derivative:
y''' = -cos(x)

Step 4: Find fourth derivative:
y⁽⁴⁾ = sin(x)

Step 5: Observe the pattern:
y⁽⁰⁾ = sin(x)
y⁽¹⁾ = cos(x)
y⁽²⁾ = -sin(x)
y⁽³⁾ = -cos(x)
y⁽⁴⁾ = sin(x)
Pattern repeats every 4 derivatives!

Answer: y⁽⁴⁾ = sin(x)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: higherOrder.id,
        front: 'What is the notation for the second derivative?',
        back: 'f\'\'(x), y\'\', d²y/dx², or d²f/dx². All mean the derivative of the derivative.',
        hint: 'Multiple notations: f\'\', d²y/dx²',
        isPremium: false
      },
      {
        topicId: higherOrder.id,
        front: 'What does the second derivative tell you?',
        back: 'Concavity of the function. Positive = concave up, negative = concave down. Also measures rate of change of the rate of change.',
        hint: 'Concavity and acceleration',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: higher-order-derivatives (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Logarithmic Differentiation Technique (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: logDifferentiation.id,
        question: 'Use logarithmic differentiation to find dy/dx if y = x^x.',
        solution: `Step 1: Take natural log of both sides:
ln(y) = ln(x^x)

Step 2: Use log property:
ln(y) = x·ln(x)

Step 3: Differentiate implicitly:
(1/y)·dy/dx = d/dx[x·ln(x)]

Step 4: Use product rule on right side:
d/dx[x·ln(x)] = x·(1/x) + ln(x)·1 = 1 + ln(x)

Step 5: Solve for dy/dx:
(1/y)·dy/dx = 1 + ln(x)
dy/dx = y·[1 + ln(x)]

Step 6: Substitute y = x^x:
dy/dx = x^x·[1 + ln(x)]

Answer: dy/dx = x^x(1 + ln(x))`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: logDifferentiation.id,
        question: 'Find dy/dx if y = (x² + 1)³(x - 2)⁴/(x + 3)².',
        solution: `Step 1: Take ln of both sides:
ln(y) = ln[(x² + 1)³(x - 2)⁴/(x + 3)²]

Step 2: Use log properties:
ln(y) = 3ln(x² + 1) + 4ln(x - 2) - 2ln(x + 3)

Step 3: Differentiate both sides:
(1/y)·dy/dx = 3·(2x)/(x² + 1) + 4·1/(x - 2) - 2·1/(x + 3)

Step 4: Simplify right side:
(1/y)·dy/dx = 6x/(x² + 1) + 4/(x - 2) - 2/(x + 3)

Step 5: Multiply both sides by y:
dy/dx = y·[6x/(x² + 1) + 4/(x - 2) - 2/(x + 3)]

Step 6: Substitute original y:
dy/dx = [(x² + 1)³(x - 2)⁴/(x + 3)²]·[6x/(x² + 1) + 4/(x - 2) - 2/(x + 3)]

Answer: dy/dx = [(x² + 1)³(x - 2)⁴/(x + 3)²][6x/(x² + 1) + 4/(x - 2) - 2/(x + 3)]`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: logDifferentiation.id,
        front: 'When should you use logarithmic differentiation?',
        back: 'When y involves products, quotients, or powers that are difficult to differentiate directly. Also for y = f(x)^g(x).',
        hint: 'Complex products/quotients or variable exponents',
        isPremium: false
      },
      {
        topicId: logDifferentiation.id,
        front: 'What are the steps for logarithmic differentiation?',
        back: '1) Take ln of both sides, 2) Use log properties to simplify, 3) Differentiate implicitly, 4) Solve for dy/dx, 5) Substitute original y.',
        hint: 'ln both sides → simplify → differentiate → solve',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: logarithmic-differentiation-technique (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 4! Added 6 more Derivatives topics.');
  
  await prisma.$disconnect();
}

main();
