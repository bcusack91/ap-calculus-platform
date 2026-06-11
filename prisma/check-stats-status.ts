import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const stats = await prisma.course.findUnique({
    where: { slug: 'ap-statistics' },
    include: {
      categories: {
        orderBy: { order: 'asc' },
        include: {
          topics: {
            orderBy: { order: 'asc' },
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

  if (!stats) {
    console.log('❌ AP Statistics course not found!');
    return;
  }

  console.log('📊 AP Statistics Status Check\n');

  let total = 0;
  let complete = 0;

  for (const category of stats.categories) {
    console.log(`\n${category.name}:`);
    for (const topic of category.topics) {
      const p = topic._count.exampleProblems;
      const f = topic._count.flashcards;
      const isDone = p >= 5 && f >= 6;
      
      total++;
      if (isDone) complete++;
      
      console.log(`  ${isDone ? '✅' : '❌'} ${topic.title}: ${p} problems, ${f} flashcards`);
    }
  }

  console.log(`\n\n📈 SUMMARY: ${complete}/${total} topics complete (${Math.round(complete/total*100)}%)`);
  
  await prisma.$disconnect();
}

main();
