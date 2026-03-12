import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Get the SAT course
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' } });
  if (!course) {
    console.log('SAT Prep course not found!');
    return;
  }

  // Get existing categories
  const categories = await prisma.category.findMany({
    where: { courseId: course.id },
  });
  const catMap: Record<string, string> = {};
  categories.forEach(c => { catMap[c.slug] = c.id; });

  console.log('Found categories:', Object.keys(catMap));

  // Create "Test-Taking Strategies" category if it doesn't exist
  let strategyCat = await prisma.category.findUnique({ where: { slug: 'sat-test-strategies' } });
  if (!strategyCat) {
    strategyCat = await prisma.category.create({
      data: {
        slug: 'sat-test-strategies',
        name: 'Test-Taking Strategies',
        description: 'Essential strategies and techniques for maximizing your SAT score',
        order: 5,
        icon: '🎯',
        courseId: course.id,
      },
    });
    console.log('Created category: Test-Taking Strategies');
  }
  catMap['sat-test-strategies'] = strategyCat.id;

  // Define all missing topics
  const missingTopics = [
    // Problem Solving & Data Analysis
    {
      slug: 'sat-scatterplots-line-fit',
      title: 'Scatterplots and Line of Best Fit',
      description: 'Analyze scatterplots, determine lines of best fit, interpret slope and intercepts in context, and make predictions using linear and nonlinear models.',
      order: 3,
      categorySlug: 'sat-problem-solving-data',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-data-statistics',
      title: 'Data Collection and Statistics',
      description: 'Understand data collection methods, sampling, observational studies vs experiments, and draw valid conclusions from statistical data.',
      order: 4,
      categorySlug: 'sat-problem-solving-data',
      textContent: 'Placeholder - will be populated by expansion script',
    },

    // Passport to Advanced Math
    {
      slug: 'sat-exponential-functions',
      title: 'Exponential Functions',
      description: 'Master exponential growth and decay, interpret exponential expressions, solve exponential equations, and model real-world phenomena with exponential functions.',
      order: 4,
      categorySlug: 'sat-passport-advanced-math',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-polynomials-factoring',
      title: 'Polynomials and Factoring',
      description: 'Factor polynomials, perform polynomial arithmetic, understand the relationship between factors and zeros, and use the Remainder Theorem.',
      order: 5,
      categorySlug: 'sat-passport-advanced-math',
      textContent: 'Placeholder - will be populated by expansion script',
    },

    // Additional Topics in Math
    {
      slug: 'sat-geometry-basics',
      title: 'Geometry Basics',
      description: 'Master area, perimeter, and volume formulas for common shapes, understand angle relationships, and solve problems involving geometric properties.',
      order: 2,
      categorySlug: 'sat-additional-topics',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-circles',
      title: 'Circles',
      description: 'Understand circle equations, arc length, sector area, central and inscribed angles, tangent lines, and circle theorems tested on the SAT.',
      order: 3,
      categorySlug: 'sat-additional-topics',
      textContent: 'Placeholder - will be populated by expansion script',
    },

    // Reading & Writing
    {
      slug: 'sat-finding-textual-evidence',
      title: 'Finding Textual Evidence',
      description: 'Learn to identify and use textual evidence to support answers, locate key details, and cite specific passages to justify conclusions.',
      order: 2,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-command-evidence',
      title: 'Command of Evidence',
      description: 'Master evidence-based reasoning, evaluate how authors use evidence to support claims, and strengthen or weaken arguments with textual support.',
      order: 3,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-central-ideas-details',
      title: 'Central Ideas and Details',
      description: 'Identify central ideas, themes, and supporting details in passages. Summarize texts accurately and determine how details develop key concepts.',
      order: 4,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-vocabulary-context',
      title: 'Vocabulary in Context',
      description: 'Determine word and phrase meanings from context, understand how word choice shapes meaning and tone, and distinguish between connotations.',
      order: 5,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-subject-verb-agreement',
      title: 'Subject-Verb Agreement',
      description: 'Master subject-verb agreement rules including compound subjects, inverted sentences, indefinite pronouns, and tricky agreement patterns on the SAT.',
      order: 6,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-grammar-usage',
      title: 'Grammar and Usage',
      description: 'Comprehensive grammar rules tested on the SAT including verb tense, parallelism, modifier placement, comparisons, and idiomatic expressions.',
      order: 7,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-punctuation',
      title: 'Punctuation',
      description: 'Master punctuation rules for the SAT including commas, semicolons, colons, dashes, apostrophes, and end punctuation in various sentence structures.',
      order: 8,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-punctuation-commas-semicolons',
      title: 'Commas, Semicolons, and Colons',
      description: 'Deep dive into comma rules, semicolon usage, and colon placement — the most frequently tested punctuation on the SAT.',
      order: 9,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-sentence-structure',
      title: 'Sentence Structure',
      description: 'Identify and correct sentence structure errors including fragments, run-ons, comma splices, misplaced modifiers, and faulty parallelism.',
      order: 10,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-pronoun-agreement',
      title: 'Pronoun Agreement and Clarity',
      description: 'Master pronoun-antecedent agreement, pronoun case, ambiguous pronoun references, and reflexive pronouns as tested on the SAT.',
      order: 11,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-effective-language-use',
      title: 'Effective Language Use',
      description: 'Choose the most effective words and phrases to improve clarity, style, tone, and syntax in SAT Writing passages.',
      order: 12,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-transitions-organization',
      title: 'Transitions and Organization',
      description: 'Select appropriate transition words and phrases, improve passage organization, and ensure logical flow between sentences and paragraphs.',
      order: 13,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-conciseness-redundancy',
      title: 'Conciseness and Redundancy',
      description: 'Eliminate wordiness, redundancy, and unnecessary repetition to make writing more concise and effective on the SAT.',
      order: 14,
      categorySlug: 'sat-reading-writing',
      textContent: 'Placeholder - will be populated by expansion script',
    },

    // Test-Taking Strategies
    {
      slug: 'calculator-strategies',
      title: 'Calculator Strategies',
      description: 'Optimize calculator use on the SAT, know when to use mental math vs calculator, and master key calculator functions for efficiency.',
      order: 1,
      categorySlug: 'sat-test-strategies',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'sat-time-management',
      title: 'Time Management',
      description: 'Develop effective time management strategies for each SAT section, learn pacing techniques, and maximize your score within time constraints.',
      order: 2,
      categorySlug: 'sat-test-strategies',
      textContent: 'Placeholder - will be populated by expansion script',
    },
    {
      slug: 'process-of-elimination',
      title: 'Process of Elimination',
      description: 'Master the process of elimination technique to increase accuracy on multiple choice questions, even when unsure of the correct answer.',
      order: 3,
      categorySlug: 'sat-test-strategies',
      textContent: 'Placeholder - will be populated by expansion script',
    },
  ];

  let created = 0;
  let skipped = 0;

  for (const topic of missingTopics) {
    // Check if topic already exists
    const existing = await prisma.topic.findUnique({ where: { slug: topic.slug } });
    if (existing) {
      console.log(`  SKIP (exists): ${topic.slug}`);
      skipped++;
      continue;
    }

    const categoryId = catMap[topic.categorySlug];
    if (!categoryId) {
      console.log(`  ERROR: Category ${topic.categorySlug} not found for ${topic.slug}`);
      continue;
    }

    await prisma.topic.create({
      data: {
        slug: topic.slug,
        title: topic.title,
        description: topic.description,
        order: topic.order,
        categoryId: categoryId,
        textContent: topic.textContent,
      },
    });
    console.log(`  CREATED: ${topic.slug}`);
    created++;
  }

  console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
