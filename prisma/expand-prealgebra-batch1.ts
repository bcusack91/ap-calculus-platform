import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Pre-Algebra partial topics - Batch 1 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Absolute Value (absolute-value-prealgebra)
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'absolute-value-prealgebra',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic1) {
    // Add 2 more problems (already has 3, need 5 total)
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Evaluate: |7 - 10|',
          solution: 'Step 1: Evaluate inside the absolute value first.\n7 - 10 = -3\n\nStep 2: Find the absolute value.\n|-3| = 3\n\nRemember: Always do operations inside the bars first, then take absolute value.\n\nAnswer: 3',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'Solve for x: |x - 4| = 9',
          solution: 'Step 1: Understand what this means.\nThe distance between x and 4 is 9 units.\n\nStep 2: Set up two equations.\nCase 1: x - 4 = 9\nx = 13\n\nCase 2: x - 4 = -9\nx = -5\n\nStep 3: Check both solutions.\n|13 - 4| = |9| = 9 ✓\n|-5 - 4| = |-9| = 9 ✓\n\nAnswer: x = 13 or x = -5',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 3 more flashcards (already has 3, need 6 total)
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic1.id,
          front: 'What is |-7|?',
          back: '7 (distance from 0 is 7 units)',
          hint: 'Absolute value is always non-negative'
        },
        {
          topicId: topic1.id,
          front: 'How do you evaluate expressions with absolute value?',
          back: 'Do the operations INSIDE the absolute value bars FIRST, then take the absolute value of the result.',
          hint: 'Inside first, then absolute value'
        },
        {
          topicId: topic1.id,
          front: 'What real-world situations use absolute value?',
          back: 'Distance (always positive), temperature change magnitude, error/deviation, stock market changes, elevation differences.',
          hint: 'Any measurement where direction doesn\'t matter, only magnitude'
        }
      ]
    });

    console.log('✅ Expanded: absolute-value-prealgebra (now 5 problems, 6 flashcards)');
  }

  // Topic 2: Operations with Integers
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'operations-with-integers',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic2) {
    // Add 2 more problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Calculate: (-48) ÷ 6',
          solution: 'Step 1: Identify the signs.\nNegative ÷ Positive = Negative\n\nStep 2: Divide the absolute values.\n48 ÷ 6 = 8\n\nStep 3: Apply the negative sign.\n(-48) ÷ 6 = -8\n\nAnswer: -8',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'A scuba diver starts at the surface (0 feet), descends 40 feet, rises 15 feet, descends another 25 feet, then rises 30 feet. What is the diver\'s final depth?',
          solution: 'Step 1: Set up with integers.\nSurface = 0\nDescend = negative (down)\nRise = positive (up)\n\nStep 2: Write the expression.\n0 + (-40) + 15 + (-25) + 30\n\nStep 3: Calculate step by step.\n0 - 40 = -40\n-40 + 15 = -25\n-25 - 25 = -50\n-50 + 30 = -20\n\nStep 4: Interpret the result.\n-20 feet means 20 feet below surface\n\nAnswer: 20 feet below the surface (or -20 feet)',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 3 more flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic2.id,
          front: 'What is (-4) + (-6)?',
          back: '-10 (same signs: add and keep negative)',
          hint: 'Same signs: add the numbers, keep the sign'
        },
        {
          topicId: topic2.id,
          front: 'What is 5 - (-3)?',
          back: '8 (subtracting negative = adding positive, so 5 + 3 = 8)',
          hint: 'Minus a negative = plus a positive'
        },
        {
          topicId: topic2.id,
          front: 'What is (-5) × (-7)?',
          back: '35 (negative × negative = positive)',
          hint: 'Two negatives make a positive'
        }
      ]
    });

    console.log('✅ Expanded: operations-with-integers (now 5 problems, 6 flashcards)');
  }

  // Topic 3: Operations with Fractions
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'operations-with-fractions',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic3) {
    // Add 2 more problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'Calculate: 2/3 × 3/4',
          solution: 'Step 1: Multiply numerators.\n2 × 3 = 6\n\nStep 2: Multiply denominators.\n3 × 4 = 12\n\nStep 3: Write the result.\n6/12\n\nStep 4: Simplify.\nGCF of 6 and 12 is 6\n6/12 = 1/2\n\nAnswer: 1/2',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A recipe calls for 2 1/4 cups of flour. You want to make 2/3 of the recipe. How much flour do you need?',
          solution: 'Step 1: Convert mixed number to improper fraction.\n2 1/4 = 9/4\n\nStep 2: Multiply by 2/3.\n9/4 × 2/3\n\nStep 3: Multiply numerators and denominators.\n(9 × 2)/(4 × 3) = 18/12\n\nStep 4: Simplify.\nGCF of 18 and 12 is 6\n18/12 = 3/2\n\nStep 5: Convert to mixed number.\n3/2 = 1 1/2\n\nAnswer: 1 1/2 cups of flour',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 3 more flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic3.id,
          front: 'How do you multiply fractions?',
          back: 'Multiply numerators together, multiply denominators together, then simplify. (a/b) × (c/d) = (ac)/(bd)',
          hint: 'Straight across: top × top, bottom × bottom'
        },
        {
          topicId: topic3.id,
          front: 'How do you divide fractions?',
          back: 'Multiply by the RECIPROCAL (flip the second fraction). (a/b) ÷ (c/d) = (a/b) × (d/c)',
          hint: 'Keep, Change, Flip - multiply by reciprocal'
        },
        {
          topicId: topic3.id,
          front: 'What must you do before adding or subtracting fractions?',
          back: 'Find a COMMON DENOMINATOR (same bottom number). Then add/subtract numerators.',
          hint: 'Same denominator needed for adding/subtracting'
        }
      ]
    });

    console.log('✅ Expanded: operations-with-fractions (now 5 problems, 6 flashcards)');
  }

  console.log('\n✨ Successfully expanded 3 topics!');
  console.log('📊 6 more topics need expansion');
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
