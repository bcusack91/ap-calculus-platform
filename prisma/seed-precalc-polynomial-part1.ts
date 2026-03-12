import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Polynomial and Rational Functions (Part 1)...')

  const category = await prisma.category.findUnique({
    where: { slug: 'polynomial-rational-functions' }
  })

  if (!category) {
    throw new Error('Category not found. Please run seed-precalculus-categories.ts first.')
  }

  // Topic 1: Polynomial Functions and End Behavior
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'polynomial-functions-end-behavior' },
    update: {},
    create: {
      title: 'Polynomial Functions and End Behavior',
      slug: 'polynomial-functions-end-behavior',
      description: 'Understanding polynomial functions, their graphs, and how to determine end behavior',
      order: 1,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Polynomial Functions and End Behavior

## What is a Polynomial Function?

A **polynomial function** is a function that can be written in the form:

$$f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0$$

where:
- $n$ is a non-negative integer (the **degree** of the polynomial)
- $a_n, a_{n-1, ..., a_0$ are real numbers (the **coefficients**)
- $a_n \\neq 0$ (the **leading coefficient**)

## Degree and Leading Coefficient

The **degree** is the highest power of $x$ in the polynomial.

The **leading coefficient** is the coefficient of the term with the highest power.

**Example:** $f(x) = 3x^4 - 2x^3 + 5x - 7$
- Degree: 4
- Leading coefficient: 3

## End Behavior

End behavior describes what happens to $f(x)$ as $x \\to \\infty$ and $x \\to -\\infty$.

### End Behavior Rules

The end behavior depends on:
1. The **degree** (even or odd)
2. The **sign of the leading coefficient** (positive or negative)

| Degree | Leading Coefficient | Left End $(x \\to -\\infty)$ | Right End $(x \\to \\infty)$ |
|--------|---------------------|----------------------------|---------------------------|
| Even   | Positive (+)        | $f(x) \\to \\infty$        | $f(x) \\to \\infty$       |
| Even   | Negative (-)        | $f(x) \\to -\\infty$       | $f(x) \\to -\\infty$      |
| Odd    | Positive (+)        | $f(x) \\to -\\infty$       | $f(x) \\to \\infty$       |
| Odd    | Negative (-)        | $f(x) \\to \\infty$        | $f(x) \\to -\\infty$      |

## Key Concepts

1. **Even degree, positive leading coefficient**: Both ends go up (U-shape)
2. **Even degree, negative leading coefficient**: Both ends go down (upside-down U)
3. **Odd degree, positive leading coefficient**: Left goes down, right goes up (/)
4. **Odd degree, negative leading coefficient**: Left goes up, right goes down (\\)

## Zeros and Multiplicity

The **zeros** (or roots) of a polynomial are the values of $x$ where $f(x) = 0$.

The **multiplicity** of a zero is how many times that factor appears.

- **Odd multiplicity**: The graph **crosses** the x-axis
- **Even multiplicity**: The graph **touches** the x-axis and turns around

## Practice Strategy

To analyze a polynomial:
1. Identify the degree and leading coefficient
2. Determine the end behavior
3. Find the zeros and their multiplicities
4. Sketch the general shape of the graph
`,
      exampleProblems: {
        create: [
          {
            question: 'Determine the end behavior of $f(x) = -2x^5 + 3x^4 - x + 7$.',
            solution: `**Solution:**

Step 1: Identify the degree and leading coefficient.
- Degree: 5 (odd)
- Leading coefficient: -2 (negative)

Step 2: Apply the end behavior rules.

Since the degree is **odd** and the leading coefficient is **negative**:
- As $x \\to -\\infty$, $f(x) \\to \\infty$ (left end goes up)
- As $x \\to \\infty$, $f(x) \\to -\\infty$ (right end goes down)

**Answer:** 
$$\\lim_{x \\to -\\infty} f(x) = \\infty \\text{ and } \\lim_{x \\to \\infty} f(x) = -\\infty$$`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Given $f(x) = x^2(x - 3)^3(x + 1)$, find all zeros and their multiplicities, then describe the graph behavior at each zero.',
            solution: `**Solution:**

Step 1: Find the zeros by setting each factor equal to zero.
- $x^2 = 0 \\Rightarrow x = 0$
- $(x - 3)^3 = 0 \\Rightarrow x = 3$
- $(x + 1) = 0 \\Rightarrow x = -1$

Step 2: Determine the multiplicity of each zero.
- $x = 0$: multiplicity **2** (even)
- $x = 3$: multiplicity **3** (odd)
- $x = -1$: multiplicity **1** (odd)

Step 3: Describe behavior at each zero.
- At $x = 0$: The graph **touches** the x-axis and turns around (even multiplicity)
- At $x = 3$: The graph **crosses** the x-axis (odd multiplicity)
- At $x = -1$: The graph **crosses** the x-axis (odd multiplicity)

Step 4: Determine overall end behavior.
- Degree: $2 + 3 + 1 = 6$ (even)
- Leading coefficient: positive (from expanding, the leading term is $x^6$)
- End behavior: Both ends go to $\\infty$

**Answer:** Zeros at $x = -1$ (crosses), $x = 0$ (touches), and $x = 3$ (crosses)`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'Write a polynomial function with zeros at $x = -2$ (multiplicity 2), $x = 1$ (multiplicity 1), and $x = 4$ (multiplicity 1), and end behavior where $f(x) \\to -\\infty$ as $x \\to \\pm\\infty$.',
            solution: `**Solution:**

Step 1: Write the polynomial in factored form using the zeros.

With zeros at $x = -2$ (mult. 2), $x = 1$ (mult. 1), and $x = 4$ (mult. 1):
$$f(x) = a(x + 2)^2(x - 1)(x - 4)$$

Step 2: Determine the sign of the leading coefficient.

Total degree: $2 + 1 + 1 = 4$ (even)

For both ends to go to $-\\infty$ with an even degree, we need a **negative** leading coefficient.

So $a < 0$. We can choose $a = -1$.

$$f(x) = -(x + 2)^2(x - 1)(x - 4)$$

Step 3: Verify (optional - expand to check).

If we expand:
$$f(x) = -(x + 2)^2(x^2 - 5x + 4)$$

The leading term will be $-x^4$, confirming our negative leading coefficient.

**Answer:** $f(x) = -(x + 2)^2(x - 1)(x - 4)$ or any negative constant multiple`,
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
      front: 'What is the degree of the polynomial $f(x) = 5x^7 - 3x^4 + 2x - 9$?',
      back: '7 (the highest power of x)',
    },
    {
      topicId: topic1.id,
      front: 'What is the leading coefficient of $f(x) = -3x^5 + 2x^3 - x + 4$?',
      back: '-3',
    },
    {
      topicId: topic1.id,
      front: 'If a polynomial has an even degree and a positive leading coefficient, what is its end behavior?',
      back: 'Both ends go to positive infinity: $\\lim_{x \\to -\\infty} f(x) = \\infty$ and $\\lim_{x \\to \\infty} f(x) = \\infty$',
    },
    {
      topicId: topic1.id,
      front: 'If a polynomial has an odd degree and a negative leading coefficient, what is its end behavior?',
      back: 'Left end goes to positive infinity, right end goes to negative infinity: $\\lim_{x \\to -\\infty} f(x) = \\infty$ and $\\lim_{x \\to \\infty} f(x) = -\\infty$',
    },
    {
      topicId: topic1.id,
      front: 'What happens at a zero with odd multiplicity?',
      back: 'The graph crosses the x-axis',
    },
    {
      topicId: topic1.id,
      front: 'What happens at a zero with even multiplicity?',
      back: 'The graph touches the x-axis and turns around',
    },
    {
      topicId: topic1.id,
      front: 'What is the multiplicity of the zero $x = 2$ in $f(x) = (x-2)^4(x+1)$?',
      back: '4 (even multiplicity, so the graph touches at x = 2)',
    },
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Rational Functions and Asymptotes
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'rational-functions-asymptotes' },
    update: {},
    create: {
      title: 'Rational Functions and Asymptotes',
      slug: 'rational-functions-asymptotes',
      description: 'Understanding rational functions, vertical asymptotes, horizontal asymptotes, and holes',
      order: 2,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Rational Functions and Asymptotes

## What is a Rational Function?

A **rational function** is a function that can be written as the ratio of two polynomials:

$$f(x) = \\frac{P(x)}{Q(x)}$$

where $P(x)$ and $Q(x)$ are polynomials and $Q(x) \\neq 0$.

**Example:** $f(x) = \\frac{2x^2 - 3x + 1}{x^2 - 4}$

## Domain of Rational Functions

The domain includes all real numbers **except** where the denominator equals zero.

To find the domain:
1. Set the denominator $Q(x) = 0$
2. Solve for $x$
3. Domain is all real numbers except these values

## Vertical Asymptotes

A **vertical asymptote** occurs at values of $x$ where the denominator is zero but the numerator is not zero.

### Finding Vertical Asymptotes

1. Factor both numerator and denominator completely
2. Cancel any common factors (these create holes, not asymptotes)
3. Set remaining denominator factors equal to zero
4. The solutions are the vertical asymptotes

**Example:** $f(x) = \\frac{x + 1}{x - 3}$ has a vertical asymptote at $x = 3$

## Horizontal Asymptotes

A **horizontal asymptote** describes the end behavior of the function as $x \\to \\pm\\infty$.

### Finding Horizontal Asymptotes

Compare the degrees of the numerator and denominator:

1. **If degree of numerator < degree of denominator:**
   - Horizontal asymptote: $y = 0$

2. **If degree of numerator = degree of denominator:**
   - Horizontal asymptote: $y = \\frac{\\text{leading coefficient of numerator}}{\\text{leading coefficient of denominator}}$

3. **If degree of numerator > degree of denominator:**
   - No horizontal asymptote (there may be a slant/oblique asymptote)

## Holes (Removable Discontinuities)

A **hole** occurs when there is a common factor in both numerator and denominator.

### Finding Holes

1. Factor completely
2. Identify common factors
3. Cancel the common factors
4. The zero of the canceled factor gives the x-coordinate of the hole
5. Substitute this x-value into the simplified function to get the y-coordinate

## Summary Table

| Feature | How to Find |
|---------|-------------|
| **Domain** | All real numbers except where denominator = 0 |
| **Vertical Asymptotes** | Zeros of denominator (after canceling) |
| **Horizontal Asymptotes** | Compare degrees of numerator and denominator |
| **Holes** | Common factors that cancel |

## Key Difference

- **Vertical Asymptote**: Function approaches $\\pm\\infty$
- **Hole**: Function is undefined but could be "filled in"
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the domain and vertical asymptotes of $f(x) = \\frac{2x + 1}{x^2 - 9}$.',
            solution: `**Solution:**

Step 1: Find where the denominator equals zero.
$$x^2 - 9 = 0$$
$$(x - 3)(x + 3) = 0$$
$$x = 3 \\text{ or } x = -3$$

Step 2: Determine the domain.

Domain: All real numbers except $x = 3$ and $x = -3$

In interval notation: $(-\\infty, -3) \\cup (-3, 3) \\cup (3, \\infty)$

Step 3: Check if numerator is zero at these points.
- At $x = 3$: $2(3) + 1 = 7 \\neq 0$ ✓
- At $x = -3$: $2(-3) + 1 = -5 \\neq 0$ ✓

Since the numerator is not zero at these points, both are vertical asymptotes.

**Answer:** 
- Domain: $x \\in \\mathbb{R}, x \\neq \\pm 3$
- Vertical asymptotes: $x = 3$ and $x = -3$`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Find the horizontal asymptote of each function: (a) $f(x) = \\frac{3x^2 - 2x + 1}{5x^2 + 4}$, (b) $g(x) = \\frac{2x + 5}{x^3 - 1}$, (c) $h(x) = \\frac{4x^3 + 2x}{2x^2 - 3}$',
            solution: `**Solution:**

**Part a)** $f(x) = \\frac{3x^2 - 2x + 1}{5x^2 + 4}$

Degree of numerator = 2
Degree of denominator = 2
Degrees are **equal**.

Horizontal asymptote: $y = \\frac{3}{5}$ (ratio of leading coefficients)

**Part b)** $g(x) = \\frac{2x + 5}{x^3 - 1}$

Degree of numerator = 1
Degree of denominator = 3
Numerator degree **less than** denominator degree.

Horizontal asymptote: $y = 0$

**Part c)** $h(x) = \\frac{4x^3 + 2x}{2x^2 - 3}$

Degree of numerator = 3
Degree of denominator = 2
Numerator degree **greater than** denominator degree.

**No horizontal asymptote** (there is a slant asymptote instead)

**Answers:** 
- a) $y = \\frac{3}{5}$
- b) $y = 0$
- c) No horizontal asymptote`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'Analyze $f(x) = \\frac{x^2 - 4}{x^2 - x - 6}$. Find all vertical asymptotes and holes.',
            solution: `**Solution:**

Step 1: Factor the numerator and denominator completely.

Numerator: $x^2 - 4 = (x - 2)(x + 2)$

Denominator: $x^2 - x - 6 = (x - 3)(x + 2)$

$$f(x) = \\frac{(x - 2)(x + 2)}{(x - 3)(x + 2)}$$

Step 2: Identify common factors.

Common factor: $(x + 2)$

This means there is a **hole** at $x = -2$.

Step 3: Cancel the common factor.

$$f(x) = \\frac{x - 2}{x - 3}, \\quad x \\neq -2$$

Step 4: Find vertical asymptotes from the simplified function.

Set denominator equal to zero: $x - 3 = 0$

**Vertical asymptote** at $x = 3$

Step 5: Find the y-coordinate of the hole.

Substitute $x = -2$ into the **simplified** function:
$$y = \\frac{-2 - 2}{-2 - 3} = \\frac{-4}{-5} = \\frac{4}{5}$$

**Answer:** 
- Hole at $\\left(-2, \\frac{4}{5}\\right)$
- Vertical asymptote at $x = 3$`,
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
      front: 'What is a rational function?',
      back: 'A function that can be written as $f(x) = \\frac{P(x)}{Q(x)}$ where P(x) and Q(x) are polynomials',
    },
    {
      topicId: topic2.id,
      front: 'How do you find the domain of a rational function?',
      back: 'Find all values where the denominator equals zero, then exclude those from the real numbers',
    },
    {
      topicId: topic2.id,
      front: 'What is a vertical asymptote?',
      back: 'A vertical line x = a where the function approaches ±∞ as x approaches a',
    },
    {
      topicId: topic2.id,
      front: 'If the degree of the numerator is less than the degree of the denominator, what is the horizontal asymptote?',
      back: 'y = 0',
    },
    {
      topicId: topic2.id,
      front: 'If the degree of the numerator equals the degree of the denominator, what is the horizontal asymptote?',
      back: 'y = (leading coefficient of numerator)/(leading coefficient of denominator)',
    },
    {
      topicId: topic2.id,
      front: 'What is a hole (removable discontinuity) in a rational function?',
      back: 'A point where both numerator and denominator have a common factor that cancels',
    },
    {
      topicId: topic2.id,
      front: 'What is the difference between a hole and a vertical asymptote?',
      back: 'A hole occurs when a factor cancels (could be "filled in"), while a vertical asymptote occurs when only the denominator is zero (function goes to ±∞)',
    },
    {
      topicId: topic2.id,
      front: 'For $f(x) = \\frac{x-1}{(x-1)(x+2)}$, is there a vertical asymptote or hole at x = 1?',
      back: 'A hole at x = 1 (the factor (x-1) cancels)',
    },
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Polynomial and Rational Functions (Part 1)!')
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
