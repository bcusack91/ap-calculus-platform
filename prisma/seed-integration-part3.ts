import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Integration micro-lessons - Part 3...')

  // Get the Integration category
  const integrationCategory = await prisma.category.upsert({
    where: { slug: 'integration' },
    update: {},
    create: {
      slug: 'integration',
      name: 'Integration',
      description: 'Antiderivatives and the reverse process of differentiation',
      order: 4,
      icon: '∫',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'riemann-sums',
          'definite-integrals',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Riemann Sums
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'riemann-sums',
      title: 'Riemann Sums and Area Approximation',
      description: 'Approximating area under curves using rectangles',
      order: 5,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 📊 Riemann Sums and Area Approximation

## The Area Problem

How do we find the area under a curve?

**Example**: Find the area between $f(x) = x^2$ and the x-axis from $x = 0$ to $x = 2$.

For simple shapes (rectangles, triangles), we have formulas. But for curves? We need a new approach!

> **💡 Key Idea**: Approximate the area using rectangles, then take the limit as the number of rectangles approaches infinity!

---

## Approximating with Rectangles

### The Basic Strategy

**Step 1**: Divide the interval $[a, b]$ into $n$ subintervals

**Step 2**: On each subinterval, draw a rectangle

**Step 3**: Add up the areas of all rectangles

**Step 4**: Take the limit as $n \\to \\infty$

---

## Partitioning the Interval

### Regular Partition

Divide $[a, b]$ into $n$ equal subintervals:

**Width of each rectangle**:
$$\\Delta x = \\frac{b-a}{n}$$

**Partition points**:
$$x_0 = a, \\quad x_1 = a + \\Delta x, \\quad x_2 = a + 2\\Delta x, \\quad \\ldots, \\quad x_n = b$$

In general:
$$x_i = a + i\\Delta x$$

---

## Types of Riemann Sums

The height of each rectangle depends on where we sample the function!

### Left Riemann Sum

Use the **left endpoint** of each subinterval:

$$L_n = \\sum_{i=0}^{n-1} f(x_i) \\Delta x = f(x_0)\\Delta x + f(x_1)\\Delta x + \\cdots + f(x_{n-1})\\Delta x$$

---

### Right Riemann Sum

Use the **right endpoint** of each subinterval:

$$R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x = f(x_1)\\Delta x + f(x_2)\\Delta x + \\cdots + f(x_n)\\Delta x$$

---

### Midpoint Riemann Sum

Use the **midpoint** of each subinterval:

$$M_n = \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right) \\Delta x$$

---

## Example 1: Computing a Left Riemann Sum

Approximate the area under $f(x) = x^2$ from $x = 0$ to $x = 2$ using 4 rectangles (left endpoints).

**Step 1: Find $\\Delta x$**

$$\\Delta x = \\frac{b-a}{n} = \\frac{2-0}{4} = \\frac{1}{2}$$

---

**Step 2: Find partition points**

$x_0 = 0$

$x_1 = 0 + \\frac{1}{2} = 0.5$

$x_2 = 0.5 + \\frac{1}{2} = 1$

$x_3 = 1 + \\frac{1}{2} = 1.5$

$x_4 = 1.5 + \\frac{1}{2} = 2$

---

**Step 3: Calculate function values at left endpoints**

$f(x_0) = f(0) = 0^2 = 0$

$f(x_1) = f(0.5) = (0.5)^2 = 0.25$

$f(x_2) = f(1) = 1^2 = 1$

$f(x_3) = f(1.5) = (1.5)^2 = 2.25$

---

**Step 4: Calculate Left Riemann Sum**

$$L_4 = [f(x_0) + f(x_1) + f(x_2) + f(x_3)] \\cdot \\Delta x$$

$$= [0 + 0.25 + 1 + 2.25] \\cdot \\frac{1}{2}$$

$$= 3.5 \\cdot 0.5 = 1.75$$

**Answer**: The left Riemann sum approximation is **1.75 square units**.

**Note**: The actual area is $\\frac{8}{3} \\approx 2.67$, so this is an underestimate (because $f$ is increasing).

---

## Example 2: Right Riemann Sum

Same function $f(x) = x^2$ from $x = 0$ to $x = 2$ with 4 rectangles (right endpoints).

**Use the same partition**, but sample at right endpoints:

$f(x_1) = f(0.5) = 0.25$

$f(x_2) = f(1) = 1$

$f(x_3) = f(1.5) = 2.25$

$f(x_4) = f(2) = 4$

---

$$R_4 = [f(x_1) + f(x_2) + f(x_3) + f(x_4)] \\cdot \\Delta x$$

$$= [0.25 + 1 + 2.25 + 4] \\cdot \\frac{1}{2}$$

$$= 7.5 \\cdot 0.5 = 3.75$$

**Answer**: The right Riemann sum approximation is **3.75 square units**.

This is an **overestimate** (because $f$ is increasing and we use right endpoints).

---

## Increasing vs Decreasing Functions

### For Increasing Functions

- **Left sum** underestimates (rectangles below curve)
- **Right sum** overestimates (rectangles above curve)
- **Midpoint sum** is usually more accurate

### For Decreasing Functions

- **Left sum** overestimates
- **Right sum** underestimates
- **Midpoint sum** is usually more accurate

---

## Sigma Notation Review

### Summation Symbol

$$\\sum_{i=1}^{n} a_i = a_1 + a_2 + a_3 + \\cdots + a_n$$

**Read as**: "The sum from $i = 1$ to $n$ of $a_i$"

---

### Useful Formulas

$$\\sum_{i=1}^{n} c = cn$$ (sum of constants)

$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$ (sum of first $n$ integers)

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$ (sum of squares)

$$\\sum_{i=1}^{n} i^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$ (sum of cubes)

---

## Example 3: Using Formulas

Find the right Riemann sum for $f(x) = x$ on $[0, 1]$ with $n$ rectangles, then take the limit.

**Step 1: Find $\\Delta x$**

$$\\Delta x = \\frac{1-0}{n} = \\frac{1}{n}$$

---

**Step 2: Partition points**

$$x_i = 0 + i\\Delta x = \\frac{i}{n}$$

---

**Step 3: Right Riemann sum**

$$R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x = \\sum_{i=1}^{n} f\\left(\\frac{i}{n}\\right) \\cdot \\frac{1}{n}$$

$$= \\sum_{i=1}^{n} \\frac{i}{n} \\cdot \\frac{1}{n} = \\sum_{i=1}^{n} \\frac{i}{n^2}$$

$$= \\frac{1}{n^2} \\sum_{i=1}^{n} i = \\frac{1}{n^2} \\cdot \\frac{n(n+1)}{2}$$

$$= \\frac{n+1}{2n} = \\frac{1}{2} + \\frac{1}{2n}$$

---

**Step 4: Take the limit**

$$\\lim_{n \\to \\infty} R_n = \\lim_{n \\to \\infty} \\left(\\frac{1}{2} + \\frac{1}{2n}\\right) = \\frac{1}{2}$$

**Answer**: The exact area is $\\frac{1}{2}$ square unit.

**Check**: Area of triangle with base 1 and height 1 is $\\frac{1}{2}(1)(1) = \\frac{1}{2}$ ✓

---

## The Definite Integral (Preview)

As $n \\to \\infty$, the Riemann sum approaches the **definite integral**:

$$\\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\Delta x = \\int_a^b f(x)\\,dx$$

This is the **exact area** under the curve!

---

## Properties of Riemann Sums

### More Rectangles = Better Approximation

As $n$ increases (more rectangles, thinner width):
- The approximation gets more accurate
- Left, right, and midpoint sums all approach the same value

### Convergence

For continuous functions on $[a, b]$:
$$\\lim_{n \\to \\infty} L_n = \\lim_{n \\to \\infty} R_n = \\lim_{n \\to \\infty} M_n = \\int_a^b f(x)\\,dx$$

---

## Trapezoidal Rule

Instead of rectangles, use **trapezoids**!

$$T_n = \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$$

**Pattern**: First and last get coefficient 1, all middle terms get coefficient 2.

Often more accurate than left/right/midpoint sums!

---

## Example 4: Trapezoidal Rule

Approximate $\\int_0^2 x^2\\,dx$ using 4 trapezoids.

**Step 1**: $\\Delta x = \\frac{2-0}{4} = 0.5$

Points: $x_0=0, x_1=0.5, x_2=1, x_3=1.5, x_4=2$

Function values: $f(x_0)=0, f(x_1)=0.25, f(x_2)=1, f(x_3)=2.25, f(x_4)=4$

---

**Step 2**: Apply formula

$$T_4 = \\frac{0.5}{2}[0 + 2(0.25) + 2(1) + 2(2.25) + 4]$$

$$= 0.25[0 + 0.5 + 2 + 4.5 + 4]$$

$$= 0.25 \\cdot 11 = 2.75$$

**Actual**: $\\frac{8}{3} \\approx 2.667$

Pretty close! Better than left (1.75) or right (3.75) with same number of rectangles.

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Number of Terms

For $n$ rectangles:
- Left sum uses $x_0, x_1, \\ldots, x_{n-1}$ ($n$ terms)
- Right sum uses $x_1, x_2, \\ldots, x_n$ ($n$ terms)

Don't mix them up!

---

### Mistake 2: Forgetting $\\Delta x$

Each rectangle has **area = height × width**!

Don't forget to multiply by $\\Delta x$.

---

### Mistake 3: Using Wrong Endpoints

**Left** sum: use left endpoints ($x_0$ through $x_{n-1}$)

**Right** sum: use right endpoints ($x_1$ through $x_n$)

---

### Mistake 4: Arithmetic Errors

With multiple terms, it's easy to make calculation mistakes.

**Check**: Does your answer make sense? Is it positive when area should be positive?

---

## Historical Note

Named after **Bernhard Riemann** (1826-1866), who formalized the concept of integration using these sums.

The idea dates back to **Archimedes** (~250 BC) who used "method of exhaustion" to find areas!

---

## The Big Picture

**Riemann sums** are the foundation of the definite integral:

1. **Approximate** area with rectangles
2. **More rectangles** = better approximation
3. **Take the limit** as $n \\to \\infty$
4. **Get exact area** = definite integral

Next, we'll learn the Fundamental Theorem of Calculus, which gives us an easier way to compute these areas!

---

## 📝 Practice Strategy

1. **Find $\\Delta x = \\frac{b-a}{n}$** first
2. **List partition points**: $x_i = a + i\\Delta x$
3. **Identify which endpoints** to use (left, right, or midpoint)
4. **Calculate function values** at those points
5. **Sum and multiply by $\\Delta x$**
6. **Check**: Does the answer make sense given the graph?
7. **For limits**: Use summation formulas, then let $n \\to \\infty$
`,
      exampleProblems: {
        create: [
          {
            question: 'Approximate $\\int_1^3 (2x+1)\\,dx$ using a left Riemann sum with $n=4$ rectangles.',
            solution: `**Step 1: Find $\\Delta x$**

$$\\Delta x = \\frac{b-a}{n} = \\frac{3-1}{4} = \\frac{2}{4} = 0.5$$

---

**Step 2: Find partition points**

$x_0 = 1$

$x_1 = 1 + 0.5 = 1.5$

$x_2 = 1.5 + 0.5 = 2$

$x_3 = 2 + 0.5 = 2.5$

$x_4 = 2.5 + 0.5 = 3$

---

**Step 3: Calculate function values at left endpoints**

$f(x) = 2x + 1$

$f(x_0) = f(1) = 2(1) + 1 = 3$

$f(x_1) = f(1.5) = 2(1.5) + 1 = 4$

$f(x_2) = f(2) = 2(2) + 1 = 5$

$f(x_3) = f(2.5) = 2(2.5) + 1 = 6$

---

**Step 4: Calculate Left Riemann Sum**

$$L_4 = [f(x_0) + f(x_1) + f(x_2) + f(x_3)] \\cdot \\Delta x$$

$$= [3 + 4 + 5 + 6] \\cdot 0.5$$

$$= 18 \\cdot 0.5 = 9$$

**Answer**: The left Riemann sum approximation is **9 square units**.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Use the midpoint Riemann sum with $n=3$ to approximate $\\int_0^3 x^2\\,dx$.',
            solution: `**Step 1: Find $\\Delta x$**

$$\\Delta x = \\frac{3-0}{3} = 1$$

---

**Step 2: Find partition points**

$x_0 = 0, \\quad x_1 = 1, \\quad x_2 = 2, \\quad x_3 = 3$

---

**Step 3: Find midpoints**

Midpoint of $[x_0, x_1]$: $m_1 = \\frac{0+1}{2} = 0.5$

Midpoint of $[x_1, x_2]$: $m_2 = \\frac{1+2}{2} = 1.5$

Midpoint of $[x_2, x_3]$: $m_3 = \\frac{2+3}{2} = 2.5$

---

**Step 4: Calculate function values at midpoints**

$f(x) = x^2$

$f(m_1) = f(0.5) = (0.5)^2 = 0.25$

$f(m_2) = f(1.5) = (1.5)^2 = 2.25$

$f(m_3) = f(2.5) = (2.5)^2 = 6.25$

---

**Step 5: Calculate Midpoint Riemann Sum**

$$M_3 = [f(m_1) + f(m_2) + f(m_3)] \\cdot \\Delta x$$

$$= [0.25 + 2.25 + 6.25] \\cdot 1$$

$$= 8.75$$

**Answer**: The midpoint Riemann sum approximation is **8.75 square units**.

**Note**: The actual value is $\\int_0^3 x^2\\,dx = \\frac{x^3}{3}\\Big|_0^3 = 9$, so this is quite accurate!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the exact value of $\\int_0^1 x^2\\,dx$ by taking the limit of a right Riemann sum as $n \\to \\infty$.',
            solution: `**Step 1: Set up the right Riemann sum**

$$\\Delta x = \\frac{1-0}{n} = \\frac{1}{n}$$

$$x_i = 0 + i \\cdot \\frac{1}{n} = \\frac{i}{n}$$

---

**Step 2: Write the sum**

$$R_n = \\sum_{i=1}^{n} f(x_i) \\Delta x = \\sum_{i=1}^{n} f\\left(\\frac{i}{n}\\right) \\cdot \\frac{1}{n}$$

$$= \\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^2 \\cdot \\frac{1}{n}$$

$$= \\sum_{i=1}^{n} \\frac{i^2}{n^2} \\cdot \\frac{1}{n} = \\sum_{i=1}^{n} \\frac{i^2}{n^3}$$

---

**Step 3: Factor out constant**

$$= \\frac{1}{n^3} \\sum_{i=1}^{n} i^2$$

---

**Step 4: Use summation formula**

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

$$R_n = \\frac{1}{n^3} \\cdot \\frac{n(n+1)(2n+1)}{6}$$

$$= \\frac{n(n+1)(2n+1)}{6n^3}$$

---

**Step 5: Simplify**

$$= \\frac{(n+1)(2n+1)}{6n^2} = \\frac{2n^2 + 3n + 1}{6n^2}$$

$$= \\frac{2n^2}{6n^2} + \\frac{3n}{6n^2} + \\frac{1}{6n^2}$$

$$= \\frac{1}{3} + \\frac{1}{2n} + \\frac{1}{6n^2}$$

---

**Step 6: Take the limit**

$$\\lim_{n \\to \\infty} R_n = \\lim_{n \\to \\infty} \\left(\\frac{1}{3} + \\frac{1}{2n} + \\frac{1}{6n^2}\\right)$$

$$= \\frac{1}{3} + 0 + 0 = \\frac{1}{3}$$

**Answer**: $\\int_0^1 x^2\\,dx = \\frac{1}{3}$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is a Riemann sum?',
            back: 'An approximation of the area under a curve using rectangles. Divide $[a,b]$ into $n$ subintervals of width $\\Delta x = \\frac{b-a}{n}$, draw rectangles, and sum their areas. As $n \\to \\infty$, the sum approaches the definite integral.',
            hint: 'Approximating area with rectangles',
          },
          {
            front: 'What\'s the difference between left, right, and midpoint Riemann sums?',
            back: 'They differ in where the rectangle height is sampled. Left: use $f(x_i)$ at left endpoint. Right: use $f(x_{i+1})$ at right endpoint. Midpoint: use $f(\\frac{x_i+x_{i+1}}{2})$ at midpoint. For increasing functions, left underestimates, right overestimates.',
            hint: 'Where you sample the height',
          },
          {
            front: 'What are the summation formulas for $\\sum i$, $\\sum i^2$, and $\\sum i^3$?',
            back: '$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$, $\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$, $\\sum_{i=1}^{n} i^3 = [\\frac{n(n+1)}{2}]^2$. Used for computing exact areas via limits of Riemann sums.',
            hint: 'Sum formulas for 1st, 2nd, and 3rd powers',
          },
          {
            front: 'What is the Trapezoidal Rule?',
            back: '$T_n = \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]$. Uses trapezoids instead of rectangles. First and last terms get coefficient 1, all middle terms get coefficient 2. Often more accurate than rectangular methods.',
            hint: 'Trapezoids instead of rectangles',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Definite Integrals and FTC
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'definite-integrals',
      title: 'Definite Integrals and the Fundamental Theorem',
      description: 'The connection between derivatives and integrals',
      order: 6,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🎯 Definite Integrals and the Fundamental Theorem

## The Definite Integral

The **definite integral** represents the exact area under a curve from $x = a$ to $x = b$:

$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\Delta x$$

> **💡 Key Idea**: The definite integral is the limit of Riemann sums as the number of rectangles approaches infinity!

---

## Notation

$$\\int_a^b f(x)\\,dx$$

**Components**:
- $\\int$ - integral symbol
- $a$ - **lower limit** of integration
- $b$ - **upper limit** of integration
- $f(x)$ - **integrand**
- $dx$ - with respect to $x$

**Read as**: "The integral from $a$ to $b$ of $f(x)$ with respect to $x$"

---

## Definite vs Indefinite Integrals

### Indefinite Integral

$$\\int f(x)\\,dx = F(x) + C$$

- No limits
- Result is a **function** (family of antiderivatives)
- Includes $+C$

### Definite Integral

$$\\int_a^b f(x)\\,dx = \\text{number}$$

- Has limits $a$ and $b$
- Result is a **number** (area)
- No $+C$ needed

---

## The Fundamental Theorem of Calculus

This is one of the most important theorems in all of mathematics! It connects derivatives and integrals.

### Part 1 (FTC1)

If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:

$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

**In words**: To evaluate a definite integral, find an antiderivative, then subtract its values at the endpoints!

---

### Notation for FTC1

We write $F(x)\\Big|_a^b$ or $[F(x)]_a^b$ to mean $F(b) - F(a)$

**Example**:
$$\\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{2^3}{3} - \\frac{0^3}{3} = \\frac{8}{3} - 0 = \\frac{8}{3}$$

---

## Using FTC to Evaluate Integrals

### Step-by-Step Process

**Step 1**: Find an antiderivative $F(x)$ of $f(x)$

(Don't include $+C$ for definite integrals!)

**Step 2**: Evaluate $F(b)$ and $F(a)$

**Step 3**: Subtract: $F(b) - F(a)$

---

## Example 1: Basic Application

Evaluate $\\int_0^2 x^2\\,dx$

**Step 1: Find antiderivative**

$$F(x) = \\frac{x^3}{3}$$

---

**Step 2: Apply FTC**

$$\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2$$

$$= \\frac{2^3}{3} - \\frac{0^3}{3}$$

$$= \\frac{8}{3} - 0 = \\frac{8}{3}$$

**Answer**: $\\frac{8}{3}$ square units

---

## Example 2: With Multiple Terms

Evaluate $\\int_1^3 (2x + 1)\\,dx$

**Step 1: Find antiderivative**

$$F(x) = x^2 + x$$

---

**Step 2: Apply FTC**

$$\\int_1^3 (2x+1)\\,dx = [x^2 + x]_1^3$$

$$= (3^2 + 3) - (1^2 + 1)$$

$$= (9 + 3) - (1 + 1)$$

$$= 12 - 2 = 10$$

**Answer**: $10$ square units

---

## Example 3: Trigonometric

Evaluate $\\int_0^{\\pi} \\sin x\\,dx$

**Step 1: Find antiderivative**

$$F(x) = -\\cos x$$

---

**Step 2: Apply FTC**

$$\\int_0^{\\pi} \\sin x\\,dx = [-\\cos x]_0^{\\pi}$$

$$= -\\cos(\\pi) - (-\\cos(0))$$

$$= -(-1) - (-1)$$

$$= 1 + 1 = 2$$

**Answer**: $2$ square units

---

## Properties of Definite Integrals

### Property 1: Constant Multiple

$$\\int_a^b k \\cdot f(x)\\,dx = k\\int_a^b f(x)\\,dx$$

---

### Property 2: Sum/Difference

$$\\int_a^b [f(x) \\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx$$

---

### Property 3: Reversing Limits

$$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$$

Swapping limits changes the sign!

---

### Property 4: Zero Width

$$\\int_a^a f(x)\\,dx = 0$$

No area when limits are the same!

---

### Property 5: Additivity

$$\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx$$

You can split integrals at any point!

---

## Example 4: Using Properties

Given $\\int_0^2 f(x)\\,dx = 5$ and $\\int_2^4 f(x)\\,dx = 3$, find $\\int_0^4 f(x)\\,dx$.

**Solution**:

Using additivity property:

$$\\int_0^4 f(x)\\,dx = \\int_0^2 f(x)\\,dx + \\int_2^4 f(x)\\,dx$$

$$= 5 + 3 = 8$$

---

## Area and Signed Area

### Signed Area

The definite integral gives **signed area**:
- Area **above** the x-axis: positive
- Area **below** the x-axis: negative

### Example: Area Below Axis

$$\\int_0^{2\\pi} \\sin x\\,dx = [-\\cos x]_0^{2\\pi} = -\\cos(2\\pi) + \\cos(0) = -1 + 1 = 0$$

Why zero? Because area above axis (0 to $\\pi$) cancels area below axis ($\\pi$ to $2\\pi$)!

---

### Finding Total Area

To find **total area** (all positive), split at x-intercepts:

$$\\text{Total Area} = \\int_0^{\\pi} \\sin x\\,dx + \\left|\\int_{\\pi}^{2\\pi} \\sin x\\,dx\\right|$$

$$= 2 + |-2| = 2 + 2 = 4$$

---

## The Second Part of FTC

### FTC Part 2

If $f$ is continuous on $[a, b]$, then:

$$\\frac{d}{dx}\\left[\\int_a^x f(t)\\,dt\\right] = f(x)$$

**In words**: The derivative of an integral with respect to its upper limit is the integrand!

This shows that **differentiation and integration are inverse operations**!

---

## Example 5: Using FTC Part 2

Find $\\frac{d}{dx}\\left[\\int_0^x t^2\\,dt\\right]$

**Solution**:

By FTC Part 2:
$$\\frac{d}{dx}\\left[\\int_0^x t^2\\,dt\\right] = x^2$$

---

**Verification**: Do it the long way:

$$\\int_0^x t^2\\,dt = \\left[\\frac{t^3}{3}\\right]_0^x = \\frac{x^3}{3} - 0 = \\frac{x^3}{3}$$

$$\\frac{d}{dx}\\left[\\frac{x^3}{3}\\right] = \\frac{3x^2}{3} = x^2$$ ✓

---

## Example 6: With Chain Rule

Find $\\frac{d}{dx}\\left[\\int_0^{x^2} \\sin t\\,dt\\right]$

**Solution**:

Upper limit is $x^2$, not just $x$. Need chain rule!

Let $u = x^2$, then by FTC Part 2 and chain rule:

$$\\frac{d}{dx}\\left[\\int_0^{x^2} \\sin t\\,dt\\right] = \\sin(x^2) \\cdot \\frac{d}{dx}[x^2]$$

$$= \\sin(x^2) \\cdot 2x = 2x\\sin(x^2)$$

---

## Average Value of a Function

The **average value** of $f$ on $[a, b]$ is:

$$f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$$

**Think**: Total area divided by width = average height

---

### Example 7: Average Value

Find the average value of $f(x) = x^2$ on $[0, 3]$.

**Solution**:

$$f_{\\text{avg}} = \\frac{1}{3-0}\\int_0^3 x^2\\,dx$$

$$= \\frac{1}{3}\\left[\\frac{x^3}{3}\\right]_0^3$$

$$= \\frac{1}{3} \\cdot \\frac{27}{3} = \\frac{1}{3} \\cdot 9 = 3$$

**Answer**: The average value is $3$.

---

## Mean Value Theorem for Integrals

If $f$ is continuous on $[a, b]$, there exists $c$ in $[a, b]$ such that:

$$\\int_a^b f(x)\\,dx = f(c)(b-a)$$

**In words**: There's a point where the function equals its average value!

$$f(c) = \\frac{1}{b-a}\\int_a^b f(x)\\,dx = f_{\\text{avg}}$$

---

## ⚠️ Common Mistakes

### Mistake 1: Including +C

**WRONG**: $\\int_0^2 x^2\\,dx = \\frac{x^3}{3} + C\\Big|_0^2$

**RIGHT**: $\\int_0^2 x^2\\,dx = \\frac{x^3}{3}\\Big|_0^2$

Definite integrals are numbers, no +C needed!

---

### Mistake 2: Wrong Order of Subtraction

**WRONG**: $F(a) - F(b)$

**RIGHT**: $F(b) - F(a)$ (upper minus lower!)

---

### Mistake 3: Forgetting Negative Areas

If the function dips below the x-axis, the integral can be negative!

For total area, use absolute values or split at zeros.

---

### Mistake 4: Wrong Variable in FTC Part 2

$$\\frac{d}{dx}\\left[\\int_a^x f(t)\\,dt\\right] = f(x)$$

Not $f(t)$! The answer is in terms of $x$ (the upper limit).

---

## Why FTC is Profound

The Fundamental Theorem of Calculus reveals:

**Differentiation and Integration are inverse operations!**

- Integration "undoes" differentiation
- Differentiation "undoes" integration

This connects two seemingly different problems:
- **Area problem** (integration)
- **Tangent problem** (differentiation)

---

## 📝 Practice Strategy

1. **For evaluation**: Find antiderivative, evaluate at limits, subtract
2. **Don't include +C** for definite integrals
3. **Remember**: $F(b) - F(a)$ (upper minus lower)
4. **Check limits**: Is the answer positive/negative as expected?
5. **For FTC Part 2**: Derivative of integral = integrand (watch for chain rule)
6. **For average value**: $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$
7. **For total area**: Split at zeros if function crosses x-axis
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\int_1^4 (3\\sqrt{x} - \\frac{2}{x^2})\\,dx$.',
            solution: `**Step 1: Rewrite using exponents**

$$\\int_1^4 (3x^{1/2} - 2x^{-2})\\,dx$$

---

**Step 2: Find antiderivative**

For $3x^{1/2}$:
$$3 \\cdot \\frac{x^{3/2}}{3/2} = 3 \\cdot \\frac{2x^{3/2}}{3} = 2x^{3/2}$$

For $-2x^{-2}$:
$$-2 \\cdot \\frac{x^{-1}}{-1} = 2x^{-1} = \\frac{2}{x}$$

$$F(x) = 2x^{3/2} + \\frac{2}{x}$$

---

**Step 3: Apply FTC**

$$\\int_1^4 (3\\sqrt{x} - \\frac{2}{x^2})\\,dx = \\left[2x^{3/2} + \\frac{2}{x}\\right]_1^4$$

---

**Step 4: Evaluate at upper limit ($x=4$)**

$$F(4) = 2(4)^{3/2} + \\frac{2}{4} = 2(8) + 0.5 = 16 + 0.5 = 16.5$$

---

**Step 5: Evaluate at lower limit ($x=1$)**

$$F(1) = 2(1)^{3/2} + \\frac{2}{1} = 2(1) + 2 = 4$$

---

**Step 6: Subtract**

$$F(4) - F(1) = 16.5 - 4 = 12.5$$

**Answer**: $\\frac{25}{2}$ or $12.5$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Given $\\int_1^3 f(x)\\,dx = 7$ and $\\int_3^5 f(x)\\,dx = -2$, find $\\int_1^5 f(x)\\,dx$ and $\\int_5^1 f(x)\\,dx$.',
            solution: `**Part 1: Find $\\int_1^5 f(x)\\,dx$**

Use the additivity property:

$$\\int_1^5 f(x)\\,dx = \\int_1^3 f(x)\\,dx + \\int_3^5 f(x)\\,dx$$

$$= 7 + (-2) = 5$$

---

**Part 2: Find $\\int_5^1 f(x)\\,dx$**

Use the property that reversing limits changes the sign:

$$\\int_5^1 f(x)\\,dx = -\\int_1^5 f(x)\\,dx$$

$$= -5$$

---

**Answers**: 
- $\\int_1^5 f(x)\\,dx = 5$
- $\\int_5^1 f(x)\\,dx = -5$`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'Find $\\frac{d}{dx}\\left[\\int_2^{x^3} \\sqrt{1+t^4}\\,dt\\right]$.',
            solution: `**Solution using FTC Part 2 with Chain Rule**

The upper limit is $u = x^3$ (not just $x$), so we need the chain rule!

---

**Step 1: Apply FTC Part 2**

By the Fundamental Theorem Part 2:

$$\\frac{d}{dx}\\left[\\int_2^{x^3} \\sqrt{1+t^4}\\,dt\\right] = \\sqrt{1+(x^3)^4} \\cdot \\frac{d}{dx}[x^3]$$

---

**Step 2: Simplify**

$$= \\sqrt{1+x^{12}} \\cdot 3x^2$$

$$= 3x^2\\sqrt{1+x^{12}}$$

---

**Answer**: $3x^2\\sqrt{1+x^{12}}$

**Key idea**: When the upper limit is a function of $x$ (not just $x$), multiply by the derivative of that function (chain rule)!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'State the Fundamental Theorem of Calculus (Part 1).',
            back: 'If $f$ is continuous on $[a,b]$ and $F$ is an antiderivative of $f$, then $\\int_a^b f(x)\\,dx = F(b) - F(a)$. To evaluate a definite integral: find antiderivative, evaluate at endpoints, subtract (upper minus lower).',
            hint: 'Connects antiderivatives to definite integrals',
          },
          {
            front: 'What\'s the difference between definite and indefinite integrals?',
            back: 'Indefinite: $\\int f(x)\\,dx = F(x) + C$ (no limits, result is function with +C). Definite: $\\int_a^b f(x)\\,dx = $ number (has limits, result is area, no +C). Definite gives signed area under curve.',
            hint: 'One has limits and gives a number',
          },
          {
            front: 'State the Fundamental Theorem of Calculus (Part 2).',
            back: 'If $f$ is continuous, then $\\frac{d}{dx}\\left[\\int_a^x f(t)\\,dt\\right] = f(x)$. The derivative of an integral (with respect to upper limit) equals the integrand. Shows differentiation and integration are inverse operations!',
            hint: 'Derivative of integral equals integrand',
          },
          {
            front: 'What is the average value formula for a function?',
            back: '$f_{avg} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$. Total area divided by width gives average height. By MVT for integrals, there exists $c$ where $f(c) = f_{avg}$ (function equals its average somewhere).',
            hint: 'Integral divided by width of interval',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Integration micro-lessons!')
  console.log('\nTopics created:')
  console.log('  5. Riemann Sums and Area Approximation')
  console.log('  6. Definite Integrals and the Fundamental Theorem')
  console.log('\n🎉 Core integration concepts complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
