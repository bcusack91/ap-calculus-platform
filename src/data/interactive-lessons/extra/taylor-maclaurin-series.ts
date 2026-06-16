import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Taylor and Maclaurin Series (AP Calculus BC).
 * Registry key / DB Topic.slug: 'taylor-maclaurin-series'.
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Focuses on the FOUNDATIONS of building a
 * Taylor/Maclaurin series from derivatives, the coefficient formula, centering, and
 * the convergence picture; complements the broader 'common-taylor-series' suite.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms1-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 1 of 7 — The Big Idea: Polynomials That Mimic Functions**

---

### Topics in This Part

| Section |
|---------|
| Why approximate with polynomials? |
| Matching value, slope, and curvature |
| The linearization as a first step |

> 🔑 **Key Concept:** A **Taylor series** rebuilds a function near a single point using nothing but a polynomial — by forcing the polynomial's value and *all* of its derivatives to match the function at that point. Get this matching idea, and every formula in this lesson will feel inevitable.`,
      },
      {
        id: 'tms1-why',
        type: 'text' as const,
        content: `## Why Polynomials?

Polynomials are the friendliest functions in mathematics: a calculator can add and multiply, but it cannot *directly* compute $\\sin(0.3)$ or $e^{0.1}$. Under the hood it evaluates a **polynomial** that hugs the true function.

The strategy: pick a center $x = a$ where we already know everything, then build a polynomial $P(x)$ that agrees with $f$ as closely as possible near $a$.

- Agree in **value**: $P(a) = f(a)$
- Agree in **slope**: $P'(a) = f'(a)$
- Agree in **concavity**: $P''(a) = f''(a)$
- …and so on for every higher derivative.

> 💡 The more derivatives you match, the longer the polynomial *clings* to the curve as you move away from $a$.`,
      },
      {
        id: 'tms1-linear',
        type: 'text' as const,
        content: `## Start Simple: The Linearization

You have already met the first two matches — it is the **tangent line** (linearization):

$$L(x) = f(a) + f'(a)\\,(x - a)$$

This matches $f$ in value and slope at $a$. It is the **degree-1 Taylor polynomial**.

### Example: $f(x) = e^x$ at $a = 0$

Since $f(0) = 1$ and $f'(0) = e^0 = 1$:

$$L(x) = 1 + 1\\cdot(x - 0) = 1 + x$$

Near $0$ this is excellent: $L(0.1) = 1.1$, while the true value $e^{0.1} \\approx 1.10517$.

> 🔑 A Taylor polynomial is just the linearization *taken further* — adding a curvature term, then a higher-order term, and so on. Each new term sharpens the fit.`,
      },
      {
        id: 'tms1-mc-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Taylor polynomial approximates a function near $x = a$ by forcing the polynomial to match the function in which way(s)?',
              options: [
                'Its value and all of its derivatives at $a$',
                'Its value only at $a$',
                'Its average value over an interval',
                'Its $x$-intercepts',
              ],
              correctAnswer: 0,
              explanation: 'The defining property is that the polynomial and the function share the same value AND the same successive derivatives at the center $a$. Matching more derivatives improves the fit near $a$.',
            },
            {
              question: 'The degree-1 Taylor polynomial of $f$ at $a$ is the same as:',
              options: [
                'The tangent line (linearization) at $a$',
                'A horizontal line through $f(a)$',
                'The secant line through two nearby points',
                'The derivative $f\'(a)$',
              ],
              correctAnswer: 0,
              explanation: 'The degree-1 polynomial $f(a) + f\'(a)(x-a)$ matches value and slope — that is exactly the tangent line / linearization.',
            },
          ],
        },
      },
      {
        id: 'tms1-input-linear',
        type: 'input-boxes' as const,
        content: `**Build a Linearization** 🧮

Let $f(x) = \\sqrt{x}$ at the center $a = 9$. Recall $f'(x) = \\dfrac{1}{2\\sqrt{x}}$.

**1)** $f(9) = \\,?$
**2)** $f'(9) = \\,?$  *(decimal is fine)*
**3)** Use $L(x) = f(9) + f'(9)(x-9)$ to estimate $\\sqrt{9.4}$. Enter $L(9.4)$ rounded to 4 decimals.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '0.16666666666666666', '3.0667'],
          hint1: '$f(9) = \\sqrt{9} = 3$.',
          hint2: '$f\'(9) = \\dfrac{1}{2\\sqrt{9}} = \\dfrac{1}{6} \\approx 0.1667$.',
          hint3: '$L(9.4) = 3 + \\dfrac{1}{6}(0.4) = 3 + 0.0\\overline{6} \\approx 3.0667$.',
          explanation: '$f(9)=3$ and $f\'(9)=\\tfrac16$, so $L(x)=3+\\tfrac16(x-9)$. Then $L(9.4)=3+\\tfrac16(0.4)\\approx 3.0667$ (true $\\sqrt{9.4}\\approx 3.0659$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms2-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 2 of 7 — The Coefficient Formula**

---

> 🔑 **The Idea:** Matching the $n$th derivative forces the $n$th coefficient to be exactly $\\dfrac{f^{(n)}(a)}{n!}$. That single formula generates *every* Taylor series.`,
      },
      {
        id: 'tms2-derive',
        type: 'text' as const,
        content: `## Where the $n!$ Comes From

Write the polynomial in powers of $(x-a)$:

$$P(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + c_3(x-a)^3 + \\cdots$$

Plug in $x = a$: every $(x-a)$ term dies, leaving $P(a) = c_0$. So $c_0 = f(a)$.

Differentiate once and set $x=a$: $P'(a) = c_1$, so $c_1 = f'(a)$.

Differentiate **twice**: the $c_2(x-a)^2$ term becomes $2\\cdot 1\\cdot c_2 = 2!\\,c_2$, so $c_2 = \\dfrac{f''(a)}{2!}$.

Differentiate **three** times: the cubic term becomes $3\\cdot 2\\cdot 1\\cdot c_3 = 3!\\,c_3$, so $c_3 = \\dfrac{f'''(a)}{3!}$.

> 🔑 **The pattern — the master formula:**
> $$c_n = \\frac{f^{(n)}(a)}{n!}$$
> The factorial appears because differentiating $(x-a)^n$ exactly $n$ times pulls down $n\\cdot(n-1)\\cdots 1 = n!$.`,
      },
      {
        id: 'tms2-formula',
        type: 'text' as const,
        content: `## The Taylor Series

Putting the coefficients together gives the **Taylor series of $f$ centered at $a$**:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}\\,(x-a)^n$$

Written out:

$$f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\cdots$$

| Term ($n$) | Coefficient | Power |
|-----------|-------------|-------|
| $0$ | $f(a)$ | $(x-a)^0$ |
| $1$ | $f'(a)$ | $(x-a)^1$ |
| $2$ | $\\frac{f''(a)}{2!}$ | $(x-a)^2$ |
| $3$ | $\\frac{f'''(a)}{3!}$ | $(x-a)^3$ |

> 💡 Convention: $f^{(0)} = f$ and $0! = 1$, so the $n=0$ term really is just $f(a)$.`,
      },
      {
        id: 'tms2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Coefficient** 🔽

For the Taylor series of $f$ at $a$, choose the correct coefficient of each power.`,
        exercise: {
          dropdowns: [
            { label: 'Coefficient of $(x-a)^0$:', options: ['$f(a)$', '$f\'(a)$', '$\\frac{f(a)}{0}$', '$1$'] },
            { label: 'Coefficient of $(x-a)^2$:', options: ['$\\frac{f\'\'(a)}{2!}$', '$f\'\'(a)$', '$\\frac{f\'(a)}{2!}$', '$2\\,f\'\'(a)$'] },
            { label: 'Coefficient of $(x-a)^4$:', options: ['$\\frac{f^{(4)}(a)}{4!}$', '$\\frac{f^{(4)}(a)}{4}$', '$\\frac{f^{(3)}(a)}{4!}$', '$4!\\,f^{(4)}(a)$'] },
          ],
          correctAnswers: ['$f(a)$', '$\\frac{f\'\'(a)}{2!}$', '$\\frac{f^{(4)}(a)}{4!}$'],
          hint1: 'The $n=0$ coefficient is $\\frac{f^{(0)}(a)}{0!} = f(a)$.',
          hint2: 'Use $c_n = \\frac{f^{(n)}(a)}{n!}$ with $n=2$, and $2! = 2$.',
          hint3: 'With $n=4$: numerator is the 4th derivative $f^{(4)}(a)$, denominator is $4! = 24$.',
          explanation: 'Every coefficient follows $c_n=\\frac{f^{(n)}(a)}{n!}$: the derivative order in the numerator equals the power, and the factorial in the denominator equals the power.',
        },
      },
      {
        id: 'tms2-input-coeff',
        type: 'input-boxes' as const,
        content: `**Compute Coefficients** 🧮

Suppose at the center $a$ you know $f''(a) = 12$ and $f'''(a) = 30$.

**1)** Coefficient of $(x-a)^2$ in the Taylor series $= \\,?$  *(use $\\frac{f''(a)}{2!}$)*
**2)** Coefficient of $(x-a)^3$ in the Taylor series $= \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '5'],
          hint1: '$\\frac{f\'\'(a)}{2!} = \\frac{12}{2} = 6$.',
          hint2: '$\\frac{f\'\'\'(a)}{3!} = \\frac{30}{6} = 5$.',
          explanation: '1) $\\frac{12}{2!}=\\frac{12}{2}=6$.  2) $\\frac{30}{3!}=\\frac{30}{6}=5$. Always divide the $n$th derivative by $n!$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms3-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 3 of 7 — Maclaurin Series (centered at 0)**

---

> 🔑 **Definition:** A **Maclaurin series** is just a Taylor series with center $a = 0$. Every $(x-a)$ becomes $x$, and you only ever evaluate derivatives at $0$.`,
      },
      {
        id: 'tms3-formula',
        type: 'text' as const,
        content: `## The Maclaurin Series

Set $a = 0$ in the Taylor formula:

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}\\,x^n = f(0) + f'(0)\\,x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\cdots$$

The recipe is mechanical:

1. Differentiate $f$ repeatedly.
2. Evaluate each derivative at $x = 0$.
3. Divide the $n$th value by $n!$ — that's the coefficient of $x^n$.

> 💡 Maclaurin series are the workhorses of AP BC because the derivatives at $0$ for $e^x$, $\\sin x$, and $\\cos x$ are clean and repeating.`,
      },
      {
        id: 'tms3-worked-ex',
        type: 'text' as const,
        content: `## Worked Example: Maclaurin Series for $e^x$

Here $f(x) = e^x$, so **every** derivative is $e^x$, and at $0$ each equals $1$:

$$f(0) = f'(0) = f''(0) = \\cdots = 1$$

Apply the formula:

$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$$

> ✅ **Check the linear part:** the first two terms are $1 + x$ — exactly the linearization we found in Part 1.`,
      },
      {
        id: 'tms3-worked-cos',
        type: 'text' as const,
        content: `## Worked Example: Maclaurin Series for $\\cos x$

Differentiate $\\cos x$ and evaluate at $0$ — the values cycle:

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ |
|-----|-------------|--------------|
| $0$ | $\\cos x$ | $1$ |
| $1$ | $-\\sin x$ | $0$ |
| $2$ | $-\\cos x$ | $-1$ |
| $3$ | $\\sin x$ | $0$ |
| $4$ | $\\cos x$ | $1$ |

Only the **even** powers survive (odd derivatives vanish at $0$), with alternating signs:

$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$$

> ⚠️ Because $\\cos x$ is an **even** function, its Maclaurin series contains only even powers. Likewise $\\sin x$, being odd, has only odd powers.`,
      },
      {
        id: 'tms3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Maclaurin series is a Taylor series centered at which value?',
              options: ['$a = 0$', '$a = 1$', '$a = x$', 'Any center you like'],
              correctAnswer: 0,
              explanation: 'By definition, "Maclaurin" means the center is $a = 0$, so every $(x-a)$ term becomes $x$ and derivatives are evaluated at $0$.',
            },
            {
              question: 'The Maclaurin series for $\\sin x$ is:',
              options: [
                '$x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$',
                '$1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots$',
                '$1 + x + \\dfrac{x^2}{2!} + \\cdots$',
                '$x + \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} + \\cdots$',
              ],
              correctAnswer: 0,
              explanation: '$\\sin x$ is odd, so only odd powers appear with alternating signs: $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$. Option 2 is $\\cos x$; option 3 is $e^x$; option 4 has the wrong (non-alternating) signs.',
            },
          ],
        },
      },
      {
        id: 'tms3-input-ex',
        type: 'input-boxes' as const,
        content: `**Coefficients of $e^x$** 🧮

Using $e^x = \\sum \\dfrac{x^n}{n!}$:

**1)** Coefficient of $x^3$ in the Maclaurin series of $e^x$ $= \\,?$  *(fraction like 1/6 is fine)*
**2)** Coefficient of $x^0$ (the constant term) $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/6', '1'],
          hint1: 'The coefficient of $x^n$ is $\\frac{1}{n!}$.',
          hint2: 'For $x^3$: $\\frac{1}{3!} = \\frac{1}{6}$. For $x^0$: $\\frac{1}{0!} = \\frac{1}{1} = 1$.',
          hint3: 'Remember $0! = 1$.',
          explanation: '1) $\\frac{1}{3!}=\\frac{1}{6}$.  2) $\\frac{1}{0!}=1$. Every coefficient of the $e^x$ series is the reciprocal factorial $\\frac{1}{n!}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms4-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 4 of 7 — Taylor Series at a Nonzero Center**

---

> 🔑 **Why center elsewhere?** Sometimes $0$ is a bad place to expand — the function may be undefined there (like $\\ln x$) or you may want accuracy near a different point. Choose the center $a$ where you know the derivatives and where the action is.`,
      },
      {
        id: 'tms4-method',
        type: 'text' as const,
        content: `## The Procedure for Center $a$

It is the same recipe, just evaluated at $a$ and written in powers of $(x-a)$:

1. Compute $f(a), f'(a), f''(a), \\ldots$
2. Form coefficients $\\dfrac{f^{(n)}(a)}{n!}$.
3. Attach each to $(x-a)^n$.

$$f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots$$

> ⚠️ **Most common error:** writing powers of $x$ instead of $(x-a)$. If the center is $a = 1$, every term must contain $(x-1)$, **not** $x$.`,
      },
      {
        id: 'tms4-worked-ln',
        type: 'text' as const,
        content: `## Worked Example: $\\ln x$ at $a = 1$

We cannot center $\\ln x$ at $0$ (it is undefined there), so use $a = 1$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(1)$ | $\\dfrac{f^{(n)}(1)}{n!}$ |
|-----|-------------|--------------|--------------------------|
| $0$ | $\\ln x$ | $0$ | $0$ |
| $1$ | $\\dfrac{1}{x}$ | $1$ | $1$ |
| $2$ | $-\\dfrac{1}{x^2}$ | $-1$ | $-\\dfrac{1}{2}$ |
| $3$ | $\\dfrac{2}{x^3}$ | $2$ | $\\dfrac{2}{3!}=\\dfrac{1}{3}$ |
| $4$ | $-\\dfrac{6}{x^4}$ | $-6$ | $-\\dfrac{6}{4!}=-\\dfrac{1}{4}$ |

So:

$$\\ln x = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\frac{(x-1)^4}{4} + \\cdots$$

> 💡 Notice the pattern $\\sum_{n=1}^{\\infty} \\dfrac{(-1)^{n-1}}{n}(x-1)^n$. The constant term is $0$ because $\\ln 1 = 0$.`,
      },
      {
        id: 'tms4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Center It Correctly** 🔽

For the Taylor series of $f(x)$ centered at $a = 2$, choose the correct piece of each term.`,
        exercise: {
          dropdowns: [
            { label: 'The power used in each term is:', options: ['$(x-2)^n$', '$x^n$', '$(x+2)^n$', '$(2-x)^n$'] },
            { label: 'The constant ($n=0$) term equals:', options: ['$f(2)$', '$f(0)$', '$f\'(2)$', '$0$'] },
            { label: 'The coefficient of $(x-2)^2$ is:', options: ['$\\frac{f\'\'(2)}{2!}$', '$\\frac{f\'\'(0)}{2!}$', '$f\'\'(2)$', '$\\frac{f\'(2)}{2!}$'] },
          ],
          correctAnswers: ['$(x-2)^n$', '$f(2)$', '$\\frac{f\'\'(2)}{2!}$'],
          hint1: 'Center $a=2$ means every term is built from $(x-2)$.',
          hint2: 'The constant term is $\\frac{f^{(0)}(a)}{0!} = f(a) = f(2)$.',
          hint3: 'Coefficients use derivatives evaluated AT the center: $\\frac{f^{(n)}(2)}{n!}$.',
          explanation: 'Centering at $a=2$ forces powers of $(x-2)$ and derivatives evaluated at $2$. Using $x^n$ or derivatives at $0$ would be a Maclaurin (center-0) mistake.',
        },
      },
      {
        id: 'tms4-input-ln',
        type: 'input-boxes' as const,
        content: `**Build the $\\ln x$ Series at $a = 1$** 🧮

Using the table above for $f(x) = \\ln x$ at $a = 1$:

**1)** Coefficient of $(x-1)^1$ $= \\,?$
**2)** Coefficient of $(x-1)^2$ $= \\,?$  *(fraction like -1/2 is fine)*
**3)** Coefficient of $(x-1)^3$ $= \\,?$  *(fraction like 1/3 is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-1/2', '1/3'],
          hint1: '$f\'(1) = \\frac{1}{1} = 1$, so the $(x-1)^1$ coefficient is $1$.',
          hint2: '$f\'\'(1) = -1$, so the coefficient is $\\frac{-1}{2!} = -\\frac{1}{2}$.',
          hint3: '$f\'\'\'(1) = 2$, so the coefficient is $\\frac{2}{3!} = \\frac{2}{6} = \\frac{1}{3}$.',
          explanation: 'The series is $(x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\cdots$, so the coefficients are $1$, $-\\frac12$, $\\frac13$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms5-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 5 of 7 — Taylor Polynomials & Sigma Notation**

---

> 🔑 **Truncate to use it:** An infinite series is exact, but to *compute* you stop after the degree-$n$ term. That finite piece is the **Taylor polynomial** $P_n(x)$ — the practical approximation tool.`,
      },
      {
        id: 'tms5-poly',
        type: 'text' as const,
        content: `## The $n$th Taylor Polynomial

$$P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$$

$P_n$ is the series chopped off after the $(x-a)^n$ term. Higher $n$ = better fit near $a$.

| Polynomial | Includes terms up to | Matches |
|-----------|----------------------|---------|
| $P_1$ | degree $1$ | tangent line |
| $P_2$ | degree $2$ | adds concavity |
| $P_3$ | degree $3$ | adds the cubic bend |

> 💡 $P_n$ and $f$ agree in value and in the first $n$ derivatives at $a$. That is the whole reason it tracks the curve.`,
      },
      {
        id: 'tms5-worked-p3',
        type: 'text' as const,
        content: `## Worked Example: $P_3$ for $e^x$ at $a = 0$, then estimate $e^{0.2}$

From Part 3, $e^x = 1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\cdots$, so:

$$P_3(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}$$

Estimate $e^{0.2}$ by plugging in $x = 0.2$:

$$P_3(0.2) = 1 + 0.2 + \\frac{0.04}{2} + \\frac{0.008}{6} = 1 + 0.2 + 0.02 + 0.0013\\overline{3} \\approx 1.22133$$

> ✅ **Compare:** the true value is $e^{0.2} \\approx 1.22140$. Just four terms nail it to four decimals.`,
      },
      {
        id: 'tms5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Sigma Notation** 🔽

Consider $\\displaystyle \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$.`,
        exercise: {
          dropdowns: [
            { label: 'This is the Maclaurin series of:', options: ['$\\cos x$', '$\\sin x$', '$e^x$', '$\\ln(1+x)$'] },
            { label: 'The $n=0$ term equals:', options: ['$1$', '$x$', '$0$', '$\\frac{x^2}{2}$'] },
            { label: 'The $n=1$ term equals:', options: ['$-\\frac{x^2}{2!}$', '$\\frac{x^2}{2!}$', '$-\\frac{x}{1!}$', '$\\frac{x^3}{3!}$'] },
          ],
          correctAnswers: ['$\\cos x$', '$1$', '$-\\frac{x^2}{2!}$'],
          hint1: 'Even powers $x^{2n}$ with alternating signs and even factorials $(2n)!$ are the signature of cosine.',
          hint2: 'At $n=0$: $\\frac{(-1)^0 x^0}{0!} = \\frac{1}{1} = 1$.',
          hint3: 'At $n=1$: $\\frac{(-1)^1 x^2}{2!} = -\\frac{x^2}{2!}$.',
          explanation: 'This is $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$. Evaluate the general term at each $n$ to recover the written-out series.',
        },
      },
      {
        id: 'tms5-input-p2',
        type: 'input-boxes' as const,
        content: `**Evaluate a Taylor Polynomial** 🧮

For $\\cos x$, the degree-2 Maclaurin polynomial is $P_2(x) = 1 - \\dfrac{x^2}{2}$.

**1)** $P_2(0.4) = \\,?$  *(enter the exact decimal)*
**2)** $P_3$ for $\\sin x$ is $x - \\dfrac{x^3}{6}$. Compute $P_3(0.6)$. *(round to 4 decimals)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.92', '0.564'],
          hint1: '$P_2(0.4) = 1 - \\frac{(0.4)^2}{2} = 1 - \\frac{0.16}{2} = 1 - 0.08$.',
          hint2: '$P_3(0.6) = 0.6 - \\frac{(0.6)^3}{6} = 0.6 - \\frac{0.216}{6} = 0.6 - 0.036$.',
          hint3: '$1 - 0.08 = 0.92$;  $0.6 - 0.036 = 0.564$.',
          explanation: '1) $1 - 0.08 = 0.92$ (true $\\cos 0.4 \\approx 0.9211$).  2) $0.6 - 0.036 = 0.564$ (true $\\sin 0.6 \\approx 0.5646$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms6-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 6 of 7 — Convergence & the Radius of Convergence**

---

> 🔑 **The catch:** A Taylor series only equals the function *where the series converges*. The set of $x$ for which it converges is an interval centered at $a$ — described by the **radius of convergence** $R$.`,
      },
      {
        id: 'tms6-radius',
        type: 'text' as const,
        content: `## Interval & Radius of Convergence

A power series $\\sum c_n (x-a)^n$ converges on an interval centered at $a$:

- If $\\lvert x - a \\rvert < R$, the series **converges**.
- If $\\lvert x - a \\rvert > R$, it **diverges**.
- At the endpoints $\\lvert x-a \\rvert = R$, you must test separately.

The number $R$ is the **radius of convergence**. The most common tool to find it is the **Ratio Test**: compute $\\displaystyle L = \\lim_{n\\to\\infty} \\left\\lvert \\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \\right\\rvert$ and require $L < 1$.

| Function | Center | Radius $R$ |
|----------|--------|-----------|
| $e^x$, $\\sin x$, $\\cos x$ | $0$ | $\\infty$ (converges everywhere) |
| $\\dfrac{1}{1-x}$ | $0$ | $1$ |
| $\\ln(1+x)$ | $0$ | $1$ |

> 💡 $e^x$, $\\sin x$, and $\\cos x$ converge for **all** real $x$ — their factorials in the denominator crush every term. That's why calculators trust them.`,
      },
      {
        id: 'tms6-worked-ratio',
        type: 'text' as const,
        content: `## Worked Example: Radius for $\\sum_{n=0}^{\\infty} \\dfrac{x^n}{3^n}$

Apply the Ratio Test with $a_n = \\dfrac{x^n}{3^n}$:

$$L = \\lim_{n\\to\\infty}\\left\\lvert\\frac{x^{n+1}/3^{n+1}}{x^n/3^n}\\right\\rvert = \\lim_{n\\to\\infty}\\left\\lvert\\frac{x}{3}\\right\\rvert = \\frac{\\lvert x \\rvert}{3}$$

Convergence requires $L < 1$:

$$\\frac{\\lvert x \\rvert}{3} < 1 \\;\\Longrightarrow\\; \\lvert x \\rvert < 3$$

So the **radius of convergence is $R = 3$**, and the interval is (at least) $-3 < x < 3$.

> ⚠️ The Ratio Test alone is inconclusive at the endpoints $x = \\pm 3$; those must be checked by substituting them into the original series.`,
      },
      {
        id: 'tms6-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Maclaurin series for $\\sin x$ converges for which $x$?',
              options: ['All real numbers', 'Only $-1 < x < 1$', 'Only $x = 0$', 'Only $x \\ge 0$'],
              correctAnswer: 0,
              explanation: 'The factorials $(2n+1)!$ in the denominator force the terms to $0$ for every $x$, so $R = \\infty$ and the series converges for all real $x$.',
            },
            {
              question: 'A power series $\\sum c_n(x-4)^n$ has radius of convergence $R = 2$. On which open interval is convergence guaranteed?',
              options: ['$2 < x < 6$', '$-2 < x < 2$', '$0 < x < 4$', '$4 < x < 8$'],
              correctAnswer: 0,
              explanation: 'Centered at $a=4$ with $R=2$: convergence where $\\lvert x-4 \\rvert<2$, i.e. $4-2 < x < 4+2$, giving $2 < x < 6$.',
            },
          ],
        },
      },
      {
        id: 'tms6-input-ratio',
        type: 'input-boxes' as const,
        content: `**Find the Radius** 🧮

Use the Ratio Test.

**1)** For $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{5^n}$, the radius of convergence $R = \\,?$
**2)** For $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(x-2)^n}{4^n}$, the radius of convergence $R = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '4'],
          hint1: 'The ratio gives $\\frac{\\lvert x \\rvert}{5} < 1$, i.e. $\\lvert x \\rvert < 5$.',
          hint2: 'For a series $\\sum \\frac{(x-a)^n}{b^n}$, the radius is $R = b$.',
          hint3: 'Series 1 has base $5$ so $R=5$; series 2 has base $4$ so $R=4$.',
          explanation: '1) $\\frac{\\lvert x \\rvert}{5}<1 \\Rightarrow \\lvert x \\rvert<5 \\Rightarrow R=5$.  2) $\\frac{\\lvert x-2 \\rvert}{4}<1 \\Rightarrow \\lvert x-2 \\rvert<4 \\Rightarrow R=4$. In general $\\sum (x-a)^n/b^n$ has $R=b$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'taylor-maclaurin-series',
    sections: [
      {
        id: 'tms7-intro',
        type: 'text' as const,
        content: `# 🌀 Taylor & Maclaurin Series

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) explain the matching idea, (2) apply the coefficient formula $\\frac{f^{(n)}(a)}{n!}$, (3) build Maclaurin and centered Taylor series, (4) truncate to Taylor polynomials, and (5) find the radius of convergence. Time to put it together.`,
      },
      {
        id: 'tms7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key formula |
|------|-------------|
| Taylor series at $a$ | $\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(a)}{n!}(x-a)^n$ |
| Maclaurin series | center at $a=0$: $\\sum_{n=0}^{\\infty}\\dfrac{f^{(n)}(0)}{n!}x^n$ |
| $n$th coefficient | $c_n = \\dfrac{f^{(n)}(a)}{n!}$ |
| Taylor polynomial | $P_n(x)=\\sum_{k=0}^{n}\\dfrac{f^{(k)}(a)}{k!}(x-a)^k$ |
| Radius of convergence | Ratio Test: $\\lim\\left\\lvert\\frac{a_{n+1}}{a_n}\\right\\rvert < 1$ |

**Three must-know Maclaurin series:**

$$e^x = \\sum \\frac{x^n}{n!}, \\quad \\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$$

> ⚠️ Don't forget: divide by $n!$, use powers of $(x-a)$ when the center isn't $0$, and a series only equals $f$ inside its interval of convergence.`,
      },
      {
        id: 'tms7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $f(4) = 3$, $f\'(4) = -2$, and $f\'\'(4) = 10$, the degree-2 Taylor polynomial of $f$ at $a = 4$ is:',
              options: [
                '$3 - 2(x-4) + 5(x-4)^2$',
                '$3 - 2(x-4) + 10(x-4)^2$',
                '$3 - 2x + 5x^2$',
                '$3 + (-2)(x-4) + 10(x-4)^2/4$',
              ],
              correctAnswer: 0,
              explanation: 'Coefficients: constant $f(4)=3$; linear $f\'(4)=-2$; quadratic $\\frac{f\'\'(4)}{2!}=\\frac{10}{2}=5$. Powers of $(x-4)$: $3-2(x-4)+5(x-4)^2$.',
            },
            {
              question: 'Use the first three terms of $e^x$ to estimate $e^{0.1}$.',
              options: ['$\\approx 1.105$', '$\\approx 1.100$', '$\\approx 1.210$', '$\\approx 0.905$'],
              correctAnswer: 0,
              explanation: '$1 + 0.1 + \\frac{(0.1)^2}{2} = 1 + 0.1 + 0.005 = 1.105$ (true $e^{0.1}\\approx 1.10517$).',
            },
          ],
        },
      },
      {
        id: 'tms7-input-mixed',
        type: 'input-boxes' as const,
        content: `**One More Build** 🧮

Let $f(x) = \\cos x$, center $a = 0$.

**1)** Coefficient of $x^2$ in the Maclaurin series $= \\,?$  *(fraction like -1/2 is fine)*
**2)** Coefficient of $x^4$ $= \\,?$  *(fraction like 1/24 is fine)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-1/2', '1/24'],
          hint1: 'From $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$.',
          hint2: '$\\frac{-1}{2!} = -\\frac{1}{2}$ for $x^2$.',
          hint3: '$\\frac{1}{4!} = \\frac{1}{24}$ for $x^4$.',
          explanation: '1) Coefficient of $x^2$ is $-\\frac{1}{2!}=-\\frac{1}{2}$.  2) Coefficient of $x^4$ is $\\frac{1}{4!}=\\frac{1}{24}$.',
        },
      },
      {
        id: 'tms7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The general coefficient of $(x-a)^n$ in a Taylor series is:',
              options: [
                '$\\dfrac{f^{(n)}(a)}{n!}$',
                '$\\dfrac{f^{(n)}(a)}{n}$',
                '$n!\\,f^{(n)}(a)$',
                '$\\dfrac{f^{(n)}(0)}{n!}$',
              ],
              correctAnswer: 0,
              explanation: 'The Taylor coefficient is the $n$th derivative at the center divided by $n!$: $\\frac{f^{(n)}(a)}{n!}$. Using $f^{(n)}(0)$ would only be correct for a Maclaurin (center-0) series.',
            },
            {
              question: 'Which series is the Maclaurin series for $\\cos x$?',
              options: [
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$',
                '$\\displaystyle\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$',
                '$\\displaystyle\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n}$',
              ],
              correctAnswer: 0,
              explanation: 'Cosine uses even powers $x^{2n}$ and even factorials $(2n)!$ with alternating signs. Option 2 is $\\sin x$; option 3 is $e^x$; option 4 is $\\ln(1+x)$.',
            },
            {
              question: 'The series $\\displaystyle\\sum_{n=0}^{\\infty} \\frac{(x-1)^n}{2^n}$ converges on which interval (open)?',
              options: ['$-1 < x < 3$', '$-2 < x < 2$', '$1 < x < 3$', 'all real $x$'],
              correctAnswer: 0,
              explanation: 'Ratio Test: $\\frac{\\lvert x-1 \\rvert}{2}<1 \\Rightarrow \\lvert x-1 \\rvert<2$, so $R=2$ and $1-2 < x < 1+2$, i.e. $-1 < x < 3$.',
            },
          ],
        },
      },
    ],
  },
]
