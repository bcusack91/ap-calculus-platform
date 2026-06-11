import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 Analyzing Grade 6 Math Course...\n');

  const course = await prisma.course.findFirst({
    where: { 
      OR: [
        { slug: 'grade-6-math' },
        { slug: 'grade-6' },
        { name: { contains: 'Grade 6', mode: 'insensitive' } }
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
        }
      }
    }
  });

  if (!course) {
    console.log('❌ Grade 6 Math course not found!');
    return;
  }

  console.log(`Course: ${course.name} (${course.slug})\n`);
  console.log('=' .repeat(80));

  let totalTopics = 0;
  let topicsWithGoodContent = 0;
  let topicsWithThinContent = 0;
  let topicsWithProblems = 0;
  let topicsWithFlashcards = 0;

  for (const category of course.categories) {
    console.log(`\n📁 Category: ${category.name}`);
    console.log('-'.repeat(80));

    for (const topic of category.topics) {
      totalTopics++;
      const contentLength = topic.textContent?.length || 0;
      const problemCount = topic.exampleProblems.length;
      const flashcardCount = topic.flashcards.length;

      let status = '🟡';
      if (contentLength >= 500) {
        status = '✅';
        topicsWithGoodContent++;
      } else {
        topicsWithThinContent++;
      }

      if (problemCount > 0) topicsWithProblems++;
      if (flashcardCount > 0) topicsWithFlashcards++;

      console.log(
        `${status} ${topic.title.padEnd(40)} | ` +
        `Content: ${contentLength.toString().padStart(5)} chars | ` +
        `Problems: ${problemCount} | ` +
        `Flashcards: ${flashcardCount}`
      );
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n📈 Summary:');
  console.log(`Total Topics: ${totalTopics}`);
  console.log(`✅ Topics with good content (≥500 chars): ${topicsWithGoodContent}`);
  console.log(`🟡 Topics with thin content (<500 chars): ${topicsWithThinContent}`);
  console.log(`📝 Topics with practice problems: ${topicsWithProblems}`);
  console.log(`🎴 Topics with flashcards: ${topicsWithFlashcards}`);
  console.log(`\n📊 Completion Status:`);
  console.log(`Content: ${topicsWithGoodContent}/${totalTopics} (${Math.round(topicsWithGoodContent/totalTopics*100)}%)`);
  console.log(`Problems: ${topicsWithProblems}/${totalTopics} (${Math.round(topicsWithProblems/totalTopics*100)}%)`);
  console.log(`Flashcards: ${topicsWithFlashcards}/${totalTopics} (${Math.round(topicsWithFlashcards/totalTopics*100)}%)`);

  if (topicsWithThinContent > 0) {
    console.log(`\n🎯 Next Steps: Fill ${topicsWithThinContent} topics with comprehensive content`);
  }
  if (totalTopics - topicsWithProblems > 0) {
    console.log(`🎯 Then: Add practice problems to ${totalTopics - topicsWithProblems} topics`);
  }
  if (totalTopics - topicsWithFlashcards > 0) {
    console.log(`🎯 Then: Add flashcards to ${totalTopics - topicsWithFlashcards} topics`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
