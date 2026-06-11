import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 2 topics - Batch 5 (4 topics)...');

  // Find the topics
  const geometricSequences = await prisma.topic.findFirst({
    where: { slug: 'geometric-sequences-algebra2' }
  });

  const geometricSequencesSeries = await prisma.topic.findFirst({
    where: { slug: 'geometric-sequences-series' }
  });

  const seriesSummation = await prisma.topic.findFirst({
    where: { slug: 'series-summation-algebra2' }
  });

  const infiniteSeries = await prisma.topic.findFirst({
    where: { slug: 'infinite-series' }
  });

  if (!geometricSequences || !geometricSequencesSeries || !seriesSummation || !infiniteSeries) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Geometric Sequences
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: geometricSequences.id,
        question: 'Find the next three terms in the geometric sequence: 2, 6, 18, ...',
        solution: `Step 1: Find the common ratio:
r = second term / first term
r = 6/2 = 3

Step 2: Verify with third term:
18/6 = 3 ✓

Step 3: Find the next three terms:
4th term: 18 × 3 = 54
5th term: 54 × 3 = 162
6th term: 162 × 3 = 486

Answer: 54, 162, 486`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        question: 'Find the 8th term of the geometric sequence: 5, 15, 45, ...',
        solution: `Step 1: Identify the first term and common ratio:
a₁ = 5
r = 15/5 = 3

Step 2: Use the formula for the nth term:
aₙ = a₁ · rⁿ⁻¹

Step 3: Find the 8th term:
a₈ = 5 · 3⁸⁻¹
a₈ = 5 · 3⁷
a₈ = 5 · 2187
a₈ = 10,935

Answer: 10,935`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        question: 'In a geometric sequence, a₃ = 12 and a₆ = 96. Find a₁ and r.',
        solution: `Step 1: Write formulas for both terms:
a₃ = a₁ · r²  = 12
a₆ = a₁ · r⁵ = 96

Step 2: Divide the second equation by the first:
(a₁ · r⁵)/(a₁ · r²) = 96/12
r³ = 8

Step 3: Solve for r:
r = ∛8 = 2

Step 4: Find a₁ using a₃ = 12:
a₁ · r² = 12
a₁ · 2² = 12
a₁ · 4 = 12
a₁ = 3

Step 5: Verify with a₆:
a₆ = 3 · 2⁵ = 3 · 32 = 96 ✓

Answer: a₁ = 3, r = 2`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        question: 'Find the geometric mean between 4 and 36.',
        solution: `Step 1: Understand geometric mean:
The geometric mean between a and b is √(ab)
It forms a geometric sequence: a, geometric mean, b

Step 2: Calculate:
Geometric mean = √(4 × 36)
               = √144
               = 12

Step 3: Verify it forms a geometric sequence:
Sequence: 4, 12, 36
Ratio: 12/4 = 3
       36/12 = 3 ✓

Answer: 12`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        question: 'A population of bacteria doubles every hour. If there are initially 100 bacteria, how many will there be after 10 hours? Write the explicit formula.',
        solution: `Step 1: Identify the geometric sequence:
Initial population: a₁ = 100
Common ratio: r = 2 (doubles)

Step 2: Write the explicit formula:
aₙ = a₁ · rⁿ⁻¹
aₙ = 100 · 2ⁿ⁻¹

Step 3: Find population after 10 hours (11th term, since n=1 is initial):
a₁₁ = 100 · 2¹¹⁻¹
a₁₁ = 100 · 2¹⁰
a₁₁ = 100 · 1024
a₁₁ = 102,400

Step 4: Alternative interpretation (after 10 hours, so 10 doublings):
If we consider the initial as time 0:
After 10 hours: 100 · 2¹⁰ = 102,400

Step 5: Verify doubling pattern:
Hour 0: 100
Hour 1: 200 (×2)
Hour 2: 400 (×2)
...
Hour 10: 102,400

Answer: Formula: aₙ = 100 · 2ⁿ⁻¹
        After 10 hours: 102,400 bacteria`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: geometricSequences.id,
        front: 'What is a geometric sequence?',
        back: 'A sequence where each term is found by multiplying the previous term by a constant called the common ratio (r).',
        hint: 'Multiply by common ratio',
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        front: 'What is the formula for the nth term of a geometric sequence?',
        back: 'aₙ = a₁ · rⁿ⁻¹, where a₁ is the first term and r is the common ratio.',
        hint: 'aₙ = a₁ · rⁿ⁻¹',
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        front: 'How do you find the common ratio?',
        back: 'Divide any term by the previous term: r = aₙ/aₙ₋₁',
        hint: 'Divide consecutive terms',
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        front: 'What is the geometric mean between two numbers a and b?',
        back: '√(ab). It forms a three-term geometric sequence: a, √(ab), b.',
        hint: '√(ab)',
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        front: 'If |r| < 1, what happens to the terms of a geometric sequence?',
        back: 'The terms get smaller and approach zero. For example, with r = 1/2, terms decrease by half each time.',
        hint: 'Terms decrease toward 0',
        isPremium: false
      },
      {
        topicId: geometricSequences.id,
        front: 'If r < 0, what pattern do the terms follow?',
        back: 'The terms alternate between positive and negative.',
        hint: 'Alternating signs',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: geometric-sequences-algebra2');

  // TOPIC 2: Geometric Sequences and Series
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: geometricSequencesSeries.id,
        question: 'Find the sum of the first 5 terms of the geometric series: 3 + 6 + 12 + ...',
        solution: `Step 1: Identify a₁ and r:
a₁ = 3
r = 6/3 = 2

Step 2: Use the sum formula for n terms:
Sₙ = a₁(1 - rⁿ)/(1 - r)

Step 3: Calculate S₅:
S₅ = 3(1 - 2⁵)/(1 - 2)
S₅ = 3(1 - 32)/(-1)
S₅ = 3(-31)/(-1)
S₅ = 93

Step 4: Verify by adding:
3 + 6 + 12 + 24 + 48 = 93 ✓

Answer: 93`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        question: 'Find the sum: 2 + 6 + 18 + 54 + 162',
        solution: `Step 1: Verify it's geometric:
r = 6/2 = 3
18/6 = 3 ✓

Step 2: Identify values:
a₁ = 2, r = 3, n = 5

Step 3: Use sum formula:
Sₙ = a₁(1 - rⁿ)/(1 - r)
S₅ = 2(1 - 3⁵)/(1 - 3)
S₅ = 2(1 - 243)/(-2)
S₅ = 2(-242)/(-2)
S₅ = 242

Step 4: Verify:
2 + 6 + 18 + 54 + 162 = 242 ✓

Answer: 242`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        question: 'Find the sum of the first 8 terms of the geometric series with a₁ = 5 and r = 1/2.',
        solution: `Step 1: Use the sum formula:
Sₙ = a₁(1 - rⁿ)/(1 - r)

Step 2: Substitute values:
S₈ = 5(1 - (1/2)⁸)/(1 - 1/2)
S₈ = 5(1 - 1/256)/(1/2)

Step 3: Simplify the numerator:
1 - 1/256 = 256/256 - 1/256 = 255/256

Step 4: Divide by 1/2:
S₈ = 5 × (255/256) × 2
S₈ = 5 × 255/128
S₈ = 1275/128
S₈ ≈ 9.961

Answer: 1275/128 or approximately 9.961`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        question: 'Find the sum of the infinite geometric series: 1 + 1/3 + 1/9 + 1/27 + ...',
        solution: `Step 1: Identify a₁ and r:
a₁ = 1
r = (1/3)/1 = 1/3

Step 2: Check if sum exists:
For infinite series, sum exists if |r| < 1
|1/3| < 1 ✓

Step 3: Use infinite sum formula:
S = a₁/(1 - r)

Step 4: Calculate:
S = 1/(1 - 1/3)
S = 1/(2/3)
S = 3/2

Answer: 3/2 or 1.5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        question: 'A ball is dropped from a height of 20 feet. Each time it bounces, it reaches 3/4 of its previous height. Find the total distance traveled by the ball.',
        solution: `Step 1: Understand the motion:
- Falls 20 feet initially
- Bounces to 20(3/4) = 15 feet, then falls 15 feet
- Bounces to 15(3/4) = 11.25 feet, then falls 11.25 feet
- And so on...

Step 2: Set up the total distance:
Distance = initial fall + 2(sum of all bounce heights)
Distance = 20 + 2(15 + 11.25 + 8.4375 + ...)

Step 3: Identify the bounce series:
First bounce: a₁ = 20(3/4) = 15
Common ratio: r = 3/4
This is an infinite geometric series

Step 4: Find sum of bounce heights:
S = a₁/(1 - r)
S = 15/(1 - 3/4)
S = 15/(1/4)
S = 60

Step 5: Calculate total distance:
Total = 20 + 2(60)
Total = 20 + 120
Total = 140 feet

Step 6: Alternative formula approach:
Initial drop: 20
Up and down combined: 2 × 15/(1 - 3/4) = 2 × 60 = 120
Total: 140 feet ✓

Answer: 140 feet`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: geometricSequencesSeries.id,
        front: 'What is a geometric series?',
        back: 'The sum of the terms of a geometric sequence.',
        hint: 'Sum of geometric sequence',
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        front: 'What is the formula for the sum of the first n terms of a geometric series?',
        back: 'Sₙ = a₁(1 - rⁿ)/(1 - r) or Sₙ = a₁(rⁿ - 1)/(r - 1)',
        hint: 'Sₙ = a₁(1 - rⁿ)/(1 - r)',
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        front: 'When does an infinite geometric series have a finite sum?',
        back: 'When |r| < 1. If |r| ≥ 1, the series diverges (no finite sum).',
        hint: '|r| < 1',
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        front: 'What is the formula for the sum of an infinite geometric series?',
        back: 'S = a₁/(1 - r), where |r| < 1.',
        hint: 'S = a₁/(1 - r)',
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        front: 'Why does the infinite geometric series need |r| < 1?',
        back: 'Because the terms must approach 0 for the sum to converge. If |r| ≥ 1, terms don\'t approach 0.',
        hint: 'Terms must → 0',
        isPremium: false
      },
      {
        topicId: geometricSequencesSeries.id,
        front: 'What is the difference between a sequence and a series?',
        back: 'A sequence is a list of numbers. A series is the sum of those numbers.',
        hint: 'Sequence: list, Series: sum',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: geometric-sequences-series');

  // TOPIC 3: Arithmetic and Geometric Series
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: seriesSummation.id,
        question: 'Find the sum of the arithmetic series: 2 + 5 + 8 + 11 + ... + 50',
        solution: `Step 1: Identify the arithmetic sequence:
a₁ = 2, d = 3 (common difference)

Step 2: Find how many terms (n):
aₙ = a₁ + (n - 1)d
50 = 2 + (n - 1)(3)
50 = 2 + 3n - 3
51 = 3n
n = 17

Step 3: Use sum formula for arithmetic series:
Sₙ = n(a₁ + aₙ)/2

Step 4: Calculate:
S₁₇ = 17(2 + 50)/2
S₁₇ = 17(52)/2
S₁₇ = 17(26)
S₁₇ = 442

Answer: 442`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        question: 'Evaluate: Σ(3k + 1) from k=1 to 10',
        solution: `Step 1: Understand the notation:
Sum of (3k + 1) for k = 1, 2, 3, ..., 10

Step 2: Write out the first few terms:
k=1: 3(1) + 1 = 4
k=2: 3(2) + 1 = 7
k=3: 3(3) + 1 = 10
...
This is arithmetic with a₁ = 4, d = 3

Step 3: Find the last term:
k=10: 3(10) + 1 = 31

Step 4: Use arithmetic sum formula:
S₁₀ = 10(4 + 31)/2
S₁₀ = 10(35)/2
S₁₀ = 175

Step 5: Alternative - split the sum:
Σ(3k + 1) = Σ3k + Σ1
          = 3Σk + 10
          = 3(1+2+...+10) + 10
          = 3(55) + 10
          = 165 + 10 = 175 ✓

Answer: 175`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        question: 'Find the sum: 1 + 2 + 4 + 8 + ... + 512',
        solution: `Step 1: Identify as geometric:
a₁ = 1, r = 2

Step 2: Find n (how many terms):
aₙ = a₁ · rⁿ⁻¹
512 = 1 · 2ⁿ⁻¹
512 = 2ⁿ⁻¹
2⁹ = 2ⁿ⁻¹
n - 1 = 9
n = 10

Step 3: Use geometric sum formula:
Sₙ = a₁(rⁿ - 1)/(r - 1)

Step 4: Calculate:
S₁₀ = 1(2¹⁰ - 1)/(2 - 1)
S₁₀ = (1024 - 1)/1
S₁₀ = 1023

Answer: 1023`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        question: 'Evaluate: Σ(2ᵏ) from k=0 to 6',
        solution: `Step 1: Write out the terms:
k=0: 2⁰ = 1
k=1: 2¹ = 2
k=2: 2² = 4
k=3: 2³ = 8
k=4: 2⁴ = 16
k=5: 2⁵ = 32
k=6: 2⁶ = 64

Step 2: This is geometric series:
a₁ = 1, r = 2, n = 7 terms (k goes from 0 to 6)

Step 3: Use sum formula:
S₇ = 1(2⁷ - 1)/(2 - 1)
S₇ = (128 - 1)/1
S₇ = 127

Step 4: Verify by adding:
1 + 2 + 4 + 8 + 16 + 32 + 64 = 127 ✓

Answer: 127`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        question: 'A theater has 20 rows. The first row has 15 seats, and each row has 2 more seats than the row in front of it. How many seats are in the theater?',
        solution: `Step 1: Identify the arithmetic sequence:
a₁ = 15 (first row)
d = 2 (each row has 2 more)
n = 20 (total rows)

Step 2: Find the number of seats in the last row:
a₂₀ = a₁ + (n - 1)d
a₂₀ = 15 + (20 - 1)(2)
a₂₀ = 15 + 38
a₂₀ = 53

Step 3: Find total seats using sum formula:
Sₙ = n(a₁ + aₙ)/2
S₂₀ = 20(15 + 53)/2
S₂₀ = 20(68)/2
S₂₀ = 20(34)
S₂₀ = 680

Step 4: Verify the pattern:
Row 1: 15
Row 2: 17
Row 3: 19
...
Row 20: 53
This makes sense ✓

Answer: 680 seats`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: seriesSummation.id,
        front: 'What is an arithmetic series?',
        back: 'The sum of the terms of an arithmetic sequence (sequence with constant difference).',
        hint: 'Sum with constant difference',
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        front: 'What is the formula for the sum of an arithmetic series?',
        back: 'Sₙ = n(a₁ + aₙ)/2 or Sₙ = n[2a₁ + (n-1)d]/2',
        hint: 'Sₙ = n(a₁ + aₙ)/2',
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        front: 'What does Σ notation mean?',
        back: 'Sigma (Σ) means "sum". Σf(k) from k=a to b means sum f(a) + f(a+1) + ... + f(b).',
        hint: 'Σ = summation',
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        front: 'What is the formula for Σk from k=1 to n?',
        back: '1 + 2 + 3 + ... + n = n(n+1)/2',
        hint: 'n(n+1)/2',
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        front: 'How do you identify if a series is arithmetic or geometric?',
        back: 'Arithmetic: constant difference between terms. Geometric: constant ratio between consecutive terms.',
        hint: 'Difference vs ratio',
        isPremium: false
      },
      {
        topicId: seriesSummation.id,
        front: 'Can you split a summation?',
        back: 'Yes: Σ(aₖ + bₖ) = Σaₖ + Σbₖ and Σ(c·aₖ) = c·Σaₖ where c is a constant.',
        hint: 'Sum of sums',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: series-summation-algebra2');

  // TOPIC 4: Infinite Series
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: infiniteSeries.id,
        question: 'Determine if the infinite geometric series converges: 1 + 1/2 + 1/4 + 1/8 + ...',
        solution: `Step 1: Identify a₁ and r:
a₁ = 1
r = (1/2)/1 = 1/2

Step 2: Check convergence condition:
For convergence: |r| < 1
|1/2| = 1/2 < 1 ✓

Step 3: The series CONVERGES

Step 4: Find the sum:
S = a₁/(1 - r)
S = 1/(1 - 1/2)
S = 1/(1/2)
S = 2

Answer: Converges to 2`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        question: 'Does the infinite series 2 + 4 + 8 + 16 + ... converge or diverge?',
        solution: `Step 1: Identify the series type:
This is geometric with a₁ = 2, r = 2

Step 2: Check convergence condition:
For convergence: |r| < 1
|2| = 2 ≥ 1 ✗

Step 3: The series DIVERGES

Step 4: Explain why:
The terms keep getting larger (2, 4, 8, 16, ...)
They don't approach zero, so the sum grows without bound

Answer: Diverges (no finite sum)`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        question: 'Find the sum of the infinite series: 9 + 3 + 1 + 1/3 + ...',
        solution: `Step 1: Identify a₁ and r:
a₁ = 9
r = 3/9 = 1/3

Step 2: Verify it's geometric:
1/3 = (1/3)/1 ✓
Ratio is consistent

Step 3: Check convergence:
|1/3| < 1 ✓ Series converges

Step 4: Use infinite sum formula:
S = a₁/(1 - r)
S = 9/(1 - 1/3)
S = 9/(2/3)
S = 9 × 3/2
S = 27/2
S = 13.5

Answer: 27/2 or 13.5`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        question: 'Express the repeating decimal 0.272727... as a fraction using infinite series.',
        solution: `Step 1: Write as a series:
0.272727... = 0.27 + 0.0027 + 0.000027 + ...
            = 27/100 + 27/10000 + 27/1000000 + ...

Step 2: Factor out 27/100:
= (27/100)(1 + 1/100 + 1/10000 + ...)

Step 3: Identify the geometric series:
Inside parentheses: a₁ = 1, r = 1/100

Step 4: Sum the geometric series:
S = 1/(1 - 1/100)
S = 1/(99/100)
S = 100/99

Step 5: Multiply:
0.272727... = (27/100) × (100/99)
            = 27/99

Step 6: Simplify:
27/99 = 3/11

Step 7: Verify:
3 ÷ 11 = 0.272727... ✓

Answer: 3/11`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        question: 'Find all values of x for which the infinite series Σ(x/2)ᵏ from k=0 to ∞ converges, and find the sum in terms of x.',
        solution: `Step 1: Identify the geometric series:
This is geometric with a₁ = (x/2)⁰ = 1 and r = x/2

Step 2: Determine convergence condition:
Series converges when |r| < 1
|x/2| < 1

Step 3: Solve the inequality:
|x/2| < 1
|x| < 2
-2 < x < 2

Step 4: Find the sum when it converges:
S = a₁/(1 - r)
S = 1/(1 - x/2)
S = 1/[(2 - x)/2]
S = 2/(2 - x)

Step 5: Verify at a specific value (e.g., x = 1):
r = 1/2, |r| < 1 ✓
S = 2/(2 - 1) = 2
Check: 1 + 1/2 + 1/4 + ... = 2 ✓

Answer: Converges for -2 < x < 2
        Sum = 2/(2 - x)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: infiniteSeries.id,
        front: 'What does it mean for an infinite series to converge?',
        back: 'The sum approaches a finite value as you add more and more terms.',
        hint: 'Approaches finite value',
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        front: 'What does it mean for an infinite series to diverge?',
        back: 'The sum does not approach a finite value; it either grows without bound or oscillates.',
        hint: 'No finite sum',
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        front: 'When does an infinite geometric series converge?',
        back: 'When |r| < 1 (the absolute value of the common ratio is less than 1).',
        hint: '|r| < 1',
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        front: 'What is the sum of a convergent infinite geometric series?',
        back: 'S = a₁/(1 - r), where |r| < 1.',
        hint: 'a₁/(1 - r)',
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        front: 'How can you express a repeating decimal as a fraction?',
        back: 'Write it as an infinite geometric series, identify a₁ and r, then use S = a₁/(1 - r).',
        hint: 'Use geometric series formula',
        isPremium: false
      },
      {
        topicId: infiniteSeries.id,
        front: 'What happens if |r| = 1 in a geometric series?',
        back: 'The series diverges. The terms don\'t approach zero, so the sum doesn\'t converge.',
        hint: '|r| = 1 → diverges',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: infinite-series');

  console.log('\n✨ Successfully added problems and flashcards for 4 topics!');
  
  await prisma.$disconnect();
}

main();
