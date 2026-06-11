import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking Algebra 2 course status...\n');

  const algebra2 = await prisma.course.findFirst({
    where: { slug: 'algebra-2' },
    include: {
      categories: {
        include: {
          topics: {
            include: {
              _count: {
                select: {
                  exampleProblems: true,
                  flashcards: true
                }
              }
            },
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    }
  });

  if (!algebra2) {
    console.log('❌ Algebra 2 course not found');
    return;
  }

  console.log(`📚 Course: ${algebra2.name}`);
  console.log(`   Slug: ${algebra2.slug}\n`);

  let totalTopics = 0;
  let topicsWithEnoughProblems = 0;
  let topicsWithEnoughFlashcards = 0;

  for (const category of algebra2.categories) {
    console.log(`📁 Category: ${category.name}`);
    console.log(`   Topics in this category:`);

    for (const topic of category.topics) {
      const problems = topic._count.exampleProblems;
      const flashcards = topic._count.flashcards;
      const hasEnoughProblems = problems >= 5;
      const hasEnoughFlashcards = flashcards >= 6;

      totalTopics++;
      if (hasEnoughProblems) topicsWithEnoughProblems++;
      if (hasEnoughFlashcards) topicsWithEnoughFlashcards++;

      const statusIcon = (hasEnoughProblems && hasEnoughFlashcards) ? '✅' : '❌';
      
      console.log(`   ${statusIcon} ${topic.title} (${topic.slug})`);
      console.log(`      Problems: ${problems}/5, Flashcards: ${flashcards}/6`);
    }
    console.log('');
  }

  console.log('=' .repeat(60));
  console.log(`📊 SUMMARY:`);
  console.log(`   Total topics: ${totalTopics}`);
  console.log(`   Topics with ≥5 problems: ${topicsWithEnoughProblems}/${totalTopics} (${Math.round(topicsWithEnoughProblems/totalTopics*100)}%)`);
  console.log(`   Topics with ≥6 flashcards: ${topicsWithEnoughFlashcards}/${totalTopics} (${Math.round(topicsWithEnoughFlashcards/totalTopics*100)}%)`);
  console.log(`   Topics fully complete: ${Math.min(topicsWithEnoughProblems, topicsWithEnoughFlashcards)}/${totalTopics}`);
  console.log('=' .repeat(60));

  await prisma.$disconnect();
}

main();
