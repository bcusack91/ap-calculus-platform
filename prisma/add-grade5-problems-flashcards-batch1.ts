import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 5 Math - Batch 1 (3 topics)...\n');

  // Topic 1: Order of Operations
  const orderOfOps = await prisma.topic.findFirst({
    where: { slug: 'order-of-operations' }
  });

  if (orderOfOps) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: orderOfOps.id,
          question: 'Evaluate: 8 + 4 × 3',
          solution: 'Using PEMDAS, we do multiplication before addition.\n\nStep 1: Multiply first\n4 × 3 = 12\n\nStep 2: Then add\n8 + 12 = 20\n\nAnswer: 20',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: orderOfOps.id,
          question: 'Solve: (15 - 3) ÷ 4 + 2',
          solution: 'Follow PEMDAS: Parentheses, then division, then addition.\n\nStep 1: Parentheses first\n15 - 3 = 12\n\nStep 2: Division\n12 ÷ 4 = 3\n\nStep 3: Addition\n3 + 2 = 5\n\nAnswer: 5',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: orderOfOps.id,
          question: 'Calculate: 20 - 3 × 2 + 8 ÷ 4',
          solution: 'Do multiplication and division first (left to right), then addition and subtraction.\n\nStep 1: Multiply\n3 × 2 = 6\n\nStep 2: Divide\n8 ÷ 4 = 2\n\nStep 3: Rewrite\n20 - 6 + 2\n\nStep 4: Subtract and add left to right\n20 - 6 = 14\n14 + 2 = 16\n\nAnswer: 16',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: orderOfOps.id,
          question: 'Evaluate: 5 × (6 + 4) - 18 ÷ 3',
          solution: 'Use PEMDAS carefully with parentheses, multiplication, and division.\n\nStep 1: Parentheses\n6 + 4 = 10\n\nStep 2: Multiply\n5 × 10 = 50\n\nStep 3: Divide\n18 ÷ 3 = 6\n\nStep 4: Subtract\n50 - 6 = 44\n\nAnswer: 44',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: orderOfOps.id,
          question: 'Solve: 48 ÷ (2 + 4) × 3 - 5',
          solution: 'This requires careful attention to the order of operations.\n\nStep 1: Parentheses first\n2 + 4 = 6\n\nStep 2: Division and multiplication (left to right)\n48 ÷ 6 = 8\n8 × 3 = 24\n\nStep 3: Subtraction\n24 - 5 = 19\n\nAnswer: 19',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: orderOfOps.id,
          front: 'What does PEMDAS stand for?',
          back: 'Parentheses, Exponents, Multiplication, Division, Addition, Subtraction',
          hint: 'It\'s a memory trick: "Please Excuse My Dear Aunt Sally"'
        },
        {
          topicId: orderOfOps.id,
          front: 'What operation do you do first in the expression: 5 + 3 × 2?',
          back: 'Multiplication (3 × 2 = 6), then addition (5 + 6 = 11)',
          hint: 'Multiplication comes before addition in PEMDAS'
        },
        {
          topicId: orderOfOps.id,
          front: 'True or False: Multiplication always comes before division.',
          back: 'False! Multiplication and division are done from left to right, whichever comes first.',
          hint: 'M and D are on the same level in PEMDAS'
        },
        {
          topicId: orderOfOps.id,
          front: 'In the expression 10 - (4 + 2), what do you solve first?',
          back: 'The parentheses: 4 + 2 = 6, then 10 - 6 = 4',
          hint: 'Parentheses are always first in PEMDAS'
        },
        {
          topicId: orderOfOps.id,
          front: 'What is the correct answer: 12 ÷ 4 × 3?',
          back: '9 (Work left to right: 12 ÷ 4 = 3, then 3 × 3 = 9)',
          hint: 'Division and multiplication are equal - go left to right'
        },
        {
          topicId: orderOfOps.id,
          front: 'Why is order of operations important?',
          back: 'Everyone gets the same answer when evaluating an expression. Without it, 5 + 3 × 2 could be 16 or 11!',
          hint: 'It ensures consistency in mathematics'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: order-of-operations');
  }

  // Topic 2: Multiplying and Dividing Fractions
  const fracOps = await prisma.topic.findFirst({
    where: { slug: 'multiplying-dividing-fractions' }
  });

  if (fracOps) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: fracOps.id,
          question: 'Multiply: 1/2 × 3/4',
          solution: 'To multiply fractions, multiply the numerators and multiply the denominators.\n\nStep 1: Multiply numerators\n1 × 3 = 3\n\nStep 2: Multiply denominators\n2 × 4 = 8\n\nAnswer: 3/8',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: fracOps.id,
          question: 'Divide: 3/4 ÷ 1/2',
          solution: 'Use Keep-Change-Flip (KCF) to divide fractions.\n\nStep 1: Keep the first fraction\n3/4\n\nStep 2: Change division to multiplication\n÷ becomes ×\n\nStep 3: Flip the second fraction\n1/2 becomes 2/1\n\nStep 4: Multiply\n3/4 × 2/1 = 6/4\n\nStep 5: Simplify\n6/4 = 3/2 or 1 1/2\n\nAnswer: 3/2 or 1 1/2',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: fracOps.id,
          question: 'Calculate: 2/5 × 5/6',
          solution: 'Multiply fractions and simplify.\n\nStep 1: Multiply numerators and denominators\n(2 × 5)/(5 × 6) = 10/30\n\nStep 2: Simplify by dividing both by 10\n10/30 = 1/3\n\nAnswer: 1/3\n\nNote: You could also cancel the 5s before multiplying!',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: fracOps.id,
          question: 'Solve: 2 2/3 × 3/4',
          solution: 'First convert the mixed number to an improper fraction.\n\nStep 1: Convert 2 2/3 to improper fraction\n2 2/3 = (2 × 3 + 2)/3 = 8/3\n\nStep 2: Multiply\n8/3 × 3/4 = 24/12\n\nStep 3: Simplify\n24/12 = 2\n\nAnswer: 2',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: fracOps.id,
          question: 'Divide: 3 1/2 ÷ 2/3',
          solution: 'Convert mixed number, then use KCF method.\n\nStep 1: Convert 3 1/2 to improper fraction\n3 1/2 = 7/2\n\nStep 2: Keep-Change-Flip\n7/2 ÷ 2/3 = 7/2 × 3/2\n\nStep 3: Multiply\n7/2 × 3/2 = 21/4\n\nStep 4: Convert to mixed number\n21/4 = 5 1/4\n\nAnswer: 5 1/4',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: fracOps.id,
          front: 'How do you multiply fractions?',
          back: 'Multiply the numerators together and multiply the denominators together.',
          hint: 'Numerator × numerator, denominator × denominator'
        },
        {
          topicId: fracOps.id,
          front: 'What does KCF stand for when dividing fractions?',
          back: 'Keep-Change-Flip: Keep the first fraction, Change ÷ to ×, Flip the second fraction',
          hint: 'It\'s the method for dividing fractions'
        },
        {
          topicId: fracOps.id,
          front: 'What is the reciprocal of 3/4?',
          back: '4/3 (flip the numerator and denominator)',
          hint: 'Switch the top and bottom numbers'
        },
        {
          topicId: fracOps.id,
          front: 'Calculate: 1/2 × 1/3',
          back: '1/6 (1 × 1 = 1, and 2 × 3 = 6)',
          hint: 'Multiply straight across'
        },
        {
          topicId: fracOps.id,
          front: 'What is 1/2 ÷ 1/4?',
          back: '2 (Keep 1/2, change to ×, flip to get 4/1, then 1/2 × 4/1 = 4/2 = 2)',
          hint: 'Use Keep-Change-Flip'
        },
        {
          topicId: fracOps.id,
          front: 'Before multiplying fractions, what should you do with mixed numbers?',
          back: 'Convert them to improper fractions first',
          hint: 'Change 2 1/2 to 5/2 before multiplying'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: multiplying-dividing-fractions');
  }

  // Topic 3: Factors and Multiples
  const factorsMultiples = await prisma.topic.findFirst({
    where: { slug: 'factors-and-multiples' }
  });

  if (factorsMultiples) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: factorsMultiples.id,
          question: 'List all factors of 12.',
          solution: 'Find all the numbers that divide evenly into 12.\n\nFactor pairs:\n1 × 12 = 12\n2 × 6 = 12\n3 × 4 = 12\n\nFactors of 12: 1, 2, 3, 4, 6, 12\n\nRemember to list them in order from smallest to largest!',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: factorsMultiples.id,
          question: 'List the first 5 multiples of 7.',
          solution: 'Multiples are the results when you multiply a number by 1, 2, 3, 4, 5...\n\n7 × 1 = 7\n7 × 2 = 14\n7 × 3 = 21\n7 × 4 = 28\n7 × 5 = 35\n\nFirst 5 multiples of 7: 7, 14, 21, 28, 35',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: factorsMultiples.id,
          question: 'What is the greatest common factor (GCF) of 18 and 24?',
          solution: 'Find all factors of each number, then find the largest one they share.\n\nFactors of 18: 1, 2, 3, 6, 9, 18\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\n\nCommon factors: 1, 2, 3, 6\n\nThe greatest common factor is 6.',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: factorsMultiples.id,
          question: 'Find the least common multiple (LCM) of 4 and 6.',
          solution: 'List multiples of each number until you find the smallest one they share.\n\nMultiples of 4: 4, 8, 12, 16, 20, 24...\nMultiples of 6: 6, 12, 18, 24, 30...\n\nCommon multiples: 12, 24...\n\nThe least common multiple is 12.',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: factorsMultiples.id,
          question: 'A rectangle has an area of 36 square units. If both the length and width are whole numbers, how many different rectangles are possible? List the dimensions.',
          solution: 'We need to find all factor pairs of 36.\n\n1 × 36 = 36\n2 × 18 = 36\n3 × 12 = 36\n4 × 9 = 36\n6 × 6 = 36\n\nThere are 5 different rectangles:\n1 by 36\n2 by 18\n3 by 12\n4 by 9\n6 by 6 (this is a square!)\n\nAnswer: 5 different rectangles',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: factorsMultiples.id,
          front: 'What is a factor?',
          back: 'A whole number that divides evenly into another number with no remainder.',
          hint: 'Think: numbers you can multiply to get the original number'
        },
        {
          topicId: factorsMultiples.id,
          front: 'What is a multiple?',
          back: 'The result of multiplying a number by any whole number (1, 2, 3, 4...).',
          hint: 'Think: the "times table" for a number'
        },
        {
          topicId: factorsMultiples.id,
          front: 'What is the GCF?',
          back: 'Greatest Common Factor - the largest factor that two or more numbers share.',
          hint: 'The biggest number that divides evenly into all the numbers'
        },
        {
          topicId: factorsMultiples.id,
          front: 'What is the LCM?',
          back: 'Least Common Multiple - the smallest multiple that two or more numbers share.',
          hint: 'The smallest number that all the numbers divide into evenly'
        },
        {
          topicId: factorsMultiples.id,
          front: 'True or False: Every number is both a factor and a multiple of itself.',
          back: 'True! For example, 5 is a factor of 5 (5 ÷ 5 = 1) and a multiple of 5 (5 × 1 = 5).',
          hint: 'Think about multiplying or dividing a number by 1'
        },
        {
          topicId: factorsMultiples.id,
          front: 'What is the smallest factor that every whole number has?',
          back: '1 (one) - every whole number can be divided by 1.',
          hint: 'The smallest counting number'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: factors-and-multiples');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
