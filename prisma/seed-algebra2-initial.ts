import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating comprehensive Algebra 2 content...')

  const algebra2Course = await prisma.course.findUnique({
    where: { slug: 'algebra-2' }
  })

  if (!algebra2Course) {
    throw new Error('Algebra 2 course not found')
  }

  // CATEGORY 1: Polynomial Functions
  const polynomials = await prisma.category.upsert({
    where: { slug: 'algebra2-polynomial-functions' },
    update: {},
    create: {
      slug: 'algebra2-polynomial-functions',
      name: 'Polynomial Functions',
      order: 0,
      courseId: algebra2Course.id
    }
  })

  // Topic: Polynomial Operations
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'polynomial-operations-algebra2' },
    update: {},
    create: {
      slug: 'polynomial-operations-algebra2',
      title: 'Advanced Polynomial Operations',
      description: 'Multiplying and dividing polynomials',
      order: 1,
      categoryId: polynomials.id,
      textContent: `# Advanced Polynomial Operations

## Multiplying Polynomials

Use the **distributive property** repeatedly.

**Example:** $(2x + 3)(x^2 - 4x + 5)$

Distribute $2x$:
$$2x(x^2 - 4x + 5) = 2x^3 - 8x^2 + 10x$$

Distribute $3$:
$$3(x^2 - 4x + 5) = 3x^2 - 12x + 15$$

Combine:
$$2x^3 - 8x^2 + 10x + 3x^2 - 12x + 15$$
$$= 2x^3 - 5x^2 - 2x + 15$$

## Long Division of Polynomials

Similar to long division with numbers.

**Steps:**
1. Divide the leading terms
2. Multiply and subtract
3. Bring down the next term
4. Repeat until done

## Synthetic Division

A shortcut for dividing by $(x - c)$.

**Use only when divisor is in form** $(x - c)$.

## Remainder Theorem

When polynomial $P(x)$ is divided by $(x - c)$:
$$\\text{Remainder} = P(c)$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Multiply: $(x + 5)(x^2 + 3x + 2)$',
        solution: `Distribute each term in the first polynomial:

$$x(x^2 + 3x + 2) + 5(x^2 + 3x + 2)$$

$$= x^3 + 3x^2 + 2x + 5x^2 + 15x + 10$$

Combine like terms:
$$= x^3 + 8x^2 + 17x + 10$$

**Answer:** $x^3 + 8x^2 + 17x + 10$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Use the Remainder Theorem to find the remainder when $P(x) = x^3 - 4x^2 + 6x - 2$ is divided by $(x - 2)$',
        solution: `By the Remainder Theorem, the remainder when dividing by $(x - 2)$ is $P(2)$.

Evaluate $P(2)$:
$$P(2) = (2)^3 - 4(2)^2 + 6(2) - 2$$
$$= 8 - 16 + 12 - 2$$
$$= 2$$

**Answer:** Remainder = $2$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Divide using long division: $(2x^3 + 3x^2 - 5x + 1) \\div (x + 2)$',
        solution: `Set up long division:

**Step 1:** $2x^3 \\div x = 2x^2$
Multiply: $2x^2(x + 2) = 2x^3 + 4x^2$
Subtract: $(2x^3 + 3x^2) - (2x^3 + 4x^2) = -x^2$

**Step 2:** $-x^2 \\div x = -x$
Multiply: $-x(x + 2) = -x^2 - 2x$
Subtract: $(-x^2 - 5x) - (-x^2 - 2x) = -3x$

**Step 3:** $-3x \\div x = -3$
Multiply: $-3(x + 2) = -3x - 6$
Subtract: $(-3x + 1) - (-3x - 6) = 7$

**Answer:** $2x^2 - x - 3 + \\frac{7}{x + 2}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is the Remainder Theorem?', back: 'When P(x) is divided by (x - c), the remainder is P(c)' },
      { topicId: topic1.id, front: 'When can you use synthetic division?', back: 'Only when dividing by a linear factor (x - c)' },
      { topicId: topic1.id, front: 'Multiply: $(x + 2)(x^2 - 3x + 1)$', back: '$x^3 - x^2 - 5x + 2$' }
    ]
  })

  console.log('✓ Created topic: Advanced Polynomial Operations (3 examples, 3 flashcards)')

  // Topic: Factoring Polynomials
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'factoring-polynomials-algebra2' },
    update: {},
    create: {
      slug: 'factoring-polynomials-algebra2',
      title: 'Factoring Polynomials',
      description: 'Advanced factoring techniques',
      order: 2,
      categoryId: polynomials.id,
      textContent: `# Factoring Polynomials

## Factor by Grouping

Group terms and factor out common factors.

**Example:** $x^3 + 2x^2 + 3x + 6$
$$= x^2(x + 2) + 3(x + 2)$$
$$= (x + 2)(x^2 + 3)$$

## Sum and Difference of Cubes

**Sum of cubes:**
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

**Difference of cubes:**
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

**Example:** $x^3 - 8$
$$= x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$$

## Factoring by Substitution

Sometimes substituting can simplify factoring.

**Example:** $x^4 - 5x^2 + 4$

Let $u = x^2$:
$$u^2 - 5u + 4 = (u - 4)(u - 1)$$

Substitute back:
$$= (x^2 - 4)(x^2 - 1)$$
$$= (x + 2)(x - 2)(x + 1)(x - 1)$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Factor by grouping: $x^3 + 3x^2 + 2x + 6$',
        solution: `Group the first two and last two terms:
$$(x^3 + 3x^2) + (2x + 6)$$

Factor out common factors:
$$x^2(x + 3) + 2(x + 3)$$

Factor out $(x + 3)$:
$$(x + 3)(x^2 + 2)$$

**Answer:** $(x + 3)(x^2 + 2)$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Factor: $x^3 + 27$',
        solution: `This is a sum of cubes: $x^3 + 3^3$

Use the formula: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$

Here $a = x$ and $b = 3$:
$$x^3 + 27 = (x + 3)(x^2 - 3x + 9)$$

**Answer:** $(x + 3)(x^2 - 3x + 9)$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Factor completely: $x^4 - 13x^2 + 36$',
        solution: `This is a quadratic in form. Let $u = x^2$:
$$u^2 - 13u + 36$$

Factor:
$$(u - 9)(u - 4)$$

Substitute back $u = x^2$:
$$(x^2 - 9)(x^2 - 4)$$

Both are difference of squares:
$$= (x + 3)(x - 3)(x + 2)(x - 2)$$

**Answer:** $(x + 3)(x - 3)(x + 2)(x - 2)$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is the sum of cubes formula?', back: '$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$' },
      { topicId: topic2.id, front: 'What is the difference of cubes formula?', back: '$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$' },
      { topicId: topic2.id, front: 'Factor: $x^3 - 8$', back: '$(x - 2)(x^2 + 2x + 4)$' }
    ]
  })

  console.log('✓ Created topic: Factoring Polynomials (3 examples, 3 flashcards)')

  // CATEGORY 2: Rational Expressions
  const rational = await prisma.category.upsert({
    where: { slug: 'algebra2-rational-expressions' },
    update: {},
    create: {
      slug: 'algebra2-rational-expressions',
      name: 'Rational Expressions',
      order: 1,
      courseId: algebra2Course.id
    }
  })

  // Topic: Simplifying Rational Expressions
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'simplifying-rationals-algebra2' },
    update: {},
    create: {
      slug: 'simplifying-rationals-algebra2',
      title: 'Simplifying Rational Expressions',
      description: 'Reducing rational expressions to simplest form',
      order: 1,
      categoryId: rational.id,
      textContent: `# Simplifying Rational Expressions

## What is a Rational Expression?

A **rational expression** is a fraction with polynomials in the numerator and denominator.

**Example:** $\\frac{x^2 - 4}{x + 2}$

## Simplifying Strategy

1. **Factor** the numerator completely
2. **Factor** the denominator completely
3. **Cancel** common factors

**Important:** You can only cancel **factors**, not terms!

## Restrictions

Values that make the denominator zero are **excluded** from the domain.

**Example:** $\\frac{x + 3}{x - 5}$

Restriction: $x \\neq 5$ (denominator would be zero)

## Common Mistakes to Avoid

❌ **Wrong:** $\\frac{x + 3}{x} = 3$ (can't cancel terms!)

✓ **Correct:** $\\frac{x + 3}{x}$ cannot be simplified further`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Simplify: $\\frac{6x^2}{3x}$',
        solution: `Factor numerator and denominator:
$$\\frac{6x^2}{3x} = \\frac{3x \\cdot 2x}{3x \\cdot 1}$$

Cancel the common factor $3x$:
$$= \\frac{2x}{1} = 2x$$

**Restriction:** $x \\neq 0$

**Answer:** $2x$ (where $x \\neq 0$)`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $\\frac{x^2 - 9}{x^2 + 6x + 9}$',
        solution: `**Step 1:** Factor the numerator (difference of squares)
$$x^2 - 9 = (x + 3)(x - 3)$$

**Step 2:** Factor the denominator (perfect square trinomial)
$$x^2 + 6x + 9 = (x + 3)^2 = (x + 3)(x + 3)$$

**Step 3:** Write and cancel
$$\\frac{(x + 3)(x - 3)}{(x + 3)(x + 3)} = \\frac{x - 3}{x + 3}$$

**Restriction:** $x \\neq -3$

**Answer:** $\\frac{x - 3}{x + 3}$ (where $x \\neq -3$)`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Simplify: $\\frac{x^3 - 8}{x^2 - 4}$',
        solution: `**Step 1:** Factor numerator (difference of cubes)
$$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$$

**Step 2:** Factor denominator (difference of squares)
$$x^2 - 4 = (x + 2)(x - 2)$$

**Step 3:** Write and cancel $(x - 2)$
$$\\frac{(x - 2)(x^2 + 2x + 4)}{(x + 2)(x - 2)} = \\frac{x^2 + 2x + 4}{x + 2}$$

**Restrictions:** $x \\neq 2, -2$

**Answer:** $\\frac{x^2 + 2x + 4}{x + 2}$ (where $x \\neq \\pm 2$)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is a rational expression?', back: 'A fraction with polynomials in numerator and denominator' },
      { topicId: topic3.id, front: 'Can you cancel terms in a rational expression?', back: 'No, only factors can be canceled' },
      { topicId: topic3.id, front: 'Simplify: $\\frac{x^2 - 4}{x - 2}$', back: '$x + 2$ (factor and cancel)' }
    ]
  })

  console.log('✓ Created topic: Simplifying Rational Expressions (3 examples, 3 flashcards)')

  // Topic: Operations with Rational Expressions
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'rational-operations-algebra2' },
    update: {},
    create: {
      slug: 'rational-operations-algebra2',
      title: 'Operations with Rational Expressions',
      description: 'Adding, subtracting, multiplying, and dividing rationals',
      order: 2,
      categoryId: rational.id,
      textContent: `# Operations with Rational Expressions

## Multiplying Rational Expressions

$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

**Steps:**
1. Factor everything
2. Multiply numerators and denominators
3. Cancel common factors
4. Simplify

## Dividing Rational Expressions

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$

**Multiply by the reciprocal!**

## Adding/Subtracting (Same Denominator)

$$\\frac{a}{c} \\pm \\frac{b}{c} = \\frac{a \\pm b}{c}$$

Combine numerators, keep denominator.

## Adding/Subtracting (Different Denominators)

1. Find the **LCD** (Least Common Denominator)
2. Rewrite each fraction with the LCD
3. Add or subtract numerators
4. Simplify

**Example:** $\\frac{2}{x} + \\frac{3}{x + 1}$

LCD = $x(x + 1)$

$$\\frac{2(x + 1)}{x(x + 1)} + \\frac{3x}{x(x + 1)} = \\frac{2x + 2 + 3x}{x(x + 1)} = \\frac{5x + 2}{x(x + 1)}$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Multiply: $\\frac{x + 2}{x - 3} \\cdot \\frac{x - 3}{x + 5}$',
        solution: `Multiply numerators and denominators:
$$\\frac{(x + 2)(x - 3)}{(x - 3)(x + 5)}$$

Cancel the common factor $(x - 3)$:
$$= \\frac{x + 2}{x + 5}$$

**Answer:** $\\frac{x + 2}{x + 5}$`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Divide: $\\frac{x^2 - 4}{x + 1} \\div \\frac{x + 2}{x^2 - 1}$',
        solution: `**Step 1:** Multiply by the reciprocal
$$\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x^2 - 1}{x + 2}$$

**Step 2:** Factor everything
$$\\frac{(x + 2)(x - 2)}{x + 1} \\cdot \\frac{(x + 1)(x - 1)}{x + 2}$$

**Step 3:** Cancel $(x + 2)$ and $(x + 1)$
$$= \\frac{(x - 2)(x - 1)}{1}$$

**Step 4:** Multiply
$$= (x - 2)(x - 1) = x^2 - 3x + 2$$

**Answer:** $x^2 - 3x + 2$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Add: $\\frac{3}{x - 2} + \\frac{4}{x + 1}$',
        solution: `**Step 1:** Find LCD
$$\\text{LCD} = (x - 2)(x + 1)$$

**Step 2:** Rewrite with LCD
$$\\frac{3(x + 1)}{(x - 2)(x + 1)} + \\frac{4(x - 2)}{(x - 2)(x + 1)}$$

**Step 3:** Add numerators
$$= \\frac{3(x + 1) + 4(x - 2)}{(x - 2)(x + 1)}$$

**Step 4:** Expand and simplify
$$= \\frac{3x + 3 + 4x - 8}{(x - 2)(x + 1)}$$
$$= \\frac{7x - 5}{(x - 2)(x + 1)}$$

**Answer:** $\\frac{7x - 5}{(x - 2)(x + 1)}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'How do you divide rational expressions?', back: 'Multiply by the reciprocal of the second fraction' },
      { topicId: topic4.id, front: 'What is the first step when adding rationals with different denominators?', back: 'Find the LCD (Least Common Denominator)' },
      { topicId: topic4.id, front: 'Multiply: $\\frac{x}{3} \\cdot \\frac{6}{x}$', back: '$2$ (cancel x, simplify 6/3)' }
    ]
  })

  console.log('✓ Created topic: Operations with Rational Expressions (3 examples, 3 flashcards)')

  // CATEGORY 3: Exponential and Logarithmic Functions
  const expLog = await prisma.category.upsert({
    where: { slug: 'algebra2-exponential-logarithmic' },
    update: {},
    create: {
      slug: 'algebra2-exponential-logarithmic',
      name: 'Exponential and Logarithmic Functions',
      order: 2,
      courseId: algebra2Course.id
    }
  })

  // Topic: Exponential Functions
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'exponential-functions-algebra2' },
    update: {},
    create: {
      slug: 'exponential-functions-algebra2',
      title: 'Exponential Functions',
      description: 'Properties and graphs of exponential functions',
      order: 1,
      categoryId: expLog.id,
      textContent: `# Exponential Functions

## Definition

An **exponential function** has the form:
$$f(x) = a \\cdot b^x$$

where:
- $a$ = initial value (y-intercept when $x = 0$)
- $b$ = base (growth/decay factor)
- $x$ = exponent (input variable)

## Growth vs. Decay

**Exponential Growth:** $b > 1$
- Function increases
- Example: $f(x) = 2^x$

**Exponential Decay:** $0 < b < 1$
- Function decreases
- Example: $f(x) = (\\frac{1}{2})^x$

## Properties

- **Domain:** All real numbers
- **Range:** $(0, \\infty)$ if $a > 0$
- **Y-intercept:** $(0, a)$
- **Horizontal asymptote:** $y = 0$
- Never touches or crosses x-axis

## Exponential Growth/Decay Formula

$$A = A_0(1 + r)^t$$

where:
- $A$ = final amount
- $A_0$ = initial amount
- $r$ = rate (as decimal)
- $t$ = time

**Growth:** $r > 0$ (add)
**Decay:** $r < 0$ (subtract)`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate: $f(x) = 3 \\cdot 2^x$ when $x = 4$',
        solution: `Substitute $x = 4$ into the function:

$$f(4) = 3 \\cdot 2^4$$
$$= 3 \\cdot 16$$
$$= 48$$

**Answer:** $f(4) = 48$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A population of bacteria doubles every 3 hours. If there are initially 500 bacteria, how many will there be after 12 hours?',
        solution: `**Step 1:** Determine how many doubling periods
$$\\frac{12 \\text{ hours}}{3 \\text{ hours/doubling}} = 4 \\text{ doublings}$$

**Step 2:** Use the formula $A = A_0 \\cdot 2^n$
$$A = 500 \\cdot 2^4$$
$$= 500 \\cdot 16$$
$$= 8000$$

**Answer:** 8,000 bacteria`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A car depreciates at 15% per year. If it costs \\$25,000 new, what will it be worth after 5 years?',
        solution: `Use the decay formula: $A = A_0(1 - r)^t$

**Given:**
- $A_0 = 25000$
- $r = 0.15$ (15% decay)
- $t = 5$ years

**Substitute:**
$$A = 25000(1 - 0.15)^5$$
$$= 25000(0.85)^5$$
$$= 25000(0.4437...)$$
$$\\approx 11,093$$

**Answer:** Approximately \\$11,093`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What is the general form of an exponential function?', back: '$f(x) = a \\cdot b^x$' },
      { topicId: topic5.id, front: 'When is an exponential function growing?', back: 'When the base $b > 1$' },
      { topicId: topic5.id, front: 'What is the horizontal asymptote of $f(x) = 3^x$?', back: '$y = 0$ (x-axis)' }
    ]
  })

  console.log('✓ Created topic: Exponential Functions (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created initial Algebra 2 content!')
  console.log('   Categories created: 3')
  console.log('   Topics created: 5')
  console.log('   Total example problems: 15')
  console.log('   Total flashcards: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
