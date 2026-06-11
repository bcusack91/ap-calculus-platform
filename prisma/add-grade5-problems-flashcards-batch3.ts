import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 5 Math - Batch 3 (3 topics)...\n');

  // Topic 1: Classifying 2D Shapes
  const shapes2d = await prisma.topic.findFirst({
    where: { slug: 'classifying-2d-shapes' }
  });

  if (shapes2d) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: shapes2d.id,
          question: 'A shape has 4 equal sides and 4 right angles. What is it?',
          solution: 'Let\'s check the properties:\n- 4 equal sides\n- 4 right angles (90° each)\n\nThis describes a square!\n\nNote: A square is a special type of rectangle (has 4 right angles) and a special type of rhombus (has 4 equal sides).\n\nAnswer: Square',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: shapes2d.id,
          question: 'What type of triangle has all three sides of different lengths?',
          solution: 'Triangles are classified by their sides:\n- Equilateral: All 3 sides equal\n- Isosceles: Exactly 2 sides equal\n- Scalene: All 3 sides different\n\nThe question asks for all three sides of different lengths.\n\nAnswer: Scalene triangle',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: shapes2d.id,
          question: 'A quadrilateral has exactly one pair of parallel sides. What shape is it?',
          solution: 'Let\'s review quadrilaterals and their parallel sides:\n\n- Square: 2 pairs of parallel sides\n- Rectangle: 2 pairs of parallel sides\n- Parallelogram: 2 pairs of parallel sides\n- Rhombus: 2 pairs of parallel sides\n- Trapezoid: EXACTLY 1 pair of parallel sides\n- Kite: 0 pairs of parallel sides\n\nAnswer: Trapezoid',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: shapes2d.id,
          question: 'True or False: All rectangles are parallelograms. Explain your answer.',
          solution: 'Let\'s check if rectangles have all the properties of parallelograms.\n\nParallelogram properties:\n- 4 sides (quadrilateral) ✓\n- Opposite sides are parallel ✓\n- Opposite sides are equal ✓\n- Opposite angles are equal ✓\n\nRectangle properties:\n- 4 sides ✓\n- Opposite sides are parallel ✓\n- Opposite sides are equal ✓\n- All 4 angles are 90° (so opposite angles are equal) ✓\n\nSince a rectangle has all the properties of a parallelogram (plus the extra property of having right angles), every rectangle IS a parallelogram.\n\nAnswer: TRUE - All rectangles are parallelograms (but not all parallelograms are rectangles).',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: shapes2d.id,
          question: 'A triangle has one angle measuring 95°. What type of triangle is it based on its angles: acute, right, or obtuse? Can you determine what type it is based on its sides?',
          solution: 'Part 1: Classify by angles\n\nTriangle types by angles:\n- Acute: All 3 angles less than 90°\n- Right: One angle exactly 90°\n- Obtuse: One angle greater than 90°\n\nSince one angle is 95° (greater than 90°), this is an OBTUSE triangle.\n\nPart 2: Can we determine the side classification?\n\nNo! We need more information about the sides or other angles. It could be:\n- Obtuse scalene (all sides different)\n- Obtuse isosceles (two sides equal)\n\nWe cannot have an obtuse equilateral triangle because in an equilateral triangle, all angles are 60°.\n\nAnswer: Obtuse triangle (by angles). Cannot determine side classification without more information.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: shapes2d.id,
          front: 'What is a polygon?',
          back: 'A closed 2D shape made of straight line segments.',
          hint: 'Think: straight sides, no curves, completely closed'
        },
        {
          topicId: shapes2d.id,
          front: 'How many sides does a hexagon have?',
          back: '6 sides',
          hint: 'Think of a honeycomb cell'
        },
        {
          topicId: shapes2d.id,
          front: 'What\'s the difference between a square and a rhombus?',
          back: 'Both have 4 equal sides, but a square has 4 right angles while a rhombus doesn\'t.',
          hint: 'Think about the angles'
        },
        {
          topicId: shapes2d.id,
          front: 'What is a regular polygon?',
          back: 'A polygon where all sides are equal length and all angles are equal.',
          hint: 'Both sides AND angles are equal'
        },
        {
          topicId: shapes2d.id,
          front: 'Name the three types of triangles classified by sides.',
          back: 'Equilateral (all sides equal), Isosceles (2 sides equal), Scalene (all sides different)',
          hint: 'Think about how many equal sides'
        },
        {
          topicId: shapes2d.id,
          front: 'Is a circle a polygon?',
          back: 'No! A circle has no straight sides - it\'s a curved shape.',
          hint: 'Remember: polygons must have straight sides'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: classifying-2d-shapes');
  }

  // Topic 2: Coordinate Plane Basics
  const coordinatePlane = await prisma.topic.findFirst({
    where: { slug: 'coordinate-plane-basics' }
  });

  if (coordinatePlane) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: coordinatePlane.id,
          question: 'Plot the point (3, 5) on a coordinate plane. Describe how to find it.',
          solution: 'To plot (3, 5):\n\nStep 1: Start at the origin (0, 0)\n\nStep 2: Look at the first number (x-coordinate = 3)\nMove 3 units to the RIGHT (positive x)\n\nStep 3: Look at the second number (y-coordinate = 5)\nMove 5 units UP (positive y)\n\nStep 4: Mark the point\n\nThe point (3, 5) is located 3 units right and 5 units up from the origin.\n\nAnswer: Point is at 3 right, 5 up',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: coordinatePlane.id,
          question: 'What are the coordinates of the origin?',
          solution: 'The origin is the point where the x-axis and y-axis meet.\n\nAt the origin:\n- x-coordinate = 0 (not left or right)\n- y-coordinate = 0 (not up or down)\n\nAnswer: (0, 0)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: coordinatePlane.id,
          question: 'Point A is at (-2, 4). In which quadrant is this point located?',
          solution: 'To find the quadrant, check the signs of the coordinates:\n\nx-coordinate: -2 (negative)\ny-coordinate: 4 (positive)\n\nQuadrant review:\n- Quadrant I: (+, +) both positive\n- Quadrant II: (-, +) negative x, positive y ← This matches!\n- Quadrant III: (-, -) both negative\n- Quadrant IV: (+, -) positive x, negative y\n\nAnswer: Quadrant II',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: coordinatePlane.id,
          question: 'Find the distance between points (2, 3) and (2, 8).',
          solution: 'Notice that both points have the same x-coordinate (2), so they\'re on a vertical line.\n\nPoint 1: (2, 3)\nPoint 2: (2, 8)\n\nFor vertical distance, subtract the y-coordinates:\n8 - 3 = 5\n\nWe can verify:\n- Both points are at x = 2\n- One is at y = 3, the other at y = 8\n- The vertical distance is 5 units\n\nAnswer: 5 units',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: coordinatePlane.id,
          question: 'Three vertices of a rectangle are at (1, 2), (1, 6), and (5, 2). What are the coordinates of the fourth vertex?',
          solution: 'Let\'s plot the three known points:\nA: (1, 2)\nB: (1, 6)\nC: (5, 2)\n\nNotice:\n- A and B have the same x-coordinate (1), so they\'re on a vertical line\n- A and C have the same y-coordinate (2), so they\'re on a horizontal line\n- This means A is a corner where two sides meet\n\nFor a rectangle:\n- The side from A to B is vertical (x = 1)\n- The side from A to C is horizontal (y = 2)\n- We need the opposite corner from A\n\nThe fourth vertex must have:\n- The same x-coordinate as C (which is 5)\n- The same y-coordinate as B (which is 6)\n\nAnswer: (5, 6)\n\nCheck: This forms a rectangle with width 4 and height 4.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: coordinatePlane.id,
          front: 'What is an ordered pair?',
          back: 'A pair of numbers (x, y) that shows the location of a point on the coordinate plane.',
          hint: 'Order matters! x comes first, then y'
        },
        {
          topicId: coordinatePlane.id,
          front: 'Which axis is horizontal?',
          back: 'The x-axis (goes left and right)',
          hint: 'Think: x goes across like a cross'
        },
        {
          topicId: coordinatePlane.id,
          front: 'Which axis is vertical?',
          back: 'The y-axis (goes up and down)',
          hint: 'Think: y goes up like asking "why?"'
        },
        {
          topicId: coordinatePlane.id,
          front: 'In the ordered pair (7, -3), which number is the y-coordinate?',
          back: '-3 (the second number is always the y-coordinate)',
          hint: 'Remember: (x, y) - second number is y'
        },
        {
          topicId: coordinatePlane.id,
          front: 'What are the signs of coordinates in Quadrant III?',
          back: 'Both negative: (-, -)',
          hint: 'Bottom left quadrant - both negative'
        },
        {
          topicId: coordinatePlane.id,
          front: 'Memory trick: How do you remember to move horizontally first?',
          back: '"Run before you jump" or "Along the hall, up the stairs" - move on x-axis first, then y-axis',
          hint: 'x (horizontal) before y (vertical)'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: coordinate-plane-basics');
  }

  // Topic 3: Patterns and Relationships
  const patterns = await prisma.topic.findFirst({
    where: { slug: 'patterns-relationships' }
  });

  if (patterns) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: patterns.id,
          question: 'Find the next number in the pattern: 7, 12, 17, 22, ___',
          solution: 'Step 1: Find how the pattern changes\n12 - 7 = 5\n17 - 12 = 5\n22 - 17 = 5\n\nStep 2: Identify the pattern rule\nEach number increases by 5 (add 5)\n\nStep 3: Apply the rule to find the next number\n22 + 5 = 27\n\nAnswer: 27\n\nPattern rule: Add 5',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: patterns.id,
          question: 'What is the pattern rule for: 3, 6, 12, 24, 48?',
          solution: 'Step 1: Check if it\'s additive\n6 - 3 = 3\n12 - 6 = 6\nThe differences aren\'t the same, so it\'s not adding.\n\nStep 2: Check if it\'s multiplicative\n6 ÷ 3 = 2\n12 ÷ 6 = 2\n24 ÷ 12 = 2\n48 ÷ 24 = 2\n\nEach number is multiplied by 2!\n\nAnswer: Multiply by 2 (or double the previous number)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: patterns.id,
          question: 'Complete the input-output table and find the rule:\n\nInput (x) | Output (y)\n   1      |    5\n   2      |    8\n   3      |   11\n   4      |    ?',
          solution: 'Step 1: Look at how output changes\n8 - 5 = 3\n11 - 8 = 3\nOutput increases by 3 each time\n\nStep 2: Find the relationship between input and output\nWhen x = 1, y = 5 = 3(1) + 2\nWhen x = 2, y = 8 = 3(2) + 2\nWhen x = 3, y = 11 = 3(3) + 2\n\nRule: y = 3x + 2\n\nStep 3: Use the rule to find the missing output\nWhen x = 4: y = 3(4) + 2 = 12 + 2 = 14\n\nAnswer: y = 14, Rule: y = 3x + 2',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: patterns.id,
          question: 'Maya saves money each week. After week 1, she has $8. After week 2, she has $13. After week 3, she has $18. How much will she have after week 6?',
          solution: 'Step 1: Identify the pattern\nWeek 1: $8\nWeek 2: $13 (increased by $5)\nWeek 3: $18 (increased by $5)\n\nPattern: Add $5 each week\n\nStep 2: Continue the pattern\nWeek 4: $18 + $5 = $23\nWeek 5: $23 + $5 = $28\nWeek 6: $28 + $5 = $33\n\nAlternative method using a rule:\ny = 5x + 3 (where x is the week number)\nWeek 6: y = 5(6) + 3 = 30 + 3 = 33\n\nAnswer: $33 after week 6',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: patterns.id,
          question: 'Find the 10th term in the pattern: 4, 7, 10, 13, 16...\nThen write a rule to find ANY term in the pattern.',
          solution: 'Step 1: Identify the pattern\n7 - 4 = 3\n10 - 7 = 3\n13 - 10 = 3\nPattern: Add 3 each time\n\nStep 2: Find the 10th term by continuing\nTerm 1: 4\nTerm 2: 7\nTerm 3: 10\nTerm 4: 13\nTerm 5: 16\nTerm 6: 19\nTerm 7: 22\nTerm 8: 25\nTerm 9: 28\nTerm 10: 31\n\nStep 3: Create a general rule\nLook at the relationship:\nTerm 1: 4 = 3(1) + 1\nTerm 2: 7 = 3(2) + 1\nTerm 3: 10 = 3(3) + 1\n\nRule: Term n = 3n + 1\n\nVerify for term 10: 3(10) + 1 = 30 + 1 = 31 ✓\n\nAnswer: 10th term = 31, Rule: 3n + 1',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: patterns.id,
          front: 'What is a pattern rule?',
          back: 'A description of how to get from one term to the next in a sequence.',
          hint: 'It tells you what operation to use'
        },
        {
          topicId: patterns.id,
          front: 'What is an arithmetic pattern?',
          back: 'A pattern where you add or subtract the same number each time.',
          hint: 'Also called an additive pattern'
        },
        {
          topicId: patterns.id,
          front: 'What is a geometric pattern?',
          back: 'A pattern where you multiply or divide by the same number each time.',
          hint: 'Also called a multiplicative pattern'
        },
        {
          topicId: patterns.id,
          front: 'In the pattern 5, 10, 15, 20..., what is the common difference?',
          back: '5 (each term increases by 5)',
          hint: 'Subtract consecutive terms'
        },
        {
          topicId: patterns.id,
          front: 'What does the variable n typically represent in a pattern rule?',
          back: 'The position number or term number in the sequence.',
          hint: 'n = 1 for the 1st term, n = 2 for the 2nd term, etc.'
        },
        {
          topicId: patterns.id,
          front: 'In an input-output table, which variable is usually the input?',
          back: 'x (the input), and y is usually the output',
          hint: 'Think of x → rule → y'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: patterns-relationships');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
