import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking Algebra 1 content lengths...\n');

  const algebra1Topics = await prisma.topic.findMany({
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
      textContent: true
    },
    orderBy: {
      slug: 'asc'
    }
  });

  console.log(`Found ${algebra1Topics.length} Algebra 1 topics\n`);

  const needExpansion = algebra1Topics.filter(topic => {
    const length = topic.textContent?.length || 0;
    return length > 0 && length < 6000;
  });

  console.log('Topics needing expansion (1,000-5,999 chars):\n');
  needExpansion.forEach(topic => {
    const length = topic.textContent?.length || 0;
    console.log(`- ${topic.slug}: ${length} chars - "${topic.title}"`);
  });

  console.log(`\nTotal topics needing expansion: ${needExpansion.length}`);
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
