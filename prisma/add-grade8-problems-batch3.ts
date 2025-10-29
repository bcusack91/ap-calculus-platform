import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 8 Math practice problems and flashcards - Batch 3 (3 topics)...\n');

  // Topic 1: Volume of Cylinders, Cones, and Spheres
  const volumeShapes = await prisma.topic.findFirst({
    where: { slug: 'volume-cylinders-cones-spheres' }
  });

  if (volumeShapes) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: volumeShapes.id,
          question: 'Find the volume of a cylinder with radius 3 cm and height 10 cm. Use π ≈ 3.14.',
          solution: 'Use the formula V = πr²h\n\nV = π(3)²(10)\n\nV = π(9)(10)\n\nV = 90π ≈ 90(3.14) = 282.6 cm³\n\nAnswer: 90π cm³ or about 282.6 cm³',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: volumeShapes.id,
          question: 'Find the volume of a cone with radius 4 cm and height 9 cm. Use π ≈ 3.14.',
          solution: 'Use the formula V = (1/3)πr²h\n\nV = (1/3)π(4)²(9)\n\nV = (1/3)π(16)(9)\n\nV = (1/3)π(144)\n\nV = 48π ≈ 48(3.14) = 150.72 cm³\n\nAnswer: 48π cm³ or about 150.72 cm³',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: volumeShapes.id,
          question: 'Find the volume of a sphere with radius 6 cm. Use π ≈ 3.14.',
          solution: 'Use the formula V = (4/3)πr³\n\nV = (4/3)π(6)³\n\nV = (4/3)π(216)\n\nV = (864/3)π\n\nV = 288π ≈ 288(3.14) = 904.32 cm³\n\nAnswer: 288π cm³ or about 904.32 cm³',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: volumeShapes.id,
          question: 'A cylindrical water tank has volume 1,000π cubic feet and height 10 feet. Find the radius.',
          solution: 'Use V = πr²h and solve for r:\n\n1000π = πr²(10)\n\n1000π = 10πr²\n\n100 = r²\n\nr = 10 feet (taking positive root)\n\nAnswer: 10 feet',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: volumeShapes.id,
          question: 'An ice cream cone consists of a cone with radius 3 cm and height 10 cm, topped with a hemisphere (half sphere) of radius 3 cm. Find the total volume. Use π ≈ 3.14.',
          solution: 'Volume = Volume of cone + Volume of hemisphere\n\nCone: V₁ = (1/3)π(3)²(10) = (1/3)π(9)(10) = 30π\n\nHemisphere: V₂ = (1/2) × (4/3)π(3)³ = (2/3)π(27) = 18π\n\nTotal: V = 30π + 18π = 48π ≈ 48(3.14) = 150.72 cm³\n\nAnswer: 48π cm³ or about 150.72 cm³',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: volumeShapes.id,
          front: 'What is the formula for the volume of a cylinder?',
          back: 'V = πr²h (area of base × height)',
          hint: 'Circle area times height'
        },
        {
          topicId: volumeShapes.id,
          front: 'What is the formula for the volume of a cone?',
          back: 'V = (1/3)πr²h (one-third of a cylinder)',
          hint: 'One-third times base area times height'
        },
        {
          topicId: volumeShapes.id,
          front: 'What is the formula for the volume of a sphere?',
          back: 'V = (4/3)πr³',
          hint: 'Four-thirds pi r cubed'
        },
        {
          topicId: volumeShapes.id,
          front: 'How does the volume of a cone compare to a cylinder with the same base and height?',
          back: 'The cone has exactly 1/3 the volume of the cylinder',
          hint: 'Cone is one-third'
        },
        {
          topicId: volumeShapes.id,
          front: 'What is the volume of a hemisphere (half sphere)?',
          back: 'V = (2/3)πr³ (half of a sphere)',
          hint: 'Half of the sphere formula'
        },
        {
          topicId: volumeShapes.id,
          front: 'If you double the radius of a sphere, what happens to the volume?',
          back: 'The volume is multiplied by 8 (2³ = 8)',
          hint: 'Radius is cubed in the formula'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: volume-cylinders-cones-spheres');
  }

  // Topic 2: Translations and Reflections
  const translationsReflections = await prisma.topic.findFirst({
    where: { slug: 'translations-reflections' }
  });

  if (translationsReflections) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: translationsReflections.id,
          question: 'Translate point A(3, 5) by the rule (x, y) → (x + 4, y - 2).',
          solution: 'Apply the translation rule:\n\n(x, y) → (x + 4, y - 2)\n\nA(3, 5) → A\'(3 + 4, 5 - 2)\n\nA\'(7, 3)\n\nAnswer: A\'(7, 3)',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: translationsReflections.id,
          question: 'Reflect point B(4, -2) over the x-axis.',
          solution: 'Reflection over x-axis rule: (x, y) → (x, -y)\n\nB(4, -2) → B\'(4, 2)\n\nThe x-coordinate stays the same, y-coordinate changes sign.\n\nAnswer: B\'(4, 2)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: translationsReflections.id,
          question: 'Reflect point C(-3, 5) over the y-axis.',
          solution: 'Reflection over y-axis rule: (x, y) → (-x, y)\n\nC(-3, 5) → C\'(3, 5)\n\nThe y-coordinate stays the same, x-coordinate changes sign.\n\nAnswer: C\'(3, 5)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: translationsReflections.id,
          question: 'Point D(2, 6) is translated 5 units left and 3 units down. Then it is reflected over the x-axis. Find the final position.',
          solution: 'Step 1: Translation (5 left, 3 down means -5, -3)\n(x, y) → (x - 5, y - 3)\nD(2, 6) → D\'(2 - 5, 6 - 3) = D\'(-3, 3)\n\nStep 2: Reflect over x-axis\n(x, y) → (x, -y)\nD\'(-3, 3) → D\'\'(-3, -3)\n\nAnswer: D\'\'(-3, -3)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: translationsReflections.id,
          question: 'Triangle ABC has vertices A(1, 2), B(4, 2), C(3, 5). Reflect it over the line y = x. Find the new coordinates.',
          solution: 'Reflection over y = x rule: (x, y) → (y, x) [swap coordinates]\n\nA(1, 2) → A\'(2, 1)\nB(4, 2) → B\'(2, 4)\nC(3, 5) → C\'(5, 3)\n\nAnswer: A\'(2, 1), B\'(2, 4), C\'(5, 3)',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: translationsReflections.id,
          front: 'What is a translation?',
          back: 'A slide that moves every point the same distance in the same direction',
          hint: 'Think: sliding'
        },
        {
          topicId: translationsReflections.id,
          front: 'What is the translation rule?',
          back: '(x, y) → (x + a, y + b) where a is horizontal shift and b is vertical shift',
          hint: 'Add to each coordinate'
        },
        {
          topicId: translationsReflections.id,
          front: 'What is the rule for reflection over the x-axis?',
          back: '(x, y) → (x, -y) [flip the y-coordinate]',
          hint: 'Keep x, flip y'
        },
        {
          topicId: translationsReflections.id,
          front: 'What is the rule for reflection over the y-axis?',
          back: '(x, y) → (-x, y) [flip the x-coordinate]',
          hint: 'Flip x, keep y'
        },
        {
          topicId: translationsReflections.id,
          front: 'What is the rule for reflection over the line y = x?',
          back: '(x, y) → (y, x) [swap the coordinates]',
          hint: 'Swap x and y'
        },
        {
          topicId: translationsReflections.id,
          front: 'Do translations and reflections preserve size and shape?',
          back: 'Yes! They are rigid transformations (isometries) that create congruent figures',
          hint: 'Same size and shape'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: translations-reflections');
  }

  // Topic 3: Rotations and Dilations
  const rotationsDilations = await prisma.topic.findFirst({
    where: { slug: 'rotations-dilations' }
  });

  if (rotationsDilations) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: rotationsDilations.id,
          question: 'Rotate point A(4, 2) by 90° counterclockwise around the origin.',
          solution: 'Use the 90° CCW rotation rule: (x, y) → (-y, x)\n\nA(4, 2) → A\'(-2, 4)\n\nAnswer: A\'(-2, 4)',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: rotationsDilations.id,
          question: 'Dilate point B(6, 9) by scale factor k = 1/3 with center at the origin.',
          solution: 'Use the dilation rule: (x, y) → (kx, ky)\n\nB(6, 9) → B\'(6/3, 9/3) = B\'(2, 3)\n\nAnswer: B\'(2, 3)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: rotationsDilations.id,
          question: 'Rotate point C(5, -3) by 180° around the origin.',
          solution: 'Use the 180° rotation rule: (x, y) → (-x, -y)\n\nC(5, -3) → C\'(-5, 3)\n\nBoth coordinates change sign.\n\nAnswer: C\'(-5, 3)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: rotationsDilations.id,
          question: 'Triangle DEF has vertices D(2, 4), E(6, 4), F(4, 8). Dilate by scale factor k = 2.5. Find the new vertices.',
          solution: 'Use dilation rule: (x, y) → (2.5x, 2.5y)\n\nD(2, 4) → D\'(5, 10)\nE(6, 4) → E\'(15, 10)\nF(4, 8) → F\'(10, 20)\n\nAnswer: D\'(5, 10), E\'(15, 10), F\'(10, 20)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: rotationsDilations.id,
          question: 'Point G(3, 0) is rotated 90° clockwise, then dilated by k = 2. Find the final position.',
          solution: 'Step 1: Rotate 90° clockwise\nRule: (x, y) → (y, -x)\nG(3, 0) → G\'(0, -3)\n\nStep 2: Dilate by k = 2\nRule: (x, y) → (2x, 2y)\nG\'(0, -3) → G\'\'(0, -6)\n\nAnswer: G\'\'(0, -6)',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: rotationsDilations.id,
          front: 'What is the rule for 90° counterclockwise rotation around the origin?',
          back: '(x, y) → (-y, x)',
          hint: 'Negative y becomes new x'
        },
        {
          topicId: rotationsDilations.id,
          front: 'What is the rule for 180° rotation around the origin?',
          back: '(x, y) → (-x, -y) [both coordinates change sign]',
          hint: 'Flip both signs'
        },
        {
          topicId: rotationsDilations.id,
          front: 'What is the rule for 90° clockwise rotation around the origin?',
          back: '(x, y) → (y, -x)',
          hint: 'Same as 270° CCW'
        },
        {
          topicId: rotationsDilations.id,
          front: 'What is the dilation rule with center at origin?',
          back: '(x, y) → (kx, ky) where k is the scale factor',
          hint: 'Multiply both coordinates by k'
        },
        {
          topicId: rotationsDilations.id,
          front: 'Is a rotation a rigid transformation?',
          back: 'Yes! Rotations preserve size and shape (congruent figures)',
          hint: 'Rigid means size/shape preserved'
        },
        {
          topicId: rotationsDilations.id,
          front: 'Is a dilation a rigid transformation?',
          back: 'No! Dilations preserve shape but NOT size (similar figures)',
          hint: 'Non-rigid means size changes'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: rotations-dilations');
  }

  console.log('\n✨ Successfully added practice problems and flashcards for 3 topics!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
