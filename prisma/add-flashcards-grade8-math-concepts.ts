import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Grade 8 Math — Flashcard seed
 * ~35 cards across key topics: the number system, expressions & equations,
 * functions, geometry (transformations, Pythagorean theorem, volume),
 * and statistics & probability.
 *
 * Run:  npx ts-node prisma/add-flashcards-grade8-math-concepts.ts
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicSlugs = [
  'rational-irrational-numbers-grade8',
  'laws-of-exponents-grade8',
  'solving-linear-equations-grade8',
  'two-step-equations-grade8',
  'understanding-functions-grade8',
  'slope-linear-functions-grade8',
  'geometric-transformations-grade8',
  'pythagorean-theorem-grade8',
  'scientific-notation-grade8',
  'scatter-plots-trend-lines-grade8',
]

interface Card { front: string; back: string; hint?: string }

const cardsByTopic: Record<string, Card[]> = {
  'rational-irrational-numbers-grade8': [
    { front: 'What is a rational number?', back: 'A number that can be written as a fraction a/b where a and b are integers and b ≠ 0. Examples: ½, −3, 0.75, 0.333…', hint: 'Can be written as a fraction' },
    { front: 'What is an irrational number?', back: 'A number that CANNOT be written as a fraction. Its decimal is non-terminating and non-repeating. Examples: √2, π, e.', hint: 'Cannot be a fraction' },
    { front: 'Is √16 rational or irrational?', back: 'Rational. √16 = 4, which is an integer.', hint: 'Perfect square' },
  ],
  'laws-of-exponents-grade8': [
    { front: 'What is scientific notation?', back: 'A number written as a × 10ⁿ where 1 ≤ |a| < 10 and n is an integer. Example: 4,500 = 4.5 × 10³.', hint: 'One digit before the decimal point' },
    { front: 'What is the product rule for exponents?', back: 'aᵐ × aⁿ = aᵐ⁺ⁿ. When multiplying same base, ADD exponents.', hint: 'Same base → add exponents' },
    { front: 'What is the quotient rule for exponents?', back: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ. When dividing same base, SUBTRACT exponents.', hint: 'Same base → subtract exponents' },
    { front: 'What is a negative exponent?', back: 'a⁻ⁿ = 1/aⁿ. Move to the denominator and make the exponent positive.', hint: 'Flip to denominator' },
  ],
  'solving-linear-equations-grade8': [
    { front: 'What does it mean if a linear equation has no solution?', back: 'The variables cancel out and you get a false statement like 0 = 5. The lines are parallel.', hint: 'False statement, parallel lines' },
    { front: 'What does it mean if a linear equation has infinitely many solutions?', back: 'The variables cancel out and you get a true statement like 0 = 0. The equations represent the same line.', hint: 'True statement, same line' },
    { front: 'Solve: 3(x − 2) = 2x + 1.', back: '3x − 6 = 2x + 1 → x = 7.', hint: 'Distribute, then isolate x' },
  ],
  'two-step-equations-grade8': [
    { front: 'How do you solve a system by graphing?', back: 'Graph both equations. The solution is the point of intersection.', hint: 'Where the lines cross' },
    { front: 'How do you solve a system by substitution?', back: 'Solve one equation for one variable, then substitute into the other equation.', hint: 'Solve for one, plug into the other' },
    { front: 'How do you solve a system by elimination?', back: 'Add or subtract equations to eliminate one variable. May need to multiply one equation first.', hint: 'Add equations to cancel a variable' },
  ],
  'understanding-functions-grade8': [
    { front: 'What is a function?', back: 'A rule that assigns exactly ONE output (y) to each input (x). Passes the vertical line test.', hint: 'Each input → exactly one output' },
    { front: 'How do you tell if a graph represents a function?', back: 'Use the vertical line test: if any vertical line crosses the graph more than once, it is NOT a function.', hint: 'Vertical line test' },
    { front: 'What is the difference between linear and nonlinear functions?', back: 'Linear: constant rate of change, graphs as a straight line. Nonlinear: rate of change varies, graphs as a curve.', hint: 'Straight line vs. curve' },
  ],
  'slope-linear-functions-grade8': [
    { front: 'What is slope?', back: 'The rate of change of y with respect to x: m = rise/run = (y₂ − y₁)/(x₂ − x₁).', hint: 'Rise over run' },
    { front: 'What does a slope of zero mean?', back: 'A horizontal line — no change in y as x changes.', hint: 'Flat, horizontal' },
    { front: 'What does an undefined slope mean?', back: 'A vertical line — x doesn\'t change, division by zero in the slope formula.', hint: 'Straight up and down' },
    { front: 'Write an equation in slope-intercept form for m = 3, b = −2.', back: 'y = 3x − 2.', hint: 'y = mx + b' },
  ],
  'geometric-transformations-grade8': [
    { front: 'What is a translation?', back: 'A slide — every point moves the same distance and direction. Shape, size, and orientation stay the same.', hint: 'Slide without rotating' },
    { front: 'What is a reflection?', back: 'A flip over a line of reflection. The image is a mirror image of the original.', hint: 'Mirror image' },
    { front: 'What is a rotation?', back: 'A turn around a fixed point (center of rotation) by a given angle.', hint: 'Turn around a point' },
    { front: 'What is a dilation?', back: 'A resizing with a scale factor. Scale factor > 1 enlarges, 0 < factor < 1 reduces. Shape stays the same (similar figures).', hint: 'Enlarge or shrink' },
  ],
  'pythagorean-theorem-grade8': [
    { front: 'State the Pythagorean Theorem.', back: 'a² + b² = c², where c is the hypotenuse (longest side) of a right triangle.', hint: 'Only works for right triangles' },
    { front: 'Find the hypotenuse if a = 6, b = 8.', back: 'c² = 36 + 64 = 100 → c = 10. This is a 6-8-10 triangle (scaled 3-4-5).', hint: '3-4-5 triple times 2' },
    { front: 'How do you find the distance between two points?', back: 'd = √((x₂−x₁)² + (y₂−y₁)²). This is the Pythagorean Theorem applied to the coordinate plane.', hint: 'Distance formula from Pythagorean Theorem' },
  ],
  'scientific-notation-grade8': [
    { front: 'What is the volume of a cylinder?', back: 'V = πr²h. The area of the circular base times the height.', hint: 'Circle area times height' },
    { front: 'What is the volume of a cone?', back: 'V = (1/3)πr²h. One-third of the cylinder with the same base and height.', hint: 'One-third of a cylinder' },
    { front: 'What is the volume of a sphere?', back: 'V = (4/3)πr³.', hint: 'Four-thirds pi r cubed' },
  ],
  'scatter-plots-trend-lines-grade8': [
    { front: 'What does a scatter plot show?', back: 'The relationship between two quantitative variables. Each dot represents one data point (x, y).', hint: 'Two variables on a graph' },
    { front: 'What is a positive association in a scatter plot?', back: 'As x increases, y also increases. The points trend upward from left to right.', hint: 'Both go up together' },
    { front: 'What is a line of best fit?', back: 'A straight line that best represents the data in a scatter plot. It minimizes the overall distance to all points.', hint: 'Line through the middle of the data' },
  ],
}

async function main() {
  console.log('🔧 Seeding Grade 8 Math flashcards …')
  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } })
    if (!topic) { console.log(`  ⚠️  Topic "${slug}" not found — skipping`); continue }

    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } })

    const cards = cardsByTopic[slug]
    if (!cards?.length) continue

    await prisma.flashcard.createMany({
      data: cards.map((c) => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
      })),
    })
    console.log(`  ✅ ${cards.length} cards → ${slug}`)
  }
  console.log('Done.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
