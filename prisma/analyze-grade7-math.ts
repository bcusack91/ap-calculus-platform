import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 Analyzing Grade 7 Math Course...\n');

  const course = await prisma.course.findFirst({
    where: { 
      OR: [
        { slug: 'grade-7-math' },
        { slug: 'grade-7' },
        { name: { contains: 'Grade 7', mode: 'insensitive' } }
      ]
    },
    include: {
      categories: {
        include: {
          topics: {
            include: {
              exampleProblems: true,
              flashcards: true
            }
          }
        },
        orderBy: {
          order: 'asc'
        }
      }
    }
  });

  if (!course) {
    console.log('❌ Grade 7 Math course not found!');
    return;
  }

  console.log(`Course: ${course.name} (${course.slug})\n`);
  console.log('=' .repeat(80));

  let totalTopics = 0;
  let topicsWithGoodContent = 0;
  let topicsWithThinContent = 0;
  let topicsWithProblems = 0;
  let topicsWithFlashcards = 0;
  const topicsNeedingWork: string[] = [];

  for (const category of course.categories) {
    console.log(`\n📁 Category: ${category.name}`);
    console.log('-'.repeat(80));

    for (const topic of category.topics) {
      totalTopics++;
      const contentLength = topic.textContent?.length || 0;
      const problemCount = topic.exampleProblems.length;
      const flashcardCount = topic.flashcards.length;

      let status = '🟡';
      const hasGoodContent = contentLength >= 500;
      const hasProblems = problemCount > 0;
      const hasFlashcards = flashcardCount > 0;

      if (hasGoodContent && hasProblems && hasFlashcards) {
        status = '✅';
        topicsWithGoodContent++;
      } else {
        topicsWithThinContent++;
        topicsNeedingWork.push(topic.slug);
      }

      if (problemCount > 0) topicsWithProblems++;
      if (flashcardCount > 0) topicsWithFlashcards++;

      console.log(
        `${status} ${topic.slug.padEnd(45)} | ` +
        `${contentLength.toString().padStart(5)} chars | ` +
        `${problemCount} probs | ` +
        `${flashcardCount} cards`
      );
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n📈 Summary:');
  console.log(`Total Topics: ${totalTopics}`);
  console.log(`✅ Complete topics (content + problems + flashcards): ${topicsWithGoodContent}`);
  console.log(`🟡 Topics needing work: ${topicsWithThinContent}`);
  console.log(`\n📊 Breakdown:`);
  console.log(`   Content (≥500 chars): ${topicsWithGoodContent}/${totalTopics} (${Math.round(topicsWithGoodContent/totalTopics*100)}%)`);
  console.log(`   Problems: ${topicsWithProblems}/${totalTopics} (${Math.round(topicsWithProblems/totalTopics*100)}%)`);
  console.log(`   Flashcards: ${topicsWithFlashcards}/${totalTopics} (${Math.round(topicsWithFlashcards/totalTopics*100)}%)`);

  if (topicsNeedingWork.length > 0) {
    console.log(`\n🎯 Topics needing work (${topicsNeedingWork.length}):`);
    topicsNeedingWork.forEach((slug, i) => {
      console.log(`   ${i + 1}. ${slug}`);
    });
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
