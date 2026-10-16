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

### Example 2: Evaluate $\\cos(-\\frac{\\pi}{3})$ without a calculator

$\\cos$ is even, so $\\cos(-\\frac{\\pi}{3}) = \\cos \\frac{\\pi}{3} = \\frac{1}{2}$.

### Example 3: Rewrite $\\sin \\frac{2\\pi}{5}$ as a cosine

$$\\sin \\frac{2\\pi}{5} = \\cos\\!\\left(\\frac{\\pi}{2} - \\frac{2\\pi}{5}\\right) = \\cos \\frac{\\pi}{10}$$

(Work in tenths: $\\frac{\\pi}{2} = \\frac{5\\pi}{10}$ and $\\frac{2\\pi}{5} = \\frac{4\\pi}{10}$.)

### Example 4: Show that $\\tan(-\\theta) + \\cot(\\frac{\\pi}{2} - \\theta)$ simplifies to $0$

$$\\tan(-\\theta) + \\cot(\\frac{\\pi}{2} - \\theta) = -\\tan\\theta + \\tan\\theta = 0$$

The cofunction identity gives $\\cot(\\frac{\\pi}{2} - \\theta) = \\tan\\theta$, and the even-odd identity gives $\\tan(-\\theta) = -\\tan\\theta$.
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

### Cofunction: $\\frac{\\pi}{2}$ Rotation

The point at angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$.

The point at angle $\\frac{\\pi}{2} - \\theta$ has coordinates $(\\sin\\theta, \\cos\\theta)$ — the $x$ and $y$ swap!

This swap is exactly why $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$.

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
              '$\\cos^2\\theta$',
              '$\\sin^2\\theta$'
            ],
            correctAnswer: 0,
            explanation: '$\\sin(-\\theta) = -\\sin\\theta$ and $\\csc(-\\theta) = -\\csc\\theta$. So $(-\\sin\\theta)(-\\csc\\theta) = \\sin\\theta \\cdot \\csc\\theta = 1$.'
          },
          {
            question: 'Which equals $\\cos \\frac{\\pi}{5}$?',
            options: [
              '$\\sin \\frac{\\pi}{5}$',
              '$\\sin \\frac{3\\pi}{10}$',
              '$-\\cos \\frac{\\pi}{5}$',
              '$\\cos \\frac{3\\pi}{10}$'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction: $\\cos \\frac{\\pi}{5} = \\sin(\\frac{\\pi}{2} - \\frac{\\pi}{5}) = \\sin \\frac{3\\pi}{10}$. Changing only the function without changing the angle, or changing only the angle without changing the function, breaks the identity.'
          },
          {
            question: '$\\tan(-\\theta)\\cot(-\\theta)$ equals:',
            options: [
              '$-1$',
              '$\\sec^2\\theta$',
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

**1)** $\\cos(-\\frac{2\\pi}{3}) = \\cos(\\,?\\cdot\\pi)$ with the angle in $[0, \\pi]$. Enter its coefficient of $\\pi$ (type \`2/3\` for $\\frac{2\\pi}{3}$). (e.g., $\\cos(-\\frac{\\pi}{4}) = \\cos \\frac{\\pi}{4}$ since cosine is even)

**2)** $\\sin \\frac{\\pi}{12} = \\cos(\\,?\\cdot\\pi)$ with the angle in $[0, \\pi]$. Enter the coefficient of that angle (the complementary angle). (e.g., $\\sin \\frac{\\pi}{6} = \\cos \\frac{\\pi}{3}$ since $\\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$)

**3)** Evaluate $\\tan(-\\frac{\\pi}{4})$. Write as an integer. (e.g., $\\sin(-\\frac{\\pi}{6}) = -\\sin \\frac{\\pi}{6} = -1/2$ since sine is odd)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2/3', '5/12', '-1'],
        hint1: 'Cosine is an even function: $\\cos(-\\theta) = \\cos\\theta$.',
        hint2: 'Cofunction: $\\sin\\theta = \\cos(\\frac{\\pi}{2} - \\theta)$. What is $\\frac{\\pi}{2} - \\frac{\\pi}{12} = \\frac{6\\pi}{12} - \\frac{\\pi}{12}$?',
        hint3: 'Tangent is odd: $\\tan(-\\frac{\\pi}{4}) = -\\tan \\frac{\\pi}{4}$. And $\\tan \\frac{\\pi}{4} = 1$.',
        explanation: '1) $\\cos(-\\frac{2\\pi}{3}) = \\cos \\frac{2\\pi}{3}$ (even). 2) $\\sin \\frac{\\pi}{12} = \\cos(\\frac{\\pi}{2} - \\frac{\\pi}{12}) = \\cos \\frac{5\\pi}{12}$. 3) $\\tan(-\\frac{\\pi}{4}) = -\\tan \\frac{\\pi}{4} = -1$ (odd).'
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
            label: '$\\tan \\frac{3\\pi}{10}$ equals',
            options: ['$\\cot \\frac{3\\pi}{10}$', '$\\cot \\frac{\\pi}{5}$', '$\\tan \\frac{\\pi}{5}$', '$-\\tan \\frac{3\\pi}{10}$']
          },
          {
            label: 'Cosine and secant are classified as',
            options: ['Odd functions', 'Even functions', 'Neither even nor odd', 'Cofunctions']
          }
        ],
        correctAnswers: ['$\\sec\\theta$', '$-\\csc\\theta$', '$\\cot \\frac{\\pi}{5}$', 'Even functions'],
        hint1: 'Secant inherits the even/odd property of cosine.',
        hint2: 'Cosecant inherits the even/odd property of sine.',
        hint3: '$\\tan\\theta = \\cot(\\frac{\\pi}{2} - \\theta)$. What is $\\frac{5\\pi}{10} - \\frac{3\\pi}{10}$?',
        explanation: '$\\sec(-\\theta) = \\sec\\theta$ (even). $\\csc(-\\theta) = -\\csc\\theta$ (odd). $\\tan \\frac{3\\pi}{10} = \\cot(\\frac{\\pi}{2}-\\frac{3\\pi}{10}) = \\cot \\frac{\\pi}{5}$ (cofunction). Cosine and secant are even.'
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
            question: 'If $\\cos\\alpha = 0.6$ and $\\alpha + \\beta = \\frac{\\pi}{2}$, what is $\\sin\\beta$?',
            options: [
              '$0.8$',
              '$0.6$',
              '$0.4$',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Cofunction: $\\sin\\beta = \\sin(\\frac{\\pi}{2} - \\alpha) = \\cos\\alpha = 0.6$.'
          }
        ]
      }
    }
  ]
};
