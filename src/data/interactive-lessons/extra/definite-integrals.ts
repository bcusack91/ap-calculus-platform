import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Definite Integrals and the Fundamental Theorem (AP Calculus AB).
 * Registry key / DB Topic.slug: 'definite-integrals'.
 * 7 parts, gold-standard structure: area under a curve & Riemann sums → the definite
 * integral as a limit → properties of definite integrals → FTC Part 2 (evaluation) →
 * FTC Part 1 (accumulation functions & the derivative of an integral) → applications
 * (net change, average value) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every integral, Riemann sum, and accumulation value was verified numerically before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-1-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 1 of 7 — Area Under a Curve & Riemann Sums**

---

### Topics in This Part

| Section |
|---------|
| The Area Problem |
| Riemann Sums (left, right, midpoint) |
| Refining the Estimate |

> 🔑 **Key Concept:** A **definite integral** measures the *accumulated* signed area between a curve and the $x$-axis. We start by *estimating* that area with rectangles — a **Riemann sum** — then make the rectangles infinitely thin in Part 2.`,
      },
      {
        id: 'def-int-1-area',
        type: 'text' as const,
        content: `## The Area Problem

How much area sits between the curve $y = f(x)$, the $x$-axis, and the lines $x = a$ and $x = b$?

For a triangle or rectangle we already know the formula. But for a curve like $y = x^2$, there is no simple area formula — so we **approximate** with rectangles, then take a limit.

### Setting Up Rectangles

Split $[a, b]$ into $n$ equal subintervals, each of width

$$\\Delta x = \\frac{b - a}{n}$$

On each subinterval, build a rectangle whose height is the value of $f$ at a *sample point*. Adding the rectangle areas gives a **Riemann sum**:

$$\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$$

> 🔑 **Key Idea:** "Signed area" means area **below** the $x$-axis counts as **negative**. A definite integral can be negative or zero.`,
      },
      {
        id: 'def-int-1-deltax',
        type: 'input-boxes' as const,
        content: `**Find $\\Delta x$** 🧮

For each interval split into $n$ equal pieces, find the rectangle width $\\Delta x = \\dfrac{b-a}{n}$. *(Decimals are fine.)*

**1)** $[0, 8]$ with $n = 4$:  $\\Delta x = \\,?$
**2)** $[1, 7]$ with $n = 3$:  $\\Delta x = \\,?$
**3)** $[0, 1]$ with $n = 5$:  $\\Delta x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '0.2'],
          hint1: '$\\Delta x = \\frac{8-0}{4} = \\frac{8}{4} = 2$.',
          hint2: '$\\Delta x = \\frac{7-1}{3} = \\frac{6}{3} = 2$.',
          hint3: '$\\Delta x = \\frac{1-0}{5} = \\frac{1}{5} = 0.2$.',
          explanation: 'Width always equals total length $(b-a)$ divided by the number of subintervals $n$: 1) $2$, 2) $2$, 3) $0.2$.',
        },
      },
      {
        id: 'def-int-1-lrm',
        type: 'text' as const,
        content: `## Left, Right & Midpoint Sums

The sample point's location names the sum:

| Sum | Height taken at... | Tends to... (increasing $f$) |
|-----|--------------------|------------------------------|
| **Left** (LRAM) | left edge of each subinterval | **under**estimate |
| **Right** (RRAM) | right edge of each subinterval | **over**estimate |
| **Midpoint** (MRAM) | midpoint of each subinterval | usually most accurate |

### Worked Example: estimate $\\int_0^4 x^2\\,dx$ with a **left** sum, $n = 4$

Here $\\Delta x = \\frac{4-0}{4} = 1$, and the left edges are $x = 0, 1, 2, 3$:

$$L_4 = \\big[f(0) + f(1) + f(2) + f(3)\\big]\\,\\Delta x = (0 + 1 + 4 + 9)(1) = 14$$

The **right** sum uses edges $x = 1, 2, 3, 4$:

$$R_4 = (1 + 4 + 9 + 16)(1) = 30$$

> 💡 The true area is $\\frac{64}{3} \\approx 21.3$, which sits **between** $L_4 = 14$ and $R_4 = 30$. For an increasing function, left under- and right over-shoot.`,
      },
      {
        id: 'def-int-1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For a function that is **increasing** on $[a,b]$, the **right** Riemann sum is...',
              options: ['an overestimate of the true area', 'an underestimate of the true area', 'exactly equal to the true area', 'always negative'],
              correctAnswer: 0,
              explanation: 'When $f$ increases, the right edge is the tallest point of each subinterval, so right-edge rectangles poke above the curve — an overestimate.',
            },
            {
              question: 'A Riemann sum estimates a definite integral better as $n$...',
              options: ['gets larger (more, thinner rectangles)', 'gets smaller', 'equals exactly $1$', 'matches the value of $b - a$'],
              correctAnswer: 0,
              explanation: 'More subintervals means thinner rectangles that hug the curve more closely. The exact area is the limit as $n \\to \\infty$.',
            },
          ],
        },
      },
      {
        id: 'def-int-1-leftsum',
        type: 'input-boxes' as const,
        content: `**Build a Right Sum** 🧮

Estimate $\\int_0^3 x^2\\,dx$ with a **right** Riemann sum and $n = 3$.

**1)** What is $\\Delta x$?
**2)** What is the value of the right sum $R_3$? *(Use right edges $x = 1, 2, 3$.)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1', '14'],
          hint1: '$\\Delta x = \\frac{3-0}{3} = 1$.',
          hint2: 'Right edges are $x = 1, 2, 3$. Heights: $f(1)=1$, $f(2)=4$, $f(3)=9$.',
          hint3: '$R_3 = (1 + 4 + 9)(1) = 14$.',
          explanation: '$\\Delta x = 1$; $R_3 = [f(1)+f(2)+f(3)]\\,\\Delta x = (1+4+9)(1) = 14$. (True value $= 9$, so this overestimates, as expected for an increasing $f$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-2-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 2 of 7 — The Definite Integral as a Limit**

---

> 🔑 **The Idea:** Shrink the rectangle width to zero. The Riemann sum stops being an *estimate* and becomes the *exact* signed area — that limit **is** the definite integral.`,
      },
      {
        id: 'def-int-2-defn',
        type: 'text' as const,
        content: `## The Definition

$$\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x$$

Read the parts:

| Symbol | Name | Meaning |
|--------|------|---------|
| $\\int$ | integral sign | a stretched "S" for **sum** |
| $a$, $b$ | limits of integration | start and end of the interval |
| $f(x)$ | integrand | the function being accumulated |
| $dx$ | differential | the infinitely thin width $\\Delta x$ |

> 🔑 **Key Idea:** The integral is a **number** (signed area), not a function. The $dx$ tells you the variable of integration and reminds you each strip has width $dx$.`,
      },
      {
        id: 'def-int-2-notation',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

In the integral $\\displaystyle\\int_1^6 (x^2 - 3)\\,dx$, identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The lower limit of integration is:', options: ['$1$', '$6$', '$x^2 - 3$', '$dx$'] },
            { label: 'The upper limit of integration is:', options: ['$6$', '$1$', '$x^2 - 3$', '$5$'] },
            { label: 'The integrand is:', options: ['$x^2 - 3$', '$1$', '$6$', '$dx$'] },
          ],
          correctAnswers: ['$1$', '$6$', '$x^2 - 3$'],
          hint1: 'The number on the **bottom** of the integral sign is the lower limit.',
          hint2: 'The number on the **top** of the integral sign is the upper limit.',
          hint3: 'The **integrand** is the function being integrated — the expression between the integral sign and $dx$.',
          explanation: 'Lower limit $= 1$, upper limit $= 6$, integrand $= x^2 - 3$. The $dx$ marks the variable of integration.',
        },
      },
      {
        id: 'def-int-2-geometry',
        type: 'text' as const,
        content: `## Computing Integrals with Geometry

When the region is a familiar shape, you can read the integral straight off a graph — no limit needed.

### Example: $\\int_0^4 (2x)\\,dx$

The region under $y = 2x$ from $0$ to $4$ is a **triangle** with base $4$ and height $f(4) = 8$:

$$\\int_0^4 2x\\,dx = \\tfrac{1}{2}(4)(8) = 16$$

### Example: a semicircle

If $f(x) = \\sqrt{9 - x^2}$, the graph is the **top half of a circle** of radius $3$. So

$$\\int_{-3}^{3} \\sqrt{9 - x^2}\\,dx = \\tfrac{1}{2}\\pi r^2 = \\tfrac{1}{2}\\pi(3)^2 = \\tfrac{9\\pi}{2}$$

> 💡 Geometry is the fastest path for lines, triangles, rectangles, trapezoids, and circles. AP exams love these "area as integral" problems.`,
      },
      {
        id: 'def-int-2-geom-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using geometry, $\\int_0^5 3\\,dx$ equals... *(the region under the constant $y = 3$)*',
              options: ['$15$', '$3$', '$5$', '$8$'],
              correctAnswer: 0,
              explanation: 'The region is a rectangle of width $5$ and height $3$, so the area is $5 \\cdot 3 = 15$.',
            },
            {
              question: 'If $\\int_a^b f(x)\\,dx = 0$ for a continuous $f$ that is not identically zero, then...',
              options: ['the area above the axis equals the area below it', 'the function must be negative everywhere', 'the interval has zero length', 'it is impossible'],
              correctAnswer: 0,
              explanation: 'A definite integral is **signed** area. It is zero when the positive area above the axis exactly cancels the negative area below.',
            },
          ],
        },
      },
      {
        id: 'def-int-2-geom-drill',
        type: 'input-boxes' as const,
        content: `**Integrals by Geometry** 🧮

Evaluate each using area formulas. *(Use $\\pi \\approx$ leave symbolic answers as decimals where asked.)*

**1)** $\\int_0^6 x\\,dx$  *(triangle, base $6$, height $6$)*
**2)** $\\int_1^5 4\\,dx$  *(rectangle)*
**3)** $\\int_{-2}^{2} \\sqrt{4 - x^2}\\,dx$  *(half a circle of radius $2$; enter as a multiple of $\\pi$, e.g. "2pi")*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '16', '2pi'],
          hint1: 'Triangle area $= \\frac{1}{2}(6)(6) = 18$.',
          hint2: 'Rectangle: width $(5-1) = 4$, height $4$, so $4 \\cdot 4 = 16$.',
          hint3: 'Top half of radius-$2$ circle: $\\frac{1}{2}\\pi(2)^2 = 2\\pi$.',
          explanation: '1) $\\frac{1}{2}(6)(6) = 18$.  2) $4 \\times 4 = 16$.  3) $\\frac{1}{2}\\pi(2)^2 = 2\\pi$.',
        },
      },
      {
        id: 'def-int-2-summary',
        type: 'text' as const,
        content: `## What We Have So Far

- The definite integral is the **limit** of Riemann sums.
- It equals **signed area** between $f$ and the $x$-axis.
- For familiar shapes you can find it with **geometry** — no limit required.

But limits and geometry are clumsy for something like $\\int_0^2 x^3\\,dx$. In Part 4 the **Fundamental Theorem** gives us a shortcut using antiderivatives. First, in Part 3, we collect the **properties** that make integrals easy to manipulate.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-3-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 3 of 7 — Properties of Definite Integrals**

---

> 🔑 **Why it matters:** These rules let you split, combine, and flip integrals — turning hard problems into pieces you already know, and they show up constantly on the AP exam's "given $\\int f$, find $\\int (\\ldots)$" questions.`,
      },
      {
        id: 'def-int-3-props',
        type: 'text' as const,
        content: `## The Core Properties

| Property | Rule |
|----------|------|
| **Zero width** | $\\displaystyle\\int_a^a f(x)\\,dx = 0$ |
| **Reverse limits** | $\\displaystyle\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$ |
| **Constant multiple** | $\\displaystyle\\int_a^b c\\,f(x)\\,dx = c\\int_a^b f(x)\\,dx$ |
| **Sum / difference** | $\\displaystyle\\int_a^b [f \\pm g]\\,dx = \\int_a^b f\\,dx \\pm \\int_a^b g\\,dx$ |
| **Additivity (splitting)** | $\\displaystyle\\int_a^c f\\,dx + \\int_c^b f\\,dx = \\int_a^b f\\,dx$ |

> ⚠️ **Watch the sign:** swapping the limits of integration flips the sign. $\\int_5^2 f\\,dx = -\\int_2^5 f\\,dx$.`,
      },
      {
        id: 'def-int-3-worked',
        type: 'text' as const,
        content: `## Worked Example

Suppose you are told:

$$\\int_0^3 f(x)\\,dx = 7 \\qquad \\int_3^8 f(x)\\,dx = 2 \\qquad \\int_0^3 g(x)\\,dx = 5$$

**Find $\\int_0^8 f(x)\\,dx$.** Use additivity:

$$\\int_0^8 f = \\int_0^3 f + \\int_3^8 f = 7 + 2 = 9$$

**Find $\\int_0^3 [2f(x) - g(x)]\\,dx$.** Split and pull out constants:

$$\\int_0^3 2f - \\int_0^3 g = 2(7) - 5 = 9$$

**Find $\\int_3^0 f(x)\\,dx$.** Reverse the limits:

$$\\int_3^0 f = -\\int_0^3 f = -7$$`,
      },
      {
        id: 'def-int-3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the Properties** 🔽

Given $\\displaystyle\\int_1^4 f\\,dx = 10$, $\\displaystyle\\int_4^6 f\\,dx = 3$, and $\\displaystyle\\int_1^4 g\\,dx = 8$, choose each value.`,
        exercise: {
          dropdowns: [
            { label: '$\\int_1^6 f\\,dx =$', options: ['$13$', '$7$', '$30$', '$10$'] },
            { label: '$\\int_4^1 f\\,dx =$', options: ['$-10$', '$10$', '$0$', '$13$'] },
            { label: '$\\int_1^4 3f\\,dx =$', options: ['$30$', '$13$', '$10$', '$3$'] },
            { label: '$\\int_1^4 [f - g]\\,dx =$', options: ['$2$', '$18$', '$-2$', '$80$'] },
          ],
          correctAnswers: ['$13$', '$-10$', '$30$', '$2$'],
          hint1: 'Additivity: $\\int_1^6 f = \\int_1^4 f + \\int_4^6 f = 10 + 3$.',
          hint2: 'Reversing limits negates: $\\int_4^1 f = -\\int_1^4 f = -10$.',
          hint3: 'Constant multiple: $3 \\cdot 10 = 30$. Difference: $10 - 8 = 2$.',
          explanation: '$\\int_1^6 f = 10+3 = 13$; $\\int_4^1 f = -10$; $\\int_1^4 3f = 3(10) = 30$; $\\int_1^4 [f-g] = 10 - 8 = 2$.',
        },
      },
      {
        id: 'def-int-3-recap',
        type: 'text' as const,
        content: `## One Rule at a Time

Most "given-integrals" problems are just these properties applied in sequence:

1. **Split** long intervals with additivity, or **merge** adjacent pieces.
2. **Pull out** constant multiples.
3. **Separate** sums and differences term by term.
4. **Flip the sign** whenever the limits are reversed.

Keep them straight and the next drill is pure bookkeeping.`,
      },
      {
        id: 'def-int-3-drill',
        type: 'input-boxes' as const,
        content: `**Combine Integrals** 🧮

Use $\\displaystyle\\int_2^5 f\\,dx = 12$, $\\displaystyle\\int_2^5 g\\,dx = 4$, and $\\displaystyle\\int_5^9 f\\,dx = 6$.

**1)** $\\int_2^9 f\\,dx = \\,?$
**2)** $\\int_2^5 [f + 2g]\\,dx = \\,?$
**3)** $\\int_5^2 f\\,dx = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '20', '-12'],
          hint1: 'Additivity: $\\int_2^9 f = \\int_2^5 f + \\int_5^9 f = 12 + 6$.',
          hint2: '$\\int_2^5 f + 2\\int_2^5 g = 12 + 2(4)$.',
          hint3: 'Reverse limits: $\\int_5^2 f = -\\int_2^5 f = -12$.',
          explanation: '1) $12 + 6 = 18$.  2) $12 + 2(4) = 20$.  3) $-12$.',
        },
      },
      {
        id: 'def-int-3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression always equals $0$?',
              options: ['$\\int_a^a f(x)\\,dx$', '$\\int_a^b f(x)\\,dx$', '$\\int_a^b 0 \\cdot x\\,dx + 1$', '$\\int_0^1 1\\,dx$'],
              correctAnswer: 0,
              explanation: 'When the lower and upper limits are equal, the interval has zero width, so the integral is $0$ regardless of $f$.',
            },
            {
              question: 'If $\\int_0^4 f\\,dx = 9$, then $\\int_0^4 \\tfrac{1}{3}f\\,dx = $',
              options: ['$3$', '$27$', '$9$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'The constant-multiple rule pulls the $\\frac{1}{3}$ out: $\\frac{1}{3}(9) = 3$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-4-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 4 of 7 — FTC Part 2: Evaluating Integrals**

---

> 🔑 **The Payoff:** The **Fundamental Theorem of Calculus (Part 2)** says you can skip Riemann sums entirely. Find *any* antiderivative $F$ of $f$, then just subtract: $F(b) - F(a)$.`,
      },
      {
        id: 'def-int-4-ftc2',
        type: 'text' as const,
        content: `## The Fundamental Theorem, Part 2

If $f$ is continuous on $[a, b]$ and $F$ is **any** antiderivative of $f$ (so $F' = f$), then

$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

The standard shorthand is the **evaluation bar**:

$$\\int_a^b f(x)\\,dx = \\Big[F(x)\\Big]_a^b = F(b) - F(a)$$

### Power Rule for Antiderivatives

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\ne -1)$$

For a definite integral the $+C$ cancels in the subtraction, so we drop it.

> 🔑 **Key Idea:** This connects the two big ideas of calculus — the integral (area) is undone by the derivative. Antiderivatives are the bridge.`,
      },
      {
        id: 'def-int-4-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1: $\\int_0^4 x^2\\,dx$

Antiderivative of $x^2$ is $\\frac{x^3}{3}$:

$$\\int_0^4 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^4 = \\frac{4^3}{3} - \\frac{0^3}{3} = \\frac{64}{3} \\approx 21.33$$

This matches the value our Riemann sums were squeezing toward in Part 1. ✓

### Example 2: $\\int_1^3 (2x + 1)\\,dx$

Antiderivative is $x^2 + x$:

$$\\big[x^2 + x\\big]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10$$

### Example 3: $\\int_0^{\\pi} \\sin x\\,dx$

Antiderivative of $\\sin x$ is $-\\cos x$:

$$\\big[-\\cos x\\big]_0^{\\pi} = -\\cos\\pi - (-\\cos 0) = -(-1) - (-1) = 1 + 1 = 2$$`,
      },
      {
        id: 'def-int-4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Antiderivative** 🔽

Choose the correct antiderivative $F(x)$ for each integrand (ignore $+C$).`,
        exercise: {
          dropdowns: [
            { label: '$\\int x^3\\,dx$', options: ['$\\frac{x^4}{4}$', '$\\frac{x^2}{2}$', '$3x^2$', '$\\frac{x^3}{3}$'] },
            { label: '$\\int \\cos x\\,dx$', options: ['$\\sin x$', '$-\\sin x$', '$-\\cos x$', '$\\tan x$'] },
            { label: '$\\int e^x\\,dx$', options: ['$e^x$', '$x e^{x-1}$', '$\\frac{e^x}{x}$', '$\\ln x$'] },
            { label: '$\\int \\frac{1}{x}\\,dx$', options: ['$\\ln|x|$', '$-\\frac{1}{x^2}$', '$\\frac{x^0}{0}$', '$x^{-1}$'] },
          ],
          correctAnswers: ['$\\frac{x^4}{4}$', '$\\sin x$', '$e^x$', '$\\ln|x|$'],
          hint1: 'Power rule: raise the exponent by $1$ and divide by the new exponent. $\\int x^3 = \\frac{x^4}{4}$.',
          hint2: 'The antiderivative of $\\cos x$ is $\\sin x$ (since $\\frac{d}{dx}\\sin x = \\cos x$).',
          hint3: '$e^x$ is its own antiderivative; $\\frac{1}{x}$ integrates to $\\ln|x|$ (the power rule fails for $n=-1$).',
          explanation: '$\\int x^3 = \\frac{x^4}{4}$, $\\int \\cos x = \\sin x$, $\\int e^x = e^x$, $\\int \\frac{1}{x} = \\ln|x|$.',
        },
      },
      {
        id: 'def-int-4-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate with FTC** 🧮

Use $\\int_a^b f = F(b) - F(a)$.

**1)** $\\int_0^3 x^2\\,dx = \\,?$  *(integer)*
**2)** $\\int_1^2 6x\\,dx = \\,?$
**3)** $\\int_0^2 (3x^2 + 2)\\,dx = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '9', '12'],
          hint1: '$\\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{3} - 0 = 9$.',
          hint2: '$\\big[3x^2\\big]_1^2 = 3(4) - 3(1) = 12 - 3 = 9$.',
          hint3: '$\\big[x^3 + 2x\\big]_0^2 = (8 + 4) - 0 = 12$.',
          explanation: '1) $\\frac{3^3}{3} = 9$.  2) antiderivative $3x^2$ gives $12 - 3 = 9$.  3) antiderivative $x^3 + 2x$ gives $12 - 0 = 12$.',
        },
      },
      {
        id: 'def-int-4-recap',
        type: 'text' as const,
        content: `## The Three-Step Habit

Every FTC Part 2 evaluation follows the same rhythm:

1. **Antidifferentiate** the integrand to get $F(x)$ (drop the $+C$ — it cancels).
2. **Plug in** the upper limit, then the lower limit.
3. **Subtract:** $F(b) - F(a)$.

> 💡 Always evaluate **upper minus lower**, in that order. Reversing them flips the sign — a classic careless error.`,
      },
      {
        id: 'def-int-4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\int_0^{\\pi/2} \\cos x\\,dx = $',
              options: ['$1$', '$0$', '$-1$', '$\\frac{\\pi}{2}$'],
              correctAnswer: 0,
              explanation: '$\\big[\\sin x\\big]_0^{\\pi/2} = \\sin\\frac{\\pi}{2} - \\sin 0 = 1 - 0 = 1$.',
            },
            {
              question: 'Why can you use any antiderivative $F$ in $\\int_a^b f = F(b) - F(a)$?',
              options: ['Different antiderivatives differ by a constant, which cancels in $F(b) - F(a)$', 'There is only ever one antiderivative', 'The $+C$ is added back at the end', 'The limits make $C$ equal to zero'],
              correctAnswer: 0,
              explanation: 'Any two antiderivatives differ by a constant $C$. In the subtraction $F(b) - F(a)$ that $C$ appears in both terms and cancels.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-5-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 5 of 7 — FTC Part 1: Accumulation Functions**

---

> 🔑 **The Other Half:** FTC Part 1 looks at an integral whose *upper limit is a variable*. It builds a brand-new function — and tells you its derivative instantly.`,
      },
      {
        id: 'def-int-5-ftc1',
        type: 'text' as const,
        content: `## The Fundamental Theorem, Part 1

Define an **accumulation function**

$$g(x) = \\int_a^x f(t)\\,dt$$

This $g(x)$ measures the running total of signed area from the fixed point $a$ up to a moving right endpoint $x$. FTC Part 1 says:

$$g'(x) = \\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$$

In words: **the derivative of an integral (with respect to its upper limit) gives back the integrand.** Differentiation and integration undo each other.

> ⚠️ **Use a dummy variable** ($t$) inside the integral, since $x$ is already the limit. Writing $\\int_a^x f(x)\\,dx$ is sloppy — use $\\int_a^x f(t)\\,dt$.`,
      },
      {
        id: 'def-int-5-chain',
        type: 'text' as const,
        content: `## With a Chain Rule

If the upper limit is a *function* $u(x)$, apply the chain rule:

$$\\frac{d}{dx}\\int_a^{u(x)} f(t)\\,dt = f\\big(u(x)\\big)\\cdot u'(x)$$

### Example 1: $g(x) = \\int_2^x \\sqrt{1 + t^3}\\,dt$

Just substitute $x$ for $t$:

$$g'(x) = \\sqrt{1 + x^3}$$

### Example 2: $h(x) = \\int_0^{x^2} \\cos t\\,dt$

Here $u(x) = x^2$, so $u'(x) = 2x$:

$$h'(x) = \\cos(x^2)\\cdot 2x = 2x\\cos(x^2)$$

> 💡 The lower limit being a constant is what makes this clean. If both limits move, split with a constant in the middle.`,
      },
      {
        id: 'def-int-5-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $g(x) = \\int_1^x (t^2 + 5)\\,dt$, then $g\'(x) = $',
              options: ['$x^2 + 5$', '$\\frac{x^3}{3} + 5x$', '$2x$', '$t^2 + 5$'],
              correctAnswer: 0,
              explanation: 'FTC Part 1: differentiating an accumulation function just substitutes the upper limit into the integrand, giving $x^2 + 5$.',
            },
            {
              question: 'If $g(x) = \\int_3^x f(t)\\,dt$, what is $g(3)$?',
              options: ['$0$', '$f(3)$', '$f\'(3)$', 'cannot be determined'],
              correctAnswer: 0,
              explanation: 'When the upper limit equals the lower limit, the interval has zero width, so $g(3) = \\int_3^3 f(t)\\,dt = 0$.',
            },
          ],
        },
      },
      {
        id: 'def-int-5-chain-drop',
        type: 'dropdown-select' as const,
        content: `**Derivatives of Accumulation Functions** 🔽

Choose $g'(x)$ for each definition.`,
        exercise: {
          dropdowns: [
            { label: '$g(x) = \\int_0^x e^{t}\\,dt$', options: ['$e^x$', '$e^x - 1$', '$x e^x$', '$\\frac{e^x}{x}$'] },
            { label: '$g(x) = \\int_1^x \\ln t\\,dt$', options: ['$\\ln x$', '$\\frac{1}{x}$', '$x\\ln x - x$', '$\\ln x - 1$'] },
            { label: '$g(x) = \\int_0^{3x} \\sin t\\,dt$', options: ['$3\\sin(3x)$', '$\\sin(3x)$', '$-\\cos(3x)$', '$3\\cos(3x)$'] },
          ],
          correctAnswers: ['$e^x$', '$\\ln x$', '$3\\sin(3x)$'],
          hint1: 'FTC Part 1: substitute the upper limit into the integrand. $\\int_0^x e^t \\Rightarrow e^x$.',
          hint2: '$\\int_1^x \\ln t\\,dt \\Rightarrow \\ln x$. (Do NOT antidifferentiate — just plug in.)',
          hint3: 'Chain rule: upper limit $u = 3x$, $u\' = 3$, so $\\sin(3x)\\cdot 3 = 3\\sin(3x)$.',
          explanation: '$\\frac{d}{dx}\\int_0^x e^t = e^x$; $\\frac{d}{dx}\\int_1^x \\ln t = \\ln x$; with $u = 3x$, $\\frac{d}{dx}\\int_0^{3x}\\sin t = \\sin(3x)\\cdot 3 = 3\\sin(3x)$.',
        },
      },
      {
        id: 'def-int-5-graph',
        type: 'text' as const,
        content: `## Reading $g$ from the Graph of $f$

Because $g'(x) = f(x)$, the **graph of $f$ tells you everything about the shape of $g$**:

| Where $f$ is... | $g$ is... |
|-----------------|-----------|
| positive (above axis) | increasing |
| negative (below axis) | decreasing |
| crossing axis $+\\to-$ | at a local **max** |
| crossing axis $-\\to+$ | at a local **min** |

This is exactly the relationship between a function and its derivative — because $f$ **is** $g'$.

> 🔑 **Key Idea:** Accumulation functions turn area facts about $f$ into slope facts about $g$. AP exams test this with a graph of $f$ and questions about $g$.`,
      },
      {
        id: 'def-int-5-graph-drill',
        type: 'input-boxes' as const,
        content: `**Accumulation Values** 🧮

Let $g(x) = \\int_0^x f(t)\\,dt$ where $f$ is given piecewise on a graph. On $[0,2]$, $f = 3$ (constant); on $[2,5]$, $f = -1$ (constant).

**1)** $g(2) = \\,?$  *(area of the rectangle from $0$ to $2$)*
**2)** $g(5) = \\,?$  *(add the signed area from $2$ to $5$)*
**3)** On the interval $[2,5]$, is $g$ increasing or decreasing? Enter "increasing" or "decreasing".`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '3', 'decreasing'],
          hint1: '$g(2) = \\int_0^2 3\\,dt = 3 \\cdot 2 = 6$.',
          hint2: 'From $2$ to $5$: signed area $= (-1)(3) = -3$, so $g(5) = 6 + (-3) = 3$.',
          hint3: 'On $[2,5]$, $f < 0$, and $g\'(x) = f(x) < 0$, so $g$ is decreasing.',
          explanation: '$g(2) = 6$; $g(5) = 6 - 3 = 3$. Since $f < 0$ on $[2,5]$, $g$ is decreasing there.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-6-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 6 of 7 — Applications: Net Change & Average Value**

---

> 🔑 **Integrals in the Wild:** A definite integral of a *rate* gives the *total change*, and it also delivers the **average value** of a function over an interval. These are the AP exam's favorite real-world uses.`,
      },
      {
        id: 'def-int-6-netchange',
        type: 'text' as const,
        content: `## The Net Change Theorem

If $F'(x)$ is the **rate** at which a quantity changes, then the integral of the rate is the **net change** in the quantity:

$$\\int_a^b F'(x)\\,dx = F(b) - F(a)$$

### Velocity → Displacement

If $v(t)$ is velocity, then

$$\\int_a^b v(t)\\,dt = \\text{displacement (net change in position)}$$

$$\\int_a^b |v(t)|\\,dt = \\text{total distance traveled}$$

> ⚠️ **Displacement vs. distance:** displacement uses the **signed** integral (back-and-forth cancels). Total distance uses $|v(t)|$, so every bit of motion counts as positive.`,
      },
      {
        id: 'def-int-6-netchange-worked',
        type: 'text' as const,
        content: `## Worked Example: a moving particle

A particle has velocity $v(t) = 3t^2 - 12$ (m/s) for $0 \\le t \\le 3$.

**Displacement** over $[0, 3]$:

$$\\int_0^3 (3t^2 - 12)\\,dt = \\big[t^3 - 12t\\big]_0^3 = (27 - 36) - 0 = -9 \\text{ m}$$

So the particle ends $9$ m **behind** where it started.

**Net change in a tank.** Water flows in at $r(t) = 4t$ liters/min for $0 \\le t \\le 5$. Total water added:

$$\\int_0^5 4t\\,dt = \\big[2t^2\\big]_0^5 = 2(25) - 0 = 50 \\text{ liters}$$

> 💡 The pattern is always the same: **integrate the rate to get the total accumulated change.**`,
      },
      {
        id: 'def-int-6-net-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A population grows at rate $P\'(t) = 200$ animals/year. The net change from $t = 2$ to $t = 7$ is...',
              options: ['$1000$ animals', '$200$ animals', '$5$ animals', '$1400$ animals'],
              correctAnswer: 0,
              explanation: '$\\int_2^7 200\\,dt = 200(7 - 2) = 200 \\cdot 5 = 1000$ animals.',
            },
            {
              question: 'For total **distance** traveled by a particle, you integrate...',
              options: ['$|v(t)|$', '$v(t)$', '$a(t)$', '$v\'(t)$'],
              correctAnswer: 0,
              explanation: 'Total distance counts all motion as positive, so you integrate the **absolute value** of velocity, $\\int |v(t)|\\,dt$.',
            },
          ],
        },
      },
      {
        id: 'def-int-6-average',
        type: 'text' as const,
        content: `## Average Value of a Function

The **average value** of $f$ on $[a, b]$ is

$$f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx$$

Think of it as the area divided by the width — the height of a rectangle on $[a,b]$ that holds the **same area** as the region under $f$.

### Example: average of $f(x) = x^2$ on $[0, 3]$

$$f_{\\text{avg}} = \\frac{1}{3 - 0}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\cdot\\frac{27}{3} = \\frac{1}{3}\\cdot 9 = 3$$

> 🔑 **Key Idea:** Don't forget the $\\frac{1}{b-a}$ factor — averaging means dividing by the interval length.`,
      },
      {
        id: 'def-int-6-app-drop',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Setup** 🔽

Match each question to the integral that answers it.`,
        exercise: {
          dropdowns: [
            { label: 'Net change in position from velocity $v(t)$ on $[a,b]$:', options: ['$\\int_a^b v(t)\\,dt$', '$\\int_a^b |v(t)|\\,dt$', '$\\frac{1}{b-a}\\int_a^b v(t)\\,dt$', '$v(b) - v(a)$'] },
            { label: 'Total distance traveled on $[a,b]$:', options: ['$\\int_a^b |v(t)|\\,dt$', '$\\int_a^b v(t)\\,dt$', '$\\int_a^b a(t)\\,dt$', '$v(b)$'] },
            { label: 'Average velocity on $[a,b]$:', options: ['$\\frac{1}{b-a}\\int_a^b v(t)\\,dt$', '$\\int_a^b v(t)\\,dt$', '$\\frac{v(a)+v(b)}{2}$', '$\\int_a^b |v(t)|\\,dt$'] },
          ],
          correctAnswers: ['$\\int_a^b v(t)\\,dt$', '$\\int_a^b |v(t)|\\,dt$', '$\\frac{1}{b-a}\\int_a^b v(t)\\,dt$'],
          hint1: 'Displacement is the **signed** integral of velocity (back-and-forth cancels).',
          hint2: 'Total distance counts all motion as positive — integrate $|v(t)|$.',
          hint3: 'Average value of any function uses the $\\frac{1}{b-a}$ factor times the integral.',
          explanation: 'Displacement $= \\int v$, total distance $= \\int |v|$, and average velocity $= \\frac{1}{b-a}\\int v$.',
        },
      },
      {
        id: 'def-int-6-avg-drill',
        type: 'input-boxes' as const,
        content: `**Net Change & Average Value** 🧮

**1)** Velocity $v(t) = 2t$ on $[0, 4]$. Displacement $= \\int_0^4 2t\\,dt = \\,?$
**2)** Average value of $f(x) = 6x$ on $[0, 2]$: $f_{\\text{avg}} = \\,?$
**3)** Average value of $f(x) = x^2$ on $[0, 6]$: $f_{\\text{avg}} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '6', '12'],
          hint1: '$\\int_0^4 2t\\,dt = \\big[t^2\\big]_0^4 = 16 - 0 = 16$.',
          hint2: '$\\frac{1}{2}\\int_0^2 6x\\,dx = \\frac{1}{2}\\big[3x^2\\big]_0^2 = \\frac{1}{2}(12) = 6$.',
          hint3: '$\\int_0^6 x^2\\,dx = \\frac{216}{3} = 72$; then $\\frac{1}{6}(72) = 12$.',
          explanation: '1) displacement $= 16$.  2) $\\frac{1}{2}(12) = 6$.  3) $\\int_0^6 x^2 = 72$, and $\\frac{1}{6}(72) = 12$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'definite-integrals',
    sections: [
      {
        id: 'def-int-7-intro',
        type: 'text' as const,
        content: `# ∫ Definite Integrals & the Fundamental Theorem

**Part 7 of 7 — Mixed Practice & Mastery Check**

---

You can now (1) estimate area with Riemann sums, (2) read integrals from geometry, (3) use the integral properties, (4) evaluate with **FTC Part 2**, (5) differentiate accumulation functions with **FTC Part 1**, and (6) apply integrals to net change and average value. Let's put it all together.`,
      },
      {
        id: 'def-int-7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Estimate area | Riemann sum $\\sum f(x_i^*)\\,\\Delta x$, $\\;\\Delta x = \\frac{b-a}{n}$ |
| Exact area, nice shape | use geometry (triangle, rectangle, circle) |
| Evaluate $\\int_a^b f$ | **FTC 2:** $F(b) - F(a)$ for any antiderivative $F$ |
| $\\frac{d}{dx}\\int_a^x f(t)\\,dt$ | **FTC 1:** $= f(x)$ (chain rule if limit is $u(x)$) |
| Total change from a rate | $\\int_a^b (\\text{rate})\\,dt$ |
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |

> ⚠️ Remember: signed area (below the axis is negative), reverse-limit sign flip, and the $\\frac{1}{b-a}$ on average value.`,
      },
      {
        id: 'def-int-7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\int_1^2 (4x^3)\\,dx = $',
              options: ['$15$', '$16$', '$8$', '$12$'],
              correctAnswer: 0,
              explanation: 'Antiderivative is $x^4$: $\\big[x^4\\big]_1^2 = 16 - 1 = 15$.',
            },
            {
              question: 'If $g(x) = \\int_0^{x^2}\\sin t\\,dt$, then $g\'(x) = $',
              options: ['$2x\\sin(x^2)$', '$\\sin(x^2)$', '$-\\cos(x^2)$', '$2x\\cos(x^2)$'],
              correctAnswer: 0,
              explanation: 'Chain rule with $u = x^2$, $u\' = 2x$: $g\'(x) = \\sin(x^2)\\cdot 2x = 2x\\sin(x^2)$.',
            },
          ],
        },
      },
      {
        id: 'def-int-7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Compute It** 🧮

**1)** $\\int_0^2 (3x^2)\\,dx = \\,?$
**2)** Average value of $f(x) = 4$ on $[1, 9]$: $f_{\\text{avg}} = \\,?$  *(a constant function's average is just that constant)*
**3)** Given $\\int_0^4 f\\,dx = 10$ and $\\int_0^4 g\\,dx = 6$, find $\\int_0^4 [f - g]\\,dx = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '4'],
          hint1: '$\\big[x^3\\big]_0^2 = 8 - 0 = 8$.',
          hint2: 'A constant function equals its own average, so $f_{\\text{avg}} = 4$. (Check: $\\frac{1}{8}\\int_1^9 4\\,dx = \\frac{1}{8}(32) = 4$.)',
          hint3: '$\\int_0^4 [f - g] = \\int_0^4 f - \\int_0^4 g = 10 - 6 = 4$.',
          explanation: '1) $8$.  2) $4$.  3) $10 - 6 = 4$.',
        },
      },
      {
        id: 'def-int-7-ready',
        type: 'text' as const,
        content: `## You're Ready

You've moved from estimating area with rectangles all the way to the two halves of the Fundamental Theorem and their real-world payoffs. One last check pulls together evaluation (FTC 2), accumulation (FTC 1), and motion.

> 🔑 **Remember the big picture:** the **derivative** measures instantaneous rate; the **integral** accumulates it back into total change. They are inverse operations — that is the Fundamental Theorem of Calculus.`,
      },
      {
        id: 'def-int-7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$\\int_0^3 (2x + 1)\\,dx = $',
              options: ['$12$', '$9$', '$10$', '$6$'],
              correctAnswer: 0,
              explanation: 'Antiderivative $x^2 + x$: $\\big[x^2 + x\\big]_0^3 = (9 + 3) - 0 = 12$.',
            },
            {
              question: 'What does $\\frac{d}{dx}\\int_2^x \\sqrt{t^4 + 1}\\,dt$ equal?',
              options: ['$\\sqrt{x^4 + 1}$', '$\\sqrt{t^4 + 1}$', '$\\frac{1}{2\\sqrt{x^4+1}}$', '$\\sqrt{x^4 + 1} - \\sqrt{17}$'],
              correctAnswer: 0,
              explanation: 'FTC Part 1: the derivative of an accumulation function substitutes the upper limit $x$ for $t$, giving $\\sqrt{x^4 + 1}$.',
            },
            {
              question: 'A particle\'s velocity is $v(t) = t - 3$ on $[0, 5]$. Its **displacement** is $\\int_0^5 (t - 3)\\,dt = $',
              options: ['$-2.5$', '$2.5$', '$5$', '$0$'],
              correctAnswer: 0,
              explanation: '$\\big[\\frac{t^2}{2} - 3t\\big]_0^5 = (\\frac{25}{2} - 15) - 0 = 12.5 - 15 = -2.5$.',
            },
          ],
        },
      },
    ],
  },
]
