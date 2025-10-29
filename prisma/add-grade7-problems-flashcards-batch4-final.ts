import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 7 Math practice problems and flashcards - Batch 4 (Final topic)...\n');

  // Topic 1: Surface Area and Volume
  const topic1 = await prisma.topic.findFirst({
    where: { slug: 'surface-area-volume' }
  });

  if (topic1) {
    // Add practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Find the volume of a rectangular prism with length 6 cm, width 4 cm, and height 5 cm.',
          solution: 'Use the formula: V = lwh\n\nV = 6 × 4 × 5\nV = 120 cm³\n\nAnswer: 120 cm³',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Find the surface area of a cube with side length 3 inches.',
          solution: 'Use the formula: SA = 6s²\n\nSA = 6 × (3²)\nSA = 6 × 9\nSA = 54 in²\n\nAnswer: 54 in²',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'A cylinder has a radius of 4 cm and height of 10 cm. Find the volume. Use π ≈ 3.14.',
          solution: 'Use the formula: V = πr²h\n\nV = 3.14 × (4²) × 10\nV = 3.14 × 16 × 10\nV = 3.14 × 160\nV = 502.4 cm³\n\nAnswer: 502.4 cm³ (or about 502 cm³)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'A rectangular box is 8 ft long, 5 ft wide, and 3 ft tall. How much cardboard is needed to make the box (surface area)?',
          solution: 'Use the formula: SA = 2(lw + lh + wh)\n\nSA = 2(8×5 + 8×3 + 5×3)\nSA = 2(40 + 24 + 15)\nSA = 2(79)\nSA = 158 ft²\n\nAnswer: 158 ft²',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A cone-shaped container has a radius of 6 inches and a height of 15 inches. How much liquid can it hold? Use π ≈ 3.14.',
          solution: 'Use the formula: V = (1/3)πr²h\n\nV = (1/3) × 3.14 × (6²) × 15\nV = (1/3) × 3.14 × 36 × 15\nV = (1/3) × 3.14 × 540\nV = (1/3) × 1,695.6\nV = 565.2 in³\n\nAnswer: 565.2 in³ (or about 565 cubic inches)',
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
          front: 'What is volume and what units is it measured in?',
          back: 'Volume measures the space inside a 3D shape.\n\nUnits: CUBIC units (cm³, in³, m³, ft³)\n\nExample: A box holds 50 cm³ of space.',
          hint: 'How much space is inside - uses cubic units'
        },
        {
          topicId: topic1.id,
          front: 'What is surface area and what units is it measured in?',
          back: 'Surface area measures the total area of all outer surfaces of a 3D shape.\n\nUnits: SQUARE units (cm², in², m², ft²)\n\nExample: It takes 100 cm² of paper to wrap a box.',
          hint: 'How much covers the outside - uses square units'
        },
        {
          topicId: topic1.id,
          front: 'What is the volume formula for a rectangular prism?',
          back: 'V = lwh\n\nV = length × width × height\n\nExample: 5 cm × 3 cm × 4 cm = 60 cm³',
          hint: 'Multiply all three dimensions'
        },
        {
          topicId: topic1.id,
          front: 'What is the volume formula for a cylinder?',
          back: 'V = πr²h\n\nV = π × radius² × height\n\nExample: r = 3 cm, h = 10 cm\nV = π(3²)(10) = 90π ≈ 282.6 cm³',
          hint: 'Pi times radius squared times height'
        },
        {
          topicId: topic1.id,
          front: 'What is the volume formula for a cone?',
          back: 'V = (1/3)πr²h\n\nIt\'s ONE-THIRD of a cylinder\'s volume!\n\nExample: r = 4 in, h = 9 in\nV = (1/3)π(4²)(9) = 48π ≈ 150.72 in³',
          hint: 'One-third of a cylinder formula'
        },
        {
          topicId: topic1.id,
          front: 'What is the surface area formula for a rectangular prism?',
          back: 'SA = 2(lw + lh + wh)\n\nOr: 2 × (length×width + length×height + width×height)\n\nExample: 5×3×4\nSA = 2(15 + 20 + 12) = 2(47) = 94 units²',
          hint: 'Add areas of all 6 faces'
        }
      ]
    });
    console.log('✅ Added problems and flashcards for: surface-area-volume');
  }

  console.log('\n✨ Successfully added practice problems and flashcards for the final topic!');
  console.log('📊 Total added: 5 problems, 6 flashcards');
  console.log('\n🎉 All Grade 7 Math topics now have content, problems, AND flashcards! (100% complete)');
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
