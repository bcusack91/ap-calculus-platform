import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findUnique({
    where: { slug: 'grade-5-math' },
    include: { categories: true }
  });

  if (!course) {
    throw new Error('Grade 5 Math course not found');
  }

  // 1. Expand Place Value and Decimals
  const placeValueCat = course.categories.find(c => c.name === 'Place Value and Decimals');
  if (placeValueCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: placeValueCat.id,
          title: 'Multiplying Decimals',
          slug: 'multiplying-decimals',
          description: 'Multiply decimal numbers',
          textContent: 'Multiplying decimals content',
          order: 2
        },
        {
          categoryId: placeValueCat.id,
          title: 'Dividing Decimals',
          slug: 'dividing-decimals',
          description: 'Divide decimal numbers',
          textContent: 'Dividing decimals content',
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
          title: 'Adding and Subtracting Fractions',
          slug: 'adding-subtracting-fractions',
          description: 'Add and subtract fractions with unlike denominators',
          textContent: 'Adding and subtracting fractions content',
          order: 2
        },
        {
          categoryId: fractionsCat.id,
          title: 'Multiplying and Dividing Fractions',
          slug: 'multiplying-dividing-fractions',
          description: 'Multiply and divide fractions',
          textContent: 'Multiplying and dividing fractions content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // 3. Expand Volume and Geometry
  const volumeCat = course.categories.find(c => c.name === 'Volume and Geometry');
  if (volumeCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: volumeCat.id,
          title: 'Classifying 2D Shapes',
          slug: 'classifying-2d-shapes',
          description: 'Classify two-dimensional figures',
          textContent: 'Classifying 2D shapes content',
          order: 1
        },
        {
          categoryId: volumeCat.id,
          title: 'Coordinate Plane Basics',
          slug: 'coordinate-plane-basics',
          description: 'Plot points on the coordinate plane',
          textContent: 'Coordinate plane basics content',
          order: 2
        }
      ],
      skipDuplicates: true
    });
  }

  // 4. Create new category: Operations and Algebraic Thinking
  const algebraicCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Operations and Algebraic Thinking',
      slug: 'operations-algebraic-thinking',
      description: 'Numerical expressions and patterns',
      order: 3
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: algebraicCat.id,
        title: 'Order of Operations',
        slug: 'order-of-operations',
        description: 'Evaluate expressions using order of operations',
        textContent: 'Order of operations content',
        order: 0
      },
      {
        categoryId: algebraicCat.id,
        title: 'Numerical Expressions',
        slug: 'numerical-expressions',
        description: 'Write and interpret numerical expressions',
        textContent: 'Numerical expressions content',
        order: 1
      },
      {
        categoryId: algebraicCat.id,
        title: 'Patterns and Relationships',
        slug: 'patterns-relationships',
        description: 'Identify and extend patterns',
        textContent: 'Patterns and relationships content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // 5. Create new category: Data and Graphing
  const dataCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Data and Graphing',
      slug: 'data-and-graphing',
      description: 'Interpreting and displaying data',
      order: 4
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: dataCat.id,
        title: 'Line Graphs',
        slug: 'line-graphs',
        description: 'Create and interpret line graphs',
        textContent: 'Line graphs content',
        order: 0
      },
      {
        categoryId: dataCat.id,
        title: 'Measures of Center',
        slug: 'measures-of-center',
        description: 'Find mean, median, and mode',
        textContent: 'Measures of center content',
        order: 1
      }
    ],
    skipDuplicates: true
  });

  // 6. Create new category: Number Theory
  const numberTheoryCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Number Theory',
      slug: 'number-theory',
      description: 'Factors, multiples, and divisibility',
      order: 5
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: numberTheoryCat.id,
        title: 'Factors and Multiples',
        slug: 'factors-and-multiples',
        description: 'Find factors and multiples of numbers',
        textContent: 'Factors and multiples content',
        order: 0
      },
      {
        categoryId: numberTheoryCat.id,
        title: 'Prime and Composite Numbers',
        slug: 'prime-composite-numbers',
        description: 'Identify prime and composite numbers',
        textContent: 'Prime and composite numbers content',
        order: 1
      },
      {
        categoryId: numberTheoryCat.id,
        title: 'GCF and LCM',
        slug: 'gcf-and-lcm',
        description: 'Find greatest common factor and least common multiple',
        textContent: 'GCF and LCM content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  console.log('✅ Successfully expanded Grade 5 Math!');
  
  const topics = await prisma.topic.count({
    where: {
      category: {
        courseId: course.id
      }
    }
  });
  
  console.log(`📊 Grade 5 Math now has ${topics} topics`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
