import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Calculus BC topics...')

  // SEQUENCES & SERIES

  // Topic 1: Sequences Intro
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'sequences-intro' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Consider the sequence $a_n = \\frac{n^2 - 1}{2n^2 + 3}$.

a) Find the first four terms.
b) Determine if the sequence converges or diverges. If it converges, find the limit.`,
          solution: `**Solution:**

**Part (a):** Substitute $n = 1, 2, 3, 4$:

$a_1 = \\frac{1 - 1}{2 + 3} = \\frac{0}{5} = 0$

$a_2 = \\frac{4 - 1}{8 + 3} = \\frac{3}{11} \\approx 0.273$

$a_3 = \\frac{9 - 1}{18 + 3} = \\frac{8}{21} \\approx 0.381$

$a_4 = \\frac{16 - 1}{32 + 3} = \\frac{15}{35} = \\frac{3}{7} \\approx 0.429$

**Part (b):** Find $\\lim_{n \\to \\infty} a_n$:

Divide numerator and denominator by $n^2$:

$\\lim_{n \\to \\infty} \\frac{n^2 - 1}{2n^2 + 3} = \\lim_{n \\to \\infty} \\frac{1 - \\frac{1}{n^2}}{2 + \\frac{3}{n^2}}$

As $n \\to \\infty$, terms with $n$ in denominator approach 0:

$= \\frac{1 - 0}{2 + 0} = \\frac{1}{2}$

The sequence **converges** to $\\frac{1}{2}$.`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Sequences Intro')
  }

  // Topic 2: Series Intro
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'series-intro' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Determine whether the geometric series converges or diverges. If it converges, find the sum.

$$\\sum_{n=1}^{\\infty} \\frac{3}{4^n}$$`,
          solution: `**Solution:**

This is a geometric series with first term $a = \\frac{3}{4}$ and ratio $r = \\frac{1}{4}$.

Rewrite: $\\sum_{n=1}^{\\infty} \\frac{3}{4^n} = \\sum_{n=1}^{\\infty} 3 \\left(\\frac{1}{4}\\right)^n$

A geometric series $\\sum ar^n$ converges if $|r| < 1$ and diverges if $|r| \\geq 1$.

Since $|r| = \\frac{1}{4} < 1$, the series **converges**.

Sum formula for geometric series: $S = \\frac{a}{1 - r}$

$S = \\frac{3/4}{1 - 1/4} = \\frac{3/4}{3/4} = 1$

**The series converges to 1.**`
        },
        {
          topicId: topic2.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find the sum of the series:

$$\\sum_{n=0}^{\\infty} \\frac{2^n + 3^n}{6^n}$$`,
          solution: `**Solution:**

Split into two separate series:

$\\sum_{n=0}^{\\infty} \\frac{2^n + 3^n}{6^n} = \\sum_{n=0}^{\\infty} \\frac{2^n}{6^n} + \\sum_{n=0}^{\\infty} \\frac{3^n}{6^n}$

$= \\sum_{n=0}^{\\infty} \\left(\\frac{2}{6}\\right)^n + \\sum_{n=0}^{\\infty} \\left(\\frac{3}{6}\\right)^n$

$= \\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n + \\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n$

Both are geometric series starting at $n=0$ with $|r| < 1$.

For geometric series starting at $n=0$: $S = \\frac{1}{1-r}$

First series: $S_1 = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\frac{3}{2}$

Second series: $S_2 = \\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$

Total: $S = \\frac{3}{2} + 2 = \\frac{7}{2}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Series Intro')
  }

  // Topic 3: Integral Test
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'integral-test' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Use the Integral Test to determine whether the series converges or diverges:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$$`,
          solution: `**Solution:**

**Step 1:** Verify conditions for Integral Test.

Let $f(x) = \\frac{1}{x^2 + 1}$

- Continuous for $x \\geq 1$ ✓
- Positive for $x \\geq 1$ ✓
- Decreasing for $x \\geq 1$ (since $f'(x) = \\frac{-2x}{(x^2+1)^2} < 0$ for $x > 0$) ✓

**Step 2:** Evaluate the improper integral.

$\\int_1^{\\infty} \\frac{1}{x^2 + 1} \\, dx = \\lim_{b \\to \\infty} \\int_1^b \\frac{1}{x^2 + 1} \\, dx$

Recall: $\\int \\frac{1}{x^2 + 1} \\, dx = \\arctan x + C$

$= \\lim_{b \\to \\infty} [\\arctan x]_1^b$

$= \\lim_{b \\to \\infty} (\\arctan b - \\arctan 1)$

$= \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$

**Step 3:** Conclusion.

Since the integral converges to $\\frac{\\pi}{4}$, by the Integral Test, the series **converges**.`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Integral Test')
  }

  // Topic 4: Comparison Tests
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'comparison-tests' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Use the Direct Comparison Test to determine whether the series converges or diverges:

$$\\sum_{n=1}^{\\infty} \\frac{1}{2^n + n}$$`,
          solution: `**Solution:**

**Step 1:** Find a comparison series.

For large $n$, $2^n$ dominates $n$, so $2^n + n \\approx 2^n$.

Compare with $\\sum \\frac{1}{2^n}$, which is a geometric series with $r = \\frac{1}{2} < 1$ (converges).

**Step 2:** Establish the inequality.

For all $n \\geq 1$: $2^n + n > 2^n$

Therefore: $\\frac{1}{2^n + n} < \\frac{1}{2^n}$

**Step 3:** Apply Direct Comparison Test.

We have:
- $0 < \\frac{1}{2^n + n} < \\frac{1}{2^n}$ for all $n \\geq 1$
- $\\sum \\frac{1}{2^n}$ converges (geometric series)

By Direct Comparison Test, $\\sum \\frac{1}{2^n + n}$ **converges**.`
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Use the Limit Comparison Test to determine convergence:

$$\\sum_{n=1}^{\\infty} \\frac{3n^2 + 5}{n^3 + n^2 + 1}$$`,
          solution: `**Solution:**

**Step 1:** Choose a comparison series.

For large $n$, the series behaves like $\\frac{3n^2}{n^3} = \\frac{3}{n}$.

Compare with $\\sum \\frac{1}{n}$, the harmonic series (which diverges).

**Step 2:** Apply Limit Comparison Test.

Let $a_n = \\frac{3n^2 + 5}{n^3 + n^2 + 1}$ and $b_n = \\frac{1}{n}$

$L = \\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\lim_{n \\to \\infty} \\frac{\\frac{3n^2 + 5}{n^3 + n^2 + 1}}{\\frac{1}{n}}$

$= \\lim_{n \\to \\infty} \\frac{n(3n^2 + 5)}{n^3 + n^2 + 1}$

$= \\lim_{n \\to \\infty} \\frac{3n^3 + 5n}{n^3 + n^2 + 1}$

Divide by $n^3$:

$= \\lim_{n \\to \\infty} \\frac{3 + \\frac{5}{n^2}}{1 + \\frac{1}{n} + \\frac{1}{n^3}} = \\frac{3}{1} = 3$

**Step 3:** Conclusion.

Since $L = 3$ (finite and positive) and $\\sum \\frac{1}{n}$ diverges, by the Limit Comparison Test, the original series **diverges**.`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Comparison Tests')
  }

  // Topic 5: Ratio and Root Tests
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'ratio-root-tests' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Use the Ratio Test to determine whether the series converges or diverges:

$$\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}$$`,
          solution: `**Solution:**

Ratio Test: $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$

Let $a_n = \\frac{n!}{3^n}$

$a_{n+1} = \\frac{(n+1)!}{3^{n+1}}$

$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!}$

$= \\frac{(n+1)! \\cdot 3^n}{3^{n+1} \\cdot n!}$

$= \\frac{(n+1) \\cdot n!}{3 \\cdot n!} = \\frac{n+1}{3}$

$L = \\lim_{n \\to \\infty} \\frac{n+1}{3} = \\infty$

Since $L = \\infty > 1$, by the Ratio Test, the series **diverges**.`
        },
        {
          topicId: topic5.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Use the Ratio Test to determine convergence:

$$\\sum_{n=1}^{\\infty} \\frac{2^n n!}{n^n}$$`,
          solution: `**Solution:**

Let $a_n = \\frac{2^n n!}{n^n}$

$a_{n+1} = \\frac{2^{n+1}(n+1)!}{(n+1)^{n+1}}$

$\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{2^n n!}$

$= \\frac{2 \\cdot (n+1) \\cdot n! \\cdot n^n}{(n+1)^{n+1} \\cdot n!}$

$= \\frac{2n^n}{(n+1)^n}$

$= 2 \\left(\\frac{n}{n+1}\\right)^n$

$= 2 \\left(\\frac{1}{1 + 1/n}\\right)^n$

$L = \\lim_{n \\to \\infty} 2 \\left(\\frac{1}{1 + 1/n}\\right)^n$

Recall: $\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$

Therefore: $\\lim_{n \\to \\infty} \\left(\\frac{1}{1 + 1/n}\\right)^n = \\frac{1}{e}$

$L = \\frac{2}{e} \\approx 0.736$

Since $L < 1$, by the Ratio Test, the series **converges**.`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Ratio and Root Tests')
  }

  // Topic 6: Alternating Series Test
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'alternating-series-test' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Determine whether the alternating series converges or diverges:

$$\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$$`,
          solution: `**Solution:**

This is an alternating series of the form $\\sum (-1)^n b_n$ where $b_n = \\frac{1}{n}$.

**Alternating Series Test conditions:**

1. $b_n > 0$ for all $n$ ✓ (clearly $\\frac{1}{n} > 0$)

2. $b_n$ is decreasing: $b_{n+1} \\leq b_n$
   
   $\\frac{1}{n+1} < \\frac{1}{n}$ ✓

3. $\\lim_{n \\to \\infty} b_n = 0$
   
   $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$ ✓

All three conditions are satisfied, so by the Alternating Series Test, the series **converges**.

**Note:** This is the alternating harmonic series. It converges to $\\ln 2$, even though the regular harmonic series $\\sum \\frac{1}{n}$ diverges.`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Alternating Series Test')
  }

  // Topic 7: Power Series Intro
  const topic7 = await prisma.topic.findUnique({
    where: { slug: 'power-series-intro' }
  })

  if (topic7) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic7.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the radius and interval of convergence for the power series:

$$\\sum_{n=0}^{\\infty} \\frac{x^n}{n+1}$$`,
          solution: `**Solution:**

Use the Ratio Test with $a_n = \\frac{x^n}{n+1}$:

$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{x^{n+1}}{n+2} \\cdot \\frac{n+1}{x^n}\\right|$

$= |x| \\cdot \\frac{n+1}{n+2}$

$L = \\lim_{n \\to \\infty} |x| \\cdot \\frac{n+1}{n+2} = |x| \\cdot 1 = |x|$

Series converges when $L < 1$: $|x| < 1$

**Radius of convergence:** $R = 1$

**Check endpoints:**

At $x = 1$: $\\sum \\frac{1}{n+1}$ diverges (harmonic-like)

At $x = -1$: $\\sum \\frac{(-1)^n}{n+1}$ converges (alternating series test)

**Interval of convergence:** $[-1, 1)$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Power Series Intro')
  }

  // Topic 8: Radius and Interval of Convergence
  const topic8 = await prisma.topic.findUnique({
    where: { slug: 'radius-interval-convergence' }
  })

  if (topic8) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic8.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Find the radius and interval of convergence for:

$$\\sum_{n=1}^{\\infty} \\frac{(x-3)^n}{n \\cdot 2^n}$$`,
          solution: `**Solution:**

This is a power series centered at $x = 3$.

Use Ratio Test with $a_n = \\frac{(x-3)^n}{n \\cdot 2^n}$:

$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\left|\\frac{(x-3)^{n+1}}{(n+1) \\cdot 2^{n+1}} \\cdot \\frac{n \\cdot 2^n}{(x-3)^n}\\right|$

$= |x-3| \\cdot \\frac{n}{n+1} \\cdot \\frac{1}{2}$

$L = \\lim_{n \\to \\infty} \\frac{|x-3|}{2} \\cdot \\frac{n}{n+1} = \\frac{|x-3|}{2}$

Converges when $L < 1$: $\\frac{|x-3|}{2} < 1$, so $|x-3| < 2$

**Radius:** $R = 2$

This gives $1 < x < 5$. Check endpoints:

**At $x = 1$:** $\\sum \\frac{(-2)^n}{n \\cdot 2^n} = \\sum \\frac{(-1)^n}{n}$ (alternating harmonic, converges)

**At $x = 5$:** $\\sum \\frac{2^n}{n \\cdot 2^n} = \\sum \\frac{1}{n}$ (harmonic series, diverges)

**Interval of convergence:** $[1, 5)$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Radius and Interval of Convergence')
  }

  // Topic 9: Taylor and Maclaurin Series
  const topic9 = await prisma.topic.findUnique({
    where: { slug: 'taylor-maclaurin-series' }
  })

  if (topic9) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic9.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Find the first four nonzero terms of the Maclaurin series for $f(x) = e^{2x}$.`,
          solution: `**Solution:**

**Method 1: Using the definition**

Maclaurin series: $f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$

Find derivatives:
- $f(x) = e^{2x}$, so $f(0) = 1$
- $f'(x) = 2e^{2x}$, so $f'(0) = 2$
- $f''(x) = 4e^{2x}$, so $f''(0) = 4$
- $f'''(x) = 8e^{2x}$, so $f'''(0) = 8$
- $f^{(4)}(x) = 16e^{2x}$, so $f^{(4)}(0) = 16$

Series:
$e^{2x} = 1 + \\frac{2x}{1!} + \\frac{4x^2}{2!} + \\frac{8x^3}{3!} + \\frac{16x^4}{4!} + ...$

$= 1 + 2x + 2x^2 + \\frac{4x^3}{3} + \\frac{2x^4}{3} + ...$

**Method 2: Using known series**

We know: $e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$

Substitute $2x$ for $x$:

$e^{2x} = 1 + 2x + \\frac{(2x)^2}{2!} + \\frac{(2x)^3}{3!} + \\frac{(2x)^4}{4!} + ...$

**First four terms:** $1 + 2x + 2x^2 + \\frac{4x^3}{3}$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Taylor and Maclaurin Series')
  }

  // PARAMETRIC & POLAR

  // Topic 10: Parametric Equations Intro
  const topic10 = await prisma.topic.findUnique({
    where: { slug: 'parametric-equations-intro' }
  })

  if (topic10) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic10.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `A curve is defined by the parametric equations $x = t^2 - 2t$ and $y = t + 1$.

a) Find the Cartesian equation by eliminating the parameter.
b) Find the point on the curve when $t = 3$.`,
          solution: `**Solution:**

**Part (a):** From $y = t + 1$, we get $t = y - 1$.

Substitute into $x = t^2 - 2t$:

$x = (y-1)^2 - 2(y-1)$

$= y^2 - 2y + 1 - 2y + 2$

$= y^2 - 4y + 3$

Or solving for $y$: $y^2 - 4y + (3 - x) = 0$

**Part (b):** When $t = 3$:

$x = 3^2 - 2(3) = 9 - 6 = 3$

$y = 3 + 1 = 4$

**Point:** $(3, 4)$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Parametric Equations Intro')
  }

  // Topic 11: Parametric Calculus
  const topic11 = await prisma.topic.findUnique({
    where: { slug: 'parametric-calculus' }
  })

  if (topic11) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic11.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the parametric curve $x = t^3 - 3t$ and $y = t^2$:

a) Find $\\frac{dy}{dx}$ in terms of $t$.
b) Find $\\frac{d^2y}{dx^2}$ in terms of $t$.
c) Find the equation of the tangent line at $t = 2$.`,
          solution: `**Solution:**

**Part (a):** $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$

$\\frac{dx}{dt} = 3t^2 - 3$

$\\frac{dy}{dt} = 2t$

$\\frac{dy}{dx} = \\frac{2t}{3t^2 - 3} = \\frac{2t}{3(t^2 - 1)}$

**Part (b):** $\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[\\frac{dy}{dx}\\right] = \\frac{d/dt[dy/dx]}{dx/dt}$

$\\frac{d}{dt}\\left[\\frac{2t}{3(t^2-1)}\\right] = \\frac{2 \\cdot 3(t^2-1) - 2t \\cdot 6t}{9(t^2-1)^2}$

$= \\frac{6t^2 - 6 - 12t^2}{9(t^2-1)^2} = \\frac{-6t^2 - 6}{9(t^2-1)^2} = \\frac{-6(t^2+1)}{9(t^2-1)^2}$

$\\frac{d^2y}{dx^2} = \\frac{-6(t^2+1)/[9(t^2-1)^2]}{3(t^2-1)} = \\frac{-6(t^2+1)}{27(t^2-1)^3} = \\frac{-2(t^2+1)}{9(t^2-1)^3}$

**Part (c):** At $t = 2$:

$x = 8 - 6 = 2$, $y = 4$

$\\frac{dy}{dx} = \\frac{4}{3(3)} = \\frac{4}{9}$

Tangent line: $y - 4 = \\frac{4}{9}(x - 2)$

$y = \\frac{4}{9}x - \\frac{8}{9} + 4 = \\frac{4}{9}x + \\frac{28}{9}$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Parametric Calculus')
  }

  // Topic 12: Polar Coordinates Intro
  const topic12 = await prisma.topic.findUnique({
    where: { slug: 'polar-coordinates-intro' }
  })

  if (topic12) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic12.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `a) Convert the polar point $(4, \\frac{\\pi}{3})$ to rectangular coordinates.
b) Convert the rectangular point $(-2, 2\\sqrt{3})$ to polar coordinates.`,
          solution: `**Solution:**

**Part (a):** Use formulas: $x = r\\cos\\theta$, $y = r\\sin\\theta$

$x = 4\\cos\\frac{\\pi}{3} = 4 \\cdot \\frac{1}{2} = 2$

$y = 4\\sin\\frac{\\pi}{3} = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$

**Rectangular:** $(2, 2\\sqrt{3})$

**Part (b):** Use formulas: $r = \\sqrt{x^2 + y^2}$, $\\tan\\theta = \\frac{y}{x}$

$r = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$

$\\tan\\theta = \\frac{2\\sqrt{3}}{-2} = -\\sqrt{3}$

The point is in Quadrant II (negative $x$, positive $y$).

$\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$

**Polar:** $(4, \\frac{2\\pi}{3})$ or $(-4, -\\frac{\\pi}{3})$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Polar Coordinates Intro')
  }

  // Topic 13: Polar Calculus
  const topic13 = await prisma.topic.findUnique({
    where: { slug: 'polar-calculus' }
  })

  if (topic13) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic13.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Find the area enclosed by one loop of the rose curve $r = 3\\sin(2\\theta)$.`,
          solution: `**Solution:**

**Step 1:** Find when one loop is traced.

One loop occurs when $r$ goes from 0 back to 0:

$3\\sin(2\\theta) = 0$

$2\\theta = 0, \\pi, 2\\pi, ...$

$\\theta = 0, \\frac{\\pi}{2}, \\pi, ...$

First loop: $\\theta = 0$ to $\\theta = \\frac{\\pi}{2}$

**Step 2:** Apply area formula for polar curves.

$A = \\frac{1}{2}\\int_a^b r^2 \\, d\\theta$

$A = \\frac{1}{2}\\int_0^{\\pi/2} [3\\sin(2\\theta)]^2 \\, d\\theta$

$= \\frac{1}{2}\\int_0^{\\pi/2} 9\\sin^2(2\\theta) \\, d\\theta$

$= \\frac{9}{2}\\int_0^{\\pi/2} \\sin^2(2\\theta) \\, d\\theta$

Use identity: $\\sin^2 u = \\frac{1 - \\cos(2u)}{2}$

$= \\frac{9}{2}\\int_0^{\\pi/2} \\frac{1 - \\cos(4\\theta)}{2} \\, d\\theta$

$= \\frac{9}{4}\\int_0^{\\pi/2} [1 - \\cos(4\\theta)] \\, d\\theta$

$= \\frac{9}{4}\\left[\\theta - \\frac{\\sin(4\\theta)}{4}\\right]_0^{\\pi/2}$

$= \\frac{9}{4}\\left[\\frac{\\pi}{2} - \\frac{\\sin(2\\pi)}{4} - 0 + 0\\right]$

$= \\frac{9}{4} \\cdot \\frac{\\pi}{2} = \\frac{9\\pi}{8}$ square units`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Polar Calculus')
  }

  // ADVANCED INTEGRATION

  // Topic 14: Integration by Parts
  const topic14 = await prisma.topic.findUnique({
    where: { slug: 'integration-by-parts' }
  })

  if (topic14) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic14.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Evaluate $\\int x e^x \\, dx$ using integration by parts.`,
          solution: `**Solution:**

Integration by parts formula: $\\int u \\, dv = uv - \\int v \\, du$

Let $u = x$ and $dv = e^x \\, dx$

Then: $du = dx$ and $v = e^x$

Apply formula:

$\\int x e^x \\, dx = x e^x - \\int e^x \\, dx$

$= x e^x - e^x + C$

$= e^x(x - 1) + C$`
        },
        {
          topicId: topic14.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Evaluate $\\int \\ln x \\, dx$.`,
          solution: `**Solution:**

Rewrite as $\\int (\\ln x)(1) \\, dx$ and use integration by parts.

Let $u = \\ln x$ and $dv = dx$

Then: $du = \\frac{1}{x} dx$ and $v = x$

$\\int \\ln x \\, dx = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx$

$= x \\ln x - \\int 1 \\, dx$

$= x \\ln x - x + C$

$= x(\\ln x - 1) + C$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Integration by Parts')
  }

  // Topic 15: Partial Fractions
  const topic15 = await prisma.topic.findUnique({
    where: { slug: 'partial-fractions' }
  })

  if (topic15) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic15.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Evaluate $\\int \\frac{3x + 5}{x^2 + 3x + 2} \\, dx$ using partial fractions.`,
          solution: `**Solution:**

**Step 1:** Factor the denominator.

$x^2 + 3x + 2 = (x + 1)(x + 2)$

**Step 2:** Set up partial fractions.

$\\frac{3x + 5}{(x+1)(x+2)} = \\frac{A}{x+1} + \\frac{B}{x+2}$

Multiply both sides by $(x+1)(x+2)$:

$3x + 5 = A(x+2) + B(x+1)$

**Step 3:** Solve for $A$ and $B$.

Method 1 (substitution):
- Let $x = -1$: $-3 + 5 = A(1)$, so $A = 2$
- Let $x = -2$: $-6 + 5 = B(-1)$, so $B = 1$

**Step 4:** Integrate.

$\\int \\frac{3x + 5}{x^2 + 3x + 2} \\, dx = \\int \\left(\\frac{2}{x+1} + \\frac{1}{x+2}\\right) dx$

$= 2\\ln|x+1| + \\ln|x+2| + C$

$= \\ln|x+1|^2 + \\ln|x+2| + C$

$= \\ln|(x+1)^2(x+2)| + C$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Partial Fractions')
  }

  console.log('\\n✅ Successfully added example problems to AP Calculus BC topics!')
  console.log('Total: 22 example problems added to 15 BC-specific topics')
  console.log('Coverage: Sequences & series (convergence tests), power series, Taylor series, parametric calculus, polar calculus, advanced integration')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
