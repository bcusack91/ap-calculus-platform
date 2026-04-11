export const precalcInverseTrigPart7Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Inverse Trig — Full Synthesis

**Part 7 of 7**

This part brings together everything from Parts 1–6: domains & ranges, graphs, exact values, compositions, triangle problems, and applications.

### Master Summary

| Property | $\\arcsin x$ | $\\arccos x$ | $\\arctan x$ |
|:---------|:------------|:------------|:------------|
| Domain | $[-1, 1]$ | $[-1, 1]$ | $(-\\infty=, \\infty)$ |
| Range | $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ | $[0, \\pi]$ | $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ |
| At $x=0$ | $0$ | $\\frac{\\pi}{2}$ | $0$ |
| Monotone | Increasing | Decreasing | Increasing |
| Odd/Even | Odd | Neither | Odd |
| Asymptotes | None | None | HA: $y = \\pm\\frac{\\pi}{2}$ |

### Key Identities

$$\\boxed{\\arcsin x + \\arccos x = \\frac{\\pi}{2}}$$

$$\\arcsin(-x) = -\\arcsin x, \\quad \\arctan(-x) = -\\arctan x$$

$$\\arccos(-x) = \\pi - \\arccos x$$
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
$\\sin(\\arctan \\frac{3}{4})$: Triangle with opp = 3, adj = 4, hyp = 5. Answer: $\\frac{3}{5}$.

### Problem 3: InverseTrig(Trig)
$\\arccos(\\cos \\frac{7\\pi}{4})$: $\\cos\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2}$. $\\arccos(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$.

### Problem 4: Equation
Solve $\\arcsin(2x - 1) = -\\frac{\\pi}{6}$:
$$2x - 1 = \\sin(-\\frac{\\pi}{6}) = -\\frac{1}{2}$$
$$2x = \\frac{1}{2} \\implies x = \\frac{1}{4}$$

### Problem 5: Application
Lighthouse 150 ft tall, boat 400 ft away. Angle of depression:
$$\\arctan\\!\\left(\\frac{150}{400}\\right) = \\arctan(0.375) \\approx 20.6°$$
      `
    },
    {
      id: 'p7-common-mistakes',
      type: 'text' as const,
      content: `
## ⚠️ Common Mistakes to Avoid

| Mistake | Why It's Wrong | Correct |
|:--------|:---------------|:--------|
| $\\arcsin(\\sin 200°) = 200°$ | $200°$ not in $[-90°, 90°]$ | Find equivalent angle in range |
| $\\sin^{-1}(0.5) = \\frac{1}{\\sin(0.5)}$ | $\\sin^{-1}$ means inverse, not reciprocal | $\\sin^{-1}(0.5) = 30°$ |
| $\\arccos(-0.5) = -60°$ | $\\arccos$ range is $[0°, 180°]$, never negative | $\\arccos(-0.5) = 120°$ |
| Forgetting to rationalize | $\\frac{1}{\\sqrt{5}}$ should be $\\frac{\\sqrt{5}}{5}$ | Rationalize the denominator |
| Using wrong triangle sides | Confusing which sides are opp/adj/hyp | Always label relative to the angle |
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
              '$\\frac{13}{12}$'
            ],
            correctAnswer: 1,
            explanation: 'Triangle: opp = 5, hyp = 13, adj = $\\sqrt{169-25} = 12$. $\\cos\\theta = \\frac{12}{13}$.'
          },
          {
            question: 'Which expression equals $\\pi - \\arccos(\\frac{3}{4})$?',
            options: [
              '$\\arccos(\\frac{3}{4})$',
              '$\\arccos(-\\frac{3}{4})$',
              '$\\arcsin(\\frac{3}{4})$',
              '$-\\arccos(\\frac{3}{4})$'
            ],
            correctAnswer: 1,
            explanation: 'By the identity $\\arccos(-x) = \\pi - \\arccos(x)$, so $\\pi - \\arccos(\\frac{3}{4}) = \\arccos(-\\frac{3}{4})$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Skill Check** 🧮

**1)** $\\tan(\\arcsin \\frac{8}{17})$ = ? Write as a fraction. (e.g., $\\tan(\\arcsin \\frac{3}{5}) = \\frac{3}{4}$ using a 3-4-5 triangle)

**2)** Solve $\\arccos(x) = \\frac{2\\pi}{3}$. What is $x$? Write as a decimal. (e.g., $\\arccos(x) = \\frac{\\pi}{3}$ gives $x = \\cos\\frac{\\pi}{3} = 0.5$)

**3)** $\\arcsin(\\frac{\\sqrt{3}}{2}) + \\arccos(\\frac{\\sqrt{3}}{2})$ in degrees = ? (e.g., $\\arcsin(\\frac{1}{2}) + \\arccos(\\frac{1}{2}) = 30° + 60° = 90°$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8/15', '-0.5', '90'],
        hint1: 'Triangle: opp = 8, hyp = 17, adj = $\\sqrt{289-64} = 15$. $\\tan\\theta = \\frac{8}{15}$.',
        hint2: '$x = \\cos(\\frac{2\\pi}{3}) = -\\frac{1}{2} = -0.5$.',
        hint3: '$\\arcsin x + \\arccos x = \\frac{\\pi}{2} = 90°$ for any valid $x$.',
        explanation: '1) 8-15-17 triangle: $\\frac{8}{15}$. 2) $\\cos(\\frac{2\\pi}{3}) = -0.5$. 3) Complementary identity: always $90°$.'
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
            label: 'The general formula for $\\tan(\\arccos x)$ is',
            options: ['$\\frac{\\sqrt{1-x^2}}{x}$', '$\\frac{x}{\\sqrt{1-x^2}}$', '$\\sqrt{1-x^2}$', '$\\frac{1}{x}$']
          },
          {
            label: '$\\sin(\\arcsin x) = x$ is valid when',
            options: ['$x \\in [-1, 1]$', 'All real $x$', '$x \\in [0, \\pi]$', '$x > 0$']
          }
        ],
        correctAnswers: ['$-\\frac{\\pi}{6}$', '$\\frac{2\\pi}{3}$', '$\\frac{\\sqrt{1-x^2}}{x}$', '$x \\in [-1, 1]$'],
        hint1: '$\\arcsin$ is odd: $\\arcsin(-\\frac{1}{2}) = -\\arcsin(\\frac{1}{2}) = -\\frac{\\pi}{6}$.',
        hint2: '$\\arccos(-\\frac{1}{2}) = \\pi - \\arccos(\\frac{1}{2}) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.',
        hint3: 'Triangle: adj = $x$, hyp = 1, opp = $\\sqrt{1-x^2}$. $\\tan = \\frac{\\text{opp}}{\\text{adj}}$.',
        explanation: '$\\arcsin(-\\frac{1}{2}) = -\\frac{\\pi}{6}$. $\\arccos(-\\frac{1}{2}) = \\frac{2\\pi}{3}$. $\\tan(\\arccos x) = \\frac{\\sqrt{1-x^2}}{x}$. Domain of $\\arcsin$ is $[-1,1]$.'
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
            question: 'A roof makes a 35° angle with the horizontal. If the horizontal span is 24 feet, the rise (height) is:',
            options: [
              '$24\\cos 35° \\approx 19.7$ ft',
              '$24\\sin 35° \\approx 13.8$ ft',
              '$24\\tan 35° \\approx 16.8$ ft',
              '$\\frac{24}{\\tan 35°} \\approx 34.3$ ft'
            ],
            correctAnswer: 2,
            explanation: '$\\tan 35° = \\frac{\\text{rise}}{24}$, so rise $= 24\\tan 35° \\approx 16.8$ ft.'
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
