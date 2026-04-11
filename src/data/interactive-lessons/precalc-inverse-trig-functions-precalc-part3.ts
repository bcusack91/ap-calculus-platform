export const precalcInverseTrigPart3Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🎯 Evaluating Inverse Trig — Exact Values

**Part 3 of 7**

Evaluating inverse trig functions means finding **exact angle values** from the unit circle. The key is memorizing outputs for special inputs.

### Complete Special-Value Table

| $x$ | $\\arcsin x$ | $\\arccos x$ | $\\arctan x$ |
|:----|:------------|:------------|:------------|
| $-1$ | $-\\frac{\\pi}{2}$ | $\\pi$ | — |
| $-\\frac{\\sqrt{3}}{2}$ | $-\\frac{\\pi}{3}$ | $\\frac{5\\pi}{6}$ | — |
| $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\pi}{4}$ | $\\frac{3\\pi}{4}$ | — |
| $-\\frac{1}{2}$ | $-\\frac{\\pi}{6}$ | $\\frac{2\\pi}{3}$ | — |
| $0$ | $0$ | $\\frac{\\pi}{2}$ | $0$ |
| $\\frac{1}{2}$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{3}$ | — |
| $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{4}$ | — |
| $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{6}$ | — |
| $1$ | $\\frac{\\pi}{2}$ | $0$ | $\\frac{\\pi}{4}$ |

### Arctan Special Values

| $x$ | $\\arctan x$ |
|:----|:------------|
| $-\\sqrt{3}$ | $-\\frac{\\pi}{3}$ |
| $-1$ | $-\\frac{\\pi}{4}$ |
| $-\\frac{\\sqrt{3}}{3}$ | $-\\frac{\\pi}{6}$ |
| $0$ | $0$ |
| $\\frac{\\sqrt{3}}{3}$ | $\\frac{\\pi}{6}$ |
| $1$ | $\\frac{\\pi}{4}$ |
| $\\sqrt{3}$ | $\\frac{\\pi}{3}$ |
      `
    },
    {
      id: 'p3-strategy',
      type: 'text' as const,
      content: `
## 🧠 Evaluation Strategy

### Step-by-Step Process

$$\\boxed{\\text{1. Identify the function → 2. Recall its range → 3. Find the angle in that range}}$$

### Example 1: $\\arcsin\\!\\left(-\\frac{\\sqrt{2}}{2}\\right)$

1. Function: $\\arcsin$ → range is $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
2. Need $\\theta$ with $\\sin\\theta = -\\frac{\\sqrt{2}}{2}$ and $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
3. $\\theta = -\\frac{\\pi}{4}$ ✓

### Example 2: $\\arccos\\!\\left(-\\frac{1}{2}\\right)$

1. Function: $\\arccos$ → range is $[0, \\pi]$
2. Need $\\theta$ with $\\cos\\theta = -\\frac{1}{2}$ and $\\theta \\in [0, \\pi]$
3. $\\theta = \\frac{2\\pi}{3}$ ✓

### Example 3: Undefined Inputs

$\\arcsin(2)$ is **undefined** — there's no angle whose sine equals $2$ (sine only outputs $[-1, 1]$).

$\\arccos(-3)$ is also **undefined** for the same reason.

$\\arctan(100)$ IS defined — tangent can take any real value, so arctan accepts all reals.
      `
    },
    {
      id: 'p3-practice',
      type: 'text' as const,
      content: `
## 📝 More Practice

### Example 4: Converting Between Degrees and Radians

$\\arcsin(\\frac{1}{2}) = 30° = \\frac{\\pi}{6}$ rad

Always be aware of whether the problem asks for degrees or radians!

### Example 5: Tricky Negative Values

$\\arccos(-\\frac{\\sqrt{3}}{2})$:
- We know $\\cos 30° = \\frac{\\sqrt{3}}{2}$
- For the negative input, the angle must be in Quadrant II: $180° - 30° = 150°$
- $\\arccos(-\\frac{\\sqrt{3}}{2}) = 150° = \\frac{5\\pi}{6}$

### Pattern for Negative Inputs

| Function | Negative Input Formula |
|:---------|:---------------------|
| $\\arcsin(-x)$ | $= -\\arcsin(x)$ |
| $\\arccos(-x)$ | $= \\pi - \\arccos(x)$ |
| $\\arctan(-x)$ | $= -\\arctan(x)$ |
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Exact Value Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\arccos\\!\\left(-\\frac{\\sqrt{2}}{2}\\right)$ equals:',
            options: [
              '$\\frac{\\pi}{4}$',
              '$\\frac{3\\pi}{4}$',
              '$-\\frac{\\pi}{4}$',
              '$\\frac{5\\pi}{4}$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos \\frac{3\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ and $\\frac{3\\pi}{4} \\in [0, \\pi]$.'
          },
          {
            question: 'Which is undefined?',
            options: [
              '$\\arctan(1000)$',
              '$\\arcsin(0.5)$',
              '$\\arccos(1.5)$',
              '$\\arcsin(-1)$'
            ],
            correctAnswer: 2,
            explanation: '$\\arccos(1.5)$ is undefined because $1.5$ is outside the domain $[-1, 1]$. Arctan accepts any real, while the other values are in range.'
          },
          {
            question: '$\\arctan\\!\\left(-\\frac{\\sqrt{3}}{3}\\right)$ equals:',
            options: [
              '$\\frac{\\pi}{6}$',
              '$-\\frac{\\pi}{6}$',
              '$\\frac{5\\pi}{6}$',
              '$-\\frac{\\pi}{3}$'
            ],
            correctAnswer: 1,
            explanation: '$\\tan(-\\frac{\\pi}{6}) = -\\frac{\\sqrt{3}}{3}$ and $-\\frac{\\pi}{6} \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Compute Exact Values** 🧮

Give answers in degrees.

**1)** $\\arcsin(-1)$ = ? (e.g., $\\arcsin(1) = 90$ since $\\sin 90° = 1$)

**2)** $\\arccos(-\\frac{1}{2})$ = ? (e.g., $\\arccos(\\frac{1}{2}) = 60$ since $\\cos 60° = \\frac{1}{2}$)

**3)** $\\arctan(-\\sqrt{3})$ = ? (e.g., $\\arctan(\\sqrt{3}) = 60$ since $\\tan 60° = \\sqrt{3}$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-90', '120', '-60'],
        hint1: '$\\sin(-90°) = -1$ and $-90° \\in [-90°, 90°]$.',
        hint2: 'For negative input to $\\arccos$: angle is in QII. $180° - 60° = 120°$.',
        hint3: '$\\arctan(-\\sqrt{3}) = -\\arctan(\\sqrt{3}) = -60°$.',
        explanation: '1) $\\arcsin(-1) = -90°$. 2) $\\arccos(-\\frac{1}{2}) = 120°$. 3) $\\arctan(-\\sqrt{3}) = -60°$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Evaluation** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\arcsin(0)$ =',
            options: ['$0$', '$\\frac{\\pi}{2}$', '$\\pi$', 'Undefined']
          },
          {
            label: '$\\arccos(0)$ =',
            options: ['$0$', '$\\frac{\\pi}{2}$', '$\\pi$', 'Undefined']
          },
          {
            label: '$\\arctan(0)$ =',
            options: ['$0$', '$\\frac{\\pi}{2}$', '$\\pi$', 'Undefined']
          },
          {
            label: '$\\arcsin(2)$ =',
            options: ['$0$', '$\\frac{\\pi}{2}$', '$\\pi$', 'Undefined']
          }
        ],
        correctAnswers: ['$0$', '$\\frac{\\pi}{2}$', '$0$', 'Undefined'],
        hint1: '$\\sin 0 = 0$.',
        hint2: '$\\cos \\frac{\\pi}{2} = 0$.',
        hint3: '$\\tan 0 = 0$; and $\\sin$ never equals $2$.',
        explanation: '$\\arcsin(0) = 0$, $\\arccos(0) = \\frac{\\pi}{2}$, $\\arctan(0) = 0$, $\\arcsin(2)$ is undefined.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\arcsin\\!\\left(-\\frac{\\sqrt{3}}{2}\\right) + \\arccos\\!\\left(-\\frac{\\sqrt{3}}{2}\\right)$ equals:',
            options: [
              '$0$',
              '$\\pi$',
              '$\\frac{\\pi}{2}$',
              '$-\\frac{\\pi}{3}$'
            ],
            correctAnswer: 2,
            explanation: 'By the complementary identity: $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ for ANY $x \\in [-1,1]$, including $x = -\\frac{\\sqrt{3}}{2}$.'
          },
          {
            question: 'How many of these are defined? $\\arcsin(-0.5)$, $\\arccos(1)$, $\\arctan(-99)$, $\\arcsin(\\pi)$',
            options: [
              '2',
              '3',
              '4',
              '1'
            ],
            correctAnswer: 1,
            explanation: '$\\arcsin(-0.5)$ ✓, $\\arccos(1)$ ✓, $\\arctan(-99)$ ✓ (arctan accepts all reals), $\\arcsin(\\pi)$ ✗ ($\\pi \\approx 3.14 > 1$). Three are defined.'
          }
        ]
      }
    }
  ]
};
