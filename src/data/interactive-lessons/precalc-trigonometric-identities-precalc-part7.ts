export const precalcTrigIdentitiesPart7Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🧩 Trigonometric Identities — Full Synthesis

**Part 7 of 7**

This final part combines **every identity type** from Parts 1–6 into mixed problems. The challenge: recognizing which equivalent form to use and when.

### Complete Identity Reference

| Category | Key Formulas |
|:---------|:------------|
| **Pythagorean** | $\\sin^2\\theta + \\cos^2\\theta = 1$, $1 + \\tan^2\\theta = \\sec^2\\theta$, $1 + \\cot^2\\theta = \\csc^2\\theta$ |
| **Reciprocal** | $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$ |
| **Quotient** | $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ |
| **Even-Odd** | $\\cos(-\\theta) = \\cos\\theta$, $\\sin(-\\theta) = -\\sin\\theta$, $\\tan(-\\theta) = -\\tan\\theta$ |
| **Cofunction** | $\\sin\\theta = \\cos(\\frac{\\pi}{2}-\\theta)$, $\\cos\\theta = \\sin(\\frac{\\pi}{2}-\\theta)$ |
| **Sum/Difference** | $\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$, $\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$ |
| **Double-Angle** | $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$ |
| **$\\cos 2\\theta$ solved for a square** | $\\sin^2\\theta = \\frac{1-\\cos 2\\theta}{2}$, $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$ |
      `
    },
    {
      id: 'p7-decision',
      type: 'text' as const,
      content: `
## 🗺️ Identity Selection Flowchart

### What Do I See? → What Do I Use?

| Pattern in Expression | Identity to Apply |
|:---------------------|:-----------------|
| $\\sin^2$ or $\\cos^2$ alone | Pythagorean → replace with $1 - \\text{other}^2$ |
| $\\sec, \\csc, \\tan, \\cot$ mixed | Reciprocal/Quotient → convert to sin/cos |
| Negative angle $(-\\theta)$ | Even-odd |
| $\\frac{\\pi}{2} - \\theta$ | Cofunction |
| Non-standard angle ($\\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{7\\pi}{12}$…) | Sum/Difference identities |
| $\\sin\\theta\\cos\\theta$ product | Double-angle: $= \\frac{1}{2}\\sin 2\\theta$ |
| $\\cos^2\\theta - \\sin^2\\theta$ | Recognize $= \\cos 2\\theta$ |
| $\\sin^2 x$ or $\\cos^2 x$ as a graph | Solve the $\\cos 2x$ identity for the square: a sinusoid of period $\\pi$ |
| An equation mixing $2x$ with $x$, or $\\sin^2$ with $\\cos$ | Rewrite in one function of one angle, then factor and solve |
| Showing two expressions are equivalent | Rewrite one side until it matches the other |

### Multi-Step Strategy

1. **Scan** — Identify the identity types present
2. **Convert** — Rewrite everything in sin/cos if mixed functions appear
3. **Combine** — Get a single fraction if multiple terms
4. **Substitute** — Apply Pythagorean, double-angle, etc.
5. **Simplify** — Cancel and reduce (or factor and solve, for an equation)
      `
    },
    {
      id: 'p7-examples',
      type: 'text' as const,
      content: `
## 📝 Mixed Worked Examples

### Example 1: Simplify $\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta}$

Use double-angle expansions:
- Numerator: $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$
- Denominator: $1 + \\cos 2\\theta = 1 + (2\\cos^2\\theta - 1) = 2\\cos^2\\theta$

$$\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$$

### Example 2: Find $\\sin \\frac{5\\pi}{12}\\cos \\frac{\\pi}{12} + \\cos \\frac{5\\pi}{12}\\sin \\frac{\\pi}{12}$

Recognize the sum pattern: $\\sin A\\cos B + \\cos A\\sin B = \\sin(A + B)$

$$= \\sin(\\frac{5\\pi}{12} + \\frac{\\pi}{12}) = \\sin \\frac{\\pi}{2} = 1$$

### Example 3: Simplify $\\frac{\\sec(-\\theta)}{\\csc(\\frac{\\pi}{2} - \\theta)}$

Apply even-odd: $\\sec(-\\theta) = \\sec\\theta$ (even).

Apply cofunction: $\\csc(\\frac{\\pi}{2} - \\theta) = \\sec\\theta$.

$$\\frac{\\sec\\theta}{\\sec\\theta} = 1$$

### Example 4: Show that $\\frac{\\sin 2\\theta}{\\sin\\theta} - \\frac{\\cos 2\\theta}{\\cos\\theta}$ is equivalent to $\\sec\\theta$

Rewrite the left side:

$$\\frac{2\\sin\\theta\\cos\\theta}{\\sin\\theta} - \\frac{1 - 2\\sin^2\\theta}{\\cos\\theta} = 2\\cos\\theta - \\frac{1 - 2\\sin^2\\theta}{\\cos\\theta}$$

$$= \\frac{2\\cos^2\\theta - 1 + 2\\sin^2\\theta}{\\cos\\theta} = \\frac{2(\\cos^2\\theta + \\sin^2\\theta) - 1}{\\cos\\theta} = \\frac{2 - 1}{\\cos\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta \\;\\checkmark$$

### Example 5: Solve $2\\sin^2 x = 1 + \\cos x$ on $[0, 2\\pi)$

$2(1 - \\cos^2 x) = 1 + \\cos x \\implies 2\\cos^2 x + \\cos x - 1 = 0 \\implies (2\\cos x - 1)(\\cos x + 1) = 0$, so $\\cos x = \\frac{1}{2}$ or $\\cos x = -1$:

$$x = \\frac{\\pi}{3},\\ \\pi,\\ \\frac{5\\pi}{3}$$
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Mixed Identity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\cos \\frac{\\pi}{9}\\cos \\frac{2\\pi}{9} - \\sin \\frac{\\pi}{9}\\sin \\frac{2\\pi}{9}$ equals:',
            options: [
              '$\\cos \\frac{\\pi}{3}$',
              '$\\cos(-\\frac{\\pi}{9})$',
              '$\\sin \\frac{\\pi}{3}$',
              '$\\sin(-\\frac{\\pi}{9})$'
            ],
            correctAnswer: 0,
            explanation: 'This matches $\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ with $A=\\frac{\\pi}{9}, B=\\frac{2\\pi}{9}$. So $\\cos(\\frac{\\pi}{9}+\\frac{2\\pi}{9}) = \\cos \\frac{\\pi}{3} = \\frac{1}{2}$.'
          },
          {
            question: 'Simplify: $\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta}$',
            options: [
              '$\\cot^2\\theta$',
              '$\\tan\\theta$',
              '$\\sin^2\\theta$',
              '$2\\tan\\theta$'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1 - (1 - 2\\sin^2\\theta)}{2\\sin\\theta\\cos\\theta} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.'
          },
          {
            question: 'If $\\sin\\alpha = \\frac{3}{5}$ (QI) and $\\cos\\beta = \\frac{5}{13}$ (QI), then $\\cos(\\alpha - \\beta)$ equals:',
            options: [
              '$\\frac{56}{65}$',
              '$\\frac{63}{65}$',
              '$\\frac{33}{65}$',
              '$\\frac{16}{65}$'
            ],
            correctAnswer: 0,
            explanation: '$\\cos\\alpha = 4/5$, $\\sin\\beta = 12/13$ (QI). $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta = \\frac{4}{5}\\cdot\\frac{5}{13} + \\frac{3}{5}\\cdot\\frac{12}{13} = \\frac{20}{65} + \\frac{36}{65} = \\frac{56}{65}$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Cross-Topic Computation** 🧮
      `,
      exercise: {
        questions: [
          {
            question: '**1)** $\\cos^2 \\frac{\\pi}{12} + \\sin^2 \\frac{\\pi}{12}$ = ? Write as an integer. (e.g., $\\cos^2 1.3 + \\sin^2 1.3 = 1$ by the Pythagorean identity)',
            answer: '1',
          },
          {
            question: '**2)** Simplify $\\frac{\\sin 2\\theta}{2\\sin\\theta}$ to a single trig function. Type its name (\`sin\`, \`cos\`, \`tan\`, …). (e.g., $\\frac{\\sin 2\\theta}{2\\cos\\theta}$ expands the same way and simplifies to $\\sin\\theta$)',
            answer: 'cos',
            acceptableAnswers: ['cosθ', 'cos(θ)', 'costheta', 'cos(theta)', 'cosx', 'cos(x)', 'cosine'],
          },
          {
            question: '**3)** $\\sin(-\\frac{\\pi}{6})\\sec(-\\frac{\\pi}{6})$ = ? Enter the exact value (e.g., \`-sqrt(2)/2\`). (e.g., $\\cos(-\\frac{\\pi}{4})\\csc(-\\frac{\\pi}{4}) = \\cos\\frac{\\pi}{4}\\cdot(-\\csc\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}\\cdot(-\\sqrt{2}) = -1$)',
            answer: '-sqrt(3)/3',
            acceptableAnswers: ['-1/sqrt(3)', '-√3/3', '-1/√3', '-sqrt3/3'],
          },
        ],
        hint1: 'This is the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$ — works for any angle.',
        hint2: '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, so $\\frac{2\\sin\\theta\\cos\\theta}{2\\sin\\theta} = ?$',
        hint3: '$\\sin(-\\frac{\\pi}{6}) = -\\sin \\frac{\\pi}{6} = -1/2$ (odd). $\\sec(-\\frac{\\pi}{6}) = \\sec \\frac{\\pi}{6} = \\frac{2}{\\sqrt{3}}$ (even). Multiply them.',
        explanation: '1) $\\cos^2\\theta + \\sin^2\\theta = 1$ always. 2) $\\frac{2\\sin\\theta\\cos\\theta}{2\\sin\\theta} = \\cos\\theta$. 3) $(-1/2)(2/\\sqrt{3}) = -1/\\sqrt{3} = -\\sqrt{3}/3$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identity Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To simplify $\\sin\\theta\\cos\\theta$, rewrite using',
            options: ['Pythagorean identity', 'Double-angle: $\\frac{1}{2}\\sin 2\\theta$', 'Sum formula', 'Even-odd identity']
          },
          {
            label: 'To find the exact value of $\\cos \\frac{\\pi}{12}$, use',
            options: ['Pythagorean identity', 'Double-angle formula', 'Sum/Difference formula', 'Cofunction identity']
          },
          {
            label: '$\\cos(-\\theta)\\csc(-\\theta)$ simplifies using',
            options: ['Sum formulas', 'Even-odd identities', 'Double-angle formulas', 'Cofunction identities']
          },
          {
            label: 'To solve $\\cos 2x = 3\\cos x - 2$, first rewrite $\\cos 2x$ as',
            options: ['$2\\cos^2 x - 1$', '$1 - 2\\sin^2 x$', '$2\\sin x\\cos x$', '$\\cos^2 x + \\sin^2 x$']
          }
        ],
        correctAnswers: ['Double-angle: $\\frac{1}{2}\\sin 2\\theta$', 'Sum/Difference formula', 'Even-odd identities', '$2\\cos^2 x - 1$'],
        hint1: '$\\sin\\theta\\cos\\theta = \\frac{1}{2}(2\\sin\\theta\\cos\\theta) = \\frac{1}{2}\\sin 2\\theta$.',
        hint2: '$\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}$, so use the difference formula for cosine.',
        hint3: 'Cosine is even, cosecant is odd — determine the signs first. For the equation, the other terms contain only $\\cos x$.',
        explanation: '$\\sin\\theta\\cos\\theta \\to$ double-angle. $\\cos \\frac{\\pi}{12} \\to$ difference formula. Negative angles $\\to$ even-odd. $2\\cos^2 x - 1 = 3\\cos x - 2$ becomes $2\\cos^2 x - 3\\cos x + 1 = 0$, a quadratic in $\\cos x$ (solutions $x = 0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}$).'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\frac{1 - \\cos 2\\theta}{2\\sin\\theta}$',
            options: [
              '$\\sin\\theta$',
              '$\\cos\\theta$',
              '$\\tan\\theta$',
              '$\\sin^2\\theta$'
            ],
            correctAnswer: 0,
            explanation: 'Solve the double-angle identity for the square: $1 - \\cos 2\\theta = 2\\sin^2\\theta$, so the quotient is $\\frac{2\\sin^2\\theta}{2\\sin\\theta} = \\sin\\theta$. $\\sin^2\\theta$ forgets to cancel one factor, and the cosine form belongs to $1 + \\cos 2\\theta$.'
          },
          {
            question: 'Which sequence of identities simplifies $\\frac{\\sec(-\\theta)\\sin 2\\theta}{2}$?',
            options: [
              'Even-odd → double-angle → cancel',
              'Sum formula → Pythagorean → reciprocal',
              'Cofunction → Pythagorean → quotient',
              'Double-angle → cofunction → even-odd'
            ],
            correctAnswer: 0,
            explanation: '$\\sec(-\\theta) = \\sec\\theta$ (even-odd). $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ (double-angle). So $\\frac{\\sec\\theta \\cdot 2\\sin\\theta\\cos\\theta}{2} = \\frac{1}{\\cos\\theta} \\cdot \\sin\\theta\\cos\\theta = \\sin\\theta$.'
          }
        ]
      }
    }
  ]
};
