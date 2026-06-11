import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Function Fundamentals (Part 1)...')

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  })

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found')
  }

  // Create or find the category for Function Fundamentals
  const functionsCategory = await prisma.category.upsert({
    where: { slug: 'function-fundamentals' },
    update: {},
    create: {
      name: 'Function Fundamentals',
      slug: 'function-fundamentals',
      description: 'Foundational concepts: transformations, compositions, inverses, and rates of change',
      order: 0, // This should come first
      courseId: precalcCourse.id
    }
  })

  console.log('✓ Category ready:', functionsCategory.name)

  // Topic 1: Function Transformations
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'function-transformations' },
    update: {},
    create: {
      title: 'Function Transformations',
      slug: 'function-transformations',
      description: 'Understanding how to shift, stretch, compress, and reflect functions',
      order: 1,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Function Transformations

## Types of Transformations

Given a parent function $f(x)$, we can transform it in several ways:

### Vertical Transformations
- **Vertical Shift**: $f(x) + k$ shifts the graph up by $k$ units (down if $k < 0$)
- **Vertical Stretch/Compression**: $a \\cdot f(x)$ 
  - If $|a| > 1$: vertical stretch
  - If $0 < |a| < 1$: vertical compression
  - If $a < 0$: reflection across x-axis

### Horizontal Transformations
- **Horizontal Shift**: $f(x - h)$ shifts the graph right by $h$ units (left if $h < 0$)
- **Horizontal Stretch/Compression**: $f(bx)$
  - If $|b| > 1$: horizontal compression (faster)
  - If $0 < |b| < 1$: horizontal stretch (slower)
  - If $b < 0$: reflection across y-axis

### General Form
$$g(x) = a \\cdot f(b(x - h)) + k$$

Where:
- $a$: vertical stretch/compression and reflection
- $b$: horizontal stretch/compression and reflection
- $h$: horizontal shift
- $k$: vertical shift

### Order of Transformations
1. Horizontal shifts and stretches (inside the function)
2. Vertical stretches and reflections (coefficient)
3. Vertical shifts (outside)

## Key Points to Remember
- Inside changes ($x$ transformations) work opposite to intuition
- $f(x - 3)$ shifts RIGHT, not left
- $f(2x)$ compresses horizontally, not stretches
`,
      exampleProblems: {
        create: [
          {
            question: 'The graph of $f(x) = x^2$ is transformed to $g(x) = 2(x-3)^2 + 1$. Describe all transformations applied.',
            solution: `**Identify each transformation:**

Starting with $f(x) = x^2$, we have $g(x) = 2(x-3)^2 + 1$

Compare to $g(x) = a \\cdot f(b(x - h)) + k$:
- $a = 2$: vertical stretch by factor of 2
- $b = 1$: no horizontal stretch
- $h = 3$: horizontal shift right 3 units
- $k = 1$: vertical shift up 1 unit

**Transformations in order:**
1. Shift right 3 units
2. Stretch vertically by factor of 2
3. Shift up 1 unit

**Vertex:** The vertex of $f(x) = x^2$ is at $(0, 0)$.
After transformations, the new vertex is at $(3, 1)$.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Given $f(x) = \\sqrt{x}$, write the equation for the function that results from: reflecting across the x-axis, shifting left 2 units, and shifting down 3 units.',
            solution: `**Apply transformations step by step:**

Starting with $f(x) = \\sqrt{x}$

**Step 1:** Reflect across x-axis
- Multiply by -1: $-f(x) = -\\sqrt{x}$

**Step 2:** Shift left 2 units
- Replace $x$ with $x + 2$: $-f(x+2) = -\\sqrt{x+2}$

**Step 3:** Shift down 3 units
- Subtract 3: $-f(x+2) - 3 = -\\sqrt{x+2} - 3$

**Final answer:** $$g(x) = -\\sqrt{x+2} - 3$$

**Domain:** Since we need $x + 2 \\geq 0$, the domain is $x \\geq -2$ or $[-2, \\infty)$

**Range:** Since $\\sqrt{x+2} \\geq 0$, we have $-\\sqrt{x+2} \\leq 0$, so $-\\sqrt{x+2} - 3 \\leq -3$. Range is $(-\\infty, -3]$`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'The point $(4, -2)$ lies on the graph of $y = f(x)$. What point must lie on the graph of $y = -3f(\\frac{1}{2}x + 1) + 5$?',
            solution: `**Work backwards from the transformed point:**

We know $(4, -2)$ is on $y = f(x)$, so $f(4) = -2$.

For $g(x) = -3f(\\frac{1}{2}x + 1) + 5$, we need to find which $x$ makes the inside equal to 4.

**Find the x-coordinate:**
Set $\\frac{1}{2}x + 1 = 4$

Solve for $x$:
$$\\frac{1}{2}x = 3$$
$$x = 6$$

**Find the y-coordinate:**
When $x = 6$:
$$g(6) = -3f(\\frac{1}{2}(6) + 1) + 5$$
$$= -3f(4) + 5$$
$$= -3(-2) + 5$$
$$= 6 + 5 = 11$$

**Answer:** The point $(6, 11)$ must lie on $y = -3f(\\frac{1}{2}x + 1) + 5$

**Verification of transformations:**
- Original point: $(4, -2)$
- Horizontal: $\\frac{1}{2}x + 1 = 4$ means shift left 2 then stretch by 2: $4 \\to 2 \\to 6$ 
- Vertical: $-2 \\to 6$ (multiply by -3) $\\to 11$ (add 5) ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic1.title}`)

  // Create flashcards for Topic 1
  const flashcards1 = [
    {
      topicId: topic1.id,
      front: 'What does $f(x) + k$ do to the graph of $f(x)$?',
      back: 'Shifts the graph vertically: up $k$ units if $k > 0$, down $|k|$ units if $k < 0$'
    },
    {
      topicId: topic1.id,
      front: 'What does $f(x - h)$ do to the graph of $f(x)$?',
      back: 'Shifts the graph horizontally: right $h$ units if $h > 0$, left $|h|$ units if $h < 0$ (opposite of the sign!)'
    },
    {
      topicId: topic1.id,
      front: 'What does $a \\cdot f(x)$ do when $|a| > 1$?',
      back: 'Vertically stretches the graph by a factor of $|a|$. If $a < 0$, also reflects across the x-axis'
    },
    {
      topicId: topic1.id,
      front: 'What does $f(bx)$ do when $|b| > 1$?',
      back: 'Horizontally compresses the graph by a factor of $\\frac{1}{|b|}$. If $b < 0$, also reflects across the y-axis'
    },
    {
      topicId: topic1.id,
      front: 'What does $-f(x)$ do to the graph?',
      back: 'Reflects the graph across the x-axis (flips it upside down)'
    },
    {
      topicId: topic1.id,
      front: 'What does $f(-x)$ do to the graph?',
      back: 'Reflects the graph across the y-axis (flips it left to right)'
    },
    {
      topicId: topic1.id,
      front: 'In $g(x) = a \\cdot f(b(x - h)) + k$, which transformations happen first?',
      back: 'Horizontal shifts ($h$) and stretches ($b$) happen first (inside the function), then vertical stretches ($a$) and shifts ($k$)'
    },
    {
      topicId: topic1.id,
      front: 'If $(a, b)$ is on $y = f(x)$, what point is on $y = f(x - 3) + 2$?',
      back: '$(a + 3, b + 2)$ — shift right 3 and up 2'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Composite and Inverse Functions
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'composite-inverse-functions' },
    update: {},
    create: {
      title: 'Composite and Inverse Functions',
      slug: 'composite-inverse-functions',
      description: 'Combining functions through composition and finding inverse functions',
      order: 2,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Composite and Inverse Functions

## Function Composition

**Definition:** $(f \\circ g)(x) = f(g(x))$

This means "apply $g$ first, then apply $f$ to the result."

### Key Points
- Order matters! $(f \\circ g)(x) \\neq (g \\circ f)(x)$ in general
- Domain of $f \\circ g$: all $x$ in domain of $g$ where $g(x)$ is in domain of $f$
- Read right to left: $f \\circ g$ means "g then f"

### Example
If $f(x) = 2x + 1$ and $g(x) = x^2$:
- $(f \\circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$
- $(g \\circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$

## Inverse Functions

**Definition:** $f^{-1}$ is the inverse of $f$ if:
- $f(f^{-1}(x)) = x$ for all $x$ in domain of $f^{-1}$
- $f^{-1}(f(x)) = x$ for all $x$ in domain of $f$

### One-to-One Requirement
A function must be **one-to-one** (injective) to have an inverse.

**Horizontal Line Test:** A function is one-to-one if no horizontal line intersects the graph more than once.

### Finding Inverse Functions
1. Replace $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve for $y$
4. Replace $y$ with $f^{-1}(x)$
5. Verify: Check that $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$

### Properties of Inverse Functions
- Domain of $f$ = Range of $f^{-1}$
- Range of $f$ = Domain of $f^{-1}$
- Graphs of $f$ and $f^{-1}$ are reflections across the line $y = x$
- If $(a, b)$ is on the graph of $f$, then $(b, a)$ is on the graph of $f^{-1}$
`,
      exampleProblems: {
        create: [
          {
            question: 'If $f(x) = 2x - 3$ and $g(x) = x^2 + 1$, find $(f \\circ g)(x)$ and $(g \\circ f)(x)$.',
            solution: `**Find $(f \\circ g)(x) = f(g(x))$:**

Start with $g(x) = x^2 + 1$

Then apply $f$:
$$f(g(x)) = f(x^2 + 1)$$
$$= 2(x^2 + 1) - 3$$
$$= 2x^2 + 2 - 3$$
$$= 2x^2 - 1$$

**Find $(g \\circ f)(x) = g(f(x))$:**

Start with $f(x) = 2x - 3$

Then apply $g$:
$$g(f(x)) = g(2x - 3)$$
$$= (2x - 3)^2 + 1$$
$$= 4x^2 - 12x + 9 + 1$$
$$= 4x^2 - 12x + 10$$

**Answer:**
- $(f \\circ g)(x) = 2x^2 - 1$
- $(g \\circ f)(x) = 4x^2 - 12x + 10$

Note: They are different! Composition is not commutative.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Find the inverse function of $f(x) = \\frac{2x + 1}{x - 3}$. State the domain and range of both $f$ and $f^{-1}$.',
            solution: `**Find the inverse:**

Step 1: Replace $f(x)$ with $y$:
$$y = \\frac{2x + 1}{x - 3}$$

Step 2: Swap $x$ and $y$:
$$x = \\frac{2y + 1}{y - 3}$$

Step 3: Solve for $y$:
$$x(y - 3) = 2y + 1$$
$$xy - 3x = 2y + 1$$
$$xy - 2y = 3x + 1$$
$$y(x - 2) = 3x + 1$$
$$y = \\frac{3x + 1}{x - 2}$$

Step 4: Write as $f^{-1}(x)$:
$$f^{-1}(x) = \\frac{3x + 1}{x - 2}$$

**Domains and Ranges:**

For $f(x) = \\frac{2x + 1}{x - 3}$:
- Domain: $x \\neq 3$, or $(-\\infty, 3) \\cup (3, \\infty)$
- Range: $y \\neq 2$ (horizontal asymptote), or $(-\\infty, 2) \\cup (2, \\infty)$

For $f^{-1}(x) = \\frac{3x + 1}{x - 2}$:
- Domain: $x \\neq 2$ (which equals the range of $f$) ✓
- Range: $y \\neq 3$ (which equals the domain of $f$) ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Given $f(x) = x^2 - 4x + 3$ for $x \\geq 2$, find $f^{-1}(x)$ and determine $f^{-1}(8)$.',
            solution: `**Note:** The domain restriction $x \\geq 2$ makes $f$ one-to-one (right half of parabola).

**Complete the square first:**
$$f(x) = x^2 - 4x + 3 = (x - 2)^2 - 4 + 3 = (x - 2)^2 - 1$$

With domain $x \\geq 2$, the range is $y \\geq -1$.

**Find the inverse:**

Start with $y = (x - 2)^2 - 1$

Swap variables:
$$x = (y - 2)^2 - 1$$

Solve for $y$:
$$x + 1 = (y - 2)^2$$
$$\\pm\\sqrt{x + 1} = y - 2$$
$$y = 2 \\pm \\sqrt{x + 1}$$

Since original domain is $x \\geq 2$, the range is $y \\geq 2$, so we need the **positive** square root:
$$f^{-1}(x) = 2 + \\sqrt{x + 1}$$

**Domain of $f^{-1}$:** $x \\geq -1$ (the range of $f$)

**Find $f^{-1}(8)$:**
$$f^{-1}(8) = 2 + \\sqrt{8 + 1} = 2 + \\sqrt{9} = 2 + 3 = 5$$

**Verify:** $f(5) = 5^2 - 4(5) + 3 = 25 - 20 + 3 = 8$ ✓

**Answer:** $f^{-1}(x) = 2 + \\sqrt{x + 1}$ for $x \\geq -1$, and $f^{-1}(8) = 5$`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic2.title}`)

  // Create flashcards for Topic 2
  const flashcards2 = [
    {
      topicId: topic2.id,
      front: 'What does $(f \\circ g)(x)$ mean?',
      back: '$f(g(x))$ — apply $g$ first, then apply $f$ to the result'
    },
    {
      topicId: topic2.id,
      front: 'Is $(f \\circ g)(x)$ the same as $(g \\circ f)(x)$?',
      back: 'No! Composition is not commutative. Order matters.'
    },
    {
      topicId: topic2.id,
      front: 'What is the horizontal line test?',
      back: 'A function is one-to-one if no horizontal line intersects its graph more than once. Only one-to-one functions have inverses.'
    },
    {
      topicId: topic2.id,
      front: 'What are the steps to find $f^{-1}(x)$?',
      back: '1) Replace $f(x)$ with $y$, 2) Swap $x$ and $y$, 3) Solve for $y$, 4) Replace $y$ with $f^{-1}(x)$'
    },
    {
      topicId: topic2.id,
      front: 'What is the relationship between the domain of $f$ and range of $f^{-1}$?',
      back: 'Domain of $f$ = Range of $f^{-1}$, and Range of $f$ = Domain of $f^{-1}$'
    },
    {
      topicId: topic2.id,
      front: 'How are the graphs of $f$ and $f^{-1}$ related?',
      back: 'They are reflections of each other across the line $y = x$'
    },
    {
      topicId: topic2.id,
      front: 'What must be true for $(f \\circ f^{-1})(x)$?',
      back: '$f(f^{-1}(x)) = x$ for all $x$ in the domain of $f^{-1}$'
    },
    {
      topicId: topic2.id,
      front: 'If $(3, 7)$ is on the graph of $f(x)$, what point is on the graph of $f^{-1}(x)$?',
      back: '$(7, 3)$ — swap the coordinates'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Function Fundamentals (Part 1)!')
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
