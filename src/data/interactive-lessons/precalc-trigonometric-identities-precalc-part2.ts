export const precalcTrigIdentitiesPart2Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔄 Trigonometric Identities — Reciprocal & Quotient Identities

**Part 2 of 7**

The **reciprocal** and **quotient** identities rewrite all six trig functions in terms of sine and cosine — the most powerful simplification strategy.

### Reciprocal Identities

$$\\boxed{\\csc\\theta = \\frac{1}{\\sin\\theta} \\qquad \\sec\\theta = \\frac{1}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{1}{\\tan\\theta}}$$

### Quotient Identities

$$\\boxed{\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}}$$

### Why Convert to Sine & Cosine?

| Advantage | Example |
|:----------|:--------|
| Common denominator | $\\tan\\theta + \\cot\\theta = \\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}$ → combine |
| Cancel factors | $\\sin\\theta \\cdot \\csc\\theta = \\sin\\theta \\cdot \\frac{1}{\\sin\\theta} = 1$ |
| Reveal Pythagorean forms | $\\sec^2\\theta = \\frac{1}{\\cos^2\\theta}$ connects to $1 + \\tan^2\\theta$ |
      `
    },
    {
      id: 'p2-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Simplify $\\tan\\theta \\cdot \\cos\\theta$

$$\\tan\\theta \\cdot \\cos\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta = \\sin\\theta$$

### Example 2: Simplify $\\frac{\\cot\\theta}{\\csc\\theta}$

$$\\frac{\\cot\\theta}{\\csc\\theta} = \\frac{\\cos\\theta/\\sin\\theta}{1/\\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\frac{\\sin\\theta}{1} = \\cos\\theta$$

### Example 3: Simplify $\\tan\\theta + \\cot\\theta$

$$\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta} = \\csc\\theta\\sec\\theta$$

### Example 4: Simplify $\\sec\\theta - \\cos\\theta$

$$\\frac{1}{\\cos\\theta} - \\cos\\theta = \\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\tan\\theta$$
      `
    },
    {
      id: 'p2-strategy',
      type: 'text' as const,
      content: `
## 🎯 The "Convert Everything" Strategy

### Step-by-Step Process

| Step | Action | Example |
|:-----|:-------|:--------|
| 1 | Replace $\\tan, \\cot, \\sec, \\csc$ with $\\sin/\\cos$ | $\\sec\\theta \\to \\frac{1}{\\cos\\theta}$ |
| 2 | Find a common denominator | Combine fractions |
| 3 | Simplify numerator using Pythagorean identities | $\\sin^2 + \\cos^2 = 1$ |
| 4 | Cancel common factors | Reduce the fraction |
| 5 | Convert back if a cleaner form exists | $\\frac{\\sin\\theta}{\\cos\\theta} \\to \\tan\\theta$ |

### Common Products That Equal 1

| Product | Why |
|:--------|:----|
| $\\sin\\theta \\cdot \\csc\\theta$ | $= \\sin\\theta \\cdot \\frac{1}{\\sin\\theta} = 1$ |
| $\\cos\\theta \\cdot \\sec\\theta$ | $= \\cos\\theta \\cdot \\frac{1}{\\cos\\theta} = 1$ |
| $\\tan\\theta \\cdot \\cot\\theta$ | $= \\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\frac{\\cos\\theta}{\\sin\\theta} = 1$ |
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\sin\\theta \\cdot \\sec\\theta$',
            options: [
              '$1$',
              '$\\tan\\theta$',
              '$\\cot\\theta$',
              '$\\cos\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\sin\\theta \\cdot \\sec\\theta = \\sin\\theta \\cdot \\frac{1}{\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.'
          },
          {
            question: 'Which expression equals $\\frac{1}{\\sin\\theta\\cos\\theta}$?',
            options: [
              '$\\tan\\theta + \\cot\\theta$',
              '$\\sec\\theta + \\csc\\theta$',
              '$\\sec\\theta \\cdot \\csc\\theta$',
              'Both A and C'
            ],
            correctAnswer: 3,
            explanation: '$\\tan\\theta + \\cot\\theta = \\frac{1}{\\sin\\theta\\cos\\theta}$ (shown in examples). Also $\\sec\\theta \\cdot \\csc\\theta = \\frac{1}{\\cos\\theta} \\cdot \\frac{1}{\\sin\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}$.'
          },
          {
            question: 'Simplify: $\\cos\\theta \\cdot \\csc\\theta$',
            options: [
              '$\\sec\\theta$',
              '$\\cot\\theta$',
              '$\\tan\\theta$',
              '$1$'
            ],
            correctAnswer: 1,
            explanation: '$\\cos\\theta \\cdot \\csc\\theta = \\cos\\theta \\cdot \\frac{1}{\\sin\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Simplification Practice** 🧮

**1)** Simplify $\\frac{\\sec\\theta}{\\csc\\theta}$. Write as a single trig function (e.g., sin, cos, tan, cot, sec, csc). (e.g., $\\frac{\\csc\\theta}{\\sec\\theta} = \\frac{1/\\sin\\theta}{1/\\cos\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$)

**2)** Simplify $\\cot\\theta \\cdot \\sin\\theta$. Write as a single trig function. (e.g., $\\tan\\theta \\cdot \\cos\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta = \\sin\\theta$)

**3)** Evaluate $\\tan 60° \\cdot \\cot 60°$. Write as an integer. (e.g., $\\sin 45° \\cdot \\csc 45° = 1$ since they are reciprocals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['tan', 'cos', '1'],
        hint1: '$\\frac{\\sec\\theta}{\\csc\\theta} = \\frac{1/\\cos\\theta}{1/\\sin\\theta} = \\frac{\\sin\\theta}{\\cos\\theta}$.',
        hint2: '$\\cot\\theta \\cdot \\sin\\theta = \\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\sin\\theta$.',
        hint3: 'Tangent and cotangent are reciprocals of each other.',
        explanation: '1) $\\frac{\\sec\\theta}{\\csc\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. 2) $\\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\sin\\theta = \\cos\\theta$. 3) $\\tan\\theta \\cdot \\cot\\theta = 1$ for any $\\theta$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identity Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\sin\\theta \\cdot \\sec\\theta$ simplifies to',
            options: ['$1$', '$\\tan\\theta$', '$\\cot\\theta$', '$\\cos\\theta$']
          },
          {
            label: '$\\frac{\\cot\\theta}{\\csc\\theta}$ simplifies to',
            options: ['$\\sin\\theta$', '$\\cos\\theta$', '$\\tan\\theta$', '$\\sec\\theta$']
          },
          {
            label: 'The first step to simplify any trig expression is usually',
            options: ['Factor', 'Convert to sine and cosine', 'Use double-angle formulas', 'Cross-multiply']
          },
          {
            label: '$\\cos\\theta \\cdot \\sec\\theta$ equals',
            options: ['$0$', '$1$', '$2$', '$\\cos^2\\theta$']
          }
        ],
        correctAnswers: ['$\\tan\\theta$', '$\\cos\\theta$', 'Convert to sine and cosine', '$1$'],
        hint1: '$\\sec\\theta = 1/\\cos\\theta$, so $\\sin\\theta/\\cos\\theta = ?$',
        hint2: 'Write both in terms of sin and cos, then simplify.',
        hint3: 'Converting to sine and cosine reveals common factors and Pythagorean forms.',
        explanation: '$\\sin\\theta \\cdot \\frac{1}{\\cos\\theta} = \\tan\\theta$. $\\frac{\\cos/\\sin}{1/\\sin} = \\cos\\theta$. Converting to sin/cos is the universal first step. $\\cos\\theta \\cdot \\frac{1}{\\cos\\theta} = 1$.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{\\sin^2\\theta + \\sin\\theta\\cos\\theta}{\\sin\\theta}$',
            options: [
              '$\\sin\\theta + \\cos\\theta$',
              '$\\sin\\theta\\cos\\theta$',
              '$1 + \\cos\\theta$',
              '$\\tan\\theta + 1$'
            ],
            correctAnswer: 0,
            explanation: 'Factor: $\\frac{\\sin\\theta(\\sin\\theta + \\cos\\theta)}{\\sin\\theta} = \\sin\\theta + \\cos\\theta$.'
          },
          {
            question: 'Which expression equals $\\sec^2\\theta \\cdot \\sin^2\\theta$?',
            options: [
              '$1$',
              '$\\tan^2\\theta$',
              '$\\sin^2\\theta$',
              '$\\cos^2\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\sec^2\\theta \\cdot \\sin^2\\theta = \\frac{1}{\\cos^2\\theta} \\cdot \\sin^2\\theta = \\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta$.'
          }
        ]
      }
    }
  ]
};
