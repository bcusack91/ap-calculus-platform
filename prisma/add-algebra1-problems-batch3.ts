import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 3 (3 topics)...');

  // Find the topics
  const solvingQuadratics = await prisma.topic.findFirst({
    where: { slug: 'solving-quadratics-algebra1' }
  });

  const meanMedianMode = await prisma.topic.findFirst({
    where: { slug: 'mean-median-mode-algebra1' }
  });

  const functionsBasics = await prisma.topic.findFirst({
    where: { slug: 'functions-basics-algebra1' }
  });

  if (!solvingQuadratics || !meanMedianMode || !functionsBasics) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Solving Quadratic Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: solvingQuadratics.id,
        question: 'Solve by factoring: x² + 5x + 6 = 0',
        solution: `Step 1: Factor the quadratic:
Find two numbers that multiply to 6 and add to 5: 2 and 3
x² + 5x + 6 = (x + 2)(x + 3)

Step 2: Set the equation equal to zero:
(x + 2)(x + 3) = 0

Step 3: Apply the Zero Product Property:
If ab = 0, then a = 0 or b = 0
So: x + 2 = 0  or  x + 3 = 0

Step 4: Solve each equation:
x + 2 = 0 → x = -2
x + 3 = 0 → x = -3

Step 5: Check both solutions:
(-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓
(-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0 ✓

Answer: x = -2 or x = -3`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        question: 'Solve using square roots: x² = 25',
        solution: `Step 1: Take the square root of both sides:
√(x²) = ±√25

Important: Don't forget the ± symbol! When we square root both sides, we get both positive and negative solutions.

Step 2: Simplify:
x = ±5

This means x = 5 or x = -5

Step 3: Check both solutions:
(5)² = 25 ✓
(-5)² = 25 ✓

Answer: x = 5 or x = -5`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        question: 'Solve: (x - 3)² = 16',
        solution: `Step 1: Take the square root of both sides:
√[(x - 3)²] = ±√16

Step 2: Simplify:
x - 3 = ±4

Step 3: Split into two equations:
x - 3 = 4  or  x - 3 = -4

Step 4: Solve each equation:
x - 3 = 4 → x = 7
x - 3 = -4 → x = -1

Step 5: Check both solutions:
(7 - 3)² = 4² = 16 ✓
(-1 - 3)² = (-4)² = 16 ✓

Answer: x = 7 or x = -1`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        question: 'Solve using the quadratic formula: 2x² + 5x - 3 = 0',
        solution: `Step 1: Identify a, b, and c from ax² + bx + c = 0:
a = 2, b = 5, c = -3

Step 2: Write the quadratic formula:
x = [-b ± √(b² - 4ac)] / (2a)

Step 3: Substitute the values:
x = [-5 ± √(5² - 4(2)(-3))] / (2·2)
x = [-5 ± √(25 + 24)] / 4
x = [-5 ± √49] / 4
x = [-5 ± 7] / 4

Step 4: Find both solutions:
x = (-5 + 7)/4 = 2/4 = 1/2
x = (-5 - 7)/4 = -12/4 = -3

Step 5: Check both solutions:
2(1/2)² + 5(1/2) - 3 = 2(1/4) + 5/2 - 3 = 1/2 + 5/2 - 3 = 0 ✓
2(-3)² + 5(-3) - 3 = 18 - 15 - 3 = 0 ✓

Answer: x = 1/2 or x = -3`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        question: 'A rectangular garden has a length that is 3 meters more than its width. If the area is 40 square meters, find the dimensions.',
        solution: `Step 1: Define variables:
Let w = width
Then length = w + 3

Step 2: Write the equation using Area = length × width:
w(w + 3) = 40

Step 3: Expand and rearrange to standard form:
w² + 3w = 40
w² + 3w - 40 = 0

Step 4: Factor:
Find two numbers that multiply to -40 and add to 3: 8 and -5
(w + 8)(w - 5) = 0

Step 5: Solve:
w + 8 = 0 → w = -8 (reject because width cannot be negative)
w - 5 = 0 → w = 5

Step 6: Find the length:
length = w + 3 = 5 + 3 = 8

Step 7: Check:
Area = 5 × 8 = 40 ✓

Answer: Width = 5 meters, Length = 8 meters`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solvingQuadratics.id,
        front: 'What is the Zero Product Property?',
        back: 'If ab = 0, then a = 0 or b = 0. This is used after factoring to find solutions.',
        hint: 'If a product equals zero, at least one factor must be zero',
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        front: 'When can you solve a quadratic by taking square roots?',
        back: 'When the equation is in the form x² = k or (x - h)² = k (no linear term).',
        hint: 'The variable should be squared with nothing else mixed in',
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        front: 'What is the quadratic formula?',
        back: 'x = [-b ± √(b² - 4ac)] / (2a), used to solve ax² + bx + c = 0',
        hint: 'Memorize this! It works for any quadratic equation',
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        front: 'Why do we write ± when taking square roots?',
        back: 'Because both positive and negative numbers square to give the same result. For example, both 5² and (-5)² equal 25.',
        hint: 'A square root has two answers: positive and negative',
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        front: 'How many solutions can a quadratic equation have?',
        back: 'Two solutions (two real roots), one solution (repeated root), or no real solutions (complex roots).',
        hint: 'Check the discriminant b² - 4ac to determine this',
        isPremium: false
      },
      {
        topicId: solvingQuadratics.id,
        front: 'When should you use factoring vs. the quadratic formula?',
        back: 'Try factoring first if it factors easily. Use the quadratic formula when factoring is difficult or impossible.',
        hint: 'Factoring is faster when it works, but the formula always works',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: solving-quadratics-algebra1');

  // TOPIC 2: Measures of Center
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: meanMedianMode.id,
        question: 'Find the mean of: 8, 12, 15, 10, 5',
        solution: `Step 1: Understand that mean is the average.
Formula: Mean = (sum of all values) / (number of values)

Step 2: Add all the values:
8 + 12 + 15 + 10 + 5 = 50

Step 3: Count how many values there are:
There are 5 values

Step 4: Divide the sum by the count:
Mean = 50 / 5 = 10

Answer: The mean is 10`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        question: 'Find the median of: 3, 7, 2, 9, 5, 8, 6',
        solution: `Step 1: Put the numbers in order from least to greatest:
2, 3, 5, 6, 7, 8, 9

Step 2: Find the middle number:
Since there are 7 numbers (odd), the middle one is the 4th number

Step 3: Identify the median:
2, 3, 5, [6], 7, 8, 9
       ↑
    middle

Answer: The median is 6`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        question: 'Find the median of: 12, 18, 15, 20, 14, 16',
        solution: `Step 1: Put the numbers in order from least to greatest:
12, 14, 15, 16, 18, 20

Step 2: Since there are 6 numbers (even), find the two middle numbers:
12, 14, [15, 16], 18, 20
           ↑   ↑
      middle two

Step 3: Average the two middle numbers:
Median = (15 + 16) / 2 = 31 / 2 = 15.5

Answer: The median is 15.5`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        question: 'Find the mode(s) of: 5, 8, 3, 8, 2, 9, 8, 5, 3',
        solution: `Step 1: Count how many times each number appears:
2: appears 1 time
3: appears 2 times
5: appears 2 times
8: appears 3 times ← most frequent
9: appears 1 time

Step 2: Identify the number(s) that appear most often:
8 appears 3 times, which is more than any other number

Answer: The mode is 8`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        question: 'The mean of five test scores is 84. Four of the scores are 78, 85, 90, and 82. What is the fifth score?',
        solution: `Step 1: Write what we know:
Mean = 84
Number of scores = 5
Four scores: 78, 85, 90, 82
Fifth score = ?

Step 2: Use the mean formula:
Mean = (sum of all scores) / (number of scores)
84 = (sum of all 5 scores) / 5

Step 3: Multiply both sides by 5:
84 × 5 = sum of all 5 scores
420 = sum of all 5 scores

Step 4: Add the four known scores:
78 + 85 + 90 + 82 = 335

Step 5: Subtract from the total to find the fifth score:
420 - 335 = 85

Step 6: Check:
(78 + 85 + 90 + 82 + 85) / 5 = 420 / 5 = 84 ✓

Answer: The fifth score is 85`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: meanMedianMode.id,
        front: 'What is the mean?',
        back: 'The average. Add all values and divide by how many values there are.',
        hint: 'Also called the average',
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        front: 'What is the median?',
        back: 'The middle number when data is arranged in order. If there are two middle numbers, average them.',
        hint: 'Put the numbers in order first!',
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        front: 'What is the mode?',
        back: 'The number that appears most often in a data set. There can be one mode, more than one mode, or no mode.',
        hint: 'Think "most often"',
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        front: 'How do you find the median when there is an even number of values?',
        back: 'Order the data, find the two middle numbers, then calculate their average.',
        hint: 'Average the two middle values',
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        front: 'Which measure of center is affected most by outliers?',
        back: 'The mean is most affected by outliers. The median and mode are more resistant to outliers.',
        hint: 'Extreme values pull the average up or down',
        isPremium: false
      },
      {
        topicId: meanMedianMode.id,
        front: 'What does it mean if a data set has no mode?',
        back: 'All values appear the same number of times (usually once each). No value is more frequent than others.',
        hint: 'All numbers appear equally often',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: mean-median-mode-algebra1');

  // TOPIC 3: Introduction to Functions
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: functionsBasics.id,
        question: 'If f(x) = 3x + 2, find f(5)',
        solution: `Step 1: Understand what f(5) means:
It means substitute x = 5 into the function

Step 2: Replace x with 5 in the function:
f(5) = 3(5) + 2

Step 3: Calculate:
f(5) = 15 + 2
f(5) = 17

Answer: f(5) = 17`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        question: 'Is this relation a function? {(1, 3), (2, 5), (3, 7), (4, 5)}',
        solution: `Step 1: Recall the definition of a function:
A function is a relation where each input (x-value) has exactly ONE output (y-value).

Step 2: Check each x-value:
x = 1 → y = 3
x = 2 → y = 5
x = 3 → y = 7
x = 4 → y = 5

Step 3: Determine if any x-value repeats:
All x-values (1, 2, 3, 4) are different.
Each x-value maps to only one y-value.

Note: It's okay for different x-values to have the same y-value (both 2 and 4 give 5).

Answer: Yes, this is a function`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        question: 'If g(x) = x² - 4x + 1, find g(-2)',
        solution: `Step 1: Substitute x = -2 into the function:
g(-2) = (-2)² - 4(-2) + 1

Step 2: Calculate the squared term:
(-2)² = 4

Step 3: Calculate the linear term:
-4(-2) = 8

Step 4: Add all terms:
g(-2) = 4 + 8 + 1
g(-2) = 13

Answer: g(-2) = 13`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        question: 'Is this relation a function? {(2, 3), (4, 5), (2, 7), (6, 9)}',
        solution: `Step 1: Check each x-value in the ordered pairs:
(2, 3) → x = 2 maps to y = 3
(4, 5) → x = 4 maps to y = 5
(2, 7) → x = 2 maps to y = 7  ← Problem!
(6, 9) → x = 6 maps to y = 9

Step 2: Identify the issue:
The x-value 2 appears twice:
- Once paired with 3
- Once paired with 7

Step 3: Apply the definition:
A function requires each input to have exactly ONE output.
Since x = 2 has TWO different outputs (3 and 7), this violates the definition of a function.

Answer: No, this is NOT a function`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        question: 'If h(x) = 2x - 5, find the value of x when h(x) = 11',
        solution: `Step 1: Set up the equation:
We want h(x) = 11, so:
2x - 5 = 11

Step 2: Solve for x (add 5 to both sides):
2x = 11 + 5
2x = 16

Step 3: Divide both sides by 2:
x = 8

Step 4: Check by finding h(8):
h(8) = 2(8) - 5 = 16 - 5 = 11 ✓

This means when we input x = 8, the output is 11.

Answer: x = 8`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: functionsBasics.id,
        front: 'What is a function?',
        back: 'A relation where each input (x-value) has exactly one output (y-value). Each x maps to only one y.',
        hint: 'Each input gets one and only one output',
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        front: 'What does f(3) mean?',
        back: 'The output value when x = 3 is substituted into the function f. Replace every x with 3 and calculate.',
        hint: 'Substitute the number for x',
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        front: 'What is function notation?',
        back: 'Writing f(x) instead of y. The letter f is the function name, and x is the input variable.',
        hint: 'f(x) is read as "f of x"',
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        front: 'Can two different inputs have the same output in a function?',
        back: 'Yes! Different x-values can give the same y-value. For example, f(2) = 5 and f(7) = 5 is fine.',
        hint: 'Multiple inputs can share one output, but not vice versa',
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        front: 'What is the Vertical Line Test?',
        back: 'A graph represents a function if any vertical line crosses it at most once. If a vertical line crosses twice, it\'s not a function.',
        hint: 'No vertical line should hit the graph more than once',
        isPremium: false
      },
      {
        topicId: functionsBasics.id,
        front: 'What are the domain and range of a function?',
        back: 'Domain = all possible input values (x-values). Range = all possible output values (y-values).',
        hint: 'Domain is inputs, range is outputs',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: functions-basics-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
