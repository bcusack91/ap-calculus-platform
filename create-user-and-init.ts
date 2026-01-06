import 'dotenv/config'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const userId = 'cmjyg2a0w00000fiwvluahgix';
  const email = 'brendan-session@yahoo.com'; // Unique email for this session
  const name = 'Brendan Cusack';

  // Check if user already exists
  const existing = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (existing) {
    console.log('✅ User already exists:', existing.email);
  } else {
    // Create the user with the specific ID
    const user = await prisma.user.create({
      data: {
        id: userId,
        email: email,
        name: name,
        emailVerified: new Date(),
      }
    });
    console.log('✅ Created user:', user.email, '(ID:', user.id, ')');
  }

  // Now initialize flashcards for reflection-refraction
  const topic = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' },
    include: {
      flashcards: true
    }
  });

  if (!topic) {
    console.log('❌ Topic not found');
    return;
  }

  console.log(`\n🎴 Initializing ${topic.flashcards.length} flashcards for reflection-refraction...\n`);

  let initialized = 0;
  for (const flashcard of topic.flashcards) {
    await prisma.flashcardProgress.upsert({
      where: {
        userId_flashcardId: {
          userId: userId,
          flashcardId: flashcard.id
        }
      },
      create: {
        userId: userId,
        flashcardId: flashcard.id,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date(),
        lastReviewed: new Date(),
        reviewCount: 0
      },
      update: {}
    });
    initialized++;
  }

  console.log(`✅ Initialized ${initialized} flashcards!`);
  console.log(`\n💡 Refresh /flashcards/review-dashboard to see your cards!`);

  await prisma.$disconnect();
}

main().catch(console.error);
