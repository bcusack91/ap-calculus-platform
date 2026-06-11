import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 4 Math topics (Batch 3)...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  // Topic 1: Division with Remainders
  const divisionTopic = await prisma.topic.findFirst({
    where: {
      slug: 'division-with-remainders',
      category: { courseId: grade4Course.id }
    }
  });

  if (divisionTopic) {
    // Add practice problems for Division with Remainders
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: divisionTopic.id,
          question: 'Solve: 17 ÷ 5 = ?',
          solution: 'How many groups of 5 fit into 17?\n\n5 × 1 = 5\n5 × 2 = 10\n5 × 3 = 15 ✓ (closest without going over)\n5 × 4 = 20 (too big!)\n\n17 ÷ 5 = 3 R2\n\n**Check:**\n(5 × 3) + 2 = 15 + 2 = 17 ✓\n\n**Answer: 3 R2** (3 groups with 2 left over)',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          question: 'There are 23 students and each table seats 4 students. How many tables are needed?',
          solution: 'Divide: 23 ÷ 4\n\n4 × 5 = 20\n4 × 6 = 24 (too big)\n\n23 ÷ 4 = 5 R3\n\nThis means:\n- 5 full tables with 4 students each\n- 3 students left over\n\n**Important:** The 3 students need a table too!\n\n**Answer: 6 tables needed** ✓\n\nIn real life, we round UP because we can\'t leave students without a table!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          question: 'Solve: 45 ÷ 7 = ?',
          solution: 'How many 7s fit into 45?\n\n7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\n7 × 6 = 42 ✓ (closest!)\n7 × 7 = 49 (too big)\n\n45 - 42 = 3 (remainder)\n\n45 ÷ 7 = 6 R3\n\n**Check:** (7 × 6) + 3 = 42 + 3 = 45 ✓\n\n**Answer: 6 R3**',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          question: 'You have 50 cookies to pack into boxes of 8. How many full boxes can you make? How many cookies are left?',
          solution: 'Divide: 50 ÷ 8\n\n8 × 6 = 48 ✓ (closest without going over)\n8 × 7 = 56 (too big)\n\n50 - 48 = 2 (remainder)\n\n50 ÷ 8 = 6 R2\n\n**Answer:**\n- 6 full boxes ✓\n- 2 cookies left over ✓\n\nYou could eat those 2 cookies! 🍪🍪',
          difficulty: 'EASY',
          order: 4,
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          question: 'Solve using long division: 83 ÷ 9 = ?',
          solution: 'Long division:\n\n      9\n   ______\n 9 | 83\n   - 81  (9 × 9 = 81)\n   ____\n      2\n\nSteps:\n1. How many 9s in 83? Try 9\n2. 9 × 9 = 81 ✓\n3. 83 - 81 = 2\n4. 2 < 9, so 2 is the remainder\n\n**Answer: 9 R2** ✓\n\n**Check:** (9 × 9) + 2 = 81 + 2 = 83 ✓',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Division with Remainders
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: divisionTopic.id,
          front: 'What is a remainder?',
          back: 'The amount left over after dividing when the division isn\'t exact',
          hint: 'Think: 7 ÷ 2 = 3 R1 (1 left over)',
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          front: 'How do you write "17 divided by 5 equals 3 with remainder 2"?',
          back: '17 ÷ 5 = 3 R2',
          hint: 'R stands for remainder',
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          front: 'How do you check division with remainders?',
          back: '(divisor × quotient) + remainder = dividend',
          hint: 'Multiply back and add the remainder',
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          front: 'What must be true about the remainder?',
          back: 'The remainder must be LESS than the divisor',
          hint: 'If remainder ≥ divisor, you can divide again',
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          front: 'In a word problem, when do you round the answer UP?',
          back: 'When you need a whole item (like tables, boxes, or buses)',
          hint: 'You can\'t have half a table!',
          isPremium: false
        },
        {
          topicId: divisionTopic.id,
          front: 'What is 25 ÷ 4?',
          back: '6 R1 (4 × 6 = 24, and 25 - 24 = 1)',
          hint: 'How many 4s fit in 25?',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: division-with-remainders');
  }

  // Topic 2: Adding Fractions with Like Denominators
  const addFractionsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'adding-fractions-like-denominators',
      category: { courseId: grade4Course.id }
    }
  });

  if (addFractionsTopic) {
    // Add practice problems for Adding Fractions
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: addFractionsTopic.id,
          question: 'Add: 2/8 + 3/8 = ?',
          solution: 'Same denominator (8) → Just add the numerators!\n\n2/8 + 3/8 = (2 + 3)/8 = 5/8\n\nThink of it as:\n- 2 slices of pizza + 3 slices of pizza = 5 slices\n- All slices are eighths\n\n**Answer: 5/8** ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          question: 'Add and simplify: 3/10 + 4/10 = ?',
          solution: 'Step 1: Add the numerators\n3/10 + 4/10 = 7/10\n\nStep 2: Check if we can simplify\n7 and 10 don\'t share common factors\n(7 is prime!)\n\n7/10 is already in simplest form ✓\n\n**Answer: 7/10** ✓',
          difficulty: 'EASY',
          order: 2,
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          question: 'Add and simplify: 2/6 + 3/6 = ?',
          solution: 'Step 1: Add the numerators\n2/6 + 3/6 = 5/6\n\nStep 2: Check if we can simplify\n5 and 6 don\'t share common factors\n\n5/6 is already in simplest form ✓\n\n**Answer: 5/6** ✓',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          question: 'Add and simplify: 4/12 + 6/12 = ?',
          solution: 'Step 1: Add the numerators\n4/12 + 6/12 = 10/12\n\nStep 2: Simplify (both divisible by 2)\n10/12 = 5/6\n\nOr divide by GCF:\n10 ÷ 2 = 5\n12 ÷ 2 = 6\n\n**Answer: 5/6** ✓\n\nAlways simplify to lowest terms!',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          question: 'Add and simplify: 5/8 + 7/8 = ?',
          solution: 'Step 1: Add the numerators\n5/8 + 7/8 = 12/8\n\nStep 2: We have an improper fraction!\n12/8 > 1 (numerator > denominator)\n\nStep 3: Convert to mixed number\n12 ÷ 8 = 1 R4\n12/8 = 1 4/8\n\nStep 4: Simplify 4/8\n4/8 = 1/2\n\n**Answer: 1 1/2** ✓\n\nOr as improper fraction: 3/2 ✓',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Adding Fractions
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: addFractionsTopic.id,
          front: 'When adding fractions with the same denominator, what do you add?',
          back: 'Add the NUMERATORS (top numbers) only. Keep the denominator the same.',
          hint: 'Example: 2/5 + 1/5 = 3/5',
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          front: 'What are "like denominators"?',
          back: 'Fractions that have the same bottom number (denominator)',
          hint: '3/8 and 5/8 both have 8 as the denominator',
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          front: 'What is 1/4 + 2/4?',
          back: '3/4 (add numerators: 1 + 2 = 3, keep denominator 4)',
          hint: 'Add the tops, keep the bottom',
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          front: 'After adding fractions, what should you always do?',
          back: 'Check if the answer can be simplified (reduced)',
          hint: 'Look for common factors',
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          front: 'What is an improper fraction?',
          back: 'A fraction where the numerator is greater than or equal to the denominator (≥ 1)',
          hint: 'Example: 7/5 or 8/8',
          isPremium: false
        },
        {
          topicId: addFractionsTopic.id,
          front: 'What is 3/6 + 2/6 in simplest form?',
          back: '5/6 (add to get 5/6, already simplified)',
          hint: '3 + 2 = 5, keep denominator 6',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: adding-fractions-like-denominators');
  }

  // Topic 3: Multiplying Fractions by Whole Numbers
  const multiplyFractionsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'multiplying-fractions-whole-numbers',
      category: { courseId: grade4Course.id }
    }
  });

  if (multiplyFractionsTopic) {
    // Add practice problems for Multiplying Fractions by Whole Numbers
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: multiplyFractionsTopic.id,
          question: 'Multiply: 3 × 1/4 = ?',
          solution: 'Think: "3 groups of 1/4"\n\n**Method 1:** Add it\n1/4 + 1/4 + 1/4 = 3/4\n\n**Method 2:** Multiply numerator\n3 × 1/4 = (3 × 1)/4 = 3/4\n\n**Answer: 3/4** ✓\n\nImagine: 3 quarter slices of pizza = 3/4 of a pizza!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          question: 'Multiply: 2/5 × 4 = ?',
          solution: 'Multiply the numerator by the whole number:\n\n2/5 × 4 = (2 × 4)/5 = 8/5\n\nThis is an improper fraction!\n\nConvert to mixed number:\n8 ÷ 5 = 1 R3\n8/5 = 1 3/5\n\n**Answer: 1 3/5** ✓\n\nOr as improper fraction: 8/5 ✓',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          question: 'A recipe calls for 2/3 cup of sugar. If you make the recipe 5 times, how much sugar do you need?',
          solution: 'Multiply: 5 × 2/3\n\n5 × 2/3 = (5 × 2)/3 = 10/3\n\nConvert to mixed number:\n10 ÷ 3 = 3 R1\n10/3 = 3 1/3\n\n**Answer: 3 1/3 cups of sugar** ✓\n\nYou need 3 full cups plus 1/3 cup more!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          question: 'Multiply and simplify: 6 × 3/8 = ?',
          solution: 'Step 1: Multiply\n6 × 3/8 = (6 × 3)/8 = 18/8\n\nStep 2: Simplify (both divisible by 2)\n18/8 = 9/4\n\nStep 3: Convert to mixed number\n9 ÷ 4 = 2 R1\n9/4 = 2 1/4\n\n**Answer: 2 1/4** ✓\n\nOr as improper fraction: 9/4 ✓',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          question: 'Multiply: 4/7 × 3 = ?\nThen find what fraction this is of a whole.',
          solution: 'Step 1: Multiply\n4/7 × 3 = (4 × 3)/7 = 12/7\n\nStep 2: Convert to mixed number\n12 ÷ 7 = 1 R5\n12/7 = 1 5/7\n\n**Answer: 1 5/7** ✓\n\nThis means:\n- More than 1 whole (it\'s 12/7)\n- Equals 1 whole plus 5/7 more\n- If you had 12 pieces that are each 1/7, you\'d have 1 5/7 wholes!',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Multiplying Fractions by Whole Numbers
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: multiplyFractionsTopic.id,
          front: 'How do you multiply a fraction by a whole number?',
          back: 'Multiply the whole number by the NUMERATOR (top). Keep the denominator the same.',
          hint: 'Example: 3 × 2/5 = (3 × 2)/5 = 6/5',
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          front: 'What does 4 × 1/3 mean?',
          back: '4 groups of 1/3, which equals 4/3',
          hint: 'Think of adding 1/3 four times',
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          front: 'What is 2 × 3/4?',
          back: '6/4 or 1 2/4 or 1 1/2 (simplified)',
          hint: 'Multiply: 2 × 3 = 6, keep denominator 4',
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          front: 'When you multiply a fraction by a whole number greater than 1, does the fraction get bigger or smaller?',
          back: 'BIGGER (you\'re making multiple copies of the fraction)',
          hint: '3 × 1/2 = 3/2, which is bigger than 1/2',
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          front: 'What is 5 × 2/3?',
          back: '10/3 or 3 1/3',
          hint: 'Multiply: 5 × 2 = 10, denominator stays 3',
          isPremium: false
        },
        {
          topicId: multiplyFractionsTopic.id,
          front: 'After multiplying, what should you check?',
          back: 'Check if you can simplify and if you need to convert to a mixed number',
          hint: 'Look for improper fractions and common factors',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: multiplying-fractions-whole-numbers');
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
