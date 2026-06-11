import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding final comprehensive Algebra 1 topics...')

  const algebra1Course = await prisma.course.findUnique({
    where: { slug: 'algebra-1' }
  })

  if (!algebra1Course) {
    throw new Error('Algebra 1 course not found')
  }

  // Get existing categories
  const linearEq = await prisma.category.findUnique({
    where: { slug: 'algebra1-linear-equations' }
  })
  
  const polynomials = await prisma.category.findUnique({
    where: { slug: 'algebra1-polynomials' }
  })
  
  const quadratics = await prisma.category.findUnique({
    where: { slug: 'algebra1-quadratics' }
  })

  const functions = await prisma.category.findUnique({
    where: { slug: 'algebra1-functions' }
  })

  // NEW CATEGORY: Radicals and Roots
  const radicals = await prisma.category.upsert({
    where: { slug: 'algebra1-radicals' },
    update: {},
    create: {
      slug: 'algebra1-radicals',
      name: 'Radicals and Roots',
      order: 6,
      courseId: algebra1Course.id
    }
  })

  // Topic: Simplifying Radicals
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'simplifying-radicals-algebra1' },
    update: {},
    create: {
      slug: 'simplifying-radicals-algebra1',
      title: 'Simplifying Radicals',
      description: 'Simplifying square roots and radical expressions',
      order: 1,
      categoryId: radicals.id,
      textContent: `# Simplifying Radicals

## Square Root Basics

The **square root** of a number is a value that, when multiplied by itself, gives the original number.

$$\\sqrt{25} = 5 \\text{ because } 5^2 = 25$$

## Product Property of Radicals

$$\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$$

**Example:** $\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$

## Steps to Simplify Radicals

1. Find the **largest perfect square** factor
2. Split the radical using the product property
3. Simplify the perfect square
4. Leave the remaining radical in simplest form

## Perfect Squares to Know

$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...$$

## Quotient Property

$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$$

**Example:** $\\sqrt{\\frac{9}{16}} = \\frac{\\sqrt{9}}{\\sqrt{16}} = \\frac{3}{4}$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Simplify: $\\sqrt{36}$',
        solution: `Find what number squared equals 36:

$$6^2 = 36$$

Therefore:
$$\\sqrt{36} = 6$$

**Answer:** $6$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $\\sqrt{50}$',
        solution: `**Step 1:** Find the largest perfect square factor of 50
$$50 = 25 \\cdot 2$$

**Step 2:** Use the product property
$$\\sqrt{50} = \\sqrt{25 \\cdot 2}$$
$$= \\sqrt{25} \\cdot \\sqrt{2}$$
$$= 5\\sqrt{2}$$

**Answer:** $5\\sqrt{2}$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Simplify: $\\sqrt{72}$',
        solution: `**Step 1:** Find the largest perfect square factor of 72
$$72 = 36 \\cdot 2$$

**Step 2:** Apply the product property
$$\\sqrt{72} = \\sqrt{36 \\cdot 2}$$
$$= \\sqrt{36} \\cdot \\sqrt{2}$$
$$= 6\\sqrt{2}$$

**Answer:** $6\\sqrt{2}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is $\\sqrt{49}$?', back: '$7$ (because $7^2 = 49$)' },
      { topicId: topic1.id, front: 'Simplify: $\\sqrt{8}$', back: '$2\\sqrt{2}$ (because $\\sqrt{4 \\cdot 2} = 2\\sqrt{2}$)' },
      { topicId: topic1.id, front: 'What is the product property of radicals?', back: '$\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$' }
    ]
  })

  console.log('✓ Created topic: Simplifying Radicals (3 examples, 3 flashcards)')

  // Topic: Operations with Radicals
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'radical-operations-algebra1' },
    update: {},
    create: {
      slug: 'radical-operations-algebra1',
      title: 'Adding and Subtracting Radicals',
      description: 'Combining like radicals',
      order: 2,
      categoryId: radicals.id,
      textContent: `# Operations with Radicals

## Like Radicals

**Like radicals** have the same radicand (number under the radical).

**Like radicals:** $3\\sqrt{5}$ and $7\\sqrt{5}$
**NOT like radicals:** $3\\sqrt{5}$ and $3\\sqrt{2}$

## Adding and Subtracting

You can only add or subtract like radicals. Combine the coefficients.

**Example 1:**
$$3\\sqrt{5} + 7\\sqrt{5} = (3 + 7)\\sqrt{5} = 10\\sqrt{5}$$

**Example 2:**
$$8\\sqrt{3} - 2\\sqrt{3} = (8 - 2)\\sqrt{3} = 6\\sqrt{3}$$

## Simplify First!

Sometimes you need to simplify radicals before you can combine them.

**Example:**
$$\\sqrt{12} + \\sqrt{27}$$
$$= 2\\sqrt{3} + 3\\sqrt{3}$$
$$= 5\\sqrt{3}$$

## Multiplying Radicals

$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$$

**Example:** $\\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{16} = 4$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Add: $5\\sqrt{7} + 3\\sqrt{7}$',
        solution: `These are like radicals (both have $\\sqrt{7}$).

Combine the coefficients:
$$5\\sqrt{7} + 3\\sqrt{7} = (5 + 3)\\sqrt{7} = 8\\sqrt{7}$$

**Answer:** $8\\sqrt{7}$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $\\sqrt{18} + \\sqrt{8}$',
        solution: `**Step 1:** Simplify each radical
$$\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$$
$$\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$$

**Step 2:** Now they are like radicals, so add them
$$3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}$$

**Answer:** $5\\sqrt{2}$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Multiply: $\\sqrt{6} \\cdot \\sqrt{10}$',
        solution: `Use the product property:
$$\\sqrt{6} \\cdot \\sqrt{10} = \\sqrt{6 \\cdot 10} = \\sqrt{60}$$

Now simplify:
$$\\sqrt{60} = \\sqrt{4 \\cdot 15} = 2\\sqrt{15}$$

**Answer:** $2\\sqrt{15}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'When can you add radicals?', back: 'Only when they are like radicals (same radicand)' },
      { topicId: topic2.id, front: 'Add: $4\\sqrt{3} + 6\\sqrt{3}$', back: '$10\\sqrt{3}$ (combine coefficients)' },
      { topicId: topic2.id, front: 'Multiply: $\\sqrt{5} \\cdot \\sqrt{5}$', back: '$5$ (or $\\sqrt{25} = 5$)' }
    ]
  })

  console.log('✓ Created topic: Radical Operations (3 examples, 3 flashcards)')

  // Topic: Multiplying Polynomials
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'multiplying-polynomials-algebra1' },
    update: {},
    create: {
      slug: 'multiplying-polynomials-algebra1',
      title: 'Multiplying Polynomials',
      description: 'Using the distributive property and FOIL method',
      order: 4,
      categoryId: polynomials!.id,
      textContent: `# Multiplying Polynomials

## Multiplying a Monomial by a Polynomial

Use the **distributive property**:
$$a(b + c) = ab + ac$$

**Example:**
$$3x(2x + 5) = 3x \\cdot 2x + 3x \\cdot 5 = 6x^2 + 15x$$

## FOIL Method (Binomials)

To multiply two binomials, use **FOIL**:
- **F**irst terms
- **O**uter terms
- **I**nner terms
- **L**ast terms

**Example:** $(x + 3)(x + 5)$
- F: $x \\cdot x = x^2$
- O: $x \\cdot 5 = 5x$
- I: $3 \\cdot x = 3x$
- L: $3 \\cdot 5 = 15$

Result: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$

## Special Products

**Square of a Sum:**
$$(a + b)^2 = a^2 + 2ab + b^2$$

**Square of a Difference:**
$$(a - b)^2 = a^2 - 2ab + b^2$$

**Difference of Squares:**
$$(a + b)(a - b) = a^2 - b^2$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Multiply: $2x(3x + 4)$',
        solution: `Use the distributive property:

$$2x(3x + 4)$$
$$= 2x \\cdot 3x + 2x \\cdot 4$$
$$= 6x^2 + 8x$$

**Answer:** $6x^2 + 8x$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Multiply using FOIL: $(x + 4)(x - 2)$',
        solution: `Use FOIL:

**F:** $x \\cdot x = x^2$
**O:** $x \\cdot (-2) = -2x$
**I:** $4 \\cdot x = 4x$
**L:** $4 \\cdot (-2) = -8$

Combine:
$$x^2 - 2x + 4x - 8 = x^2 + 2x - 8$$

**Answer:** $x^2 + 2x - 8$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Expand: $(2x - 3)^2$',
        solution: `Use the pattern $(a - b)^2 = a^2 - 2ab + b^2$

Here $a = 2x$ and $b = 3$:

$$(2x)^2 - 2(2x)(3) + (3)^2$$
$$= 4x^2 - 12x + 9$$

**Alternative - FOIL:**
$(2x - 3)(2x - 3)$
- F: $4x^2$
- O: $-6x$
- I: $-6x$
- L: $9$

Result: $4x^2 - 12x + 9$

**Answer:** $4x^2 - 12x + 9$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What does FOIL stand for?', back: 'First, Outer, Inner, Last' },
      { topicId: topic3.id, front: 'What is $(a+b)(a-b)$?', back: '$a^2 - b^2$ (difference of squares)' },
      { topicId: topic3.id, front: 'Multiply: $(x+2)(x+3)$', back: '$x^2 + 5x + 6$' }
    ]
  })

  console.log('✓ Created topic: Multiplying Polynomials (3 examples, 3 flashcards)')

  // Topic: Graphing Quadratics
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'graphing-quadratics-algebra1' },
    update: {},
    create: {
      slug: 'graphing-quadratics-algebra1',
      title: 'Graphing Quadratic Functions',
      description: 'Parabolas, vertex, axis of symmetry',
      order: 4,
      categoryId: quadratics!.id,
      textContent: `# Graphing Quadratic Functions

## Standard Form

$$y = ax^2 + bx + c$$

The graph is a **parabola**.

## Direction of Opening

- If $a > 0$: parabola opens **upward** (U-shaped)
- If $a < 0$: parabola opens **downward** (∩-shaped)

## Vertex

The **vertex** is the highest or lowest point on the parabola.

**Vertex formula:**
$$x = -\\frac{b}{2a}$$

Then substitute to find $y$-coordinate.

## Axis of Symmetry

A vertical line through the vertex:
$$x = -\\frac{b}{2a}$$

## Y-Intercept

The point where the graph crosses the y-axis: $(0, c)$

## Vertex Form

$$y = a(x - h)^2 + k$$

Vertex is at $(h, k)$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Does the parabola $y = -2x^2 + 3x + 1$ open upward or downward?',
        solution: `Look at the coefficient of $x^2$:

$$a = -2$$

Since $a < 0$ (negative), the parabola opens **downward**.

**Answer:** Downward`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the vertex of $y = x^2 - 6x + 5$',
        solution: `Identify: $a = 1$, $b = -6$, $c = 5$

**Step 1:** Find the x-coordinate of the vertex
$$x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = \\frac{6}{2} = 3$$

**Step 2:** Find the y-coordinate by substituting $x = 3$
$$y = (3)^2 - 6(3) + 5$$
$$y = 9 - 18 + 5$$
$$y = -4$$

**Answer:** Vertex is at $(3, -4)$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'What is the axis of symmetry for $y = 2x^2 + 8x - 3$?',
        solution: `The axis of symmetry is the vertical line through the vertex.

Use: $x = -\\frac{b}{2a}$

Identify: $a = 2$, $b = 8$

$$x = -\\frac{8}{2(2)} = -\\frac{8}{4} = -2$$

**Answer:** $x = -2$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What is the shape of a quadratic function graph?', back: 'A parabola' },
      { topicId: topic4.id, front: 'How do you find the x-coordinate of the vertex?', back: '$x = -\\frac{b}{2a}$' },
      { topicId: topic4.id, front: 'If $a > 0$, which way does the parabola open?', back: 'Upward (U-shaped)' }
    ]
  })

  console.log('✓ Created topic: Graphing Quadratics (3 examples, 3 flashcards)')

  // Topic: Domain and Range
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'domain-range-algebra1' },
    update: {},
    create: {
      slug: 'domain-range-algebra1',
      title: 'Domain and Range',
      description: 'Finding domain and range of functions',
      order: 2,
      categoryId: functions!.id,
      textContent: `# Domain and Range

## Definitions

**Domain:** The set of all possible **input values** (x-values)

**Range:** The set of all possible **output values** (y-values)

## Finding Domain

Ask: "What x-values can I put into this function?"

**Common restrictions:**
- Cannot divide by zero
- Cannot take square root of negative numbers (in real numbers)

**Example 1:** $f(x) = 2x + 3$
- Domain: All real numbers

**Example 2:** $f(x) = \\frac{1}{x - 5}$
- Domain: All real numbers except $x = 5$ (can't divide by zero)

## Finding Range from a Graph

Look at all the y-values the graph covers.

**For a parabola opening upward:**
- Lowest point is the vertex
- Range: $[k, \\infty)$ where $k$ is the y-coordinate of vertex

## Interval Notation

- $(a, b)$: open interval (doesn't include endpoints)
- $[a, b]$: closed interval (includes endpoints)
- $(-\\infty, \\infty)$: all real numbers`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the domain of $f(x) = 3x - 7$',
        solution: `This is a linear function. There are no restrictions (no division by zero, no square roots).

We can substitute **any** real number for $x$.

**Answer:** Domain: all real numbers or $(-\\infty, \\infty)$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the domain of $g(x) = \\frac{1}{x + 3}$',
        solution: `Look for restrictions. We cannot divide by zero.

Set the denominator equal to zero:
$$x + 3 = 0$$
$$x = -3$$

We must exclude $x = -3$ from the domain.

**Answer:** Domain: all real numbers except $x = -3$

In interval notation: $(-\\infty, -3) \\cup (-3, \\infty)$`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Find the range of $f(x) = x^2 - 4x + 1$',
        solution: `This is a quadratic function that opens upward ($a = 1 > 0$).

**Step 1:** Find the vertex (the minimum point)
$$x = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$$

**Step 2:** Find the y-coordinate of the vertex
$$f(2) = (2)^2 - 4(2) + 1 = 4 - 8 + 1 = -3$$

The vertex is $(2, -3)$.

Since the parabola opens upward, the minimum y-value is $-3$ and it goes to $\\infty$.

**Answer:** Range: $[-3, \\infty)$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What is the domain of a function?', back: 'The set of all possible input (x) values' },
      { topicId: topic5.id, front: 'What is the range of a function?', back: 'The set of all possible output (y) values' },
      { topicId: topic5.id, front: 'What is the domain of $f(x) = \\frac{1}{x}$?', back: 'All real numbers except $x = 0$' }
    ]
  })

  console.log('✓ Created topic: Domain and Range (3 examples, 3 flashcards)')

  // Topic: Slope-Intercept Form
  const topic6 = await prisma.topic.upsert({
    where: { slug: 'slope-intercept-form-algebra1' },
    update: {},
    create: {
      slug: 'slope-intercept-form-algebra1',
      title: 'Writing Linear Equations',
      description: 'Slope-intercept form and point-slope form',
      order: 6,
      categoryId: linearEq!.id,
      textContent: `# Writing Linear Equations

## Slope-Intercept Form

$$y = mx + b$$

- $m$ = slope
- $b$ = y-intercept

**Use when:** You know the slope and y-intercept

## Point-Slope Form

$$y - y_1 = m(x - x_1)$$

**Use when:** You know the slope and one point $(x_1, y_1)$

## Finding Equation from Two Points

**Steps:**
1. Find the slope: $m = \\frac{y_2 - y_1}{x_2 - x_1}$
2. Use point-slope form with either point
3. Simplify to slope-intercept form

## Special Lines

**Horizontal line:** $y = k$ (slope = 0)
**Vertical line:** $x = h$ (undefined slope)

## Parallel and Perpendicular Lines

**Parallel:** Same slope
- $y = 2x + 3$ and $y = 2x - 1$ are parallel

**Perpendicular:** Slopes are negative reciprocals
- $y = 2x + 3$ and $y = -\\frac{1}{2}x + 1$ are perpendicular`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic6.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Write an equation for a line with slope 3 and y-intercept -2',
        solution: `Use slope-intercept form: $y = mx + b$

Given: $m = 3$ and $b = -2$

Substitute:
$$y = 3x + (-2)$$
$$y = 3x - 2$$

**Answer:** $y = 3x - 2$`
      },
      {
        topicId: topic6.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Write an equation for the line passing through $(2, 5)$ with slope $-4$',
        solution: `Use point-slope form: $y - y_1 = m(x - x_1)$

Given: $(x_1, y_1) = (2, 5)$ and $m = -4$

Substitute:
$$y - 5 = -4(x - 2)$$

Expand:
$$y - 5 = -4x + 8$$

Add 5 to both sides:
$$y = -4x + 13$$

**Answer:** $y = -4x + 13$`
      },
      {
        topicId: topic6.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Write an equation for the line passing through $(1, 3)$ and $(4, 9)$',
        solution: `**Step 1:** Find the slope
$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$

**Step 2:** Use point-slope form with $(1, 3)$
$$y - 3 = 2(x - 1)$$

**Step 3:** Simplify to slope-intercept form
$$y - 3 = 2x - 2$$
$$y = 2x + 1$$

**Answer:** $y = 2x + 1$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic6.id, front: 'What is slope-intercept form?', back: '$y = mx + b$ where m is slope and b is y-intercept' },
      { topicId: topic6.id, front: 'What is point-slope form?', back: '$y - y_1 = m(x - x_1)$' },
      { topicId: topic6.id, front: 'If two lines are perpendicular, what is true about their slopes?', back: 'The slopes are negative reciprocals' }
    ]
  })

  console.log('✓ Created topic: Writing Linear Equations (3 examples, 3 flashcards)')

  // NEW CATEGORY: Data and Statistics
  const statistics = await prisma.category.upsert({
    where: { slug: 'algebra1-statistics' },
    update: {},
    create: {
      slug: 'algebra1-statistics',
      name: 'Data and Statistics',
      order: 7,
      courseId: algebra1Course.id
    }
  })

  // Topic: Mean, Median, Mode
  const topic7 = await prisma.topic.upsert({
    where: { slug: 'mean-median-mode-algebra1' },
    update: {},
    create: {
      slug: 'mean-median-mode-algebra1',
      title: 'Measures of Center',
      description: 'Mean, median, mode, and range',
      order: 1,
      categoryId: statistics.id,
      textContent: `# Measures of Center

## Mean (Average)

The **mean** is the sum of all values divided by the number of values.

$$\\text{Mean} = \\frac{\\text{sum of all values}}{\\text{number of values}}$$

**Example:** Mean of $\\{3, 7, 4, 10, 6\\}$
$$\\text{Mean} = \\frac{3 + 7 + 4 + 10 + 6}{5} = \\frac{30}{5} = 6$$

## Median

The **median** is the middle value when data is ordered.

**Steps:**
1. Put data in order from least to greatest
2. If odd number of values: middle value
3. If even number of values: average of two middle values

**Example:** Median of $\\{3, 4, 6, 7, 10\\}$ is **6** (middle value)

## Mode

The **mode** is the value that appears most often.

**Example:** Mode of $\\{2, 3, 3, 5, 7, 3, 9\\}$ is **3** (appears 3 times)

- No mode: all values appear equally
- Multiple modes: if multiple values tie for most frequent

## Range

The **range** is the difference between the maximum and minimum values.

$$\\text{Range} = \\text{max} - \\text{min}$$

**Example:** Range of $\\{2, 5, 8, 12, 3\\}$ is $12 - 2 = 10$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic7.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the mean of: $5, 8, 3, 10, 4$',
        solution: `Add all values and divide by the count:

$$\\text{Mean} = \\frac{5 + 8 + 3 + 10 + 4}{5}$$

$$= \\frac{30}{5} = 6$$

**Answer:** Mean = 6`
      },
      {
        topicId: topic7.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the median of: $12, 7, 3, 19, 8, 15$',
        solution: `**Step 1:** Order the data
$$3, 7, 8, 12, 15, 19$$

**Step 2:** Find the middle
There are 6 values (even), so the median is the average of the 3rd and 4th values:

$$\\text{Median} = \\frac{8 + 12}{2} = \\frac{20}{2} = 10$$

**Answer:** Median = 10`
      },
      {
        topicId: topic7.id,
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the mean, median, mode, and range of: $4, 7, 7, 2, 10, 7, 5$',
        solution: `**Mean:**
$$\\frac{4 + 7 + 7 + 2 + 10 + 7 + 5}{7} = \\frac{42}{7} = 6$$

**Median:**
Order: $2, 4, 5, 7, 7, 7, 10$
Middle value (4th): **7**

**Mode:**
7 appears 3 times (most frequent): **7**

**Range:**
$$10 - 2 = 8$$

**Answer:** Mean = 6, Median = 7, Mode = 7, Range = 8`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic7.id, front: 'What is the mean?', back: 'The average (sum of values ÷ count)' },
      { topicId: topic7.id, front: 'What is the median?', back: 'The middle value when data is ordered' },
      { topicId: topic7.id, front: 'What is the mode?', back: 'The value that appears most often' }
    ]
  })

  console.log('✓ Created topic: Measures of Center (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added final comprehensive Algebra 1 topics!')
  console.log('   New categories: 2 (Radicals, Statistics)')
  console.log('   New topics: 7')
  console.log('   Total example problems added: 21')
  console.log('   Total flashcards added: 21')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
