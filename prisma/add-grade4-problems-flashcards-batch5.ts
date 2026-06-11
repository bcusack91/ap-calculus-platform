import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 4 Math topics (Batch 5)...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  // Topic 1: Creating and Analyzing Data
  const dataAnalysisTopic = await prisma.topic.findFirst({
    where: {
      slug: 'creating-analyzing-data',
      category: { courseId: grade4Course.id }
    }
  });

  if (dataAnalysisTopic) {
    // Add practice problems for Creating and Analyzing Data
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: dataAnalysisTopic.id,
          question: 'Create a tally chart for this data: red, blue, red, green, blue, red, blue, blue. Which color appears most?',
          solution: 'Make a tally chart:\n\n| Color | Tally | Total |\n|-------|-------|-------|\n| Red   | III   | 3     |\n| Blue  | IIII  | 4     |\n| Green | I     | 1     |\n\nThe MOST common color: **Blue** (4 times) ✓\n\nBlue is the mode (most frequent value)!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          question: 'Survey results show: Pizza-8, Tacos-5, Burgers-6, Pasta-3. What is the range of this data?',
          solution: 'Range = Highest value - Lowest value\n\nHighest: Pizza = 8\nLowest: Pasta = 3\n\nRange = 8 - 3 = 5\n\n**Answer: Range = 5** ✓\n\nThis tells us the data is spread across 5 units!',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          question: 'Students recorded hours of sleep: 8, 9, 8, 10, 8, 9, 8, 7. Create a frequency table and find the mode.',
          solution: 'Frequency table:\n\n| Hours | Frequency |\n|-------|----------|\n| 7     | 1        |\n| 8     | 4        |\n| 9     | 2        |\n| 10    | 1        |\n\n**Mode = 8 hours** ✓\n\n8 appears 4 times (most frequent)\n\nMost students got 8 hours of sleep!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          question: 'Create a line plot for shoe sizes: 4, 5, 4, 6, 5, 5, 4, 5, 6. What conclusion can you draw?',
          solution: 'Line plot:\n```\n        X\n    X   X   X\n    X   X   X\n   ─┼───┼───┼──\n    4   5   6\n```\n\nData count:\n- Size 4: 3 students (XXX)\n- Size 5: 4 students (XXXX)\n- Size 6: 2 students (XX)\n\n**Conclusions:**\n- Mode = Size 5 (most common)\n- Range = 6 - 4 = 2\n- Most students wear sizes 4 or 5\n- If ordering shoes, get more size 5! ✓',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          question: 'You collect data on favorite pets: Dog-12, Cat-9, Fish-3, Bird-2. Make a bar graph. What question does this answer?',
          solution: 'Bar graph (vertical):\n```\n   12|  ▓▓▓\n   11|  ▓▓▓\n   10|  ▓▓▓\n    9|  ▓▓▓ ▓▓▓\n    8|  ▓▓▓ ▓▓▓\n    7|  ▓▓▓ ▓▓▓\n    6|  ▓▓▓ ▓▓▓\n    5|  ▓▓▓ ▓▓▓\n    4|  ▓▓▓ ▓▓▓\n    3|  ▓▓▓ ▓▓▓ ▓▓▓\n    2|  ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓\n    1|  ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓\n    0|_____________________\n       Dog Cat Fish Bird\n```\n\n**Questions it answers:**\n- What is the most popular pet? (Dog)\n- What is the least popular? (Bird)\n- How many more like dogs than cats? (12-9=3)\n- Total students surveyed? (12+9+3+2=26) ✓',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Creating and Analyzing Data
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: dataAnalysisTopic.id,
          front: 'What is data?',
          back: 'Information we collect by counting, measuring, or asking questions',
          hint: 'Think: survey answers, measurements, observations',
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          front: 'What are tally marks used for?',
          back: 'To quickly count and record data as you collect it',
          hint: 'IIII = 5 (cross through groups of 5)',
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          front: 'What is the mode in a data set?',
          back: 'The value that appears most often (most frequent)',
          hint: 'Mode = Most',
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          front: 'What is the range in a data set?',
          back: 'The difference between the highest and lowest values (spread)',
          hint: 'Range = Highest - Lowest',
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          front: 'What is a frequency table?',
          back: 'A table that shows how often each value appears in the data',
          hint: 'Frequency = how many times',
          isPremium: false
        },
        {
          topicId: dataAnalysisTopic.id,
          front: 'What are the steps for working with data?',
          back: '1. Ask a question 2. Collect data 3. Organize it 4. Display it (graph) 5. Analyze 6. Answer question',
          hint: 'Ask → Collect → Organize → Display → Analyze → Answer',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: creating-analyzing-data');
  }

  // Topic 2: Multiplying Decimals (from Grade 5 batch we did earlier)
  const multiplyDecimalsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'multiplying-decimals',
      category: { 
        course: { slug: 'grade-5-math' }
      }
    }
  });

  if (multiplyDecimalsTopic) {
    // Add practice problems for Multiplying Decimals
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: multiplyDecimalsTopic.id,
          question: 'Multiply: 0.4 × 3 = ?',
          solution: 'Step 1: Multiply ignoring the decimal\n4 × 3 = 12\n\nStep 2: Count decimal places\n0.4 has 1 decimal place\n3 has 0 decimal places\nTotal: 1 decimal place\n\nStep 3: Put decimal in answer\n12 → 1.2\n\n**Answer: 1.2** ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          question: 'Multiply: 2.5 × 4 = ?',
          solution: 'Step 1: Ignore decimals and multiply\n25 × 4 = 100\n\nStep 2: Count decimal places\n2.5 has 1 decimal place\n4 has 0 decimal places\nTotal: 1 decimal place\n\nStep 3: Place the decimal\n100 → 10.0 = 10\n\n**Answer: 10** ✓',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          question: 'Multiply: 1.2 × 0.5 = ?',
          solution: 'Step 1: Multiply without decimals\n12 × 5 = 60\n\nStep 2: Count decimal places\n1.2 has 1 decimal place\n0.5 has 1 decimal place\nTotal: 2 decimal places\n\nStep 3: Place decimal\n60 → 0.60 = 0.6\n\n**Answer: 0.6** ✓',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          question: 'A pencil costs $0.75. How much do 6 pencils cost?',
          solution: 'Multiply: 0.75 × 6\n\nStep 1: Multiply ignoring decimal\n75 × 6 = 450\n\nStep 2: Count decimal places\n0.75 has 2 decimal places\n6 has 0 decimal places\nTotal: 2 decimal places\n\nStep 3: Place decimal\n450 → 4.50\n\n**Answer: $4.50** ✓\n\n6 pencils cost $4.50!',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          question: 'Multiply: 3.25 × 2.4 = ?',
          solution: 'Step 1: Multiply without decimals\n  325\n×  24\n------\n 1300  (325 × 4)\n 6500  (325 × 20)\n------\n 7800\n\nStep 2: Count decimal places\n3.25 has 2 decimal places\n2.4 has 1 decimal place\nTotal: 3 decimal places\n\nStep 3: Place decimal\n7800 → 7.800 = 7.8\n\n**Answer: 7.8** ✓',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Multiplying Decimals
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: multiplyDecimalsTopic.id,
          front: 'What are the steps to multiply decimals?',
          back: '1. Multiply ignoring decimals 2. Count total decimal places 3. Put decimal in answer',
          hint: 'Multiply, count, place!',
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          front: 'How do you count decimal places in the answer?',
          back: 'Add the number of decimal places from BOTH factors',
          hint: '0.5 (1 place) × 0.3 (1 place) = answer has 2 places',
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          front: 'What is 0.5 × 6?',
          back: '3.0 or 3 (5 × 6 = 30, then place 1 decimal: 3.0)',
          hint: 'Half of 6 is 3',
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          front: 'What is 0.1 × 0.1?',
          back: '0.01 (1 × 1 = 1, then 2 decimal places: 0.01)',
          hint: 'Count 2 decimal places total',
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          front: 'Can you multiply decimals like whole numbers?',
          back: 'YES! Just ignore decimals, multiply, then count decimal places for the answer',
          hint: 'Treat them as whole numbers first',
          isPremium: false
        },
        {
          topicId: multiplyDecimalsTopic.id,
          front: 'What is 2.5 × 4?',
          back: '10 (25 × 4 = 100, then 1 decimal place: 10.0)',
          hint: 'Think: 2.5 + 2.5 + 2.5 + 2.5',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: multiplying-decimals (Grade 5)');
  }

  // Topic 3: Dividing Decimals (from Grade 5 batch we did earlier)
  const divideDecimalsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'dividing-decimals',
      category: { 
        course: { slug: 'grade-5-math' }
      }
    }
  });

  if (divideDecimalsTopic) {
    // Add practice problems for Dividing Decimals
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: divideDecimalsTopic.id,
          question: 'Divide: 4.8 ÷ 2 = ?',
          solution: 'Think: Divide like whole numbers, keep decimal in place\n\n  2.4\n  ___\n2 | 4.8\n  - 4\n  ___\n    08\n  -  8\n  ___\n     0\n\nThe decimal in the answer goes straight up from the decimal in 4.8!\n\n**Answer: 2.4** ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          question: 'Divide: 6.3 ÷ 3 = ?',
          solution: 'Divide, keeping the decimal aligned:\n\n  2.1\n  ___\n3 | 6.3\n  - 6\n  ___\n    03\n  -  3\n  ___\n     0\n\n**Answer: 2.1** ✓\n\nCheck: 2.1 × 3 = 6.3 ✓',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          question: 'You have $12.50 to split equally among 5 friends. How much does each friend get?',
          solution: 'Divide: 12.50 ÷ 5\n\n  2.50\n  _____\n5 | 12.50\n  - 10\n  _____\n     25\n   - 25\n  _____\n      00\n\n**Answer: $2.50 each** ✓\n\nEach friend gets $2.50!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          question: 'Divide: 15.6 ÷ 4 = ?',
          solution: 'Divide step by step:\n\n  3.9\n  _____\n4 | 15.6\n  - 12   (4 × 3)\n  _____\n     36\n   - 36  (4 × 9)\n  _____\n      0\n\n**Answer: 3.9** ✓\n\nCheck: 3.9 × 4 = 15.6 ✓',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          question: 'Divide: 8.75 ÷ 5 = ?',
          solution: 'Divide carefully:\n\n  1.75\n  _____\n5 | 8.75\n  - 5     (5 × 1)\n  _____\n    37\n  - 35    (5 × 7)\n  _____\n     25\n   - 25   (5 × 5)\n  _____\n      0\n\n**Answer: 1.75** ✓\n\nThe decimal stays aligned throughout!',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Dividing Decimals
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: divideDecimalsTopic.id,
          front: 'What is the key rule for dividing decimals by whole numbers?',
          back: 'Divide normally, and keep the decimal point in the same place (straight up in the answer)',
          hint: 'The decimal goes straight up!',
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          front: 'What is 8.4 ÷ 2?',
          back: '4.2 (divide like 84 ÷ 2 = 42, keep decimal in place)',
          hint: 'Half of 8.4',
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          front: 'Can you check your decimal division answer?',
          back: 'YES! Multiply the answer by the divisor - you should get the original number',
          hint: 'Use multiplication to check',
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          front: 'What is 12.5 ÷ 5?',
          back: '2.5 (divide 125 by 5 = 25, then place decimal: 2.5)',
          hint: 'Think: How many 5s in 12.5?',
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          front: 'Where does the decimal point go in the quotient (answer)?',
          back: 'Directly above the decimal point in the dividend (the number being divided)',
          hint: 'It goes straight up!',
          isPremium: false
        },
        {
          topicId: divideDecimalsTopic.id,
          front: 'What is 9.6 ÷ 3?',
          back: '3.2 (divide 96 by 3 = 32, keep decimal in place)',
          hint: 'One third of 9.6',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: dividing-decimals (Grade 5)');
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
