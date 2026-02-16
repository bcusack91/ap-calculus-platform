import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' },
    include: { categories: true }
  });

  if (!course) {
    throw new Error('Grade 4 Math course not found');
  }

  // Add more topics to existing categories and create new ones
  
  // 1. Expand Multiplication and Division
  const multDivCat = course.categories.find(c => c.name === 'Multiplication and Division');
  if (multDivCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: multDivCat.id,
          title: 'Multi-Digit Multiplication',
          slug: 'multi-digit-multiplication',
          description: 'Multiply multi-digit numbers using the standard algorithm',
          textContent: 'Multi-digit multiplication content',
          order: 2
        },
        {
          categoryId: multDivCat.id,
          title: 'Division with Remainders',
          slug: 'division-with-remainders',
          description: 'Understand and interpret remainders in division problems',
          textContent: 'Division with remainders content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // 2. Expand Fractions
  const fractionsCat = course.categories.find(c => c.name === 'Fractions');
  if (fractionsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: fractionsCat.id,
          title: 'Adding Fractions with Like Denominators',
          slug: 'adding-fractions-like-denominators',
          description: 'Add fractions that have the same denominator',
          textContent: 'Adding fractions with like denominators content',
          order: 2
        },
        {
          categoryId: fractionsCat.id,
          title: 'Multiplying Fractions by Whole Numbers',
          slug: 'multiplying-fractions-whole-numbers',
          description: 'Multiply a fraction by a whole number',
          textContent: 'Multiplying fractions by whole numbers content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // 3. Create new category: Place Value and Number Sense
  const placeValueCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Place Value and Number Sense',
      slug: 'place-value-number-sense',
      description: 'Understanding place value and number relationships',
      order: 0
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: placeValueCat.id,
        title: 'Place Value to Millions',
        slug: 'place-value-millions',
        description: 'Read and write numbers up to one million',
        textContent: 'Place value to millions content',
        order: 0
      },
      {
        categoryId: placeValueCat.id,
        title: 'Comparing and Ordering Numbers',
        slug: 'comparing-ordering-numbers',
        description: 'Compare and order multi-digit numbers',
        textContent: 'Comparing and ordering numbers content',
        order: 1
      },
      {
        categoryId: placeValueCat.id,
        title: 'Rounding Numbers',
        slug: 'rounding-numbers',
        description: 'Round multi-digit numbers to any place value',
        textContent: 'Rounding numbers content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // 4. Expand Decimals and Measurement
  const decimalsCat = course.categories.find(c => c.name === 'Decimals and Measurement');
  if (decimalsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: decimalsCat.id,
          title: 'Adding and Subtracting Decimals',
          slug: 'adding-subtracting-decimals',
          description: 'Add and subtract decimal numbers',
          textContent: 'Adding and subtracting decimals content',
          order: 1
        },
        {
          categoryId: decimalsCat.id,
          title: 'Converting Units of Measurement',
          slug: 'converting-units-measurement',
          description: 'Convert between units of length, weight, and capacity',
          textContent: 'Converting units of measurement content',
          order: 2
        }
      ],
      skipDuplicates: true
    });
  }

  // 5. Create new category: Geometry
  const geometryCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Geometry',
      slug: 'geometry',
      description: 'Lines, angles, and shapes',
      order: 4
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: geometryCat.id,
        title: 'Lines and Angles',
        slug: 'lines-and-angles',
        description: 'Identify and classify lines, line segments, rays, and angles',
        textContent: 'Lines and angles content',
        order: 0
      },
      {
        categoryId: geometryCat.id,
        title: 'Area and Perimeter',
        slug: 'area-and-perimeter',
        description: 'Calculate area and perimeter of rectangles',
        textContent: 'Area and perimeter content',
        order: 1
      },
      {
        categoryId: geometryCat.id,
        title: 'Symmetry',
        slug: 'symmetry',
        description: 'Identify lines of symmetry in shapes',
        textContent: 'Symmetry content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // 6. Create new category: Data and Graphs
  const dataCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Data and Graphs',
      slug: 'data-and-graphs',
      description: 'Interpreting and creating graphs',
      order: 5
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: dataCat.id,
        title: 'Reading Bar Graphs and Line Plots',
        slug: 'reading-bar-graphs-line-plots',
        description: 'Interpret data from bar graphs and line plots',
        textContent: 'Reading bar graphs and line plots content',
        order: 0
      },
      {
        categoryId: dataCat.id,
        title: 'Creating and Analyzing Data',
        slug: 'creating-analyzing-data',
        description: 'Collect, organize, and display data',
        textContent: 'Creating and analyzing data content',
        order: 1
      }
    ],
    skipDuplicates: true
  });

  console.log('✅ Successfully expanded Grade 4 Math!');
  
  // Count topics
  const topics = await prisma.topic.count({
    where: {
      category: {
        courseId: course.id
      }
    }
  });
  
  console.log(`📊 Grade 4 Math now has ${topics} topics`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
