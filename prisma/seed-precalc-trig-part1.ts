import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Trigonometric Functions (Part 1)...')

  const category = await prisma.category.findUnique({
    where: { slug: 'trigonometric-functions' }
  })

  if (!category) {
    throw new Error('Category not found. Please run seed-precalculus-categories.ts first.')
  }

  // Topic 1: Unit Circle and Radian Measure
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'unit-circle-radian-measure' },
    update: {},
    create: {
      title: 'Unit Circle and Radian Measure',
      slug: 'unit-circle-radian-measure',
      description: 'Understanding the unit circle, radian measure, and reference angles',
      order: 1,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Unit Circle and Radian Measure

## The Unit Circle

The **unit circle** is a circle with:
- Center at the origin $(0, 0)$
- Radius of 1

Its equation is: $x^2 + y^2 = 1$

## Why the Unit Circle Matters

The unit circle allows us to define trigonometric functions for **all angles**, not just acute angles in right triangles.

For any angle $\\theta$ in standard position:
- $\\cos(\\theta) = x$-coordinate of the point on the unit circle
- $\\sin(\\theta) = y$-coordinate of the point on the unit circle
- $\\tan(\\theta) = \\frac{y}{x} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$

## Radian Measure

A **radian** is the angle formed when the arc length equals the radius.

### Key Conversions

$$180° = \\pi \\text{ radians}$$

**To convert:**
- Degrees to radians: multiply by $\\frac{\\pi}{180}$
- Radians to degrees: multiply by $\\frac{180}{\\pi}$

### Common Angle Conversions

| Degrees | Radians |
|---------|---------|
| $0°$ | $0$ |
| $30°$ | $\\frac{\\pi}{6}$ |
| $45°$ | $\\frac{\\pi}{4}$ |
| $60°$ | $\\frac{\\pi}{3}$ |
| $90°$ | $\\frac{\\pi}{2}$ |
| $180°$ | $\\pi$ |
| $270°$ | $\\frac{3\\pi}{2}$ |
| $360°$ | $2\\pi$ |

## Special Angles on the Unit Circle

### First Quadrant ($0° \\text{ to } 90°$ or $0 \\text{ to } \\frac{\\pi}{2}$)

| Angle | Degrees | Radians | $\\cos$ | $\\sin$ | $\\tan$ |
|-------|---------|---------|---------|---------|---------|
| $0$ | $0°$ | $0$ | $1$ | $0$ | $0$ |
| $30°$ | $30°$ | $\\frac{\\pi}{6}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{3}$ |
| $45°$ | $45°$ | $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $60°$ | $60°$ | $\\frac{\\pi}{3}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\sqrt{3}$ |
| $90°$ | $90°$ | $\\frac{\\pi}{2}$ | $0$ | $1$ | undefined |

## Reference Angles

A **reference angle** is the acute angle formed between the terminal side and the x-axis.

### Finding Reference Angles

- **Quadrant I**: reference angle = $\\theta$
- **Quadrant II**: reference angle = $180° - \\theta$ or $\\pi - \\theta$
- **Quadrant III**: reference angle = $\\theta - 180°$ or $\\theta - \\pi$
- **Quadrant IV**: reference angle = $360° - \\theta$ or $2\\pi - \\theta$

## CAST Rule (Signs in Each Quadrant)

Remembering which trig functions are positive in each quadrant:

- **Quadrant I**: All positive (sine, cosine, tangent)
- **Quadrant II**: Sine positive only
- **Quadrant III**: Tangent positive only
- **Quadrant IV**: Cosine positive only

**Memory trick**: "All Students Take Calculus"

## Arc Length and Sector Area

For a circle with radius $r$ and central angle $\\theta$ (in radians):

**Arc length**: $s = r\\theta$

**Sector area**: $A = \\frac{1}{2}r^2\\theta$
`,
      exampleProblems: {
        create: [
          {
            question: 'Convert the following angles: (a) $135°$ to radians, (b) $\\frac{5\\pi}{6}$ radians to degrees',
            solution: `**Solution:**

**Part a)** Convert $135°$ to radians

Multiply by $\\frac{\\pi}{180}$:

$$135° \\times \\frac{\\pi}{180} = \\frac{135\\pi}{180} = \\frac{3\\pi}{4} \\text{ radians}$$

**Part b)** Convert $\\frac{5\\pi}{6}$ radians to degrees

Multiply by $\\frac{180}{\\pi}$:

$$\\frac{5\\pi}{6} \\times \\frac{180}{\\pi} = \\frac{5 \\times 180}{6} = \\frac{900}{6} = 150°$$

**Answers:**
- a) $\\frac{3\\pi}{4}$ radians
- b) $150°$`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Find the exact values: (a) $\\sin\\left(\\frac{7\\pi}{6}\\right)$, (b) $\\cos\\left(\\frac{5\\pi}{4}\\right)$, (c) $\\tan\\left(\\frac{5\\pi}{3}\\right)$',
            solution: `**Solution:**

**Part a)** $\\sin\\left(\\frac{7\\pi}{6}\\right)$

Step 1: Determine the quadrant.
$\\frac{7\\pi}{6}$ is between $\\pi$ and $\\frac{3\\pi}{2}$, so it's in **Quadrant III**.

Step 2: Find the reference angle.
$$\\frac{7\\pi}{6} - \\pi = \\frac{7\\pi}{6} - \\frac{6\\pi}{6} = \\frac{\\pi}{6}$$

Step 3: Determine the sign.
In Quadrant III, sine is **negative**.

Step 4: Evaluate.
$$\\sin\\left(\\frac{7\\pi}{6}\\right) = -\\sin\\left(\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$$

**Part b)** $\\cos\\left(\\frac{5\\pi}{4}\\right)$

Quadrant III, reference angle: $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$

Cosine is negative in Quadrant III.

$$\\cos\\left(\\frac{5\\pi}{4}\\right) = -\\cos\\left(\\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$$

**Part c)** $\\tan\\left(\\frac{5\\pi}{3}\\right)$

Quadrant IV, reference angle: $2\\pi - \\frac{5\\pi}{3} = \\frac{\\pi}{3}$

Tangent is negative in Quadrant IV.

$$\\tan\\left(\\frac{5\\pi}{3}\\right) = -\\tan\\left(\\frac{\\pi}{3}\\right) = -\\sqrt{3}$$

**Answers:**
- a) $-\\frac{1}{2}$
- b) $-\\frac{\\sqrt{2}}{2}$
- c) $-\\sqrt{3}$`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'A circle has radius 8 cm. Find the arc length and area of a sector with central angle $\\frac{2\\pi}{3}$ radians.',
            solution: `**Solution:**

Given:
- Radius: $r = 8$ cm
- Central angle: $\\theta = \\frac{2\\pi}{3}$ radians

**Arc Length:**

Using $s = r\\theta$:

$$s = 8 \\cdot \\frac{2\\pi}{3} = \\frac{16\\pi}{3} \\text{ cm}$$

$$s \\approx 16.76 \\text{ cm}$$

**Sector Area:**

Using $A = \\frac{1}{2}r^2\\theta$:

$$A = \\frac{1}{2}(8)^2 \\cdot \\frac{2\\pi}{3}$$

$$A = \\frac{1}{2} \\cdot 64 \\cdot \\frac{2\\pi}{3}$$

$$A = 32 \\cdot \\frac{2\\pi}{3} = \\frac{64\\pi}{3} \\text{ cm}^2$$

$$A \\approx 67.02 \\text{ cm}^2$$

**Answers:**
- Arc length: $\\frac{16\\pi}{3} \\approx 16.76$ cm
- Sector area: $\\frac{64\\pi}{3} \\approx 67.02$ cm²`,
            difficulty: 'MEDIUM',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic1.title}`)

  // Create flashcards for Topic 1
  const flashcards1 = [
    {
      topicId: topic1.id,
      front: 'What is the equation of the unit circle?',
      back: '$x^2 + y^2 = 1$',
    },
    {
      topicId: topic1.id,
      front: 'On the unit circle, what do $\\cos(\\theta)$ and $\\sin(\\theta)$ represent?',
      back: '$\\cos(\\theta)$ is the x-coordinate, $\\sin(\\theta)$ is the y-coordinate',
    },
    {
      topicId: topic1.id,
      front: 'How many radians are in $180°$?',
      back: '$\\pi$ radians',
    },
    {
      topicId: topic1.id,
      front: 'Convert $90°$ to radians',
      back: '$\\frac{\\pi}{2}$ radians',
    },
    {
      topicId: topic1.id,
      front: 'What is $\\sin\\left(\\frac{\\pi}{6}\\right)$?',
      back: '$\\frac{1}{2}$',
    },
    {
      topicId: topic1.id,
      front: 'What is $\\cos\\left(\\frac{\\pi}{4}\\right)$?',
      back: '$\\frac{\\sqrt{2}}{2}$',
    },
    {
      topicId: topic1.id,
      front: 'What is $\\tan\\left(\\frac{\\pi}{3}\\right)$?',
      back: '$\\sqrt{3}$',
    },
    {
      topicId: topic1.id,
      front: 'In which quadrants is sine positive?',
      back: 'Quadrants I and II',
    },
    {
      topicId: topic1.id,
      front: 'What is the formula for arc length?',
      back: '$s = r\\theta$ where $\\theta$ is in radians',
    },
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Trigonometric Identities
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'trigonometric-identities' },
    update: {},
    create: {
      title: 'Trigonometric Identities',
      slug: 'trigonometric-identities',
      description: 'Fundamental trigonometric identities including Pythagorean, reciprocal, quotient, and even-odd identities',
      order: 2,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Trigonometric Identities

## What Are Identities?

Trigonometric **identities** are equations that are true for all values of the variable (where both sides are defined).

They are powerful tools for simplifying expressions and solving equations.

## Reciprocal Identities

$$\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$$

$$\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$$

$$\\cot(\\theta) = \\frac{1}{\\tan(\\theta)}$$

## Quotient Identities

$$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$$

$$\\cot(\\theta) = \\frac{\\cos(\\theta)}{\\sin(\\theta)}$$

## Pythagorean Identities

These come from $x^2 + y^2 = 1$ on the unit circle:

### Primary Form
$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$

### Divide by $\\cos^2(\\theta)$
$$\\tan^2(\\theta) + 1 = \\sec^2(\\theta)$$

### Divide by $\\sin^2(\\theta)$
$$1 + \\cot^2(\\theta) = \\csc^2(\\theta)$$

## Even-Odd Identities

**Even functions** (symmetric about y-axis):
$$\\cos(-\\theta) = \\cos(\\theta)$$
$$\\sec(-\\theta) = \\sec(\\theta)$$

**Odd functions** (symmetric about origin):
$$\\sin(-\\theta) = -\\sin(\\theta)$$
$$\\tan(-\\theta) = -\\tan(\\theta)$$
$$\\csc(-\\theta) = -\\csc(\\theta)$$
$$\\cot(-\\theta) = -\\cot(\\theta)$$

## Cofunction Identities

Cofunctions of complementary angles are equal:

$$\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos(\\theta)$$

$$\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin(\\theta)$$

$$\\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot(\\theta)$$

## How to Use Identities

1. **Simplify expressions**: Replace complex trig expressions with simpler ones
2. **Prove other identities**: Use known identities to verify new ones
3. **Solve equations**: Transform equations into solvable forms
4. **Evaluate expressions**: Find exact values

## Strategy for Proving Identities

1. Start with the more complicated side
2. Use fundamental identities to rewrite terms
3. Look for opportunities to factor or combine fractions
4. Convert everything to sines and cosines if stuck
5. Never move terms from one side to the other (work on each side independently)

## Common Mistakes to Avoid

❌ Don't treat identities like equations and cross-multiply
❌ Don't forget to square correctly: $(\\sin \\theta)^2 = \\sin^2 \\theta$
❌ Don't cancel terms that aren't factors
`,
      exampleProblems: {
        create: [
          {
            question: 'Simplify the expression: $\\frac{\\sin(\\theta)}{\\cos(\\theta)} + \\frac{\\cos(\\theta)}{\\sin(\\theta)}$',
            solution: `**Solution:**

Step 1: Recognize the quotient identities.
$$\\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\tan(\\theta)$$
$$\\frac{\\cos(\\theta)}{\\sin(\\theta)} = \\cot(\\theta)$$

So our expression becomes:
$$\\tan(\\theta) + \\cot(\\theta)$$

Step 2: Find a common denominator.
$$= \\frac{\\sin(\\theta)}{\\cos(\\theta)} + \\frac{\\cos(\\theta)}{\\sin(\\theta)}$$

$$= \\frac{\\sin^2(\\theta) + \\cos^2(\\theta)}{\\sin(\\theta)\\cos(\\theta)}$$

Step 3: Use the Pythagorean identity.
$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$

$$= \\frac{1}{\\sin(\\theta)\\cos(\\theta)}$$

Step 4: Write in terms of reciprocal identities.
$$= \\frac{1}{\\sin(\\theta)} \\cdot \\frac{1}{\\cos(\\theta)} = \\csc(\\theta)\\sec(\\theta)$$

**Answer:** $\\csc(\\theta)\\sec(\\theta)$ or $\\frac{1}{\\sin(\\theta)\\cos(\\theta)}$`,
            difficulty: 'MEDIUM',
            order: 1,
          },
          {
            question: 'Prove the identity: $\\frac{1 - \\sin^2(x)}{\\cos(x)} = \\cos(x)$',
            solution: `**Solution:**

We'll work with the left side to show it equals the right side.

**Left side:**

Step 1: Recognize the Pythagorean identity.

We know: $\\sin^2(x) + \\cos^2(x) = 1$

Therefore: $1 - \\sin^2(x) = \\cos^2(x)$

Step 2: Substitute.

$$\\frac{1 - \\sin^2(x)}{\\cos(x)} = \\frac{\\cos^2(x)}{\\cos(x)}$$

Step 3: Simplify.

$$= \\frac{\\cos(x) \\cdot \\cos(x)}{\\cos(x)} = \\cos(x)$$

**This equals the right side!** ✓

The identity is proven.`,
            difficulty: 'EASY',
            order: 2,
          },
          {
            question: 'If $\\sin(\\theta) = \\frac{3}{5}$ and $\\theta$ is in Quadrant II, find $\\cos(\\theta)$ and $\\tan(\\theta)$.',
            solution: `**Solution:**

Given: $\\sin(\\theta) = \\frac{3}{5}$ and $\\theta$ is in Quadrant II

**Find $\\cos(\\theta)$:**

Step 1: Use the Pythagorean identity.
$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$

$$\\left(\\frac{3}{5}\\right)^2 + \\cos^2(\\theta) = 1$$

$$\\frac{9}{25} + \\cos^2(\\theta) = 1$$

$$\\cos^2(\\theta) = 1 - \\frac{9}{25} = \\frac{16}{25}$$

$$\\cos(\\theta) = \\pm\\frac{4}{5}$$

Step 2: Determine the sign.

In Quadrant II, cosine is **negative**.

$$\\cos(\\theta) = -\\frac{4}{5}$$

**Find $\\tan(\\theta)$:**

Use the quotient identity:
$$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\frac{3/5}{-4/5} = \\frac{3}{5} \\cdot \\frac{5}{-4} = -\\frac{3}{4}$$

**Answers:**
- $\\cos(\\theta) = -\\frac{4}{5}$
- $\\tan(\\theta) = -\\frac{3}{4}$`,
            difficulty: 'MEDIUM',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic2.title}`)

  // Create flashcards for Topic 2
  const flashcards2 = [
    {
      topicId: topic2.id,
      front: 'What is the fundamental Pythagorean identity?',
      back: '$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$',
    },
    {
      topicId: topic2.id,
      front: 'What is the reciprocal of $\\sin(\\theta)$?',
      back: '$\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$',
    },
    {
      topicId: topic2.id,
      front: 'What is the quotient identity for tangent?',
      back: '$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$',
    },
    {
      topicId: topic2.id,
      front: 'What is the Pythagorean identity involving tangent and secant?',
      back: '$\\tan^2(\\theta) + 1 = \\sec^2(\\theta)$',
    },
    {
      topicId: topic2.id,
      front: 'What is the Pythagorean identity involving cotangent and cosecant?',
      back: '$1 + \\cot^2(\\theta) = \\csc^2(\\theta)$',
    },
    {
      topicId: topic2.id,
      front: 'Is sine an even or odd function?',
      back: 'Odd: $\\sin(-\\theta) = -\\sin(\\theta)$',
    },
    {
      topicId: topic2.id,
      front: 'Is cosine an even or odd function?',
      back: 'Even: $\\cos(-\\theta) = \\cos(\\theta)$',
    },
    {
      topicId: topic2.id,
      front: 'What is the cofunction identity for sine?',
      back: '$\\sin(\\frac{\\pi}{2} - \\theta) = \\cos(\\theta)$',
    },
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Trigonometric Functions (Part 1)!')
  console.log(`   Topics: 2`)
  console.log(`   Examples: 6`)
  console.log(`   Flashcards: ${flashcards1.length + flashcards2.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
