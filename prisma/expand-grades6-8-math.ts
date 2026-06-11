import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function expandGrade6() {
  const course = await prisma.course.findUnique({
    where: { slug: 'grade-6-math' },
    include: { categories: true }
  });

  if (!course) throw new Error('Grade 6 Math not found');

  // Expand existing categories
  const fractionsCat = course.categories.find(c => c.name === 'Fractions and Decimals');
  if (fractionsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: fractionsCat.id,
          title: 'Dividing Fractions',
          slug: 'grade6-dividing-fractions',
          description: 'Divide fractions by fractions',
          textContent: 'Dividing fractions content',
          order: 3
        },
        {
          categoryId: fractionsCat.id,
          title: 'Decimal Operations',
          slug: 'decimal-operations',
          description: 'All operations with decimals',
          textContent: 'Decimal operations content',
          order: 4
        }
      ],
      skipDuplicates: true
    });
  }

  // Add new category: Expressions and Equations
  const expressionsCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Expressions and Equations',
      slug: 'expressions-and-equations',
      description: 'Algebraic expressions and solving equations',
      order: 5
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: expressionsCat.id,
        title: 'Writing Expressions',
        slug: 'writing-expressions',
        description: 'Write algebraic expressions',
        textContent: 'Writing expressions content',
        order: 0
      },
      {
        categoryId: expressionsCat.id,
        title: 'Evaluating Expressions',
        slug: 'evaluating-expressions',
        description: 'Evaluate expressions with variables',
        textContent: 'Evaluating expressions content',
        order: 1
      },
      {
        categoryId: expressionsCat.id,
        title: 'Solving One-Step Equations',
        slug: 'solving-one-step-equations',
        description: 'Solve simple equations',
        textContent: 'Solving one-step equations content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // Add new category: Statistics and Probability
  const statsCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Statistics and Probability',
      slug: 'statistics-and-probability',
      description: 'Data analysis and basic probability',
      order: 6
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: statsCat.id,
        title: 'Statistical Questions and Data Display',
        slug: 'statistical-questions-data-display',
        description: 'Ask and answer statistical questions',
        textContent: 'Statistical questions and data display content',
        order: 0
      },
      {
        categoryId: statsCat.id,
        title: 'Measures of Center and Variability',
        slug: 'measures-center-variability',
        description: 'Mean, median, mode, range',
        textContent: 'Measures of center and variability content',
        order: 1
      }
    ],
    skipDuplicates: true
  });

  const count = await prisma.topic.count({
    where: { category: { courseId: course.id } }
  });
  console.log(`✅ Grade 6 Math: ${count} topics`);
}

async function expandGrade7() {
  const course = await prisma.course.findUnique({
    where: { slug: 'grade-7-math' },
    include: { categories: true }
  });

  if (!course) throw new Error('Grade 7 Math not found');

  // Expand existing categories
  const rationalCat = course.categories.find(c => c.name === 'Rational Numbers');
  if (rationalCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: rationalCat.id,
          title: 'Multiplying and Dividing Integers',
          slug: 'multiplying-dividing-integers',
          description: 'Operations with positive and negative numbers',
          textContent: 'Multiplying and dividing integers content',
          order: 2
        },
        {
          categoryId: rationalCat.id,
          title: 'Rational Number Operations',
          slug: 'rational-number-operations',
          description: 'Add, subtract, multiply, and divide rational numbers',
          textContent: 'Rational number operations content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  const proportionsCat = course.categories.find(c => c.name === 'Proportions and Percents');
  if (proportionsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: proportionsCat.id,
          title: 'Percent of Change',
          slug: 'percent-of-change',
          description: 'Calculate percent increase and decrease',
          textContent: 'Percent of change content',
          order: 2
        },
        {
          categoryId: proportionsCat.id,
          title: 'Simple Interest',
          slug: 'simple-interest',
          description: 'Calculate simple interest',
          textContent: 'Simple interest content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // Add new category: Expressions and Equations
  const expressionsCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Expressions and Equations',
      slug: 'grade7-expressions-equations',
      description: 'Simplifying and solving',
      order: 2
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: expressionsCat.id,
        title: 'Simplifying Expressions',
        slug: 'simplifying-expressions',
        description: 'Combine like terms and use distributive property',
        textContent: 'Simplifying expressions content',
        order: 0
      },
      {
        categoryId: expressionsCat.id,
        title: 'Solving Multi-Step Equations',
        slug: 'solving-multi-step-equations',
        description: 'Solve equations with multiple steps',
        textContent: 'Solving multi-step equations content',
        order: 1
      },
      {
        categoryId: expressionsCat.id,
        title: 'Solving Inequalities',
        slug: 'solving-inequalities',
        description: 'Solve and graph inequalities',
        textContent: 'Solving inequalities content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // Add new category: Geometry
  const geometryCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Geometry',
      slug: 'grade7-geometry',
      description: 'Angles, area, and volume',
      order: 3
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: geometryCat.id,
        title: 'Angle Relationships',
        slug: 'angle-relationships',
        description: 'Complementary, supplementary, and vertical angles',
        textContent: 'Angle relationships content',
        order: 0
      },
      {
        categoryId: geometryCat.id,
        title: 'Area of Composite Figures',
        slug: 'area-composite-figures',
        description: 'Find area of complex shapes',
        textContent: 'Area of composite figures content',
        order: 1
      },
      {
        categoryId: geometryCat.id,
        title: 'Surface Area and Volume',
        slug: 'surface-area-volume',
        description: 'Calculate surface area and volume of 3D shapes',
        textContent: 'Surface area and volume content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  const count = await prisma.topic.count({
    where: { category: { courseId: course.id } }
  });
  console.log(`✅ Grade 7 Math: ${count} topics`);
}

async function expandGrade8() {
  const course = await prisma.course.findUnique({
    where: { slug: 'grade-8-math' },
    include: { categories: true }
  });

  if (!course) throw new Error('Grade 8 Math not found');

  // Expand existing categories
  const exponentsCat = course.categories.find(c => c.name === 'Exponents and Scientific Notation');
  if (exponentsCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: exponentsCat.id,
          title: 'Integer Exponents',
          slug: 'integer-exponents',
          description: 'Work with negative and zero exponents',
          textContent: 'Integer exponents content',
          order: 2
        },
        {
          categoryId: exponentsCat.id,
          title: 'Operations with Scientific Notation',
          slug: 'operations-scientific-notation',
          description: 'Multiply and divide numbers in scientific notation',
          textContent: 'Operations with scientific notation content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  const linearCat = course.categories.find(c => c.name === 'Linear Equations and Functions');
  if (linearCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: linearCat.id,
          title: 'Slope and Rate of Change',
          slug: 'slope-rate-of-change',
          description: 'Calculate and interpret slope',
          textContent: 'Slope and rate of change content',
          order: 2
        },
        {
          categoryId: linearCat.id,
          title: 'Linear Equations',
          slug: 'linear-equations',
          description: 'Solve linear equations with variables on both sides',
          textContent: 'Linear equations content',
          order: 3
        },
        {
          categoryId: linearCat.id,
          title: 'Systems of Linear Equations',
          slug: 'systems-linear-equations',
          description: 'Solve systems by graphing',
          textContent: 'Systems of linear equations content',
          order: 4
        }
      ],
      skipDuplicates: true
    });
  }

  const geometryCat = course.categories.find(c => c.name === 'Geometry');
  if (geometryCat) {
    await prisma.topic.createMany({
      data: [
        {
          categoryId: geometryCat.id,
          title: 'Pythagorean Theorem',
          slug: 'pythagorean-theorem',
          description: 'Apply the Pythagorean theorem',
          textContent: 'Pythagorean theorem content',
          order: 1
        },
        {
          categoryId: geometryCat.id,
          title: 'Distance Formula',
          slug: 'distance-formula',
          description: 'Find distance between two points',
          textContent: 'Distance formula content',
          order: 2
        },
        {
          categoryId: geometryCat.id,
          title: 'Volume of Cylinders, Cones, and Spheres',
          slug: 'volume-cylinders-cones-spheres',
          description: 'Calculate volumes of 3D shapes',
          textContent: 'Volume of cylinders, cones, and spheres content',
          order: 3
        }
      ],
      skipDuplicates: true
    });
  }

  // Add new category: Transformations
  const transformationsCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Transformations',
      slug: 'transformations',
      description: 'Translations, rotations, reflections',
      order: 3
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: transformationsCat.id,
        title: 'Translations and Reflections',
        slug: 'translations-reflections',
        description: 'Perform translations and reflections',
        textContent: 'Translations and reflections content',
        order: 0
      },
      {
        categoryId: transformationsCat.id,
        title: 'Rotations and Dilations',
        slug: 'rotations-dilations',
        description: 'Perform rotations and dilations',
        textContent: 'Rotations and dilations content',
        order: 1
      },
      {
        categoryId: transformationsCat.id,
        title: 'Congruence and Similarity',
        slug: 'congruence-similarity',
        description: 'Understand congruent and similar figures',
        textContent: 'Congruence and similarity content',
        order: 2
      }
    ],
    skipDuplicates: true
  });

  // Add new category: Data Analysis
  const dataCat = await prisma.category.create({
    data: {
      courseId: course.id,
      name: 'Data Analysis',
      slug: 'data-analysis',
      description: 'Scatter plots and statistics',
      order: 4
    }
  });

  await prisma.topic.createMany({
    data: [
      {
        categoryId: dataCat.id,
        title: 'Scatter Plots',
        slug: 'scatter-plots',
        description: 'Create and interpret scatter plots',
        textContent: 'Scatter plots content',
        order: 0
      },
      {
        categoryId: dataCat.id,
        title: 'Two-Way Tables',
        slug: 'two-way-tables',
        description: 'Analyze data in two-way tables',
        textContent: 'Two-way tables content',
        order: 1
      }
    ],
    skipDuplicates: true
  });

  const count = await prisma.topic.count({
    where: { category: { courseId: course.id } }
  });
  console.log(`✅ Grade 8 Math: ${count} topics`);
}

async function main() {
  console.log('🚀 Expanding Middle School Math (Grades 6-8)...\n');
  
  await expandGrade6();
  await expandGrade7();
  await expandGrade8();
  
  console.log('\n✨ All middle school courses expanded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
