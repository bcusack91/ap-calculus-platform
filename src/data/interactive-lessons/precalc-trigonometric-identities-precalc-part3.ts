export const precalcTrigIdentitiesPart3Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🪞 Trigonometric Identities — Even-Odd & Cofunction Identities

**Part 3 of 7**

**Even-odd** identities describe what happens when you negate an angle. **Cofunction** identities link a function to its complement. Both are shortcuts for rewriting expressions without a calculator.

### Even-Odd Identities

| Function | $f(-\\theta)$ | Type |
|:---------|:-------------|:-----|
| $\\cos(-\\theta)$ | $\\cos\\theta$ | **Even** |
| $\\sec(-\\theta)$ | $\\sec\\theta$ | **Even** |
| $\\sin(-\\theta)$ | $-\\sin\\theta$ | **Odd** |
| $\\csc(-\\theta)$ | $-\\csc\\theta$ | **Odd** |
| $\\tan(-\\theta)$ | $-\\tan\\theta$ | **Odd** |
| $\\cot(-\\theta)$ | $-\\cot\\theta$ | **Odd** |

> **Memory aid**: Only **cosine** and **secant** are even — the "co-s" pair. Everything else is odd.

### Cofunction Identities (Complementary Angles)

$$\\boxed{\\sin\\theta = \\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right) \\qquad \\cos\\theta = \\sin\\!\\left(\\frac{\\pi}{2} - \\theta\\right)}$$

$$\\tan\\theta = \\cot\\!\\left(\\frac{\\pi}{2} - \\theta\\right) \\qquad \\sec\\theta = \\csc\\!\\left(\\frac{\\pi}{2} - \\theta\\right)$$

> The **co** in cosine, cosecant, cotangent stands for **complement**!
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Simplify $\\sin(-\\theta)\\cos(-\\theta)$

$$\\sin(-\\theta)\\cos(-\\theta) = (-\\sin\\theta)(\\cos\\theta) = -\\sin\\theta\\cos\\theta$$

Sine is odd (picks up a negative), cosine is even (stays the same).

### Example 2: Evaluate $\\cos(-60°)$ without a calculator

$\\cos$ is even, so $\\cos(-60°) = \\cos 60° = \\frac{1}{2}$.

### Example 3: Rewrite $\\sin 70°$ as a cosine

$$\\sin 70° = \\cos(90° - 70°) = \\cos 20°$$

### Example 4: Show that $\\tan(-\\theta) + \\cot(90° - \\theta)$ simplifies to $0$

$$\\tan(-\\theta) + \\cot(90° - \\theta) = -\\tan\\theta + \\tan\\theta = 0$$

The cofunction identity gives $\\cot(90° - \\theta) = \\tan\\theta$, and the even-odd identity gives $\\tan(-\\theta) = -\\tan\\theta$.
      `
    },
    {
      id: 'p3-unit-circle',
      type: 'text' as const,
      content: `
## 🔍 Why These Work — Unit Circle Reasoning

### Even-Odd: Reflection Across the $x$-axis

Negating $\\theta$ reflects the point $(\\cos\\theta,\\,\\sin\\theta)$ to $(\\cos\\theta,\\,-\\sin\\theta)$.

| Coordinate | After Reflection | Conclusion |
|:-----------|:----------------|:-----------|
| $x$-coordinate ($\\cos$) | Unchanged | $\\cos(-\\theta) = \\cos\\theta$ — **even** |
| $y$-coordinate ($\\sin$) | Flipped sign | $\\sin(-\\theta) = -\\sin\\theta$ — **odd** |

### Cofunction: $90°$ Rotation

The point at angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$.

The point at angle $\\frac{\\pi}{2} - \\theta$ has coordinates $(\\sin\\theta, \\cos\\theta)$ — the $x$ and $y$ swap!

This swap is exactly why $\\sin\\theta = \\cos(90° - \\theta)$.

### Quick Decision Table

| I want to … | Use … |
|:------------|:------|
| Remove a negative angle | Even-odd identities |
| Replace $\\sin$ with $\\cos$ (or vice versa) | Cofunction identities |
| Both at once | Chain them: even-odd first, cofunction second |
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\sin(-\\theta)\\csc(-\\theta)$ equals:',
            options: [
              '$1$',
              '$-1$',
              '$0$',
              '$\\sin^2\\theta$'
            ],
            correctAnswer: 0,
            explanation: '$\\sin(-\\theta) = -\\sin\\theta$ and $\\csc(-\\theta) = -\\csc\\theta$. So $(-\\sin\\theta)(-\\csc\\theta) = \\sin\\theta \\cdot \\csc\\theta = 1$.'
          },
          {
            question: 'Which equals $\\cos 35°$?',
            options: [
              '$\\sin 35°$',
              '$\\sin 55°$',
              '$-\\cos 35°$',
              '$\\cos 55°$'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction: $\\cos 35° = \\sin(90° - 35°) = \\sin 55°$.'
          },
          {
            question: '$\\tan(-\\theta)\\cot(-\\theta)$ equals:',
            options: [
              '$-1$',
              '$0$',
              '$1$',
              '$\\tan^2\\theta$'
            ],
            correctAnswer: 2,
            explanation: '$\\tan(-\\theta) = -\\tan\\theta$, $\\cot(-\\theta) = -\\cot\\theta$. Product: $(-\\tan\\theta)(-\\cot\\theta) = \\tan\\theta\\cot\\theta = 1$.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Even-Odd & Cofunction Practice** 🧮

**1)** $\\cos(-120°) = \\cos\\,\\_\\_°$. Write the positive angle in degrees. (e.g., $\\cos(-45°) = \\cos 45°$ since cosine is even)

**2)** $\\sin 25° = \\cos\\,\\_\\_°$. Write the complementary angle in degrees. (e.g., $\\sin 40° = \\cos 50°$ since $40 + 50 = 90$)

**3)** Evaluate $\\tan(-45°)$. Write as an integer. (e.g., $\\sin(-30°) = -\\sin 30° = -1/2$ since sine is odd)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '65', '-1'],
        hint1: 'Cosine is an even function: $\\cos(-\\theta) = \\cos\\theta$.',
        hint2: 'Cofunction: $\\sin\\theta = \\cos(90° - \\theta)$. What is $90 - 25$?',
        hint3: 'Tangent is odd: $\\tan(-45°) = -\\tan 45°$. And $\\tan 45° = 1$.',
        explanation: '1) $\\cos(-120°) = \\cos 120°$ (even). 2) $\\sin 25° = \\cos(90° - 25°) = \\cos 65°$. 3) $\\tan(-45°) = -\\tan 45° = -1$ (odd).'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classification & Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sec(-\\theta)$ equals',
            options: ['$\\sec\\theta$', '$-\\sec\\theta$', '$\\csc\\theta$', '$-\\csc\\theta$']
          },
          {
            label: '$\\csc(-\\theta)$ equals',
            options: ['$\\csc\\theta$', '$-\\csc\\theta$', '$\\sec\\theta$', '$-\\sec\\theta$']
          },
          {
            label: '$\\tan 50°$ equals',
            options: ['$\\cot 50°$', '$\\cot 40°$', '$\\tan 40°$', '$-\\tan 50°$']
          },
          {
            label: 'Cosine and secant are classified as',
            options: ['Odd functions', 'Even functions', 'Neither even nor odd', 'Cofunctions']
          }
        ],
        correctAnswers: ['$\\sec\\theta$', '$-\\csc\\theta$', '$\\cot 40°$', 'Even functions'],
        hint1: 'Secant inherits the even/odd property of cosine.',
        hint2: 'Cosecant inherits the even/odd property of sine.',
        hint3: '$\\tan\\theta = \\cot(90° - \\theta)$. What is $90 - 50$?',
        explanation: '$\\sec(-\\theta) = \\sec\\theta$ (even). $\\csc(-\\theta) = -\\csc\\theta$ (odd). $\\tan 50° = \\cot(90°-50°) = \\cot 40°$ (cofunction). Cosine and secant are even.'
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
            question: 'Simplify $\\sin(-\\theta)\\sec(-\\theta)$.',
            options: [
              '$\\tan\\theta$',
              '$-\\tan\\theta$',
              '$\\cot\\theta$',
              '$-\\cot\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin(-\\theta) = -\\sin\\theta$ (odd). $\\sec(-\\theta) = \\sec\\theta$ (even). Product: $-\\sin\\theta \\cdot \\sec\\theta = -\\sin\\theta/\\cos\\theta = -\\tan\\theta$.'
          },
          {
            question: 'If $\\cos\\alpha = 0.6$ and $\\alpha + \\beta = 90°$, what is $\\sin\\beta$?',
            options: [
              '$0.8$',
              '$0.6$',
              '$0.4$',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction: $\\sin\\beta = \\sin(90° - \\alpha) = \\cos\\alpha = 0.6$.'
          }
        ]
      }
    }
  ]
};
