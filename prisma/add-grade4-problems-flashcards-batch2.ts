import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 4 Math topics (Batch 2)...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  // Topic 1: Comparing and Ordering Numbers
  const comparingTopic = await prisma.topic.findFirst({
    where: {
      slug: 'comparing-ordering-numbers',
      category: { courseId: grade4Course.id }
    }
  });

  if (comparingTopic) {
    // Add practice problems for Comparing and Ordering Numbers
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: comparingTopic.id,
          question: 'Compare using <, >, or =:\n5,678 ___ 5,876',
          solution: 'Compare digit by digit from left to right:\n\n5,678\n5,876\n\nThousands: 5 = 5 ✓\nHundreds: 6 < 8 ← Different!\n\nSince 6 < 8, we know:\n\n5,678 **<** 5,876 ✓\n\n5,678 is less than 5,876',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          question: 'Order from least to greatest:\n34,567  34,765  34,576',
          solution: 'Compare digit by digit:\n\n34,567\n34,765\n34,576\n\nAll have 34 in the thousands → compare hundreds:\n- 34,**5**67 (5 hundreds)\n- 34,**7**65 (7 hundreds)\n- 34,**5**76 (5 hundreds)\n\nTwo have 5 hundreds, one has 7 hundreds.\nFor the two with 5 hundreds, compare tens:\n- 34,5**6**7 (6 tens)\n- 34,5**7**6 (7 tens)\n\n**Order from least to greatest:**\n34,567 < 34,576 < 34,765 ✓',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          question: 'Which is greatest: 98,999 or 100,001?',
          solution: 'Compare the number of digits first:\n\n98,999 → 5 digits\n100,001 → 6 digits\n\nA 6-digit number is always greater than a 5-digit number!\n\n**100,001 is greatest** ✓\n\nEven though 98,999 has mostly 9s, 100,001 is bigger because it has an extra digit in the hundred thousands place.',
          difficulty: 'EASY',
          order: 3,
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          question: 'Order from greatest to least:\n7,200  7,020  7,002  7,220',
          solution: 'Compare digit by digit:\n\nAll start with 7 thousands → compare hundreds:\n- 7,**2**00 (2 hundreds)\n- 7,**0**20 (0 hundreds)\n- 7,**0**02 (0 hundreds)\n- 7,**2**20 (2 hundreds)\n\nThe two with 2 hundreds are bigger.\nFor those two, compare tens:\n- 7,2**0**0 (0 tens)\n- 7,2**2**0 (2 tens)\n\n7,220 is biggest!\n\nFor the two with 0 hundreds, compare tens:\n- 7,0**2**0 (2 tens)\n- 7,0**0**2 (0 tens)\n\n**Order from greatest to least:**\n7,220 > 7,200 > 7,020 > 7,002 ✓',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          question: 'True or False: A number with more digits is always greater.',
          solution: '**TRUE!** ✓\n\nA number with more digits is ALWAYS greater than a number with fewer digits.\n\nExamples:\n- 1,000 (4 digits) > 999 (3 digits)\n- 10,000 (5 digits) > 9,999 (4 digits)\n- 100 (3 digits) > 99 (2 digits)\n\nThis is the FIRST thing to check when comparing numbers!\n\nIf the numbers have the same number of digits, THEN you compare digit by digit from left to right.',
          difficulty: 'MEDIUM',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Comparing and Ordering Numbers
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: comparingTopic.id,
          front: 'What does the symbol > mean?',
          back: 'Greater than (the number on the left is bigger)',
          hint: 'The open mouth points to the bigger number',
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          front: 'What does the symbol < mean?',
          back: 'Less than (the number on the left is smaller)',
          hint: 'The point aims at the smaller number',
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          front: 'What is the first step when comparing two numbers?',
          back: 'Count the digits - more digits means a bigger number!',
          hint: '1,000 vs 999 - which has more digits?',
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          front: 'If two numbers have the same number of digits, what do you do?',
          back: 'Compare digit by digit from LEFT to RIGHT',
          hint: 'Start with the biggest place value',
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          front: 'Is 5,678 greater than or less than 5,876?',
          back: 'Less than (5,678 < 5,876) - compare the hundreds: 6 < 8',
          hint: 'Compare place by place from left',
          isPremium: false
        },
        {
          topicId: comparingTopic.id,
          front: 'What does "ordering from least to greatest" mean?',
          back: 'Arranging numbers from smallest to largest',
          hint: 'Least = smallest, greatest = biggest',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: comparing-ordering-numbers');
  }

  // Topic 2: Lines and Angles
  const linesTopic = await prisma.topic.findFirst({
    where: {
      slug: 'lines-and-angles',
      category: { courseId: grade4Course.id }
    }
  });

  if (linesTopic) {
    // Add practice problems for Lines and Angles
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: linesTopic.id,
          question: 'Identify the type of angle: An angle that measures exactly 90°.',
          solution: 'An angle that measures exactly 90° is a **RIGHT ANGLE** ✓\n\nHow to recognize it:\n- Forms an "L" shape\n- Makes a perfect corner (like the corner of a square)\n- Often marked with a small square in the corner\n- Exactly 1/4 of a full turn\n\nExamples: corners of books, doors, windows',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          question: 'True or False: All straight lines are parallel.',
          solution: '**FALSE!** ✗\n\nParallel lines are lines that:\n- Never meet (never intersect)\n- Are always the same distance apart\n- Go in the same direction\n\nTwo straight lines can:\n- Be parallel (never meet) ✓\n- Intersect (cross each other) ✓\n- Be perpendicular (meet at 90°) ✓\n\nNot all straight lines are parallel - some intersect!',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          question: 'An angle measures 45°. Is it acute, right, or obtuse?',
          solution: 'Let\'s check:\n\n45° compared to 90°:\n- Is it less than 90°? YES!\n- Is it exactly 90°? No\n- Is it more than 90°? No\n\nSince 45° < 90°, it is an **ACUTE ANGLE** ✓\n\nAcute angles are:\n- Less than 90°\n- Sharp and pointy\n- Smaller than a right angle\n\nExamples of acute angles: 30°, 45°, 60°, 89°',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          question: 'Draw two perpendicular lines. What angles do they form?',
          solution: 'When two lines are perpendicular, they:\n- Meet at 90°\n- Form RIGHT ANGLES\n- Create 4 right angles at the intersection!\n\nDiagram:\n```\n      |\n      |\n──────┼──────\n      |\n      |\n```\n\nAll 4 angles formed are **90° (right angles)** ✓\n\nExample: The corner of a plus sign (+) or the intersection of streets that meet at a corner.',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          question: 'How many degrees are in a straight angle? Why is it called a straight angle?',
          solution: 'A straight angle measures **180°** ✓\n\nWhy it\'s called a "straight" angle:\n- It forms a straight line!\n- The two rays point in exactly opposite directions\n- It\'s exactly 1/2 of a full turn (360° ÷ 2 = 180°)\n\nDiagram:\n```\n←──────────────────→\n```\n\nThink of it as:\n- A complete U-turn\n- A flat line\n- Two right angles (90° + 90° = 180°)\n\nExamples: The horizon, a ruler edge, a straight road',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Lines and Angles
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: linesTopic.id,
          front: 'What is a right angle?',
          back: 'An angle that measures exactly 90° (makes an "L" shape)',
          hint: 'Think of a square corner',
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          front: 'What is an acute angle?',
          back: 'An angle that measures less than 90° (small and pointy)',
          hint: 'Acute = "a-cute" little angle',
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          front: 'What is an obtuse angle?',
          back: 'An angle that measures more than 90° but less than 180° (wide and open)',
          hint: 'Obtuse = bigger than a right angle',
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          front: 'What are parallel lines?',
          back: 'Lines that never meet and are always the same distance apart',
          hint: 'Think of railroad tracks',
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          front: 'What are perpendicular lines?',
          back: 'Lines that intersect at a right angle (90°)',
          hint: 'They form a plus sign (+)',
          isPremium: false
        },
        {
          topicId: linesTopic.id,
          front: 'How many degrees are in a straight angle?',
          back: '180° (forms a straight line)',
          hint: 'Half of a full rotation (360° ÷ 2)',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: lines-and-angles');
  }

  // Topic 3: Area and Perimeter
  const areaTopic = await prisma.topic.findFirst({
    where: {
      slug: 'area-and-perimeter',
      category: { courseId: grade4Course.id }
    }
  });

  if (areaTopic) {
    // Add practice problems for Area and Perimeter
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: areaTopic.id,
          question: 'A rectangle has a length of 8 cm and width of 3 cm. What is its perimeter?',
          solution: 'Perimeter = add all 4 sides\n\nRectangle sides:\n- Length: 8 cm (appears twice)\n- Width: 3 cm (appears twice)\n\n**Method 1:** Add all sides\nP = 8 + 8 + 3 + 3 = 22 cm\n\n**Method 2:** Use the formula\nP = 2 × (length + width)\nP = 2 × (8 + 3)\nP = 2 × 11\nP = 22 cm\n\n**Perimeter = 22 cm** ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          question: 'A square has sides of 6 inches. What is its area?',
          solution: 'For a square:\nArea = side × side\n\nGiven: side = 6 inches\n\nA = 6 × 6\nA = 36 square inches\n\n**Area = 36 in²** ✓\n\nWhy square inches?\n- We multiply inches × inches = in²\n- Area is always measured in square units\n- This represents 36 small squares that are 1 inch × 1 inch',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          question: 'A garden is 12 feet long and 5 feet wide. How much fencing is needed to go around it?',
          solution: 'We need to find the PERIMETER (distance around).\n\nGarden dimensions:\n- Length: 12 feet\n- Width: 5 feet\n\nPerimeter = add all 4 sides\nP = 12 + 12 + 5 + 5\nP = 24 + 10\nP = 34 feet\n\nOr use the formula:\nP = 2 × (12 + 5)\nP = 2 × 17\nP = 34 feet\n\n**You need 34 feet of fencing** ✓',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          question: 'A rectangle has an area of 24 square meters and a length of 8 meters. What is the width?',
          solution: 'We know:\n- Area = 24 m²\n- Length = 8 m\n- Width = ?\n\nUse the area formula:\nArea = length × width\n24 = 8 × width\n\nTo find width, divide:\nwidth = 24 ÷ 8\nwidth = 3 meters\n\n**Check:** 8 × 3 = 24 ✓\n\n**Width = 3 meters** ✓',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          question: 'A farmer has 40 feet of fence. What is the largest rectangular area he can enclose if one side must be 12 feet?',
          solution: 'We know:\n- Total fence (perimeter) = 40 feet\n- One side = 12 feet\n\nFor a rectangle:\nP = 2 × (length + width)\n40 = 2 × (12 + width)\n\nDivide both sides by 2:\n20 = 12 + width\n\nSubtract 12:\nwidth = 20 - 12 = 8 feet\n\n**The rectangle is 12 ft × 8 ft**\n\nArea = 12 × 8 = **96 square feet** ✓\n\nCheck perimeter: 12 + 12 + 8 + 8 = 40 ✓',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Area and Perimeter
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: areaTopic.id,
          front: 'What is perimeter?',
          back: 'The distance around the outside of a shape (add all sides)',
          hint: 'Think of walking around the edge',
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          front: 'What is area?',
          back: 'The space inside a shape (measured in square units)',
          hint: 'Think of covering a floor with tiles',
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          front: 'What is the formula for the area of a rectangle?',
          back: 'Area = length × width',
          hint: 'Multiply the two different sides',
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          front: 'What is the formula for the perimeter of a rectangle?',
          back: 'Perimeter = 2 × (length + width) OR add all 4 sides',
          hint: 'Add all sides or use the shortcut',
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          front: 'What units do we use for perimeter?',
          back: 'Linear units (cm, m, ft, in) - just the regular unit',
          hint: 'It\'s a distance, like measuring with a ruler',
          isPremium: false
        },
        {
          topicId: areaTopic.id,
          front: 'What units do we use for area?',
          back: 'Square units (cm², m², ft², in²)',
          hint: 'Area = squares, so square units!',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: area-and-perimeter');
  }

  console.log('\n✨ Successfully added practice problems and flashcards to 3 topics!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
