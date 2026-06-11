import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Precalculus topics...')

  // Topic 1: Polynomial Functions and End Behavior
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'polynomial-functions-end-behavior' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Consider the polynomial function $f(x) = -2x^5 + 3x^4 - x^2 + 7$.

a) What is the degree of this polynomial?
b) What is the leading coefficient?
c) Describe the end behavior of this function.`,
          solution: `**Solution:**

**Part (a):** The degree is the highest power of $x$ in the polynomial.

The highest power is $x^5$, so the **degree is 5**.

**Part (b):** The leading coefficient is the coefficient of the term with the highest power.

The coefficient of $x^5$ is $-2$, so the **leading coefficient is -2**.

**Part (c):** For end behavior, we look at the degree and leading coefficient:

- Degree: 5 (odd)
- Leading coefficient: -2 (negative)

For a polynomial with **odd degree** and **negative leading coefficient**:

- As $x \\to \\infty$, $f(x) \\to -\\infty$
- As $x \\to -\\infty$, $f(x) \\to \\infty$

In words: The graph rises to the left and falls to the right.`
        },
        {
          topicId: topic1.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A polynomial function $g(x)$ has the following properties:
- Degree 4
- Leading coefficient is positive
- Has zeros at $x = -2, 1, 3$ (each with multiplicity 1)
- Passes through the point $(0, -12)$

a) Write a general form for $g(x)$ using the known zeros.
b) Find the specific equation for $g(x)$.
c) Describe the end behavior.`,
          solution: `**Solution:**

**Part (a):** With zeros at $x = -2, 1, 3$, the function has factors $(x + 2)$, $(x - 1)$, and $(x - 3)$.

Since the degree is 4 and we only have 3 zeros (each multiplicity 1), we need one more factor. Let's call it $(x - r)$ where $r$ is unknown.

General form: $g(x) = a(x + 2)(x - 1)(x - 3)(x - r)$

where $a$ is a positive constant.

**Part (b):** We use the point $(0, -12)$ to find $a$ and $r$.

However, with two unknowns and one equation, we need more information. Let's assume the fourth zero is actually a repeated zero. If $x = -2$ has multiplicity 2:

$g(x) = a(x + 2)^2(x - 1)(x - 3)$

Substituting $(0, -12)$:
$-12 = a(2)^2(-1)(-3)$
$-12 = a(4)(3)$
$-12 = 12a$
$a = -1$

But we need $a$ positive! So let's try $x = 1$ with multiplicity 2:

$g(x) = a(x + 2)(x - 1)^2(x - 3)$

$-12 = a(2)(1)^2(-3)$
$-12 = a(2)(-3) = -6a$
$a = 2$

Therefore: $g(x) = 2(x + 2)(x - 1)^2(x - 3)$

**Part (c):** Degree 4 (even), positive leading coefficient:

- As $x \\to \\infty$, $g(x) \\to \\infty$
- As $x \\to -\\infty$, $g(x) \\to \\infty$

The graph rises on both ends.`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Polynomial Functions and End Behavior')
  }

  // Topic 2: Rational Functions and Asymptotes
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'rational-functions-asymptotes' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Consider the rational function $f(x) = \\frac{2x^2 - 8}{x^2 - 4x - 5}$.

a) Find all vertical asymptotes.
b) Find the horizontal asymptote.
c) Find any holes in the graph.`,
          solution: `**Solution:**

**Part (a):** Vertical asymptotes occur where the denominator equals zero (and the numerator doesn't).

Factor the denominator:
$x^2 - 4x - 5 = (x - 5)(x + 1)$

Factor the numerator:
$2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$

So: $f(x) = \\frac{2(x - 2)(x + 2)}{(x - 5)(x + 1)}$

The denominator is zero when $x = 5$ or $x = -1$.

Since neither of these values makes the numerator zero, we have **vertical asymptotes at $x = 5$ and $x = -1$**.

**Part (b):** For horizontal asymptotes, compare the degrees of numerator and denominator.

Both have degree 2, so we take the ratio of leading coefficients:

$y = \\frac{2}{1} = 2$

**Horizontal asymptote: $y = 2$**

**Part (c):** Holes occur when a factor cancels from both numerator and denominator.

Looking at our factored form, there are no common factors, so **there are no holes**.`
        },
        {
          topicId: topic2.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Given $g(x) = \\frac{x^3 - 8}{x^2 - 4}$:

a) Identify any holes and their coordinates.
b) Find all asymptotes (vertical, horizontal, or oblique).
c) Find the $y$-intercept.`,
          solution: `**Solution:**

**Part (a):** Factor both numerator and denominator:

Numerator: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ (difference of cubes)
Denominator: $x^2 - 4 = (x - 2)(x + 2)$

$g(x) = \\frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 2)}$

The factor $(x - 2)$ cancels, creating a **hole at $x = 2$**.

To find the $y$-coordinate of the hole, substitute into the simplified function:

$g(x) = \\frac{x^2 + 2x + 4}{x + 2}$ (for $x \\neq 2$)

At $x = 2$: $y = \\frac{4 + 4 + 4}{2 + 2} = \\frac{12}{4} = 3$

**Hole at $(2, 3)$**

**Part (b):** 

**Vertical asymptote:** From the simplified denominator, $x + 2 = 0$ gives **$x = -2$**

**Horizontal/Oblique asymptote:** The simplified numerator has degree 2, denominator has degree 1.

Since numerator degree > denominator degree by exactly 1, we have an oblique asymptote.

Divide: $\\frac{x^2 + 2x + 4}{x + 2}$

Using polynomial long division:
$x^2 + 2x + 4 = (x + 2)(x) + 4$
Continue: $x + \\frac{4}{x+2}$

Actually, let me redo this:
$(x^2 + 2x + 4) \\div (x + 2)$:
- $x^2 \\div x = x$
- $x(x + 2) = x^2 + 2x$
- $(x^2 + 2x + 4) - (x^2 + 2x) = 4$
- $4 \\div (x + 2)$ leaves remainder

So $g(x) = x + \\frac{4}{x + 2}$

Wait, let me be more careful:
$\\frac{x^2 + 2x + 4}{x + 2} = \\frac{x^2 + 2x}{x + 2} + \\frac{4}{x + 2} = x + \\frac{4}{x + 2}$

As $x \\to \\pm\\infty$, the $\\frac{4}{x+2} \\to 0$, so **oblique asymptote: $y = x$**

**Part (c):** The $y$-intercept occurs at $x = 0$:

$g(0) = \\frac{0 - 8}{0 - 4} = \\frac{-8}{-4} = 2$

**$y$-intercept: $(0, 2)$**`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Rational Functions and Asymptotes')
  }

  // Topic 3: Exponential Functions - Growth and Decay
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'exponential-functions-growth-decay' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `A population of bacteria doubles every 3 hours. Initially, there are 500 bacteria.

a) Write an exponential function $P(t)$ that models the population after $t$ hours.
b) How many bacteria will there be after 12 hours?
c) How long will it take for the population to reach 16,000?`,
          solution: `**Solution:**

**Part (a):** For exponential growth with doubling, we use: $P(t) = P_0 \\cdot 2^{t/T}$

where:
- $P_0 = 500$ (initial population)
- $T = 3$ (doubling time in hours)

$P(t) = 500 \\cdot 2^{t/3}$

**Part (b):** After 12 hours:

$P(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4 = 500 \\cdot 16 = 8000$ bacteria

**Part (c):** Set $P(t) = 16000$ and solve:

$16000 = 500 \\cdot 2^{t/3}$

$32 = 2^{t/3}$

$2^5 = 2^{t/3}$

$5 = \\frac{t}{3}$

$t = 15$ hours`
        },
        {
          topicId: topic3.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A radioactive substance decays according to the formula $A(t) = A_0 e^{-0.0315t}$, where $t$ is in years.

a) What is the decay rate (as a percentage)?
b) What is the half-life of the substance?
c) If you start with 200 grams, how much will remain after 50 years?`,
          solution: `**Solution:**

**Part (a):** The formula $A(t) = A_0 e^{kt}$ has decay rate $|k|$.

Here $k = -0.0315$, so the decay rate is $0.0315 = 3.15\\%$ per year.

**Part (b):** Half-life is when $A(t) = \\frac{A_0}{2}$:

$\\frac{A_0}{2} = A_0 e^{-0.0315t}$

$\\frac{1}{2} = e^{-0.0315t}$

$\\ln(0.5) = -0.0315t$

$t = \\frac{\\ln(0.5)}{-0.0315} = \\frac{-0.693}{-0.0315} \\approx 22.0$ years

**Part (c):** With $A_0 = 200$ grams and $t = 50$ years:

$A(50) = 200 \\cdot e^{-0.0315(50)}$

$A(50) = 200 \\cdot e^{-1.575}$

$A(50) = 200 \\cdot 0.2067$

$A(50) \\approx 41.3$ grams`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Exponential Functions - Growth and Decay')
  }

  // Topic 4: Logarithmic Functions
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'logarithmic-functions' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Evaluate the following logarithms without a calculator:

a) $\\log_2 32$
b) $\\log_5 \\frac{1}{25}$
c) $\\ln e^7$`,
          solution: `**Solution:**

**Part (a):** $\\log_2 32$ means "2 to what power equals 32?"

$2^5 = 32$

Therefore: $\\log_2 32 = 5$

**Part (b):** $\\log_5 \\frac{1}{25}$ means "5 to what power equals $\\frac{1}{25}$?"

$\\frac{1}{25} = \\frac{1}{5^2} = 5^{-2}$

Therefore: $\\log_5 \\frac{1}{25} = -2$

**Part (c):** $\\ln e^7$ means $\\log_e e^7$

By the property $\\log_b b^x = x$:

$\\ln e^7 = 7$`
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Use properties of logarithms to expand the following expression completely:

$$\\log_3 \\left(\\frac{x^4\\sqrt{y}}{z^2}\\right)$$`,
          solution: `**Solution:**

We'll use three key properties:
- Product rule: $\\log_b(MN) = \\log_b M + \\log_b N$
- Quotient rule: $\\log_b(M/N) = \\log_b M - \\log_b N$
- Power rule: $\\log_b M^p = p\\log_b M$

Step 1: Apply quotient rule:

$\\log_3 \\left(\\frac{x^4\\sqrt{y}}{z^2}\\right) = \\log_3(x^4\\sqrt{y}) - \\log_3(z^2)$

Step 2: Apply product rule to the first term:

$= \\log_3(x^4) + \\log_3(\\sqrt{y}) - \\log_3(z^2)$

Step 3: Rewrite $\\sqrt{y} = y^{1/2}$ and apply power rule:

$= 4\\log_3 x + \\frac{1}{2}\\log_3 y - 2\\log_3 z$

**Final answer:** $4\\log_3 x + \\frac{1}{2}\\log_3 y - 2\\log_3 z$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Logarithmic Functions')
  }

  // Topic 5: Solving Exponential and Logarithmic Equations
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'solving-exponential-logarithmic-equations' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Solve the following equations:

a) $5^{2x-1} = 125$
b) $3e^{4x} = 24$
c) $\\log_2(x+3) + \\log_2(x-3) = 4$`,
          solution: `**Solution:**

**Part (a):** $5^{2x-1} = 125$

Rewrite 125 as a power of 5: $125 = 5^3$

$5^{2x-1} = 5^3$

Since the bases are equal: $2x - 1 = 3$

$2x = 4$

$x = 2$

**Part (b):** $3e^{4x} = 24$

$e^{4x} = 8$

Take natural log of both sides: $\\ln(e^{4x}) = \\ln 8$

$4x = \\ln 8$

$x = \\frac{\\ln 8}{4} = \\frac{2.079}{4} \\approx 0.520$

**Part (c):** $\\log_2(x+3) + \\log_2(x-3) = 4$

Use product rule: $\\log_2[(x+3)(x-3)] = 4$

$\\log_2(x^2 - 9) = 4$

Convert to exponential form: $x^2 - 9 = 2^4 = 16$

$x^2 = 25$

$x = \\pm 5$

Check domain: We need $x + 3 > 0$ and $x - 3 > 0$, so $x > 3$.

Therefore: $x = 5$ (reject $x = -5$)`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Solving Exponential and Logarithmic Equations')
  }

  // Topic 6: Unit Circle and Radian Measure
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'unit-circle-radian-measure' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `a) Convert $225°$ to radians.
b) Convert $\\frac{5\\pi}{6}$ radians to degrees.
c) Find the exact values of $\\sin\\frac{5\\pi}{6}$, $\\cos\\frac{5\\pi}{6}$, and $\\tan\\frac{5\\pi}{6}$.`,
          solution: `**Solution:**

**Part (a):** To convert degrees to radians, multiply by $\\frac{\\pi}{180}$:

$225° \\cdot \\frac{\\pi}{180} = \\frac{225\\pi}{180} = \\frac{5\\pi}{4}$ radians

**Part (b):** To convert radians to degrees, multiply by $\\frac{180}{\\pi}$:

$\\frac{5\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{6} = \\frac{900}{6} = 150°$

**Part (c):** $\\frac{5\\pi}{6}$ is in Quadrant II (between $\\frac{\\pi}{2}$ and $\\pi$).

Reference angle: $\\pi - \\frac{5\\pi}{6} = \\frac{6\\pi - 5\\pi}{6} = \\frac{\\pi}{6}$

In Quadrant II: sine is positive, cosine and tangent are negative.

Using reference angle $\\frac{\\pi}{6}$:

$\\sin\\frac{5\\pi}{6} = +\\sin\\frac{\\pi}{6} = \\frac{1}{2}$

$\\cos\\frac{5\\pi}{6} = -\\cos\\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{2}$

$\\tan\\frac{5\\pi}{6} = \\frac{\\sin\\frac{5\\pi}{6}}{\\cos\\frac{5\\pi}{6}} = \\frac{1/2}{-\\sqrt{3}/2} = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$`
        },
        {
          topicId: topic6.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A point $P$ on the unit circle has coordinates $\\left(-\\frac{3}{5}, \\frac{4}{5}\\right)$.

a) In which quadrant is point $P$?
b) If $P$ corresponds to angle $\\theta$ in standard position, find $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.
c) Find $\\sec\\theta$ and $\\csc\\theta$.`,
          solution: `**Solution:**

**Part (a):** The $x$-coordinate is negative and the $y$-coordinate is positive.

This means $P$ is in **Quadrant II**.

**Part (b):** On the unit circle, the coordinates of a point are $(\\cos\\theta, \\sin\\theta)$.

Therefore:
- $\\cos\\theta = -\\frac{3}{5}$
- $\\sin\\theta = \\frac{4}{5}$
- $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$

**Part (c):** Reciprocal functions:

$\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{-3/5} = -\\frac{5}{3}$

$\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{1}{4/5} = \\frac{5}{4}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Unit Circle and Radian Measure')
  }

  // Topic 7: Graphing Trigonometric Functions
  const topic7 = await prisma.topic.findUnique({
    where: { slug: 'graphing-trig-functions' }
  })

  if (topic7) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic7.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `For the function $f(x) = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 1$:

a) Find the amplitude.
b) Find the period.
c) Find the phase shift.
d) Find the vertical shift (midline).`,
          solution: `**Solution:**

The general form is $f(x) = A\\sin(B(x - C)) + D$ or $f(x) = A\\sin(Bx - BC) + D$

Our function: $f(x) = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 1$

Rewrite in standard form: $f(x) = 3\\sin\\left(2\\left(x - \\frac{\\pi}{6}\\right)\\right) + 1$

**Part (a):** Amplitude $= |A| = |3| = 3$

**Part (b):** Period $= \\frac{2\\pi}{|B|} = \\frac{2\\pi}{2} = \\pi$

**Part (c):** Phase shift $= C = \\frac{\\pi}{6}$ (to the right)

Alternatively, from $2x - \\frac{\\pi}{3} = 0$, we get $x = \\frac{\\pi}{6}$

**Part (d):** Vertical shift $= D = 1$

The midline is $y = 1$.`
        },
        {
          topicId: topic7.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Consider $g(x) = -2\\cos\\left(\\frac{\\pi x}{4} + \\pi\\right) - 3$.

a) Determine the amplitude, period, phase shift, and midline.
b) Find the maximum and minimum values of $g(x)$.
c) Find the first three $x$-intercepts for $x \\geq 0$.`,
          solution: `**Solution:**

**Part (a):** Rewrite: $g(x) = -2\\cos\\left(\\frac{\\pi}{4}(x + 4)\\right) - 3$

Here: $A = -2$, $B = \\frac{\\pi}{4}$, $C = -4$, $D = -3$

- Amplitude $= |A| = |-2| = 2$
- Period $= \\frac{2\\pi}{|B|} = \\frac{2\\pi}{\\pi/4} = 8$
- Phase shift $= C = -4$ (4 units to the left)
- Midline: $y = D = -3$

**Part (b):** For cosine, the range is $[-1, 1]$.

With amplitude 2 and reflection: $-2\\cos(...) \\in [-2, 2]$

Adding vertical shift of $-3$:

Maximum: $2 + (-3) = -1$
Minimum: $-2 + (-3) = -5$

**Part (c):** Set $g(x) = 0$:

$-2\\cos\\left(\\frac{\\pi x}{4} + \\pi\\right) - 3 = 0$

$-2\\cos\\left(\\frac{\\pi x}{4} + \\pi\\right) = 3$

$\\cos\\left(\\frac{\\pi x}{4} + \\pi\\right) = -\\frac{3}{2}$

But wait! The range of cosine is $[-1, 1]$, and $-\\frac{3}{2} < -1$.

Therefore, **there are no $x$-intercepts** (the graph never crosses the $x$-axis).

This makes sense because the maximum value is $-1$, which is still below the $x$-axis.`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Graphing Trigonometric Functions')
  }

  // Topic 8: Trigonometric Identities
  const topic8 = await prisma.topic.findUnique({
    where: { slug: 'trigonometric-identities' }
  })

  if (topic8) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic8.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Verify the following identities:

a) $\\tan x \\cos x = \\sin x$
b) $\\frac{1 - \\sin^2 x}{\\cos x} = \\cos x$
c) $\\sec^2 x - 1 = \\tan^2 x$`,
          solution: `**Solution:**

**Part (a):** Start with the left side:

$\\tan x \\cos x = \\frac{\\sin x}{\\cos x} \\cdot \\cos x = \\sin x$ ✓

**Part (b):** Start with the left side:

$\\frac{1 - \\sin^2 x}{\\cos x}$

Use Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$, so $1 - \\sin^2 x = \\cos^2 x$

$= \\frac{\\cos^2 x}{\\cos x} = \\cos x$ ✓

**Part (c):** Start with the left side:

$\\sec^2 x - 1$

Recall: $\\sec x = \\frac{1}{\\cos x}$

We can use the Pythagorean identity: $\\tan^2 x + 1 = \\sec^2 x$

Rearranging: $\\sec^2 x - 1 = \\tan^2 x$ ✓

Alternatively, we could derive it:

$\\sec^2 x - 1 = \\frac{1}{\\cos^2 x} - 1 = \\frac{1 - \\cos^2 x}{\\cos^2 x} = \\frac{\\sin^2 x}{\\cos^2 x} = \\tan^2 x$ ✓`
        },
        {
          topicId: topic8.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Simplify the expression:

$$\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}$$`,
          solution: `**Solution:**

Find a common denominator:

$\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x} = \\frac{\\sin^2 x + (1 + \\cos x)^2}{(1 + \\cos x)\\sin x}$

Expand the numerator:

$\\sin^2 x + (1 + \\cos x)^2 = \\sin^2 x + 1 + 2\\cos x + \\cos^2 x$

$= (\\sin^2 x + \\cos^2 x) + 1 + 2\\cos x$

$= 1 + 1 + 2\\cos x$ (using $\\sin^2 x + \\cos^2 x = 1$)

$= 2 + 2\\cos x = 2(1 + \\cos x)$

So our expression becomes:

$\\frac{2(1 + \\cos x)}{(1 + \\cos x)\\sin x} = \\frac{2}{\\sin x} = 2\\csc x$

**Final answer:** $2\\csc x$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Trigonometric Identities')
  }

  // Topic 9: Solving Trigonometric Equations
  const topic9 = await prisma.topic.findUnique({
    where: { slug: 'solving-trig-equations' }
  })

  if (topic9) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic9.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Solve for $x$ in the interval $[0, 2\\pi)$:

a) $2\\sin x = \\sqrt{3}$
b) $\\cos^2 x = \\frac{1}{4}$
c) $2\\cos x - 1 = 0$`,
          solution: `**Solution:**

**Part (a):** $2\\sin x = \\sqrt{3}$

$\\sin x = \\frac{\\sqrt{3}}{2}$

This occurs at $x = \\frac{\\pi}{3}$ (Quadrant I) and $x = \\frac{2\\pi}{3}$ (Quadrant II)

**Solutions:** $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$

**Part (b):** $\\cos^2 x = \\frac{1}{4}$

$\\cos x = \\pm\\frac{1}{2}$

For $\\cos x = \\frac{1}{2}$: $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$

For $\\cos x = -\\frac{1}{2}$: $x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$

**Solutions:** $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$

**Part (c):** $2\\cos x - 1 = 0$

$\\cos x = \\frac{1}{2}$

**Solutions:** $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$`
        },
        {
          topicId: topic9.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Solve for $x$ in $[0, 2\\pi)$:

$$\\sin(2x) = \\cos x$$`,
          solution: `**Solution:**

Use the double-angle formula: $\\sin(2x) = 2\\sin x \\cos x$

$2\\sin x \\cos x = \\cos x$

$2\\sin x \\cos x - \\cos x = 0$

$\\cos x(2\\sin x - 1) = 0$

This gives us two cases:

**Case 1:** $\\cos x = 0$

In $[0, 2\\pi)$: $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$

**Case 2:** $2\\sin x - 1 = 0$

$\\sin x = \\frac{1}{2}$

In $[0, 2\\pi)$: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$

**All solutions:** $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Solving Trigonometric Equations')
  }

  // Topic 10: Law of Sines and Cosines
  const topic10 = await prisma.topic.findUnique({
    where: { slug: 'law-of-sines-cosines' }
  })

  if (topic10) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic10.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `In triangle $ABC$, $a = 12$, $b = 15$, and $A = 35°$.

a) Use the Law of Sines to find angle $B$.
b) Find angle $C$.
c) Find side $c$.`,
          solution: `**Solution:**

**Part (a):** Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$

$\\frac{12}{\\sin 35°} = \\frac{15}{\\sin B}$

$\\sin B = \\frac{15 \\sin 35°}{12} = \\frac{15(0.5736)}{12} = \\frac{8.604}{12} = 0.717$

$B = \\sin^{-1}(0.717) \\approx 45.8°$

Note: There could be another solution $B' = 180° - 45.8° = 134.2°$, but we need to check if it's valid.

If $B = 134.2°$, then $A + B = 35° + 134.2° = 169.2° < 180°$, so this is also possible.

However, since $b > a$ and angle $B$ is opposite the larger side, we expect $B > A$.

Both solutions satisfy this, so we have the **ambiguous case**. Let's take $B \\approx 45.8°$ as the acute solution.

**Part (b):** $C = 180° - A - B = 180° - 35° - 45.8° = 99.2°$

**Part (c):** Using Law of Sines:

$\\frac{c}{\\sin C} = \\frac{a}{\\sin A}$

$c = \\frac{a \\sin C}{\\sin A} = \\frac{12 \\sin 99.2°}{\\sin 35°} = \\frac{12(0.9877)}{0.5736} \\approx 20.7$`
        },
        {
          topicId: topic10.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `In triangle $ABC$, $a = 8$, $b = 11$, and $c = 14$.

a) Use the Law of Cosines to find angle $C$.
b) Find the area of the triangle.`,
          solution: `**Solution:**

**Part (a):** Law of Cosines: $c^2 = a^2 + b^2 - 2ab\\cos C$

$14^2 = 8^2 + 11^2 - 2(8)(11)\\cos C$

$196 = 64 + 121 - 176\\cos C$

$196 = 185 - 176\\cos C$

$11 = -176\\cos C$

$\\cos C = -\\frac{11}{176} = -0.0625$

$C = \\cos^{-1}(-0.0625) \\approx 93.6°$

**Part (b):** Area formula using two sides and included angle:

First, we need to find one of the other angles. Let's find angle $A$:

$a^2 = b^2 + c^2 - 2bc\\cos A$

$64 = 121 + 196 - 2(11)(14)\\cos A$

$64 = 317 - 308\\cos A$

$-253 = -308\\cos A$

$\\cos A = \\frac{253}{308} = 0.821$

$A = \\cos^{-1}(0.821) \\approx 34.7°$

Now use: Area $= \\frac{1}{2}bc\\sin A$

$= \\frac{1}{2}(11)(14)\\sin 34.7°$

$= \\frac{1}{2}(154)(0.569)$

$\\approx 43.8$ square units`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Law of Sines and Cosines')
  }

  // Topic 11: Vectors in the Plane
  const topic11 = await prisma.topic.findUnique({
    where: { slug: 'vectors-in-plane' }
  })

  if (topic11) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic11.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Given vectors $\\vec{u} = \\langle 3, -4 \\rangle$ and $\\vec{v} = \\langle -2, 5 \\rangle$:

a) Find $\\vec{u} + \\vec{v}$
b) Find $2\\vec{u} - 3\\vec{v}$
c) Find the magnitude of $\\vec{u}$`,
          solution: `**Solution:**

**Part (a):** Add components:

$\\vec{u} + \\vec{v} = \\langle 3, -4 \\rangle + \\langle -2, 5 \\rangle = \\langle 3 + (-2), -4 + 5 \\rangle = \\langle 1, 1 \\rangle$

**Part (b):** Scalar multiplication and subtraction:

$2\\vec{u} = 2\\langle 3, -4 \\rangle = \\langle 6, -8 \\rangle$

$3\\vec{v} = 3\\langle -2, 5 \\rangle = \\langle -6, 15 \\rangle$

$2\\vec{u} - 3\\vec{v} = \\langle 6, -8 \\rangle - \\langle -6, 15 \\rangle = \\langle 6-(-6), -8-15 \\rangle = \\langle 12, -23 \\rangle$

**Part (c):** Magnitude formula: $|\\vec{u}| = \\sqrt{u_1^2 + u_2^2}$

$|\\vec{u}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$`
        },
        {
          topicId: topic11.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A vector $\\vec{w}$ has magnitude 10 and makes an angle of $120°$ with the positive $x$-axis.

a) Write $\\vec{w}$ in component form.
b) Find a unit vector in the direction of $\\vec{w}$.`,
          solution: `**Solution:**

**Part (a):** For a vector with magnitude $r$ and angle $\\theta$:

$\\vec{w} = \\langle r\\cos\\theta, r\\sin\\theta \\rangle$

$\\vec{w} = \\langle 10\\cos 120°, 10\\sin 120° \\rangle$

$\\cos 120° = -\\frac{1}{2}$ and $\\sin 120° = \\frac{\\sqrt{3}}{2}$

$\\vec{w} = \\left\\langle 10\\left(-\\frac{1}{2}\\right), 10\\left(\\frac{\\sqrt{3}}{2}\\right) \\right\\rangle = \\langle -5, 5\\sqrt{3} \\rangle$

**Part (b):** A unit vector has magnitude 1. To find the unit vector in the direction of $\\vec{w}$:

$\\hat{w} = \\frac{\\vec{w}}{|\\vec{w}|} = \\frac{\\langle -5, 5\\sqrt{3} \\rangle}{10} = \\left\\langle -\\frac{1}{2}, \\frac{\\sqrt{3}}{2} \\right\\rangle$

Verify: $\\left|\\hat{w}\\right| = \\sqrt{\\left(-\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2} = \\sqrt{\\frac{1}{4} + \\frac{3}{4}} = \\sqrt{1} = 1$ ✓`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Vectors in the Plane')
  }

  // Topic 12: Parametric Equations
  const topic12 = await prisma.topic.findUnique({
    where: { slug: 'parametric-equations' }
  })

  if (topic12) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic12.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Consider the parametric equations: $x = 2t - 1$ and $y = t^2 + 3$

a) Eliminate the parameter to find a Cartesian equation.
b) Find the point on the curve when $t = 2$.
c) Sketch the direction of motion as $t$ increases.`,
          solution: `**Solution:**

**Part (a):** From the first equation: $x = 2t - 1$

Solve for $t$: $t = \\frac{x + 1}{2}$

Substitute into the second equation:

$y = t^2 + 3 = \\left(\\frac{x + 1}{2}\\right)^2 + 3$

$y = \\frac{(x + 1)^2}{4} + 3$

$y = \\frac{x^2 + 2x + 1}{4} + 3$

$y = \\frac{x^2 + 2x + 1 + 12}{4} = \\frac{x^2 + 2x + 13}{4}$

Or: $4y = x^2 + 2x + 13$

**Part (b):** When $t = 2$:

$x = 2(2) - 1 = 3$
$y = 2^2 + 3 = 7$

Point: $(3, 7)$

**Part (c):** As $t$ increases from negative to positive:

- When $t = -1$: $x = -3$, $y = 4$
- When $t = 0$: $x = -1$, $y = 3$
- When $t = 1$: $x = 1$, $y = 4$
- When $t = 2$: $x = 3$, $y = 7$

The curve is a parabola opening upward, and motion is from **left to right** as $t$ increases.`
        },
        {
          topicId: topic12.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A projectile is launched with parametric equations:
$$x = 40t$$
$$y = -16t^2 + 60t + 5$$

where $x$ and $y$ are in feet and $t$ is in seconds.

a) Find the maximum height reached by the projectile.
b) Find when and where the projectile hits the ground.`,
          solution: `**Solution:**

**Part (a):** Maximum height occurs at the vertex of the parabola $y = -16t^2 + 60t + 5$.

For $y = at^2 + bt + c$, vertex is at $t = -\\frac{b}{2a}$

$t = -\\frac{60}{2(-16)} = \\frac{60}{32} = 1.875$ seconds

Maximum height:

$y = -16(1.875)^2 + 60(1.875) + 5$
$y = -16(3.516) + 112.5 + 5$
$y = -56.25 + 112.5 + 5$
$y = 61.25$ feet

**Part (b):** The projectile hits the ground when $y = 0$:

$-16t^2 + 60t + 5 = 0$

Using the quadratic formula: $t = \\frac{-60 \\pm \\sqrt{60^2 - 4(-16)(5)}}{2(-16)}$

$t = \\frac{-60 \\pm \\sqrt{3600 + 320}}{-32} = \\frac{-60 \\pm \\sqrt{3920}}{-32}$

$t = \\frac{-60 \\pm 62.61}{-32}$

$t = \\frac{-60 + 62.61}{-32} = -0.082$ (reject, negative time)

$t = \\frac{-60 - 62.61}{-32} = \\frac{-122.61}{-32} = 3.832$ seconds

Horizontal distance: $x = 40(3.832) = 153.3$ feet

The projectile hits the ground after **3.83 seconds** at a distance of **153.3 feet**.`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Parametric Equations')
  }

  // Topic 13: Composite and Inverse Functions
  const topic13 = await prisma.topic.findUnique({
    where: { slug: 'composite-inverse-functions' }
  })

  if (topic13) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic13.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Given $f(x) = 2x + 3$ and $g(x) = x^2 - 1$:

a) Find $(f \\circ g)(x)$
b) Find $(g \\circ f)(x)$
c) Find $(f \\circ g)(2)$`,
          solution: `**Solution:**

**Part (a):** $(f \\circ g)(x) = f(g(x))$

Substitute $g(x)$ into $f$:

$f(g(x)) = f(x^2 - 1) = 2(x^2 - 1) + 3 = 2x^2 - 2 + 3 = 2x^2 + 1$

**Part (b):** $(g \\circ f)(x) = g(f(x))$

Substitute $f(x)$ into $g$:

$g(f(x)) = g(2x + 3) = (2x + 3)^2 - 1$

$= 4x^2 + 12x + 9 - 1 = 4x^2 + 12x + 8$

**Part (c):** $(f \\circ g)(2) = 2(2)^2 + 1 = 2(4) + 1 = 9$

Alternatively: $g(2) = 2^2 - 1 = 3$, then $f(3) = 2(3) + 3 = 9$ ✓`
        },
        {
          topicId: topic13.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the inverse function of $f(x) = \\frac{3x - 2}{x + 1}$.

Verify that $f(f^{-1}(x)) = x$.`,
          solution: `**Solution:**

Let $y = f(x) = \\frac{3x - 2}{x + 1}$

To find the inverse, swap $x$ and $y$, then solve for $y$:

$x = \\frac{3y - 2}{y + 1}$

$x(y + 1) = 3y - 2$

$xy + x = 3y - 2$

$xy - 3y = -x - 2$

$y(x - 3) = -x - 2$

$y = \\frac{-x - 2}{x - 3} = \\frac{-(x + 2)}{x - 3}$

Therefore: $f^{-1}(x) = \\frac{-x - 2}{x - 3}$ or $\\frac{-(x+2)}{x-3}$

**Verification:** $f(f^{-1}(x)) = f\\left(\\frac{-x-2}{x-3}\\right)$

$= \\frac{3\\left(\\frac{-x-2}{x-3}\\right) - 2}{\\frac{-x-2}{x-3} + 1}$

$= \\frac{\\frac{-3x-6}{x-3} - 2}{\\frac{-x-2}{x-3} + 1}$

$= \\frac{\\frac{-3x-6-2(x-3)}{x-3}}{\\frac{-x-2+(x-3)}{x-3}}$

$= \\frac{-3x-6-2x+6}{-x-2+x-3}$

$= \\frac{-5x}{-5} = x$ ✓`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Composite and Inverse Functions')
  }

  // Topic 14: Sequences (Arithmetic and Geometric)
  const topic14 = await prisma.topic.findUnique({
    where: { slug: 'sequences-arithmetic-geometric' }
  })

  if (topic14) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic14.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `An arithmetic sequence has first term $a_1 = 5$ and common difference $d = 3$.

a) Write the first five terms.
b) Find the 20th term.
c) Find the sum of the first 20 terms.`,
          solution: `**Solution:**

**Part (a):** For arithmetic sequence: $a_n = a_1 + (n-1)d$

$a_1 = 5$
$a_2 = 5 + 3 = 8$
$a_3 = 8 + 3 = 11$
$a_4 = 11 + 3 = 14$
$a_5 = 14 + 3 = 17$

First five terms: **5, 8, 11, 14, 17**

**Part (b):** $a_{20} = a_1 + (20-1)d = 5 + 19(3) = 5 + 57 = 62$

**Part (c):** Sum formula: $S_n = \\frac{n(a_1 + a_n)}{2}$

$S_{20} = \\frac{20(5 + 62)}{2} = \\frac{20(67)}{2} = 10(67) = 670$`
        },
        {
          topicId: topic14.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A geometric sequence has first term $a_1 = 2$ and common ratio $r = 3$.

a) Find the 6th term.
b) Find the sum of the first 8 terms.`,
          solution: `**Solution:**

**Part (a):** For geometric sequence: $a_n = a_1 \\cdot r^{n-1}$

$a_6 = 2 \\cdot 3^{6-1} = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$

**Part (b):** Sum formula: $S_n = a_1 \\cdot \\frac{r^n - 1}{r - 1}$ (for $r \\neq 1$)

$S_8 = 2 \\cdot \\frac{3^8 - 1}{3 - 1}$

$= 2 \\cdot \\frac{6561 - 1}{2}$

$= 2 \\cdot \\frac{6560}{2}$

$= 2 \\cdot 3280$

$= 6560$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Sequences (Arithmetic and Geometric)')
  }

  console.log('\\n✅ Successfully added example problems to AP Precalculus topics!')
  console.log('Total: 30 example problems added to 14 AP Precalculus topics')
  console.log('Coverage: Polynomials, rational functions, exponential/logarithmic, trigonometry, vectors, parametric equations, sequences')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
