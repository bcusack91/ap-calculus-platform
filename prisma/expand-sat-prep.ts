import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'sat-prep' },
    include: { categories: true }
  });

  if (!course) {
    throw new Error('SAT Prep course not found');
  }

  // Add more Heart of Algebra topics
  const algebraCat = course.categories.find(c => c.name === 'Heart of Algebra');
  if (algebraCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: algebraCat.id,
          title: 'Systems of Inequalities',
          slug: 'systems-of-inequalities',
          description: 'Solve and graph systems of inequalities',
          textContent: 'Systems of inequalities content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // Add more Problem Solving and Data Analysis
  const dataCat = course.categories.find(c => c.name === 'Problem Solving and Data Analysis');
  if (dataCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: dataCat.id,
          title: 'Two-Way Tables and Conditional Probability',
          slug: 'two-way-tables-conditional-probability',
          description: 'Analyze two-way tables and calculate conditional probabilities',
          textContent: 'Two-way tables and conditional probability content',
          order: 3
        },
        {
          categoryId: dataCat.id,
          title: 'Statistical Claims and Studies',
          slug: 'statistical-claims-studies',
          description: 'Evaluate statistical claims and study designs',
          textContent: 'Statistical claims and studies content',
          order: 4
        }
      ],
      skipDuplicates: true
    });
  }

  // Add more Passport to Advanced Math
  const advancedCat = course.categories.find(c => c.name === 'Passport to Advanced Math');
  if (advancedCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: advancedCat.id,
          title: 'Function Notation and Transformations',
          slug: 'function-notation-transformations',
          description: 'Work with function notation and graph transformations',
          textContent: 'Function notation and transformations content',
          order: 4
        }
      ],
      skipDuplicates: true
    });
  }

  // Add more Reading topics
  const ideasCat = course.categories.find(c => c.name === 'Reading: Information and Ideas');
  if (ideasCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: ideasCat.id,
          title: 'Analyzing Arguments',
          slug: 'analyzing-arguments',
          description: 'Evaluate reasoning and evidence in arguments',
          textContent: 'Analyzing arguments content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // Add more Writing topics
  const expressionCat = course.categories.find(c => c.name === 'Writing: Expression of Ideas');
  if (expressionCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: expressionCat.id,
          title: 'Organization and Focus',
          slug: 'organization-and-focus',
          description: 'Improve organization and maintain focus in writing',
          textContent: 'Organization and focus content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  const conventionsCat = course.categories.find(c => c.name === 'Writing: Standard English Conventions');
  if (conventionsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: conventionsCat.id,
          title: 'Subject-Verb Agreement',
          slug: 'subject-verb-agreement',
          description: 'Ensure subjects and verbs agree in number',
          textContent: 'Subject-verb agreement content',
          order: 6
        },
        {
          categoryId: conventionsCat.id,
          title: 'Pronoun Usage',
          slug: 'pronoun-usage',
          description: 'Use pronouns correctly with proper agreement and clarity',
          textContent: 'Pronoun usage content',
          order: 7
        }
      ],
      skipDuplicates: true
    });
  }

  // Add new category: SAT Test Strategy
  const strategyCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'SAT Test Strategy',
      slug: 'sat-test-strategy',
      description: 'Essential test-taking strategies',
      order: 8
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: strategyCat.id,
        title: 'Calculator vs No-Calculator Strategies',
        slug: 'calculator-strategies',
        description: 'When to use and not use a calculator',
        textContent: 'Calculator strategies content',
        order: 0
      },
      {
        categoryId: strategyCat.id,
        title: 'Process of Elimination',
        slug: 'process-of-elimination',
        description: 'Eliminate wrong answers effectively',
        textContent: 'Process of elimination content',
        order: 1
      },
      {
        categoryId: strategyCat.id,
        title: 'Time Management for SAT',
        slug: 'sat-time-management',
        description: 'Manage your time across all SAT sections',
        textContent: 'Time management for SAT content',
        order: 2
      },
      {
        categoryId: strategyCat.id,
        title: 'Reading Strategies',
        slug: 'reading-strategies',
        description: 'Effective approaches to SAT reading passages',
        textContent: 'Reading strategies content',
        order: 3
      }
    ],
    skipDuplicates: true
  });

  console.log('✅ Successfully expanded SAT Prep!');
  
  const topics = await prisma.topic.count({
    where: {
      category: {
        courseId: course.id
      }
    }
  });
  
  console.log(`📊 SAT Prep now has ${topics} topics`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
