import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const algebra1 = await prisma.course.findUnique({
    where: { slug: 'algebra-1' },
    include: { categories: true }
  });
  
  if (!algebra1) throw new Error('Algebra 1 not found');
  
  const dataCat = algebra1.categories.find(c => c.name === 'Data and Statistics');
  
  if (!dataCat) throw new Error('Data and Statistics category not found');
  
  await prisma.topic.createMany({
    data: [
      {
        categoryId: dataCat.id,
        title: 'Box Plots',
        slug: 'box-plots',
        description: 'Create and interpret box-and-whisker plots',
        textContent: 'Box plots content',
        order: 3
      },
      {
        categoryId: dataCat.id,
        title: 'Outliers in Data',
        slug: 'outliers-in-data',
        description: 'Identify and analyze outliers',
        textContent: 'Outliers in data content',
        order: 4
      }
    ],
    skipDuplicates: true
  });
  
  const total = await prisma.topic.count();
  console.log(`🎉 FINAL COUNT: ${total} TOPICS!`);
  
  if (total >= 500) {
    console.log('🎊🎊🎊 WE HIT 500 TOPICS! 🎊🎊🎊');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
