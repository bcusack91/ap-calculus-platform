import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Integral Test (AP Calculus BC).
 * Registry key / DB Topic.slug: 'integral-test'.
 * 7 parts, gold-standard structure: series & partial sums → the rectangle/area
 * comparison that powers the test → the three hypotheses + statement →
 * applying the test (convergence & divergence cases) → the p-series payoff →
 * remainder/error estimation → mixed mastery & exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every improper-integral value and inequality was recomputed by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it1-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 1 of 7 — Series, Partial Sums & the Question of Convergence**

---

### Topics in This Part

| Section |
|---------|
| What an infinite series is |
| Partial sums and convergence |
| Why "the terms go to 0" is not enough |

> 🔑 **Key Concept:** An infinite series either *converges* (its running total settles on a finite number) or *diverges* (it doesn't). The Integral Test is a clever tool that answers this question by comparing the series to an **improper integral** you already know how to evaluate.`,
      },
      {
        id: 'it1-series',
        type: 'text' as const,
        content: `## What Is an Infinite Series?

An **infinite series** is the sum of the terms of a sequence:

$$\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + a_4 + \\cdots$$

We make sense of an infinite sum using **partial sums**. The $N$-th partial sum adds only the first $N$ terms:

$$S_N = \\sum_{n=1}^{N} a_n = a_1 + a_2 + \\cdots + a_N$$

The series **converges** to $S$ if the partial sums approach a finite limit:

$$\\lim_{N \\to \\infty} S_N = S \\quad (\\text{a finite number})$$

If $S_N$ grows without bound (or oscillates), the series **diverges**.

> 💡 Think of $S_N$ as a *running total*. Convergence asks: does the running total settle down as we keep adding terms forever?`,
      },
      {
        id: 'it1-partialsum-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the series $\\sum_{n=1}^{\\infty} a_n$, what does the partial sum $S_3$ equal?',
              options: ['$a_1 + a_2 + a_3$', '$a_3$', '$a_1 \\cdot a_2 \\cdot a_3$', '$a_1 + a_2 + a_3 + \\cdots$'],
              correctAnswer: 0,
              explanation: '$S_3$ is the sum of the *first three* terms: $S_3 = a_1 + a_2 + a_3$. A partial sum always stops at a finite index.',
            },
            {
              question: 'An infinite series converges exactly when:',
              options: [
                'its terms $a_n$ are all positive',
                'the sequence of partial sums $S_N$ approaches a finite limit',
                'the terms $a_n$ approach $0$',
                'the partial sums keep increasing',
              ],
              correctAnswer: 1,
              explanation: 'Convergence of a series is *defined* by the limit of its partial sums. Terms going to $0$ is necessary but not sufficient (see the harmonic series), and partial sums increasing does not guarantee a finite limit.',
            },
          ],
        },
      },
      {
        id: 'it1-nthterm',
        type: 'text' as const,
        content: `## The Terms Must Go to 0 — But That's Not Enough

There's a quick *necessary* condition for convergence:

> 🔑 **$n$-th Term Test (for Divergence):** If $\\displaystyle\\lim_{n\\to\\infty} a_n \\ne 0$, the series **diverges**.

But the converse is **false**. Even when $a_n \\to 0$, the series can still diverge. The classic example is the **harmonic series**:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$$

Here $a_n = \\frac{1}{n} \\to 0$, yet the sum **diverges** to infinity. The terms shrink, but they don't shrink *fast enough*.

> ⚠️ **The big trap:** "The terms go to $0$, so the series converges." This is one of the most common mistakes in all of calculus. We need a real test — and that's where the Integral Test comes in.`,
      },
      {
        id: 'it1-nthterm-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\sum_{n=1}^{\\infty} \\dfrac{n}{2n+1}$, the $n$-th term test tells us:',
              options: [
                'the series converges, since terms are positive',
                'the series diverges, since $a_n \\to \\frac{1}{2} \\ne 0$',
                'the test is inconclusive',
                'the series converges to $\\frac{1}{2}$',
              ],
              correctAnswer: 1,
              explanation: '$\\lim_{n\\to\\infty} \\frac{n}{2n+1} = \\frac{1}{2} \\ne 0$. Since the terms do *not* go to $0$, the series diverges by the $n$-th term test.',
            },
            {
              question: 'For $\\sum_{n=1}^{\\infty} \\dfrac{1}{n}$ (the harmonic series), the $n$-th term test:',
              options: [
                'proves it converges',
                'proves it diverges',
                'is inconclusive because $a_n \\to 0$',
                'cannot be applied',
              ],
              correctAnswer: 2,
              explanation: 'Since $\\frac{1}{n} \\to 0$, the $n$-th term test is *inconclusive* — it can never prove convergence. (In fact the harmonic series diverges, but we need a stronger tool, like the Integral Test, to show that.)',
            },
          ],
        },
      },
      {
        id: 'it1-runningtotal',
        type: 'text' as const,
        content: `## Watching a Running Total Settle

Not every series misbehaves like the harmonic series. A **geometric series** with ratio $\\frac{1}{2}$ converges beautifully — its partial sums creep toward a clear limit:

$$S_1 = \\tfrac{1}{2},\\quad S_2 = \\tfrac{3}{4},\\quad S_3 = \\tfrac{7}{8},\\quad S_4 = \\tfrac{15}{16},\\quad \\dots \\;\\to\\; 1$$

Each new term adds half the remaining gap to $1$, so the running total never overshoots and settles at $S = 1$. Compute a couple of these partial sums yourself below.`,
      },
      {
        id: 'it1-partialsum-drill',
        type: 'input-boxes' as const,
        content: `**Compute a Partial Sum** 🧮

For the series $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{2^n} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$

**1)** Find $S_2 = \\frac{1}{2} + \\frac{1}{4}$. Enter as a fraction or decimal. $= \\,?$
**2)** Find $S_3 = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8}$. $= \\,?$
**3)** This series converges; the partial sums climb toward what limit $S$? $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/4', '7/8', '1'],
          hint1: '$\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4} = 0.75$.',
          hint2: '$\\frac{3}{4} + \\frac{1}{8} = \\frac{6}{8} + \\frac{1}{8} = \\frac{7}{8} = 0.875$.',
          hint3: 'The partial sums $\\frac{1}{2},\\frac{3}{4},\\frac{7}{8},\\frac{15}{16},\\dots$ approach $1$. This geometric series sums to $\\frac{1/2}{1-1/2} = 1$.',
          explanation: '1) $S_2 = \\frac{3}{4}$. 2) $S_3 = \\frac{7}{8}$. 3) The partial sums approach $S = 1$, so the series converges to $1$. Each partial sum is a finite "running total" creeping toward the limit.',
        },
      },
      {
        id: 'it1-close',
        type: 'text' as const,
        content: `## Where We're Headed

We need a test that can decide convergence even when the terms *do* go to $0$. The key insight, coming in Part 2:

> 💡 If $a_n = f(n)$ for a nice function $f$, then the **sum** $\\sum a_n$ behaves like the **area** $\\int f(x)\\,dx$. Both are infinite "totals" of the same shrinking quantity — and an improper integral is something we can actually compute.

In Part 2 we'll draw the picture that makes this rigorous.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it2-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 2 of 7 — The Rectangle Picture: Series as Area**

---

> 🔑 **The Idea:** Stack a rectangle of height $a_n = f(n)$ and width $1$ at each integer. The total area of all the rectangles *is* the series $\\sum a_n$. Comparing that area to the smooth area under $y=f(x)$ traps the series between two improper integrals.`,
      },
      {
        id: 'it2-improper-review',
        type: 'text' as const,
        content: `## Quick Review: Improper Integrals

An **improper integral** over $[1, \\infty)$ is defined as a limit:

$$\\int_1^{\\infty} f(x)\\,dx = \\lim_{b\\to\\infty} \\int_1^{b} f(x)\\,dx$$

- If the limit is a **finite number**, the integral **converges**.
- If the limit is $\\infty$ (or doesn't exist), the integral **diverges**.

### Two examples to keep handy

$$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx = \\lim_{b\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^{b} = \\lim_{b\\to\\infty}\\left(1 - \\frac{1}{b}\\right) = 1 \\quad \\text{(converges)}$$

$$\\int_1^{\\infty} \\frac{1}{x}\\,dx = \\lim_{b\\to\\infty}\\big[\\ln x\\big]_1^{b} = \\lim_{b\\to\\infty}\\ln b = \\infty \\quad \\text{(diverges)}$$

> 💡 The whole Integral Test rests on translating a hard-to-evaluate *sum* into an easy-to-evaluate *improper integral*. Make sure these two are solid.`,
      },
      {
        id: 'it2-improper-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Improper Integrals** 🧮

Enter the value each integral converges to. If it diverges, type \`inf\`.

**1)** $\\displaystyle\\int_1^{\\infty} \\frac{1}{x^3}\\,dx = \\,?$  *(decimal or fraction)*
**2)** $\\displaystyle\\int_1^{\\infty} e^{-x}\\,dx = \\,?$  *(give the exact form, e.g. \`1/e\`)*
**3)** $\\displaystyle\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '1/e', 'inf'],
          hint1: '$\\int x^{-3}\\,dx = -\\frac{1}{2}x^{-2}$. Evaluate $\\left[-\\frac{1}{2x^2}\\right]_1^{\\infty} = 0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$.',
          hint2: '$\\int e^{-x}\\,dx = -e^{-x}$. So $\\left[-e^{-x}\\right]_1^{\\infty} = 0 - (-e^{-1}) = e^{-1} = \\frac{1}{e}$.',
          hint3: '$\\int x^{-1/2}\\,dx = 2\\sqrt{x}$, which $\\to \\infty$ as $x\\to\\infty$. This integral diverges.',
          explanation: '1) $\\frac{1}{2}$ (converges). 2) $\\frac{1}{e} \\approx 0.368$ (converges). 3) diverges, since $2\\sqrt{x}\\to\\infty$. Notice $1/x^3$ and $1/x^{1/2}$ behave very differently — the exponent matters enormously.',
        },
      },
      {
        id: 'it2-rectangles',
        type: 'text' as const,
        content: `## The Comparison That Powers the Test

Suppose $f$ is positive and **decreasing**, and $a_n = f(n)$. Draw rectangles of width $1$.

**Right endpoints — rectangles sit *below* the curve.** Using $f(n)$ as the height of the rectangle on $[n, n+1]$, every rectangle fits under the curve (because $f$ is decreasing). So:

$$\\sum_{n=2}^{\\infty} a_n \\;=\\; \\sum_{n=2}^{\\infty} f(n) \\;\\le\\; \\int_1^{\\infty} f(x)\\,dx$$

**Left endpoints — rectangles poke *above* the curve.** Using $f(n)$ as the height on $[n-1, n]$, every rectangle covers more area than the curve. So:

$$\\int_1^{\\infty} f(x)\\,dx \\;\\le\\; \\sum_{n=1}^{\\infty} f(n) \\;=\\; \\sum_{n=1}^{\\infty} a_n$$

Putting the two together traps the series:

$$\\int_1^{\\infty} f(x)\\,dx \\;\\le\\; \\sum_{n=1}^{\\infty} a_n \\;\\le\\; a_1 + \\int_1^{\\infty} f(x)\\,dx$$

> 🔑 **Punchline:** The sum and the integral are *finite together* and *infinite together*. If the integral converges, the sum is squeezed below a finite bound. If the integral diverges, the sum is pushed above an infinite one.`,
      },
      {
        id: 'it2-rectangles-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Picture** 🔽

Assume $f$ is positive and decreasing with $a_n = f(n)$. Fill in each comparison.`,
        exercise: {
          dropdowns: [
            { label: 'Right-endpoint rectangles (heights $f(2), f(3), \\dots$) lie:', options: ['below the curve', 'above the curve', 'exactly on the curve', 'sometimes above, sometimes below'] },
            { label: 'Therefore $\\sum_{n=2}^{\\infty} f(n)$ is:', options: ['$\\le \\int_1^{\\infty} f(x)\\,dx$', '$\\ge \\int_1^{\\infty} f(x)\\,dx$', '$= \\int_1^{\\infty} f(x)\\,dx$', 'unrelated to the integral'] },
            { label: 'If $\\int_1^{\\infty} f(x)\\,dx$ converges, the series:', options: ['converges', 'diverges', 'is inconclusive', 'equals the integral'] },
          ],
          correctAnswers: ['below the curve', '$\\le \\int_1^{\\infty} f(x)\\,dx$', 'converges'],
          hint1: 'For a *decreasing* $f$, the right endpoint of each subinterval gives the *smallest* height, so the rectangle tucks under the curve.',
          hint2: 'Rectangles under the curve have total area $\\le$ the area under the curve, which is the integral.',
          hint3: 'If the tail sum $\\sum_{n=2}^{\\infty} f(n)$ is bounded above by a finite integral, the whole series converges (adding back $a_1$ keeps it finite).',
          explanation: 'Decreasing ⇒ right-endpoint rectangles sit below the curve ⇒ $\\sum_{n=2}^{\\infty} f(n) \\le \\int_1^{\\infty} f$. A finite integral bounds the series, forcing convergence.',
        },
      },
      {
        id: 'it2-close',
        type: 'text' as const,
        content: `## Why "Positive and Decreasing" Matters

The trapping inequalities only work if the rectangles compare cleanly to the curve:

- **Positive** keeps every area on the same side of the axis (no cancellation).
- **Decreasing** guarantees right-endpoint rectangles fit *under* the curve and left-endpoint rectangles poke *over* it.

In Part 3 we'll state these hypotheses precisely and write down the Integral Test as a theorem.`,
      },
      {
        id: 'it2-squeeze-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Integral Test works because the sum and the integral are:',
              options: [
                'finite together and infinite together',
                'always equal to each other',
                'reciprocals of one another',
                'never related',
              ],
              correctAnswer: 0,
              explanation: 'The rectangle inequalities trap the sum between the integral and $a_1 + $ the integral. So if one is finite, so is the other; if one is infinite, so is the other. They share the convergence verdict (but not necessarily the value).',
            },
            {
              question: 'The "decreasing" hypothesis is essential because it guarantees that:',
              options: [
                'right-endpoint rectangles fit under the curve and left-endpoint rectangles poke above it',
                'the terms approach zero',
                'the function is continuous',
                'the integral equals the sum exactly',
              ],
              correctAnswer: 0,
              explanation: 'Only when $f$ is decreasing do the rectangles compare cleanly to the curve: right endpoints (smallest heights) tuck under, left endpoints (largest heights) poke over. Without it, the trapping inequalities can fail.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it3-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 3 of 7 — The Three Hypotheses & the Statement**

---

> 🔑 **The Theorem:** If $f$ is **continuous, positive, and decreasing** on $[1,\\infty)$ and $a_n = f(n)$, then $\\sum_{n=1}^{\\infty} a_n$ and $\\int_1^{\\infty} f(x)\\,dx$ **either both converge or both diverge**.`,
      },
      {
        id: 'it3-hypotheses',
        type: 'text' as const,
        content: `## The Three Conditions on $f$

Before applying the test, you must build a function $f(x)$ from the terms (replace $n$ with $x$) and check **all three**:

| Condition | What it means | How to check |
|-----------|---------------|--------------|
| **Continuous** | no breaks/asymptotes on $[1,\\infty)$ | rational/exp/log are continuous where defined |
| **Positive** | $f(x) > 0$ for all $x \\ge 1$ | inspect the formula |
| **Decreasing** | $f(x)$ heads downward | show $f'(x) < 0$, or argue directly |

> ⚠️ The conditions only need to hold **eventually** — for all $x \\ge N$ for some starting point $N$. A series converges or diverges based on its *tail*, so the first few terms never matter. If $f$ decreases only after $x = 3$, apply the test on $[3,\\infty)$.`,
      },
      {
        id: 'it3-decreasing',
        type: 'text' as const,
        content: `## Checking "Decreasing" with the Derivative

The cleanest way to verify $f$ is decreasing is to show $f'(x) < 0$.

### Example: is $f(x) = \\dfrac{x}{x^2+1}$ decreasing on $[1,\\infty)$?

Use the quotient rule:

$$f'(x) = \\frac{(1)(x^2+1) - x(2x)}{(x^2+1)^2} = \\frac{1 - x^2}{(x^2+1)^2}$$

For $x > 1$, the numerator $1 - x^2 < 0$ and the denominator is positive, so $f'(x) < 0$. ✓ **Decreasing for $x \\ge 1$.**

### Example: is $f(x) = \\dfrac{\\ln x}{x}$ decreasing?

$$f'(x) = \\frac{(1/x)\\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$$

This is negative when $1 - \\ln x < 0$, i.e. $\\ln x > 1$, i.e. $x > e \\approx 2.72$. So $f$ decreases on $[3,\\infty)$ — apply the test starting at $n=3$.

> 💡 You don't always need calculus: $\\frac{1}{x^2}$ is *obviously* decreasing because the denominator grows. Use the derivative only when it's not obvious.`,
      },
      {
        id: 'it3-hyp-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which set of conditions must $f$ satisfy on $[N,\\infty)$ to apply the Integral Test?',
              options: [
                'continuous, positive, and decreasing',
                'differentiable, bounded, and increasing',
                'positive and approaching $0$',
                'continuous and integrable only',
              ],
              correctAnswer: 0,
              explanation: 'The Integral Test requires $f$ to be continuous, positive, and (eventually) decreasing. Just "approaching 0" is not enough — the function must actually be decreasing so the rectangle comparison holds.',
            },
            {
              question: 'Why is it acceptable that $f(x) = \\dfrac{\\ln x}{x}$ only decreases for $x > e$?',
              options: [
                'Because the first few terms determine convergence',
                'Because convergence/divergence depends only on the tail of the series',
                'Because the Integral Test ignores continuity',
                'It is not acceptable; the test cannot be used',
              ],
              correctAnswer: 1,
              explanation: 'Convergence depends only on the tail (the behavior for large $n$). Dropping or changing finitely many terms never affects whether a series converges, so we just apply the test on $[3,\\infty)$ where $f$ is decreasing.',
            },
          ],
        },
      },
      {
        id: 'it3-buildf',
        type: 'text' as const,
        content: `## From Terms to a Function

The first move is always the same: **replace $n$ with $x$** to build $f(x)$, then test that $f$ on $[N,\\infty)$.

| Series term $a_n$ | Function $f(x)$ |
|-------------------|-----------------|
| $\\dfrac{1}{n^2}$ | $\\dfrac{1}{x^2}$ |
| $\\dfrac{n}{n^2+1}$ | $\\dfrac{x}{x^2+1}$ |
| $\\dfrac{\\ln n}{n}$ | $\\dfrac{\\ln x}{x}$ |
| $n e^{-n^2}$ | $x e^{-x^2}$ |

Then check continuity (usually easy), positivity (inspect the formula), and decreasing (derivative if needed). Let's drill the derivative check.`,
      },
      {
        id: 'it3-deriv-drill',
        type: 'input-boxes' as const,
        content: `**Decreasing Check via the Derivative** 🧮

For $f(x) = \\dfrac{x}{x^2+1}$ we found $f'(x) = \\dfrac{1 - x^2}{(x^2+1)^2}$.

**1)** Evaluate the **numerator** $1 - x^2$ at $x = 2$. Enter the value. $= \\,?$
**2)** Is $f'(2)$ positive or negative? Type \`negative\` or \`positive\`.
**3)** For $f(x)=\\dfrac{\\ln x}{x}$, solve $1 - \\ln x = 0$ for $x$. Enter the exact value (type \`e\`). $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-3', 'negative', 'e'],
          hint1: '$1 - 2^2 = 1 - 4 = -3$.',
          hint2: 'The denominator $(x^2+1)^2$ is always positive, so the sign of $f\'$ matches the numerator $-3 < 0$.',
          hint3: '$1 - \\ln x = 0 \\Rightarrow \\ln x = 1 \\Rightarrow x = e$. To the *right* of $e$, $1-\\ln x<0$, so $f$ decreases there.',
          explanation: '1) $1-4 = -3$. 2) negative (denominator positive). 3) $x = e$. Past $x=e$, $f(x)=\\frac{\\ln x}{x}$ is decreasing, so the Integral Test applies on $[3,\\infty)$.',
        },
      },
      {
        id: 'it3-close',
        type: 'text' as const,
        content: `## What the Test Does — and Doesn't — Tell You

> ⚠️ **Critical caveat:** The Integral Test tells you *whether* the series converges, **not what it converges to**. In general,
> $$\\sum_{n=1}^{\\infty} a_n \\;\\ne\\; \\int_1^{\\infty} f(x)\\,dx.$$
> The integral's *value* is almost never the sum's *value* — it only shares the convergence/divergence verdict. (We'll use the integral to *estimate* the sum in Part 6.)

In Part 4 we put the test to work on real series.`,
      },
      {
        id: 'it3-hyp-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Hypothesis Fails?** 🔽

For each function, decide whether it satisfies *all three* Integral-Test hypotheses on $[1,\\infty)$.`,
        exercise: {
          dropdowns: [
            { label: '$f(x) = \\dfrac{1}{x^2}$', options: ['all three hold', 'fails (not positive)', 'fails (not decreasing)', 'fails (not continuous)'] },
            { label: '$f(x) = \\sin x$', options: ['fails (not positive)', 'all three hold', 'fails (not continuous)', 'fails (constant)'] },
            { label: '$f(x) = x^2$', options: ['fails (not decreasing)', 'all three hold', 'fails (not positive)', 'fails (not continuous)'] },
          ],
          correctAnswers: ['all three hold', 'fails (not positive)', 'fails (not decreasing)'],
          hint1: '$\\frac{1}{x^2}$ is continuous, positive, and decreasing for all $x\\ge 1$ — a textbook fit.',
          hint2: '$\\sin x$ oscillates and goes negative, so it is neither positive nor decreasing.',
          hint3: '$x^2$ is positive and continuous but *increasing*, so the decreasing hypothesis fails.',
          explanation: '$\\frac{1}{x^2}$ satisfies all three. $\\sin x$ fails positivity (it dips below $0$). $x^2$ fails decreasing (it grows). Any failed hypothesis means the Integral Test does not apply.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it4-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 4 of 7 — Applying the Test: Worked Examples**

---

> 🔑 **The Routine:** (1) Write $f(x)$ from $a_n$. (2) Confirm continuous, positive, decreasing. (3) Evaluate $\\int_1^{\\infty} f(x)\\,dx$ as a limit. (4) The series matches the integral's verdict.`,
      },
      {
        id: 'it4-converge',
        type: 'text' as const,
        content: `## Worked Example 1 — A Convergent Series

Test $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$.

**Step 1.** Let $f(x) = \\dfrac{1}{x^2+1}$.

**Step 2.** Continuous (denominator never $0$), positive, and decreasing (denominator grows) on $[1,\\infty)$. ✓

**Step 3.** Evaluate the improper integral:

$$\\int_1^{\\infty} \\frac{1}{x^2+1}\\,dx = \\lim_{b\\to\\infty}\\big[\\arctan x\\big]_1^{b} = \\lim_{b\\to\\infty}\\left(\\arctan b - \\arctan 1\\right)$$

$$= \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4} \\quad \\text{(a finite number)}$$

**Step 4.** The integral **converges**, so the series **converges**. ✓

> 💡 The sum is *not* $\\frac{\\pi}{4}$. The integral converging is all we needed — its value just confirms finiteness.`,
      },
      {
        id: 'it4-diverge',
        type: 'text' as const,
        content: `## Worked Example 2 — A Divergent Series

Test $\\displaystyle\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}$.

**Step 1.** Let $f(x) = \\dfrac{1}{x\\ln x}$ (start at $x=2$ so $\\ln x > 0$).

**Step 2.** Continuous, positive, decreasing on $[2,\\infty)$ (both $x$ and $\\ln x$ increase, so the denominator grows). ✓

**Step 3.** Substitute $u = \\ln x$, so $du = \\frac{1}{x}\\,dx$:

$$\\int_2^{\\infty} \\frac{1}{x\\ln x}\\,dx = \\int_{\\ln 2}^{\\infty} \\frac{1}{u}\\,du = \\lim_{b\\to\\infty}\\big[\\ln u\\big]_{\\ln 2}^{b} = \\infty$$

**Step 4.** The integral **diverges**, so the series **diverges**. ✓

> ⚠️ Even though $\\frac{1}{n\\ln n}\\to 0$, the series still diverges — the terms shrink, but agonizingly slowly. Only the Integral Test reveals this.`,
      },
      {
        id: 'it4-apply-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You apply the Integral Test to $\\sum a_n$ and find $\\int_1^{\\infty} f(x)\\,dx = 5$. What can you conclude?',
              options: [
                'The series converges (sum is some finite value, not necessarily 5)',
                'The series converges and its sum is exactly 5',
                'The series diverges',
                'Nothing — the test is inconclusive',
              ],
              correctAnswer: 0,
              explanation: 'A finite integral means the series converges. But the *value* $5$ is the integral, not the sum. The Integral Test never gives the sum directly.',
            },
            {
              question: 'For $\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2+1}$, evaluating $\\int_1^{\\infty}\\frac{dx}{x^2+1}$ gives $\\frac{\\pi}{4}$. The series therefore:',
              options: ['diverges', 'converges', 'equals $\\frac{\\pi}{4}$', 'cannot be determined'],
              correctAnswer: 1,
              explanation: 'The integral converges to the finite number $\\frac{\\pi}{4}$, so by the Integral Test the series converges. (Its sum is *not* $\\frac{\\pi}{4}$.)',
            },
          ],
        },
      },
      {
        id: 'it4-setup',
        type: 'text' as const,
        content: `## Setting Up the Next Drill

Here's one more substitution-flavored test. For $\\displaystyle\\sum_{n=1}^{\\infty} n e^{-n^2}$, the matching function is $f(x) = x e^{-x^2}$:

- **Continuous** everywhere ✓
- **Positive** for $x \\ge 1$ (both $x$ and $e^{-x^2}$ are positive) ✓
- **Decreasing** for $x \\ge 1$ (the exponential decay dominates) ✓

The integral $\\int x e^{-x^2}\\,dx$ is a perfect substitution problem — let $u = x^2$. Work it out in the drill below.`,
      },
      {
        id: 'it4-apply-drill',
        type: 'input-boxes' as const,
        content: `**Run the Test** 🧮

Test $\\displaystyle\\sum_{n=1}^{\\infty} n\\,e^{-n^2}$ with $f(x) = x e^{-x^2}$.

**1)** Using $u = x^2$, $du = 2x\\,dx$, find $\\displaystyle\\int x e^{-x^2}\\,dx = -\\dfrac{1}{k}e^{-x^2}$. Enter $k$. $= \\,?$
**2)** Evaluate $\\displaystyle\\int_1^{\\infty} x e^{-x^2}\\,dx = \\left[-\\dfrac{1}{2}e^{-x^2}\\right]_1^{\\infty}$. Enter the exact value (type \`1/(2e)\`). $= \\,?$
**3)** Does the series converge or diverge? Type \`converge\` or \`diverge\`.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '1/(2e)', 'converge'],
          hint1: 'With $u = x^2$, $\\int xe^{-x^2}dx = \\frac{1}{2}\\int e^{-u}du = -\\frac{1}{2}e^{-x^2}$. So $k = 2$.',
          hint2: 'At $\\infty$: $-\\frac{1}{2}e^{-\\infty} = 0$. At $1$: $-\\frac{1}{2}e^{-1}$. So $0 - (-\\frac{1}{2e}) = \\frac{1}{2e}$.',
          hint3: 'A finite integral value ($\\frac{1}{2e}\\approx 0.184$) means the integral converges, so the series converges.',
          explanation: '1) $k=2$. 2) $\\int_1^{\\infty}xe^{-x^2}dx = \\frac{1}{2e} \\approx 0.184$ (finite). 3) Converges, since the improper integral converges.',
        },
      },
      {
        id: 'it4-close',
        type: 'text' as const,
        content: `## Pattern Spotting

Notice the deciding factor in every example: **how fast the integral grows.** Logs grow without bound ($\\int \\frac{1}{x}, \\int \\frac{1}{x\\ln x}$ diverge), while inverse powers and exponentials tame the area ($\\int \\frac{1}{x^2}, \\int xe^{-x^2}$ converge).

The single most important family this reveals is the **$p$-series** — the topic of Part 5, and the result you'll reach for most often on the BC exam.`,
      },
      {
        id: 'it4-verdict-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Integral to Verdict** 🔽

Each series was matched to its function $f$. Use the integral's value to give the verdict.`,
        exercise: {
          dropdowns: [
            { label: '$\\sum \\frac{1}{n^2}$, with $\\int_1^{\\infty}\\frac{dx}{x^2} = 1$:', options: ['converges', 'diverges'] },
            { label: '$\\sum \\frac{1}{n}$, with $\\int_1^{\\infty}\\frac{dx}{x} = \\infty$:', options: ['diverges', 'converges'] },
            { label: '$\\sum \\frac{1}{n^2+1}$, with $\\int_1^{\\infty}\\frac{dx}{x^2+1} = \\frac{\\pi}{4}$:', options: ['converges', 'diverges'] },
          ],
          correctAnswers: ['converges', 'diverges', 'converges'],
          hint1: 'A *finite* integral value means converges; an *infinite* one means diverges.',
          hint2: '$\\int_1^{\\infty}\\frac{dx}{x} = \\infty$ is infinite, so that series diverges.',
          hint3: '$\\frac{\\pi}{4}\\approx 0.785$ is a finite number, so the corresponding series converges.',
          explanation: 'Integral value $1$ (finite) ⇒ converges; $\\infty$ ⇒ diverges; $\\frac{\\pi}{4}$ (finite) ⇒ converges. The series always inherits the integral\'s verdict.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it5-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 5 of 7 — The Big Payoff: the $p$-Series**

---

> 🔑 **The $p$-Series Test:** $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ **converges if $p > 1$** and **diverges if $p \\le 1$**. This single fact, proved by the Integral Test, settles a huge class of series instantly.`,
      },
      {
        id: 'it5-proof',
        type: 'text' as const,
        content: `## Proving the $p$-Series Test

Apply the Integral Test to $f(x) = \\dfrac{1}{x^p} = x^{-p}$ (continuous, positive, decreasing for $p > 0$).

**Case $p \\ne 1$:**

$$\\int_1^{\\infty} x^{-p}\\,dx = \\lim_{b\\to\\infty}\\left[\\frac{x^{1-p}}{1-p}\\right]_1^{b} = \\lim_{b\\to\\infty}\\frac{b^{1-p} - 1}{1-p}$$

- If $p > 1$, then $1 - p < 0$, so $b^{1-p}\\to 0$: the integral $\\to \\dfrac{-1}{1-p} = \\dfrac{1}{p-1}$ (**finite ⇒ converges**).
- If $p < 1$, then $1 - p > 0$, so $b^{1-p}\\to \\infty$: the integral diverges.

**Case $p = 1$:** this is the harmonic series, $\\int_1^{\\infty}\\frac{1}{x}\\,dx = \\lim_{b\\to\\infty}\\ln b = \\infty$ (**diverges**).

> 🔑 **Bottom line:** converges $\\iff p > 1$. The threshold is exactly $p=1$, and $p=1$ itself diverges.`,
      },
      {
        id: 'it5-pseries-table',
        type: 'text' as const,
        content: `## The $p$-Series at a Glance

| Series | $p$ | Verdict |
|--------|-----|---------|
| $\\sum \\frac{1}{n}$ | $1$ | **diverges** (harmonic) |
| $\\sum \\frac{1}{\\sqrt{n}} = \\sum \\frac{1}{n^{1/2}}$ | $\\tfrac{1}{2}$ | **diverges** |
| $\\sum \\frac{1}{n^2}$ | $2$ | **converges** |
| $\\sum \\frac{1}{n^3}$ | $3$ | **converges** |
| $\\sum \\frac{1}{n^{1.01}}$ | $1.01$ | **converges** (just barely!) |
| $\\sum \\frac{1}{n^{0.99}}$ | $0.99$ | **diverges** (just barely!) |

> 💡 The boundary is razor-thin. $\\sum \\frac{1}{n^{1.0001}}$ converges, but $\\sum\\frac{1}{n}$ diverges. The exponent is the *only* thing that matters for a pure $p$-series.`,
      },
      {
        id: 'it5-pseries-dropdown',
        type: 'dropdown-select' as const,
        content: `**Converge or Diverge?** 🔽

Classify each $p$-series. (Recall: converges $\\iff p > 1$.)`,
        exercise: {
          dropdowns: [
            { label: '$\\sum_{n=1}^{\\infty} \\dfrac{1}{n^{4}}$', options: ['converges', 'diverges'] },
            { label: '$\\sum_{n=1}^{\\infty} \\dfrac{1}{n^{2/3}}$', options: ['converges', 'diverges'] },
            { label: '$\\sum_{n=1}^{\\infty} \\dfrac{1}{\\sqrt[3]{n}}$', options: ['converges', 'diverges'] },
            { label: '$\\sum_{n=1}^{\\infty} \\dfrac{1}{n\\sqrt{n}}$', options: ['converges', 'diverges'] },
          ],
          correctAnswers: ['converges', 'diverges', 'diverges', 'converges'],
          hint1: 'Write each as $\\frac{1}{n^p}$ and compare $p$ to $1$.',
          hint2: '$\\frac{1}{\\sqrt[3]{n}} = \\frac{1}{n^{1/3}}$, so $p = \\frac{1}{3} < 1$.',
          hint3: '$n\\sqrt{n} = n^1\\cdot n^{1/2} = n^{3/2}$, so $p = \\frac{3}{2} > 1$.',
          explanation: '$p=4>1$ converges; $p=\\frac{2}{3}<1$ diverges; $p=\\frac{1}{3}<1$ diverges; $p=\\frac{3}{2}>1$ converges. Converges exactly when $p>1$.',
        },
      },
      {
        id: 'it5-disguised',
        type: 'text' as const,
        content: `## Spotting a Disguised $p$-Series

The exponent is often *hidden* inside a root or a product. Rewrite everything as a single power of $n$:

$$\\frac{1}{\\sqrt{n}} = \\frac{1}{n^{1/2}}, \\qquad \\frac{1}{\\sqrt[3]{n^2}} = \\frac{1}{n^{2/3}}, \\qquad \\frac{1}{n\\sqrt{n}} = \\frac{1}{n^{3/2}}$$

Once it's in the form $\\dfrac{1}{n^p}$, just read off $p$ and compare to $1$.

> ⚠️ **Watch out:** $\\sum \\frac{1}{n^2+1}$ is **not** a $p$-series (the $+1$ ruins the pure power), so you'd need the full Integral Test — but its *behavior* matches the $p=2$ series, which is the idea behind the Comparison Test.`,
      },
      {
        id: 'it5-pseries-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these series DIVERGES?',
              options: [
                '$\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.5}}$',
                '$\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.001}}$',
                '$\\sum_{n=1}^{\\infty} \\frac{1}{n}$',
                '$\\sum_{n=1}^{\\infty} \\frac{1}{n^{2}}$',
              ],
              correctAnswer: 2,
              explanation: 'The harmonic series has $p = 1$, which is *not* greater than $1$, so it diverges. The other three all have $p > 1$ and converge.',
            },
            {
              question: 'For which values of $p$ does $\\sum_{n=1}^{\\infty}\\frac{1}{n^p}$ converge?',
              options: ['$p > 1$', '$p \\ge 1$', '$p < 1$', '$p \\ge 0$'],
              correctAnswer: 0,
              explanation: 'Strictly $p > 1$. The endpoint $p=1$ (harmonic series) diverges, so it must be excluded.',
            },
          ],
        },
      },
      {
        id: 'it5-close',
        type: 'text' as const,
        content: `## Why the $p$-Series Is So Valuable

The $p$-series is the **benchmark** for nearly every other convergence test. In Comparison and Limit Comparison tests (your next topics), you'll repeatedly ask: *"does this look like a $p$-series, and is its $p$ above or below $1$?"*

Next, in Part 6, we use the same rectangle picture to **estimate** the sum of a convergent series and bound the error.`,
      },
      {
        id: 'it5-pvalue-drill',
        type: 'input-boxes' as const,
        content: `**Find $p$, Then Decide** 🧮

Rewrite each as $\\dfrac{1}{n^p}$ and enter the value of $p$ (use a fraction or decimal).

**1)** $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt[3]{n^2}}$.  $p = \\,?$
**2)** $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{1}{n^2\\sqrt{n}}$.  $p = \\,?$
**3)** Of the two above, how many CONVERGE? Enter $0$, $1$, or $2$. $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2/3', '5/2', '1'],
          hint1: '$\\sqrt[3]{n^2} = n^{2/3}$, so $p = \\frac{2}{3}$.',
          hint2: '$n^2\\sqrt{n} = n^2 \\cdot n^{1/2} = n^{5/2}$, so $p = \\frac{5}{2}$.',
          hint3: '$p=\\frac{2}{3}<1$ diverges; $p=\\frac{5}{2}>1$ converges. So exactly $1$ of the two converges.',
          explanation: '1) $p = \\frac{2}{3}$ (diverges). 2) $p = \\frac{5}{2}$ (converges). 3) Only one converges, so the answer is $1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it6-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 6 of 7 — Estimating the Sum: the Remainder**

---

> 🔑 **The Idea:** If you add the first $n$ terms of a convergent series, the leftover tail $R_n = S - S_n$ is squeezed between two integrals you can compute. This lets you *bound the error* of your estimate.`,
      },
      {
        id: 'it6-remainder',
        type: 'text' as const,
        content: `## The Remainder Estimate

Let $S = \\sum_{k=1}^{\\infty} a_k$ converge, with $a_k = f(k)$ for $f$ continuous, positive, decreasing. Approximate $S$ by the partial sum $S_n$. The **remainder** is the tail:

$$R_n = S - S_n = a_{n+1} + a_{n+2} + a_{n+3} + \\cdots$$

The same rectangle comparison from Part 2 (applied to the tail) traps $R_n$ between two integrals:

$$\\int_{n+1}^{\\infty} f(x)\\,dx \\;\\le\\; R_n \\;\\le\\; \\int_{n}^{\\infty} f(x)\\,dx$$

> 💡 **In words:** the error after $n$ terms is no bigger than the area under $f$ from $n$ to $\\infty$, and no smaller than the area from $n+1$ to $\\infty$. Both integrals are easy to evaluate.`,
      },
      {
        id: 'it6-worked',
        type: 'text' as const,
        content: `## Worked Example — Bounding the Error

Estimate $S = \\sum_{k=1}^{\\infty} \\dfrac{1}{k^2}$ using $S_3 = 1 + \\frac{1}{4} + \\frac{1}{9}$, and bound the error $R_3$.

Here $f(x) = \\dfrac{1}{x^2}$, and $\\displaystyle\\int_n^{\\infty}\\frac{1}{x^2}\\,dx = \\left[-\\frac{1}{x}\\right]_n^{\\infty} = \\frac{1}{n}$.

Apply the remainder bounds with $n = 3$:

$$\\int_{4}^{\\infty}\\frac{dx}{x^2} \\;\\le\\; R_3 \\;\\le\\; \\int_{3}^{\\infty}\\frac{dx}{x^2}$$

$$\\frac{1}{4} \\;\\le\\; R_3 \\;\\le\\; \\frac{1}{3}$$

So the true sum $S = S_3 + R_3$ satisfies:

$$S_3 + \\frac{1}{4} \\;\\le\\; S \\;\\le\\; S_3 + \\frac{1}{3}$$

With $S_3 = 1 + 0.25 + 0.1111\\ldots = 1.3611\\ldots$, we get $1.611 \\le S \\le 1.694$.

> ✅ **Check:** the exact value is $S = \\frac{\\pi^2}{6} \\approx 1.6449$, which lands right inside our interval. The bounds worked.`,
      },
      {
        id: 'it6-remainder-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The remainder $R_n = S - S_n$ of a convergent Integral-Test series is bounded by:',
              options: [
                '$\\int_{n+1}^{\\infty} f(x)\\,dx \\le R_n \\le \\int_{n}^{\\infty} f(x)\\,dx$',
                '$\\int_{0}^{n} f(x)\\,dx \\le R_n \\le \\int_{0}^{n+1} f(x)\\,dx$',
                '$R_n = \\int_1^{\\infty} f(x)\\,dx$',
                '$R_n \\le a_n$',
              ],
              correctAnswer: 0,
              explanation: 'The tail sum is trapped between the area from $n+1$ to $\\infty$ (lower bound) and from $n$ to $\\infty$ (upper bound) — exactly the rectangle comparison applied to the remainder.',
            },
            {
              question: 'To guarantee the error $R_n$ in approximating $\\sum\\frac{1}{k^2}$ is less than $0.01$, you need:',
              options: [
                '$\\frac{1}{n} < 0.01$, i.e. $n > 100$',
                '$\\frac{1}{n^2} < 0.01$, i.e. $n > 10$',
                '$n > 4$',
                'any $n$ works',
              ],
              correctAnswer: 0,
              explanation: 'The upper bound is $R_n \\le \\int_n^{\\infty}\\frac{dx}{x^2} = \\frac{1}{n}$. Requiring $\\frac{1}{n} < 0.01$ gives $n > 100$.',
            },
          ],
        },
      },
      {
        id: 'it6-tailformula',
        type: 'text' as const,
        content: `## The Tail Integral You'll Reuse

For the drill below you'll need the tail integral of $\\frac{1}{x^3}$. Compute it once:

$$\\int_n^{\\infty} \\frac{1}{x^3}\\,dx = \\left[-\\frac{1}{2x^2}\\right]_n^{\\infty} = 0 - \\left(-\\frac{1}{2n^2}\\right) = \\frac{1}{2n^2}$$

So the remainder of $\\sum \\frac{1}{k^3}$ after $n$ terms is bounded by $R_n \\le \\dfrac{1}{2n^2}$. Use this in the drill.`,
      },
      {
        id: 'it6-remainder-drill',
        type: 'input-boxes' as const,
        content: `**Bound the Tail** 🧮

Consider $S = \\sum_{k=1}^{\\infty} \\dfrac{1}{k^3}$ with $f(x) = \\dfrac{1}{x^3}$. Recall $\\displaystyle\\int_n^{\\infty}\\frac{dx}{x^3} = \\frac{1}{2n^2}$.

**1)** Upper bound on $R_2$: compute $\\displaystyle\\int_{2}^{\\infty}\\frac{dx}{x^3} = \\frac{1}{2(2)^2}$. Enter as a fraction. $= \\,?$
**2)** Lower bound on $R_2$: compute $\\displaystyle\\int_{3}^{\\infty}\\frac{dx}{x^3} = \\frac{1}{2(3)^2}$. Enter as a fraction. $= \\,?$
**3)** To guarantee $R_n \\le \\frac{1}{2n^2} \\le 0.02$, the smallest integer $n$ that works is? $n = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/8', '1/18', '5'],
          hint1: '$\\frac{1}{2(2)^2} = \\frac{1}{2\\cdot 4} = \\frac{1}{8}$.',
          hint2: '$\\frac{1}{2(3)^2} = \\frac{1}{2\\cdot 9} = \\frac{1}{18}$.',
          hint3: 'Solve $\\frac{1}{2n^2} \\le 0.02 = \\frac{1}{50}$, i.e. $2n^2 \\ge 50$, i.e. $n^2 \\ge 25$, i.e. $n \\ge 5$. The smallest integer is $n = 5$.',
          explanation: '1) $\\frac{1}{8}$. 2) $\\frac{1}{18}$. 3) Need $\\frac{1}{2n^2}\\le 0.02$: $2n^2\\ge 50 \\Rightarrow n^2\\ge 25 \\Rightarrow n\\ge 5$. At $n=5$, $\\frac{1}{2(25)} = \\frac{1}{50} = 0.02$ exactly, so $n=5$ is the smallest that works.',
        },
      },
      {
        id: 'it6-close',
        type: 'text' as const,
        content: `## Sharper Estimates (Optional)

Averaging the two bounds gives an even better estimate:

$$S \\approx S_n + \\frac{1}{2}\\left(\\int_{n}^{\\infty} f\\,dx + \\int_{n+1}^{\\infty} f\\,dx\\right)$$

The midpoint of the trapping interval is usually far closer to the true sum than either endpoint. But for the AP exam, the key skill is the two-sided bound

$$S_n + \\int_{n+1}^{\\infty} f \\;\\le\\; S \\;\\le\\; S_n + \\int_{n}^{\\infty} f.$$

Time to put everything together in Part 7.`,
      },
      {
        id: 'it6-bounds-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Bounds** 🔽

You approximate a convergent series $S$ by $S_n$. Place each quantity correctly.`,
        exercise: {
          dropdowns: [
            { label: 'The smaller (lower) bound on the remainder $R_n$ is:', options: ['$\\int_{n+1}^{\\infty} f\\,dx$', '$\\int_{n}^{\\infty} f\\,dx$', '$\\int_{1}^{\\infty} f\\,dx$', '$a_n$'] },
            { label: 'The larger (upper) bound on $R_n$ is:', options: ['$\\int_{n}^{\\infty} f\\,dx$', '$\\int_{n+1}^{\\infty} f\\,dx$', '$\\int_{1}^{n} f\\,dx$', '$0$'] },
            { label: 'A lower bound for the true sum $S$ is therefore:', options: ['$S_n + \\int_{n+1}^{\\infty} f\\,dx$', '$S_n - \\int_{n}^{\\infty} f\\,dx$', '$\\int_{n}^{\\infty} f\\,dx$', '$S_n$'] },
          ],
          correctAnswers: ['$\\int_{n+1}^{\\infty} f\\,dx$', '$\\int_{n}^{\\infty} f\\,dx$', '$S_n + \\int_{n+1}^{\\infty} f\\,dx$'],
          hint1: 'Starting the tail integral *later* (at $n+1$) makes it smaller, so it is the lower bound.',
          hint2: 'Starting at $n$ captures more area, so it is the upper bound.',
          hint3: 'Since $S = S_n + R_n$ and $R_n \\ge \\int_{n+1}^{\\infty} f$, the lower bound for $S$ is $S_n + \\int_{n+1}^{\\infty} f$.',
          explanation: '$\\int_{n+1}^{\\infty} f \\le R_n \\le \\int_{n}^{\\infty} f$, so $S_n + \\int_{n+1}^{\\infty} f \\le S \\le S_n + \\int_{n}^{\\infty} f$. The later starting point gives the smaller integral.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'integral-test',
    sections: [
      {
        id: 'it7-intro',
        type: 'text' as const,
        content: `# ∫ The Integral Test

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) check the three hypotheses, (2) translate a series into an improper integral, (3) read off the verdict, (4) classify any $p$-series, and (5) bound a remainder. Let's bring it all together.`,
      },
      {
        id: 'it7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Apply the test | $f$ continuous, positive, decreasing; $a_n=f(n)$ |
| Decide convergence | series & $\\int_1^{\\infty} f\\,dx$ share the verdict |
| $p$-series $\\sum \\frac{1}{n^p}$ | converges $\\iff p > 1$ |
| Harmonic series $\\sum\\frac{1}{n}$ | diverges ($p=1$) |
| Remainder bound | $\\int_{n+1}^{\\infty} f \\le R_n \\le \\int_{n}^{\\infty} f$ |

> ⚠️ **Three traps to avoid:**
> 1. "Terms $\\to 0$, so it converges" — **false** (harmonic series).
> 2. The integral's *value* is the *sum*'s value — **false** (they only share the verdict).
> 3. Forgetting to verify $f$ is **decreasing** before applying the test.`,
      },
      {
        id: 'it7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Give the correct verdict and reason for each series.`,
        exercise: {
          dropdowns: [
            { label: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$', options: ['converges ($p=2>1$)', 'diverges ($p=2$)', 'diverges ($n$-th term test)', 'inconclusive'] },
            { label: '$\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$', options: ['diverges ($p=\\frac{1}{2}\\le 1$)', 'converges ($p=\\frac{1}{2}$)', 'converges ($p=2$)', 'inconclusive'] },
            { label: '$\\sum_{n=1}^{\\infty} \\frac{n}{n+5}$', options: ['diverges ($a_n\\to 1\\ne 0$)', 'converges ($p$-series)', 'diverges ($p=1$)', 'converges (integral $=\\frac{\\pi}{4}$)'] },
          ],
          correctAnswers: ['converges ($p=2>1$)', 'diverges ($p=\\frac{1}{2}\\le 1$)', 'diverges ($a_n\\to 1\\ne 0$)'],
          hint1: 'For pure $\\frac{1}{n^p}$ series, just compare $p$ to $1$.',
          hint2: '$\\frac{1}{\\sqrt{n}} = \\frac{1}{n^{1/2}}$, so $p=\\frac{1}{2}<1$.',
          hint3: 'For $\\frac{n}{n+5}$, the terms approach $1$, not $0$, so the $n$-th term test forces divergence — no Integral Test needed.',
          explanation: '$p=2>1$ converges; $p=\\frac{1}{2}\\le 1$ diverges; and $\\frac{n}{n+5}\\to 1\\ne 0$ diverges by the $n$-th term test. Always check the $n$-th term test first.',
        },
      },
      {
        id: 'it7-strategy',
        type: 'text' as const,
        content: `## A Two-Step Strategy for Any Series

When you face an unfamiliar series on the exam, run this checklist:

1. **$n$-th term test first.** If $a_n \\not\\to 0$, you're done — it **diverges**. (This caught $\\frac{n}{n+5}$ above.)
2. **Recognize a $p$-series.** Rewrite as $\\frac{1}{n^p}$ if possible; converges $\\iff p > 1$.
3. **Otherwise, full Integral Test.** Build $f$, confirm continuous/positive/decreasing, evaluate $\\int_1^{\\infty} f$, and inherit its verdict.

> 💡 The Integral Test is your workhorse when the series isn't a clean $p$-series — like $\\frac{1}{n\\ln n}$ or $\\frac{1}{n^2+1}$. Use it in the next check.`,
      },
      {
        id: 'it7-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which series can the Integral Test prove DIVERGES?',
              options: [
                '$\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}$',
                '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$',
                '$\\sum_{n=1}^{\\infty} n e^{-n^2}$',
                '$\\sum_{n=1}^{\\infty} \\frac{1}{n^3}$',
              ],
              correctAnswer: 0,
              explanation: '$\\int_2^{\\infty}\\frac{dx}{x\\ln x} = [\\ln(\\ln x)]_2^{\\infty} = \\infty$ (via $u=\\ln x$), so this series diverges. The other three give finite integrals and converge.',
            },
            {
              question: 'Before applying the Integral Test to $\\sum a_n$, you MUST verify that $f(x)$ is:',
              options: [
                'continuous, positive, and decreasing on $[N,\\infty)$',
                'increasing and unbounded',
                'equal to its own integral',
                'a polynomial',
              ],
              correctAnswer: 0,
              explanation: 'These three hypotheses make the rectangle comparison valid. Skip any one (especially "decreasing") and the test does not apply.',
            },
          ],
        },
      },
      {
        id: 'it7-final-recap',
        type: 'text' as const,
        content: `## You've Got the Whole Toolkit

You can now decide convergence with the Integral Test, instantly classify $p$-series, and bound the error of a partial-sum estimate. One last thing before the exit quiz:

> 🔑 **Remember the verdict, not the value.** The Integral Test (and the $p$-series rule it proves) tells you *whether* a series converges. The integral's number is for *bounding* the sum, never for *being* the sum.

Finish strong with the three-question exit quiz below.`,
      },
      {
        id: 'it7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'For which $p$ does $\\sum_{n=1}^{\\infty}\\frac{1}{n^p}$ converge?',
              options: ['$p > 1$', '$p \\ge 1$', '$0 < p < 1$', 'all $p$'],
              correctAnswer: 0,
              explanation: 'A $p$-series converges exactly when $p > 1$. At $p=1$ it is the harmonic series, which diverges.',
            },
            {
              question: 'The Integral Test applied to $\\sum a_n$ gives $\\int_1^{\\infty} f(x)\\,dx = \\infty$. The series:',
              options: ['diverges', 'converges to $\\infty$ as a number', 'converges', 'requires the $n$-th term test instead'],
              correctAnswer: 0,
              explanation: 'A divergent integral means a divergent series — they share the verdict. ("Converges to $\\infty$" is a contradiction; convergence requires a finite limit.)',
            },
            {
              question: 'Using $S_2$ to approximate $S=\\sum_{k=1}^{\\infty}\\frac{1}{k^2}$, the error $R_2$ satisfies $R_2 \\le \\int_2^{\\infty}\\frac{dx}{x^2}$, which equals:',
              options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$2$', '$\\frac{1}{8}$'],
              correctAnswer: 0,
              explanation: '$\\int_2^{\\infty}\\frac{dx}{x^2} = \\left[-\\frac{1}{x}\\right]_2^{\\infty} = 0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$. So the error after two terms is at most $\\frac{1}{2}$.',
            },
          ],
        },
      },
    ],
  },
]
