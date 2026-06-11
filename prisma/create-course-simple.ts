import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📊 Creating AP Statistics course (simple version)...\n');

  // Create just the course first
  const course = await prisma.course.create({
    data: {
      name: 'AP Statistics',
      slug: 'ap-statistics',
      description: 'Explore data, probability, and statistical inference',
      order: 10 // Between AP Biology (9) and SAT (100)
    }
  });

  console.log('✅ Course created:', course.slug);
  console.log('Course ID:', course.id);
}

main()
  .catch((e) => {
    console.error('Error:', e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
