export const precalcTrigIdentitiesPart6Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# ✅ Trigonometric Identities — Verifying Identities

**Part 6 of 7**

**Verifying** (or **proving**) a trigonometric identity means showing that the left side equals the right side for all values in the domain. You never cross-multiply or move terms across the equals sign — you work **one side only** until it matches the other.

### The Golden Rules

| Rule | Why |
|:-----|:----|
| **Work one side only** | An identity is not an equation to "solve" — you must transform, not rearrange |
| **Start with the more complex side** | More terms = more opportunities to simplify |
| **Convert everything to sin and cos** | Common denominators and cancellations become visible |
| **Factor when possible** | $\\sin^2\\theta - \\cos^2\\theta$ factors as $(\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta)$ |
| **Multiply by the conjugate** | Especially useful with $1 \\pm \\sin\\theta$ or $1 \\pm \\cos\\theta$ |
| **Combine fractions** | Get a single fraction, then simplify the numerator |
      `
    },
    {
      id: 'p6-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Verifications

### Verify: $\\frac{\\sin\\theta}{1 + \\cos\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta}$

**Strategy**: Work the left side. Multiply by the conjugate $\\frac{1 - \\cos\\theta}{1 - \\cos\\theta}$:

$$\\frac{\\sin\\theta}{1 + \\cos\\theta} \\cdot \\frac{1 - \\cos\\theta}{1 - \\cos\\theta} = \\frac{\\sin\\theta(1 - \\cos\\theta)}{1 - \\cos^2\\theta} = \\frac{\\sin\\theta(1 - \\cos\\theta)}{\\sin^2\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta} \\;\\checkmark$$

### Verify: $\\tan\\theta + \\cot\\theta = \\sec\\theta\\csc\\theta$

**Strategy**: Convert the left side to sin/cos:

$$\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta} = \\sec\\theta\\csc\\theta \\;\\checkmark$$

### Verify: $\\frac{1 + \\sin\\theta}{\\cos\\theta} = \\frac{\\cos\\theta}{1 - \\sin\\theta}$

**Strategy**: Cross-reference by working the right side — multiply by conjugate $\\frac{1 + \\sin\\theta}{1 + \\sin\\theta}$:

$$\\frac{\\cos\\theta}{1 - \\sin\\theta} \\cdot \\frac{1 + \\sin\\theta}{1 + \\sin\\theta} = \\frac{\\cos\\theta(1 + \\sin\\theta)}{1 - \\sin^2\\theta} = \\frac{\\cos\\theta(1 + \\sin\\theta)}{\\cos^2\\theta} = \\frac{1 + \\sin\\theta}{\\cos\\theta} \\;\\checkmark$$
      `
    },
    {
      id: 'p6-toolkit',
      type: 'text' as const,
      content: `
## 🛠️ Verification Toolkit — Decision Flowchart

### Which Strategy Do I Use?

| I see … | Try … |
|:--------|:------|
| Fractions on one side | Combine into a single fraction |
| $1 \\pm \\sin\\theta$ or $1 \\pm \\cos\\theta$ in a denominator | Multiply by the conjugate |
| $\\sec, \\csc, \\tan, \\cot$ | Convert to $\\sin$ and $\\cos$ |
| Squares like $\\sin^2\\theta$ or $\\cos^2\\theta$ | Apply Pythagorean identity |
| $\\sin^2\\theta - \\cos^2\\theta$ or similar | Factor as a difference of squares |
| $\\sin 2\\theta$ or $\\cos 2\\theta$ | Expand using double-angle formulas |
| Nothing obvious | Try both sides and see which simplifies to a recognizable form |

### Common Mistakes to Avoid

| Mistake | Why It's Wrong |
|:--------|:--------------|
| Moving terms across the $=$ sign | You're proving equality, not solving |
| Working both sides toward a "common middle" | Only acceptable if you work each side independently |
| Dividing both sides by a trig expression | Not allowed — it's not an equation |
| Stopping before the sides match exactly | The transformed side must be identical to the target |
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To verify $\\frac{\\cos\\theta}{1 - \\sin\\theta} = \\sec\\theta + \\tan\\theta$, the best first step on the right side is:',
            options: [
              'Factor $\\sec\\theta + \\tan\\theta$',
              'Convert to $\\frac{1}{\\cos\\theta} + \\frac{\\sin\\theta}{\\cos\\theta}$',
              'Multiply both sides by $\\cos\\theta$',
              'Use the double-angle formula'
            ],
            correctAnswer: 1,
            explanation: 'Converting to sin/cos gives $\\frac{1 + \\sin\\theta}{\\cos\\theta}$, then multiply by the conjugate to match the left side.'
          },
          {
            question: 'When verifying, which action is NOT allowed?',
            options: [
              'Converting $\\tan\\theta$ to $\\sin\\theta/\\cos\\theta$',
              'Factoring $\\sin^2\\theta - 1$',
              'Subtracting the right side from both sides',
              'Multiplying the numerator and denominator by a conjugate'
            ],
            correctAnswer: 2,
            explanation: 'You cannot treat an identity as an equation. Subtracting one side from both sides is solving, not verifying.'
          },
          {
            question: 'To verify $\\frac{\\sin\\theta}{1+\\cos\\theta} = \\csc\\theta - \\cot\\theta$, the best strategy for the right side is:',
            options: [
              'Use double-angle formulas',
              'Convert to sin/cos and combine into a single fraction',
              'Factor the numerator',
              'Apply $\\sin^2 + \\cos^2 = 1$'
            ],
            correctAnswer: 1,
            explanation: '$\\csc\\theta - \\cot\\theta = \\frac{1}{\\sin\\theta} - \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1 - \\cos\\theta}{\\sin\\theta}$. Then multiply by the conjugate to match.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Verification Computation** 🧮

**1)** In verifying $\\tan\\theta + \\cot\\theta = \\sec\\theta\\csc\\theta$, the combined left side has numerator $\\sin^2\\theta + \\cos^2\\theta$. This simplifies to what integer? (e.g., the numerator $a^2 - a^2$ simplifies to $0$)

**2)** To verify $\\frac{\\sin\\theta}{1+\\cos\\theta} = \\frac{1-\\cos\\theta}{\\sin\\theta}$, you multiply the left fraction by $\\frac{1-\\cos\\theta}{1-\\cos\\theta}$. The new denominator $1 - \\cos^2\\theta$ equals $\\sin^{\\,n}\\theta$. What is $n$? (e.g., $1 - a^2$ might become $b^3$, so $n = 3$)

**3)** In the identity $\\sec\\theta - \\cos\\theta = \\sin\\theta\\tan\\theta$, converting the left side gives $\\frac{1 - \\cos^2\\theta}{\\cos\\theta}$. The numerator $1-\\cos^2\\theta$ becomes $\\sin^{\\,k}\\theta$. What is $k$? (e.g., $1 - b^2$ might yield $c^4$, so $k = 4$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '2', '2'],
        hint1: 'By the Pythagorean identity, $\\sin^2\\theta + \\cos^2\\theta = ?$',
        hint2: '$1 - \\cos^2\\theta = \\sin^2\\theta$, so the exponent on $\\sin$ is …',
        hint3: 'Same Pythagorean identity: $1 - \\cos^2\\theta = \\sin^2\\theta$.',
        explanation: '1) $\\sin^2\\theta + \\cos^2\\theta = 1$. 2) $1 - \\cos^2\\theta = \\sin^2\\theta$, so $n = 2$. 3) Same identity gives $\\sin^2\\theta$, so $k = 2$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Strategy Matching** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You see $1 + \\cos\\theta$ in a denominator. Best strategy:',
            options: ['Factor', 'Convert to sin/cos', 'Multiply by conjugate $1 - \\cos\\theta$', 'Use double-angle formula']
          },
          {
            label: 'You see $\\sec\\theta + \\tan\\theta$. Best first step:',
            options: ['Factor', 'Convert to $\\frac{1+\\sin\\theta}{\\cos\\theta}$', 'Apply Pythagorean identity', 'Multiply by conjugate']
          },
          {
            label: 'You see $\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta}$. Best step:',
            options: ['Combine into one fraction', 'Convert to tangent', 'Use double-angle', 'Factor']
          },
          {
            label: 'The most common mistake when verifying is:',
            options: ['Using Pythagorean identity', 'Moving terms across the equals sign', 'Converting to sin and cos', 'Multiplying by a conjugate']
          }
        ],
        correctAnswers: ['Multiply by conjugate $1 - \\cos\\theta$', 'Convert to $\\frac{1+\\sin\\theta}{\\cos\\theta}$', 'Combine into one fraction', 'Moving terms across the equals sign'],
        hint1: 'Conjugate strategy eliminates the sum/difference in the denominator.',
        hint2: 'Writing $\\sec$ and $\\tan$ as fractions with $\\cos\\theta$ denominator lets you combine.',
        hint3: 'Two fractions → common denominator → combine.',
        explanation: 'Conjugate for $1 + \\cos$. Convert sec/tan to sin/cos. Combine separate fractions. Moving terms across $=$ is the classic mistake.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which correctly verifies $\\sec^2\\theta - 1 = \\tan^2\\theta$?',
            options: [
              'Subtract $\\tan^2\\theta$ from both sides',
              'Recognize this as a rearrangement of $1 + \\tan^2\\theta = \\sec^2\\theta$',
              'Divide both sides by $\\sec\\theta$',
              'Use the sum formula'
            ],
            correctAnswer: 1,
            explanation: 'The Pythagorean identity $1 + \\tan^2\\theta = \\sec^2\\theta$ rearranges to $\\sec^2\\theta - 1 = \\tan^2\\theta$. No need for algebraic manipulation across the equals sign.'
          },
          {
            question: 'To verify $\\frac{1 - \\cos^2\\theta}{\\sin\\theta} = \\sin\\theta$, the key step is:',
            options: [
              'Use the sum formula on the numerator',
              'Replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$ and cancel',
              'Multiply both sides by $\\sin\\theta$',
              'Convert to tangent form'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1-\\cos^2\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$. Pythagorean substitution then cancellation.'
          }
        ]
      }
    }
  ]
};
