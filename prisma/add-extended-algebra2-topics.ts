import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding extended Algebra 2 topics...')

  const algebra2Course = await prisma.course.findUnique({
    where: { slug: 'algebra-2' }
  })

  if (!algebra2Course) {
    throw new Error('Algebra 2 course not found')
  }

  // Get existing categories
  const polynomials = await prisma.category.findUnique({
    where: { slug: 'algebra2-polynomial-functions' }
  })

  const expLog = await prisma.category.findUnique({
    where: { slug: 'algebra2-exponential-logarithmic' }
  })

  // NEW CATEGORY: Radical Functions
  const radicals = await prisma.category.upsert({
    where: { slug: 'algebra2-radical-functions' },
    update: {},
    create: {
      slug: 'algebra2-radical-functions',
      name: 'Radical Functions',
      order: 5,
      courseId: algebra2Course.id
    }
  })

  // Topic: Radical Equations
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'radical-equations-algebra2' },
    update: {},
    create: {
      slug: 'radical-equations-algebra2',
      title: 'Solving Radical Equations',
      description: 'Equations containing radicals',
      order: 1,
      categoryId: radicals.id,
      textContent: `# Solving Radical Equations

## Strategy

1. **Isolate** the radical on one side
2. **Raise both sides** to the appropriate power
3. **Solve** the resulting equation
4. **Check** for extraneous solutions

## Why Check?

Squaring both sides can introduce extraneous solutions.

**Always substitute back into the original equation!**

## Multiple Radicals

If there are two radicals:
1. Isolate one radical
2. Square both sides
3. Isolate the remaining radical
4. Square again
5. Solve and check

## Domain Restrictions

For $\\sqrt{x}$: must have $x \\geq 0$

For $\\sqrt[3]{x}$: $x$ can be any real number

## Example

Solve: $\\sqrt{2x + 3} = 5$

Square both sides:
$$2x + 3 = 25$$
$$2x = 22$$
$$x = 11$$

Check: $\\sqrt{2(11) + 3} = \\sqrt{25} = 5$ ✓`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $\\sqrt{x + 5} = 4$',
        solution: `Square both sides:
$$x + 5 = 16$$

Solve for $x$:
$$x = 11$$

**Check:** $\\sqrt{11 + 5} = \\sqrt{16} = 4$ ✓

**Answer:** $x = 11$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $\\sqrt{3x - 2} + 4 = 10$',
        solution: `**Step 1:** Isolate the radical
$$\\sqrt{3x - 2} = 6$$

**Step 2:** Square both sides
$$3x - 2 = 36$$

**Step 3:** Solve
$$3x = 38$$
$$x = \\frac{38}{3}$$

**Check:** $\\sqrt{3(\\frac{38}{3}) - 2} + 4 = \\sqrt{38 - 2} + 4 = \\sqrt{36} + 4 = 6 + 4 = 10$ ✓

**Answer:** $x = \\frac{38}{3}$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $\\sqrt{x + 7} = x - 5$',
        solution: `**Step 1:** Square both sides
$$x + 7 = (x - 5)^2$$
$$x + 7 = x^2 - 10x + 25$$

**Step 2:** Rearrange to standard form
$$0 = x^2 - 11x + 18$$

**Step 3:** Factor
$$0 = (x - 9)(x - 2)$$

**Step 4:** Solve
$$x = 9 \\text{ or } x = 2$$

**Step 5:** Check both solutions

For $x = 9$: $\\sqrt{9 + 7} = \\sqrt{16} = 4$ and $9 - 5 = 4$ ✓

For $x = 2$: $\\sqrt{2 + 7} = \\sqrt{9} = 3$ and $2 - 5 = -3$ ✗

**Answer:** $x = 9$ only (x = 2 is extraneous)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is the first step in solving a radical equation?', back: 'Isolate the radical on one side' },
      { topicId: topic1.id, front: 'Why must you check solutions to radical equations?', back: 'Squaring can introduce extraneous solutions' },
      { topicId: topic1.id, front: 'Solve: $\\sqrt{x} = 7$', back: '$x = 49$ (square both sides)' }
    ]
  })

  console.log('✓ Created topic: Solving Radical Equations (3 examples, 3 flashcards)')

  // Topic: Rational Exponents
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'rational-exponents-algebra2' },
    update: {},
    create: {
      slug: 'rational-exponents-algebra2',
      title: 'Rational Exponents',
      description: 'Converting between radicals and rational exponents',
      order: 2,
      categoryId: radicals.id,
      textContent: `# Rational Exponents

## Definition

A **rational exponent** is a fraction exponent:

$$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$

## Special Cases

$$a^{\\frac{1}{n}} = \\sqrt[n]{a}$$

**Examples:**
- $x^{\\frac{1}{2}} = \\sqrt{x}$
- $x^{\\frac{1}{3}} = \\sqrt[3]{x}$
- $8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2$

## General Form

$$a^{\\frac{m}{n}}$$

- **Numerator** ($m$): power
- **Denominator** ($n$): root

**Example:** $27^{\\frac{2}{3}}$

Method 1: $27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2 = 3^2 = 9$

Method 2: $27^{\\frac{2}{3}} = \\sqrt[3]{27^2} = \\sqrt[3]{729} = 9$

## Negative Rational Exponents

$$a^{-\\frac{m}{n}} = \\frac{1}{a^{\\frac{m}{n}}}$$

**Example:** $16^{-\\frac{3}{4}} = \\frac{1}{16^{\\frac{3}{4}}} = \\frac{1}{(\\sqrt[4]{16})^3} = \\frac{1}{2^3} = \\frac{1}{8}$$

## All Exponent Rules Apply!

- Product: $a^m \\cdot a^n = a^{m+n}$
- Quotient: $\\frac{a^m}{a^n} = a^{m-n}$
- Power: $(a^m)^n = a^{mn}$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Evaluate: $25^{\\frac{1}{2}}$',
        solution: `$$25^{\\frac{1}{2}} = \\sqrt{25} = 5$$

**Answer:** $5$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Simplify: $16^{\\frac{3}{4}}$',
        solution: `**Method 1:** Take the root first, then the power
$$16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$$

**Method 2:** Power first, then root
$$16^{\\frac{3}{4}} = \\sqrt[4]{16^3} = \\sqrt[4]{4096} = 8$$

**Answer:** $8$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Simplify: $\\frac{x^{\\frac{5}{3}}}{x^{\\frac{2}{3}}}$',
        solution: `Use the quotient rule: $\\frac{a^m}{a^n} = a^{m-n}$

$$\\frac{x^{\\frac{5}{3}}}{x^{\\frac{2}{3}}} = x^{\\frac{5}{3} - \\frac{2}{3}}$$

$$= x^{\\frac{3}{3}}$$

$$= x^1 = x$$

**Answer:** $x$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is $a^{\\frac{1}{n}}$?', back: '$\\sqrt[n]{a}$ (nth root of a)' },
      { topicId: topic2.id, front: 'What is $a^{\\frac{m}{n}}$?', back: '$\\sqrt[n]{a^m}$ or $(\\sqrt[n]{a})^m$' },
      { topicId: topic2.id, front: 'Evaluate: $8^{\\frac{2}{3}}$', back: '$4$ (cube root of 8 is 2, then square it)' }
    ]
  })

  console.log('✓ Created topic: Rational Exponents (3 examples, 3 flashcards)')

  // NEW CATEGORY: Matrices
  const matrices = await prisma.category.upsert({
    where: { slug: 'algebra2-matrices' },
    update: {},
    create: {
      slug: 'algebra2-matrices',
      name: 'Matrices',
      order: 6,
      courseId: algebra2Course.id
    }
  })

  // Topic: Matrix Operations
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'matrix-operations-algebra2' },
    update: {},
    create: {
      slug: 'matrix-operations-algebra2',
      title: 'Matrix Operations',
      description: 'Adding, subtracting, and multiplying matrices',
      order: 1,
      categoryId: matrices.id,
      textContent: `# Matrix Operations

## What is a Matrix?

A **matrix** is a rectangular array of numbers.

**Example:** $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$

**Dimensions:** rows × columns (this is a 2×2 matrix)

## Adding Matrices

Add corresponding entries. Matrices must have **same dimensions**.

$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} + \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} a+e & b+f \\\\ c+g & d+h \\end{bmatrix}$$

## Subtracting Matrices

Subtract corresponding entries.

$$\\begin{bmatrix} 5 & 3 \\\\ 2 & 1 \\end{bmatrix} - \\begin{bmatrix} 2 & 1 \\\\ 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 3 & 2 \\\\ 1 & 1 \\end{bmatrix}$$

## Scalar Multiplication

Multiply every entry by the scalar:

$$3\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} = \\begin{bmatrix} 3 & 6 \\\\ 9 & 12 \\end{bmatrix}$$

## Matrix Multiplication

**Not commutative!** $AB \\neq BA$ in general

For $A_{m \\times n}$ and $B_{n \\times p}$:
- Result is $m \\times p$ matrix
- Inner dimensions must match!

**Entry formula:** $(AB)_{ij} = $ (row $i$ of $A$) · (column $j$ of $B$)

**Example:**
$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Add: $\\begin{bmatrix} 2 & 5 \\\\ 1 & 3 \\end{bmatrix} + \\begin{bmatrix} 4 & 1 \\\\ 2 & 6 \\end{bmatrix}$',
        solution: `Add corresponding entries:

$$\\begin{bmatrix} 2+4 & 5+1 \\\\ 1+2 & 3+6 \\end{bmatrix} = \\begin{bmatrix} 6 & 6 \\\\ 3 & 9 \\end{bmatrix}$$

**Answer:** $\\begin{bmatrix} 6 & 6 \\\\ 3 & 9 \\end{bmatrix}$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Multiply: $\\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 6 \\end{bmatrix}$',
        solution: `This is a 2×2 matrix times a 2×1 matrix. Result will be 2×1.

**First entry:** $2(5) + 3(6) = 10 + 18 = 28$

**Second entry:** $1(5) + 4(6) = 5 + 24 = 29$

**Answer:** $\\begin{bmatrix} 28 \\\\ 29 \\end{bmatrix}$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Multiply: $\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 2 & 0 \\\\ 1 & 3 \\end{bmatrix}$',
        solution: `Calculate each entry of the 2×2 result:

**Entry (1,1):** $1(2) + 2(1) = 2 + 2 = 4$

**Entry (1,2):** $1(0) + 2(3) = 0 + 6 = 6$

**Entry (2,1):** $3(2) + 4(1) = 6 + 4 = 10$

**Entry (2,2):** $3(0) + 4(3) = 0 + 12 = 12$

**Answer:** $\\begin{bmatrix} 4 & 6 \\\\ 10 & 12 \\end{bmatrix}$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'Can you add matrices with different dimensions?', back: 'No, matrices must have the same dimensions to add' },
      { topicId: topic3.id, front: 'Is matrix multiplication commutative?', back: 'No, generally AB ≠ BA' },
      { topicId: topic3.id, front: 'What must match for matrix multiplication AB?', back: 'Number of columns in A must equal number of rows in B' }
    ]
  })

  console.log('✓ Created topic: Matrix Operations (3 examples, 3 flashcards)')

  // Topic: Exponential Equations
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'exponential-equations-algebra2' },
    update: {},
    create: {
      slug: 'exponential-equations-algebra2',
      title: 'Solving Exponential Equations',
      description: 'Using properties and logarithms to solve',
      order: 3,
      categoryId: expLog!.id,
      textContent: `# Solving Exponential Equations

## Strategy 1: Same Base

If you can write both sides with the same base, set exponents equal.

**Example:** $2^x = 8$
$$2^x = 2^3$$
$$x = 3$$

## Strategy 2: Take Logarithms

When bases can't match, use logarithms:

**Example:** $3^x = 7$
$$\\ln(3^x) = \\ln(7)$$
$$x \\ln(3) = \\ln(7)$$
$$x = \\frac{\\ln(7)}{\\ln(3)}$$

## Properties Used

**Power Property:**
$$\\log(a^b) = b \\log(a)$$

**One-to-One Property:**
If $b^x = b^y$, then $x = y$

## Common Equations

**Form:** $a \\cdot b^{cx} = d$

**Steps:**
1. Isolate the exponential term
2. Take log of both sides
3. Use power property
4. Solve for $x$

**Example:** $5 \\cdot 2^{3x} = 40$
$$2^{3x} = 8$$
$$2^{3x} = 2^3$$
$$3x = 3$$
$$x = 1$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Solve: $5^x = 125$',
        solution: `Write 125 as a power of 5:
$$5^x = 5^3$$

Since the bases are equal:
$$x = 3$$

**Answer:** $x = 3$`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Solve: $4^x = 20$',
        solution: `The bases don't match easily, so use logarithms:

$$\\ln(4^x) = \\ln(20)$$

Use power property:
$$x \\ln(4) = \\ln(20)$$

Solve for $x$:
$$x = \\frac{\\ln(20)}{\\ln(4)} \\approx 2.161$$

**Answer:** $x = \\frac{\\ln(20)}{\\ln(4)}$ or approximately $2.161$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Solve: $3 \\cdot 2^{x+1} = 48$',
        solution: `**Step 1:** Isolate the exponential
$$2^{x+1} = 16$$

**Step 2:** Write 16 as a power of 2
$$2^{x+1} = 2^4$$

**Step 3:** Set exponents equal
$$x + 1 = 4$$

**Step 4:** Solve
$$x = 3$$

**Check:** $3 \\cdot 2^{3+1} = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$ ✓

**Answer:** $x = 3$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'How do you solve $b^x = b^y$?', back: 'Set exponents equal: x = y' },
      { topicId: topic4.id, front: 'What do you do if bases don\'t match in exponential equation?', back: 'Take the logarithm of both sides' },
      { topicId: topic4.id, front: 'Solve: $2^x = 16$', back: '$x = 4$ (since $2^4 = 16$)' }
    ]
  })

  console.log('✓ Created topic: Solving Exponential Equations (3 examples, 3 flashcards)')

  // Topic: Polynomial Graphs
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'polynomial-graphs-algebra2' },
    update: {},
    create: {
      slug: 'polynomial-graphs-algebra2',
      title: 'Graphing Polynomial Functions',
      description: 'Understanding polynomial behavior and graphs',
      order: 4,
      categoryId: polynomials!.id,
      textContent: `# Graphing Polynomial Functions

## End Behavior

Determined by the **leading term** $a_nx^n$:

**Odd degree:**
- $a_n > 0$: falls left, rises right ↙↗
- $a_n < 0$: rises left, falls right ↖↘

**Even degree:**
- $a_n > 0$: rises both sides ↗↗
- $a_n < 0$: falls both sides ↘↘

## Zeros and Multiplicity

**Zero:** value where $f(x) = 0$ (x-intercept)

**Multiplicity:** how many times the factor appears

**Even multiplicity:** graph touches x-axis and bounces
**Odd multiplicity:** graph crosses x-axis

**Example:** $f(x) = (x - 2)^2(x + 1)$
- Zero at $x = 2$ (multiplicity 2, bounces)
- Zero at $x = -1$ (multiplicity 1, crosses)

## Turning Points

A polynomial of degree $n$ has **at most** $n - 1$ turning points.

## Y-Intercept

Evaluate $f(0)$ to find where graph crosses y-axis.

## Key Features

1. **Degree** determines end behavior
2. **Leading coefficient** affects direction
3. **Zeros** show x-intercepts
4. **Multiplicity** affects crossing behavior`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Describe the end behavior of $f(x) = -2x^4 + 3x^2 - 1$',
        solution: `**Leading term:** $-2x^4$

**Degree:** 4 (even)
**Leading coefficient:** -2 (negative)

For even degree with negative leading coefficient:
- Left end: **falls** (goes to $-\\infty$)
- Right end: **falls** (goes to $-\\infty$)

**Answer:** Falls on both ends ↘↘`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find all zeros and their multiplicities: $f(x) = x^3(x - 2)^2(x + 1)$',
        solution: `Set each factor equal to zero:

**From $x^3$:** 
- Zero at $x = 0$, multiplicity **3** (odd, crosses)

**From $(x - 2)^2$:**
- Zero at $x = 2$, multiplicity **2** (even, bounces)

**From $(x + 1)$:**
- Zero at $x = -1$, multiplicity **1** (odd, crosses)

**Answer:** 
- $x = 0$ (mult. 3, crosses)
- $x = 2$ (mult. 2, bounces)
- $x = -1$ (mult. 1, crosses)`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'What is the maximum number of turning points for $f(x) = 5x^6 - 3x^4 + x^2 - 7$?',
        solution: `The degree of the polynomial is **6**.

A polynomial of degree $n$ has **at most $n - 1$ turning points**.

$$\\text{Max turning points} = 6 - 1 = 5$$

**Answer:** Maximum of 5 turning points`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What determines end behavior of a polynomial?', back: 'The leading term (degree and coefficient sign)' },
      { topicId: topic5.id, front: 'What happens at a zero with even multiplicity?', back: 'The graph bounces off the x-axis' },
      { topicId: topic5.id, front: 'What happens at a zero with odd multiplicity?', back: 'The graph crosses the x-axis' }
    ]
  })

  console.log('✓ Created topic: Graphing Polynomial Functions (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added extended Algebra 2 topics!')
  console.log('   New categories: 2 (Radical Functions, Matrices)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
