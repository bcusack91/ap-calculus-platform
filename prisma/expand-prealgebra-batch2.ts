import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Pre-Algebra partial topics - Batch 2 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Introduction to Exponents (exponents-prealgebra)
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'exponents-prealgebra',
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
          question: 'Simplify: 4² × 4³',
          solution: 'Step 1: Use the product rule for exponents.\nWhen multiplying same bases, ADD exponents.\naᵐ × aⁿ = aᵐ⁺ⁿ\n\nStep 2: Apply the rule.\n4² × 4³ = 4²⁺³ = 4⁵\n\nStep 3: Calculate if needed.\n4⁵ = 4 × 4 × 4 × 4 × 4 = 1,024\n\nAnswer: 4⁵ = 1,024',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A certain bacteria doubles every hour. If you start with 3 bacteria, write an expression using exponents for the number of bacteria after 8 hours, then calculate it.',
          solution: 'Step 1: Understand the pattern.\nStart: 3 bacteria\nAfter 1 hour: 3 × 2 = 6\nAfter 2 hours: 3 × 2 × 2 = 3 × 2²\nAfter 3 hours: 3 × 2 × 2 × 2 = 3 × 2³\n\nStep 2: Write the general formula.\nAfter n hours: 3 × 2ⁿ\n\nStep 3: For 8 hours.\nBacteria = 3 × 2⁸\n\nStep 4: Calculate 2⁸.\n2⁸ = 256\n\nStep 5: Multiply.\n3 × 256 = 768\n\nAnswer: 3 × 2⁸ = 768 bacteria after 8 hours',
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
          front: 'What is 2⁵?',
          back: '32 (2 × 2 × 2 × 2 × 2)',
          hint: 'Multiply 2 by itself 5 times'
        },
        {
          topicId: topic1.id,
          front: 'What is the quotient rule for exponents?',
          back: 'When dividing same bases, SUBTRACT exponents: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Example: 5⁷ ÷ 5³ = 5⁴',
          hint: 'Division = subtract exponents'
        },
        {
          topicId: topic1.id,
          front: 'What happens when you raise a power to a power?',
          back: 'MULTIPLY the exponents: (aᵐ)ⁿ = aᵐˣⁿ. Example: (3²)⁴ = 3⁸',
          hint: 'Power to power = multiply exponents'
        }
      ]
    });

    console.log('✅ Expanded: exponents-prealgebra (now 5 problems, 6 flashcards)');
  }

  // Topic 2: Percent Problems (percent-problems-prealgebra)
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'percent-problems-prealgebra',
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
          question: 'A jacket originally costs $80. It goes on sale for 30% off. What is the sale price?',
          solution: 'Method 1: Find discount, then subtract\nStep 1: Find 30% of $80.\n0.30 × 80 = $24 discount\n\nStep 2: Subtract from original.\n$80 - $24 = $56\n\nMethod 2: Find what you pay directly\nStep 1: If 30% off, you pay 70%.\n100% - 30% = 70%\n\nStep 2: Find 70% of $80.\n0.70 × 80 = $56\n\nAnswer: $56',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'You got 17 out of 20 questions correct on a test. What is your percentage score? Then, if the teacher adds 5 bonus points to your raw score, what is your new percentage?',
          solution: 'Part 1: Original percentage\nStep 1: Set up the fraction.\n17/20\n\nStep 2: Convert to decimal.\n17 ÷ 20 = 0.85\n\nStep 3: Convert to percent.\n0.85 = 85%\n\nPart 2: With bonus points\nStep 1: New score.\n17 + 5 = 22 points earned\nTotal still out of 20 (bonus goes above 100%)\n\nStep 2: Calculate percent.\n22/20 = 1.10 = 110%\n\nAnswer: Original: 85%, With bonus: 110%',
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
          front: 'What is 10% of 50?',
          back: '5 (0.10 × 50 = 5)',
          hint: '10% = 0.10'
        },
        {
          topicId: topic2.id,
          front: 'How do you find what percent one number is of another?',
          back: 'Divide the part by the whole, then convert to percent. Example: 12 out of 60 = 12/60 = 0.2 = 20%',
          hint: '(part ÷ whole) × 100%'
        },
        {
          topicId: topic2.id,
          front: 'What is the shortcut for finding price after a discount?',
          back: 'Multiply by (100% - discount%). Example: 25% off = multiply by 75% or 0.75',
          hint: 'Pay the remaining percent'
        }
      ]
    });

    console.log('✅ Expanded: percent-problems-prealgebra (now 5 problems, 6 flashcards)');
  }

  // Topic 3: Solving Proportions (proportions-prealgebra)
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'proportions-prealgebra',
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
          question: 'Solve the proportion: x/6 = 4/3',
          solution: 'Step 1: Cross multiply.\nx × 3 = 6 × 4\n3x = 24\n\nStep 2: Divide both sides by 3.\nx = 24/3\nx = 8\n\nStep 3: Check by substituting back.\n8/6 = 4/3\nSimplify: 8/6 = 4/3\n4/3 = 4/3 ✓\n\nAnswer: x = 8',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A map uses a scale where 2 inches represents 50 miles. If two cities are 7 inches apart on the map, what is the actual distance between them?',
          solution: 'Step 1: Set up a proportion.\nmap inches/actual miles = map inches/actual miles\n2/50 = 7/x\n\nStep 2: Cross multiply.\n2 × x = 50 × 7\n2x = 350\n\nStep 3: Solve for x.\nx = 350/2\nx = 175\n\nStep 4: Check reasonableness.\n2 inches = 50 miles\n7 inches is 3.5 times larger\n50 × 3.5 = 175 ✓\n\nAnswer: 175 miles',
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
          front: 'What is a proportion?',
          back: 'An equation stating that two RATIOS are EQUAL. Example: 2/3 = 4/6',
          hint: 'Two equal ratios or fractions'
        },
        {
          topicId: topic3.id,
          front: 'How do you solve a proportion?',
          back: 'CROSS MULTIPLY, then solve the equation. If a/b = c/d, then ad = bc.',
          hint: 'Multiply diagonally across the equals sign'
        },
        {
          topicId: topic3.id,
          front: 'How can you check if two ratios form a proportion?',
          back: 'Cross multiply - if the products are EQUAL, they form a proportion. Or simplify both ratios to see if they\'re equal.',
          hint: 'Cross products must be equal'
        }
      ]
    });

    console.log('✅ Expanded: proportions-prealgebra (now 5 problems, 6 flashcards)');
  }

  console.log('\n✨ Successfully expanded 3 topics!');
  console.log('📊 3 more topics need expansion');
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
