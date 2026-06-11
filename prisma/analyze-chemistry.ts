import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function analyze() {
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' },
    include: {
      categories: {
        include: {
          topics: {
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    }
  });

  if (!course) {
    console.log('❌ AP Chemistry course not found');
    return;
  }

  console.log('📊 AP Chemistry Content Analysis:\n');
  
  let totalTopics = 0;
  let goodContent = 0;
  let needsContent = 0;

  for (const category of course.categories) {
    console.log(`\n📁 ${category.name} [${category.topics.length} topics]:`);
    
    for (const topic of category.topics) {
      totalTopics++;
      const contentLength = topic.textContent?.length || 0;
      const status = contentLength >= 500 ? '✅' : '❌';
      
      if (contentLength >= 500) {
        goodContent++;
      } else {
        needsContent++;
      }
      
      console.log(`   ${status} ${topic.slug}: '${topic.title}' (${contentLength} chars)`);
    }
  }

  console.log(`\n📈 SUMMARY:`);
  console.log(`✅ Topics with good content (≥500 chars): ${goodContent}`);
  console.log(`❌ Topics needing content (<500 chars): ${needsContent}`);
  console.log(`📊 Total AP Chemistry topics: ${totalTopics}`);
}

analyze()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
