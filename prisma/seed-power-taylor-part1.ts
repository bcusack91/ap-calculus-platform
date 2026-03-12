import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Power Series & Taylor Series (BC) micro-lessons - Part 1...')

  // Create or get the Power Series & Taylor Series category
  const powerSeriesCategory = await prisma.category.upsert({
    where: { slug: 'power-taylor-series' },
    update: {},
    create: {
      slug: 'power-taylor-series',
      name: 'Power & Taylor Series (BC)',
      description: 'Power series, Taylor series, and Maclaurin series for Calculus BC',
      order: 8,
      icon: '∑',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'power-series-intro',
          'radius-interval-convergence',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Introduction to Power Series
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'power-series-intro',
      title: 'Introduction to Power Series',
      description: 'Understanding power series and their properties',
      order: 1,
      categoryId: powerSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Introduction to Power Series

## What is a Power Series?

A **power series** is an infinite series of the form:

$$\\sum_{n=0}^{\\infty} c_n (x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$$

where:
- $c_n$ are **coefficients** (constants)
- $x$ is a **variable**
- $a$ is the **center**

> **💡 Key Idea**: A power series is like a polynomial with infinitely many terms!

---

## Power Series Centered at $a = 0$

When $a = 0$, we get a **Maclaurin-type power series**:

$$\\sum_{n=0}^{\\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \\cdots$$

This is the most common form!

---

## Example 1: Geometric Series as Power Series

The geometric series:

$$\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots$$

This is a power series with $c_n = 1$ for all $n$, centered at $a = 0$.

**Converges when**: $|x| < 1$

**Sum**: $\\frac{1}{1-x}$ (when $|x| < 1$)

---

## Power Series as Functions

A power series defines a **function**:

$$f(x) = \\sum_{n=0}^{\\infty} c_n (x-a)^n$$

The domain of $f$ is the set of all $x$ values where the series converges.

---

## Example 2: Recognize the Function

What function does $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ represent?

This is the **Taylor series for $e^x$**!

$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

**Converges for all $x$** (we'll prove this later).

---

## Convergence of Power Series

For a given power series $\\sum c_n(x-a)^n$, exactly **one** of the following is true:

1. **Converges only at $x = a$** (trivial case)

2. **Converges for all $x$** (radius of convergence $R = \\infty$)

3. **Converges for $|x - a| < R$** and diverges for $|x - a| > R$

where $R$ is the **radius of convergence**.

---

## The Radius of Convergence

The **radius of convergence** $R$ is:
- $R = 0$ if series only converges at center
- $0 < R < \\infty$ if series converges on an interval
- $R = \\infty$ if series converges for all $x$

**Interval of convergence**: $(a - R, a + R)$ or $[a - R, a + R]$ or variations

(Must check endpoints separately!)

---

## Finding Radius of Convergence

**Use the Ratio Test**:

$$\\frac{1}{R} = \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right|$$

Or equivalently:

$$R = \\lim_{n \\to \\infty} \\left|\\frac{c_n}{c_{n+1}}\\right|$$

(If the limit exists or is $\\infty$)

---

## Example 3: Find Radius

Find the radius of convergence for $\\sum_{n=0}^{\\infty} \\frac{x^n}{n+1}$.

**Use Ratio Test**: Let $a_n = \\frac{x^n}{n+1}$

$$\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\left|\\frac{\\frac{x^{n+1}}{n+2}}{\\frac{x^n}{n+1}}\\right|$$

$$= \\lim_{n \\to \\infty} \\left|x \\cdot \\frac{n+1}{n+2}\\right|$$

$$= |x| \\cdot \\lim_{n \\to \\infty} \\frac{n+1}{n+2} = |x| \\cdot 1 = |x|$$

---

For convergence: $|x| < 1$

**Radius of convergence**: $R = 1$

---

## Example 4: Power Series Centered at $a = 2$

Find the radius of convergence for $\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 3^n}$.

**Use Ratio Test**: Let $a_n = \\frac{(x-2)^n}{n \\cdot 3^n}$

$$\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\left|\\frac{(x-2)^{n+1}}{(n+1) \\cdot 3^{n+1}} \\cdot \\frac{n \\cdot 3^n}{(x-2)^n}\\right|$$

$$= \\lim_{n \\to \\infty} \\left|\\frac{x-2}{3} \\cdot \\frac{n}{n+1}\\right|$$

$$= \\frac{|x-2|}{3} \\cdot 1 = \\frac{|x-2|}{3}$$

---

For convergence: $\\frac{|x-2|}{3} < 1$

$$|x - 2| < 3$$

**Radius of convergence**: $R = 3$

**Center**: $a = 2$

**Interval** (before checking endpoints): $(2-3, 2+3) = (-1, 5)$

---

## Operations on Power Series

If $f(x) = \\sum c_n x^n$ and $g(x) = \\sum d_n x^n$ both converge for $|x| < R$:

### Addition/Subtraction:
$$f(x) \\pm g(x) = \\sum (c_n \\pm d_n) x^n$$

### Scalar Multiplication:
$$k \\cdot f(x) = \\sum (k \\cdot c_n) x^n$$

### Multiplication by $x^m$:
$$x^m f(x) = \\sum c_n x^{n+m}$$

---

## Differentiation of Power Series

**Theorem**: If $f(x) = \\sum_{n=0}^{\\infty} c_n (x-a)^n$ with radius $R > 0$, then:

$$f'(x) = \\sum_{n=1}^{\\infty} n \\cdot c_n (x-a)^{n-1}$$

**Differentiate term by term!**

The derivative has the **same radius of convergence** $R$.

---

## Example 5: Differentiate Power Series

Find the derivative of $f(x) = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.

**Differentiate term by term**:

$$f'(x) = \\sum_{n=1}^{\\infty} \\frac{n \\cdot x^{n-1}}{n!} = \\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{(n-1)!}$$

Reindex with $m = n - 1$:

$$= \\sum_{m=0}^{\\infty} \\frac{x^m}{m!}$$

**Notice**: $f'(x) = f(x)$!

This confirms $f(x) = e^x$ (since $\\frac{d}{dx}[e^x] = e^x$).

---

## Integration of Power Series

**Theorem**: If $f(x) = \\sum_{n=0}^{\\infty} c_n (x-a)^n$ with radius $R > 0$, then:

$$\\int f(x)\\,dx = C + \\sum_{n=0}^{\\infty} \\frac{c_n}{n+1}(x-a)^{n+1}$$

**Integrate term by term!**

The integral has the **same radius of convergence** $R$.

---

## Example 6: Integrate Power Series

Find $\\int \\sum_{n=0}^{\\infty} x^n\\,dx$ for $|x| < 1$.

**Integrate term by term**:

$$\\int \\sum_{n=0}^{\\infty} x^n\\,dx = C + \\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n+1}$$

We know $\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}$ for $|x| < 1$.

So:
$$\\int \\frac{1}{1-x}\\,dx = -\\ln|1-x| + C$$

This matches: $-\\ln(1-x) = \\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n+1} = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}$

---

## Uniqueness of Power Series

**Theorem**: If $\\sum c_n(x-a)^n = \\sum d_n(x-a)^n$ for all $x$ in some interval, then:

$$c_n = d_n \\text{ for all } n$$

**Power series representation is unique!**

---

## Example 7: Find Coefficients

If $\\sum_{n=0}^{\\infty} c_n x^n = \\frac{1}{1-x}$ for $|x| < 1$, find $c_n$.

We know: $\\frac{1}{1-x} = 1 + x + x^2 + x^3 + \\cdots$

By uniqueness: $c_n = 1$ for all $n \\geq 0$.

---

## Substitution in Power Series

Can substitute $u = f(x)$ into a power series!

**Example**: If $\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}$ for $|x| < 1$:

Replace $x$ with $-x^2$:

$$\\sum_{n=0}^{\\infty} (-x^2)^n = \\frac{1}{1-(-x^2)} = \\frac{1}{1+x^2}$$

$$1 - x^2 + x^4 - x^6 + \\cdots = \\frac{1}{1+x^2}$$ (for $|x| < 1$)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Absolute Value

**WRONG**: $|x - 2| < 3$ means $x < 5$

**RIGHT**: $|x - 2| < 3$ means $-3 < x - 2 < 3$, so $-1 < x < 5$

---

### Mistake 2: Not Checking Endpoints

Radius tells you interval is $(a-R, a+R)$, but series might converge at one or both endpoints!

Must check $x = a - R$ and $x = a + R$ separately.

---

### Mistake 3: Wrong Index After Differentiation

When differentiating $\\sum_{n=0}^{\\infty} c_n x^n$:

Get $\\sum_{n=1}^{\\infty} n c_n x^{n-1}$ (starts at $n=1$, not $n=0$!)

The $n=0$ term disappears (constant → 0).

---

### Mistake 4: Confusing Center and Radius

For $\\sum c_n(x-2)^n$ with $R = 3$:
- **Center**: $a = 2$
- **Radius**: $R = 3$  
- **Interval**: $(-1, 5)$ before checking endpoints

Not centered at 0!

---

## 📝 Practice Strategy

1. **Identify center $a$**: Look at $(x - a)^n$
2. **Use Ratio Test**: Find $\\lim|\\frac{a_{n+1}}{a_n}|$, set $< 1$ for convergence
3. **Solve for $x$**: Get $|x - a| < R$
4. **Check endpoints**: Test $x = a \\pm R$ separately using other tests
5. **For differentiation**: Differentiate each term, start sum at $n=1$
6. **For integration**: Integrate each term, add constant
7. **Known series**: Memorize $\\frac{1}{1-x} = \\sum x^n$ and $e^x = \\sum \\frac{x^n}{n!}$
`,
      exampleProblems: {
        create: [
          {
            question: 'Find a power series representation for $f(x) = \\frac{1}{1+x^3}$ and determine its radius of convergence.',
            solution: `**Step 1: Use known geometric series**

We know: $\\frac{1}{1-u} = \\sum_{n=0}^{\\infty} u^n$ for $|u| < 1$

---

**Step 2: Substitute $u = -x^3$**

$$\\frac{1}{1+x^3} = \\frac{1}{1-(-x^3)} = \\sum_{n=0}^{\\infty} (-x^3)^n$$

$$= \\sum_{n=0}^{\\infty} (-1)^n x^{3n}$$

$$= 1 - x^3 + x^6 - x^9 + x^{12} - \\cdots$$

---

**Step 3: Find radius of convergence**

For geometric series, we need $|u| < 1$:

$$|-x^3| < 1$$
$$|x^3| < 1$$
$$|x| < 1$$

**Radius of convergence**: $R = 1$

---

**Answer**: $\\frac{1}{1+x^3} = \\sum_{n=0}^{\\infty} (-1)^n x^{3n}$ for $|x| < 1$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the power series representation for $\\ln(1+x)$ by integrating the series for $\\frac{1}{1+x}$.',
            solution: `**Step 1: Start with known series**

$$\\frac{1}{1+x} = \\frac{1}{1-(-x)} = \\sum_{n=0}^{\\infty} (-x)^n = \\sum_{n=0}^{\\infty} (-1)^n x^n$$

for $|x| < 1$.

---

**Step 2: Integrate both sides**

$$\\int \\frac{1}{1+x}\\,dx = \\int \\sum_{n=0}^{\\infty} (-1)^n x^n\\,dx$$

$$\\ln|1+x| + C = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{n+1}}{n+1}$$

---

**Step 3: Find constant**

At $x = 0$: $\\ln 1 = 0$, and the series sum is 0.

So $C = 0$.

For $-1 < x < 1$: $1 + x > 0$, so $|1+x| = 1+x$.

$$\\ln(1+x) = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{n+1}}{n+1}$$

---

**Step 4: Reindex**

Let $m = n + 1$:

$$\\ln(1+x) = \\sum_{m=1}^{\\infty} (-1)^{m-1} \\frac{x^m}{m}$$

Or more commonly written as:

$$\\ln(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} x^n$$

$$= x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots$$

for $|x| < 1$.

---

**Answer**: $\\ln(1+x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} x^n$ for $|x| < 1$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'If $f(x) = \\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!}$, find $f\'\'(x)$ and identify the function.',
            solution: `**Step 1: Write out first few terms**

$$f(x) = 1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + \\frac{x^6}{6!} + \\cdots$$

---

**Step 2: Find first derivative**

$$f'(x) = \\sum_{n=1}^{\\infty} \\frac{2n \\cdot x^{2n-1}}{(2n)!}$$

$$= \\sum_{n=1}^{\\infty} \\frac{x^{2n-1}}{(2n-1)!}$$

$$= x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\cdots$$

---

**Step 3: Find second derivative**

$$f''(x) = \\sum_{n=1}^{\\infty} \\frac{(2n-1) \\cdot x^{2n-2}}{(2n-1)!}$$

$$= \\sum_{n=1}^{\\infty} \\frac{x^{2n-2}}{(2n-2)!}$$

Reindex with $m = n - 1$:

$$= \\sum_{m=0}^{\\infty} \\frac{x^{2m}}{(2m)!} = f(x)$$

---

**Step 4: Identify the function**

We have $f''(x) = f(x)$ with $f(0) = 1$ and $f'(0) = 0$.

This is the differential equation for $\\cos x$!

But wait, $f(0) = \\cos 0 = 1$ ✓

And $f'(0) = -\\sin 0 = 0$ ✓

Actually, $\\frac{d^2}{dx^2}[\\cos x] = -\\cos x$, not $+\\cos x$.

Let me reconsider...

If $g(x) = \\cosh x = \\frac{e^x + e^{-x}}{2}$, then:

$$\\cosh x = \\sum_{n=0}^{\\infty} \\frac{x^{2n}}{(2n)!}$$

And $\\frac{d^2}{dx^2}[\\cosh x] = \\cosh x$ ✓

---

**Answer**: $f''(x) = f(x)$, and $f(x) = \\cosh x$ (hyperbolic cosine)

Or: $f(x) = \\frac{e^x + e^{-x}}{2}$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is a power series and what is its general form?',
            back: 'Power series: $\\sum_{n=0}^{\\infty} c_n(x-a)^n$ where $c_n$ are coefficients, $x$ is variable, $a$ is center. Like infinite polynomial! When $a=0$: Maclaurin series. Example: $\\sum x^n = \\frac{1}{1-x}$ for $|x|<1$. Converges in interval around center.',
            hint: 'Infinite polynomial centered at a',
          },
          {
            front: 'How do you find the radius of convergence?',
            back: 'Use Ratio Test: $\\frac{1}{R} = \\lim|\\frac{c_{n+1}}{c_n}|$ or apply ratio test to series and solve $|x-a|<R$. Three cases: $R=0$ (converges only at center), $0<R<\\infty$ (converges on interval), $R=\\infty$ (converges everywhere). Must check endpoints separately!',
            hint: 'Ratio test, solve |x-a| < R',
          },
          {
            front: 'How do you differentiate and integrate power series?',
            back: 'Differentiate term by term: $(\\sum c_n x^n)\' = \\sum n c_n x^{n-1}$ (starts at $n=1$). Integrate term by term: $\\int \\sum c_n x^n dx = C + \\sum \\frac{c_n}{n+1}x^{n+1}$. BOTH keep same radius of convergence $R$!',
            hint: 'Term by term, same radius R',
          },
          {
            front: 'What are key power series to memorize?',
            back: 'Geometric: $\\frac{1}{1-x} = \\sum x^n$ ($|x|<1$). Exponential: $e^x = \\sum \\frac{x^n}{n!}$ (all $x$). Natural log: $\\ln(1+x) = \\sum \\frac{(-1)^{n-1}x^n}{n}$ ($|x|<1$). Can substitute to get new series: replace $x$ with $-x$, $x^2$, etc.',
            hint: '1/(1-x), e^x, ln(1+x) - use substitution',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Radius and Interval of Convergence
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'radius-interval-convergence',
      title: 'Radius and Interval of Convergence',
      description: 'Finding where power series converge',
      order: 2,
      categoryId: powerSeriesCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Radius and Interval of Convergence

## Review: Convergence Behavior

For power series $\\sum_{n=0}^{\\infty} c_n(x-a)^n$:
- Converges at center $x = a$ (always!)
- May converge on an interval around $a$
- Diverges outside that interval

The **radius of convergence** $R$ determines this interval.

---

## Three Cases

### Case 1: $R = 0$
Series converges **only at $x = a$**

**Example**: $\\sum_{n=0}^{\\infty} n! x^n$ 

Use Ratio Test: limit is $\\infty$ unless $x = 0$.

---

### Case 2: $0 < R < \\infty$
Series converges for $|x - a| < R$

Diverges for $|x - a| > R$

Endpoints $x = a \\pm R$ need separate testing!

---

### Case 3: $R = \\infty$
Series converges for **all $x$**

**Example**: $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$ (this is $e^x$)

---

## Finding Radius Using Ratio Test

**Step 1**: Apply Ratio Test to $\\sum c_n(x-a)^n$

$$L = \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n}\\right|$$

$$= |x-a| \\cdot \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right|$$

---

**Step 2**: For convergence, need $L < 1$:

$$|x-a| \\cdot \\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| < 1$$

$$|x-a| < \\frac{1}{\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right|}$$

---

**Step 3**: Radius is:

$$R = \\frac{1}{\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right|}$$

(If limit is 0, then $R = \\infty$; if limit is $\\infty$, then $R = 0$)

---

## Example 1: Find Radius

Find the radius of convergence for $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$.

**Use Ratio Test**:

$$c_n = \\frac{1}{n}, \\quad c_{n+1} = \\frac{1}{n+1}$$

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$$

---

$$R = \\frac{1}{1} = 1$$

**Radius of convergence**: $R = 1$

Series converges for $|x| < 1$ (since center is $a = 0$).

---

## Finding the Interval of Convergence

**Step 1**: Find radius $R$ using Ratio Test

**Step 2**: The interval (before endpoints) is $(a - R, a + R)$

**Step 3**: Test endpoints $x = a - R$ and $x = a + R$ separately using:
- Alternating Series Test
- p-Series Test
- Comparison Tests
- etc.

**Step 4**: Write final interval using $($ or $[$ depending on endpoint convergence

---

## Example 2: Find Interval

Find the interval of convergence for $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$.

**From Example 1**: $R = 1$, center $a = 0$

Interval before endpoints: $(-1, 1)$

---

**Test $x = 1$**:

$$\\sum_{n=1}^{\\infty} \\frac{1^n}{n} = \\sum_{n=1}^{\\infty} \\frac{1}{n}$$ (harmonic series)

**Diverges!**

---

**Test $x = -1$**:

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$ (alternating harmonic)

By Alternating Series Test: **Converges!**

---

**Interval of convergence**: $[-1, 1)$

(Includes $-1$, excludes $1$)

---

## Example 3: Both Endpoints Converge

Find the interval of convergence for $\\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$.

**Step 1: Find radius**

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{n^2}{(n+1)^2} = 1$$

$R = 1$

---

**Step 2: Test $x = 1$**

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$$ (p-series with $p = 2$)

**Converges!**

---

**Step 3: Test $x = -1$**

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$$

Converges absolutely (since $\\sum \\frac{1}{n^2}$ converges).

**Converges!**

---

**Interval of convergence**: $[-1, 1]$ (closed interval)

---

## Example 4: Neither Endpoint Converges

Find the interval of convergence for $\\sum_{n=0}^{\\infty} n x^n$.

**Step 1: Find radius**

$$c_n = n, \\quad c_{n+1} = n+1$$

$$\\lim_{n \\to \\infty} \\left|\\frac{n+1}{n}\\right| = 1$$

$R = 1$

---

**Step 2: Test $x = 1$**

$$\\sum_{n=0}^{\\infty} n$$ 

This diverges (terms don't approach 0).

**Diverges!**

---

**Step 3: Test $x = -1$**

$$\\sum_{n=0}^{\\infty} n(-1)^n$$

Terms don't approach 0.

**Diverges!**

---

**Interval of convergence**: $(-1, 1)$ (open interval)

---

## Example 5: Series Centered at $a \\neq 0$

Find the interval of convergence for $\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n \\cdot 2^n}$.

**Step 1: Find radius**

$$c_n = \\frac{1}{n \\cdot 2^n}, \\quad c_{n+1} = \\frac{1}{(n+1) \\cdot 2^{n+1}}$$

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{n \\cdot 2^n}{(n+1) \\cdot 2^{n+1}}$$

$$= \\lim_{n \\to \\infty} \\frac{n}{2(n+1)} = \\frac{1}{2}$$

---

$$R = \\frac{1}{1/2} = 2$$

Center: $a = 3$

Interval before endpoints: $(3-2, 3+2) = (1, 5)$

---

**Test $x = 1$**:

$$\\sum_{n=1}^{\\infty} \\frac{(1-3)^n}{n \\cdot 2^n} = \\sum_{n=1}^{\\infty} \\frac{(-2)^n}{n \\cdot 2^n}$$

$$= \\sum_{n=1}^{\\infty} \\frac{(-1)^n \\cdot 2^n}{n \\cdot 2^n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$

Alternating harmonic series: **Converges!**

---

**Test $x = 5$**:

$$\\sum_{n=1}^{\\infty} \\frac{(5-3)^n}{n \\cdot 2^n} = \\sum_{n=1}^{\\infty} \\frac{2^n}{n \\cdot 2^n} = \\sum_{n=1}^{\\infty} \\frac{1}{n}$$

Harmonic series: **Diverges!**

---

**Interval of convergence**: $[1, 5)$

---

## Example 6: Infinite Radius

Find the interval of convergence for $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.

**Use Ratio Test**:

$$c_n = \\frac{1}{n!}, \\quad c_{n+1} = \\frac{1}{(n+1)!}$$

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{n!}{(n+1)!} = \\lim_{n \\to \\infty} \\frac{1}{n+1} = 0$$

---

$$R = \\frac{1}{0} = \\infty$$

**Interval of convergence**: $(-\\infty, \\infty)$

Series converges for all real $x$!

(This is $e^x$)

---

## Summary Table

| Endpoint $x = a-R$ | Endpoint $x = a+R$ | Interval |
|--------------------|--------------------|----------|
| Diverges | Diverges | $(a-R, a+R)$ |
| Converges | Diverges | $[a-R, a+R)$ |
| Diverges | Converges | $(a-R, a+R]$ |
| Converges | Converges | $[a-R, a+R]$ |

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Test Endpoints

**WRONG**: "Radius is 1, so interval is $(-1, 1)$"

**RIGHT**: Must test both endpoints separately! Could be $(-1,1)$, $[-1,1)$, $(-1,1]$, or $[-1,1]$.

---

### Mistake 2: Wrong Endpoint Values

For $\\sum c_n(x-3)^n$ with $R = 2$:

**WRONG**: Endpoints are $\\pm 2$

**RIGHT**: Endpoints are $3 \\pm 2$, i.e., $x = 1$ and $x = 5$

Center is 3, not 0!

---

### Mistake 3: Testing Wrong Series at Endpoints

At $x = -1$ for $\\sum \\frac{x^n}{n}$:

**WRONG**: Test $\\sum \\frac{x^n}{n}$ (still has $x$ in it!)

**RIGHT**: Substitute $x = -1$: test $\\sum \\frac{(-1)^n}{n}$

---

### Mistake 4: Assuming Symmetry

**WRONG**: "If $x = 1$ diverges, then $x = -1$ also diverges"

**RIGHT**: Must test each endpoint independently!

One might converge while the other diverges.

---

## 📝 Practice Strategy

1. **Find radius $R$**: Use Ratio Test on coefficients
2. **Find center $a$**: From $(x - a)^n$ term
3. **Interval before endpoints**: $(a - R, a + R)$
4. **Test left endpoint $x = a - R$**: Substitute, use appropriate test
5. **Test right endpoint $x = a + R$**: Substitute, use appropriate test
6. **Write final interval**: Use correct bracket notation
7. **Special cases**: $R = 0$ (only at center), $R = \\infty$ (all $x$)
8. **Check your work**: Make sure endpoints make sense with center!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the interval of convergence for $\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x-2)^n}{n \\cdot 5^n}$.',
            solution: `**Step 1: Find radius of convergence**

$$c_n = \\frac{(-1)^n}{n \\cdot 5^n}$$

For ratio test, we use absolute values:

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{\\frac{1}{(n+1) \\cdot 5^{n+1}}}{\\frac{1}{n \\cdot 5^n}}$$

$$= \\lim_{n \\to \\infty} \\frac{n \\cdot 5^n}{(n+1) \\cdot 5^{n+1}} = \\lim_{n \\to \\infty} \\frac{n}{5(n+1)} = \\frac{1}{5}$$

$$R = \\frac{1}{1/5} = 5$$

---

**Step 2: Find interval before endpoints**

Center: $a = 2$

Interval: $(2-5, 2+5) = (-3, 7)$

---

**Step 3: Test left endpoint $x = -3$**

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n (-3-2)^n}{n \\cdot 5^n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^n (-5)^n}{n \\cdot 5^n}$$

$$= \\sum_{n=1}^{\\infty} \\frac{(-1)^n \\cdot (-1)^n \\cdot 5^n}{n \\cdot 5^n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^{2n}}{n} = \\sum_{n=1}^{\\infty} \\frac{1}{n}$$

This is the harmonic series: **Diverges!**

---

**Step 4: Test right endpoint $x = 7$**

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n (7-2)^n}{n \\cdot 5^n} = \\sum_{n=1}^{\\infty} \\frac{(-1)^n \\cdot 5^n}{n \\cdot 5^n}$$

$$= \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$

This is the alternating harmonic series.

By Alternating Series Test: **Converges!**

---

**Answer**: Interval of convergence is $(-3, 7]$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the interval of convergence for $\\sum_{n=0}^{\\infty} \\frac{(x+1)^n}{(n+1)!}$.',
            solution: `**Step 1: Find radius**

$$c_n = \\frac{1}{(n+1)!}$$

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{(n+1)!}{(n+2)!}$$

$$= \\lim_{n \\to \\infty} \\frac{1}{n+2} = 0$$

$$R = \\frac{1}{0} = \\infty$$

---

**Step 2: Conclusion**

Since $R = \\infty$, the series converges for all $x$.

**Interval of convergence**: $(-\\infty, \\infty)$

---

**Note**: No need to test endpoints when $R = \\infty$!`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'Find the interval of convergence for $\\sum_{n=2}^{\\infty} \\frac{x^n}{(\\ln n)^2}$.',
            solution: `**Step 1: Find radius**

$$c_n = \\frac{1}{(\\ln n)^2}$$

For the ratio:

$$\\lim_{n \\to \\infty} \\left|\\frac{c_{n+1}}{c_n}\\right| = \\lim_{n \\to \\infty} \\frac{(\\ln n)^2}{(\\ln(n+1))^2}$$

As $n \\to \\infty$: $\\ln(n+1) \\approx \\ln n$

$$= \\lim_{n \\to \\infty} \\left(\\frac{\\ln n}{\\ln(n+1)}\\right)^2 = 1$$

$$R = 1$$

---

**Step 2: Interval before endpoints**

Center: $a = 0$

Interval: $(-1, 1)$

---

**Step 3: Test $x = 1$**

$$\\sum_{n=2}^{\\infty} \\frac{1}{(\\ln n)^2}$$

Compare to $\\sum \\frac{1}{n}$ using Limit Comparison Test:

$$\\lim_{n \\to \\infty} \\frac{\\frac{1}{(\\ln n)^2}}{\\frac{1}{n}} = \\lim_{n \\to \\infty} \\frac{n}{(\\ln n)^2}$$

This is $\\frac{\\infty}{\\infty}$ form. Use L'Hôpital's (twice):

$$= \\lim_{n \\to \\infty} \\frac{1}{\\frac{2\\ln n}{n}} = \\lim_{n \\to \\infty} \\frac{n}{2\\ln n}$$

(Still $\\frac{\\infty}{\\infty}$, apply L'Hôpital's again)

$$= \\lim_{n \\to \\infty} \\frac{1}{2/n} = \\lim_{n \\to \\infty} \\frac{n}{2} = \\infty$$

Since limit is $\\infty$ and $\\sum \\frac{1}{n}$ diverges:

$\\sum \\frac{1}{(\\ln n)^2}$ **diverges!**

---

**Step 4: Test $x = -1$**

$$\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{(\\ln n)^2}$$

Check Alternating Series Test:
- $a_n = \\frac{1}{(\\ln n)^2} > 0$ ✓
- Decreasing: as $n$ increases, $\\ln n$ increases, so $\\frac{1}{(\\ln n)^2}$ decreases ✓
- $\\lim_{n \\to \\infty} \\frac{1}{(\\ln n)^2} = 0$ ✓

**Converges!**

---

**Answer**: Interval of convergence is $[-1, 1)$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are the three cases for radius of convergence?',
            back: '$R = 0$: converges only at center $x=a$. $0 < R < \\infty$: converges for $|x-a| < R$, diverges for $|x-a| > R$, check endpoints. $R = \\infty$: converges for all $x$. Find $R$ using: $R = \\frac{1}{\\lim|\\frac{c_{n+1}}{c_n}|}$ (if limit is 0, $R=\\infty$; if $\\infty$, $R=0$).',
            hint: 'R=0 (center only), 0<R<∞ (interval), R=∞ (all x)',
          },
          {
            front: 'How do you find interval of convergence?',
            back: '1) Find radius $R$ using Ratio Test. 2) Get interval $(a-R, a+R)$ where $a$ is center. 3) Test BOTH endpoints $x = a \\pm R$ separately (substitute and use AST, p-series, comparison, etc.). 4) Write final interval with correct brackets: $()$ if diverges, $[]$ if converges.',
            hint: 'Find R, then test both endpoints separately',
          },
          {
            front: 'Common mistakes with interval of convergence?',
            back: '1) Forgetting to test endpoints (MUST check both!). 2) Wrong endpoint values (use $a \\pm R$ not $\\pm R$ when $a \\neq 0$). 3) Testing wrong series (substitute actual value, not variable). 4) Assuming symmetry (each endpoint independent). Always test both endpoints!',
            hint: 'Test both endpoints, use a±R, substitute values',
          },
          {
            front: 'What series appear commonly at endpoints?',
            back: 'At $x = \\pm 1$ (when $R=1, a=0$): Often get $\\sum\\frac{1}{n}$ (harmonic, diverges), $\\sum\\frac{(-1)^n}{n}$ (alt. harmonic, converges), $\\sum\\frac{1}{n^2}$ (p-series, converges). Use AST for alternating, p-series test for positive, comparison when complicated.',
            hint: 'Harmonic, alternating harmonic, p-series common',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Power & Taylor Series (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  1. Introduction to Power Series')
  console.log('  2. Radius and Interval of Convergence')
  console.log('\n∑ Power series foundations complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
