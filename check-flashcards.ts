import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.course.findMany({
    include: {
      categories: {
        include: {
          topics: {
            include: {
              _count: {
                select: { flashcards: true }
              }
            },
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { order: 'asc' }
  });

  console.log('\n🃏 FLASHCARD STATUS REPORT\n');
  console.log('='.repeat(80));
  
  for (const course of courses) {
    const totalTopics = course.categories.reduce((sum, cat) => sum + cat.topics.length, 0);
    const totalFlashcards = course.categories.reduce((sum, cat) => 
      sum + cat.topics.reduce((topicSum, topic) => topicSum + topic._count.flashcards, 0), 0
    );
    const topicsWithFlashcards = course.categories.reduce((sum, cat) => 
      sum + cat.topics.filter(topic => topic._count.flashcards > 0).length, 0
    );
    
    console.log(`\n📚 ${course.name}`);
    console.log(`   Total Topics: ${totalTopics}`);
    console.log(`   Topics with Flashcards: ${topicsWithFlashcards} (${Math.round(topicsWithFlashcards/totalTopics*100)}%)`);
    console.log(`   Total Flashcards: ${totalFlashcards}`);
    
    for (const category of course.categories) {
      const catFlashcards = category.topics.reduce((sum, topic) => sum + topic._count.flashcards, 0);
      const topicsWithCards = category.topics.filter(t => t._count.flashcards > 0).length;
      
      console.log(`\n   📂 ${category.name} (${topicsWithCards}/${category.topics.length} topics with flashcards)`);
      
      for (const topic of category.topics) {
        const status = topic._count.flashcards > 0 ? '✓' : '✗';
        const count = topic._count.flashcards > 0 ? `(${topic._count.flashcards} cards)` : '(NEEDS FLASHCARDS)';
        console.log(`      ${status} ${topic.title} ${count}`);
      }
    }
    console.log('\n' + '-'.repeat(80));
  }
  
  // Summary
  const totalTopics = courses.reduce((sum, course) => 
    sum + course.categories.reduce((catSum, cat) => catSum + cat.topics.length, 0), 0
  );
  const totalTopicsWithFlashcards = courses.reduce((sum, course) => 
    sum + course.categories.reduce((catSum, cat) => 
      catSum + cat.topics.filter(topic => topic._count.flashcards > 0).length, 0
    ), 0
  );
  const totalFlashcards = courses.reduce((sum, course) => 
    sum + course.categories.reduce((catSum, cat) => 
      catSum + cat.topics.reduce((topicSum, topic) => topicSum + topic._count.flashcards, 0), 0
    ), 0
  );
  
  console.log('\n📈 PLATFORM SUMMARY');
  console.log(`   Total Topics: ${totalTopics}`);
  console.log(`   Topics with Flashcards: ${totalTopicsWithFlashcards} (${Math.round(totalTopicsWithFlashcards/totalTopics*100)}%)`);
  console.log(`   Topics MISSING Flashcards: ${totalTopics - totalTopicsWithFlashcards}`);
  console.log(`   Total Flashcards: ${totalFlashcards}`);
  console.log('\n' + '='.repeat(80) + '\n');
}

main().finally(() => prisma.$disconnect());
