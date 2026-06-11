import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const geometry = await prisma.course.findFirst({
    where: { slug: 'geometry' },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              id: true,
              slug: true,
              title: true,
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

  if (!geometry) {
    console.log('❌ Geometry course not found');
    return;
  }

  console.log('\n📐 GEOMETRY COURSE STATUS\n');
  console.log(`Course: ${geometry.name}`);
  console.log(`Slug: ${geometry.slug}\n`);

  let totalTopics = 0;
  let topicsWithProblems = 0;
  let topicsWithFlashcards = 0;

  geometry.categories.forEach(category => {
    console.log(`\n📁 ${category.name} (${category.topics.length} topics)`);
    console.log('─'.repeat(60));
    
    category.topics.forEach(topic => {
      totalTopics++;
      const hasProblems = topic._count.exampleProblems >= 5;
      const hasFlashcards = topic._count.flashcards >= 6;

      if (hasProblems) topicsWithProblems++;
      if (hasFlashcards) topicsWithFlashcards++;

      const problemsStatus = hasProblems ? '✅' : '❌';
      const flashcardsStatus = hasFlashcards ? '✅' : '❌';

      console.log(`${problemsStatus} ${flashcardsStatus} ${topic.title}`);
      console.log(`   Slug: ${topic.slug}`);
      console.log(`   Problems: ${topic._count.exampleProblems} | Flashcards: ${topic._count.flashcards}`);
    });
  });

  console.log('\n' + '═'.repeat(60));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(60));
  console.log(`Total Topics: ${totalTopics}`);
  console.log(`Topics with problems (≥5): ${topicsWithProblems}/${totalTopics} (${Math.round(topicsWithProblems/totalTopics*100)}%)`);
  console.log(`Topics with flashcards (≥6): ${topicsWithFlashcards}/${totalTopics} (${Math.round(topicsWithFlashcards/totalTopics*100)}%)`);

  const needProblems = totalTopics - topicsWithProblems;
  const needFlashcards = totalTopics - topicsWithFlashcards;

  console.log('\n📋 TO-DO:');
  if (needProblems > 0) console.log(`   • Add problems to ${needProblems} topics`);
  if (needFlashcards > 0) console.log(`   • Add flashcards to ${needFlashcards} topics`);

  await prisma.$disconnect();
}

main();
