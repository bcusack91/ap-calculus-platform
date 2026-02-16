import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkCourseMissingTopics(slug: string, name: string) {
  const course = await prisma.course.findUnique({
    where: { slug },
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
    console.log(`❌ ${name} not found!\n`);
    return;
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📚 ${name.toUpperCase()}`);
  console.log(`${'='.repeat(60)}\n`);

  const missingTopics: Array<{
    topic: string;
    slug: string;
    category: string;
    problems: number;
    flashcards: number;
  }> = [];

  course.categories.forEach(cat => {
    cat.topics.forEach(topic => {
      if (topic._count.exampleProblems === 0 || topic._count.flashcards === 0) {
        missingTopics.push({
          topic: topic.title,
          slug: topic.slug,
          category: cat.name,
          problems: topic._count.exampleProblems,
          flashcards: topic._count.flashcards
        });
      }
    });
  });

  if (missingTopics.length === 0) {
    console.log('🎉 All topics complete!\n');
  } else {
    console.log(`❌ Missing content for ${missingTopics.length} topic(s):\n`);
    missingTopics.forEach((t, i) => {
      console.log(`${i + 1}. ${t.topic} (${t.slug})`);
      console.log(`   Category: ${t.category}`);
      console.log(`   ${t.problems} problems, ${t.flashcards} flashcards\n`);
    });
  }
}

async function main() {
  // Check in order of closest to completion
  await checkCourseMissingTopics('ap-physics-1', 'AP Physics 1');
  await checkCourseMissingTopics('ap-physics-2', 'AP Physics 2');
  await checkCourseMissingTopics('ap-chemistry', 'AP Chemistry');
  await checkCourseMissingTopics('ap-physics-c-mechanics', 'AP Physics C: Mechanics');
  await checkCourseMissingTopics('ap-physics-c-em', 'AP Physics C: E&M');
  await checkCourseMissingTopics('ap-biology', 'AP Biology');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
