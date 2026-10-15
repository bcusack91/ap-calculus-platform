export const precalcTrigIdentitiesPart5Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# ✖️ Trigonometric Identities — Double-Angle Formulas

**Part 5 of 7 — Double-Angle Identities**

**Double-angle** identities express $\\sin 2\\theta$ and $\\cos 2\\theta$ in terms of $\\sin\\theta$ and $\\cos\\theta$. They let you evaluate, simplify, and solve when an expression mixes $2\\theta$ with $\\theta$.

### Double-Angle Identities

$$\\boxed{\\sin 2\\theta = 2\\sin\\theta\\cos\\theta}$$

$$\\boxed{\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta}$$

> **Why three forms for $\\cos 2\\theta$?** Each is best in different situations:

| Form | Best when you know … |
|:-----|:--------------------|
| $\\cos^2\\theta - \\sin^2\\theta$ | Both $\\sin\\theta$ and $\\cos\\theta$ |
| $2\\cos^2\\theta - 1$ | Only $\\cos\\theta$ |
| $1 - 2\\sin^2\\theta$ | Only $\\sin\\theta$ |

> Half-angle identities and the tangent double-angle identity are not assessed on the AP Precalculus exam.
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

### Example 3: Solve $\\sin 2\\theta = \\sin\\theta$ on $[0, 2\\pi)$

Rewrite so every term uses the same angle, then factor. Never divide by $\\sin\\theta$, because that loses the solutions where $\\sin\\theta = 0$.

$$2\\sin\\theta\\cos\\theta - \\sin\\theta = 0 \\implies \\sin\\theta\\,(2\\cos\\theta - 1) = 0$$

- $\\sin\\theta = 0$: $\\theta = 0, \\pi$
- $\\cos\\theta = \\frac{1}{2}$: $\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$

**Solutions:** $\\theta = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$

### Example 4: Rewriting $\\sin^2 x$ as a sinusoid

Solve $\\cos 2x = 1 - 2\\sin^2 x$ for $\\sin^2 x$:

$$\\sin^2 x = \\frac{1 - \\cos 2x}{2} = \\frac{1}{2} - \\frac{1}{2}\\cos 2x$$

This equivalent form shows that $y = \\sin^2 x$ is a sinusoid with midline $y = \\frac{1}{2}$, amplitude $\\frac{1}{2}$, and period $\\pi$. In the same way, $\\cos^2 x = \\frac{1}{2} + \\frac{1}{2}\\cos 2x$.
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
| $\\sin\\theta\\cos\\theta$ | Use $\\sin\\theta\\cos\\theta = \\frac{1}{2}\\sin 2\\theta$ |
| $\\cos^2\\theta$ or $\\sin^2\\theta$ alone | Rearrange a $\\cos 2\\theta$ form to remove the square |
| $\\cos^2\\theta - \\sin^2\\theta$, $2\\cos^2\\theta - 1$, or $1 - 2\\sin^2\\theta$ | Recognize as $\\cos 2\\theta$ |
| Equation with $\\sin 2\\theta$ and $\\sin\\theta$ or $\\cos\\theta$ | Expand $\\sin 2\\theta$, move everything to one side, factor |
| Equation with $\\cos 2\\theta$ and $\\sin\\theta$ | Use $1 - 2\\sin^2\\theta$ to get a quadratic in $\\sin\\theta$ |
| Equation with $\\cos 2\\theta$ and $\\cos\\theta$ | Use $2\\cos^2\\theta - 1$ to get a quadratic in $\\cos\\theta$ |
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
              '$1 - 2\\cos^2\\theta$'
            ],
            correctAnswer: 2,
            explanation: '$1 - 2\\sin^2\\theta$ uses only $\\sin\\theta$, so it is the best choice when $\\cos\\theta$ is unknown.'
          },
          {
            question: 'Solving $\\cos 2\\theta = 2\\cos^2\\theta - 1$ for $\\cos^2\\theta$ gives:',
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
            question: 'To solve $\\cos 2\\theta + \\sin\\theta = 0$, which replacement for $\\cos 2\\theta$ produces a quadratic in $\\sin\\theta$?',
            options: [
              '$2\\cos^2\\theta - 1$',
              '$\\cos^2\\theta - \\sin^2\\theta$',
              '$1 - 2\\sin^2\\theta$',
              '$2\\sin\\theta\\cos\\theta$'
            ],
            correctAnswer: 2,
            explanation: 'Replacing $\\cos 2\\theta$ with $1 - 2\\sin^2\\theta$ gives $-2\\sin^2\\theta + \\sin\\theta + 1 = 0$, an equation in $\\sin\\theta$ alone. The other forms leave a cosine in the equation or are not equal to $\\cos 2\\theta$.'
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

**3)** If $\\cos\\theta = \\frac{3}{5}$ and $\\sin\\theta = \\frac{4}{5}$, find $\\cos 2\\theta$. Write as a fraction. (e.g., with $\\cos\\theta = \\frac{12}{13}$ and $\\sin\\theta = \\frac{5}{13}$, $\\cos 2\\theta = \\frac{144}{169} - \\frac{25}{169} = \\frac{119}{169}$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120/169', '7/8', '-7/25'],
        hint1: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\cdot \\frac{5}{13} \\cdot \\frac{12}{13}$.',
        hint2: 'Use $\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2(1/4)^2 = 1 - 2/16 = 1 - 1/8$.',
        hint3: 'You know both values, so use $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = \\frac{9}{25} - \\frac{16}{25}$.',
        explanation: '1) $2(5/13)(12/13) = 120/169$. 2) $1 - 2(1/16) = 1 - 1/8 = 7/8$. 3) $\\frac{9}{25} - \\frac{16}{25} = -\\frac{7}{25}$.'
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
            options: ['$\\sin 2\\theta$', '$\\cos 2\\theta$', '$2\\sin\\theta$', '$\\sin\\theta$']
          },
          {
            label: '$\\cos^2\\theta - \\sin^2\\theta$ is equivalent to',
            options: ['$\\sin 2\\theta$', '$\\cos 2\\theta$', '$2\\cos\\theta$', '$1$']
          },
          {
            label: 'Solving $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ for $\\sin^2\\theta$ gives',
            options: ['$\\frac{1+\\cos 2\\theta}{2}$', '$\\frac{1-\\cos 2\\theta}{2}$', '$\\frac{\\sin 2\\theta}{2}$', '$1 - \\cos\\theta$']
          },
          {
            label: 'On $[0, 2\\pi)$, the equation $\\sin 2\\theta = \\sin\\theta$ has this many solutions:',
            options: ['$2$', '$3$', '$4$', '$6$']
          }
        ],
        correctAnswers: ['$\\sin 2\\theta$', '$\\cos 2\\theta$', '$\\frac{1-\\cos 2\\theta}{2}$', '$4$'],
        hint1: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ by definition.',
        hint2: 'All three forms of $\\cos 2\\theta$ are equivalent; this one uses both sin and cos.',
        hint3: '$\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ (the minus goes with sine).',
        explanation: '$2\\sin\\theta\\cos\\theta = \\sin 2\\theta$. $\\cos^2\\theta - \\sin^2\\theta = \\cos 2\\theta$. $\\sin^2\\theta = (1-\\cos 2\\theta)/2$. $\\sin\\theta(2\\cos\\theta - 1) = 0$ gives $0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$: four solutions.'
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
