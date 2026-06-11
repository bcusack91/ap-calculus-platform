import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding more Algebra 1 content (problems and topics)...')

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
  
  await prisma.category.findUnique({
    where: { slug: 'algebra1-systems' }
  })
  
  const polynomials = await prisma.category.findUnique({
    where: { slug: 'algebra1-polynomials' }
  })
  
  await prisma.category.findUnique({
    where: { slug: 'algebra1-quadratics' }
  })

  await prisma.category.findUnique({
    where: { slug: 'algebra1-functions' }
  })

  // Add example problems to existing topics

  // Topic 1: Solving Linear Equations
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'solving-linear-equations-algebra1' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: 'Solve for $x$: $2x + 7 = 15$',
          solution: `**Step 1:** Subtract 7 from both sides
$$2x + 7 - 7 = 15 - 7$$
$$2x = 8$$

**Step 2:** Divide both sides by 2
$$\\frac{2x}{2} = \\frac{8}{2}$$
$$x = 4$$

**Check:** $2(4) + 7 = 8 + 7 = 15$ ✓

**Answer:** $x = 4$`
        },
        {
          topicId: topic1.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Solve for $x$: $5(x - 3) = 2x + 9$',
          solution: `**Step 1:** Distribute the 5
$$5x - 15 = 2x + 9$$

**Step 2:** Subtract $2x$ from both sides
$$5x - 2x - 15 = 2x - 2x + 9$$
$$3x - 15 = 9$$

**Step 3:** Add 15 to both sides
$$3x - 15 + 15 = 9 + 15$$
$$3x = 24$$

**Step 4:** Divide by 3
$$x = 8$$

**Answer:** $x = 8$`
        },
        {
          topicId: topic1.id,
          order: 3,
          difficulty: 'HARD' as Difficulty,
          question: 'Solve for $x$: $\\frac{2x + 3}{4} = \\frac{x - 1}{2}$',
          solution: `**Step 1:** Multiply both sides by 4 (the LCD)
$$4 \\cdot \\frac{2x + 3}{4} = 4 \\cdot \\frac{x - 1}{2}$$
$$2x + 3 = 2(x - 1)$$

**Step 2:** Distribute
$$2x + 3 = 2x - 2$$

**Step 3:** Subtract $2x$ from both sides
$$2x - 2x + 3 = 2x - 2x - 2$$
$$3 = -2$$

This is a **contradiction**!

**Answer:** **No solution** (the equation has no value of $x$ that makes it true)`
        }
      ]
    })
    console.log('✓ Added 3 example problems to Solving Linear Equations')
  }

  // Topic 2: Graphing Linear Equations
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'graphing-linear-equations-algebra1' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: 'Find the slope and y-intercept of the line $y = -3x + 5$',
          solution: `The equation is already in slope-intercept form $y = mx + b$

Compare $y = -3x + 5$ with $y = mx + b$:

- Slope: $m = -3$
- Y-intercept: $b = 5$

This means:
- The line has a slope of $-3$ (goes down 3 units for every 1 unit to the right)
- The line crosses the y-axis at the point $(0, 5)$

**Answer:** Slope = $-3$, y-intercept = $5$`
        },
        {
          topicId: topic2.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Find the slope of the line passing through $(2, 5)$ and $(6, 13)$',
          solution: `Use the slope formula:
$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

Identify the points: $(x_1, y_1) = (2, 5)$ and $(x_2, y_2) = (6, 13)$

Substitute:
$$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$$

**Answer:** The slope is $2$`
        },
        {
          topicId: topic2.id,
          order: 3,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Convert $4x - 2y = 8$ to slope-intercept form',
          solution: `We need to solve for $y$ to get the form $y = mx + b$

**Step 1:** Subtract $4x$ from both sides
$$-2y = -4x + 8$$

**Step 2:** Divide everything by $-2$
$$y = \\frac{-4x + 8}{-2}$$
$$y = 2x - 4$$

**Answer:** $y = 2x - 4$ (slope = $2$, y-intercept = $-4$)`
        }
      ]
    })
    console.log('✓ Added 3 example problems to Graphing Linear Equations')
  }

  // Topic 3: Solving Systems
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'solving-systems-algebra1' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: 'Solve using substitution: $\\begin{cases} y = 3x \\\\ x + y = 12 \\end{cases}$',
          solution: `Since $y = 3x$ is already solved for $y$, substitute into the second equation:

**Step 1:** Substitute
$$x + (3x) = 12$$

**Step 2:** Solve for $x$
$$4x = 12$$
$$x = 3$$

**Step 3:** Find $y$ using $y = 3x$
$$y = 3(3) = 9$$

**Check:** $3 + 9 = 12$ ✓

**Answer:** $(3, 9)$`
        },
        {
          topicId: topic3.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Solve using elimination: $\\begin{cases} 3x + 2y = 16 \\\\ 2x - 2y = 4 \\end{cases}$',
          solution: `Notice the $y$ coefficients are opposites, so we can add the equations:

**Step 1:** Add the equations
$$\\begin{array}{r} 3x + 2y = 16 \\\\ + \\quad 2x - 2y = 4 \\\\ \\hline 5x = 20 \\end{array}$$

**Step 2:** Solve for $x$
$$x = 4$$

**Step 3:** Substitute $x = 4$ into the first equation
$$3(4) + 2y = 16$$
$$12 + 2y = 16$$
$$2y = 4$$
$$y = 2$$

**Answer:** $(4, 2)$`
        },
        {
          topicId: topic3.id,
          order: 3,
          difficulty: 'HARD' as Difficulty,
          question: 'Solve: $\\begin{cases} 2x + 3y = 7 \\\\ 4x + 6y = 10 \\end{cases}$',
          solution: `**Step 1:** Notice that if we multiply the first equation by 2:
$$2(2x + 3y) = 2(7)$$
$$4x + 6y = 14$$

**Step 2:** Compare with the second equation:
$$4x + 6y = 14$$
$$4x + 6y = 10$$

This says the same expression equals two different numbers, which is impossible!

**Answer:** **No solution** (the lines are parallel and never intersect)`
        }
      ]
    })
    console.log('✓ Added 3 example problems to Solving Systems')
  }

  // Topic 4: Factoring
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'factoring-algebra1' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: 'Factor completely: $6x^2 + 9x$',
          solution: `**Step 1:** Find the GCF of the terms
- GCF of coefficients: $6$ and $9$ → GCF = $3$
- GCF of variables: $x^2$ and $x$ → GCF = $x$
- Overall GCF: $3x$

**Step 2:** Factor out $3x$
$$6x^2 + 9x = 3x(2x + 3)$$

**Check:** $3x(2x + 3) = 6x^2 + 9x$ ✓

**Answer:** $3x(2x + 3)$`
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Factor: $x^2 - 9x + 20$',
          solution: `We need two numbers that **multiply to 20** and **add to -9**

List factor pairs of 20:
- $1 \\times 20 = 20$, sum = $21$ ✗
- $2 \\times 10 = 20$, sum = $12$ ✗
- $4 \\times 5 = 20$, sum = $9$ ✗
- $(-4) \\times (-5) = 20$, sum = $-9$ ✓

**Answer:** $(x - 4)(x - 5)$

**Check:** $(x - 4)(x - 5) = x^2 - 5x - 4x + 20 = x^2 - 9x + 20$ ✓`
        },
        {
          topicId: topic4.id,
          order: 3,
          difficulty: 'HARD' as Difficulty,
          question: 'Factor completely: $3x^3 - 12x$',
          solution: `**Step 1:** Factor out the GCF ($3x$)
$$3x^3 - 12x = 3x(x^2 - 4)$$

**Step 2:** Notice $x^2 - 4$ is a difference of squares
$$x^2 - 4 = x^2 - 2^2 = (x + 2)(x - 2)$$

**Step 3:** Combine all factors
$$3x^3 - 12x = 3x(x + 2)(x - 2)$$

**Answer:** $3x(x + 2)(x - 2)$`
        }
      ]
    })
    console.log('✓ Added 3 example problems to Factoring')
  }

  // Topic 5: Solving Quadratics
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'solving-quadratics-algebra1' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: 'Solve by factoring: $x^2 - 5x + 6 = 0$',
          solution: `**Step 1:** Factor the quadratic
Find two numbers that multiply to 6 and add to -5: $-2$ and $-3$

$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$

**Step 2:** Set each factor equal to zero
$$x - 2 = 0 \\quad \\text{or} \\quad x - 3 = 0$$

**Step 3:** Solve each equation
$$x = 2 \\quad \\text{or} \\quad x = 3$$

**Answer:** $x = 2$ or $x = 3$`
        },
        {
          topicId: topic5.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Solve using the quadratic formula: $x^2 + 6x + 2 = 0$',
          solution: `Identify: $a = 1$, $b = 6$, $c = 2$

Use the quadratic formula:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Step 1:** Calculate the discriminant
$$b^2 - 4ac = (6)^2 - 4(1)(2) = 36 - 8 = 28$$

**Step 2:** Substitute into the formula
$$x = \\frac{-6 \\pm \\sqrt{28}}{2}$$

**Step 3:** Simplify $\\sqrt{28}$
$$\\sqrt{28} = \\sqrt{4 \\cdot 7} = 2\\sqrt{7}$$

$$x = \\frac{-6 \\pm 2\\sqrt{7}}{2} = \\frac{2(-3 \\pm \\sqrt{7})}{2} = -3 \\pm \\sqrt{7}$$

**Answer:** $x = -3 + \\sqrt{7}$ or $x = -3 - \\sqrt{7}$`
        },
        {
          topicId: topic5.id,
          order: 3,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'How many real solutions does $x^2 + 4x + 5 = 0$ have?',
          solution: `Use the discriminant to determine the number of solutions:
$$\\text{Discriminant} = b^2 - 4ac$$

For $x^2 + 4x + 5 = 0$: $a = 1$, $b = 4$, $c = 5$

$$b^2 - 4ac = (4)^2 - 4(1)(5) = 16 - 20 = -4$$

Since the discriminant is **negative**, the equation has **no real solutions** (it has 2 complex solutions).

**Answer:** No real solutions`
        }
      ]
    })
    console.log('✓ Added 3 example problems to Solving Quadratics')
  }

  // Topic 6: Functions
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'functions-basics-algebra1' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: 'If $f(x) = 2x - 5$, find $f(3)$',
          solution: `To find $f(3)$, substitute $x = 3$ into the function:

$$f(x) = 2x - 5$$
$$f(3) = 2(3) - 5$$
$$f(3) = 6 - 5$$
$$f(3) = 1$$

**Answer:** $f(3) = 1$`
        },
        {
          topicId: topic6.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Given $g(x) = x^2 - 3x + 1$, find $g(-2)$',
          solution: `Substitute $x = -2$ into the function:

$$g(x) = x^2 - 3x + 1$$
$$g(-2) = (-2)^2 - 3(-2) + 1$$
$$g(-2) = 4 + 6 + 1$$
$$g(-2) = 11$$

**Answer:** $g(-2) = 11$`
        },
        {
          topicId: topic6.id,
          order: 3,
          difficulty: 'MEDIUM' as Difficulty,
          question: 'Find the domain of $h(x) = \\frac{1}{x - 4}$',
          solution: `The domain is all real numbers except where the denominator equals zero.

Set the denominator equal to zero:
$$x - 4 = 0$$
$$x = 4$$

We cannot divide by zero, so $x = 4$ must be excluded.

**Answer:** Domain: all real numbers except $x = 4$

In interval notation: $(-\\infty, 4) \\cup (4, \\infty)$`
        }
      ]
    })
    console.log('✓ Added 3 example problems to Functions')
  }

  // Add NEW topics

  // New Topic: Linear Inequalities
  const topic7 = await prisma.topic.upsert({
    where: { slug: 'linear-inequalities-algebra1' },
    update: {},
    create: {
      slug: 'linear-inequalities-algebra1',
      title: 'Linear Inequalities',
      description: 'Solving and graphing linear inequalities in one variable',
      order: 3,
      categoryId: linearEq!.id,
      textContent: `# Linear Inequalities

## Inequality Symbols

- $<$ : less than
- $>$ : greater than
- $\\leq$ : less than or equal to
- $\\geq$ : greater than or equal to

## Solving Inequalities

Solve inequalities like equations, but **reverse the inequality symbol when multiplying or dividing by a negative number**.

**Example 1:** Solve $x + 5 < 12$
$$x + 5 - 5 < 12 - 5$$
$$x < 7$$

**Example 2:** Solve $-3x \\geq 15$
$$\\frac{-3x}{-3} \\leq \\frac{15}{-3}$$ (reverse the symbol!)
$$x \\leq -5$$

## Graphing on a Number Line

- **Open circle** for $<$ or $>$ (not included)
- **Closed circle** for $\\leq$ or $\\geq$ (included)
- **Shade** the region that satisfies the inequality

## Compound Inequalities

**AND:** $-3 < x \\leq 5$ means $x > -3$ AND $x \\leq 5$

**OR:** $x < -2$ OR $x > 3$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic7.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve and graph: $x - 3 \\geq 7$',
        solution: `**Step 1:** Add 3 to both sides
$$x - 3 + 3 \\geq 7 + 3$$
$$x \\geq 10$$

**Graph:** Draw a **closed circle** at 10 and shade to the **right**.

**Answer:** $x \\geq 10$`
      },
      {
        topicId: topic7.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $-2x + 5 > 13$',
        solution: `**Step 1:** Subtract 5 from both sides
$$-2x > 8$$

**Step 2:** Divide by -2 (REVERSE the inequality!)
$$x < -4$$

**Answer:** $x < -4$`
      },
      {
        topicId: topic7.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $-5 \\leq 2x + 1 < 9$',
        solution: `This is a compound inequality. Solve by working on all three parts:

**Step 1:** Subtract 1 from all parts
$$-5 - 1 \\leq 2x + 1 - 1 < 9 - 1$$
$$-6 \\leq 2x < 8$$

**Step 2:** Divide all parts by 2
$$-3 \\leq x < 4$$

**Answer:** $-3 \\leq x < 4$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic7.id, front: 'When do you flip the inequality symbol?', back: 'When multiplying or dividing both sides by a negative number' },
      { topicId: topic7.id, front: 'What type of circle do you use for $x > 5$?', back: 'Open circle (the value is not included)' },
      { topicId: topic7.id, front: 'Solve: $x + 7 < 15$', back: '$x < 8$ (subtract 7 from both sides)' }
    ]
  })

  console.log('✓ Created topic: Linear Inequalities (3 examples, 3 flashcards)')

  // New Topic: Absolute Value Equations
  const topic8 = await prisma.topic.upsert({
    where: { slug: 'absolute-value-algebra1' },
    update: {},
    create: {
      slug: 'absolute-value-algebra1',
      title: 'Absolute Value Equations',
      description: 'Solving equations involving absolute value',
      order: 4,
      categoryId: linearEq!.id,
      textContent: `# Absolute Value Equations

## What is Absolute Value?

The **absolute value** of a number is its distance from zero on the number line.

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

Examples: $|5| = 5$, $|-3| = 3$, $|0| = 0$

## Solving Absolute Value Equations

For $|x| = a$ where $a \\geq 0$:
$$x = a \\quad \\text{or} \\quad x = -a$$

**Example:** Solve $|x| = 7$
$$x = 7 \\quad \\text{or} \\quad x = -7$$

## Multi-Step Absolute Value Equations

For $|ax + b| = c$:
1. Isolate the absolute value
2. Split into two equations: $ax + b = c$ or $ax + b = -c$
3. Solve both equations

**Example:** Solve $|2x - 1| = 5$

**Case 1:** $2x - 1 = 5$ → $x = 3$
**Case 2:** $2x - 1 = -5$ → $x = -2$

Solutions: $x = 3$ or $x = -2$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic8.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $|x| = 9$',
        solution: `The absolute value of $x$ is 9, so $x$ could be 9 or -9.

$$x = 9 \\quad \\text{or} \\quad x = -9$$

**Check:** $|9| = 9$ ✓ and $|-9| = 9$ ✓

**Answer:** $x = 9$ or $x = -9$`
      },
      {
        topicId: topic8.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $|x + 3| = 7$',
        solution: `Split into two cases:

**Case 1:** $x + 3 = 7$
$$x = 4$$

**Case 2:** $x + 3 = -7$
$$x = -10$$

**Check:** 
- $|4 + 3| = |7| = 7$ ✓
- $|-10 + 3| = |-7| = 7$ ✓

**Answer:** $x = 4$ or $x = -10$`
      },
      {
        topicId: topic8.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $|3x - 2| + 1 = 10$',
        solution: `**Step 1:** Isolate the absolute value
$$|3x - 2| = 9$$

**Step 2:** Split into two cases

**Case 1:** $3x - 2 = 9$
$$3x = 11$$
$$x = \\frac{11}{3}$$

**Case 2:** $3x - 2 = -9$
$$3x = -7$$
$$x = -\\frac{7}{3}$$

**Answer:** $x = \\frac{11}{3}$ or $x = -\\frac{7}{3}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic8.id, front: 'What is $|-8|$?', back: '$8$ (absolute value is always non-negative)' },
      { topicId: topic8.id, front: 'If $|x| = 5$, what are the possible values of $x$?', back: '$x = 5$ or $x = -5$' },
      { topicId: topic8.id, front: 'Solve: $|x - 4| = 3$', back: '$x = 7$ or $x = 1$' }
    ]
  })

  console.log('✓ Created topic: Absolute Value Equations (3 examples, 3 flashcards)')

  // New Topic: Exponent Rules
  const topic9 = await prisma.topic.upsert({
    where: { slug: 'exponent-rules-algebra1' },
    update: {},
    create: {
      slug: 'exponent-rules-algebra1',
      title: 'Exponent Rules',
      description: 'Properties and operations with exponents',
      order: 2,
      categoryId: polynomials!.id,
      textContent: `# Exponent Rules

## Basic Exponent Notation

$$a^n = a \\cdot a \\cdot a \\cdots a \\text{ (n times)}$$

Example: $3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$

## Product Rule

When multiplying with the same base, **add the exponents**:
$$a^m \\cdot a^n = a^{m+n}$$

Example: $x^3 \\cdot x^5 = x^{3+5} = x^8$

## Quotient Rule

When dividing with the same base, **subtract the exponents**:
$$\\frac{a^m}{a^n} = a^{m-n}$$

Example: $\\frac{x^7}{x^3} = x^{7-3} = x^4$

## Power Rule

When raising a power to a power, **multiply the exponents**:
$$(a^m)^n = a^{mn}$$

Example: $(x^2)^3 = x^{2 \\cdot 3} = x^6$

## Power of a Product

$$(ab)^n = a^n b^n$$

Example: $(2x)^3 = 2^3 x^3 = 8x^3$

## Power of a Quotient

$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$

## Zero Exponent

$$a^0 = 1 \\text{ (for } a \\neq 0 \\text{)}$$

## Negative Exponents

$$a^{-n} = \\frac{1}{a^n}$$

Example: $x^{-3} = \\frac{1}{x^3}$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic9.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Simplify: $x^5 \\cdot x^3$',
        solution: `Use the **product rule**: add the exponents

$$x^5 \\cdot x^3 = x^{5+3} = x^8$$

**Answer:** $x^8$`
      },
      {
        topicId: topic9.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $\\frac{12x^7}{3x^2}$',
        solution: `**Step 1:** Divide the coefficients
$$\\frac{12}{3} = 4$$

**Step 2:** Use the quotient rule for the variables
$$\\frac{x^7}{x^2} = x^{7-2} = x^5$$

**Step 3:** Combine
$$\\frac{12x^7}{3x^2} = 4x^5$$

**Answer:** $4x^5$`
      },
      {
        topicId: topic9.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Simplify: $(2x^3)^4$',
        solution: `Use the **power of a product rule** and **power rule**:

$$(2x^3)^4 = 2^4 \\cdot (x^3)^4$$
$$= 16 \\cdot x^{3 \\cdot 4}$$
$$= 16x^{12}$$

**Answer:** $16x^{12}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic9.id, front: 'What is $a^0$?', back: '$1$ (any nonzero number to the zero power equals 1)' },
      { topicId: topic9.id, front: 'Simplify: $x^4 \\cdot x^6$', back: '$x^{10}$ (add the exponents)' },
      { topicId: topic9.id, front: 'What is $x^{-2}$?', back: '$\\frac{1}{x^2}$ (negative exponent means reciprocal)' }
    ]
  })

  console.log('✓ Created topic: Exponent Rules (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added more Algebra 1 content!')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 21')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
