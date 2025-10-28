import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' },
    include: { categories: true }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Expand existing categories
  const integersCat = course.categories.find(c => c.name === 'Integers and Rational Numbers');
  if (integersCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: integersCat.id,
          title: 'Absolute Value',
          slug: 'absolute-value',
          description: 'Understanding and using absolute value',
          textContent: 'Absolute value content',
          order: 2
        },
        {
          categoryId: integersCat.id,
          title: 'Comparing and Ordering Rational Numbers',
          slug: 'comparing-ordering-rational',
          description: 'Order integers, fractions, and decimals',
          textContent: 'Comparing and ordering rational numbers content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  const fractionsCat = course.categories.find(c => c.name === 'Fractions and Decimals');
  if (fractionsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: fractionsCat.id,
          title: 'Operations with Fractions',
          slug: 'operations-with-fractions',
          description: 'Add, subtract, multiply, and divide fractions',
          textContent: 'Operations with fractions content',
          order: 2
        },
        {
          categoryId: fractionsCat.id,
          title: 'Fraction and Decimal Conversions',
          slug: 'fraction-decimal-conversions',
          description: 'Convert between fractions and decimals',
          textContent: 'Fraction and decimal conversions content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  const expressionsCat = course.categories.find(c => c.name === 'Order of Operations and Expressions');
  if (expressionsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: expressionsCat.id,
          title: 'Exponents and Powers',
          slug: 'exponents-and-powers',
          description: 'Work with exponents and powers',
          textContent: 'Exponents and powers content',
          order: 2
        },
        {
          categoryId: expressionsCat.id,
          title: 'Square Roots and Perfect Squares',
          slug: 'square-roots-perfect-squares',
          description: 'Find square roots and identify perfect squares',
          textContent: 'Square roots and perfect squares content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  const ratiosCat = course.categories.find(c => c.name === 'Ratios, Proportions, and Percents');
  if (ratiosCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: ratiosCat.id,
          title: 'Unit Rates',
          slug: 'unit-rates',
          description: 'Calculate and use unit rates',
          textContent: 'Unit rates content',
          order: 3
        },
        {
          categoryId: ratiosCat.id,
          title: 'Percent Applications',
          slug: 'percent-applications',
          description: 'Solve problems involving percent increase, decrease, and tax',
          textContent: 'Percent applications content',
          order: 4
        }
      ],
      skipDuplicates: true
    });
  }

  const algebraCat = course.categories.find(c => c.name === 'Introduction to Algebra');
  if (algebraCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: algebraCat.id,
          title: 'Combining Like Terms',
          slug: 'combining-like-terms',
          description: 'Simplify expressions by combining like terms',
          textContent: 'Combining like terms content',
          order: 2
        },
        {
          categoryId: algebraCat.id,
          title: 'Distributive Property',
          slug: 'distributive-property',
          description: 'Use the distributive property to simplify expressions',
          textContent: 'Distributive property content',
          order: 3
        },
        {
          categoryId: algebraCat.id,
          title: 'Solving Two-Step Equations',
          slug: 'solving-two-step-equations',
          description: 'Solve equations requiring two steps',
          textContent: 'Solving two-step equations content',
          order: 4
        }
      ],
      skipDuplicates: true
    });
  }

  // Add new category: Geometry Basics
  const geometryCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Geometry Basics',
      slug: 'geometry-basics',
      description: 'Basic geometric concepts',
      order: 5
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: geometryCat.id,
        title: 'Perimeter and Area',
        slug: 'perimeter-and-area',
        description: 'Calculate perimeter and area of common shapes',
        textContent: 'Perimeter and area content',
        order: 0
      },
      {
        categoryId: geometryCat.id,
        title: 'Volume of Rectangular Prisms',
        slug: 'volume-rectangular-prisms',
        description: 'Calculate volume of boxes and rectangular prisms',
        textContent: 'Volume of rectangular prisms content',
        order: 1
      },
      {
        categoryId: geometryCat.id,
        title: 'Angle Measurements',
        slug: 'angle-measurements',
        description: 'Measure and classify angles',
        textContent: 'Angle measurements content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // Add new category: Introduction to Statistics
  const statsCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Introduction to Statistics',
      slug: 'intro-statistics',
      description: 'Basic data and statistics',
      order: 6
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: statsCat.id,
        title: 'Reading Graphs and Charts',
        slug: 'reading-graphs-charts',
        description: 'Interpret bar graphs, line graphs, and pie charts',
        textContent: 'Reading graphs and charts content',
        order: 0
      },
      {
        categoryId: statsCat.id,
        title: 'Mean, Median, and Mode',
        slug: 'mean-median-mode',
        description: 'Calculate measures of central tendency',
        textContent: 'Mean, median, and mode content',
        order: 1
      },
      {
        categoryId: statsCat.id,
        title: 'Range and Outliers',
        slug: 'range-and-outliers',
        description: 'Find range and identify outliers in data sets',
        textContent: 'Range and outliers content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  console.log('✅ Successfully expanded Pre-Algebra!');
  
  const topics = await prisma.topic.count({
    where: {
      category: {
        courseId: course.id
      }
    }
  });
  
  console.log(`📊 Pre-Algebra now has ${topics} topics`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
