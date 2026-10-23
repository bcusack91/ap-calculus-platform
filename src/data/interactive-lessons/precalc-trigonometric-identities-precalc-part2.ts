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

### Secant, Cosecant and Cotangent as Functions

Because each one is a quotient, it is **undefined wherever its denominator is $0$**, and its graph has a vertical asymptote there.

| Function | Undefined where | Domain excludes | Range | Period |
|:---------|:----------------|:----------------|:------|:-------|
| $\\sec\\theta = \\frac{1}{\\cos\\theta}$ | $\\cos\\theta = 0$ | $\\theta = \\frac{\\pi}{2} + \\pi k$ | $\\lvert y \\rvert \\ge 1$ | $2\\pi$ |
| $\\csc\\theta = \\frac{1}{\\sin\\theta}$ | $\\sin\\theta = 0$ | $\\theta = \\pi k$ | $\\lvert y \\rvert \\ge 1$ | $2\\pi$ |
| $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ | $\\sin\\theta = 0$ | $\\theta = \\pi k$ | all reals | $\\pi$ |

> Secant is large exactly where cosine is small: as $\\cos\\theta \\to 0$, $\\lvert\\sec\\theta\\rvert \\to \\infty$. Cotangent, like tangent, repeats every $\\pi$ and is $0$ where $\\cos\\theta = 0$.

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
            options: ['$\\tan\\theta \\cdot \\cot\\theta$', '$\\sec\\theta + \\csc\\theta$', '$\\sec\\theta \\cdot \\csc\\theta$', '$\\csc\\theta - \\sec\\theta$'],
            correctAnswer: 2,
            explanation: '$\\sec\\theta \\cdot \\csc\\theta = \\frac{1}{\\cos\\theta} \\cdot \\frac{1}{\\sin\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}$. By contrast, $\\tan\\theta \\cdot \\cot\\theta = 1$ (it is the sum $\\tan\\theta + \\cot\\theta$ that matches).'
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

Write each answer as a single trig function of $\\theta$ (type \`sec\` or \`sec(theta)\`), or as a number.
      `,
      exercise: {
        questions: [
          {
            question: '**1)** Simplify $\\frac{\\sec\\theta}{\\csc\\theta}$. (e.g., $\\frac{\\csc\\theta}{\\sec\\theta} = \\frac{1/\\sin\\theta}{1/\\cos\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta$)',
            answer: 'tan',
            acceptableAnswers: ['tanθ', 'tan(θ)', 'tantheta', 'tan(theta)', 'tanx', 'tan(x)', 'tangent'],
          },
          {
            question: '**2)** Simplify $\\cot\\theta \\cdot \\sin\\theta$. (e.g., $\\tan\\theta \\cdot \\cos\\theta = \\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\cos\\theta = \\sin\\theta$)',
            answer: 'cos',
            acceptableAnswers: ['cosθ', 'cos(θ)', 'costheta', 'cos(theta)', 'cosx', 'cos(x)', 'cosine'],
          },
          {
            question: '**3)** Evaluate $\\sin \\frac{\\pi}{3} \\cdot \\sec \\frac{\\pi}{3}$. Give the exact value. (e.g., $\\cos \\frac{\\pi}{6} \\cdot \\sec \\frac{\\pi}{6} = 1$ since they are reciprocals)',
            answer: 'sqrt(3)',
            acceptableAnswers: ['√3', 'sqrt3', 'tan(pi/3)'],
          },
        ],
        hint1: '$\\frac{\\sec\\theta}{\\csc\\theta} = \\frac{1/\\cos\\theta}{1/\\sin\\theta} = \\frac{\\sin\\theta}{\\cos\\theta}$.',
        hint2: '$\\cot\\theta \\cdot \\sin\\theta = \\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\sin\\theta$.',
        hint3: '$\\sin\\theta\\sec\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$, and $\\tan\\frac{\\pi}{3} = \\sqrt{3}$.',
        explanation: '1) $\\frac{\\sec\\theta}{\\csc\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. 2) $\\frac{\\cos\\theta}{\\sin\\theta} \\cdot \\sin\\theta = \\cos\\theta$. 3) $\\sin\\frac{\\pi}{3}\\sec\\frac{\\pi}{3} = \\tan\\frac{\\pi}{3} = \\sqrt{3}$.'
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
            label: '$\\csc\\theta \\cdot \\tan\\theta$ simplifies to',
            options: ['$1$', '$\\sec\\theta$', '$\\cot\\theta$', '$\\sin\\theta$']
          },
          {
            label: '$\\sec\\theta$ is undefined at',
            options: ['$\\theta = 0$', '$\\theta = \\frac{\\pi}{2}$', '$\\theta = \\pi$', '$\\theta = \\frac{\\pi}{4}$']
          },
          {
            label: 'When an expression mixes $\\tan$, $\\sec$, $\\csc$ or $\\cot$, a reliable first step is to',
            options: ['Factor', 'Convert to sine and cosine', 'Use double-angle formulas', 'Cross-multiply']
          },
          {
            label: '$\\cos\\theta \\cdot \\sec\\theta$ equals',
            options: ['$0$', '$1$', '$2$', '$\\cos^2\\theta$']
          }
        ],
        correctAnswers: ['$\\sec\\theta$', '$\\theta = \\frac{\\pi}{2}$', 'Convert to sine and cosine', '$1$'],
        hint1: '$\\csc\\theta\\tan\\theta = \\frac{1}{\\sin\\theta}\\cdot\\frac{\\sin\\theta}{\\cos\\theta}$.',
        hint2: 'Secant is $1/\\cos\\theta$; where is cosine zero?',
        hint3: 'Converting to sine and cosine reveals common factors and Pythagorean forms.',
        explanation: '$\\frac{1}{\\sin\\theta}\\cdot\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta$. $\\sec\\theta$ is undefined where $\\cos\\theta = 0$, at $\\theta = \\frac{\\pi}{2}$ (and $\\frac{3\\pi}{2}$). Converting to sin/cos is the reliable first step for mixed expressions. $\\cos\\theta \\cdot \\frac{1}{\\cos\\theta} = 1$.'
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
