export const calcabLimitsAtInfinityPart3Data = {
  topicSlug: 'limits-at-infinity',
  sections: [
    {
      id: 'lai3-intro',
      type: 'text' as const,
      content: `# √ Radicals at Infinity

**Part 3 of 4 — Be careful with $|x|$ when $x \\to -\\infty$**

---

### Topics in This Part

| Section |
|---------|
| The "Effective Degree" of a Radical |
| 🔑 The $\\sqrt{x^2} = \\lvert x \\rvert$ Trap |
| Worked Example for $x \\to -\\infty$ |

> 🔑 **Why this matters:** A square root contributes "half a degree." And the sign on $x$ matters when $x$ is negative.`
    },
    {
      id: 'lai3-effdeg',
      type: 'text' as const,
      content: `
## 📐 Effective Degree

For end behavior, $\\sqrt{x^2}$ behaves like $x$ in size — it has "effective degree 1." More generally, $\\sqrt{x^{2k}}$ has effective degree $k$.

**Example.** $\\lim_{x \\to \\infty} \\dfrac{\\sqrt{x^2 + 1}}{x + 1}$.

- Numerator effective degree 1; denominator degree 1 → equal.
- Leading behavior: numerator $\\sim x$, denominator $\\sim x$. Ratio $\\to 1$.

So this limit is $1$ as $x \\to \\infty$.
      `
    },
    {
      id: 'lai3-trap',
      type: 'text' as const,
      content: `
## ⚠️ The $\\sqrt{x^2} = |x|$ Trap

The identity is:
$$\\sqrt{x^2} = |x| = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}$$

So when $x \\to -\\infty$, $\\sqrt{x^2} = -x$ (positive), **not** $x$. This sign change matters.

**Worked example.** $\\lim_{x \\to -\\infty} \\dfrac{\\sqrt{x^2 + 1}}{x + 1}$.

- Divide top and bottom by $|x| = -x$ (since $x \\to -\\infty$):

$$\\dfrac{\\sqrt{1 + 1/x^2}}{(x + 1)/(-x)} = \\dfrac{\\sqrt{1 + 1/x^2}}{-1 - 1/x}$$

- As $x \\to -\\infty$: numerator $\\to \\sqrt{1} = 1$, denominator $\\to -1$.

Answer: $\\dfrac{1}{-1} = -1$.

> 💡 Compare: as $x \\to +\\infty$ the same expression gives $+1$. The two ends differ in sign.
      `
    },
    {
      id: 'lai3-shortcut',
      type: 'text' as const,
      content: `
## 🚀 Shortcut: Look at Leading Behavior

For $\\sqrt{ax^2 + \\ldots}$ as $x \\to \\pm\\infty$:

- $x \\to +\\infty$: $\\sqrt{ax^2 + \\ldots} \\sim \\sqrt{a}\\,x$
- $x \\to -\\infty$: $\\sqrt{ax^2 + \\ldots} \\sim -\\sqrt{a}\\,x$ (because we need a positive output and $x$ is negative)

This shortcut handles most AP problems quickly.
      `
    },
    {
      id: 'lai3-mc',
      type: 'multiple-choice' as const,
      content: `**Sign-Aware Limits** 🎯`,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to \\infty} \\dfrac{\\sqrt{4x^2 + 1}}{x} = ?$',
            options: ['$0$', '$1$', '$2$', '$4$'],
            correctAnswer: 2,
            explanation: 'For large positive $x$, $\\sqrt{4x^2 + 1} \\sim 2x$. Ratio $\\to 2$.'
          },
          {
            question: '$\\lim_{x \\to -\\infty} \\dfrac{\\sqrt{4x^2 + 1}}{x} = ?$',
            options: ['$2$', '$-2$', '$0$', '$4$'],
            correctAnswer: 1,
            explanation: 'For large NEGATIVE $x$, $\\sqrt{4x^2 + 1} \\sim -2x$ (positive output, negative $x$). Ratio $-2x/x = -2$.'
          },
          {
            question: 'What is $\\sqrt{x^2}$ when $x = -7$?',
            options: ['$-7$', '$7$', '$\\pm 7$', 'undefined'],
            correctAnswer: 1,
            explanation: '$\\sqrt{x^2} = |x|$ which is always non-negative; $\\sqrt{49} = 7$.'
          }
        ]
      }
    },
    {
      id: 'lai3-input',
      type: 'input-boxes' as const,
      content: `**Practice** 🧮

**1)** $\\lim_{x \\to \\infty} \\dfrac{\\sqrt{9x^2 + x}}{x + 5} = ?$

**2)** $\\lim_{x \\to -\\infty} \\dfrac{\\sqrt{9x^2 + x}}{x + 5} = ?$
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '-3'],
        hint1: '$x \\to +\\infty$: top $\\sim 3x$, bottom $\\sim x$, ratio $3$.',
        hint2: '$x \\to -\\infty$: top $\\sim -3x$, bottom $\\sim x$, ratio $-3$.',
        explanation: 'The square-root sign-flip happens only on the negative-infinity side.'
      }
    }
  ]
}
