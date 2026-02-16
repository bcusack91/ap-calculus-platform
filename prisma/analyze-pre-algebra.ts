import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Analyzing Pre-Algebra course...\n');

  // Find Pre-Algebra course
  const course = await prisma.course.findFirst({
    where: {
      slug: 'pre-algebra'
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

  if (!course) {
    console.log('❌ Pre-Algebra course not found!');
    return;
  }

  console.log(`📚 Course: ${course.name}`);
  console.log(`🔗 Slug: ${course.slug}\n`);

  let totalTopics = 0;
  let completeTopics = 0;
  let needsWork = 0;

  const topicsNeedingWork: Array<{
    category: string;
    slug: string;
    title: string;
    hasContent: string | boolean;
    problemCount: number;
    flashcardCount: number;
  }> = [];

  // Analyze each category and topic
  for (const category of course.categories) {
    console.log(`\n📂 Category: ${category.name}`);
    console.log('─'.repeat(60));

    for (const topic of category.topics) {
      totalTopics++;
      
      const hasContent = topic.textContent && topic.textContent.length > 1000;
      const hasProblems = topic._count.exampleProblems >= 5;
      const hasFlashcards = topic._count.flashcards >= 6;
      
      const isComplete = hasContent && hasProblems && hasFlashcards;
      
      if (isComplete) {
        completeTopics++;
        console.log(`✅ ${topic.title}`);
        console.log(`   Content: ${topic.textContent?.length || 0} chars | Problems: ${topic._count.exampleProblems} | Flashcards: ${topic._count.flashcards}`);
      } else {
        needsWork++;
        console.log(`⚠️  ${topic.title}`);
        console.log(`   Content: ${hasContent ? '✓' : '✗'} (${topic.textContent?.length || 0} chars) | Problems: ${topic._count.exampleProblems} | Flashcards: ${topic._count.flashcards}`);
        
        topicsNeedingWork.push({
          category: category.name,
          slug: topic.slug,
          title: topic.title,
          hasContent,
          problemCount: topic._count.exampleProblems,
          flashcardCount: topic._count.flashcards
        });
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total Topics: ${totalTopics}`);
  console.log(`Complete: ${completeTopics} (${Math.round(completeTopics/totalTopics*100)}%)`);
  console.log(`Need Work: ${needsWork} (${Math.round(needsWork/totalTopics*100)}%)`);

  if (topicsNeedingWork.length > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('📝 TOPICS NEEDING WORK');
    console.log('='.repeat(60));
    
    topicsNeedingWork.forEach((topic, index) => {
      console.log(`\n${index + 1}. ${topic.title}`);
      console.log(`   Category: ${topic.category}`);
      console.log(`   Slug: ${topic.slug}`);
      console.log(`   Content: ${topic.hasContent ? '✓' : 'NEEDED'}`);
      console.log(`   Problems: ${topic.problemCount}/5`);
      console.log(`   Flashcards: ${topic.flashcardCount}/6`);
    });

    // Suggest batching
    console.log('\n' + '='.repeat(60));
    console.log('💡 SUGGESTED BATCHING');
    console.log('='.repeat(60));
    
    const topicsWithoutContent = topicsNeedingWork.filter(t => !t.hasContent);
    const topicsWithContentNoProblems = topicsNeedingWork.filter(t => t.hasContent && (t.problemCount < 5 || t.flashcardCount < 6));
    
    if (topicsWithoutContent.length > 0) {
      console.log(`\nContent Phase: ${topicsWithoutContent.length} topics need content`);
      const batches = Math.ceil(topicsWithoutContent.length / 3);
      console.log(`Suggested: ${batches} batches of ~3 topics each`);
    }
    
    if (topicsWithContentNoProblems.length > 0) {
      console.log(`\nProblems/Flashcards Phase: ${topicsWithContentNoProblems.length} topics need problems/flashcards`);
      const batches = Math.ceil(topicsWithContentNoProblems.length / 3);
      console.log(`Suggested: ${batches} batches of ~3 topics each`);
    }
  } else {
    console.log('\n🎉 All topics are complete!');
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
