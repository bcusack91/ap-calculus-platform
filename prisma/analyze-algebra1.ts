import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Analyzing Algebra 1 course...\n');

  const course = await prisma.course.findUnique({
    where: { slug: 'algebra-1' },
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

  if (!course) {
    console.log('❌ Algebra 1 course not found');
    return;
  }

  console.log(`📚 Course: ${course.name}\n`);
  console.log('═'.repeat(80));

  let totalTopics = 0;
  let completeTopics = 0;
  let needsContent = 0;
  let needsProblems = 0;
  let needsFlashcards = 0;
  let partialContent = 0;

  const topicsNeedingWork: any[] = [];

  for (const category of course.categories) {
    console.log(`\n📁 ${category.name}`);
    console.log('─'.repeat(80));

    for (const topic of category.topics) {
      totalTopics++;
      const problemCount = topic._count.exampleProblems;
      const flashcardCount = topic._count.flashcards;
      const contentLength = topic.textContent?.length || 0;

      let status = '';
      let needsWork = false;

      // Check if complete (5 problems, 6 flashcards, adequate content)
      if (problemCount >= 5 && flashcardCount >= 6 && contentLength >= 6000) {
        status = '✅ COMPLETE';
        completeTopics++;
      } else {
        needsWork = true;
        const issues = [];
        
        if (contentLength < 1000) {
          issues.push('NEEDS CONTENT');
          needsContent++;
        } else if (contentLength < 6000) {
          issues.push('EXPAND CONTENT');
          partialContent++;
        }
        
        if (problemCount < 5) {
          issues.push(`NEEDS ${5 - problemCount} PROBLEMS`);
          needsProblems++;
        }
        
        if (flashcardCount < 6) {
          issues.push(`NEEDS ${6 - flashcardCount} FLASHCARDS`);
          needsFlashcards++;
        }
        
        status = `⚠️  ${issues.join(', ')}`;
      }

      console.log(`  ${topic.title}`);
      console.log(`    Slug: ${topic.slug}`);
      console.log(`    Content: ${contentLength} chars`);
      console.log(`    Problems: ${problemCount}/5`);
      console.log(`    Flashcards: ${flashcardCount}/6`);
      console.log(`    Status: ${status}`);
      console.log('');

      if (needsWork) {
        topicsNeedingWork.push({
          title: topic.title,
          slug: topic.slug,
          category: category.name,
          contentLength,
          problems: problemCount,
          flashcards: flashcardCount
        });
      }
    }
  }

  console.log('═'.repeat(80));
  console.log('\n📊 SUMMARY');
  console.log('─'.repeat(80));
  console.log(`Total Topics: ${totalTopics}`);
  console.log(`Complete: ${completeTopics} (${((completeTopics/totalTopics)*100).toFixed(1)}%)`);
  console.log(`Need Work: ${topicsNeedingWork.length} (${((topicsNeedingWork.length/totalTopics)*100).toFixed(1)}%)`);
  console.log('');
  console.log('Breakdown of issues:');
  console.log(`  - Need full content creation: ${needsContent}`);
  console.log(`  - Need content expansion: ${partialContent}`);
  console.log(`  - Need more problems: ${needsProblems}`);
  console.log(`  - Need more flashcards: ${needsFlashcards}`);
  console.log('');

  if (topicsNeedingWork.length > 0) {
    console.log('💡 RECOMMENDED WORKFLOW:');
    console.log('─'.repeat(80));
    
    const topicsNeedingFullContent = topicsNeedingWork.filter(t => t.contentLength < 1000);
    const topicsNeedingExpansion = topicsNeedingWork.filter(t => t.contentLength >= 1000 && t.contentLength < 6000);
    const topicsNeedingOnlyProblemsFlashcards = topicsNeedingWork.filter(t => 
      t.contentLength >= 6000 && (t.problems < 5 || t.flashcards < 6)
    );

    if (topicsNeedingFullContent.length > 0) {
      console.log(`\n1️⃣  PHASE 1: Create content for ${topicsNeedingFullContent.length} topics`);
      console.log(`   Batches needed: ${Math.ceil(topicsNeedingFullContent.length / 3)}`);
    }

    if (topicsNeedingExpansion.length > 0) {
      console.log(`\n2️⃣  PHASE 2: Expand content for ${topicsNeedingExpansion.length} topics`);
      console.log(`   Batches needed: ${Math.ceil(topicsNeedingExpansion.length / 3)}`);
    }

    if (topicsNeedingOnlyProblemsFlashcards.length > 0) {
      console.log(`\n3️⃣  PHASE 3: Add problems/flashcards for ${topicsNeedingOnlyProblemsFlashcards.length} topics`);
      console.log(`   Batches needed: ${Math.ceil(topicsNeedingOnlyProblemsFlashcards.length / 3)}`);
    }

    const totalWithoutContent = topicsNeedingFullContent.length + topicsNeedingExpansion.length;
    if (totalWithoutContent > 0) {
      console.log(`\n4️⃣  PHASE 4: Add problems/flashcards to all topics after content complete`);
      console.log(`   Batches needed: ${Math.ceil(totalWithoutContent / 3)}`);
    }
  }

  console.log('\n');
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
