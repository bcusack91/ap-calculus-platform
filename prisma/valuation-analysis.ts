import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('\n💰 WEBSITE VALUATION ANALYSIS\n');
  console.log('='.repeat(80));

  const courses = await prisma.course.findMany({
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
    },
    orderBy: { order: 'asc' }
  });

  let totalCourses = 0;
  let totalCategories = 0;
  let totalTopics = 0;
  let totalProblems = 0;
  let totalFlashcards = 0;
  let completeTopics = 0;

  const courseBreakdown: any[] = [];

  for (const course of courses) {
    totalCourses++;
    let courseCategories = 0;
    let courseTopics = 0;
    let courseProblems = 0;
    let courseFlashcards = 0;
    let courseComplete = 0;

    for (const category of course.categories) {
      totalCategories++;
      courseCategories++;
      
      for (const topic of category.topics) {
        totalTopics++;
        courseTopics++;
        
        const problems = topic._count.exampleProblems;
        const flashcards = topic._count.flashcards;
        
        totalProblems += problems;
        totalFlashcards += flashcards;
        courseProblems += problems;
        courseFlashcards += flashcards;
        
        if (problems > 0 && flashcards > 0) {
          completeTopics++;
          courseComplete++;
        }
      }
    }

    const completionRate = courseTopics > 0 ? Math.round((courseComplete / courseTopics) * 100) : 0;
    
    courseBreakdown.push({
      name: course.name,
      categories: courseCategories,
      topics: courseTopics,
      complete: courseComplete,
      completionRate,
      problems: courseProblems,
      flashcards: courseFlashcards
    });
  }

  console.log('\n📊 CONTENT INVENTORY:\n');
  console.log(`Total Courses: ${totalCourses}`);
  console.log(`Total Categories: ${totalCategories}`);
  console.log(`Total Topics: ${totalTopics}`);
  console.log(`Complete Topics (with problems & flashcards): ${completeTopics} (${Math.round(completeTopics/totalTopics*100)}%)`);
  console.log(`Total Example Problems: ${totalProblems}`);
  console.log(`Total Flashcards: ${totalFlashcards}`);

  console.log('\n📚 COURSE BREAKDOWN:\n');
  console.log('-'.repeat(80));
  
  courseBreakdown.forEach(course => {
    const status = course.completionRate === 100 ? '✅' : course.completionRate >= 80 ? '🟢' : course.completionRate >= 50 ? '🟡' : '🔴';
    console.log(`${status} ${course.name}`);
    console.log(`   Topics: ${course.complete}/${course.topics} complete (${course.completionRate}%)`);
    console.log(`   Content: ${course.problems} problems, ${course.flashcards} flashcards`);
    console.log('');
  });

  // Calculate estimated hours of content
  const estimatedMinutesPerProblem = 3; // Students spend ~3 mins per problem
  const estimatedMinutesPerFlashcard = 0.5; // 30 seconds per flashcard
  const totalContentMinutes = (totalProblems * estimatedMinutesPerProblem) + (totalFlashcards * estimatedMinutesPerFlashcard);
  const totalContentHours = Math.round(totalContentMinutes / 60);

  console.log('='.repeat(80));
  console.log('\n⏱️  ESTIMATED STUDENT ENGAGEMENT:\n');
  console.log(`Total Study Time: ~${totalContentHours.toLocaleString()} hours of content`);
  console.log(`Average per Topic: ~${Math.round(totalContentMinutes / totalTopics)} minutes`);

  console.log('\n='.repeat(80));
  console.log('\n💡 VALUE INDICATORS:\n');
  console.log(`✓ ${totalCourses} comprehensive K-12 and AP courses`);
  console.log(`✓ ${totalTopics} unique topics across all subjects`);
  console.log(`✓ ${totalProblems.toLocaleString()} practice problems with detailed solutions`);
  console.log(`✓ ${totalFlashcards.toLocaleString()} flashcards for active recall`);
  console.log(`✓ ${Math.round(completeTopics/totalTopics*100)}% content completion rate`);
  console.log(`✓ ~${totalContentHours.toLocaleString()} hours of student engagement content`);
  console.log(`✓ Ad-revenue based model (no paywall friction)`);
  console.log(`✓ Premium tier for additional revenue`);
  console.log(`✓ Modern tech stack (Next.js, TypeScript, PostgreSQL, Prisma)`);
  console.log(`✓ Production-ready deployment infrastructure`);

  console.log('\n='.repeat(80));
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
