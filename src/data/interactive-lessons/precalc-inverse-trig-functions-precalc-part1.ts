export const precalcInverseTrigPart1Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🔄 Inverse Trigonometric Functions — Principal Values & Restricted Domains

**Part 1 of 7**

Trig functions are **not** one-to-one, so to define inverses we must **restrict** the domain to an interval where the function passes the horizontal line test.

### The Three Main Inverse Functions

| Function | Notation | Restricted Domain | Range (Principal Values) |
|:---------|:---------|:-----------------|:------------------------|
| $\\arcsin x$ | $\\sin^{-1}x$ | $[-1, 1]$ | $\\left[-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right]$ |
| $\\arccos x$ | $\\cos^{-1}x$ | $[-1, 1]$ | $[0,\\, \\pi]$ |
| $\\arctan x$ | $\\tan^{-1}x$ | $(-\\infty, \\infty)$ | $\\left(-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right)$ |

### Key Idea

$$\\boxed{\\text{Inverse trig functions output ANGLES, not ratios}}$$

$\\arcsin\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$ means "the angle (in the principal range) whose sine is $\\frac{1}{2}$".

> **Notation warning**: $\\sin^{-1}x$ means $\\arcsin x$, NOT $\\frac{1}{\\sin x}$ (that's $\\csc x$).
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Evaluate $\\arcsin\\!\\left(\\frac{\\sqrt{3}}{2}\\right)$

Ask: "What angle $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ has $\\sin\\theta = \\frac{\\sqrt{3}}{2}$?"

$$\\theta = \\frac{\\pi}{3} = 60°$$

### Example 2: Evaluate $\\arccos(-1)$

Ask: "What angle $\\theta \\in [0, \\pi]$ has $\\cos\\theta = -1$?"

$$\\theta = \\pi = 180°$$

### Example 3: Evaluate $\\arctan(-1)$

Ask: "What angle $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ has $\\tan\\theta = -1$?"

$$\\theta = -\\frac{\\pi}{4} = -45°$$

### Example 4: Why $\\arcsin(\\sin 240°) \\neq 240°$

$\\sin 240° = -\\frac{\\sqrt{3}}{2}$. The principal value of $\\arcsin(-\\frac{\\sqrt{3}}{2})$ is $-60°$, not $240°$, because $\\arcsin$ outputs must be in $[-90°, 90°]$.
      `
    },
    {
      id: 'p1-why-restrict',
      type: 'text' as const,
      content: `
## 🔍 Why We Restrict the Domain

### Without Restriction: Infinitely Many Answers

$\\sin\\theta = \\frac{1}{2}$ has solutions $\\theta = 30°, 150°, 390°, 510°, \\ldots$ and also $-210°, -330°, \\ldots$

A function can only return **one** output. So we pick the interval where each trig function is one-to-one:

| Function | Why This Interval? |
|:---------|:------------------|
| $\\sin$ restricted to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ | Sine goes from $-1$ to $1$ (hits every y-value exactly once) |
| $\\cos$ restricted to $[0, \\pi]$ | Cosine goes from $1$ to $-1$ (hits every y-value exactly once) |
| $\\tan$ restricted to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ | Tangent covers all reals (hits every y-value exactly once) |

### Quick Reference: Special Angle Outputs

| Input $x$ | $\\arcsin x$ | $\\arccos x$ |
|:----------|:------------|:------------|
| $0$ | $0°$ | $90°$ |
| $\\frac{1}{2}$ | $30°$ | $60°$ |
| $\\frac{\\sqrt{2}}{2}$ | $45°$ | $45°$ |
| $\\frac{\\sqrt{3}}{2}$ | $60°$ | $30°$ |
| $1$ | $90°$ | $0°$ |
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\arccos\\!\\left(\\frac{1}{2}\\right)$ equals:',
            options: [
              '$30°$',
              '$60°$',
              '$120°$',
              '$-60°$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos 60° = \\frac{1}{2}$ and $60° \\in [0°, 180°]$, so $\\arccos(\\frac{1}{2}) = 60°$.'
          },
          {
            question: 'The range of $\\arctan x$ is:',
            options: [
              '$[-90°, 90°]$',
              '$(-90°, 90°)$',
              '$[0°, 180°]$',
              '$(-180°, 180°)$'
            ],
            correctAnswer: 1,
            explanation: '$\\arctan$ has range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ or $(-90°, 90°)$ — open interval (never reaches $\\pm 90°$).'
          },
          {
            question: '$\\arcsin(\\sin 150°)$ equals:',
            options: [
              '$150°$',
              '$30°$',
              '$-30°$',
              '$-150°$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin 150° = \\frac{1}{2}$. Then $\\arcsin(\\frac{1}{2}) = 30°$ (principal value in $[-90°, 90°]$).'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Inverse Trig Evaluation** 🧮

**1)** $\\arcsin\\!\\left(\\frac{\\sqrt{2}}{2}\\right)$ in degrees = ? (e.g., $\\arcsin(\\frac{\\sqrt{3}}{2}) = 60$ since $\\sin 60° = \\frac{\\sqrt{3}}{2}$)

**2)** $\\arccos(0)$ in degrees = ? (e.g., $\\arccos(1) = 0$ since $\\cos 0° = 1$)

**3)** $\\arctan(\\sqrt{3})$ in degrees = ? (e.g., $\\arctan(1) = 45$ since $\\tan 45° = 1$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['45', '90', '60'],
        hint1: '$\\sin 45° = \\frac{\\sqrt{2}}{2}$ and $45° \\in [-90°, 90°]$.',
        hint2: '$\\cos 90° = 0$ and $90° \\in [0°, 180°]$.',
        hint3: '$\\tan 60° = \\sqrt{3}$ and $60° \\in (-90°, 90°)$.',
        explanation: '1) $\\arcsin(\\frac{\\sqrt{2}}{2}) = 45°$. 2) $\\arccos(0) = 90°$. 3) $\\arctan(\\sqrt{3}) = 60°$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Domain & Range Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The domain of $\\arcsin x$ is',
            options: ['$[-1, 1]$', '$(-\\infty, \\infty)$', '$[0, \\pi]$', '$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$']
          },
          {
            label: 'The range of $\\arccos x$ is',
            options: ['$[-1, 1]$', '$[0, \\pi]$', '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$', '$(-\\infty, \\infty)$']
          },
          {
            label: '$\\sin^{-1}x$ is another notation for',
            options: ['$\\csc x$', '$\\frac{1}{\\sin x}$', '$\\arcsin x$', '$\\sin(\\frac{1}{x})$']
          },
          {
            label: 'The domain of $\\arctan x$ is',
            options: ['$[-1, 1]$', '$[0, \\pi]$', '$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$', '$(-\\infty, \\infty)$']
          }
        ],
        correctAnswers: ['$[-1, 1]$', '$[0, \\pi]$', '$\\arcsin x$', '$(-\\infty, \\infty)$'],
        hint1: 'Sine outputs values between $-1$ and $1$, so its inverse accepts those as input.',
        hint2: 'Cosine was restricted to $[0, \\pi]$, so that becomes the range of arccos.',
        hint3: '$\\sin^{-1}$ means inverse function, not reciprocal.',
        explanation: 'Domain of $\\arcsin$: $[-1,1]$. Range of $\\arccos$: $[0,\\pi]$. $\\sin^{-1}x = \\arcsin x$. Domain of $\\arctan$: all reals.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why does $\\arcsin(\\sin 200°)$ NOT equal $200°$?',
            options: [
              'Because $\\sin 200°$ is undefined',
              'Because $200°$ is outside the range $[-90°, 90°]$ of $\\arcsin$',
              'Because $\\arcsin$ only accepts positive inputs',
              'Because $200°$ is not a special angle'
            ],
            correctAnswer: 1,
            explanation: '$\\arcsin$ can only output angles in $[-90°, 90°]$. Since $200°$ is outside this range, the output is a different angle with the same sine value.'
          },
          {
            question: '$\\arccos(-\\frac{\\sqrt{3}}{2})$ equals:',
            options: [
              '$-30°$',
              '$150°$',
              '$210°$',
              '$-150°$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos 150° = -\\frac{\\sqrt{3}}{2}$ and $150° \\in [0°, 180°]$. So $\\arccos(-\\frac{\\sqrt{3}}{2}) = 150°$.'
          }
        ]
      }
    }
  ]
};
