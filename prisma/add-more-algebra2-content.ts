import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding more comprehensive Algebra 2 content...')

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

  const rational = await prisma.category.findUnique({
    where: { slug: 'algebra2-rational-expressions' }
  })

  // Topic: Logarithmic Functions
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'logarithmic-functions-algebra2' },
    update: {},
    create: {
      slug: 'logarithmic-functions-algebra2',
      title: 'Logarithmic Functions',
      description: 'Understanding and evaluating logarithms',
      order: 2,
      categoryId: expLog!.id,
      textContent: `# Logarithmic Functions

## Definition

A **logarithm** is the inverse of an exponential function.

$$\\log_b(x) = y \\quad \\text{means} \\quad b^y = x$$

Read as: "log base $b$ of $x$ equals $y$"

**Example:** $\\log_2(8) = 3$ because $2^3 = 8$

## Common Logarithms

**Common log:** $\\log(x)$ means $\\log_{10}(x)$

**Natural log:** $\\ln(x)$ means $\\log_e(x)$ where $e \\approx 2.718$

## Properties of Logarithms

**Product Rule:**
$$\\log_b(MN) = \\log_b(M) + \\log_b(N)$$

**Quotient Rule:**
$$\\log_b\\left(\\frac{M}{N}\\right) = \\log_b(M) - \\log_b(N)$$

**Power Rule:**
$$\\log_b(M^p) = p \\cdot \\log_b(M)$$

**Change of Base:**
$$\\log_b(x) = \\frac{\\log(x)}{\\log(b)}$$

## Special Values

- $\\log_b(1) = 0$ (because $b^0 = 1$)
- $\\log_b(b) = 1$ (because $b^1 = b$)
- $\\log_b(b^x) = x$
- $b^{\\log_b(x)} = x$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate: $\\log_3(81)$',
        solution: `We need to find: $\\log_3(81) = ?$

This asks: "3 to what power equals 81?"

$$3^? = 81$$

Since $3^4 = 81$:
$$\\log_3(81) = 4$$

**Answer:** $4$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Expand using log properties: $\\log_5(\\frac{x^3y}{z^2})$',
        solution: `Use quotient, product, and power rules:

**Step 1:** Apply quotient rule
$$\\log_5\\left(\\frac{x^3y}{z^2}\\right) = \\log_5(x^3y) - \\log_5(z^2)$$

**Step 2:** Apply product rule to first term
$$= \\log_5(x^3) + \\log_5(y) - \\log_5(z^2)$$

**Step 3:** Apply power rule
$$= 3\\log_5(x) + \\log_5(y) - 2\\log_5(z)$$

**Answer:** $3\\log_5(x) + \\log_5(y) - 2\\log_5(z)$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $\\log_2(x + 3) + \\log_2(x - 3) = 4$',
        solution: `**Step 1:** Use product rule (combine logs)
$$\\log_2[(x + 3)(x - 3)] = 4$$

**Step 2:** Convert to exponential form
$$(x + 3)(x - 3) = 2^4 = 16$$

**Step 3:** Simplify left side (difference of squares)
$$x^2 - 9 = 16$$

**Step 4:** Solve for x
$$x^2 = 25$$
$$x = \\pm 5$$

**Step 5:** Check both solutions
- $x = 5$: $\\log_2(8) + \\log_2(2) = 3 + 1 = 4$ ✓
- $x = -5$: $\\log_2(-2) + \\log_2(-8)$ ✗ (negative logs undefined)

**Answer:** $x = 5$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What does $\\log_b(x) = y$ mean?', back: '$b^y = x$ (log is the inverse of exponential)' },
      { topicId: topic1.id, front: 'What is $\\log_b(1)$?', back: '$0$ (because $b^0 = 1$)' },
      { topicId: topic1.id, front: 'Product rule for logs?', back: '$\\log_b(MN) = \\log_b(M) + \\log_b(N)$' }
    ]
  })

  console.log('✓ Created topic: Logarithmic Functions (3 examples, 3 flashcards)')

  // NEW CATEGORY: Sequences and Series
  const sequences = await prisma.category.upsert({
    where: { slug: 'algebra2-sequences-series' },
    update: {},
    create: {
      slug: 'algebra2-sequences-series',
      name: 'Sequences and Series',
      order: 3,
      courseId: algebra2Course.id
    }
  })

  // Topic: Geometric Sequences
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'geometric-sequences-algebra2' },
    update: {},
    create: {
      slug: 'geometric-sequences-algebra2',
      title: 'Geometric Sequences',
      description: 'Patterns with common ratios',
      order: 1,
      categoryId: sequences.id,
      textContent: `# Geometric Sequences

## Definition

A **geometric sequence** has a constant ratio between consecutive terms.

**Example:** $3, 6, 12, 24, 48, ...$
- Common ratio: $r = 2$

## Finding the Common Ratio

$$r = \\frac{a_2}{a_1} = \\frac{a_3}{a_2} = ...$$

Divide any term by the previous term.

## Explicit Formula

To find the $n$th term:
$$a_n = a_1 \\cdot r^{n-1}$$

where:
- $a_n$ = nth term
- $a_1$ = first term
- $r$ = common ratio
- $n$ = term number

## Recursive Formula

$$a_n = a_{n-1} \\cdot r$$

Each term equals the previous term times $r$.

## Growth vs. Decay

**Growth:** $|r| > 1$
- Terms get larger in magnitude

**Decay:** $0 < |r| < 1$
- Terms get smaller

## Real-World Applications

- Compound interest
- Population growth
- Radioactive decay`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the common ratio: $5, 15, 45, 135, ...$',
        solution: `Divide consecutive terms:

$$r = \\frac{15}{5} = 3$$

Check: $\\frac{45}{15} = 3$ ✓

**Answer:** Common ratio = $3$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the 8th term of the sequence: $2, 6, 18, 54, ...$',
        solution: `**Step 1:** Identify $a_1$ and $r$
$$a_1 = 2, \\quad r = \\frac{6}{2} = 3$$

**Step 2:** Use the explicit formula
$$a_n = a_1 \\cdot r^{n-1}$$

**Step 3:** Substitute $n = 8$
$$a_8 = 2 \\cdot 3^{8-1}$$
$$= 2 \\cdot 3^7$$
$$= 2 \\cdot 2187$$
$$= 4374$$

**Answer:** $a_8 = 4374$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find the first term and common ratio.',
        solution: `**Given:** $a_3 = 12$ and $a_6 = 96$

**Step 1:** Write equations using $a_n = a_1 \\cdot r^{n-1}$
$$a_3: \\quad 12 = a_1 \\cdot r^2$$
$$a_6: \\quad 96 = a_1 \\cdot r^5$$

**Step 2:** Divide the second by the first
$$\\frac{96}{12} = \\frac{a_1 \\cdot r^5}{a_1 \\cdot r^2}$$
$$8 = r^3$$
$$r = 2$$

**Step 3:** Find $a_1$ using $a_3 = 12$
$$12 = a_1 \\cdot 2^2$$
$$12 = 4a_1$$
$$a_1 = 3$$

**Check:** Sequence is $3, 6, 12, 24, 48, 96, ...$ ✓

**Answer:** $a_1 = 3$, $r = 2$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is a geometric sequence?', back: 'A sequence with a constant ratio between consecutive terms' },
      { topicId: topic2.id, front: 'What is the explicit formula for geometric sequences?', back: '$a_n = a_1 \\cdot r^{n-1}$' },
      { topicId: topic2.id, front: 'Find the next term: 4, 12, 36, 108, ...', back: '324 (multiply by common ratio of 3)' }
    ]
  })

  console.log('✓ Created topic: Geometric Sequences (3 examples, 3 flashcards)')

  // Topic: Series and Summation
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'series-summation-algebra2' },
    update: {},
    create: {
      slug: 'series-summation-algebra2',
      title: 'Arithmetic and Geometric Series',
      description: 'Finding sums of sequences',
      order: 2,
      categoryId: sequences.id,
      textContent: `# Series and Summation

## What is a Series?

A **series** is the sum of the terms in a sequence.

**Example:** $2 + 4 + 6 + 8 + 10 = 30$

## Arithmetic Series

Sum of an arithmetic sequence:
$$S_n = \\frac{n(a_1 + a_n)}{2}$$

or

$$S_n = \\frac{n[2a_1 + (n-1)d]}{2}$$

where $n$ = number of terms

## Geometric Series

Sum of a geometric sequence:
$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$

(when $r \\neq 1$)

## Infinite Geometric Series

If $|r| < 1$, the infinite series has a sum:
$$S = \\frac{a_1}{1 - r}$$

**Example:** $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + ...$

$$S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$$

## Sigma Notation

$$\\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + ... + a_n$$

Read as: "the sum from $i = 1$ to $n$ of $a_i$"`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the sum: $2 + 5 + 8 + 11 + 14$',
        solution: `This is an arithmetic series with:
- $a_1 = 2$
- $a_n = 14$
- $n = 5$ terms

Use the formula:
$$S_n = \\frac{n(a_1 + a_n)}{2}$$

$$S_5 = \\frac{5(2 + 14)}{2} = \\frac{5(16)}{2} = \\frac{80}{2} = 40$$

**Answer:** $40$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the sum of the first 6 terms: $3, 6, 12, 24, ...$',
        solution: `This is a geometric series with:
- $a_1 = 3$
- $r = 2$
- $n = 6$

Use the formula:
$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$

$$S_6 = 3 \\cdot \\frac{1 - 2^6}{1 - 2}$$
$$= 3 \\cdot \\frac{1 - 64}{-1}$$
$$= 3 \\cdot \\frac{-63}{-1}$$
$$= 3 \\cdot 63 = 189$$

**Answer:** $189$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Find the sum of the infinite series: $8 + 4 + 2 + 1 + ...$',
        solution: `This is an infinite geometric series with:
- $a_1 = 8$
- $r = \\frac{4}{8} = \\frac{1}{2}$

Since $|r| = \\frac{1}{2} < 1$, the series converges.

Use the formula:
$$S = \\frac{a_1}{1 - r}$$

$$S = \\frac{8}{1 - \\frac{1}{2}}$$
$$= \\frac{8}{\\frac{1}{2}}$$
$$= 16$$

**Answer:** $16$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is an arithmetic series formula?', back: '$S_n = \\frac{n(a_1 + a_n)}{2}$' },
      { topicId: topic3.id, front: 'What is the geometric series formula?', back: '$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$' },
      { topicId: topic3.id, front: 'When does an infinite geometric series have a sum?', back: 'When $|r| < 1$' }
    ]
  })

  console.log('✓ Created topic: Series and Summation (3 examples, 3 flashcards)')

  // NEW CATEGORY: Complex Numbers
  const complex = await prisma.category.upsert({
    where: { slug: 'algebra2-complex-numbers' },
    update: {},
    create: {
      slug: 'algebra2-complex-numbers',
      name: 'Complex Numbers',
      order: 4,
      courseId: algebra2Course.id
    }
  })

  // Topic: Introduction to Complex Numbers
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'complex-numbers-intro-algebra2' },
    update: {},
    create: {
      slug: 'complex-numbers-intro-algebra2',
      title: 'Introduction to Complex Numbers',
      description: 'Imaginary unit and complex number operations',
      order: 1,
      categoryId: complex.id,
      textContent: `# Introduction to Complex Numbers

## The Imaginary Unit

The **imaginary unit** $i$ is defined as:
$$i = \\sqrt{-1}$$

Therefore: $i^2 = -1$

## Complex Numbers

A **complex number** has the form:
$$a + bi$$

where:
- $a$ = real part
- $b$ = imaginary part
- $i$ = imaginary unit

**Example:** $3 + 4i$

## Powers of $i$

Pattern repeats every 4:
- $i^1 = i$
- $i^2 = -1$
- $i^3 = i^2 \\cdot i = -i$
- $i^4 = i^2 \\cdot i^2 = 1$
- $i^5 = i$ (pattern repeats)

## Adding and Subtracting

Combine like terms (real with real, imaginary with imaginary):

$$(3 + 4i) + (2 - i) = (3 + 2) + (4i - i) = 5 + 3i$$

## Multiplying

Use FOIL and remember $i^2 = -1$:

$$(2 + 3i)(1 + 4i)$$
$$= 2 + 8i + 3i + 12i^2$$
$$= 2 + 11i + 12(-1)$$
$$= 2 + 11i - 12$$
$$= -10 + 11i$$

## Complex Conjugates

The conjugate of $a + bi$ is $a - bi$.

**Property:** $(a + bi)(a - bi) = a^2 + b^2$ (always real!)`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Simplify: $\\sqrt{-16}$',
        solution: `Factor out $-1$:
$$\\sqrt{-16} = \\sqrt{-1 \\cdot 16}$$

$$= \\sqrt{-1} \\cdot \\sqrt{16}$$

$$= i \\cdot 4$$

$$= 4i$$

**Answer:** $4i$`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Add: $(5 - 2i) + (-3 + 7i)$',
        solution: `Combine real parts and imaginary parts separately:

**Real parts:** $5 + (-3) = 2$
**Imaginary parts:** $-2i + 7i = 5i$

**Answer:** $2 + 5i$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Multiply: $(3 - 2i)(3 + 2i)$',
        solution: `Notice these are conjugates! Use the formula $(a + bi)(a - bi) = a^2 + b^2$

Or use FOIL:
$$(3 - 2i)(3 + 2i)$$
$$= 9 + 6i - 6i - 4i^2$$
$$= 9 - 4(-1)$$
$$= 9 + 4$$
$$= 13$$

**Answer:** $13$ (a real number!)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What is $i$?', back: '$\\sqrt{-1}$ (the imaginary unit)' },
      { topicId: topic4.id, front: 'What is $i^2$?', back: '$-1$' },
      { topicId: topic4.id, front: 'What is the conjugate of $3 + 5i$?', back: '$3 - 5i$ (change the sign of imaginary part)' }
    ]
  })

  console.log('✓ Created topic: Introduction to Complex Numbers (3 examples, 3 flashcards)')

  // Topic: Polynomial Theorems
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'polynomial-theorems-algebra2' },
    update: {},
    create: {
      slug: 'polynomial-theorems-algebra2',
      title: 'Polynomial Theorems and Roots',
      description: 'Fundamental Theorem of Algebra and finding roots',
      order: 3,
      categoryId: polynomials!.id,
      textContent: `# Polynomial Theorems

## Fundamental Theorem of Algebra

Every polynomial of degree $n$ has exactly $n$ roots (counting multiplicity), including complex roots.

**Example:** A degree 3 polynomial has 3 roots (some may be repeated or complex).

## Rational Root Theorem

If $\\frac{p}{q}$ is a rational root of $a_nx^n + ... + a_0 = 0$, then:
- $p$ divides $a_0$ (constant term)
- $q$ divides $a_n$ (leading coefficient)

**Example:** For $2x^3 + 5x^2 - 4x - 3 = 0$

Possible rational roots: $\\pm 1, \\pm 3, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$

## Descartes' Rule of Signs

Count sign changes in $P(x)$ to find:
- **Positive roots:** Number of sign changes (or less by an even number)
- **Negative roots:** Number of sign changes in $P(-x)$

## Complex Conjugate Theorem

If $a + bi$ is a root of a polynomial with **real coefficients**, then $a - bi$ is also a root.

**Example:** If $2 + 3i$ is a root, then $2 - 3i$ must also be a root.`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'List all possible rational roots: $x^3 - 5x^2 + 2x - 6 = 0$',
        solution: `Use the Rational Root Theorem:

**Factors of constant term** ($-6$): $\\pm 1, \\pm 2, \\pm 3, \\pm 6$
**Factors of leading coefficient** ($1$): $\\pm 1$

**Possible rational roots:**
$$\\pm 1, \\pm 2, \\pm 3, \\pm 6$$

**Answer:** $\\pm 1, \\pm 2, \\pm 3, \\pm 6$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A polynomial has roots $2$, $-3$, and $1 + i$. What is the minimum degree?',
        solution: `We have roots: $2$, $-3$, and $1 + i$

By the **Complex Conjugate Theorem**, if $1 + i$ is a root, then $1 - i$ must also be a root (assuming real coefficients).

**Total roots:** $2$, $-3$, $1 + i$, $1 - i$

That's **4 roots**, so minimum degree is **4**.

**Answer:** Degree 4`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Find a polynomial with real coefficients that has roots $3$ and $2 - i$',
        solution: `Since coefficients are real and $2 - i$ is a root, then $2 + i$ must also be a root.

**Roots:** $3$, $2 - i$, $2 + i$

**Step 1:** Write factors
$$(x - 3)(x - (2 - i))(x - (2 + i))$$

**Step 2:** Multiply the complex factors first
$$(x - 2 + i)(x - 2 - i)$$
$$= [(x - 2) + i][(x - 2) - i]$$
$$= (x - 2)^2 - i^2$$
$$= (x - 2)^2 + 1$$
$$= x^2 - 4x + 4 + 1$$
$$= x^2 - 4x + 5$$

**Step 3:** Multiply by $(x - 3)$
$$(x - 3)(x^2 - 4x + 5)$$
$$= x^3 - 4x^2 + 5x - 3x^2 + 12x - 15$$
$$= x^3 - 7x^2 + 17x - 15$$

**Answer:** $P(x) = x^3 - 7x^2 + 17x - 15$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'How many roots does a degree n polynomial have?', back: 'Exactly n roots (counting multiplicity and complex roots)' },
      { topicId: topic5.id, front: 'What is the Complex Conjugate Theorem?', back: 'If a+bi is a root (real coefficients), then a-bi is also a root' },
      { topicId: topic5.id, front: 'What does the Rational Root Theorem tell us?', back: 'Possible rational roots: p/q where p divides constant, q divides leading coefficient' }
    ]
  })

  console.log('✓ Created topic: Polynomial Theorems (3 examples, 3 flashcards)')

  // Topic: Rational Equations
  const topic6 = await prisma.topic.upsert({
    where: { slug: 'rational-equations-algebra2' },
    update: {},
    create: {
      slug: 'rational-equations-algebra2',
      title: 'Solving Rational Equations',
      description: 'Equations with rational expressions',
      order: 3,
      categoryId: rational!.id,
      textContent: `# Solving Rational Equations

## Strategy

1. **Find the LCD** of all denominators
2. **Multiply** both sides by the LCD
3. **Solve** the resulting equation
4. **Check** for extraneous solutions

## Extraneous Solutions

Solutions that make any denominator zero are **extraneous** and must be rejected.

**Always check your answers!**

## Common Types

**Proportion:**
$$\\frac{a}{b} = \\frac{c}{d}$$ → Cross multiply: $ad = bc$

**Work Problems:**
$$\\frac{1}{t_1} + \\frac{1}{t_2} = \\frac{1}{t_{together}}$$

**Rate Problems:**
$$\\text{Time} = \\frac{\\text{Distance}}{\\text{Rate}}$$

## Example

Solve: $\\frac{3}{x} + \\frac{2}{x-1} = 5$

**LCD:** $x(x - 1)$

Multiply both sides:
$$3(x - 1) + 2x = 5x(x - 1)$$
$$3x - 3 + 2x = 5x^2 - 5x$$
$$5x - 3 = 5x^2 - 5x$$
$$0 = 5x^2 - 10x + 3$$

Use quadratic formula to solve.`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic6.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $\\frac{x}{3} = \\frac{5}{2}$',
        solution: `Cross multiply:
$$2x = 3 \\cdot 5$$
$$2x = 15$$
$$x = \\frac{15}{2}$$

**Check:** $\\frac{15/2}{3} = \\frac{15}{6} = \\frac{5}{2}$ ✓

**Answer:** $x = \\frac{15}{2}$ or $7.5$`
      },
      {
        topicId: topic6.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $\\frac{1}{x} + \\frac{1}{x+2} = \\frac{1}{2}$',
        solution: `**LCD:** $2x(x + 2)$

Multiply both sides by LCD:
$$2x(x + 2) \\cdot \\frac{1}{x} + 2x(x + 2) \\cdot \\frac{1}{x+2} = 2x(x + 2) \\cdot \\frac{1}{2}$$

$$2(x + 2) + 2x = x(x + 2)$$
$$2x + 4 + 2x = x^2 + 2x$$
$$4x + 4 = x^2 + 2x$$
$$0 = x^2 - 2x - 4$$

Use quadratic formula: $a = 1, b = -2, c = -4$
$$x = \\frac{2 \\pm \\sqrt{4 + 16}}{2} = \\frac{2 \\pm \\sqrt{20}}{2} = \\frac{2 \\pm 2\\sqrt{5}}{2} = 1 \\pm \\sqrt{5}$$

**Answer:** $x = 1 + \\sqrt{5}$ or $x = 1 - \\sqrt{5}$`
      },
      {
        topicId: topic6.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $\\frac{6}{x-2} = \\frac{x}{x-2} + 1$',
        solution: `**LCD:** $x - 2$

Multiply both sides:
$$6 = x + (x - 2)$$
$$6 = x + x - 2$$
$$6 = 2x - 2$$
$$8 = 2x$$
$$x = 4$$

**Check:** Does $x = 4$ make any denominator zero?
$x - 2 = 4 - 2 = 2 \\neq 0$ ✓

Verify: $\\frac{6}{2} = \\frac{4}{2} + 1$ → $3 = 2 + 1$ ✓

**Answer:** $x = 4$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic6.id, front: 'What is an extraneous solution?', back: 'A solution that makes a denominator zero (must be rejected)' },
      { topicId: topic6.id, front: 'First step in solving a rational equation?', back: 'Find the LCD of all denominators' },
      { topicId: topic6.id, front: 'Why must you always check solutions?', back: 'To eliminate extraneous solutions that make denominators zero' }
    ]
  })

  console.log('✓ Created topic: Solving Rational Equations (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added more comprehensive Algebra 2 content!')
  console.log('   New categories: 2 (Sequences/Series, Complex Numbers)')
  console.log('   New topics: 6')
  console.log('   Total example problems added: 18')
  console.log('   Total flashcards added: 18')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
