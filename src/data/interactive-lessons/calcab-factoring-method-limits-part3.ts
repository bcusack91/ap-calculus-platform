export const calcabFactoringMethodPart3Data = {
  topicSlug: 'factoring-method-limits',
  sections: [
    {
      id: 'fml3-intro',
      type: 'text' as const,
      content: `# 📝 Worked Examples — The Factoring Workflow

**Part 3 of 4 — Practice the full pipeline**

---

### Topics in This Part

| Section |
|---------|
| The 4-Step Workflow |
| Both Numerator and Denominator Factor |
| When the Limit Equals 0 vs. a Nonzero Number |

> 🔑 **Why this matters:** AP problems rarely give you a "just factor the numerator" setup. Both top and bottom may need factoring.`
    },
    {
      id: 'fml3-workflow',
      type: 'text' as const,
      content: `
## 🔄 The 4-Step Workflow

For $\\lim_{x \\to a} \\dfrac{p(x)}{q(x)}$:

1. **Try direct substitution.** If you get a clean number → done.
2. **If you get $0/0$**, fully factor both $p(x)$ and $q(x)$.
3. **Cancel** the common $(x - a)$ factor (or factors).
4. **Substitute $x = a$** into the simplified expression.

> 💡 If after step 3 you still get $0/0$, repeat: cancel another $(x - a)$ factor.
      `
    },
    {
      id: 'fml3-twovar',
      type: 'text' as const,
      content: `
## 🔁 Both Sides Factor

**Worked example:** $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x^2 - 5x + 6}$.

- Direct sub: $\\dfrac{0}{0}$. ✅ Indeterminate.
- Numerator: $x^2 - 9 = (x - 3)(x + 3)$.
- Denominator: $x^2 - 5x + 6 = (x - 3)(x - 2)$.
- Cancel: $\\dfrac{(x-3)(x+3)}{(x-3)(x-2)} \\to \\dfrac{x + 3}{x - 2}$.
- Substitute: $\\dfrac{6}{1} = 6$.

$$\\boxed{\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 5x + 6} = 6}$$
      `
    },
    {
      id: 'fml3-zerocheck',
      type: 'text' as const,
      content: `
## 🎯 Limit = 0 vs. Limit = Nonzero

After cancellation and substitution:

| Result | Meaning |
|--------|---------|
| Clean number $L$ (including 0) | That's the limit ✅ |
| Still $0/0$ | Factor again — there\'s another $(x - a)$ in both |
| Nonzero / 0 | Cancellation didn\'t fully resolve it; you have a vertical asymptote — limit DNE |

**Repeated-factor example:** $\\lim_{x \\to 2} \\dfrac{(x-2)^3}{(x-2)^2} = \\lim_{x \\to 2} (x - 2) = 0$.
      `
    },
    {
      id: 'fml3-mc',
      type: 'multiple-choice' as const,
      content: `**Apply the Workflow** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Compute $\\lim_{x \\to 1} \\dfrac{x^2 + 2x - 3}{x - 1}$.',
            options: ['$1$', '$2$', '$4$', '$5$'],
            correctAnswer: 2,
            explanation: '$x^2 + 2x - 3 = (x - 1)(x + 3)$; cancel $(x-1)$; $x + 3 \\to 4$.'
          },
          {
            question: 'Compute $\\lim_{x \\to -1} \\dfrac{x^2 + 5x + 4}{x^2 - 1}$.',
            options: ['$-3/2$', '$3/2$', '$3$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Numerator: $(x+1)(x+4)$; denominator: $(x-1)(x+1)$. Cancel $(x+1)$: $\\dfrac{x+4}{x-1} \\to \\dfrac{3}{-2} = -3/2$. Dropping the negative denominator gives $3/2$, using only the numerator $x + 4 \\to 3$ gives $3$, and stopping at $0/0$ gives DNE.'
          },
          {
            question: 'Compute $\\lim_{x \\to 0} \\dfrac{x^3}{x}$.',
            options: ['$0$', '$x^2$', 'Undefined', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$\\dfrac{x^3}{x} = x^2 \\to 0$. Writing $x^2$ stops after simplifying without substituting, and calling it undefined stops at the $0/0$ form instead of cancelling.'
          }
        ]
      }
    },
    {
      id: 'fml3-input',
      type: 'input-boxes' as const,
      content: `**Workflow Practice** 🧮

**1)** $\\lim_{x \\to 4} \\dfrac{x^2 - 16}{x^2 - 3x - 4} = ?$ (decimal or fraction)

**2)** $\\lim_{x \\to -3} \\dfrac{x^2 + 5x + 6}{x + 3} = ?$
      `,
      exercise: {
        questions: [
          { question: '(1)', answer: '8/5', acceptableAnswers: ['8/5', '1.6'] },
          { question: '(2)', answer: '-1', acceptableAnswers: ['-1'] }
        ],
        hint1: 'Numerator: $(x-4)(x+4)$. Denominator: $(x-4)(x+1)$.',
        hint2: 'Numerator: $(x+2)(x+3)$. Cancel $(x+3)$.',
        explanation: '(1) $\\dfrac{x+4}{x+1} \\to 8/5 = 1.6$. (2) $x + 2 \\to -1$.'
      }
    }
  ]
}
