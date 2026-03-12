import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 1: Limits and Continuity Part 1 (4 topics)...');

  // Find the topics
  const whatIsLimit = await prisma.topic.findFirst({
    where: { slug: 'what-is-a-limit' }
  });

  const limitNotation = await prisma.topic.findFirst({
    where: { slug: 'limit-notation-terminology' }
  });

  const estimatingTables = await prisma.topic.findFirst({
    where: { slug: 'estimating-limits-tables' }
  });

  const estimatingGraphs = await prisma.topic.findFirst({
    where: { slug: 'estimating-limits-graphs' }
  });

  if (!whatIsLimit || !limitNotation || !estimatingTables || !estimatingGraphs) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: What is a Limit? (has 1, needs 4 more problems + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: whatIsLimit.id,
        question: 'What does lim(x→2) f(x) = 5 mean in words?',
        solution: `Step 1: Break down the notation:
• lim means "limit"
• x→2 means "as x approaches 2"
• f(x) is the function
• = 5 is the value the function approaches

Step 2: Interpret:
As x gets closer and closer to 2 (from both sides),
the function values f(x) get closer and closer to 5

Step 3: Important note:
This does NOT require f(2) = 5
The limit describes behavior NEAR x = 2, not AT x = 2

Answer: As x approaches 2, f(x) approaches 5`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: whatIsLimit.id,
        question: 'If f(x) = (x² - 4)/(x - 2), describe what happens to f(x) as x approaches 2.',
        solution: `Step 1: Note that f(2) is undefined:
f(2) = (4 - 4)/(2 - 2) = 0/0 (indeterminate)

Step 2: Factor the numerator:
f(x) = (x² - 4)/(x - 2) = [(x - 2)(x + 2)]/(x - 2)

Step 3: Simplify for x ≠ 2:
f(x) = x + 2

Step 4: Evaluate the limit:
As x→2, f(x) = x + 2 → 2 + 2 = 4

Step 5: Create a table to verify:
x:    1.9    1.99   1.999  →2←  2.001  2.01   2.1
f(x): 3.9    3.99   3.999   4   4.001  4.01   4.1

Answer: As x approaches 2, f(x) approaches 4`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: whatIsLimit.id,
        question: 'Consider f(x) = |x|/x. What is lim(x→0) f(x)?',
        solution: `Step 1: Analyze from the left (x < 0):
When x < 0, |x| = -x
f(x) = -x/x = -1

Step 2: Analyze from the right (x > 0):
When x > 0, |x| = x
f(x) = x/x = 1

Step 3: Check if left and right limits agree:
lim(x→0⁻) f(x) = -1
lim(x→0⁺) f(x) = 1

Step 4: Since left ≠ right:
The limit does NOT exist

Step 5: Conclusion:
lim(x→0) f(x) does not exist (DNE)

Answer: The limit does not exist`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: whatIsLimit.id,
        question: 'Explain why a function can have a limit at x = a even if f(a) is undefined.',
        solution: `Step 1: Understand what a limit measures:
A limit describes the behavior of f(x) as x APPROACHES a,
not the value AT x = a

Step 2: Example:
f(x) = (x² - 1)/(x - 1)
• f(1) is undefined (0/0)
• But lim(x→1) f(x) = 2

Step 3: Why this works:
Factor: f(x) = [(x - 1)(x + 1)]/(x - 1) = x + 1 for x ≠ 1
As x→1, f(x)→2, even though f(1) doesn't exist

Step 4: The key concept:
Limits care about NEARBY values, not the value AT the point
We can get arbitrarily close to x = a without ever reaching it

Step 5: Practical meaning:
This is why limits are useful for defining derivatives
(which often involve 0/0 forms)

Answer: Limits describe nearby behavior, not the value at the point itself`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: whatIsLimit.id,
        front: 'What is the intuitive meaning of lim(x→a) f(x) = L?',
        back: 'As x gets closer to a, f(x) gets closer to L. The limit describes the behavior of f(x) near x = a, not necessarily at x = a.',
        hint: 'Describes nearby behavior',
        isPremium: false
      },
      {
        topicId: whatIsLimit.id,
        front: 'Does f(a) need to exist for lim(x→a) f(x) to exist?',
        back: 'No! The limit can exist even if f(a) is undefined. Limits describe behavior NEAR a point, not AT the point.',
        hint: 'Near vs. at',
        isPremium: false
      },
      {
        topicId: whatIsLimit.id,
        front: 'When does a limit NOT exist?',
        back: 'When left and right limits don\'t agree, or when the function oscillates infinitely, or when it approaches ±∞ (unless considering infinite limits).',
        hint: 'Left ≠ right, oscillation, or unbounded',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: what-is-a-limit (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Limit Notation and Terminology (has 2, needs 3 more problems + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: limitNotation.id,
        question: 'Write in limit notation: "The limit of 3x + 1 as x approaches 2 is 7"',
        solution: `Step 1: Identify the components:
• Function: f(x) = 3x + 1
• Approaching: x → 2
• Limit value: 7

Step 2: Write in limit notation:
lim(x→2) (3x + 1) = 7

Answer: lim(x→2) (3x + 1) = 7`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: limitNotation.id,
        question: 'What is the difference between lim(x→3⁻) f(x) and lim(x→3⁺) f(x)?',
        solution: `Step 1: Explain left-hand limit (x→3⁻):
The superscript "−" means from the LEFT
We approach 3 from values less than 3 (like 2.9, 2.99, 2.999...)

Step 2: Explain right-hand limit (x→3⁺):
The superscript "+" means from the RIGHT
We approach 3 from values greater than 3 (like 3.1, 3.01, 3.001...)

Step 3: When do they matter?
• If lim(x→3⁻) f(x) = lim(x→3⁺) f(x), then lim(x→3) f(x) exists
• If they're different, the two-sided limit DNE

Step 4: Example:
For f(x) = |x|/x at x = 0:
• lim(x→0⁻) f(x) = -1 (from left)
• lim(x→0⁺) f(x) = 1 (from right)
• lim(x→0) f(x) DNE (they don't match)

Answer: x→3⁻ approaches from the left; x→3⁺ approaches from the right`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: limitNotation.id,
        question: 'Interpret: lim(x→∞) (1/x) = 0',
        solution: `Step 1: Break down the notation:
• x→∞ means x gets arbitrarily large (positive)
• 1/x is the function
• = 0 is the limiting value

Step 2: Numerical analysis:
x:     10    100    1000   10000   ...
1/x:   0.1   0.01   0.001  0.0001  ...

Step 3: Interpretation:
As x becomes larger and larger (approaching infinity),
1/x becomes smaller and smaller (approaching 0)

Step 4: Graphical meaning:
The graph of y = 1/x has a horizontal asymptote at y = 0

Step 5: Important note:
x never actually "reaches" infinity
We're describing the trend as x grows without bound

Answer: As x increases without bound, 1/x approaches 0`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: limitNotation.id,
        front: 'What does the notation lim(x→a⁻) f(x) mean?',
        back: 'The left-hand limit: the value f(x) approaches as x approaches a from the left (from values less than a).',
        hint: 'Left-hand limit',
        isPremium: false
      },
      {
        topicId: limitNotation.id,
        front: 'What does the notation lim(x→a⁺) f(x) mean?',
        back: 'The right-hand limit: the value f(x) approaches as x approaches a from the right (from values greater than a).',
        hint: 'Right-hand limit',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: limit-notation-terminology (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Estimating Limits from Tables (has 1, needs 4 more problems + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: estimatingTables.id,
        question: 'Estimate lim(x→2) f(x) from the table:\nx:    1.9    1.99   1.999  2.001  2.01   2.1\nf(x): 3.8    3.98   3.998  4.002  4.02   4.2',
        solution: `Step 1: Examine values as x approaches 2 from the left:
x:    1.9 → 1.99 → 1.999 → 2
f(x): 3.8 → 3.98 → 3.998 → ?
Values approach 4

Step 2: Examine values as x approaches 2 from the right:
x:    2 ← 2.001 ← 2.01 ← 2.1
f(x): ? ← 4.002 ← 4.02 ← 4.2
Values approach 4

Step 3: Check agreement:
Left-hand limit ≈ 4
Right-hand limit ≈ 4
Both agree!

Step 4: Conclusion:
lim(x→2) f(x) = 4

Answer: 4`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: estimatingTables.id,
        question: 'Estimate lim(x→0) (sin(x)/x) from the table:\nx:      0.1     0.01    0.001   -0.001  -0.01   -0.1\nf(x):   0.9983  0.99998 0.999999 0.999999 0.99998 0.9983',
        solution: `Step 1: Examine from the right (positive x):
x:    0.1 → 0.01 → 0.001 → 0
f(x): 0.9983 → 0.99998 → 0.999999 → ?
Approaching 1

Step 2: Examine from the left (negative x):
x:    -0.1 → -0.01 → -0.001 → 0
f(x): 0.9983 → 0.99998 → 0.999999 → ?
Also approaching 1

Step 3: Verify symmetry:
Function values are the same from both sides
Both approach 1

Step 4: Estimate the limit:
lim(x→0) (sin(x)/x) ≈ 1

Step 5: Note:
This is a famous limit in calculus!
Exact value is 1

Answer: 1`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: estimatingTables.id,
        question: 'Use a table to estimate lim(x→1) (x³ - 1)/(x - 1)',
        solution: `Step 1: Create a table approaching from the left:
x:      0.9     0.99    0.999
x³-1:   -0.271  -0.0299 -0.003
x-1:    -0.1    -0.01   -0.001
f(x):   2.71    2.9701  2.997

Step 2: Create a table approaching from the right:
x:      1.1     1.01    1.001
x³-1:   0.331   0.0303  0.003
x-1:    0.1     0.01    0.001
f(x):   3.31    3.0301  3.003

Step 3: Analyze the pattern:
From left: 2.71 → 2.9701 → 2.997 → ?
From right: 3.31 → 3.0301 → 3.003 → ?
Both approaching 3

Step 4: Estimate:
lim(x→1) (x³ - 1)/(x - 1) ≈ 3

Step 5: Verification (algebraic):
x³ - 1 = (x - 1)(x² + x + 1)
(x³ - 1)/(x - 1) = x² + x + 1
At x = 1: 1 + 1 + 1 = 3 ✓

Answer: 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: estimatingTables.id,
        question: 'Estimate lim(x→0⁺) (1/x) from the table. What happens?\nx:    0.1    0.01   0.001  0.0001\nf(x): 10     100    1000   10000',
        solution: `Step 1: Examine the pattern:
As x gets smaller (closer to 0):
x:    0.1 → 0.01 → 0.001 → 0.0001 → 0⁺
f(x): 10 → 100 → 1000 → 10000 → ?

Step 2: Observe the behavior:
The function values are growing without bound
They're increasing toward infinity

Step 3: Conclusion:
The limit does not exist as a finite number
We say: lim(x→0⁺) (1/x) = ∞

Step 4: Important note:
This is an "infinite limit"
∞ is not a number, it describes unbounded growth

Step 5: Graphical interpretation:
The graph has a vertical asymptote at x = 0

Answer: The limit is ∞ (infinite limit)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: estimatingTables.id,
        front: 'How do you estimate a limit from a table?',
        back: 'Look at function values as x approaches the target from both sides. If values approach the same number L, then the limit is L.',
        hint: 'Approach from both sides',
        isPremium: false
      },
      {
        topicId: estimatingTables.id,
        front: 'What should you check when estimating limits from tables?',
        back: 'Check that left-hand and right-hand approaches give the same value. If they differ, the limit does not exist.',
        hint: 'Left = right?',
        isPremium: false
      },
      {
        topicId: estimatingTables.id,
        front: 'What does it mean if table values grow without bound?',
        back: 'The limit is infinite (∞ or -∞). This is a special case - we say the limit "does not exist" or describe it as an infinite limit.',
        hint: 'Unbounded = infinite limit',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: estimating-limits-tables (now has 5 problems, 6 flashcards)');

  // TOPIC 4: Estimating Limits from Graphs (has 1, needs 4 more problems + 3 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: estimatingGraphs.id,
        question: 'From the graph of f(x), estimate lim(x→2) f(x) if the graph shows a smooth curve passing through (2, 3).',
        solution: `Step 1: Understand what to look for:
We need to see where the graph is heading as x approaches 2

Step 2: Trace from the left:
As x moves toward 2 from the left,
follow the curve to see what y-value it approaches

Step 3: Trace from the right:
As x moves toward 2 from the right,
follow the curve to see what y-value it approaches

Step 4: Since it's a smooth curve through (2, 3):
Both left and right traces lead to y = 3

Step 5: Conclusion:
lim(x→2) f(x) = 3

Note: In this case, the limit equals f(2), which is typical for continuous functions

Answer: 3`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: estimatingGraphs.id,
        question: 'A graph shows a hole at (3, 5) but the curve approaches 5 from both sides. What is lim(x→3) f(x)?',
        solution: `Step 1: Understand the graph:
• Hole at (3, 5) means f(3) is undefined
• But the curve approaches the point from both sides

Step 2: Check left-hand limit:
As x → 3 from the left, the graph approaches y = 5

Step 3: Check right-hand limit:
As x → 3 from the right, the graph also approaches y = 5

Step 4: Apply limit definition:
Since both one-sided limits equal 5:
lim(x→3) f(x) = 5

Step 5: Key insight:
The limit exists even though f(3) is undefined!
This is perfectly valid - limits describe nearby behavior

Answer: 5`,
        difficulty: 'EASY',
        order: 2,
        isPremium: false
      },
      {
        topicId: estimatingGraphs.id,
        question: 'A graph shows a jump discontinuity at x = 1. The left piece approaches 2 and the right piece approaches 4. Find lim(x→1) f(x).',
        solution: `Step 1: Identify one-sided limits:
• lim(x→1⁻) f(x) = 2 (left side approaches 2)
• lim(x→1⁺) f(x) = 4 (right side approaches 4)

Step 2: Check if they agree:
Left-hand limit: 2
Right-hand limit: 4
2 ≠ 4

Step 3: Apply limit criterion:
For lim(x→1) f(x) to exist,
left and right limits must be equal

Step 4: Conclusion:
Since they're different, the two-sided limit does not exist

Step 5: Proper notation:
lim(x→1) f(x) = DNE (does not exist)

Answer: Does not exist (DNE)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: estimatingGraphs.id,
        question: 'A graph shows a vertical asymptote at x = 2. As x approaches 2 from the right, the graph goes up toward +∞. What is lim(x→2⁺) f(x)?',
        solution: `Step 1: Identify the behavior:
• Vertical asymptote at x = 2
• From the right (x > 2), graph increases without bound

Step 2: Interpret "increases without bound":
The function values grow larger and larger
They approach positive infinity

Step 3: Write the limit:
lim(x→2⁺) f(x) = ∞

Step 4: Important notes:
• This is an "infinite limit"
• ∞ is not a real number
• We often say "the limit does not exist"
• But we can be more specific: it's unbounded positive

Step 5: Graphical meaning:
Vertical asymptote where function shoots up to infinity

Answer: +∞ (infinite limit)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: estimatingGraphs.id,
        front: 'How do you estimate a limit from a graph?',
        back: 'Trace the graph as x approaches the target value from both left and right. See what y-value the graph approaches.',
        hint: 'Trace from both sides',
        isPremium: false
      },
      {
        topicId: estimatingGraphs.id,
        front: 'Can a limit exist at a point where there\'s a hole in the graph?',
        back: 'Yes! If the graph approaches the same y-value from both sides, the limit exists even if f(a) is undefined.',
        hint: 'Hole doesn\'t stop limit',
        isPremium: false
      },
      {
        topicId: estimatingGraphs.id,
        front: 'What does a vertical asymptote tell you about limits?',
        back: 'It indicates an infinite limit. The function approaches ±∞ as x approaches the asymptote.',
        hint: 'Vertical asymptote = infinite limit',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: estimating-limits-graphs (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 1! Added problems and flashcards to 4 Limits topics.');
  
  await prisma.$disconnect();
}

main();
