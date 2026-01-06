import 'dotenv/config'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const userEmail = 'brendan0044@yahoo.com';
  const topicSlug = 'reflection-refraction';

  // Find user
  const user = await prisma.user.findUnique({
    where: { email: userEmail }
  });

  if (!user) {
    console.log(`❌ User ${userEmail} not found`);
    return;
  }

  // Find topic with flashcards
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    include: {
      flashcards: true
    }
  });

  if (!topic) {
    console.log(`❌ Topic ${topicSlug} not found`);
    return;
  }

  console.log(`\n🎴 Initializing flashcards for ${user.email}`);
  console.log(`   Topic: ${topic.title}`);
  console.log(`   Flashcards to initialize: ${topic.flashcards.length}\n`);

  let initialized = 0;
  let alreadyExisted = 0;

  for (const flashcard of topic.flashcards) {
    const result = await prisma.flashcardProgress.upsert({
      where: {
        userId_flashcardId: {
          userId: user.id,
          flashcardId: flashcard.id
        }
      },
      create: {
        userId: user.id,
        flashcardId: flashcard.id,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date(),
        lastReviewed: new Date(),
        reviewCount: 0
      },
      update: {} // Don't overwrite if already exists
    });

    if (result.reviewCount === 0 && result.repetitions === 0) {
      initialized++;
    } else {
      alreadyExisted++;
    }
  }

  console.log(`✅ Complete!`);
  console.log(`   New flashcards initialized: ${initialized}`);
  console.log(`   Already existed: ${alreadyExisted}`);
  console.log(`\n💡 You can now visit /flashcards/review to see your cards!`);

  await prisma.$disconnect();
}

main().catch(console.error);
