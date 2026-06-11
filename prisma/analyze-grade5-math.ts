import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ThinTopic {
  slug: string;
  title: string;
  length: number;
}

interface TopicNeedingProblems {
  slug: string;
  title: string;
}

async function main() {
  console.log('Analyzing Grade 5 Math topics...\n');

  const grade5Course = await prisma.course.findUnique({
    where: { slug: 'grade-5-math' },
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

  if (!grade5Course) {
    throw new Error('Grade 5 Math course not found');
  }

  let totalTopics = 0;
  let topicsWithContent = 0;
  let topicsWithProblems = 0;
  let topicsWithFlashcards = 0;
  const thinTopics: ThinTopic[] = [];
  const topicsNeedingProblems: TopicNeedingProblems[] = [];

  console.log('📊 GRADE 5 MATH ANALYSIS\n');
  console.log('=' .repeat(80));

  for (const category of grade5Course.categories) {
    console.log(`\n📁 ${category.name}`);
    console.log('-'.repeat(80));

    for (const topic of category.topics) {
      totalTopics++;
      const contentLength = topic.textContent?.length || 0;
      const problemCount = topic._count.exampleProblems;
      const flashcardCount = topic._count.flashcards;

      let status = '';
      if (contentLength >= 500) {
        status = '✅';
        topicsWithContent++;
      } else if (contentLength > 0) {
        status = '🟡';
        thinTopics.push({ slug: topic.slug, title: topic.title, length: contentLength });
      } else {
        status = '🔴';
        thinTopics.push({ slug: topic.slug, title: topic.title, length: contentLength });
      }

      if (problemCount > 0) {
        topicsWithProblems++;
      } else {
        topicsNeedingProblems.push({ slug: topic.slug, title: topic.title });
      }

      if (flashcardCount > 0) {
        topicsWithFlashcards++;
      }

      console.log(`  ${status} ${topic.title.padEnd(45)} | Content: ${contentLength.toString().padStart(5)} chars | Problems: ${problemCount} | Flashcards: ${flashcardCount}`);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n📈 SUMMARY:');
  console.log(`Total topics: ${totalTopics}`);
  console.log(`Topics with good content (≥500 chars): ${topicsWithContent}`);
  console.log(`Topics with practice problems: ${topicsWithProblems}`);
  console.log(`Topics with flashcards: ${topicsWithFlashcards}`);
  console.log(`Thin/empty topics needing content: ${thinTopics.length}`);
  console.log(`Topics needing practice problems: ${topicsNeedingProblems.length}`);

  if (thinTopics.length > 0) {
    console.log('\n🟡 THIN/EMPTY TOPICS (need content):');
    thinTopics.sort((a, b) => a.length - b.length);
    thinTopics.forEach(t => {
      console.log(`  - ${t.slug.padEnd(50)} (${t.length} chars)`);
    });
  }

  if (topicsNeedingProblems.length > 0) {
    console.log('\n📝 TOPICS NEEDING PRACTICE PROBLEMS:');
    topicsNeedingProblems.forEach(t => {
      console.log(`  - ${t.slug}`);
    });
  }

  console.log('\n' + '='.repeat(80));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
