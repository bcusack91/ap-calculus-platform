export const precalcInverseTrigPart4Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔗 Compositions of Trig & Inverse Trig

**Part 4 of 7**

An inverse function undoes its function, but only on the restricted domain. That is the whole story of compositions like $\\arcsin(\\sin\\theta)$ and $\\sin(\\arcsin x)$.

### Two Directions

**Direction 1: Trig(InverseTrig)** — e.g. $\\sin(\\arcsin x)$, $\\cos(\\arcsin x)$

$\\arcsin x$ is *the angle in the principal range whose sine is $x$*, so $\\sin(\\arcsin x) = x$ for every $x$ in the domain $[-1, 1]$. The same holds for $\\cos(\\arccos x) = x$ on $[-1, 1]$ and $\\tan(\\arctan x) = x$ for all real $x$. **No exceptions**: the inverse only accepts inputs it can undo.

**Direction 2: InverseTrig(Trig)** — e.g. $\\arcsin(\\sin\\frac{5\\pi}{6})$

$\\arcsin(\\sin\\theta) = \\theta$ **only** when $\\theta$ is already in the principal range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Otherwise the answer is a *different* angle, the one in the principal range with the same sine. It is usually **not** a coterminal angle.

### A Different Function Applied to an Inverse

For $\\cos(\\arcsin x)$, let $\\theta = \\arcsin x$, so $\\sin\\theta = x$ with $\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. The Pythagorean identity gives $\\cos^2\\theta = 1 - x^2$, and the **range decides the sign**: every angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ has $\\cos\\theta \\ge 0$, so

$$\\boxed{\\cos(\\arcsin x) = \\sqrt{1 - x^2}} \\qquad \\text{and likewise} \\qquad \\boxed{\\sin(\\arccos x) = \\sqrt{1 - x^2}}$$

(since every angle in $[0, \\pi]$ has $\\sin\\theta \\ge 0$).
      `
    },
    {
      id: 'p4-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: $\\sin\\!\\left(\\arccos \\frac{3}{5}\\right)$

Let $\\theta = \\arccos\\frac{3}{5}$, so $\\cos\\theta = \\frac{3}{5}$ and $\\theta \\in [0, \\pi]$. Then $\\sin\\theta = +\\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$: positive, because sine is never negative on $[0, \\pi]$.

### Example 2: $\\tan\\!\\left(\\arccos\\!\\left(-\\frac{3}{5}\\right)\\right)$ — watch the sign

Let $\\theta = \\arccos\\!\\left(-\\frac{3}{5}\\right)$. A negative cosine with $\\theta \\in [0, \\pi]$ puts $\\theta$ in **Quadrant II**, so $\\sin\\theta = \\frac{4}{5}$ but

$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$$

> ⚠️ Decide the quadrant from the **principal range** first. Treating $\\theta$ as an acute angle would give $+\\frac{4}{3}$, which is wrong.

### Example 3: $\\cos(\\arctan 2)$

Let $\\theta = \\arctan 2$, so $\\tan\\theta = 2$ with $\\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, where cosine is positive. From $1 + \\tan^2\\theta = \\sec^2\\theta$: $\\sec^2\\theta = 5$, so $\\cos\\theta = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$. (Either form earns full credit on the AP exam.)
      `
    },
    {
      id: 'p4-type2',
      type: 'text' as const,
      content: `
## 🔄 Direction 2: InverseTrig(Trig)

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

> 💡 **Shortcut for sine:** if $\\theta$ is in Quadrant II, $\\arcsin(\\sin\\theta) = \\pi - \\theta$ (the reflection into the principal range). For cosine, if $\\theta$ is in Quadrant III or IV, $\\arccos(\\cos\\theta) = 2\\pi - \\theta$. Check: $\\arccos(\\cos\\frac{5\\pi}{3}) = 2\\pi - \\frac{5\\pi}{3} = \\frac{\\pi}{3}$.
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
              '$-\\frac{3}{5}$',
              '$\\frac{3}{4}$'
            ],
            correctAnswer: 1,
            explanation: 'If $\\cos\\theta = \\frac{4}{5}$ with $\\theta \\in [0, \\pi]$, then $\\sin\\theta = +\\sqrt{1 - \\frac{16}{25}} = \\frac{3}{5}$; sine is never negative on $[0, \\pi]$. $\\frac{3}{4}$ is $\\tan\\theta$.'
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
            explanation: '$\\cos \\frac{5\\pi}{3} = \\frac{1}{2}$. Then $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$ (in $[0, \\pi]$). $\\frac{5\\pi}{3}$ is outside the range, $-\\frac{\\pi}{3}$ is never an arccosine output, and $\\frac{2\\pi}{3}$ has cosine $-\\frac{1}{2}$.'
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
            explanation: '$\\cos(\\arccos x) = x$ holds whenever $\\arccos x$ is defined, i.e., $x \\in [-1, 1]$. Outside that interval $\\arccos x$ does not exist, and $[0, \\pi]$ is the range of $\\arccos$, not its domain.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate Compositions** 🧮

**1)** $\\cos\\!\\left(\\arcsin\\!\\left(-\\frac{3}{5}\\right)\\right)$ = ? Write as a fraction or a decimal. (e.g., $\\sin(\\arccos \\frac{4}{5}) = \\frac{3}{5}$, positive because $\\arccos$ outputs lie in $[0, \\pi]$)

**2)** $\\arcsin(\\sin \\frac{7\\pi}{6}) = \\,?\\cdot\\pi$. Enter the coefficient of $\\pi$ (e.g., $\\arcsin(\\sin \\frac{5\\pi}{6}) = \\frac{\\pi}{6}$, coefficient \`1/6\`, since $\\sin \\frac{5\\pi}{6} = \\frac{1}{2}$)

**3)** $\\arccos\\!\\left(\\cos\\!\\left(-\\frac{\\pi}{4}\\right)\\right) = \\,?\\cdot\\pi$. Enter the coefficient of $\\pi$ (e.g., $\\arctan(\\tan\\frac{3\\pi}{4}) = -\\frac{\\pi}{4}$, coefficient \`-1/4\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4/5', '-1/6', '1/4'],
        hint1: '$\\theta = \\arcsin(-\\frac{3}{5})$ is in $[-\\frac{\\pi}{2}, 0)$, where cosine is **positive**: $\\cos\\theta = +\\sqrt{1 - \\frac{9}{25}}$.',
        hint2: '$\\sin \\frac{7\\pi}{6} = -\\frac{1}{2}$. $\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$.',
        hint3: '$\\cos(-\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$, and the angle in $[0, \\pi]$ with that cosine is $\\frac{\\pi}{4}$.',
        explanation: '1) $\\cos\\theta = \\frac{4}{5} = 0.8$ (the range of $\\arcsin$ keeps cosine positive). 2) $\\sin \\frac{7\\pi}{6} = -\\frac{1}{2}$, $\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$. 3) $\\arccos(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$, not $-\\frac{\\pi}{4}$, because $\\arccos$ never outputs a negative angle.'
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
            label: '$\\arccos(\\cos\\theta) = \\theta$ for every $\\theta$ in $[0, \\pi]$',
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
        hint3: '$[0, \\pi]$ is exactly the principal range of $\\arccos$, so cancelling is allowed there. $-\\frac{\\pi}{4}$ is not in it.',
        explanation: '$\\sin(\\arcsin x) = x$ ✓. $\\arcsin(\\sin x) \\neq x$ in general. $\\arccos(\\cos\\theta) = \\theta$ exactly when $\\theta \\in [0, \\pi]$ ✓. $\\arccos(\\cos(-\\frac{\\pi}{4})) = \\frac{\\pi}{4}$ (not $-\\frac{\\pi}{4}$).'
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
            question: 'For $-1 \\le x \\le 1$, $\\sin(\\arccos x)$ equals:',
            options: [
              '$1 - x$',
              '$\\sqrt{1 - x^2}$',
              '$\\pm\\sqrt{1 - x^2}$',
              '$x^2 - 1$'
            ],
            correctAnswer: 1,
            explanation: 'With $\\theta = \\arccos x$, $\\sin^2\\theta = 1 - x^2$, and $\\theta \\in [0, \\pi]$ forces $\\sin\\theta \\ge 0$, so the answer is the positive root alone. $\\pm\\sqrt{1 - x^2}$ ignores the range, and the other options are not even equal in size.'
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
