import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 3 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Distributive Property
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'distributive-property',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic1) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Use the distributive property to simplify: 3(x + 5)',
          solution: 'Step 1: Apply the distributive property.\na(b + c) = ab + ac\n\nStep 2: Multiply 3 by each term inside.\n3(x + 5) = 3 × x + 3 × 5\n\nStep 3: Simplify.\n= 3x + 15\n\nAnswer: 3x + 15',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Simplify: 4(2n - 3)',
          solution: 'Step 1: Distribute 4 to both terms.\n4(2n - 3) = 4 × 2n - 4 × 3\n\nNote: Be careful with the negative sign!\n\nStep 2: Multiply.\n= 8n - 12\n\nAnswer: 8n - 12',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Use the distributive property to calculate: 7 × 98',
          solution: 'Step 1: Rewrite 98 as a sum or difference.\n98 = 100 - 2\n\nStep 2: Apply distributive property.\n7 × 98 = 7 × (100 - 2)\n= 7 × 100 - 7 × 2\n\nStep 3: Calculate.\n= 700 - 14\n= 686\n\nAnswer: 686',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Simplify: -2(3x - 4y + 1)',
          solution: 'Step 1: Distribute -2 to ALL terms inside.\n-2(3x - 4y + 1)\n= -2 × 3x + (-2) × (-4y) + (-2) × 1\n\nStep 2: Multiply each term.\n= -6x + 8y - 2\n\nNote: \n-2 × 3x = -6x (negative × positive = negative)\n-2 × (-4y) = +8y (negative × negative = positive)\n-2 × 1 = -2\n\nAnswer: -6x + 8y - 2',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'Simplify completely: 5(2x + 3) - 2(x - 4)',
          solution: 'Step 1: Distribute 5 to the first parentheses.\n5(2x + 3) = 10x + 15\n\nStep 2: Distribute -2 to the second parentheses.\n-2(x - 4) = -2x + 8\n\nNote: -2 × (-4) = +8\n\nStep 3: Combine the results.\n10x + 15 - 2x + 8\n\nStep 4: Combine like terms.\nCombine x terms: 10x - 2x = 8x\nCombine constants: 15 + 8 = 23\n\nAnswer: 8x + 23',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic1.id,
          front: 'What is the distributive property?',
          back: 'a(b + c) = ab + ac. Multiply the number outside the parentheses by EACH term inside. Example: 3(x + 4) = 3x + 12',
          hint: 'Distribute = give to each one'
        },
        {
          topicId: topic1.id,
          front: 'How do you distribute a negative number?',
          back: 'Multiply the negative by EACH term, watching signs carefully. Example: -2(x + 3) = -2x - 6',
          hint: 'Negative times positive = negative, negative times negative = positive'
        },
        {
          topicId: topic1.id,
          front: 'What is a common mistake with the distributive property?',
          back: 'Forgetting to multiply by ALL terms inside. You must multiply by EVERY term, not just the first one.',
          hint: 'Don\'t forget the second (or third) term!'
        },
        {
          topicId: topic1.id,
          front: 'Can you use distributive property with subtraction?',
          back: 'Yes! a(b - c) = ab - ac. Example: 4(x - 5) = 4x - 20',
          hint: 'Treat subtraction as adding a negative'
        },
        {
          topicId: topic1.id,
          front: 'How does distributive property help with mental math?',
          back: 'Break numbers into easier parts. Example: 6 × 19 = 6(20 - 1) = 120 - 6 = 114',
          hint: 'Rewrite numbers as sums or differences'
        },
        {
          topicId: topic1.id,
          front: 'What do you do after distributing?',
          back: 'Combine like terms if possible. Example: 3(x + 2) + 5x = 3x + 6 + 5x = 8x + 6',
          hint: 'Distribute first, then combine like terms'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: distributive-property');
  }

  // Topic 2: Solving Two-Step Equations
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'solving-two-step-equations',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic2) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Solve for x: 2x + 5 = 13',
          solution: 'Step 1: Subtract 5 from both sides (undo addition).\n2x + 5 - 5 = 13 - 5\n2x = 8\n\nStep 2: Divide both sides by 2 (undo multiplication).\n2x/2 = 8/2\nx = 4\n\nStep 3: Check your answer.\n2(4) + 5 = 8 + 5 = 13 ✓\n\nAnswer: x = 4',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Solve for n: 3n - 7 = 8',
          solution: 'Step 1: Add 7 to both sides (undo subtraction).\n3n - 7 + 7 = 8 + 7\n3n = 15\n\nStep 2: Divide both sides by 3 (undo multiplication).\n3n/3 = 15/3\nn = 5\n\nStep 3: Check.\n3(5) - 7 = 15 - 7 = 8 ✓\n\nAnswer: n = 5',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Solve for y: y/4 + 3 = 7',
          solution: 'Step 1: Subtract 3 from both sides.\ny/4 + 3 - 3 = 7 - 3\ny/4 = 4\n\nStep 2: Multiply both sides by 4 (undo division).\n4 × (y/4) = 4 × 4\ny = 16\n\nStep 3: Check.\n16/4 + 3 = 4 + 3 = 7 ✓\n\nAnswer: y = 16',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Solve for x: -5x + 12 = -3',
          solution: 'Step 1: Subtract 12 from both sides.\n-5x + 12 - 12 = -3 - 12\n-5x = -15\n\nStep 2: Divide both sides by -5.\n-5x/-5 = -15/-5\nx = 3\n\nNote: Negative divided by negative = positive\n\nStep 3: Check.\n-5(3) + 12 = -15 + 12 = -3 ✓\n\nAnswer: x = 3',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'A cell phone plan costs $25 per month plus $0.10 per text message. If your bill was $37, how many text messages did you send?',
          solution: 'Step 1: Write an equation.\nLet t = number of texts\nCost = 25 + 0.10t\nEquation: 25 + 0.10t = 37\n\nStep 2: Subtract 25 from both sides.\n0.10t = 12\n\nStep 3: Divide both sides by 0.10.\nt = 12 ÷ 0.10\nt = 120\n\nStep 4: Check.\n25 + 0.10(120) = 25 + 12 = 37 ✓\n\nAnswer: You sent 120 text messages',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic2.id,
          front: 'What is a two-step equation?',
          back: 'An equation that requires TWO operations to solve. Example: 2x + 3 = 11 (need to subtract 3, then divide by 2)',
          hint: 'Two operations to isolate the variable'
        },
        {
          topicId: topic2.id,
          front: 'What order do you use to solve two-step equations?',
          back: 'UNDO addition/subtraction FIRST, then undo multiplication/division. Work backwards from order of operations!',
          hint: 'Reverse order of PEMDAS - undo add/subtract, then multiply/divide'
        },
        {
          topicId: topic2.id,
          front: 'How do you solve 3x + 5 = 14?',
          back: 'Step 1: Subtract 5 from both sides → 3x = 9. Step 2: Divide both sides by 3 → x = 3',
          hint: 'Undo the +5 first, then undo the ×3'
        },
        {
          topicId: topic2.id,
          front: 'What does "isolate the variable" mean?',
          back: 'Get the variable ALONE on one side of the equation. Example: x = 5 (x is isolated)',
          hint: 'Alone on one side with no numbers attached'
        },
        {
          topicId: topic2.id,
          front: 'Why do you do the same operation to both sides?',
          back: 'To keep the equation BALANCED (equal). Whatever you do to one side, you MUST do to the other.',
          hint: 'Think of a balance scale - keep it balanced'
        },
        {
          topicId: topic2.id,
          front: 'How do you check your solution?',
          back: 'Substitute your answer back into the ORIGINAL equation and verify both sides are equal.',
          hint: 'Plug it back in and see if it works'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: solving-two-step-equations');
  }

  // Topic 3: Combining Like Terms
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'combining-like-terms',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic3) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'Simplify: 3x + 5x',
          solution: 'Step 1: Identify like terms.\nBoth terms have the variable x.\n\nStep 2: Add the coefficients.\n3 + 5 = 8\n\nStep 3: Keep the variable.\n8x\n\nAnswer: 3x + 5x = 8x',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'Simplify: 7y - 2y + 4y',
          solution: 'Step 1: All terms have the variable y (like terms).\n\nStep 2: Combine the coefficients.\n7 - 2 + 4 = 9\n\nStep 3: Attach the variable.\n9y\n\nAnswer: 9y',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'Simplify: 4x + 3 + 2x - 5',
          solution: 'Step 1: Identify like terms.\nVariable terms: 4x and 2x\nConstant terms: 3 and -5\n\nStep 2: Combine variable terms.\n4x + 2x = 6x\n\nStep 3: Combine constant terms.\n3 + (-5) = 3 - 5 = -2\n\nStep 4: Write the final expression.\n6x - 2\n\nAnswer: 6x - 2',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'Simplify: 5a + 3b - 2a + 7b',
          solution: 'Step 1: Identify like terms.\na terms: 5a and -2a\nb terms: 3b and 7b\n\nStep 2: Combine a terms.\n5a - 2a = 3a\n\nStep 3: Combine b terms.\n3b + 7b = 10b\n\nStep 4: Write the final expression.\n3a + 10b\n\nAnswer: 3a + 10b',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'Simplify: 2x² + 5x - 3 + 4x² - 2x + 8',
          solution: 'Step 1: Identify like terms.\nx² terms: 2x² and 4x²\nx terms: 5x and -2x\nConstant terms: -3 and 8\n\nStep 2: Combine x² terms.\n2x² + 4x² = 6x²\n\nStep 3: Combine x terms.\n5x - 2x = 3x\n\nStep 4: Combine constant terms.\n-3 + 8 = 5\n\nStep 5: Write in standard form (highest degree first).\n6x² + 3x + 5\n\nAnswer: 6x² + 3x + 5',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic3.id,
          front: 'What are like terms?',
          back: 'Terms with the SAME variable raised to the SAME power. Example: 3x and 5x are like terms. 2x and 2x² are NOT like terms.',
          hint: 'Same variable, same exponent'
        },
        {
          topicId: topic3.id,
          front: 'How do you combine like terms?',
          back: 'Add or subtract the COEFFICIENTS, keep the variable part the same. Example: 4x + 7x = 11x',
          hint: 'Add/subtract the numbers in front, keep the variable'
        },
        {
          topicId: topic3.id,
          front: 'What is a coefficient?',
          back: 'The NUMBER in front of a variable. Example: in 5x, the coefficient is 5. In -3y, the coefficient is -3.',
          hint: 'The number multiplying the variable'
        },
        {
          topicId: topic3.id,
          front: 'Are 3x and 3y like terms?',
          back: 'NO. They have different variables (x vs y). You can only combine terms with the SAME variable.',
          hint: 'Different variables = NOT like terms'
        },
        {
          topicId: topic3.id,
          front: 'Are 4x and 4x² like terms?',
          back: 'NO. The exponents are different (x¹ vs x²). Like terms must have the same variable AND same exponent.',
          hint: 'Different exponents = NOT like terms'
        },
        {
          topicId: topic3.id,
          front: 'What are constant terms?',
          back: 'Numbers WITHOUT variables. They are like terms with each other. Example: 5 and -3 can be combined to get 2.',
          hint: 'Just plain numbers - they can be combined together'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: combining-like-terms');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
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
