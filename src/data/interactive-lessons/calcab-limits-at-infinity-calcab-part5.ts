export const calcabLimitsInfinityPart5Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai5-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Special Limits & Techniques

**Part 5 of 7 — Squeeze Theorem, Trig Limits, and Composite Limits**

---

### Topics in This Part

| Section |
|---------|
| 📖 Squeeze Theorem at Infinity |
| 📌 Key Trig and Exponential Limits |
| Trig Terms Next to Dominant Terms |
| Limits of Composite Functions |

> 🔑 **Key Concept:** A few special limits appear so often that they should be memorized. Combined with the Squeeze Theorem and continuity, they handle the trickiest infinity problems on the AP exam.`
    },
    {
      id: 'lai5-squeeze',
      type: 'text' as const,
      content: `
## 📖 Squeeze Theorem at Infinity

**Theorem:** If $g(x) \\leq f(x) \\leq h(x)$ for all $x > N$ and $\\lim_{x \\to \\infty} g(x) = \\lim_{x \\to \\infty} h(x) = L$, then $\\lim_{x \\to \\infty} f(x) = L$.

---

### Example 1: $\\lim_{x \\to \\infty} \\frac{\\sin x}{x}$

Since $-1 \\leq \\sin x \\leq 1$:

$$\\frac{-1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$$

Both bounds $\\to 0$, so $\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = 0$.

---

### Example 2: $\\lim_{x \\to \\infty} \\frac{x + \\sin x}{x}$

$$= 1 + \\frac{\\sin x}{x} \\to 1 + 0 = 1$$

---

### Example 3: $\\lim_{x \\to \\infty} \\frac{\\cos(e^x)}{\\sqrt{x}}$

$-1 \\leq \\cos(e^x) \\leq 1$, so $\\frac{-1}{\\sqrt{x}} \\leq \\frac{\\cos(e^x)}{\\sqrt{x}} \\leq \\frac{1}{\\sqrt{x}}$

Both bounds $\\to 0$, so the limit is $0$.

> **AP Tip:** Whenever you see an oscillating function (sin, cos) divided by a growing function, the Squeeze Theorem is almost certainly the right approach.`
    },
    {
      id: 'lai5-special-limits',
      type: 'text' as const,
      content: `
## 📌 Key Trig and Exponential Limits

Memorize these limits at $0$. They show up inside limits at infinity, in derivative definitions, and in L'Hospital problems:

$$\\boxed{\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0}$$

$$\\boxed{\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1}$$

The first is proved with the Squeeze Theorem. The last is the derivative of $e^x$ at $x = 0$: $\\lim_{h \\to 0}\\frac{e^{0+h} - e^0}{h} = e^0 = 1$.

**Scaled versions:** multiply and divide to match the pattern.

$$\\lim_{x \\to 0} \\frac{\\sin(5x)}{x} = \\lim_{x \\to 0} 5 \\cdot \\frac{\\sin(5x)}{5x} = 5$$

---

### Trig Terms Next to Dominant Terms

A bounded term such as $\\sin x$ or $\\cos x$ becomes negligible beside a growing term. Divide by the highest power and squeeze the trig pieces:

$$\\lim_{x \\to \\infty} \\frac{3x + 2\\sin x}{x - \\cos x} = \\lim_{x \\to \\infty} \\frac{3 + \\frac{2\\sin x}{x}}{1 - \\frac{\\cos x}{x}} = \\frac{3 + 0}{1 - 0} = 3$$

---

### Limits of Composite Functions

If $\\lim_{x \\to \\infty} g(x) = L$ and $f$ is continuous at $L$, then $\\lim_{x \\to \\infty} f(g(x)) = f(L)$. Find the inside limit first.

| Limit | Inside limit | Result |
|------------|----------------|----------------|
| $\\lim_{x \\to \\infty} \\cos\\left(\\frac{\\pi x}{2x+1}\\right)$ | $\\frac{\\pi x}{2x+1} \\to \\frac{\\pi}{2}$ | $\\cos\\frac{\\pi}{2} = 0$ |
| $\\lim_{x \\to \\infty} \\ln\\left(\\frac{2x+1}{x}\\right)$ | $\\frac{2x+1}{x} \\to 2$ | $\\ln 2$ |
| $\\lim_{x \\to \\infty} e^{-1/x}$ | $-\\frac{1}{x} \\to 0$ | $e^0 = 1$ |
| $\\lim_{x \\to \\infty} \\arctan(x^2)$ | $x^2 \\to \\infty$ | $\\frac{\\pi}{2}$, since $\\arctan u \\to \\frac{\\pi}{2}$ as $u \\to \\infty$ |`
    },
    {
      id: 'lai5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Special Limits Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\cos\\left(\\frac{\\pi x}{3x + 1}\\right)$.',
            options: ['$1$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', 'Does not exist'],
            correctAnswer: 2,
            explanation: 'The inside $\\frac{\\pi x}{3x + 1} \\to \\frac{\\pi}{3}$ (ratio of leading coefficients), and cosine is continuous, so the limit is $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$. The value $\\frac{\\sqrt{3}}{2}$ is $\\sin\\frac{\\pi}{3}$, $1$ comes from treating the inside as $0$, and the limit exists because the inside settles at $\\frac{\\pi}{3}$ instead of oscillating.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(4x)}{3x}$.',
            options: ['$\\frac{4}{3}$', '$\\frac{3}{4}$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{\\sin(4x)}{3x} = \\frac{4}{3} \\cdot \\frac{\\sin(4x)}{4x} \\to \\frac{4}{3} \\cdot 1 = \\frac{4}{3}$. The fraction $\\frac{3}{4}$ is upside down, $1$ ignores the different coefficients, and $0$ treats $\\sin(4x) \\to 0$ as settling the limit even though the denominator also goes to $0$.'
          }
        ]
      }
    },
    {
      id: 'lai5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Special Limits Drill** 🧮

**1)** $\\lim_{x \\to \\infty} \\frac{6x - \\sin x}{2x + \\cos x} = $

**2)** $\\lim_{x \\to 0} \\frac{\\sin(10x)}{2x} = $

**3)** $\\lim_{x \\to \\infty} \\frac{x + x\\cos(1/x)}{2x} = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5', '1'],
        hint1: 'Divide by $x$: $\\frac{6 - \\frac{\\sin x}{x}}{2 + \\frac{\\cos x}{x}}$, and both trig fractions go to $0$ by the Squeeze Theorem.',
        hint2: 'Rewrite as $5 \\cdot \\frac{\\sin(10x)}{10x}$.',
        hint3: '$\\frac{x + x\\cos(1/x)}{2x} = \\frac{1+\\cos(1/x)}{2} \\to \\frac{1+1}{2} = 1$.',
        explanation: '1) $\\frac{6}{2} = 3$ (trig terms are negligible). 2) $5 \\cdot 1 = 5$ (scaled $\\frac{\\sin u}{u}$ limit). 3) $1$ (since $\\cos(1/x) \\to \\cos 0 = 1$).'
      }
    },
    {
      id: 'lai5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Technique** 🔽\n\nFor each limit, select the best approach.`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to \\infty} \\frac{\\sin(5x)}{x}$', options: ['Squeeze Theorem', 'Inside limit, then continuity', 'Growth hierarchy', 'Direct computation'] },
          { label: '$\\lim_{x \\to \\infty} \\sin\\left(\\frac{\\pi x}{2x + 1}\\right)$', options: ['Squeeze Theorem', 'Inside limit, then continuity', 'Growth hierarchy', 'Direct computation'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{x^3}{2^x}$', options: ['Squeeze Theorem', 'Inside limit, then continuity', 'Growth hierarchy', 'Direct computation'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{\\cos x}{x^2}$', options: ['Squeeze Theorem', 'Inside limit, then continuity', 'Growth hierarchy', 'Direct computation'] }
        ],
        correctAnswers: ['Squeeze Theorem', 'Inside limit, then continuity', 'Growth hierarchy', 'Squeeze Theorem'],
        hint1: '$\\sin(5x)$ oscillates, so bound it between $-1$ and $1$.',
        hint2: 'The inside $\\frac{\\pi x}{2x+1}$ has a limit; sine is continuous there.',
        hint3: 'Exponential ($2^x$) beats polynomial ($x^3$).',
        explanation: '1) Squeeze: $-1/x \\le \\sin(5x)/x \\le 1/x$. 2) The inside tends to $\\frac{\\pi}{2}$, so the limit is $\\sin\\frac{\\pi}{2} = 1$. 3) Growth: $2^x$ dominates. 4) Squeeze: $-\\frac{1}{x^2} \\le \\frac{\\cos x}{x^2} \\le \\frac{1}{x^2}$.'
      }
    },
    {
      id: 'lai5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Special Limits** ✅`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{2x^2 + \\sin x}{x^2 + 1}$.',
            options: ['$1$', '$\\frac{1}{2}$', '$2$', 'Does not exist'],
            correctAnswer: 2,
            explanation: 'Divide by $x^2$: $\\frac{2 + \\frac{\\sin x}{x^2}}{1 + \\frac{1}{x^2}} \\to \\frac{2 + 0}{1 + 0} = 2$, since $\\frac{\\sin x}{x^2} \\to 0$ by the Squeeze Theorem. The value $\\frac{1}{2}$ flips the leading coefficients, $1$ ignores them, and the oscillation of $\\sin x$ does not matter because it is divided by $x^2$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\arctan\\left(\\frac{x^2}{x + 1}\\right)$.',
            options: ['$0$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$\\infty$'],
            correctAnswer: 1,
            explanation: 'The inside $\\frac{x^2}{x+1} \\to \\infty$ (higher degree on top), and $\\arctan u \\to \\frac{\\pi}{2}$ as $u \\to \\infty$. The value $\\frac{\\pi}{4} = \\arctan 1$ treats the inside as tending to $1$, $0$ treats it as tending to $0$, and $\\infty$ forgets that arctangent is bounded.'
          }
        ]
      }
    }
  ]
}
