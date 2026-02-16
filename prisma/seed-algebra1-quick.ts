import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Algebra 1 categories and topics...')

  const algebra1Course = await prisma.course.findUnique({
    where: { slug: 'algebra-1' }
  })

  if (!algebra1Course) {
    throw new Error('Algebra 1 course not found')
  }

  // Category 1: Linear Equations
  const linearEq = await prisma.category.upsert({
    where: { slug: 'algebra1-linear-equations' },
    update: {},
    create: {
      slug: 'algebra1-linear-equations',
      name: 'Linear Equations',
      description: 'Solving and graphing linear equations',
      order: 1,
      courseId: algebra1Course.id
    }
  })

  // Category 2: Systems of Equations
  const systems = await prisma.category.upsert({
    where: { slug: 'algebra1-systems' },
    update: {},
    create: {
      slug: 'algebra1-systems',
      name: 'Systems of Equations',
      description: 'Solving systems by graphing, substitution, and elimination',
      order: 2,
      courseId: algebra1Course.id
    }
  })

  // Category 3: Polynomials
  const polynomials = await prisma.category.upsert({
    where: { slug: 'algebra1-polynomials' },
    update: {},
    create: {
      slug: 'algebra1-polynomials',
      name: 'Polynomials and Factoring',
      description: 'Operations with polynomials and factoring techniques',
      order: 3,
      courseId: algebra1Course.id
    }
  })

  // Category 4: Quadratic Equations
  const quadratics = await prisma.category.upsert({
    where: { slug: 'algebra1-quadratics' },
    update: {},
    create: {
      slug: 'algebra1-quadratics',
      name: 'Quadratic Equations',
      description: 'Solving and graphing quadratic equations',
      order: 4,
      courseId: algebra1Course.id
    }
  })

  // Category 5: Functions
  const functions = await prisma.category.upsert({
    where: { slug: 'algebra1-functions' },
    update: {},
    create: {
      slug: 'algebra1-functions',
      name: 'Functions',
      description: 'Understanding and evaluating functions',
      order: 5,
      courseId: algebra1Course.id
    }
  })

  console.log('✅ Created 5 categories')

  // Create topics with full content
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'solving-linear-equations-algebra1' },
    update: {},
    create: {
      slug: 'solving-linear-equations-algebra1',
      title: 'Solving Linear Equations',
      description: 'Learn to solve one-step, two-step, and multi-step linear equations',
      order: 1,
      categoryId: linearEq.id,
      textContent: `# Solving Linear Equations

## What is a Linear Equation?

A **linear equation** is an equation where the variable appears to the first power only.

Examples: $x + 5 = 12$, $3x - 7 = 20$, $2(x + 3) = 5x - 4$

## Two-Step Equations

**Example:** Solve $3x + 4 = 19$

**Step 1:** Subtract 4 from both sides
$$3x = 15$$

**Step 2:** Divide by 3
$$x = 5$$

## Multi-Step Equations

For equations like $2(x + 3) = 5x - 4$:

1. **Distribute:** $2x + 6 = 5x - 4$
2. **Collect like terms:** $2x - 5x = -4 - 6$
3. **Simplify:** $-3x = -10$
4. **Solve:** $x = \\frac{10}{3}$

## Key Properties

- **Addition/Subtraction:** If $a = b$, then $a + c = b + c$
- **Multiplication/Division:** If $a = b$, then $ac = bc$ (and $\\frac{a}{c} = \\frac{b}{c}$ if $c \\neq 0$)`,
      isPremium: false
    }
  })

  const topic2 = await prisma.topic.upsert({
    where: { slug: 'graphing-linear-equations-algebra1' },
    update: {},
    create: {
      slug: 'graphing-linear-equations-algebra1',
      title: 'Graphing Linear Equations',
      description: 'Graph lines using slope-intercept form',
      order: 2,
      categoryId: linearEq.id,
      textContent: `# Graphing Linear Equations

## Slope-Intercept Form

$$y = mx + b$$

where:
- $m$ = **slope** (rise over run)
- $b$ = **y-intercept** (where line crosses y-axis)

## Finding Slope

Between points $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

### Types of Slopes
- **Positive:** Line goes up left to right
- **Negative:** Line goes down left to right  
- **Zero:** Horizontal line
- **Undefined:** Vertical line

## Graphing Steps

1. Plot the y-intercept
2. Use slope to find another point
3. Draw the line`,
      isPremium: false
    }
  })

  const topic3 = await prisma.topic.upsert({
    where: { slug: 'solving-systems-algebra1' },
    update: {},
    create: {
      slug: 'solving-systems-algebra1',
      title: 'Solving Systems of Equations',
      description: 'Use substitution and elimination methods',
      order: 1,
      categoryId: systems.id,
      textContent: `# Solving Systems of Equations

## Method 1: Substitution

**Example:** $\\begin{cases} y = 2x + 1 \\\\ 3x + y = 16 \\end{cases}$

Substitute $y = 2x + 1$ into second equation:
$$3x + (2x + 1) = 16$$
$$5x = 15$$
$$x = 3, \\quad y = 7$$

## Method 2: Elimination

**Example:** $\\begin{cases} 2x + 3y = 12 \\\\ 5x - 3y = 9 \\end{cases}$

Add the equations:
$$7x = 21$$
$$x = 3, \\quad y = 2$$

## Solution Types

- **One solution:** Lines intersect
- **No solution:** Parallel lines
- **Infinitely many:** Same line`,
      isPremium: false
    }
  })

  const topic4 = await prisma.topic.upsert({
    where: { slug: 'factoring-algebra1' },
    update: {},
    create: {
      slug: 'factoring-algebra1',
      title: 'Factoring Polynomials',
      description: 'Learn GCF, trinomials, and special patterns',
      order: 1,
      categoryId: polynomials.id,
      textContent: `# Factoring Polynomials

## Greatest Common Factor (GCF)

Factor out the largest common expression.

**Example:** $6x^3 + 9x^2 = 3x^2(2x + 3)$

## Factoring Trinomials

For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.

**Example:** $x^2 + 7x + 12 = (x + 3)(x + 4)$

## Difference of Squares

$$a^2 - b^2 = (a + b)(a - b)$$

**Example:** $x^2 - 25 = (x + 5)(x - 5)$

## Perfect Square Trinomials

$$a^2 + 2ab + b^2 = (a + b)^2$$

**Example:** $x^2 + 6x + 9 = (x + 3)^2$`,
      isPremium: false
    }
  })

  const topic5 = await prisma.topic.upsert({
    where: { slug: 'solving-quadratics-algebra1' },
    update: {},
    create: {
      slug: 'solving-quadratics-algebra1',
      title: 'Solving Quadratic Equations',
      description: 'Solve by factoring, square root method, and quadratic formula',
      order: 1,
      categoryId: quadratics.id,
      textContent: `# Solving Quadratic Equations

## Standard Form

$$ax^2 + bx + c = 0$$

## Method 1: Factoring

**Example:** $x^2 + 5x + 6 = 0$

Factor: $(x + 2)(x + 3) = 0$

Solutions: $x = -2$ or $x = -3$

## Method 2: Square Root Method

For $x^2 = k$:
$$x = \\pm\\sqrt{k}$$

## Method 3: Quadratic Formula

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The **discriminant** $b^2 - 4ac$ determines number of solutions:
- Positive: 2 real solutions
- Zero: 1 real solution
- Negative: no real solutions`,
      isPremium: false
    }
  })

  const topic6 = await prisma.topic.upsert({
    where: { slug: 'functions-basics-algebra1' },
    update: {},
    create: {
      slug: 'functions-basics-algebra1',
      title: 'Introduction to Functions',
      description: 'Function notation, domain, range, and evaluation',
      order: 1,
      categoryId: functions.id,
      textContent: `# Introduction to Functions

## What is a Function?

A **function** is a relation where each input has exactly one output.

## Function Notation

$$f(x) = 2x + 3$$

- $f$ is the function name
- $x$ is the input
- $2x + 3$ is the rule

## Evaluating Functions

To find $f(5)$ when $f(x) = 2x + 3$:
$$f(5) = 2(5) + 3 = 13$$

## Domain and Range

- **Domain:** Set of all possible input values
- **Range:** Set of all possible output values

## Vertical Line Test

A graph represents a function if any vertical line intersects it at most once.`,
      isPremium: false
    }
  })

  console.log('✅ Created 6 topics with content')

  // Add flashcards
  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is a linear equation?', back: 'An equation where the variable appears to the first power only' },
      { topicId: topic1.id, front: 'Solve: $x + 7 = 15$', back: '$x = 8$ (subtract 7 from both sides)' },
      { topicId: topic1.id, front: 'Solve: $3x = 21$', back: '$x = 7$ (divide both sides by 3)' },
      
      { topicId: topic2.id, front: 'What is slope-intercept form?', back: '$y = mx + b$ where $m$ is slope and $b$ is y-intercept' },
      { topicId: topic2.id, front: 'What is the slope formula?', back: '$m = \\frac{y_2 - y_1}{x_2 - x_1}$' },
      { topicId: topic2.id, front: 'In $y = 4x - 3$, what is the y-intercept?', back: '$-3$ (the line crosses y-axis at $(0, -3)$)' },
      
      { topicId: topic3.id, front: 'Name two methods for solving systems of equations', back: 'Substitution and elimination' },
      { topicId: topic3.id, front: 'When should you use substitution?', back: 'When one equation is already solved for a variable' },
      { topicId: topic3.id, front: 'What does it mean if a system has no solution?', back: 'The lines are parallel and never intersect' },
      
      { topicId: topic4.id, front: 'What should you check for first when factoring?', back: 'The Greatest Common Factor (GCF)' },
      { topicId: topic4.id, front: 'Factor: $x^2 - 9$', back: '$(x + 3)(x - 3)$ using difference of squares' },
      { topicId: topic4.id, front: 'What is the difference of squares formula?', back: '$a^2 - b^2 = (a + b)(a - b)$' },
      
      { topicId: topic5.id, front: 'What is the quadratic formula?', back: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$' },
      { topicId: topic5.id, front: 'What does the discriminant tell you?', back: 'The number of real solutions: positive=2, zero=1, negative=0' },
      { topicId: topic5.id, front: 'Solve: $x^2 = 16$', back: '$x = \\pm 4$ (use square root method)' },
      
      { topicId: topic6.id, front: 'What is a function?', back: 'A relation where each input has exactly one output' },
      { topicId: topic6.id, front: 'If $f(x) = 3x - 5$, what is $f(4)$?', back: '$f(4) = 3(4) - 5 = 7$' },
      { topicId: topic6.id, front: 'What is the vertical line test?', back: 'A graph is a function if any vertical line intersects it at most once' }
    ]
  })

  console.log('✅ Created 18 flashcards')

  console.log('\n🎉 Algebra 1 seeded successfully!')
  console.log('   Categories: 5')
  console.log('   Topics: 6')
  console.log('   Flashcards: 18')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
