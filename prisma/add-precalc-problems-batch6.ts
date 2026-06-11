import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems to AP Precalculus - Batch 6: Polynomial and Rational Functions Part 2 (4 topics)...');

  // Find the topics
  const polynomialInequalities1 = await prisma.topic.findFirst({
    where: { slug: 'polynomial-inequalities' }
  });

  const rationalInequalities1 = await prisma.topic.findFirst({
    where: { slug: 'rational-inequalities' }
  });

  const polynomialInequalities2 = await prisma.topic.findFirst({
    where: { slug: 'solving-polynomial-inequalities' }
  });

  const rationalInequalities2 = await prisma.topic.findFirst({
    where: { slug: 'solving-rational-inequalities' }
  });

  if (!polynomialInequalities1 || !rationalInequalities1 || !polynomialInequalities2 || !rationalInequalities2) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Polynomial Inequalities (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialInequalities1.id,
        question: 'Solve: x² - 5x + 6 > 0',
        solution: `Step 1: Factor the polynomial:
x² - 5x + 6 = (x - 2)(x - 3)

Step 2: Find critical points (where expression = 0):
(x - 2)(x - 3) = 0
x = 2 or x = 3

Step 3: Test intervals:
Test x = 0 (x < 2): (0-2)(0-3) = (-2)(-3) = 6 > 0 ✓
Test x = 2.5 (2 < x < 3): (0.5)(-0.5) = -0.25 < 0 ✗
Test x = 4 (x > 3): (2)(1) = 2 > 0 ✓

Step 4: Create sign chart:
        +  +  +  | -  -  -  | +  +  +
    ―――――――――――――2―――――――――3―――――――――→
                                    x

Step 5: Solution (where positive):
x < 2 or x > 3

Answer: (-∞, 2) ∪ (3, ∞)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialInequalities1.id,
        question: 'Solve: x³ - 4x ≤ 0',
        solution: `Step 1: Factor:
x³ - 4x = x(x² - 4)
        = x(x - 2)(x + 2)

Step 2: Find critical points:
x = 0, x = 2, x = -2

Step 3: Order critical points:
-2, 0, 2

Step 4: Test intervals:
Test x = -3: (-3)(-5)(−1) = -15 < 0 ✓
Test x = -1: (-1)(−3)(1) = 3 > 0 ✗
Test x = 1: (1)(−1)(3) = -3 < 0 ✓
Test x = 3: (3)(1)(5) = 15 > 0 ✗

Step 5: Sign chart:
        -  -  -  | +  +  +  | -  -  -  | +  +  +
    ―――――――――――――2―――――――――0―――――――――2―――――――――→
                                              x

Step 6: Solution (≤ 0, include endpoints):
x ≤ -2 or 0 ≤ x ≤ 2

Answer: (-∞, -2] ∪ [0, 2]`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: polynomial-inequalities (now has 5 total)');

  // TOPIC 2: Rational Inequalities (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalInequalities1.id,
        question: 'Solve: (x - 1)/(x + 2) > 0',
        solution: `Step 1: Find critical points:
Numerator = 0: x - 1 = 0 → x = 1
Denominator = 0: x + 2 = 0 → x = -2 (vertical asymptote)

Step 2: Test intervals:
Test x = -3: (-4)/(-1) = 4 > 0 ✓
Test x = 0: (-1)/(2) = -0.5 < 0 ✗
Test x = 2: (1)/(4) = 0.25 > 0 ✓

Step 3: Sign chart:
        +  +  +  | -  -  -  | +  +  +
    ―――――――――――――2―――――――――1―――――――――→
               (VA)      (zero)      x

Step 4: Solution (> 0, exclude vertical asymptote):
x < -2 or x > 1

Answer: (-∞, -2) ∪ (1, ∞)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: rationalInequalities1.id,
        question: 'Solve: x/(x² - 9) ≥ 0',
        solution: `Step 1: Factor denominator:
x/(x² - 9) = x/[(x - 3)(x + 3)]

Step 2: Find critical points:
Numerator = 0: x = 0
Denominator = 0: x = 3, x = -3 (vertical asymptotes)

Step 3: Order critical points:
-3, 0, 3

Step 4: Test intervals:
Test x = -4: (-4)/(7)(-1) = 4/7 > 0 ✓
Test x = -1: (-1)/(-4)(2) = -1/8 < 0 ✗
Test x = 1: (1)/(-2)(4) = -1/8 < 0 ✗
Test x = 4: (4)/(1)(7) = 4/7 > 0 ✓

Step 5: Sign chart (NEVER include VA in solution):
        +  +  +  | -  -  -  | -  -  -  | +  +  +
    ―――――――――――――3―――――――――0―――――――――3―――――――――→
              (VA)     (zero)     (VA)       x

Step 6: Solution (≥ 0, include zero but NOT VAs):
x < -3 or x = 0 or x > 3

Answer: (-∞, -3) ∪ {0} ∪ (3, ∞) or (-∞, -3) ∪ [0, 0] ∪ (3, ∞)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: rational-inequalities (now has 5 total)');

  // TOPIC 3: Solving Polynomial Inequalities (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomialInequalities2.id,
        question: 'Solve: x² + 3x - 4 < 0',
        solution: `Step 1: Factor:
x² + 3x - 4 = (x + 4)(x - 1)

Step 2: Find zeros:
x = -4, x = 1

Step 3: Test intervals:
Test x = -5: (-1)(-6) = 6 > 0 ✗
Test x = 0: (4)(-1) = -4 < 0 ✓
Test x = 2: (6)(1) = 6 > 0 ✗

Step 4: Sign chart:
        +  +  +  | -  -  -  | +  +  +
    ―――――――――――――4―――――――――1―――――――――→
                                    x

Step 5: Solution (< 0, don't include endpoints):
-4 < x < 1

Answer: (-4, 1)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: polynomialInequalities2.id,
        question: 'Solve: 2x³ + x² - 8x - 4 ≥ 0',
        solution: `Step 1: Factor by grouping:
2x³ + x² - 8x - 4
= x²(2x + 1) - 4(2x + 1)
= (x² - 4)(2x + 1)
= (x - 2)(x + 2)(2x + 1)

Step 2: Find zeros:
x = 2, x = -2, x = -1/2

Step 3: Order: -2, -1/2, 2

Step 4: Test intervals:
Test x = -3: (-5)(-1)(-5) = -25 < 0 ✗
Test x = -1: (-3)(1)(-1) = 3 > 0 ✓
Test x = 0: (-2)(2)(1) = -4 < 0 ✗
Test x = 3: (1)(5)(7) = 35 > 0 ✓

Step 5: Sign chart:
        -  -  -  | +  +  +  | -  -  -  | +  +  +
    ―――――――――――――2―――――-1/2――――――2―――――――――→
                                              x

Step 6: Solution (≥ 0, include endpoints):
-2 ≤ x ≤ -1/2 or x ≥ 2

Answer: [-2, -1/2] ∪ [2, ∞)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: solving-polynomial-inequalities (now has 5 total)');

  // TOPIC 4: Solving Rational Inequalities (needs 2 more problems)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: rationalInequalities2.id,
        question: 'Solve: (x + 1)/(x - 3) ≤ 2',
        solution: `Step 1: Move everything to left side:
(x + 1)/(x - 3) - 2 ≤ 0

Step 2: Get common denominator:
(x + 1)/(x - 3) - 2(x - 3)/(x - 3) ≤ 0
[x + 1 - 2(x - 3)]/(x - 3) ≤ 0
[x + 1 - 2x + 6]/(x - 3) ≤ 0
[-x + 7]/(x - 3) ≤ 0
or (7 - x)/(x - 3) ≤ 0

Step 3: Find critical points:
Numerator = 0: 7 - x = 0 → x = 7
Denominator = 0: x = 3 (VA)

Step 4: Test intervals:
Test x = 0: (7)/(-3) = -7/3 < 0 ✓
Test x = 4: (3)/(1) = 3 > 0 ✗
Test x = 8: (-1)/(5) = -1/5 < 0 ✓

Step 5: Sign chart:
        -  -  -  | +  +  +  | -  -  -
    ―――――――――――――3―――――――――7―――――――――→
              (VA)     (zero)       x

Step 6: Solution (≤ 0, exclude VA, include zero):
x < 3 or x ≥ 7

Answer: (-∞, 3) ∪ [7, ∞)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: rationalInequalities2.id,
        question: 'Solve: (x² - 4)/(x² - 1) > 0',
        solution: `Step 1: Factor:
(x² - 4)/(x² - 1) = [(x - 2)(x + 2)]/[(x - 1)(x + 1)]

Step 2: Find critical points:
Zeros: x = 2, x = -2
VAs: x = 1, x = -1

Step 3: Order: -2, -1, 1, 2

Step 4: Test intervals:
Test x = -3: (-5)(-1)/[(-4)(-2)] = 5/8 > 0 ✓
Test x = -1.5: (-3.5)(-0.5)/[(-2.5)(-0.5)] = 1.75/1.25 > 0 ✓
Test x = 0: (-2)(2)/[(-1)(1)] = -4/(-1) = 4 > 0 ✓
Test x = 1.5: (-0.5)(3.5)/[(0.5)(2.5)] = -1.75/1.25 < 0 ✗
Test x = 3: (1)(5)/[(2)(4)] = 5/8 > 0 ✓

Step 5: Sign chart:
        +  +  +  | +  +  +  | +  +  +  | -  -  -  | +  +  +
    ―――――――――――――2―――――-1―――――1―――――――2―――――――――→
                  (VA)     (VA)                      x

Step 6: Solution (> 0, exclude VAs and zeros):
x < -2 or -2 < x < -1 or -1 < x < 1 or x > 2

Answer: (-∞, -2) ∪ (-2, -1) ∪ (-1, 1) ∪ (2, ∞)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: solving-rational-inequalities (now has 5 total)');

  console.log('\n✨ Successfully completed batch 6! Polynomial and Rational Functions category now 100% complete!');
  
  await prisma.$disconnect();
}

main();
