import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const precalc = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              title: true,
              slug: true,
              order: true,
              isPremium: true,
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

  if (precalc) {
    console.log('✅ AP Precalculus Course:');
    console.log('');
    precalc.categories.forEach(cat => {
      console.log(`📁 ${cat.name} (order: ${cat.order}):`);
      cat.topics.forEach(t => {
        const status = t._count.exampleProblems > 0 && t._count.flashcards > 0 ? '✅' : '❌';
        console.log(`  ${status} ${t.title}`);
        console.log(`      slug: ${t.slug}, order: ${t.order}, premium: ${t.isPremium}`);
        console.log(`      problems: ${t._count.exampleProblems}, flashcards: ${t._count.flashcards}`);
      });
      console.log('');
    });
  } else {
    console.log('❌ Precalculus course not found');
  }

  await prisma.$disconnect();
}

main();
