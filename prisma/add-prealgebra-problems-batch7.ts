import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 7 (FINAL - 1 topic)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Integers and Operations
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'integers-and-operations',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic1) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Calculate: -7 + 12',
          solution: 'Step 1: Identify the operation.\nAdding integers with different signs\n\nStep 2: Apply the rule for different signs.\nSubtract absolute values: 12 - 7 = 5\nUse sign of larger absolute value (12 is positive)\n\nStep 3: Result.\n-7 + 12 = 5\n\nThink: Start at -7, move 12 units right\n\nAnswer: 5',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Calculate: 8 - 15',
          solution: 'Step 1: Change subtraction to adding the opposite.\n8 - 15 = 8 + (-15)\n\nStep 2: Add integers with different signs.\nSubtract absolute values: 15 - 8 = 7\nUse sign of larger (15 is negative)\n\nStep 3: Result.\n8 + (-15) = -7\n\nAnswer: -7',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Calculate: (-6) × (-4)',
          solution: 'Step 1: Apply multiplication rule for same signs.\nNegative × Negative = Positive\n\nStep 2: Multiply absolute values.\n6 × 4 = 24\n\nStep 3: Apply positive sign.\n(-6) × (-4) = 24\n\nRemember: Two negatives make a positive!\n\nAnswer: 24',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Evaluate: -3 + 8 - 5 + 2',
          solution: 'Step 1: Work left to right.\nStart: -3 + 8 - 5 + 2\n\nStep 2: First operation: -3 + 8\n-3 + 8 = 5\n\nStep 3: Continue: 5 - 5\n5 - 5 = 0\n\nStep 4: Final operation: 0 + 2\n0 + 2 = 2\n\nAlternate: Rewrite all as addition\n-3 + 8 + (-5) + 2\nCombine: -3 - 5 = -8, then 8 + 2 = 10\nFinal: -8 + 10 = 2\n\nAnswer: 2',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'The temperature at 6 AM was -8°F. It rose 15 degrees by noon, then dropped 7 degrees by 6 PM, and finally dropped another 5 degrees by midnight. What was the temperature at midnight?',
          solution: 'Step 1: Start with initial temperature.\n6 AM: -8°F\n\nStep 2: Temperature rises 15 degrees.\nRise = add positive\n-8 + 15 = 7°F at noon\n\nStep 3: Drops 7 degrees.\nDrop = subtract (or add negative)\n7 - 7 = 0°F at 6 PM\n\nStep 4: Drops another 5 degrees.\n0 - 5 = -5°F at midnight\n\nCheck the full calculation:\n-8 + 15 - 7 - 5\n= 7 - 7 - 5\n= 0 - 5\n= -5\n\nAnswer: -5°F at midnight',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic1.id,
          front: 'What are integers?',
          back: 'Whole numbers and their opposites: ..., -3, -2, -1, 0, 1, 2, 3, ... (no fractions or decimals)',
          hint: 'Positive and negative whole numbers, plus zero'
        },
        {
          topicId: topic1.id,
          front: 'How do you add integers with the SAME sign?',
          back: 'Add the absolute values and KEEP the sign. Example: -3 + (-5) = -8, or 4 + 6 = 10',
          hint: 'Same signs: add and keep the sign'
        },
        {
          topicId: topic1.id,
          front: 'How do you add integers with DIFFERENT signs?',
          back: 'Subtract the absolute values and use the sign of the LARGER absolute value. Example: -8 + 3 = -5',
          hint: 'Different signs: subtract, use larger sign'
        },
        {
          topicId: topic1.id,
          front: 'What is the rule for subtracting integers?',
          back: 'Change subtraction to ADDING THE OPPOSITE. a - b = a + (-b). Example: 5 - 8 = 5 + (-8) = -3',
          hint: 'Subtraction = add the opposite'
        },
        {
          topicId: topic1.id,
          front: 'What are the sign rules for multiplying/dividing integers?',
          back: 'SAME signs → POSITIVE. DIFFERENT signs → NEGATIVE. Examples: (-3)×(-2)=6, (-3)×2=-6',
          hint: 'Same = positive, Different = negative'
        },
        {
          topicId: topic1.id,
          front: 'What happens with a double negative?',
          back: 'Two negatives make a POSITIVE. Example: -(-5) = 5, or 3 - (-2) = 3 + 2 = 5',
          hint: 'Minus a negative = plus a positive'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: integers-and-operations');
  }

  console.log('\n🎉 ALL DONE! All 19 Pre-Algebra topics now have problems and flashcards!');
  console.log('📊 Next step: Expand the 8 topics with partial content (3→5 problems, 3→6 flashcards)');
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
