import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding flashcards to AP Calculus - Batch 5: Final Derivatives Topics (6 topics)...');

  // Find the topics - these already have 5+ problems, just need flashcards
  const powerRule = await prisma.topic.findFirst({
    where: { slug: 'power-rule-basics' }
  });

  const productRule = await prisma.topic.findFirst({
    where: { slug: 'product-rule' }
  });

  const quotientRule = await prisma.topic.findFirst({
    where: { slug: 'quotient-rule' }
  });

  const chainRule = await prisma.topic.findFirst({
    where: { slug: 'chain-rule' }
  });

  const implicitDiff = await prisma.topic.findFirst({
    where: { slug: 'implicit-differentiation' }
  });

  const relatedRates = await prisma.topic.findFirst({
    where: { slug: 'related-rates' }
  });

  if (!powerRule || !productRule || !quotientRule || !chainRule || !implicitDiff || !relatedRates) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: The Power Rule (has 7 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: powerRule.id,
        front: 'What is the power rule?',
        back: 'd/dx[xⁿ] = n·xⁿ⁻¹. Bring down the exponent and reduce the power by 1.',
        hint: 'Bring down exponent, subtract 1',
        isPremium: false
      },
      {
        topicId: powerRule.id,
        front: 'What is d/dx[x] and d/dx[1]?',
        back: 'd/dx[x] = 1 (power rule with n=1), and d/dx[1] = 0 (derivative of any constant is 0)',
        hint: 'Variable→1, constant→0',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: power-rule-basics (now has 7 problems, 6 flashcards)');

  // TOPIC 2: The Product Rule (has 6 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: productRule.id,
        front: 'What is the product rule?',
        back: 'd/dx[f·g] = f\'·g + f·g\'. "First times derivative of second, plus second times derivative of first."',
        hint: 'f\'g + fg\'',
        isPremium: false
      },
      {
        topicId: productRule.id,
        front: 'When should you use the product rule?',
        back: 'When finding the derivative of two functions multiplied together, especially when neither is a constant.',
        hint: 'Product of two functions',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: product-rule (now has 6 problems, 6 flashcards)');

  // TOPIC 3: The Quotient Rule (has 6 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: quotientRule.id,
        front: 'What is the quotient rule?',
        back: 'd/dx[f/g] = (f\'·g - f·g\')/g². "Low dee high minus high dee low, over low squared."',
        hint: '(f\'g - fg\')/g²',
        isPremium: false
      },
      {
        topicId: quotientRule.id,
        front: 'What\'s a common mistake with the quotient rule?',
        back: 'Getting the order wrong in the numerator. Remember: (derivative of top)·(bottom) MINUS (top)·(derivative of bottom).',
        hint: 'Order matters: f\'g - fg\'',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: quotient-rule (now has 6 problems, 6 flashcards)');

  // TOPIC 4: The Chain Rule (has 7 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: chainRule.id,
        front: 'What is the chain rule?',
        back: 'd/dx[f(g(x))] = f\'(g(x))·g\'(x). "Derivative of outer times derivative of inner."',
        hint: 'Outer\' · inner\'',
        isPremium: false
      },
      {
        topicId: chainRule.id,
        front: 'When do you use the chain rule?',
        back: 'When you have a composition of functions (function within a function). Look for nested expressions.',
        hint: 'Composite functions',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: chain-rule (now has 7 problems, 6 flashcards)');

  // TOPIC 5: Implicit Differentiation (has 7 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: implicitDiff.id,
        front: 'What is implicit differentiation?',
        back: 'A technique for finding dy/dx when y is not explicitly solved for. Differentiate both sides with respect to x, using chain rule for y terms.',
        hint: 'Differentiate equation, treat y as function of x',
        isPremium: false
      },
      {
        topicId: implicitDiff.id,
        front: 'What happens when you take d/dx of a y term?',
        back: 'd/dx[y] = dy/dx, and d/dx[y²] = 2y·dy/dx. Always multiply by dy/dx (chain rule).',
        hint: 'Multiply by dy/dx',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: implicit-differentiation (now has 7 problems, 6 flashcards)');

  // TOPIC 6: Related Rates (has 5 problems, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: relatedRates.id,
        front: 'What are related rates problems?',
        back: 'Problems where two or more quantities change over time, and their rates of change are related through an equation.',
        hint: 'Rates changing together over time',
        isPremium: false
      },
      {
        topicId: relatedRates.id,
        front: 'What are the steps for solving related rates?',
        back: '1) Draw diagram, 2) Write equation relating variables, 3) Differentiate with respect to time, 4) Substitute known values, 5) Solve for unknown rate.',
        hint: 'Diagram → equation → differentiate → substitute → solve',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: related-rates (now has 5 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 5! Derivatives category complete (16/16 topics)!');
  
  await prisma.$disconnect();
}

main();
