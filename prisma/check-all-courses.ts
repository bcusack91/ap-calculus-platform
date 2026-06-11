import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    include: {
      categories: {
        include: {
          topics: true
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { order: 'asc' }
  });

  console.log('\n📊 COURSE COMPLETION REPORT\n');
  
  for (const course of courses) {
    const topicCount = course.categories.reduce((sum, cat) => sum + cat.topics.length, 0);
    console.log(`\n📚 ${course.name}`);
    console.log(`   Categories: ${course.categories.length}`);
    console.log(`   Topics: ${topicCount}`);
    
    for (const category of course.categories) {
      console.log(`   - ${category.name}: ${category.topics.length} topics`);
    }
  }
  
  const totalTopics = courses.reduce((sum, course) => 
    sum + course.categories.reduce((catSum, cat) => catSum + cat.topics.length, 0), 0
  );
  
  console.log(`\n📈 PLATFORM TOTAL: ${totalTopics} topics across ${courses.length} courses\n`);
}

main().finally(() => prisma.$disconnect());
