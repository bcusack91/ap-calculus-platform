import 'dotenv/config'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Get all users
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true
    }
  });

  console.log('\n👤 USERS AND THEIR FLASHCARD PROGRESS\n');
  console.log('='.repeat(80));
  
  for (const user of users) {
    console.log(`\n📧 ${user.email} (${user.name || 'No name'})`);
    console.log(`   User ID: ${user.id}`);
    
    // Get their flashcard progress
    const progress = await prisma.flashcardProgress.findMany({
      where: {
        userId: user.id
      },
      include: {
        flashcard: {
          include: {
            topic: {
              select: {
                title: true,
                slug: true
              }
            }
          }
        }
      }
    });

    if (progress.length === 0) {
      console.log(`   ❌ No flashcard progress found`);
    } else {
      console.log(`   ✅ Total flashcards initialized: ${progress.length}`);
      
      // Group by topic
      const byTopic: Record<string, number> = {};
      for (const p of progress) {
        const topicTitle = p.flashcard.topic.title;
        byTopic[topicTitle] = (byTopic[topicTitle] || 0) + 1;
      }
      
      for (const [topic, count] of Object.entries(byTopic)) {
        console.log(`      - ${topic}: ${count} cards`);
      }
    }
    
    // Check specifically for reflection-refraction
    const reflectionCards = await prisma.flashcardProgress.findMany({
      where: {
        userId: user.id,
        flashcard: {
          topic: {
            slug: 'reflection-refraction'
          }
        }
      }
    });
    
    console.log(`\n   🔍 Reflection and Refraction cards for this user: ${reflectionCards.length}`);
  }

  await prisma.$disconnect();
}

main().catch(console.error);
