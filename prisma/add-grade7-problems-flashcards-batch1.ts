import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 7 Math practice problems and flashcards - Batch 1 (3 topics)...\n');

  // Topic 1: Multiplying and Dividing Integers
  const topic1 = await prisma.topic.findFirst({
    where: { slug: 'multiplying-dividing-integers' }
  });

  if (topic1) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Calculate: (-8) × 5',
          solution: 'When multiplying a negative and a positive number, the result is negative.\n\n(-8) × 5 = -40\n\nAnswer: -40',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Calculate: (-6) × (-7)',
          solution: 'When multiplying two negative numbers, the result is positive.\n\n(-6) × (-7) = 42\n\nAnswer: 42',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Calculate: 45 ÷ (-9)',
          solution: 'When dividing a positive by a negative number, the result is negative.\n\n45 ÷ (-9) = -5\n\nAnswer: -5',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Calculate: (-4) × 3 × (-2)',
          solution: 'Multiply from left to right:\n\nStep 1: (-4) × 3 = -12\nStep 2: (-12) × (-2) = 24\n\nTwo negative signs make a positive.\n\nAnswer: 24',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A submarine descends 15 meters per minute for 8 minutes. What is the change in depth? (Use negative for descending)',
          solution: 'Descending means going down, so we use -15 meters/minute.\n\nChange in depth = (-15) × 8 = -120 meters\n\nThe submarine descended 120 meters (or is at -120 meters from starting point).\n\nAnswer: -120 meters',
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
          front: 'What is the sign rule for multiplying two positive numbers?',
          back: 'Positive × Positive = Positive\n\nExample: 5 × 3 = 15',
          hint: 'Think about what happens when you multiply regular positive numbers'
        },
        {
          topicId: topic1.id,
          front: 'What is the sign rule for multiplying two negative numbers?',
          back: 'Negative × Negative = Positive\n\nExample: (-4) × (-6) = 24',
          hint: 'Two negatives make a positive'
        },
        {
          topicId: topic1.id,
          front: 'What is the sign rule for multiplying a positive and a negative number?',
          back: 'Positive × Negative = Negative\nNegative × Positive = Negative\n\nExample: 7 × (-3) = -21',
          hint: 'Different signs give you a negative result'
        },
        {
          topicId: topic1.id,
          front: 'What is the sign rule for dividing integers with the same sign?',
          back: 'Same signs = Positive result\n\n12 ÷ 4 = 3\n(-12) ÷ (-4) = 3',
          hint: 'Division follows the same rules as multiplication'
        },
        {
          topicId: topic1.id,
          front: 'What is the sign rule for dividing integers with different signs?',
          back: 'Different signs = Negative result\n\n12 ÷ (-4) = -3\n(-12) ÷ 4 = -3',
          hint: 'One positive and one negative give a negative'
        },
        {
          topicId: topic1.id,
          front: 'When multiplying three negative numbers, is the result positive or negative?',
          back: 'Negative\n\n(-2) × (-3) × (-4) = -24\n\nOdd number of negatives = negative result',
          hint: 'Count the negative signs - odd or even?'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: multiplying-dividing-integers');
  }

  // Topic 2: Rational Number Operations
  const topic2 = await prisma.topic.findFirst({
    where: { slug: 'rational-number-operations' }
  });

  if (topic2) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Add: 2/5 + 1/5',
          solution: 'The fractions have the same denominator, so add the numerators:\n\n2/5 + 1/5 = (2 + 1)/5 = 3/5\n\nAnswer: 3/5',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Subtract: 5/6 - 1/3',
          solution: 'Find a common denominator. The LCD of 6 and 3 is 6.\n\nConvert 1/3 to sixths: 1/3 = 2/6\n\nNow subtract:\n5/6 - 2/6 = 3/6 = 1/2\n\nAnswer: 1/2',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Multiply: (-2/3) × (3/4)',
          solution: 'Multiply numerators and denominators:\n\n(-2/3) × (3/4) = (-2 × 3)/(3 × 4) = -6/12\n\nSimplify: -6/12 = -1/2\n\nAnswer: -1/2',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Divide: 3/4 ÷ 2/5',
          solution: 'To divide fractions, multiply by the reciprocal:\n\n3/4 ÷ 2/5 = 3/4 × 5/2\n\nMultiply:\n(3 × 5)/(4 × 2) = 15/8\n\nConvert to mixed number: 15/8 = 1 7/8\n\nAnswer: 15/8 or 1 7/8',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'Calculate: -1/2 + 3/4 - 1/3',
          solution: 'Find the LCD of 2, 4, and 3. LCD = 12\n\nConvert all fractions:\n-1/2 = -6/12\n3/4 = 9/12\n-1/3 = -4/12\n\nAdd/subtract from left to right:\n-6/12 + 9/12 - 4/12 = (-6 + 9 - 4)/12 = -1/12\n\nAnswer: -1/12',
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
          front: 'How do you add or subtract fractions with the same denominator?',
          back: 'Keep the denominator and add/subtract the numerators.\n\nExample: 3/7 + 2/7 = 5/7',
          hint: 'The bottom number stays the same'
        },
        {
          topicId: topic2.id,
          front: 'How do you add or subtract fractions with different denominators?',
          back: '1. Find a common denominator (usually LCD)\n2. Convert fractions to equivalent fractions\n3. Add/subtract numerators\n4. Simplify if needed',
          hint: 'You need to make the denominators the same first'
        },
        {
          topicId: topic2.id,
          front: 'How do you multiply fractions?',
          back: 'Multiply numerators together and denominators together.\n\na/b × c/d = (a × c)/(b × d)\n\nExample: 2/3 × 3/5 = 6/15 = 2/5',
          hint: 'Top times top, bottom times bottom'
        },
        {
          topicId: topic2.id,
          front: 'How do you divide fractions?',
          back: 'Multiply by the reciprocal (flip the second fraction).\n\na/b ÷ c/d = a/b × d/c\n\nExample: 1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3',
          hint: 'Keep, change, flip - or multiply by the reciprocal'
        },
        {
          topicId: topic2.id,
          front: 'What is a reciprocal?',
          back: 'A reciprocal is a fraction flipped upside down.\n\nReciprocal of 3/4 is 4/3\nReciprocal of 5 is 1/5\nReciprocal of 1/7 is 7',
          hint: 'Flip the numerator and denominator'
        },
        {
          topicId: topic2.id,
          front: 'When adding fractions with different denominators, what is the LCD?',
          back: 'LCD = Least Common Denominator\n\nThe smallest number that both denominators divide into evenly.\n\nExample: LCD of 4 and 6 is 12',
          hint: 'LCD stands for Least Common Denominator'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: rational-number-operations');
  }

  // Topic 3: Percent of Change
  const topic3 = await prisma.topic.findFirst({
    where: { slug: 'percent-of-change' }
  });

  if (topic3) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'A shirt was originally $20. It is now on sale for $15. What is the percent decrease?',
          solution: 'Step 1: Find the amount of change\nChange = Original - New = 20 - 15 = $5\n\nStep 2: Use the percent of change formula\nPercent of change = (Change/Original) × 100%\nPercent of change = (5/20) × 100%\nPercent of change = 0.25 × 100% = 25%\n\nSince the price went down, this is a 25% decrease.\n\nAnswer: 25% decrease',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'A plant grew from 8 inches to 10 inches tall. What is the percent increase?',
          solution: 'Step 1: Find the amount of change\nChange = New - Original = 10 - 8 = 2 inches\n\nStep 2: Use the percent of change formula\nPercent of change = (2/8) × 100%\nPercent of change = 0.25 × 100% = 25%\n\nSince it grew, this is a 25% increase.\n\nAnswer: 25% increase',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'A store marks up a watch by 40%. If the store paid $50 for the watch, what is the selling price?',
          solution: 'Method 1: Calculate the markup amount\nMarkup = 40% of $50 = 0.40 × 50 = $20\nSelling price = $50 + $20 = $70\n\nMethod 2: Use multiplier\nMultiplier = 1 + 0.40 = 1.40\nSelling price = $50 × 1.40 = $70\n\nAnswer: $70',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'A jacket is marked down 30% from its original price of $80. What is the sale price?',
          solution: 'Method 1: Calculate the discount\nDiscount = 30% of $80 = 0.30 × 80 = $24\nSale price = $80 - $24 = $56\n\nMethod 2: Use multiplier\nMultiplier = 1 - 0.30 = 0.70\nSale price = $80 × 0.70 = $56\n\nAnswer: $56',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A stock price increased by 20% on Monday and then decreased by 20% on Tuesday. If it started at $100, what is the final price? Did it return to the original price?',
          solution: 'Monday (20% increase):\nMultiplier = 1.20\nPrice after Monday = $100 × 1.20 = $120\n\nTuesday (20% decrease):\nMultiplier = 0.80\nPrice after Tuesday = $120 × 0.80 = $96\n\nFinal price: $96\n\nNo, it did NOT return to the original price! The 20% decrease is calculated on the larger amount ($120), so it loses more money than it gained.\n\nDifference from original: $100 - $96 = $4 loss\n\nAnswer: $96 (not back to original)',
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
          front: 'What is the formula for percent of change?',
          back: 'Percent of change = (Amount of Change / Original Amount) × 100%\n\nAmount of Change = |New - Original|',
          hint: 'Compare the change to the original amount'
        },
        {
          topicId: topic3.id,
          front: 'How do you identify if it is a percent increase or decrease?',
          back: 'Percent Increase: New value is greater than original\nPercent Decrease: New value is less than original\n\nExample: $20 to $25 is an increase\n$20 to $15 is a decrease',
          hint: 'Did the value go up or down?'
        },
        {
          topicId: topic3.id,
          front: 'What is markup?',
          back: 'Markup is a percent increase added to the cost to determine the selling price.\n\nSelling Price = Cost + (Markup % × Cost)\n\nExample: $50 cost with 30% markup = $50 + $15 = $65',
          hint: 'Stores add markup to make a profit'
        },
        {
          topicId: topic3.id,
          front: 'What is markdown (or discount)?',
          back: 'Markdown is a percent decrease from the original price.\n\nSale Price = Original - (Discount % × Original)\n\nExample: $80 with 25% discount = $80 - $20 = $60',
          hint: 'Sales reduce the original price'
        },
        {
          topicId: topic3.id,
          front: 'What multiplier do you use for a 30% increase?',
          back: 'Multiplier = 1 + 0.30 = 1.30\n\nNew amount = Original × 1.30\n\nExample: $50 × 1.30 = $65',
          hint: 'Add the percent to 100%'
        },
        {
          topicId: topic3.id,
          front: 'What multiplier do you use for a 25% decrease?',
          back: 'Multiplier = 1 - 0.25 = 0.75\n\nNew amount = Original × 0.75\n\nExample: $80 × 0.75 = $60',
          hint: 'Subtract the percent from 100%'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: percent-of-change');
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
