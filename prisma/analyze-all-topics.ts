import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function analyze() {
  const courses = await prisma.course.findMany({
    include: {
      categories: {
        include: {
          topics: {
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { slug: 'asc' }
  });

  console.log('📊 Complete Content Analysis Across All Courses:\n');
  console.log('=' .repeat(80));
  
  let totalTopicsAllCourses = 0;
  let totalEmpty = 0;
  let totalThin = 0;
  let totalGood = 0;
  
  const emptyTopics: Array<{course: string, category: string, topic: string, slug: string}> = [];
  const thinTopics: Array<{course: string, category: string, topic: string, slug: string, chars: number}> = [];

  for (const course of courses) {
    let courseTopicCount = 0;
    let courseEmpty = 0;
    let courseThin = 0;
    let courseGood = 0;

    console.log(`\n🎓 ${course.name.toUpperCase()} (${course.slug})`);
    console.log('-'.repeat(80));

    for (const category of course.categories) {
      const categoryHasContent = category.topics.some(t => (t.textContent?.length || 0) > 0);
      
      if (!categoryHasContent && category.topics.length > 0) {
        console.log(`\n  📁 ${category.name} [${category.topics.length} topics] - ⚠️  ALL EMPTY`);
      } else {
        console.log(`\n  📁 ${category.name} [${category.topics.length} topics]:`);
      }
      
      for (const topic of category.topics) {
        courseTopicCount++;
        totalTopicsAllCourses++;
        const contentLength = topic.textContent?.length || 0;
        
        let status = '';
        if (contentLength === 0) {
          status = '🔴 EMPTY';
          courseEmpty++;
          totalEmpty++;
          emptyTopics.push({
            course: course.name,
            category: category.name,
            topic: topic.title,
            slug: topic.slug
          });
        } else if (contentLength < 500) {
          status = '🟡 THIN';
          courseThin++;
          totalThin++;
          thinTopics.push({
            course: course.name,
            category: category.name,
            topic: topic.title,
            slug: topic.slug,
            chars: contentLength
          });
        } else {
          status = '✅ GOOD';
          courseGood++;
          totalGood++;
        }
        
        console.log(`     ${status} ${topic.slug}: '${topic.title}' (${contentLength} chars)`);
      }
    }

    console.log(`\n  📊 ${course.name} Summary:`);
    console.log(`     ✅ Good content (≥500 chars): ${courseGood}`);
    console.log(`     🟡 Thin content (<500 chars): ${courseThin}`);
    console.log(`     🔴 Empty (0 chars): ${courseEmpty}`);
    console.log(`     📊 Total topics: ${courseTopicCount}`);
  }

  console.log('\n' + '='.repeat(80));
  console.log('📈 OVERALL SUMMARY:');
  console.log('='.repeat(80));
  console.log(`✅ Topics with good content (≥500 chars): ${totalGood}`);
  console.log(`🟡 Topics with thin content (1-499 chars): ${totalThin}`);
  console.log(`🔴 Topics completely empty (0 chars): ${totalEmpty}`);
  console.log(`📊 Total topics across all courses: ${totalTopicsAllCourses}`);

  if (emptyTopics.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('🔴 EMPTY TOPICS REQUIRING CONTENT:');
    console.log('='.repeat(80));
    emptyTopics.forEach(t => {
      console.log(`   • ${t.course} → ${t.category} → ${t.topic} (${t.slug})`);
    });
  }

  if (thinTopics.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('🟡 THIN TOPICS THAT COULD USE EXPANSION:');
    console.log('='.repeat(80));
    thinTopics.sort((a, b) => a.chars - b.chars);
    thinTopics.forEach(t => {
      console.log(`   • ${t.course} → ${t.category} → ${t.topic} (${t.slug}) - ${t.chars} chars`);
    });
  }

  console.log('\n' + '='.repeat(80));
}

analyze()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
