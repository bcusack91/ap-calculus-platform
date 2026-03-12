import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 9 (3 topics)...');

  // Find the topics
  const boxPlots = await prisma.topic.findFirst({
    where: { slug: 'box-plots' }
  });

  const completingSquare = await prisma.topic.findFirst({
    where: { slug: 'completing-the-square' }
  });

  const absoluteValue = await prisma.topic.findFirst({
    where: { slug: 'absolute-value-algebra1' }
  });

  if (!boxPlots || !completingSquare || !absoluteValue) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Box Plots
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: boxPlots.id,
        question: 'Find the five-number summary for: 3, 7, 8, 12, 13, 15, 18, 21, 23',
        solution: `Step 1: Arrange data in order (already done):
3, 7, 8, 12, 13, 15, 18, 21, 23

Step 2: Find the minimum and maximum:
Minimum = 3
Maximum = 23

Step 3: Find the median (Q2):
There are 9 values, so the median is the 5th value.
Median (Q2) = 13

Step 4: Find Q1 (median of lower half):
Lower half: 3, 7, 8, 12
Q1 = (7 + 8)/2 = 7.5

Step 5: Find Q3 (median of upper half):
Upper half: 15, 18, 21, 23
Q3 = (18 + 21)/2 = 19.5

Five-number summary:
Min = 3, Q1 = 7.5, Q2 = 13, Q3 = 19.5, Max = 23`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        question: 'Calculate the interquartile range (IQR) for a data set with Q1 = 12 and Q3 = 28.',
        solution: `Step 1: Recall the IQR formula:
IQR = Q3 - Q1

Step 2: Substitute the values:
IQR = 28 - 12

Step 3: Calculate:
IQR = 16

Step 4: Interpret:
The IQR is 16, which means the middle 50% of the data spans 16 units.
This measures the spread of the middle half of the data.

Answer: IQR = 16`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        question: 'For a data set with Q1 = 20, Q3 = 35, determine if a value of 60 is an outlier.',
        solution: `Step 1: Calculate the IQR:
IQR = Q3 - Q1 = 35 - 20 = 15

Step 2: Calculate the outlier boundaries using the 1.5 × IQR rule:
Lower boundary = Q1 - 1.5(IQR) = 20 - 1.5(15) = 20 - 22.5 = -2.5
Upper boundary = Q3 + 1.5(IQR) = 35 + 1.5(15) = 35 + 22.5 = 57.5

Step 3: Check if 60 is outside these boundaries:
60 > 57.5, so 60 is above the upper boundary.

Step 4: Conclusion:
Yes, 60 is an outlier because it exceeds the upper boundary.

Any value below -2.5 or above 57.5 would be considered an outlier.

Answer: Yes, 60 is an outlier`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        question: 'A box plot shows Min = 5, Q1 = 12, Q2 = 18, Q3 = 25, Max = 40. Describe the distribution.',
        solution: `Step 1: Calculate the IQR:
IQR = Q3 - Q1 = 25 - 12 = 13

Step 2: Compare distances from median to quartiles:
Distance from Q2 to Q1: 18 - 12 = 6
Distance from Q2 to Q3: 25 - 18 = 7
These are roughly equal (6 ≈ 7)

Step 3: Compare whisker lengths:
Lower whisker (Q1 to Min): 12 - 5 = 7
Upper whisker (Max to Q3): 40 - 25 = 15
The upper whisker is longer.

Step 4: Determine skewness:
Since the upper whisker is longer than the lower whisker, and the distances are fairly symmetric around the median, the distribution is slightly right-skewed (positively skewed).

Step 5: Additional observations:
- The box (IQR = 13) shows where the middle 50% of data lies
- Range = 40 - 5 = 35
- No obvious outliers mentioned

Answer: The distribution is approximately symmetric with a slight right skew. The middle 50% of data spans from 12 to 25.`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        question: 'Create a box plot for: 2, 4, 6, 7, 9, 10, 12, 15, 18, 20, 24. Identify any outliers.',
        solution: `Step 1: Data is already in order. Find five-number summary:
Min = 2
Q1 = 6 (median of lower half: 2, 4, 6, 7, 9)
Q2 = 10 (median of all: 6th value)
Q3 = 18 (median of upper half: 12, 15, 18, 20, 24)
Max = 24

Step 2: Calculate IQR:
IQR = Q3 - Q1 = 18 - 6 = 12

Step 3: Calculate outlier boundaries:
Lower: Q1 - 1.5(IQR) = 6 - 1.5(12) = 6 - 18 = -12
Upper: Q3 + 1.5(IQR) = 18 + 1.5(12) = 18 + 18 = 36

Step 4: Check for outliers:
All values (2, 4, 6, 7, 9, 10, 12, 15, 18, 20, 24) are between -12 and 36.
No outliers exist.

Step 5: Draw the box plot:
- Draw a number line from 0 to 25
- Draw a box from Q1 (6) to Q3 (18)
- Draw a vertical line at the median Q2 (10) inside the box
- Draw a whisker from the box to Min (2)
- Draw a whisker from the box to Max (24)

Answer: Five-number summary: 2, 6, 10, 18, 24. No outliers.`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: boxPlots.id,
        front: 'What is the five-number summary?',
        back: 'Minimum, Q1 (first quartile), Q2 (median), Q3 (third quartile), Maximum',
        hint: 'Min, Q1, Median, Q3, Max',
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        front: 'What is the interquartile range (IQR)?',
        back: 'IQR = Q3 - Q1. It measures the spread of the middle 50% of the data.',
        hint: 'Third quartile minus first quartile',
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        front: 'What is the 1.5 × IQR rule for outliers?',
        back: 'Outliers are values below Q1 - 1.5(IQR) or above Q3 + 1.5(IQR).',
        hint: '1.5 times the IQR from the quartiles',
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        front: 'What do the "whiskers" in a box plot represent?',
        back: 'The whiskers extend from the quartiles to the minimum and maximum values (excluding outliers).',
        hint: 'Lines extending to the extremes',
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        front: 'What does a box plot show about data distribution?',
        back: 'It shows the center (median), spread (IQR and range), and skewness of the data.',
        hint: 'Center, spread, and shape',
        isPremium: false
      },
      {
        topicId: boxPlots.id,
        front: 'How can you tell if a box plot is skewed?',
        back: 'Compare whisker lengths and distances from median to quartiles. Longer right side = right skew, longer left side = left skew.',
        hint: 'Look at symmetry of whiskers and quartiles',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: box-plots');

  // TOPIC 2: Completing the Square
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: completingSquare.id,
        question: 'Complete the square: x² + 6x',
        solution: `Step 1: Identify b (the coefficient of x):
b = 6

Step 2: Find (b/2)²:
(6/2)² = 3² = 9

Step 3: Add and subtract this value:
x² + 6x + 9 - 9

Step 4: Factor the perfect square trinomial:
(x + 3)² - 9

Step 5: Verify by expanding:
(x + 3)² - 9 = x² + 6x + 9 - 9 = x² + 6x ✓

Answer: (x + 3)² - 9`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        question: 'Solve by completing the square: x² + 8x - 9 = 0',
        solution: `Step 1: Move the constant to the right side:
x² + 8x = 9

Step 2: Find (b/2)²:
b = 8, so (8/2)² = 4² = 16

Step 3: Add 16 to both sides:
x² + 8x + 16 = 9 + 16
x² + 8x + 16 = 25

Step 4: Factor the left side as a perfect square:
(x + 4)² = 25

Step 5: Take the square root of both sides:
x + 4 = ±5

Step 6: Solve for x:
x + 4 = 5  →  x = 1
x + 4 = -5  →  x = -9

Step 7: Check both solutions:
x = 1: 1² + 8(1) - 9 = 1 + 8 - 9 = 0 ✓
x = -9: (-9)² + 8(-9) - 9 = 81 - 72 - 9 = 0 ✓

Answer: x = 1 or x = -9`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        question: 'Convert to vertex form by completing the square: y = x² - 10x + 18',
        solution: `Step 1: Group the x terms (leave space for completing):
y = (x² - 10x    ) + 18

Step 2: Find (b/2)²:
b = -10, so (-10/2)² = (-5)² = 25

Step 3: Add and subtract 25 inside the parentheses:
y = (x² - 10x + 25 - 25) + 18
y = (x² - 10x + 25) - 25 + 18

Step 4: Factor the perfect square:
y = (x - 5)² - 7

Step 5: Identify the vertex:
Vertex form is y = a(x - h)² + k where vertex is (h, k)
Vertex: (5, -7)

Step 6: Verify by expanding:
(x - 5)² - 7 = x² - 10x + 25 - 7 = x² - 10x + 18 ✓

Answer: y = (x - 5)² - 7; Vertex: (5, -7)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        question: 'Solve: 2x² + 12x - 10 = 0',
        solution: `Step 1: Factor out the leading coefficient from the x² and x terms:
2(x² + 6x) - 10 = 0

Step 2: Move the constant and isolate the parentheses:
2(x² + 6x) = 10
Divide by 2: x² + 6x = 5

Step 3: Complete the square:
(b/2)² = (6/2)² = 9
x² + 6x + 9 = 5 + 9
x² + 6x + 9 = 14

Step 4: Factor:
(x + 3)² = 14

Step 5: Take square root:
x + 3 = ±√14

Step 6: Solve for x:
x = -3 + √14  ≈ 0.742
x = -3 - √14  ≈ -6.742

Answer: x = -3 ± √14`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        question: 'A ball is thrown with height h(t) = -16t² + 32t + 5. Find the maximum height and when it occurs.',
        solution: `Step 1: Convert to vertex form by completing the square:
h(t) = -16t² + 32t + 5

Step 2: Factor out -16 from the first two terms:
h(t) = -16(t² - 2t) + 5

Step 3: Complete the square inside parentheses:
For t² - 2t, (b/2)² = (-2/2)² = 1
h(t) = -16(t² - 2t + 1 - 1) + 5
h(t) = -16(t² - 2t + 1) + 16 + 5

Step 4: Factor and simplify:
h(t) = -16(t - 1)² + 21

Step 5: Identify the vertex:
Vertex form: h(t) = a(t - h)² + k
Vertex: (1, 21)

Step 6: Interpret:
Since a = -16 < 0, the parabola opens downward, so the vertex is a maximum.
Maximum height: 21 feet
Time at maximum: 1 second

Answer: Maximum height is 21 feet at t = 1 second`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: completingSquare.id,
        front: 'What value do you add to complete the square for x² + bx?',
        back: '(b/2)². Take half the coefficient of x, then square it.',
        hint: 'Half the b value, then square',
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        front: 'What is vertex form of a quadratic?',
        back: 'y = a(x - h)² + k, where (h, k) is the vertex.',
        hint: 'Shows the vertex directly',
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        front: 'Why do we add and subtract (b/2)²?',
        back: 'To create a perfect square trinomial without changing the value of the expression.',
        hint: 'Keep the equation balanced',
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        front: 'What is a perfect square trinomial?',
        back: 'An expression of the form a² + 2ab + b² = (a + b)². Example: x² + 6x + 9 = (x + 3)²',
        hint: 'Factors into a binomial squared',
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        front: 'What do you do if the leading coefficient is not 1?',
        back: 'Factor it out from the x² and x terms first, then complete the square.',
        hint: 'Factor out the a first',
        isPremium: false
      },
      {
        topicId: completingSquare.id,
        front: 'When is completing the square most useful?',
        back: 'For converting to vertex form, finding max/min values, or when the quadratic formula would give messy results.',
        hint: 'Finding vertices and optimization',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: completing-the-square');

  // TOPIC 3: Absolute Value Equations
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: absoluteValue.id,
        question: 'Solve: |x| = 7',
        solution: `Step 1: Understand absolute value:
|x| = 7 means "the distance from 0 is 7"

Step 2: Consider both cases:
Case 1: x = 7 (positive solution)
Case 2: x = -7 (negative solution)

Step 3: Both solutions work because:
|7| = 7 ✓
|-7| = 7 ✓

Answer: x = 7 or x = -7`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        question: 'Solve: |x + 3| = 5',
        solution: `Step 1: Set up two cases (remove absolute value bars):
Case 1: x + 3 = 5
Case 2: x + 3 = -5

Step 2: Solve Case 1:
x + 3 = 5
x = 2

Step 3: Solve Case 2:
x + 3 = -5
x = -8

Step 4: Check both solutions:
|2 + 3| = |5| = 5 ✓
|-8 + 3| = |-5| = 5 ✓

Answer: x = 2 or x = -8`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        question: 'Solve: |2x - 1| = 9',
        solution: `Step 1: Set up two cases:
Case 1: 2x - 1 = 9
Case 2: 2x - 1 = -9

Step 2: Solve Case 1:
2x - 1 = 9
2x = 10
x = 5

Step 3: Solve Case 2:
2x - 1 = -9
2x = -8
x = -4

Step 4: Check both solutions:
|2(5) - 1| = |10 - 1| = |9| = 9 ✓
|2(-4) - 1| = |-8 - 1| = |-9| = 9 ✓

Answer: x = 5 or x = -4`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        question: 'Solve: 3|x - 2| + 4 = 13',
        solution: `Step 1: Isolate the absolute value:
3|x - 2| + 4 = 13
3|x - 2| = 9
|x - 2| = 3

Step 2: Set up two cases:
Case 1: x - 2 = 3
Case 2: x - 2 = -3

Step 3: Solve Case 1:
x - 2 = 3
x = 5

Step 4: Solve Case 2:
x - 2 = -3
x = -1

Step 5: Check both solutions in the original equation:
3|5 - 2| + 4 = 3|3| + 4 = 9 + 4 = 13 ✓
3|-1 - 2| + 4 = 3|-3| + 4 = 9 + 4 = 13 ✓

Answer: x = 5 or x = -1`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        question: 'Solve: |3x + 1| = |x - 5|',
        solution: `Step 1: When two absolute values are equal, set up cases:
Case 1: The expressions are equal
3x + 1 = x - 5

Case 2: The expressions are opposites
3x + 1 = -(x - 5)

Step 2: Solve Case 1:
3x + 1 = x - 5
2x = -6
x = -3

Step 3: Solve Case 2:
3x + 1 = -x + 5
4x = 4
x = 1

Step 4: Check both solutions:
For x = -3:
|3(-3) + 1| = |-9 + 1| = |-8| = 8
|-3 - 5| = |-8| = 8 ✓

For x = 1:
|3(1) + 1| = |4| = 4
|1 - 5| = |-4| = 4 ✓

Answer: x = -3 or x = 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: absoluteValue.id,
        front: 'What does |x| mean?',
        back: 'The absolute value of x, which is the distance from 0 on the number line. Always non-negative.',
        hint: 'Distance from zero',
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        front: 'Why does |x| = 5 have two solutions?',
        back: 'Because both 5 and -5 are a distance of 5 from 0. So x = 5 or x = -5.',
        hint: 'Two numbers are the same distance from zero',
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        front: 'How do you solve |x + 3| = 7?',
        back: 'Set up two cases: x + 3 = 7 and x + 3 = -7. Solve both.',
        hint: 'Expression equals positive or negative value',
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        front: 'What must you do before setting up cases?',
        back: 'Isolate the absolute value expression on one side of the equation.',
        hint: 'Get the absolute value by itself first',
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        front: 'Can |x| = -5 have any solutions?',
        back: 'No! Absolute value is always non-negative, so it can never equal a negative number.',
        hint: 'Absolute value is never negative',
        isPremium: false
      },
      {
        topicId: absoluteValue.id,
        front: 'How do you solve |a| = |b|?',
        back: 'Set up two cases: a = b (expressions are equal) or a = -b (expressions are opposites).',
        hint: 'Equal or opposite',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: absolute-value-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
  
  await prisma.$disconnect();
}

main();
