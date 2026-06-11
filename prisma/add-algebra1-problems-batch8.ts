import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 8 (3 topics)...');

  // Find the topics
  const arithmeticSequences = await prisma.topic.findFirst({
    where: { slug: 'arithmetic-sequences-algebra1' }
  });

  const probabilityBasics = await prisma.topic.findFirst({
    where: { slug: 'probability-basics-algebra1' }
  });

  const domainAndRange = await prisma.topic.findFirst({
    where: { slug: 'domain-and-range' }
  });

  if (!arithmeticSequences || !probabilityBasics || !domainAndRange) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Arithmetic Sequences
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: arithmeticSequences.id,
        question: 'Find the next three terms: 5, 8, 11, 14, ...',
        solution: `Step 1: Find the common difference (d):
d = 8 - 5 = 3
Check: 11 - 8 = 3, 14 - 11 = 3 ✓

Step 2: Add the common difference to find the next terms:
5th term: 14 + 3 = 17
6th term: 17 + 3 = 20
7th term: 20 + 3 = 23

Step 3: Verify the pattern:
5, 8, 11, 14, 17, 20, 23
(each term increases by 3)

Answer: 17, 20, 23`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        question: 'Is the sequence 3, 7, 11, 15, 19 arithmetic? If so, find the common difference.',
        solution: `Step 1: Check if consecutive terms have the same difference:
7 - 3 = 4
11 - 7 = 4
15 - 11 = 4
19 - 15 = 4

Step 2: Determine if arithmetic:
Since all differences are the same (4), this IS an arithmetic sequence.

Step 3: State the common difference:
d = 4

Answer: Yes, it is arithmetic with common difference d = 4`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        question: 'Find the 10th term of the arithmetic sequence: 2, 5, 8, 11, ...',
        solution: `Step 1: Identify the first term and common difference:
a₁ = 2 (first term)
d = 5 - 2 = 3 (common difference)

Step 2: Use the explicit formula:
aₙ = a₁ + (n - 1)d

Step 3: Substitute to find the 10th term (n = 10):
a₁₀ = 2 + (10 - 1)(3)
a₁₀ = 2 + (9)(3)
a₁₀ = 2 + 27
a₁₀ = 29

Step 4: Check by listing terms:
1st: 2, 2nd: 5, 3rd: 8, 4th: 11, 5th: 14, 6th: 17, 7th: 20, 8th: 23, 9th: 26, 10th: 29 ✓

Answer: a₁₀ = 29`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        question: 'The 5th term of an arithmetic sequence is 17 and the 8th term is 26. Find the first term and common difference.',
        solution: `Step 1: Write equations using aₙ = a₁ + (n - 1)d:
For n = 5: a₅ = a₁ + 4d = 17
For n = 8: a₈ = a₁ + 7d = 26

Step 2: Set up a system of equations:
a₁ + 4d = 17  ... (1)
a₁ + 7d = 26  ... (2)

Step 3: Subtract equation (1) from equation (2):
(a₁ + 7d) - (a₁ + 4d) = 26 - 17
3d = 9
d = 3

Step 4: Substitute d = 3 into equation (1):
a₁ + 4(3) = 17
a₁ + 12 = 17
a₁ = 5

Step 5: Check:
5th term: 5 + 4(3) = 5 + 12 = 17 ✓
8th term: 5 + 7(3) = 5 + 21 = 26 ✓

Answer: First term a₁ = 5, common difference d = 3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        question: 'Find the sum of the first 20 terms of the sequence: 3, 7, 11, 15, ...',
        solution: `Step 1: Identify values:
a₁ = 3 (first term)
d = 7 - 3 = 4 (common difference)
n = 20 (number of terms)

Step 2: Find the 20th term using aₙ = a₁ + (n - 1)d:
a₂₀ = 3 + (20 - 1)(4)
a₂₀ = 3 + 76
a₂₀ = 79

Step 3: Use the sum formula:
Sₙ = n(a₁ + aₙ)/2
(This is the average of first and last term, times the number of terms)

Step 4: Substitute:
S₂₀ = 20(3 + 79)/2
S₂₀ = 20(82)/2
S₂₀ = 1640/2
S₂₀ = 820

Alternative formula: Sₙ = n[2a₁ + (n-1)d]/2
S₂₀ = 20[2(3) + 19(4)]/2 = 20[6 + 76]/2 = 20(82)/2 = 820 ✓

Answer: Sum = 820`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: arithmeticSequences.id,
        front: 'What is an arithmetic sequence?',
        back: 'A sequence where the difference between consecutive terms is constant. This difference is called the common difference (d).',
        hint: 'Same difference between each term',
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        front: 'What is the common difference?',
        back: 'The constant value added to each term to get the next term. Found by subtracting any term from the next term.',
        hint: 'd = a₂ - a₁',
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        front: 'What is the explicit formula for an arithmetic sequence?',
        back: 'aₙ = a₁ + (n - 1)d, where aₙ is the nth term, a₁ is the first term, n is the term number, and d is the common difference.',
        hint: 'First term plus (term number minus 1) times common difference',
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        front: 'How do you find the common difference?',
        back: 'Subtract any term from the term that follows it: d = aₙ₊₁ - aₙ',
        hint: 'Next term minus current term',
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        front: 'What is the sum formula for an arithmetic series?',
        back: 'Sₙ = n(a₁ + aₙ)/2 or Sₙ = n[2a₁ + (n-1)d]/2',
        hint: 'Number of terms times average of first and last',
        isPremium: false
      },
      {
        topicId: arithmeticSequences.id,
        front: 'Can the common difference be negative?',
        back: 'Yes! A negative common difference means the sequence is decreasing. Example: 10, 7, 4, 1 has d = -3.',
        hint: 'Sequences can increase or decrease',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: arithmetic-sequences-algebra1');

  // TOPIC 2: Introduction to Probability
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: probabilityBasics.id,
        question: 'What is the probability of rolling a 4 on a standard six-sided die?',
        solution: `Step 1: Identify the favorable outcomes:
Rolling a 4 is 1 outcome

Step 2: Identify the total possible outcomes:
A die has 6 faces: {1, 2, 3, 4, 5, 6}
Total = 6 outcomes

Step 3: Use the probability formula:
P(event) = (number of favorable outcomes)/(total number of outcomes)

Step 4: Calculate:
P(rolling a 4) = 1/6

This can also be written as approximately 0.167 or 16.7%

Answer: 1/6`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        question: 'A bag contains 3 red marbles, 5 blue marbles, and 2 green marbles. What is the probability of randomly selecting a blue marble?',
        solution: `Step 1: Count favorable outcomes:
Blue marbles: 5

Step 2: Count total outcomes:
Total marbles: 3 + 5 + 2 = 10

Step 3: Calculate probability:
P(blue) = (number of blue)/(total marbles)
P(blue) = 5/10
P(blue) = 1/2

This equals 0.5 or 50%

Answer: 1/2 or 50%`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        question: 'What is the probability of NOT rolling a 5 on a standard die?',
        solution: `Step 1: Find P(rolling a 5):
Favorable outcomes: 1 (just the 5)
Total outcomes: 6
P(5) = 1/6

Step 2: Use the complement rule:
P(not A) = 1 - P(A)

Step 3: Calculate:
P(not 5) = 1 - 1/6
P(not 5) = 6/6 - 1/6
P(not 5) = 5/6

Alternative method:
Favorable outcomes for "not 5": {1, 2, 3, 4, 6} = 5 outcomes
P(not 5) = 5/6

Answer: 5/6`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        question: 'A spinner is divided into 8 equal sections numbered 1-8. What is the probability of spinning an even number?',
        solution: `Step 1: Identify favorable outcomes:
Even numbers from 1-8: {2, 4, 6, 8}
Count: 4 even numbers

Step 2: Identify total outcomes:
Sections numbered 1-8
Total: 8 outcomes

Step 3: Calculate probability:
P(even) = 4/8 = 1/2

Step 4: Interpret:
There's a 50% chance of spinning an even number.

Answer: 1/2 or 50%`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        question: 'A card is drawn from a standard 52-card deck. What is the probability it is either a heart or a face card?',
        solution: `Step 1: Count hearts:
13 hearts in the deck

Step 2: Count face cards:
12 face cards total (Jack, Queen, King in each of 4 suits)

Step 3: Account for overlap (hearts that are also face cards):
3 face cards that are hearts (Jack, Queen, King of hearts)

Step 4: Use inclusion-exclusion principle:
P(heart or face) = P(heart) + P(face) - P(heart AND face)
= 13/52 + 12/52 - 3/52
= 22/52
= 11/26

Step 5: Simplify:
11/26 ≈ 0.423 or about 42.3%

Alternative - count directly:
Hearts (13) + non-heart face cards (9) = 22 cards
P = 22/52 = 11/26 ✓

Answer: 11/26 or approximately 42.3%`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: probabilityBasics.id,
        front: 'What is probability?',
        back: 'A measure of how likely an event is to occur, expressed as a number from 0 to 1 (or 0% to 100%).',
        hint: 'Likelihood from impossible (0) to certain (1)',
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        front: 'What is the probability formula?',
        back: 'P(event) = (number of favorable outcomes)/(total number of possible outcomes)',
        hint: 'What you want over all possibilities',
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        front: 'What does a probability of 0 mean?',
        back: 'The event is impossible and will never occur.',
        hint: 'Zero chance',
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        front: 'What does a probability of 1 mean?',
        back: 'The event is certain and will always occur.',
        hint: '100% chance',
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        front: 'What is the complement rule?',
        back: 'P(not A) = 1 - P(A). The probability of an event NOT happening equals 1 minus the probability it does happen.',
        hint: 'All probabilities sum to 1',
        isPremium: false
      },
      {
        topicId: probabilityBasics.id,
        front: 'What does "or" mean in probability?',
        back: 'Add the probabilities, but subtract any overlap: P(A or B) = P(A) + P(B) - P(A and B).',
        hint: 'Addition, but watch for overlap',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: probability-basics-algebra1');

  // TOPIC 3: Domain and Range (from expansion - different slug)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: domainAndRange.id,
        question: 'Find the domain of f(x) = 3x - 7',
        solution: `Step 1: Check for restrictions:
This is a linear function.
- No division (no denominator to worry about)
- No square root (no radicand restrictions)
- No other special restrictions

Step 2: Determine the domain:
Since there are no restrictions, x can be any real number.

Step 3: Write the answer in different forms:

Words: All real numbers

Interval notation: (-∞, ∞)

Set notation: {x | x ∈ ℝ}

Answer: All real numbers or (-∞, ∞)`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        question: 'Find the domain of g(x) = 1/(x + 5)',
        solution: `Step 1: Identify the restriction:
This is a rational function (has a variable in the denominator).
The denominator cannot equal zero.

Step 2: Find when the denominator is zero:
x + 5 = 0
x = -5

Step 3: State the domain:
x can be any real number EXCEPT -5

Step 4: Write in different notations:

Words: All real numbers except -5

Interval notation: (-∞, -5) ∪ (-5, ∞)

Set notation: {x | x ≠ -5}

Answer: All real numbers except x = -5`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        question: 'Find the domain of h(x) = √(2x - 6)',
        solution: `Step 1: Identify the restriction:
Square root function - the radicand must be non-negative.
We need: 2x - 6 ≥ 0

Step 2: Solve the inequality:
2x - 6 ≥ 0
2x ≥ 6
x ≥ 3

Step 3: Interpret:
x must be greater than or equal to 3

Step 4: Write in different notations:

Words: All real numbers greater than or equal to 3

Interval notation: [3, ∞)
(Use bracket [ because 3 is included)

Set notation: {x | x ≥ 3}

Answer: x ≥ 3 or [3, ∞)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        question: 'Find the range of f(x) = |x| + 2',
        solution: `Step 1: Understand the absolute value function:
|x| gives outputs ≥ 0 for all inputs
Minimum value of |x| is 0 (when x = 0)

Step 2: Determine the minimum output of f(x):
Minimum: |0| + 2 = 0 + 2 = 2

Step 3: Determine the maximum output:
As x gets larger (positive or negative), |x| increases without bound.
So f(x) can get arbitrarily large.

Step 4: State the range:
All values ≥ 2

Step 5: Write in different notations:

Words: All real numbers greater than or equal to 2

Interval notation: [2, ∞)

Set notation: {y | y ≥ 2}

Answer: [2, ∞) or y ≥ 2`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        question: 'Find the domain and range of f(x) = -2(x - 3)² + 5',
        solution: `Step 1: Identify the function type:
This is a quadratic function in vertex form: f(x) = a(x - h)² + k
Vertex: (h, k) = (3, 5)
a = -2 (negative, so parabola opens downward)

Step 2: Find the domain:
Quadratic functions have no restrictions.
Domain: All real numbers or (-∞, ∞)

Step 3: Find the range:
Since the parabola opens downward (a < 0), the vertex is the maximum point.
Maximum y-value: 5
The function can take any value ≤ 5

Step 4: Write the range:

Words: All real numbers less than or equal to 5

Interval notation: (-∞, 5]

Set notation: {y | y ≤ 5}

Step 5: Verify:
At x = 3: f(3) = -2(3-3)² + 5 = 0 + 5 = 5 (maximum) ✓
As x moves away from 3, f(x) decreases ✓

Answer: Domain: (-∞, ∞), Range: (-∞, 5]`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: domainAndRange.id,
        front: 'What is the domain of a function?',
        back: 'All possible input values (x-values) for which the function is defined.',
        hint: 'All allowed x-values',
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        front: 'What is the range of a function?',
        back: 'All possible output values (y-values) that the function can produce.',
        hint: 'All possible y-values',
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        front: 'When is a value excluded from the domain in a fraction?',
        back: 'When that value makes the denominator equal to zero (division by zero is undefined).',
        hint: 'Cannot divide by zero',
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        front: 'What restriction does a square root create?',
        back: 'The expression under the square root must be greater than or equal to zero (non-negative).',
        hint: 'Cannot take square root of negative number (in real numbers)',
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        front: 'What does [3, ∞) mean in interval notation?',
        back: 'All numbers from 3 to infinity, including 3. The bracket means 3 is included.',
        hint: 'Bracket = include the endpoint',
        isPremium: false
      },
      {
        topicId: domainAndRange.id,
        front: 'What is the range of a parabola that opens upward with vertex at (2, -3)?',
        back: '[-3, ∞). The minimum y-value is -3 (at the vertex), and it increases without bound.',
        hint: 'Vertex is the minimum for upward-opening parabolas',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: domain-and-range');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
