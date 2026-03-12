import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 7 Math practice problems and flashcards - Batch 3 (3 topics)...\n');

  // Topic 1: Solving Inequalities
  const topic1 = await prisma.topic.findFirst({
    where: { slug: 'solving-inequalities' }
  });

  if (topic1) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Solve and graph: x + 5 > 8',
          solution: 'Step 1: Subtract 5 from both sides\nx + 5 - 5 > 8 - 5\nx > 3\n\nStep 2: Graph on a number line\nUse an open circle at 3 (not included)\nShade to the right (greater than)\n\nSolution: x > 3 (all numbers greater than 3)\n\nAnswer: x > 3',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Solve: 2x ≤ 10',
          solution: 'Divide both sides by 2:\n2x/2 ≤ 10/2\nx ≤ 5\n\nSince we divided by a positive number, the inequality sign stays the same.\n\nSolution: x ≤ 5 (all numbers less than or equal to 5)\n\nAnswer: x ≤ 5',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Solve: -3x < 12',
          solution: 'Divide both sides by -3:\n-3x/-3 < 12/-3\n\nIMPORTANT: When dividing by a negative, FLIP the inequality sign!\n\nx > -4\n\nSolution: x > -4 (all numbers greater than -4)\n\nAnswer: x > -4',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Solve: 4x - 7 ≥ 9',
          solution: 'Step 1: Add 7 to both sides\n4x - 7 + 7 ≥ 9 + 7\n4x ≥ 16\n\nStep 2: Divide both sides by 4\n4x/4 ≥ 16/4\nx ≥ 4\n\nSolution: x ≥ 4 (all numbers greater than or equal to 4)\n\nAnswer: x ≥ 4',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'Solve: -2(x - 3) + 5 ≤ 15',
          solution: 'Step 1: Distribute -2\n-2x + 6 + 5 ≤ 15\n\nStep 2: Combine like terms\n-2x + 11 ≤ 15\n\nStep 3: Subtract 11 from both sides\n-2x ≤ 4\n\nStep 4: Divide by -2 and FLIP the sign\n-2x/-2 ≥ 4/-2\nx ≥ -2\n\nSolution: x ≥ -2 (all numbers greater than or equal to -2)\n\nAnswer: x ≥ -2',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic1.id,
          front: 'What are the four inequality symbols?',
          back: '< means "less than"\n> means "greater than"\n≤ means "less than or equal to"\n≥ means "greater than or equal to"',
          hint: 'Think about which direction the symbol points'
        },
        {
          topicId: topic1.id,
          front: 'When must you flip the inequality sign?',
          back: 'FLIP the inequality sign when you multiply or divide both sides by a NEGATIVE number.\n\nExample: -2x < 6\nDivide by -2: x > -3 (sign flipped!)',
          hint: 'Only when multiplying or dividing by a negative'
        },
        {
          topicId: topic1.id,
          front: 'How do you graph x > 3 on a number line?',
          back: 'Use an OPEN circle at 3 (not included)\nShade to the RIGHT (greater than)\n\nOpen circle = not equal to that number',
          hint: 'Open circle for > or <, shade the direction of the inequality'
        },
        {
          topicId: topic1.id,
          front: 'How do you graph x ≤ -2 on a number line?',
          back: 'Use a CLOSED/FILLED circle at -2 (included)\nShade to the LEFT (less than)\n\nClosed circle = includes that number',
          hint: 'Closed circle for ≤ or ≥'
        },
        {
          topicId: topic1.id,
          front: 'What does the solution x < 5 mean?',
          back: 'x can be any number less than 5.\n\nExamples that work: 4, 0, -3, 4.9\nExamples that don\'t work: 5, 6, 10\n\n5 is NOT included.',
          hint: 'All numbers to the left of 5'
        },
        {
          topicId: topic1.id,
          front: 'What real-world phrase matches x ≥ 12?',
          back: 'Words that mean ≥:\n- "at least 12"\n- "no less than 12"\n- "12 or more"\n- "minimum of 12"\n\nExample: You must be at least 12 years old.',
          hint: 'Greater than or equal means "at least"'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: solving-inequalities');
  }

  // Topic 2: Angle Relationships
  const topic2 = await prisma.topic.findFirst({
    where: { slug: 'angle-relationships' }
  });

  if (topic2) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Two angles are complementary. One angle measures 35°. What is the measure of the other angle?',
          solution: 'Complementary angles sum to 90°.\n\nLet x = the unknown angle\n35° + x = 90°\nx = 90° - 35°\nx = 55°\n\nAnswer: 55°',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Two angles are supplementary. One angle measures 128°. What is the measure of the other angle?',
          solution: 'Supplementary angles sum to 180°.\n\nLet x = the unknown angle\n128° + x = 180°\nx = 180° - 128°\nx = 52°\n\nAnswer: 52°',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Two vertical angles are formed by intersecting lines. If one vertical angle measures 65°, what is the measure of the other vertical angle?',
          solution: 'Vertical angles are always equal.\n\nIf one vertical angle = 65°\nThen the other vertical angle = 65°\n\nAnswer: 65°',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'A linear pair is formed by two adjacent angles. If one angle measures 73°, what is the measure of the other angle?',
          solution: 'A linear pair forms a straight line, so the angles are supplementary (sum to 180°).\n\nLet x = the unknown angle\n73° + x = 180°\nx = 180° - 73°\nx = 107°\n\nAnswer: 107°',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'Two parallel lines are cut by a transversal. If one corresponding angle measures 115°, what is the measure of its corresponding angle?',
          solution: 'When parallel lines are cut by a transversal, corresponding angles are equal.\n\nIf one corresponding angle = 115°\nThen the other corresponding angle = 115°\n\nNote: You could also find:\n- Alternate interior angles = 115° (equal)\n- Consecutive interior angles = 180° - 115° = 65° (supplementary)\n\nAnswer: 115°',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic2.id,
          front: 'What are complementary angles?',
          back: 'Two angles that add up to 90° (a right angle).\n\nExample: 30° and 60° are complementary\n30° + 60° = 90°',
          hint: 'Think "Corner" - 90° makes a corner (right angle)'
        },
        {
          topicId: topic2.id,
          front: 'What are supplementary angles?',
          back: 'Two angles that add up to 180° (a straight line).\n\nExample: 120° and 60° are supplementary\n120° + 60° = 180°',
          hint: 'Think "Straight" - 180° makes a straight line'
        },
        {
          topicId: topic2.id,
          front: 'What are vertical angles?',
          back: 'Opposite angles formed when two lines intersect.\n\nVertical angles are ALWAYS EQUAL.\n\nExample: If one is 50°, the opposite angle is also 50°.',
          hint: 'They\'re across from each other and always equal'
        },
        {
          topicId: topic2.id,
          front: 'What is a linear pair?',
          back: 'Two adjacent angles that form a straight line.\n\nLinear pairs are ALWAYS SUPPLEMENTARY (sum to 180°).\n\nExample: 110° and 70° form a linear pair.',
          hint: 'Adjacent angles on a line = 180°'
        },
        {
          topicId: topic2.id,
          front: 'What are corresponding angles when parallel lines are cut by a transversal?',
          back: 'Angles in the same position at each intersection.\n\nWhen lines are PARALLEL, corresponding angles are EQUAL.\n\nExample: Both upper-left angles are equal.',
          hint: 'Same position, same measure (when parallel)'
        },
        {
          topicId: topic2.id,
          front: 'What are alternate interior angles?',
          back: 'Interior angles on opposite sides of the transversal.\n\nWhen lines are PARALLEL, alternate interior angles are EQUAL.\n\nThey make a "Z" pattern.',
          hint: 'Between the parallel lines, on opposite sides, equal measures'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: angle-relationships');
  }

  // Topic 3: Area of Composite Figures
  const topic3 = await prisma.topic.findFirst({
    where: { slug: 'area-composite-figures' }
  });

  if (topic3) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'Find the area of an L-shaped figure made of two rectangles: one is 5 ft by 3 ft, and the other is 4 ft by 2 ft.',
          solution: 'Break into two rectangles and add:\n\nRectangle 1: A₁ = 5 × 3 = 15 ft²\nRectangle 2: A₂ = 4 × 2 = 8 ft²\n\nTotal Area = 15 + 8 = 23 ft²\n\nAnswer: 23 ft²',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'A rectangular garden is 10 m by 8 m with a rectangular pond inside that is 3 m by 2 m. What is the area of the garden NOT covered by the pond?',
          solution: 'Use the subtraction method:\n\nArea of garden: A₁ = 10 × 8 = 80 m²\nArea of pond: A₂ = 3 × 2 = 6 m²\n\nArea NOT covered = 80 - 6 = 74 m²\n\nAnswer: 74 m²',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'Find the area of a figure that is a rectangle (12 cm by 6 cm) with a semicircle on top (diameter 6 cm). Use π ≈ 3.14.',
          solution: 'Break into rectangle + semicircle:\n\nRectangle: A₁ = 12 × 6 = 72 cm²\n\nSemicircle:\n- Radius = 6/2 = 3 cm\n- Full circle area = πr² = 3.14 × 3² = 3.14 × 9 = 28.26 cm²\n- Semicircle area = 28.26/2 = 14.13 cm²\n\nTotal Area = 72 + 14.13 = 86.13 cm²\n\nAnswer: 86.13 cm²',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'A trapezoid-shaped pool deck has parallel sides of 15 ft and 10 ft, with a height of 8 ft. There is a rectangular hot tub (4 ft by 3 ft) cut out of the deck. What is the remaining deck area?',
          solution: 'Step 1: Area of trapezoid deck\nA = (1/2)(b₁ + b₂)h\nA = (1/2)(15 + 10)(8)\nA = (1/2)(25)(8)\nA = 100 ft²\n\nStep 2: Area of hot tub\nA = 4 × 3 = 12 ft²\n\nStep 3: Subtract\nRemaining deck = 100 - 12 = 88 ft²\n\nAnswer: 88 ft²',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A figure consists of a square (side 10 in), with a triangle on top (base 10 in, height 6 in) and a semicircle cut out of the bottom (diameter 10 in). Find the total area. Use π ≈ 3.14.',
          solution: 'Addition and subtraction method:\n\nSquare: A₁ = 10² = 100 in²\n\nTriangle: A₂ = (1/2)(10)(6) = 30 in²\n\nSemicircle (cut out):\n- Radius = 10/2 = 5 in\n- Full circle = π(5²) = 3.14(25) = 78.5 in²\n- Semicircle = 78.5/2 = 39.25 in²\n\nTotal = Square + Triangle - Semicircle\nTotal = 100 + 30 - 39.25 = 90.75 in²\n\nAnswer: 90.75 in²',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic3.id,
          front: 'What is a composite figure?',
          back: 'A shape made up of two or more basic shapes (rectangles, triangles, circles, etc.).\n\nTo find area: break it into simpler shapes, find each area, then add or subtract.',
          hint: 'It\'s a combination of multiple shapes'
        },
        {
          topicId: topic3.id,
          front: 'What is the addition method for composite figures?',
          back: 'Break the figure into separate shapes, find the area of each, then ADD them together.\n\nExample: L-shape = Rectangle 1 + Rectangle 2',
          hint: 'Split it up and add the pieces'
        },
        {
          topicId: topic3.id,
          front: 'What is the subtraction method for composite figures?',
          back: 'Find the area of the larger outer shape, then SUBTRACT the area of any holes or cut-out sections.\n\nExample: Rectangle with circle cut out = Rectangle - Circle',
          hint: 'Outer shape minus the missing piece'
        },
        {
          topicId: topic3.id,
          front: 'What is the area formula for a rectangle?',
          back: 'A = length × width\n\nor\n\nA = lw\n\nExample: 5 cm by 3 cm = 15 cm²',
          hint: 'Length times width'
        },
        {
          topicId: topic3.id,
          front: 'What is the area formula for a triangle?',
          back: 'A = (1/2) × base × height\n\nor\n\nA = (1/2)bh\n\nExample: base 6 in, height 4 in = (1/2)(6)(4) = 12 in²',
          hint: 'Half of base times height'
        },
        {
          topicId: topic3.id,
          front: 'What is the area formula for a circle and semicircle?',
          back: 'Circle: A = πr²\n\nSemicircle: A = (1/2)πr²\n\nExample: Circle with r = 5\nA = π(5²) = 25π ≈ 78.5 units²',
          hint: 'Pi times radius squared (half that for semicircle)'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: area-composite-figures');
  }

  console.log('\n✨ Successfully added practice problems and flashcards for 3 topics!');
  console.log('📊 Total added: 15 problems, 18 flashcards');
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
