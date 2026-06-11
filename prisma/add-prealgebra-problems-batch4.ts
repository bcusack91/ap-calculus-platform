import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 4 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Order of Operations (PEMDAS)
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'order-of-operations-pemdas',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic1) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Evaluate: 8 + 3 × 4',
          solution: 'Step 1: Follow PEMDAS order.\nP - Parentheses (none)\nE - Exponents (none)\nM/D - Multiplication/Division (left to right)\nA/S - Addition/Subtraction (left to right)\n\nStep 2: Do multiplication FIRST.\n3 × 4 = 12\n\nStep 3: Then do addition.\n8 + 12 = 20\n\nCommon mistake: 8 + 3 = 11, then 11 × 4 = 44 ✗\n\nAnswer: 20',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'Calculate: (6 + 2) × 5',
          solution: 'Step 1: PEMDAS - Parentheses first!\n(6 + 2) = 8\n\nStep 2: Now multiply.\n8 × 5 = 40\n\nAnswer: 40',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Evaluate: 20 - 12 ÷ 3 + 4',
          solution: 'Step 1: Follow PEMDAS.\nNo parentheses or exponents.\nDivision comes before addition/subtraction.\n\nStep 2: Do division first.\n12 ÷ 3 = 4\n\nRewrite: 20 - 4 + 4\n\nStep 3: Add/subtract from left to right.\n20 - 4 = 16\n16 + 4 = 20\n\nAnswer: 20',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Calculate: 3² + 4(5 - 2)',
          solution: 'Step 1: Parentheses first.\n(5 - 2) = 3\n\nRewrite: 3² + 4(3)\n\nStep 2: Exponents.\n3² = 9\n\nRewrite: 9 + 4(3)\n\nStep 3: Multiplication.\n4 × 3 = 12\n\nRewrite: 9 + 12\n\nStep 4: Addition.\n9 + 12 = 21\n\nAnswer: 21',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'Evaluate: 2[(8 - 3) × 2 + 6] - 4²',
          solution: 'Step 1: Start with innermost parentheses.\n(8 - 3) = 5\n\nRewrite: 2[5 × 2 + 6] - 4²\n\nStep 2: Operations inside brackets (multiply first).\n5 × 2 = 10\n\nRewrite: 2[10 + 6] - 4²\n\nStep 3: Continue inside brackets (add).\n10 + 6 = 16\n\nRewrite: 2[16] - 4²\n\nStep 4: Exponents.\n4² = 16\n\nRewrite: 2(16) - 16\n\nStep 5: Multiplication.\n2 × 16 = 32\n\nRewrite: 32 - 16\n\nStep 6: Subtraction.\n32 - 16 = 16\n\nAnswer: 16',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic1.id,
          front: 'What does PEMDAS stand for?',
          back: 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)',
          hint: 'Please Excuse My Dear Aunt Sally'
        },
        {
          topicId: topic1.id,
          front: 'In what order do you do multiplication and division?',
          back: 'LEFT TO RIGHT. They have EQUAL priority. Do whichever comes first when reading left to right.',
          hint: 'Same priority, go left to right'
        },
        {
          topicId: topic1.id,
          front: 'In what order do you do addition and subtraction?',
          back: 'LEFT TO RIGHT. They have EQUAL priority. Do whichever comes first when reading left to right.',
          hint: 'Same priority, go left to right'
        },
        {
          topicId: topic1.id,
          front: 'What do you do first in: 5 + 3 × 2?',
          back: 'Multiply FIRST: 3 × 2 = 6. Then add: 5 + 6 = 11. Multiplication comes before addition.',
          hint: 'M comes before A in PEMDAS'
        },
        {
          topicId: topic1.id,
          front: 'What do parentheses do in an expression?',
          back: 'Force you to do that operation FIRST, no matter what. Parentheses override normal order.',
          hint: 'Parentheses = do this first!'
        },
        {
          topicId: topic1.id,
          front: 'Why is order of operations important?',
          back: 'So everyone gets the SAME answer. Without agreed order, 2 + 3 × 4 could be 14 or 20. Order of operations makes it 14.',
          hint: 'Consistency - everyone follows same rules'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: order-of-operations-pemdas');
  }

  // Topic 2: Angle Measurements
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'angle-measurements',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic2) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'Classify this angle: 75°',
          solution: 'Step 1: Recall angle classifications.\nAcute: 0° < angle < 90°\nRight: angle = 90°\nObtuse: 90° < angle < 180°\nStraight: angle = 180°\n\nStep 2: Determine where 75° fits.\n75° is less than 90°\nSo it is between 0° and 90°\n\nAnswer: Acute angle',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Two angles are complementary. One angle measures 35°. What is the measure of the other angle?',
          solution: 'Step 1: Recall the definition.\nComplementary angles add up to 90°\n\nStep 2: Set up equation.\nAngle 1 + Angle 2 = 90°\n35° + Angle 2 = 90°\n\nStep 3: Solve.\nAngle 2 = 90° - 35°\nAngle 2 = 55°\n\nAnswer: 55°',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Two angles are supplementary. One angle is 110°. Find the other angle.',
          solution: 'Step 1: Recall the definition.\nSupplementary angles add up to 180°\n\nStep 2: Set up equation.\nAngle 1 + Angle 2 = 180°\n110° + Angle 2 = 180°\n\nStep 3: Solve.\nAngle 2 = 180° - 110°\nAngle 2 = 70°\n\nAnswer: 70°',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Two lines intersect forming vertical angles. One angle measures 125°. What are the measures of the other three angles formed?',
          solution: 'Step 1: Recall properties.\nVertical angles are EQUAL.\nAdjacent angles on a line are SUPPLEMENTARY (add to 180°).\n\nStep 2: Find the vertical angle to 125°.\nVertical angles are equal.\nOpposite angle = 125°\n\nStep 3: Find adjacent angles.\nAdjacent angles are supplementary.\n125° + x = 180°\nx = 55°\n\nStep 4: The fourth angle.\nIt\'s vertical to the 55° angle.\nFourth angle = 55°\n\nAnswer: The four angles are 125°, 55°, 125°, 55°',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'Three angles meet at a point. Two of the angles measure 85° and 140°. What is the measure of the third angle?',
          solution: 'Step 1: Recall the rule.\nAngles around a point add up to 360°\n\nStep 2: Set up equation.\nAngle 1 + Angle 2 + Angle 3 = 360°\n85° + 140° + Angle 3 = 360°\n\nStep 3: Simplify.\n225° + Angle 3 = 360°\n\nStep 4: Solve.\nAngle 3 = 360° - 225°\nAngle 3 = 135°\n\nStep 5: Check.\n85° + 140° + 135° = 360° ✓\n\nAnswer: 135°',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic2.id,
          front: 'What is an acute angle?',
          back: 'An angle that measures LESS than 90°. Example: 45°, 30°, 89°',
          hint: 'Acute = small and sharp (less than 90°)'
        },
        {
          topicId: topic2.id,
          front: 'What is an obtuse angle?',
          back: 'An angle that measures MORE than 90° but LESS than 180°. Example: 120°, 95°, 135°',
          hint: 'Obtuse = bigger than right angle but not straight'
        },
        {
          topicId: topic2.id,
          front: 'What are complementary angles?',
          back: 'Two angles that ADD to 90°. Example: 30° and 60° are complementary.',
          hint: 'Complementary = Corner (makes a right angle, 90°)'
        },
        {
          topicId: topic2.id,
          front: 'What are supplementary angles?',
          back: 'Two angles that ADD to 180°. Example: 120° and 60° are supplementary.',
          hint: 'Supplementary = Straight line (180°)'
        },
        {
          topicId: topic2.id,
          front: 'What are vertical angles?',
          back: 'Opposite angles formed when two lines intersect. They are ALWAYS EQUAL. Example: If one is 50°, the opposite is also 50°.',
          hint: 'Vertical = across from each other, equal'
        },
        {
          topicId: topic2.id,
          front: 'How many degrees are around a point?',
          back: '360°. All angles around a point add up to 360° (a full circle).',
          hint: 'Full circle = 360°'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: angle-measurements');
  }

  // Topic 3: Perimeter and Area
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'perimeter-and-area',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic3) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'A rectangle has length 8 cm and width 5 cm. Find the perimeter and area.',
          solution: 'Step 1: Find the perimeter.\nPerimeter = 2l + 2w\nP = 2(8) + 2(5)\nP = 16 + 10 = 26 cm\n\nStep 2: Find the area.\nArea = l × w\nA = 8 × 5 = 40 cm²\n\nAnswer: Perimeter = 26 cm, Area = 40 cm²',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'A square has sides of length 6 inches. What is its perimeter and area?',
          solution: 'Step 1: Find the perimeter.\nPerimeter = 4s\nP = 4(6) = 24 inches\n\nStep 2: Find the area.\nArea = s²\nA = 6² = 36 square inches\n\nAnswer: Perimeter = 24 inches, Area = 36 square inches',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'A triangle has sides of 5 ft, 7 ft, and 8 ft. The height to the 8 ft base is 4 ft. Find the perimeter and area.',
          solution: 'Step 1: Find the perimeter.\nPerimeter = sum of all sides\nP = 5 + 7 + 8 = 20 ft\n\nStep 2: Find the area.\nArea = (1/2) × base × height\nA = (1/2) × 8 × 4\nA = (1/2) × 32\nA = 16 square feet\n\nAnswer: Perimeter = 20 ft, Area = 16 ft²',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'A circle has a radius of 7 meters. Find the circumference and area. Use π ≈ 3.14.',
          solution: 'Step 1: Find the circumference.\nCircumference = 2πr\nC = 2 × 3.14 × 7\nC = 43.96 meters\n\nStep 2: Find the area.\nArea = πr²\nA = 3.14 × 7²\nA = 3.14 × 49\nA = 153.86 square meters\n\nAnswer: Circumference ≈ 43.96 m, Area ≈ 153.86 m²',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A rectangular garden is 12 feet by 8 feet. You want to put a fence around it and cover the ground with mulch. Fencing costs $3 per foot and mulch costs $2 per square foot. What is the total cost?',
          solution: 'Step 1: Find perimeter (for fence).\nPerimeter = 2l + 2w\nP = 2(12) + 2(8)\nP = 24 + 16 = 40 feet\n\nStep 2: Calculate fence cost.\nFence cost = 40 feet × $3/foot = $120\n\nStep 3: Find area (for mulch).\nArea = l × w\nA = 12 × 8 = 96 square feet\n\nStep 4: Calculate mulch cost.\nMulch cost = 96 ft² × $2/ft² = $192\n\nStep 5: Find total cost.\nTotal = $120 + $192 = $312\n\nAnswer: $312 total ($120 for fence, $192 for mulch)',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic3.id,
          front: 'What is perimeter?',
          back: 'The DISTANCE AROUND the outside of a shape. Add up all the side lengths. Units are linear (cm, ft, m).',
          hint: 'Peri = around, meter = measure'
        },
        {
          topicId: topic3.id,
          front: 'What is area?',
          back: 'The amount of SPACE INSIDE a shape. How much surface it covers. Units are SQUARE (cm², ft², m²).',
          hint: 'Area = space inside, always square units'
        },
        {
          topicId: topic3.id,
          front: 'What is the formula for the area of a rectangle?',
          back: 'Area = length × width (A = lw)',
          hint: 'Multiply the two dimensions'
        },
        {
          topicId: topic3.id,
          front: 'What is the formula for the area of a triangle?',
          back: 'Area = (1/2) × base × height or A = (bh)/2',
          hint: 'Half of base times height'
        },
        {
          topicId: topic3.id,
          front: 'What is the formula for the area of a circle?',
          back: 'Area = πr² (pi times radius squared)',
          hint: 'Pi r squared'
        },
        {
          topicId: topic3.id,
          front: 'What is circumference?',
          back: 'The perimeter of a CIRCLE. Formula: C = 2πr or C = πd',
          hint: 'Perimeter of a circle'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: perimeter-and-area');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
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
