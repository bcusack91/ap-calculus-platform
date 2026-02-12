import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Check if the unit circle topic exists
  const unitCircleTopic = await prisma.topic.findUnique({
    where: { slug: 'the-unit-circle' },
    include: {
      category: {
        include: {
          course: true
        }
      },
      _count: {
        select: {
          exampleProblems: true,
          flashcards: true
        }
      }
    }
  });

  if (unitCircleTopic) {
    console.log('✅ Unit Circle Topic Found!');
    console.log(`   Course: ${unitCircleTopic.category.course.name}`);
    console.log(`   Category: ${unitCircleTopic.category.name}`);
    console.log(`   Title: ${unitCircleTopic.title}`);
    console.log(`   Slug: ${unitCircleTopic.slug}`);
    console.log(`   Problems: ${unitCircleTopic._count.exampleProblems}`);
    console.log(`   Flashcards: ${unitCircleTopic._count.flashcards}`);
    console.log(`   Premium: ${unitCircleTopic.isPremium}`);
  } else {
    console.log('❌ Unit Circle topic not found!');
  }

  // Now check all topics in precalculus
  console.log('\n📚 All AP Precalculus Topics:');
  console.log('='.repeat(80));
  
  const precalc = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              title: true,
              slug: true,
              order: true,
              isPremium: true,
              _count: {
                select: {
                  exampleProblems: true,
                  flashcards: true
                }
              }
            },
            orderBy: { order: 'asc' }
          }
        },
        orderBy: { order: 'asc' }
      }
    }
  });

  if (precalc) {
    precalc.categories.forEach(cat => {
      console.log(`\n📁 ${cat.name}:`);
      if (cat.topics.length === 0) {
        console.log('   (No topics yet)');
      } else {
        cat.topics.forEach(t => {
          const complete = t._count.exampleProblems > 0 && t._count.flashcards > 0;
          const status = complete ? '✅' : '⏳';
          console.log(`   ${status} ${t.title} (${t.slug})`);
          if (!complete) {
            console.log(`      Problems: ${t._count.exampleProblems}, Flashcards: ${t._count.flashcards}`);
          }
        });
      }
    });
  }

  await prisma.$disconnect();
}

main().catch(console.error);
