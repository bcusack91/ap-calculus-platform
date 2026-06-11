import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Finding remaining ACT topics...\n');

  const actCourse = await prisma.course.findFirst({
    where: { slug: 'act-prep' },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              title: true,
              slug: true,
              _count: {
                select: {
                  exampleProblems: true,
                  flashcards: true
                }
              }
            }
          }
        }
      }
    }
  });

  console.log('Missing ACT topics:');
  const missingTopics: Array<{slug: string, title: string}> = [];
  
  if (actCourse) {
    actCourse.categories.forEach(cat => {
      cat.topics.forEach(topic => {
        const complete = topic._count.exampleProblems > 0 && topic._count.flashcards > 0;
        if (!complete) {
          console.log(`  - ${topic.title} (slug: "${topic.slug}")`);
          console.log(`    Problems: ${topic._count.exampleProblems}, Flashcards: ${topic._count.flashcards}`);
          missingTopics.push({ slug: topic.slug, title: topic.title });
        }
      });
    });
  }

  console.log(`\nTotal missing: ${missingTopics.length} topics`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
