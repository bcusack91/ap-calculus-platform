import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🎯 Adding final 7+ topics to reach 500...\n');

  // Add to AP Physics C: Mechanics
  const physicsCMech = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-mechanics' },
    include: { categories: true }
  });

  if (physicsCMech) {
    const rotationCat = physicsCMech.categories.find(c => c.name === 'Rotational Motion');
    if (rotationCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: rotationCat.id,
            title: 'Parallel Axis Theorem',
            slug: 'parallel-axis-theorem',
            description: 'Calculate moments of inertia for displaced axes',
            textContent: 'Parallel axis theorem content',
            order: 3
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // Add to AP Physics C: E&M
  const physicsCEM = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-em' },
    include: { categories: true }
  });

  if (physicsCEM) {
    const electrostaticsCat = physicsCEM.categories.find(c => c.name === 'Electrostatics');
    if (electrostaticsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: electrostaticsCat.id,
            title: 'Gauss\'s Law Applications',
            slug: 'gauss-law-applications',
            description: 'Apply Gauss\'s law to various charge distributions',
            textContent: 'Gauss\'s law applications content',
            order: 3
          }
        ],
        skipDuplicates: true
      });
    }

    const circuitsCat = physicsCEM.categories.find(c => c.name === 'Electric Circuits');
    if (circuitsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: circuitsCat.id,
            title: 'RC Circuits',
            slug: 'rc-circuits',
            description: 'Analyze resistor-capacitor circuits',
            textContent: 'RC circuits content',
            order: 2
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // Add to Geometry
  const geometry = await prisma.course.findUnique({
    where: { slug: 'geometry' },
    include: { categories: true }
  });

  if (geometry) {
    const coordGeomCat = geometry.categories.find(c => c.name === 'Coordinate Geometry');
    if (coordGeomCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: coordGeomCat.id,
            title: 'Equations of Circles',
            slug: 'equations-of-circles',
            description: 'Write and graph equations of circles',
            textContent: 'Equations of circles content',
            order: 2
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // Add to Algebra 2
  const algebra2 = await prisma.course.findUnique({
    where: { slug: 'algebra-2' },
    include: { categories: true }
  });

  if (algebra2) {
    const matricesCat = algebra2.categories.find(c => c.name === 'Matrices');
    if (matricesCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: matricesCat.id,
            title: 'Matrix Operations',
            slug: 'matrix-operations',
            description: 'Add, subtract, and multiply matrices',
            textContent: 'Matrix operations content',
            order: 1
          },
          {
            categoryId: matricesCat.id,
            title: 'Determinants and Inverses',
            slug: 'determinants-inverses',
            description: 'Calculate determinants and find inverse matrices',
            textContent: 'Determinants and inverses content',
            order: 2
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // Add to AP Precalculus
  const precalc = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' },
    include: { categories: true }
  });

  if (precalc) {
    const functionsCat = precalc.categories.find(c => c.name === 'Function Fundamentals');
    if (functionsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: functionsCat.id,
            title: 'Piecewise Functions',
            slug: 'piecewise-functions',
            description: 'Work with piecewise-defined functions',
            textContent: 'Piecewise functions content',
            order: 8
          }
        ],
        skipDuplicates: true
      });
    }
  }

  console.log('✅ Final topics added!\n');
  
  const totalTopics = await prisma.topic.count();
  console.log(`🎉 PLATFORM NOW HAS ${totalTopics} TOPICS!`);
  
  if (totalTopics >= 500) {
    console.log('🎊 WE DID IT! 500+ TOPICS ACHIEVED!');
  } else {
    console.log(`📝 Need ${500 - totalTopics} more topics to reach 500`);
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
