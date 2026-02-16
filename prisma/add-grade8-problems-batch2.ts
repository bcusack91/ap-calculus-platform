import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 8 Math practice problems and flashcards - Batch 2 (3 topics)...\n');

  // Topic 1: Linear Equations
  const linearEquations = await prisma.topic.findFirst({
    where: { slug: 'linear-equations' }
  });

  if (linearEquations) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: linearEquations.id,
          question: 'Write an equation in slope-intercept form with slope m = 3 and y-intercept b = -2.',
          solution: 'Use the slope-intercept form: y = mx + b\n\nSubstitute m = 3 and b = -2:\n\ny = 3x + (-2)\n\ny = 3x - 2\n\nAnswer: y = 3x - 2',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: linearEquations.id,
          question: 'Convert to slope-intercept form: 2x + 4y = 12',
          solution: 'Solve for y:\n\n2x + 4y = 12\n\n4y = -2x + 12\n\ny = -2x/4 + 12/4\n\ny = -1/2 x + 3\n\nAnswer: y = -1/2 x + 3',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: linearEquations.id,
          question: 'Write an equation in slope-intercept form for a line passing through (2, 5) with slope m = 4.',
          solution: 'Use point-slope form first: y - y₁ = m(x - x₁)\n\ny - 5 = 4(x - 2)\n\ny - 5 = 4x - 8\n\ny = 4x - 8 + 5\n\ny = 4x - 3\n\nAnswer: y = 4x - 3',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: linearEquations.id,
          question: 'Find the equation of a line passing through points (1, 3) and (4, 12).',
          solution: 'Step 1: Find slope\nm = (12 - 3)/(4 - 1) = 9/3 = 3\n\nStep 2: Use point-slope form with point (1, 3)\ny - 3 = 3(x - 1)\n\ny - 3 = 3x - 3\n\ny = 3x\n\nAnswer: y = 3x',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: linearEquations.id,
          question: 'Write an equation for a line perpendicular to y = 2x + 5 passing through (4, 1).',
          solution: 'Step 1: Find perpendicular slope\nOriginal slope m = 2\nPerpendicular slope = -1/2\n\nStep 2: Use point-slope form with (4, 1)\ny - 1 = -1/2(x - 4)\n\ny - 1 = -1/2 x + 2\n\ny = -1/2 x + 3\n\nAnswer: y = -1/2 x + 3',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: linearEquations.id,
          front: 'What is slope-intercept form?',
          back: 'y = mx + b, where m is the slope and b is the y-intercept',
          hint: 'Think: y equals...'
        },
        {
          topicId: linearEquations.id,
          front: 'What is point-slope form?',
          back: 'y - y₁ = m(x - x₁), where m is the slope and (x₁, y₁) is a point on the line',
          hint: 'Uses a point and the slope'
        },
        {
          topicId: linearEquations.id,
          front: 'What is standard form of a linear equation?',
          back: 'Ax + By = C, where A, B, and C are integers and A is positive',
          hint: 'Both variables on left side'
        },
        {
          topicId: linearEquations.id,
          front: 'What is the equation of a horizontal line through y = k?',
          back: 'y = k (slope is 0)',
          hint: 'y equals a constant'
        },
        {
          topicId: linearEquations.id,
          front: 'What is the equation of a vertical line through x = h?',
          back: 'x = h (slope is undefined)',
          hint: 'x equals a constant'
        },
        {
          topicId: linearEquations.id,
          front: 'How do you find the equation of a line from two points?',
          back: 'First find slope m = (y₂-y₁)/(x₂-x₁), then use point-slope form with either point',
          hint: 'Slope first, then use a point'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: linear-equations');
  }

  // Topic 2: Systems of Linear Equations
  const systemsLinear = await prisma.topic.findFirst({
    where: { slug: 'systems-linear-equations' }
  });

  if (systemsLinear) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: systemsLinear.id,
          question: 'Solve by substitution:\ny = 2x + 1\ny = x + 3',
          solution: 'Since both equal y, set them equal:\n\n2x + 1 = x + 3\n\n2x - x = 3 - 1\n\nx = 2\n\nSubstitute back: y = 2 + 3 = 5\n\nAnswer: (2, 5)',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: systemsLinear.id,
          question: 'Solve by elimination:\nx + y = 10\nx - y = 4',
          solution: 'Add the equations to eliminate y:\n\n(x + y) + (x - y) = 10 + 4\n\n2x = 14\n\nx = 7\n\nSubstitute: 7 + y = 10, so y = 3\n\nAnswer: (7, 3)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: systemsLinear.id,
          question: 'Solve by substitution:\nx + 2y = 11\n3x - y = 7',
          solution: 'Solve first equation for x:\nx = 11 - 2y\n\nSubstitute into second equation:\n3(11 - 2y) - y = 7\n\n33 - 6y - y = 7\n\n33 - 7y = 7\n\n-7y = -26\n\ny = 26/7\n\nSubstitute back: x = 11 - 2(26/7) = 11 - 52/7 = 77/7 - 52/7 = 25/7\n\nAnswer: (25/7, 26/7)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: systemsLinear.id,
          question: 'Solve by elimination:\n2x + 3y = 16\n5x - 2y = 11',
          solution: 'Multiply first equation by 2 and second by 3 to eliminate y:\n\n4x + 6y = 32\n15x - 6y = 33\n\nAdd equations:\n19x = 65\n\nx = 65/19\n\nSubstitute: 2(65/19) + 3y = 16\n130/19 + 3y = 16\n3y = 304/19 - 130/19 = 174/19\ny = 58/19\n\nAnswer: (65/19, 58/19)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: systemsLinear.id,
          question: 'A movie theater sold 150 tickets. Adult tickets cost $12 and child tickets cost $8. Total sales were $1,560. How many of each type were sold?',
          solution: 'Let a = adult tickets, c = child tickets\n\nSystem:\na + c = 150\n12a + 8c = 1560\n\nSolve first for a: a = 150 - c\n\nSubstitute:\n12(150 - c) + 8c = 1560\n1800 - 12c + 8c = 1560\n1800 - 4c = 1560\n-4c = -240\nc = 60\n\nThen a = 150 - 60 = 90\n\nAnswer: 90 adult tickets, 60 child tickets',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: systemsLinear.id,
          front: 'What is a system of linear equations?',
          back: 'Two or more linear equations with the same variables',
          hint: 'Multiple equations together'
        },
        {
          topicId: systemsLinear.id,
          front: 'What does the solution to a system represent graphically?',
          back: 'The point(s) where the lines intersect',
          hint: 'Where the lines meet'
        },
        {
          topicId: systemsLinear.id,
          front: 'When is the substitution method easiest to use?',
          back: 'When one equation is already solved for a variable (or can be easily)',
          hint: 'When a variable is isolated'
        },
        {
          topicId: systemsLinear.id,
          front: 'When is the elimination method easiest to use?',
          back: 'When equations are in standard form and coefficients line up nicely',
          hint: 'When you can easily make opposites'
        },
        {
          topicId: systemsLinear.id,
          front: 'What does it mean if a system has no solution?',
          back: 'The lines are parallel (same slope, different y-intercepts)',
          hint: 'Lines never meet'
        },
        {
          topicId: systemsLinear.id,
          front: 'What does it mean if a system has infinite solutions?',
          back: 'The lines are the same (same equation, overlapping)',
          hint: 'Lines are identical'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: systems-linear-equations');
  }

  // Topic 3: Distance Formula
  const distanceFormula = await prisma.topic.findFirst({
    where: { slug: 'distance-formula' }
  });

  if (distanceFormula) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: distanceFormula.id,
          question: 'Find the distance between points (1, 2) and (4, 6).',
          solution: 'Use the distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]\n\nd = √[(4-1)² + (6-2)²]\n\nd = √[3² + 4²]\n\nd = √[9 + 16]\n\nd = √25 = 5\n\nAnswer: 5 units',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: distanceFormula.id,
          question: 'Find the distance between points (-2, 3) and (1, -1).',
          solution: 'Use the distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]\n\nd = √[(1-(-2))² + (-1-3)²]\n\nd = √[3² + (-4)²]\n\nd = √[9 + 16]\n\nd = √25 = 5\n\nAnswer: 5 units',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: distanceFormula.id,
          question: 'Find the distance from the origin to point (6, 8).',
          solution: 'Origin is (0, 0). Use distance formula:\n\nd = √[(6-0)² + (8-0)²]\n\nd = √[6² + 8²]\n\nd = √[36 + 64]\n\nd = √100 = 10\n\nAnswer: 10 units',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: distanceFormula.id,
          question: 'Points A(2, 5) and B(x, 1) are 5 units apart. Find the possible values of x.',
          solution: 'Use distance formula and set d = 5:\n\n5 = √[(x-2)² + (1-5)²]\n\n5 = √[(x-2)² + 16]\n\n25 = (x-2)² + 16\n\n9 = (x-2)²\n\n±3 = x-2\n\nx = 2+3 = 5 or x = 2-3 = -1\n\nAnswer: x = 5 or x = -1',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: distanceFormula.id,
          question: 'Triangle ABC has vertices A(0, 0), B(5, 0), and C(5, 12). Determine if it is a right triangle.',
          solution: 'Find all three side lengths:\n\nAB = √[(5-0)² + (0-0)²] = √25 = 5\n\nBC = √[(5-5)² + (12-0)²] = √144 = 12\n\nAC = √[(5-0)² + (12-0)²] = √[25+144] = √169 = 13\n\nCheck Pythagorean theorem: 5² + 12² = 25 + 144 = 169 = 13²\n\nYes! AB² + BC² = AC²\n\nAnswer: Yes, it is a right triangle (with right angle at B)',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: distanceFormula.id,
          front: 'What is the distance formula?',
          back: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
          hint: 'Square root of sum of squared differences'
        },
        {
          topicId: distanceFormula.id,
          front: 'What theorem is the distance formula based on?',
          back: 'The Pythagorean Theorem (a² + b² = c²)',
          hint: 'Right triangle theorem'
        },
        {
          topicId: distanceFormula.id,
          front: 'What is the distance between two points with the same y-coordinate?',
          back: 'The absolute value of the difference in x-coordinates: |x₂ - x₁|',
          hint: 'Horizontal line - just x difference'
        },
        {
          topicId: distanceFormula.id,
          front: 'What is the distance between two points with the same x-coordinate?',
          back: 'The absolute value of the difference in y-coordinates: |y₂ - y₁|',
          hint: 'Vertical line - just y difference'
        },
        {
          topicId: distanceFormula.id,
          front: 'What is the distance from the origin (0,0) to point (a, b)?',
          back: 'd = √(a² + b²)',
          hint: 'Simplifies when starting at origin'
        },
        {
          topicId: distanceFormula.id,
          front: 'What is the midpoint formula?',
          back: 'M = ((x₁+x₂)/2, (y₁+y₂)/2) - the average of the coordinates',
          hint: 'Average the x\'s and y\'s'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: distance-formula');
  }

  console.log('\n✨ Successfully added practice problems and flashcards for 3 topics!');
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
