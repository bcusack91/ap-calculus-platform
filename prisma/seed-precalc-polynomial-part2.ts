import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Polynomial and Rational Functions (Part 2)...')

  const category = await prisma.category.findUnique({
    where: { slug: 'polynomial-rational-functions' }
  })

  if (!category) {
    throw new Error('Category not found. Please run seed-precalculus-categories.ts first.')
  }

  // Topic 3: Polynomial Division and Remainder Theorem
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'polynomial-division-remainder-theorem' },
    update: {},
    create: {
      title: 'Polynomial Division and Remainder Theorem',
      slug: 'polynomial-division-remainder-theorem',
      description: 'Understanding polynomial long division, synthetic division, and the Remainder and Factor Theorems',
      order: 3,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Polynomial Division and Remainder Theorem

## Why Divide Polynomials?

Polynomial division helps us:
- Factor polynomials
- Find zeros of polynomials
- Simplify rational expressions
- Analyze polynomial behavior

## Long Division of Polynomials

The process is similar to long division with numbers.

### Steps for Polynomial Long Division

1. **Arrange** both polynomials in descending order of powers
2. **Divide** the leading term of the dividend by the leading term of the divisor
3. **Multiply** the result by the divisor
4. **Subtract** from the dividend
5. **Bring down** the next term
6. **Repeat** until the degree of the remainder is less than the degree of the divisor

### Example Format

$$\\frac{\\text{dividend}}{\\text{divisor}} = \\text{quotient} + \\frac{\\text{remainder}}{\\text{divisor}}$$

## Synthetic Division

**Synthetic division** is a shortcut for dividing by linear factors of the form $(x - c)$.

### When to Use Synthetic Division

✓ Divisor is $(x - c)$ (linear with leading coefficient 1)
✗ Cannot use for divisors like $(2x - 3)$ or $(x^2 + 1)$

### Steps for Synthetic Division

1. Write $c$ (from $x - c$) outside the box
2. Write coefficients of the dividend inside
3. Bring down the first coefficient
4. Multiply by $c$, add to next coefficient
5. Repeat across all coefficients
6. Last number is the remainder

### Example Setup

Dividing $f(x)$ by $(x - c)$:

$$\\begin{array}{c|cccc}
c & a_n & a_{n-1} & \\cdots & a_0 \\\\
  &     & ca_n    & \\cdots &  \\\\
\\hline
  & a_n & b_{n-1} & \\cdots & r
\\end{array}$$

The bottom row gives quotient coefficients and remainder $r$.

## The Remainder Theorem

**Remainder Theorem**: When a polynomial $f(x)$ is divided by $(x - c)$, the remainder is $f(c)$.

$$f(x) = (x - c) \\cdot q(x) + r$$

where $r = f(c)$

### Why It Matters

- Quick way to find remainders without full division
- Just evaluate $f(c)$!

## The Factor Theorem

**Factor Theorem**: $(x - c)$ is a factor of $f(x)$ if and only if $f(c) = 0$.

In other words:
- If $f(c) = 0$, then $(x - c)$ divides evenly into $f(x)$
- If the remainder is 0, then $c$ is a zero of $f(x)$

### Applications

1. **Testing for factors**: Check if $f(c) = 0$
2. **Finding zeros**: If $(x - c)$ is a factor, then $c$ is a zero
3. **Factoring**: Use known zeros to write factored form

## Rational Zero Theorem

If $f(x) = a_nx^n + ... + a_0$ has integer coefficients, then any rational zero $\\frac{p}{q}$ must have:

- $p$ divides the constant term $a_0$
- $q$ divides the leading coefficient $a_n$

This gives us a list of **possible** rational zeros to test.

## Complete Factorization Strategy

1. Use Rational Zero Theorem to list possible zeros
2. Test candidates using synthetic division or direct evaluation
3. Once you find a zero $c$, factor out $(x - c)$
4. Repeat on the quotient polynomial
5. Factor completely over the real numbers
`,
      exampleProblems: {
        create: [
          {
            question: 'Use synthetic division to divide $f(x) = 2x^3 - 5x^2 + x + 2$ by $(x - 2)$.',
            solution: `**Solution:**

Step 1: Set up synthetic division with $c = 2$.

The coefficients of $f(x)$ are: $2, -5, 1, 2$

$$\\begin{array}{c|cccc}
2 & 2 & -5 & 1 & 2 \\\\
  &   & 4  & -2 & -2 \\\\
\\hline
  & 2 & -1 & -1 & 0
\\end{array}$$

Step 2: Perform the operations.
- Bring down 2
- Multiply: $2 \\times 2 = 4$, add: $-5 + 4 = -1$
- Multiply: $2 \\times (-1) = -2$, add: $1 + (-2) = -1$
- Multiply: $2 \\times (-1) = -2$, add: $2 + (-2) = 0$

Step 3: Interpret the result.

The bottom row gives: quotient coefficients $2, -1, -1$ and remainder $0$.

**Quotient**: $2x^2 - x - 1$

**Remainder**: $0$

Therefore:
$$f(x) = (x - 2)(2x^2 - x - 1)$$

Since the remainder is 0, $(x - 2)$ is a factor and $x = 2$ is a zero of $f(x)$.

**Answer:** Quotient: $2x^2 - x - 1$, Remainder: $0$`,
            difficulty: 'MEDIUM',
            order: 1,
          },
          {
            question: 'Use the Remainder Theorem to find the remainder when $f(x) = x^4 - 3x^3 + 2x - 5$ is divided by $(x + 1)$.',
            solution: `**Solution:**

The Remainder Theorem states that the remainder when dividing $f(x)$ by $(x - c)$ is $f(c)$.

Step 1: Identify $c$.

We're dividing by $(x + 1) = (x - (-1))$, so $c = -1$.

Step 2: Evaluate $f(-1)$.

$$f(-1) = (-1)^4 - 3(-1)^3 + 2(-1) - 5$$

$$= 1 - 3(-1) - 2 - 5$$

$$= 1 + 3 - 2 - 5$$

$$= -3$$

**Answer:** The remainder is $-3$.

Note: We found this without doing any division!`,
            difficulty: 'EASY',
            order: 2,
          },
          {
            question: 'Find all rational zeros of $f(x) = 2x^3 - x^2 - 13x - 6$ and factor completely.',
            solution: `**Solution:**

Step 1: List possible rational zeros using the Rational Zero Theorem.

Factors of constant term (-6): $\\pm 1, \\pm 2, \\pm 3, \\pm 6$
Factors of leading coefficient (2): $\\pm 1, \\pm 2$

Possible rational zeros: $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$

Step 2: Test candidates.

Try $x = -1$:
$$f(-1) = 2(-1)^3 - (-1)^2 - 13(-1) - 6$$
$$= -2 - 1 + 13 - 6 = 4 \\neq 0$$ ✗

Try $x = 2$:
$$f(2) = 2(2)^3 - (2)^2 - 13(2) - 6$$
$$= 16 - 4 - 26 - 6 = -20 \\neq 0$$ ✗

Try $x = -2$:
$$f(-2) = 2(-2)^3 - (-2)^2 - 13(-2) - 6$$
$$= -16 - 4 + 26 - 6 = 0$$ ✓

Step 3: Use synthetic division with $x = -2$.

$$\\begin{array}{c|cccc}
-2 & 2 & -1 & -13 & -6 \\\\
   &   & -4 & 10  & 6 \\\\
\\hline
   & 2 & -5 & -3  & 0
\\end{array}$$

Quotient: $2x^2 - 5x - 3$

Step 4: Factor the quotient.

$$2x^2 - 5x - 3 = (2x + 1)(x - 3)$$

Step 5: Write complete factorization.

$$f(x) = (x + 2)(2x + 1)(x - 3)$$

**Zeros**: $x = -2, x = -\\frac{1}{2}, x = 3$

**Answer:** Zeros are $-2, -\\frac{1}{2}, 3$; Factored form: $(x + 2)(2x + 1)(x - 3)$`,
            difficulty: 'HARD',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic3.title}`)

  const flashcards3 = [
    {
      topicId: topic3.id,
      front: 'What is the Remainder Theorem?',
      back: 'When $f(x)$ is divided by $(x - c)$, the remainder is $f(c)$',
    },
    {
      topicId: topic3.id,
      front: 'What is the Factor Theorem?',
      back: '$(x - c)$ is a factor of $f(x)$ if and only if $f(c) = 0$',
    },
    {
      topicId: topic3.id,
      front: 'When can you use synthetic division?',
      back: 'Only when dividing by a linear factor $(x - c)$ with leading coefficient 1',
    },
    {
      topicId: topic3.id,
      front: 'What does the Rational Zero Theorem tell us?',
      back: 'Possible rational zeros are $\\frac{p}{q}$ where $p$ divides the constant term and $q$ divides the leading coefficient',
    },
    {
      topicId: topic3.id,
      front: 'In synthetic division, what does the last number represent?',
      back: 'The remainder',
    },
    {
      topicId: topic3.id,
      front: 'If synthetic division gives a remainder of 0, what does that mean?',
      back: 'The divisor is a factor and the value of $c$ is a zero of the polynomial',
    },
  ]

  for (const flashcard of flashcards3) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards3.length} flashcards for ${topic3.title}`)

  // Topic 4: Partial Fraction Decomposition
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'partial-fraction-decomposition' },
    update: {},
    create: {
      title: 'Partial Fraction Decomposition',
      slug: 'partial-fraction-decomposition',
      description: 'Breaking down rational expressions into simpler fractions for integration and analysis',
      order: 4,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Partial Fraction Decomposition

## What is Partial Fraction Decomposition?

**Partial fraction decomposition** is the process of breaking a complex rational expression into a sum of simpler fractions.

Think of it as the reverse of adding fractions!

### Example Concept

$$\\frac{5}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$$

We want to find the values of $A$ and $B$.

## Why Use Partial Fractions?

1. **Simplify integration** (used extensively in Calculus)
2. **Solve differential equations**
3. **Simplify complex expressions**
4. **Inverse Laplace transforms** (engineering)

## When Can We Use It?

**Requirements:**
1. The expression must be a **proper fraction**: degree of numerator < degree of denominator
2. If improper, use long division first to get: quotient + proper fraction

## Cases for Denominator Factorization

### Case 1: Distinct Linear Factors

If the denominator factors as $(x - a_1)(x - a_2)...(x - a_n)$ with all different factors:

$$\\frac{P(x)}{(x - a_1)(x - a_2)...(x - a_n)} = \\frac{A_1}{x - a_1} + \\frac{A_2}{x - a_2} + ... + \\frac{A_n}{x - a_n}$$

### Case 2: Repeated Linear Factors

If $(x - a)$ appears $n$ times:

$$\\frac{P(x)}{(x - a)^n} = \\frac{A_1}{x - a} + \\frac{A_2}{(x - a)^2} + ... + \\frac{A_n}{(x - a)^n}$$

### Case 3: Distinct Irreducible Quadratic Factors

If the denominator has a quadratic that cannot be factored (like $x^2 + 1$):

$$\\frac{P(x)}{(x^2 + bx + c)} = \\frac{Ax + B}{x^2 + bx + c}$$

Note: The numerator is linear $(Ax + B)$, not just a constant!

### Case 4: Repeated Quadratic Factors

Similar to Case 2, but with linear numerators for each power.

## Method for Finding Constants

**Method 1: Clear Denominators and Equate Coefficients**

1. Multiply both sides by the common denominator
2. Expand and collect like terms
3. Equate coefficients of corresponding powers of $x$
4. Solve the system of equations

**Method 2: Substitute Convenient Values**

1. Multiply both sides by the common denominator
2. Substitute strategic values of $x$ to eliminate variables
3. Usually choose $x$ values that make factors equal to zero

## Step-by-Step Process

1. **Check if proper**: If not, use polynomial division first
2. **Factor the denominator** completely
3. **Set up partial fraction form** based on the factors
4. **Clear denominators** by multiplying both sides
5. **Find constants** using substitution or equating coefficients
6. **Write final answer** as sum of partial fractions
`,
      exampleProblems: {
        create: [
          {
            question: 'Decompose into partial fractions: $\\frac{7x - 1}{(x - 2)(x + 3)}$',
            solution: `**Solution:**

Step 1: Set up the partial fraction form.

Since we have two distinct linear factors:
$$\\frac{7x - 1}{(x - 2)(x + 3)} = \\frac{A}{x - 2} + \\frac{B}{x + 3}$$

Step 2: Clear denominators.

Multiply both sides by $(x - 2)(x + 3)$:
$$7x - 1 = A(x + 3) + B(x - 2)$$

Step 3: Find $A$ and $B$ using substitution.

**Let $x = 2$** (makes the $B$ term disappear):
$$7(2) - 1 = A(2 + 3) + B(0)$$
$$14 - 1 = 5A$$
$$13 = 5A$$
$$A = \\frac{13}{5}$$

**Let $x = -3$** (makes the $A$ term disappear):
$$7(-3) - 1 = A(0) + B(-3 - 2)$$
$$-21 - 1 = -5B$$
$$-22 = -5B$$
$$B = \\frac{22}{5}$$

Step 4: Write the final answer.

$$\\frac{7x - 1}{(x - 2)(x + 3)} = \\frac{13/5}{x - 2} + \\frac{22/5}{x + 3}$$

Or: $$= \\frac{13}{5(x - 2)} + \\frac{22}{5(x + 3)}$$

**Answer:** $\\frac{13}{5(x - 2)} + \\frac{22}{5(x + 3)}$`,
            difficulty: 'MEDIUM',
            order: 1,
          },
          {
            question: 'Decompose into partial fractions: $\\frac{3x + 5}{(x + 1)^2}$',
            solution: `**Solution:**

Step 1: Set up the form for repeated linear factors.

Since $(x + 1)$ appears twice:
$$\\frac{3x + 5}{(x + 1)^2} = \\frac{A}{x + 1} + \\frac{B}{(x + 1)^2}$$

Step 2: Clear denominators.

Multiply by $(x + 1)^2$:
$$3x + 5 = A(x + 1) + B$$

Step 3: Expand.
$$3x + 5 = Ax + A + B$$

Step 4: Equate coefficients.

Coefficient of $x$: $3 = A$
Constant term: $5 = A + B$

Step 5: Solve for $B$.
$$5 = 3 + B$$
$$B = 2$$

Step 6: Write the answer.

$$\\frac{3x + 5}{(x + 1)^2} = \\frac{3}{x + 1} + \\frac{2}{(x + 1)^2}$$

**Answer:** $\\frac{3}{x + 1} + \\frac{2}{(x + 1)^2}$`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'Decompose into partial fractions: $\\frac{2x^2 + 3x + 4}{x(x^2 + 4)}$',
            solution: `**Solution:**

Step 1: Identify the factors.

We have:
- One linear factor: $x$
- One irreducible quadratic: $x^2 + 4$ (cannot factor over reals)

Step 2: Set up the partial fraction form.

For the quadratic factor, use a linear numerator:
$$\\frac{2x^2 + 3x + 4}{x(x^2 + 4)} = \\frac{A}{x} + \\frac{Bx + C}{x^2 + 4}$$

Step 3: Clear denominators.

Multiply by $x(x^2 + 4)$:
$$2x^2 + 3x + 4 = A(x^2 + 4) + (Bx + C)(x)$$

Step 4: Expand.
$$2x^2 + 3x + 4 = Ax^2 + 4A + Bx^2 + Cx$$
$$2x^2 + 3x + 4 = (A + B)x^2 + Cx + 4A$$

Step 5: Equate coefficients.

$x^2$: $2 = A + B$
$x^1$: $3 = C$
$x^0$: $4 = 4A$, so $A = 1$

Step 6: Solve for $B$.
$$2 = 1 + B$$
$$B = 1$$

Step 7: Write the answer.

$$\\frac{2x^2 + 3x + 4}{x(x^2 + 4)} = \\frac{1}{x} + \\frac{x + 3}{x^2 + 4}$$

**Answer:** $\\frac{1}{x} + \\frac{x + 3}{x^2 + 4}$`,
            difficulty: 'HARD',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic4.title}`)

  const flashcards4 = [
    {
      topicId: topic4.id,
      front: 'What is partial fraction decomposition?',
      back: 'Breaking a complex rational expression into a sum of simpler fractions',
    },
    {
      topicId: topic4.id,
      front: 'When can you use partial fraction decomposition?',
      back: 'When you have a proper fraction (degree of numerator < degree of denominator)',
    },
    {
      topicId: topic4.id,
      front: 'What is the partial fraction form for distinct linear factors $(x-a)(x-b)$?',
      back: '$\\frac{A}{x-a} + \\frac{B}{x-b}$',
    },
    {
      topicId: topic4.id,
      front: 'What is the partial fraction form for a repeated factor $(x-a)^2$?',
      back: '$\\frac{A}{x-a} + \\frac{B}{(x-a)^2}$',
    },
    {
      topicId: topic4.id,
      front: 'What is the partial fraction form for an irreducible quadratic $x^2 + bx + c$?',
      back: '$\\frac{Ax + B}{x^2 + bx + c}$ (linear numerator)',
    },
    {
      topicId: topic4.id,
      front: 'What are the two main methods for finding constants in partial fractions?',
      back: '1) Equate coefficients, 2) Substitute convenient values of x',
    },
  ]

  for (const flashcard of flashcards4) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards4.length} flashcards for ${topic4.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Polynomial and Rational Functions (Part 2)!')
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
