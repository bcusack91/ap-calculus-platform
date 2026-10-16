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

$$\\theta = \\frac{\\pi}{3}$$

### Example 2: Evaluate $\\arccos(-1)$

Ask: "What angle $\\theta \\in [0, \\pi]$ has $\\cos\\theta = -1$?"

$$\\theta = \\pi$$

### Example 3: Evaluate $\\arctan(-1)$

Ask: "What angle $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ has $\\tan\\theta = -1$?"

$$\\theta = -\\frac{\\pi}{4}$$

### Example 4: Why $\\arcsin\\!\\left(\\sin \\frac{4\\pi}{3}\\right) \\neq \\frac{4\\pi}{3}$

$\\sin \\frac{4\\pi}{3} = -\\frac{\\sqrt{3}}{2}$. The principal value of $\\arcsin(-\\frac{\\sqrt{3}}{2})$ is $-\\frac{\\pi}{3}$, not $\\frac{4\\pi}{3}$, because $\\arcsin$ outputs must be in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.
      `
    },
    {
      id: 'p1-why-restrict',
      type: 'text' as const,
      content: `
## 🔍 Why We Restrict the Domain

### Without Restriction: Infinitely Many Answers

$\\sin\\theta = \\frac{1}{2}$ has solutions $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, \\frac{17\\pi}{6}, \\ldots$ and also $-\\frac{7\\pi}{6}, -\\frac{11\\pi}{6}, \\ldots$

A function can only return **one** output. So we pick the interval where each trig function is one-to-one:

| Function | Why This Interval? |
|:---------|:------------------|
| $\\sin$ restricted to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ | Sine goes from $-1$ to $1$ (hits every y-value exactly once) |
| $\\cos$ restricted to $[0, \\pi]$ | Cosine goes from $1$ to $-1$ (hits every y-value exactly once) |
| $\\tan$ restricted to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ | Tangent covers all reals (hits every y-value exactly once) |

### Quick Reference: Special Angle Outputs

| Input $x$ | $\\arcsin x$ | $\\arccos x$ |
|:----------|:------------|:------------|
| $0$ | $0$ | $\\frac{\\pi}{2}$ |
| $\\frac{1}{2}$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{3}$ |
| $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{4}$ |
| $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{6}$ |
| $1$ | $\\frac{\\pi}{2}$ | $0$ |

> 📏 **Radians only.** The AP exam measures every angle in radians, so inverse trig answers are written as $\\frac{\\pi}{6}$, not $30°$.
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
              '$\\frac{5\\pi}{3}$',
              '$\\frac{\\pi}{3}$',
              '$\\frac{2\\pi}{3}$',
              '$-\\frac{\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos \\frac{\\pi}{3} = \\frac{1}{2}$ and $\\frac{\\pi}{3} \\in [0, \\pi]$, so $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$. $\\frac{5\\pi}{3}$ also has cosine $\\frac{1}{2}$ but lies outside $[0, \\pi]$, $\\frac{2\\pi}{3}$ is $\\arccos(-\\frac{1}{2})$, and $\\arccos$ never outputs a negative angle.'
          },
          {
            question: 'The range of $\\arctan x$ is:',
            options: [
              '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
              '$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$',
              '$[0, \\pi]$',
              '$(-\\pi, \\pi)$'
            ],
            correctAnswer: 1,
            explanation: '$\\arctan$ has range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, an open interval: $\\tan$ is undefined at $\\pm\\frac{\\pi}{2}$, so those endpoints are never reached. The closed interval is the range of $\\arcsin$, and $[0, \\pi]$ is the range of $\\arccos$.'
          },
          {
            question: '$\\arcsin\\!\\left(\\sin \\frac{5\\pi}{6}\\right)$ equals:',
            options: [
              '$\\frac{5\\pi}{6}$',
              '$\\frac{\\pi}{6}$',
              '$-\\frac{\\pi}{6}$',
              '$-\\frac{5\\pi}{6}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin \\frac{5\\pi}{6} = \\frac{1}{2}$. Then $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$ (principal value in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$). $\\frac{5\\pi}{6}$ is outside the range, and the negative angles have sine $-\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Inverse Trig Evaluation** 🧮

Write each answer as a multiple of $\\pi$ and enter the **coefficient** (type \`1/6\` for $\\frac{\\pi}{6}$).

**1)** $\\arcsin\\!\\left(\\frac{\\sqrt{2}}{2}\\right) = \\,?\\cdot\\pi$ (e.g., $\\arcsin(\\frac{\\sqrt{3}}{2}) = \\frac{\\pi}{3}$, coefficient \`1/3\`)

**2)** $\\arccos(0) = \\,?\\cdot\\pi$ (e.g., $\\arccos(-1) = \\pi$, coefficient \`1\`)

**3)** $\\arctan(\\sqrt{3}) = \\,?\\cdot\\pi$ (e.g., $\\arctan(1) = \\frac{\\pi}{4}$, coefficient \`1/4\`)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1/4', '1/2', '1/3'],
        hint1: '$\\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$ and $\\frac{\\pi}{4} \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$.',
        hint2: '$\\cos \\frac{\\pi}{2} = 0$ and $\\frac{\\pi}{2} \\in [0, \\pi]$.',
        hint3: '$\\tan \\frac{\\pi}{3} = \\sqrt{3}$ and $\\frac{\\pi}{3} \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.',
        explanation: '1) $\\arcsin(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$. 2) $\\arccos(0) = \\frac{\\pi}{2}$. 3) $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$.'
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
            question: 'Why does $\\arcsin(\\sin 3)$ NOT equal $3$?',
            options: [
              'Because $\\sin 3$ is undefined',
              'Because $3$ is outside the range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ of $\\arcsin$',
              'Because $\\arcsin$ only accepts positive inputs',
              'Because $3$ is not a multiple of $\\pi$'
            ],
            correctAnswer: 1,
            explanation: '$\\arcsin$ can only output angles in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}] \\approx [-1.57, 1.57]$. Since $3$ radians is outside this range, the output is a different angle with the same sine value (it is $\\pi - 3 \\approx 0.14$).'
          },
          {
            question: '$\\arccos(-\\frac{\\sqrt{3}}{2})$ equals:',
            options: [
              '$-\\frac{\\pi}{6}$',
              '$\\frac{5\\pi}{6}$',
              '$\\frac{7\\pi}{6}$',
              '$-\\frac{5\\pi}{6}$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos \\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$ and $\\frac{5\\pi}{6} \\in [0, \\pi]$. So $\\arccos(-\\frac{\\sqrt{3}}{2}) = \\frac{5\\pi}{6}$. $\\frac{7\\pi}{6}$ has the same cosine but lies outside $[0, \\pi]$, and $\\arccos$ never outputs a negative angle.'
          }
        ]
      }
    }
  ]
};
