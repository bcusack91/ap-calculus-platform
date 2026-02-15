import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' },
    include: { categories: { include: { topics: true } } }
  });
  
  if (!course) {
    console.log('❌ Precalculus course not found');
    return;
  }
  
  console.log(`✅ Course: ${course.name}`);
  console.log(`Categories: ${course.categories.length}`);
  course.categories.forEach(c => {
    console.log(`  - ${c.name}: ${c.topics.length} topics`);
  });

  await prisma.$disconnect();
}

main();
