import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to AP Calculus - Batch 8: Integration Part 2 (6 topics)...');

  // Find the topics - some have 5+ problems and just need flashcards
  const volumesWasher = await prisma.topic.findFirst({
    where: { slug: 'volumes-washer-method' }
  });

  const volumesShell = await prisma.topic.findFirst({
    where: { slug: 'volumes-shell-method' }
  });

  const indefiniteIntegrals = await prisma.topic.findFirst({
    where: { slug: 'indefinite-integrals' }
  });

  const uSubstitution = await prisma.topic.findFirst({
    where: { slug: 'u-substitution' }
  });

  const integrationByParts = await prisma.topic.findFirst({
    where: { slug: 'integration-by-parts' }
  });

  const definiteIntegrals = await prisma.topic.findFirst({
    where: { slug: 'definite-integrals' }
  });

  if (!volumesWasher || !volumesShell || !indefiniteIntegrals || !uSubstitution || !integrationByParts || !definiteIntegrals) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Volumes: Washer Method (has 4, needs 1 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: volumesWasher.id,
        question: 'Find the volume when the region between y = x and y = x² from x = 0 to x = 1 is rotated about the x-axis.',
        solution: `Step 1: Identify outer and inner radii:
Outer radius R(x) = x (line is farther from axis)
Inner radius r(x) = x² (parabola is closer to axis)

Step 2: Set up washer method formula:
V = π∫[R(x)² - r(x)²] dx from 0 to 1

Step 3: Substitute:
V = π∫₀¹ [x² - (x²)²] dx
V = π∫₀¹ [x² - x⁴] dx

Step 4: Integrate:
V = π[x³/3 - x⁵/5]₀¹

Step 5: Evaluate:
V = π[(1/3 - 1/5) - 0]
V = π[5/15 - 3/15]
V = π[2/15]
V = 2π/15

Answer: V = 2π/15 cubic units`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: volumesWasher.id,
        front: 'What is the washer method formula?',
        back: 'V = π∫[R(x)² - r(x)²] dx, where R is outer radius and r is inner radius. Used when rotating around an axis with a hole.',
        hint: 'π∫[R² - r²] dx',
        isPremium: false
      },
      {
        topicId: volumesWasher.id,
        front: 'When do you use washer method vs disk method?',
        back: 'Use washer when there\'s a gap between the region and the axis of rotation (creates a hole). Use disk when the region touches the axis.',
        hint: 'Washer = hole, disk = solid',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: volumes-washer-method (now has 5 problems, 6 flashcards)');

  // TOPIC 2: Volumes: Shell Method (has 3, needs 2 more + 2 more flashcards)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: volumesShell.id,
        question: 'Use the shell method to find the volume when y = x² from x = 0 to x = 2 is rotated about the y-axis.',
        solution: `Step 1: Set up shell method:
Radius: r(x) = x (distance from y-axis)
Height: h(x) = x²
V = 2π∫ x·h(x) dx from 0 to 2

Step 2: Substitute:
V = 2π∫₀² x·x² dx
V = 2π∫₀² x³ dx

Step 3: Integrate:
V = 2π[x⁴/4]₀²

Step 4: Evaluate:
V = 2π[16/4 - 0]
V = 2π(4)
V = 8π

Answer: V = 8π cubic units`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: volumesShell.id,
        question: 'Find the volume when the region bounded by y = √x, y = 0, and x = 4 is rotated about the line x = -1.',
        solution: `Step 1: Set up shell method rotating about x = -1:
Radius: r(x) = x - (-1) = x + 1 (distance from x = -1)
Height: h(x) = √x
Bounds: x from 0 to 4

Step 2: Shell method formula:
V = 2π∫₀⁴ (x + 1)·√x dx

Step 3: Expand:
V = 2π∫₀⁴ [x√x + √x] dx
V = 2π∫₀⁴ [x^(3/2) + x^(1/2)] dx

Step 4: Integrate:
V = 2π[x^(5/2)/(5/2) + x^(3/2)/(3/2)]₀⁴
V = 2π[(2/5)x^(5/2) + (2/3)x^(3/2)]₀⁴

Step 5: Evaluate at x = 4:
x^(5/2) = (4)^(5/2) = 32
x^(3/2) = (4)^(3/2) = 8
V = 2π[(2/5)(32) + (2/3)(8)]
V = 2π[64/5 + 16/3]
V = 2π[192/15 + 80/15]
V = 2π[272/15]
V = 544π/15

Answer: V = 544π/15 cubic units`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: volumesShell.id,
        front: 'What is the shell method formula?',
        back: 'V = 2π∫ r(x)·h(x) dx, where r is radius (distance to axis) and h is height of shell.',
        hint: '2π∫ radius · height dx',
        isPremium: false
      },
      {
        topicId: volumesShell.id,
        front: 'When is shell method easier than washer method?',
        back: 'When rotating about the y-axis (or vertical line) with a function of x, or when washer method would require solving for x in terms of y.',
        hint: 'Avoids solving for inverse function',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: volumes-shell-method (now has 5 problems, 6 flashcards)');

  // TOPIC 3: Indefinite Integrals (has 7, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: indefiniteIntegrals.id,
        front: 'What is an indefinite integral?',
        back: '∫f(x) dx = F(x) + C, where F\'(x) = f(x). The family of all antiderivatives of f.',
        hint: 'Antiderivative + C',
        isPremium: false
      },
      {
        topicId: indefiniteIntegrals.id,
        front: 'What are basic power rule integrals?',
        back: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1), and ∫(1/x) dx = ln|x| + C',
        hint: 'Add 1 to power, divide by new power',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: indefinite-integrals (now has 7 problems, 6 flashcards)');

  // TOPIC 4: U-Substitution (has 7, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: uSubstitution.id,
        front: 'What is u-substitution?',
        back: 'A technique for integrals: let u = g(x), then du = g\'(x)dx. Transforms ∫f(g(x))g\'(x)dx into ∫f(u)du.',
        hint: 'Reverse chain rule',
        isPremium: false
      },
      {
        topicId: uSubstitution.id,
        front: 'How do you handle limits with u-substitution in definite integrals?',
        back: 'Either: 1) Convert limits to u-values and integrate in terms of u, or 2) Integrate in terms of u, substitute back to x, then use original limits.',
        hint: 'Change limits or substitute back',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: u-substitution (now has 7 problems, 6 flashcards)');

  // TOPIC 5: Integration by Parts (has 5, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: integrationByParts.id,
        front: 'What is the integration by parts formula?',
        back: '∫u dv = uv - ∫v du. Choose u using LIATE: Logarithmic, Inverse trig, Algebraic, Trig, Exponential.',
        hint: '∫u dv = uv - ∫v du',
        isPremium: false
      },
      {
        topicId: integrationByParts.id,
        front: 'What is the LIATE rule?',
        back: 'Priority for choosing u: Logarithmic > Inverse trig > Algebraic > Trig > Exponential. Choose u from highest priority.',
        hint: 'L-I-A-T-E priority order',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: integration-by-parts (now has 5 problems, 6 flashcards)');

  // TOPIC 6: Definite Integrals and Fundamental Theorem (has 7, needs 2 more flashcards)
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: definiteIntegrals.id,
        front: 'What is the Fundamental Theorem of Calculus (Part 1)?',
        back: 'If F\'(x) = f(x), then ∫ₐᵇ f(x)dx = F(b) - F(a). Connects antiderivatives to definite integrals.',
        hint: 'Evaluate antiderivative at endpoints',
        isPremium: false
      },
      {
        topicId: definiteIntegrals.id,
        front: 'What is the Fundamental Theorem of Calculus (Part 2)?',
        back: 'If g(x) = ∫ₐˣ f(t)dt, then g\'(x) = f(x). The derivative of an integral gives back the original function.',
        hint: 'd/dx[∫ₐˣ f(t)dt] = f(x)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added flashcards: definite-integrals (now has 7 problems, 6 flashcards)');

  console.log('\n✨ Successfully completed batch 8! Added 6 more Integration topics.');
  
  await prisma.$disconnect();
}

main();
