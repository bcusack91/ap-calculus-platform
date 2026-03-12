import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 5 Math - Batch 2 (3 topics)...\n');

  // Topic 1: Prime and Composite Numbers
  const primeComposite = await prisma.topic.findFirst({
    where: { slug: 'prime-composite-numbers' }
  });

  if (primeComposite) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: primeComposite.id,
          question: 'Is 7 a prime number or a composite number?',
          solution: 'To determine if 7 is prime, check if it has exactly two factors: 1 and itself.\n\nFactors of 7:\n1 × 7 = 7\n\nThat\'s it! 7 only has two factors: 1 and 7.\n\nAnswer: 7 is a PRIME number.',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: primeComposite.id,
          question: 'Is 12 a prime number or a composite number?',
          solution: 'Check the factors of 12.\n\nFactors of 12:\n1 × 12 = 12\n2 × 6 = 12\n3 × 4 = 12\n\n12 has more than two factors: 1, 2, 3, 4, 6, 12\n\nAnswer: 12 is a COMPOSITE number.',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: primeComposite.id,
          question: 'List all prime numbers between 20 and 30.',
          solution: 'Check each number between 20 and 30:\n\n20: Composite (divisible by 2, 4, 5, 10)\n21: Composite (divisible by 3, 7)\n22: Composite (divisible by 2, 11)\n23: Prime (only divisible by 1 and 23)\n24: Composite (divisible by 2, 3, 4, 6, 8, 12)\n25: Composite (divisible by 5)\n26: Composite (divisible by 2, 13)\n27: Composite (divisible by 3, 9)\n28: Composite (divisible by 2, 4, 7, 14)\n29: Prime (only divisible by 1 and 29)\n30: Composite (divisible by 2, 3, 5, 6, 10, 15)\n\nAnswer: 23 and 29',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: primeComposite.id,
          question: 'Is 1 a prime number, composite number, or neither?',
          solution: 'Let\'s check the definition:\n\nPrime number: Has EXACTLY two factors (1 and itself)\nComposite number: Has MORE than two factors\n\nFactors of 1: Just 1 (because 1 × 1 = 1)\n\n1 only has ONE factor, not two.\n\nAnswer: 1 is NEITHER prime nor composite. It\'s a special number!',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: primeComposite.id,
          question: 'Explain why 51 is NOT a prime number.',
          solution: 'To prove 51 is not prime, we need to find a factor other than 1 and 51.\n\nCheck if 51 is divisible by small primes:\n- Divisible by 2? No (51 is odd)\n- Divisible by 3? Let\'s check: 5 + 1 = 6, which is divisible by 3, so YES!\n\n51 ÷ 3 = 17\n\nSo 51 = 3 × 17\n\nFactors of 51: 1, 3, 17, 51\n\nAnswer: 51 is composite because it has factors other than 1 and itself. Specifically, 51 = 3 × 17.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: primeComposite.id,
          front: 'What is a prime number?',
          back: 'A whole number greater than 1 that has exactly two factors: 1 and itself.',
          hint: 'Think: only divisible by 1 and itself'
        },
        {
          topicId: primeComposite.id,
          front: 'What is a composite number?',
          back: 'A whole number greater than 1 that has more than two factors.',
          hint: 'It can be divided evenly by numbers other than 1 and itself'
        },
        {
          topicId: primeComposite.id,
          front: 'Is 2 a prime number?',
          back: 'Yes! 2 is the only even prime number. Its only factors are 1 and 2.',
          hint: 'It\'s the first and only even prime'
        },
        {
          topicId: primeComposite.id,
          front: 'What are the first five prime numbers?',
          back: '2, 3, 5, 7, 11',
          hint: 'Start with 2 and find numbers with only two factors'
        },
        {
          topicId: primeComposite.id,
          front: 'Is 1 prime or composite?',
          back: 'Neither! 1 is a special number that only has one factor (itself).',
          hint: 'It doesn\'t fit either definition'
        },
        {
          topicId: primeComposite.id,
          front: 'Quick test: Is 9 prime or composite?',
          back: 'Composite. 9 = 3 × 3, so it has factors 1, 3, and 9.',
          hint: 'Can you think of 3 × 3?'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: prime-composite-numbers');
  }

  // Topic 2: GCF and LCM
  const gcfLcm = await prisma.topic.findFirst({
    where: { slug: 'gcf-and-lcm' }
  });

  if (gcfLcm) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: gcfLcm.id,
          question: 'Find the GCF of 12 and 18.',
          solution: 'List all factors of each number and find the greatest one they share.\n\nFactors of 12: 1, 2, 3, 4, 6, 12\nFactors of 18: 1, 2, 3, 6, 9, 18\n\nCommon factors: 1, 2, 3, 6\n\nThe greatest common factor is 6.\n\nAnswer: GCF = 6',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: gcfLcm.id,
          question: 'Find the LCM of 4 and 6.',
          solution: 'List multiples of each number until you find the smallest one they share.\n\nMultiples of 4: 4, 8, 12, 16, 20, 24...\nMultiples of 6: 6, 12, 18, 24, 30...\n\nCommon multiples: 12, 24, 36...\n\nThe least common multiple is 12.\n\nAnswer: LCM = 12',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: gcfLcm.id,
          question: 'Sarah has 24 red balloons and 36 blue balloons. She wants to make identical groups with no balloons left over. What is the greatest number of groups she can make?',
          solution: 'We need to find the GCF of 24 and 36.\n\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\n\nCommon factors: 1, 2, 3, 4, 6, 12\n\nGCF = 12\n\nShe can make 12 groups.\nEach group will have: 24 ÷ 12 = 2 red balloons and 36 ÷ 12 = 3 blue balloons\n\nAnswer: 12 groups (each with 2 red and 3 blue balloons)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: gcfLcm.id,
          question: 'Two buses leave the station at the same time. One bus returns every 15 minutes and the other every 20 minutes. When will both buses be at the station together again?',
          solution: 'We need to find the LCM of 15 and 20.\n\nMultiples of 15: 15, 30, 45, 60, 75, 90...\nMultiples of 20: 20, 40, 60, 80, 100...\n\nThe least common multiple is 60.\n\nAnswer: Both buses will be at the station together again in 60 minutes (1 hour).',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: gcfLcm.id,
          question: 'Find both the GCF and LCM of 8 and 12, then multiply them together. What do you notice?',
          solution: 'First, find the GCF:\nFactors of 8: 1, 2, 4, 8\nFactors of 12: 1, 2, 3, 4, 6, 12\nGCF = 4\n\nNext, find the LCM:\nMultiples of 8: 8, 16, 24, 32...\nMultiples of 12: 12, 24, 36...\nLCM = 24\n\nNow multiply:\nGCF × LCM = 4 × 24 = 96\n\nAlso multiply the original numbers:\n8 × 12 = 96\n\nAnswer: GCF = 4, LCM = 24\nInteresting fact: GCF × LCM = 8 × 12! This relationship always works for any two numbers.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: gcfLcm.id,
          front: 'What does GCF stand for?',
          back: 'Greatest Common Factor - the largest factor shared by two or more numbers.',
          hint: 'Think: the biggest number that divides evenly into all of them'
        },
        {
          topicId: gcfLcm.id,
          front: 'What does LCM stand for?',
          back: 'Least Common Multiple - the smallest multiple shared by two or more numbers.',
          hint: 'Think: the smallest number they all divide into evenly'
        },
        {
          topicId: gcfLcm.id,
          front: 'When do you use GCF in real life?',
          back: 'When dividing things into equal groups, simplifying fractions, or finding what items have in common.',
          hint: 'Think about sharing or breaking things into equal parts'
        },
        {
          topicId: gcfLcm.id,
          front: 'When do you use LCM in real life?',
          back: 'When finding when events happen together, adding fractions with different denominators, or scheduling repeating events.',
          hint: 'Think about things that repeat on different schedules'
        },
        {
          topicId: gcfLcm.id,
          front: 'What is the GCF of 10 and 15?',
          back: '5 (factors of 10: 1, 2, 5, 10; factors of 15: 1, 3, 5, 15)',
          hint: 'List the factors and find the biggest shared one'
        },
        {
          topicId: gcfLcm.id,
          front: 'What is the LCM of 3 and 4?',
          back: '12 (multiples of 3: 3, 6, 9, 12...; multiples of 4: 4, 8, 12...)',
          hint: 'List multiples until you find the first match'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: gcf-and-lcm');
  }

  // Topic 3: Numerical Expressions
  const numExpressions = await prisma.topic.findFirst({
    where: { slug: 'numerical-expressions' }
  });

  if (numExpressions) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: numExpressions.id,
          question: 'Evaluate the expression: 15 + 8 - 3',
          solution: 'Work from left to right since we only have addition and subtraction.\n\nStep 1: Add first\n15 + 8 = 23\n\nStep 2: Subtract\n23 - 3 = 20\n\nAnswer: 20',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: numExpressions.id,
          question: 'Write a numerical expression for: "five times the sum of 6 and 4"',
          solution: 'Break down the phrase:\n- "sum of 6 and 4" means 6 + 4\n- "five times" means multiply by 5\n- Since it says "the sum" first, we need parentheses\n\nExpression: 5 × (6 + 4)\n\nWe can also evaluate it:\n5 × (6 + 4) = 5 × 10 = 50\n\nAnswer: 5 × (6 + 4) or 5(6 + 4)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: numExpressions.id,
          question: 'Simplify: 3(4 + 2) using the distributive property.',
          solution: 'The distributive property says: a(b + c) = ab + ac\n\nApply it to 3(4 + 2):\n\nStep 1: Multiply 3 by each number inside the parentheses\n3 × 4 = 12\n3 × 2 = 6\n\nStep 2: Add the products\n12 + 6 = 18\n\nCheck: 3(4 + 2) = 3(6) = 18 ✓\n\nAnswer: 18',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: numExpressions.id,
          question: 'Write a numerical expression for: "20 decreased by the product of 3 and 4"',
          solution: 'Break down the phrase:\n- "product of 3 and 4" means 3 × 4\n- "decreased by" means subtract\n- Start with 20, then subtract\n\nExpression: 20 - (3 × 4)\n\nEvaluate:\n20 - (3 × 4) = 20 - 12 = 8\n\nAnswer: 20 - (3 × 4) or 20 - 3 × 4',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: numExpressions.id,
          question: 'Are these expressions equivalent? Explain.\nExpression A: 2(5 + 3)\nExpression B: 2 × 5 + 3',
          solution: 'Let\'s evaluate both expressions:\n\nExpression A: 2(5 + 3)\nStep 1: Parentheses first\n5 + 3 = 8\nStep 2: Multiply\n2 × 8 = 16\n\nExpression B: 2 × 5 + 3\nStep 1: Multiply first (PEMDAS)\n2 × 5 = 10\nStep 2: Add\n10 + 3 = 13\n\nExpression A = 16\nExpression B = 13\n\nAnswer: NO, they are NOT equivalent. The parentheses in Expression A make a big difference! However, 2(5 + 3) IS equivalent to 2 × 5 + 2 × 3 (distributive property).',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: numExpressions.id,
          front: 'What is a numerical expression?',
          back: 'A mathematical phrase that contains numbers and operation symbols (+, -, ×, ÷), but NO equal sign.',
          hint: 'It\'s like a phrase, not a complete sentence (equation)'
        },
        {
          topicId: numExpressions.id,
          front: 'What is the difference between an expression and an equation?',
          back: 'An expression has no equal sign (like 3 + 5). An equation has an equal sign (like 3 + 5 = 8).',
          hint: 'Equation = expression with equal sign'
        },
        {
          topicId: numExpressions.id,
          front: 'What does "evaluate" mean for an expression?',
          back: 'To evaluate means to find the value by performing all the operations.',
          hint: 'Calculate to get a single number'
        },
        {
          topicId: numExpressions.id,
          front: 'What is the distributive property?',
          back: 'a(b + c) = ab + ac. You multiply the number outside the parentheses by each term inside.',
          hint: 'Distribute the multiplication across the addition'
        },
        {
          topicId: numExpressions.id,
          front: 'Write an expression for: "8 more than 5"',
          back: '5 + 8 (start with 5, then add 8)',
          hint: 'More than means addition'
        },
        {
          topicId: numExpressions.id,
          front: 'What key words indicate multiplication in a word problem?',
          back: 'Product, times, of, multiplied by, twice',
          hint: 'Think of common multiplication phrases'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: numerical-expressions');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
