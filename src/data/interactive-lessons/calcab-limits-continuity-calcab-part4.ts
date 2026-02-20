export const calcabLimitsPart4Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit4-intro',
      type: 'text' as const,
      content: `
# ∫ The Squeeze Theorem

**Part 4 of 7 — Bounding Limits**

### 1. Statement of the Squeeze Theorem

If $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $c$ (except possibly at $c$), and:

$$\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$$

then $\\lim_{x \\to c} f(x) = L$ as well.

**Intuition:** If $f$ is "squeezed" between two functions that both approach $L$, then $f$ must also approach $L$.

### 2. Classic Example: $\\lim_{x \\to 0} x \\sin\\left(\\frac{1}{x}\\right)$

We know $-1 \\leq \\sin\\left(\\frac{1}{x}\\right) \\leq 1$ for all $x \\neq 0$.

Multiply by $|x|$: $\\ -|x| \\leq x\\sin\\left(\\frac{1}{x}\\right) \\leq |x|$

Since $\\lim_{x \\to 0} (-|x|) = 0$ and $\\lim_{x \\to 0} |x| = 0$:

$$\\lim_{x \\to 0} x\\sin\\left(\\frac{1}{x}\\right) = 0$$

### 3. When to Use the Squeeze Theorem

Use it when:
- The function involves an **oscillating** factor (like $\\sin$ or $\\cos$) multiplied by something going to 0
- You can bound the function between two simpler functions
- Direct algebraic techniques don't work

### 4. Proving $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

Using geometry of the unit circle, one can show that for $0 < x < \\frac{\\pi}{2}$:

$$\\cos x \\leq \\frac{\\sin x}{x} \\leq 1$$

Since $\\lim_{x \\to 0} \\cos x = 1$ and $\\lim_{x \\to 0} 1 = 1$, the Squeeze Theorem gives us $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.
      `
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
            explanation: 'Since $-1 \\leq \\cos(1/x) \\leq 1$, we get $-x^2 \\leq x^2\\cos(1/x) \\leq x^2$. Both $-x^2$ and $x^2$ approach 0 as $x \\to 0$, so by the Squeeze Theorem, the limit is 0.'
          },
          {
            question: 'If $3 \\leq f(x) \\leq x^2 + 3$ for all $x$, what is $\\lim_{x \\to 0} f(x)$?',
            options: ['$0$', '$3$', '$6$', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: '$\\lim_{x \\to 0} 3 = 3$ and $\\lim_{x \\to 0} (x^2 + 3) = 0 + 3 = 3$. Since both bounds approach 3, the Squeeze Theorem tells us $\\lim_{x \\to 0} f(x) = 3$.'
          }
        ]
      }
    },
    {
      id: 'limit4-detail',
      type: 'text' as const,
      content: `
### Squeeze Theorem Checklist

To apply the Squeeze Theorem, you need three things:
1. ✅ A **lower bound** function $g(x) \\leq f(x)$
2. ✅ An **upper bound** function $f(x) \\leq h(x)$
3. ✅ Both bounds approach the **same limit**: $\\lim g = \\lim h = L$

**Common bounding facts:**
- $-1 \\leq \\sin(\\text{anything}) \\leq 1$
- $-1 \\leq \\cos(\\text{anything}) \\leq 1$
- $0 \\leq |\\sin(\\text{anything})| \\leq 1$
      `
    },
    {
      id: 'limit4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'To evaluate $\\lim_{x \\to 0} \\sqrt{x} \\cdot \\sin\\left(\\frac{1}{x^2}\\right)$ for $x > 0$, what are the correct bounds to use?',
            options: [
              '$-1 \\leq \\sqrt{x}\\sin(1/x^2) \\leq 1$',
              '$-\\sqrt{x} \\leq \\sqrt{x}\\sin(1/x^2) \\leq \\sqrt{x}$',
              '$0 \\leq \\sqrt{x}\\sin(1/x^2) \\leq x$',
              '$-x^2 \\leq \\sqrt{x}\\sin(1/x^2) \\leq x^2$'
            ],
            correctAnswer: 1,
            explanation: 'Since $-1 \\leq \\sin(1/x^2) \\leq 1$, multiply through by $\\sqrt{x}$ (which is $\\geq 0$ for $x > 0$): $-\\sqrt{x} \\leq \\sqrt{x}\\sin(1/x^2) \\leq \\sqrt{x}$. Both bounds → 0, so the limit is 0.'
          }
        ]
      }
    },
    {
      id: 'limit4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Apply the Squeeze Theorem** 🔍`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 0} x^4 \\sin(1/x) = $', options: ['0', '1', '-1', 'DNE'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{\\cos(x)}{x} = $', options: ['0', '1', '-1', 'DNE'] },
          { label: 'Is Squeeze Theorem needed for $\\lim_{x \\to 2} (x+1)$?', options: ['Yes', 'No — direct substitution works', 'No — factor first', 'No — rationalize first'] }
        ],
        correctAnswers: ['0', '0', 'No — direct substitution works'],
        hint1: 'For the first: $-x^4 \\leq x^4 \\sin(1/x) \\leq x^4$, and $x^4 \\to 0$.',
        hint2: 'For the second: $\\frac{-1}{x} \\leq \\frac{\\cos x}{x} \\leq \\frac{1}{x}$, and $\\frac{1}{x} \\to 0$.',
        hint3: '$x+1$ is a polynomial — no oscillation, no indeterminate form.',
        explanation: '$x^4 \\sin(1/x)$ is squeezed between $\\pm x^4 \\to 0$. $\\frac{\\cos x}{x}$ is squeezed between $\\pm \\frac{1}{x} \\to 0$. The polynomial $x+1$ needs no Squeeze Theorem — just substitute.'
      }
    }
  ]
}
