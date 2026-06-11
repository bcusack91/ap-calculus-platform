import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 1 (3 topics)...\n');

  // Get the Pre-Algebra course and category IDs
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Comparing and Ordering Rational Numbers
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'comparing-ordering-rational',
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
          question: 'Order the following numbers from least to greatest: -3, 5, -7, 0, 2',
          solution: 'Step 1: Identify negative and positive numbers.\nNegatives: -3, -7\nZero: 0\nPositives: 5, 2\n\nStep 2: Order negatives (remember: more negative = smaller).\n-7 < -3\n\nStep 3: Order positives.\n2 < 5\n\nStep 4: Combine.\nNegatives, zero, positives: -7, -3, 0, 2, 5\n\nAnswer: -7, -3, 0, 2, 5',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Which is greater: -4.5 or -4.8?',
          solution: 'Method 1: Number line\n-4.5 is to the RIGHT of -4.8 on the number line.\nFurther right = greater.\n\nMethod 2: Closer to zero\n-4.5 is closer to 0 than -4.8\nCloser to zero = greater for negatives.\n\nMethod 3: Think of temperature\n-4.5°F is warmer than -4.8°F\n\nAnswer: -4.5 > -4.8',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Compare using <, >, or =: -2/3 _____ -3/4',
          solution: 'Step 1: Convert to decimals for easier comparison.\n-2/3 = -0.666...\n-3/4 = -0.75\n\nStep 2: Compare.\n-0.666... is closer to zero than -0.75\nCloser to zero = greater for negatives.\n\nOr: Think which is less negative\n-2/3 is less negative than -3/4\n\nAnswer: -2/3 > -3/4',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Arrange in ascending order: 1.5, -1/2, 0.8, -2, 3/4',
          solution: 'Step 1: Convert all to decimals.\n1.5 = 1.5\n-1/2 = -0.5\n0.8 = 0.8\n-2 = -2.0\n3/4 = 0.75\n\nStep 2: Separate by sign.\nNegatives: -2, -0.5\nPositives: 1.5, 0.8, 0.75\n\nStep 3: Order each group.\nNegatives (least to greatest): -2, -0.5\nPositives (least to greatest): 0.75, 0.8, 1.5\n\nStep 4: Combine.\n-2, -0.5, 0.75, 0.8, 1.5\n\nAnswer: -2, -1/2, 3/4, 0.8, 1.5',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A submarine is at -250 feet, a plane at 1,500 feet, a fish at -15 feet, and a bird at 50 feet. List them in order from lowest elevation to highest.',
          solution: 'Step 1: List the elevations.\nSubmarine: -250 ft\nPlane: 1,500 ft\nFish: -15 ft\nBird: 50 ft\n\nStep 2: Identify below sea level (negative) and above (positive).\nBelow: -250 (submarine), -15 (fish)\nAbove: 1,500 (plane), 50 (bird)\n\nStep 3: Order negatives (most negative first).\n-250 < -15\n\nStep 4: Order positives (least to greatest).\n50 < 1,500\n\nStep 5: Combine from lowest to highest.\n-250, -15, 50, 1,500\n\nAnswer: Submarine (-250 ft), Fish (-15 ft), Bird (50 ft), Plane (1,500 ft)',
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
          front: 'How do you compare two negative numbers?',
          back: 'The number closer to zero is GREATER. Example: -3 > -7 because -3 is closer to zero.',
          hint: 'Think about a number line or temperature - which is warmer?'
        },
        {
          topicId: topic1.id,
          front: 'When comparing positive and negative numbers, which is always greater?',
          back: 'Any positive number is ALWAYS greater than any negative number. Example: 1 > -100',
          hint: 'Positive numbers are to the right of zero, negatives to the left'
        },
        {
          topicId: topic1.id,
          front: 'What does "ascending order" mean?',
          back: 'Ascending order means from LEAST to GREATEST (smallest to largest). Goes UP.',
          hint: 'Think "ascending" like climbing UP stairs'
        },
        {
          topicId: topic1.id,
          front: 'What does "descending order" mean?',
          back: 'Descending order means from GREATEST to LEAST (largest to smallest). Goes DOWN.',
          hint: 'Think "descending" like going DOWN stairs'
        },
        {
          topicId: topic1.id,
          front: 'How do you compare fractions and decimals?',
          back: 'Convert them to the SAME form (both fractions OR both decimals), then compare. Example: 3/4 = 0.75, so compare to other decimals.',
          hint: 'Choose whichever form is easier to work with'
        },
        {
          topicId: topic1.id,
          front: 'On a number line, which direction means greater?',
          back: 'Numbers to the RIGHT are GREATER. Numbers to the LEFT are LESSER.',
          hint: 'Right = greater, Left = lesser'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: comparing-ordering-rational');
  }

  // Topic 2: Fraction-Decimal Conversions
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'fraction-decimal-conversions',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic2) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Convert 3/4 to a decimal.',
          solution: 'Method: Divide numerator by denominator.\n\n3 ÷ 4 = ?\n\nSet up division:\n  0.75\n4)3.00\n  -28\n   20\n  -20\n    0\n\nAnswer: 3/4 = 0.75\n\nThis is a terminating decimal (ends).',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Convert 0.6 to a fraction in simplest form.',
          solution: 'Step 1: Use place value.\n0.6 = 6 tenths = 6/10\n\nStep 2: Simplify.\nFind GCF of 6 and 10 = 2\n6/10 = (6÷2)/(10÷2) = 3/5\n\nAnswer: 0.6 = 3/5',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Convert 5/8 to a decimal.',
          solution: 'Divide: 5 ÷ 8\n\n  0.625\n8)5.000\n  -48\n   20\n  -16\n   40\n  -40\n    0\n\nAnswer: 5/8 = 0.625\n\nThis is a terminating decimal.',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Convert 0.35 to a fraction in simplest form.',
          solution: 'Step 1: Use place value.\n0.35 = 35 hundredths = 35/100\n\nStep 2: Simplify.\nFind GCF of 35 and 100 = 5\n35/100 = (35÷5)/(100÷5) = 7/20\n\nCheck: Can 7/20 be simplified further?\n7 is prime, doesn\'t divide 20.\nAlready in simplest form.\n\nAnswer: 0.35 = 7/20',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'A recipe calls for 2.75 cups of flour. Express this as a mixed number in simplest form.',
          solution: 'Step 1: Separate whole and decimal parts.\n2.75 = 2 + 0.75\n\nStep 2: Convert decimal part to fraction.\n0.75 = 75 hundredths = 75/100\n\nStep 3: Simplify the fraction.\nGCF of 75 and 100 = 25\n75/100 = (75÷25)/(100÷25) = 3/4\n\nStep 4: Write as mixed number.\n2 + 3/4 = 2 3/4\n\nAnswer: 2.75 = 2 3/4 cups\n\nNote: 3/4 cup is a common measurement in cooking!',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic2.id,
          front: 'How do you convert a fraction to a decimal?',
          back: 'Divide the numerator by the denominator. Example: 1/4 = 1 ÷ 4 = 0.25',
          hint: 'The fraction bar means division!'
        },
        {
          topicId: topic2.id,
          front: 'How do you convert a decimal to a fraction?',
          back: 'Use place value, then simplify. Example: 0.8 = 8/10 = 4/5',
          hint: 'Tenths go over 10, hundredths over 100, etc.'
        },
        {
          topicId: topic2.id,
          front: 'What is 1/2 as a decimal?',
          back: '0.5',
          hint: 'Half of 1.0'
        },
        {
          topicId: topic2.id,
          front: 'What is 1/4 as a decimal?',
          back: '0.25',
          hint: 'One quarter of a dollar is 25 cents'
        },
        {
          topicId: topic2.id,
          front: 'What is 3/4 as a decimal?',
          back: '0.75',
          hint: 'Three quarters of a dollar is 75 cents'
        },
        {
          topicId: topic2.id,
          front: 'What is the difference between a terminating and repeating decimal?',
          back: 'Terminating decimals END (like 0.25). Repeating decimals go on FOREVER with a pattern (like 0.333...).',
          hint: 'Terminate = stop, Repeat = keep going'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: fraction-decimal-conversions');
  }

  // Topic 3: Square Roots and Perfect Squares
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'square-roots-perfect-squares',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic3) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'What is √64?',
          solution: 'Find the number that when squared equals 64.\n\nCheck perfect squares:\n8² = 8 × 8 = 64 ✓\n\nTherefore: √64 = 8\n\nCheck: 8² = 64 ✓\n\nAnswer: √64 = 8',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'Calculate 9²',
          solution: '9² means 9 × 9\n\n9 × 9 = 81\n\nAnswer: 9² = 81\n\nNote: 81 is a perfect square because it equals 9².',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'Estimate √50 to the nearest whole number.',
          solution: 'Step 1: Find perfect squares around 50.\n7² = 49\n8² = 64\n\nStep 2: Determine which is closer.\n50 is between 49 and 64\n50 - 49 = 1 (distance from 49)\n64 - 50 = 14 (distance from 64)\n\nStep 3: 50 is much closer to 49.\nSo √50 is closer to 7 than to 8.\n\nAnswer: √50 ≈ 7\n\n(Actual value ≈ 7.07)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'Simplify √48',
          solution: 'Step 1: Find the largest perfect square factor of 48.\nFactors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48\nPerfect square factors: 1, 4, 16\nLargest: 16\n\nStep 2: Break apart using the factor.\n√48 = √(16 × 3)\n\nStep 3: Use the property √(a × b) = √a × √b\n√48 = √16 × √3\n\nStep 4: Simplify.\n√16 = 4\nSo √48 = 4√3\n\nAnswer: √48 = 4√3',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A square garden has an area of 144 square feet. What is the length of each side? If you want to put a fence around it, how much fencing do you need?',
          solution: 'Part 1: Find side length.\nArea of square = s²\n144 = s²\ns = √144 = 12 feet\n\nPart 2: Find perimeter (fencing needed).\nPerimeter = 4s\nP = 4 × 12 = 48 feet\n\nCheck:\nArea = 12² = 144 ✓\nPerimeter = 4(12) = 48 ✓\n\nAnswer: Each side is 12 feet long. You need 48 feet of fencing.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic3.id,
          front: 'What is a perfect square?',
          back: 'A number that equals an integer squared. Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...',
          hint: 'Can you find a whole number that when multiplied by itself gives this number?'
        },
        {
          topicId: topic3.id,
          front: 'What does the square root symbol √ mean?',
          back: 'It asks "what number squared equals this?" Example: √16 = 4 because 4² = 16',
          hint: 'It\'s the opposite (inverse) of squaring'
        },
        {
          topicId: topic3.id,
          front: 'What is √100?',
          back: '10 (because 10² = 100)',
          hint: '10 × 10 = ?'
        },
        {
          topicId: topic3.id,
          front: 'What is √49?',
          back: '7 (because 7² = 49)',
          hint: '7 × 7 = ?'
        },
        {
          topicId: topic3.id,
          front: 'How do you estimate the square root of a non-perfect square?',
          back: 'Find the perfect squares it\'s BETWEEN, then see which is closer. Example: √20 is between √16=4 and √25=5, closer to 4.',
          hint: 'Find the perfect squares above and below it'
        },
        {
          topicId: topic3.id,
          front: 'What is the relationship between squaring and square root?',
          back: 'They are OPPOSITES (inverses). Squaring "undoes" square root and vice versa. Example: √(5²) = 5 and (√25)² = 25',
          hint: 'Like addition and subtraction, they undo each other'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: square-roots-perfect-squares');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
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
