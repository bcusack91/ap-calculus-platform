import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Finding SAT topic slugs\n');

  const satCourse = await prisma.course.findFirst({
    where: { slug: 'sat-prep' },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              title: true,
              slug: true,
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

  if (satCourse) {
    satCourse.categories.forEach(cat => {
      console.log(`\nCategory: ${cat.name}`);
      cat.topics.forEach(topic => {
        const complete = topic._count.exampleProblems > 0 && topic._count.flashcards > 0;
        if (!complete) {
          console.log(`  ❌ ${topic.title}`);
          console.log(`     slug: "${topic.slug}"`);
          console.log(`     problems: ${topic._count.exampleProblems}, flashcards: ${topic._count.flashcards}`);
        }
      });
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
