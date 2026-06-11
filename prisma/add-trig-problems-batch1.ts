import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Trigonometry topics - Batch 1 (2 topics)...');

  // Find the topics
  const inverseTrig = await prisma.topic.findFirst({
    where: { slug: 'inverse-trig-functions' }
  });

  const sumDifference = await prisma.topic.findFirst({
    where: { slug: 'sum-difference-identities' }
  });

  if (!inverseTrig || !sumDifference) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Inverse Trigonometric Functions (needs 2 more problems to reach 5)
  // Adding problems 4 and 5 (orders 3 and 4)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: inverseTrig.id,
        question: 'Evaluate: arcsin(√3/2)',
        solution: `Step 1: Recall the definition of arcsin:
arcsin(x) returns the angle θ where sin(θ) = x
and -π/2 ≤ θ ≤ π/2 (range of arcsin)

Step 2: Find the angle:
We need sin(θ) = √3/2

Step 3: Use unit circle knowledge:
sin(π/3) = √3/2
sin(60°) = √3/2

Step 4: Check if π/3 is in the range [-π/2, π/2]:
π/3 ≈ 1.047 radians
-π/2 ≈ -1.571 to π/2 ≈ 1.571
Yes, π/3 is in the valid range ✓

Answer: arcsin(√3/2) = π/3 or 60°`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: inverseTrig.id,
        question: 'Simplify: tan(arcsin(x))',
        solution: `Step 1: Let θ = arcsin(x):
This means sin(θ) = x and -π/2 ≤ θ ≤ π/2

Step 2: Draw a right triangle:
If sin(θ) = x = x/1 = opposite/hypotenuse
Then: opposite = x, hypotenuse = 1

Step 3: Find the adjacent side using Pythagorean theorem:
adjacent² + opposite² = hypotenuse²
adjacent² + x² = 1
adjacent² = 1 - x²
adjacent = √(1 - x²)

Step 4: Calculate tan(θ):
tan(θ) = opposite/adjacent
tan(θ) = x/√(1 - x²)

Step 5: Substitute back:
tan(arcsin(x)) = x/√(1 - x²)

Domain restriction: -1 < x < 1 (excluding ±1)

Answer: tan(arcsin(x)) = x/√(1 - x²)`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: inverse-trig-functions (now has 5 total)');

  // TOPIC 2: Sum and Difference Identities (needs 5 problems total)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: sumDifference.id,
        question: 'Use the sum formula to find the exact value of sin(75°).',
        solution: `Step 1: Express 75° as a sum of known angles:
75° = 45° + 30°

Step 2: Use the sine sum formula:
sin(A + B) = sin(A)cos(B) + cos(A)sin(B)

Step 3: Substitute A = 45° and B = 30°:
sin(75°) = sin(45°)cos(30°) + cos(45°)sin(30°)

Step 4: Substitute known values:
sin(45°) = √2/2
cos(45°) = √2/2
sin(30°) = 1/2
cos(30°) = √3/2

Step 5: Calculate:
sin(75°) = (√2/2)(√3/2) + (√2/2)(1/2)
         = (√6/4) + (√2/4)
         = (√6 + √2)/4

Answer: sin(75°) = (√6 + √2)/4`,
        difficulty: 'EASY',
        order: 0,
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        question: 'Find the exact value of cos(15°) using a difference formula.',
        solution: `Step 1: Express 15° as a difference of known angles:
15° = 45° - 30°

Step 2: Use the cosine difference formula:
cos(A - B) = cos(A)cos(B) + sin(A)sin(B)

Step 3: Substitute A = 45° and B = 30°:
cos(15°) = cos(45°)cos(30°) + sin(45°)sin(30°)

Step 4: Substitute known values:
cos(45°) = √2/2
sin(45°) = √2/2
cos(30°) = √3/2
sin(30°) = 1/2

Step 5: Calculate:
cos(15°) = (√2/2)(√3/2) + (√2/2)(1/2)
         = (√6/4) + (√2/4)
         = (√6 + √2)/4

Answer: cos(15°) = (√6 + √2)/4`,
        difficulty: 'EASY',
        order: 1,
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        question: 'If sin(α) = 3/5 with α in Quadrant I, and cos(β) = 5/13 with β in Quadrant I, find sin(α + β).',
        solution: `Step 1: Find cos(α) using Pythagorean identity:
sin²(α) + cos²(α) = 1
(3/5)² + cos²(α) = 1
9/25 + cos²(α) = 1
cos²(α) = 16/25
cos(α) = 4/5 (positive in Quadrant I)

Step 2: Find sin(β) using Pythagorean identity:
sin²(β) + cos²(β) = 1
sin²(β) + (5/13)² = 1
sin²(β) + 25/169 = 1
sin²(β) = 144/169
sin(β) = 12/13 (positive in Quadrant I)

Step 3: Use sine sum formula:
sin(α + β) = sin(α)cos(β) + cos(α)sin(β)

Step 4: Substitute values:
sin(α + β) = (3/5)(5/13) + (4/5)(12/13)
           = 15/65 + 48/65
           = 63/65

Answer: sin(α + β) = 63/65`,
        difficulty: 'MEDIUM',
        order: 2,
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        question: 'Simplify: cos(x)cos(y) - sin(x)sin(y)',
        solution: `Step 1: Recognize this pattern:
This matches the cosine sum formula

Step 2: Recall the cosine sum formula:
cos(A + B) = cos(A)cos(B) - sin(A)sin(B)

Step 3: Compare to our expression:
cos(x)cos(y) - sin(x)sin(y)

Step 4: This is exactly cos(x + y):
cos(x)cos(y) - sin(x)sin(y) = cos(x + y)

Answer: cos(x + y)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        question: 'Prove: tan(π/4 + x) = (1 + tan(x))/(1 - tan(x))',
        solution: `Step 1: Use tangent sum formula:
tan(A + B) = (tan(A) + tan(B))/(1 - tan(A)tan(B))

Step 2: Substitute A = π/4 and B = x:
tan(π/4 + x) = (tan(π/4) + tan(x))/(1 - tan(π/4)tan(x))

Step 3: Use tan(π/4) = 1:
tan(π/4 + x) = (1 + tan(x))/(1 - (1)tan(x))

Step 4: Simplify:
tan(π/4 + x) = (1 + tan(x))/(1 - tan(x))

Step 5: Verification complete:
Left side = Right side ✓

This identity is useful for shifting tangent functions.

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
        topicId: sumDifference.id,
        front: 'What is the sine sum formula?',
        back: 'sin(A + B) = sin(A)cos(B) + cos(A)sin(B)',
        hint: 'sin·cos + cos·sin',
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        front: 'What is the sine difference formula?',
        back: 'sin(A - B) = sin(A)cos(B) - cos(A)sin(B)',
        hint: 'sin·cos - cos·sin',
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        front: 'What is the cosine sum formula?',
        back: 'cos(A + B) = cos(A)cos(B) - sin(A)sin(B)',
        hint: 'cos·cos - sin·sin',
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        front: 'What is the cosine difference formula?',
        back: 'cos(A - B) = cos(A)cos(B) + sin(A)sin(B)',
        hint: 'cos·cos + sin·sin',
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        front: 'What is the tangent sum formula?',
        back: 'tan(A + B) = (tan(A) + tan(B))/(1 - tan(A)tan(B))',
        hint: '(tan + tan)/(1 - tan·tan)',
        isPremium: false
      },
      {
        topicId: sumDifference.id,
        front: 'What is the tangent difference formula?',
        back: 'tan(A - B) = (tan(A) - tan(B))/(1 + tan(A)tan(B))',
        hint: '(tan - tan)/(1 + tan·tan)',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added problems and flashcards: sum-difference-identities');

  console.log('\n✨ Successfully completed batch 1! Added content to 2 trigonometry topics.');
  
  await prisma.$disconnect();
}

main();
