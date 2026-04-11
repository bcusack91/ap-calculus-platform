export const precalcTrigFunctionsPart3Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🌊 Trigonometric Functions — Sine & Cosine Definitions

**Part 3 of 7**

### Right-Triangle Definitions

For a right triangle with angle $\\theta$, hypotenuse $r$, opposite side $y$, and adjacent side $x$:

$$\\boxed{\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{y}{r} \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{x}{r}}$$

### Unit-Circle Connection

On the unit circle ($r = 1$), this simplifies to:

$$\\sin\\theta = y \\qquad \\cos\\theta = x$$

### Key Properties Comparison

| Property | $\\sin\\theta$ | $\\cos\\theta$ |
|:---------|:-------------|:-------------|
| Domain | $(-\\infty, \\infty)$ | $(-\\infty, \\infty)$ |
| Range | $[-1, 1]$ | $[-1, 1]$ |
| Period | $2\\pi$ | $2\\pi$ |
| At $\\theta = 0$ | $0$ | $1$ |
| At $\\theta = \\frac{\\pi}{2}$ | $1$ | $0$ |
| Symmetry | **Odd**: $\\sin(-\\theta) = -\\sin\\theta$ | **Even**: $\\cos(-\\theta) = \\cos\\theta$ |
      `
    },
    {
      id: 'p3-identities',
      type: 'text' as const,
      content: `
## 🔗 Fundamental Identities

### Pythagorean Identity

$$\\boxed{\\sin^2\\theta + \\cos^2\\theta = 1}$$

This gives us two useful rearrangements:

- $\\sin^2\\theta = 1 - \\cos^2\\theta$  
- $\\cos^2\\theta = 1 - \\sin^2\\theta$

### Cofunction Identities

$$\\sin\\theta = \\cos\\left(\\frac{\\pi}{2} - \\theta\\right) \\qquad \\cos\\theta = \\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$$

> **Cofunctions of complementary angles are equal.** For example: $\\sin 30° = \\cos 60° = \\frac{1}{2}$.

### Worked Example: Using the Pythagorean Identity

> **Given $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant II, find $\\cos\\theta$.**

$\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$

$\\cos\\theta = \\pm\\frac{4}{5}$

In Q II, cosine is **negative**: $\\boxed{\\cos\\theta = -\\frac{4}{5}}$
      `
    },
    {
      id: 'p3-evaluate',
      type: 'text' as const,
      content: `
## 📝 Evaluating Sine & Cosine — Strategy

### Step-by-Step Method

1. **Identify the quadrant** of $\\theta$
2. **Find the reference angle** $\\theta_R$
3. **Look up** $\\sin\\theta_R$ and $\\cos\\theta_R$ from the first-quadrant table
4. **Apply the correct sign** based on the quadrant

### Example: Evaluate $\\sin 300°$

| Step | Work |
|:-----|:-----|
| 1. Quadrant | $300°$ is in Q IV ($270° < 300° < 360°$) |
| 2. Reference angle | $360° - 300° = 60°$ |
| 3. First-quadrant value | $\\sin 60° = \\frac{\\sqrt{3}}{2}$ |
| 4. Sign in Q IV | Sine is **negative** |
| **Result** | $\\sin 300° = -\\frac{\\sqrt{3}}{2}$ |

### Example: Evaluate $\\cos(-\\frac{\\pi}{4})$

Using the even property: $\\cos(-\\frac{\\pi}{4}) = \\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$

No need to find reference angles — the even/odd properties are a shortcut!
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Sine & Cosine Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\cos\\theta = -\\frac{5}{13}$ and $\\theta$ is in Quadrant III, what is $\\sin\\theta$?',
            options: [
              '$\\frac{12}{13}$',
              '$-\\frac{12}{13}$',
              '$\\frac{5}{13}$',
              '$-\\frac{5}{13}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$, so $\\sin\\theta = \\pm\\frac{12}{13}$. In Q III, sine is negative: $\\sin\\theta = -\\frac{12}{13}$.'
          },
          {
            question: 'Which identity is the cofunction relationship?',
            options: [
              '$\\sin^2\\theta + \\cos^2\\theta = 1$',
              '$\\sin(-\\theta) = -\\sin\\theta$',
              '$\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$',
              '$\\cos(-\\theta) = \\cos\\theta$'
            ],
            correctAnswer: 2,
            explanation: 'The cofunction identity states $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$. The others are Pythagorean, odd, and even identities respectively.'
          },
          {
            question: '$\\sin(-\\frac{5\\pi}{6})$ equals:',
            options: [
              '$\\frac{1}{2}$',
              '$-\\frac{1}{2}$',
              '$\\frac{\\sqrt{3}}{2}$',
              '$-\\frac{\\sqrt{3}}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Sine is odd: $\\sin(-\\frac{5\\pi}{6}) = -\\sin(\\frac{5\\pi}{6})$. $\\frac{5\\pi}{6}$ is in Q II with ref angle $\\frac{\\pi}{6}$: $\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$. So the answer is $-\\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Computation Practice** 🧮

**1)** Given $\\sin\\theta = \\frac{8}{17}$ and $\\theta$ is in Q I, find $\\cos\\theta$. Write as a fraction (e.g., $3/5$). (e.g., $\\sin\\alpha = 5/13$ in Q I: $\\cos\\alpha = \\sqrt{1 - 25/169} = \\sqrt{144/169} = 12/13$)

**2)** Evaluate $\\cos 240°$. Write as a fraction (e.g., $-1/2$). (e.g., $\\cos 120°$: Q II, ref $60°$, $\\cos 60° = 1/2$, negative in Q II → $-1/2$)

**3)** If $\\cos\\theta = \\frac{\\sqrt{3}}{2}$, find $\\sin(\\frac{\\pi}{2} - \\theta)$ using the cofunction identity. Write as a simplified expression. (e.g., $\\sin\\alpha = 0.6$: $\\cos(\\frac{\\pi}{2} - \\alpha) = \\sin\\alpha = 0.6$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15/17', '-1/2', 'sqrt(3)/2'],
        hint1: '$\\cos^2\\theta = 1 - (8/17)^2 = 1 - 64/289 = 225/289$. Take the positive root (Q I).',
        hint2: '$240°$ is in Q III. Reference angle $= 240° - 180° = 60°$. Cosine is negative in Q III.',
        hint3: 'The cofunction identity says $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta$.',
        explanation: '1) $\\cos\\theta = \\sqrt{225/289} = 15/17$. 2) $\\cos 240° = -\\cos 60° = -1/2$. 3) By cofunction identity: $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta = \\sqrt{3}/2$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Properties Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin(-\\theta)$ equals',
            options: ['$\\sin\\theta$', '$-\\sin\\theta$', '$\\cos\\theta$', '$-\\cos\\theta$']
          },
          {
            label: 'The range of $\\cos\\theta$ is',
            options: ['$(-\\infty, \\infty)$', '$[0, 1]$', '$[-1, 1]$', '$(-1, 1)$']
          },
          {
            label: '$\\sin^2\\theta + \\cos^2\\theta$ equals',
            options: ['$0$', '$1$', '$2$', 'Depends on $\\theta$']
          },
          {
            label: 'Cosine is classified as an ____ function',
            options: ['odd', 'even', 'neither', 'periodic only']
          }
        ],
        correctAnswers: ['$-\\sin\\theta$', '$[-1, 1]$', '$1$', 'even'],
        hint1: 'Sine is an odd function — negating the input negates the output.',
        hint2: 'Both sine and cosine oscillate between the same bounds.',
        hint3: 'This identity holds for ALL values of $\\theta$.',
        explanation: 'Sine is odd: $\\sin(-\\theta) = -\\sin\\theta$. Both $\\sin$ and $\\cos$ have range $[-1,1]$. The Pythagorean identity always equals $1$. Cosine is even because $\\cos(-\\theta) = \\cos\\theta$.'
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
            question: 'If $\\cos\\alpha = \\frac{7}{25}$ and $\\alpha$ is in Q IV, then $\\sin\\alpha$ is:',
            options: [
              '$\\frac{24}{25}$',
              '$-\\frac{24}{25}$',
              '$\\frac{7}{25}$',
              '$-\\frac{7}{25}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin^2\\alpha = 1 - \\frac{49}{625} = \\frac{576}{625}$. $\\sin\\alpha = \\pm\\frac{24}{25}$. In Q IV, sine is negative: $-\\frac{24}{25}$.'
          },
          {
            question: 'Which of these equals $\\cos\\frac{\\pi}{3}$?',
            options: [
              '$\\sin\\frac{\\pi}{3}$',
              '$\\sin\\frac{\\pi}{6}$',
              '$-\\sin\\frac{\\pi}{6}$',
              '$\\cos\\frac{\\pi}{6}$'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction identity: $\\cos\\frac{\\pi}{3} = \\sin(\\frac{\\pi}{2} - \\frac{\\pi}{3}) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$.'
          }
        ]
      }
    }
  ]
}
