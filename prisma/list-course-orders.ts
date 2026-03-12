import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    orderBy: { order: 'asc' }
  });
  
  console.log('All courses with their orders:');
  courses.forEach(c => {
    console.log(`${c.order}: ${c.slug}`);
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
