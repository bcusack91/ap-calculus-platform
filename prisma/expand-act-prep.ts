import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'act-prep' },
    include: { categories: true }
  });

  if (!course) {
    throw new Error('ACT Prep course not found');
  }

  // Expand ACT Math
  const mathCat = course.categories.find(c => c.name === 'ACT Math');
  if (mathCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: mathCat.id,
          title: 'Number and Quantity',
          slug: 'act-number-quantity',
          description: 'Real and complex numbers, vectors, matrices',
          textContent: 'Number and quantity content',
          order: 3
        },
        {
          categoryId: mathCat.id,
          title: 'Statistics and Probability',
          slug: 'act-statistics-probability',
          description: 'Data interpretation, probability calculations',
          textContent: 'Statistics and probability content',
          order: 4
        },
        {
          categoryId: mathCat.id,
          title: 'Modeling and Problem Solving',
          slug: 'act-modeling-problem-solving',
          description: 'Apply mathematical concepts to real-world problems',
          textContent: 'Modeling and problem solving content',
          order: 5
        }
      ],
      skipDuplicates: true
    });
  }

  // Expand ACT English
  const englishCat = course.categories.find(c => c.name === 'ACT English');
  if (englishCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: englishCat.id,
          title: 'Sentence Structure and Formation',
          slug: 'sentence-structure-formation',
          description: 'Run-ons, fragments, comma splices, modifiers',
          textContent: 'Sentence structure and formation content',
          order: 2
        },
        {
          categoryId: englishCat.id,
          title: 'Punctuation Rules',
          slug: 'act-punctuation-rules',
          description: 'Commas, semicolons, colons, apostrophes, dashes',
          textContent: 'Punctuation rules content',
          order: 3
        },
        {
          categoryId: englishCat.id,
          title: 'Usage and Style',
          slug: 'usage-and-style',
          description: 'Word choice, tone, style, and organization',
          textContent: 'Usage and style content',
          order: 4
        },
        {
          categoryId: englishCat.id,
          title: 'Rhetorical Skills',
          slug: 'rhetorical-skills',
          description: 'Strategy, organization, and style in writing',
          textContent: 'Rhetorical skills content',
          order: 5
        }
      ],
      skipDuplicates: true
    });
  }

  // Expand ACT Science
  const scienceCat = course.categories.find(c => c.name === 'ACT Science');
  if (scienceCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: scienceCat.id,
          title: 'Evaluation of Models and Experiments',
          slug: 'evaluation-models-experiments',
          description: 'Analyze and evaluate scientific models and experimental designs',
          textContent: 'Evaluation of models and experiments content',
          order: 3
        },
        {
          categoryId: scienceCat.id,
          title: 'Scientific Investigation',
          slug: 'scientific-investigation',
          description: 'Understand experimental design and methodology',
          textContent: 'Scientific investigation content',
          order: 4
        },
        {
          categoryId: scienceCat.id,
          title: 'Data Representation in Science',
          slug: 'data-representation-science',
          description: 'Interpret tables, graphs, and diagrams',
          textContent: 'Data representation in science content',
          order: 5
        }
      ],
      skipDuplicates: true
    });
  }

  // Expand ACT Reading
  const readingCat = course.categories.find(c => c.name === 'ACT Reading');
  if (readingCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: readingCat.id,
          title: 'Key Ideas and Details - Natural Science',
          slug: 'key-ideas-natural-science',
          description: 'Read and analyze natural science passages',
          textContent: 'Key ideas and details - natural science content',
          order: 4
        },
        {
          categoryId: readingCat.id,
          title: 'Craft and Structure',
          slug: 'craft-and-structure',
          description: 'Analyze author\'s craft, word choice, and text structure',
          textContent: 'Craft and structure content',
          order: 5
        },
        {
          categoryId: readingCat.id,
          title: 'Integration of Knowledge',
          slug: 'integration-of-knowledge',
          description: 'Make comparisons and connections across texts',
          textContent: 'Integration of knowledge content',
          order: 6
        },
        {
          categoryId: readingCat.id,
          title: 'Vocabulary in Context',
          slug: 'vocabulary-in-context',
          description: 'Determine meanings of words from context',
          textContent: 'Vocabulary in context content',
          order: 7
        }
      ],
      skipDuplicates: true
    });
  }

  // Add new category: ACT Test Strategy
  const strategyCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'ACT Test Strategy',
      slug: 'act-test-strategy',
      description: 'Time management and test-taking strategies',
      order: 4
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: strategyCat.id,
        title: 'Time Management',
        slug: 'act-time-management',
        description: 'Pacing strategies for each ACT section',
        textContent: 'Time management content',
        order: 0
      },
      {
        categoryId: strategyCat.id,
        title: 'Guessing Strategies',
        slug: 'guessing-strategies',
        description: 'When and how to guess effectively',
        textContent: 'Guessing strategies content',
        order: 1
      },
      {
        categoryId: strategyCat.id,
        title: 'Test Day Preparation',
        slug: 'test-day-preparation',
        description: 'What to expect and how to prepare for test day',
        textContent: 'Test day preparation content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  console.log('✅ Successfully expanded ACT Prep!');
  
  const topics = await prisma.topic.count({
    where: {
      category: {
        courseId: course.id
      }
    }
  });
  
  console.log(`📊 ACT Prep now has ${topics} topics`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
