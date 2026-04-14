export const calcabLimitsInfinityPart1Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai1-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity & Horizontal Asymptotes

**Part 1 of 7 — End Behavior of Functions**

---

### Topics in This Part

| Section |
|---------|
| 📖 What Does "Limit at Infinity" Mean? |
| Intuitive Approach: End Behavior |
| 📌 Horizontal Asymptotes |
| Formal Definitions |

> 🔑 **Key Concept:** Limits at infinity describe the long-run behavior of a function — what happens to $f(x)$ as $x$ grows without bound or decreases without bound.

---

### What You'll Master in Part 1
- Understanding what $\\lim_{x \\to \\infty} f(x)$ and $\\lim_{x \\to -\\infty} f(x)$ mean
- Connecting limits at infinity to horizontal asymptotes
- Evaluating basic limits at infinity for rational functions
- Identifying end behavior from algebraic expressions`
    },
    {
      id: 'lai1-what-is-limit-at-infinity',
      type: 'text' as const,
      content: `
## 📖 What Does "Limit at Infinity" Mean?

When we write:

$$\\lim_{x \\to \\infty} f(x) = L$$

we mean that as $x$ increases without bound, the values of $f(x)$ get **arbitrarily close** to $L$.

Similarly:

$$\\lim_{x \\to -\\infty} f(x) = M$$

means that as $x$ decreases without bound (goes far to the left), $f(x)$ approaches $M$.

> 🔑 **Key Concept:** Unlike ordinary limits where $x \\to c$ for a finite number $c$, here $x$ itself is growing without bound. We're asking: "What value does the output settle toward?"

---

### The Building Block: $\\frac{1}{x}$

The simplest and most important example:

$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0 \\qquad \\text{and} \\qquad \\lim_{x \\to -\\infty} \\frac{1}{x} = 0$$

As $x$ gets huge, $\\frac{1}{x}$ gets tiny. The same is true for any positive power:

$$\\lim_{x \\to \\infty} \\frac{1}{x^n} = 0 \\quad \\text{for all } n > 0$$

| $x$ | $\\frac{1}{x}$ | $\\frac{1}{x^2}$ | $\\frac{1}{x^3}$ |
|-----|---------------|-----------------|-----------------|
| 10 | 0.1 | 0.01 | 0.001 |
| 100 | 0.01 | 0.0001 | 0.000001 |
| 1000 | 0.001 | 0.000001 | $10^{-9}$ |

Higher powers of $x$ in the denominator shrink **faster**.

---

### Intuitive Approach: End Behavior

For polynomials and rational functions, **the highest-degree term dominates** when $x$ is very large:

- $f(x) = 3x^4 - 2x^2 + 7 \\approx 3x^4$ for large $x$
- $g(x) = \\frac{5x^3 + x}{2x^3 - 1} \\approx \\frac{5x^3}{2x^3} = \\frac{5}{2}$ for large $x$

> ⚠️ **Warning:** This "dominant term" reasoning works for polynomials and rational functions. Other function types (exponential, logarithmic, trigonometric) require different techniques.`
    },
    {
      id: 'lai1-horizontal-asymptotes',
      type: 'text' as const,
      content: `
## 📌 Horizontal Asymptotes

A horizontal asymptote is a horizontal line $y = L$ that the graph of $f$ approaches as $x \\to \\infty$ or $x \\to -\\infty$.

$$\\boxed{\\text{If } \\lim_{x \\to \\infty} f(x) = L \\text{ or } \\lim_{x \\to -\\infty} f(x) = L, \\text{ then } y = L \\text{ is a horizontal asymptote.}}$$

---

### Three Cases for Rational Functions $\\frac{p(x)}{q(x)}$

Let $\\deg(p)$ = degree of numerator and $\\deg(q)$ = degree of denominator.

| Case | Condition | Limit at $\\pm\\infty$ | Horizontal Asymptote |
|------|-----------|----------------------|---------------------|
| **1** | $\\deg(p) < \\deg(q)$ | $0$ | $y = 0$ |
| **2** | $\\deg(p) = \\deg(q)$ | $\\frac{\\text{leading coeff of } p}{\\text{leading coeff of } q}$ | $y = \\frac{a_n}{b_n}$ |
| **3** | $\\deg(p) > \\deg(q)$ | $\\pm\\infty$ | None |

---

### Worked Examples

**Example 1:** $\\lim_{x \\to \\infty} \\frac{3x + 1}{5x - 2}$

Degrees are equal (both 1). Answer: $\\frac{3}{5}$.

**Example 2:** $\\lim_{x \\to \\infty} \\frac{x^2 + 4}{7x^3 - x}$

Numerator degree (2) < denominator degree (3). Answer: $0$.

**Example 3:** $\\lim_{x \\to \\infty} \\frac{2x^3 - x}{4x + 1}$

Numerator degree (3) > denominator degree (1). Answer: $\\infty$ (no HA).

---

### The "Divide by Highest Power" Technique

When in doubt, divide every term by the highest power of $x$ in the **denominator**:

$$\\lim_{x \\to \\infty} \\frac{4x^2 - 3x + 1}{2x^2 + 5} = \\lim_{x \\to \\infty} \\frac{4 - \\frac{3}{x} + \\frac{1}{x^2}}{2 + \\frac{5}{x^2}} = \\frac{4 - 0 + 0}{2 + 0} = 2$$

> **AP Tip:** This "divide by highest power" technique is the most reliable method and earns full credit on the AP exam.`
    },
    {
      id: 'lai1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `**Limits at Infinity — Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{5x^2 + 3}{2x^2 - 7}$.',
            options: ['$0$', '$\\frac{5}{2}$', '$\\frac{3}{-7}$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'Degrees are equal (both 2). The limit is the ratio of leading coefficients: $\\frac{5}{2}$.'
          },
          {
            question: 'Which function has NO horizontal asymptote?',
            options: ['$f(x) = \\frac{3x}{x^2+1}$', '$g(x) = \\frac{x^2+1}{x-4}$', '$h(x) = \\frac{2x+3}{5x-1}$', '$k(x) = \\frac{7}{x^3+2}$'],
            correctAnswer: 1,
            explanation: 'For $g(x) = \\frac{x^2+1}{x-4}$, the numerator degree (2) exceeds the denominator degree (1), so the limit at infinity is $\\pm\\infty$. No horizontal asymptote exists.'
          },
          {
            question: 'What is $\\lim_{x \\to -\\infty} \\frac{4x}{x^2 + 1}$?',
            options: ['$4$', '$0$', '$-4$', '$-\\infty$'],
            correctAnswer: 1,
            explanation: 'Numerator degree (1) < denominator degree (2), so the limit is $0$. The function approaches $0$ from below as $x \\to -\\infty$, but the limit value is still $0$.'
          }
        ]
      }
    },
    {
      id: 'lai1-formal-definitions',
      type: 'text' as const,
      content: `
## Formal Definitions

### Precise Definition of $\\lim_{x \\to \\infty} f(x) = L$

For every $\\varepsilon > 0$, there exists an $N > 0$ such that:

$$x > N \\implies |f(x) - L| < \\varepsilon$$

In plain language: no matter how small a neighborhood around $L$ you choose, there's a point beyond which **all** function values stay within that neighborhood.

---

### Infinite Limits at Infinity

We write $\\lim_{x \\to \\infty} f(x) = \\infty$ when $f(x)$ grows without bound:

$$\\text{For every } M > 0, \\text{ there exists } N > 0 \\text{ such that } x > N \\implies f(x) > M$$

**Examples:**

$$\\lim_{x \\to \\infty} x^2 = \\infty \\qquad \\lim_{x \\to \\infty} e^x = \\infty \\qquad \\lim_{x \\to -\\infty} e^x = 0$$

---

### A Function Can Have Two Different Horizontal Asymptotes

$$f(x) = \\frac{x}{\\sqrt{x^2+1}}$$

- $\\lim_{x \\to \\infty} f(x) = 1$ (since $\\sqrt{x^2} = x$ for $x > 0$)
- $\\lim_{x \\to -\\infty} f(x) = -1$ (since $\\sqrt{x^2} = -x$ for $x < 0$)

So $y = 1$ and $y = -1$ are both horizontal asymptotes.

> 🔑 **Key Concept:** Always check both $x \\to \\infty$ and $x \\to -\\infty$ — they can give different results, especially when square roots or absolute values are involved.`
    },
    {
      id: 'lai1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Limits at Infinity Drill** 🧮

Evaluate each limit. Enter your answer as a number or fraction (e.g., 3/5). If the limit is $\\infty$, enter "infinity".

**1)** $\\lim_{x \\to \\infty} \\frac{6x^3 + 2x}{3x^3 - x^2}$

**2)** $\\lim_{x \\to \\infty} \\frac{x + 4}{x^2 + 1}$

**3)** $\\lim_{x \\to \\infty} \\frac{8x^2 - 3}{2x^2 + 5x}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0', '4'],
        hint1: 'Degrees equal (both 3): ratio of leading coefficients = $\\frac{6}{3}$.',
        hint2: 'Numerator degree (1) < denominator degree (2), so the limit is $0$.',
        hint3: 'Degrees equal (both 2): ratio of leading coefficients = $\\frac{8}{2} = 4$.',
        explanation: '1) $\\frac{6}{3} = 2$. 2) Degree of top < degree of bottom → $0$. 3) $\\frac{8}{2} = 4$.'
      }
    },
    {
      id: 'lai1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Horizontal Asymptote Identification** 🔽\n\nFor each function, select its horizontal asymptote(s).`,
      exercise: {
        dropdowns: [
          { label: '$f(x) = \\frac{3x-1}{x+5}$', options: ['$y = 0$', '$y = 3$', '$y = -1/5$', 'No HA'] },
          { label: '$g(x) = \\frac{2}{x^2+4}$', options: ['$y = 0$', '$y = 2$', '$y = 1/2$', 'No HA'] },
          { label: '$h(x) = \\frac{x^3+1}{x^2-2}$', options: ['$y = 0$', '$y = 1$', '$y = -1/2$', 'No HA'] },
          { label: '$k(x) = \\frac{-5x^2}{3x^2+x}$', options: ['$y = 0$', '$y = -5/3$', '$y = -5$', 'No HA'] }
        ],
        correctAnswers: ['$y = 3$', '$y = 0$', 'No HA', '$y = -5/3$'],
        hint1: 'Compare degrees and use ratio of leading coefficients when degrees are equal.',
        hint2: 'When the numerator degree is smaller, the limit at infinity is 0.',
        hint3: 'When the numerator degree is larger, there is no horizontal asymptote.',
        explanation: '$f$: degrees equal, $3/1=3$. $g$: deg(num)=0 < deg(den)=2, so $y=0$. $h$: deg(num)=3 > deg(den)=2, no HA. $k$: degrees equal, $-5/3$.'
      }
    },
    {
      id: 'lai1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Limits at Infinity** ✅`,
      exercise: {
        questions: [
          {
            question: 'A rational function $f(x) = \\frac{p(x)}{q(x)}$ has a horizontal asymptote at $y = 0$. Which must be true?',
            options: [
              'The degree of $p$ equals the degree of $q$',
              'The degree of $p$ is less than the degree of $q$',
              'The leading coefficient of $p$ is 0',
              '$f(0) = 0$'
            ],
            correctAnswer: 1,
            explanation: 'A horizontal asymptote at $y = 0$ occurs when the degree of the numerator is strictly less than the degree of the denominator.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -\\infty} \\frac{2x^2 - x}{3x^2 + 4}$.',
            options: ['$\\frac{2}{3}$', '$-\\frac{2}{3}$', '$0$', '$-\\infty$'],
            correctAnswer: 0,
            explanation: 'Degrees are equal (both 2). The limit is $\\frac{2}{3}$ regardless of whether $x \\to \\infty$ or $x \\to -\\infty$, since both leading terms are positive (even power).'
          }
        ]
      }
    }
  ]
}
