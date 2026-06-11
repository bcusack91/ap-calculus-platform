import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function addGrade6ProblemsAndFlashcardsBatch3Final() {
  console.log('Adding practice problems and flashcards to Grade 6 Math - Batch 3 (Final)...\n');

  // Get topic ID
  const measuresCenterVariability = await prisma.topic.findFirst({
    where: { slug: 'measures-center-variability' }
  });

  if (!measuresCenterVariability) {
    throw new Error('Could not find topic: measures-center-variability');
  }

  // Topic: Measures of Center and Variability
  console.log('Adding problems and flashcards for: measures-center-variability');

  await prisma.exampleProblem.deleteMany({
    where: { topicId: measuresCenterVariability.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: measuresCenterVariability.id }
  });

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: measuresCenterVariability.id,
        question: 'Find the mean of: 8, 12, 15, 10, 5',
        solution: 'Mean = Sum of all values ÷ Number of values\n\nStep 1: Add all values\n8 + 12 + 15 + 10 + 5 = 50\n\nStep 2: Count how many values\n5 values\n\nStep 3: Divide\nMean = 50 ÷ 5 = 10\n\nAnswer: 10',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: measuresCenterVariability.id,
        question: 'Find the median of: 7, 2, 9, 4, 5, 8, 3',
        solution: 'Step 1: Put in order from least to greatest\n2, 3, 4, 5, 7, 8, 9\n\nStep 2: Find the middle value\n7 values total → middle is the 4th value\n2, 3, 4, [5], 7, 8, 9\n\nAnswer: Median = 5',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: measuresCenterVariability.id,
        question: 'Find the mean, median, and mode of: 6, 8, 8, 10, 12, 8, 14',
        solution: 'MEAN:\nSum: 6 + 8 + 8 + 10 + 12 + 8 + 14 = 66\nCount: 7 values\nMean = 66 ÷ 7 ≈ 9.43\n\nMEDIAN:\nOrdered: 6, 8, 8, 8, 10, 12, 14\nMiddle value (4th): 8\n\nMODE:\nMost frequent value: 8 (appears 3 times)\n\nAnswers:\n• Mean ≈ 9.43\n• Median = 8\n• Mode = 8',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: measuresCenterVariability.id,
        question: 'Find the range and interquartile range (IQR) of: 5, 8, 12, 15, 18, 20, 22, 25, 30',
        solution: 'RANGE:\nRange = Max - Min = 30 - 5 = 25\n\nIQR (Interquartile Range):\n\nStep 1: Find median (Q2)\nOrdered: 5, 8, 12, 15, [18], 20, 22, 25, 30\nQ2 = 18\n\nStep 2: Find Q1 (median of lower half)\nLower half: 5, 8, 12, 15\nQ1 = (8 + 12)/2 = 10\n\nStep 3: Find Q3 (median of upper half)\nUpper half: 20, 22, 25, 30\nQ3 = (22 + 25)/2 = 23.5\n\nStep 4: Calculate IQR\nIQR = Q3 - Q1 = 23.5 - 10 = 13.5\n\nAnswers:\n• Range = 25\n• IQR = 13.5',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: measuresCenterVariability.id,
        question: 'Two students took 5 math quizzes each:\nStudent A: 85, 87, 86, 88, 84\nStudent B: 70, 90, 80, 95, 75\n\na) Find the mean score for each student.\nb) Find the range for each student.\nc) Which student is more consistent? Explain.',
        solution: 'STUDENT A:\nMean = (85 + 87 + 86 + 88 + 84) ÷ 5 = 430 ÷ 5 = 86\nRange = 88 - 84 = 4\n\nSTUDENT B:\nMean = (70 + 90 + 80 + 95 + 75) ÷ 5 = 410 ÷ 5 = 82\nRange = 95 - 70 = 25\n\nANALYSIS:\na) Student A mean = 86, Student B mean = 82\n\nb) Student A range = 4, Student B range = 25\n\nc) Student A is MORE CONSISTENT because their range is much smaller (4 vs 25). Their scores are clustered close together (84-88), while Student B\'s scores vary widely (70-95). A smaller range means less variability and more consistency.\n\nAnswers:\na) A: 86, B: 82\nb) A: 4, B: 25\nc) Student A is more consistent (smaller range/variability)',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: measuresCenterVariability.id,
        front: 'What is the mean and how do you calculate it?',
        back: 'The MEAN is the average.\n\nFormula: Mean = (Sum of all values) ÷ (Number of values)\n\nExample: 4, 6, 8 → (4+6+8) ÷ 3 = 18 ÷ 3 = 6',
        hint: 'Add them all up and divide by how many there are'
      },
      {
        topicId: measuresCenterVariability.id,
        front: 'What is the median and how do you find it?',
        back: 'The MEDIAN is the middle value when data is in order.\n\nOdd number of values: Pick the middle one\nEven number of values: Average the two middle ones\n\nExample: 2, 5, 7, 9, 12 → Median = 7',
        hint: 'Order first, then find the middle'
      },
      {
        topicId: measuresCenterVariability.id,
        front: 'What is the mode?',
        back: 'The MODE is the value that appears most often.\n\nExample: 3, 5, 5, 7, 9, 5 → Mode = 5\n\nNote: There can be no mode, one mode, or multiple modes (bimodal).',
        hint: 'Most frequent value'
      },
      {
        topicId: measuresCenterVariability.id,
        front: 'When should you use median instead of mean?',
        back: 'Use MEDIAN when you have OUTLIERS (extreme values).\n\nExample: 10, 12, 11, 13, 100\nMean = 29.2 (pulled up by 100)\nMedian = 12 (better represents typical value)\n\nMedian is resistant to outliers!',
        hint: 'Median is better when there are extreme values'
      },
      {
        topicId: measuresCenterVariability.id,
        front: 'What is the range and how do you calculate it?',
        back: 'The RANGE measures spread.\n\nFormula: Range = Maximum value - Minimum value\n\nExample: 5, 8, 12, 20, 25 → Range = 25 - 5 = 20\n\nLarger range = more spread out',
        hint: 'Biggest minus smallest'
      },
      {
        topicId: measuresCenterVariability.id,
        front: 'What is the IQR (Interquartile Range)?',
        back: 'The IQR is the range of the middle 50% of data.\n\nFormula: IQR = Q3 - Q1\n(Third quartile minus First quartile)\n\nIQR is NOT affected by outliers, unlike range!\n\nIt tells you how spread out the middle of your data is.',
        hint: 'The spread of the middle half of the data'
      }
    ]
  });

  console.log('\n✨ Successfully added practice problems and flashcards to 1 topic!');
  console.log('\n🎉 Grade 6 Math is now 100% complete!');
  console.log('   ✓ All 7 topics have comprehensive content');
  console.log('   ✓ All 7 topics have practice problems');
  console.log('   ✓ All 7 topics have flashcards');
}

addGrade6ProblemsAndFlashcardsBatch3Final()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
