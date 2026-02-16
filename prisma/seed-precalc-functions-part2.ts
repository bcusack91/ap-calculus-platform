import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Function Fundamentals (Part 2)...')

  // Find the category
  const functionsCategory = await prisma.category.findUnique({
    where: { slug: 'function-fundamentals' }
  })

  if (!functionsCategory) {
    throw new Error('Function Fundamentals category not found. Please run seed-precalc-functions-part1.ts first.')
  }

  // Topic 3: Piecewise Functions
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'piecewise-functions' },
    update: {},
    create: {
      title: 'Piecewise Functions',
      slug: 'piecewise-functions',
      description: 'Defining and evaluating functions with different rules on different intervals',
      order: 3,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Piecewise Functions

## What is a Piecewise Function?

A **piecewise function** is defined by different formulas on different parts of its domain.

### General Form

$$f(x) = \\begin{cases}
\\text{formula 1} & \\text{if condition 1} \\\\
\\text{formula 2} & \\text{if condition 2} \\\\
\\vdots & \\vdots
\\end{cases}$$

### Example

$$f(x) = \\begin{cases}
x^2 & \\text{if } x < 0 \\\\
2x + 1 & \\text{if } x \\geq 0
\\end{cases}$$

This means:
- Use $f(x) = x^2$ when $x$ is negative
- Use $f(x) = 2x + 1$ when $x$ is zero or positive

## Evaluating Piecewise Functions

To evaluate $f(a)$ for a piecewise function:

1. Determine which condition $a$ satisfies
2. Use the formula for that piece
3. Calculate the value

### Example
For the function above:
- $f(-2) = (-2)^2 = 4$ (use first piece since $-2 < 0$)
- $f(0) = 2(0) + 1 = 1$ (use second piece since $0 \\geq 0$)
- $f(3) = 2(3) + 1 = 7$ (use second piece since $3 \\geq 0$)

## Continuity of Piecewise Functions

A piecewise function is **continuous** at $x = a$ if:
1. $f(a)$ is defined
2. $\\lim_{x \\to a} f(x)$ exists
3. $\\lim_{x \\to a} f(x) = f(a)$

**Practical check:** The function is continuous if the pieces "connect" (no jump or gap).

### Checking Continuity at a Boundary

For continuity at $x = c$ (a boundary point):
- Evaluate the left piece at $x = c$: $\\lim_{x \\to c^-} f(x)$
- Evaluate the right piece at $x = c$: $\\lim_{x \\to c^+} f(x)$
- Check which piece includes $c$ to find $f(c)$
- If left limit = right limit = $f(c)$, the function is continuous

## Absolute Value as a Piecewise Function

The absolute value function is a common piecewise function:

$$|x| = \\begin{cases}
x & \\text{if } x \\geq 0 \\\\
-x & \\text{if } x < 0
\\end{cases}$$

## Domain and Range

- **Domain**: Usually all real numbers, unless specified otherwise
- **Range**: Combine the ranges from all pieces (may need to sketch or analyze)

## Graphing Piecewise Functions

1. Graph each piece on its specified interval
2. Use open circles ($\\circ$) for excluded endpoints
3. Use closed circles ($\\bullet$) for included endpoints
4. Check for continuity at boundary points
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate the piecewise function $f(x) = \\begin{cases} x^2 + 1 & \\text{if } x \\leq -1 \\\\ 3x & \\text{if } -1 < x < 2 \\\\ 5 & \\text{if } x \\geq 2 \\end{cases}$ at $x = -1$, $x = 0$, and $x = 3$.',
            solution: `**Evaluate at each point:**

**For $x = -1$:**
Check which condition: $-1 \\leq -1$ ✓ (first piece)
$$f(-1) = (-1)^2 + 1 = 1 + 1 = 2$$

**For $x = 0$:**
Check which condition: $-1 < 0 < 2$ ✓ (second piece)
$$f(0) = 3(0) = 0$$

**For $x = 3$:**
Check which condition: $3 \\geq 2$ ✓ (third piece)
$$f(3) = 5$$

**Answers:**
- $f(-1) = 2$
- $f(0) = 0$
- $f(3) = 5$`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Determine whether the piecewise function $g(x) = \\begin{cases} x + 3 & \\text{if } x < 1 \\\\ x^2 + 1 & \\text{if } x \\geq 1 \\end{cases}$ is continuous at $x = 1$.',
            solution: `**Check continuity at $x = 1$:**

Step 1: Find $g(1)$ (which piece includes $x = 1$?)
Since $x \\geq 1$ includes 1, use second piece:
$$g(1) = 1^2 + 1 = 2$$

Step 2: Find left-hand limit as $x \\to 1^-$ (use first piece):
$$\\lim_{x \\to 1^-} g(x) = \\lim_{x \\to 1^-} (x + 3) = 1 + 3 = 4$$

Step 3: Find right-hand limit as $x \\to 1^+$ (use second piece):
$$\\lim_{x \\to 1^+} g(x) = \\lim_{x \\to 1^+} (x^2 + 1) = 1^2 + 1 = 2$$

Step 4: Compare
- Left limit: 4
- Right limit: 2
- $g(1) = 2$

Since the left limit ($4$) $\\neq$ right limit ($2$), the overall limit does not exist.

**Answer:** The function is **NOT continuous** at $x = 1$ because there is a jump discontinuity (the two pieces don't connect).`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Find the value of $a$ that makes $h(x) = \\begin{cases} 2x + a & \\text{if } x < 3 \\\\ x^2 - 4 & \\text{if } x \\geq 3 \\end{cases}$ continuous at $x = 3$.',
            solution: `**For continuity at $x = 3$, we need:** $\\lim_{x \\to 3^-} h(x) = \\lim_{x \\to 3^+} h(x) = h(3)$

Step 1: Find $h(3)$ (use second piece since $3 \\geq 3$):
$$h(3) = 3^2 - 4 = 9 - 4 = 5$$

Step 2: Find right-hand limit (use second piece):
$$\\lim_{x \\to 3^+} h(x) = \\lim_{x \\to 3^+} (x^2 - 4) = 3^2 - 4 = 5$$

Step 3: Find left-hand limit (use first piece with unknown $a$):
$$\\lim_{x \\to 3^-} h(x) = \\lim_{x \\to 3^-} (2x + a) = 2(3) + a = 6 + a$$

Step 4: Set left limit equal to right limit:
$$6 + a = 5$$
$$a = -1$$

**Verify:**
With $a = -1$:
- Left limit: $6 + (-1) = 5$ ✓
- Right limit: $5$ ✓
- $h(3) = 5$ ✓

**Answer:** $a = -1$ makes the function continuous at $x = 3$.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic3.title}`)

  // Create flashcards for Topic 3
  const flashcards3 = [
    {
      topicId: topic3.id,
      front: 'What is a piecewise function?',
      back: 'A function defined by different formulas on different parts of its domain'
    },
    {
      topicId: topic3.id,
      front: 'How do you evaluate a piecewise function at $x = a$?',
      back: '1) Determine which condition $a$ satisfies, 2) Use the formula for that piece, 3) Calculate the value'
    },
    {
      topicId: topic3.id,
      front: 'When is a piecewise function continuous at $x = c$?',
      back: 'When the left limit equals the right limit equals $f(c)$ — i.e., the pieces connect with no jump or gap'
    },
    {
      topicId: topic3.id,
      front: 'How can you write $|x|$ as a piecewise function?',
      back: '$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$'
    },
    {
      topicId: topic3.id,
      front: 'On a graph of a piecewise function, what does an open circle mean?',
      back: 'The endpoint is NOT included in that piece of the function'
    },
    {
      topicId: topic3.id,
      front: 'On a graph of a piecewise function, what does a closed circle mean?',
      back: 'The endpoint IS included in that piece of the function'
    }
  ]

  for (const flashcard of flashcards3) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards3.length} flashcards for ${topic3.title}`)

  // Topic 4: Average and Instantaneous Rates of Change
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'rates-of-change' },
    update: {},
    create: {
      title: 'Average and Instantaneous Rates of Change',
      slug: 'rates-of-change',
      description: 'Understanding how functions change over intervals and at specific points',
      order: 4,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Average and Instantaneous Rates of Change

## Average Rate of Change

The **average rate of change** of a function $f(x)$ over the interval $[a, b]$ is:

$$\\text{Average Rate of Change} = \\frac{f(b) - f(a)}{b - a} = \\frac{\\Delta y}{\\Delta x}$$

### Interpretation

- **Geometrically**: Slope of the secant line connecting $(a, f(a))$ and $(b, f(b))$
- **Physically**: Average velocity (if $f(x)$ represents position)
- **Generally**: How fast $f$ changes on average between $x = a$ and $x = b$

### Example
For $f(x) = x^2$ on $[1, 3]$:
$$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$$

The function increases by 4 units per unit of $x$, on average.

## Instantaneous Rate of Change

The **instantaneous rate of change** of $f(x)$ at $x = a$ is:

$$\\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

### Interpretation

- **Geometrically**: Slope of the tangent line at $(a, f(a))$
- **Physically**: Instantaneous velocity at time $t = a$
- **Generally**: How fast $f$ is changing right at $x = a$
- **In Calculus**: This limit is called the **derivative**, written $f'(a)$

### Difference Quotient

The expression $\\frac{f(a + h) - f(a)}{h}$ is called the **difference quotient**.

As $h \\to 0$, the secant line approaches the tangent line.

## Key Formulas

**Average Rate of Change** (over interval $[a, b]$):
$$\\frac{f(b) - f(a)}{b - a}$$

**Instantaneous Rate of Change** (at point $x = a$):
$$\\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

Alternative form (using $x$ instead of $h$):
$$\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$

## Real-World Applications

### Position and Velocity
- If $s(t)$ = position at time $t$
- Average velocity = $\\frac{s(t_2) - s(t_1)}{t_2 - t_1}$
- Instantaneous velocity = $\\lim_{h \\to 0} \\frac{s(t + h) - s(t)}{h}$

### Cost and Marginal Cost
- If $C(x)$ = total cost to produce $x$ items
- Average cost per item = $\\frac{C(x)}{x}$
- Marginal cost (cost of one more item) ≈ instantaneous rate of change

## Connection to Derivatives

In calculus, the instantaneous rate of change is the **derivative**:
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

Precalculus focuses on:
- Computing average rates of change
- Understanding the concept of instantaneous rate of change
- Setting up (but not necessarily evaluating) limit expressions
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the average rate of change of $f(x) = x^2 + 3x$ over the interval $[1, 4]$.',
            solution: `**Use the average rate of change formula:**

$$\\text{Average Rate of Change} = \\frac{f(b) - f(a)}{b - a}$$

where $a = 1$ and $b = 4$.

**Step 1:** Find $f(1)$:
$$f(1) = 1^2 + 3(1) = 1 + 3 = 4$$

**Step 2:** Find $f(4)$:
$$f(4) = 4^2 + 3(4) = 16 + 12 = 28$$

**Step 3:** Calculate the average rate of change:
$$\\frac{f(4) - f(1)}{4 - 1} = \\frac{28 - 4}{3} = \\frac{24}{3} = 8$$

**Answer:** The average rate of change is $8$.

**Interpretation:** On average, the function increases by 8 units for every 1 unit increase in $x$ over the interval $[1, 4]$.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A ball is thrown upward. Its height (in feet) after $t$ seconds is given by $h(t) = -16t^2 + 64t + 5$. Find the average velocity of the ball between $t = 1$ and $t = 3$ seconds.',
            solution: `**Average velocity = average rate of change of position:**

$$\\text{Average Velocity} = \\frac{h(3) - h(1)}{3 - 1}$$

**Step 1:** Find $h(1)$:
$$h(1) = -16(1)^2 + 64(1) + 5$$
$$= -16 + 64 + 5 = 53 \\text{ feet}$$

**Step 2:** Find $h(3)$:
$$h(3) = -16(3)^2 + 64(3) + 5$$
$$= -16(9) + 192 + 5$$
$$= -144 + 192 + 5 = 53 \\text{ feet}$$

**Step 3:** Calculate average velocity:
$$\\frac{h(3) - h(1)}{3 - 1} = \\frac{53 - 53}{2} = \\frac{0}{2} = 0 \\text{ ft/s}$$

**Answer:** The average velocity is $0$ ft/s.

**Interpretation:** The ball is at the same height at $t = 1$ and $t = 3$. It went up and came back down to the same height, so the average velocity is zero (though it was moving the entire time!).`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Write an expression for the instantaneous rate of change of $f(x) = \\frac{1}{x}$ at $x = 2$. Then estimate it using $h = 0.01$.',
            solution: `**Expression for instantaneous rate of change at $x = 2$:**

$$\\lim_{h \\to 0} \\frac{f(2 + h) - f(2)}{h}$$

**Step 1:** Find $f(2)$:
$$f(2) = \\frac{1}{2}$$

**Step 2:** Find $f(2 + h)$:
$$f(2 + h) = \\frac{1}{2 + h}$$

**Step 3:** Write the difference quotient:
$$\\frac{f(2 + h) - f(2)}{h} = \\frac{\\frac{1}{2+h} - \\frac{1}{2}}{h}$$

**Step 4:** Simplify:
$$= \\frac{\\frac{2 - (2+h)}{2(2+h)}}{h} = \\frac{\\frac{-h}{2(2+h)}}{h} = \\frac{-h}{2(2+h) \\cdot h} = \\frac{-1}{2(2+h)}$$

**Exact answer** (taking $h \\to 0$):
$$\\lim_{h \\to 0} \\frac{-1}{2(2+h)} = \\frac{-1}{2(2)} = -\\frac{1}{4}$$

**Estimate with $h = 0.01$:**
$$\\frac{-1}{2(2+0.01)} = \\frac{-1}{2(2.01)} = \\frac{-1}{4.02} \\approx -0.2488$$

**Answer:** The instantaneous rate of change is $-\\frac{1}{4} = -0.25$ (exact).
The estimate with $h = 0.01$ gives approximately $-0.2488$, which is very close!`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic4.title}`)

  // Create flashcards for Topic 4
  const flashcards4 = [
    {
      topicId: topic4.id,
      front: 'What is the formula for average rate of change of $f(x)$ over $[a, b]$?',
      back: '$\\frac{f(b) - f(a)}{b - a}$ — same as slope of secant line'
    },
    {
      topicId: topic4.id,
      front: 'What does the average rate of change represent geometrically?',
      back: 'The slope of the secant line connecting the points $(a, f(a))$ and $(b, f(b))$'
    },
    {
      topicId: topic4.id,
      front: 'What is the formula for instantaneous rate of change at $x = a$?',
      back: '$\\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$ — this is the derivative $f\'(a)$'
    },
    {
      topicId: topic4.id,
      front: 'What does the instantaneous rate of change represent geometrically?',
      back: 'The slope of the tangent line to the graph at the point $(a, f(a))$'
    },
    {
      topicId: topic4.id,
      front: 'What is the difference quotient?',
      back: '$\\frac{f(a + h) - f(a)}{h}$ — represents average rate of change over tiny interval $[a, a+h]$'
    },
    {
      topicId: topic4.id,
      front: 'If $s(t)$ represents position, what is average velocity from $t = a$ to $t = b$?',
      back: '$\\frac{s(b) - s(a)}{b - a}$ — average rate of change of position'
    },
    {
      topicId: topic4.id,
      front: 'What happens to the secant line as $h \\to 0$ in the difference quotient?',
      back: 'The secant line approaches the tangent line at the point'
    },
    {
      topicId: topic4.id,
      front: 'Alternative form of instantaneous rate of change at $x = a$?',
      back: '$\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$ (using $x$ instead of $a + h$)'
    }
  ]

  for (const flashcard of flashcards4) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards4.length} flashcards for ${topic4.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Function Fundamentals (Part 2)!')
  console.log(`   Topics: 2`)
  console.log(`   Examples: 6`)
  console.log(`   Flashcards: ${flashcards3.length + flashcards4.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
