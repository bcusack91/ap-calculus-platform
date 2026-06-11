import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Trigonometry topics - Batch 2 FINAL (1 topic)...');

  // Find the topic
  const doubleHalfAngle = await prisma.topic.findFirst({
    where: { slug: 'double-half-angle-identities' }
  });

  if (!doubleHalfAngle) {
    throw new Error('Topic not found');
  }

  // TOPIC: Double Angle and Half Angle Identities (needs 5 problems total)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: doubleHalfAngle.id,
        question: 'If sin(θ) = 3/5 and θ is in Quadrant II, find sin(2θ).',
        solution: `Step 1: Find cos(θ) using Pythagorean identity:
sin²(θ) + cos²(θ) = 1
(3/5)² + cos²(θ) = 1
9/25 + cos²(θ) = 1
cos²(θ) = 16/25
cos(θ) = ±4/5

Step 2: Determine sign of cos(θ):
θ is in Quadrant II, so cos(θ) is negative
cos(θ) = -4/5

Step 3: Use double angle formula for sine:
sin(2θ) = 2sin(θ)cos(θ)

Step 4: Substitute values:
sin(2θ) = 2(3/5)(-4/5)
        = 2(-12/25)
        = -24/25

Answer: sin(2θ) = -24/25`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        question: 'Use a double angle formula to find cos(2θ) if cos(θ) = 5/13.',
        solution: `Step 1: Choose a double angle formula for cosine:
There are three options:
• cos(2θ) = cos²(θ) - sin²(θ)
• cos(2θ) = 2cos²(θ) - 1
• cos(2θ) = 1 - 2sin²(θ)

Step 2: Use the second formula (easiest with given info):
cos(2θ) = 2cos²(θ) - 1

Step 3: Substitute cos(θ) = 5/13:
cos(2θ) = 2(5/13)² - 1
        = 2(25/169) - 1
        = 50/169 - 169/169
        = -119/169

Answer: cos(2θ) = -119/169`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        question: 'Simplify: 2sin(x)cos(x)',
        solution: `Step 1: Recognize the double angle pattern:
This matches the double angle formula for sine

Step 2: Recall the double angle formula:
sin(2A) = 2sin(A)cos(A)

Step 3: Compare to our expression:
2sin(x)cos(x) matches with A = x

Step 4: Apply the formula:
2sin(x)cos(x) = sin(2x)

Answer: sin(2x)`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        question: 'Find sin(θ/2) if cos(θ) = 7/25 and θ is in Quadrant I.',
        solution: `Step 1: Use the half angle formula for sine:
sin(θ/2) = ±√[(1 - cos(θ))/2]

Step 2: Substitute cos(θ) = 7/25:
sin(θ/2) = ±√[(1 - 7/25)/2]
         = ±√[(25/25 - 7/25)/2]
         = ±√[(18/25)/2]
         = ±√[18/50]
         = ±√[9/25]
         = ±3/5

Step 3: Determine the sign:
If θ is in Quadrant I, then 0° < θ < 90°
Therefore: 0° < θ/2 < 45°
θ/2 is in Quadrant I, so sin(θ/2) is positive

Step 4: Choose the positive value:
sin(θ/2) = 3/5

Answer: sin(θ/2) = 3/5`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        question: 'Prove the identity: tan(2θ) = 2tan(θ)/(1 - tan²(θ))',
        solution: `Step 1: Start with the double angle formula for sine and cosine:
tan(2θ) = sin(2θ)/cos(2θ)

Step 2: Apply double angle formulas:
tan(2θ) = [2sin(θ)cos(θ)]/[cos²(θ) - sin²(θ)]

Step 3: Divide numerator and denominator by cos²(θ):
tan(2θ) = [2sin(θ)cos(θ)/cos²(θ)]/[(cos²(θ) - sin²(θ))/cos²(θ)]

Step 4: Simplify each part:
Numerator: 2sin(θ)cos(θ)/cos²(θ) = 2sin(θ)/cos(θ) = 2tan(θ)

Denominator: (cos²(θ) - sin²(θ))/cos²(θ)
           = cos²(θ)/cos²(θ) - sin²(θ)/cos²(θ)
           = 1 - tan²(θ)

Step 5: Combine:
tan(2θ) = 2tan(θ)/(1 - tan²(θ))

Identity proven! ✓

Answer: Proven ✓`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: doubleHalfAngle.id,
        front: 'What is the double angle formula for sine?',
        back: 'sin(2θ) = 2sin(θ)cos(θ)',
        hint: '2sin·cos',
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        front: 'What are the three double angle formulas for cosine?',
        back: 'cos(2θ) = cos²(θ) - sin²(θ) = 2cos²(θ) - 1 = 1 - 2sin²(θ)',
        hint: 'Three equivalent forms',
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        front: 'What is the double angle formula for tangent?',
        back: 'tan(2θ) = 2tan(θ)/(1 - tan²(θ))',
        hint: '2tan/(1 - tan²)',
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        front: 'What is the half angle formula for sine?',
        back: 'sin(θ/2) = ±√[(1 - cos(θ))/2]. Sign depends on the quadrant of θ/2.',
        hint: '±√[(1 - cos)/2]',
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        front: 'What is the half angle formula for cosine?',
        back: 'cos(θ/2) = ±√[(1 + cos(θ))/2]. Sign depends on the quadrant of θ/2.',
        hint: '±√[(1 + cos)/2]',
        isPremium: false
      },
      {
        topicId: doubleHalfAngle.id,
        front: 'What is the half angle formula for tangent?',
        back: 'tan(θ/2) = (1 - cos(θ))/sin(θ) = sin(θ)/(1 + cos(θ))',
        hint: 'Two equivalent forms',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: double-half-angle-identities');

  console.log('\n🎉✨ TRIGONOMETRY COMPLETE! All 8 trigonometry topics now have ≥5 problems! ✨🎉');
  
  await prisma.$disconnect();
}

main();
