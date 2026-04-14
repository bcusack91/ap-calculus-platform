export const calcabLimitsInfinityPart5Data = {
  topicSlug: 'limits-at-infinity-calcab',
  sections: [
    {
      id: 'lai5-intro',
      type: 'text' as const,
      content: `# ∫ Limits at Infinity — Special Limits & Techniques

**Part 5 of 7 — Squeeze Theorem, Substitution, and Key Limits**

---

### Topics in This Part

| Section |
|---------|
| 📖 Squeeze Theorem at Infinity |
| The Substitution Technique |
| 📌 Famous Special Limits |
| Limits of Sequences |

> 🔑 **Key Concept:** Certain special limits appear so frequently that they should be memorized. Combined with the Squeeze Theorem, they handle the trickiest infinity problems on the AP exam.`
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
## 📌 Famous Special Limits

Memorize these — they appear repeatedly on AP exams:

$$\\boxed{\\lim_{x \\to \\infty}\\left(1 + \\frac{1}{x}\\right)^x = e}$$

$$\\boxed{\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{1-\\cos x}{x} = 0}$$

$$\\boxed{\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1 \\qquad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1}$$

---

### Disguised Forms

These often appear in different clothing:

$$\\lim_{x \\to \\infty} x \\sin\\left(\\frac{1}{x}\\right) = \\lim_{u \\to 0} \\frac{\\sin u}{u} = 1 \\quad (\\text{let } u = 1/x)$$

$$\\lim_{x \\to \\infty}\\left(1 + \\frac{3}{x}\\right)^x = \\lim_{x \\to \\infty}\\left[\\left(1 + \\frac{3}{x}\\right)^{x/3}\\right]^3 = e^3$$

**General form:** $\\lim_{x \\to \\infty}\\left(1 + \\frac{k}{x}\\right)^x = e^k$

---

### The Substitution Technique

To turn a limit at infinity into a limit at 0 (or vice versa), let $u = 1/x$:

| As $x \\to$ | $u = 1/x \\to$ |
|------------|----------------|
| $\\infty$ | $0^+$ |
| $-\\infty$ | $0^-$ |

**Example:** $\\lim_{x \\to \\infty} x(e^{1/x} - 1)$

Let $u = 1/x$: $\\lim_{u \\to 0^+} \\frac{e^u - 1}{u} = 1$`
    },
    {
      id: 'lai5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Special Limits Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\left(1 + \\frac{5}{x}\\right)^x$.',
            options: ['$1$', '$5$', '$e^5$', '$\\infty$'],
            correctAnswer: 2,
            explanation: 'Using the general form $\\lim\\left(1 + k/x\\right)^x = e^k$ with $k = 5$, we get $e^5$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} x\\left(1 - \\cos\\frac{1}{x}\\right)$.',
            options: ['$0$', '$1$', '$1/2$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Let $u = 1/x$: $\\frac{1-\\cos u}{u} \\to 0$ as $u \\to 0$ (a known special limit).'
          }
        ]
      }
    },
    {
      id: 'lai5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Special Limits Drill** 🧮

**1)** $\\lim_{x \\to \\infty} x \\sin\\left(\\frac{3}{x}\\right) = $

**2)** $\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^{3x} = e^{?}$. Enter the exponent.

**3)** $\\lim_{x \\to \\infty} \\frac{x + x\\cos(1/x)}{2x} = $
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '6', '1'],
        hint1: 'Let $u = 3/x$: then $3 \\cdot \\frac{\\sin u}{u} \\to 3 \\cdot 1 = 3$.',
        hint2: 'Rewrite as $\\left[\\left(1+2/x\\right)^x\\right]^3 = (e^2)^3 = e^6$.',
        hint3: '$\\frac{x + x\\cos(1/x)}{2x} = \\frac{1+\\cos(1/x)}{2} \\to \\frac{1+1}{2} = 1$.',
        explanation: '1) $3$ (substitution + $\\sin u/u$ limit). 2) $6$ (compound exponent). 3) $1$ (since $\\cos(1/x) \\to 1$).'
      }
    },
    {
      id: 'lai5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Technique** 🔽\n\nFor each limit, select the best approach.`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to \\infty} \\frac{\\sin(5x)}{x}$', options: ['Squeeze Theorem', 'Substitution $u=1/x$', 'Growth hierarchy', 'Direct computation'] },
          { label: '$\\lim_{x \\to \\infty} x \\cdot \\tan(1/x)$', options: ['Squeeze Theorem', 'Substitution $u=1/x$', 'Growth hierarchy', 'Direct computation'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{x^3}{2^x}$', options: ['Squeeze Theorem', 'Substitution $u=1/x$', 'Growth hierarchy', 'Direct computation'] },
          { label: '$\\lim_{x \\to \\infty} \\frac{3x + (-1)^x}{x}$', options: ['Squeeze Theorem', 'Substitution $u=1/x$', 'Growth hierarchy', 'Direct computation'] }
        ],
        correctAnswers: ['Squeeze Theorem', 'Substitution $u=1/x$', 'Growth hierarchy', 'Squeeze Theorem'],
        hint1: '$\\sin(5x)$ oscillates, so bound it between $-1$ and $1$.',
        hint2: 'Let $u = 1/x$ to get $\\tan u / u \\to 1$.',
        hint3: 'Exponential ($2^x$) beats polynomial ($x^3$).',
        explanation: '1) Squeeze: $-1/x \\le \\sin(5x)/x \\le 1/x$. 2) Sub $u=1/x$: $\\tan u/u \\to 1$. 3) Growth: $2^x$ dominates. 4) Squeeze: $(-1)^x$ oscillates in $[-1,1]$.'
      }
    },
    {
      id: 'lai5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `**Exit Quiz — Special Limits** ✅`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{n \\to \\infty} \\left(1 - \\frac{4}{n}\\right)^n$.',
            options: ['$0$', '$e^4$', '$e^{-4}$', '$1$'],
            correctAnswer: 2,
            explanation: 'Using $\\lim(1+k/n)^n = e^k$ with $k = -4$: the answer is $e^{-4}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{x^2 \\sin(1/x)}{x+1}$.',
            options: ['$0$', '$1$', '$\\infty$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'Rewrite: $\\frac{x^2 \\sin(1/x)}{x+1} = \\frac{x \\cdot x\\sin(1/x)}{x+1}$. Since $x\\sin(1/x) \\to 1$, this becomes $\\frac{x \\cdot 1}{x+1} \\to 1$.'
          }
        ]
      }
    }
  ]
}
