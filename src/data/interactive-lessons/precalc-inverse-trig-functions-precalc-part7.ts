export const precalcInverseTrigPart7Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Inverse Trig — Full Synthesis

**Part 7 of 7**

This part brings together everything from Parts 1–6: domains & ranges, graphs, exact values, compositions, solving equations and periodic models.

### Master Summary

| Property | $\\arcsin x$ | $\\arccos x$ | $\\arctan x$ |
|:---------|:------------|:------------|:------------|
| Domain | $[-1, 1]$ | $[-1, 1]$ | $(-\\infty, \\infty)$ |
| Range | $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ | $[0, \\pi]$ | $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ |
| At $x=0$ | $0$ | $\\frac{\\pi}{2}$ | $0$ |
| Monotone | Increasing | Decreasing | Increasing |
| Odd/Even | Odd | Neither | Odd |
| Asymptotes | None | None | HA: $y = \\pm\\frac{\\pi}{2}$ |
| Second solution of $f(\\theta) = k$ in one turn | $\\pi - \\theta_1$ | $2\\pi - \\theta_1$ | $\\theta_1 + \\pi$ |

### Key Identities

$$\\boxed{\\arcsin x + \\arccos x = \\frac{\\pi}{2}}$$

$$\\arcsin(-x) = -\\arcsin x, \\quad \\arctan(-x) = -\\arctan x, \\quad \\arccos(-x) = \\pi - \\arccos x$$
      `
    },
    {
      id: 'p7-mixed-review',
      type: 'text' as const,
      content: `
## 📝 Mixed Review Problems

### Problem 1: Exact Value
$\\arccos\\!\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$ because $\\cos\\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ and $\\frac{3\\pi}{4} \\in [0, \\pi]$.

### Problem 2: Composition
$\\cos(\\arctan 3)$: with $\\theta = \\arctan 3 \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, $\\sec^2\\theta = 1 + 9 = 10$ and cosine is positive there, so $\\cos\\theta = \\frac{1}{\\sqrt{10}}$.

### Problem 3: InverseTrig(Trig)
$\\arccos(\\cos \\frac{7\\pi}{4})$: $\\cos\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2}$. $\\arccos(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$.

### Problem 4: Equation
Solve $\\arcsin(2x - 1) = -\\frac{\\pi}{6}$:
$$2x - 1 = \\sin(-\\frac{\\pi}{6}) = -\\frac{1}{2}$$
$$2x = \\frac{1}{2} \\implies x = \\frac{1}{4}$$

### Problem 5: Model
$h(t) = 5\\cos\\!\\left(\\frac{\\pi}{6}t\\right) + 8$, $0 \\le t < 12$. When is $h = 10.5$? Then $\\cos\\!\\left(\\frac{\\pi}{6}t\\right) = \\frac{1}{2}$, so the inner angle is $\\frac{\\pi}{3}$ or $\\frac{5\\pi}{3}$ and $t = 2$ or $t = 10$.
      `
    },
    {
      id: 'p7-common-mistakes',
      type: 'text' as const,
      content: `
## ⚠️ Common Mistakes to Avoid

| Mistake | Why It's Wrong | Correct |
|:--------|:---------------|:--------|
| $\\arcsin(\\sin \\frac{5\\pi}{4}) = \\frac{5\\pi}{4}$ | $\\frac{5\\pi}{4}$ not in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ | Find the angle in range with the same sine: $-\\frac{\\pi}{4}$ |
| $\\sin^{-1}(0.5) = \\frac{1}{\\sin(0.5)}$ | $\\sin^{-1}$ means inverse, not reciprocal | $\\sin^{-1}(0.5) = \\frac{\\pi}{6}$ |
| $\\arccos(-0.5) = -\\frac{\\pi}{3}$ | $\\arccos$ range is $[0, \\pi]$, never negative | $\\arccos(-0.5) = \\frac{2\\pi}{3}$ |
| Answering $30^\\circ$ | The exam measures angles in radians | Write $\\frac{\\pi}{6}$; use radian mode |
| Stopping at $\\theta = \\arcsin k$ | The inverse gives one solution; the equation has more | Add the symmetric partner and the period |
| Thinking you must rationalize | AP accepts $\\frac{1}{\\sqrt{5}}$ and $\\frac{\\sqrt{5}}{5}$ equally | Either form is correct |
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\arcsin\\!\\left(\\sin \\frac{5\\pi}{4}\\right)$ equals:',
            options: [
              '$\\frac{5\\pi}{4}$',
              '$-\\frac{\\pi}{4}$',
              '$\\frac{\\pi}{4}$',
              '$\\frac{3\\pi}{4}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$. $\\arcsin(-\\frac{\\sqrt{2}}{2}) = -\\frac{\\pi}{4}$ (in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$).'
          },
          {
            question: '$\\cos(\\arcsin \\frac{5}{13})$ equals:',
            options: [
              '$\\frac{5}{13}$',
              '$\\frac{12}{13}$',
              '$\\frac{8}{13}$',
              '$-\\frac{12}{13}$'
            ],
            correctAnswer: 1,
            explanation: 'With $\\sin\\theta = \\frac{5}{13}$ and $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\cos\\theta = +\\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$; cosine is positive on the whole range of $\\arcsin$. $\\frac{8}{13}$ subtracts without squaring.'
          },
          {
            question: 'Which statement about $f(x) = \\arctan x$ is true?',
            options: [
              '$f$ has range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$',
              '$f(x) < \\frac{\\pi}{2}$ for every real $x$',
              '$f$ is undefined for $x > 1$',
              '$f$ is decreasing on its domain'
            ],
            correctAnswer: 1,
            explanation: 'The outputs of arctangent approach $\\frac{\\pi}{2}$ but never reach it: the range is the open interval $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. Arctangent accepts every real number and is increasing.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Skill Check** 🧮

**1)** A buoy's height is $h(t) = 2\\sin\\!\\left(\\frac{\\pi}{4}t\\right) + 5$ feet, $0 \\le t < 8$. The **second** time the height is $6$ feet is $t = \\,?$ (exact fraction, e.g. \`7/2\`, or a decimal). (e.g., the first time: $\\sin(\\cdot) = \\frac{1}{2}$, inner angle $\\frac{\\pi}{6}$, $t = \\frac{\\pi}{6}\\cdot\\frac{4}{\\pi} = \\frac{2}{3}$)

**2)** Solve $\\arccos(x) = \\frac{2\\pi}{3}$. What is $x$? Write as a decimal or fraction. (e.g., $\\arccos(x) = \\frac{\\pi}{3}$ gives $x = \\cos\\frac{\\pi}{3} = 0.5$)

**3)** $\\arccos\\!\\left(\\cos \\frac{5\\pi}{4}\\right) = \\,?\\cdot\\pi$. Enter the coefficient of $\\pi$. (e.g., $\\arccos(\\cos\\frac{7\\pi}{4}) = \\frac{\\pi}{4}$, coefficient \`1/4\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10/3', '-0.5', '3/4'],
        hint1: 'The second inner angle with sine $\\frac{1}{2}$ is $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$; multiply by $\\frac{4}{\\pi}$.',
        hint2: '$x = \\cos(\\frac{2\\pi}{3}) = -\\frac{1}{2} = -0.5$.',
        hint3: '$\\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$; the angle in $[0, \\pi]$ with that cosine is $\\frac{3\\pi}{4}$.',
        explanation: '1) $\\frac{5\\pi}{6}\\cdot\\frac{4}{\\pi} = \\frac{10}{3} \\approx 3.33$ s. 2) $\\cos(\\frac{2\\pi}{3}) = -0.5$. 3) $\\arccos(-\\frac{\\sqrt{2}}{2}) = \\frac{3\\pi}{4}$, coefficient $\\frac{3}{4}$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\arcsin(-\\frac{1}{2})$ equals',
            options: ['$-\\frac{\\pi}{6}$', '$\\frac{5\\pi}{6}$', '$\\frac{\\pi}{6}$', '$\\frac{11\\pi}{6}$']
          },
          {
            label: '$\\arccos(-\\frac{1}{2})$ equals',
            options: ['$-\\frac{\\pi}{3}$', '$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$\\frac{4\\pi}{3}$']
          },
          {
            label: 'The number of solutions of $\\cos x = 0.3$ on $[0, 2\\pi)$ is',
            options: ['$2$', '$1$', '$4$', '$0$']
          },
          {
            label: '$\\sin(\\arcsin x) = x$ is valid when',
            options: ['$x \\in [-1, 1]$', 'All real $x$', '$x \\in [0, \\pi]$', '$x > 0$']
          }
        ],
        correctAnswers: ['$-\\frac{\\pi}{6}$', '$\\frac{2\\pi}{3}$', '$2$', '$x \\in [-1, 1]$'],
        hint1: '$\\arcsin$ is odd: $\\arcsin(-\\frac{1}{2}) = -\\arcsin(\\frac{1}{2}) = -\\frac{\\pi}{6}$.',
        hint2: '$\\arccos(-\\frac{1}{2}) = \\pi - \\arccos(\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.',
        hint3: 'Cosine takes each value strictly between $-1$ and $1$ twice per turn: once at $\\arccos 0.3$ and once at $2\\pi - \\arccos 0.3$.',
        explanation: '$\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$. $\\arccos(-\\frac{1}{2}) = \\frac{2\\pi}{3}$. $\\cos x = 0.3$ has 2 solutions per turn. Domain of $\\arcsin$ is $[-1,1]$.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The temperature in a room is $T(t) = 4\\sin\\!\\left(\\frac{\\pi}{12}t\\right) + 68$ degrees, $t$ hours after 6 a.m., for $0 \\le t < 24$. When is $T = 70$?',
            options: [
              '$t = 2$ only',
              '$t = 2$ and $t = 10$',
              '$t = 2$ and $t = 14$',
              '$t = 2$ and $t = 22$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin\\!\\left(\\frac{\\pi}{12}t\\right) = \\frac{1}{2}$ at inner angles $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$; multiplying by $\\frac{12}{\\pi}$ gives $t = 2$ and $t = 10$. $t = 14$ adds a half period to the first time (where the sine is $-\\frac{1}{2}$), and $t = 22$ uses the cosine pattern $2\\pi - \\theta_1$.'
          },
          {
            question: 'How many values of $x$ in $[0, 2\\pi]$ satisfy $\\sin x = \\frac{1}{2}$?',
            options: [
              '1 (only $\\arcsin(\\frac{1}{2})$)',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 1,
            explanation: '$x = \\frac{\\pi}{6}$ and $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$. Arcsin gives only the principal value, but the original equation has 2 solutions in $[0, 2\\pi]$.'
          }
        ]
      }
    }
  ]
};
