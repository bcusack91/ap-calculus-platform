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
            select: {
              title: true,
              slug: true
            }
          }
        }
      }
    }
  });

  if (!stats) {
    console.log('AP Statistics not found');
    return;
  }

  console.log('📊 AP Statistics Topics and Slugs:\n');

  for (const category of stats.categories) {
    console.log(`\n${category.name}:`);
    for (const topic of category.topics) {
      console.log(`  "${topic.slug}"`);
      console.log(`    Title: ${topic.title}`);
    }
  }
  
  await prisma.$disconnect();
}

main();
