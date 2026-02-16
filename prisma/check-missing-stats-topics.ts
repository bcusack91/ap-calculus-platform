import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Get the AP Stats course
  const course = await prisma.course.findUnique({
    where: { slug: 'ap-statistics' },
    include: {
      categories: {
        include: {
          topics: true
        }
      }
    }
  });

  if (!course) {
    console.log('AP Statistics course not found!');
    return;
  }

  console.log(`\n📊 AP Statistics Course Analysis\n`);
  
  let totalTopics = 0;
  let topicsWithProblems = 0;
  let topicsWithFlashcards = 0;
  let topicsEmpty = [];

  for (const category of course.categories) {
    console.log(`\n📁 ${category.name} (${category.topics.length} topics):`);
    
    for (const topic of category.topics) {
      totalTopics++;
      
      const problemCount = await prisma.exampleProblem.count({
        where: { topicId: topic.id }
      });
      
      const flashcardCount = await prisma.flashcard.count({
        where: { topicId: topic.id }
      });
      
      if (problemCount > 0) topicsWithProblems++;
      if (flashcardCount > 0) topicsWithFlashcards++;
      
      const status = problemCount > 0 || flashcardCount > 0 ? '✅' : '❌';
      
      console.log(`  ${status} ${topic.title} (${topic.slug})`);
      console.log(`     ${problemCount} problems, ${flashcardCount} flashcards`);
      
      if (problemCount === 0 && flashcardCount === 0) {
        topicsEmpty.push({ title: topic.title, slug: topic.slug, category: category.name });
      }
    }
  }
  
  console.log(`\n\n📈 Summary:`);
  console.log(`Total topics: ${totalTopics}`);
  console.log(`Topics with problems: ${topicsWithProblems}`);
  console.log(`Topics with flashcards: ${topicsWithFlashcards}`);
  console.log(`Empty topics: ${topicsEmpty.length}`);
  
  if (topicsEmpty.length > 0) {
    console.log(`\n❌ Topics missing content:\n`);
    topicsEmpty.forEach((topic, i) => {
      console.log(`${i + 1}. ${topic.title} (${topic.slug}) - in ${topic.category}`);
    });
  } else {
    console.log(`\n🎉 All topics have content!`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
