import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Expanding Pre-Algebra partial topics - Batch 3 (FINAL - 3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Ratios and Rates (ratios-and-rates-prealgebra)
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'ratios-and-rates-prealgebra',
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
          question: 'A recipe calls for 3 cups of flour for every 2 cups of sugar. If you use 9 cups of flour, how much sugar do you need?',
          solution: 'Step 1: Write the ratio.\nFlour : Sugar = 3 : 2\n\nStep 2: Set up a proportion.\n3/2 = 9/x\n\nStep 3: Cross multiply.\n3x = 2 × 9\n3x = 18\n\nStep 4: Solve for x.\nx = 18/3\nx = 6\n\nStep 5: Check the ratio.\n9:6 simplifies to 3:2 ✓\n\nAnswer: 6 cups of sugar',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A car uses 12 gallons of gas to travel 300 miles. At this rate, how many gallons are needed to travel 450 miles? What is the unit rate in miles per gallon?',
          solution: 'Part 1: Gallons for 450 miles\nStep 1: Set up proportion.\n12/300 = x/450\n\nStep 2: Cross multiply.\n300x = 12 × 450\n300x = 5,400\n\nStep 3: Solve.\nx = 5,400/300 = 18 gallons\n\nPart 2: Unit rate (miles per gallon)\nStep 1: Divide miles by gallons.\n300 miles ÷ 12 gallons = 25 miles per gallon\n\nOr: 450 ÷ 18 = 25 mpg ✓\n\nAnswer: 18 gallons needed; Unit rate: 25 miles per gallon',
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
          front: 'What is a ratio?',
          back: 'A comparison of two quantities. Can be written as a:b, a to b, or a/b. Example: 3:4 or 3/4',
          hint: 'Compares two numbers'
        },
        {
          topicId: topic1.id,
          front: 'What is a rate?',
          back: 'A ratio that compares two different UNITS. Example: 60 miles per hour, $5 per pound',
          hint: 'Ratio with different units'
        },
        {
          topicId: topic1.id,
          front: 'How do you simplify a ratio?',
          back: 'Divide both numbers by their GCF (Greatest Common Factor). Example: 12:18 = 2:3 (÷6)',
          hint: 'Like simplifying fractions'
        }
      ]
    });

    console.log('✅ Expanded: ratios-and-rates-prealgebra (now 5 problems, 6 flashcards)');
  }

  // Topic 2: Variables and Expressions (variables-and-expressions)
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'variables-and-expressions',
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
          question: 'Evaluate the expression 3x + 7 when x = 5',
          solution: 'Step 1: Substitute x = 5 into the expression.\n3x + 7\n= 3(5) + 7\n\nStep 2: Multiply first (order of operations).\n= 15 + 7\n\nStep 3: Add.\n= 22\n\nAnswer: 22',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'Write an expression for: "Five less than three times a number n." Then evaluate it when n = 8.',
          solution: 'Step 1: Translate to an expression.\n"Three times a number n" = 3n\n"Five less than" means subtract 5\nExpression: 3n - 5\n\nNote: "Five less than 3n" means 3n - 5, NOT 5 - 3n\n\nStep 2: Evaluate when n = 8.\n3n - 5\n= 3(8) - 5\n= 24 - 5\n= 19\n\nAnswer: Expression is 3n - 5; When n = 8, it equals 19',
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
          front: 'What is a variable?',
          back: 'A letter that represents an UNKNOWN number. Example: x, y, n, t. The value can change.',
          hint: 'A letter standing for a number'
        },
        {
          topicId: topic2.id,
          front: 'What is an algebraic expression?',
          back: 'A mathematical phrase with numbers, variables, and operations. Example: 2x + 5, 3n - 7',
          hint: 'Numbers, variables, and operations (no equals sign)'
        },
        {
          topicId: topic2.id,
          front: 'How do you evaluate an expression?',
          back: 'Substitute (replace) the variable with its value, then calculate following order of operations.',
          hint: 'Plug in the value and calculate'
        }
      ]
    });

    console.log('✅ Expanded: variables-and-expressions (now 5 problems, 6 flashcards)');
  }

  // Topic 3: Solving One-Step Equations (one-step-equations-prealgebra)
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'one-step-equations-prealgebra',
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
          question: 'Solve: x/5 = 8',
          solution: 'Step 1: Identify the operation.\nx is being divided by 5\n\nStep 2: Use inverse operation (multiply by 5).\nMultiply both sides by 5:\n5 × (x/5) = 5 × 8\n\nStep 3: Simplify.\nx = 40\n\nStep 4: Check.\n40/5 = 8 ✓\n\nAnswer: x = 40',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'You have some money. After spending $15, you have $42 left. Write and solve an equation to find how much money you started with.',
          solution: 'Step 1: Define the variable.\nLet x = money you started with\n\nStep 2: Write the equation.\nStarting money - spent = left\nx - 15 = 42\n\nStep 3: Solve (add 15 to both sides).\nx - 15 + 15 = 42 + 15\nx = 57\n\nStep 4: Check.\n$57 - $15 = $42 ✓\n\nStep 5: Answer the question.\nYou started with $57\n\nAnswer: x = 57; You started with $57',
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
          front: 'What is an equation?',
          back: 'A mathematical sentence with an EQUALS SIGN showing two expressions are equal. Example: x + 5 = 12',
          hint: 'Two sides equal, has = sign'
        },
        {
          topicId: topic3.id,
          front: 'What does it mean to "solve" an equation?',
          back: 'Find the value of the variable that makes the equation TRUE. Get the variable alone (isolate it).',
          hint: 'Find what number makes it true'
        },
        {
          topicId: topic3.id,
          front: 'What are inverse operations?',
          back: 'Operations that UNDO each other. Addition ↔ Subtraction, Multiplication ↔ Division',
          hint: 'Opposite operations that cancel out'
        }
      ]
    });

    console.log('✅ Expanded: one-step-equations-prealgebra (now 5 problems, 6 flashcards)');
  }

  console.log('\n🎉 ALL EXPANSION COMPLETE! All 9 partial topics now have 5 problems and 6 flashcards!');
  console.log('✨ Pre-Algebra course is now 100% complete with all content, problems, and flashcards!');
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
