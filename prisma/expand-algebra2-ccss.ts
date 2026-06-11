import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Algebra 2 to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'algebra-2' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Complex Numbers',
      categorySlug: 'complex-numbers-alg2',
      order: 2,
      topics: [
        { title: 'The Complex Number System', slug: 'complex-number-system-alg2', order: 0,
          description: 'Define and perform operations with complex numbers including the imaginary unit i.',
          textContent: `# The Complex Number System

## The Imaginary Unit

$$i = \\sqrt{-1} \\quad \\text{so} \\quad i^2 = -1$$

## Complex Numbers

A complex number has the form:
$$a + bi$$
where $a$ is the **real part** and $b$ is the **imaginary part**.

**Examples**: $3 + 2i$, $-1 - 4i$, $5$ (real), $7i$ (pure imaginary)

## Operations with Complex Numbers

### Addition and Subtraction
Combine like terms:
$$(3 + 2i) + (1 - 5i) = 4 - 3i$$
$$(6 - i) - (2 + 3i) = 4 - 4i$$

### Multiplication (FOIL)
$$(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i$$

### Powers of $i$
$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1$$

The pattern repeats every 4 powers. For $i^n$, find $n \\mod 4$.

### Complex Conjugates
The conjugate of $a + bi$ is $a - bi$.

$$(a + bi)(a - bi) = a^2 + b^2$$

### Division
Multiply by the conjugate of the denominator:
$$\\frac{3 + 2i}{1 - i} = \\frac{(3+2i)(1+i)}{(1-i)(1+i)} = \\frac{3+3i+2i+2i^2}{1+1} = \\frac{1+5i}{2} = \\frac{1}{2} + \\frac{5}{2}i$$

## Solving Equations with Complex Solutions

$$x^2 + 4 = 0 \\implies x^2 = -4 \\implies x = \\pm 2i$$

$$x^2 - 6x + 13 = 0$$
$$x = \\frac{6 \\pm \\sqrt{36-52}}{2} = \\frac{6 \\pm \\sqrt{-16}}{2} = \\frac{6 \\pm 4i}{2} = 3 \\pm 2i$$

> **Key insight**: Complex solutions to polynomials with real coefficients always come in **conjugate pairs**.`
        }
      ]
    },
    {
      categoryName: 'Polynomial Functions',
      categorySlug: 'polynomial-functions-alg2',
      order: 3,
      topics: [
        { title: 'Polynomial Operations and Theorems', slug: 'polynomial-operations-theorems-alg2', order: 0,
          description: 'Factor, divide, and analyze polynomial functions using key theorems.',
          textContent: `# Polynomial Operations and Theorems

## Polynomial Basics

$$P(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$$

**Degree**: Highest power of $x$
**Leading coefficient**: $a_n$

## Long Division and Synthetic Division

### Synthetic Division (for dividing by $x - c$)

Divide $2x^3 - 5x^2 + 3x - 1$ by $x - 2$:

Use $c = 2$: Bring down, multiply, add pattern.

Result: $2x^2 - x + 1$ remainder $1$

## Key Theorems

### Remainder Theorem
When $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.

### Factor Theorem
$(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.

### Fundamental Theorem of Algebra
A polynomial of degree $n$ has exactly $n$ roots (counting multiplicity and complex roots).

### Rational Root Theorem
Possible rational roots of $a_nx^n + \\cdots + a_0$ are $\\pm \\frac{\\text{factors of } a_0}{\\text{factors of } a_n}$.

## End Behavior

| Degree | Leading Coeff | Left End | Right End |
|--------|--------------|----------|-----------|
| Even | Positive | $\\uparrow$ | $\\uparrow$ |
| Even | Negative | $\\downarrow$ | $\\downarrow$ |
| Odd | Positive | $\\downarrow$ | $\\uparrow$ |
| Odd | Negative | $\\uparrow$ | $\\downarrow$ |

## Multiplicity of Zeros

- **Odd multiplicity**: Graph crosses the x-axis
- **Even multiplicity**: Graph touches and bounces off the x-axis

**Example**: $f(x) = (x-1)^2(x+3)$
- $x = 1$ (multiplicity 2): bounces
- $x = -3$ (multiplicity 1): crosses

> **Graphing strategy**: Find zeros, determine end behavior, check multiplicity, plot a few extra points.`
        }
      ]
    },
    {
      categoryName: 'Rational and Radical Functions',
      categorySlug: 'rational-radical-functions-alg2',
      order: 4,
      topics: [
        { title: 'Rational Functions and Their Graphs', slug: 'rational-functions-graphs-alg2', order: 0,
          description: 'Analyze rational functions including asymptotes, holes, and intercepts.',
          textContent: `# Rational Functions and Their Graphs

## Rational Functions

$$f(x) = \\frac{P(x)}{Q(x)}$$

where $P(x)$ and $Q(x)$ are polynomials, $Q(x) \\neq 0$.

## Domain

Exclude values where the denominator equals zero.

$$f(x) = \\frac{x+1}{x^2 - 4} = \\frac{x+1}{(x-2)(x+2)}$$

Domain: $x \\neq 2$ and $x \\neq -2$

## Vertical Asymptotes

Occur where denominator $= 0$ (after canceling common factors).

$$f(x) = \\frac{x+1}{(x-2)(x+2)}$$

Vertical asymptotes: $x = 2$ and $x = -2$

## Horizontal Asymptotes

Compare degrees of numerator ($n$) and denominator ($m$):

| Condition | Horizontal Asymptote |
|-----------|---------------------|
| $n < m$ | $y = 0$ |
| $n = m$ | $y = \\frac{a_n}{b_m}$ |
| $n > m$ | None (oblique asymptote) |

## Holes

A **hole** occurs when a factor cancels from both numerator and denominator.

$$f(x) = \\frac{(x-3)(x+1)}{(x-3)(x+2)}$$

Hole at $x = 3$. To find the $y$-coordinate: $f(3) = \\frac{3+1}{3+2} = \\frac{4}{5}$

Hole at $\\left(3, \\frac{4}{5}\\right)$

## Oblique (Slant) Asymptotes

When degree of numerator = degree of denominator + 1, divide:

$$f(x) = \\frac{x^2 + 2x + 1}{x - 1}$$

Long division gives: $y = x + 3$ (oblique asymptote)

## Graphing Steps

1. Factor numerator and denominator
2. Find holes (cancel common factors)
3. Find x-intercepts (numerator = 0)
4. Find y-intercept ($f(0)$)
5. Find vertical asymptotes (remaining denominator = 0)
6. Find horizontal/oblique asymptote
7. Plot additional points as needed

> **Important**: A graph can cross a horizontal asymptote in the middle but approaches it as $x \\to \\pm\\infty$. It can NEVER cross a vertical asymptote.`
        }
      ]
    },
    {
      categoryName: 'Trigonometric Functions',
      categorySlug: 'trig-functions-alg2',
      order: 5,
      topics: [
        { title: 'Introduction to Trigonometry', slug: 'intro-trigonometry-alg2', order: 0,
          description: 'Understand the unit circle, radian measure, and graphs of trigonometric functions.',
          textContent: `# Introduction to Trigonometry

## Radian Measure

$$\\text{Radians} = \\text{Degrees} \\times \\frac{\\pi}{180}$$

| Degrees | Radians |
|---------|---------|
| $0°$ | $0$ |
| $30°$ | $\\frac{\\pi}{6}$ |
| $45°$ | $\\frac{\\pi}{4}$ |
| $60°$ | $\\frac{\\pi}{3}$ |
| $90°$ | $\\frac{\\pi}{2}$ |
| $180°$ | $\\pi$ |
| $360°$ | $2\\pi$ |

## The Unit Circle

A circle with radius 1 centered at the origin. For angle $\\theta$:
$$\\cos \\theta = x\\text{-coordinate} \\quad \\sin \\theta = y\\text{-coordinate}$$

## Key Values

| $\\theta$ | $\\sin \\theta$ | $\\cos \\theta$ | $\\tan \\theta$ |
|-----------|---------------|---------------|---------------|
| $0$ | $0$ | $1$ | $0$ |
| $\\frac{\\pi}{6}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{3}}{3}$ |
| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $\\frac{\\pi}{3}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
| $\\frac{\\pi}{2}$ | $1$ | $0$ | undefined |

## Graphing Trig Functions

### $y = A\\sin(Bx - C) + D$

- **Amplitude**: $|A|$
- **Period**: $\\frac{2\\pi}{|B|}$
- **Phase shift**: $\\frac{C}{B}$
- **Vertical shift**: $D$

### Sine: Starts at 0, goes up
### Cosine: Starts at max, goes down
### Tangent: Has vertical asymptotes, period $\\pi$

## Identities to Know

### Pythagorean Identity
$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$

### Reciprocal Functions
$$\\csc \\theta = \\frac{1}{\\sin \\theta}, \\quad \\sec \\theta = \\frac{1}{\\cos \\theta}, \\quad \\cot \\theta = \\frac{1}{\\tan \\theta}$$

> **Memory for signs**: "All Students Take Calculus" — tells which trig functions are positive in quadrants I, II, III, IV.`
        }
      ]
    },
    {
      categoryName: 'Logarithmic Functions',
      categorySlug: 'logarithmic-functions-alg2',
      order: 6,
      topics: [
        { title: 'Logarithms and Their Properties', slug: 'logarithms-properties-alg2', order: 0,
          description: 'Define logarithms and use logarithmic properties to solve equations.',
          textContent: `# Logarithms and Their Properties

## Definition of Logarithm

$$\\log_b(x) = y \\iff b^y = x$$

"Log base $b$ of $x$ equals $y$" means "$b$ to the $y$ power equals $x$."

**Examples**:
$$\\log_2(8) = 3 \\quad \\text{because} \\quad 2^3 = 8$$
$$\\log_5(25) = 2 \\quad \\text{because} \\quad 5^2 = 25$$
$$\\log_{10}(1000) = 3 \\quad \\text{because} \\quad 10^3 = 1000$$

## Common and Natural Logarithms

- $\\log x = \\log_{10} x$ (common log)
- $\\ln x = \\log_e x$ (natural log, $e \\approx 2.718$)

## Properties of Logarithms

### Product Rule
$$\\log_b(MN) = \\log_b M + \\log_b N$$

### Quotient Rule
$$\\log_b\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N$$

### Power Rule
$$\\log_b(M^p) = p \\cdot \\log_b M$$

### Change of Base
$$\\log_b x = \\frac{\\log x}{\\log b} = \\frac{\\ln x}{\\ln b}$$

## Special Values

$$\\log_b 1 = 0 \\quad \\log_b b = 1 \\quad \\log_b b^x = x \\quad b^{\\log_b x} = x$$

## Solving Logarithmic Equations

**Example 1**: $\\log_2(x-1) = 4$
$$x - 1 = 2^4 = 16 \\implies x = 17$$

**Example 2**: $\\log x + \\log(x+3) = 1$
$$\\log[x(x+3)] = 1 \\implies x(x+3) = 10$$
$$x^2 + 3x - 10 = 0 \\implies (x+5)(x-2) = 0$$
$$x = 2 \\quad (x = -5 \\text{ is extraneous — can't log a negative})$$

## Solving Exponential Equations with Logs

$$3^{2x} = 15$$
$$2x \\cdot \\ln 3 = \\ln 15$$
$$x = \\frac{\\ln 15}{2 \\ln 3} \\approx 1.232$$

## Graphs

$y = \\log_b x$ is the **inverse** of $y = b^x$:
- **Domain**: $x > 0$
- **Range**: All real numbers
- **Vertical asymptote**: $x = 0$
- Passes through $(1, 0)$ and $(b, 1)$

> **Key relationship**: Logarithms and exponentials are INVERSES. If you're stuck, convert between forms!`
        }
      ]
    },
    {
      categoryName: 'Sequences, Series, and Probability',
      categorySlug: 'sequences-series-prob-alg2',
      order: 7,
      topics: [
        { title: 'Series and Probability', slug: 'series-probability-alg2', order: 0,
          description: 'Work with arithmetic and geometric series, and calculate probabilities using counting principles.',
          textContent: `# Series and Probability

## Arithmetic Series

$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}[2a_1 + (n-1)d]$$

**Example**: Sum of first 50 positive integers:
$$S_{50} = \\frac{50}{2}(1 + 50) = 25 \\cdot 51 = 1275$$

## Geometric Series

### Finite:
$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r} \\quad (r \\neq 1)$$

### Infinite (converges when $|r| < 1$):
$$S = \\frac{a_1}{1 - r}$$

**Example**: $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$
$$S = \\frac{1}{1 - \\frac{1}{2}} = 2$$

## Sigma Notation

$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + \\cdots + a_n$$

## Counting Principles

### Fundamental Counting Principle
If there are $m$ ways to do one thing and $n$ ways to do another, there are $m \\times n$ ways to do both.

### Permutations (order matters)
$$P(n, r) = \\frac{n!}{(n-r)!}$$

### Combinations (order doesn't matter)
$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

## Probability

$$P(E) = \\frac{\\text{number of favorable outcomes}}{\\text{total outcomes}}$$

### Addition Rule
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

### Multiplication Rule (Independent Events)
$$P(A \\cap B) = P(A) \\cdot P(B)$$

### Binomial Probability
$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

> **Permutation vs Combination**: Does the ORDER matter? If arranging things in a LINE → permutation. If choosing a GROUP → combination.`
        }
      ]
    }
  ]

  let topicCount = 0
  for (const exp of expansions) {
    const cat = await prisma.category.create({
      data: { name: exp.categoryName, slug: exp.categorySlug, order: exp.order, courseId: course.id }
    })
    console.log('  📂 Created category: ' + exp.categoryName)
    for (const t of exp.topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: cat.id }
      })
      console.log('    ✅ ' + t.slug)
      topicCount++
    }
  }
  console.log('\n🎉 Algebra 2 expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
