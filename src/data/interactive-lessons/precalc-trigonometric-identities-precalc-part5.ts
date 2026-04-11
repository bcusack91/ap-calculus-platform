export const precalcTrigIdentitiesPart5Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# ✖️ Trigonometric Identities — Double-Angle & Half-Angle Formulas

**Part 5 of 7**

**Double-angle** formulas express $\\sin 2\\theta$, $\\cos 2\\theta$, and $\\tan 2\\theta$ in terms of functions of $\\theta$. **Half-angle** formulas go the other direction: expressing $\\sin\\frac{\\theta}{2}$, etc., in terms of $\\cos\\theta$.

### Double-Angle Identities

$$\\boxed{\\sin 2\\theta = 2\\sin\\theta\\cos\\theta}$$

$$\\boxed{\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta}$$

$$\\boxed{\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}}$$

> **Why three forms for $\\cos 2\\theta$?** Each is best in different situations:

| Form | Best when you know … |
|:-----|:--------------------|
| $\\cos^2\\theta - \\sin^2\\theta$ | Both $\\sin\\theta$ and $\\cos\\theta$ |
| $2\\cos^2\\theta - 1$ | Only $\\cos\\theta$ |
| $1 - 2\\sin^2\\theta$ | Only $\\sin\\theta$ |

### Half-Angle Identities

$$\\boxed{\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}} \\qquad \\boxed{\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}}$$

$$\\boxed{\\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}}$$

> The $\\pm$ depends on the quadrant of $\\frac{\\theta}{2}$, not of $\\theta$!
      `
    },
    {
      id: 'p5-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: Given $\\sin\\theta = \\frac{3}{5}$ with $\\theta$ in QI, find $\\sin 2\\theta$

Since $\\sin\\theta = 3/5$ and QI: $\\cos\\theta = 4/5$.

$$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$$

### Example 2: Find $\\cos 2\\theta$ given $\\cos\\theta = -\\frac{1}{3}$

Use the form that only needs $\\cos\\theta$:

$$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2\\left(\\frac{1}{9}\\right) - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$$

### Example 3: Find the exact value of $\\sin 15°$ using the half-angle formula

$15° = \\frac{30°}{2}$, so $\\theta = 30°$ and $\\cos 30° = \\frac{\\sqrt{3}}{2}$.

$$\\sin 15° = +\\sqrt{\\frac{1 - \\frac{\\sqrt{3}}{2}}{2}} = \\sqrt{\\frac{2 - \\sqrt{3}}{4}} = \\frac{\\sqrt{2 - \\sqrt{3}}}{2}$$

($+$ because $15°$ is in QI)

### Example 4: Power-Reduction Formula

The $\\cos 2\\theta$ identity rearranges to eliminate squares:

$$\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2} \\qquad \\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$$

These are essential for calculus integration of $\\sin^2 x$ and $\\cos^2 x$.
      `
    },
    {
      id: 'p5-derivation',
      type: 'text' as const,
      content: `
## 🔗 Where Double-Angle Comes From

Double-angle formulas are just the **sum formulas** with $B = A$:

$$\\sin(A + A) = \\sin A\\cos A + \\cos A\\sin A = 2\\sin A\\cos A$$

$$\\cos(A + A) = \\cos A\\cos A - \\sin A\\sin A = \\cos^2 A - \\sin^2 A$$

### Decision Flowchart

| I see … | I should … |
|:--------|:-----------|
| $\\sin\\theta\\cos\\theta$ | Use $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ |
| $\\cos^2\\theta$ or $\\sin^2\\theta$ alone | Use power-reduction to lower the degree |
| $\\cos^2\\theta - \\sin^2\\theta$ | Recognize as $\\cos 2\\theta$ |
| $\\sin(\\theta/2)$ or $\\cos(\\theta/2)$ | Use half-angle with correct $\\pm$ sign |
| $1 \\pm \\cos\\theta$ in a numerator | Likely a half-angle setup |
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which form of $\\cos 2\\theta$ should you use if you only know $\\sin\\theta$?',
            options: [
              '$\\cos^2\\theta - \\sin^2\\theta$',
              '$2\\cos^2\\theta - 1$',
              '$1 - 2\\sin^2\\theta$',
              '$\\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}$'
            ],
            correctAnswer: 2,
            explanation: '$1 - 2\\sin^2\\theta$ uses only $\\sin\\theta$, so it is the best choice when $\\cos\\theta$ is unknown.'
          },
          {
            question: 'The power-reduction identity $\\cos^2\\theta$ equals:',
            options: [
              '$\\frac{1 - \\cos 2\\theta}{2}$',
              '$\\frac{1 + \\cos 2\\theta}{2}$',
              '$\\frac{\\cos 2\\theta - 1}{2}$',
              '$\\frac{1 + \\sin 2\\theta}{2}$'
            ],
            correctAnswer: 1,
            explanation: 'From $\\cos 2\\theta = 2\\cos^2\\theta - 1$, solve for $\\cos^2\\theta$: $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$.'
          },
          {
            question: 'In the half-angle formula $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$, the sign is determined by:',
            options: [
              'The sign of $\\cos\\theta$',
              'The quadrant of $\\theta$',
              'The quadrant of $\\frac{\\theta}{2}$',
              'It is always positive'
            ],
            correctAnswer: 2,
            explanation: 'The $\\pm$ depends on the quadrant of the half-angle $\\frac{\\theta}{2}$, not the original angle $\\theta$.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Double-Angle Computation** 🧮

**1)** If $\\sin\\theta = \\frac{5}{13}$ and $\\cos\\theta = \\frac{12}{13}$, find $\\sin 2\\theta$. Write as a fraction. (e.g., if $\\sin\\theta = 3/5, \\cos\\theta = 4/5$, then $\\sin 2\\theta = 2(3/5)(4/5) = 24/25$)

**2)** Find $\\cos 2\\theta$ if $\\sin\\theta = \\frac{1}{4}$. Write as a fraction. (e.g., $\\cos 2\\theta = 1 - 2(3/5)^2 = 1 - 18/25 = 7/25$)

**3)** If $\\cos\\theta = \\frac{3}{5}$ and $\\sin\\theta = \\frac{4}{5}$, find $\\tan 2\\theta$. Write as a fraction. (e.g., with $\\tan\\theta = 1$, $\\tan 2\\theta = \\frac{2(1)}{1-1^2}$ is undefined)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120/169', '7/8', '-24/7'],
        hint1: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{5}{13} \\cdot \\frac{12}{13}$.',
        hint2: 'Use $\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2(1/4)^2 = 1 - 2/16 = 1 - 1/8$.',
        hint3: '$\\tan\\theta = \\frac{4/5}{3/5} = \\frac{4}{3}$. Then $\\tan 2\\theta = \\frac{2(4/3)}{1 - (4/3)^2} = \\frac{8/3}{1 - 16/9} = \\frac{8/3}{-7/9}$.',
        explanation: '1) $2(5/13)(12/13) = 120/169$. 2) $1 - 2(1/16) = 1 - 1/8 = 7/8$. 3) $\\tan\\theta = 4/3$, so $\\frac{8/3}{-7/9} = \\frac{8}{3} \\cdot \\frac{-9}{7} = -24/7$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Formula Recognition** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$2\\sin\\theta\\cos\\theta$ is the double-angle formula for',
            options: ['$\\sin 2\\theta$', '$\\cos 2\\theta$', '$\\tan 2\\theta$', '$\\sin\\theta$']
          },
          {
            label: '$\\cos^2\\theta - \\sin^2\\theta$ is equivalent to',
            options: ['$\\sin 2\\theta$', '$\\cos 2\\theta$', '$\\tan 2\\theta$', '$1$']
          },
          {
            label: 'The power-reduction for $\\sin^2\\theta$ is',
            options: ['$\\frac{1+\\cos 2\\theta}{2}$', '$\\frac{1-\\cos 2\\theta}{2}$', '$\\frac{\\sin 2\\theta}{2}$', '$1 - \\cos\\theta$']
          },
          {
            label: 'To determine the $\\pm$ sign in a half-angle formula, check the quadrant of',
            options: ['$\\theta$', '$2\\theta$', '$\\theta/2$', '$\\pi - \\theta$']
          }
        ],
        correctAnswers: ['$\\sin 2\\theta$', '$\\cos 2\\theta$', '$\\frac{1-\\cos 2\\theta}{2}$', '$\\theta/2$'],
        hint1: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ by definition.',
        hint2: 'All three forms of $\\cos 2\\theta$ are equivalent; this one uses both sin and cos.',
        hint3: '$\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ (the minus goes with sine).',
        explanation: '$2\\sin\\theta\\cos\\theta = \\sin 2\\theta$. $\\cos^2\\theta - \\sin^2\\theta = \\cos 2\\theta$. $\\sin^2\\theta = (1-\\cos 2\\theta)/2$. Half-angle sign depends on the quadrant of $\\theta/2$.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\cos\\theta = -\\frac{3}{5}$ with $\\theta$ in QII, then $\\cos 2\\theta$ equals:',
            options: [
              '$-\\frac{7}{25}$',
              '$\\frac{7}{25}$',
              '$-\\frac{18}{25}$',
              '$\\frac{18}{25}$'
            ],
            correctAnswer: 0,
            explanation: '$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2(9/25) - 1 = 18/25 - 1 = -7/25$.'
          },
          {
            question: 'Simplify: $\\frac{\\sin 2\\theta}{2\\cos\\theta}$',
            options: [
              '$\\cos\\theta$',
              '$\\sin\\theta$',
              '$\\tan\\theta$',
              '$2\\sin\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{\\sin 2\\theta}{2\\cos\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{2\\cos\\theta} = \\sin\\theta$.'
          }
        ]
      }
    }
  ]
};
