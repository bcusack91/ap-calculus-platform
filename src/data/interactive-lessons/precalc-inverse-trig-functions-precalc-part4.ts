export const precalcInverseTrigPart4Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔗 Compositions of Trig & Inverse Trig

**Part 4 of 7**

One of the most important skills is simplifying compositions like $\\sin(\\arccos x)$ or $\\cos(\\arctan x)$.

### Two Types of Compositions

**Type 1: Trig(InverseTrig)** — e.g., $\\sin(\\arccos \\frac{3}{5})$

Strategy: Draw a right triangle from the inverse trig value.

**Type 2: InverseTrig(Trig)** — e.g., $\\arcsin(\\sin \\frac{5\\pi}{6})$

Strategy: Check if the angle is in the principal range. If not, find the equivalent angle.

### Type 1 — The Right Triangle Method

$$\\boxed{\\text{Let } \\theta = \\arccos x \\text{, draw triangle, find desired ratio}}$$

If $\\theta = \\arccos\\!\\left(\\frac{3}{5}\\right)$, then $\\cos\\theta = \\frac{3}{5}$.

Draw a right triangle: adjacent = $3$, hypotenuse = $5$, so opposite = $\\sqrt{25 - 9} = 4$.

$$\\sin(\\arccos \\tfrac{3}{5}) = \\sin\\theta = \\frac{4}{5}$$
      `
    },
    {
      id: 'p4-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: $\\tan(\\arcsin \\frac{5}{13})$

Let $\\theta = \\arcsin \\frac{5}{13}$, so $\\sin\\theta = \\frac{5}{13}$.

Right triangle: opposite = $5$, hypotenuse = $13$, adjacent = $\\sqrt{169 - 25} = 12$

$$\\tan(\\arcsin \\tfrac{5}{13}) = \\frac{5}{12}$$

### Example 2: $\\cos(\\arctan 2)$

Let $\\theta = \\arctan 2$, so $\\tan\\theta = \\frac{2}{1}$.

Right triangle: opposite = $2$, adjacent = $1$, hypotenuse = $\\sqrt{4 + 1} = \\sqrt{5}$

$$\\cos(\\arctan 2) = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$$

### Example 3: General Formula $\\sin(\\arccos x)$

Let $\\theta = \\arccos x$. Then $\\cos\\theta = x = \\frac{x}{1}$.

Adjacent = $x$, hypotenuse = $1$, opposite = $\\sqrt{1 - x^2}$

$$\\boxed{\\sin(\\arccos x) = \\sqrt{1 - x^2}}$$
      `
    },
    {
      id: 'p4-type2',
      type: 'text' as const,
      content: `
## 🔄 Type 2: InverseTrig(Trig)

### The Cancellation Rules

These only work when the angle is in the **principal range**:

| Expression | Simplifies to | Condition |
|:-----------|:-------------|:----------|
| $\\arcsin(\\sin\\theta)$ | $\\theta$ | $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ |
| $\\arccos(\\cos\\theta)$ | $\\theta$ | $\\theta \\in [0, \\pi]$ |
| $\\arctan(\\tan\\theta)$ | $\\theta$ | $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ |

### Example 4: $\\arcsin(\\sin \\frac{7\\pi}{6})$

$\\frac{7\\pi}{6}$ is NOT in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, so we can't just cancel.

$\\sin \\frac{7\\pi}{6} = -\\frac{1}{2}$

$\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$

### Example 5: $\\arccos(\\cos(-\\frac{\\pi}{3}))$

$-\\frac{\\pi}{3}$ is NOT in $[0, \\pi]$, so we can't cancel.

$\\cos(-\\frac{\\pi}{3}) = \\frac{1}{2}$

$\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Composition Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\sin\\!\\left(\\arccos \\frac{4}{5}\\right)$ equals:',
            options: [
              '$\\frac{4}{5}$',
              '$\\frac{3}{5}$',
              '$\\frac{5}{4}$',
              '$\\frac{3}{4}$'
            ],
            correctAnswer: 1,
            explanation: 'Triangle: adj = 4, hyp = 5, opp = $\\sqrt{25-16} = 3$. So $\\sin\\theta = \\frac{3}{5}$.'
          },
          {
            question: '$\\arccos(\\cos \\frac{5\\pi}{3})$ equals:',
            options: [
              '$\\frac{5\\pi}{3}$',
              '$\\frac{\\pi}{3}$',
              '$-\\frac{\\pi}{3}$',
              '$\\frac{2\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos \\frac{5\\pi}{3} = \\frac{1}{2}$. Then $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$ (in $[0, \\pi]$).'
          },
          {
            question: '$\\cos(\\arccos x) = x$ is true for:',
            options: [
              'All real $x$',
              '$x \\in [-1, 1]$ only',
              '$x \\in [0, \\pi]$ only',
              '$x > 0$ only'
            ],
            correctAnswer: 1,
            explanation: '$\\cos(\\arccos x) = x$ holds whenever $\\arccos x$ is defined, i.e., $x \\in [-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate Compositions** 🧮

Write answers as simplified fractions or integers.

**1)** $\\tan(\\arccos \\frac{3}{5})$ = ? (e.g., $\\sin(\\arccos \\frac{4}{5}) = \\frac{3}{5}$ using a 3-4-5 triangle)

**2)** $\\arcsin(\\sin 210°)$ in degrees = ? (e.g., $\\arcsin(\\sin 150°) = 30°$ since $\\sin 150° = \\frac{1}{2}$ and $\\arcsin \\frac{1}{2} = 30°$)

**3)** $\\cos(\\arctan \\frac{3}{4})$ = ? Write as a decimal like 0.8 (e.g., $\\cos(\\arctan 1) = \\frac{\\sqrt{2}}{2} \\approx 0.707$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4/3', '-30', '0.8'],
        hint1: 'Triangle: adj = 3, hyp = 5, opp = 4. $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$.',
        hint2: '$\\sin 210° = -\\frac{1}{2}$. $\\arcsin(-\\frac{1}{2}) = -30°$.',
        hint3: 'Triangle: opp = 3, adj = 4, hyp = 5. $\\cos\\theta = \\frac{4}{5} = 0.8$.',
        explanation: '1) $\\frac{4}{3}$. 2) $\\sin 210° = -\\frac{1}{2}$, $\\arcsin(-\\frac{1}{2}) = -30°$. 3) 3-4-5 triangle: $\\frac{4}{5} = 0.8$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**True or False** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin(\\arcsin x) = x$ for all $x \\in [-1, 1]$',
            options: ['True', 'False']
          },
          {
            label: '$\\arcsin(\\sin x) = x$ for all real $x$',
            options: ['True', 'False']
          },
          {
            label: '$\\cos(\\arctan x)$ can be simplified using a right triangle',
            options: ['True', 'False']
          },
          {
            label: '$\\arccos(\\cos(-\\frac{\\pi}{4})) = -\\frac{\\pi}{4}$',
            options: ['True', 'False']
          }
        ],
        correctAnswers: ['True', 'False', 'True', 'False'],
        hint1: '$\\sin(\\arcsin x) = x$ always works when the input is in the domain.',
        hint2: '$\\arcsin(\\sin x) = x$ only when $x$ is already in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.',
        hint3: 'Yes, let $\\theta = \\arctan x$, draw a triangle with opp = $x$, adj = $1$.',
        explanation: '$\\sin(\\arcsin x) = x$ ✓. $\\arcsin(\\sin x) \\neq x$ in general. Triangle method works. $\\arccos(\\cos(-\\frac{\\pi}{4})) = \\frac{\\pi}{4}$ (not $-\\frac{\\pi}{4}$).'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The general formula for $\\sin(\\arccos x)$ is:',
            options: [
              '$1 - x$',
              '$\\sqrt{1 - x^2}$',
              '$\\frac{1}{x}$',
              '$x^2 - 1$'
            ],
            correctAnswer: 1,
            explanation: 'Draw triangle with adj = $x$, hyp = 1, opp = $\\sqrt{1 - x^2}$. Then $\\sin\\theta = \\frac{\\sqrt{1-x^2}}{1}$.'
          },
          {
            question: '$\\arctan(\\tan \\frac{3\\pi}{4})$ equals:',
            options: [
              '$\\frac{3\\pi}{4}$',
              '$-\\frac{\\pi}{4}$',
              '$\\frac{\\pi}{4}$',
              '$-\\frac{3\\pi}{4}$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{3\\pi}{4}$ is NOT in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. $\\tan\\frac{3\\pi}{4} = -1$. $\\arctan(-1) = -\\frac{\\pi}{4}$.'
          }
        ]
      }
    }
  ]
};
