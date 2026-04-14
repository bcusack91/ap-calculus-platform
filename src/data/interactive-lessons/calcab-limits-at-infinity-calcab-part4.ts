export const calcabLimitsInfinityPart4Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai4-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Comparing Rates of Growth

**Part 4 of 7 — Dominance & Relative Growth**

---

### Topics in This Part

| Section |
|---------|
| 📖 Comparing Growth Rates Formally |
| Limits of Composite Functions at Infinity |
| 📌 Indeterminate Forms $\\frac{\\infty}{\\infty}$ |
| AP-Style Growth Rate Problems |

> 🔑 **Key Concept:** Two functions may both approach infinity, but at vastly different speeds. Understanding relative rates is key to evaluating limits where both numerator and denominator diverge.`
    },
    {
      id: 'lai4-comparing',
      type: 'text' as const,
      content: `
## 📖 Comparing Growth Rates Formally

We say $f(x)$ **grows faster** than $g(x)$ as $x \\to \\infty$ if:

$$\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = \\infty$$

Equivalently, $\\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = 0$.

We say $f$ and $g$ grow at the **same rate** if $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L$ for some finite $L \\neq 0$.

---

### Key Comparisons

| Limit | Result | Why |
|-------|--------|-----|
| $\\frac{e^x}{x^n}$ | $\\infty$ | Exponential beats any polynomial |
| $\\frac{x^n}{\\ln x}$ | $\\infty$ | Any power beats logarithm |
| $\\frac{(\\ln x)^k}{x^p}$ | $0$ | Even powers of $\\ln$ lose to $x^p$ |
| $\\frac{2^x}{e^x}$ | $0$ | $(2/e)^x \\to 0$ since $2/e < 1$ |
| $\\frac{e^x}{3^x}$ | $\\infty$ | $(e/3)^x \\to 0$ but we have $e < 3$, so this → 0. Correction: $e \\approx 2.718 < 3$ gives $\\frac{e^x}{3^x} = (e/3)^x \\to 0$ |

> ⚠️ **Careful:** Among exponentials, the one with the larger base dominates: $3^x$ beats $e^x$ beats $2^x$ for large $x$.

---

### Composite Functions at Infinity

$$\\lim_{x \\to \\infty} e^{-1/x} = e^0 = 1$$

$$\\lim_{x \\to \\infty} \\ln(x^2 + 1) = \\infty \\quad \\text{(but slowly)}$$

$$\\lim_{x \\to \\infty} \\sin\\left(\\frac{\\pi x}{2x+1}\\right) = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$$

**Technique:** If the inner function has a limit, compose with the outer function (by continuity):

$$\\lim_{x \\to \\infty} f(g(x)) = f\\left(\\lim_{x \\to \\infty} g(x)\\right) \\quad \\text{when } f \\text{ is continuous}$$`
    },
    {
      id: 'lai4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Growth Rate Comparison** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which grows fastest as $x \\to \\infty$?',
            options: ['$x^{100}$', '$e^x$', '$x!$', '$2^x$'],
            correctAnswer: 2,
            explanation: 'The growth hierarchy: polynomials < exponentials < factorials. Since $x!$ grows faster than any exponential, it dominates. (Note: $x!$ is not typically tested on AP Calculus AB, but is good to know.)'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{5^x}{e^{2x}}$.',
            options: ['$0$', '$1$', '$\\infty$', 'Does not exist'],
            correctAnswer: 0,
            explanation: '$\\frac{5^x}{e^{2x}} = \\left(\\frac{5}{e^2}\\right)^x$. Since $e^2 \\approx 7.39 > 5$, the base $5/e^2 < 1$, so this $\\to 0$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\cos\\left(\\frac{2}{x}\\right)$.',
            options: ['$0$', '$1$', '$-1$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'As $x \\to \\infty$, $2/x \\to 0$, and $\\cos(0) = 1$. By continuity of cosine.'
          }
        ]
      }
    },
    {
      id: 'lai4-indeterminate',
      type: 'text' as const,
      content: `
## 📌 The Indeterminate Form $\\frac{\\infty}{\\infty}$

When both numerator and denominator grow without bound, we have an $\\frac{\\infty}{\\infty}$ indeterminate form.

### Strategies (Without L'Hôpital's Rule)

1. **Factor out dominant terms:**
$$\\lim_{x \\to \\infty} \\frac{3x^2 + x}{x^2 - 5} = \\lim_{x \\to \\infty} \\frac{x^2(3 + 1/x)}{x^2(1 - 5/x^2)} = \\frac{3}{1} = 3$$

2. **Divide by highest power in denominator:**
$$\\lim_{x \\to \\infty} \\frac{x^3 + 2x}{x^2 + 1} = \\lim_{x \\to \\infty} \\frac{x + 2/x}{1 + 1/x^2} = \\frac{\\infty}{1} = \\infty$$

3. **Use growth rate hierarchy:**
$$\\lim_{x \\to \\infty} \\frac{e^x + x^3}{3e^x - x} = \\lim_{x \\to \\infty} \\frac{e^x(1 + x^3/e^x)}{e^x(3 - x/e^x)} = \\frac{1+0}{3-0} = \\frac{1}{3}$$

> **AP Tip:** You generally won't need L'Hôpital's Rule on the AB exam. The algebraic techniques above handle all standard $\\frac{\\infty}{\\infty}$ problems.`
    },
    {
      id: 'lai4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Growth Rate Problems** 🧮

Evaluate each limit.

**1)** $\\lim_{x \\to \\infty} \\frac{7x^3 - 2x}{3x^3 + x^2}$

**2)** $\\lim_{x \\to \\infty} \\frac{e^x + 100x^4}{2e^x - x}$

**3)** $\\lim_{x \\to \\infty} \\frac{\\ln(x^3)}{\\sqrt{x}}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7/3', '1/2', '0'],
        hint1: 'Equal degrees (both 3): ratio of leading coefficients $= 7/3$.',
        hint2: 'Divide by $e^x$: $\\frac{1 + 100x^4/e^x}{2 - x/e^x} \\to \\frac{1+0}{2-0} = 1/2$.',
        hint3: '$\\ln(x^3) = 3\\ln x$, and $\\ln x$ grows much slower than $\\sqrt{x}$.',
        explanation: '1) $7/3$. 2) $1/2$ (exponential dominates polynomial). 3) $0$ (log loses to any power).'
      }
    },
    {
      id: 'lai4-dropdown',
      type: 'dropdown-select' as const,
      content: `**True or False — Limits at Infinity** 🔽`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to \\infty} \\frac{x}{e^x} = 0$', options: ['True', 'False'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{e^x}{x^{1000}} = 0$', options: ['True', 'False'] },
          { label: 'If $\\lim_{x \\to \\infty} f(x) = 3$, then the graph never crosses $y = 3$', options: ['True', 'False'] },
          { label: '$\\lim_{x \\to \\infty} (1 + 1/x)^x = e$', options: ['True', 'False'] }
        ],
        correctAnswers: ['True', 'False', 'False', 'True'],
        hint1: 'Exponential dominates polynomial.',
        hint2: 'Exponential beats ANY polynomial, so this ratio → $\\infty$, not $0$.',
        hint3: 'A function can cross its horizontal asymptote — the asymptote only describes end behavior.',
        explanation: '1) True, $e^x$ dominates $x$. 2) False, $e^x$ dominates so the ratio → $\\infty$. 3) False, functions can cross HAs (e.g., $\\frac{\\sin x}{x}$ oscillates around $y=0$). 4) True, this is the definition of $e$.'
      }
    },
    {
      id: 'lai4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Comparing Growth Rates** ✅`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{2e^x + x^5}{e^x - x^{10}}$.',
            options: ['$0$', '$2$', '$-2$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'Divide by $e^x$: $\\frac{2 + x^5/e^x}{1 - x^{10}/e^x} \\to \\frac{2+0}{1-0} = 2$. The exponential terms dominate all polynomial terms.'
          },
          {
            question: 'If $f(x)$ grows faster than $g(x)$, then $\\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = $',
            options: ['$\\infty$', '$1$', '$0$', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'By definition, if $f$ grows faster, then $f/g \\to \\infty$, which means $g/f \\to 0$.'
          }
        ]
      }
    }
  ]
}
