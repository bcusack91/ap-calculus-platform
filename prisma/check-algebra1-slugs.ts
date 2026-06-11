import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const topics = await prisma.topic.findMany({
    where: {
      category: {
        course: {
          slug: 'algebra-1'
        }
      }
    },
    select: {
      slug: true,
      title: true,
      order: true
    },
    orderBy: {
      order: 'asc'
    }
  });

  console.log(`Found ${topics.length} Algebra 1 topics:\n`);
  topics.forEach((topic, index) => {
    console.log(`${index + 1}. ${topic.slug}`);
    console.log(`   "${topic.title}"\n`);
  });

  await prisma.$disconnect();
}

main();
