import 'dotenv/config'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const userEmail = 'brendan0044@yahoo.com';

  const user = await prisma.user.findUnique({
    where: { email: userEmail }
  });

  if (!user) {
    console.log('User not found');
    return;
  }

  // Get all flashcard progress
  const progress = await prisma.flashcardProgress.findMany({
    where: {
      userId: user.id
    },
    include: {
      flashcard: {
        include: {
          topic: true
        }
      }
    },
    orderBy: {
      nextReview: 'asc'
    }
  });

  console.log(`\n🎴 Flashcard Progress for ${userEmail}\n`);
  console.log(`Total flashcards: ${progress.length}\n`);

  const now = new Date();
  console.log(`Current time: ${now.toISOString()}\n`);

  let dueCount = 0;
  for (const p of progress) {
    const isDue = p.nextReview <= now;
    if (isDue) dueCount++;
    
    console.log(`${isDue ? '✅ DUE' : '⏰ LATER'} | ${p.flashcard.topic.title}`);
    console.log(`   Next Review: ${p.nextReview.toISOString()}`);
    console.log(`   Repetitions: ${p.repetitions}, Interval: ${p.interval} days`);
    console.log('');
  }

  console.log(`\n📊 Summary: ${dueCount} cards due now, ${progress.length - dueCount} for later\n`);

  await prisma.$disconnect();
}

main().catch(console.error);
