import 'dotenv/config'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Find the reflection-refraction topic
  const topic = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' },
    select: {
      id: true,
      title: true,
      slug: true
    }
  });

  if (!topic) {
    console.log('Topic not found!');
    return;
  }

  console.log(`\n🔍 Topic: ${topic.title}`);
  console.log(`   ID: ${topic.id}\n`);

  // Get all users' progress for this topic
  const progresses = await prisma.topicProgress.findMany({
    where: {
      topicId: topic.id
    },
    include: {
      user: {
        select: {
          email: true,
          name: true
        }
      }
    }
  });

  console.log(`📊 User Progress:\n`);
  
  if (progresses.length === 0) {
    console.log('   ❌ No progress records found');
  } else {
    for (const progress of progresses) {
      console.log(`   👤 ${progress.user.email}`);
      console.log(`      Status: ${progress.status}`);
      console.log(`      Mastery: ${Math.round(progress.masteryLevel * 100)}%`);
      console.log(`      Completed At: ${progress.completedAt || 'Not completed'}`);
      console.log(`      Last Accessed: ${progress.lastAccessed}`);
      console.log('');
    }
  }

  await prisma.$disconnect();
}

main().catch(console.error);
