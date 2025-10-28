import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding final comprehensive Algebra 2 topics...')

  const algebra2Course = await prisma.course.findUnique({
    where: { slug: 'algebra-2' }
  })

  if (!algebra2Course) {
    throw new Error('Algebra 2 course not found')
  }

  // Get existing categories
  const expLog = await prisma.category.findUnique({
    where: { slug: 'algebra2-exponential-logarithmic' }
  })

  const polynomials = await prisma.category.findUnique({
    where: { slug: 'algebra2-polynomial-functions' }
  })

  // NEW CATEGORY: Conic Sections
  const conics = await prisma.category.upsert({
    where: { slug: 'algebra2-conic-sections' },
    update: {},
    create: {
      slug: 'algebra2-conic-sections',
      name: 'Conic Sections',
      order: 7,
      courseId: algebra2Course.id
    }
  })

  // Topic: Circles
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'circles-algebra2' },
    update: {},
    create: {
      slug: 'circles-algebra2',
      title: 'Circles',
      description: 'Equations and graphs of circles',
      order: 1,
      categoryId: conics.id,
      textContent: `# Circles

## Standard Form

$$(x - h)^2 + (y - k)^2 = r^2$$

Where:
- **Center:** $(h, k)$
- **Radius:** $r$

## Example

Circle with center $(3, -2)$ and radius $5$:
$$(x - 3)^2 + (y + 2)^2 = 25$$

## General Form

$$x^2 + y^2 + Dx + Ey + F = 0$$

**To convert to standard form:**
1. Group $x$ terms and $y$ terms
2. Complete the square for both
3. Identify center and radius

## Finding Center and Radius

**From:** $x^2 + y^2 - 6x + 4y - 12 = 0$

**Step 1:** Group and move constant
$$(x^2 - 6x) + (y^2 + 4y) = 12$$

**Step 2:** Complete the square
$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

**Step 3:** Factor
$$(x - 3)^2 + (y + 2)^2 = 25$$

**Center:** $(3, -2)$, **Radius:** $5$

## Graphing

1. Plot the center point
2. Count $r$ units in all directions
3. Sketch the circle`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Write the equation of a circle with center $(0, 0)$ and radius $4$.',
        solution: `Use standard form: $(x - h)^2 + (y - k)^2 = r^2$

Center: $(h, k) = (0, 0)$
Radius: $r = 4$

$$(x - 0)^2 + (y - 0)^2 = 4^2$$

Simplify:
$$x^2 + y^2 = 16$$

**Answer:** $x^2 + y^2 = 16$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the center and radius of $(x + 1)^2 + (y - 4)^2 = 36$',
        solution: `Compare to standard form: $(x - h)^2 + (y - k)^2 = r^2$

Rewrite as: $(x - (-1))^2 + (y - 4)^2 = 6^2$

**Center:** $(-1, 4)$

**Radius:** $r = \\sqrt{36} = 6$

**Answer:** Center $(-1, 4)$, radius $6$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Convert to standard form and find the center and radius: $x^2 + y^2 + 8x - 2y + 8 = 0$',
        solution: `**Step 1:** Group variables
$$(x^2 + 8x) + (y^2 - 2y) = -8$$

**Step 2:** Complete the square
- For $x$: $(8/2)^2 = 16$
- For $y$: $(-2/2)^2 = 1$

$$(x^2 + 8x + 16) + (y^2 - 2y + 1) = -8 + 16 + 1$$

**Step 3:** Factor and simplify
$$(x + 4)^2 + (y - 1)^2 = 9$$

**Answer:** 
- Standard form: $(x + 4)^2 + (y - 1)^2 = 9$
- Center: $(-4, 1)$
- Radius: $3$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is the standard form of a circle?', back: '$(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k)$ and radius $r$' },
      { topicId: topic1.id, front: 'How do you find the radius from the equation $(x - 2)^2 + (y + 3)^2 = 49$?', back: '$r = \\sqrt{49} = 7$' },
      { topicId: topic1.id, front: 'What is the center of $(x + 5)^2 + (y - 1)^2 = 16$?', back: '$(-5, 1)$ (opposite signs from equation)' }
    ]
  })

  console.log('✓ Created topic: Circles (3 examples, 3 flashcards)')

  // Topic: Parabolas
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'parabolas-conic-algebra2' },
    update: {},
    create: {
      slug: 'parabolas-conic-algebra2',
      title: 'Parabolas (Conic Form)',
      description: 'Parabolas with horizontal and vertical orientations',
      order: 2,
      categoryId: conics.id,
      textContent: `# Parabolas (Conic Section)

## Vertical Parabola (opens up/down)

$$(x - h)^2 = 4p(y - k)$$

- **Vertex:** $(h, k)$
- **Focus:** $(h, k + p)$
- **Directrix:** $y = k - p$
- Opens **up** if $p > 0$, **down** if $p < 0$

## Horizontal Parabola (opens left/right)

$$(y - k)^2 = 4p(x - h)$$

- **Vertex:** $(h, k)$
- **Focus:** $(h + p, k)$
- **Directrix:** $x = h - p$
- Opens **right** if $p > 0$, **left** if $p < 0$

## What is $p$?

$p$ is the **focal distance** (distance from vertex to focus)

## Converting Forms

**From:** $y = ax^2 + bx + c$

**To conic form:**
1. Complete the square
2. Identify $4p$ from coefficient

**Example:** $y = x^2 + 4x + 1$
$$(x + 2)^2 = y + 3$$
$$(x + 2)^2 = 1(y + 3)$$

So $4p = 1$, thus $p = \\frac{1}{4}$

## Key Properties

- **Axis of symmetry** passes through vertex
- **Focus** lies on axis of symmetry
- Distance from any point on parabola to focus = distance to directrix`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the vertex and focus of $(x - 1)^2 = 8(y + 2)$',
        solution: `This is in the form $(x - h)^2 = 4p(y - k)$

Comparing: $(x - 1)^2 = 8(y - (-2))$

**Vertex:** $(h, k) = (1, -2)$

**Find p:** $4p = 8$, so $p = 2$

**Focus:** $(h, k + p) = (1, -2 + 2) = (1, 0)$

**Answer:** Vertex $(1, -2)$, Focus $(1, 0)$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Write the equation of a parabola with vertex $(0, 0)$ and focus $(3, 0)$',
        solution: `The focus is to the **right** of the vertex, so this is a horizontal parabola opening right.

Use form: $(y - k)^2 = 4p(x - h)$

**Vertex:** $(0, 0)$
**Focus:** $(3, 0)$

Since focus is at $(h + p, k) = (3, 0)$:
$$p = 3$$

$$4p = 12$$

**Equation:** $(y - 0)^2 = 12(x - 0)$

**Answer:** $y^2 = 12x$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Find the vertex, focus, and directrix of $y^2 - 6y - 4x + 1 = 0$',
        solution: `**Step 1:** Complete the square for $y$
$$y^2 - 6y = 4x - 1$$
$$y^2 - 6y + 9 = 4x - 1 + 9$$
$$(y - 3)^2 = 4x + 8$$
$$(y - 3)^2 = 4(x + 2)$$

**Step 2:** Identify vertex
Vertex: $(-2, 3)$

**Step 3:** Find $p$
$4p = 4$, so $p = 1$

**Step 4:** Find focus (horizontal parabola)
Focus: $(h + p, k) = (-2 + 1, 3) = (-1, 3)$

**Step 5:** Find directrix
Directrix: $x = h - p = -2 - 1 = -3$

**Answer:** Vertex $(-2, 3)$, Focus $(-1, 3)$, Directrix $x = -3$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is the vertex form of a vertical parabola?', back: '$(x - h)^2 = 4p(y - k)$ with vertex $(h, k)$' },
      { topicId: topic2.id, front: 'Where is the focus of $(x - h)^2 = 4p(y - k)$?', back: '$(h, k + p)$' },
      { topicId: topic2.id, front: 'If $p > 0$ in $(y - k)^2 = 4p(x - h)$, which way does it open?', back: 'Right (positive x direction)' }
    ]
  })

  console.log('✓ Created topic: Parabolas (Conic Form) (3 examples, 3 flashcards)')

  // NEW CATEGORY: Advanced Functions
  const advFunctions = await prisma.category.upsert({
    where: { slug: 'algebra2-advanced-functions' },
    update: {},
    create: {
      slug: 'algebra2-advanced-functions',
      name: 'Advanced Functions',
      order: 8,
      courseId: algebra2Course.id
    }
  })

  // Topic: Piecewise Functions
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'piecewise-functions-algebra2' },
    update: {},
    create: {
      slug: 'piecewise-functions-algebra2',
      title: 'Piecewise Functions',
      description: 'Functions defined by different formulas on different intervals',
      order: 1,
      categoryId: advFunctions.id,
      textContent: `# Piecewise Functions

## Definition

A **piecewise function** uses different formulas for different parts of the domain.

**Example:**
$$f(x) = \\begin{cases} x + 1 & \\text{if } x < 0 \\\\ x^2 & \\text{if } x \\geq 0 \\end{cases}$$

## Evaluating

**To find $f(a)$:**
1. Determine which condition $a$ satisfies
2. Use the corresponding formula

**Example:** For the function above:
- $f(-2) = -2 + 1 = -1$ (use $x + 1$ since $-2 < 0$)
- $f(3) = 3^2 = 9$ (use $x^2$ since $3 \\geq 0$)

## Graphing

1. Graph each piece on its domain
2. Use **open circles** for endpoints NOT included (< or >)
3. Use **closed circles** for endpoints included (≤ or ≥)

## Common Types

**Absolute Value:**
$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

**Step Functions:**
Different constant values on intervals

## Continuity

Check if pieces "connect" at boundary points.

**Continuous** if: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate $f(-3)$ and $f(2)$ for $f(x) = \\begin{cases} 2x & \\text{if } x < 0 \\\\ x + 5 & \\text{if } x \\geq 0 \\end{cases}$',
        solution: `**For $f(-3)$:**

Since $-3 < 0$, use the first formula:
$$f(-3) = 2(-3) = -6$$

**For $f(2)$:**

Since $2 \\geq 0$, use the second formula:
$$f(2) = 2 + 5 = 7$$

**Answer:** $f(-3) = -6$, $f(2) = 7$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Write the absolute value function $f(x) = |x - 3|$ as a piecewise function.',
        solution: `The absolute value changes behavior at the point where the inside equals zero.

$x - 3 = 0$ when $x = 3$

**When $x \\geq 3$:** the inside is positive or zero
$$|x - 3| = x - 3$$

**When $x < 3$:** the inside is negative
$$|x - 3| = -(x - 3) = -x + 3$$

**Answer:** 
$$f(x) = \\begin{cases} -x + 3 & \\text{if } x < 3 \\\\ x - 3 & \\text{if } x \\geq 3 \\end{cases}$$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Is the function continuous at $x = 1$? $f(x) = \\begin{cases} x^2 + 1 & \\text{if } x \\leq 1 \\\\ 3x - 1 & \\text{if } x > 1 \\end{cases}$',
        solution: `Check if the function value and limits match at $x = 1$.

**From left:** (use $x^2 + 1$)
$$\\lim_{x \\to 1^-} f(x) = 1^2 + 1 = 2$$

**From right:** (use $3x - 1$)
$$\\lim_{x \\to 1^+} f(x) = 3(1) - 1 = 2$$

**Function value:** (use $x^2 + 1$ since $1 \\leq 1$)
$$f(1) = 1^2 + 1 = 2$$

Since all three equal 2, the function **is continuous** at $x = 1$.

**Answer:** Yes, continuous at $x = 1$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is a piecewise function?', back: 'A function defined by different formulas on different intervals' },
      { topicId: topic3.id, front: 'How do you evaluate a piecewise function?', back: 'Determine which condition the input satisfies, then use that formula' },
      { topicId: topic3.id, front: 'What type of circle marks an endpoint NOT included?', back: 'Open circle (for < or >)' }
    ]
  })

  console.log('✓ Created topic: Piecewise Functions (3 examples, 3 flashcards)')

  // Topic: Inverse Functions
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'inverse-functions-algebra2' },
    update: {},
    create: {
      slug: 'inverse-functions-algebra2',
      title: 'Inverse Functions',
      description: 'Finding and understanding inverse functions',
      order: 2,
      categoryId: advFunctions.id,
      textContent: `# Inverse Functions

## Definition

$f^{-1}$ is the **inverse** of $f$ if:
$$f(f^{-1}(x)) = x \\text{ and } f^{-1}(f(x)) = x$$

The inverse "undoes" what the function does.

## Finding an Inverse

**Steps:**
1. Write $y = f(x)$
2. **Swap** $x$ and $y$
3. Solve for $y$
4. Replace $y$ with $f^{-1}(x)$

**Example:** Find inverse of $f(x) = 2x + 3$

1. $y = 2x + 3$
2. $x = 2y + 3$
3. $x - 3 = 2y$, so $y = \\frac{x - 3}{2}$
4. $f^{-1}(x) = \\frac{x - 3}{2}$

## Domain and Range

- Domain of $f$ = Range of $f^{-1}$
- Range of $f$ = Domain of $f^{-1}$

## Graphing

The graph of $f^{-1}$ is the **reflection** of $f$ over the line $y = x$.

## Horizontal Line Test

$f$ has an inverse function if and only if **no horizontal line** intersects the graph more than once.

## Verifying

To verify $g$ is the inverse of $f$:

Check that $f(g(x)) = x$ **AND** $g(f(x)) = x$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the inverse of $f(x) = x + 7$',
        solution: `**Step 1:** Write as $y = x + 7$

**Step 2:** Swap $x$ and $y$
$$x = y + 7$$

**Step 3:** Solve for $y$
$$y = x - 7$$

**Step 4:** Write inverse
$$f^{-1}(x) = x - 7$$

**Answer:** $f^{-1}(x) = x - 7$`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the inverse of $f(x) = \\frac{x - 1}{3}$',
        solution: `**Step 1:** Write as $y = \\frac{x - 1}{3}$

**Step 2:** Swap $x$ and $y$
$$x = \\frac{y - 1}{3}$$

**Step 3:** Solve for $y$
$$3x = y - 1$$
$$y = 3x + 1$$

**Step 4:** Write inverse
$$f^{-1}(x) = 3x + 1$$

**Verify:** $f(f^{-1}(x)) = \\frac{(3x + 1) - 1}{3} = \\frac{3x}{3} = x$ ✓

**Answer:** $f^{-1}(x) = 3x + 1$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Find the inverse of $f(x) = \\frac{2x + 3}{x - 1}$',
        solution: `**Step 1:** Write as $y = \\frac{2x + 3}{x - 1}$

**Step 2:** Swap $x$ and $y$
$$x = \\frac{2y + 3}{y - 1}$$

**Step 3:** Solve for $y$ (multiply both sides by denominator)
$$x(y - 1) = 2y + 3$$
$$xy - x = 2y + 3$$

Group $y$ terms:
$$xy - 2y = x + 3$$
$$y(x - 2) = x + 3$$
$$y = \\frac{x + 3}{x - 2}$$

**Answer:** $f^{-1}(x) = \\frac{x + 3}{x - 2}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What are the steps to find an inverse function?', back: '1. Write y = f(x)  2. Swap x and y  3. Solve for y  4. Replace y with f⁻¹(x)' },
      { topicId: topic4.id, front: 'How are the domain and range of f and f⁻¹ related?', back: 'Domain of f = Range of f⁻¹, and Range of f = Domain of f⁻¹' },
      { topicId: topic4.id, front: 'What line is the graph of f⁻¹ reflected over from f?', back: 'The line y = x' }
    ]
  })

  console.log('✓ Created topic: Inverse Functions (3 examples, 3 flashcards)')

  // Topic: Logarithmic Equations
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'logarithmic-equations-algebra2' },
    update: {},
    create: {
      slug: 'logarithmic-equations-algebra2',
      title: 'Solving Logarithmic Equations',
      description: 'Using properties to solve log equations',
      order: 4,
      categoryId: expLog!.id,
      textContent: `# Solving Logarithmic Equations

## Strategy 1: Use One-to-One Property

If $\\log_b(x) = \\log_b(y)$, then $x = y$

**Example:** $\\log(x + 3) = \\log(2x - 1)$
$$x + 3 = 2x - 1$$
$$x = 4$$

## Strategy 2: Convert to Exponential

Use the definition: $\\log_b(x) = y$ means $b^y = x$

**Example:** $\\log_2(x) = 5$
$$x = 2^5 = 32$$

## Strategy 3: Condense First

Use log properties to combine:
- Product: $\\log(a) + \\log(b) = \\log(ab)$
- Quotient: $\\log(a) - \\log(b) = \\log(\\frac{a}{b})$
- Power: $n\\log(a) = \\log(a^n)$

## Check Your Answers!

Logarithms require **positive arguments**.

Always verify solutions don't make any log argument ≤ 0.

## Common Equation Types

**Type 1:** $\\log_b(x) = c$ → $x = b^c$

**Type 2:** $\\log_b(x) = \\log_b(y)$ → $x = y$

**Type 3:** $\\log_b(x) + \\log_b(y) = c$ → $\\log_b(xy) = c$ → $xy = b^c$

## Example

Solve: $\\log_3(x + 1) + \\log_3(x - 1) = 2$

**Step 1:** Use product property
$$\\log_3[(x + 1)(x - 1)] = 2$$

**Step 2:** Convert to exponential
$$(x + 1)(x - 1) = 3^2 = 9$$

**Step 3:** Solve
$$x^2 - 1 = 9$$
$$x^2 = 10$$
$$x = \\pm\\sqrt{10}$$

**Step 4:** Check domain
Only $x = \\sqrt{10}$ makes both logs positive!`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $\\log_5(x) = 3$',
        solution: `Convert to exponential form:

$$x = 5^3 = 125$$

**Check:** $\\log_5(125) = \\log_5(5^3) = 3$ ✓

**Answer:** $x = 125$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $\\log(x) + \\log(x - 3) = 1$',
        solution: `Assume base 10 (common log).

**Step 1:** Use product property
$$\\log[x(x - 3)] = 1$$

**Step 2:** Convert to exponential
$$x(x - 3) = 10^1$$
$$x^2 - 3x = 10$$
$$x^2 - 3x - 10 = 0$$

**Step 3:** Factor
$$(x - 5)(x + 2) = 0$$
$$x = 5 \\text{ or } x = -2$$

**Step 4:** Check domain
- $x = 5$: both $\\log(5)$ and $\\log(2)$ are valid ✓
- $x = -2$: $\\log(-2)$ is undefined ✗

**Answer:** $x = 5$`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $2\\log_2(x) = \\log_2(x + 6)$',
        solution: `**Step 1:** Use power property on left side
$$\\log_2(x^2) = \\log_2(x + 6)$$

**Step 2:** Use one-to-one property
$$x^2 = x + 6$$

**Step 3:** Solve
$$x^2 - x - 6 = 0$$
$$(x - 3)(x + 2) = 0$$
$$x = 3 \\text{ or } x = -2$$

**Step 4:** Check domain
- $x = 3$: $\\log_2(3)$ is valid ✓
- $x = -2$: $\\log_2(-2)$ is undefined ✗

**Verify $x = 3$:**
$$2\\log_2(3) = \\log_2(9)$$
$$\\log_2(3 + 6) = \\log_2(9)$$ ✓

**Answer:** $x = 3$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'How do you solve $\\log_b(x) = c$?', back: 'Convert to exponential: $x = b^c$' },
      { topicId: topic5.id, front: 'What property lets you solve $\\log(a) + \\log(b) = c$?', back: 'Product property: combine to $\\log(ab) = c$' },
      { topicId: topic5.id, front: 'Why must you check solutions to log equations?', back: 'To ensure all log arguments are positive' }
    ]
  })

  console.log('✓ Created topic: Solving Logarithmic Equations (3 examples, 3 flashcards)')

  // Topic: Polynomial Division
  const topic6 = await prisma.topic.upsert({
    where: { slug: 'polynomial-division-algebra2' },
    update: {},
    create: {
      slug: 'polynomial-division-algebra2',
      title: 'Polynomial Division',
      description: 'Long division and synthetic division',
      order: 5,
      categoryId: polynomials!.id,
      textContent: `# Polynomial Division

## Long Division

Same process as numerical long division!

**Steps:**
1. Divide leading terms
2. Multiply divisor by quotient term
3. Subtract
4. Bring down next term
5. Repeat

**Example:** $(x^2 + 5x + 6) \\div (x + 2)$

$$\\begin{array}{c|cc} & x + 3 \\\\ \\hline x + 2 & x^2 + 5x + 6 \\\\ & x^2 + 2x \\\\ \\hline & 3x + 6 \\\\ & 3x + 6 \\\\ \\hline & 0 \\end{array}$$

Result: $x + 3$ with remainder $0$

## Synthetic Division

**Only works when dividing by $(x - c)$**

Much faster than long division!

**Steps:**
1. Write coefficients of dividend
2. Use $c$ from divisor $(x - c)$
3. Bring down first coefficient
4. Multiply and add repeatedly

**Example:** $(2x^3 - 5x^2 + 3x - 2) \\div (x - 2)$

Use $c = 2$:
$$\\begin{array}{c|cccc} 2 & 2 & -5 & 3 & -2 \\\\ & & 4 & -2 & 2 \\\\ \\hline & 2 & -1 & 1 & 0 \\end{array}$$

Result: $2x^2 - x + 1$ with remainder $0$

## Remainder Theorem

When dividing $f(x)$ by $(x - c)$:
$$\\text{Remainder} = f(c)$$

## Division Algorithm

$$f(x) = q(x) \\cdot d(x) + r(x)$$

Where $q$ is quotient, $d$ is divisor, $r$ is remainder`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic6.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Use synthetic division: $(x^2 + 7x + 10) \\div (x + 2)$',
        solution: `Divisor is $(x + 2)$, so use $c = -2$

Coefficients: $1, 7, 10$

$$\\begin{array}{c|ccc} -2 & 1 & 7 & 10 \\\\ & & -2 & -10 \\\\ \\hline & 1 & 5 & 0 \\end{array}$$

**Process:**
- Bring down $1$
- $1 \\times (-2) = -2$, add to $7$ → $5$
- $5 \\times (-2) = -10$, add to $10$ → $0$

**Answer:** Quotient $x + 5$, remainder $0$`
      },
      {
        topicId: topic6.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Divide: $(3x^3 - 2x^2 + x - 5) \\div (x - 1)$',
        solution: `Use synthetic division with $c = 1$

$$\\begin{array}{c|cccc} 1 & 3 & -2 & 1 & -5 \\\\ & & 3 & 1 & 2 \\\\ \\hline & 3 & 1 & 2 & -3 \\end{array}$$

**Bottom row interpretation:**
- Coefficients: $3, 1, 2$ → quotient $3x^2 + x + 2$
- Last number: $-3$ → remainder

**Answer:** $3x^2 + x + 2 - \\frac{3}{x - 1}$`
      },
      {
        topicId: topic6.id,
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Use the Remainder Theorem to find the remainder when $f(x) = 2x^3 - 5x + 1$ is divided by $(x - 3)$',
        solution: `By the Remainder Theorem, the remainder equals $f(3)$.

$$f(3) = 2(3)^3 - 5(3) + 1$$
$$= 2(27) - 15 + 1$$
$$= 54 - 15 + 1$$
$$= 40$$

**Answer:** Remainder is $40$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic6.id, front: 'When can you use synthetic division?', back: 'Only when dividing by a linear factor (x - c)' },
      { topicId: topic6.id, front: 'What does the Remainder Theorem say?', back: 'When dividing f(x) by (x - c), the remainder equals f(c)' },
      { topicId: topic6.id, front: 'In synthetic division, what value do you use for divisor (x + 5)?', back: 'c = -5 (opposite sign)' }
    ]
  })

  console.log('✓ Created topic: Polynomial Division (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added final comprehensive Algebra 2 topics!')
  console.log('   New categories: 2 (Conic Sections, Advanced Functions)')
  console.log('   New topics: 6')
  console.log('   Total example problems added: 18')
  console.log('   Total flashcards added: 18')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
