import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listGrade6Topics() {
  const grade6 = await prisma.course.findFirst({
    where: {
      OR: [
        { slug: 'grade-6-math' },
        { slug: 'grade-6' }
      ]
    },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              id: true,
              slug: true,
              title: true
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

  if (!grade6) {
    console.log('Grade 6 Math course not found!');
    return;
  }

  console.log(`\nCourse: ${grade6.name}\n`);

  for (const category of grade6.categories) {
    console.log(`Category: ${category.name}`);
    for (const topic of category.topics) {
      console.log(`  - ${topic.slug} (${topic.title})`);
    }
    console.log();
  }
}

listGrade6Topics()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
