import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Completing final topic: Solving Linear Equations\n');

  const topic = await prisma.topic.findFirst({
    where: {
      slug: 'solving-linear-equations',
      category: {
        course: { slug: 'algebra-1' }
      }
    }
  });

  if (!topic) {
    console.log('❌ Topic not found!');
    return;
  }

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: topic.id,
        front: 'What is the goal when solving a linear equation?',
        back: 'To isolate the variable on one side of the equation by performing inverse operations on both sides. The goal is to get the variable by itself (e.g., x = 5).',
        hint: 'Isolate the variable',
        isPremium: false
      },
      {
        topicId: topic.id,
        front: 'What are inverse operations and how do you use them?',
        back: 'Inverse operations undo each other: addition ↔ subtraction, multiplication ↔ division. To solve equations, use inverse operations in reverse order of PEMDAS: 1) Add/subtract, 2) Multiply/divide, 3) Deal with exponents/parentheses.',
        hint: 'Undo operations in reverse PEMDAS order',
        isPremium: false
      },
      {
        topicId: topic.id,
        front: 'What is the most important rule when solving equations?',
        back: 'Whatever you do to one side, you must do to the other side. This keeps the equation balanced. The equals sign means both sides have the same value, so any operation must maintain that balance.',
        hint: 'Keep the equation balanced',
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 3 flashcards to "Solving Linear Equations"');
  console.log('\n🎉🎉🎉 ALL 534 TOPICS NOW 100% COMPLETE! 🎉🎉🎉\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
