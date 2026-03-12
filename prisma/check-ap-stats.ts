import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({ 
    where: { slug: 'ap-statistics' },
    include: { categories: true }
  });
  
  if (course) {
    console.log('✅ AP Statistics already exists!');
    console.log(`Has ${course.categories.length} categories`);
    
    const topicCount = await prisma.topic.count({
      where: { category: { courseId: course.id } }
    });
    console.log(`Has ${topicCount} topics`);
  } else {
    console.log('❌ AP Statistics not found');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
