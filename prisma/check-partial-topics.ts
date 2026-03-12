import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface PartialTopic {
  slug: string;
  title: string;
  category: string;
  problems: number;
  flashcards: number;
  contentLength: number;
}

async function main() {
  console.log('Analyzing Pre-Algebra topics with partial content...\n');

  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' },
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
    console.log('Pre-Algebra course not found');
    return;
  }

  console.log('🔍 Topics with PARTIAL content (3 problems, 3 flashcards):');
  console.log('─'.repeat(80));

  const partialTopics: PartialTopic[] = [];

  for (const category of course.categories) {
    for (const topic of category.topics) {
      const problemCount = topic._count.exampleProblems;
      const flashcardCount = topic._count.flashcards;
      const contentLength = topic.textContent?.length || 0;

      // Topics with exactly 3 problems and 3 flashcards (partial content)
      if (problemCount === 3 && flashcardCount === 3) {
        partialTopics.push({
          slug: topic.slug,
          title: topic.title,
          category: category.name,
          problems: problemCount,
          flashcards: flashcardCount,
          contentLength
        });
      }
    }
  }

  partialTopics.forEach((topic, index) => {
    console.log(`${index + 1}. ${topic.title}`);
    console.log(`   Slug: ${topic.slug}`);
    console.log(`   Category: ${topic.category}`);
    console.log(`   Content: ${topic.contentLength} chars`);
    console.log(`   Problems: ${topic.problems}/5 (need 2 more)`);
    console.log(`   Flashcards: ${topic.flashcards}/6 (need 3 more)`);
    console.log('');
  });

  console.log('─'.repeat(80));
  console.log(`\n📊 Total topics needing expansion: ${partialTopics.length}`);
  console.log(`💡 Each needs: +2 problems + 3 flashcards + content expansion\n`);
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
