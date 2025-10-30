import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Finding incomplete topics...\n');

  const courses = await prisma.course.findMany({
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
            }
          }
        }
      }
    }
  });

  let incompleteCount = 0;

  for (const course of courses) {
    for (const category of course.categories) {
      for (const topic of category.topics) {
        const hasProblems = topic._count.exampleProblems > 0;
        const hasFlashcards = topic._count.flashcards > 0;
        
        if (!hasProblems || !hasFlashcards) {
          incompleteCount++;
          console.log(`❌ INCOMPLETE: ${course.name} > ${category.name} > ${topic.title}`);
          console.log(`   Slug: ${topic.slug}`);
          console.log(`   Problems: ${topic._count.exampleProblems}`);
          console.log(`   Flashcards: ${topic._count.flashcards}`);
          console.log('');
        }
      }
    }
  }

  if (incompleteCount === 0) {
    console.log('✅ All topics are complete!');
  } else {
    console.log(`\nTotal incomplete topics: ${incompleteCount}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
