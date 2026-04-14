export const calcabLimitsPart4Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit4-intro',
      type: 'text' as const,
      content: `# ∫ The Squeeze Theorem

**Part 4 of 7 — Bounding Limits**

---

### Topics in This Part

| Section |
|---------|
| 📖 Statement of the Squeeze Theorem |
| Classic Oscillation Examples |
| 📌 Proving $\\frac{\\sin x}{x} \\to 1$ |
| When to Use (and When Not To) |
| AP-Style Squeeze Theorem Problems |

> 🔑 **Key Concept:** The Squeeze Theorem (also called the Sandwich or Pinching Theorem) lets you evaluate limits of functions that are trapped between two other functions — even when algebraic techniques fail.`
    },
    {
      id: 'limit4-statement',
      type: 'text' as const,
      content: `
## 📖 Statement of the Squeeze Theorem

If $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $c$ (except possibly at $c$), and:

$$\\boxed{\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L \\quad \\Rightarrow \\quad \\lim_{x \\to c} f(x) = L}$$

---

### The Three Requirements

| Requirement | What to Check |
|-------------|---------------|
| 1. Lower bound | Find $g(x)$ with $g(x) \\leq f(x)$ near $c$ |
| 2. Upper bound | Find $h(x)$ with $f(x) \\leq h(x)$ near $c$ |
| 3. Same limit | Verify $\\lim g(x) = \\lim h(x) = L$ |

**Intuition:** If $f$ is "squeezed" between two functions that both approach $L$, then $f$ has no escape — it must also approach $L$.

---

### Common Bounding Facts

| Inequality | Use When |
|-----------|----------|
| $-1 \\leq \\sin(\\text{anything}) \\leq 1$ | Oscillating $\\sin$ factor |
| $-1 \\leq \\cos(\\text{anything}) \\leq 1$ | Oscillating $\\cos$ factor |
| $0 \\leq |\\sin(\\theta)| \\leq 1$ | Need non-negative bound |

> **AP Tip:** The Squeeze Theorem is the only tool for handling limits with oscillating terms like $\\sin(1/x)$ or $\\cos(1/x^2)$.`
    },
    {
      id: 'limit4-examples',
      type: 'text' as const,
      content: `
## Classic Oscillation Examples

### Example 1: $\\lim_{x \\to 0} x \\sin\\left(\\frac{1}{x}\\right)$

$\\sin(1/x)$ oscillates wildly between $-1$ and $1$ as $x \\to 0$. But $x \\to 0$:

$$-|x| \\leq x\\sin\\left(\\frac{1}{x}\\right) \\leq |x|$$

Since $\\lim_{x \\to 0} (-|x|) = 0$ and $\\lim_{x \\to 0} |x| = 0$:

$$\\boxed{\\lim_{x \\to 0} x\\sin\\left(\\frac{1}{x}\\right) = 0}$$

---

### Example 2: $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$

$$-x^2 \\leq x^2 \\cos\\left(\\frac{1}{x}\\right) \\leq x^2$$

Both $\\pm x^2 \\to 0$, so $\\lim_{x \\to 0} x^2 \\cos(1/x) = 0$.

---

### Example 3: $\\lim_{x \\to \\infty} \\frac{\\cos x}{x}$

$$-\\frac{1}{x} \\leq \\frac{\\cos x}{x} \\leq \\frac{1}{x}$$

Both $\\pm \\frac{1}{x} \\to 0$ as $x \\to \\infty$, so $\\lim_{x \\to \\infty} \\frac{\\cos x}{x} = 0$.

> 🔑 **Pattern:** Oscillating function × vanishing function → limit is 0 (use Squeeze Theorem).`
    },
    {
      id: 'limit4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$ using the Squeeze Theorem.',
            options: ['$1$', '$0$', '$-1$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'Since $-1 \\leq \\cos(1/x) \\leq 1$, we get $-x^2 \\leq x^2\\cos(1/x) \\leq x^2$. Both $-x^2$ and $x^2$ approach 0, so by the Squeeze Theorem, the limit is 0.'
          },
          {
            question: 'If $3 \\leq f(x) \\leq x^2 + 3$ for all $x$, what is $\\lim_{x \\to 0} f(x)$?',
            options: ['$0$', '$3$', '$6$', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: '$\\lim_{x \\to 0} 3 = 3$ and $\\lim_{x \\to 0} (x^2 + 3) = 3$. Since both bounds approach 3, the Squeeze Theorem gives $\\lim_{x \\to 0} f(x) = 3$.'
          },
          {
            question: 'To evaluate $\\lim_{x \\to 0^+} \\sqrt{x} \\cdot \\sin\\left(\\frac{1}{x^2}\\right)$, what are the correct bounds?',
            options: [
              '$-1 \\leq \\sqrt{x}\\sin(1/x^2) \\leq 1$',
              '$-\\sqrt{x} \\leq \\sqrt{x}\\sin(1/x^2) \\leq \\sqrt{x}$',
              '$0 \\leq \\sqrt{x}\\sin(1/x^2) \\leq x$',
              '$-x^2 \\leq \\sqrt{x}\\sin(1/x^2) \\leq x^2$'
            ],
            correctAnswer: 1,
            explanation: 'Since $-1 \\leq \\sin(1/x^2) \\leq 1$, multiply by $\\sqrt{x} \\geq 0$: $-\\sqrt{x} \\leq \\sqrt{x}\\sin(1/x^2) \\leq \\sqrt{x}$. Both bounds $\\to 0$, so the limit is 0.'
          }
        ]
      }
    },
    {
      id: 'limit4-sinx-proof',
      type: 'text' as const,
      content: `
## 📌 Proving $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

This fundamental result is proved using the Squeeze Theorem and unit circle geometry.

For $0 < x < \\frac{\\pi}{2}$, comparing areas of triangles and sectors on the unit circle:

$$\\boxed{\\cos x \\leq \\frac{\\sin x}{x} \\leq 1}$$

Since $\\lim_{x \\to 0} \\cos x = 1$ and $\\lim_{x \\to 0} 1 = 1$:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

---

### Why This Matters

| Result | How It's Used |
|--------|---------------|
| $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ | Derivative of $\\sin x$ at $x = 0$ |
| $\\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0$ | Derived from $\\frac{\\sin x}{x}$ result |
| $\\frac{d}{dx}[\\sin x] = \\cos x$ | Uses both limits above in limit definition |

> **AP Tip:** You don't need to prove this on the AP exam, but understanding *why* it's true deepens your grasp of the limit → derivative connection.`
    },
    {
      id: 'limit4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Apply the Squeeze Theorem** 🔍\n\nDetermine each limit.`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 0} x^4 \\sin(1/x) =$', options: ['0', '1', '-1', 'DNE'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x^2} =$', options: ['0', '1', '-1', 'DNE'] },
          { label: 'Is Squeeze Theorem needed for $\\lim_{x \\to 2} (x+1)$?', options: ['Yes', 'No — direct substitution works', 'No — factor first', 'No — rationalize first'] }
        ],
        correctAnswers: ['0', '0', 'No — direct substitution works'],
        hint1: '$-x^4 \\leq x^4 \\sin(1/x) \\leq x^4$, and $x^4 \\to 0$.',
        hint2: '$\\frac{-1}{x^2} \\leq \\frac{\\sin x}{x^2} \\leq \\frac{1}{x^2}$, and $\\frac{1}{x^2} \\to 0$.',
        hint3: '$x+1$ is a polynomial — no oscillation, no indeterminate form.',
        explanation: '$x^4 \\sin(1/x)$ is squeezed between $\\pm x^4 \\to 0$. $\\frac{\\sin x}{x^2}$ is squeezed between $\\pm \\frac{1}{x^2} \\to 0$. Polynomials just need direct substitution.'
      }
    },
    {
      id: 'limit4-input',
      type: 'input-box' as const,
      content: `**Apply the Squeeze Theorem** ✍️`,
      exercise: {
        question: 'If $5 - x^2 \\leq f(x) \\leq 5 + x^2$ for all $x$ near 0, what is $\\lim_{x \\to 0} f(x)$?',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5.0'],
        hint1: 'Find $\\lim_{x \\to 0}$ of both bounds.',
        hint2: 'Both $5 - x^2$ and $5 + x^2$ approach the same value as $x \\to 0$.',
        explanation: '$\\lim_{x \\to 0} (5 - x^2) = 5$ and $\\lim_{x \\to 0} (5 + x^2) = 5$. By the Squeeze Theorem, $\\lim_{x \\to 0} f(x) = 5$.'
      }
    }
  ]
}
