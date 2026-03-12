import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Algebra 1 topics - Batch 1 (3 topics)...\n');

  // Find the topics
  const solvingLinearEq = await prisma.topic.findFirst({
    where: { slug: 'solving-linear-equations-algebra1' }
  });

  const graphingLinearEq = await prisma.topic.findFirst({
    where: { slug: 'graphing-linear-equations-algebra1' }
  });  const linearInequalities = await prisma.topic.findFirst({
    where: { slug: 'linear-inequalities-algebra1' }
  });

  if (!solvingLinearEq || !graphingLinearEq || !linearInequalities) {
    throw new Error('Topics not found');
  }

  // Topic 1: Solving Linear Equations - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: solvingLinearEq.id,
        question: 'Solve for x: 3x + 7 = 22',
        solution: `Subtract 7 from both sides:
3x + 7 - 7 = 22 - 7
3x = 15

Divide both sides by 3:
3x/3 = 15/3
x = 5

Check: 3(5) + 7 = 15 + 7 = 22 ✓`,
        difficulty: 'EASY',
        order: 0
      },
      {
        topicId: solvingLinearEq.id,
        question: 'Solve for x: 2(x - 4) + 5 = 13',
        solution: `Distribute the 2:
2x - 8 + 5 = 13

Combine like terms:
2x - 3 = 13

Add 3 to both sides:
2x = 16

Divide by 2:
x = 8

Check: 2(8 - 4) + 5 = 2(4) + 5 = 8 + 5 = 13 ✓`,
        difficulty: 'EASY',
        order: 1
      },
      {
        topicId: solvingLinearEq.id,
        question: 'Solve for x: 5x - 3 = 2x + 12',
        solution: `Subtract 2x from both sides:
5x - 2x - 3 = 2x - 2x + 12
3x - 3 = 12

Add 3 to both sides:
3x = 15

Divide by 3:
x = 5

Check: 5(5) - 3 = 25 - 3 = 22, and 2(5) + 12 = 10 + 12 = 22 ✓`,
        difficulty: 'MEDIUM',
        order: 2
      },
      {
        topicId: solvingLinearEq.id,
        question: 'Solve for x: (x/4) + 3 = 7',
        solution: `Subtract 3 from both sides:
x/4 = 4

Multiply both sides by 4:
x = 16

Check: 16/4 + 3 = 4 + 3 = 7 ✓`,
        difficulty: 'MEDIUM',
        order: 3
      },
      {
        topicId: solvingLinearEq.id,
        question: 'Solve for x: 3(2x + 1) - 4(x - 2) = 19',
        solution: `Distribute:
6x + 3 - 4x + 8 = 19

Combine like terms:
2x + 11 = 19

Subtract 11:
2x = 8

Divide by 2:
x = 4

Check: 3(2(4) + 1) - 4(4 - 2) = 3(9) - 4(2) = 27 - 8 = 19 ✓`,
        difficulty: 'HARD',
        order: 4
      }
    ]
  });

  // Topic 1: Solving Linear Equations - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solvingLinearEq.id,
        front: 'What is the first step to solve: 2x + 5 = 13?',
        back: 'Subtract 5 from both sides to isolate the term with x.',
        hint: 'Always perform the inverse operation to move constants away from the variable.'
      },
      {
        topicId: solvingLinearEq.id,
        front: 'What does "isolate the variable" mean?',
        back: 'Get the variable alone on one side of the equation, so it equals a number.',
        hint: 'The goal is to have x = (some number).'
      },
      {
        topicId: solvingLinearEq.id,
        front: 'How do you solve: x/3 = 5?',
        back: 'Multiply both sides by 3 to get x = 15.',
        hint: 'Multiplication and division are inverse operations.'
      },
      {
        topicId: solvingLinearEq.id,
        front: 'What is the distributive property?',
        back: 'a(b + c) = ab + ac. Multiply the outside term by each inside term.',
        hint: 'Example: 2(x + 3) = 2x + 6'
      },
      {
        topicId: solvingLinearEq.id,
        front: 'When solving 5x = 3x + 8, what should you do first?',
        back: 'Subtract 3x from both sides to collect all x terms on one side.',
        hint: 'Variables on both sides? Move them all to one side first.'
      },
      {
        topicId: solvingLinearEq.id,
        front: 'Why should you check your answer?',
        back: 'Substitute your solution back into the original equation to verify it works and catch any mistakes.',
        hint: 'Always plug your answer back in: does it make both sides equal?'
      }
    ]
  });

  console.log('✅ Added problems and flashcards: solving-linear-equations');

  // Topic 2: Graphing Linear Equations - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: graphingLinearEq.id,
        question: 'Find the slope and y-intercept of the line: y = 3x + 2',
        solution: `This is in slope-intercept form: y = mx + b

Comparing y = 3x + 2 to y = mx + b:
m = 3 (slope)
b = 2 (y-intercept)

Slope: 3 (or 3/1, meaning rise 3, run 1)
Y-intercept: 2 (point is (0, 2))`,
        difficulty: 'EASY',
        order: 0
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Graph the equation y = -2x + 4 using the slope and y-intercept.',
        solution: `Step 1: Identify slope and y-intercept
y = -2x + 4
Slope (m) = -2 = -2/1 (down 2, right 1)
Y-intercept (b) = 4

Step 2: Plot y-intercept at (0, 4)

Step 3: Use slope to find another point
From (0, 4), go down 2 and right 1 to get (1, 2)

Step 4: Draw line through (0, 4) and (1, 2)

The line slopes downward from left to right.`,
        difficulty: 'EASY',
        order: 1
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Find the slope of the line passing through points (2, 3) and (6, 11).',
        solution: `Use the slope formula: m = (y₂ - y₁)/(x₂ - x₁)

Point 1: (2, 3) → x₁ = 2, y₁ = 3
Point 2: (6, 11) → x₂ = 6, y₂ = 11

m = (11 - 3)/(6 - 2)
m = 8/4
m = 2

The slope is 2.`,
        difficulty: 'MEDIUM',
        order: 2
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Write the equation of a line with slope 4 that passes through the point (1, 5).',
        solution: `Use point-slope form: y - y₁ = m(x - x₁)

Given: m = 4, point (1, 5)

y - 5 = 4(x - 1)

Distribute:
y - 5 = 4x - 4

Add 5 to both sides:
y = 4x + 1

Answer: y = 4x + 1`,
        difficulty: 'MEDIUM',
        order: 3
      },
      {
        topicId: graphingLinearEq.id,
        question: 'Find the equation of the line passing through (3, 7) and (5, 13) in slope-intercept form.',
        solution: `Step 1: Find the slope
m = (13 - 7)/(5 - 3) = 6/2 = 3

Step 2: Use point-slope form with either point (using (3, 7)):
y - 7 = 3(x - 3)

Step 3: Convert to slope-intercept form
y - 7 = 3x - 9
y = 3x - 2

Answer: y = 3x - 2

Check with other point (5, 13): y = 3(5) - 2 = 15 - 2 = 13 ✓`,
        difficulty: 'HARD',
        order: 4
      }
    ]
  });

  // Topic 2: Graphing Linear Equations - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: graphingLinearEq.id,
        front: 'What is the slope-intercept form of a linear equation?',
        back: 'y = mx + b, where m is the slope and b is the y-intercept.',
        hint: 'The "intercept" form shows where the line crosses the y-axis.'
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What does the slope represent?',
        back: 'The rate of change; how much y changes for each unit change in x. Also "rise over run".',
        hint: 'Slope = (change in y)/(change in x) = rise/run'
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What is the y-intercept?',
        back: 'The point where the line crosses the y-axis. The y-coordinate when x = 0.',
        hint: 'In y = mx + b, the y-intercept is b, at point (0, b).'
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What is the formula for finding slope between two points?',
        back: 'm = (y₂ - y₁)/(x₂ - x₁)',
        hint: 'Remember: change in y over change in x, or "rise over run".'
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What does a positive slope look like on a graph?',
        back: 'The line rises from left to right (upward direction).',
        hint: 'Think: positive = going up!'
      },
      {
        topicId: graphingLinearEq.id,
        front: 'What does a negative slope look like on a graph?',
        back: 'The line falls from left to right (downward direction).',
        hint: 'Think: negative = going down!'
      }
    ]
  });

  console.log('✅ Added problems and flashcards: graphing-linear-equations');

  // Topic 3: Linear Inequalities - Problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: linearInequalities.id,
        question: 'Solve the inequality: x + 5 < 12',
        solution: `Subtract 5 from both sides:
x + 5 - 5 < 12 - 5
x < 7

Solution: x < 7
In interval notation: (-∞, 7)

Graph: Open circle at 7, shade left`,
        difficulty: 'EASY',
        order: 0
      },
      {
        topicId: linearInequalities.id,
        question: 'Solve the inequality: 3x - 4 ≥ 8',
        solution: `Add 4 to both sides:
3x - 4 + 4 ≥ 8 + 4
3x ≥ 12

Divide by 3:
x ≥ 4

Solution: x ≥ 4
In interval notation: [4, ∞)

Graph: Closed circle at 4, shade right`,
        difficulty: 'EASY',
        order: 1
      },
      {
        topicId: linearInequalities.id,
        question: 'Solve the inequality: -2x + 6 > 10',
        solution: `Subtract 6 from both sides:
-2x > 4

Divide by -2 (FLIP THE INEQUALITY SIGN):
x < -2

Solution: x < -2
In interval notation: (-∞, -2)

Remember: When dividing or multiplying by a negative, flip the inequality sign!`,
        difficulty: 'MEDIUM',
        order: 2
      },
      {
        topicId: linearInequalities.id,
        question: 'Solve the inequality: 5x - 3 ≤ 2x + 9',
        solution: `Subtract 2x from both sides:
3x - 3 ≤ 9

Add 3 to both sides:
3x ≤ 12

Divide by 3:
x ≤ 4

Solution: x ≤ 4
In interval notation: (-∞, 4]`,
        difficulty: 'MEDIUM',
        order: 3
      },
      {
        topicId: linearInequalities.id,
        question: 'Solve the compound inequality: -3 < 2x + 1 ≤ 7',
        solution: `Split into two parts and solve each:

Part 1: -3 < 2x + 1
-4 < 2x
-2 < x  or  x > -2

Part 2: 2x + 1 ≤ 7
2x ≤ 6
x ≤ 3

Combine: -2 < x ≤ 3

Solution: -2 < x ≤ 3
In interval notation: (-2, 3]

Graph: Open circle at -2, closed circle at 3, shade between`,
        difficulty: 'HARD',
        order: 4
      }
    ]
  });

  // Topic 3: Linear Inequalities - Flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: linearInequalities.id,
        front: 'What symbols are used for inequalities?',
        back: '< (less than), > (greater than), ≤ (less than or equal), ≥ (greater than or equal)',
        hint: 'The small end points to the smaller value.'
      },
      {
        topicId: linearInequalities.id,
        front: 'When do you flip the inequality sign?',
        back: 'When you multiply or divide both sides by a negative number.',
        hint: 'Key rule: negative × or ÷ means FLIP the sign!'
      },
      {
        topicId: linearInequalities.id,
        front: 'What does x < 5 mean on a number line?',
        back: 'Open circle at 5, with shading to the left (all numbers less than 5).',
        hint: 'Open circle means "not including" that number.'
      },
      {
        topicId: linearInequalities.id,
        front: 'What does x ≥ 3 mean on a number line?',
        back: 'Closed (filled) circle at 3, with shading to the right (all numbers 3 and greater).',
        hint: 'Closed circle means "including" that number.'
      },
      {
        topicId: linearInequalities.id,
        front: 'What is interval notation for x < 4?',
        back: '(-∞, 4) - parenthesis means not including the endpoint.',
        hint: 'Always use ( or ) with infinity symbols.'
      },
      {
        topicId: linearInequalities.id,
        front: 'What is the difference between x > 2 and x ≥ 2?',
        back: 'x > 2 excludes 2; x ≥ 2 includes 2.',
        hint: 'The "or equal to" bar means the endpoint is included.'
      }
    ]
  });

  console.log('✅ Added problems and flashcards: linear-inequalities-algebra1');

  console.log('\n✨ Successfully added problems and flashcards for 3 topics!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
