import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 Checking SAT and ACT Course Status\n');

  // Get SAT Math course
  const satMath = await prisma.course.findFirst({
    where: {
      OR: [
        { slug: 'sat-math' },
        { name: { contains: 'SAT', mode: 'insensitive' } }
      ]
    },
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

  // Get ACT Math course
  const actMath = await prisma.course.findFirst({
    where: {
      OR: [
        { slug: 'act-math' },
        { name: { contains: 'ACT', mode: 'insensitive' } }
      ]
    },
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

  // Display SAT Math
  if (satMath) {
    console.log(`📚 ${satMath.name}`);
    console.log(`Slug: ${satMath.slug}\n`);

    let totalTopics = 0;
    let completeTopics = 0;

    satMath.categories.forEach(category => {
      console.log(`\n  Category: ${category.name} (${category.topics.length} topics)`);
      category.topics.forEach(topic => {
        totalTopics++;
        const hasProblems = topic._count.exampleProblems > 0;
        const hasFlashcards = topic._count.flashcards > 0;
        const isComplete = hasProblems && hasFlashcards;
        
        if (isComplete) completeTopics++;

        const status = isComplete ? '✅' : '❌';
        console.log(`    ${status} ${topic.title} (${topic._count.exampleProblems} problems, ${topic._count.flashcards} flashcards)`);
      });
    });

    const percentage = Math.round((completeTopics / totalTopics) * 100);
    console.log(`\n  📊 SAT Math: ${completeTopics}/${totalTopics} topics complete (${percentage}%)`);
  } else {
    console.log('❌ SAT Math course not found');
  }

  console.log('\n' + '='.repeat(80) + '\n');

  // Display ACT Math
  if (actMath) {
    console.log(`📚 ${actMath.name}`);
    console.log(`Slug: ${actMath.slug}\n`);

    let totalTopics = 0;
    let completeTopics = 0;

    actMath.categories.forEach(category => {
      console.log(`\n  Category: ${category.name} (${category.topics.length} topics)`);
      category.topics.forEach(topic => {
        totalTopics++;
        const hasProblems = topic._count.exampleProblems > 0;
        const hasFlashcards = topic._count.flashcards > 0;
        const isComplete = hasProblems && hasFlashcards;
        
        if (isComplete) completeTopics++;

        const status = isComplete ? '✅' : '❌';
        console.log(`    ${status} ${topic.title} (${topic._count.exampleProblems} problems, ${topic._count.flashcards} flashcards)`);
      });
    });

    const percentage = Math.round((completeTopics / totalTopics) * 100);
    console.log(`\n  📊 ACT Math: ${completeTopics}/${totalTopics} topics complete (${percentage}%)`);
  } else {
    console.log('❌ ACT Math course not found');
  }

  console.log('\n' + '='.repeat(80) + '\n');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
