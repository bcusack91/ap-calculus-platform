import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 4 Math topics (Batch 4)...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  // Topic 1: Adding and Subtracting Decimals
  const addSubtractDecimalsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'adding-subtracting-decimals',
      category: { courseId: grade4Course.id }
    }
  });

  if (addSubtractDecimalsTopic) {
    // Add practice problems for Adding and Subtracting Decimals
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: addSubtractDecimalsTopic.id,
          question: 'Add: 3.4 + 2.5 = ?',
          solution: 'Step 1: Line up the decimal points\n  3.4\n+ 2.5\n------\n\nStep 2: Add like whole numbers\n  3.4\n+ 2.5\n------\n  5.9\n\nStep 3: Bring down the decimal point\n\n**Answer: 5.9** ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          question: 'Subtract: 8.7 - 3.2 = ?',
          solution: 'Step 1: Line up the decimal points\n  8.7\n- 3.2\n------\n\nStep 2: Subtract like whole numbers\n  8.7\n- 3.2\n------\n  5.5\n\nStep 3: Bring down the decimal point\n\n**Answer: 5.5** ✓',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          question: 'Add: 12.45 + 7.8 = ?',
          solution: 'Step 1: Line up the decimal points (add zero as placeholder!)\n  12.45\n+  7.80\n-------\n\nStep 2: Add from right to left\n  12.45\n+  7.80\n-------\n  20.25\n\nStep 3: Bring down the decimal point\n\n**Answer: 20.25** ✓\n\nRemember: 7.8 = 7.80 (same value!)',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          question: 'Subtract: 15.6 - 8.75 = ?',
          solution: 'Step 1: Line up decimals and add zero placeholder\n  15.60\n-  8.75\n-------\n\nStep 2: Subtract (need to regroup!)\n  15.60\n-  8.75\n-------\n\nFrom right: Can\'t do 0 - 5, so borrow!\n  15.5¹⁰  (borrow from 6)\n-  8.75\n-------\n   6.85\n\n**Answer: 6.85** ✓',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          question: 'You have $20.00. You buy a toy for $12.75. How much money do you have left?',
          solution: 'Subtract: 20.00 - 12.75\n\nLine up the decimals:\n  20.00\n- 12.75\n-------\n\nSubtract (with regrouping):\n  20.⁹⁹⁰  (borrow twice!)\n  1 10 10\n- 12.75\n-------\n   7.25\n\n**Answer: $7.25** ✓\n\nYou have $7.25 left!',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Adding and Subtracting Decimals
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: addSubtractDecimalsTopic.id,
          front: 'What is the GOLDEN RULE for adding and subtracting decimals?',
          back: 'LINE UP THE DECIMAL POINTS!',
          hint: 'Everything depends on this step!',
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          front: 'What do you do if the decimals have different numbers of digits?',
          back: 'Add zeros as placeholders to make them the same length',
          hint: '7.8 becomes 7.80',
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          front: 'What is 5.6 + 3.2?',
          back: '8.8 (line up decimals and add)',
          hint: '6 + 2 = 8, 5 + 3 = 8',
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          front: 'What is 9.5 - 4.3?',
          back: '5.2 (line up decimals and subtract)',
          hint: '5 - 3 = 2, 9 - 4 = 5',
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          front: 'Can you add/subtract decimals like whole numbers?',
          back: 'YES! Just make sure decimal points are lined up first',
          hint: 'Line up, then follow regular addition/subtraction rules',
          isPremium: false
        },
        {
          topicId: addSubtractDecimalsTopic.id,
          front: 'Where does the decimal point go in the answer?',
          back: 'Directly below where the decimal points are lined up in the problem',
          hint: 'It goes straight down!',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: adding-subtracting-decimals');
  }

  // Topic 2: Converting Units of Measurement
  const convertingUnitsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'converting-units-measurement',
      category: { courseId: grade4Course.id }
    }
  });

  if (convertingUnitsTopic) {
    // Add practice problems for Converting Units
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: convertingUnitsTopic.id,
          question: 'Convert: 5 feet = ___ inches',
          solution: 'We know: 1 foot = 12 inches\n\nTo find 5 feet:\n5 feet × 12 inches/foot = 60 inches\n\nOr think: Add 12 five times:\n12 + 12 + 12 + 12 + 12 = 60\n\n**Answer: 60 inches** ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          question: 'Convert: 48 inches = ___ feet',
          solution: 'We know: 12 inches = 1 foot\n\nGoing from SMALL to BIG → DIVIDE\n\n48 inches ÷ 12 = 4 feet\n\nCheck: 4 × 12 = 48 ✓\n\n**Answer: 4 feet** ✓',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          question: 'Convert: 3 yards = ___ feet',
          solution: 'We know: 1 yard = 3 feet\n\nGoing from BIG to SMALL → MULTIPLY\n\n3 yards × 3 feet/yard = 9 feet\n\n**Answer: 9 feet** ✓\n\nRemember: A yard is about 3 big steps!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          question: 'A recipe needs 2 cups of milk. How many pints is that?',
          solution: 'We know: 2 cups = 1 pint\n\nWe have: 2 cups\n\nGoing from SMALL to BIG → DIVIDE\n2 cups ÷ 2 = 1 pint\n\n**Answer: 1 pint** ✓\n\nYou need exactly 1 pint of milk!',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          question: 'A car weighs 4,000 pounds. How many tons is that?',
          solution: 'We know: 1 ton = 2,000 pounds\n\nGoing from SMALL to BIG → DIVIDE\n\n4,000 pounds ÷ 2,000 = 2 tons\n\nCheck: 2 tons × 2,000 = 4,000 pounds ✓\n\n**Answer: 2 tons** ✓\n\nThe car weighs 2 tons!',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Converting Units
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: convertingUnitsTopic.id,
          front: 'When converting from a BIGGER unit to a SMALLER unit, do you multiply or divide?',
          back: 'MULTIPLY (you\'ll get more of the smaller units)',
          hint: '1 foot = 12 inches (multiply by 12)',
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          front: 'When converting from a SMALLER unit to a BIGGER unit, do you multiply or divide?',
          back: 'DIVIDE (you\'ll get fewer of the bigger units)',
          hint: '12 inches = 1 foot (divide by 12)',
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          front: 'How many inches are in 1 foot?',
          back: '12 inches',
          hint: 'Think of a ruler!',
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          front: 'How many feet are in 1 yard?',
          back: '3 feet',
          hint: 'A yard is about 3 big steps',
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          front: 'How many cups are in 1 pint?',
          back: '2 cups',
          hint: 'Remember: 2 Cups in a Pint (C in P)',
          isPremium: false
        },
        {
          topicId: convertingUnitsTopic.id,
          front: 'How many pounds are in 1 ton?',
          back: '2,000 pounds',
          hint: 'A ton is VERY heavy!',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: converting-units-measurement');
  }

  // Topic 3: Reading Bar Graphs and Line Plots
  const readingGraphsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'reading-bar-graphs-line-plots',
      category: { courseId: grade4Course.id }
    }
  });

  if (readingGraphsTopic) {
    // Add practice problems for Reading Graphs
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: readingGraphsTopic.id,
          question: 'A bar graph shows: Soccer=10, Baseball=7, Basketball=9. Which sport is most popular?',
          solution: 'Compare the values:\n- Soccer: 10 students\n- Baseball: 7 students\n- Basketball: 9 students\n\nThe MOST popular = HIGHEST number\n\n10 > 9 > 7\n\n**Answer: Soccer** ✓\n\nSoccer has the tallest bar (most students)!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          question: 'On a bar graph with a scale by 2s, a bar reaches the 4th line. What is the value? (Scale starts at 0: 0, 2, 4, 6, 8...)',
          solution: 'Scale goes by 2s: 0, 2, 4, 6, 8, 10...\n\nCount the lines:\n- 1st line: 2\n- 2nd line: 4\n- 3rd line: 6\n- 4th line: 8\n\n**Answer: 8** ✓\n\nAlways check what the scale counts by!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          question: 'A line plot shows test scores:\n7: XX\n8: XXXX\n9: XXX\n10: X\nHow many students took the test?',
          solution: 'Count ALL the Xs:\n\nScore 7: 2 students (XX)\nScore 8: 4 students (XXXX)\nScore 9: 3 students (XXX)\nScore 10: 1 student (X)\n\nTotal: 2 + 4 + 3 + 1 = 10 students\n\n**Answer: 10 students** ✓\n\nEach X = one student!',
          difficulty: 'EASY',
          order: 3,
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          question: 'On the same line plot above, what was the most common score (mode)?',
          solution: 'Look for the score with the MOST Xs:\n\nScore 7: XX (2)\nScore 8: XXXX (4) ← Most!\nScore 9: XXX (3)\nScore 10: X (1)\n\nThe tallest stack is at 8 with 4 Xs.\n\n**Answer: 8 (the mode)** ✓\n\nMode = most common value',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          question: 'A bar graph shows favorite colors. Red=15, Blue=12, Green=8. How many MORE students chose Red than Green?',
          solution: 'Find the difference:\n\nRed: 15 students\nGreen: 8 students\n\nSubtract: 15 - 8 = 7\n\n**Answer: 7 more students** ✓\n\nRed is more popular than Green by 7 students!',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Reading Graphs
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: readingGraphsTopic.id,
          front: 'What is a bar graph?',
          back: 'A graph that uses bars (rectangles) to show and compare data',
          hint: 'The height shows the amount',
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          front: 'What is a line plot?',
          back: 'A graph that uses Xs (or dots) on a number line to show data',
          hint: 'Each X = one piece of data',
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          front: 'What is the "scale" on a graph?',
          back: 'The numbers that show how much each mark represents (could count by 1s, 2s, 5s, 10s, etc.)',
          hint: 'Always check the scale first!',
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          front: 'How do you find which category is "most" on a bar graph?',
          back: 'Look for the TALLEST bar',
          hint: 'Tallest = most',
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          front: 'What is the mode on a line plot?',
          back: 'The number with the most Xs (the tallest stack)',
          hint: 'Mode = most common value',
          isPremium: false
        },
        {
          topicId: readingGraphsTopic.id,
          front: 'What should you ALWAYS read first on any graph?',
          back: 'The TITLE and the LABELS (to know what the graph shows)',
          hint: 'Title tells you what it\'s about!',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: reading-bar-graphs-line-plots');
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
