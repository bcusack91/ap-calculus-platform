export const calcabLimitsPart2Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit2-intro',
      type: 'text' as const,
      content: `# ∫ Evaluating Limits Algebraically

**Part 2 of 7 — Mastering Limit Computation**

---

### Topics in This Part

| Section |
|---------|
| 📖 Special Trig Limits |
| Limits at Infinity for Rational Functions |
| 📌 Limits Involving $e$ |
| Piecewise Function Limits |
| One-Sided Limits |

> 🔑 **Key Concept:** Beyond factoring and rationalizing, certain *memorized limits* and *comparison strategies* let you evaluate limits quickly on the AP exam.`
    },
    {
      id: 'limit2-trig-limits',
      type: 'text' as const,
      content: `
## 📖 Special Trig Limits

Two limits you **must memorize** for the AP exam:

$$\\boxed{\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0}$$

---

### Extending the Pattern

The key insight: you can **match the argument** of $\\sin$ with the denominator.

| Limit | Rewriting | Result |
|-------|-----------|--------|
| $\\frac{\\sin(3x)}{x}$ | $3 \\cdot \\frac{\\sin(3x)}{3x}$ | $3$ |
| $\\frac{\\sin(ax)}{bx}$ | $\\frac{a}{b} \\cdot \\frac{\\sin(ax)}{ax}$ | $\\frac{a}{b}$ |
| $\\frac{\\sin(5x)}{\\sin(2x)}$ | $\\frac{5x}{2x} \\cdot \\frac{\\sin(5x)/(5x)}{\\sin(2x)/(2x)}$ | $\\frac{5}{2}$ |
| $\\frac{\\tan x}{x}$ | $\\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x}$ | $1$ |

---

### General Rule

$$\\boxed{\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b}}$$

---

**Worked Example:**

$$\\lim_{x \\to 0} \\frac{\\sin(7x)}{\\sin(3x)} = \\lim_{x \\to 0} \\frac{\\sin(7x)}{7x} \\cdot \\frac{3x}{\\sin(3x)} \\cdot \\frac{7}{3} = 1 \\cdot 1 \\cdot \\frac{7}{3} = \\frac{7}{3}$$

> **AP Tip:** These trig limits appear in disguised forms nearly every year. The secret is always to make the argument of $\\sin$ match the denominator.`
    },
    {
      id: 'limit2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$.',
            options: ['$\\frac{2}{5}$', '$\\frac{5}{2}$', '$1$', '$0$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $\\frac{\\sin(5x)}{2x} = \\frac{5}{2} \\cdot \\frac{\\sin(5x)}{5x}$. Since $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$, the answer is $\\frac{5}{2}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(3x)}{\\sin(4x)}$.',
            options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{\\sin(3x)}{\\sin(4x)} = \\frac{\\sin(3x)}{3x} \\cdot \\frac{4x}{\\sin(4x)} \\cdot \\frac{3}{4} \\to 1 \\cdot 1 \\cdot \\frac{3}{4} = \\frac{3}{4}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\tan(2x)}{3x}$.',
            options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$', '$1$'],
            correctAnswer: 1,
            explanation: '$\\frac{\\tan(2x)}{3x} = \\frac{\\sin(2x)}{3x \\cos(2x)} = \\frac{2}{3} \\cdot \\frac{\\sin(2x)}{2x} \\cdot \\frac{1}{\\cos(2x)} \\to \\frac{2}{3} \\cdot 1 \\cdot 1 = \\frac{2}{3}$.'
          }
        ]
      }
    },
    {
      id: 'limit2-infinity',
      type: 'text' as const,
      content: `
## 📖 Limits at Infinity for Rational Functions

For rational functions $\\frac{P(x)}{Q(x)}$ as $x \\to \\pm\\infty$, **compare the degrees**:

$$\\boxed{\\lim_{x \\to \\infty} \\frac{a_n x^n + \\cdots}{b_m x^m + \\cdots} = \\begin{cases} 0 & \\text{if } n < m \\\\ \\frac{a_n}{b_m} & \\text{if } n = m \\\\ \\pm\\infty & \\text{if } n > m \\end{cases}}$$

---

### Memory Aid

| Degree Comparison | Result | Mnemonic |
|-------------------|--------|----------|
| deg(top) < deg(bottom) | $0$ | "Bottom Heavy → squishes to 0" |
| deg(top) = deg(bottom) | $\\frac{\\text{leading coeff}}{\\text{leading coeff}}$ | "Tie → compare captains" |
| deg(top) > deg(bottom) | $\\pm\\infty$ | "Top Heavy → blows up" |

---

### Worked Examples

**Example 1:** $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2} = \\frac{3}{5}$ (same degree: ratio of leading coefficients)

**Example 2:** $\\lim_{x \\to \\infty} \\frac{2x}{x^2 + 1} = 0$ (degree 1 < degree 2: bottom wins)

**Example 3:** $\\lim_{x \\to \\infty} \\frac{x^3}{x+1} = \\infty$ (degree 3 > degree 1: top wins)

> 🔑 **Key Fact:** Horizontal asymptotes come directly from limits at infinity. If $\\lim_{x \\to \\infty} f(x) = L$, then $y = L$ is a horizontal asymptote.`
    },
    {
      id: 'limit2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Limits at Infinity Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{4x^3 - x + 2}{2x^3 + 5x^2}$.',
            options: ['$0$', '$2$', '$\\infty$', '$\\frac{4}{5}$'],
            correctAnswer: 1,
            explanation: 'Same degree (3) in numerator and denominator. Limit = ratio of leading coefficients: $\\frac{4}{2} = 2$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x + 7}{x^2 - 1}$.',
            options: ['$3$', '$0$', '$\\infty$', '$-7$'],
            correctAnswer: 1,
            explanation: 'Degree 1 < degree 2. Bottom wins → limit is 0.'
          }
        ]
      }
    },
    {
      id: 'limit2-e-limits',
      type: 'text' as const,
      content: `
## 📌 Limits Involving $e$

The number $e$ is defined by:

$$\\boxed{e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828}$$

---

### Important Variants

| Limit | Result | When You See It |
|-------|--------|-----------------|
| $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ | $1$ | Derivative definition of $e^x$ at $x=0$ |
| $\\lim_{x \\to 0} \\frac{e^{ax} - 1}{x}$ | $a$ | Chain rule extension |
| $\\lim_{n \\to \\infty} \\left(1 + \\frac{r}{n}\\right)^n$ | $e^r$ | Compound interest formula |

> **AP Tip:** The limit $\\frac{e^x - 1}{x} \\to 1$ is really $f'(0)$ where $f(x) = e^x$. Recognizing limits as derivatives in disguise is a powerful exam strategy.`
    },
    {
      id: 'limit2-piecewise',
      type: 'text' as const,
      content: `
## Piecewise Function Limits & One-Sided Limits

For piecewise functions, evaluate the limit from **each side** separately:

$$f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x - 1 & x \\geq 1 \\end{cases}$$

- $\\lim_{x \\to 1^-} f(x) = 1^2 = 1$ (use the "$x < 1$" rule)
- $\\lim_{x \\to 1^+} f(x) = 2(1)-1 = 1$ (use the "$x \\geq 1$" rule)

Since both sides agree: $\\lim_{x \\to 1} f(x) = 1$ ✓

---

### When a Piecewise Limit Fails

$$g(x) = \\begin{cases} x + 2 & x < 3 \\\\ x^2 - 4 & x \\geq 3 \\end{cases}$$

- $\\lim_{x \\to 3^-} g(x) = 5$
- $\\lim_{x \\to 3^+} g(x) = 5$

These agree, so $\\lim_{x \\to 3} g(x) = 5$. But $g(3) = 5$ too, so $g$ is also continuous here.

---

$$h(x) = \\begin{cases} 2x & x < 1 \\\\ x + 3 & x \\geq 1 \\end{cases}$$

- $\\lim_{x \\to 1^-} h(x) = 2$
- $\\lim_{x \\to 1^+} h(x) = 4$

Left $\\neq$ right, so $\\lim_{x \\to 1} h(x)$ **does not exist**.

> 🔑 **Key Fact:** A two-sided limit exists if and only if both one-sided limits exist and are equal.`
    },
    {
      id: 'limit2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Evaluate Each Limit** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 0} \\frac{\\sin(4x)}{4x}$', options: ['0', '1', '4', 'DNE'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{x^2+1}{3x^2-x}$', options: ['0', '1/3', '1', '3'] },
          { label: '$\\lim_{x \\to 0} \\frac{1-\\cos x}{x}$', options: ['0', '1', '-1', 'DNE'] },
          { label: '$\\lim_{x \\to 0} \\frac{e^{3x}-1}{x}$', options: ['0', '1', '3', 'DNE'] }
        ],
        correctAnswers: ['1', '1/3', '0', '3'],
        hint1: 'The first is a direct application of the special trig limit $\\frac{\\sin u}{u} \\to 1$.',
        hint2: 'For the second, both numerator and denominator are degree 2.',
        hint3: '$\\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0$ is one of the memorized special limits.',
        explanation: '$\\frac{\\sin(4x)}{4x} \\to 1$. $\\frac{x^2+1}{3x^2-x} \\to \\frac{1}{3}$ (leading coefficients). $\\frac{1-\\cos x}{x} \\to 0$ (memorize). $\\frac{e^{3x}-1}{x} \\to 3$ (derivative of $e^{3x}$ at 0).'
      }
    },
    {
      id: 'limit2-input',
      type: 'input-box' as const,
      content: `**Compute the Limit** ✍️`,
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(8x)}{2x}$. Enter a number.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hint1: 'Rewrite as $\\frac{a}{b} \\cdot \\frac{\\sin(ax)}{ax}$ where $a=8, b=2$.',
        hint2: '$\\frac{\\sin(8x)}{2x} = \\frac{8}{2} \\cdot \\frac{\\sin(8x)}{8x}$',
        explanation: '$\\frac{\\sin(8x)}{2x} = \\frac{8}{2} \\cdot \\frac{\\sin(8x)}{8x} = 4 \\cdot 1 = 4$.'
      }
    }
  ]
}
