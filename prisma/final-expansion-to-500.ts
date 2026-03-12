import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Final expansion to reach 500 topics...\n');

  // 1. Expand Algebra 2 (currently 22)
  const algebra2 = await prisma.course.findUnique({
    where: { slug: 'algebra-2' },
    include: { categories: true }
  });

  if (algebra2) {
    const polynomialsCat = algebra2.categories.find(c => c.name === 'Polynomial Functions');
    if (polynomialsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: polynomialsCat.id,
            title: 'Polynomial Long Division',
            slug: 'polynomial-long-division',
            description: 'Divide polynomials using long division',
            textContent: 'Polynomial long division content',
            order: 5
          },
          {
            categoryId: polynomialsCat.id,
            title: 'Synthetic Division',
            slug: 'synthetic-division',
            description: 'Use synthetic division for polynomial division',
            textContent: 'Synthetic division content',
            order: 6
          }
        ],
        skipDuplicates: true
      });
    }

    const sequencesCat = algebra2.categories.find(c => c.name === 'Sequences and Series');
    if (sequencesCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: sequencesCat.id,
            title: 'Geometric Sequences and Series',
            slug: 'geometric-sequences-series',
            description: 'Work with geometric sequences and find their sums',
            textContent: 'Geometric sequences and series content',
            order: 2
          },
          {
            categoryId: sequencesCat.id,
            title: 'Infinite Series',
            slug: 'infinite-series',
            description: 'Understand convergence of infinite geometric series',
            textContent: 'Infinite series content',
            order: 3
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 2. Expand Geometry (currently 17)
  const geometry = await prisma.course.findUnique({
    where: { slug: 'geometry' },
    include: { categories: true }
  });

  if (geometry) {
    const trianglesCat = geometry.categories.find(c => c.name === 'Triangles');
    if (trianglesCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: trianglesCat.id,
            title: 'Triangle Inequalities',
            slug: 'triangle-inequalities',
            description: 'Apply triangle inequality theorem',
            textContent: 'Triangle inequalities content',
            order: 5
          },
          {
            categoryId: trianglesCat.id,
            title: 'Special Segments in Triangles',
            slug: 'special-segments-triangles',
            description: 'Medians, altitudes, and angle bisectors',
            textContent: 'Special segments in triangles content',
            order: 6
          }
        ],
        skipDuplicates: true
      });
    }

    const circlesCat = geometry.categories.find(c => c.name === 'Circles');
    if (circlesCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: circlesCat.id,
            title: 'Inscribed Angles',
            slug: 'inscribed-angles',
            description: 'Work with angles inscribed in circles',
            textContent: 'Inscribed angles content',
            order: 3
          },
          {
            categoryId: circlesCat.id,
            title: 'Tangent Lines',
            slug: 'tangent-lines',
            description: 'Properties of tangent lines to circles',
            textContent: 'Tangent lines content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 3. Expand AP Precalculus (currently 32)
  const precalc = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' },
    include: { categories: true }
  });

  if (precalc) {
    const trigCat = precalc.categories.find(c => c.name === 'Trigonometric Functions');
    if (trigCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: trigCat.id,
            title: 'Sum and Difference Identities',
            slug: 'sum-difference-identities',
            description: 'Use sum and difference formulas for trig functions',
            textContent: 'Sum and difference identities content',
            order: 6
          },
          {
            categoryId: trigCat.id,
            title: 'Double Angle and Half Angle Identities',
            slug: 'double-half-angle-identities',
            description: 'Apply double and half angle formulas',
            textContent: 'Double angle and half angle identities content',
            order: 7
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 4. Expand AP Physics 1 (currently 23)
  const physics1 = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
    include: { categories: true }
  });

  if (physics1) {
    const kinematicsCat = physics1.categories.find(c => c.name === 'Kinematics');
    if (kinematicsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: kinematicsCat.id,
            title: 'Projectile Motion',
            slug: 'projectile-motion',
            description: 'Analyze 2D projectile motion',
            textContent: 'Projectile motion content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }

    const energyCat = physics1.categories.find(c => c.name === 'Energy');
    if (energyCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: energyCat.id,
            title: 'Power',
            slug: 'power-physics',
            description: 'Calculate power in mechanical systems',
            textContent: 'Power content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 5. Expand AP Chemistry (currently 35)
  const chemistry = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' },
    include: { categories: true }
  });

  if (chemistry) {
    const atomicCat = chemistry.categories.find(c => c.name === 'Atomic Structure and Properties');
    if (atomicCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: atomicCat.id,
            title: 'Atomic Spectra',
            slug: 'atomic-spectra',
            description: 'Understand emission and absorption spectra',
            textContent: 'Atomic spectra content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }

    const equilibriumCat = chemistry.categories.find(c => c.name === 'Chemical Equilibrium');
    if (equilibriumCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: equilibriumCat.id,
            title: 'Solubility Equilibrium',
            slug: 'solubility-equilibrium',
            description: 'Calculate Ksp and predict precipitation',
            textContent: 'Solubility equilibrium content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 6. Expand AP Biology (currently 25)
  const biology = await prisma.course.findUnique({
    where: { slug: 'ap-biology' },
    include: { categories: true }
  });

  if (biology) {
    const chemLifeCat = biology.categories.find(c => c.name === 'Chemistry of Life');
    if (chemLifeCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: chemLifeCat.id,
            title: 'Enzyme Kinetics',
            slug: 'enzyme-kinetics',
            description: 'Understand enzyme reaction rates and factors',
            textContent: 'Enzyme kinetics content',
            order: 5
          }
        ],
        skipDuplicates: true
      });
    }

    const evolutionCat = biology.categories.find(c => c.name === 'Evolution');
    if (evolutionCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: evolutionCat.id,
            title: 'Natural Selection and Adaptation',
            slug: 'natural-selection-adaptation',
            description: 'Mechanisms of evolution and adaptation',
            textContent: 'Natural selection and adaptation content',
            order: 1
          },
          {
            categoryId: evolutionCat.id,
            title: 'Speciation',
            slug: 'speciation',
            description: 'How new species form',
            textContent: 'Speciation content',
            order: 2
          },
          {
            categoryId: evolutionCat.id,
            title: 'Phylogeny and Classification',
            slug: 'phylogeny-classification',
            description: 'Evolutionary relationships and taxonomy',
            textContent: 'Phylogeny and classification content',
            order: 3
          }
        ],
        skipDuplicates: true
      });
    }

    const ecologyCat = biology.categories.find(c => c.name === 'Ecology');
    if (ecologyCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: ecologyCat.id,
            title: 'Population Dynamics',
            slug: 'population-dynamics',
            description: 'Population growth and regulation',
            textContent: 'Population dynamics content',
            order: 3
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 7. Expand AP Physics 2 (currently 19)
  const physics2 = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
    include: { categories: true }
  });

  if (physics2) {
    const fluidsCat = physics2.categories.find(c => c.name === 'Fluid Mechanics');
    if (fluidsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: fluidsCat.id,
            title: 'Fluid Dynamics',
            slug: 'fluid-dynamics',
            description: 'Bernoulli\'s equation and flow',
            textContent: 'Fluid dynamics content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }

    const thermoCat = physics2.categories.find(c => c.name === 'Thermodynamics');
    if (thermoCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: thermoCat.id,
            title: 'Entropy and Second Law',
            slug: 'entropy-second-law',
            description: 'Understand entropy and thermodynamic processes',
            textContent: 'Entropy and second law content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }
  }

  // 8. Expand Algebra 1 (currently 30)
  const algebra1 = await prisma.course.findUnique({
    where: { slug: 'algebra-1' },
    include: { categories: true }
  });

  if (algebra1) {
    const functionsCat = algebra1.categories.find(c => c.name === 'Functions');
    if (functionsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: functionsCat.id,
            title: 'Domain and Range',
            slug: 'domain-and-range',
            description: 'Identify domain and range of functions',
            textContent: 'Domain and range content',
            order: 3
          },
          {
            categoryId: functionsCat.id,
            title: 'Function Transformations',
            slug: 'function-transformations',
            description: 'Shift, reflect, and stretch functions',
            textContent: 'Function transformations content',
            order: 4
          }
        ],
        skipDuplicates: true
      });
    }

    const quadraticsCat = algebra1.categories.find(c => c.name === 'Quadratic Equations');
    if (quadraticsCat) {
      await prisma.topic.createMany({
        data: [
          {
            categoryId: quadraticsCat.id,
            title: 'Completing the Square',
            slug: 'completing-the-square',
            description: 'Solve quadratics by completing the square',
            textContent: 'Completing the square content',
            order: 3
          }
        ],
        skipDuplicates: true
      });
    }
  }

  console.log('✅ Final expansion complete!\n');
  
  // Get final count
  const totalTopics = await prisma.topic.count();
  console.log(`📈 PLATFORM NOW HAS ${totalTopics} TOPICS!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
