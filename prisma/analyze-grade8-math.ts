import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Analyzing Grade 8 Math course...\n');

  // Find the Grade 8 Math course
  const course = await prisma.course.findFirst({
    where: {
      slug: 'grade-8-math'
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
            },
            orderBy: {
              order: 'asc'
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
    console.log('❌ Grade 8 Math course not found!');
    return;
  }

  console.log(`📚 Course: ${course.name}`);
  console.log(`🔗 Slug: ${course.slug}\n`);

  let totalTopics = 0;
  let topicsWithContent = 0;
  let topicsWithProblems = 0;
  let topicsWithFlashcards = 0;
  const topicsNeedingWork: string[] = [];

  course.categories.forEach(category => {
    console.log(`\n📂 Category: ${category.name}`);
    console.log('─'.repeat(60));

    category.topics.forEach(topic => {
      totalTopics++;
      const hasContent = topic.textContent && topic.textContent.length > 500;
      const hasProblems = topic._count.exampleProblems > 0;
      const hasFlashcards = topic._count.flashcards > 0;

      if (hasContent) topicsWithContent++;
      if (hasProblems) topicsWithProblems++;
      if (hasFlashcards) topicsWithFlashcards++;

      const status = hasContent && hasProblems && hasFlashcards ? '✅' : '❌';
      
      console.log(`${status} ${topic.title} (${topic.slug})`);
      console.log(`   Content: ${hasContent ? '✅' : '❌'} (${topic.textContent?.length || 0} chars)`);
      console.log(`   Problems: ${hasProblems ? '✅' : '❌'} (${topic._count.exampleProblems})`);
      console.log(`   Flashcards: ${hasFlashcards ? '✅' : '❌'} (${topic._count.flashcards})`);

      if (!hasContent || !hasProblems || !hasFlashcards) {
        topicsNeedingWork.push(topic.slug);
      }
    });
  });

  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total topics: ${totalTopics}`);
  console.log(`Topics with content: ${topicsWithContent} (${Math.round(topicsWithContent/totalTopics*100)}%)`);
  console.log(`Topics with problems: ${topicsWithProblems} (${Math.round(topicsWithProblems/totalTopics*100)}%)`);
  console.log(`Topics with flashcards: ${topicsWithFlashcards} (${Math.round(topicsWithFlashcards/totalTopics*100)}%)`);
  console.log(`\nTopics needing work: ${topicsNeedingWork.length} (${Math.round(topicsNeedingWork.length/totalTopics*100)}%)`);
  
  if (topicsNeedingWork.length > 0) {
    console.log('\n📝 Topics that need content/problems/flashcards:');
    topicsNeedingWork.forEach((slug, index) => {
      console.log(`   ${index + 1}. ${slug}`);
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
