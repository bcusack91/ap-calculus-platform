import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems to AP Precalculus - Batch 4: More Function Fundamentals (2 topics)...');

  // Find the topics
  const circlesParabolas = await prisma.topic.findFirst({
    where: { slug: 'circles-parabolas' }
  });

  const ellipsesHyperbolas = await prisma.topic.findFirst({
    where: { slug: 'ellipses-hyperbolas' }
  });

  if (!circlesParabolas || !ellipsesHyperbolas) {
    throw new Error('Topics not found');
  }

  // TOPIC 1: Circles and Parabolas (needs 2 more problems to reach 5)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: circlesParabolas.id,
        question: 'Find the center and radius of the circle: x² + y² - 6x + 4y - 3 = 0',
        solution: `Step 1: Complete the square for x terms:
x² - 6x
Take half of -6: -3
Square it: (-3)² = 9
x² - 6x = (x - 3)² - 9

Step 2: Complete the square for y terms:
y² + 4y
Take half of 4: 2
Square it: 2² = 4
y² + 4y = (y + 2)² - 4

Step 3: Substitute back into equation:
(x - 3)² - 9 + (y + 2)² - 4 - 3 = 0
(x - 3)² + (y + 2)² - 16 = 0
(x - 3)² + (y + 2)² = 16

Step 4: Identify center and radius:
Standard form: (x - h)² + (y - k)² = r²
Center: (h, k) = (3, -2)
r² = 16, so r = 4

Answer: Center (3, -2), radius 4`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: circlesParabolas.id,
        question: 'Find the vertex, focus, and directrix of the parabola: y = (1/8)(x - 2)² + 3',
        solution: `Step 1: Identify the vertex from vertex form:
y = a(x - h)² + k
Vertex: (h, k) = (2, 3)

Step 2: Find p using a = 1/(4p):
a = 1/8
1/(4p) = 1/8
4p = 8
p = 2

Step 3: Find the focus:
Parabola opens upward (a > 0)
Focus is p units above vertex
Focus: (2, 3 + 2) = (2, 5)

Step 4: Find the directrix:
Directrix is p units below vertex
Directrix: y = 3 - 2 = 1

Step 5: Verify:
Distance from any point on parabola to focus equals distance to directrix ✓

Answer: Vertex (2, 3), Focus (2, 5), Directrix y = 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: circles-parabolas (now has 5 total)');

  // TOPIC 2: Ellipses and Hyperbolas (needs 2 more problems to reach 5)
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: ellipsesHyperbolas.id,
        question: 'Find the center, vertices, and foci of the ellipse: (x - 1)²/25 + (y + 2)²/9 = 1',
        solution: `Step 1: Identify the center:
Standard form: (x - h)²/a² + (y - k)²/b² = 1
Center: (h, k) = (1, -2)

Step 2: Identify a² and b²:
a² = 25, so a = 5
b² = 9, so b = 3

Step 3: Determine major axis:
Since a² > b², major axis is horizontal

Step 4: Find vertices (on major axis):
Vertices are a units left and right of center
(1 - 5, -2) = (-4, -2)
(1 + 5, -2) = (6, -2)

Step 5: Find c using c² = a² - b²:
c² = 25 - 9 = 16
c = 4

Step 6: Find foci (on major axis):
Foci are c units from center along major axis
(1 - 4, -2) = (-3, -2)
(1 + 4, -2) = (5, -2)

Answer: Center (1, -2), Vertices (-4, -2) and (6, -2), Foci (-3, -2) and (5, -2)`,
        difficulty: 'MEDIUM',
        order: 3,
        isPremium: false
      },
      {
        topicId: ellipsesHyperbolas.id,
        question: 'Find the equation of the hyperbola with center (0, 0), vertices at (±3, 0), and foci at (±5, 0).',
        solution: `Step 1: Determine orientation:
Vertices and foci on x-axis → horizontal hyperbola
Standard form: x²/a² - y²/b² = 1

Step 2: Find a from vertices:
Vertices at (±a, 0) = (±3, 0)
a = 3, so a² = 9

Step 3: Find c from foci:
Foci at (±c, 0) = (±5, 0)
c = 5

Step 4: Find b using c² = a² + b²:
5² = 3² + b²
25 = 9 + b²
b² = 16
b = 4

Step 5: Write the equation:
x²/9 - y²/16 = 1

Step 6: Find asymptotes (for reference):
y = ±(b/a)x = ±(4/3)x

Answer: x²/9 - y²/16 = 1`,
        difficulty: 'HARD',
        order: 4,
        isPremium: false
      }
    ]
  });

  console.log('✅ Added 2 more problems to: ellipses-hyperbolas (now has 5 total)');

  console.log('\n✨ Successfully completed batch 4! Function Fundamentals category now 100% complete!');
  
  await prisma.$disconnect();
}

main();
