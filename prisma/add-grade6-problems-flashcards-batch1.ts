import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function addGrade6ProblemsAndFlashcardsBatch1() {
  console.log('Adding practice problems and flashcards to Grade 6 Math - Batch 1...\n');

  // Get topic IDs
  const dividingFractions = await prisma.topic.findFirst({
    where: { slug: 'grade6-dividing-fractions' }
  });

  const decimalOperations = await prisma.topic.findFirst({
    where: { slug: 'decimal-operations' }
  });

  const writingExpressions = await prisma.topic.findFirst({
    where: { slug: 'writing-expressions' }
  });

  if (!dividingFractions || !decimalOperations || !writingExpressions) {
    throw new Error('Could not find one or more topics');
  }

  // Topic 1: Dividing Fractions
  console.log('Adding problems and flashcards for: dividing-fractions');

  // Delete existing problems and flashcards
  await prisma.exampleProblem.deleteMany({
    where: { topicId: dividingFractions.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: dividingFractions.id }
  });

  // Add practice problems
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: dividingFractions.id,
        question: 'Calculate: 1/2 ÷ 1/4',
        solution: 'Using "Keep, Change, Flip":\n\n1/2 ÷ 1/4 = 1/2 × 4/1\n\nMultiply:\n= (1 × 4)/(2 × 1)\n= 4/2\n= 2\n\nAnswer: 2\n\nThis makes sense: How many 1/4s fit into 1/2? Two quarters make a half!',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: dividingFractions.id,
        question: 'Divide: 3/4 ÷ 2/3',
        solution: 'Keep the first fraction, change to multiplication, flip the second:\n\n3/4 ÷ 2/3 = 3/4 × 3/2\n\nMultiply numerators and denominators:\n= (3 × 3)/(4 × 2)\n= 9/8\n\nConvert to mixed number:\n= 1 1/8\n\nAnswer: 1 1/8 or 9/8',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: dividingFractions.id,
        question: 'A recipe calls for 2/3 cup of flour. If you want to make 1/4 of the recipe, how much flour do you need?',
        solution: 'We need to find 1/4 of 2/3, which means:\n\n2/3 ÷ 4 = 2/3 ÷ 4/1\n\nKeep, Change, Flip:\n= 2/3 × 1/4\n\nMultiply:\n= (2 × 1)/(3 × 4)\n= 2/12\n\nSimplify:\n= 1/6\n\nAnswer: 1/6 cup of flour',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: dividingFractions.id,
        question: 'Calculate: 2 1/2 ÷ 1 1/3',
        solution: 'Step 1: Convert mixed numbers to improper fractions\n\n2 1/2 = (2 × 2 + 1)/2 = 5/2\n1 1/3 = (1 × 3 + 1)/3 = 4/3\n\nStep 2: Divide using KCF\n5/2 ÷ 4/3 = 5/2 × 3/4\n\nStep 3: Multiply\n= (5 × 3)/(2 × 4)\n= 15/8\n\nStep 4: Convert to mixed number\n= 1 7/8\n\nAnswer: 1 7/8',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: dividingFractions.id,
        question: 'A carpenter has a board that is 5 1/4 feet long. He needs to cut it into pieces that are 3/4 foot long. How many pieces can he cut?',
        solution: 'Divide the total length by the piece length:\n\n5 1/4 ÷ 3/4\n\nStep 1: Convert to improper fraction\n5 1/4 = (5 × 4 + 1)/4 = 21/4\n\nStep 2: Divide\n21/4 ÷ 3/4 = 21/4 × 4/3\n\nStep 3: Simplify before multiplying\nNotice 4s cancel:\n= 21/1 × 1/3\n= 21/3\n= 7\n\nAnswer: 7 pieces\n\nCheck: 7 pieces × 3/4 foot = 21/4 = 5 1/4 feet ✓',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  // Add flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: dividingFractions.id,
        front: 'What does "Keep, Change, Flip" mean when dividing fractions?',
        back: 'Keep the first fraction, Change division to multiplication, Flip (use reciprocal of) the second fraction.\n\nExample: 2/3 ÷ 4/5 = 2/3 × 5/4',
        hint: 'It\'s a three-step method for division'
      },
      {
        topicId: dividingFractions.id,
        front: 'What is the reciprocal of 3/4?',
        back: '4/3\n\nThe reciprocal flips the fraction upside down. Multiply a number by its reciprocal and you always get 1.',
        hint: 'Flip the numerator and denominator'
      },
      {
        topicId: dividingFractions.id,
        front: 'Why does dividing by a fraction make the answer bigger?',
        back: 'Dividing by a fraction less than 1 means finding how many small pieces fit into something, which gives a larger number.\n\nExample: 2 ÷ 1/2 = 4 because four halves fit into 2 wholes.',
        hint: 'Think about how many 1/2s fit into 2'
      },
      {
        topicId: dividingFractions.id,
        front: 'Before dividing mixed numbers, what must you do first?',
        back: 'Convert them to improper fractions.\n\nExample: 2 1/3 becomes 7/3 before you can divide.',
        hint: 'Mixed numbers need to be converted first'
      },
      {
        topicId: dividingFractions.id,
        front: 'When can you simplify before multiplying in fraction division?',
        back: 'After you flip the second fraction, look for common factors between any numerator and any denominator. Cancel them before multiplying to make the work easier.\n\nExample: 6/7 ÷ 3/14 = 6/7 × 14/3 → The 6 and 3 share factor 3, and 7 and 14 share factor 7',
        hint: 'Look for common factors after flipping'
      },
      {
        topicId: dividingFractions.id,
        front: 'How do you divide a whole number by a fraction?',
        back: 'Write the whole number as a fraction over 1, then use Keep, Change, Flip.\n\nExample: 6 ÷ 2/3 = 6/1 ÷ 2/3 = 6/1 × 3/2 = 18/2 = 9',
        hint: 'Turn the whole number into a fraction first'
      }
    ]
  });

  // Topic 2: Decimal Operations
  console.log('Adding problems and flashcards for: decimal-operations');

  await prisma.exampleProblem.deleteMany({
    where: { topicId: decimalOperations.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: decimalOperations.id }
  });

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: decimalOperations.id,
        question: 'Add: 12.45 + 8.7',
        solution: 'Line up the decimal points:\n\n  12.45\n+  8.70\n-------\n  21.15\n\nRemember to add a zero as a placeholder in 8.7 to make it 8.70.\n\nAnswer: 21.15',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: decimalOperations.id,
        question: 'Subtract: 15.6 - 7.82',
        solution: 'Line up the decimal points and add a zero:\n\n  15.60\n-  7.82\n-------\n   7.78\n\nBorrow as needed:\n- From the tenths place: 6 becomes 5, and we have 10 hundredths\n- 10 - 2 = 8 hundredths\n- 5 - 8 requires borrowing: 15 - 8 = 7 tenths\n- 4 - 7 requires borrowing: 14 - 7 = 7 ones\n\nAnswer: 7.78',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: decimalOperations.id,
        question: 'Multiply: 3.6 × 2.4',
        solution: 'Step 1: Multiply as if they were whole numbers\n36 × 24 = 864\n\nStep 2: Count decimal places\n- 3.6 has 1 decimal place\n- 2.4 has 1 decimal place\n- Total: 1 + 1 = 2 decimal places\n\nStep 3: Place the decimal point\n864 → 8.64 (move 2 places from right)\n\nAnswer: 8.64',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: decimalOperations.id,
        question: 'Divide: 7.2 ÷ 0.3',
        solution: 'Method: Make the divisor a whole number\n\nStep 1: Multiply both by 10 to eliminate decimal in divisor\n7.2 ÷ 0.3 = 72 ÷ 3\n\nStep 2: Divide\n72 ÷ 3 = 24\n\nAnswer: 24\n\nCheck: 24 × 0.3 = 7.2 ✓',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: decimalOperations.id,
        question: 'A runner completes 4.75 km on Monday, 6.8 km on Wednesday, and 5.25 km on Friday. What is the total distance run? If she wants to run 20 km total for the week, how much more does she need to run?',
        solution: 'Part 1: Find the total so far\n4.75 + 6.8 + 5.25\n\nLine up decimals:\n  4.75\n  6.80\n+ 5.25\n------\n 16.80 km\n\nPart 2: Find remaining distance\n20 - 16.80\n\n 20.00\n-16.80\n------\n  3.20 km\n\nAnswer: She has run 16.80 km and needs to run 3.20 km more (or 3.2 km).',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: decimalOperations.id,
        front: 'What\'s the most important rule when adding or subtracting decimals?',
        back: 'Line up the decimal points! This ensures you\'re adding tenths to tenths, hundredths to hundredths, etc.\n\nUse zeros as placeholders if needed.',
        hint: 'Think about keeping place values aligned'
      },
      {
        topicId: decimalOperations.id,
        front: 'How do you know where to place the decimal point when multiplying decimals?',
        back: 'Count the total number of decimal places in BOTH factors, then place the decimal that many places from the right in your answer.\n\nExample: 1.2 (1 place) × 3.45 (2 places) = 4.140 (3 places)',
        hint: 'Count decimal places in both numbers'
      },
      {
        topicId: decimalOperations.id,
        front: 'When dividing decimals, what should you do with the divisor?',
        back: 'Make the divisor a whole number by moving the decimal point to the right. Move the decimal point in the dividend the same number of places.\n\nExample: 4.2 ÷ 0.7 becomes 42 ÷ 7',
        hint: 'You want the divisor to be a whole number'
      },
      {
        topicId: decimalOperations.id,
        front: 'What is 3.5 × 10? What pattern do you notice?',
        back: '35\n\nWhen multiplying by 10, move the decimal point 1 place to the RIGHT.\n\nPattern: ×10 → move right 1, ×100 → move right 2, ×1000 → move right 3',
        hint: 'Multiplying by 10 is a shortcut'
      },
      {
        topicId: decimalOperations.id,
        front: 'What is 45.6 ÷ 10? What pattern do you notice?',
        back: '4.56\n\nWhen dividing by 10, move the decimal point 1 place to the LEFT.\n\nPattern: ÷10 → move left 1, ÷100 → move left 2, ÷1000 → move left 3',
        hint: 'Dividing by 10 is also a shortcut'
      },
      {
        topicId: decimalOperations.id,
        front: 'How can you estimate 4.8 × 6.2 before calculating?',
        back: 'Round to whole numbers: 5 × 6 = 30\n\nThe actual answer (29.76) should be close to 30. Use estimation to check if your answer is reasonable!',
        hint: 'Round to the nearest whole numbers'
      }
    ]
  });

  // Topic 3: Writing Expressions
  console.log('Adding problems and flashcards for: writing-expressions');

  await prisma.exampleProblem.deleteMany({
    where: { topicId: writingExpressions.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: writingExpressions.id }
  });

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: writingExpressions.id,
        question: 'Write an expression for: "a number n increased by 7"',
        solution: '"Increased by" means addition.\n\nExpression: n + 7\n\nAlternate form: 7 + n (order doesn\'t matter for addition)\n\nAnswer: n + 7',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: writingExpressions.id,
        question: 'Write an expression for: "the product of 5 and x"',
        solution: '"Product" means multiplication.\n\nExpression: 5 × x\n\nIn algebra, we usually write: 5x (no multiplication symbol needed)\n\nAnswer: 5x',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: writingExpressions.id,
        question: 'Write an expression for: "8 less than a number y"',
        solution: 'BE CAREFUL! "Less than" means subtraction, but the order is reversed.\n\n"8 less than y" means: y - 8 (not 8 - y!)\n\nThink: "y decreased by 8" or "start with y, then subtract 8"\n\nAnswer: y - 8',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: writingExpressions.id,
        question: 'Write an expression for: "the quotient of x and 3, increased by 10"',
        solution: 'Break it down:\n\nStep 1: "quotient of x and 3" → x ÷ 3 or x/3\n\nStep 2: "increased by 10" → add 10\n\nCombine: x/3 + 10 or (x ÷ 3) + 10\n\nAnswer: x/3 + 10',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: writingExpressions.id,
        question: 'Sarah has some money. Her sister has twice as much as Sarah plus $5 more. If Sarah has d dollars, write an expression for how much money her sister has.',
        solution: 'Break down "twice as much as Sarah plus $5 more":\n\nStep 1: Sarah has d dollars\n\nStep 2: "Twice as much as Sarah" → 2d or 2 × d\n\nStep 3: "Plus $5 more" → add 5\n\nCombine: 2d + 5\n\nAnswer: 2d + 5 dollars\n\nExample check: If Sarah has $10, her sister has 2(10) + 5 = $25',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: writingExpressions.id,
        front: 'What operation does "sum" indicate?',
        back: 'Addition (+)\n\nExample: "The sum of x and 8" means x + 8',
        hint: 'Think about adding numbers together'
      },
      {
        topicId: writingExpressions.id,
        front: 'What operation does "product" indicate?',
        back: 'Multiplication (×)\n\nExample: "The product of 6 and n" means 6n or 6 × n',
        hint: 'Think about multiplying'
      },
      {
        topicId: writingExpressions.id,
        front: 'What operation does "quotient" indicate?',
        back: 'Division (÷)\n\nExample: "The quotient of y and 5" means y ÷ 5 or y/5',
        hint: 'Think about dividing'
      },
      {
        topicId: writingExpressions.id,
        front: 'What\'s the difference between "5 less than x" and "5 less x"?',
        back: '"5 less than x" = x - 5 (reverse the order!)\n"5 less x" or "5 minus x" = 5 - x\n\n"Less than" reverses the order, while "minus" or "less" (without "than") keeps the order.',
        hint: 'Pay attention to "than" - it reverses!'
      },
      {
        topicId: writingExpressions.id,
        front: 'How do you write "a number divided by 4" as an expression?',
        back: 'n ÷ 4 or n/4\n\nBoth forms are correct. The fraction form is often preferred in algebra.',
        hint: 'Use a variable for "a number"'
      },
      {
        topicId: writingExpressions.id,
        front: 'What does "twice a number" mean in algebra?',
        back: '2n or 2 × n\n\n"Twice" means "2 times" or "multiply by 2"',
        hint: 'Twice = 2 times'
      }
    ]
  });

  console.log('\n✨ Successfully added practice problems and flashcards to 3 topics!');
}

addGrade6ProblemsAndFlashcardsBatch1()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
