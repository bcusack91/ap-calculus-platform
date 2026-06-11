import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    select: { name: true, slug: true },
    orderBy: { order: 'asc' }
  });
  
  console.log('Available courses:');
  courses.forEach(c => console.log(`  - ${c.name} (${c.slug})`));
  
  await prisma.$disconnect();
}

main();
