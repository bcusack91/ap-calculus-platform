import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - Batch 1 (3 topics)\n');

  // First, let me find the exact slugs for missing topics
  const actCourse = await prisma.course.findFirst({
    where: { slug: 'act-prep' },
    include: {
      categories: {
        include: {
          topics: {
            select: {
              title: true,
              slug: true,
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

  console.log('Missing ACT topics:');
  const missingTopics: Array<{slug: string, title: string}> = [];
  
  if (actCourse) {
    actCourse.categories.forEach(cat => {
      cat.topics.forEach(topic => {
        const complete = topic._count.exampleProblems > 0 && topic._count.flashcards > 0;
        if (!complete) {
          console.log(`  - ${topic.title} (slug: "${topic.slug}")`);
          missingTopics.push({ slug: topic.slug, title: topic.title });
        }
      });
    });
  }

  console.log('\n');

  // Topic 1: Statistics and Probability
  const statsProbTopic = await prisma.topic.findFirst({
    where: {
      slug: { contains: 'statistics' },
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (statsProbTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: statsProbTopic.id,
          question: 'The test scores for 5 students are: 72, 85, 90, 78, and 85. What is the mean score?\n\nA) 78\nB) 82\nC) 85\nD) 90\nE) 410',
          solution: 'The mean (average) is the sum of all values divided by the number of values.\n\nStep 1: Add all scores\n72 + 85 + 90 + 78 + 85 = 410\n\nStep 2: Divide by number of students\nMean = 410 ÷ 5 = 82\n\nAnswer: B) 82\n\nNote: E) 410 is the sum, not the mean. This is a common trap answer!\n\nMean vs. Median vs. Mode:\n• Mean: Average (sum ÷ count)\n• Median: Middle value when arranged in order\n• Mode: Most frequent value\n\nFor this data:\n• Mean = 82\n• Median = 85 (middle of 72, 78, 85, 85, 90)\n• Mode = 85 (appears twice)',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: statsProbTopic.id,
          question: 'A bag contains 3 red marbles, 5 blue marbles, and 2 green marbles. If one marble is randomly selected, what is the probability it is NOT blue?\n\nF) 1/10\nG) 1/5\nH) 1/2\nJ) 3/5\nK) 7/10',
          solution: 'Probability = (Number of favorable outcomes) / (Total outcomes)\n\nStep 1: Find total marbles\n3 red + 5 blue + 2 green = 10 total\n\nStep 2: Find marbles that are NOT blue\nRed + Green = 3 + 2 = 5 marbles\n\nStep 3: Calculate probability\nP(not blue) = 5/10 = 1/2\n\nAnswer: H) 1/2\n\nAlternative method (complement):\nP(not blue) = 1 - P(blue)\nP(blue) = 5/10 = 1/2\nP(not blue) = 1 - 1/2 = 1/2 ✓\n\nACT Tip: For "NOT" probability, you can:\n1. Count favorable outcomes directly, OR\n2. Use complement: P(not A) = 1 - P(A)',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: statsProbTopic.id,
          question: 'The heights (in inches) of 7 basketball players are: 70, 72, 73, 75, 76, 78, 80. What is the interquartile range (IQR)?\n\nA) 3\nB) 4\nC) 6\nD) 8\nE) 10',
          solution: 'The interquartile range (IQR) = Q3 - Q1\n\nData: 70, 72, 73, 75, 76, 78, 80 (already ordered, n = 7)\n\nStep 1: Find the median (Q2)\nMiddle value = 75 (4th value)\n\nStep 2: Find Q1 (median of lower half)\nLower half: 70, 72, 73\nQ1 = 72 (middle of lower half)\n\nStep 3: Find Q3 (median of upper half)\nUpper half: 76, 78, 80\nQ3 = 78 (middle of upper half)\n\nStep 4: Calculate IQR\nIQR = Q3 - Q1 = 78 - 72 = 6\n\nAnswer: C) 6\n\nWhy IQR matters:\n• Measures spread of middle 50% of data\n• Not affected by outliers (unlike range)\n• Used in box plots\n\nQuartile Review:\n• Q1 = 25th percentile (1st quartile)\n• Q2 = 50th percentile (median)\n• Q3 = 75th percentile (3rd quartile)\n• IQR = Q3 - Q1 (middle 50%)\n• Range = Max - Min (entire spread)',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: statsProbTopic.id,
          front: 'How do you calculate the mean (average)?',
          back: 'Add all values together and divide by the number of values. Formula: Mean = (Sum of all values) / (Number of values).',
          hint: 'Sum divided by count',
          isPremium: false
        },
        {
          topicId: statsProbTopic.id,
          front: 'How do you calculate probability of an event?',
          back: 'Probability = (Number of favorable outcomes) / (Total number of possible outcomes). The result is always between 0 and 1 (or 0% to 100%).',
          hint: 'Favorable over total',
          isPremium: false
        },
        {
          topicId: statsProbTopic.id,
          front: 'What is the interquartile range (IQR)?',
          back: 'IQR = Q3 - Q1. It measures the spread of the middle 50% of data. Q1 is the median of the lower half, Q3 is the median of the upper half.',
          hint: 'Q3 minus Q1',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${statsProbTopic.title}`);
  }

  console.log('\n🎉 ACT Prep Batch 1 started!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
