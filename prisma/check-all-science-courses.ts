import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkCourse(slug: string, name: string) {
  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      categories: {
        include: {
          topics: {
            include: {
              _count: {
                select: {
                  exampleProblems: true,
                  flashcards: true
                }
              }
            }
          }
        }
      }
    }
  });

  if (!course) {
    console.log(`❌ ${name} not found!\n`);
    return null;
  }

  let totalTopics = 0;
  let completeTopics = 0;

  course.categories.forEach(cat => {
    cat.topics.forEach(topic => {
      totalTopics++;
      if (topic._count.exampleProblems > 0 && topic._count.flashcards > 0) {
        completeTopics++;
      }
    });
  });

  const percentage = totalTopics > 0 ? Math.round((completeTopics / totalTopics) * 100) : 0;
  
  return {
    name,
    slug,
    totalTopics,
    completeTopics,
    percentage,
    categories: course.categories.length
  };
}

async function main() {
  console.log('🔬 SCIENCE COURSES STATUS CHECK\n');
  console.log('='.repeat(60) + '\n');

  const scienceCourses = [
    { slug: 'ap-physics-1', name: 'AP Physics 1' },
    { slug: 'ap-physics-2', name: 'AP Physics 2' },
    { slug: 'ap-physics-c-mechanics', name: 'AP Physics C: Mechanics' },
    { slug: 'ap-physics-c-em', name: 'AP Physics C: E&M' },
    { slug: 'ap-chemistry', name: 'AP Chemistry' },
    { slug: 'ap-biology', name: 'AP Biology' }
  ];

  const results = [];

  for (const course of scienceCourses) {
    const result = await checkCourse(course.slug, course.name);
    if (result) {
      results.push(result);
      
      const status = result.percentage === 100 ? '✅' : 
                     result.percentage > 0 ? '🔄' : '❌';
      
      console.log(`${status} ${result.name}`);
      console.log(`   ${result.completeTopics}/${result.totalTopics} topics (${result.percentage}%)`);
      console.log(`   ${result.categories} categories\n`);
    }
  }

  console.log('='.repeat(60));
  console.log('\n📊 SUMMARY:\n');
  
  const incomplete = results.filter(r => r.percentage < 100);
  const complete = results.filter(r => r.percentage === 100);
  const notStarted = results.filter(r => r.percentage === 0);
  const inProgress = results.filter(r => r.percentage > 0 && r.percentage < 100);

  console.log(`✅ Complete: ${complete.length}`);
  complete.forEach(c => console.log(`   - ${c.name}`));
  
  console.log(`\n🔄 In Progress: ${inProgress.length}`);
  inProgress.forEach(c => console.log(`   - ${c.name} (${c.percentage}%)`));
  
  console.log(`\n❌ Not Started: ${notStarted.length}`);
  notStarted.forEach(c => console.log(`   - ${c.name} (${c.totalTopics} topics)`));

  if (incomplete.length > 0) {
    console.log(`\n\n🎯 RECOMMENDED ORDER:\n`);
    
    // Sort by progress (highest first) and then by total topics (smallest first)
    const sorted = incomplete.sort((a, b) => {
      if (a.percentage !== b.percentage) return b.percentage - a.percentage;
      return a.totalTopics - b.totalTopics;
    });

    sorted.forEach((c, i) => {
      console.log(`${i + 1}. ${c.name} - ${c.completeTopics}/${c.totalTopics} topics (${c.percentage}%) - ${c.totalTopics - c.completeTopics} remaining`);
    });
  }
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
