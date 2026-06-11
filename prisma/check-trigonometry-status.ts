import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking AP Precalculus course status...\n');

  // Find the AP Precalculus course
  const trigCourse = await prisma.course.findFirst({
    where: { slug: 'ap-precalculus' },
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

  if (!trigCourse) {
    console.log('❌ AP Precalculus course not found!');
    await prisma.$disconnect();
    return;
  }

  console.log(`✅ Found course: ${trigCourse.name}`);
  console.log(`Categories: ${trigCourse.categories.length}\n`);

  let totalTopics = 0;
  let topicsWithEnoughProblems = 0;
  let topicsWithEnoughFlashcards = 0;

  trigCourse.categories.forEach((category) => {
    console.log(`\n📁 ${category.name}:`);
    
    category.topics.forEach((topic) => {
      totalTopics++;
      const hasEnoughProblems = topic._count.exampleProblems >= 5;
      const hasEnoughFlashcards = topic._count.flashcards >= 6;
      
      if (hasEnoughProblems) topicsWithEnoughProblems++;
      if (hasEnoughFlashcards) topicsWithEnoughFlashcards++;
      
      const problemStatus = hasEnoughProblems ? '✅' : '❌';
      const flashcardStatus = hasEnoughFlashcards ? '✅' : '❌';
      
      console.log(`  ${problemStatus} ${flashcardStatus} ${topic.title} (${topic.slug})`);
      console.log(`      Problems: ${topic._count.exampleProblems}, Flashcards: ${topic._count.flashcards}`);
    });
  });

  console.log('\n' + '='.repeat(60));
  console.log(`SUMMARY:`);
  console.log(`Total topics: ${totalTopics}`);
  console.log(`Topics with ≥5 problems: ${topicsWithEnoughProblems}/${totalTopics}`);
  console.log(`Topics with ≥6 flashcards: ${topicsWithEnoughFlashcards}/${totalTopics}`);
  console.log(`Progress: ${Math.round((Math.min(topicsWithEnoughProblems, topicsWithEnoughFlashcards) / totalTopics) * 100)}%`);
  console.log('='.repeat(60));

  await prisma.$disconnect();
}

main();
