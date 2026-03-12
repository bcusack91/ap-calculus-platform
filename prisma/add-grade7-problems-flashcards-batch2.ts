import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 7 Math practice problems and flashcards - Batch 2 (3 topics)...\n');

  // Topic 1: Simple Interest
  const topic1 = await prisma.topic.findFirst({
    where: { slug: 'simple-interest' }
  });

  if (topic1) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Calculate the simple interest earned on $500 at 4% annual interest rate for 3 years.',
          solution: 'Use the formula: I = Prt\n\nP = $500 (principal)\nr = 4% = 0.04 (rate as decimal)\nt = 3 years (time)\n\nI = 500 × 0.04 × 3\nI = 60\n\nAnswer: $60',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'How much interest is earned on $1,200 at 5% annual interest for 2 years?',
          solution: 'Use I = Prt\n\nP = $1,200\nr = 5% = 0.05\nt = 2 years\n\nI = 1,200 × 0.05 × 2\nI = 1,200 × 0.10\nI = 120\n\nAnswer: $120',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Maria deposits $800 in a savings account with 3% simple interest. What is the total amount in her account after 4 years?',
          solution: 'Step 1: Find the interest earned\nI = Prt = 800 × 0.03 × 4 = 96\n\nStep 2: Find total amount\nTotal = Principal + Interest\nTotal = $800 + $96 = $896\n\nAnswer: $896',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Alex earned $180 in simple interest on a principal of $1,500 over 3 years. What was the annual interest rate?',
          solution: 'Use I = Prt and solve for r\n\nGiven: I = $180, P = $1,500, t = 3 years\n\n180 = 1,500 × r × 3\n180 = 4,500r\nr = 180/4,500\nr = 0.04\n\nConvert to percent: 0.04 = 4%\n\nAnswer: 4%',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'Jordan wants to earn $300 in interest on a principal of $2,000 at 6% annual interest. How many years must the money be invested?',
          solution: 'Use I = Prt and solve for t\n\nGiven: I = $300, P = $2,000, r = 6% = 0.06\n\n300 = 2,000 × 0.06 × t\n300 = 120t\nt = 300/120\nt = 2.5 years\n\nAnswer: 2.5 years (or 2 years 6 months)',
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
          front: 'What is the formula for simple interest?',
          back: 'I = Prt\n\nWhere:\nI = Interest earned\nP = Principal (initial amount)\nr = Rate (as a decimal)\nt = Time (in years)',
          hint: 'I equals P times r times t'
        },
        {
          topicId: topic1.id,
          front: 'What does "Principal" mean in simple interest?',
          back: 'Principal (P) is the initial amount of money deposited or borrowed.\n\nExample: If you deposit $500 in a bank, the principal is $500.',
          hint: 'It\'s the starting amount'
        },
        {
          topicId: topic1.id,
          front: 'How do you convert a percent to a decimal for the interest rate?',
          back: 'Divide the percent by 100 (or move the decimal point 2 places left).\n\n5% = 5/100 = 0.05\n3.5% = 3.5/100 = 0.035\n12% = 12/100 = 0.12',
          hint: 'Percents need to be decimals in the formula'
        },
        {
          topicId: topic1.id,
          front: 'How do you find the total amount after earning interest?',
          back: 'Total Amount = Principal + Interest\n\nOr: A = P + I\n\nExample: $1,000 principal + $60 interest = $1,060 total',
          hint: 'Add the interest to the original amount'
        },
        {
          topicId: topic1.id,
          front: 'If you know I, P, and t, how do you solve for the rate (r)?',
          back: 'Rearrange I = Prt to solve for r:\n\nr = I/(Pt)\n\nExample: I = $120, P = $1,000, t = 3\nr = 120/(1,000 × 3) = 120/3,000 = 0.04 = 4%',
          hint: 'Divide I by (P times t)'
        },
        {
          topicId: topic1.id,
          front: 'What is the difference between simple interest and compound interest?',
          back: 'Simple Interest: Interest is calculated only on the principal.\n\nCompound Interest: Interest is calculated on principal AND previously earned interest.\n\nSimple interest stays constant each year; compound interest grows faster.',
          hint: 'Simple = principal only, Compound = principal + previous interest'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: simple-interest');
  }

  // Topic 2: Simplifying Expressions
  const topic2 = await prisma.topic.findFirst({
    where: { slug: 'simplifying-expressions' }
  });

  if (topic2) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Simplify: 5x + 3x',
          solution: 'Combine like terms (both have x):\n\n5x + 3x = 8x\n\nAnswer: 8x',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Simplify: 7y - 2y + 4',
          solution: 'Combine like terms with y:\n\n7y - 2y = 5y\n\nThe 4 has no y, so it stays:\n\n5y + 4\n\nAnswer: 5y + 4',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Simplify: 3(x + 4)',
          solution: 'Use the distributive property:\n\n3(x + 4) = 3·x + 3·4\n         = 3x + 12\n\nAnswer: 3x + 12',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Simplify: 2(3x - 5) + 4x',
          solution: 'Step 1: Distribute the 2\n2(3x - 5) = 6x - 10\n\nStep 2: Combine like terms\n6x - 10 + 4x = 10x - 10\n\nAnswer: 10x - 10',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'Simplify: -3(2x - 4) + 5(x + 1) - 7',
          solution: 'Step 1: Distribute -3 and 5\n-3(2x - 4) = -6x + 12\n5(x + 1) = 5x + 5\n\nStep 2: Rewrite the expression\n-6x + 12 + 5x + 5 - 7\n\nStep 3: Combine like terms\nx terms: -6x + 5x = -x\nConstants: 12 + 5 - 7 = 10\n\nAnswer: -x + 10',
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
          front: 'What are "like terms"?',
          back: 'Like terms have the same variable(s) raised to the same power.\n\nExamples:\n- 3x and 5x are like terms\n- 2y² and 7y² are like terms\n- 4x and 4y are NOT like terms',
          hint: 'They must have the exact same variable part'
        },
        {
          topicId: topic2.id,
          front: 'How do you combine like terms?',
          back: 'Add or subtract the coefficients, keep the variable part the same.\n\nExample:\n7x + 3x = 10x\n9y - 4y = 5y\n-2a + 5a = 3a',
          hint: 'Add/subtract the numbers in front, keep the letters'
        },
        {
          topicId: topic2.id,
          front: 'What is the distributive property?',
          back: 'a(b + c) = ab + ac\n\nMultiply the term outside the parentheses by each term inside.\n\nExample: 5(x + 3) = 5x + 15',
          hint: 'Multiply what\'s outside by everything inside'
        },
        {
          topicId: topic2.id,
          front: 'How do you distribute a negative sign?',
          back: 'Change the sign of every term inside the parentheses.\n\n-(3x - 5) = -3x + 5\n-(2a + 4b) = -2a - 4b\n\nOr think: multiply by -1',
          hint: 'Flip all the signs inside'
        },
        {
          topicId: topic2.id,
          front: 'What is a coefficient?',
          back: 'A coefficient is the number in front of a variable.\n\nIn 7x, the coefficient is 7\nIn -3y, the coefficient is -3\nIn x, the coefficient is 1',
          hint: 'It\'s the number multiplying the variable'
        },
        {
          topicId: topic2.id,
          front: 'What is a constant term?',
          back: 'A constant is a term with no variable.\n\nIn 3x + 5, the constant is 5\nIn 2y - 7, the constant is -7\n\nConstants can be combined with other constants.',
          hint: 'It\'s just a number, no variable attached'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: simplifying-expressions');
  }

  // Topic 3: Solving Multi-Step Equations
  const topic3 = await prisma.topic.findFirst({
    where: { slug: 'solving-multi-step-equations' }
  });

  if (topic3) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'Solve: 2x + 5 = 13',
          solution: 'Step 1: Subtract 5 from both sides\n2x + 5 - 5 = 13 - 5\n2x = 8\n\nStep 2: Divide both sides by 2\n2x/2 = 8/2\nx = 4\n\nCheck: 2(4) + 5 = 8 + 5 = 13 ✓\n\nAnswer: x = 4',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'Solve: 3x - 7 = 20',
          solution: 'Step 1: Add 7 to both sides\n3x - 7 + 7 = 20 + 7\n3x = 27\n\nStep 2: Divide both sides by 3\n3x/3 = 27/3\nx = 9\n\nCheck: 3(9) - 7 = 27 - 7 = 20 ✓\n\nAnswer: x = 9',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'Solve: 4(x - 3) = 16',
          solution: 'Step 1: Distribute the 4\n4x - 12 = 16\n\nStep 2: Add 12 to both sides\n4x = 28\n\nStep 3: Divide both sides by 4\nx = 7\n\nCheck: 4(7 - 3) = 4(4) = 16 ✓\n\nAnswer: x = 7',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'Solve: 5x + 8 = 2x + 20',
          solution: 'Step 1: Subtract 2x from both sides\n5x - 2x + 8 = 2x - 2x + 20\n3x + 8 = 20\n\nStep 2: Subtract 8 from both sides\n3x = 12\n\nStep 3: Divide both sides by 3\nx = 4\n\nCheck: 5(4) + 8 = 20 + 8 = 28\n       2(4) + 20 = 8 + 20 = 28 ✓\n\nAnswer: x = 4',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'Solve: 3(2x - 1) + 5 = 2(x + 4)',
          solution: 'Step 1: Distribute on both sides\n6x - 3 + 5 = 2x + 8\n\nStep 2: Simplify both sides\n6x + 2 = 2x + 8\n\nStep 3: Subtract 2x from both sides\n4x + 2 = 8\n\nStep 4: Subtract 2 from both sides\n4x = 6\n\nStep 5: Divide both sides by 4\nx = 6/4 = 3/2 = 1.5\n\nAnswer: x = 3/2 (or 1.5)',
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
          front: 'What is the goal when solving an equation?',
          back: 'To isolate the variable (get the variable alone on one side).\n\nExample: x = 5\n\nThe solution tells you what value makes the equation true.',
          hint: 'Get the variable by itself'
        },
        {
          topicId: topic3.id,
          front: 'What are inverse operations?',
          back: 'Operations that undo each other:\n\n- Addition ↔ Subtraction\n- Multiplication ↔ Division\n\nExample: To undo +5, subtract 5\nTo undo ×3, divide by 3',
          hint: 'They cancel each other out'
        },
        {
          topicId: topic3.id,
          front: 'What is the first step when solving multi-step equations?',
          back: 'Often:\n1. Distribute (remove parentheses)\n2. Combine like terms on each side\n3. Then use inverse operations\n\nGoal: Simplify before isolating the variable',
          hint: 'Simplify first, then solve'
        },
        {
          topicId: topic3.id,
          front: 'When solving equations with variables on both sides, what do you do?',
          back: 'Move all variable terms to one side and all constants to the other side.\n\nExample: 5x + 3 = 2x + 12\nSubtract 2x: 3x + 3 = 12\nSubtract 3: 3x = 9\nx = 3',
          hint: 'Get variables on one side, numbers on the other'
        },
        {
          topicId: topic3.id,
          front: 'How do you check your solution?',
          back: 'Substitute your answer back into the original equation.\n\nExample: If x = 4 in 2x + 3 = 11\nCheck: 2(4) + 3 = 8 + 3 = 11 ✓\n\nBoth sides equal = correct!',
          hint: 'Plug your answer back into the original equation'
        },
        {
          topicId: topic3.id,
          front: 'What does it mean if you get a false statement like 5 = 7?',
          back: 'The equation has NO SOLUTION.\n\nExample: 2x + 3 = 2x + 5\nSubtract 2x: 3 = 5 (FALSE)\n\nThere is no value of x that makes this true.',
          hint: 'A false number statement means no solution exists'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: solving-multi-step-equations');
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
