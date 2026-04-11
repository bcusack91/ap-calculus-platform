export const precalcTrigIdentitiesPart1Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🔗 Trigonometric Identities — Pythagorean Identities

**Part 1 of 7**

The **Pythagorean identities** are the foundation of all trig simplification. They come from dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by different functions.

### The Three Pythagorean Identities

| Identity | Derived by | Most useful when... |
|:---------|:-----------|:-------------------|
| $\\boxed{\\sin^2\\theta + \\cos^2\\theta = 1}$ | Unit circle definition | Expression has $\\sin^2$ and $\\cos^2$ |
| $\\boxed{1 + \\tan^2\\theta = \\sec^2\\theta}$ | Dividing by $\\cos^2\\theta$ | Expression has $\\tan^2$ or $\\sec^2$ |
| $\\boxed{1 + \\cot^2\\theta = \\csc^2\\theta}$ | Dividing by $\\sin^2\\theta$ | Expression has $\\cot^2$ or $\\csc^2$ |

### Useful Rearrangements

| Form | Rearrangement |
|:-----|:-------------|
| $\\sin^2\\theta = $ | $1 - \\cos^2\\theta$ |
| $\\cos^2\\theta = $ | $1 - \\sin^2\\theta$ |
| $\\tan^2\\theta = $ | $\\sec^2\\theta - 1$ |
| $\\sec^2\\theta = $ | $1 + \\tan^2\\theta$ |
| $\\cot^2\\theta = $ | $\\csc^2\\theta - 1$ |
| $\\csc^2\\theta = $ | $1 + \\cot^2\\theta$ |
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Simplify $\\frac{1 - \\cos^2\\theta}{\\sin\\theta}$

Replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$:

$$\\frac{1 - \\cos^2\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$$

### Example 2: Simplify $\\sec^2\\theta - \\tan^2\\theta$

From $1 + \\tan^2\\theta = \\sec^2\\theta$, rearrange:

$$\\sec^2\\theta - \\tan^2\\theta = 1$$

> This is **always** $1$, regardless of $\\theta$. Great exam shortcut!

### Example 3: Express $\\tan^2\\theta$ in terms of $\\cos\\theta$ only

$\\tan^2\\theta = \\sec^2\\theta - 1 = \\frac{1}{\\cos^2\\theta} - 1 = \\frac{1 - \\cos^2\\theta}{\\cos^2\\theta} = \\frac{\\sin^2\\theta}{\\cos^2\\theta}$

### Example 4: Given $\\sin\\theta = \\frac{2}{3}$ (Q I), find all six trig values

| Step | Computation |
|:-----|:-----------|
| $\\cos\\theta$ | $\\sqrt{1 - 4/9} = \\frac{\\sqrt{5}}{3}$ |
| $\\tan\\theta$ | $\\frac{2/3}{\\sqrt{5}/3} = \\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}$ |
| $\\csc\\theta$ | $\\frac{3}{2}$ |
| $\\sec\\theta$ | $\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$ |
| $\\cot\\theta$ | $\\frac{\\sqrt{5}}{2}$ |
      `
    },
    {
      id: 'p1-strategy',
      type: 'text' as const,
      content: `
## 🎯 Simplification Strategy

### Decision Tree for Pythagorean Identities

| See this in the expression... | Replace with... |
|:------------------------------|:---------------|
| $\\sin^2\\theta + \\cos^2\\theta$ | $1$ |
| $1 - \\sin^2\\theta$ | $\\cos^2\\theta$ |
| $1 - \\cos^2\\theta$ | $\\sin^2\\theta$ |
| $\\sec^2\\theta - 1$ | $\\tan^2\\theta$ |
| $\\sec^2\\theta - \\tan^2\\theta$ | $1$ |
| $\\csc^2\\theta - 1$ | $\\cot^2\\theta$ |
| $\\csc^2\\theta - \\cot^2\\theta$ | $1$ |

> **Pro tip:** When you see a sum or difference involving squared trig functions and the number $1$, a Pythagorean identity is almost certainly the key.
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
            question: 'Simplify: $\\csc^2\\theta - \\cot^2\\theta$',
            options: [
              '$0$',
              '$1$',
              '$\\sin^2\\theta$',
              '$\\cos^2\\theta$'
            ],
            correctAnswer: 1,
            explanation: 'From $1 + \\cot^2\\theta = \\csc^2\\theta$, we get $\\csc^2\\theta - \\cot^2\\theta = 1$.'
          },
          {
            question: 'Which expression equals $\\frac{\\sin^2\\theta}{1 - \\sin^2\\theta}$?',
            options: [
              '$\\cos^2\\theta$',
              '$\\tan^2\\theta$',
              '$\\cot^2\\theta$',
              '$\\sec^2\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$1 - \\sin^2\\theta = \\cos^2\\theta$, so $\\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta$.'
          },
          {
            question: 'If $\\cos\\theta = \\frac{3}{5}$ (Q IV), what is $\\sin\\theta$?',
            options: [
              '$\\frac{4}{5}$',
              '$-\\frac{4}{5}$',
              '$\\frac{3}{5}$',
              '$-\\frac{3}{5}$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin^2\\theta = 1 - 9/25 = 16/25$. In Q IV, sine is negative: $\\sin\\theta = -4/5$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Pythagorean Identity Practice** 🧮

**1)** Simplify $\\frac{\\cos^2\\theta}{1 - \\sin^2\\theta}$. Write the simplified result. (e.g., $\\frac{\\sin^2\\theta}{1 - \\cos^2\\theta} = \\frac{\\sin^2\\theta}{\\sin^2\\theta} = 1$)

**2)** If $\\sec\\theta = \\frac{5}{4}$ and $\\theta$ is in Q I, find $\\tan\\theta$. Write as a fraction. (e.g., $\\sec\\alpha = \\frac{13}{5}$: $\\tan^2\\alpha = 169/25 - 1 = 144/25$, so $\\tan\\alpha = 12/5$)

**3)** Simplify $\\sin^2\\theta \\cdot \\csc^2\\theta + \\cos^2\\theta \\cdot \\sec^2\\theta$. Write as an integer. (e.g., $\\sin\\theta \\cdot \\csc\\theta = 1$ since they're reciprocals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '3/4', '2'],
        hint1: 'Replace $1 - \\sin^2\\theta$ with $\\cos^2\\theta$ in the denominator.',
        hint2: '$\\tan^2\\theta = \\sec^2\\theta - 1 = 25/16 - 1 = 9/16$. Take the positive root (Q I).',
        hint3: '$\\sin^2\\theta \\cdot \\csc^2\\theta = \\sin^2\\theta \\cdot \\frac{1}{\\sin^2\\theta} = 1$. Same logic for the second term.',
        explanation: '1) $\\frac{\\cos^2\\theta}{\\cos^2\\theta} = 1$. 2) $\\tan^2\\theta = 25/16 - 1 = 9/16$, so $\\tan\\theta = 3/4$. 3) Each product equals $1$: $1 + 1 = 2$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identity Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$1 - \\cos^2\\theta$ simplifies to',
            options: ['$\\tan^2\\theta$', '$\\sin^2\\theta$', '$\\sec^2\\theta$', '$\\cot^2\\theta$']
          },
          {
            label: '$\\sec^2\\theta - 1$ simplifies to',
            options: ['$\\sin^2\\theta$', '$\\cos^2\\theta$', '$\\tan^2\\theta$', '$\\csc^2\\theta$']
          },
          {
            label: 'Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$ gives',
            options: ['$1 + \\tan^2\\theta = \\sec^2\\theta$', '$1 + \\cot^2\\theta = \\csc^2\\theta$', '$\\sin^2\\theta + \\cos^2\\theta = 1$', '$\\sec^2\\theta - \\tan^2\\theta = 1$']
          },
          {
            label: '$\\csc^2\\theta - \\cot^2\\theta$ always equals',
            options: ['$0$', '$1$', '$2$', 'Depends on $\\theta$']
          }
        ],
        correctAnswers: ['$\\sin^2\\theta$', '$\\tan^2\\theta$', '$1 + \\cot^2\\theta = \\csc^2\\theta$', '$1$'],
        hint1: 'This is the most basic form of the Pythagorean identity rearranged.',
        hint2: 'Start from $1 + \\tan^2\\theta = \\sec^2\\theta$ and isolate $\\tan^2\\theta$.',
        hint3: 'Dividing by $\\sin^2\\theta$: $1 + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta}$.',
        explanation: '$1 - \\cos^2\\theta = \\sin^2\\theta$. $\\sec^2\\theta - 1 = \\tan^2\\theta$. Dividing by $\\sin^2\\theta$ gives $1 + \\cot^2\\theta = \\csc^2\\theta$. $\\csc^2\\theta - \\cot^2\\theta = 1$ always.'
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
            question: 'Simplify: $\\frac{\\tan^2\\theta}{\\sec^2\\theta}$',
            options: [
              '$\\sin^2\\theta$',
              '$\\cos^2\\theta$',
              '$1$',
              '$\\sec^2\\theta$'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{\\tan^2\\theta}{\\sec^2\\theta} = \\frac{\\sin^2\\theta/\\cos^2\\theta}{1/\\cos^2\\theta} = \\sin^2\\theta$.'
          },
          {
            question: 'If $\\cot\\theta = 7$ and $\\theta$ is in Q I, find $\\csc\\theta$.',
            options: [
              '$\\sqrt{50}$',
              '$5\\sqrt{2}$',
              '$7\\sqrt{2}$',
              '$\\sqrt{48}$'
            ],
            correctAnswer: 1,
            explanation: '$\\csc^2\\theta = 1 + \\cot^2\\theta = 1 + 49 = 50$. So $\\csc\\theta = \\sqrt{50} = 5\\sqrt{2}$.'
          }
        ]
      }
    }
  ]
};
